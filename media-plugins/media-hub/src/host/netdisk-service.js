import { mapBaiduFile, normalizeNetdiskPath } from '../providers/baidu-netdisk-codec.js';
import { NetdiskError } from '../providers/baidu-netdisk-provider.js';

export function createNetdiskService({ provider, enabled = true } = {}) {
  let disposed = false; let cacheGeneration = -1;
  const files = new Map(); const invalidators = new Set();
  function invalidate() { files.clear(); cacheGeneration = -1; for (const listener of invalidators) listener(); }
  function guard(authenticated = false) {
    if (disposed) throw new NetdiskError('SERVICE_STOPPED');
    if (!enabled) throw new NetdiskError('SERVICE_DISABLED');
    if (!provider) throw new NetdiskError('UPSTREAM_UNAVAILABLE');
    if (authenticated && provider.status().accountState !== 'authenticated') { invalidate(); throw new NetdiskError('AUTH_REQUIRED'); }
    if (cacheGeneration !== provider.generation) { files.clear(); cacheGeneration = provider.generation; }
  }
  function checkGeneration(generation) { guard(true); if (provider.generation !== generation) throw new NetdiskError('ABORTED'); }
  function status() {
    if (!enabled || !provider || disposed) return { state: disposed ? 'unavailable' : enabled ? 'not_connected' : 'disabled', accountState: 'not_checked' };
    const value = provider.status();
    return { state: ['configured', 'ready', 'unavailable'].includes(value.state) ? value.state : 'unavailable', accountState: ['signed_out', 'waiting', 'scanned', 'authenticated'].includes(value.accountState) ? value.accountState : 'signed_out', networkState: ['not_checked', 'failed', 'verified'].includes(value.networkState) ? value.networkState : 'not_checked', capabilities: { browse: value.accountState === 'authenticated', searchFiles: value.accountState === 'authenticated', download: value.accountState === 'authenticated' } };
  }
  return Object.freeze({
    status,
    async account(action, args = {}) {
      guard();
      if (!['status', 'qr.create', 'qr.check', 'qr.cancel', 'logout'].includes(action)) throw new TypeError('网盘账号操作无效');
      if (['qr.check', 'qr.cancel'].includes(action) && (typeof args.loginId !== 'string' || !/^[\w-]{1,100}$/.test(args.loginId))) throw new TypeError('网盘扫码编号无效');
      if (action === 'logout' || action === 'qr.create') invalidate();
      const value = await provider.account(action, { loginId: args.loginId, signal: args.signal });
      if (!value || !['signed_out', 'waiting', 'scanned', 'authenticated'].includes(value.state)) throw new NetdiskError('INVALID_RESPONSE');
      const result = { state: value.state };
      if (typeof value.loginId === 'string' && /^[\w-]{1,100}$/.test(value.loginId)) result.loginId = value.loginId;
      if (Number.isSafeInteger(value.expiresAt)) result.expiresAt = value.expiresAt;
      if (typeof value.qrDataUrl === 'string' && value.qrDataUrl.length < 350_000 && /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(value.qrDataUrl)) result.qrDataUrl = value.qrDataUrl;
      return result;
    },
    async list({ path = '/', page = 1, limit = 100, query = '', signal } = {}) {
      guard(true); path = normalizeNetdiskPath(path);
      if (!Number.isSafeInteger(page) || page < 1 || page > 10_000 || !Number.isSafeInteger(limit) || limit < 1 || limit > 100 || typeof query !== 'string' || query.length > 100 || /[\x00-\x1f\x7f]/.test(query)) throw new TypeError('网盘分页或搜索参数无效');
      const generation = provider.generation;
      const value = await provider.list({ path, page, limit, query: query.trim(), signal }); checkGeneration(generation);
      if (!value || !Array.isArray(value.items) || typeof value.hasMore !== 'boolean') throw new NetdiskError('INVALID_RESPONSE');
      const items = value.items.slice(0, limit).map(item => mapBaiduFile({ fs_id: item.id, server_filename: item.name, path: item.path, isdir: item.isDirectory ? 1 : 0, size: item.size, server_mtime: item.modifiedAt / 1000 }));
      for (const item of items) { files.set(item.id, item); while (files.size > 2000) files.delete(files.keys().next().value); }
      return { path, items, page, limit, hasMore: value.hasMore, query: query.trim() };
    },
    async quota(args = {}) {
      guard(true); const generation = provider.generation; const value = await provider.quota({ signal: args.signal }); checkGeneration(generation);
      if (!Number.isSafeInteger(value?.total) || value.total < 0 || !Number.isSafeInteger(value.used) || value.used < 0) throw new NetdiskError('INVALID_RESPONSE');
      return { total: value.total, used: value.used, free: Math.max(0, value.total - value.used) };
    },
    async openDownload(id, options = {}) {
      guard(true); if (typeof id !== 'string' || !/^\d{1,24}$/.test(id)) throw new TypeError('网盘文件编号无效');
      const file = files.get(id); if (!file || file.isDirectory) throw new NetdiskError('DOWNLOAD_UNAVAILABLE');
      if (options.range && (!/^bytes=\d*-\d*$/.test(options.range) || options.range === 'bytes=-')) throw new TypeError('下载范围无效');
      const generation = provider.generation; const response = await provider.download(file, { signal: options.signal, range: options.range, method: options.method });
      try { checkGeneration(generation); } catch (error) { await response.body?.cancel?.(); throw error; }
      const type = response.headers.get('content-type') || '';
      if (type.includes('text/html') || type.includes('application/json')) { await response.body?.cancel?.(); throw new NetdiskError('DOWNLOAD_UNAVAILABLE'); }
      return { file: { ...file }, response };
    },
    onInvalidate(listener) { invalidators.add(listener); return () => invalidators.delete(listener); },
    dispose() { if (disposed) return; invalidate(); provider?.dispose?.(); disposed = true; invalidators.clear(); },
  });
}
