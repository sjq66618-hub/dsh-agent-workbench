// 从 decorations.md 抽取条目，抓每个仓库的 README，提取预览图
// 用法：node fetch-previews.mjs [--in ../decorations.md] [--out previews.json]
//
// 图片优先级：
//   1. README 里带 screenshot / preview / demo / 效果 字样的图
//   2. README 里第一张非 badge 图
//   3. 都没有 -> GitHub OpenGraph 卡片图（不是真实预览，标记 type=og）
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const IN = process.argv.includes('--in')
  ? process.argv[process.argv.indexOf('--in') + 1]
  : join(HERE, '..', 'decorations.md');
const OUT = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : join(HERE, 'previews.json');

const CAT_LABEL = {
  '皮肤 / 换肤包': 'skin',
  '主题 / 配色': 'theme',
  '壁纸 / 背景': 'wallpaper',
  '桌面宠物 / 吉祥物': 'pet',
  '启动动画 / 开场': 'boot',
  '字体': 'font',
  '图标 / 光标 / 头像': 'icon',
  '动效 / 粒子': 'animation',
};

// ---------- 1. 解析 markdown ----------
const text = readFileSync(IN, 'utf8');
const lines = text.split(/\r?\n/);
const ROW = /^\|\s*\[([^\]]+)\]\((https:\/\/github\.com\/([^/)]+)\/([^/)#]+))\)\s*\|\s*`([^`]+)`\s*\|\s*([^|]*)\|\s*([^|]*)\|\s*(.*?)\s*\|\s*$/;

const entries = [];
let current = null;
for (const line of lines) {
  const h = line.match(/^##\s+(.+)$/);
  if (h) { current = CAT_LABEL[h[1].trim()] || null; continue; }
  if (!current) continue;
  const m = line.match(ROW);
  if (!m) continue;
  entries.push({
    name: m[1].trim(),
    repo: `${m[3]}/${m[4]}`.replace(/\.git$/, ''),
    install: m[5].trim(),
    heat: m[6].trim(),
    license: m[7].trim(),
    desc: m[8].trim(),
    category: current,
  });
}

// 同 repo 可能出现在多个类别（精选区重复）——只留首次
const seen = new Set();
const uniq = entries.filter((e) => {
  const k = e.repo.toLowerCase();
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

console.log(`[parse] rows=${entries.length} uniqueRepos=${uniq.length}`);

// ---------- 2. 抓 README ----------
const BADGE_HOSTS = /shields\.io|badge\.fury|badgen\.net|mintlify\.com\/badge|visitor-badge|img\.badges|badge\.|codecov|travis-ci|circleci|github\.com\/.*\/(actions\/workflows|workflows).*badge|api\.star-history|contrib\.rocks|gitpod\.io\/button|deepwiki\.com\/badge|awesome-dot-dev|readthedocs|socket\.dev/i;
const BADGE_PATH = /\/badge[s]?\/|badge\.svg|badge\.png|-badge\./i;
const PREFER = /screenshot|preview|demo|效果|示例|示例图|界面|截图|showcase|theme-?shot/i;

async function getText(url) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'user-agent': 'dsh-previews/1.0' } });
    if (!r.ok) return null;
    const ct = r.headers.get('content-type') || '';
    if (!/text|markdown|xml|plain/i.test(ct) && !url.endsWith('.md')) return null;
    const t = await r.text();
    return t.length > 400000 ? t.slice(0, 400000) : t;
  } catch { return null; }
}

function collectImages(md, owner, repo) {
  const found = [];
  const push = (raw) => {
    if (!raw) return;
    let u = raw.trim().replace(/^['"]|['"]$/g, '').split(/\s+/)[0];
    if (!u) return;
    if (u.startsWith('<') || u.startsWith('data:')) return; // 未闭合的 markdown 尖括号写法、内联图
    if (BADGE_HOSTS.test(u) || BADGE_PATH.test(u)) return;
    if (/\.svg$/i.test(u) && /badge/i.test(u)) return;
    if (u.startsWith('//')) u = 'https:' + u;
    const isImage = /\.(png|jpe?g|gif|webp|avif)(\?|#|$)/i.test(u);
    if (u.startsWith('http')) {
      if (isImage || /imgur|githubusercontent|user-images|raw\.github|gitee\.com\/.*\/raw/i.test(u)) found.push(u);
      return;
    }
    // 相对路径 -> raw；没有图片扩展名的不收
    if (!isImage) return;
    const clean = u.replace(/^\.?\//, '');
    if (!clean || clean.startsWith('#')) return;
    found.push(`https://raw.githubusercontent.com/${owner}/${repo}/HEAD/${clean}`);
  };
  // markdown 图片
  for (const m of md.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)) push(m[1]);
  // html img
  for (const m of md.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) push(m[1]);
  return found;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const README_CANDIDATES = ['README.md', 'readme.md', 'Readme.md', 'README.MD', 'README.zh.md', 'README.rst', 'README'];

const results = [];
let done = 0;
const queue = [...uniq];

async function worker() {
  while (queue.length) {
    const e = queue.shift();
    const [owner, repo] = e.repo.split('/');
    let md = null;
    for (const cand of README_CANDIDATES) {
      md = await getText(`https://raw.githubusercontent.com/${owner}/${repo}/HEAD/${cand}`);
      if (md) break;
    }
    let image = '';
    let type = 'og';
    let imgs = [];
    if (md) {
      imgs = collectImages(md, owner, repo);
      if (imgs.length) {
        const preferred = imgs.find((u) => PREFER.test(u));
        image = preferred || imgs[0];
        type = 'readme';
      }
    }
    if (!image) image = `https://opengraph.githubassets.com/1/${owner}/${repo}`;
    results.push({ ...e, image, imageType: type, imageCount: imgs.length });
    done++;
    if (done % 50 === 0) console.log(`[fetch] ${done}/${uniq.length}  readme=${results.filter((r) => r.imageType === 'readme').length}`);
    await sleep(60);
  }
}

await Promise.all(Array.from({ length: 10 }, worker));

results.sort((a, b) => {
  const rank = (x) => (x.imageType === 'readme' ? 0 : 1);
  return rank(a) - rank(b);
});

const byType = results.reduce((acc, r) => { acc[r.imageType] = (acc[r.imageType] || 0) + 1; return acc; }, {});
writeFileSync(OUT, JSON.stringify({ generated: new Date().toISOString(), total: results.length, byType, entries: results }, null, 1), 'utf8');
console.log(`[done] ${results.length} entries -> ${OUT}`);
console.log(byType);
