import test from 'node:test';
import assert from 'node:assert/strict';
import { QqAuthAgent, createQqAuthTransport, reconnectQqWebSocket } from '../src/providers/qq-music-network.js';

test('untracked sockets, including timeout-shaped errors, can never trigger a replay', () => {
  const agent = new QqAuthAgent();
  try {
    for (const code of ['ECONNRESET', 'ECONNABORTED', 'ETIMEDOUT']) assert.equal(agent.canReconnect({ code, request: { socket: {} } }), false);
  } finally { agent.destroy(); }
});

test('auth transport reconnects only a proven pre-TLS reset, with bounded backoff', async () => {
  const waits = []; let calls = 0;
  const reset = Object.assign(new Error('private'), { code: 'ECONNRESET' });
  const agent = { canReconnect: error => error === reset };
  const transport = createQqAuthTransport({ request: async config => { assert.equal(config.httpsAgent, agent); if (++calls < 3) throw reset; return { status: 200 }; } }, { agent, wait: async ms => waits.push(ms) });
  assert.deepEqual(await transport.request({ method: 'POST' }), { status: 200 });
  assert.equal(calls, 3); assert.deepEqual(waits, [250, 500]);
});
test('established TLS, application rejection and unknown sockets never replay authentication', async () => {
  for (const error of [new Error('business rejection'), Object.assign(new Error(), { code: 'ECONNRESET' })]) {
    let calls = 0;
    const transport = createQqAuthTransport({ request: async () => { calls++; throw error; } }, { agent: { canReconnect: () => false }, wait: async () => assert.fail('must not wait') });
    await assert.rejects(transport.request({ method: 'POST' }), error); assert.equal(calls, 1);
  }
});
test('auth transport does not loop indefinitely on a broken network', async () => {
  let calls = 0; const error = Object.assign(new Error(), { code: 'ECONNRESET' });
  const transport = createQqAuthTransport({ request: async () => { calls++; throw error; } }, { agent: { canReconnect: () => true }, wait: async () => {} });
  await assert.rejects(transport.request({}), error); assert.equal(calls, 3);
});
test('WebSocket reconnects before open without repeating MQTT authentication or QR creation', async () => {
  let calls = 0; const marker = {}; const waits = [];
  const connect = reconnectQqWebSocket(async (...args) => { assert.deepEqual(args, ['wss://example.invalid', 'mqtt', marker]); if (++calls < 3) throw new Error('MQTT handshake failed'); return marker; }, { wait: async ms => waits.push(ms) });
  assert.equal(await connect('wss://example.invalid', 'mqtt', marker), marker); assert.equal(calls, 3); assert.deepEqual(waits, [250, 500]);
});
test('WebSocket post-open failures and persistent handshake errors stay bounded', async () => {
  for (const [message, expected] of [['MQTT packet timeout', 1], ['MQTT handshake failed', 3]]) {
    let calls = 0; const connect = reconnectQqWebSocket(async () => { calls++; throw new Error(message); }, { wait: async () => {} });
    await assert.rejects(connect(), { message }); assert.equal(calls, expected);
  }
});
