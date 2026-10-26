window.__ModuleLoader__.load({
  id: '@local/dsh-we-workshop',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const wallpaper = require('dsh-plugin-wallpaper-engine').settingsPanel;
    const startup = require('dsh-startup-animation').settingsPanel;
    if (!wallpaper?.Component || !startup?.Component) {
      throw new Error('Wallpaper Center: native settings panels are unavailable');
    }
    const tabs = [
      {id: 'wallpapers', label: '壁纸与外观', Component: wallpaper.Component},
      {id: 'workshop', label: 'WE 工坊', Component: WorkshopPanel},
      {id: 'startup', label: '启动动画', Component: startup.Component},
    ];
    const css = `
      .dsh-wallpaper-center { min-width:0; color:inherit; }
      .dwc-header { display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; margin:0 0 12px; }
      .dwc-title { font-size:16px; font-weight:600; margin:0; }
      .dwc-source { font-size:12px; opacity:.65; }
      .dwc-tabs { display:flex; gap:4px; border-bottom:1px solid color-mix(in srgb,currentColor 16%,transparent); margin-bottom:16px; }
      .dwc-tab { appearance:none; font:inherit; font-size:13px; cursor:pointer; color:inherit; background:transparent; border:0; border-bottom:2px solid transparent; padding:9px 12px; min-height:38px; white-space:nowrap; }
      .dwc-tab:hover { background:color-mix(in srgb,currentColor 6%,transparent); }
      .dwc-tab[aria-selected=true] { border-bottom-color:currentColor; font-weight:600; }
      .dwc-tab:focus-visible { outline:2px solid currentColor; outline-offset:-3px; }
      .dwc-status { font-size:12px; opacity:.7; padding:0 0 12px; }
      .dwc-content { min-width:0; }
      .dwc-workshop { display:block; width:100%; height:62vh; min-height:420px; border:0; border-radius:6px; background:#0b0d12; }
    `;

    function WorkshopPanel() {
      return h('iframe', {src:'/we-workshop', title:'Wallpaper Engine Workshop', className:'dwc-workshop'});
    }

    function WallpaperCenter() {
      const [active, setActive] = React.useState('wallpapers');
      const [weActive, setWeActive] = React.useState(() => document.body.hasAttribute('data-we-wallpaper'));
      React.useEffect(() => {
        const observer = new MutationObserver(() => setWeActive(document.body.hasAttribute('data-we-wallpaper')));
        observer.observe(document.body, {attributes:true, attributeFilter:['data-we-wallpaper']});
        return () => observer.disconnect();
      }, []);
      const selected = tabs.find(t => t.id === active) || tabs[0];
      function onKeys(event) {
        if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
        event.preventDefault();
        const index = tabs.findIndex(t => t.id === active);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        setActive(tabs[next].id);
        event.currentTarget.parentElement.querySelectorAll('[role=tab]')[next]?.focus();
      }
      return h('section', {className:'dsh-wallpaper-center'}, [
        h('header', {className:'dwc-header', key:'heading'}, [
          h('h2', {className:'dwc-title', key:'title'}, '壁纸中心'),
          h('span', {className:'dwc-source', key:'source'}, weActive ? '当前背景：Wallpaper Engine' : '当前背景：启动背景 / 默认'),
        ]),
        h('div', {className:'dwc-tabs', role:'tablist', 'aria-label':'壁纸中心', key:'tabs'}, tabs.map(tab =>
          h('button', {key:tab.id, id:'dwc-tab-'+tab.id, className:'dwc-tab', type:'button', role:'tab', 'aria-selected':active===tab.id, 'aria-controls':'dwc-panel', tabIndex:active===tab.id?0:-1, onClick:()=>setActive(tab.id), onKeyDown:onKeys}, tab.label)
        )),
        active === 'startup' && weActive ? h('div', {key:'status', className:'dwc-status', role:'status'}, '启动背景已让位给 WE，开机动画保留。') : null,
        h('div', {id:'dwc-panel', className:'dwc-content', key:'content', role:'tabpanel', 'aria-labelledby':'dwc-tab-'+active}, h(selected.Component, {key:active})),
      ]);
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.effect(() => {
          const style = document.createElement('style');
          style.dataset.plugin = 'dsh-wallpaper-center';
          style.textContent = css;
          document.head.appendChild(style);
          const releases = [wallpaper.claim(), startup.claim()];
          return () => { releases.reverse().forEach(release => release()); style.remove(); };
        });
        ctx.slots.inject('settings.section', () => ctx.slots.register({
          name:'settings.section', id:'wallpaper-center', order:36, label:'壁纸中心',
        }, WallpaperCenter));
      },
    };
  },
});
