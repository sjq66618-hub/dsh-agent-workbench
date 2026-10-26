import test from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { safeLoginDetails } from '../src/providers/qq-music-login.js';
import { classifyQqMusicError, terminalQrResult } from '../src/providers/qq-music-errors.js';
import { createQqMusicProvider, providerError } from '../src/providers/qq-music-provider.js';

test('terminal QR result keeps upstream rejection and cancellation distinct from expiry', () => {
  // 800 alone means the upstream session is gone, but 800 plus a credential
  // failure is a rejection and must not be softened into "expired".
  assert.throws(
    () => terminalQrResult({ code: 800, diagnostics: { failureStage: 'credential-exchange', failureReason: 'upstream-rejected' } }),
    { code: 'LOGIN_UPSTREAM_REJECTED' },
  );
  assert.deepEqual(terminalQrResult({ code: 800 }), { state: 'expired' });
  assert.deepEqual(
    terminalQrResult({ code: 800, diagnostics: { failureReason: 'qr-timeout' } }),
    { state: 'expired', failureReason: 'qr-timeout' },
  );
  assert.deepEqual(
    terminalQrResult({ code: 800, diagnostics: { failureReason: 'user-canceled' } }),
    { state: 'cancelled', failureReason: 'user-canceled' },
  );
});

test('upstream 104604 and HTTP 429 classify as RATE_LIMITED and keep retryAfterMs', () => {
  assert.equal(classifyQqMusicError({ upstreamCode: 104604 }, 'qr.check'), 'RATE_LIMITED');
  assert.equal(classifyQqMusicError({ httpStatus: 429 }, 'qr.check'), 'RATE_LIMITED');
  assert.equal(classifyQqMusicError({ diagnostics: { upstreamHttpStatus: 429 } }, 'qr.check'), 'RATE_LIMITED');
  // A 800 carrying a rate-limit code is throttled, not silently expired.
  assert.throws(() => terminalQrResult({ code: 800, upstreamCode: 104604 }), { code: 'RATE_LIMITED' });

  assert.equal(safeLoginDetails({ upstreamCode: 104604, retryAfterMs: 4_000 }).retryAfterMs, 4_000);
  const error = providerError('RATE_LIMITED', { upstreamCode: 104604, retryAfterMs: 4_000 });
  assert.equal(error.code, 'RATE_LIMITED');
  assert.equal(error.upstreamCode, 104604);
  assert.equal(error.retryAfterMs, 4_000);
  assert.ok(!('retryAfterMs' in providerError('RATE_LIMITED', { retryAfterMs: 1.5 })));
});

test('safeLoginDetails forwards only the allowlisted diagnostic fields', () => {
  const safe = safeLoginDetails({
    failureStage: 'credential-exchange',
    failureReason: 'upstream-rejected',
    upstreamCode: 104604,
    upstreamHttpStatus: 429,
    retryAfterMs: 1_500,
    cookie: 'uin=private',
    url: 'https://secret.invalid/?token=private',
    token: 'private',
    message: 'Cookie=private',
    qrKey: 'private',
  });
  assert.deepEqual(safe, {
    failureStage: 'credential-exchange',
    failureReason: 'upstream-rejected',
    upstreamCode: 104604,
    upstreamHttpStatus: 429,
    retryAfterMs: 1_500,
  });
  assert.deepEqual(
    Object.keys(safe).sort(),
    ['failureReason', 'failureStage', 'retryAfterMs', 'upstreamCode', 'upstreamHttpStatus'],
  );
  assert.deepEqual(
    safeLoginDetails({ diagnostics: { failureReason: 'network-timeout' }, cookie: 'private', token: 'private' }),
    { failureReason: 'network-timeout' },
  );
});

test('safeLoginDetails rejects unknown strings, unsafe numbers and secret-shaped fields', () => {
  assert.deepEqual(safeLoginDetails({
    failureStage: 'cookie=private',
    failureReason: 'https://secret.invalid/?token=private',
    upstreamCode: '104604',
    upstreamHttpStatus: 600,
    retryAfterMs: -1,
    cookie: 'private',
    url: 'private',
    token: 'private',
    message: 'private',
  }), {});
  for (const retryAfterMs of [-1, NaN, Infinity, 1.5, 3_600_001]) assert.deepEqual(safeLoginDetails({ retryAfterMs }), {});
  for (const upstreamHttpStatus of [99, 600, '429', NaN]) assert.deepEqual(safeLoginDetails({ upstreamHttpStatus }), {});
  for (const upstreamCode of ['104604', 1.5, NaN]) assert.deepEqual(safeLoginDetails({ upstreamCode }), {});
  // Bounds are inclusive and stay integers.
  assert.deepEqual(safeLoginDetails({ retryAfterMs: 0 }), { retryAfterMs: 0 });
  assert.deepEqual(safeLoginDetails({ retryAfterMs: 3_600_000 }), { retryAfterMs: 3_600_000 });
  assert.deepEqual(safeLoginDetails({ upstreamHttpStatus: 100 }), { upstreamHttpStatus: 100 });
  assert.deepEqual(safeLoginDetails({ upstreamHttpStatus: 599 }), { upstreamHttpStatus: 599 });
});

test('createQqMusicProvider surfaces a failed IPC reply with safe metadata only', async () => {
  const fake = Object.assign(new EventEmitter(), {
    messages: [],
    killed: 0,
    send(message, callback) { this.messages.push(message); callback?.(); },
    kill() { this.killed++; },
  });
  assert.equal(typeof fake.send, 'function');
  assert.equal(typeof fake.kill, 'function');
  let spawns = 0;
  const provider = createQqMusicProvider({ spawnWorker: () => { spawns++; return fake; } });
  try {
    const pending = provider.account('qr.create', { channel: 'qq' });
    assert.equal(spawns, 1);
    fake.emit('message', {
      id: fake.messages[0].id,
      ok: false,
      code: 'LOGIN_UPSTREAM_REJECTED',
      accountState: 'signed_out',
      failureStage: 'credential-exchange',
      failureReason: 'upstream-rejected',
      upstreamCode: 104604,
      upstreamHttpStatus: 429,
      retryAfterMs: 2_000,
      cookie: 'uin=private',
      url: 'https://secret.invalid/?token=private',
      token: 'private',
      message: 'Cookie=private',
      stack: 'private',
      qrKey: 'private',
    });
    await assert.rejects(pending, error => {
      assert.equal(error.code, 'LOGIN_UPSTREAM_REJECTED');
      assert.equal(error.failureStage, 'credential-exchange');
      assert.equal(error.failureReason, 'upstream-rejected');
      assert.equal(error.upstreamCode, 104604);
      assert.equal(error.upstreamHttpStatus, 429);
      assert.equal(error.retryAfterMs, 2_000);
      assert.deepEqual(
        Object.keys(error).sort(),
        ['code', 'failureReason', 'failureStage', 'retryAfterMs', 'upstreamCode', 'upstreamHttpStatus'],
      );
      for (const key of ['cookie', 'url', 'token', 'qrKey']) assert.ok(!(key in error), `leaked ${key}`);
      // message/stack only hold the local static error text, never upstream data.
      assert.match(error.message, /扫码接口暂未接受请求/);
      for (const text of [error.message, String(error.stack)]) assert.ok(!text.includes('private'));
      return true;
    });
  } finally {
    provider.dispose();
  }
  assert.equal(fake.killed, 1);
});
