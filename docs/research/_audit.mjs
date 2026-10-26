// audit: md table must match _scan.json field-for-field
import { readFileSync } from 'node:fs';
const rows = JSON.parse(readFileSync(new URL('./_scan.json', import.meta.url), 'utf8'));
const md = readFileSync(new URL('./mcp-verify.md', import.meta.url), 'utf8');
const byName = Object.fromEntries(rows.map((r) => [r.name, r]));

const lineRe = /^\| `([^`]+)` \| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$/;
const seen = new Map();
let n = 0;
for (const line of md.split(/\r?\n/)) {
  const m = line.match(lineRe);
  if (!m) continue;
  n++;
  seen.set(m[1], { ver: m[2].trim(), date: m[3].trim(), status: m[7].trim() });
}
let bad = 0;
for (const r of rows) {
  const got = seen.get(r.name);
  if (!got) {
    console.log('MISSING ROW', r.name);
    bad++;
    continue;
  }
  const wantVer = r.latest ?? '—';
  const wantDate = r.latestPublished ? r.latestPublished.slice(0, 10) : '—';
  if (got.ver !== wantVer) {
    console.log('VER MISMATCH', r.name, 'md=' + got.ver, 'json=' + wantVer);
    bad++;
  }
  if (got.date !== wantDate) {
    console.log('DATE MISMATCH', r.name, 'md=' + got.date, 'json=' + wantDate);
    bad++;
  }
}
const extra = [...seen.keys()].filter((k) => !byName[k]);
console.log('rows_in_md=' + n, 'json_rows=' + rows.length, 'extra=' + extra.length, 'mismatch=' + bad);
const st = {};
for (const v of seen.values()) {
  const s = v.status.replace(/[¹²³⁴⁵⁶⁷]/g, '');
  st[s] = (st[s] ?? 0) + 1;
}
console.log('status_counts', JSON.stringify(st));
for (const bad2 of ['${', '  /  文件', 'MB /  文件', 'undefined', 'NaN', 'null']) {
  if (md.includes(bad2)) console.log('ARTIFACT FOUND:', JSON.stringify(bad2));
}
console.log('chars=' + md.length);
