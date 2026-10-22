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
      if (!value || value.schemaVersion !== 1 || value.phase !== 'P1' || typeof value.operationsEnabled !== 'boolean' || !Array.isArray(value.providers)) throw new Error('宿主状态格式不匹配');
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
          const style = document.createElement('style');
          style.textContent = `
            .dsh-media-hub{box-sizing:border-box;height:100%;overflow:auto;padding:24px 28px;color:var(--dsw-alias-text-primary,inherit);font-size:14px;line-height:1.6}
            .dsh-media-hub .mh-content{max-width:920px;margin:0 auto}.dsh-media-hub header{display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-bottom:14px}
            .dsh-media-hub h2{font-size:20px;line-height:1.4;margin:0;font-weight:600}.dsh-media-hub h3{font-size:15px;margin:20px 0 8px}.dsh-media-hub p{margin:12px 0}
            .dsh-media-hub button{font:inherit;color:inherit;background:var(--dsw-alias-bg-base,transparent);border:1px solid var(--dsw-alias-border-base,#a1a1aa);border-radius:6px;padding:6px 12px;cursor:pointer;white-space:nowrap}.dsh-media-hub button:disabled{opacity:.5;cursor:wait}.dsh-media-hub [role=alert]{color:#b91c1c}
            .dsh-media-hub .mh-stage{font-size:12px;opacity:.6;border-top:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-top:14px}.dsh-media-hub .mh-search{display:flex;gap:8px;margin:20px 0}.dsh-media-hub .mh-search input{flex:1;min-width:0;font:inherit;color:inherit;background:transparent;border:1px solid var(--dsw-alias-border-base,#a1a1aa);border-radius:6px;padding:7px 10px}
            .dsh-media-hub .mh-results,.dsh-media-hub .mh-queue{display:grid;gap:8px}.dsh-media-hub .mh-row{display:flex;align-items:center;justify-content:space-between;gap:12px;border:1px solid var(--dsw-alias-border-base,#d4d4d8);border-radius:6px;padding:10px 12px}.dsh-media-hub .mh-row-main{min-width:0}.dsh-media-hub .mh-row-title{font-weight:600;overflow-wrap:anywhere}.dsh-media-hub .mh-row-meta{font-size:12px;opacity:.7;overflow-wrap:anywhere}.dsh-media-hub .mh-row-actions{display:flex;gap:6px;flex:none}
            .dsh-media-hub .mh-player{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid var(--dsw-alias-border-base,#d4d4d8);margin-top:20px;padding-top:14px}.dsh-media-hub .mh-player-title{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsh-media-hub .mh-player-actions{display:flex;gap:6px;flex:none}.dsh-media-hub pre{white-space:pre-wrap;max-height:260px;overflow:auto;border:1px solid var(--dsw-alias-border-base,#d4d4d8);border-radius:6px;padding:12px;font:inherit}
            @media(max-width:560px){.dsh-media-hub{padding:18px 14px}.dsh-media-hub header{align-items:flex-start}.dsh-media-hub .mh-row{align-items:flex-start;flex-direction:column}.dsh-media-hub .mh-row-actions{width:100%}.dsh-media-hub .mh-row-actions button{flex:1}.dsh-media-hub .mh-player{align-items:flex-start;flex-direction:column}.dsh-media-hub .mh-player-actions{width:100%}.dsh-media-hub .mh-player-actions button{flex:1}}
          `;
          document.head.appendChild(style);

          function publish(next) { state = next; for (const listener of listeners) listener(next); }
          function useStatus() { const [current, setCurrent] = React.useState(state); React.useEffect(() => { listeners.add(setCurrent); setCurrent(state); return () => listeners.delete(setCurrent); }, []); return current; }
          function usePlayer() { const [current, setCurrent] = React.useState(player.snapshot()); React.useEffect(() => player.subscribe(setCurrent), []); return current; }
          async function requestJson(path, init = {}) {
            const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), 12_000);
            try { const response = await fetch(path, { credentials: 'same-origin', headers: { accept: 'application/json', ...(init.body ? { 'content-type': 'application/json' } : {}) }, ...init, signal: controller.signal }); const value = await response.json().catch(() => ({})); if (!response.ok) { const error = new Error(value.message || `HTTP ${response.status}`); error.code = value.error; throw error; } return value; }
            finally { clearTimeout(timer); }
          }
          function remove(provider) { const disposers = mounted.get(provider.id); if (!disposers) return; if (document.querySelector(`[data-media-hub-panel="${provider.id}"]`)) ctx.layout.selectPanel(null); mounted.delete(provider.id); if (provider.id === 'music') player.stop(); for (const dispose of disposers.slice().reverse()) dispose(); }
          function mount(provider) {
            if (mounted.has(provider.id)) return;
            function Icon({ size = 16 }) { return h('span', { 'aria-hidden': true, style: { fontSize: size, lineHeight: 1 }, 'data-testid': `media-hub-${provider.id}-icon` }, provider.icon); }
            function PlayerBar() { const current = usePlayer(); if (!current.current) return null; return h('div', { className: 'mh-player', 'data-testid': 'media-hub-player' }, h('div', { className: 'mh-player-title' }, `${current.current.title}${current.current.artist ? ` · ${current.current.artist}` : ''}`), h('div', { className: 'mh-player-actions' }, h('button', { onClick: () => { void player.toggle(); }, 'aria-label': current.playing ? '暂停' : '播放' }, current.playing ? '暂停' : '播放'), h('button', { onClick: () => player.stop(), 'aria-label': '停止' }, '停止')), current.error ? h('p', { role: 'alert' }, current.error) : null); }
            function MusicPanel() {
              const current = useStatus(); const playerState = usePlayer(); const [query, setQuery] = React.useState(''); const [results, setResults] = React.useState([]); const [selected, setSelected] = React.useState(null); const [lyrics, setLyrics] = React.useState(null); const [queue, setQueue] = React.useState([]); const [busy, setBusy] = React.useState(false); const [error, setError] = React.useState(null); const row = current.data?.providers.find(item => item.id === 'music');
              async function search() { if (!query.trim()) return; setBusy(true); setError(null); try { const value = await requestJson(`/media-hub/api/music?op=search&query=${encodeURIComponent(query.trim())}`); setResults(value.items || []); } catch (cause) { setError(cause.message || '搜索失败'); } finally { setBusy(false); } }
              async function inspect(track) { setBusy(true); setError(null); try { const [detail, lyric] = await Promise.all([requestJson(`/media-hub/api/music?op=details&songMid=${encodeURIComponent(track.songMid)}`), requestJson(`/media-hub/api/music?op=lyrics&songMid=${encodeURIComponent(track.songMid)}`)]); setSelected(detail.track); setLyrics(lyric); } catch (cause) { setError(cause.message || '曲目详情读取失败'); } finally { setBusy(false); } }
              async function play(track) { setBusy(true); setError(null); try { const lease = await requestJson('/media-hub/api/music?op=play', { method: 'POST', body: JSON.stringify({ songMid: track.songMid, clientId: 'browser' }) }); await player.load(lease); } catch (cause) { setError(cause.message || '播放失败'); } finally { setBusy(false); } }
              async function add(track) { setBusy(true); setError(null); try { const value = await requestJson('/media-hub/api/music?op=queue', { method: 'POST', body: JSON.stringify({ action: 'add', clientId: 'browser', track }) }); setQueue(value.items || []); } catch (cause) { setError(cause.message || '加入队列失败'); } finally { setBusy(false); } }
              async function loadQueue() { try { const value = await requestJson('/media-hub/api/music?op=queue&clientId=browser'); setQueue(value.items || []); } catch (cause) { setError(cause.message || '队列读取失败'); } }
              return h('section', { className: 'dsh-media-hub', 'data-media-hub-root': '', 'data-media-hub-panel': 'music', 'data-testid': 'media-hub-music-panel' }, h('div', { className: 'mh-content' }, h('header', null, h('h2', null, 'QQ 音乐'), h('button', { onClick: () => { void refresh(); void loadQueue(); }, disabled: current.loading }, current.loading ? '读取状态中' : '刷新状态')), current.error ? h('p', { role: 'alert' }, `状态读取失败：${current.error}`) : null, error ? h('p', { role: 'alert' }, error) : null, h('p', null, `业务状态：${row?.state === 'ready' ? '已连接' : row?.state === 'unavailable' ? 'provider 未配置' : row?.state || '未连接'} · 账号：${row?.accountState || '未检查'}`), h('div', { className: 'mh-search' }, h('input', { value: query, onChange: event => setQuery(event.target.value), onKeyDown: event => { if (event.key === 'Enter') void search(); }, placeholder: '搜索歌曲、歌手或专辑', 'aria-label': '搜索 QQ 音乐' }), h('button', { onClick: () => { void search(); }, disabled: busy || !query.trim() }, busy ? '处理中' : '搜索')), results.length ? h('div', { className: 'mh-results', 'data-testid': 'media-hub-search-results' }, results.map(track => h('div', { className: 'mh-row', key: track.songMid }, h('div', { className: 'mh-row-main' }, h('div', { className: 'mh-row-title' }, track.title), h('div', { className: 'mh-row-meta' }, [track.artist, track.album].filter(Boolean).join(' · '))), h('div', { className: 'mh-row-actions' }, h('button', { onClick: () => { void inspect(track); } }, '详情'), h('button', { onClick: () => { void add(track); } }, '加入队列'), h('button', { onClick: () => { void play(track); } }, '播放'))))) : h('p', null, '暂无搜索结果'), selected ? h('div', { 'data-testid': 'media-hub-track-detail' }, h('h3', null, selected.title), h('p', null, [selected.artist, selected.album].filter(Boolean).join(' · ') || '未知艺人'), lyrics ? h('pre', null, lyrics.hasLyric ? lyrics.lyric : '暂无歌词') : null) : null, h('h3', null, '播放队列'), h('div', { className: 'mh-queue', 'data-testid': 'media-hub-queue' }, queue.length ? queue.map(track => h('div', { className: 'mh-row', key: track.songMid }, h('div', { className: 'mh-row-main' }, h('div', { className: 'mh-row-title' }, track.title), h('div', { className: 'mh-row-meta' }, track.artist)), h('div', { className: 'mh-row-actions' }, h('button', { onClick: () => { void play(track); } }, '播放')))) : h('p', null, '队列为空')), playerState.current ? h(PlayerBar) : null, current.data ? h('p', { className: 'mh-stage', 'data-testid': 'media-hub-host-status' }, `宿主状态：${current.data.phase} · ${current.data.version}`) : null));
            }
            function NetdiskPanel() { const current = useStatus(); const row = current.data?.providers.find(item => item.id === 'netdisk'); return h('section', { className: 'dsh-media-hub', 'data-media-hub-root': '', 'data-media-hub-panel': 'netdisk', 'data-testid': 'media-hub-netdisk-panel' }, h('div', { className: 'mh-content' }, h('header', null, h('h2', null, '百度网盘'), h('button', { onClick: () => { void refresh(); }, disabled: current.loading }, current.loading ? '读取状态中' : '刷新状态')), current.error ? h('p', { role: 'alert' }, `状态读取失败：${current.error}`) : null, h('p', null, `账号状态：未检查 · 业务连接：${row?.state === 'disabled' ? '已停用' : '未连接'}`), h('p', null, '文件浏览与传输尚未启用。'), current.data ? h('p', { className: 'mh-stage', 'data-testid': 'media-hub-host-status' }, `宿主状态：${current.data.phase} · ${current.data.version}`) : null)); }
            const Panel = provider.id === 'music' ? MusicPanel : NetdiskPanel;
            const disposers = [];
            try { disposers.push(ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: provider.key }, () => h(PanelBoundary, { refresh, provider }, h(Panel))))); disposers.push(ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: provider.key, order: provider.order, label: provider.label }, Icon))); mounted.set(provider.id, disposers); } catch (error) { for (const dispose of disposers.reverse()) dispose(); throw error; }
          }
          async function refresh() {
            if (disposed) return; request?.abort(); const controller = new AbortController(); request = controller; const timer = setTimeout(() => controller.abort(), 7000); publish({ ...state, loading: true, error: null });
            try { const response = await fetch('/media-hub/api/status', { credentials: 'same-origin', headers: { accept: 'application/json' }, signal: controller.signal }); if (!response.ok) throw new Error(`HTTP ${response.status}`); const data = validateStatus(await response.json()); if (disposed || request !== controller) return; publish({ loading: false, data, error: null }); for (const provider of providers) { if (data.providers.find(item => item.id === provider.id).enabled) mount(provider); else remove(provider); } }
            catch (error) { if (disposed || request !== controller) return; publish({ ...state, loading: false, error: controller.signal.aborted ? '请求超时，请重试' : String(error.message || error) }); }
            finally { clearTimeout(timer); if (request === controller) request = undefined; }
          }
          for (const provider of providers) mount(provider); void refresh();
          return () => { disposed = true; request?.abort(); player.dispose(); for (const provider of providers) remove(provider); listeners.clear(); style.remove(); };
        }, 'media-hub: independent panel lifecycle');
      },
    };
  },
});
