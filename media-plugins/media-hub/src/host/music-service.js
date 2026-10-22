import { randomUUID } from 'node:crypto';

export const MUSIC_SCHEMA_VERSION = 1;
export const MUSIC_LEASE_PATH = '/media-hub/api/music?op=stream&leaseId=';

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 50;
const MAX_QUERY_LENGTH = 160;
const DEFAULT_LEASE_TTL_MS = 120_000;

export class MusicError extends Error {
  constructor(code, message, { retryable = false, requestId = randomUUID(), cause } = {}) {
    super(message, { cause });
    this.name = 'MusicError';
    this.code = code;
    this.retryable = retryable;
    this.requestId = requestId;
  }
}

function unavailable(operation) {
  throw new MusicError('UPSTREAM_UNAVAILABLE', `QQ 音乐 provider 未配置，无法执行${operation}`, { retryable: true });
}

export function createUnavailableMusicProvider() {
  return Object.freeze({
    available: false,
    async search() { return unavailable('搜索'); },
    async details() { return unavailable('曲目详情'); },
    async lyrics() { return unavailable('歌词读取'); },
    async playback() { return unavailable('授权播放'); },
  });
}

function ensureObject(value, name) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new TypeError(`${name} must be an object`);
  return value;
}

function ensureSongMid(value) {
  if (typeof value !== 'string' || !value.trim() || value.length > 200 || /[\u0000-\u001f]/.test(value)) {
    throw new TypeError('songMid must be a non-empty string');
  }
  return value.trim();
}

function normalizeTrack(value) {
  ensureObject(value, 'track');
  const songMid = ensureSongMid(value.songMid ?? value.mid ?? value.id);
  const title = typeof value.title === 'string' && value.title ? value.title : '未知歌曲';
  const artist = typeof value.artist === 'string' ? value.artist : (typeof value.singer === 'string' ? value.singer : '');
  const album = typeof value.album === 'string' ? value.album : '';
  const durationMs = Number.isFinite(value.durationMs) && value.durationMs >= 0 ? Math.floor(value.durationMs) : null;
  return { songMid, title, artist, album, durationMs };
}

function normalizeProviderError(error, operation) {
  if (error instanceof MusicError) return error;
  const code = typeof error?.code === 'string' ? error.code : 'UPSTREAM_UNAVAILABLE';
  const allowed = new Set(['AUTH_REQUIRED', 'FORBIDDEN', 'UNPLAYABLE', 'UPSTREAM_UNAVAILABLE', 'ABORTED', 'CONFLICT']);
  return new MusicError(allowed.has(code) ? code : 'UPSTREAM_UNAVAILABLE', error?.message || `${operation}失败`, {
    retryable: code === 'UPSTREAM_UNAVAILABLE' || code === 'ETIMEDOUT',
    cause: error,
  });
}

function assertNotDisposed(disposed) {
  if (disposed) throw new MusicError('SERVICE_STOPPED', '音乐服务已停止');
}

function normalizeQueue(value) {
  return value.map(item => normalizeTrack(item));
}

