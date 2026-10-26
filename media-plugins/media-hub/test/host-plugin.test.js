import test from 'node:test';
import assert from 'node:assert/strict';
import { apply, inject, STATUS_PATH, MUSIC_PATH } from '../index.js';

function provider() {
  const tracks = [{ songMid: 'mid-1', title: '晴天', artist: '周杰伦', album: '叶惠美', durationMs: 269000 }];
  return { available: true, async search() { return { items: tracks, hasMore: false }; }, async details() { return tracks[0]; }, async lyrics() { return { lyric: '[00:00.00]晴天' }; }, async playback() { return { url: 'https://media.example.test/song.mp3', mimeType: 'audio/mpeg' }; } };
}

function fixture(config = {}, rejection) {
  const cleanup = [];
  const routes = new Map();
  const tools = new Map();
  let admissions = 0;
  const ctx = {
    effect(effect) { cleanup.push(effect()); },
    connection: { admit() { admissions++; return rejection ? { rejection } : { peer: {} }; } },
    webServer: { register(value) { routes.set(value.path, value); return () => routes.delete(value.path); } },
    tools: { register(value) { tools.set(value.name, value); return () => tools.delete(value.name); } },
  };
  apply(ctx, config);
  return {
    routes,
    tools,
    get admissions() { return admissions; },
    async request(path, method = 'GET', { body, headers } = {}) {
      let status;
      let responseHeaders;
      let responseBody;
      const route = routes.get(path.split('?')[0]);
      await route.handler({ method, url: path, body, headers }, { writeHead(code, value) { status = code; responseHeaders = value; }, end(value) { responseBody = value; } });
      return { status, headers: responseHeaders, value: responseBody ? JSON.parse(responseBody.toString()) : undefined };
    },
    dispose() { while (cleanup.length) cleanup.pop()?.(); },
  };
}

test('personal library HTTP route reads current user and does not add an Agent credential tool', async () => {
  const f = fixture({ musicProvider: { ...provider(), accountState: 'authenticated', async library(args) { return { items: [{ songMid: 'mid-1', title: args.kind }], total: 4, hasMore: true, consumed: 20 }; } } });
  const result = await f.request(MUSIC_PATH + '?op=library&kind=liked&offset=0&limit=20');
  assert.equal(result.status, 200); assert.equal(result.value.items[0].title, 'liked'); assert.equal(result.value.nextOffset, 20);
  assert.equal((await f.request(MUSIC_PATH + '?op=library&kind=tracks&id=bad')).status, 400);
  assert.equal((await f.request(MUSIC_PATH + '?op=library&limit=99')).status, 400);
  assert.equal([...f.tools.keys()].some(name => name.includes('library')), false);
  f.dispose();
  const signedOut = fixture({ musicProvider: { ...provider(), accountState: 'signed_out' } });
  assert.equal((await signedOut.request(MUSIC_PATH + '?op=library&kind=liked')).status, 401);
  signedOut.dispose();
});

test('host injects existing services and registers authenticated status/music routes and P1 tools', async () => {
  assert.deepEqual(inject, ['tools', 'webServer', 'connection']);
  const f = fixture({ musicProvider: provider() });
  assert.ok(f.routes.has(STATUS_PATH));
  assert.ok(f.routes.has(MUSIC_PATH));
  assert.deepEqual([...f.tools.keys()].sort(), ['media_hub_status', 'media_music_details', 'media_music_lyrics', 'media_music_play', 'media_music_queue', 'media_music_search'].sort());
  const response = await f.request(STATUS_PATH);
  assert.equal(response.status, 200);
  assert.equal(response.value.phase, 'P1.1');
  assert.equal(response.value.providers.find(item => item.id === 'music').state, 'ready');
  assert.deepEqual(response.value, await f.tools.get('media_hub_status').execute({}));
  assert.equal(f.admissions, 1);
  f.dispose();
});

for (const code of [401, 403]) test(`numeric admission rejection ${code} is preserved for both routes`, async () => {
  const f = fixture({}, code);
  assert.equal((await f.request(STATUS_PATH, 'POST')).status, code);
  assert.equal((await f.request(MUSIC_PATH, 'GET')).status, code);
  assert.equal(f.admissions, 2);
  f.dispose();
});

test('only authenticated GET is allowed for status and music operation dispatch', async () => {
  const f = fixture();
  for (const method of ['POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS']) {
    const response = await f.request(STATUS_PATH, method);
    assert.equal(response.status, 405);
    assert.equal(response.headers.allow, 'GET');
  }
  assert.equal((await f.request(`${MUSIC_PATH}?op=search`, 'POST')).status, 405);
  f.dispose();
});

