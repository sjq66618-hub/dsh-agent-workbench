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
