import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { EventEmitter } from 'node:events';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { createQqMusicProvider } from '../src/providers/qq-music-provider.js';

// Offline regression coverage for the SDK's phone-QQ web login driver and the
// longer login deadline. Every HTTP response below is fabricated in-process.
const require = createRequire(import.meta.url);
const sdkRoot = dirname(require.resolve('@yakult-green-tea/qq-music-api/package.json'));
const sdkRequire = createRequire(join(sdkRoot, 'package.json'));
const { createPtloginQrDriver } = sdkRequire(join(sdkRoot, 'dist/src/services/auth/qrDrivers.js'));

const PNG = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  0, 0, 0, 13, 0x49, 0x48, 0x44, 0x52,
  0, 0, 0, 72, 0, 0, 0, 72,
  8, 6, 0, 0, 0, 0, 0, 0, 0,
]);
const QRSIG = 'QrsigToken0123456789';
const CHECK_SIG = 'https://ssl.ptlogin2.graph.qq.com/check_sig?ptsig=SigValue&uin=10001';
const AUTH_CODE = '0123456789ABCDEF0123456789ABCDEF';
const CREDENTIAL = { loginType: 2, musickey: 'MusickeyValue', musicid: '10001', str_musicid: '10001' };

function fakeBackend({ pollCodes = [66, 67, 0], state = 'echo', globalCode = 0, requestCode = 0 } = {}) {
  const calls = [];
  const codes = [...pollCodes];
  async function fetch(url, init = {}) {
    const target = new URL(url);
    const method = init.method ?? 'GET';
    calls.push({ url: target, method, body: init.body, headers: init.headers ?? {} });
    if (target.pathname === '/ssl/ptqrshow') {
      const headers = new Headers();
      headers.append('set-cookie', `qrsig=${QRSIG}; Domain=ptlogin2.qq.com; Path=/; HttpOnly`);
      return new Response(PNG, { status: 200, headers });
    }
    if (target.pathname === '/ssl/ptqrlogin') {
      const code = codes.length > 1 ? codes.shift() : codes[0];
      return new Response(`ptuiCB('${code}','0','${code === 0 ? CHECK_SIG : ''}','0','message','')`, { status: 200 });
    }
    if (target.pathname === '/check_sig') {
      const headers = new Headers({ location: 'https://graph.qq.com/oauth2.0/login_jump' });
      for (const [name, value] of [['p_uin', 'o10001'], ['p_skey', 'PskeyValue0123'], ['pt_oauth_token', 'OauthToken0123']]) {
        headers.append('set-cookie', `${name}=${value}; Domain=graph.qq.com; Path=/`);
      }
      return new Response(null, { status: 302, headers });
    }
    if (target.pathname === '/oauth2.0/login_jump') return new Response('', { status: 200 });
    if (target.pathname === '/oauth2.0/authorize') {
      const form = new URLSearchParams(String(init.body));
      const echoed = state === 'echo' ? form.get('state') : 'mismatched-state';
      return new Response(null, {
        status: 302,
        headers: { location: `https://y.qq.com/portal/wx_redirect.html?code=${AUTH_CODE}&state=${echoed}` },
      });
    }
    if (target.pathname === '/cgi-bin/musicu.fcg') {
      const accepted = globalCode === 0 && requestCode === 0;
      const body = JSON.stringify({ code: globalCode, req: { code: requestCode, data: accepted ? CREDENTIAL : undefined } });
      return new Response(body, { status: 200, headers: { 'content-type': 'application/json' } });
    }
    throw new Error(`unexpected request: ${url}`);
  }
  return { fetch, calls };
}

function ptloginDriver(options = {}) {
  const backend = fakeBackend(options);
  return { backend, driver: createPtloginQrDriver({ fetch: backend.fetch }), signal: new AbortController().signal };
}

