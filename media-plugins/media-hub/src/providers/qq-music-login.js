// The only SDK diagnostic fields allowed across the worker/UI boundary.
// Never forward arbitrary SDK objects, messages, URLs, cookies or QR keys.
const STAGES = new Set(['qr-key', 'device-bootstrap', 'session-bootstrap', 'qr-create', 'mqtt-listener', 'qr-poll', 'qr-event', 'credential-payload', 'credential-exchange', 'credential-validation', 'session-issue']);
const REASONS = new Set(['local-backoff', 'session-busy', 'upstream-http-error', 'upstream-rejected', 'mqtt-websocket-error', 'mqtt-websocket-closed', 'mqtt-packet-timeout', 'mqtt-handshake-timeout', 'mqtt-handshake-failed', 'missing-credential', 'network-timeout', 'dns-error', 'connection-reset', 'connection-refused', 'network-error', 'login-rejected', 'user-canceled', 'qr-timeout', 'unexpected-error']);

export function safeLoginDetails(value) {
  const source = value?.diagnostics ?? value ?? {};
  const result = {};
  if (STAGES.has(source.failureStage)) result.failureStage = source.failureStage;
  if (REASONS.has(source.failureReason)) result.failureReason = source.failureReason;
  const code = source.upstreamCode ?? value?.upstreamCode;
  if (Number.isSafeInteger(code)) result.upstreamCode = code;
  if (Number.isSafeInteger(source.upstreamHttpStatus) && source.upstreamHttpStatus >= 100 && source.upstreamHttpStatus <= 599) result.upstreamHttpStatus = source.upstreamHttpStatus;
  const delay = value?.retryAfterMs ?? source.retryAfterMs;
  if (Number.isSafeInteger(delay) && delay >= 0 && delay <= 3_600_000) result.retryAfterMs = delay;
  return result;
}
