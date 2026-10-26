import test from 'node:test';
import assert from 'node:assert/strict';

test('maps the actual SDK 3.3.5 body-level search envelope', () => {
  const result = mapSearch({ status: 200, body: { code: 200, items: [{ mid: 'abc', name: '真实结构' }], more: true } });
  assert.equal(result.items[0].songMid, 'abc');
  assert.equal(result.hasMore, true);
});
import { mapTrack, mapSearch, mapDetails, mapLyrics } from '../src/providers/qq-music-codec.js';

const STATIC_MESSAGE = 'QQ Music upstream response is unavailable';

function ok(body) {
  return { status: 200, headers: { 'content-type': 'application/json' }, body };
}

function upstreamError(callback) {
  try {
    callback();
  } catch (error) {
    assert.equal(error.code, 'UPSTREAM_UNAVAILABLE');
    assert.equal(error.message, STATIC_MESSAGE);
    return error;
  }
  assert.fail('expected an UPSTREAM_UNAVAILABLE error');
}

const song = {
  mid: '004Z8Ihr0JIu5s',
  name: '晴天',
  singer: [{ id: 4558, mid: '0025NhlN2yWrP4', name: '周杰伦' }],
  album: { id: 18905, mid: '000MkMni19ClKG', name: '叶惠美' },
  interval: 269,
  file: { media_mid: '004Z8Ihr0JIu5s' },
  cookie: 'uin=o123456; qm_keyst=SECRET',
  url: 'https://isure.stream.qqmusic.qq.com/C400004Z8Ihr0JIu5s.m4a?guid=1',
};

test('mapTrack maps the whitelisted fields and drops everything else', () => {
  const track = mapTrack(song);
  assert.deepEqual({ ...track }, {
    songMid: '004Z8Ihr0JIu5s',
    title: '晴天',
    artist: '周杰伦',
    album: '叶惠美',
    durationMs: 269000,
  });
  assert.deepEqual(Object.keys(track).sort(), ['album', 'artist', 'durationMs', 'songMid', 'title']);
  assert.equal(JSON.stringify(track).includes('SECRET'), false);
  assert.equal(JSON.stringify(track).includes('qqmusic'), false);
  assert.equal(Object.isFrozen(track), true);
});

test('mapTrack accepts alternate field names and safely defaults missing strings', () => {
  const alternate = mapTrack({
    songmid: 'mid-2',
    songname: '七里香',
    singer: [{ name: '周杰伦' }, { name: '方文山' }],
    albumnm: '七里香',
    durationMs: 299000,
  });
  assert.deepEqual({ ...alternate }, {
    songMid: 'mid-2',
    title: '七里香',
    artist: '周杰伦 / 方文山',
    album: '七里香',
    durationMs: 299000,
  });

  const bare = mapTrack({ songMid: 'mid-3' });
  assert.deepEqual({ ...bare }, { songMid: 'mid-3', title: '', artist: '', album: '', durationMs: null });

  const odd = mapTrack({ mid: 'mid-4', title: 42, singer: 'not-an-array', album: 7, interval: 'unknown' });
  assert.deepEqual({ ...odd }, { songMid: 'mid-4', title: '', artist: '', album: '', durationMs: null });
});

test('mapTrack requires a non-empty upstream mid and never echoes the payload', () => {
  upstreamError(() => mapTrack(null));
  upstreamError(() => mapTrack('mid-1'));
  upstreamError(() => mapTrack({ name: 'no mid', cookie: 'SECRET' }));
  upstreamError(() => mapTrack({ mid: '   ', name: 'blank mid' }));
});

test('mapSearch maps items and hasMore', () => {
  assert.deepEqual(mapSearch(ok({ code: 200, data: { items: [song], more: true } })), {
    items: [{
      songMid: '004Z8Ihr0JIu5s',
      title: '晴天',
      artist: '周杰伦',
      album: '叶惠美',
      durationMs: 269000,
    }],
    hasMore: true,
  });
  assert.deepEqual(mapSearch(ok({ code: 200, data: { items: [], more: false } })), { items: [], hasMore: false });
  assert.equal(mapSearch(ok({ code: 200, data: { items: [] } })).hasMore, false);
});