for (const [musicEnabled, netdiskEnabled] of [[true, true], [false, true], [true, false], [false, false]]) {
  test(`host flags are independent: music=${musicEnabled}, netdisk=${netdiskEnabled}`, async () => {
    const f = fixture({ musicEnabled, netdiskEnabled });
    const value = (await f.request(STATUS_PATH)).value;
    assert.deepEqual(value.providers.map(item => item.enabled), [musicEnabled, netdiskEnabled]);
    assert.deepEqual(value, await f.tools.get('media_hub_status').execute({}));
    f.dispose();
  });
}

test('music routes share one service and never return upstream playback URLs', async () => {
  const f = fixture({ musicProvider: provider() });
  const search = await f.request(`${MUSIC_PATH}?op=search&query=晴天`);
  assert.equal(search.status, 200);
  assert.equal(search.value.items[0].songMid, 'mid-1');
  const details = await f.request(`${MUSIC_PATH}?op=details&songMid=mid-1`);
  assert.equal(details.value.track.title, '晴天');
  const lyrics = await f.request(`${MUSIC_PATH}?op=lyrics&songMid=mid-1`);
  assert.equal(lyrics.value.hasLyric, true);
  const play = await f.request(`${MUSIC_PATH}?op=play`, 'POST', { body: { songMid: 'mid-1', clientId: 'browser' } });
  assert.equal(play.value.state, 'ready');
  assert.match(play.value.streamPath, /^\/media-hub\/api\/music\?op=stream&leaseId=/);
  assert.equal(JSON.stringify(play.value).includes('media.example.test'), false);
  f.dispose();
});

test('tool declares P1 schemas, queue actions and rejects extra status input', async () => {
  const f = fixture({ musicProvider: provider() });
  const status = f.tools.get('media_hub_status');
  assert.equal(status.parameters.additionalProperties, false);
  for (const args of [null, [], { provider: 'music' }, 'all']) await assert.rejects(() => status.execute(args), TypeError);
  const queue = f.tools.get('media_music_queue');
  const added = await queue.execute({ action: 'add', clientId: 'agent', track: { songMid: 'mid-1', title: '晴天', artist: '周杰伦', album: '叶惠美', durationMs: 269000 } });
  assert.equal(added.added, true);
  assert.equal((await queue.execute({ clientId: 'agent', action: 'next' })).next.songMid, 'mid-1');
  f.dispose();
});

const SUPPORTED_KEYWORDS = new Set(['type', 'oneOf', 'properties', 'required', 'additionalProperties', 'items', 'enum', 'const', 'description', 'title', 'default', 'examples']);
const SCHEMA_TYPES = new Set(['object', 'array', 'string', 'number', 'integer', 'boolean', 'null']);
const ONE_OF_SIBLINGS = ['properties', 'required', 'additionalProperties', 'items', 'enum', 'const'];

function assertSupportedSchema(node, path = 'schema') {
  assert.ok(node && typeof node === 'object' && !Array.isArray(node), `${path} must be a schema object`);
  for (const key of Object.keys(node)) assert.ok(SUPPORTED_KEYWORDS.has(key), `${path}.${key} is outside the DSH supported schema subset`);
  assert.equal(Array.isArray(node.type), false, `${path}.type must not be a type array`);
  assert.equal('anyOf' in node, false, `${path} must not use anyOf`);
  if ('oneOf' in node) {
    assert.equal('type' in node, false, `${path} cannot declare both type and oneOf`);
    for (const key of ONE_OF_SIBLINGS) assert.equal(key in node, false, `${path}.${key} is not allowed beside oneOf`);
    assert.ok(Array.isArray(node.oneOf) && node.oneOf.length >= 2, `${path}.oneOf must hold at least two schemas`);
    node.oneOf.forEach((entry, index) => assertSupportedSchema(entry, `${path}.oneOf[${index}]`));
  }
  if ('type' in node) assert.ok(SCHEMA_TYPES.has(node.type), `${path}.type must be a single supported type`);
  for (const [key, value] of Object.entries(node.properties ?? {})) assertSupportedSchema(value, `${path}.properties.${key}`);
  if ('items' in node) assertSupportedSchema(node.items, `${path}.items`);
}

test('P1 tool schemas stay inside the DSH supported JSON schema subset', () => {
  const f = fixture({ musicProvider: provider() });
  const names = [...f.tools.keys()].filter(name => name.startsWith('media_music_')).sort();
  assert.deepEqual(names, ['media_music_details', 'media_music_lyrics', 'media_music_play', 'media_music_queue', 'media_music_search']);
  for (const name of names) {
    assertSupportedSchema(f.tools.get(name).parameters, `${name}.parameters`);
    assertSupportedSchema(f.tools.get(name).output.schema, `${name}.output.schema`);
  }
  f.dispose();
});

