// 用 GitHub Search API 补充只在 GitHub 上、没进 npm / awesome / 官方索引的装饰仓库
// 用法：
//   $env:GITHUB_TOKEN='...'; node fetch-github.mjs [--out github-decor.json]
//   $env:GH_MAX_PAGES=5 $env:GH_MIN_STARS=1   # 可选：翻页深度与星标门槛
//
// 速率：认证后 search 30 次/分钟，脚本按 2.2s 间隔发请求。
// 提前终止：某一页的结果里星标全部低于门槛时，后面的页只会更差，直接跳过该关键词。
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : join(HERE, 'github-decor.json');

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('GITHUB_TOKEN is required'); process.exit(1); }

const MAX_PAGES = Math.max(1, Math.min(10, Number(process.env.GH_MAX_PAGES || 5)));
const MIN_STARS = Math.max(0, Number(process.env.GH_MIN_STARS || 1));

const KWS = [
  'dsh skin', 'dsh theme', 'dsh pet', 'dsh wallpaper', 'dsh live2d',
  'dsh mascot', 'dsh boot animation', 'dsh font', 'dsh cursor',
  'dsh appearance', 'dsh desktop pet', 'dsh 皮肤', 'dsh 宠物', 'dsh 壁纸',
  'deepseek harness skin', 'deepseek harness theme', 'deepseek harness pet',
];

const DECOR_RE = /(?<![a-z])(skin|skins|theme|themes|pet|pets|mascot|live2d|chibi|wallpaper|backdrop|background|boot|splash|startup|font|typeface|icon|cursor|avatar|sticker|appearance|palette|particle|decoration)(?![a-z])|皮肤|主题|宠物|桌宠|壁纸|背景|启动|动画|字体|图标|光标|头像|外观|配色|换肤|动效/i;
const DSH_RE = /dsh|deepseek[\s-]?harness/i;
const NOT_DECOR = /theme-?pack-?generator|icon-?pack-?builder|tutorial|docs?$|awesome|list$|template|desktop-client|harness-desktop|(^|\/)dsh-cli|sdk|api-?server/i;
// 劣质特征：测试壳、模板、个人练手
const LOW_QUALITY_NAME = /^(test|tests|demo|tmp|temp|hello|example|sample|my-|untitled|new-|copy)/i;

const RULES = [
  ['pet', /(?<![a-z])(pets?|mascot|live2d|chibi|desk-?pet)(?![a-z])|桌宠|宠物/i],
  ['boot', /(boot|startup|splash|开场|启动)/i],
  ['wallpaper', /(wallpaper|backdrop|background|bg-|壁纸|背景)/i],
  ['font', /(font|typeface|字体)/i],
  ['icon', /(icon|cursor|avatar|sticker|badge|logo|图标|光标|头像)/i],
  ['skin', /(skins?|换肤|皮肤)/i],
  ['theme', /(themes?|palette|appearance|style|glass|liquid|主题|配色|外观)/i],
  ['animation', /(animation|animated|particle|动效|动画|粒子)/i],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(kw, page) {
  const q = encodeURIComponent(`${kw} in:name,description`);
  const url = `https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&per_page=100&page=${page}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url, {
        signal: AbortSignal.timeout(30000),
        headers: {
          authorization: `token ${TOKEN}`,
          accept: 'application/vnd.github+json',
          'user-agent': 'dsh-decorations-catalog/1.0',
        },
      });
      if (r.status === 403 || r.status === 429) { await sleep(20000); continue; }
      if (r.status === 422) return []; // 翻过 1000 条上限
      if (!r.ok) return [];
      const j = await r.json();
      return j.items || [];
    } catch { await sleep(3000); }
  }
  return [];
}

const byRepo = new Map();
const stats = { queries: 0, rawHits: 0, afterQuality: 0, dropped: { stars: 0, desc: 0, fork: 0, name: 0, cls: 0, dsh: 0, decor: 0 } };

for (const kw of KWS) {
  let kwNew = 0;
  for (let page = 1; page <= MAX_PAGES; page++) {
    const items = await search(kw, page);
    stats.queries++;
    stats.rawHits += items.length;
    if (!items.length) break;

    let pageHasQualified = false;
    for (const it of items) {
      if (it.stargazers_count < MIN_STARS) { stats.dropped.stars++; continue; }
      pageHasQualified = true;

      const key = it.full_name.toLowerCase();
      if (byRepo.has(key)) continue;

      const desc = (it.description || '').trim();
      if (desc.length < 8) { stats.dropped.desc++; continue; }
      if (it.fork) { stats.dropped.fork++; continue; }
      if (LOW_QUALITY_NAME.test(it.name)) { stats.dropped.name++; continue; }

      const hay = `${it.name} ${desc} ${(it.topics || []).join(' ')}`;
      if (!DSH_RE.test(hay)) { stats.dropped.dsh++; continue; }
      if (!DECOR_RE.test(hay)) { stats.dropped.decor++; continue; }
      if (NOT_DECOR.test(it.name)) { stats.dropped.name++; continue; }
      if (it.archived) { stats.dropped.name++; continue; }

      const head = desc.slice(0, 100);
      const primary = (RULES.find(([, re]) => re.test(it.name)) || RULES.find(([, re]) => re.test(head)) || [])[0];
      if (!primary) { stats.dropped.cls++; continue; }

      byRepo.set(key, {
        title: it.full_name,
        repo: it.html_url,
        desc,
        stars: it.stargazers_count,
        license: it.license?.spdx_id || '',
        topics: it.topics || [],
        updated: (it.pushed_at || '').slice(0, 10),
        primary,
        matchedKeyword: kw,
      });
      kwNew++;
    }
    stats.afterQuality = byRepo.size;
    // 本页已经全是低于门槛的仓库，后面的页只会更差
    if (!pageHasQualified) break;
    await sleep(2200);
  }
  console.log(`[gh] ${kw} -> new=${kwNew} (total ${byRepo.size})`);
  await sleep(2200);
}

const rows = [...byRepo.values()].sort((a, b) => b.stars - a.stars);
writeFileSync(OUT, JSON.stringify({
  generated: new Date().toISOString(),
  keywords: KWS,
  maxPages: MAX_PAGES,
  minStars: MIN_STARS,
  stats,
  count: rows.length,
  rows,
}, null, 1), 'utf8');
console.log(JSON.stringify(stats, null, 1));
console.log(`[done] ${rows.length} repos -> ${OUT}`);
