import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeNetdiskPath, mapBaiduFile, mapBaiduListing } from '../src/providers/baidu-netdisk-codec.js';

const file = { fs_id: '9007199254740993', server_filename: '资料.txt', path: '/文档/资料.txt', isdir: 0, size: 42, server_mtime: 1700000000, dlink: 'secret', thumbs: { url: 'private' }, cookie: 'private' };
test('netdisk path normalization keeps unicode and rejects traversal and controls', () => {
  assert.equal(normalizeNetdiskPath('//文档///'), '/文档');
  assert.equal(normalizeNetdiskPath('/'), '/');
  for (const input of ['relative', '/../x', '/x/./a', '/x\\a', '/x\n', '/' + 'x'.repeat(4096)]) assert.throws(() => normalizeNetdiskPath(input), TypeError);
});
test('netdisk file mapping preserves string ids and exposes a fixed whitelist', () => {
  const result = mapBaiduFile(file);
  assert.deepEqual(Object.keys(result), ['id', 'name', 'path', 'isDirectory', 'size', 'modifiedAt']);
  assert.equal(result.id, file.fs_id); assert.equal(result.modifiedAt, 1700000000000);
  assert.equal(JSON.stringify(result).includes('secret'), false);
  assert.throws(() => mapBaiduFile({ ...file, fs_id: Number(file.fs_id) }));
  assert.throws(() => mapBaiduFile({ ...file, path: '/other.txt' }));
  assert.equal(mapBaiduFile({ ...file, isdir: 1 }).isDirectory, true);
});
test('netdisk pagination advances using raw list entries and never hides API errors', () => {
  const result = mapBaiduListing({ errno: 0, list: [file, {}] }, { path: '/文档', page: 2, limit: 2 });
  assert.equal(result.items.length, 1); assert.equal(result.hasMore, true); assert.equal(result.page, 2);
  assert.equal(mapBaiduListing({ errno: 0, list: [] }).hasMore, false);
  assert.throws(() => mapBaiduListing({ errno: -6, list: [] }));
  assert.throws(() => mapBaiduListing({ errno: 0 }));
});