test('unload removes routes/tools and invalidates retained service operations', async () => {
  const f = fixture({ musicProvider: provider() });
  const retained = f.tools.get('media_music_search');
  f.dispose();
  f.dispose();
  assert.equal(f.routes.size, 0);
  assert.equal(f.tools.size, 0);
  await assert.rejects(() => retained.execute({ query: 'x' }), { code: 'SERVICE_STOPPED' });
});

test('account route requires admitted UI POST and never registers login tools', async () => {
  const calls = []; const upstream = { ...provider(), async account(action, args) { calls.push({ action, args }); return { state: 'signed_out' }; } };
  const f = fixture({ musicProvider: upstream });
  const path = `${MUSIC_PATH}?op=account`;
  assert.equal((await f.request(path)).status, 405);
  assert.equal((await f.request(path, 'POST', { body: { action: 'status' } })).status, 403);
  const headers = { 'x-media-hub-ui': '1' };
  assert.equal((await f.request(path, 'POST', { headers, body: { action: 'status', token: 'must-not-forward', cookie: 'secret' } })).status, 200);
  assert.equal(calls.length, 1); assert.equal(calls[0].args.token, undefined); assert.equal(calls[0].args.cookie, undefined);
  assert.equal((await f.request(path, 'POST', { headers, body: { action: 'inject-token' } })).status, 400);
  assert.equal([...f.tools.keys()].some(name => /login|account|cookie/i.test(name)), false);
  f.dispose();
});
test('account errors preserve safe login diagnostics, HTTP status and Retry-After', async () => {
  for (const [code, status] of [['RATE_LIMITED', 429], ['LOGIN_UPSTREAM_REJECTED', 503], ['LOGIN_CREDENTIAL_FAILED', 503]]) {
    const upstream = { ...provider(), async account() { throw Object.assign(new Error('登录验证失败'), {
      code, retryAfterMs: 4_001, failureStage: 'credential-exchange', failureReason: 'upstream-rejected', upstreamCode: 104604, upstreamHttpStatus: 200,
      cookie: 'private', token: 'private', url: 'https://private.invalid',
    }); } };
    const f = fixture({ musicProvider: upstream });
    try {
      const result = await f.request(MUSIC_PATH + '?op=account', 'POST', { headers: { 'x-media-hub-ui': '1' }, body: { action: 'qr.check', loginId: 'test-login' } });
      assert.equal(result.status, status); assert.equal(result.headers['retry-after'], '5');
      assert.equal(result.value.error, code); assert.equal(result.value.retryAfterMs, 4_001);
      assert.equal(result.value.failureStage, 'credential-exchange'); assert.equal(result.value.upstreamCode, 104604);
      assert.ok(!JSON.stringify(result.value).includes('private'));
    } finally { f.dispose(); }
  }
});
test('disabled music rejects both HTTP operations and retained Agent tools', async () => {
  let called = false; const upstream = { ...provider(), async search() { called = true; }, async account() { called = true; } };
  const f = fixture({ musicEnabled: false, musicProvider: upstream });
  assert.equal((await f.request(`${MUSIC_PATH}?op=search&query=x`)).status, 403);
  assert.equal((await f.request(`${MUSIC_PATH}?op=queue`)).status, 403);
  assert.equal((await f.request(`${MUSIC_PATH}?op=account`, 'POST', { headers: { 'x-media-hub-ui': '1' }, body: { action: 'status' } })).status, 403);
  await assert.rejects(f.tools.get('media_music_search').execute({ query: 'x' }), { code: 'SERVICE_DISABLED' });
  assert.equal(called, false); f.dispose();
});
test('malformed JSON is a client error rather than a fake upstream outage', async () => {
  const f = fixture({ musicProvider: provider() });
  assert.equal((await f.request(`${MUSIC_PATH}?op=play`, 'POST', { body: '{invalid' })).status, 400); f.dispose();
});
test('status tool schema accepts the new configured and account states', async () => {
  const f = fixture({ musicBackend: 'qqmusic' });
  const value = await f.tools.get('media_hub_status').execute({});
  assert.equal(value.providers[0].state, 'configured');
  const schema = f.tools.get('media_hub_status').output.schema;
  assertSupportedSchema(schema);
  assert.ok(schema.properties.providers.items.properties.accountState.enum.includes('authenticated')); f.dispose();
});
