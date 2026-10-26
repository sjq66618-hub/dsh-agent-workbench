import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyQqMusicError } from '../src/providers/qq-music-errors.js';
import { providerError } from '../src/providers/qq-music-provider.js';

test('wrapped 502 keeps the actual QR network failure distinct from account login', () => {
  for (const reason of ['connection-reset', 'dns-error', 'mqtt-handshake-failed']) {
    const error = { httpStatus: 502, diagnostics: { failureReason: reason }, message: 'Cookie=private', url: 'https://secret.invalid/?token=private' };
    const code = classifyQqMusicError(error, 'qr.create');
    assert.equal(code, 'LOGIN_CONNECTION_FAILED');
    assert.match(providerError(code).message, /与 DSH 网页版是否登录无关/);
    assert.ok(!providerError(code).message.includes('private'));
  }
});
test('QR timeout, upstream rejection and local admission stay separate', () => {
  assert.equal(classifyQqMusicError({ httpStatus: 502, diagnostics: { failureReason: 'network-timeout' } }, 'qr.create'), 'LOGIN_TIMEOUT');
  assert.equal(classifyQqMusicError({ httpStatus: 502, diagnostics: { failureReason: 'upstream-rejected' } }, 'qr.create'), 'LOGIN_UPSTREAM_REJECTED');
  for (const [status, code] of [[429, 'RATE_LIMITED'], [409, 'CONFLICT'], [401, 'AUTH_REQUIRED'], [403, 'FORBIDDEN']])
    assert.equal(classifyQqMusicError({ httpStatus: status, code: 'UNKNOWN' }, 'qr.create'), code);
});
test('unknown diagnostics never cross the static error boundary', () => {
  assert.equal(classifyQqMusicError({ code: 'secret', diagnostics: { failureReason: 'cookie=private' } }, 'qr.create'), 'UPSTREAM_UNAVAILABLE');
  assert.equal(classifyQqMusicError({ code: 'ABORTED' }, 'qr.create'), 'ABORTED');
  assert.equal(classifyQqMusicError({ diagnostics: { failureReason: 'connection-reset' } }, 'search'), 'UPSTREAM_UNAVAILABLE');
});
test('QQ credential rejection after successful phone authorization is not QR expiry or throttling', () => {
  for (const upstreamCode of [1000, 104401, 104400]) {
    const error = { httpStatus: 502, retryAfterMs: 8_000, diagnostics: {
      failureStage: 'credential-validation', failureReason: 'upstream-rejected', upstreamCode, upstreamHttpStatus: 200,
    } };
    assert.equal(classifyQqMusicError(error, 'qr.check'), 'LOGIN_CREDENTIAL_FAILED');
  }
});
