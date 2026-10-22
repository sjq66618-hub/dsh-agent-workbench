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
      if (!value || value.schemaVersion !== 1 || value.phase !== 'P0' || value.operationsEnabled !== false || !Array.isArray(value.providers)) {
        throw new Error('宿主状态格式不匹配');
      }
      for (const provider of providers) {
        const row = value.providers.find(item => item.id === provider.id);
        if (!row || typeof row.enabled !== 'boolean' || row.accountState !== 'not_checked' || row.state !== (row.enabled ? 'not_connected' : 'disabled')) {
          throw new Error('宿主入口状态不完整');
        }
      }
      return value;
    }

    class PanelBoundary extends React.Component {
      constructor(props) { super(props); this.state = { error: null }; }
      static getDerivedStateFromError(error) { return { error }; }
      render() {
        if (!this.state.error) return this.props.children;
        return h('section', { 'data-media-hub-root': '', 'data-media-hub-panel': this.props.provider.id, role: 'alert', className: 'dsh-media-hub' },
          h('h2', null, '媒体面板暂时不可用'),
          h('p', null, '可继续使用主会话，或重试此面板。'),
          h('button', { onClick: () => { this.setState({ error: null }); this.props.refresh(); } }, '重试'));
      }
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
          const style = document.createElement('style');
          style.textContent = `
            .dsh-media-hub{box-sizing:border-box;height:100%;overflow:auto;padding:24px 28px;color:var(--dsw-alias-text-primary,inherit);font-size:14px;line-height:1.6}
            .dsh-media-hub .mh-content{max-width:880px;margin:0 auto}
            .dsh-media-hub header{display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-bottom:14px}
            .dsh-media-hub h2{font-size:20px;line-height:1.4;margin:0;font-weight:600}
            .dsh-media-hub p{margin:12px 0}
            .dsh-media-hub dl{display:grid;grid-template-columns:120px minmax(0,1fr);gap:12px 20px;margin:24px 0}
            .dsh-media-hub dt{opacity:.65}.dsh-media-hub dd{margin:0;overflow-wrap:anywhere}
            .dsh-media-hub button{font:inherit;color:inherit;background:var(--dsw-alias-bg-base,transparent);border:1px solid var(--dsw-alias-border-base,#a1a1aa);border-radius:6px;padding:6px 12px;cursor:pointer;white-space:nowrap}
            .dsh-media-hub button:disabled{opacity:.5;cursor:wait}.dsh-media-hub [role=alert]{color:#b91c1c}
            .dsh-media-hub .mh-stage{font-size:12px;opacity:.6;border-top:1px solid var(--dsw-alias-border-base,#d4d4d8);padding-top:14px}
            @media(max-width:560px){.dsh-media-hub{padding:18px 14px}.dsh-media-hub dl{grid-template-columns:90px minmax(0,1fr)}}
          `;
          document.head.appendChild(style);

          function publish(next) {
            state = next;
            for (const listener of listeners) listener(next);
          }

          function useStatus() {
            const [current, setCurrent] = React.useState(state);
            React.useEffect(() => {
              listeners.add(setCurrent);
              setCurrent(state);
              return () => listeners.delete(setCurrent);
            }, []);
            return current;
          }

          function remove(provider) {
            const disposers = mounted.get(provider.id);
            if (!disposers) return;
            if (document.querySelector(`[data-media-hub-panel="${provider.id}"]`)) ctx.layout.selectPanel(null);
            mounted.delete(provider.id);
            for (const dispose of disposers.slice().reverse()) dispose();
          }

          function mount(provider) {
            if (mounted.has(provider.id)) return;
            function Icon({ size = 16 }) {
              return h('span', { 'aria-hidden': true, style: { fontSize: size, lineHeight: 1 }, 'data-testid': `media-hub-${provider.id}-icon` }, provider.icon);
            }
            function Panel() {
              const current = useStatus();
              const row = current.data?.providers.find(item => item.id === provider.id);
              return h('section', { className: 'dsh-media-hub', 'data-media-hub-root': '', 'data-media-hub-panel': provider.id, 'data-testid': `media-hub-${provider.id}-panel` },
                h('div', { className: 'mh-content' },
                  h('header', null, h('h2', null, provider.label), h('button', { onClick: () => { void refresh(); }, disabled: current.loading }, current.loading ? '读取状态中' : '刷新状态')),
                  current.error ? h('p', { role: 'alert' }, `状态读取失败：${current.error}`) : null,
                  h('dl', null,
                    h('dt', null, '账号状态'), h('dd', null, '未检查'),
                    h('dt', null, '业务连接'), h('dd', null, '未连接'),
                    h('dt', null, '入口状态'), h('dd', null, row ? (row.enabled ? '已启用' : '已停用') : '等待宿主状态')),
                  h('p', null, provider.id === 'music' ? '账号接入、歌曲搜索与播放尚未启用。' : '账号接入、文件浏览与传输尚未启用。'),
                  current.data ? h('p', { className: 'mh-stage', 'data-testid': 'media-hub-host-status' }, `宿主状态：${current.data.phase} · ${current.data.version} · 业务操作未启用`) : null));
            }
            const disposers = [];
            try {
              disposers.push(ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: provider.key }, () => h(PanelBoundary, { refresh, provider }, h(Panel)))));
              disposers.push(ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: provider.key, order: provider.order, label: provider.label }, Icon)));
              mounted.set(provider.id, disposers);
            } catch (error) {
              for (const dispose of disposers.reverse()) dispose();
              throw error;
            }
          }

          async function refresh() {
            if (disposed) return;
            request?.abort();
            const controller = new AbortController();
            request = controller;
            const timer = setTimeout(() => controller.abort(), 7000);
            publish({ ...state, loading: true, error: null });
            try {
              const response = await fetch('/media-hub/api/status', { credentials: 'same-origin', headers: { accept: 'application/json' }, signal: controller.signal });
              if (!response.ok) throw new Error(`HTTP ${response.status}`);
              const data = validateStatus(await response.json());
              if (disposed || request !== controller) return;
              publish({ loading: false, data, error: null });
              for (const provider of providers) {
                if (data.providers.find(item => item.id === provider.id).enabled) mount(provider);
                else remove(provider);
              }
            } catch (error) {
              if (disposed || request !== controller) return;
              publish({ ...state, loading: false, error: controller.signal.aborted ? '请求超时，请重试' : String(error.message || error) });
            } finally {
              clearTimeout(timer);
              if (request === controller) request = undefined;
            }
          }

          for (const provider of providers) mount(provider);
          void refresh();
          return () => {
            disposed = true;
            request?.abort();
            for (const provider of providers) remove(provider);
            listeners.clear();
            style.remove();
          };
        }, 'media-hub: independent panel lifecycle');
      },
    };
  },
});
