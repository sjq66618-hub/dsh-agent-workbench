import http from 'node:http';
import https from 'node:https';
import tls from 'node:tls';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PAGE = readFileSync(join(HERE, 'page.html'), 'utf8');

const PROXY_CANDIDATES = [...new Set([
  process.env.DSH_WE_WORKSHOP_PROXY,
  'http://127.0.0.1:7890',
  'http://127.0.0.1:7891',
  'http://127.0.0.1:7897',
  'http://127.0.0.1:10808',
  'http://127.0.0.1:10809',
  'http://127.0.0.1:2080',
].filter(Boolean))];
let activeProxy = PROXY_CANDIDATES[0];
const WORKSHOP_DIR = process.env.DSH_WE_WORKSHOP_DIR || 'D:\\SteamLibrary\\steamapps\\workshop\\content\\431960';
const ALLOWED_IMAGE_HOSTS = ['steamusercontent.com', 'steamstatic.com', 'akamai.steamstatic.com'];

export const inject = ['webServer'];

function sendJson(res, status, value) {
  const body = Buffer.from(JSON.stringify(value));
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'content-length': body.length,
  });
  res.end(body);
}

async function proxyFetch(urlStr, options = {}) {
  const ordered = [activeProxy, ...PROXY_CANDIDATES.filter((candidate) => candidate !== activeProxy)];
  let lastError = null;
  for (const candidate of ordered) {
    let res;
    try {
      res = await proxyFetchOnce(urlStr, { ...options, proxy: candidate });
    } catch (err) {
      const code = err && err.code;
      if (code === 'ECONNREFUSED' || code === 'EHOSTUNREACH' || code === 'ENETUNREACH' || code === 'ECONNRESET' || code === 'ETIMEDOUT' || code === 'EPIPE' || /secure TLS connection/.test(String(err && err.message))) {
        lastError = err;
        continue;
      }
      throw err;
    }
    activeProxy = candidate;
    if ([301, 302, 303, 307, 308].includes(res.status) && res.headers.location && (options.redirects ?? 3) > 0) {
      const next = new URL(res.headers.location, urlStr).toString();
      return proxyFetch(next, { ...options, redirects: (options.redirects ?? 3) - 1 });
    }
    return res;
  }
  throw new Error(`没有可用的本机代理（已试 ${PROXY_CANDIDATES.join(', ')}），请先连接 VPN/代理`);
}

function proxyFetchOnce(urlStr, options = {}) {
  const { method = 'GET', body = null, headers = {}, timeout = 20000, maxBytes = 8 * 1024 * 1024 } = options;
  const target = new URL(urlStr);
  const proxy = new URL(options.proxy || activeProxy);
  return new Promise((resolve, reject) => {
    let settled = false;
    const fail = (err) => {
      if (settled) return;
      settled = true;
      reject(err);
    };
    const timer = setTimeout(() => {
      fail(new Error('proxy request timed out'));
    }, timeout);
    const connectReq = http.request({
      host: proxy.hostname,
      port: Number(proxy.port) || 80,
      method: 'CONNECT',
      path: `${target.hostname}:443`,
      headers: { Host: `${target.hostname}:443` },
    });
    connectReq.on('error', (err) => {
      clearTimeout(timer);
      fail(err);
    });
    connectReq.on('connect', (proxyRes, socket) => {
      if (proxyRes.statusCode !== 200) {
        socket.destroy();
        clearTimeout(timer);
        fail(new Error(`proxy CONNECT ${proxyRes.statusCode}`));
        return;
      }
      const secure = tls.connect({ socket, servername: target.hostname }, () => {
        const req = https.request({
          host: target.hostname,
          path: `${target.pathname}${target.search}`,
          method,
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
            accept: '*/*',
            ...headers,
          },
          createConnection: () => secure,
        }, (res) => {
          const chunks = [];
          let size = 0;
          res.on('data', (chunk) => {
            size += chunk.length;
            if (size > maxBytes) {
              req.destroy();
              clearTimeout(timer);
              fail(new Error('response too large'));
              return;
            }
            chunks.push(chunk);
          });
          res.on('end', () => {
            clearTimeout(timer);
            if (settled) return;
            settled = true;
            resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) });
          });
        });
        req.on('error', (err) => {
          clearTimeout(timer);
          fail(err);
        });
        if (body) req.write(body);
        req.end();
      });
      secure.on('error', (err) => {
        clearTimeout(timer);
        fail(err);
      });
    });
    connectReq.end();
  });
}