export function createMusicService({ provider, now = () => Date.now(), leaseTtlMs = DEFAULT_LEASE_TTL_MS, maxQueue = 100 } = {}) {
  if (!Number.isInteger(leaseTtlMs) || leaseTtlMs < 1_000 || leaseTtlMs > 3_600_000) throw new TypeError('leaseTtlMs must be between 1000 and 3600000');
  if (!Number.isInteger(maxQueue) || maxQueue < 1 || maxQueue > 1_000) throw new TypeError('maxQueue must be between 1 and 1000');
  const upstream = provider && typeof provider === 'object' ? provider : createUnavailableMusicProvider();
  const queueByClient = new Map();
  const leases = new Map();
  let disposed = false;

  async function call(name, operation, args) {
    assertNotDisposed(disposed);
    const method = upstream[name];
    if (typeof method !== 'function') throw new MusicError('UNSUPPORTED_CAPABILITY', `provider 未实现${operation}`);
    try {
      return await method.call(upstream, args);
    } catch (error) {
      throw normalizeProviderError(error, operation);
    }
  }

  async function search(args = {}) {
    ensureObject(args, 'search args');
    const query = typeof args.query === 'string' ? args.query.trim() : '';
    if (!query || query.length > MAX_QUERY_LENGTH) throw new MusicError('INVALID_QUERY', '搜索词不能为空且不得超过 160 个字符');
    const page = Number.isInteger(args.page) && args.page > 0 ? args.page : 1;
    const limit = Number.isInteger(args.limit) ? Math.min(Math.max(args.limit, 1), MAX_LIMIT) : DEFAULT_LIMIT;
    const raw = await call('search', '搜索', { query, page, limit, signal: args.signal });
    const items = Array.isArray(raw) ? raw : Array.isArray(raw?.items) ? raw.items : [];
    return {
      schemaVersion: MUSIC_SCHEMA_VERSION,
      query,
      page,
      limit,
      items: items.slice(0, limit).map(normalizeTrack),
      hasMore: typeof raw?.hasMore === 'boolean' ? raw.hasMore : items.length > limit,
    };
  }

  async function details(args = {}) {
    ensureObject(args, 'details args');
    const songMid = ensureSongMid(args.songMid);
    const raw = await call('details', '曲目详情', { songMid, signal: args.signal });
    return { schemaVersion: MUSIC_SCHEMA_VERSION, track: normalizeTrack(raw?.track ?? raw) };
  }

  async function lyrics(args = {}) {
    ensureObject(args, 'lyrics args');
    const songMid = ensureSongMid(args.songMid);
    const raw = await call('lyrics', '歌词读取', { songMid, signal: args.signal });
    const value = typeof raw === 'string' ? { lyric: raw } : ensureObject(raw, 'lyrics result');
    return {
      schemaVersion: MUSIC_SCHEMA_VERSION,
      songMid,
      lyric: typeof value.lyric === 'string' ? value.lyric : '',
      translatedLyric: typeof value.translatedLyric === 'string' ? value.translatedLyric : null,
      hasLyric: typeof value.lyric === 'string' && value.lyric.length > 0,
    };
  }

  function clientId(value) {
    if (value === undefined) return 'default';
    if (typeof value !== 'string' || !value.trim() || value.length > 200) throw new TypeError('clientId must be a non-empty string');
    return value.trim();
  }

  async function queue(args = {}) {
    ensureObject(args, 'queue args');
    const id = clientId(args.clientId);
    const action = args.action || 'get';
    const current = queueByClient.get(id) || [];
    if (action === 'get') return { schemaVersion: MUSIC_SCHEMA_VERSION, clientId: id, items: normalizeQueue(current) };
    if (action === 'clear') {
      queueByClient.set(id, []);
      return { schemaVersion: MUSIC_SCHEMA_VERSION, clientId: id, items: [] };
    }
    if (action === 'next') {
      const items = current.slice();
      const next = items.shift() || null;
      queueByClient.set(id, items);
      return { schemaVersion: MUSIC_SCHEMA_VERSION, clientId: id, next: next ? normalizeTrack(next) : null, items: normalizeQueue(items) };
    }
    if (action !== 'add') throw new TypeError('queue action must be one of get, add, next, clear');
    const track = normalizeTrack(args.track);
    if (current.some(item => item.songMid === track.songMid)) return { schemaVersion: MUSIC_SCHEMA_VERSION, clientId: id, items: normalizeQueue(current), added: false };
    if (current.length >= maxQueue) throw new MusicError('CONFLICT', '播放队列已达到上限');
    const next = current.concat(track);
    queueByClient.set(id, next);
    return { schemaVersion: MUSIC_SCHEMA_VERSION, clientId: id, items: normalizeQueue(next), added: true };
  }

  async function play(args = {}) {
    ensureObject(args, 'play args');
    const id = clientId(args.clientId);
    const songMid = ensureSongMid(args.songMid);
    const trackResult = args.track ? { track: normalizeTrack(args.track) } : await details({ songMid, signal: args.signal });
    const raw = await call('playback', '授权播放', { songMid, signal: args.signal });
    const sourceUrl = typeof raw === 'string' ? raw : raw?.url;
    let parsed;
    try { parsed = new URL(sourceUrl); } catch { parsed = null; }
    if (!parsed || !['http:', 'https:'].includes(parsed.protocol)) throw new MusicError('UNPLAYABLE', 'provider 未返回可播放的 HTTP(S) 音频地址');
    const createdAt = now();
    const leaseId = randomUUID();
    const expiresAt = createdAt + leaseTtlMs;
    leases.set(leaseId, { leaseId, clientId: id, songMid, url: parsed.toString(), mimeType: typeof raw?.mimeType === 'string' ? raw.mimeType : 'audio/mpeg', createdAt, expiresAt });
    return { schemaVersion: MUSIC_SCHEMA_VERSION, state: 'ready', leaseId, streamPath: `${MUSIC_LEASE_PATH}${leaseId}`, expiresAt, track: trackResult.track };
  }

  function getLease(leaseId, expectedClientId) {
    assertNotDisposed(disposed);
    if (typeof leaseId !== 'string' || !leaseId) throw new MusicError('UNPLAYABLE', '播放租约无效');
    const lease = leases.get(leaseId);
    if (!lease || lease.expiresAt <= now()) {
      leases.delete(leaseId);
      throw new MusicError('UNPLAYABLE', '播放租约已失效，请重新播放');
    }
    if (expectedClientId !== undefined && lease.clientId !== clientId(expectedClientId)) throw new MusicError('FORBIDDEN', '播放租约不属于当前客户端');
    return { ...lease };
  }

  function revokeClient(value) {
    const id = clientId(value);
    for (const [leaseId, lease] of leases) if (lease.clientId === id) leases.delete(leaseId);
    queueByClient.delete(id);
  }

  function status() {
    assertNotDisposed(disposed);
    const accountState = typeof upstream.accountState === 'string' ? upstream.accountState : 'not_checked';
    return {
      enabled: true,
      state: upstream.available === false ? 'unavailable' : 'ready',
      accountState,
      capabilities: { search: true, details: true, lyrics: true, playback: true, queue: true },
    };
  }

  return Object.freeze({ search, details, lyrics, queue, play, getLease, revokeClient, status, dispose() {
    if (disposed) return;
    disposed = true;
    queueByClient.clear();
    leases.clear();
  } });
}

export function toMusicError(error) {
  return normalizeProviderError(error, '操作');
}
