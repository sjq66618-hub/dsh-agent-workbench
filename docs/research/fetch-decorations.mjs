// 收集 DSH 装饰类插件（皮肤 / 主题 / 宠物 / 壁纸 / 启动动画 / 字体图标）
// 用法：node fetch-decorations.mjs [--out decorations-raw.json]
// 数据源：registry.npmjs.org 搜索 + <pkg>/latest + api.npmjs.org 周下载量
// 设计：搜索只取第一页，详情走 /latest（体积小），全部请求 15s 超时，带进度输出。
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : join(HERE, 'decorations-raw.json');

const KEYWORDS = [
  'dsh skin', 'dsh theme', 'dsh pet', 'dsh mascot', 'dsh live2d',
  'dsh wallpaper', 'dsh background', 'dsh animation', 'dsh boot', 'dsh splash',
  'dsh font', 'dsh icon', 'dsh cursor', 'dsh emoji', 'dsh avatar',
  'dsh appearance', 'dsh decoration', 'dsh client ui',
  'deepseek harness skin', 'deepseek harness theme', 'deepseek harness pet',
  'deepseek harness wallpaper', 'dsh-client-ui-skin', 'dsh 皮肤', 'dsh 宠物',
  'dsh 壁纸', 'dsh 主题', 'dsh 桌宠', 'dsh 美化',
];

const DECOR_RE = /(?<![a-z])(skin|skins|theme|themes|pet|pets|mascot|live2d|wallpaper|wallpapers|background|backdrop|boot|splash|startup|animation|animated|font|fonts|icon|icons|cursor|emoji|avatar|appearance|decoration|decorative|sticker|sprite|cosmetic)(?![a-z])|皮肤|主题|宠物|桌宠|壁纸|背景|启动|开机|动画|字体|图标|光标|头像|外观|美化|贴纸/i;
const DSH_RE = /dsh|deepseek[\s-]?harness/i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function jget(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, {
        signal: AbortSignal.timeout(15000),
        headers: { 'user-agent': 'dsh-decorations-catalog/1.0', accept: 'application/json' },
      });
      if (r.status === 429) { await sleep(1500 * (i + 1)); continue; }
      if (!r.ok) return null;
      return await r.json();
    } catch { await sleep(500 * (i + 1)); }
  }
  return null;
}

const all = new Map();

async function search(kw) {
  const url = `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(kw)}&size=250`;
  const j = await jget(url);
  if (!j) return 0;
  let added = 0;
  for (const o of j.objects || []) {
    const p = o.package;
    if (!p?.name || all.has(p.name)) continue;
    all.set(p.name, {
      name: p.name,
      version: p.version,
      date: (p.date || '').slice(0, 10),
      desc: (p.description || '').replace(/\s+/g, ' ').trim(),
      keywords: p.keywords || [],
      links: p.links || {},
    });
    added++;
  }
  return added;
}

(async () => {
  for (const kw of KEYWORDS) {
    const n = await search(kw);
    console.log(`[search] ${kw} -> +${n} (total ${all.size})`);
    await sleep(120);
  }

  const candidates = [...all.values()].filter((p) => {
    const hay = `${p.name} ${p.desc} ${(p.keywords || []).join(' ')}`;
    return DSH_RE.test(hay) && DECOR_RE.test(hay);
  });
  console.log(`[filter] candidates = ${candidates.length}`);

  const out = [];
  let done = 0;
  const queue = [...candidates];
  const workers = Array.from({ length: 12 }, async () => {
    while (queue.length) {
      const p = queue.shift();
      const enc = p.name.startsWith('@')
        ? '@' + encodeURIComponent(p.name.slice(1))
        : encodeURIComponent(p.name);
      const v = await jget(`https://registry.npmjs.org/${enc}/latest`);
      const dl = await jget(`https://api.npmjs.org/downloads/point/last-week/${enc}`);
      const repo = v?.repository;
      out.push({
        name: p.name,
        version: v?.version || p.version,
        desc: (v?.description || p.desc || '').replace(/\s+/g, ' ').trim(),
        license: typeof v?.license === 'string' ? v.license : (v?.license?.type || ''),
        repository: (typeof repo === 'string' ? repo : repo?.url) || p.links?.repository || '',
        homepage: v?.homepage || p.links?.homepage || '',
        keywords: v?.keywords || p.keywords || [],
        peerDeps: Object.keys(v?.peerDependencies || {}),
        deprecated: !!v?.deprecated,
        published: (v?._npmOperationalInternal ? '' : '') || p.date,
        downloads: dl?.downloads ?? null,
      });
      done++;
      if (done % 20 === 0) console.log(`[detail] ${done}/${candidates.length}`);
      await sleep(60);
    }
  });
  await Promise.all(workers);

  out.sort((a, b) => (b.downloads ?? -1) - (a.downloads ?? -1));
  const payload = {
    generated: new Date().toISOString(),
    stats: { keywords: KEYWORDS.length, uniquePackages: all.size, candidates: candidates.length, enriched: out.length },
    packages: out,
  };
  writeFileSync(OUT, JSON.stringify(payload, null, 1), 'utf8');
  console.log(`[done] ${out.length} packages -> ${OUT}`);
})();