async function confirmedQr(driver, signal) {
  await driver.createQr({}, signal);
  await driver.advance({ identifier: QRSIG }, 1_000, signal);
  await driver.advance({ identifier: QRSIG }, 1_000, signal);
  const [event] = await driver.advance({ identifier: QRSIG }, 1_000, signal);
  assert.equal(event.type, 'authorized');
  return event.payload;
}

test('phone QQ web driver builds a QR from fake HTTP and refuses to redraw it', async () => {
  const { backend, driver, signal } = ptloginDriver();
  const qr = await driver.createQr({}, signal);
  assert.equal(qr.identifier, QRSIG);
  assert.equal(qr.expiresIn, 120);
  assert.match(qr.imageUrl, /^data:image\/png;base64,[A-Za-z0-9+/=]+$/);
  assert.equal(backend.calls.length, 1);
  assert.equal(backend.calls[0].url.hostname, 'xui.ptlogin2.qq.com');
  assert.equal(backend.calls[0].url.pathname, '/ssl/ptqrshow');
  // A sealed session already carries its qrsig; minting another code would orphan it.
  await assert.rejects(driver.createQr({ identifier: QRSIG }, signal), /cannot be redrawn/);
});

test('driver maps poll codes to waiting, scanned and authorized without minting credentials', async () => {
  const { backend, driver, signal } = ptloginDriver();
  const session = { identifier: QRSIG };
  assert.deepEqual(await driver.advance(session, 1_000, signal), [{ type: 'waiting', payload: null }]);
  assert.deepEqual(await driver.advance(session, 1_000, signal), [{ type: 'scanned', payload: null }]);
  const [authorized] = await driver.advance(session, 1_000, signal);
  assert.equal(authorized.type, 'authorized');
  assert.deepEqual(authorized.payload, { checkSigUrl: CHECK_SIG });
  // "authorized" is only the check_sig URL the phone confirmation produced. No musickey,
  // no cookie, and no QQLogin call yet: the credential must come from exchange().
  assert.equal(JSON.stringify(authorized).includes('musickey'), false);
  assert.equal(backend.calls.some(call => call.url.pathname === '/cgi-bin/musicu.fcg'), false);
  await assert.rejects(driver.exchange({ identifier: QRSIG }, {}, signal), /check_sig URL is missing/);
});

test('driver exchanges check_sig through OAuth into a loginType 2 credential', async () => {
  const { backend, driver, signal } = ptloginDriver();
  const payload = await confirmedQr(driver, signal);
  const credential = await driver.exchange({ identifier: QRSIG }, payload, signal);
  assert.equal(credential.loginType, 2);
  assert.equal(credential.musickey, CREDENTIAL.musickey);
  assert.equal(credential.musicid, CREDENTIAL.musicid);

  assert.deepEqual(backend.calls.map(call => `${call.method} ${call.url.hostname}${call.url.pathname}`), [
    'GET xui.ptlogin2.qq.com/ssl/ptqrshow',
    'GET xui.ptlogin2.qq.com/ssl/ptqrlogin',
    'GET xui.ptlogin2.qq.com/ssl/ptqrlogin',
    'GET xui.ptlogin2.qq.com/ssl/ptqrlogin',
    'GET ssl.ptlogin2.graph.qq.com/check_sig',
    'GET graph.qq.com/oauth2.0/login_jump',
    'POST graph.qq.com/oauth2.0/authorize',
    'POST u.y.qq.com/cgi-bin/musicu.fcg',
  ]);
  const authorize = backend.calls.find(call => call.url.pathname === '/oauth2.0/authorize');
  assert.match(String(authorize.headers.cookie), /p_skey=PskeyValue0123/);
  const exchange = JSON.parse(String(backend.calls.at(-1).body));
  assert.equal(exchange.req.module, 'QQConnectLogin.LoginServer');
  assert.equal(exchange.req.method, 'QQLogin');
  assert.equal(exchange.req.param.code, AUTH_CODE);
});

