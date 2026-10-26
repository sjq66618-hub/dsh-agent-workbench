import test from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { createQqMusicProvider, validateQqAudioUrl } from '../src/providers/qq-music-provider.js';

class Child extends EventEmitter {
  messages = []; killed = 0;
  send(message, callback) { this.messages.push(message); callback?.(); }
  kill() { this.killed++; }
  reply(index, data = {}) { this.emit('message', { id: this.messages[index].id, ok: true, accountState: 'signed_out', value: { items: [], hasMore: false }, ...data }); }
}

test('library reads authenticate and cancel without terminating the logged-in worker', async () => {
  const { provider, children } = fixture();
  await assert.rejects(provider.library({ kind: 'liked' }), { code: 'AUTH_REQUIRED' }); assert.equal(children.length, 0);
  const login = provider.account('qr.check', { loginId: 'test' });
  children[0].reply(0, { accountState: 'authenticated', value: { state: 'authenticated' } }); await login;
  const controller = new AbortController(); const request = provider.library({ kind: 'liked', offset: 0, limit: 20, signal: controller.signal });
  const rejected = assert.rejects(request, { code: 'ABORTED' }); controller.abort(); await rejected;
  assert.equal(children[0].killed, 0); assert.equal(provider.accountState, 'authenticated');
  const next = provider.library({ kind: 'playlists', offset: 0, limit: 20 });
  children[0].reply(2, { accountState: 'authenticated', value: { items: [], total: 0 } }); await next;
  assert.equal(provider.status().state, 'ready'); assert.equal(provider.status().capabilities.library, true);
  provider.dispose();
});

test('a library deadline leaves authentication intact and ignores late IPC replies', async () => {
  const { provider, children } = fixture({ authTimeoutMs: 20 });
  const login = provider.account('qr.check', { loginId: 'test' }); children[0].reply(0, { accountState: 'authenticated', value: { state: 'authenticated' } }); await login;
  await assert.rejects(provider.library({ kind: 'liked', offset: 0, limit: 20 }), { code: 'UPSTREAM_UNAVAILABLE' });
  children[0].reply(1, { accountState: 'signed_out', value: { items: [] } });
  assert.equal(provider.accountState, 'authenticated'); assert.equal(children[0].killed, 0);
  provider.dispose();
});
function fixture(options = {}) {
  const children = [];
  const provider = createQqMusicProvider({ ...options, spawnWorker: () => { const child = new Child(); children.push(child); return child; } });
  return { provider, children };
}
const args = { query: 'test', page: 1, limit: 3 };

