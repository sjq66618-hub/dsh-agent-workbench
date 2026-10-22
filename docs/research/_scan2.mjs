// second pass: plausible alternatives + peer-dep reality + peer meta
const pkgs = [
  'mcp-server-fetch',
  'mcp-server-sqlite',
  '@deepseek-ai/dsh',
  '@deepseek-ai/dsh-tools',
  '@deepseek-ai/cordis',
  '@toon-format/toon',
  '@blackwell-systems/gcf',
  'puppeteer',
  '@modelcontextprotocol/sdk',
];
const enc = (n) => n.replace('/', '%2f');
for (const name of pkgs) {
  const res = await fetch(`https://registry.npmjs.org/${enc(name)}`, { headers: { accept: 'application/json' } });
  const t = await res.text();
  if (!res.ok) {
    console.log(`${res.status} | ${name} | ${t.slice(0, 120)}`);
    continue;
  }
  const d = JSON.parse(t);
  const latest = d['dist-tags']?.latest;
  const v = d.versions?.[latest] ?? {};
  console.log(
    [
      res.status,
      name,
      latest,
      (d.time?.[latest] ?? '-').slice(0, 10),
      d.time?.modified?.slice(0, 10) ?? '-',
      v.deprecated ? 'DEPRECATED' : '-',
      v.engines ? JSON.stringify(v.engines) : '-',
    ].join(' | '),
  );
}
// peerDependenciesMeta of two notable ones
for (const name of ['chrome-devtools-mcp', '@mermaid-js/mermaid-cli', '@deepseek-ai/dsh-tool-lsp']) {
  const d = await (await fetch(`https://registry.npmjs.org/${name.replace('/', '%2f')}`)).json();
  const v = d.versions[d['dist-tags'].latest];
  console.log('PEERMETA', name, JSON.stringify(v.peerDependenciesMeta ?? null));
}
