import test from 'node:test';
import assert from 'node:assert/strict';
import { createMusicService } from '../src/host/music-service.js';

function provider() {
  const track = { songMid: 'mid-1', title: '晴天', artist: '周杰伦', album: '叶惠美', durationMs: 269000 };
  return {
    available: true,
    async search() { return { items: [track], hasMore: false }; },
    async details() { return track; },
    async lyrics() { return { lyric: '[00:00.00]晴天', translatedLyric: '' }; },
    async playback() { return { url: 'https://media.example.test/song.mp3', mimeType: 'audio/mpeg' }; },
  };
}

test('search, details and lyrics return stable redacted business objects', async () => {
  const service = createMusicService({ provider: provider() });
  const search = await service.search({ query: '晴天' });
  assert.deepEqual(search.items[0], { songMid: 'mid-1', title: '晴天', artist: '周杰伦', album: '叶惠美', durationMs: 269000 });
  assert.deepEqual((await service.details({ songMid: 'mid-1' })).track, search.items[0]);
  const lyrics = await service.lyrics({ songMid: 'mid-1' });
  assert.equal(lyrics.hasLyric, true);
  assert.equal(lyrics.translatedLyric, '');
  service.dispose();
});

test('personal library requires current account and validates pagination and playlist identifiers', async () => {
  let state = 'signed_out'; let calls = 0;
  const upstream = { ...provider(), get accountState() { return state; }, async library(args) {
    calls++; return args.kind === 'playlists'
      ? { items: [{ id: '123', dirId: '2', title: '收藏', trackCount: 5, cookie: 'private' }], total: 2, hasMore: true, nextOffset: 1000 }
      : { items: [{ songMid: 'mid-1', title: '曲目' }], total: 30, hasMore: true, consumed: 20 };
  } };
  const service = createMusicService({ provider: upstream });
  await assert.rejects(service.library({}), { code: 'AUTH_REQUIRED' }); assert.equal(calls, 0);
  state = 'authenticated';
  for (const args of [{ kind: 'other' }, { offset: -1 }, { limit: 51 }, { kind: 'tracks', id: 'x' }, { kind: 'tracks', dirId: '201', id: '-1' }]) await assert.rejects(service.library(args), { code: 'INVALID_REQUEST' });
  const lists = await service.library({ kind: 'playlists' });
  assert.equal(lists.nextOffset, 1000); assert.equal(lists.items[0].cookie, undefined);
  const tracks = await service.library({ kind: 'tracks', id: '123', offset: 20 });
  assert.equal(tracks.nextOffset, 40); assert.equal(tracks.items[0].title, '曲目');
  service.dispose();
});

test('in-flight library results are discarded after account invalidation', async () => {
  let release;
  const upstream = { ...provider(), accountState: 'authenticated', async library() { return new Promise(resolve => { release = resolve; }); }, async account() { return {}; } };
  const service = createMusicService({ provider: upstream });
  const pending = service.library({ kind: 'liked' });
  const rejected = assert.rejects(pending, { code: 'ABORTED' });
  await service.account('logout'); release({ items: [], total: 0, hasMore: false }); await rejected;
  service.dispose();
});

test('queue is client-scoped, bounded and idempotent', async () => {
  const service = createMusicService({ provider: provider(), maxQueue: 1 });
  const track = { songMid: 'mid-1', title: '晴天', artist: '周杰伦', album: '叶惠美', durationMs: 269000 };
  assert.equal((await service.queue({ clientId: 'a', action: 'add', track })).added, true);
  assert.equal((await service.queue({ clientId: 'a', action: 'add', track })).added, false);
  assert.equal((await service.queue({ clientId: 'b', action: 'get' })).items.length, 0);
  assert.equal((await service.queue({ clientId: 'a', action: 'next' })).next.songMid, 'mid-1');
  assert.equal((await service.queue({ clientId: 'a', action: 'get' })).items.length, 0);
  service.dispose();
});

test('play returns a short-lived lease without exposing source URL and expiry is enforced', async () => {
  let clock = 1_000_000;
  const service = createMusicService({ provider: provider(), now: () => clock, leaseTtlMs: 2_000 });
  const value = await service.play({ songMid: 'mid-1', clientId: 'browser' });
  assert.equal(value.state, 'ready');
  assert.match(value.streamPath, /^\/media-hub\/api\/music\?op=stream&leaseId=/);
  assert.equal(JSON.stringify(value).includes('media.example.test'), false);
  const leaseId = value.leaseId;
  assert.equal(service.getLease(leaseId, 'browser').url, 'https://media.example.test/song.mp3');
  clock += 2_001;
  assert.throws(() => service.getLease(leaseId), { code: 'UNPLAYABLE' });
  service.dispose();
});

test('unconfigured provider fails explicitly instead of claiming a connection', async () => {
  const service = createMusicService();
  assert.equal(service.status().state, 'unavailable');
  await assert.rejects(() => service.search({ query: 'x' }), { code: 'UPSTREAM_UNAVAILABLE' });
  service.dispose();
});

test('provider errors are normalized and disposal invalidates operations', async () => {
  const service = createMusicService({ provider: { async search() { const error = new Error('expired'); error.code = 'AUTH_REQUIRED'; throw error; } } });
  await assert.rejects(() => service.search({ query: 'x' }), { code: 'AUTH_REQUIRED' });
  service.dispose();
  await assert.rejects(() => service.search({ query: 'x' }), { code: 'SERVICE_STOPPED' });
});

test('logout clears queues and leases and notifies active stream cancellation', async () => {
  let stopped = 0; let streamCancelled = 0;
  const service = createMusicService({ provider: { ...provider(), async account() { return { state: 'signed_out' }; }, dispose() { stopped++; } } });
  const lease = await service.play({ songMid: 'mid-1' });
  await service.queue({ action: 'add', track: lease.track });
  service.onInvalidate(() => { streamCancelled++; });
  await service.account('logout');
  assert.throws(() => service.getLease(lease.leaseId), { code: 'UNPLAYABLE' });
  assert.equal((await service.queue()).items.length, 0); assert.equal(streamCancelled, 1);
  service.dispose(); service.dispose(); assert.equal(stopped, 1);
});
test('a playback result arriving after logout cannot resurrect a lease', async () => {
  let release; let started; const ready = new Promise(resolve => { started = resolve; });
  const service = createMusicService({ provider: { ...provider(), async playback() { started(); return new Promise(resolve => { release = resolve; }); }, async account() { return {}; } } });
  const result = service.play({ songMid: 'mid-1' }); const rejected = assert.rejects(result, { code: 'ABORTED' });
  await ready; await service.account('logout'); release({ url: 'https://media.example.test/x' }); await rejected; service.dispose();
});
