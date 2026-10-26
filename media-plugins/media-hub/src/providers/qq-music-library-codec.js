import { mapTrack } from './qq-music-codec.js';

function fail(code = 'UPSTREAM_UNAVAILABLE') {
  const error = new Error(code === 'AUTH_REQUIRED' ? 'QQ Music login required' : 'QQ Music library response unavailable');
  error.code = code;
  return error;
}
function bodyOf(result, field) {
  if (result?.status === 401) throw fail('AUTH_REQUIRED');
  let body = result?.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { throw fail(); } }
  if (result?.status !== 200 || body?.code !== 200 || !Array.isArray(body[field])) throw fail();
  return body;
}
const count = value => Number.isSafeInteger(Number(value)) && Number(value) >= 0 && value !== null && value !== '' && value !== undefined ? Number(value) : null;
const identifier = value => /^\d{1,16}$/.test(String(value ?? '')) && Number.isSafeInteger(Number(value)) && Number(value) > 0 ? String(value) : '';
const title = item => [item.dirName, item.dissname, item.title, item.name].find(value => typeof value === 'string' && value.trim()) || '未命名歌单';

export function mapLibraryPlaylists(result) {
  const body = bodyOf(result, 'playlist'); const items = []; const seen = new Set();
  for (const item of body.playlist) {
    if (!item || typeof item !== 'object') continue;
    const id = identifier(item.tid ?? item.dissid ?? item.id);
    const dirId = identifier(item.dirId ?? item.dirid);
    const key = id ? 'id:' + id : dirId ? 'dir:' + dirId : '';
    if (!key || seen.has(key)) continue;
    seen.add(key);
    items.push({ id, dirId, title: title(item), trackCount: count(item.songNum ?? item.songnum ?? item.song_cnt ?? item.total_song_num ?? item.songCount) });
  }
  return { items, total: count(body.total) ?? items.length, hasMore: body.more === true, nextOffset: count(body.nextFavoriteOffset) };
}

export function mapLibrarySongs(result) {
  const body = bodyOf(result, 'songs'); const items = []; const seen = new Set();
  for (const item of body.songs) {
    try {
      const track = mapTrack(item?.musicData ?? item);
      if (seen.has(track.songMid)) continue;
      seen.add(track.songMid); items.push(track);
    } catch { /* A deleted or unavailable track must not hide the rest of the page. */ }
  }
  return { items, total: count(body.total) ?? items.length, hasMore: body.more === true, consumed: body.songs.length };
}
