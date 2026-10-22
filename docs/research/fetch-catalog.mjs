// 从官方插件索引（dsh-plugin-catalog）补充装饰条目
// 用法：
//   node fetch-catalog.mjs                          # 直接下载
//   node fetch-catalog.mjs --file index.json        # 用已下载的本地副本
//   node fetch-catalog.mjs --out catalog-decor.json
//
// 索引来源：https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json
// 部分网络下 Node 的 fetch 会被 TLS 重置，此时先用 pwsh 的 Invoke-WebRequest
// 下载到本地，再用 --file 传入。
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : join(HERE, 'catalog-decor.json');
const FILE = process.argv.includes('--file')
  ? process.argv[process.argv.indexOf('--file') + 1]
  : null;
const SRC = 'https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json';

// 名称命中才算（描述命中噪音太大，会把 diff 查看器、任务面板全收进来）
const NAME_PAT = /(?<![a-z])(pets?|mascot|live2d|chibi|desk-?pet|wallpaper|backdrop|background|bg-|boot|startup|splash|font|typeface|icon|cursor|avatar|sticker|skins?|themes?|palette|appearance|decoration|particle|animation|glass|liquid)(?![a-z])|皮肤|主题|宠物|桌宠|壁纸|背景|启动|动画|字体|图标|光标|头像|外观|配色|换肤|动效/i;

const RULES = [
  ['pet', /(?<![a-z])(pets?|mascot|live2d|chibi)(?![a-z])|desk-?pet|桌宠|宠物/i],
  ['boot', /(boot|startup|splash|开场|启动)/i],
  ['wallpaper', /(wallpaper|backdrop|background|bg-|壁纸|背景)/i],
  ['font', /(font|typeface|字体)/i],
  ['icon', /(icon|cursor|avatar|sticker|badge|logo|pwa-icon|图标|光标|头像)/i],
  ['skin', /(skins?|换肤|皮肤)/i],
  ['theme', /(themes?|palette|appearance|style|glass|liquid|主题|配色|外观)/i],
  ['animation', /(animation|animated|particle|动效|动画|粒子)/i],
];

let catalog;
if (FILE) {
  catalog = JSON.parse(readFileSync(FILE, 'utf8'));
} else {
  const r = await fetch(SRC, { signal: AbortSignal.timeout(60000) });
  if (!r.ok) throw new Error(`catalog fetch failed: HTTP ${r.status}`);
  catalog = await r.json();
}

const rows = [];
for (const p of catalog.plugins || []) {
  const cat = p.metadata?.category || '';
  const title = (p.title || '').split('#')[0];
  if (!title) continue;
  const byName = RULES.find(([, re]) => re.test(title));
  // theme 分类整收；ui / fun 必须名称命中
  if (cat !== 'theme' && !byName) continue;
  if (cat === 'theme' && !byName) {
    // 官方把不少纯色主题也归在 theme，保留
  }
  const primary = (byName && byName[0]) || 'theme';
  rows.push({
    title,
    name: p.name || '',
    category: cat,
    primary,
    descZh: (p.description?.zh || '').replace(/\s+/g, ' ').trim(),
    descEn: (p.description?.en || '').replace(/\s+/g, ' ').trim(),
    repo: p.repository?.url || '',
    homepage: p.homepage || '',
    version: p.versions?.[0]?.version || '',
  });
}

writeFileSync(OUT, JSON.stringify({
  source: SRC,
  generated: new Date().toISOString(),
  totalInCatalog: (catalog.plugins || []).length,
  decorRows: rows.length,
  rows,
}, null, 1), 'utf8');

console.log(`catalog=${(catalog.plugins || []).length}  decorRows=${rows.length}  -> ${OUT}`);
const byCat = {};
for (const r2 of rows) byCat[r2.primary] = (byCat[r2.primary] || 0) + 1;
console.log(byCat);
