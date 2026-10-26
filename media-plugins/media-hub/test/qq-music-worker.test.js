import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { providerError } from '../src/providers/qq-music-provider.js';
import { classifyQqMusicError, terminalQrResult } from '../src/providers/qq-music-errors.js';
import { safeLoginDetails } from '../src/providers/qq-music-login.js';
import { mapLibraryPlaylists, mapLibrarySongs } from '../src/providers/qq-music-library-codec.js';

// Exercise the worker's real lifecycle with an in-memory SDK double, never the network.
const source = fs.readFileSync(new URL('../src/providers/qq-music-worker.js', import.meta.url), 'utf8');
function fixture(checkResult = { code: 801 }) {
  const now = 1_000_000; const expiresAt = now + 120_000;
  const events = new Map(); const timers = new Map(); const sent = []; const cancelled = []; const loggedOut = [];
  let creates = 0; let timerId = 0;
  const service = {
    async createSession() { creates++; return 'internal-key'; },
    async createQr() { return 'data:image/png;base64,AAAA'; },
    async checkQr() { return typeof checkResult === 'function' ? checkResult() : checkResult; },
    cancelSession(key) { cancelled.push(key); }, async logout(value) { loggedOut.push(value); },
  };
  const sandbox = {
    mapLibraryPlaylists, mapLibrarySongs,
    getUserPlaylist: async request => { assert.equal(request.queryRaw('uid'), undefined); return { status: 200, body: { code: 200, playlist: [{ tid: '123', dirName: '我的歌单' }], total: 1 } }; },
    getUserLikedSongs: async request => ({ status: 200, body: { code: 200, songs: [{ mid: 'liked', name: '我喜欢' }], total: 1 } }),
    getOwnedPlaylistSongs: async request => {
      assert.equal(request.query('tid'), '123'); assert.equal(request.query('dirid'), '');
      return { status: 200, body: { code: 200, songs: [{ songmid: 'owned', songname: '歌单歌曲' }], total: 1 } };
    },
    service, providerError, classifyQqMusicError, terminalQrResult, safeLoginDetails, CHECK_BUDGET_MS: 15_000,
    qrRepository: { load: () => [{ key: 'internal-key', expiresAt }] },
    randomUUID: () => 'public-login-id', tokenFromCookieString: value => value === 'private-cookie' ? 'private-token' : undefined,
    Date: class extends Date { static now() { return now; } },
    setTimeout(fn, delay) { timers.set(++timerId, { fn, delay }); return timerId; }, clearTimeout(id) { timers.delete(id); },
    process: { connected: true, on(name, listener) { events.set(name, listener); }, send(message) { sent.push(message); } },
  };
  const lifecycle = vm.runInNewContext(source.slice(source.indexOf('let token;')) + '\n;({ operate });', sandbox);
  return { ...lifecycle, events, timers, sent, cancelled, loggedOut, expiresAt, get creates() { return creates; } };
}

test('worker library reads use the current SDK session and reject unsigned or invalid requests', async () => {
  const f = fixture({ code: 803, cookie: 'private-cookie' });
  await assert.rejects(f.operate('library.liked', { offset: 0, limit: 20 }), { code: 'AUTH_REQUIRED' });
  const qr = await f.operate('qr.create', { channel: 'qq' }); await f.operate('qr.check', { loginId: qr.loginId });
  assert.equal((await f.operate('library.playlists', { offset: 0, limit: 20 })).items[0].title, '我的歌单');
  assert.equal((await f.operate('library.liked', { offset: 0, limit: 20 })).items[0].songMid, 'liked');
  assert.equal((await f.operate('library.tracks', { id: '123', dirId: '9', offset: 0, limit: 20 })).items[0].songMid, 'owned');
  await assert.rejects(f.operate('library.tracks', { id: 'x', offset: 0, limit: 20 }), { code: 'INVALID_REQUEST' });
  await assert.rejects(f.operate('library.liked', { offset: -1, limit: 20 }), { code: 'INVALID_REQUEST' });
});

test('worker uses SDK expiry, retains a terminal delivery window and reuses the live QR', async () => {
  const f = fixture(); const first = await f.operate('qr.create', { channel: 'qq' });
  assert.equal(first.expiresAt, f.expiresAt); assert.equal(first.loginId, 'public-login-id');
  assert.equal(first.authFlow, 'qq-web-oauth-v1');
  assert.equal([...f.timers.values()][0].delay, 150_000);
  const second = await f.operate('qr.create', { channel: 'qq' });
  assert.equal(first.loginId, second.loginId); assert.equal(first.image, second.image); assert.equal(f.creates, 1);
  await assert.rejects(f.operate('qr.create', { channel: 'qqmusic' }), { code: 'CONFLICT' });
  assert.equal(JSON.stringify(first).includes('internal-key'), false);
});
test('real worker maps a failed SDK check to safe IPC diagnostics, not expired', async () => {
  const f = fixture({ code: 800, failureStage: 'credential-exchange', failureReason: 'upstream-rejected', upstreamCode: 104604, upstreamHttpStatus: 200, retryAfterMs: 60_000, cookie: 'private-cookie', message: 'private-message' });
  const qr = await f.operate('qr.create', { channel: 'qq' });
  await f.events.get('message')({ id: 1, op: 'qr.check', args: { loginId: qr.loginId } });
  const result = f.sent[0];
  assert.equal(result.ok, false); assert.equal(result.code, 'RATE_LIMITED'); assert.equal(result.retryAfterMs, 60_000);
  assert.equal(result.failureStage, 'credential-exchange'); assert.equal(result.upstreamCode, 104604);
  assert.equal(result.accountState, 'signed_out'); assert.equal(f.cancelled.length, 1);
  assert.ok(!JSON.stringify(result).includes('private')); assert.equal(f.timers.size, 0);
});
test('worker preserves expiry cooldown and distinguishes phone cancellation', async () => {
  for (const [reason, state] of [['qr-timeout', 'expired'], ['user-canceled', 'cancelled']]) {
    const f = fixture({ code: 800, failureReason: reason, retryAfterMs: 4_000 });
    const qr = await f.operate('qr.create', { channel: 'qq' });
    const result = await f.operate('qr.check', { loginId: qr.loginId });
    assert.equal(result.state, state); assert.equal(result.retryAfterMs, 4_000);
  }
});
test('cancel during a pending check never adopts stale successful credentials', async () => {
  let resolve; const f = fixture(() => new Promise(done => { resolve = done; }));
  const qr = await f.operate('qr.create', { channel: 'qq' });
  const pending = f.operate('qr.check', { loginId: qr.loginId });
  await f.operate('qr.cancel', { loginId: qr.loginId });
  resolve({ code: 803, cookie: 'private-cookie' });
  const result = await pending;
  assert.equal(result.state, 'cancelled'); assert.deepEqual(f.loggedOut, ['private-token']);
  assert.ok(!JSON.stringify(result).includes('private'));
});