function scanLibrary() {
  if (!existsSync(WORKSHOP_DIR)) return { dir: WORKSHOP_DIR, count: 0, items: [] };
  const items = [];
  for (const entry of readdirSync(WORKSHOP_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    let title = entry.name;
    let type = '';
    try {
      const project = JSON.parse(readFileSync(join(WORKSHOP_DIR, entry.name, 'project.json'), 'utf8'));
      if (typeof project.title === 'string' && project.title.trim()) title = project.title.trim();
      if (typeof project.type === 'string') type = project.type;
    } catch {}
    items.push({ id: entry.name, title, type });
  }
  items.sort((a, b) => a.title.localeCompare(b.title));
  return { dir: WORKSHOP_DIR, count: items.length, items };
}

async function searchWorkshop(query, page = 1) {
  const q = String(query || '').trim();
  const p = Math.max(1, Math.min(50, Number(page) || 1));
  const base = q
    ? `https://steamcommunity.com/workshop/browse/?appid=431960&searchtext=${encodeURIComponent(q)}&browsesort=textsearch&section=readytouseitems&p=${p}`
    : `https://steamcommunity.com/workshop/browse/?appid=431960&browsesort=trend&section=readytouseitems&days=7&p=${p}`;
  const browse = await proxyFetch(base, { headers: { accept: 'text/html' }, maxBytes: 4 * 1024 * 1024 });
  if (browse.status !== 200) throw new Error(`workshop browse HTTP ${browse.status}`);
  const html = browse.body.toString('utf8');
  const ids = [];
  const seen = new Set();
  for (const match of html.matchAll(/sharedfiles\/filedetails\/\?id=(\d+)/g)) {
    const id = match[1];
    if (!seen.has(id)) {
      seen.add(id);
      ids.push(id);
    }
    if (ids.length >= 30) break;
  }
  if (!ids.length) return { query: q, page: p, total: 0, hasMore: false, results: [] };

  const body = `itemcount=${ids.length}` + ids.map((id, index) => `&publishedfileids[${index}]=${id}`).join('');
  const details = await proxyFetch('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
    maxBytes: 4 * 1024 * 1024,
  });
  if (details.status !== 200) throw new Error(`workshop details HTTP ${details.status}`);
  const parsed = JSON.parse(details.body.toString('utf8'));
  const byId = new Map();
  for (const item of parsed?.response?.publishedfiledetails || []) {
    if (item && item.result === 1) byId.set(String(item.publishedfileid), item);
  }
  const installed = new Set(scanLibrary().items.map((item) => item.id));
  const results = ids.map((id) => {
    const item = byId.get(id);
    if (!item) return null;
    return {
      id,
      title: item.title || id,
      preview: item.preview_url || '',
      size: Number(item.file_size) || 0,
      subscriptions: Number(item.subscriptions) || 0,
      favorited: Number(item.favorited) || 0,
      views: Number(item.views) || 0,
      updated: Number(item.time_updated) || 0,
      installed: installed.has(id),
    };
  }).filter(Boolean);
  return { query: q, page: p, total: results.length, hasMore: ids.length >= 30, results };
}

async function serveImage(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const target = url.searchParams.get('u') || '';
  let parsed;
  try {
    parsed = new URL(target);
  } catch {
    sendJson(res, 400, { error: 'bad image url' });
    return;
  }
  const hostOk = ALLOWED_IMAGE_HOSTS.some((host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`));
  if (!hostOk) {
    sendJson(res, 403, { error: 'image host not allowed' });
    return;
  }
  const image = await proxyFetch(parsed.toString(), { maxBytes: 6 * 1024 * 1024 });
  res.writeHead(image.status === 200 ? 200 : 502, {
    'content-type': image.headers['content-type'] || 'image/jpeg',
    'cache-control': 'public, max-age=86400',
    'content-length': image.body.length,
  });
  res.end(image.body);
}

export function apply(ctx) {
  ctx.webServer.register({
    kind: 'exact',
    path: '/we-workshop',
    handler: (req, res) => {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
      res.end(PAGE);
    },
  });

  ctx.webServer.register({
    kind: 'exact',
    path: '/we-workshop/api/search',
    handler: async (req, res) => {
      try {
        const url = new URL(req.url, 'http://localhost');
        const result = await searchWorkshop(url.searchParams.get('q') || '', url.searchParams.get('page') || 1);
        sendJson(res, 200, result);
      } catch (err) {
        sendJson(res, 502, { error: err?.message || String(err) });
      }
    },
  });

  ctx.webServer.register({
    kind: 'exact',
    path: '/we-workshop/api/library',
    handler: (req, res) => {
      try {
        sendJson(res, 200, scanLibrary());
      } catch (err) {
        sendJson(res, 500, { error: err?.message || String(err) });
      }
    },
  });

  ctx.webServer.register({
    kind: 'exact',
    path: '/we-workshop/api/img',
    handler: async (req, res) => {
      try {
        await serveImage(req, res);
      } catch (err) {
        sendJson(res, 502, { error: err?.message || String(err) });
      }
    },
  });
}

export { searchWorkshop, proxyFetch, scanLibrary };

