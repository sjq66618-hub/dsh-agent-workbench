import { randomUUID } from 'node:crypto';
import { normalizeNetdiskPath, mapBaiduListing } from './baidu-netdisk-codec.js';

const PAN = 'https://pan.baidu.com';
const PASSPORT = 'https://passport.baidu.com';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const MESSAGES = {
  AUTH_REQUIRED: '请先扫码登录百度网盘', SERVICE_DISABLED: '百度网盘入口已停用',
  SERVICE_STOPPED: '百度网盘服务已停止', UPSTREAM_UNAVAILABLE: '百度网盘服务暂时不可用，请稍后重试',
  INVALID_RESPONSE: '百度网盘返回了无法识别的数据，请稍后重试', INVALID_REQUEST: '网盘请求参数无效',
  QR_EXPIRED: '二维码已过期，请重新获取', QR_CANCELLED: '此次扫码已取消',
  RATE_LIMITED: '获取二维码过于频繁，请稍后重试', DOWNLOAD_UNAVAILABLE: '当前文件暂时无法下载，请在网盘中检查文件状态',
  ABORTED: '网盘请求已取消',
};

export class NetdiskError extends Error {
  constructor(code, details = {}) {
    super(MESSAGES[code] || MESSAGES.UPSTREAM_UNAVAILABLE);
    this.name = 'NetdiskError'; this.code = Object.hasOwn(MESSAGES, code) ? code : 'UPSTREAM_UNAVAILABLE';
    if (Number.isSafeInteger(details.upstreamCode)) this.upstreamCode = details.upstreamCode;
    if (Number.isSafeInteger(details.retryAfterMs) && details.retryAfterMs > 0) this.retryAfterMs = Math.min(details.retryAfterMs, 300_000);
  }
}

export function parseBaiduJson(text) {
  if (typeof text !== 'string') throw new NetdiskError('INVALID_RESPONSE');
  const input = text.trim();
  try {
    const data = JSON.parse(input.startsWith('{') ? input : input.replace(/^[\w$.]+\s*\(/, '').replace(/\)\s*;?\s*$/, ''));
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
    return data;
  } catch { throw new NetdiskError('INVALID_RESPONSE'); }
}

export function validateBaiduUrl(value, download = false) {
  let url; try { url = new URL(value); } catch { throw new NetdiskError('INVALID_RESPONSE'); }
  const host = url.hostname.toLowerCase();
  const allowed = download ? ['baidu.com', 'baidupcs.com', 'baidubce.com'].some(domain => host === domain || host.endsWith('.' + domain)) : ['pan.baidu.com', 'passport.baidu.com', 'wappass.baidu.com', 'www.baidu.com'].includes(host);
  if (!allowed || url.protocol !== 'https:' || url.username || url.password || (url.port && url.port !== '443')) throw new NetdiskError('INVALID_RESPONSE');
  return url;
}

