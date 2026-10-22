import { createMediaService } from './src/host/media-service.js';
import { createStatusTool } from './src/host/status-tool.js';

export const name = 'media-hub';
export const inject = ['tools', 'webServer', 'connection'];
export const STATUS_PATH = '/media-hub/api/status';

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
  ctx.tools.register(createStatusTool(() => service.status()));
}
