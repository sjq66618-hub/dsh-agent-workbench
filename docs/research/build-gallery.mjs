// 生成自包含的画廊页 docs/gallery.html
// 用法：node build-gallery.mjs [--in previews.json] [--out ../gallery.html]
//
// 单文件、零依赖、双击即开：数据内联，图片走远程 URL（不占仓库体积）。
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const IN = process.argv.includes('--in')
  ? process.argv[process.argv.indexOf('--in') + 1]
  : join(HERE, 'previews.json');
const OUT = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : join(HERE, '..', 'gallery.html');

const data = JSON.parse(readFileSync(IN, 'utf8'));

const CATS = [
  ['skin', '皮肤 / 换肤'],
  ['theme', '主题 / 配色'],
  ['pet', '桌面宠物'],
  ['wallpaper', '壁纸 / 背景'],
  ['icon', '图标 / 光标'],
  ['boot', '启动动画'],
  ['font', '字体'],
  ['animation', '动效 / 粒子'],
];

// 数组格式压缩体积：[name, repo, install, heat, license, desc, cat, image, imageType]
const rows = data.entries.map((e) => [
  e.name, e.repo, e.install, e.heat, e.license, e.desc, e.category, e.image, e.imageType,
]);

const payload = JSON.stringify(rows).replace(/</g, '\\u003c');

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>DSH 装饰画廊 · ${data.total} 个皮肤 / 宠物 / 主题</title>
<style>
  :root {
    --bg: #ffffff; --fg: #1a1a1a; --muted: #6b7280; --card: #ffffff;
    --line: #e5e7eb; --accent: #2563eb; --chip: #f3f4f6; --chip-on: #2563eb;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0f1115; --fg: #e8eaed; --muted: #9aa0a6; --card: #171a21;
      --line: #262b36; --accent: #60a5fa; --chip: #1f242e; --chip-on: #2563eb;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--fg);
    font: 14px/1.6 -apple-system, "Segoe UI", "Microsoft YaHei", system-ui, sans-serif;
  }
  header {
    position: sticky; top: 0; z-index: 10; backdrop-filter: blur(12px);
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    border-bottom: 1px solid var(--line); padding: 14px 20px 10px;
  }
  h1 { margin: 0 0 2px; font-size: 17px; font-weight: 650; letter-spacing: .2px; }
  .sub { color: var(--muted); font-size: 12px; margin-bottom: 10px; }
  .bar { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  input[type=search] {
    flex: 1 1 240px; min-width: 180px; padding: 7px 11px; font-size: 13px;
    border: 1px solid var(--line); border-radius: 8px;
    background: var(--card); color: var(--fg); outline: none;
  }
  input[type=search]:focus { border-color: var(--accent); }
  .chip {
    padding: 5px 11px; border-radius: 999px; border: 1px solid var(--line);
    background: var(--chip); color: var(--fg); font-size: 12.5px; cursor: pointer;
    user-select: none; white-space: nowrap; transition: .12s;
  }
  .chip:hover { border-color: var(--accent); }
  .chip.on { background: var(--chip-on); border-color: var(--chip-on); color: #fff; }
  .count { color: var(--muted); font-size: 12px; margin-left: auto; white-space: nowrap; }
  main { padding: 18px 20px 60px; }
  .grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fill, minmax(252px, 1fr)); }
  .card {
    background: var(--card); border: 1px solid var(--line); border-radius: 12px;
    overflow: hidden; display: flex; flex-direction: column; transition: .15s;
  }
  .card:hover { border-color: var(--accent); transform: translateY(-2px); }
  .thumb {
    height: 150px; background: var(--chip); display: block; position: relative; overflow: hidden;
  }
  .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .thumb.og img { object-fit: contain; padding: 8px; opacity: .82; }
  .thumb .badge {
    position: absolute; right: 6px; bottom: 6px; font-size: 10.5px; padding: 1px 6px;
    border-radius: 5px; background: rgba(0,0,0,.6); color: #fff; letter-spacing: .3px;
  }
  .body { padding: 9px 11px 11px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
  .title { font-weight: 600; font-size: 13.5px; line-height: 1.35; word-break: break-all; }
  .title a { color: inherit; text-decoration: none; }
  .title a:hover { color: var(--accent); }
  .desc {
    color: var(--muted); font-size: 12px; line-height: 1.5;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .meta { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; margin-top: auto; }
  .tag {
    font-size: 10.5px; padding: 1px 7px; border-radius: 5px;
    background: var(--chip); color: var(--muted); border: 1px solid var(--line);
  }
  .heat { font-size: 11px; color: var(--accent); font-variant-numeric: tabular-nums; }
  .inst {
    display: flex; align-items: center; gap: 6px; background: var(--chip);
    border-radius: 7px; padding: 4px 7px; font-family: ui-monospace, Consolas, monospace;
    font-size: 11px; overflow: hidden;
  }
  .inst code { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .inst button {
    border: 1px solid var(--line); background: var(--card); color: var(--muted);
    border-radius: 5px; font-size: 10.5px; padding: 1px 6px; cursor: pointer; flex: none;
  }
  .inst button:hover { color: var(--accent); border-color: var(--accent); }
  footer { color: var(--muted); font-size: 11.5px; text-align: center; padding: 0 20px 40px; }
  .empty { color: var(--muted); text-align: center; padding: 60px 0; }
</style>
</head>
<body>
<header>
  <h1>DSH 装饰画廊</h1>
  <div class="sub">皮肤 · 主题 · 桌面宠物 · 壁纸 · 启动动画 · 字体图标 —— 共 ${data.total} 个，点卡片进仓库</div>
  <div class="bar">
    <input id="q" type="search" placeholder="搜索名称、仓库或描述…" autocomplete="off">
    <button class="chip on" data-cat="all">全部</button>
    ${CATS.map(([k, l]) => `<button class="chip" data-cat="${k}">${l}</button>`).join('\n    ')}
    <span class="count" id="count"></span>
  </div>
</header>
<main>
  <div class="grid" id="grid"></div>
  <div class="empty" id="empty" hidden>没有匹配的条目</div>
</main>
<footer>
  图片来自各仓库 README；没有配图的显示 GitHub 自动生成的仓库卡片。<br>
  数据与完整清单见 <a href="decorations.md">decorations.md</a>。
</footer>
<script>
const ROWS = ${payload};
const CAT_LABEL = ${JSON.stringify(Object.fromEntries(CATS))};
const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const countEl = document.getElementById('count');
const qEl = document.getElementById('q');
let cat = 'all';

function heatScore(r) {
  const h = r[3] || '';
  const m = h.match(/([\\d.]+)\\s*([kK万])?/);
  if (!m) return 0;
  let n = parseFloat(m[1]);
  if (m[2] === 'k' || m[2] === 'K') n *= 1000;
  if (m[2] === '万') n *= 10000;
  return n;
}

function render() {
  const kw = qEl.value.trim().toLowerCase();
  const list = ROWS.filter((r) => {
    if (cat !== 'all' && r[6] !== cat) return false;
    if (!kw) return true;
    return (r[0] + ' ' + r[1] + ' ' + r[5]).toLowerCase().includes(kw);
  });
  countEl.textContent = list.length + ' / ' + ROWS.length;
  empty.hidden = list.length > 0;
  const frag = document.createDocumentFragment();
  for (const r of list) {
    const [name, repo, install, heat, license, desc, category, image, type] = r;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
      '<a class="thumb ' + (type === 'og' ? 'og' : '') + '" href="https://github.com/' + repo + '" target="_blank" rel="noopener">' +
        '<img loading="lazy" referrerpolicy="no-referrer" src="' + image + '" alt="">' +
        (type === 'og' ? '<span class="badge">无配图</span>' : '') +
      '</a>' +
      '<div class="body">' +
        '<div class="title"><a href="https://github.com/' + repo + '" target="_blank" rel="noopener">' + esc(name) + '</a></div>' +
        '<div class="desc">' + esc(desc) + '</div>' +
        '<div class="meta">' +
          '<span class="tag">' + esc(CAT_LABEL[category] || category) + '</span>' +
          (heat && heat !== '—' ? '<span class="heat">' + esc(heat) + '</span>' : '') +
          (license && license !== '—' ? '<span class="tag">' + esc(license) + '</span>' : '') +
        '</div>' +
        '<div class="inst"><code>' + esc(install) + '</code><button data-cmd="' + esc(install) + '">复制</button></div>' +
      '</div>';
    frag.appendChild(card);
  }
  grid.replaceChildren(frag);
}

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

grid.addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-cmd]');
  if (!btn) return;
  try {
    await navigator.clipboard.writeText('dsh plugin add ' + btn.dataset.cmd);
    btn.textContent = '已复制';
    setTimeout(() => { btn.textContent = '复制'; }, 1200);
  } catch { btn.textContent = '复制失败'; }
});

