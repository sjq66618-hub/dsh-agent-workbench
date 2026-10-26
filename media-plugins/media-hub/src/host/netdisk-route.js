import { NetdiskError } from '../providers/baidu-netdisk-provider.js';

export const NETDISK_PATH = '/media-hub/api/netdisk';

function send(res, status, value) {
  const body = Buffer.from(JSON.stringify(value));
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'content-length': body.length }); res.end(body);
}
async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { if (Buffer.byteLength(req.body) > 4096) throw new TypeError(); return JSON.parse(req.body); }
  const chunks = []; let size = 0;
  if (!req[Symbol.asyncIterator]) return {};
  for await (const chunk of req) { size += chunk.length; if (size > 4096) throw new TypeError(); chunks.push(Buffer.from(chunk)); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}
export function registerNetdiskRoute(ctx, netdisk) {
  ctx.effect(() => ctx.webServer.register({ kind: 'exact', path: NETDISK_PATH, async handler(req, res) {
    const admission = ctx.connection.admit(req);
    if ('rejection' in admission) { send(res, admission.rejection, { error: 'FORBIDDEN', message: '请通过已登录的 DSH 界面访问' }); return; }
    const controller = new AbortController(); const abort = () => controller.abort();
    const close = () => { if (!res.writableEnded) abort(); };
    req.once?.('aborted', abort); res.once?.('close', close);
    try {
      const url = new URL(req.url || NETDISK_PATH, 'http://media-hub.invalid'); const op = url.searchParams.get('op') || 'status';
      if (req.method === 'GET' && op === 'status') { send(res, 200, netdisk.status()); return; }
      if (req.method === 'POST' && op === 'account') {
        if (req.headers?.['x-media-hub-ui'] !== '1') { send(res, 403, { error: 'FORBIDDEN', message: '请从网盘面板操作账号' }); return; }
        const body = await readBody(req); if (!body || typeof body !== 'object' || Array.isArray(body)) throw new TypeError();
        send(res, 200, await netdisk.account(body.action, { loginId: body.loginId, signal: controller.signal })); return;
      }
      if (req.method === 'GET' && op === 'files') { send(res, 200, await netdisk.list({ path: url.searchParams.get('path') || '/', page: Number(url.searchParams.get('page') || 1), limit: Number(url.searchParams.get('limit') || 100), query: url.searchParams.get('query') || '', signal: controller.signal })); return; }
      if (req.method === 'GET' && op === 'quota') { send(res, 200, await netdisk.quota({ signal: controller.signal })); return; }
      if (['GET', 'HEAD'].includes(req.method) && op === 'download') {
        const unsubscribe = netdisk.onInvalidate(abort); const deadline = setTimeout(abort, 3_600_000);
        try {
          const { file, response } = await netdisk.openDownload(url.searchParams.get('id') || '', { signal: controller.signal, range: req.headers?.range, method: req.method });
          const headers = { 'content-type': 'application/octet-stream', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', 'content-disposition': `attachment; filename="download"; filename*=UTF-8''${encodeURIComponent(file.name).replace(/['()*]/g, char => '%' + char.charCodeAt(0).toString(16))}`, 'accept-ranges': response.headers.get('accept-ranges') || 'bytes' };
          for (const key of ['content-length', 'content-range']) { const value = response.headers.get(key); if (value) headers[key] = value; }
          res.writeHead(response.status, headers);
          if (req.method === 'HEAD') { await response.body?.cancel?.(); res.end(); return; }
          if (response.body) { const { Readable } = await import('node:stream'); const { pipeline } = await import('node:stream/promises'); await pipeline(Readable.fromWeb(response.body), res, { signal: controller.signal }); }
          else res.end();
        } finally { clearTimeout(deadline); unsubscribe(); }
        return;
      }
      send(res, 405, { error: 'METHOD_NOT_ALLOWED', message: '网盘操作或请求方法无效' });
    } catch (error) {
      if (res.headersSent) { res.destroy?.(); return; }
      const safe = error instanceof NetdiskError ? error : new NetdiskError(error instanceof TypeError || error instanceof SyntaxError ? 'INVALID_REQUEST' : 'UPSTREAM_UNAVAILABLE');
      const status = ({ AUTH_REQUIRED: 401, SERVICE_DISABLED: 403, INVALID_REQUEST: 400, QR_EXPIRED: 410, QR_CANCELLED: 410, RATE_LIMITED: 429, DOWNLOAD_UNAVAILABLE: 409, ABORTED: 499 })[safe.code] || 503;
      send(res, status, { error: safe.code, message: safe.message, ...(safe.upstreamCode !== undefined ? { upstreamCode: safe.upstreamCode } : {}), ...(safe.retryAfterMs ? { retryAfterMs: safe.retryAfterMs } : {}) });
    } finally { req.removeListener?.('aborted', abort); res.removeListener?.('close', close); }
  } }), 'media-hub: authenticated netdisk route');
}
