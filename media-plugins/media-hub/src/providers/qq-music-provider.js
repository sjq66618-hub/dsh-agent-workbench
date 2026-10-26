import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { safeLoginDetails } from './qq-music-login.js';

const WORKER = fileURLToPath(new URL('./qq-music-worker.js', import.meta.url));
const ERRORS = Object.freeze({
  AUTH_REQUIRED: '请先在音乐面板扫码登录 QQ 音乐',
  FORBIDDEN: '当前账号没有此操作的权限',
  UNPLAYABLE: '当前账号或曲目不支持完整播放，未自动切换试听',
  INVALID_QUERY: '搜索词最多 60 个字符，每页最多 20 首',
  INVALID_REQUEST: '音乐请求参数无效',
  CONFLICT: '另一项登录操作正在进行，请稍后重试',
  RATE_LIMITED: '扫码请求过于频繁，请稍后重新获取二维码',
  ABORTED: '音乐请求已取消',
  SERVICE_STOPPED: '音乐服务已停止',
  UPSTREAM_UNAVAILABLE: 'QQ 音乐服务暂不可用，请稍后重试',
  LOGIN_CONNECTION_FAILED: '连接 QQ 音乐扫码服务失败（网络或握手异常），与 DSH 网页版是否登录无关，请重新获取二维码',
  LOGIN_TIMEOUT: '连接 QQ 音乐扫码服务超时，请重新获取二维码',
  LOGIN_UPSTREAM_REJECTED: 'QQ 音乐扫码接口暂未接受请求，请稍后重新获取二维码',
  LOGIN_CREDENTIAL_FAILED: '扫码后的 QQ 音乐账号验证失败，请稍后重新获取二维码',
  LOGIN_FAILED: 'QQ 音乐扫码登录失败，请稍后重试',
});
export function providerError(code, details) {
  const error = new Error(ERRORS[code] || ERRORS.UPSTREAM_UNAVAILABLE);
  error.code = Object.hasOwn(ERRORS, code) ? code : 'UPSTREAM_UNAVAILABLE';
  Object.assign(error, safeLoginDetails(details));
  return error;
}

export function validateQqAudioUrl(value) {
  let url;
  try { url = new URL(value); } catch { throw providerError('UNPLAYABLE'); }
  const host = url.hostname.toLowerCase();
  const allowed = host.endsWith('.stream.qqmusic.qq.com') || host === 'stream.qqmusic.qq.com' || host === 'aqqmusic.tc.qq.com';
  if (!allowed || !['http:', 'https:'].includes(url.protocol) || url.username || url.password || (url.port && !['80', '443'].includes(url.port))) throw providerError('UNPLAYABLE');
  return url.toString();
}

function workerEnvironment() {
  const env = { LOG_LEVEL: 'silent', NODE_ENV: 'production', ELECTRON_RUN_AS_NODE: '1' };
  for (const name of ['SystemRoot', 'WINDIR', 'PATH', 'Path', 'TEMP', 'TMP', 'ComSpec']) if (process.env[name]) env[name] = process.env[name];
  return env;
}

