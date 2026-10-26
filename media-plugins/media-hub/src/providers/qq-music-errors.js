import { providerError } from './qq-music-provider.js';
import { safeLoginDetails } from './qq-music-login.js';

// Only static categories and allowlisted diagnostic fields cross IPC.
export function classifyQqMusicError(error, op) {
  const known = providerError(error?.code).code;
  if (known !== 'UPSTREAM_UNAVAILABLE') return known;
  const status = error?.httpStatus ?? error?.response?.status;
  const details = safeLoginDetails(error);
  const reason = details.failureReason;
  if (status === 429 || details.upstreamHttpStatus === 429 || details.upstreamCode === 104604 || reason === 'local-backoff') return 'RATE_LIMITED';
  if (status === 409 || reason === 'session-busy') return 'CONFLICT';
  if (status === 401) return 'AUTH_REQUIRED';
  if (status === 403) return 'FORBIDDEN';
  if (!op.startsWith('qr.')) return 'UPSTREAM_UNAVAILABLE';
  if (['network-timeout', 'mqtt-packet-timeout', 'mqtt-handshake-timeout'].includes(reason)) return 'LOGIN_TIMEOUT';
  if (['dns-error', 'connection-reset', 'connection-refused', 'network-error', 'mqtt-websocket-error', 'mqtt-websocket-closed', 'mqtt-handshake-failed'].includes(reason)) return 'LOGIN_CONNECTION_FAILED';
  if (details.failureStage === 'credential-validation' && [1000, 104401, 104400].includes(details.upstreamCode)) return 'LOGIN_CREDENTIAL_FAILED';
  if (['upstream-http-error', 'upstream-rejected', 'login-rejected'].includes(reason)) return 'LOGIN_UPSTREAM_REJECTED';
  if (reason === 'missing-credential' || (reason === 'unexpected-error' && details.failureStage?.startsWith('credential-'))) return 'LOGIN_CREDENTIAL_FAILED';
  return 'UPSTREAM_UNAVAILABLE';
}

export function terminalQrResult(result) {
  const details = safeLoginDetails(result);
  if (details.failureReason === 'user-canceled') return { state: 'cancelled', ...details };
  if (details.failureReason === 'qr-timeout' || (result?.code === 800 && !details.failureReason && !details.failureStage && details.upstreamCode === undefined && details.upstreamHttpStatus === undefined)) return { state: 'expired', ...details };
  const code = classifyQqMusicError({ diagnostics: details }, 'qr.check');
  throw providerError(code === 'UPSTREAM_UNAVAILABLE' ? 'LOGIN_FAILED' : code, details);
}
