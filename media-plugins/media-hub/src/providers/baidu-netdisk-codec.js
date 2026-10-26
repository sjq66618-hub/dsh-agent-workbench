export function normalizeNetdiskPath(input = '/') {
  if (typeof input !== 'string' || input.length > 4096 || !input.startsWith('/') || /[\x00-\x1f\x7f\\]/.test(input)) throw new TypeError('网盘路径无效');
  const parts = input.split('/').filter(Boolean);
  if (parts.some(part => part === '.' || part === '..')) throw new TypeError('网盘路径不能包含相对目录');
  return '/' + parts.join('/');
}

export function mapBaiduFile(raw) {
  if (!raw || typeof raw !== 'object') throw new TypeError('网盘文件格式无效');
  const value = raw.fs_id;
  if (typeof value === 'number' && !Number.isSafeInteger(value)) throw new TypeError('网盘文件编号无效');
  const id = String(value ?? '');
  const filePath = normalizeNetdiskPath(raw.path);
  const name = raw.server_filename;
  if (!/^\d{1,24}$/.test(id) || typeof name !== 'string' || !name || name.length > 1024 || /[\x00-\x1f\x7f/\\]/.test(name) || filePath === '/' || filePath.split('/').pop() !== name) throw new TypeError('网盘文件信息无效');
  if (![0, 1].includes(raw.isdir) || !Number.isSafeInteger(raw.size) || raw.size < 0) throw new TypeError('网盘文件大小无效');
  const seconds = Number(raw.server_mtime ?? raw.local_mtime ?? 0);
  if (!Number.isSafeInteger(seconds) || seconds < 0 || !Number.isSafeInteger(seconds * 1000)) throw new TypeError('网盘文件时间无效');
  return { id, name, path: filePath, isDirectory: raw.isdir === 1, size: raw.size, modifiedAt: seconds * 1000 };
}

export function mapBaiduListing(payload, { path = '/', page = 1, limit = 100 } = {}) {
  if (!payload || payload.errno !== 0 || !Array.isArray(payload.list)) throw new TypeError('网盘未返回有效文件列表');
  if (!Number.isSafeInteger(page) || page < 1 || !Number.isSafeInteger(limit) || limit < 1 || limit > 100) throw new TypeError('网盘分页参数无效');
  const items = [];
  for (const raw of payload.list) { try { items.push(mapBaiduFile(raw)); } catch { /* Individual unavailable entries do not shift the upstream page. */ } }
  return { path: normalizeNetdiskPath(path), items, page, limit, hasMore: payload.has_more === 1 || (payload.has_more !== 0 && payload.list.length >= limit) };
}
