// 批量取 npm 周下载量，输入 raw.json，输出 with-dl.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const raw = JSON.parse(fs.readFileSync(path.join(dir, 'raw.json'), 'utf8').replace(/^\uFEFF/, ''));
const names = raw.filter(p => /^(@[^/]+\/)?(dsh|deepseek)/.test(p.name)).map(p => p.name);
const out = {};
let done = 0, fail = 0;
const CONC = 10;

async function one(name) {
  const url = 'https://api.npmjs.org/downloads/point/last-week/' + encodeURIComponent(name);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (r.status === 429) { await new Promise(s => setTimeout(s, 2000 * (attempt + 1))); continue; }
      if (!r.ok) { fail++; return; }
      const j = await r.json();
      if (typeof j.downloads === 'number') out[name] = j.downloads;
      return;
    } catch (e) {
      await new Promise(s => setTimeout(s, 500));
    }
  }
  fail++;
}

(async () => {
  let i = 0;
  const workers = Array.from({ length: CONC }, async () => {
    while (i < names.length) {
      const name = names[i++];
      await one(name);
      done++;
      if (done % 100 === 0) process.stdout.write(`progress ${done}/${names.length} ok=${Object.keys(out).length} fail=${fail}\n`);
    }
  });
  await Promise.all(workers);
  const merged = raw.map(p => ({ ...p, dl: out[p.name] ?? 0 }));
  fs.writeFileSync(path.join(dir, 'with-dl.json'), JSON.stringify(merged, null, 1), 'utf8');
  console.log(`DONE total=${names.length} ok=${Object.keys(out).length} fail=${fail}`);
})();
