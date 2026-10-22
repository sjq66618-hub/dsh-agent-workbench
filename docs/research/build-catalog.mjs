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

// --- 按类别分组，组内按下载量降序、无下载量的按名称 ---
const groups = Object.fromEntries(ORDER.map((t) => [t, []]));
for (const r of finalRows) (groups[r.primary] ||= []).push(r);
for (const t of ORDER) {
  groups[t].sort((a, b) => {
    const da = a.pkg?.downloads ?? -1;
    const db = b.pkg?.downloads ?? -1;
    if (db !== da) return db - da;
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
out.push(`> 数据：npm registry 实测（${npm.stats.uniquePackages} 个 DSH 相关包中筛出 ${npm.stats.candidates} 个装饰候选）+ awesome-dsh-plugin 列表 ${awesome.totalItems} 条中筛出 ${awesome.kept} 条装饰条目。`);
out.push(`> 生成时间：${npm.generated.slice(0, 10)}。下载量为 npm 周下载，缺失记「—」。`);
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
out.push('> **别一次装五套皮肤。** 每个装饰插件都进首屏资源，装太多会明显拖慢启动。挑一套主用，其余的用完即卸。');
out.push('');
out.push('## 分类导航');
out.push('');
for (const t of ORDER) out.push(`- [${LABEL[t]}](#${t}) · ${groups[t].length} 条`);
out.push('');
out.push('## 先看这几个');
out.push('');
out.push('每类按周下载量取前 5（只取在 npm 上有下载数据的），完整清单见下面各分类。');
out.push('');
out.push('| 类别 | 名称 | 安装 | 周下载 | 一句话 |');
out.push('|---|---|---|---|---|');
for (const t of ORDER) {
  const top = groups[t].filter((r) => r.pkg?.downloads).slice(0, 5);
  for (const r of top) {
    const install = `\`${r.pkg.name}\``;
    const nameCell = r.repo ? `[${esc(r.title.split('/').pop())}](${r.repo})` : esc(r.title);
    out.push(`| ${LABEL[t].split(' / ')[0]} | ${nameCell} | ${install} | ${wd(r.pkg.downloads)} | ${shortDesc(r.desc, 80)} |`);
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
out.push('- npm registry：`registry.npmjs.org` 搜索 + `/<pkg>/latest` 元数据 + `api.npmjs.org/downloads` 周下载量。采集脚本见 [`research/fetch-decorations.mjs`](research/fetch-decorations.mjs)。');
out.push('- 社区清单：[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)（本仓库只提取名称、链接与类别，描述为原文截断，未逐条改写）。解析脚本见 [`research/parse-awesome.mjs`](research/parse-awesome.mjs)。');
out.push('- 合并与去重脚本：[`research/build-catalog.mjs`](research/build-catalog.mjs)。');
out.push('');
out.push('分类由包名关键词判定，个别条目可能归错类别——发现后直接提 issue 或 PR 改表格里的归类。');
out.push('');

writeFileSync(outPath, out.join('\n'), 'utf8');
console.log(`wrote ${outPath}: ${total} rows`);
for (const t of ORDER) console.log(`  ${t.padEnd(10)} ${groups[t].length}`);
