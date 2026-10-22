import test from 'node:test';
import assert from 'node:assert/strict';
import { createMediaService } from '../src/host/media-service.js';

test('P0 reports two enabled but unconnected providers without claiming login', () => {
  const status = createMediaService().status();
  assert.equal(status.phase, 'P0');
  assert.equal(status.operationsEnabled, false);
  assert.deepEqual(status.providers.map(p => p.id), ['music', 'netdisk']);
  assert.ok(status.providers.every(p => p.enabled && p.state === 'not_connected'));
  assert.ok(status.providers.every(p => p.accountState === 'not_checked'));
  assert.doesNotThrow(() => JSON.stringify(status));
});

for (const [flag, id, other] of [
  ['musicEnabled', 'music', 'netdisk'],
  ['netdiskEnabled', 'netdisk', 'music'],
]) {
  test(`${flag} only disables its own provider`, () => {
    const providers = createMediaService({ [flag]: false }).status().providers;
    assert.equal(providers.find(p => p.id === id).state, 'disabled');
    assert.equal(providers.find(p => p.id === other).state, 'not_connected');
  });
  test(`${flag} rejects ambiguous non-boolean values`, () => {
    for (const value of [null, 0, 1, '', 'false', [], {}]) {
      assert.throws(() => createMediaService({ [flag]: value }), TypeError);
    }
  });
}

test('returned data and caller config cannot mutate service state', () => {
  const config = { musicEnabled: true };
  const service = createMediaService(config);
  config.musicEnabled = false;
  service.status().providers[0].enabled = false;
  assert.equal(service.status().providers[0].enabled, true);
});

test('disposal is idempotent and invalidates subsequent reads', () => {
  const service = createMediaService();
  service.dispose();
  assert.doesNotThrow(() => service.dispose());
  assert.throws(() => service.status(), { code: 'SERVICE_STOPPED' });
});