test('driver rejects a mismatched OAuth state before the credential exchange', async () => {
  const { backend, driver, signal } = ptloginDriver({ state: 'wrong' });
  const payload = await confirmedQr(driver, signal);
  await assert.rejects(
    driver.exchange({ identifier: QRSIG }, payload, signal),
    { name: 'PtloginError', step: 'authorize', message: /state does not match/ },
  );
  assert.equal(backend.calls.some(call => call.url.pathname === '/cgi-bin/musicu.fcg'), false);
});

test('driver rejects a non-zero QQLogin business code instead of returning a credential', async () => {
  for (const [globalCode, requestCode] of [[0, 104604], [-1, 0]]) {
    const { backend, driver, signal } = ptloginDriver({ globalCode, requestCode });
    const payload = await confirmedQr(driver, signal);
    await assert.rejects(
      driver.exchange({ identifier: QRSIG }, payload, signal),
      { name: 'PtloginError', step: 'qq-login', globalCode, upstreamCode: requestCode, message: /QQLogin was rejected/ },
    );
    assert.equal(backend.calls.at(-1).url.pathname, '/cgi-bin/musicu.fcg');
  }
});

const workerSource = fs.readFileSync(new URL('../src/providers/qq-music-worker.js', import.meta.url), 'utf8');

test('worker registers the ptlogin driver for qq only, leaving qqmusic and wechat on SDK defaults', () => {
  const literal = /drivers:\s*(\{[^{}]*\})/.exec(workerSource)?.[1];
  assert.ok(literal, 'worker must pass an explicit drivers map');
  const requested = [];
  const marker = { driver: 'ptlogin' };
  const native = file => { requested.push(file); return { createPtloginQrDriver: () => marker }; };
  const drivers = vm.runInNewContext(`(${literal})`, { native });
  assert.deepEqual(Object.keys(drivers), ['qq']);
  assert.equal(drivers.qq, marker);
  assert.equal(Object.hasOwn(drivers, 'qqmusic'), false);
  assert.equal(Object.hasOwn(drivers, 'wechat'), false);
  assert.deepEqual(requested, ['services/auth/qrDrivers.js']);
});

test('worker keeps a 15 second QR check budget and forwards it to the SDK', () => {
  const raw = /const CHECK_BUDGET_MS = ([\d_]+);/.exec(workerSource)?.[1];
  assert.equal(Number(raw.replaceAll('_', '')), 15_000);
  assert.match(workerSource, /checkBudgetMs:\s*CHECK_BUDGET_MS/);
});

function fakeChild(replyAfterMs) {
  const child = new EventEmitter();
  const sent = [];
  child.send = (message, callback) => {
    sent.push(message);
    if (replyAfterMs !== undefined) {
      setTimeout(() => child.emit('message', { id: message.id, ok: true, value: { state: 'waiting' }, accountState: 'waiting' }), replyAfterMs);
    }
    callback?.();
  };
  child.kill = () => {};
  return { child, sent };
}

test('qr.check waits on authTimeoutMs instead of the ordinary timeoutMs', async () => {
  const { child, sent } = fakeChild(50);
  const provider = createQqMusicProvider({ timeoutMs: 25, authTimeoutMs: 1_000, spawnWorker: () => child });
  try {
    const started = Date.now();
    const value = await provider.account('qr.check', { loginId: 'login-1' });
    assert.deepEqual(value, { state: 'waiting' });
    assert.ok(Date.now() - started >= 45, 'the 50ms reply must land after the 25ms ordinary deadline');
    assert.equal(sent[0].op, 'qr.check');
  } finally { provider.dispose(); }
});

test('ordinary calls still fail at timeoutMs while the worker stays silent', async () => {
  const { child } = fakeChild();
  const provider = createQqMusicProvider({ timeoutMs: 25, authTimeoutMs: 1_000, spawnWorker: () => child });
  try {
    await assert.rejects(provider.search({ query: '晴天', limit: 1, page: 1 }), { code: 'UPSTREAM_UNAVAILABLE' });
  } finally { provider.dispose(); }
});
