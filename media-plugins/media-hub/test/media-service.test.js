import test from 'node:test';
import assert from 'node:assert/strict';
import { createMediaService } from '../src/host/media-service.js';

test('P1 reports an explicit unavailable music provider without claiming login', () => {
  const status = createMediaService().status();
  assert.equal(status.phase, 'P1');
  assert.equal(status.operationsEnabled, false);
  assert.deepEqual(status.providers.map(p => p.id), ['music', 'netdisk']);
  assert.equal(status.providers[0].state, 'unavailable');
  assert.equal(status.providers[1].state, 'not_connected');
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
    assert.equal(providers.find(p => p.id === other).state, other === 'music' ? 'unavailable' : 'not_connected');
  });
  test(`${flag} rejects ambiguous non-boolean values`, () => {
    for (const value of [null, 0, 1, '', 'false', [], {}]) {
      assert.throws(() => createMediaService({ [flag]: value }), TypeError);
    }
  });
}

test('operationsEnabled requires both a ready provider and musicEnabled', () => {
  const readyProvider = { available: true, accountState: 'authorized' };
  const enabledStatus = createMediaService({ musicProvider: readyProvider, musicEnabled: true }).status();
  assert.equal(enabledStatus.providers[0].state, 'ready');
  assert.equal(enabledStatus.operationsEnabled, true);

  const disabledStatus = createMediaService({ musicProvider: readyProvider, musicEnabled: false }).status();
  assert.equal(disabledStatus.providers[0].state, 'disabled');
  assert.equal(disabledStatus.providers[0].accountState, 'not_checked');
  assert.equal(disabledStatus.operationsEnabled, false);

  const unavailableStatus = createMediaService({ musicEnabled: true }).status();
  assert.equal(unavailableStatus.providers[0].state, 'unavailable');
  assert.equal(unavailableStatus.operationsEnabled, false);
});

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
