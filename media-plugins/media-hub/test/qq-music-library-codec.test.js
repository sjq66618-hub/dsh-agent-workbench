import test from 'node:test';
import assert from 'node:assert/strict';
import { mapLibraryPlaylists, mapLibrarySongs } from '../src/providers/qq-music-library-codec.js';

const envelope = body => ({ status: 200, body: { code: 200, ...body } });
test('library playlists whitelist fields, preserve directory-only entries and use real cursor', () => {
  const result = mapLibraryPlaylists(envelope({ playlist: [
    { tid: '123', dirId: 5, dirName: '自建', songNum: 7, cookie: 'private', uin: 'private' },
    { tid: '123', dirName: '重复' }, { dirid: 201, dissname: '我喜欢' }, { tid: '-1' }, null,
    { dissid: 456, dissname: '收藏', song_cnt: '8' },
  ], total: 15, more: true, nextFavoriteOffset: 1000 }));
  assert.deepEqual(result, { items: [
    { id: '123', dirId: '5', title: '自建', trackCount: 7 },
    { id: '', dirId: '201', title: '我喜欢', trackCount: null },
    { id: '456', dirId: '', title: '收藏', trackCount: 8 },
  ], total: 15, hasMore: true, nextOffset: 1000 });
  assert.ok(!JSON.stringify(result).includes('private'));
});
test('library incomplete page never fabricates pagination and an empty library is valid', () => {
  assert.deepEqual(mapLibraryPlaylists(envelope({ playlist: [], more: true })), { items: [], total: 0, hasMore: true, nextOffset: null });
  assert.deepEqual(mapLibrarySongs(envelope({ songs: [], total: 0 })), { items: [], total: 0, hasMore: false, consumed: 0 });
});
test('song library maps legacy, modern and wrapped tracks, skips deleted tracks, deduplicates safely', () => {
  const result = mapLibrarySongs(envelope({ songs: [
    { songmid: 'mid1', songname: '旧曲', albumnm: '旧专辑', interval: 180, singer: [{ name: '歌手' }], token: 'private' },
    { musicData: { mid: 'mid2', name: '新曲', album: { name: '新专辑' } } },
    { mid: 'mid1', name: '重复' }, { id: 4 }, null,
  ], total: 9, more: true }));
  assert.equal(result.items.length, 2); assert.equal(result.items[0].durationMs, 180000);
  assert.equal(result.items[0].title, '旧曲'); assert.equal(result.items[1].album, '新专辑');
  assert.equal(result.total, 9); assert.equal(result.hasMore, true); assert.equal(result.consumed, 5);
  assert.ok(!JSON.stringify(result).includes('private'));
});
test('library codec rejects malformed envelopes and preserves authentication failures without raw data', () => {
  for (const fn of [mapLibraryPlaylists, mapLibrarySongs]) {
    for (const result of [null, { status: 200, body: 'private' }, envelope({}), { status: 500, body: 'private' }]) {
      assert.throws(() => fn(result), error => error.code === 'UPSTREAM_UNAVAILABLE' && !error.message.includes('private'));
    }
    assert.throws(() => fn({ status: 401, body: 'private' }), { code: 'AUTH_REQUIRED' });
  }
});
