import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { randomBytes, randomUUID } from 'node:crypto';
import { mapSearch, mapDetails, mapLyrics } from './qq-music-codec.js';
import { providerError, validateQqAudioUrl } from './qq-music-provider.js';
import { classifyQqMusicError, terminalQrResult } from './qq-music-errors.js';
import { safeLoginDetails } from './qq-music-login.js';
import { createQqAuthTransport, reconnectQqWebSocket } from './qq-music-network.js';
import { mapLibraryPlaylists, mapLibrarySongs } from './qq-music-library-codec.js';

// Never import the package root/app.js: those start servers and disk persistence.
const require = createRequire(import.meta.url);
const meta = require('@yakult-green-tea/qq-music-api/package.json');
if (meta.version !== '3.3.5') throw providerError('UPSTREAM_UNAVAILABLE');
const root = dirname(require.resolve('@yakult-green-tea/qq-music-api/package.json'));
const sdkRequire = createRequire(join(root, 'package.json'));
const native = file => require(join(root, 'dist/src', file));
const qrApi = native('services/auth/qrLogin.js');
const { createMemoryDeviceContextRepository } = native('services/auth/deviceContextStore.js');
const createAuthHttpClient = native('services/auth/httpClient.js').default;
const axios = sdkRequire('axios');
const createHttp = () => createAuthHttpClient(createQqAuthTransport(axios.create({ timeout: 9_000, maxRedirects: 0 })));
const qrRepository = qrApi.createMemoryQrSessionRepository();
const CHECK_BUDGET_MS = 15_000;
const service = qrApi.createQrLoginService({
  http: createHttp(), createSessionHttp: createHttp, randomBytes,
  deviceRepository: createMemoryDeviceContextRepository(),
  authSessionRepository: qrApi.createMemoryAuthSessionRepository(),
  qrSessionRepository: qrRepository,
  // Phone QQ uses the SDK's native web OAuth exchange, not the failing
  // Android/MQTT exchange and its intermediate-cookie validation fallback.
  drivers: { qq: native('services/auth/qrDrivers.js').createPtloginQrDriver() },
  listen: qrApi.createMqttListenOver(reconnectQqWebSocket(qrApi.webSocketConnect(sdkRequire('ws')))), checkBudgetMs: CHECK_BUDGET_MS,
});
native('services/httpTransport.js').setLegacyHttpTransport(native('transport/fetchLegacyTransport.js').createFetchLegacyTransport({ budgetMs: 8_000 }));
const { getSearch } = native('routes/operations/searchCatalog.js');
const { getSongInfo } = native('routes/operations/getSongInfo.js');
const { getLyricOperation } = native('routes/operations/getLyric.js');
const { getMusicPlay } = native('routes/operations/getMusicPlay.js');
const { getUserPlaylist } = native('routes/operations/getUserPlaylist.js');
const { getUserLikedSongs } = native('routes/operations/getUserLikedSongs.js');
const { getOwnedPlaylistSongs } = native('routes/operations/getOwnedPlaylistSongs.js');
const { tokenFromCookieString } = native('routes/sessionToken.js');
let token; let qr; let authBusy = false; let epoch = 0; let expiryTimer; let checkFlight;
function accountState() { return token ? 'authenticated' : qr?.state === 'scanned' ? 'scanned' : qr?.state === 'waiting' ? 'waiting' : 'signed_out'; }
function request(params) { return { runtime: 'node', params: {}, query: name => params[name], queryRaw: name => params[name], token, service: async () => service }; }
function cancelQr() { clearTimeout(expiryTimer); expiryTimer = undefined; if (qr) service.cancelSession(qr.key); qr = undefined; }
function mid(value) { if (typeof value !== 'string' || !/^[A-Za-z0-9_-]{1,200}$/.test(value)) throw providerError('INVALID_REQUEST'); return value; }
function publicQr(value) { return { loginId: value.loginId, state: value.state, channel: value.channel, expiresAt: value.expiresAt, retryAfterMs: 1_500, ...(value.channel === 'qq' ? { authFlow: 'qq-web-oauth-v1' } : {}) }; }
async function catalog(run, map) {
  // One bounded retry for read-only transient failures; never retry login or permissions.
  for (let attempt = 0; attempt < 2; attempt++) {
    let result;
    try { result = await run(); } catch (error) {
      if (attempt || !['ECONNRESET', 'ETIMEDOUT', 'UND_ERR_SOCKET'].includes(error?.code ?? error?.cause?.code)) throw error;
      await new Promise(resolve => setTimeout(resolve, 750)); continue;
    }
    if (!attempt && [500, 502, 503, 504].includes(result?.status)) { await new Promise(resolve => setTimeout(resolve, 750)); continue; }
    return map(result);
  }
  throw providerError('UPSTREAM_UNAVAILABLE');
}
async function operate(op, args) {
  if (op.startsWith('library.')) {
    if (!token) throw providerError('AUTH_REQUIRED');
    const readToken = token;
    const { offset = 0, limit = 20, id = '', dirId = '' } = args;
    if (!Number.isSafeInteger(offset) || offset < 0 || offset > 100_000 || !Number.isSafeInteger(limit) || limit < 1 || limit > 50) throw providerError('INVALID_REQUEST');
    const validId = value => typeof value === 'string' && /^\d{1,16}$/.test(value) && Number.isSafeInteger(Number(value)) && Number(value) > 0;
    try {
      if (op === 'library.playlists') return mapLibraryPlaylists(await getUserPlaylist(request({ favoriteOffset: String(offset) })));
      if (op === 'library.liked') return mapLibrarySongs(await getUserLikedSongs(request({ offset: String(offset), limit: String(limit) })));
      if (op === 'library.tracks') {
        if ((!validId(id) && !validId(dirId)) || (id !== '' && !validId(id)) || (dirId !== '' && !validId(dirId))) throw providerError('INVALID_REQUEST');
        return mapLibrarySongs(await getOwnedPlaylistSongs(request({ tid: id, dirid: id ? '' : dirId, offset: String(offset), limit: String(limit) })));
      }
      throw providerError('INVALID_REQUEST');
    } catch (error) {
      if (error?.httpStatus === 401 || error?.code === 'AUTH_REQUIRED') { if (token === readToken) token = undefined; throw providerError('AUTH_REQUIRED'); }
      throw error;
    }
  }
  if (op === 'search') {
    if (typeof args.query !== 'string' || !args.query.trim() || args.query.length > 60 || !Number.isInteger(args.limit) || args.limit < 1 || args.limit > 20 || !Number.isInteger(args.page) || args.page < 1) throw providerError('INVALID_QUERY');
    return catalog(() => getSearch(request({ keyword: args.query, type: 'song', page: String(args.page), limit: String(args.limit) })), mapSearch);
  }
  if (op === 'details') return catalog(() => getSongInfo(request({ songmid: mid(args.songMid) })), mapDetails);
  if (op === 'lyrics') return catalog(() => getLyricOperation(request({ songmid: mid(args.songMid), isFormat: '0' })), mapLyrics);
  if (op === 'playback') {
    if (!token) throw providerError('AUTH_REQUIRED');
    const songMid = mid(args.songMid);
    const result = await getMusicPlay(request({ songmid: songMid, quality: '128' }));
    if (result.status === 401) { token = undefined; throw providerError('AUTH_REQUIRED'); }
    if (result.status !== 200) throw providerError('UPSTREAM_UNAVAILABLE');
    const entry = result.body?.data?.playUrl?.[songMid];
    if (!entry?.url || entry.preview === true || entry.error) throw providerError('UNPLAYABLE');
    return { url: validateQqAudioUrl(entry.url), mimeType: 'audio/mpeg' };
  }
  if (op === 'qr.create') {
    if (authBusy || token) throw providerError('CONFLICT');
    if (!['qq', 'wechat', 'qqmusic'].includes(args.channel)) throw providerError('INVALID_REQUEST');
    if (qr && qr.expiresAt > Date.now()) {
      if (qr.channel !== args.channel) throw providerError('CONFLICT');
      return { ...publicQr(qr), image: qr.image };
    }
    authBusy = true; const generation = ++epoch; cancelQr(); let key;
    try {
      key = await service.createSession(args.channel);
      const image = await service.createQr(key);
      if (generation !== epoch) { service.cancelSession(key); throw providerError('ABORTED'); }
      if (typeof image !== 'string' || image.length > 500_000 || !/^data:image\/(png|jpeg|gif);base64,[A-Za-z0-9+/=]+$/.test(image)) { service.cancelSession(key); throw providerError('UPSTREAM_UNAVAILABLE'); }
      const expiresAt = qrRepository.load().find(item => item.key === key)?.expiresAt;
      if (!Number.isSafeInteger(expiresAt) || expiresAt <= Date.now()) throw providerError('LOGIN_FAILED');
      qr = { key, loginId: randomUUID(), state: 'waiting', channel: args.channel, expiresAt, image };
      // Allow the SDK's terminal result and cooldown to reach a final poll.
      expiryTimer = setTimeout(() => { ++epoch; cancelQr(); }, Math.max(1, expiresAt - Date.now()) + 30_000);
      return { ...publicQr(qr), image };
    } catch (error) { if (key) service.cancelSession(key); throw error; } finally { authBusy = false; }
  }
  if (op === 'qr.cancel') {
    if (qr && args.loginId === qr.loginId && !token) { ++epoch; cancelQr(); }
    return { state: token ? 'authenticated' : 'cancelled' };
  }
  if (op === 'qr.check') {
    if (!qr || args.loginId !== qr.loginId) return { state: 'expired' };
    if (token) return { ...publicQr(qr), state: 'authenticated' };
    if (checkFlight) return checkFlight;
    const target = qr; const generation = epoch;
    checkFlight = (async () => {
      const result = await service.checkQr(target.key, CHECK_BUDGET_MS);
      if (generation !== epoch || qr !== target) {
        const stale = typeof result.cookie === 'string' ? tokenFromCookieString(result.cookie) : undefined;
        if (stale) await service.logout(stale);
        return { state: 'cancelled' };
      }
      if (result.code === 803) {
        token = typeof result.cookie === 'string' ? tokenFromCookieString(result.cookie) : undefined;
        if (!token) throw providerError('UPSTREAM_UNAVAILABLE');
        clearTimeout(expiryTimer); qr.state = 'authenticated';
      } else if (result.code === 802) qr.state = 'scanned';
      else if (result.code === 801) qr.state = 'waiting';
      else { cancelQr(); return terminalQrResult(result); }
      return publicQr(qr);
    })();
    try { return await checkFlight; } finally { checkFlight = undefined; }
  }
  throw providerError('INVALID_REQUEST');
}
const ALLOWED = new Set(['search', 'details', 'lyrics', 'playback', 'library.playlists', 'library.liked', 'library.tracks', 'qr.create', 'qr.check', 'qr.cancel']);
let active = 0;
process.on('message', async message => {
  if (!message || !Number.isSafeInteger(message.id) || !ALLOWED.has(message.op) || !message.args || typeof message.args !== 'object') return;
  const { id, op, args } = message;
  if (active >= 8) { process.send?.({ id, ok: false, code: 'CONFLICT', accountState: accountState() }); return; }
  active++;
  try { const value = await operate(op, args); if (process.connected) process.send({ id, ok: true, value, accountState: accountState() }); }
  catch (error) {
    const code = classifyQqMusicError(error, op);
    if (process.connected) process.send({ id, ok: false, code, ...safeLoginDetails(error), accountState: accountState() });
  } finally { active--; }
});
process.on('disconnect', () => { ++epoch; cancelQr(); process.exit(0); });