test('mapSearch rejects transport, business and shape failures instead of an empty result', () => {
  upstreamError(() => mapSearch({ status: 500, headers: {}, body: { code: 200, data: { items: [song] } } }));
  upstreamError(() => mapSearch(ok({ code: 500, data: { items: [song], cookie: 'SECRET' } })));
  upstreamError(() => mapSearch(ok({ code: 200, data: { items: null } })));
  upstreamError(() => mapSearch(ok({ code: 200, data: { items: 'nope' } })));
  upstreamError(() => mapSearch(ok({ code: 200 })));
  upstreamError(() => mapSearch(ok('<html>gateway</html>')));
  upstreamError(() => mapSearch(null));
  // one broken item poisons the batch rather than being silently dropped
  upstreamError(() => mapSearch(ok({ code: 200, data: { items: [song, { name: 'no mid' }] } })));
});

test('mapDetails unwraps response.songinfo.data.track_info and checks both codes', () => {
  const body = { response: { code: 0, songinfo: { code: 0, data: { track_info: song } } } };
  assert.deepEqual({ ...mapDetails(ok(body)) }, {
    songMid: '004Z8Ihr0JIu5s',
    title: '晴天',
    artist: '周杰伦',
    album: '叶惠美',
    durationMs: 269000,
  });

  upstreamError(() => mapDetails(ok({ response: { code: 1, songinfo: { code: 0, data: { track_info: song } } } })));
  upstreamError(() => mapDetails(ok({ response: { code: 0, songinfo: { code: 1, data: { track_info: song } } } })));
  upstreamError(() => mapDetails(ok({ response: { code: 0, songinfo: { code: 0 } } })));
  upstreamError(() => mapDetails(ok({ response: { code: 0 } })));
  upstreamError(() => mapDetails({ status: 403, headers: {}, body: { response: { code: 0 } } }));
});

test('mapLyrics keeps Chinese lyrics and decodes strict base64 translations', () => {
  const translated = Buffer.from('晴天 - 翻译歌词', 'utf8').toString('base64');
  assert.deepEqual(mapLyrics(ok({ response: { code: 0, lyric: '[00:00.00]晴天\n[00:03.00]故事的小黄花', trans: translated } })), {
    lyric: '[00:00.00]晴天\n[00:03.00]故事的小黄花',
    translatedLyric: '晴天 - 翻译歌词',
  });
});

test('mapLyrics treats an empty lyric as a legal no-lyric answer', () => {
  assert.deepEqual(mapLyrics(ok({ response: { code: 0, lyric: '' } })), { lyric: '', translatedLyric: null });
  assert.deepEqual(mapLyrics(ok({ response: { code: 0, lyric: '', trans: '' } })), { lyric: '', translatedLyric: null });
});

test('mapLyrics refuses non base64 translations and broken responses', () => {
  assert.equal(mapLyrics(ok({ response: { code: 0, lyric: 'x', trans: '这不是base64歌词' } })).translatedLyric, null);
  assert.equal(mapLyrics(ok({ response: { code: 0, lyric: 'x', trans: 'abc' } })).translatedLyric, null);
  assert.equal(mapLyrics(ok({ response: { code: 0, lyric: 'x', trans: 123 } })).translatedLyric, null);

  upstreamError(() => mapLyrics(ok({ response: { code: 1, lyric: 'x' } })));
  upstreamError(() => mapLyrics(ok({ response: { code: 0 } })));
  upstreamError(() => mapLyrics(ok({ response: { code: 0, lyric: null } })));
  upstreamError(() => mapLyrics({ status: 502, headers: {}, body: { response: { code: 0, lyric: 'x' } } }));
});

test('errors are static and never leak payload, url or cookie values', () => {
  const error = upstreamError(() => mapSearch(ok({
    code: 500,
    data: { items: [song] },
    cookie: 'uin=o123456; qm_keyst=SECRET',
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?data=SECRET',
  })));
  assert.equal(error.message, STATIC_MESSAGE);
  for (const fragment of ['SECRET', 'u.y.qq.com', 'cookie', 'uin=', '004Z8Ihr0JIu5s']) {
    assert.equal(error.message.includes(fragment), false, `message leaked ${fragment}`);
    assert.equal(String(error.stack ?? '').includes(fragment), false, `stack leaked ${fragment}`);
  }
  assert.deepEqual(Object.keys(error).sort(), ['code', 'name']);
});