document.querySelectorAll('.chip').forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((x) => x.classList.remove('on'));
    el.classList.add('on');
    cat = el.dataset.cat;
    render();
  });
});

let t = 0;
qEl.addEventListener('input', () => { clearTimeout(t); t = setTimeout(render, 120); });

// 图片加载失败 -> 退回 GitHub 卡片图
grid.addEventListener('error', (e) => {
  const img = e.target;
  if (img.tagName !== 'IMG' || img.dataset.fallback) return;
  img.dataset.fallback = '1';
  const m = img.src.match(/raw\\.githubusercontent\\.com\\/([^/]+)\\/([^/]+)\\//);
  if (m) img.src = 'https://opengraph.githubassets.com/1/' + m[1] + '/' + m[2];
  else img.closest('.thumb')?.classList.add('og');
}, true);

render();
</script>
</body>
</html>
`;

writeFileSync(OUT, html, 'utf8');
console.log(`wrote ${OUT}: ${(html.length / 1024).toFixed(1)} KB, ${data.total} entries`);

// ---------- 同时生成 markdown 精选版（GitHub 上能直接看） ----------
const MD = join(HERE, '..', 'gallery.md');
const PER_CAT = 12;

function heatOf(h) {
  const m = String(h || '').match(/([\d.]+)\s*([kK万])?/);
  if (!m) return 0;
  let n = parseFloat(m[1]);
  if (m[2] === 'k' || m[2] === 'K') n *= 1000;
  if (m[2] === '万') n *= 10000;
  return n;
}

const withImg = data.entries.filter((e) => e.imageType === 'readme');

const md = [];
md.push('# DSH 装饰画廊 · 带预览图');
md.push('');
md.push(`> 从 ${data.total} 个装饰插件里挑出有真实截图的一批，每类 ${PER_CAT} 个。`);
md.push(`> 完整版（${data.total} 个，可搜索、可筛选）见 [gallery.html](gallery.html)，或直接开在线版：<https://sjq66618-hub.github.io/dsh-agent-workbench/gallery.html>`);
md.push('');
md.push(`图片直链自各仓库 README。共 ${withImg.length} 个插件提供了截图。`);
md.push('');
md.push(`> 画廊只覆盖有 GitHub 仓库的 ${data.total} 个。[decorations.md](decorations.md) 里另有约 90 个只发布在 npm 上、没有仓库可抓图，只能看文字说明。`);
md.push('');

for (const [key, label] of CATS) {
  const list = withImg
    .filter((e) => e.category === key)
    .sort((a, b) => heatOf(b.heat) - heatOf(a.heat))
    .slice(0, PER_CAT);
  if (!list.length) continue;
  md.push(`## ${label}`);
  md.push('');
  md.push('| 预览 | 名称 | 安装 | 热度 |');
  md.push('|---|---|---|---|');
  for (const e of list) {
    const nameCell = `[${e.name.replace(/\|/g, '\\|')}](https://github.com/${e.repo})`;
    const img = `<img src="${e.image}" width="220" alt="${e.name.replace(/"/g, '')}">`;
    const heat = e.heat && e.heat !== '—' ? e.heat : '—';
    md.push(`| ${img} | ${nameCell} | \`${e.install}\` | ${heat} |`);
  }
  md.push('');
}

md.push('---');
md.push('');
md.push('## 说明');
md.push('');
md.push(`- 只收录能从 README 里提到图片的 ${withImg.length} 个；其余 ${data.total - withImg.length} 个没有配图，在 [gallery.html](gallery.html) 里显示 GitHub 自动生成的仓库卡片。`);
md.push('- 缩略图为原图直链，不占本仓库体积；图片失效时点名称进仓库看。');
md.push('- 分类与热度口径同 [decorations.md](decorations.md)。');
md.push('');

writeFileSync(MD, md.join('\n'), 'utf8');
console.log(`wrote ${MD}: ${(md.join('\n').length / 1024).toFixed(1)} KB, ${withImg.length} with screenshots`);
