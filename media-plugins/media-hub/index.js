import { createMediaService } from './src/host/media-service.js';
import { createStatusTool } from './src/host/status-tool.js';
import { createMusicTools } from './src/host/music-tools.js';
import { MusicError, toMusicError } from './src/host/music-service.js';
import { safeLoginDetails } from './src/providers/qq-music-login.js';
import { registerNetdiskRoute } from './src/host/netdisk-route.js';

export const name = 'media-hub';
export const inject = ['tools', 'webServer', 'connection'];
export const STATUS_PATH = '/media-hub/api/status';
export const MUSIC_PATH = '/media-hub/api/music';

function sendJson(res, status, value, headers = {}) {
  const body = Buffer.from(JSON.stringify(value));
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'content-length': body.length,
    ...headers,
  });
  res.end(body);
}

export function apply(ctx, config = {}) {
  const service = createMediaService(config);
  registerNetdiskRoute(ctx, service.netdisk);
  ctx.effect(() => () => service.dispose(), 'media-hub: service');
  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: STATUS_PATH,
    handler(req, res) {
      const admission = ctx.connection.admit(req);
      if ('rejection' in admission) {
        sendJson(res, admission.rejection, { error: 'Authentication or trusted origin required' });
        return;
      }
      if (req.method !== 'GET') {
        sendJson(res, 405, { error: 'Method not allowed' }, { allow: 'GET' });
        return;
      }
      sendJson(res, 200, service.status());
    },
  }), 'media-hub: authenticated status route');
  ctx.effect(() => ctx.tools.register(createStatusTool(() => service.status())), 'media-hub: status tool');
  for (const musicTool of createMusicTools(service.music)) ctx.effect(() => ctx.tools.register(musicTool), `media-hub: ${musicTool.name}`);
  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: MUSIC_PATH,
    async handler(req, res) {
      const admission = ctx.connection.admit(req);
      if ('rejection' in admission) {
        sendJson(res, admission.rejection, { error: 'Authentication or trusted origin required' });
        return;
      }
      const controller = new AbortController();
      const abort = () => controller.abort();
      req.once?.('aborted', abort);
      const close = () => { if (!res.writableEnded) abort(); };
      res.once?.('close', close);
      try {
        await handleMusicRequest(req, res, service.music, controller.signal);
      } catch (error) {
        if (res.headersSent) { res.destroy?.(); return; }
        const normalized = toMusicError(error);
        sendJson(res, error instanceof TypeError ? 400 : codeToStatus(normalized.code), {
          error: normalized.code,
          message: normalized.message,
          retryable: normalized.retryable,
          requestId: normalized.requestId,
          ...safeLoginDetails(normalized),
        }, normalized.retryAfterMs > 0 ? { 'retry-after': String(Math.ceil(normalized.retryAfterMs / 1000)) } : {});
      } finally { req.removeListener?.('aborted', abort); res.removeListener?.('close', close); }
    },
  }), 'media-hub: authenticated music route');
}

function codeToStatus(code) {
  if (code === 'RATE_LIMITED') return 429;
  if (code === 'SERVICE_DISABLED') return 403;
  if (code === 'INVALID_REQUEST') return 400;
  if (code === 'AUTH_REQUIRED') return 401;
  if (code === 'FORBIDDEN') return 403;
  if (code === 'SERVICE_STOPPED') return 503;
  if (code === 'UPSTREAM_UNAVAILABLE') return 503;
  if (code.startsWith('LOGIN_')) return 503;
  if (code === 'ABORTED') return 499;
  if (code === 'INVALID_QUERY' || code === 'UNPLAYABLE') return 422;
  return 409;
}

function requestUrl(req) {
  const value = typeof req.url === 'string' ? req.url : MUSIC_PATH;
  return new URL(value, 'http://dsh.local');
}