test('construction and account status never spawn or claim a verified connection', async () => {
  const { provider, children } = fixture();
  assert.equal(provider.status().state, 'configured');
  assert.equal((await provider.account('status')).sessionStorage, 'memory');
  assert.equal(children.length, 0);
  assert.equal(provider.status().networkState, 'not_checked');
  provider.dispose();
});
test('business call lazily spawns and sends only JSON arguments, not AbortSignal', async () => {
  const { provider, children } = fixture(); const controller = new AbortController();
  const result = provider.search({ ...args, signal: controller.signal });
  assert.deepEqual(children[0].messages[0].args, args);
  children[0].reply(0); await result;
  assert.equal(provider.status().networkState, 'verified'); provider.dispose();
});
test('deadline actually terminates a hung child and rejects pending calls', async () => {
  const { provider, children } = fixture({ timeoutMs: 25 });
  await assert.rejects(provider.search(args), { code: 'UPSTREAM_UNAVAILABLE' });
  assert.equal(children[0].killed, 1); assert.equal(provider.status().runtimeState, 'idle'); provider.dispose();
});
test('abort terminates owned child and invalidates all pending requests', async () => {
  const { provider, children } = fixture(); const controller = new AbortController();
  const result = provider.search({ ...args, signal: controller.signal });
  const other = provider.details({ songMid: 'mid' });
  const checks = [assert.rejects(result, { code: 'ABORTED' }), assert.rejects(other, { code: 'ABORTED' })];
  controller.abort(); await Promise.all(checks); assert.equal(children[0].killed, 1); provider.dispose();
});
test('crashed worker can be restarted on a later call without reusing account state', async () => {
  const { provider, children } = fixture();
  const first = provider.search(args); const check = assert.rejects(first, { code: 'UPSTREAM_UNAVAILABLE' });
  children[0].emit('exit', 1); await check;
  const second = provider.search(args); children[1].reply(0); await second;
  assert.equal(children.length, 2); provider.dispose();
});
test('child errors cross IPC only as static redacted codes', async () => {
  const { provider, children } = fixture(); const result = provider.search(args);
  children[0].reply(0, { ok: false, code: 'SECRET-token', message: 'Cookie=secret', stack: 'secret' });
  await assert.rejects(result, error => error.code === 'UPSTREAM_UNAVAILABLE' && !error.message.includes('secret')); provider.dispose();
});
test('pending work is bounded and an already aborted call never spawns', async () => {
  const { provider, children } = fixture({ maxPending: 1 }); const controller = new AbortController(); controller.abort();
  await assert.rejects(provider.search({ ...args, signal: controller.signal }), { code: 'ABORTED' }); assert.equal(children.length, 0);
  const pending = provider.search(args); await assert.rejects(provider.search(args), { code: 'CONFLICT' });
  children[0].reply(0); await pending; provider.dispose();
});
test('logout kills the credential owner and rejects work before acknowledging sign-out', async () => {
  const { provider, children } = fixture(); const login = provider.account('qr.check', { loginId: 'x' });
  children[0].reply(0, { value: { state: 'authenticated' }, accountState: 'authenticated' }); await login;
  assert.equal(provider.status().capabilities.playback, true);
  const result = provider.search(args); const check = assert.rejects(result, { code: 'ABORTED' });
  await provider.account('logout'); await check; assert.equal(provider.accountState, 'signed_out'); assert.equal(children[0].killed, 1);
  children[0].reply(1, { accountState: 'authenticated' }); assert.equal(provider.accountState, 'signed_out'); provider.dispose();
});
test('disposal is idempotent and blocks all future work', async () => {
  const { provider, children } = fixture(); const result = provider.search(args); const check = assert.rejects(result, { code: 'SERVICE_STOPPED' });
  provider.dispose(); provider.dispose(); await check; assert.equal(children[0].killed, 1);
  await assert.rejects(provider.account('status'), { code: 'SERVICE_STOPPED' }); await assert.rejects(provider.search(args), { code: 'SERVICE_STOPPED' });
});
test('invalid search and anonymous playback never trigger network or a process', async () => {
  const { provider, children } = fixture();
  await assert.rejects(provider.search({ ...args, query: 'a'.repeat(61) }), { code: 'INVALID_QUERY' });
  await assert.rejects(provider.search({ ...args, limit: 21 }), { code: 'INVALID_QUERY' });
  await assert.rejects(provider.playback({ songMid: 'mid' }), { code: 'AUTH_REQUIRED' }); assert.equal(children.length, 0); provider.dispose();
});
test('audio targets reject local URLs, credentials, unusual ports and lookalike domains', () => {
  assert.equal(validateQqAudioUrl('https://isure.stream.qqmusic.qq.com/M500.mp3?vkey=test'), 'https://isure.stream.qqmusic.qq.com/M500.mp3?vkey=test');
  for (const value of ['http://127.0.0.1/a', 'http://169.254.169.254/a', 'file:///x', 'https://dl.stream.qqmusic.qq.com.evil.test/a', 'https://user:pass@dl.stream.qqmusic.qq.com/a', 'https://dl.stream.qqmusic.qq.com:8080/a']) assert.throws(() => validateQqAudioUrl(value), { code: 'UNPLAYABLE' });
});
test('real fixed SDK worker starts without a listener or stored account', async () => {
  const provider = createQqMusicProvider();
  try { assert.deepEqual(await provider.account('qr.check', { loginId: 'nonexistent' }), { state: 'expired' }); assert.equal(provider.accountState, 'signed_out'); } finally { provider.dispose(); }
});
