// 解析 awesome-dsh 列表，按章节 + 名称严格归类到装饰类别
// 用法：node parse-awesome.mjs <awesome.md> [--out awesome-parsed.json]
//
// 归类原则：名称优先，描述只做兜底。原因是长描述里 "background job"、"boot" 这类词
// 会把非装饰插件误判进来（例如 task-monitor 会被当成壁纸插件）。
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const src = process.argv[2];
if (!src) { console.error('usage: node parse-awesome.mjs <awesome.md>'); process.exit(1); }
const outPath = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : join(HERE, 'awesome-parsed.json');

const lines = readFileSync(src, 'utf8').split(/\r?\n/);
const ITEM = /^-\s+\[([^\]]+)\]\(([^)]+)\)\s+-\s+(.+)$/;
const SECTION = /^###\s+(.+)$/;

// 名称关键词 → 类别（顺序即优先级）
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

const items = [];
let current = null;
for (const [i, line] of lines.entries()) {
  const s = line.match(SECTION);
  if (s) { current = s[1].trim(); continue; }
  const m = line.match(ITEM);
  if (!m) continue;
  const name = m[1].trim();
  const bare = name.split('#')[0];
  const tags = NAME_RULES.filter(([, re]) => re.test(bare)).map(([t]) => t);
  items.push({ name, url: m[2].trim(), desc: m[3].replace(/\s+/g, ' ').trim(), section: current, line: i + 1, tags });
}

// 保留规则：
// 1) Themes & Appearance 整节收（该节本身就是装饰类）
// 2) UI Enhancements 只收名称命中的
// 3) 其他节不收
const kept = [];
for (const it of items) {
  const inThemeSection = /Themes?\s*&\s*Appearance/i.test(it.section || '');
  const inUI = /UI Enhancements/i.test(it.section || '');
  if (inThemeSection) {
    if (!it.tags.length) it.tags = ['theme'];
    kept.push(it);
  } else if (inUI && it.tags.length) {
    kept.push(it);
  }
}

const order = ['pet', 'boot', 'wallpaper', 'font', 'icon', 'skin', 'theme', 'animation'];
const counts = Object.fromEntries(order.map((t) => [t, kept.filter((it) => it.tags[0] === t).length]));

writeFileSync(outPath, JSON.stringify({
  source: src,
  totalItems: items.length,
  kept: kept.length,
  counts,
  items: kept,
}, null, 1), 'utf8');

console.log(JSON.stringify({ totalItems: items.length, kept: kept.length, counts }, null, 1));
console.log(`wrote ${outPath}`);