async function readJson(req) {
  try { return await parseJson(req); } catch (error) {
    if (error instanceof SyntaxError) throw new TypeError('请求必须为有效的 JSON');
    throw error;
  }
}
async function parseJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  if (!req || typeof req[Symbol.asyncIterator] !== 'function') return {};
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    const buffer = Buffer.from(chunk);
    size += buffer.length;
    if (size > 128 * 1024) throw new TypeError('request body too large');
    chunks.push(buffer);
  }
  if (!size) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function handleMusicRequest(req, res, music, signal) {
  const url = requestUrl(req);
  const op = url.searchParams.get('op');
  if (op === 'library' && req.method === 'GET') {
    sendJson(res, 200, await music.library({ kind: url.searchParams.get('kind') || 'playlists', offset: Number(url.searchParams.get('offset') || 0), limit: Number(url.searchParams.get('limit') || 20), id: url.searchParams.get('id') || '', dirId: url.searchParams.get('dirId') || '', signal }));
    return;
  }
  if (op === 'account' && req.method === 'POST') {
    if (req.headers?.['x-media-hub-ui'] !== '1') throw new MusicError('FORBIDDEN', '请从音乐面板操作账号');
    const body = await readJson(req);
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new TypeError('账号请求格式无效');
    if (!['status', 'qr.create', 'qr.check', 'qr.cancel', 'logout'].includes(body.action)) throw new TypeError('账号操作无效');
    sendJson(res, 200, await music.account(body.action, { channel: body.channel, loginId: body.loginId, signal }));
    return;
  }
  if (op === 'search' && req.method === 'GET') {
    sendJson(res, 200, await music.search({ query: url.searchParams.get('query') || '', page: Number(url.searchParams.get('page') || 1), limit: Number(url.searchParams.get('limit') || 20), signal }));
    return;
  }
  if (op === 'details' && req.method === 'GET') {
    sendJson(res, 200, await music.details({ songMid: url.searchParams.get('songMid') || '', signal }));
    return;
  }
  if (op === 'lyrics' && req.method === 'GET') {
    sendJson(res, 200, await music.lyrics({ songMid: url.searchParams.get('songMid') || '', signal }));
    return;
  }
  if (op === 'queue' && (req.method === 'GET' || req.method === 'POST')) {
    const body = req.method === 'POST' ? await readJson(req) : {};
    if (req.method === 'GET') body.clientId = url.searchParams.get('clientId') || 'browser';
    sendJson(res, 200, await music.queue(body));
    return;
  }
  if (op === 'play' && req.method === 'POST') {
    const body = await readJson(req);
    sendJson(res, 200, await music.play({ ...body, clientId: body.clientId || 'browser', signal }));
    return;
  }
  if (op === 'stream' && (req.method === 'GET' || req.method === 'HEAD')) {
    await streamLease(req, res, music, url.searchParams.get('leaseId') || '', signal);
    return;
  }
  sendJson(res, 405, { error: 'Method or operation not allowed' }, { allow: 'GET, POST, HEAD' });
}

async function streamLease(req, res, music, leaseId, signal) {
  const lease = music.getLease(leaseId);
  music.validateStreamUrl(lease.url);
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal?.addEventListener('abort', abort, { once: true });
  if (signal?.aborted) abort();
  let timer = setTimeout(abort, 10_000);
  const unsubscribe = music.onInvalidate(abort);
  let upstream;
  try {
  try {
    const headers = {};
    if (req.headers?.range) {
      if (!/^bytes=\d*-\d*$/.test(req.headers.range) || req.headers.range === 'bytes=-') throw new TypeError('音频 Range 无效');
      headers.range = req.headers.range;
    }
    upstream = await fetch(lease.url, { method: req.method, headers, redirect: 'error', signal: controller.signal });
  } catch (error) {
    if (error instanceof TypeError && error.message === '音频 Range 无效') throw error;
    throw new MusicError('UPSTREAM_UNAVAILABLE', '音频源暂时不可用，请重新播放', { retryable: true, cause: error });
  }
  clearTimeout(timer); timer = setTimeout(abort, 600_000);
  if (!upstream.ok) throw new MusicError(upstream.status === 401 || upstream.status === 403 ? 'UNPLAYABLE' : 'UPSTREAM_UNAVAILABLE', `音频源返回 HTTP ${upstream.status}`, { retryable: upstream.status >= 500 });
  const responseHeaders = {
    'content-type': upstream.headers?.get?.('content-type') || lease.mimeType,
    'cache-control': 'no-store',
    'accept-ranges': upstream.headers?.get?.('accept-ranges') || 'bytes',
  };
  const length = upstream.headers?.get?.('content-length');
  if (length) responseHeaders['content-length'] = length;
  const range = upstream.headers?.get?.('content-range');
  if (range) responseHeaders['content-range'] = range;
  res.writeHead(upstream.status, responseHeaders);
  if (req.method === 'HEAD') { await upstream.body?.cancel?.(); res.end(); return; }
  if (upstream.body) {
    const { Readable } = await import('node:stream');
    const { pipeline } = await import('node:stream/promises');
    await pipeline(Readable.fromWeb(upstream.body), res, { signal: controller.signal });
    return;
  }
  res.end();
  } finally { unsubscribe(); clearTimeout(timer); signal?.removeEventListener('abort', abort); if (!upstream?.bodyUsed) await upstream?.body?.cancel?.().catch(() => {}); }
}
