import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { apply } from '../index.js';

async function fixture(t, source) {
  const realFetch = globalThis.fetch; const requests = []; const routes = new Map(); const cleanup = [];
  globalThis.fetch = (url, init) => {
    if (String(url).startsWith('https://media.example.test/')) { requests.push(init); return source(url, init); }
    return realFetch(url, init);
  };
  const track = { songMid: 'mid', title: '测试', artist: '', album: '', durationMs: null };
  apply({
    effect(fn) { cleanup.push(fn()); }, connection: { admit: () => ({ peer: {} }) },
    tools: { register: () => () => {} },
    webServer: { register(value) { routes.set(value.path, value); return () => routes.delete(value.path); } },
  }, { musicProvider: { available: true, async details() { return track; }, async playback() { return { url: 'https://media.example.test/song.mp3?vkey=private' }; }, async account() { return { state: 'signed_out' }; } } });
  const server = createServer((req, res) => {
    const route = routes.get(new URL(req.url, 'http://test').pathname);
    if (!route) { res.writeHead(404); res.end(); return; }
    Promise.resolve(route.handler(req, res)).catch(() => res.destroy());
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  t.after(async () => { while (cleanup.length) cleanup.pop()?.(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); globalThis.fetch = realFetch; });
  const lease = await (await realFetch(origin + '/media-hub/api/music?op=play', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ songMid: 'mid' }) })).json();
  assert.equal(JSON.stringify(lease).includes('private'), false);
  return { requests, origin, lease, fetch: realFetch };
}
test('stream passes a single Range and selected headers without leaking signed URLs', async t => {
  const f = await fixture(t, async () => new Response('abcdef', { status: 206, headers: { 'content-type': 'audio/mpeg', 'content-length': '6', 'content-range': 'bytes 0-5/100', 'set-cookie': 'secret' } }));
  const response = await f.fetch(f.origin + f.lease.streamPath, { headers: { range: 'bytes=0-5', authorization: 'not-forwarded', cookie: 'not-forwarded' } });
  assert.equal(response.status, 206); assert.equal(await response.text(), 'abcdef');
  assert.equal(response.headers.get('content-range'), 'bytes 0-5/100'); assert.equal(response.headers.get('set-cookie'), null);
  assert.deepEqual(f.requests[0].headers, { range: 'bytes=0-5' }); assert.equal(f.requests[0].redirect, 'error'); assert.equal(f.requests[0].method, 'GET');
});
test('HEAD proxies metadata without downloading the body', async t => {
  const f = await fixture(t, async () => new Response(null, { headers: { 'content-type': 'audio/mpeg', 'content-length': '100' } }));
  const response = await f.fetch(f.origin + f.lease.streamPath, { method: 'HEAD' });
  assert.equal(response.status, 200); assert.equal(response.headers.get('content-length'), '100'); assert.equal(await response.text(), ''); assert.equal(f.requests[0].method, 'HEAD');
});
test('malformed ranges are rejected before any upstream fetch', async t => {
  const f = await fixture(t, async () => { throw new Error('must not fetch'); });
  const response = await f.fetch(f.origin + f.lease.streamPath, { headers: { range: 'items=0-1' } });
  assert.equal(response.status, 400); await response.text(); assert.equal(f.requests.length, 0);
});
test('logout aborts an active stream and revokes subsequent lease access', async t => {
  const f = await fixture(t, async (_url, init) => new Response(new ReadableStream({
    start(controller) { controller.enqueue(new Uint8Array([1, 2, 3])); init.signal.addEventListener('abort', () => controller.error(new Error('stopped')), { once: true }); },
  }), { headers: { 'content-type': 'audio/mpeg' } }));
  const response = await f.fetch(f.origin + f.lease.streamPath); const reader = response.body.getReader();
  assert.equal((await reader.read()).value.length, 3);
  const logout = await f.fetch(f.origin + '/media-hub/api/music?op=account', { method: 'POST', headers: { 'content-type': 'application/json', 'x-media-hub-ui': '1' }, body: JSON.stringify({ action: 'logout' }) });
  assert.equal(logout.status, 200); await logout.text(); assert.equal(f.requests[0].signal.aborted, true);
  await assert.rejects(reader.read());
  const expired = await f.fetch(f.origin + f.lease.streamPath); assert.equal(expired.status, 422); await expired.text();
});
