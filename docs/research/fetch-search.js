// 重新抓 npm 搜索（node 端 UTF-8 正确），合并已抓到的下载量，按能力分类输出
const fs = require('fs');
const path = require('path');
const dir = __dirname;

const kws = ['deepseek-harness', 'dsh-plugin', 'dsh', 'deepseek harness plugin', 'dsh client plugin', 'dsh mcp', 'dsh skill', 'dsh hooks', 'dsh 插件', 'dsh 皮肤', 'dsh 记忆', 'dsh 语音', 'dsh 视觉', 'dsh 办公', 'dsh 浏览器'];
const all = new Map();

async function search(kw, from) {
  const url = `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(kw)}&size=250&from=${from}`;
  for (let a = 0; a < 4; a++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (r.status === 429) { await new Promise(s => setTimeout(s, 3000 * (a + 1))); continue; }
      if (!r.ok) return;
      const j = await r.json();
      for (const o of j.objects || []) {
        const p = o.package;
        if (!all.has(p.name)) all.set(p.name, {
          name: p.name, version: p.version, date: p.date,
          desc: (p.description || '').replace(/\s+/g, ' '),
          keywords: p.keywords || [], links: p.links || {}, score: o.score && o.score.final,
        });
      }
      return;
    } catch (e) { await new Promise(s => setTimeout(s, 1000)); }
  }
}

(async () => {
  for (const kw of kws) { await search(kw, 0); await search(kw, 250); }
  const dlPath = path.join(dir, 'with-dl.json');
  const dlMap = new Map();
  if (fs.existsSync(dlPath)) {
    const prev = JSON.parse(fs.readFileSync(dlPath, 'utf8').replace(/^\uFEFF/, ''));
    for (const p of prev) if (p.dl > 0) dlMap.set(p.name, p.dl);
  }
  const rows = [...all.values()].map(p => ({ ...p, dl: dlMap.get(p.name) || 0 }));
  fs.writeFileSync(path.join(dir, 'search-clean.json'), JSON.stringify(rows, null, 1), 'utf8');
  console.log(`unique=${rows.length} withDl=${rows.filter(r => r.dl > 0).length}`);

  const cats = {
    'sidebar/文件树/编辑': /sidebar|file ?tree|editor|explorer|workspace|ide/i,
    '成本/用量/额度': /cost|usage|token|billing|quota|balance|额度|费用|用量/i,
    '远程/手机/隧道': /remote|mobile|pair|tunnel|手机|远程|扫码/i,
    '任务板/看板/追踪': /task ?board|task|ledger|kanban|todo|看板|任务/i,
    '技能/市场/预设': /skill|market|preset|catalog|plugin.?hub|marketplace|技能|市场|预设/i,
    '记忆/知识库': /memory|recall|engram|memento|mnemo|knowledge|rag|记忆|知识库|长期/i,
    '皮肤/主题/宠物': /skin|theme|pet|wallpaper|font|外观|皮肤|主题|壁纸|宠物/i,
    '搜索/联网': /search|tavily|serper|exa|firecrawl|web|联网|搜索/i,
    '语音/音频/音乐': /voice|speech|tts|stt|audio|whisper|music|语音|朗读|配音|音乐/i,
    '视觉/图片/OCR': /vision|image|ocr|screenshot|视觉|看图|截图|识图/i,
    '浏览器/自动化/RPA': /playwright|browser|puppeteer|chrome|automation|rpa|浏览器|自动化/i,
    'IM/消息/通知': /wechat|qq|telegram|feishu|dingtalk|slack|discord|im-|notify|消息|通知|微信/i,
    '代码/git/审查': /git|code|refactor|lsp|review|diff|代码|审查/i,
    '办公/文档/PDF': /office|pdf|docx|xlsx|pptx|excel|文档|办公|表格/i,
    '设计/图表/生图': /design|figma|diagram|mermaid|chart|canvas|svg|绘图|图表|生图/i,
    '数据/数据库/SQL': /sql|database|duckdb|postgres|sqlite|数据/i,
    'DevOps/云/容器': /docker|k8s|kubernetes|deploy|cloud|server|运维|部署/i,
    '定时/自动化/工作流': /cron|schedule|workflow|trigger|automation|定时|计划/i,
    '模型/provider/路由': /provider|router|model|claude|gpt|gemini|ollama|模型|路由/i,
    '多代理/团队/编排': /agent.?team|swarm|orchestr|subagent|团队|编排|多代理/i,
    '安全/审计/审批': /security|audit|permission|approval|sandbox|secret|安全|审计|审批/i,
    'TUI/终端': /tui|terminal|cli|终端/i,
    '游戏/娱乐/角色': /game|novel|story|rpg|角色|小说|宠物|娱乐/i,
  };
  const out = ['# DSH 社区插件分类（按周下载量）', '', `数据：npm registry 搜索 ${kws.length} 个关键词去重 ${rows.length} 个包，其中 ${rows.filter(r => r.dl > 0).length} 个查到周下载量。`, ''];
  for (const [name, re] of Object.entries(cats)) {
    const hit = rows.filter(r => re.test(r.name + ' ' + r.desc)).sort((a, b) => b.dl - a.dl).slice(0, 10);
    if (!hit.length) continue;
    out.push(`## ${name}`, '', '| 包 | 周下载 | 最后发布 | 说明 |', '|---|---|---|---|');
    for (const h of hit) out.push(`| \`${h.name}\` | ${h.dl} | ${(h.date || '').slice(0, 10)} | ${(h.desc || '').slice(0, 60).replace(/\|/g, '/')} |`);
    out.push('');
  }
  out.push('## 全局 TOP 40（含官方包）', '', '| 包 | 周下载 | 最后发布 | 说明 |', '|---|---|---|---|');
  for (const h of [...rows].sort((a, b) => b.dl - a.dl).slice(0, 40))
    out.push(`| \`${h.name}\` | ${h.dl} | ${(h.date || '').slice(0, 10)} | ${(h.desc || '').slice(0, 60).replace(/\|/g, '/')} |`);
  fs.writeFileSync(path.join(dir, 'category-top.md'), out.join('\n'), 'utf8');
  console.log('wrote category-top.md');
})();
