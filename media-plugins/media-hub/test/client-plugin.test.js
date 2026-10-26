import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createMediaService } from '../src/host/media-service.js';

const clientSource = fs.readFileSync(new URL('../client.js', import.meta.url), 'utf8');
const settled = () => new Promise(resolve => setImmediate(resolve));

function fixture({ flags = {}, active = null, status = 200, malformed = false, pending = false, accountResponses = [], libraryResponses = [], netdiskResponses = [], manualClock = false } = {}) {
  const entries = new Map();
  const styles = new Set();
  const cleanup = [];
  const requests = [];
  const selections = [];
  let definition;
  let nextStatus = status;
  let hostAccountState; let netdiskAccountState;
  let now = 1_000_000; let timerId = 0; const timers = new Map();
  const React = {
    Component: class { constructor(props) { this.props = props; } setState(value) { Object.assign(this.state, value); } },
    createElement: (type, props, ...children) => ({ type, props: { ...props, children: children.length === 1 ? children[0] : children } }),
    useState: initial => [initial, () => {}],
    useRef: initial => ({ current: initial }),
    useEffect() {},
  };
  const document = {
    head: { appendChild: style => styles.add(style) },
    createElement: () => { const style = { remove: () => styles.delete(style) }; return style; },
    querySelector: selector => active && selector.includes(`"${active}"`) ? {} : null,
  };
  const sandbox = {
    window: { __ModuleLoader__: { load: value => { definition = value; } } },
    document, AbortController, URLSearchParams, setTimeout, clearTimeout, setInterval, clearInterval,
    ...(manualClock ? { Date: class extends Date { static now() { return now; } },
      setTimeout(fn, delay) { timers.set(++timerId, { fn, delay }); return timerId; }, clearTimeout(id) { timers.delete(id); } } : {}),
    fetch: (url, init) => {
      requests.push({ url, init });
      if (url.includes('/api/netdisk')) {
        const response = netdiskResponses.shift(); assert.ok(response, 'Unexpected netdisk request: ' + url);
        return Promise.resolve(typeof response === 'function' ? response(init) : response).then(value => ({ ok: !value.status || value.status === 200, status: value.status || 200, json: async () => value.value }));
      }
      if (url.includes('op=library')) {
        const response = libraryResponses.shift(); assert.ok(response, 'Unexpected library request');
        return Promise.resolve(typeof response === 'function' ? response(init) : response).then(value => ({ ok: !value.status || value.status === 200, status: value.status || 200, json: async () => value.value }));
      }
      if (url.includes('op=account')) {
        const response = accountResponses.shift();
        assert.ok(response, 'Unexpected account request');
        return Promise.resolve({ ok: (response.status || 200) === 200, status: response.status || 200, json: async () => response.value });
      }
      if (pending) return new Promise((resolve, reject) => init.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
      return Promise.resolve({ ok: nextStatus === 200, status: nextStatus, json: async () => {
        if (malformed) return {};
        const data = createMediaService(flags).status();
        if (hostAccountState) { const row = data.providers.find(row => row.id === 'music'); row.accountState = hostAccountState; row.capabilities = { ...row.capabilities, library: hostAccountState === 'authenticated' }; }
        if (netdiskAccountState) data.providers.find(row => row.id === 'netdisk').accountState = netdiskAccountState;
        return data;
      } });
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
    entries, styles, requests, selections, React,
    setResponse: value => { nextStatus = value; },
    setAccountState: value => { hostAccountState = value; },
    setNetdiskAccountState: value => { netdiskAccountState = value; },
    advance: value => { now += value; },
    poll() { const entry = [...timers].find(([, timer]) => timer.delay === 1500); assert.ok(entry, 'Expected a scheduled QR poll'); timers.delete(entry[0]); entry[1].fn(); },
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


function loginBox(f) {
  const component = nodes(f.panel('music')).find(node => node.type?.name === 'AccountBox');
  assert.ok(component, 'Expected account component');
  return component.type();
}
function button(root, text) { return nodes(root).find(node => node.type === 'button' && String(node.props.children).includes(text)); }
function textOf(root) { return nodes(root).flatMap(node => [node.props?.children].flat(Infinity).filter(value => typeof value === 'string')).join(' '); }

function libraryRenderer(f, panel = 'music', name = 'LibraryBox') {
  const element = nodes(f.panel(panel)).find(node => node.type?.name === name);
  assert.ok(element, 'Expected library component');
  const hooks = []; let cursor = 0; let effects = [];
  const original = { useState: f.React.useState, useRef: f.React.useRef, useEffect: f.React.useEffect };
  function render() {
    cursor = 0; effects = [];
    f.React.useState = initial => { const i = cursor++; hooks[i] ??= { value: initial }; return [hooks[i].value, value => { hooks[i].value = typeof value === 'function' ? value(hooks[i].value) : value; }]; };
    f.React.useRef = initial => { const i = cursor++; hooks[i] ??= { current: initial }; return hooks[i]; };
    f.React.useEffect = (effect, deps) => { const i = cursor++; const previous = hooks[i]; if (!previous || deps.some((value, j) => value !== previous.deps[j])) effects.push(() => { previous?.cleanup?.(); hooks[i] = { deps, cleanup: effect() }; }); };
    let result;
    try { result = element.type(element.props); } finally { Object.assign(f.React, original); }
    for (const effect of effects) effect();
    return result;
  }
  return { render, dispose() { for (const hook of hooks) hook?.cleanup?.(); } };
}

test('netdisk browser navigates folders, searches, paginates and exposes only host download links', async () => {
  const file = (id, name, directory = false) => ({ id, name, path: '/' + name, isDirectory: directory, size: 3, modifiedAt: 0 });
  const listing = (items, hasMore = false) => ({ value: { items, hasMore } });
  const f = fixture({ flags: { netdiskBackend: 'baidu' }, netdiskResponses: [
    listing([file('1', '目录', true), file('2', '测试.txt')], true),
    { value: { total: 1000, used: 100, free: 900 } },
    listing([file('2', '测试.txt'), file('3', '第二页.txt')]),
    listing([]), listing([]),
  ] }); let runner;
  try {
    await settled(); f.setNetdiskAccountState('authenticated'); button(f.panel('netdisk'), '刷新状态').props.onClick(); await settled();
    runner = libraryRenderer(f, 'netdisk', 'NetdiskBrowser'); runner.render(); await settled();
    let view = runner.render(); assert.match(textOf(view), /测试.txt/); assert.match(textOf(view), /可用/);
    const link = nodes(view).find(n => n.type === 'a'); assert.equal(link.props.href, '/media-hub/api/netdisk?op=download&id=2');
    button(view, '加载更多文件').props.onClick(); await settled(); view = runner.render();
    assert.match(textOf(view), /第二页.txt/); assert.equal(nodes(view).filter(n => n.type === 'a').length, 2);
    button(view, '打开文件夹').props.onClick(); await settled(); view = runner.render(); assert.match(textOf(view), /此文件夹为空/);
    nodes(view).find(n => n.type === 'input').props.onChange({ target: { value: '财务' } }); view = runner.render();
    nodes(view).find(n => n.type === 'form').props.onSubmit({ preventDefault() {} }); await settled(); view = runner.render();
    assert.match(f.requests.at(-1).url, /query=%E8%B4%A2%E5%8A%A1/); assert.match(textOf(view), /未找到匹配文件/);
    f.setNetdiskAccountState('signed_out'); button(f.panel('netdisk'), '刷新状态').props.onClick(); await settled(); view = runner.render();
    assert.match(textOf(view), /扫码登录百度网盘/); assert.doesNotMatch(textOf(view), /第二页.txt/);
  } finally { runner?.dispose(); f.dispose(); await settled(); }
});

test('netdisk upstream failure is visible and abandoned reads cannot overwrite the new directory', async () => {
  let release; let signal;
  const f = fixture({ flags: { netdiskBackend: 'baidu' }, netdiskResponses: [
    init => { signal = init.signal; return new Promise(resolve => { release = resolve; }); }, { value: { total: 1000, used: 0, free: 1000 } },
    { status: 503, value: { message: '网盘上游暂不可用' } },
  ] }); let runner;
  try {
    await settled(); f.setNetdiskAccountState('authenticated'); button(f.panel('netdisk'), '刷新状态').props.onClick(); await settled();
    runner = libraryRenderer(f, 'netdisk', 'NetdiskBrowser'); runner.render(); await settled();
    f.setNetdiskAccountState('signed_out'); button(f.panel('netdisk'), '刷新状态').props.onClick(); await settled(); runner.render();
    assert.equal(signal.aborted, true); release({ value: { items: [{ id: '9', name: '旧文件' }], hasMore: false } }); await settled();
    f.setNetdiskAccountState('authenticated'); button(f.panel('netdisk'), '刷新状态').props.onClick(); await settled(); runner.render(); await settled();
    const view = runner.render(); assert.match(textOf(view), /网盘上游暂不可用/); assert.doesNotMatch(textOf(view), /此文件夹为空|旧文件/);
  } finally { runner?.dispose(); f.dispose(); await settled(); }
});

test('netdisk QR is serialized, cancelled on unmount and never mistaken for successful login', async () => {
  const f = fixture({ flags: { netdiskBackend: 'baidu' }, manualClock: true, netdiskResponses: [
    { value: { state: 'waiting', loginId: 'baidu-qr', expiresAt: 1_120_000, qrDataUrl: 'data:image/png;base64,YQ==' } },
    { value: { state: 'scanned', loginId: 'baidu-qr', expiresAt: 1_120_000 } },
    { value: { state: 'signed_out' } },
  ] }); let runner;
  try {
    await settled(); runner = libraryRenderer(f, 'netdisk', 'NetdiskBrowser'); let view = runner.render();
    button(view, '扫码登录百度网盘').props.onClick(); await settled(); view = runner.render();
    assert.equal(nodes(view).filter(n => n.type === 'img').length, 1); assert.equal(button(view, '秒后可重试').props.disabled, true);
    f.poll(); await settled(); view = runner.render(); assert.match(textOf(view), /已扫码，请在手机确认登录/); assert.doesNotMatch(textOf(view), /已登录/);
    runner.dispose(); runner = null; await settled();
    assert.equal(JSON.parse(f.requests.at(-1).init.body).action, 'qr.cancel');
  } finally { runner?.dispose(); f.dispose(); await settled(); }
});

test('personal library displays liked songs, paginates, opens playlists and clears on sign out', async () => {
  const track = (mid, title) => ({ songMid: mid, title, artist: '歌手' });
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, libraryResponses: [
    { value: { kind: 'liked', items: [track('m1', '喜欢的歌')], total: 2, hasMore: true, nextOffset: 20 } },
    { value: { kind: 'liked', items: [track('m1', '重复'), track('m2', '第二首')], total: 2, hasMore: false, nextOffset: null } },
    { value: { kind: 'playlists', items: [{ id: '123', dirId: '', title: '我的收藏歌单', trackCount: 1 }], total: 1, nextOffset: null } },
    { value: { kind: 'tracks', items: [track('m3', '歌单里的歌')], total: 1, nextOffset: null } },
  ] });
  let runner;
  try {
    await settled(); f.setAccountState('authenticated'); button(f.panel('music'), '刷新状态').props.onClick(); await settled();
    runner = libraryRenderer(f); runner.render(); await settled();
    let view = runner.render(); assert.match(textOf(view), /喜欢的歌/); assert.match(textOf(view), /我喜欢/); assert.match(textOf(view), /我的歌单/);
    button(view, '加载更多').props.onClick(); await settled(); view = runner.render();
    assert.match(textOf(view), /第二首/); assert.doesNotMatch(textOf(view), /重复/); assert.match(f.requests.filter(row => row.url.includes('op=library'))[1].url, /offset=20/);
    button(view, '我的歌单').props.onClick(); await settled(); view = runner.render(); assert.match(textOf(view), /我的收藏歌单/);
    button(view, '打开歌单').props.onClick(); await settled(); view = runner.render(); assert.match(textOf(view), /歌单里的歌/); assert.match(textOf(view), /返回歌单/);
    assert.equal(nodes(view).filter(node => node.type === 'button' && node.props.children === '播放').length, 1);
    f.setAccountState('signed_out'); button(f.panel('music'), '刷新状态').props.onClick(); await settled(); view = runner.render();
    assert.match(textOf(view), /登录 QQ 音乐后/); assert.doesNotMatch(textOf(view), /歌单里的歌/);
  } finally { runner?.dispose(); f.dispose(); await settled(); }
});

test('library switching aborts old reads and does not present an upstream failure as an empty account', async () => {
  let release; let oldSignal;
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, libraryResponses: [
    init => { oldSignal = init.signal; return new Promise(resolve => { release = resolve; }); },
    { status: 503, value: { error: 'UPSTREAM_UNAVAILABLE', message: '歌单读取失败' } },
  ] }); let runner;
  try {
    await settled(); f.setAccountState('authenticated'); button(f.panel('music'), '刷新状态').props.onClick(); await settled();
    runner = libraryRenderer(f); runner.render(); await settled();
    button(runner.render(), '我的歌单').props.onClick(); await settled(); assert.equal(oldSignal.aborted, true);
    release({ value: { kind: 'liked', items: [{ songMid: 'old', title: '旧账号数据' }], total: 1 } }); await settled();
    const view = runner.render(); assert.match(textOf(view), /歌单读取失败/); assert.doesNotMatch(textOf(view), /暂无个人歌单|旧账号数据/);
  } finally { runner?.dispose(); f.dispose(); await settled(); }
});