// Only this provider owns these cookies. They are never imported from a browser,
// persisted, sent to a model, or included in a public status/error response.
export function createBaiduNetdiskProvider({ fetchImpl = globalThis.fetch, now = Date.now } = {}) {
  const cookies = new Map(); const requests = new Set();
  let epoch = 0; let stopped = false; let accountState = 'signed_out';
  let networkState = 'not_checked'; let login = null; let nextQrAt = 0; let bdstoken = '';
  let pollFlight = null;
  function assertLive() { if (stopped) throw new NetdiskError('SERVICE_STOPPED'); }
  function cookieHeader(url) {
    const result = [];
    for (const cookie of cookies.values()) {
      if (cookie.expires <= now()) continue;
      if (cookie.hostOnly ? url.hostname !== cookie.domain : url.hostname !== cookie.domain && !url.hostname.endsWith('.' + cookie.domain)) continue;
      if (!url.pathname.startsWith(cookie.path)) continue;
      result.push(cookie.name + '=' + cookie.value);
    }
    return result.join('; ');
  }
  function receiveCookies(response, url) {
    for (const value of response.headers?.getSetCookie?.() || []) {
      const [pair, ...attributes] = value.split(';'); const separator = pair.indexOf('=');
      if (separator < 1) continue;
      const name = pair.slice(0, separator).trim(); const content = pair.slice(separator + 1).trim();
      if (!/^[A-Za-z0-9_-]+$/.test(name) || /[\r\n]/.test(content)) continue;
      const attrs = Object.fromEntries(attributes.map(entry => { const i = entry.indexOf('='); return [entry.slice(0, i < 0 ? undefined : i).trim().toLowerCase(), i < 0 ? '' : entry.slice(i + 1).trim()]; }));
      const domain = (attrs.domain || url.hostname).replace(/^\./, '').toLowerCase();
      if (!(domain === 'baidu.com' || domain.endsWith('.baidu.com')) || (url.hostname !== domain && !url.hostname.endsWith('.' + domain))) continue;
      const cookiePath = attrs.path?.startsWith('/') ? attrs.path : '/';
      const key = domain + ':' + cookiePath + ':' + name;
      let expires = Infinity;
      if (attrs['max-age'] !== undefined && /^-?\d+$/.test(attrs['max-age'])) expires = now() + Number(attrs['max-age']) * 1000;
      else if (attrs.expires && Number.isFinite(Date.parse(attrs.expires))) expires = Date.parse(attrs.expires);
      if (!content || expires <= now()) cookies.delete(key);
      else cookies.set(key, { name, value: content, domain, path: cookiePath, hostOnly: !attrs.domain, expires });
    }
  }
  async function request(value, { signal, timeoutMs = 18_000, download = false, method = 'GET', body, headers = {}, stream = false } = {}) {
    assertLive(); const generation = epoch; const controller = new AbortController(); requests.add(controller);
    const abort = () => controller.abort(); signal?.addEventListener('abort', abort, { once: true }); if (signal?.aborted) abort();
    const timer = setTimeout(abort, timeoutMs); let url = validateBaiduUrl(value, download); let streaming = false;
    function cleanup() { clearTimeout(timer); requests.delete(controller); signal?.removeEventListener('abort', abort); }
    try {
      for (let redirects = 0; redirects <= 4; redirects++) {
        const cookie = cookieHeader(url);
        const response = await fetchImpl(url.href, { method, body, headers: { 'user-agent': USER_AGENT, referer: PAN + '/', ...headers, ...(cookie ? { cookie } : {}) }, redirect: 'manual', signal: controller.signal });
        if (generation !== epoch || stopped) { await response.body?.cancel?.(); throw new NetdiskError('ABORTED'); }
        receiveCookies(response, url);
        if ([301, 302, 303, 307, 308].includes(response.status)) {
          const location = response.headers.get('location'); await response.body?.cancel?.();
          if (!location || redirects === 4) throw new NetdiskError('INVALID_RESPONSE');
          url = validateBaiduUrl(new URL(location, url).href, download);
          if (response.status === 303) { method = 'GET'; body = undefined; }
          continue;
        }
        if (!response.ok) { await response.body?.cancel?.(); throw new NetdiskError('UPSTREAM_UNAVAILABLE', { upstreamCode: response.status }); }
        if (stream && response.body) {
          clearTimeout(timer); streaming = true;
          const reader = response.body.getReader();
          const bodyStream = new ReadableStream({
            async pull(target) {
              try {
                if (controller.signal.aborted) throw new NetdiskError('ABORTED');
                const entry = await reader.read();
                if (entry.done) { cleanup(); target.close(); } else target.enqueue(entry.value);
              } catch { cleanup(); target.error(new NetdiskError('ABORTED')); }
            },
            async cancel(reason) { abort(); cleanup(); await reader.cancel(reason).catch(() => {}); },
          });
          return new Response(bodyStream, { status: response.status, headers: response.headers });
        }
        if (stream) return response;
        const chunks = []; let length = 0;
        if (response.body?.getReader) {
          const reader = response.body.getReader();
          try { while (true) { const entry = await reader.read(); if (entry.done) break; length += entry.value.byteLength; if (length > 4 * 1024 * 1024) throw new NetdiskError('INVALID_RESPONSE'); chunks.push(Buffer.from(entry.value)); } }
          finally { await reader.cancel().catch(() => {}); }
        } else { const bytes = Buffer.from(await response.arrayBuffer()); if (bytes.length > 4 * 1024 * 1024) throw new NetdiskError('INVALID_RESPONSE'); chunks.push(bytes); }
        return { bytes: Buffer.concat(chunks), headers: response.headers };
      }
      throw new NetdiskError('INVALID_RESPONSE');
    } catch (error) {
      if (error instanceof NetdiskError) throw error;
      if (signal?.aborted || generation !== epoch || stopped) throw new NetdiskError('ABORTED');
      networkState = 'failed'; throw new NetdiskError('UPSTREAM_UNAVAILABLE');
    } finally { if (!streaming) cleanup(); }
  }
  async function json(base, parameters, options) {
    const url = new URL(base); for (const [key, value] of Object.entries(parameters)) url.searchParams.set(key, String(value));
    return parseBaiduJson((await request(url.href, options)).bytes.toString('utf8'));
  }
  function clearAccount() {
    ++epoch; for (const controller of requests) controller.abort(); requests.clear();
    cookies.clear(); bdstoken = ''; login = null; pollFlight = null; accountState = 'signed_out'; networkState = 'not_checked';
  }
  function assertSignedIn() { assertLive(); if (accountState !== 'authenticated') throw new NetdiskError('AUTH_REQUIRED'); }
  function checkApi(value) {
    const code = value.errno ?? value.error_code;
    if (code === -6 || code === 6 || code === 111) { clearAccount(); throw new NetdiskError('AUTH_REQUIRED', { upstreamCode: code }); }
    if (code !== 0) throw new NetdiskError('UPSTREAM_UNAVAILABLE', { upstreamCode: Number(code) });
    networkState = 'verified'; return value;
  }
  async function api(path, params = {}, options) {
    assertSignedIn(); return checkApi(await json(PAN + path, { app_id: '250528', channel: 'chunlei', web: 1, clienttype: 0, ...params, ...(bdstoken ? { bdstoken } : {}) }, options));
  }
  function loginView() { return { state: accountState, ...(login ? { loginId: login.id, expiresAt: login.expiresAt } : {}) }; }
  async function poll(id, signal) {
    if (!login || id !== login.id) throw new NetdiskError('QR_EXPIRED');
    if (now() >= login.expiresAt) { login = null; accountState = 'signed_out'; throw new NetdiskError('QR_EXPIRED'); }
    const session = login; const generation = epoch;
    const response = await json(PASSPORT + '/channel/unicast', { channel_id: session.sign, tpl: 'netdisk', gid: session.gid, callback: 'dshNetdiskPoll', apiver: 'v3', tt: now(), _: now() }, { signal, timeoutMs: 33_000 });
    if (generation !== epoch || login !== session) throw new NetdiskError('ABORTED');
    if (response.errno !== 0) {
      if ([1, 110].includes(Number(response.errno))) return loginView();
      throw new NetdiskError('UPSTREAM_UNAVAILABLE', { upstreamCode: Number(response.errno) });
    }
    let result; try { result = typeof response.channel_v === 'string' ? JSON.parse(response.channel_v) : response.channel_v; } catch { throw new NetdiskError('INVALID_RESPONSE'); }
    if (!result) return loginView();
    if (Number(result.status) === 1) { accountState = 'scanned'; return loginView(); }
    if (Number(result.status) === 2) { login = null; accountState = 'signed_out'; throw new NetdiskError('QR_CANCELLED'); }
    if (Number(result.status) !== 0 || typeof result.v !== 'string' || result.v.length > 8192 || !result.v) return loginView();
    // The exchange may return HTML or JSONP. Only a successful quota read proves login.
    const exchange = new URL(PASSPORT + '/v3/login/main/qrbdusslogin');
    exchange.search = new URLSearchParams({ v: now(), bduss: result.v, u: encodeURIComponent(PAN + '/disk/main'), loginVersion: 'v4', qrcode: 1, tpl: 'netdisk', apiver: 'v3', tt: now(), time: Math.floor(now() / 1000), alg: 'v3', callback: 'dshNetdiskLogin' }).toString();
    await request(exchange.href, { signal, timeoutMs: 25_000 });
    if (generation !== epoch || login !== session) throw new NetdiskError('ABORTED');
    const home = await request(PAN + '/disk/main', { signal });
    bdstoken = home.bytes.toString('utf8').match(/["']bdstoken["']\s*:\s*["']([a-fA-F0-9]{16,64})["']/)?.[1] || '';
    const quota = checkApi(await json(PAN + '/api/quota', { checkfree: 1, checkexpire: 1, app_id: '250528', web: 1, clienttype: 0 }, { signal }));
    if (!Number.isSafeInteger(quota.total) || !Number.isSafeInteger(quota.used)) throw new NetdiskError('INVALID_RESPONSE');
    if (generation !== epoch || login !== session) throw new NetdiskError('ABORTED');
    accountState = 'authenticated'; login = null; return loginView();
  }
  return Object.freeze({
    get generation() { return epoch; },
    status() { return { state: stopped ? 'unavailable' : networkState === 'verified' ? 'ready' : 'configured', accountState, networkState, capabilities: { browse: accountState === 'authenticated', searchFiles: accountState === 'authenticated', download: accountState === 'authenticated' } }; },
    async account(action, { loginId, signal } = {}) {
      assertLive();
      if (action === 'status') return loginView();
      if (action === 'logout') { clearAccount(); return loginView(); }
      if (action === 'qr.cancel') { if (login && login.id === loginId) clearAccount(); return loginView(); }
      if (action === 'qr.create') {
        if (accountState === 'authenticated') return loginView();
        if (now() < nextQrAt) throw new NetdiskError('RATE_LIMITED', { retryAfterMs: nextQrAt - now() });
        clearAccount(); nextQrAt = now() + 10_000; const generation = epoch;
        const gid = randomUUID().toUpperCase();
        const value = await json(PASSPORT + '/v2/api/getqrcode', { lp: 'pc', qrloginfrom: 'pc', gid, callback: 'dshNetdiskQR', apiver: 'v3', tt: now(), tpl: 'netdisk' }, { signal });
        if (value.errno !== 0) throw new NetdiskError('UPSTREAM_UNAVAILABLE', { upstreamCode: Number(value.errno) });
        if (typeof value.sign !== 'string' || value.sign.length > 2048 || typeof value.imgurl !== 'string') throw new NetdiskError('INVALID_RESPONSE');
        const image = await request(validateBaiduUrl(value.imgurl.startsWith('http') ? value.imgurl : 'https://' + value.imgurl).href, { signal });
        const png = image.bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
        const jpeg = image.bytes[0] === 255 && image.bytes[1] === 216;
        if ((!png && !jpeg) || image.bytes.length > 256_000) throw new NetdiskError('INVALID_RESPONSE');
        if (generation !== epoch || stopped) throw new NetdiskError('ABORTED');
        login = { id: randomUUID(), sign: value.sign, gid, expiresAt: now() + 120_000 }; accountState = 'waiting';
        return { ...loginView(), qrDataUrl: `data:image/${png ? 'png' : 'jpeg'};base64,${image.bytes.toString('base64')}` };
      }
      if (action === 'qr.check') {
        if (accountState === 'authenticated') return loginView();
        if (!login || login.id !== loginId) throw new NetdiskError('QR_EXPIRED');
        if (pollFlight) return pollFlight;
        const flight = poll(loginId, signal); pollFlight = flight;
        try { return await flight; } finally { if (pollFlight === flight) pollFlight = null; }
      }
      throw new NetdiskError('INVALID_REQUEST');
    },
    async list({ path = '/', page = 1, limit = 100, query = '', signal } = {}) {
      const dir = normalizeNetdiskPath(path);
      const value = await api(query ? '/api/search' : '/api/list', query ? { key: query, dir, recursion: 1, page, num: limit, order: 'name', desc: 0 } : { dir, page, num: limit, order: 'name', desc: 0, showempty: 0 }, { signal });
      return mapBaiduListing(value, { path: dir, page, limit });
    },
    async quota({ signal } = {}) {
      const value = await api('/api/quota', { checkfree: 1, checkexpire: 1 }, { signal });
      if (!Number.isSafeInteger(value.total) || value.total < 0 || !Number.isSafeInteger(value.used) || value.used < 0) throw new NetdiskError('INVALID_RESPONSE');
      return { total: value.total, used: value.used, free: Math.max(0, value.total - value.used) };
    },
    async download(file, { signal, range, method = 'GET' } = {}) {
      assertSignedIn();
      const url = new URL('https://pcs.baidu.com/rest/2.0/pcs/file');
      url.search = new URLSearchParams({ method: 'download', app_id: '250528', path: normalizeNetdiskPath(file.path) }).toString();
      return request(url.href, { signal, method, stream: true, download: true, timeoutMs: 60_000, headers: range ? { range } : {} });
    },
    dispose() { if (stopped) return; clearAccount(); stopped = true; },
  });
}
