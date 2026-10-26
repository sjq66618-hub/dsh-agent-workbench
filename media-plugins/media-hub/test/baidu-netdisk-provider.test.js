import test from 'node:test';
import assert from 'node:assert/strict';
import { createBaiduNetdiskProvider, parseBaiduJson, validateBaiduUrl } from '../src/providers/baidu-netdisk-provider.js';

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB', 'base64');
const json = (value, headers = {}) => new Response(JSON.stringify(value), { headers });
function fixture({ rejected = false, deferList = false } = {}) {
  let now = 1_000_000; let listResolve; const calls = [];
  const provider = createBaiduNetdiskProvider({ now: () => now, async fetchImpl(url, init) {
    const u = new URL(url); calls.push({ url: u, init });
    if (u.pathname === '/v2/api/getqrcode') return json({ errno: 0, sign: 'qr-secret', imgurl: 'passport.baidu.com/qr.png' });
    if (u.pathname === '/qr.png') return new Response(png);
    if (u.pathname === '/channel/unicast') return json({ errno: 0, channel_v: JSON.stringify({ status: 0, v: 'temporary-secret' }) });
    if (u.pathname.includes('qrbdusslogin')) return new Response('<html>done</html>', { headers: { 'set-cookie': 'BDUSS=private-cookie; Domain=.baidu.com; Path=/; Secure' } });
    if (u.pathname === '/disk/main') return new Response('"bdstoken":"0123456789abcdef0123456789abcdef"');
    if (u.pathname === '/api/quota') return json(rejected ? { errno: -6 } : { errno: 0, total: 1000, used: 100 });
    if (u.pathname === '/api/list' || u.pathname === '/api/search') {
      const value = json({ errno: 0, list: [{ fs_id: '123', server_filename: '中文.txt', path: '/中文.txt', isdir: 0, size: 3, server_mtime: 123 }] });
      return deferList ? new Promise(resolve => { listResolve = () => resolve(value); }) : value;
    }
    if (u.hostname === 'pcs.baidu.com') return new Response(new Uint8Array([1, 2, 3]), { headers: { 'content-type': 'application/octet-stream', 'content-length': '3' } });
    throw new Error('unexpected request');
  } });
  return { provider, calls, advance(ms) { now += ms; }, resolveList() { listResolve(); } };
}
async function signIn(f) { const qr = await f.provider.account('qr.create'); await f.provider.account('qr.check', { loginId: qr.loginId }); return qr; }

test('netdisk URL and JSON parsing reject foreign hosts and executable payloads', () => {
  for (const value of ['http://pan.baidu.com/', 'https://pan.baidu.com.evil.test/', 'https://x@pan.baidu.com/', 'https://pan.baidu.com:444/']) assert.throws(() => validateBaiduUrl(value));
  assert.equal(validateBaiduUrl('https://d.pcs.baidu.com/file', true).hostname, 'd.pcs.baidu.com');
  assert.deepEqual(parseBaiduJson('callback({"errno":0});'), { errno: 0 });
  for (const value of ['[]', 'cb({"x":1}); process.exit()', 'cb(alert(1))']) assert.throws(() => parseBaiduJson(value));
});

test('QR login is memory-only and requires verified quota even when exchange returns HTML', async () => {
  const f = fixture();
  assert.equal(f.calls.length, 0);
  assert.equal(f.provider.status().accountState, 'signed_out');
  await signIn(f);
  assert.equal(f.provider.status().accountState, 'authenticated');
  const value = await f.provider.list();
  assert.equal(value.items[0].name, '中文.txt');
  assert.match(f.calls.find(x => x.url.pathname === '/api/quota').init.headers.cookie, /BDUSS=private-cookie/);
  assert.doesNotMatch(JSON.stringify([value, f.provider.status()]), /private-cookie|temporary-secret|qr-secret|bdstoken/);
  const download = await f.provider.download(value.items[0]);
  assert.deepEqual([...new Uint8Array(await download.arrayBuffer())], [1, 2, 3]);
  await f.provider.account('logout');
  assert.equal(f.provider.status().accountState, 'signed_out');
  await assert.rejects(f.provider.list(), { code: 'AUTH_REQUIRED' });
  f.provider.dispose();
  const rejected = fixture({ rejected: true });
  await assert.rejects(signIn(rejected), { code: 'AUTH_REQUIRED' });
  assert.equal(rejected.provider.status().accountState, 'signed_out'); rejected.provider.dispose();
});

test('QR cancellation, rate limiting, expiry, and stale login ids do not authenticate', async () => {
  const f = fixture(); const qr = await f.provider.account('qr.create');
  await assert.rejects(f.provider.account('qr.check', { loginId: 'wrong-id' }), { code: 'QR_EXPIRED' });
  await f.provider.account('qr.cancel', { loginId: qr.loginId });
  await assert.rejects(f.provider.account('qr.check', { loginId: qr.loginId }), { code: 'QR_EXPIRED' });
  await assert.rejects(f.provider.account('qr.create'), { code: 'RATE_LIMITED' });
  f.advance(10_001); const next = await f.provider.account('qr.create'); f.advance(120_001);
  await assert.rejects(f.provider.account('qr.check', { loginId: next.loginId }), { code: 'QR_EXPIRED' }); f.provider.dispose();
});

test('logout aborts active downloads and prevents late list response from reviving a session', async () => {
  const f = fixture({ deferList: true }); await signIn(f);
  const response = await f.provider.download({ path: '/中文.txt' });
  const signal = f.calls.at(-1).init.signal;
  const pending = f.provider.list(); await Promise.resolve();
  await f.provider.account('logout'); f.resolveList();
  await assert.rejects(pending, { code: 'ABORTED' });
  assert.equal(signal.aborted, true); await response.body.cancel(); f.provider.dispose();
});
