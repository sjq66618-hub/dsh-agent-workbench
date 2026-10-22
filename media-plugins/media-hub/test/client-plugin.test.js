import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createMediaService } from '../src/host/media-service.js';

const clientSource = fs.readFileSync(new URL('../client.js', import.meta.url), 'utf8');
const settled = () => new Promise(resolve => setImmediate(resolve));

function fixture({ flags = {}, active = null, status = 200, malformed = false, pending = false } = {}) {
  const entries = new Map();
  const styles = new Set();
  const cleanup = [];
  const requests = [];
  const selections = [];
  let definition;
  let nextStatus = status;
  const React = {
    Component: class { constructor(props) { this.props = props; } setState(value) { Object.assign(this.state, value); } },
    createElement: (type, props, ...children) => ({ type, props: { ...props, children: children.length === 1 ? children[0] : children } }),
    useState: initial => [initial, () => {}],
    useEffect() {},
  };
  const document = {
    head: { appendChild: style => styles.add(style) },
    createElement: () => { const style = { remove: () => styles.delete(style) }; return style; },
    querySelector: selector => active && selector.includes(`"${active}"`) ? {} : null,
  };
  const sandbox = {
    window: { __ModuleLoader__: { load: value => { definition = value; } } },
    document, AbortController, setTimeout, clearTimeout,
    fetch: (url, init) => {
      requests.push({ url, init });
      if (pending) return new Promise((resolve, reject) => init.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
      return Promise.resolve({ ok: nextStatus === 200, status: nextStatus, json: async () => malformed ? {} : createMediaService(flags).status() });
    },
  };
  vm.runInNewContext(clientSource, sandbox);
  assert.equal(definition.id, '@local/dsh-media-hub');
  const plugin = definition.factory(name => { assert.equal(name, 'react'); return React; });
  const ctx = {
    effect: effect => cleanup.push(effect()),
    layout: { selectPanel: id => { selections.push(id); active = id; } },
    slots: {
      inject: (_slot, effect) => effect(),
      register: (metadata, render) => {
        const key = `${metadata.name}:${metadata.id || metadata.key}`;
        assert.equal(entries.has(key), false, 'Duplicate slot registration');
        entries.set(key, { metadata, render });
        return () => entries.delete(key);
      },
    },
  };
  plugin.apply(ctx);
  return {
    entries, styles, requests, selections,
    setResponse: value => { nextStatus = value; },
    panel(id) {
      const boundary = entries.get(`main:media-hub.${id}`).render();
      return boundary.props.children.type();
    },
    dispose() { while (cleanup.length) cleanup.pop()?.(); },
  };
}

function nodes(root) {
  if (!root || typeof root !== 'object') return [];
  return [root, ...[root.props?.children].flat(Infinity).flatMap(nodes)];
}

test('client mounts two namespaced native panels once and scopes styles', async () => {
  const f = fixture();
  await settled();
  assert.equal(f.entries.size, 4);
  assert.equal(f.styles.size, 1);
  assert.equal(f.requests[0].url, '/media-hub/api/status');
  assert.equal(f.requests[0].init.credentials, 'same-origin');
  assert.ok(f.requests[0].init.signal instanceof AbortSignal);
  for (const id of ['music', 'netdisk']) {
    const panel = f.panel(id);
    assert.equal(panel.props['data-testid'], `media-hub-${id}-panel`);
    assert.equal(nodes(panel).filter(node => node.props?.['data-testid'] === 'media-hub-host-status').length, 1);
  }
  f.dispose();
  assert.equal(f.entries.size, 0);
  assert.equal(f.styles.size, 0);
});

for (const disabled of ['music', 'netdisk']) test(`disabling ${disabled} preserves the other provider and resets an invalid selection`, async () => {
  const f = fixture({ flags: { [`${disabled}Enabled`]: false }, active: disabled });
  await settled();
  assert.equal(f.entries.size, 2);
  assert.equal(f.entries.has(`main:media-hub.${disabled}`), false);
  assert.deepEqual(f.selections, [null]);
  f.dispose();
});

test('HTTP failure keeps diagnosis entries, reports failure, and retry shows only actual host data', async () => {
  const f = fixture({ status: 503 });
  await settled();
  const before = nodes(f.panel('music'));
  assert.equal(before.filter(node => node.props?.role === 'alert').length, 1);
  assert.equal(before.filter(node => node.props?.['data-testid'] === 'media-hub-host-status').length, 0);
  f.setResponse(200);
  before.find(node => node.type === 'button').props.onClick();
  await settled();
  const after = nodes(f.panel('music'));
  assert.equal(after.filter(node => node.props?.role === 'alert').length, 0);
  assert.equal(after.filter(node => node.props?.['data-testid'] === 'media-hub-host-status').length, 1);
  assert.equal(f.entries.size, 4);
  f.dispose();
});

test('malformed status cannot be presented as a successful connection', async () => {
  const f = fixture({ malformed: true });
  await settled();
  const panel = nodes(f.panel('netdisk'));
  assert.equal(panel.filter(node => node.props?.role === 'alert').length, 1);
  assert.equal(panel.filter(node => node.props?.['data-testid'] === 'media-hub-host-status').length, 0);
  f.dispose();
});

test('unloading an active panel aborts pending requests, resets selection, removes slots and styles', async () => {
  const f = fixture({ pending: true, active: 'music' });
  f.dispose();
  await settled();
  assert.equal(f.requests[0].init.signal.aborted, true);
  assert.deepEqual(f.selections, [null]);
  assert.equal(f.entries.size, 0);
  assert.equal(f.styles.size, 0);
  f.dispose();
});
