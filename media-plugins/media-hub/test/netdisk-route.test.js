import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { once } from 'node:events';
import { createNetdiskService } from '../src/host/netdisk-service.js';
import { registerNetdiskRoute } from '../src/host/netdisk-route.js';

async function fixture({ rejection, enabled = true } = {}) {
  let state = 'authenticated'; let generation = 0; const cleanup = []; const calls = [];
  const item = { id: '123', name: '中文.txt', path: '/中文.txt', isDirectory: false, size: 3, modifiedAt: 0 };
  const netdisk = createNetdiskService({ enabled, provider: {
    get generation() { return generation; },
    status: () => ({ state: 'ready', accountState: state, networkState: 'verified' }),
    async account(action) { if (action === 'logout') { state = 'signed_out'; generation++; } return { state }; },
    async list() { return { items: [{ ...item, cookie: 'must-not-escape' }], hasMore: false }; },
    async quota() { return { total: 1000, used: 10, cookie: 'must-not-escape' }; },
    async download(file, options) { calls.push({ file, options }); return new Response(new Uint8Array([1, 2, 3]), { status: options.range ? 206 : 200, headers: { 'content-type': 'application/octet-stream', 'content-length': 3, ...(options.range ? { 'content-range': 'bytes 0-2/3' } : {}) } }); },
    dispose() {},
  } }); let handler;
  registerNetdiskRoute({ effect(fn) { cleanup.push(fn()); }, connection: { admit: () => rejection ? { rejection } : { peer: {} } }, webServer: { register(route) { handler = route.handler; return () => {}; } } }, netdisk);
  const server = http.createServer((req, res) => { void handler(req, res); }); server.listen(0, '127.0.0.1'); await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}/media-hub/api/netdisk`;
  return { netdisk, calls, async get(query = '') { return fetch(base + query); }, async post(body, ui = true) { return fetch(base + '?op=account', { method: 'POST', headers: { 'content-type': 'application/json', ...(ui ? { 'x-media-hub-ui': '1' } : {}) }, body: JSON.stringify(body) }); }, async dispose() { cleanup.forEach(fn => fn?.()); netdisk.dispose(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }, base };
}

test('netdisk routes preserve admission, validate inputs and require explicit UI account operations', async () => {
  for (const rejection of [401, 403]) { const f = await fixture({ rejection }); try { assert.equal((await f.get()).status, rejection); } finally { await f.dispose(); } }
  const f = await fixture();
  try {
    assert.equal((await f.post({ action: 'logout' }, false)).status, 403);
    assert.equal((await f.get('?op=files&path=/../secret')).status, 400);
    assert.equal((await f.get('?op=files&limit=101')).status, 400);
    assert.equal((await f.post({ action: 'shell' })).status, 400);
    assert.equal((await f.get('?op=download&id=999')).status, 409);
    const listing = await (await f.get('?op=files')).json(); assert.deepEqual(Object.keys(listing.items[0]).sort(), ['id', 'name', 'path', 'isDirectory', 'size', 'modifiedAt'].sort());
    assert.equal(JSON.stringify(listing).includes('must-not-escape'), false);
    assert.deepEqual(await (await f.get('?op=quota')).json(), { total: 1000, used: 10, free: 990 });
    assert.equal((await f.post({ action: 'logout' })).status, 200);
    assert.equal((await f.get('?op=files')).status, 401); assert.equal((await f.get('?op=download&id=123')).status, 401);
  } finally { await f.dispose(); }
});

test('netdisk downloads stream through authenticated host with Range and HEAD', async () => {
  const f = await fixture();
  try {
    await (await f.get('?op=files')).arrayBuffer();
    const response = await fetch(f.base + '?op=download&id=123', { headers: { range: 'bytes=0-2' } });
    assert.equal(response.status, 206); assert.match(response.headers.get('content-disposition'), /%E4%B8%AD%E6%96%87.txt/);
    assert.equal(response.headers.get('content-range'), 'bytes 0-2/3'); assert.deepEqual([...new Uint8Array(await response.arrayBuffer())], [1, 2, 3]);
    const head = await fetch(f.base + '?op=download&id=123', { method: 'HEAD' }); assert.equal(head.status, 200); assert.equal((await head.arrayBuffer()).byteLength, 0);
    assert.equal((await fetch(f.base + '?op=download&id=123', { headers: { range: 'bytes=0-2,3-4' } })).status, 400);
    assert.equal(f.calls.length, 2);
  } finally { await f.dispose(); }
});