test('login double clicks make one request and cooldown is enforced until the deadline', async () => {
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, manualClock: true, accountResponses: [
    { status: 429, value: { error: 'RATE_LIMITED', message: '扫码服务冷却中', retryAfterMs: 3200 } },
    { value: { loginId: 'login-test', image: 'data:image/png;base64,AAAA', expiresAt: 1_120_000, state: 'waiting', authFlow: 'qq-web-oauth-v1' } },
    { value: { state: 'cancelled' } },
  ] });
  try {
    await settled();
    const start = button(loginBox(f), '扫码登录'); start.props.onClick(); start.props.onClick();
    await settled();
    let box = loginBox(f); assert.equal(button(box, '4 秒后可重试').props.disabled, true);
    button(box, '4 秒后可重试').props.onClick(); await settled();
    assert.equal(f.requests.filter(request => request.url.includes('op=account')).length, 1);
    f.advance(1200); box = loginBox(f); assert.equal(button(box, '2 秒后可重试').props.disabled, true);
    f.advance(2000); box = loginBox(f); assert.equal(button(box, '扫码登录').props.disabled, false);
    button(box, '扫码登录').props.onClick(); await settled();
    box = loginBox(f); assert.equal(nodes(box).some(node => node.type === 'img'), true);
    assert.match(textOf(box), /剩余 117 秒/);
  } finally { f.dispose(); await settled(); }
});

