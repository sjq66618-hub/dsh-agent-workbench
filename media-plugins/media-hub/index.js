import { createMediaService } from './src/host/media-service.js';
import { createStatusTool } from './src/host/status-tool.js';
import { createMusicTools } from './src/host/music-tools.js';
import { MusicError, toMusicError } from './src/host/music-service.js';

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
      try {
        await handleMusicRequest(req, res, service.music);
      } catch (error) {
        const normalized = toMusicError(error);
        sendJson(res, error instanceof TypeError ? 400 : codeToStatus(normalized.code), {
          error: normalized.code,
          message: normalized.message,
          retryable: normalized.retryable,
          requestId: normalized.requestId,
        });
      }
    },
  }), 'media-hub: authenticated music route');
}

function codeToStatus(code) {
  if (code === 'AUTH_REQUIRED') return 401;
  if (code === 'FORBIDDEN') return 403;
  if (code === 'SERVICE_STOPPED') return 503;
  if (code === 'UPSTREAM_UNAVAILABLE') return 503;
  if (code === 'ABORTED') return 499;
  if (code === 'INVALID_QUERY' || code === 'UNPLAYABLE') return 422;
  return 409;
}

function requestUrl(req) {
  const value = typeof req.url === 'string' ? req.url : MUSIC_PATH;
  return new URL(value, 'http://dsh.local');
}

async function readJson(req) {
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

async function handleMusicRequest(req, res, music) {
  const url = requestUrl(req);
  const op = url.searchParams.get('op');
  if (op === 'search' && req.method === 'GET') {
    sendJson(res, 200, await music.search({ query: url.searchParams.get('query') || '', page: Number(url.searchParams.get('page') || 1), limit: Number(url.searchParams.get('limit') || 20) }));
    return;
  }
  if (op === 'details' && req.method === 'GET') {
    sendJson(res, 200, await music.details({ songMid: url.searchParams.get('songMid') || '' }));
    return;
  }
  if (op === 'lyrics' && req.method === 'GET') {
    sendJson(res, 200, await music.lyrics({ songMid: url.searchParams.get('songMid') || '' }));
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
    sendJson(res, 200, await music.play({ ...body, clientId: body.clientId || 'browser' }));
    return;
  }
  if (op === 'stream' && (req.method === 'GET' || req.method === 'HEAD')) {
    await streamLease(req, res, music, url.searchParams.get('leaseId') || '');
    return;
  }
  sendJson(res, 405, { error: 'Method or operation not allowed' }, { allow: 'GET, POST, HEAD' });
}

async function streamLease(req, res, music, leaseId) {
  const lease = music.getLease(leaseId);
  let upstream;
  try {
    const headers = {};
    if (req.headers?.range) headers.range = req.headers.range;
    if (req.headers?.accept) headers.accept = req.headers.accept;
    upstream = await fetch(lease.url, { method: req.method, headers, redirect: 'error' });
  } catch (error) {
    throw new MusicError('UPSTREAM_UNAVAILABLE', '音频源暂时不可用，请重新播放', { retryable: true, cause: error });
  }
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
  if (req.method === 'HEAD') { res.end(); return; }
  if (upstream.body && typeof res.write === 'function') {
    const { Readable } = await import('node:stream');
    Readable.fromWeb(upstream.body).pipe(res);
    return;
  }
  const body = Buffer.from(await upstream.arrayBuffer());
  res.end(body);
}
