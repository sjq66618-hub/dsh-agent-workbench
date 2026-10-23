// 合并 npm 数据与 awesome-dsh 列表，生成装饰插件目录
// 用法：node build-catalog.mjs [--out ../decorations.md]
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const outPath = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : join(HERE, '..', 'decorations.md');

const awesome = JSON.parse(readFileSync(join(HERE, 'awesome-parsed.json'), 'utf8'));
const npm = JSON.parse(readFileSync(join(HERE, 'decorations-raw.json'), 'utf8'));
let catalog = null;
try { catalog = JSON.parse(readFileSync(join(HERE, 'catalog-decor.json'), 'utf8')); } catch { /* 可选 */ }
let github = null;
try { github = JSON.parse(readFileSync(join(HERE, 'github-decor.json'), 'utf8')); } catch { /* 可选 */ }

const NAME_RULES = [
  ['pet', /(?<![a-z])(pets?|mascot|live2d|chibi|buddy|companion)(?![a-z])|desk-?pet|桌宠|宠物|吉祥物/i],
  ['boot', /(boot|startup|splash|opening|entry-?transition|开场|启动)/i],
  ['wallpaper', /(wallpaper|backdrop|background|壁纸|背景)/i],
  ['font', /(font|typeface|typography|字体)/i],
  ['icon', /(icon|cursor|emoji|avatar|sticker|badge|logo|brand|图标|光标|头像|贴纸)/i],
  ['skin', /(skins?|换肤|皮肤)/i],
  ['theme', /(themes?|palette|color|colour|style|主题|配色)/i],
  ['animation', /(animation|animated|particle|effect|动效|动画|特效)/i],
];
const ORDER = ['skin', 'theme', 'wallpaper', 'pet', 'boot', 'font', 'icon', 'animation'];
const LABEL = {
  skin: '皮肤 / 换肤包',
  theme: '主题 / 配色',
  wallpaper: '壁纸 / 背景',
  pet: '桌面宠物 / 吉祥物',
  boot: '启动动画 / 开场',
  font: '字体',
  icon: '图标 / 光标 / 头像',
  animation: '动效 / 粒子',
};

function classifyName(s) {
  for (const [tag, re] of NAME_RULES) if (re.test(s)) return tag;
  return null;
}

