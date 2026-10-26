window.__ModuleLoader__.load({
  id: '@local/dsh-media-hub',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const providers = [
      { id: 'music', key: 'media-hub.music', label: 'QQ 音乐', icon: '♪', order: 20 },
      { id: 'netdisk', key: 'media-hub.netdisk', label: '百度网盘', icon: '▱', order: 30 },
    ];

    function validateStatus(value) {
      if (!value || value.schemaVersion !== 1 || !['P1', 'P1.1'].includes(value.phase) || typeof value.operationsEnabled !== 'boolean' || !Array.isArray(value.providers)) throw new Error('宿主状态格式不匹配');
      for (const provider of providers) {
        const row = value.providers.find(item => item.id === provider.id);
        if (!row || typeof row.enabled !== 'boolean' || typeof row.state !== 'string' || typeof row.accountState !== 'string') throw new Error('宿主入口状态不完整');
      }
      return value;
    }

    class PanelBoundary extends React.Component {
      constructor(props) { super(props); this.state = { error: null }; }
      static getDerivedStateFromError(error) { return { error }; }
      render() {
        if (!this.state.error) return this.props.children;
        return h('section', { 'data-media-hub-root': '', 'data-media-hub-panel': this.props.provider.id, role: 'alert', className: 'dsh-media-hub' }, h('h2', null, '媒体面板暂时不可用'), h('p', null, '可继续使用主会话，或重试此面板。'), h('button', { onClick: () => { this.setState({ error: null }); this.props.refresh(); } }, '重试'));
      }
    }

    function createPersistentPlayer() {
      const listeners = new Set();
      const state = { current: null, playing: false, error: null };
      let audio = null;
      try {
        audio = document.createElement('audio');
        audio.preload = 'metadata';
        audio.setAttribute?.('aria-hidden', 'true');
        audio.style.display = 'none';
        audio.addEventListener?.('play', () => { state.playing = true; emit(); });
        audio.addEventListener?.('pause', () => { state.playing = false; emit(); });
        audio.addEventListener?.('ended', () => { state.playing = false; emit(); });
        audio.addEventListener?.('error', () => { state.playing = false; state.error = '音频源不可用，请重新播放'; emit(); });
        document.body?.appendChild?.(audio);
      } catch { audio = null; }
      function emit() { for (const listener of listeners) listener({ ...state }); }
      return {
        subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
        snapshot() { return { ...state }; },
        async load(lease) {
          state.current = lease.track; state.error = null;
          if (!audio) { state.playing = false; emit(); return; }
          audio.src = lease.streamPath;
          try { await audio.play(); } catch { state.playing = false; state.error = '浏览器未允许自动播放，请点击播放'; emit(); }
        },
        async toggle() {
          if (!audio || !state.current) return;
          if (state.playing) audio.pause();
          else { try { await audio.play(); } catch { state.error = '浏览器未允许播放'; emit(); } }
        },
        stop() {
          if (audio) { audio.pause?.(); audio.removeAttribute?.('src'); audio.load?.(); }
          state.current = null; state.playing = false; state.error = null; emit();
        },
        dispose() { this.stop(); audio?.remove?.(); listeners.clear(); },
      };
    }

    return {
      inject: ['slots', 'layout'],
      apply(ctx) {
        ctx.effect(() => {
          let disposed = false;
          let request;
          let state = { loading: true, data: null, error: null };
          const listeners = new Set();
          const mounted = new Map();
          const player = createPersistentPlayer();
          const activeRequests = new Set();
          const loginListeners = new Set();
          let loginRetryAt = 0;
          let loginState = { qr: null, busy: false, error: null, retryAt: 0 };
          let loginTimer; let loginController; let loginEpoch = 0;
          const style = document.createElement('style');
          style.textContent = `
            .dsh-media-hub .mh-netdisk-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:16px 0}.dsh-media-hub .mh-netdisk-path{overflow-wrap:anywhere;flex:1;min-width:120px}.dsh-media-hub .mh-netdisk-files{display:grid;gap:0}.dsh-media-hub .mh-netdisk-files .mh-row{border:0;border-bottom:1px solid var(--dsw-alias-border-base,#d4d4d8);border-radius:0}.dsh-media-hub .mh-download{color:inherit;text-decoration:underline;padding:6px 8px;white-space:nowrap}.dsh-media-hub .mh-netdisk-quota{font-size:12px;opacity:.75}
            .dsh-media-hub .mh-library{margin:20px 0;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-base,#d4d4d8)}.dsh-media-hub .mh-library-tabs{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px}.dsh-media-hub .mh-library [role=tab][aria-selected=true]{font-weight:700;border-color:currentColor}.dsh-media-hub .mh-library-list{display:grid;gap:8px;max-height:480px;overflow:auto}.dsh-media-hub .mh-library-footer{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:12px}@media(max-width:600px){.dsh-media-hub .mh-row{flex-wrap:wrap}.dsh-media-hub .mh-row-actions{flex-wrap:wrap}}
            .dsh-media-hub{box-sizing:border-box;height:100%;overflow:auto;padding:24px 28px;color:var(--dsw-alias-text-primary,inherit);font-size:14px;line-height:1.6}
            .dsh-media-hub .mh-content{max-width:920px;margin:0 auto}.dsh-media-hub header{display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-bottom:14px}
            .dsh-media-hub h2{font-size:20px;line-height:1.4;margin:0;font-weight:600}.dsh-media-hub h3{font-size:15px;margin:20px 0 8px}.dsh-media-hub p{margin:12px 0}
            .dsh-media-hub button{font:inherit;color:inherit;background:var(--dsw-alias-bg-base,transparent);border:1px solid var(--dsw-alias-border-base,#a1a1aa);border-radius:6px;padding:6px 12px;cursor:pointer;white-space:nowrap}.dsh-media-hub button:disabled{opacity:.5;cursor:wait}.dsh-media-hub [role=alert]{color:#b91c1c}
            .dsh-media-hub .mh-stage{font-size:12px;opacity:.6;border-top:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-top:14px}.dsh-media-hub .mh-search{display:flex;gap:8px;margin:20px 0}.dsh-media-hub .mh-search input{flex:1;min-width:0;font:inherit;color:inherit;background:transparent;border:1px solid var(--dsw-alias-border-base,#a1a1aa);border-radius:6px;padding:7px 10px}
            .dsh-media-hub .mh-account{border-bottom:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-bottom:12px}.dsh-media-hub .mh-account select{font:inherit;color:inherit;background:var(--dsw-alias-bg-base,#fff);padding:7px;border:1px solid var(--dsw-alias-border-base,#a1a1aa);border-radius:6px;margin-right:8px}.dsh-media-hub .mh-account button{margin-right:6px}.dsh-media-hub .mh-account img{display:block;background:white;margin-top:12px;object-fit:contain} .dsh-media-hub .mh-results,.dsh-media-hub .mh-queue{display:grid;gap:8px}.dsh-media-hub .mh-row{display:flex;align-items:center;justify-content:space-between;gap:12px;border:1px solid var(--dsw-alias-border-base,#d4d4d8);border-radius:6px;padding:10px 12px}.dsh-media-hub .mh-row-main{min-width:0}.dsh-media-hub .mh-row-title{font-weight:600;overflow-wrap:anywhere}.dsh-media-hub .mh-row-meta{font-size:12px;opacity:.7;overflow-wrap:anywhere}.dsh-media-hub .mh-row-actions{display:flex;gap:6px;flex:none}
            .dsh-media-hub .mh-player{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid var(--dsw-alias-border-base,#d4d4d8);margin-top:20px;padding-top:14px}.dsh-media-hub .mh-player-title{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsh-media-hub .mh-player-actions{display:flex;gap:6px;flex:none}.dsh-media-hub pre{white-space:pre-wrap;max-height:260px;overflow:auto;border:1px solid var(--dsw-alias-border-base,#d4d4d8);border-radius:6px;padding:12px;font:inherit}
            @media(max-width:560px){.dsh-media-hub{padding:18px 14px}.dsh-media-hub header{align-items:flex-start}.dsh-media-hub .mh-row{align-items:flex-start;flex-direction:column}.dsh-media-hub .mh-row-actions{width:100%}.dsh-media-hub .mh-row-actions button{flex:1}.dsh-media-hub .mh-player{align-items:flex-start;flex-direction:column}.dsh-media-hub .mh-player-actions{width:100%}.dsh-media-hub .mh-player-actions button{flex:1}}
          `;
          document.head.appendChild(style);

          function publish(next) { state = next; for (const listener of listeners) listener(next); }
          function useStatus() { const [current, setCurrent] = React.useState(state); React.useEffect(() => { listeners.add(setCurrent); setCurrent(state); return () => listeners.delete(setCurrent); }, []); return current; }
          function usePlayer() { const [current, setCurrent] = React.useState(player.snapshot()); React.useEffect(() => player.subscribe(setCurrent), []); return current; }
          async function requestJson(path, init = {}) {
            const { signal, timeoutMs = 12_000, headers, ...options } = init;
            const controller = new AbortController(); const abort = () => controller.abort();
            signal?.addEventListener('abort', abort, { once: true });
            if (disposed || signal?.aborted) abort();
            activeRequests.add(controller); const timer = setTimeout(abort, timeoutMs);
            try { const response = await fetch(path, { credentials: 'same-origin', ...options, headers: { accept: 'application/json', ...(init.body ? { 'content-type': 'application/json' } : {}), ...headers }, signal: controller.signal }); const value = await response.json().catch(() => ({})); if (!response.ok) { const error = new Error(value.message || `HTTP ${response.status}`); error.code = value.error; for (const name of ['retryAfterMs', 'failureStage', 'failureReason', 'upstreamCode', 'upstreamHttpStatus']) if (Object.hasOwn(value, name)) error[name] = value[name]; throw error; } return value; }
            finally { clearTimeout(timer); activeRequests.delete(controller); signal?.removeEventListener('abort', abort); }
          }
          function publishLogin(next) { loginState = { ...next, retryAt: loginRetryAt }; if (!disposed) for (const listener of loginListeners) listener(loginState); }
          function rememberLoginCooldown(value) {
            if (Number.isSafeInteger(value?.retryAfterMs) && value.retryAfterMs > 0 && value.retryAfterMs <= 3_600_000) loginRetryAt = Math.max(loginRetryAt, Date.now() + value.retryAfterMs);
          }
          function loginErrorText(error, fallback) {
            const stages = { 'device-bootstrap': '设备初始化', 'session-bootstrap': '登录初始化', 'qr-create': '二维码生成', 'mqtt-listener': '扫码连接', 'qr-poll': '扫码状态读取', 'credential-payload': '扫码凭证读取', 'credential-exchange': '凭证交换', 'credential-validation': '账号验证', 'session-issue': '会话创建' };
            const details = [];
            if (stages[error.failureStage]) details.push(stages[error.failureStage]);
            if (Number.isSafeInteger(error.upstreamCode)) details.push('上游码 ' + error.upstreamCode);
            if (Number.isSafeInteger(error.upstreamHttpStatus) && error.upstreamHttpStatus >= 100 && error.upstreamHttpStatus <= 599) details.push('HTTP ' + error.upstreamHttpStatus);
            return (error.message || fallback) + (details.length ? '（' + details.join(' · ') + '）' : '');
          }
          function accountRequest(action, args = {}, signal) { return requestJson('/media-hub/api/music?op=account', { method: 'POST', headers: { 'x-media-hub-ui': '1' }, body: JSON.stringify({ action, ...args }), signal, timeoutMs: ['qr.create', 'qr.check'].includes(action) ? 38_000 : 12_000 }); }
          function cancelLogin() {
            ++loginEpoch; clearTimeout(loginTimer); loginController?.abort(); loginController = undefined;
            const qr = loginState.qr;
            if (qr && ['waiting', 'scanned'].includes(qr.state) && !disposed) void accountRequest('qr.cancel', { loginId: qr.loginId }).catch(() => {});
            publishLogin({ qr: null, busy: false, error: null });
          }
          async function startLogin(channel) {
            if (disposed || loginState.busy || loginState.qr || Date.now() < loginRetryAt) return;
            cancelLogin(); const epoch = ++loginEpoch;
            const controller = new AbortController(); loginController = controller;
            publishLogin({ qr: null, busy: true, error: null });
            try {
              const qr = await accountRequest('qr.create', { channel }, controller.signal);
              if (disposed || epoch !== loginEpoch) return;
              if (channel === 'qq' && qr.authFlow !== 'qq-web-oauth-v1') {
                if (qr.loginId) await accountRequest('qr.cancel', { loginId: qr.loginId }, controller.signal);
                throw new Error('音乐后端尚未加载新版网页登录流程，请在插件管理中重载媒体插件后再试');
              }
              if (!qr.loginId || !/^data:image\/(png|jpeg|gif);base64,[A-Za-z0-9+/=]+$/.test(qr.image)) throw new Error('二维码格式无效');
              publishLogin({ qr, busy: false, error: null });
              loginTimer = setTimeout(() => { void pollLogin(epoch, controller); }, qr.retryAfterMs || 1500);
            } catch (error) { if (!disposed && epoch === loginEpoch) { rememberLoginCooldown(error); publishLogin({ qr: null, busy: false, error: loginErrorText(error, '获取二维码失败') }); } }
          }
          async function pollLogin(epoch, controller) {
            if (disposed || epoch !== loginEpoch || !loginState.qr) return;
            const qr = loginState.qr;
            try {
              const result = await accountRequest('qr.check', { loginId: qr.loginId }, controller.signal);
              if (disposed || epoch !== loginEpoch) return;
              if (result.state === 'authenticated') { publishLogin({ qr: null, busy: false, error: null }); await refresh(); return; }
              if (!['waiting', 'scanned'].includes(result.state)) { rememberLoginCooldown(result); publishLogin({ qr: null, busy: false, error: result.state === 'expired' ? '二维码已过期，请等待倒计时结束后重新获取' : result.state === 'cancelled' ? '已在手机取消登录' : '扫码登录未完成，请重试' }); return; }
              publishLogin({ qr: { ...qr, ...result }, busy: false, error: null });
              loginTimer = setTimeout(() => { void pollLogin(epoch, controller); }, result.retryAfterMs || 1500);
            } catch (error) { if (!disposed && epoch === loginEpoch) { rememberLoginCooldown(error); cancelLogin(); publishLogin({ qr: null, busy: false, error: loginErrorText(error, '登录状态读取失败，请稍后重试') }); } }
          }
          async function logout() {
            cancelLogin(); player.stop(); publishLogin({ qr: null, busy: true, error: null });
            try { await accountRequest('logout'); publishLogin({ qr: null, busy: false, error: null }); await refresh(); }
            catch (error) { publishLogin({ qr: null, busy: false, error: error.message || '退出失败，请重试' }); }
          }
          function remove(provider) { const disposers = mounted.get(provider.id); if (!disposers) return; if (document.querySelector(`[data-media-hub-panel="${provider.id}"]`)) ctx.layout.selectPanel(null); mounted.delete(provider.id); if (provider.id === 'music') player.stop(); for (const dispose of disposers.slice().reverse()) dispose(); }
          function mount(provider) {
            if (mounted.has(provider.id)) return;
            function Icon({ size = 16 }) { return h('span', { 'aria-hidden': true, style: { fontSize: size, lineHeight: 1 }, 'data-testid': `media-hub-${provider.id}-icon` }, provider.icon); }
            function PlayerBar() { const current = usePlayer(); if (!current.current) return null; return h('div', { className: 'mh-player', 'data-testid': 'media-hub-player' }, h('div', { className: 'mh-player-title' }, `${current.current.title}${current.current.artist ? ` · ${current.current.artist}` : ''}`), h('div', { className: 'mh-player-actions' }, h('button', { onClick: () => { void player.toggle(); }, 'aria-label': current.playing ? '暂停' : '播放' }, current.playing ? '暂停' : '播放'), h('button', { onClick: () => player.stop(), 'aria-label': '停止' }, '停止')), current.error ? h('p', { role: 'alert' }, current.error) : null); }
            function AccountBox() {
              const current = useStatus();
              const [login, setLogin] = React.useState(loginState);
              const [channel, setChannel] = React.useState('qq');
              const [now, setNow] = React.useState(Date.now());
              React.useEffect(() => {
                if (!login.qr && login.retryAt <= Date.now()) return;
                const tick = () => setNow(Date.now()); tick();
                const timer = setInterval(tick, 1000);
                return () => clearInterval(timer);
              }, [Boolean(login.qr), login.retryAt]);
              const cooldown = Math.max(0, Math.ceil((login.retryAt - now) / 1000));
              const qrRemaining = login.qr ? Math.max(0, Math.ceil((login.qr.expiresAt - now) / 1000)) : 0;
              React.useEffect(() => { loginListeners.add(setLogin); setLogin(loginState); return () => { loginListeners.delete(setLogin); cancelLogin(); }; }, []);
              const row = current.data?.providers.find(item => item.id === 'music');
              const signedIn = row?.accountState === 'authenticated';
              const canLogin = ['configured', 'ready'].includes(row?.state);
              return h('div', { className: 'mh-account', 'data-testid': 'media-hub-account' },
                h('h3', null, '账号登录'),
                signedIn ? h('div', null, h('span', null, '已扫码登录 · '), h('button', { onClick: () => { void logout(); }, disabled: login.busy }, '退出登录')) : h('div', null,
                  h('select', { value: channel, onChange: event => setChannel(event.target.value), disabled: login.busy || Boolean(login.qr), 'aria-label': '扫码登录通道' },
                    h('option', { value: 'qq' }, '手机 QQ（网页登录）'), h('option', { value: 'wechat' }, '微信'), h('option', { value: 'qqmusic' }, 'QQ 音乐 App')),
                  h('button', { onClick: () => { void startLogin(channel); }, disabled: login.busy || !canLogin || Boolean(login.qr) || cooldown > 0 }, login.busy ? '正在获取二维码' : cooldown > 0 ? cooldown + ' 秒后可重试' : '扫码登录'),
                  login.qr || login.busy ? h('button', { onClick: cancelLogin }, '取消登录') : null),
                login.qr ? h('div', { 'data-testid': 'media-hub-login-qr' },
                  h('img', { src: login.qr.image, width: 220, height: 220, alt: 'QQ 音乐登录二维码', referrerPolicy: 'no-referrer' }),
                  h('p', { role: 'status' }, login.qr.state === 'scanned' ? '已扫码，正在等待手机确认或账号验证，请勿重新获取' : qrRemaining > 0 ? '请使用所选通道扫码；剩余 ' + qrRemaining + ' 秒' : '正在核对二维码最终状态，请稍候')) : null,
                cooldown > 0 ? h('p', { role: 'status' }, '扫码服务冷却中，请等待 ' + cooldown + ' 秒；无需重复点击。') : null,
                login.error ? h('p', { role: 'alert' }, login.error) : null,
                h('p', { className: 'mh-row-meta' }, 'QQ 音乐需单独扫码，与 DSH 网页版登录无关。账号仅保存在受管进程内存，DSH 重启后需重新扫码。不导入旧账号，不自动播放或降级试听。'));
            }
            function LibraryBox({ inspect, add, play, processing }) {
              const current = useStatus();
              const account = current.data?.providers.find(item => item.id === 'music');
              const signedIn = account?.accountState === 'authenticated';
              const supported = account?.capabilities?.library === true;
              const initial = { kind: 'liked', playlist: null, items: [], total: 0, nextOffset: null, hasMore: false, loading: false, loaded: false, error: null };
              const [library, setLibrary] = React.useState(initial);
              const flight = React.useRef({ epoch: 0, controller: null });
              async function load(kind, playlist = null, offset = 0) {
                if (!signedIn || !supported) return;
                flight.current.controller?.abort();
                const controller = new AbortController(); const epoch = ++flight.current.epoch; flight.current.controller = controller;
                setLibrary(previous => ({ ...(offset ? previous : initial), kind, playlist, loading: true, error: null }));
                try {
                  const params = new URLSearchParams({ op: 'library', kind, offset: String(offset), limit: '20' });
                  if (playlist) { params.set('id', playlist.id); params.set('dirId', playlist.dirId); }
                  const value = await requestJson('/media-hub/api/music?' + params, { signal: controller.signal, timeoutMs: 38_000 });
                  if (controller.signal.aborted || epoch !== flight.current.epoch) return;
                  if (!Array.isArray(value.items) || value.kind !== kind) throw new Error('音乐库返回格式不匹配，请重载媒体插件');
                  setLibrary(previous => {
                    const items = offset ? [...previous.items] : []; const seen = new Set(items.map(item => item.songMid || (item.id ? 'id:' + item.id : 'dir:' + item.dirId)));
                    for (const item of value.items) { const key = item.songMid || (item.id ? 'id:' + item.id : 'dir:' + item.dirId); if (!seen.has(key)) { seen.add(key); items.push(item); } }
                    return { kind, playlist, items, total: value.total, nextOffset: Number.isSafeInteger(value.nextOffset) && value.nextOffset > offset ? value.nextOffset : null, hasMore: value.hasMore === true, loading: false, loaded: true, error: null };
                  });
                  void refresh();
                } catch (error) {
                  if (controller.signal.aborted || epoch !== flight.current.epoch) return;
                  setLibrary(previous => ({ ...previous, loading: false, error: error.message || '个人音乐库读取失败' }));
                  if (error.code === 'AUTH_REQUIRED') void refresh();
                } finally { if (epoch === flight.current.epoch) flight.current.controller = null; }
              }
              React.useEffect(() => {
                setLibrary(initial);
                if (signedIn && supported) void load('liked');
                return () => { ++flight.current.epoch; flight.current.controller?.abort(); };
              }, [signedIn, supported]);
              if (!signedIn) return h('section', { className: 'mh-library', 'data-testid': 'media-hub-library' }, h('h3', null, '我的音乐'), h('p', null, '登录 QQ 音乐后查看我喜欢和个人歌单'));
              if (!supported) return h('section', { className: 'mh-library', 'data-testid': 'media-hub-library' }, h('h3', null, '我的音乐'), h('p', null, '个人音乐库尚未加载，请重载媒体插件'));
              const inPlaylists = library.kind !== 'liked';
              const actions = track => h('div', { className: 'mh-row-actions' }, h('button', { disabled: processing, onClick: () => { void inspect(track); } }, '详情'), h('button', { disabled: processing, onClick: () => { void add(track); } }, '加入队列'), h('button', { disabled: processing, onClick: () => { void play(track); } }, '播放'));
              return h('section', { className: 'mh-library', 'data-testid': 'media-hub-library', 'aria-busy': library.loading },
                h('h3', null, '我的音乐'),
                h('div', { className: 'mh-library-tabs', role: 'tablist', 'aria-label': '个人音乐库' },
                  h('button', { role: 'tab', 'aria-selected': !inPlaylists, onClick: () => { void load('liked'); } }, '我喜欢'),
                  h('button', { role: 'tab', 'aria-selected': inPlaylists, onClick: () => { void load('playlists'); } }, '我的歌单')),
                h('div', { className: 'mh-library-tabs' }, library.playlist ? h('button', { onClick: () => { void load('playlists'); } }, '返回歌单') : null,
                  h('button', { disabled: library.loading, onClick: () => { void load(library.kind, library.playlist); }, 'aria-label': '刷新音乐库' }, '刷新'),
                  library.playlist ? h('strong', null, library.playlist.title) : null),
                library.error ? h('p', { role: 'alert' }, library.error) : null,
                library.loading ? h('p', { role: 'status' }, '正在读取音乐库…') : null,
                h('div', { className: 'mh-library-list' }, library.items.map(item => h('div', { className: 'mh-row', key: item.songMid || (item.id ? 'id:' + item.id : 'dir:' + item.dirId) },
                  h('div', { className: 'mh-row-main' }, h('div', { className: 'mh-row-title' }, item.title), h('div', { className: 'mh-row-meta' }, library.kind === 'playlists' ? (item.trackCount === null ? '歌单' : item.trackCount + ' 首') : [item.artist, item.album].filter(Boolean).join(' · '))),
                  library.kind === 'playlists' ? h('button', { onClick: () => { void load('tracks', item); } }, '打开歌单') : actions(item)))),
                library.loaded && !library.items.length && !library.loading && !library.error ? h('p', null, library.kind === 'playlists' ? '此账号暂无个人歌单' : '此列表暂无可显示歌曲') : null,
                library.loaded ? h('div', { className: 'mh-library-footer' }, h('span', null, '已显示 ' + library.items.length + ' / ' + library.total),
                  library.nextOffset !== null ? h('button', { disabled: library.loading, onClick: () => { void load(library.kind, library.playlist, library.nextOffset); } }, '加载更多') : library.hasMore ? h('span', null, '上游列表尚未完整返回，请稍后刷新') : null) : null);
            }
            function MusicPanel() {
              const current = useStatus(); const playerState = usePlayer(); const [query, setQuery] = React.useState(''); const [results, setResults] = React.useState([]); const [selected, setSelected] = React.useState(null); const [lyrics, setLyrics] = React.useState(null); const [queue, setQueue] = React.useState([]); const [busy, setBusy] = React.useState(false); const [error, setError] = React.useState(null); const row = current.data?.providers.find(item => item.id === 'music');
              async function search() { if (!query.trim()) return; setBusy(true); setError(null); try { const value = await requestJson(`/media-hub/api/music?op=search&query=${encodeURIComponent(query.trim())}`); setResults(value.items || []); void refresh(); } catch (cause) { setError(cause.message || '搜索失败'); } finally { setBusy(false); } }
              async function inspect(track) { setBusy(true); setError(null); try { const [detail, lyric] = await Promise.all([requestJson(`/media-hub/api/music?op=details&songMid=${encodeURIComponent(track.songMid)}`), requestJson(`/media-hub/api/music?op=lyrics&songMid=${encodeURIComponent(track.songMid)}`)]); setSelected(detail.track); setLyrics(lyric); } catch (cause) { setError(cause.message || '曲目详情读取失败'); } finally { setBusy(false); } }
              async function play(track) { setBusy(true); setError(null); try { const lease = await requestJson('/media-hub/api/music?op=play', { method: 'POST', body: JSON.stringify({ songMid: track.songMid, clientId: 'browser' }) }); await player.load(lease); } catch (cause) { setError(cause.message || '播放失败'); } finally { setBusy(false); } }
              async function add(track) { setBusy(true); setError(null); try { const value = await requestJson('/media-hub/api/music?op=queue', { method: 'POST', body: JSON.stringify({ action: 'add', clientId: 'browser', track }) }); setQueue(value.items || []); } catch (cause) { setError(cause.message || '加入队列失败'); } finally { setBusy(false); } }
              async function loadQueue() { try { const value = await requestJson('/media-hub/api/music?op=queue&clientId=browser'); setQueue(value.items || []); } catch (cause) { setError(cause.message || '队列读取失败'); } }
              return h('section', { className: 'dsh-media-hub', 'data-media-hub-root': '', 'data-media-hub-panel': 'music', 'data-testid': 'media-hub-music-panel' }, h('div', { className: 'mh-content' }, h('header', null, h('h2', null, 'QQ 音乐'), h('button', { onClick: () => { void refresh(); void loadQueue(); }, disabled: current.loading }, current.loading ? '读取状态中' : '刷新状态')), current.error ? h('p', { role: 'alert' }, `状态读取失败：${current.error}`) : null, error ? h('p', { role: 'alert' }, error) : null, h('p', null, `业务状态：${row?.state === 'ready' ? '上游已验证' : row?.state === 'unavailable' ? 'provider 未配置' : row?.state === 'configured' ? '已配置，待业务验证' : row?.state || '未连接'} · 账号：${({ signed_out: '未登录', waiting: '等待扫码', scanned: '待手机确认', authenticated: '已登录' })[row?.accountState] || '未检查'}`), h(AccountBox), h(LibraryBox, { inspect, add, play, processing: busy }), h('div', { className: 'mh-search' }, h('input', { value: query, onChange: event => setQuery(event.target.value), onKeyDown: event => { if (event.key === 'Enter') void search(); }, maxLength: 60, placeholder: '搜索歌曲、歌手（最多 60 字）', 'aria-label': '搜索 QQ 音乐' }), h('button', { onClick: () => { void search(); }, disabled: busy || !query.trim() }, busy ? '处理中' : '搜索')), results.length ? h('div', { className: 'mh-results', 'data-testid': 'media-hub-search-results' }, results.map(track => h('div', { className: 'mh-row', key: track.songMid }, h('div', { className: 'mh-row-main' }, h('div', { className: 'mh-row-title' }, track.title), h('div', { className: 'mh-row-meta' }, [track.artist, track.album].filter(Boolean).join(' · '))), h('div', { className: 'mh-row-actions' }, h('button', { onClick: () => { void inspect(track); } }, '详情'), h('button', { onClick: () => { void add(track); } }, '加入队列'), h('button', { onClick: () => { void play(track); } }, '播放'))))) : h('p', null, '暂无搜索结果'), selected ? h('div', { 'data-testid': 'media-hub-track-detail' }, h('h3', null, selected.title), h('p', null, [selected.artist, selected.album].filter(Boolean).join(' · ') || '未知艺人'), lyrics ? h('pre', null, lyrics.hasLyric ? lyrics.lyric : '暂无歌词') : null) : null, h('h3', null, '播放队列'), h('div', { className: 'mh-queue', 'data-testid': 'media-hub-queue' }, queue.length ? queue.map(track => h('div', { className: 'mh-row', key: track.songMid }, h('div', { className: 'mh-row-main' }, h('div', { className: 'mh-row-title' }, track.title), h('div', { className: 'mh-row-meta' }, track.artist)), h('div', { className: 'mh-row-actions' }, h('button', { onClick: () => { void play(track); } }, '播放')))) : h('p', null, '队列为空')), playerState.current ? h(PlayerBar) : null, current.data ? h('p', { className: 'mh-stage', 'data-testid': 'media-hub-host-status' }, `宿主状态：${current.data.phase} · ${current.data.version}`) : null));
            }
            function NetdiskBrowser() {
              const current = useStatus(); const row = current.data?.providers.find(item => item.id === 'netdisk');
              const signedIn = row?.accountState === 'authenticated';
              const [login, setLogin] = React.useState({ busy: false, qr: null, error: null, retryAt: 0 });
              const [view, setView] = React.useState({ path: '/', query: '', items: [], page: 1, hasMore: false, loaded: false, busy: false, error: null });
              const [query, setQuery] = React.useState(''); const [quota, setQuota] = React.useState(null); const [clock, setClock] = React.useState(Date.now());
              const life = React.useRef({ epoch: 0, controller: null, timer: null, loginId: null, alive: true, retryAt: 0 });
              const listing = React.useRef({ epoch: 0, controller: null });
              function account(action, args = {}, signal) { return requestJson('/media-hub/api/netdisk?op=account', { method: 'POST', headers: { 'x-media-hub-ui': '1' }, body: JSON.stringify({ action, ...args }), signal, timeoutMs: action === 'qr.check' ? 100_000 : 38_000 }); }
              function cancelQr(notify = true) {
                const state = life.current; ++state.epoch; clearTimeout(state.timer); state.controller?.abort(); state.controller = null;
                const loginId = state.loginId; state.loginId = null;
                if (notify && loginId && !disposed) void account('qr.cancel', { loginId }).catch(() => {});
                if (state.alive) setLogin({ busy: false, qr: null, error: null, retryAt: state.retryAt });
              }
              function failLogin(error, epoch) {
                const state = life.current; if (!state.alive || epoch !== state.epoch || disposed) return;
                if (error.retryAfterMs) state.retryAt = Math.max(state.retryAt, Date.now() + error.retryAfterMs);
                cancelQr(); setLogin({ busy: false, qr: null, error: loginErrorText(error, '扫码登录失败，请重试'), retryAt: state.retryAt });
              }
              async function pollQr(qr, epoch, controller) {
                if (!life.current.alive || epoch !== life.current.epoch || disposed) return;
                if (Date.now() >= qr.expiresAt) { failLogin(new Error('二维码已过期，请重新获取'), epoch); return; }
                try {
                  const value = await account('qr.check', { loginId: qr.loginId }, controller.signal);
                  if (!life.current.alive || epoch !== life.current.epoch || disposed) return;
                  if (value.state === 'authenticated') { cancelQr(false); life.current.retryAt = 0; await refresh(); return; }
                  if (!['waiting', 'scanned'].includes(value.state)) throw new Error('扫码未完成，请重新获取二维码');
                  const next = { ...qr, ...value }; setLogin({ busy: false, qr: next, error: null, retryAt: life.current.retryAt });
                  life.current.timer = setTimeout(() => { void pollQr(next, epoch, controller); }, 1500);
                } catch (error) { failLogin(error, epoch); }
              }
              async function startQr() {
                if (login.busy || login.qr || Date.now() < life.current.retryAt) return;
                cancelQr(); const state = life.current; const epoch = ++state.epoch; const controller = new AbortController(); state.controller = controller;
                setLogin({ busy: true, qr: null, error: null, retryAt: state.retryAt });
                try {
                  const qr = await account('qr.create', {}, controller.signal);
                  if (!state.alive || epoch !== state.epoch || disposed) return;
                  if (qr.state === 'authenticated') { cancelQr(false); await refresh(); return; }
                  if (!qr.loginId || !Number.isSafeInteger(qr.expiresAt) || !/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(qr.qrDataUrl)) throw new Error('网盘二维码格式无效');
                  state.loginId = qr.loginId; state.retryAt = Date.now() + 10_000;
                  setLogin({ busy: false, qr, error: null, retryAt: state.retryAt });
                  state.timer = setTimeout(() => { void pollQr(qr, epoch, controller); }, 1500);
                } catch (error) { failLogin(error, epoch); }
              }
              async function load(path = '/', search = '', page = 1) {
                const state = listing.current; state.controller?.abort(); const controller = new AbortController(); state.controller = controller; const epoch = ++state.epoch;
                setView(previous => ({ ...previous, path, query: search, page, ...(page === 1 ? { items: [], loaded: false, hasMore: false } : {}), busy: true, error: null }));
                try {
                  const value = await requestJson('/media-hub/api/netdisk?' + new URLSearchParams({ op: 'files', path, query: search, page, limit: 100 }), { signal: controller.signal, timeoutMs: 25_000 });
                  if (!life.current.alive || epoch !== state.epoch || disposed) return;
                  if (!Array.isArray(value.items) || typeof value.hasMore !== 'boolean') throw new Error('文件列表格式无效');
                  setView(previous => {
                    const items = page === 1 ? value.items : [...previous.items, ...value.items];
                    return { path, query: search, page, items: [...new Map(items.map(item => [item.id, item])).values()], hasMore: value.hasMore, loaded: true, busy: false, error: null };
                  });
                } catch (error) {
                  if (!life.current.alive || epoch !== state.epoch || disposed) return;
                  setView(previous => ({ ...previous, busy: false, page: page > 1 ? page - 1 : page, error: error.message || '文件列表读取失败' }));
                  if (error.code === 'AUTH_REQUIRED') void refresh();
                }
              }
              async function signOut() {
                cancelQr(); ++listing.current.epoch; listing.current.controller?.abort(); setView({ path: '/', query: '', items: [], page: 1, hasMore: false, loaded: false, busy: false, error: null }); setQuota(null);
                setLogin({ busy: true, qr: null, error: null, retryAt: 0 });
                try { await account('logout'); if (life.current.alive) { setLogin({ busy: false, qr: null, error: null, retryAt: 0 }); await refresh(); } }
                catch (error) { if (life.current.alive) setLogin({ busy: false, qr: null, error: error.message, retryAt: 0 }); }
              }
              React.useEffect(() => { life.current.alive = true; return () => { life.current.alive = false; cancelQr(); ++listing.current.epoch; listing.current.controller?.abort(); }; }, []);
              React.useEffect(() => {
                if (signedIn) {
                  cancelQr(false); void load();
                  const controller = new AbortController();
                  void requestJson('/media-hub/api/netdisk?op=quota', { signal: controller.signal }).then(value => { if (life.current.alive && !controller.signal.aborted) setQuota(value); }).catch(() => {});
                  return () => controller.abort();
                }
                ++listing.current.epoch; listing.current.controller?.abort(); setQuota(null);
                setView({ path: '/', query: '', items: [], page: 1, hasMore: false, loaded: false, busy: false, error: null });
              }, [signedIn]);
              React.useEffect(() => { if (!login.qr && login.retryAt <= Date.now()) return; const timer = setInterval(() => setClock(Date.now()), 1000); return () => clearInterval(timer); }, [Boolean(login.qr), login.retryAt]);
              function bytes(value) { if (!Number.isFinite(value)) return ''; const units = ['B', 'KB', 'MB', 'GB', 'TB']; let index = 0; while (value >= 1024 && index < units.length - 1) { value /= 1024; index++; } return (index ? value.toFixed(1) : value) + ' ' + units[index]; }
              const cooldown = Math.max(0, Math.ceil((login.retryAt - clock) / 1000));
              return h('div', { 'data-testid': 'media-hub-netdisk-browser' },
                h('div', { className: 'mh-account' }, h('h3', null, '网盘账号'),
                  signedIn ? h('div', null, h('span', null, '已登录 · '), h('button', { onClick: () => { void signOut(); }, disabled: login.busy }, '退出网盘')) : h('button', { onClick: () => { void startQr(); }, disabled: login.busy || Boolean(login.qr) || cooldown > 0 || !['configured', 'ready'].includes(row?.state) }, login.busy ? '正在获取二维码' : cooldown ? cooldown + ' 秒后可重试' : '扫码登录百度网盘'),
                  login.qr || login.busy && !signedIn ? h('button', { onClick: () => cancelQr() }, '取消扫码') : null,
                  login.qr ? h('div', null, h('img', { src: login.qr.qrDataUrl, width: 220, height: 220, alt: '百度网盘登录二维码', referrerPolicy: 'no-referrer' }), h('p', { role: 'status' }, login.qr.state === 'scanned' ? '已扫码，请在手机确认登录' : '请使用百度网盘 App 扫码并确认登录')) : null,
                  login.error ? h('p', { role: 'alert' }, login.error) : null),
                signedIn ? h('div', null,
                  quota ? h('p', { className: 'mh-netdisk-quota' }, '已用 ' + bytes(quota.used) + ' / ' + bytes(quota.total) + ' · 可用 ' + bytes(quota.free)) : null,
                  h('nav', { className: 'mh-netdisk-toolbar', 'aria-label': '网盘目录导航' },
                    h('button', { disabled: view.busy || view.path === '/' && !view.query, onClick: () => { setQuery(''); void load(); } }, '根目录'),
                    h('button', { disabled: view.busy || view.path === '/', onClick: () => { setQuery(''); void load(view.path.slice(0, view.path.lastIndexOf('/')) || '/'); } }, '上一级'),
                    h('span', { className: 'mh-netdisk-path' }, view.path), h('button', { disabled: view.busy, onClick: () => { void load(view.path, view.query); } }, '刷新文件')),
                  h('form', { className: 'mh-search', onSubmit: event => { event.preventDefault(); void load(view.path, query.trim()); } }, h('input', { value: query, maxLength: 100, onChange: event => setQuery(event.target.value), placeholder: '在当前目录及子目录搜索', 'aria-label': '搜索网盘文件' }), h('button', { type: 'submit', disabled: view.busy }, '搜索文件')),
                  view.error ? h('p', { role: 'alert' }, view.error, ' ', h('button', { onClick: () => { void load(view.path, view.query, view.page); } }, '重试文件列表')) : null,
                  view.busy ? h('p', { role: 'status' }, '正在读取文件…') : null,
                  h('div', { className: 'mh-netdisk-files', 'data-testid': 'media-hub-netdisk-files' }, view.items.map(file => h('div', { className: 'mh-row', key: file.id },
                    h('div', { className: 'mh-row-main' }, h('div', { className: 'mh-row-title' }, file.name), h('div', { className: 'mh-row-meta' }, file.isDirectory ? '文件夹' : bytes(file.size), view.query ? ' · ' + file.path : '')),
                    file.isDirectory ? h('button', { disabled: view.busy, onClick: () => { setQuery(''); void load(file.path); } }, '打开文件夹') : h('a', { className: 'mh-download', href: '/media-hub/api/netdisk?op=download&id=' + encodeURIComponent(file.id), download: file.name, 'aria-label': '下载 ' + file.name }, '下载')))),
                  view.loaded && !view.busy && !view.error && !view.items.length ? h('p', null, view.query ? '未找到匹配文件' : '此文件夹为空') : null,
                  view.loaded ? h('div', { className: 'mh-library-footer' }, h('span', null, '已显示 ' + view.items.length + ' 项'), view.hasMore ? h('button', { disabled: view.busy, onClick: () => { void load(view.path, view.query, view.page + 1); } }, '加载更多文件') : null) : null) : h('p', null, ['configured', 'ready'].includes(row?.state) ? '登录后查看文件与容量' : '百度网盘后端尚未启用'));
            }
            function NetdiskPanel() { const current = useStatus(); return h('section', { className: 'dsh-media-hub', 'data-media-hub-root': '', 'data-media-hub-panel': 'netdisk', 'data-testid': 'media-hub-netdisk-panel' }, h('div', { className: 'mh-content' }, h('header', null, h('h2', null, '百度网盘'), h('button', { onClick: () => { void refresh(); }, disabled: current.loading }, current.loading ? '读取状态中' : '刷新状态')), current.error ? h('p', { role: 'alert' }, `状态读取失败：${current.error}`) : null, h(NetdiskBrowser), current.data ? h('p', { className: 'mh-stage', 'data-testid': 'media-hub-host-status' }, `宿主状态：${current.data.phase} · ${current.data.version}`) : null)); }
            const Panel = provider.id === 'music' ? MusicPanel : NetdiskPanel;
            const disposers = [];
            try { disposers.push(ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: provider.key }, () => h(PanelBoundary, { refresh, provider }, h(Panel))))); disposers.push(ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: provider.key, order: provider.order, label: provider.label }, Icon))); mounted.set(provider.id, disposers); } catch (error) { for (const dispose of disposers.reverse()) dispose(); throw error; }
          }
          async function refresh() {
            if (disposed) return; request?.abort(); const controller = new AbortController(); request = controller; const timer = setTimeout(() => controller.abort(), 7000); publish({ ...state, loading: true, error: null });
            try { const response = await fetch('/media-hub/api/status', { credentials: 'same-origin', headers: { accept: 'application/json' }, signal: controller.signal }); if (!response.ok) throw new Error(`HTTP ${response.status}`); const data = validateStatus(await response.json()); if (disposed || request !== controller) return; if (data.providers.find(item => item.id === 'music')?.accountState === 'authenticated') { loginRetryAt = 0; cancelLogin(); } publish({ loading: false, data, error: null }); for (const provider of providers) { if (data.providers.find(item => item.id === provider.id).enabled) mount(provider); else remove(provider); } }
            catch (error) { if (disposed || request !== controller) return; publish({ ...state, loading: false, error: controller.signal.aborted ? '请求超时，请重试' : String(error.message || error) }); }
            finally { clearTimeout(timer); if (request === controller) request = undefined; }
          }
          for (const provider of providers) mount(provider); void refresh();
          return () => { cancelLogin(); disposed = true; request?.abort(); for (const controller of activeRequests) controller.abort(); activeRequests.clear(); clearTimeout(loginTimer); loginListeners.clear(); player.dispose(); for (const provider of providers) remove(provider); listeners.clear(); style.remove(); };
        }, 'media-hub: independent panel lifecycle');
      },
    };
  },
});