test('old QQ worker is cancelled before displaying a QR or scheduling polling', async () => {
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, manualClock: true, accountResponses: [
    { value: { loginId: 'old-login', image: 'data:image/png;base64,AAAA', expiresAt: 1_120_000, state: 'waiting' } },
    { value: { state: 'cancelled' } },
  ] });
  try {
    await settled(); button(loginBox(f), '扫码登录').props.onClick(); await settled();
    const box = loginBox(f);
    assert.match(textOf(box), /音乐后端尚未加载新版网页登录流程/);
    assert.equal(nodes(box).some(node => node.type === 'img'), false);
    assert.deepEqual(f.requests.filter(request => request.url.includes('op=account')).map(request => JSON.parse(request.init.body).action), ['qr.create', 'qr.cancel']);
    assert.throws(() => f.poll(), /Expected a scheduled QR poll/);
  } finally { f.dispose(); await settled(); }
});

test('authenticated host refresh clears stale QR errors and cooldown from another tab', async () => {
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, manualClock: true, accountResponses: [
    { status: 429, value: { error: 'RATE_LIMITED', message: '扫码服务冷却中', retryAfterMs: 60_000 } },
  ] });
  try {
    await settled(); button(loginBox(f), '扫码登录').props.onClick(); await settled();
    assert.match(textOf(loginBox(f)), /扫码服务冷却中/);
    f.setAccountState('authenticated'); button(f.panel('music'), '刷新状态').props.onClick(); await settled();
    const box = loginBox(f);
    assert.match(textOf(box), /已扫码登录/);
    assert.doesNotMatch(textOf(box), /冷却|过期|失败/);
    assert.equal(nodes(box).some(node => node.type === 'img'), false);
    assert.equal(f.requests.filter(request => request.url.includes('op=account')).length, 1);
  } finally { f.dispose(); await settled(); }
});