function repoKey(url) {
  if (!url) return null;
  let s = String(url).trim().replace(/^git\+/, '').replace(/\.git$/, '').replace(/\/+$/, '');
  const m = s.match(/github\.com[/:]([^/]+)\/([^/#?]+)/i);
  if (m) return `${m[1]}/${m[2]}`.toLowerCase();
  const g = s.match(/^github:([^/]+)\/(.+)$/i);
  if (g) return `${g[1]}/${g[2]}`.toLowerCase();
  return null;
}

// --- npm 索引：repoKey -> best package（下载量最高者胜） ---
const npmByRepo = new Map();
const npmAll = [];
const SKIP_PKG = /^@deepseek-ai\//; // 官方内核包不是装饰插件
for (const p of npm.packages) {
  if (SKIP_PKG.test(p.name)) continue;
  const key = repoKey(p.repository) || repoKey(p.homepage);
  const entry = {
    name: p.name,
    version: p.version,
    license: p.license || '',
    desc: p.desc || '',
    downloads: p.downloads,
    published: p.published || '',
    repo: key,
    deprecated: !!p.deprecated,
  };
  npmAll.push(entry);
  if (!key) continue;
  const prev = npmByRepo.get(key);
  if (!prev || (entry.downloads ?? -1) > (prev.downloads ?? -1)) npmByRepo.set(key, entry);
}

// --- 以 awesome 条目为骨架 ---
const rows = [];
const usedNpm = new Set();
for (const it of awesome.items) {
  const key = repoKey(it.url);
  const pkg = key ? npmByRepo.get(key) : null;
  if (pkg) usedNpm.add(pkg.name);
  const primary = it.tags[0] || 'theme';
  rows.push({
    title: it.name.split('#')[0],
    repo: it.url,
    repoKey: key,
    desc: it.desc,
    section: it.section,
    primary,
    tags: it.tags,
    pkg: pkg || null,
  });
}

// --- npm 里没有对应 GitHub 条目的装饰包，补进来 ---
// 只按包名判定：描述里的 "background" 之类容易把通知、工具类插件误收进来。
const NOT_DECOR = /pdf|docx|xlsx|pptx|ocr|scanner?|convert|crawler|scraper|sync|notify|tool-?plus|cursor-(acp|cli|bridge|agent)|principles/i;
const PLACEHOLDER_DESC = /name reserved|in development|placeholder|coming soon/i;
for (const p of npmAll) {
  if (usedNpm.has(p.name)) continue;
  if (p.deprecated) continue;
  if (NOT_DECOR.test(p.name)) continue;
  if (PLACEHOLDER_DESC.test(p.desc)) continue;
  const primary = classifyName(p.name);
  if (!primary) continue;
  rows.push({
    title: p.name,
    repo: p.repo ? `https://github.com/${p.repo}` : '',
    repoKey: p.repo,
    desc: p.desc,
    section: 'npm',
    primary,
    tags: [primary],
    pkg: p,
  });
}

// --- 去重：同 repo 只留信息最全的一条 ---
const byRepo = new Map();
const noRepo = [];
for (const r of rows) {
  if (!r.repoKey) { noRepo.push(r); continue; }
  const prev = byRepo.get(r.repoKey);
  const score = (x) => (x.pkg ? 2 : 0) + (x.desc ? 1 : 0) + (x.section === 'npm' ? -1 : 0);
  if (!prev || score(r) > score(prev)) byRepo.set(r.repoKey, r);
}
const finalRows = [...byRepo.values(), ...noRepo];

// --- 官方索引补充：catalog 里有、前面两路没收到的条目 ---
if (catalog?.rows?.length) {
  const seenRepos = new Set(finalRows.map((r) => r.repoKey).filter(Boolean));
  const seenPkgs = new Set(finalRows.map((r) => r.pkg?.name).filter(Boolean));
  const seenNames = new Set(finalRows.map((r) => r.title.toLowerCase()));
  let added = 0;
  for (const c of catalog.rows) {
    const key = repoKey(c.repo);
    if (key && seenRepos.has(key.toLowerCase())) continue;
    if (c.name && seenPkgs.has(c.name)) continue;
    if (seenNames.has(c.title.toLowerCase())) continue;
    const pkgMatch = npmAll.find((p) => p.name === c.name) || null;
    finalRows.push({
      title: c.title,
      repo: c.repo || (key ? `https://github.com/${key}` : ''),
      repoKey: key,
      desc: c.descZh || c.descEn || '',
      section: 'catalog',
      primary: c.primary || 'theme',
      tags: [c.primary || 'theme'],
      pkg: pkgMatch,
    });
    if (key) seenRepos.add(key.toLowerCase());
    if (c.name) seenPkgs.add(c.name);
    seenNames.add(c.title.toLowerCase());
    added++;
  }
  console.log(`[catalog] added ${added} entries not covered by npm/awesome`);
}

// --- GitHub 搜索补充：只在 GitHub 上、前几路都没收录的 ---
if (github?.rows?.length) {
  const seenRepos = new Set(finalRows.map((r) => r.repoKey).filter(Boolean));
  const seenPkgs = new Set(finalRows.map((r) => r.pkg?.name).filter(Boolean));
  let added = 0;
  for (const g of github.rows) {
    const key = repoKey(g.repo);
    if (!key || seenRepos.has(key.toLowerCase())) continue;
    const pkgMatch = npmAll.find((p) => p.repo === key.toLowerCase()) || null;
    if (pkgMatch && seenPkgs.has(pkgMatch.name)) continue;
    finalRows.push({
      title: g.title,
      repo: g.repo,
      repoKey: key,
      desc: g.desc || '',
      section: 'github',
      primary: g.primary || 'theme',
      tags: [g.primary || 'theme'],
      pkg: pkgMatch,
      stars: g.stars ?? 0,
    });
    seenRepos.add(key.toLowerCase());
    if (pkgMatch) seenPkgs.add(pkgMatch.name);
    added++;
  }
  console.log(`[github] added ${added} repos not covered by npm/awesome/catalog`);
}

// --- 全局排除：客户端外壳、SDK 这类会被误当成「皮肤」的仓库 ---
const GLOBAL_EXCLUDE = /deepseek-harness-desktop|harness-desktop|dsh-desktop-client|(^|\/)dsh-sdk|pojia|prompt-?swap|persona-?swap/i;
const kept = finalRows.filter((r) => !GLOBAL_EXCLUDE.test(`${r.title} ${r.repo}`));

// --- 按类别分组，组内按下载量降序、无下载量的按星标再按名称 ---
const groups = Object.fromEntries(ORDER.map((t) => [t, []]));
for (const r of kept) (groups[r.primary] ||= []).push(r);
for (const t of ORDER) {
  groups[t].sort((a, b) => {
    const da = a.pkg?.downloads ?? -1;
    const db = b.pkg?.downloads ?? -1;
    if (da !== db) return db - da;
    const sa = a.stars ?? a.pkg?.stars ?? 0;
    const sb = b.stars ?? b.pkg?.stars ?? 0;
    if (sb !== sa) return sb - sa;
    return a.title.localeCompare(b.title);
  });
}

function esc(s) {
  return String(s || '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
}
function shortDesc(s, n = 120) {
  const t = esc(s);
  if (t.length <= n) return t;
  const cut = t.slice(0, n);
  const sp = cut.lastIndexOf(' ');
  const base = sp > n * 0.55 ? cut.slice(0, sp) : cut;
  return base.replace(/[,.;:，。；：\s]+$/, '') + '…';
}
function wd(n) {
  if (n == null) return '—';
  if (n >= 10000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

const total = ORDER.reduce((s, t) => s + groups[t].length, 0);
const out = [];
out.push('# DSH 装饰插件合集');
out.push('');
out.push(`> 皮肤、主题、壁纸、桌面宠物、启动动画、字体图标——一份按类别整理好的索引。共 **${total}** 条。`);
out.push('>');
out.push(`> 四路数据源：npm registry（${npm.stats.uniquePackages} 个 DSH 相关包）· awesome-dsh-plugin（${awesome.totalItems} 条）· 官方插件索引 dsh-plugin-catalog${catalog ? `（${catalog.totalInCatalog} 条）` : ''}${github ? ` · GitHub 仓库搜索（${github.count} 个命中）` : ''}。`);
out.push(`> 生成时间：${npm.generated.slice(0, 10)}。周下载为 npm 近一周数据，缺失记「—」。`);
out.push('');
out.push('## 怎么装');
out.push('');
out.push('```bash');
out.push('# npm 上发布的插件');
out.push('dsh plugin add <包名>');
out.push('');
out.push('# 只发布在 GitHub 上的插件');
out.push('dsh plugin add <owner>/<repo>');
out.push('```');
out.push('');
out.push('装完重启 DSH。皮肤类插件通常还要在 **设置 → 外观 / 主题** 里选一次才会生效。');
out.push('');
out.push('> **想先看效果？** 打开带预览图的 [gallery.html](gallery.html)（下载后用浏览器打开，可搜索、按类别筛选），或看 [gallery.md](gallery.md)（精选带图，GitHub 上直接显示）。');
out.push('');
out.push('> **别一次装五套皮肤。** 每个装饰插件都进首屏资源，装太多会明显拖慢启动。挑一套主用，其余的用完即卸。');
out.push('');
out.push('## 分类导航');
out.push('');
for (const t of ORDER) out.push(`- [${LABEL[t]}](#${t}) · ${groups[t].length} 条`);
out.push('');
out.push('## 先看这几个');
out.push('');
out.push('每类取 npm 周下载量前 3 + GitHub 星标前 2，完整清单见下面各分类。');
out.push('');
out.push('| 类别 | 名称 | 安装 | 热度 | 一句话 |');
out.push('|---|---|---|---|---|');
for (const t of ORDER) {
  const byDl = groups[t].filter((r) => r.pkg?.downloads).slice(0, 3);
  const used = new Set(byDl.map((r) => r.repoKey));
  const byStar = groups[t]
    .filter((r) => !used.has(r.repoKey) && (r.stars ?? 0) >= 5)
    .slice()
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
    .slice(0, 2);
  for (const r of [...byDl, ...byStar]) {
    const install = r.pkg ? `\`${r.pkg.name}\`` : (r.repoKey ? `\`${r.repoKey}\`` : '—');
    const nameCell = r.repo ? `[${esc(r.title.split('/').pop())}](${r.repo})` : esc(r.title);
    const heat = r.pkg?.downloads ? `${wd(r.pkg.downloads)}/周` : `★${r.stars ?? 0}`;
    out.push(`| ${LABEL[t].split(' / ')[0]} | ${nameCell} | ${install} | ${heat} | ${shortDesc(r.desc, 80)} |`);
  }
}
out.push('');

for (const t of ORDER) {
  const list = groups[t];
  if (!list.length) continue;
  out.push(`## ${LABEL[t]}`);
  out.push('');
  out.push('| 名称 | 安装 | 周下载 | 许可 | 说明 |');
  out.push('|---|---|---|---|---|');
  for (const r of list) {
    const install = r.pkg ? `\`${r.pkg.name}\`` : (r.repoKey ? `\`${r.repoKey}\`` : '—');
    const lic = r.pkg?.license ? esc(r.pkg.license) : '—';
    const nameCell = r.repo ? `[${esc(r.title.split('/').pop())}](${r.repo})` : esc(r.title);
    out.push(`| ${nameCell} | ${install} | ${wd(r.pkg?.downloads)} | ${lic} | ${shortDesc(r.desc)} |`);
  }
  out.push('');
}

out.push('## 数据来源');
out.push('');
out.push('- npm registry：`registry.npmjs.org` 搜索 + `/<pkg>/latest` 元数据 + `api.npmjs.org/downloads` 周下载量。采集脚本 [`research/fetch-decorations.mjs`](research/fetch-decorations.mjs)。');
out.push('- 社区清单：[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)。只提取名称、链接与类别，描述为原文截断。解析脚本 [`research/parse-awesome.mjs`](research/parse-awesome.mjs)。');
out.push('- 官方索引：[dsh-plugin-catalog](https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json)（3261 条，带官方分类与中英双语描述）。脚本 [`research/fetch-catalog.mjs`](research/fetch-catalog.mjs)。');
out.push('- GitHub 搜索：`/search/repositories` 按 17 组关键词扫仓库名与描述，补上没发 npm、也没进任何清单的项目。脚本 [`research/fetch-github.mjs`](research/fetch-github.mjs)。');
out.push('- 合并与去重：[`research/build-catalog.mjs`](research/build-catalog.mjs)，按 GitHub `owner/repo` 与 npm 包名两条键对齐。');
out.push('');
out.push('分类由包名关键词判定，个别条目会归错——尤其 GitHub 搜索来的仓库，描述里带 "background"、"pet" 这类词就可能被拉进来。发现后提 issue 或直接 PR 改归类。');
out.push('');

writeFileSync(outPath, out.join('\n'), 'utf8');
console.log(`wrote ${outPath}: ${total} rows`);
for (const t of ORDER) console.log(`  ${t.padEnd(10)} ${groups[t].length}`);
