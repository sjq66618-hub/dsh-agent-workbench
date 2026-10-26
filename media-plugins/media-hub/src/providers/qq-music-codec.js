/**
 * Pure mapping layer for QQ Music SDK (3.3.5) RouteResult objects.
 *
 * Every function is side-effect free: input is a RouteResult
 * `{ status, headers, body }`, output is a plain business object.
 * Upstream payload details (ids, urls, cookies, raw bodies) never leak
 * into errors — callers only ever see one static message.
 */

export const UPSTREAM_UNAVAILABLE = 'UPSTREAM_UNAVAILABLE';

const STATIC_MESSAGE = 'QQ Music upstream response is unavailable';

function unavailable() {
  const error = new Error(STATIC_MESSAGE);
  error.name = 'QqCodecError';
  error.code = UPSTREAM_UNAVAILABLE;
  return error;
}

function isRecord(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function text(value) {
  return typeof value === 'string' ? value : '';
}

function nonNegativeNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value) && value >= 0) return value;
  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed) && parsed >= 0) return parsed;
  }
  return null;
}

function readBody(result) {
  if (!isRecord(result) || result.status !== 200) throw unavailable();
  const { body } = result;
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      throw unavailable();
    }
  }
  return body;
}

function readArtist(value) {
  if (Array.isArray(value.singer)) {
    const names = value.singer
      .map((entry) => (typeof entry === 'string' ? entry : text(entry?.name)))
      .map((name) => name.trim())
      .filter((name) => name !== '');
    if (names.length > 0) return names.join(' / ');
  }
  return text(value.artist);
}

function readAlbum(value) {
  if (isRecord(value.album)) {
    const name = text(value.album.name);
    if (name) return name;
  }
  return text(value.album) || text(value.albumnm);
}

function readDurationMs(value) {
  const seconds = nonNegativeNumber(value.interval);
  if (seconds !== null) return Math.round(seconds * 1000);
  const milliseconds = nonNegativeNumber(value.durationMs);
  return milliseconds === null ? null : Math.round(milliseconds);
}

/**
 * Map one upstream song object onto the five-field whitelist shape.
 * Extra upstream fields (including secrets) are dropped, never forwarded.
 */
export function mapTrack(value) {
  if (!isRecord(value)) throw unavailable();
  const songMid = (text(value.mid) || text(value.songmid) || text(value.songMid)).trim();
  if (!songMid) throw unavailable();
  return Object.freeze({
    songMid,
    title: text(value.name) || text(value.songname) || text(value.title),
    artist: readArtist(value),
    album: readAlbum(value),
    durationMs: readDurationMs(value),
  });
}

/** SDK 3.3.5 returns items at body level; legacy fixtures may wrap data. */
export function mapSearch(result) {
  const body = readBody(result);
  if (!isRecord(body) || body.code !== 200) throw unavailable();
  const data = Array.isArray(body.items) ? body : isRecord(body.data) ? body.data : null;
  if (!data || !Array.isArray(data.items)) throw unavailable();
  return {
    items: data.items.map(mapTrack),
    hasMore: data.more === true,
  };
}

/** body = { response: { code: 0, songinfo: { code: 0, data: { track_info: song } } } } */
export function mapDetails(result) {
  const body = readBody(result);
  const response = isRecord(body) && isRecord(body.response) ? body.response : null;
  if (!response || response.code !== 0) throw unavailable();
  const songinfo = isRecord(response.songinfo) ? response.songinfo : null;
  if (!songinfo || songinfo.code !== 0) throw unavailable();
  const data = isRecord(songinfo.data) ? songinfo.data : null;
  if (!data) throw unavailable();
  return mapTrack(data.track_info);
}

const BASE64_TEXT = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

function decodeBase64Text(value) {
  if (typeof value !== 'string') return null;
  const encoded = value.trim();
  if (!encoded || encoded.length % 4 !== 0 || !BASE64_TEXT.test(encoded)) return null;
  const bytes = Buffer.from(encoded, 'base64');
  if (bytes.toString('base64') !== encoded) return null;
  const decoded = bytes.toString('utf8');
  return decoded.includes('\uFFFD') ? null : decoded;
}

/** body = { response: { code: 0, lyric: string, trans?: base64 utf8 } } */
export function mapLyrics(result) {
  const body = readBody(result);
  const response = isRecord(body) && isRecord(body.response) ? body.response : null;
  if (!response || response.code !== 0) throw unavailable();
  const lyric = response.lyric;
  if (typeof lyric !== 'string') throw unavailable();
  return {
    lyric,
    translatedLyric: decodeBase64Text(response.trans),
  };
}
