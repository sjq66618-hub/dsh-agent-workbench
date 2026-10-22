import test from 'node:test';
import assert from 'node:assert/strict';
import { apply, inject, STATUS_PATH } from '../index.js';

function fixture(config = {}, rejection) {
  const cleanup = [];
  let route;
  let tool;
  let admissions = 0;
  const ctx = {
    effect(effect) { cleanup.push(effect()); },
    connection: { admit() { admissions++; return rejection ? { rejection } : { peer: {} }; } },
    webServer: { register(value) { route = value; return () => { route = undefined; }; } },
    tools: { register(value) { tool = value; cleanup.push(() => { tool = undefined; }); return cleanup[cleanup.length - 1]; } },
  };
  apply(ctx, config);
  return {
    get tool() { return tool; },
    get route() { return route; },
    get admissions() { return admissions; },
    request(method = 'GET') {
      let status;
      let headers;
      let body;
      route.handler({ method }, { writeHead(code, value) { status = code; headers = value; }, end(value) { body = value; } });
      return { status, headers, value: JSON.parse(body.toString()) };
    },
    dispose() { while (cleanup.length) cleanup.pop()?.(); },
  };
}

test('host injects existing services and registers one exact route and tool', async () => {
  assert.deepEqual(inject, ['tools', 'webServer', 'connection']);
  const f = fixture();
  assert.equal(f.route.kind, 'exact');
  assert.equal(f.route.path, STATUS_PATH);
  assert.equal(f.tool.name, 'media_hub_status');
  const response = f.request();
  assert.equal(response.status, 200);
  assert.equal(response.headers['cache-control'], 'no-store');
  assert.deepEqual(response.value, await f.tool.execute({}));
  assert.equal(f.admissions, 1);
  f.dispose();
});

for (const code of [401, 403]) test(`numeric admission rejection ${code} is preserved before method dispatch`, () => {
  const f = fixture({}, code);
  assert.equal(f.request('POST').status, code);
  assert.equal(f.admissions, 1);
  f.dispose();
});

test('only authenticated GET is allowed', () => {
  const f = fixture();
  for (const method of ['POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS']) {
    const response = f.request(method);
    assert.equal(response.status, 405);
    assert.equal(response.headers.allow, 'GET');
  }
  f.dispose();
});

for (const [musicEnabled, netdiskEnabled] of [[true, true], [false, true], [true, false], [false, false]]) {
  test(`host flags are independent: music=${musicEnabled}, netdisk=${netdiskEnabled}`, async () => {
    const f = fixture({ musicEnabled, netdiskEnabled });
    const value = f.request().value;
    assert.deepEqual(value.providers.map(item => item.enabled), [musicEnabled, netdiskEnabled]);
    assert.deepEqual(value, await f.tool.execute({}));
    f.dispose();
  });
}

test('tool declares complete standard JSON schema and rejects extra input', async () => {
  const f = fixture();
  assert.equal(f.tool.parameters.type, 'object');
  assert.equal(f.tool.parameters.additionalProperties, false);
  const value = await f.tool.execute({});
  assert.deepEqual(Object.keys(value).sort(), [...f.tool.output.schema.required].sort());
  assert.equal(typeof f.tool.output.render, 'function');
  assert.equal(f.tool.output.render({}, value)[0].type, 'text');
  for (const args of [null, [], { provider: 'music' }, 'all']) await assert.rejects(() => f.tool.execute(args), TypeError);
  f.dispose();
});

test('unload removes route and tool, disposes the shared service, and is idempotent', async () => {
  const f = fixture();
  const retainedTool = f.tool;
  f.dispose();
  f.dispose();
  assert.equal(f.route, undefined);
  assert.equal(f.tool, undefined);
  await assert.rejects(() => retainedTool.execute({}), { code: 'SERVICE_STOPPED' });
});