/** No process, network, listener, credential reads or SDK imports until a call. */
export function createQqMusicProvider({ timeoutMs = 10_000, authTimeoutMs = 35_000, maxPending = 8, spawnWorker } = {}) {
  if (!Number.isInteger(maxPending) || maxPending < 1 || maxPending > 64) throw new TypeError('Invalid provider concurrency limit');
  if (!Number.isInteger(timeoutMs) || timeoutMs < 10 || timeoutMs > 60_000 || !Number.isInteger(authTimeoutMs) || authTimeoutMs < 10 || authTimeoutMs > 60_000) throw new TypeError('Invalid provider deadline');
  let child; let disposed = false; let nextId = 0; let accountState = 'signed_out';
  let runtimeState = 'idle'; let networkState = 'not_checked';
  let lastFailure = 'none';
  const pending = new Map(); const resetListeners = new Set();
  function invalidate() { accountState = 'signed_out'; for (const listener of resetListeners) listener(); }
  function reset(code = 'UPSTREAM_UNAVAILABLE', reason = 'none') {
    lastFailure = reason;
    networkState = code === 'ABORTED' || disposed ? 'not_checked' : 'failed';
    const old = child; child = undefined; runtimeState = disposed ? 'stopped' : 'idle'; invalidate();
    for (const job of pending.values()) { job.cleanup(); job.reject(providerError(code)); }
    pending.clear();
    if (old) { old.removeAllListeners('message'); try { old.kill(); } catch {} }
  }
  function start() {
    if (child) return child;
    const proc = spawnWorker ? spawnWorker() : fork(WORKER, [], {
      cwd: fileURLToPath(new URL('../../', import.meta.url)), execArgv: [],
      env: workerEnvironment(), stdio: ['ignore', 'ignore', 'ignore', 'ipc'], windowsHide: true, serialization: 'json',
    });
    child = proc; runtimeState = 'running';
    proc.on('error', () => { if (child === proc) reset('UPSTREAM_UNAVAILABLE', 'spawn_error'); });
    proc.on('exit', () => { if (child === proc) reset('UPSTREAM_UNAVAILABLE', 'worker_exit'); });
    proc.on('message', message => {
      if (child !== proc || !message || typeof message !== 'object') return;
      const job = pending.get(message.id); if (!job) return;
      pending.delete(message.id); job.cleanup();
      if (['signed_out', 'waiting', 'scanned', 'authenticated'].includes(message.accountState)) {
        if (accountState === 'authenticated' && message.accountState !== 'authenticated') invalidate();
        accountState = message.accountState;
      }
      if (message.ok === true) {
        lastFailure = 'none';
        if (['search', 'details', 'lyrics', 'playback'].includes(job.op) || job.op.startsWith('library.')) networkState = 'verified';
        job.resolve(message.value);
      } else {
        lastFailure = 'provider_rejected';
        if (['UPSTREAM_UNAVAILABLE', 'LOGIN_CONNECTION_FAILED', 'LOGIN_TIMEOUT', 'LOGIN_UPSTREAM_REJECTED'].includes(message.code)) networkState = 'failed';
        job.reject(providerError(message.code, message));
      }
    });
    return proc;
  }
  function call(op, args = {}, deadline = timeoutMs) {
    if (disposed) return Promise.reject(providerError('SERVICE_STOPPED'));
    if (args.signal?.aborted) return Promise.reject(providerError('ABORTED'));
    if (pending.size >= maxPending) return Promise.reject(providerError('CONFLICT'));
    let proc; try { proc = start(); } catch { reset('UPSTREAM_UNAVAILABLE', 'spawn_error'); return Promise.reject(providerError('UPSTREAM_UNAVAILABLE')); }
    const id = ++nextId; const { signal, ...payload } = args;
    return new Promise((resolve, reject) => {
      const failRead = code => { if (!pending.has(id)) return; pending.delete(id); cleanup(); reject(providerError(code)); };
      const abort = () => op.startsWith('library.') ? failRead('ABORTED') : reset('ABORTED');
      const timer = setTimeout(() => { if (op.startsWith('library.')) failRead('UPSTREAM_UNAVAILABLE'); else reset('UPSTREAM_UNAVAILABLE', 'request_timeout'); }, deadline);
      const cleanup = () => { clearTimeout(timer); signal?.removeEventListener('abort', abort); };
      pending.set(id, { resolve, reject, cleanup, op }); signal?.addEventListener('abort', abort, { once: true });
      try { proc.send({ id, op, args: payload }, error => { if (error && child === proc) reset('UPSTREAM_UNAVAILABLE', 'ipc_error'); }); } catch { reset('UPSTREAM_UNAVAILABLE', 'ipc_error'); }
    });
  }
  function status() { return {
    state: networkState === 'verified' ? 'ready' : 'configured', accountState, runtimeState, networkState, lastFailure,
    capabilities: { search: true, details: true, lyrics: true, playback: accountState === 'authenticated', queue: true, library: accountState === 'authenticated' },
  }; }
  return Object.freeze({
    available: true, get accountState() { return accountState; }, status,
    validatePlaybackUrl: validateQqAudioUrl,
    onReset(listener) { resetListeners.add(listener); return () => resetListeners.delete(listener); },
    search(args) { if (typeof args?.query !== 'string' || !args.query.trim() || args.query.length > 60 || !Number.isInteger(args.limit) || args.limit < 1 || args.limit > 20 || !Number.isInteger(args.page) || args.page < 1) return Promise.reject(providerError('INVALID_QUERY')); return call('search', args); },
    details(args) { return call('details', args); }, lyrics(args) { return call('lyrics', args); },
    playback(args) { if (accountState !== 'authenticated') return Promise.reject(providerError('AUTH_REQUIRED')); return call('playback', args); },
    library(args) {
      if (accountState !== 'authenticated') return Promise.reject(providerError('AUTH_REQUIRED'));
      if (!['playlists', 'liked', 'tracks'].includes(args?.kind)) return Promise.reject(providerError('INVALID_REQUEST'));
      return call('library.' + args.kind, args, authTimeoutMs);
    },
    account(action, args = {}) {
      if (disposed) return Promise.reject(providerError('SERVICE_STOPPED'));
      if (action === 'status') return Promise.resolve({ ...status(), channels: ['qq', 'wechat', 'qqmusic'], sessionStorage: 'memory' });
      if (!['qr.create', 'qr.check', 'qr.cancel', 'logout'].includes(action)) return Promise.reject(providerError('INVALID_REQUEST'));
      if (action === 'logout') { reset('ABORTED'); return Promise.resolve({ state: 'signed_out' }); }
      return call(action, args, ['qr.create', 'qr.check'].includes(action) ? authTimeoutMs : timeoutMs);
    },
    dispose() { if (disposed) return; disposed = true; reset('SERVICE_STOPPED'); resetListeners.clear(); },
  });
}