test('failed confirmation removes QR, preserves upstream diagnostics and arms cooldown', async () => {
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, manualClock: true, accountResponses: [
    { value: { loginId: 'login-test', image: 'data:image/png;base64,AAAA', expiresAt: 1_120_000, state: 'waiting', authFlow: 'qq-web-oauth-v1' } },
    { status: 429, value: { error: 'RATE_LIMITED', message: '扫码请求过于频繁', retryAfterMs: 60_000, failureStage: 'credential-exchange', failureReason: 'upstream-rejected', upstreamCode: 104604 } },
    { value: { state: 'cancelled' } },
  ] });
  try {
    await settled(); button(loginBox(f), '扫码登录').props.onClick(); await settled(); f.poll(); await settled();
    const box = loginBox(f); const text = textOf(box);
    assert.match(text, /凭证交换/); assert.match(text, /104604/); assert.doesNotMatch(text, /二维码已失效/);
    assert.equal(nodes(box).some(node => node.type === 'img'), false);
    assert.equal(button(box, '60 秒后可重试').props.disabled, true);
  } finally { f.dispose(); await settled(); }
});

for (const [state, expected] of [['expired', /二维码已过期/], ['cancelled', /已在手机取消登录/]]) test('terminal QR state is shown accurately: ' + state, async () => {
  const f = fixture({ flags: { musicBackend: 'qqmusic' }, manualClock: true, accountResponses: [
    { value: { loginId: 'login-test', image: 'data:image/png;base64,AAAA', expiresAt: 1_120_000, state: 'waiting', authFlow: 'qq-web-oauth-v1' } },
    { value: { state, retryAfterMs: 4000 } },
  ] });
  try {
    await settled(); button(loginBox(f), '扫码登录').props.onClick(); await settled(); f.poll(); await settled();
    assert.match(textOf(loginBox(f)), expected); assert.equal(button(loginBox(f), '4 秒后可重试').props.disabled, true);
  } finally { f.dispose(); await settled(); }
});
