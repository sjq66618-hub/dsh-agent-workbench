// npm registry fact scan (read-only). No install, no config writes.
import { writeFileSync } from 'node:fs';

const pkgs = [
  // MCP official / common servers
  '@modelcontextprotocol/server-filesystem',
  '@modelcontextprotocol/server-github',
  '@modelcontextprotocol/server-memory',
  '@modelcontextprotocol/server-sequential-thinking',
  '@modelcontextprotocol/server-fetch',
  '@modelcontextprotocol/server-sqlite',
  '@modelcontextprotocol/server-postgres',
  '@modelcontextprotocol/server-slack',
  '@modelcontextprotocol/server-puppeteer',
  '@modelcontextprotocol/server-everything',
  '@modelcontextprotocol/inspector',
  '@playwright/mcp',
  'chrome-devtools-mcp',
  '@upstash/context7-mcp',
  'tavily-mcp',
  'exa-mcp-server',
  'firecrawl-mcp',
  'mcp-server-git',
  '@notionhq/notion-mcp-server',
  '@sentry/mcp-server',
  'mcp-server-kubernetes',
  '@cyanheads/git-mcp-server',
  '@executeautomation/playwright-mcp-server',
  // DSH / DeepSeek official related
  '@deepseek-ai/dsh-experimental-session-search',
  '@deepseek-ai/dsh-experimental-browser-use-playwright-mcp',
  '@deepseek-ai/dsh-experimental-computer-use-cua-driver-mcp',
  '@deepseek-ai/dsh-experimental-api-speech-to-text',
  '@deepseek-ai/dsh-experimental-plugin-market-bundle',
  '@deepseek-ai/dsh-hooks-claude-code',
  '@deepseek-ai/dsh-hooks-codex',
  '@deepseek-ai/dsh-tool-lsp',
  '@deepseek-ai/dsh-experimental-inspector',
  '@deepseek-ai/dsh-session-persistence-sqlite',
  // CLI / local tools
  'baiduwangpan-cli',
  '@sansenjian/qq-music-api',
  '@yakult-green-tea/qq-music-api',
  'youtube-dl-exec',
  'openai-whisper',
  'ffmpeg-static',
  'pandoc',
  'markmap-cli',
  'mermaid-cli',
  '@mermaid-js/mermaid-cli',
];

const enc = (n) => n.replace('/', '%2f');
const out = [];

async function probe(name) {
  const url = `https://registry.npmjs.org/${enc(name)}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 30000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { accept: 'application/json' },
    });
    const text = await res.text();
    if (res.status === 404) {
      return { name, found: false, http: 404, raw: text.slice(0, 160) };
    }
    if (!res.ok) {
      return { name, found: null, http: res.status, raw: text.slice(0, 300) };
    }
    const doc = JSON.parse(text);
    const latest = doc['dist-tags']?.latest ?? null;
    const v = latest ? doc.versions?.[latest] : null;
    const time = doc.time ?? {};
    const allTags = doc['dist-tags'] ?? {};
    return {
      name,
      found: true,
      http: 200,
      latest,
      latestPublished: latest ? time[latest] ?? null : null,
      modified: time.modified ?? null,
      created: time.created ?? null,
      versionCount: Object.keys(doc.versions ?? {}).length,
      distTags: allTags,
      description: (v?.description ?? doc.description ?? '').replace(/\s+/g, ' ').slice(0, 200),
      deprecated: v?.deprecated ?? null,
      engines: v?.engines ?? null,
      peerDependencies: v?.peerDependencies ?? null,
      peerDependenciesMeta: v?.peerDependenciesMeta ?? null,
      bin: v?.bin ?? null,
      main: v?.main ?? null,
      types: v?.types ?? v?.typings ?? null,
      license: v?.license ?? doc.license ?? null,
      repo: v?.repository?.url ?? doc.repository?.url ?? null,
      unpackedSize: v?.dist?.unpackedSize ?? null,
      fileCount: v?.dist?.fileCount ?? null,
    };
  } catch (e) {
    return { name, found: null, http: 0, error: String(e && e.message ? e.message : e) };
  } finally {
    clearTimeout(timer);
  }
}

const queue = [...pkgs];
const workers = Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const n = queue.shift();
    out.push(await probe(n));
  }
});
await Promise.all(workers);

const order = new Map(pkgs.map((p, i) => [p, i]));
out.sort((a, b) => order.get(a.name) - order.get(b.name));

writeFileSync(new URL('./_scan.json', import.meta.url), JSON.stringify(out, null, 2), 'utf8');
for (const r of out) {
  const flag = r.found === true ? 'OK ' : r.found === false ? '404' : 'ERR';
  console.log(
    [
      flag,
      r.name,
      r.latest ?? '-',
      (r.latestPublished ?? r.modified ?? '-').slice(0, 10),
      r.modified ? r.modified.slice(0, 10) : '-',
      r.deprecated ? 'DEPRECATED' : '-',
      r.engines ? 'engines=' + JSON.stringify(r.engines) : '-',
      r.peerDependencies ? 'peer=' + Object.keys(r.peerDependencies).join(',') : '-',
      r.bin ? 'bin=' + (typeof r.bin === 'string' ? r.bin : Object.keys(r.bin).join('|')) : '-',
      r.http ? 'http=' + r.http : '',
    ].join(' | '),
  );
}
