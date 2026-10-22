# 社区生态调研（2026-10-21）

来源：DSH 官方仓库 `docs/subsystems/*`、`awesome-dsh-plugin/awesome-dsh-plugin`（约 4200 个插件）、`dsh-market/dsh-market`、`liustack/modlens`。通过 GitHub API 读取，未抓取网页原文。

## 结论先行

1. 社区生态已经很大，但 **80% 是主题/皮肤/UI 装饰**；真正补能力的集中在四类：插件市场、视觉、记忆、验证。
2. 工坊现在缺的不是更多工具，而是 **发现入口**（自己找插件）和 **视觉**（DeepSeek 文本模型看不了图）。
3. 第三方插件必须过三关门（npm 正式包、宿主版本区间、近 60 天活跃），目前筛出 2 个可试、2 个拒绝。

## 准入审查结果

| 插件 | 用途 | npm | 宿主区间 | 活跃度 | 判定 |
|---|---|---|---|---|---|
| `dshmarket` 1.66.45 | 插件市场：浏览/搜索/一键装 4200+ 插件、主题、热禁用、备份 | 有 | `dsh-settings ^0.2.1-rc.1`，本机 0.2.1-rc.2 覆盖 | 2026-10-20，7.9k star | **准装**（建议先隔离试驾） |
| `dsh-engram` 0.7.4 | 跨会话长期记忆：SQLite + FTS5 + 向量召回，自动从会话日志沉淀 | 有 | `dsh-* >=0.1.2-alpha.2 <0.3.0`，覆盖 | 2026-10-21，28 star | **可试**（社区小，先试驾） |
| `@liustack/modlens` 3.27.1 | 给文本模型加视觉：粘贴图片出结构化描述 | 有 | 未声明 `@deepseek-ai/*` peer | 2026-10-15，4.4k star | **待定**（需免费 Gemini key 或 Antigravity CLI；图片会发给外部服务） |
| `dsh-gungnir` 0.2.1 | 目标完成度验证：跑命令/查产物，防虚报完成 | 有 | 锁死 `0.1.2-rc.1` | 2026-09-03 | **拒绝**（版本不兼容） |
| `dsh-session-diff` | 侧栏看本会话改动 diff | 无 | — | 1 star | **拒绝**（无正式 npm 包） |

未逐一审查、但值得关注的：`dsh-switchman`（模型路由 + 上下文水位 + 交接）、`dsh-answer-reviewer`（每轮独立评审）、`dsh-task-monitor`（任务/产物面板）、`dsh-turn-fold`（折叠过程行）。

## 官方文档里找到的可调项

- **技能目录**：会话开始时把每个技能的 `name + description` 作为一条 durable 目录消息注入；`dsh-tool-skill.catalogDescriptionMaxLength` 默认 500。本机实测：131 个技能文件、约 97 个唯一技能、描述合计 21,813 字符，按中文 2 字符/token 估算约 **10.9k token**（一次性，压缩后可能重注入）。把上限降到 240 可省约 26%，但会截断部分触发词，暂未改。
- **MCP 工具 schema 是每请求成本**：playwright 一个服务器就带 25 个工具，schema 进入每次请求。目前没有 `--allowed-tools` 过滤参数（0.0.83），只能整组挂载或卸载。
- **子代理模型选择**：`dsh-tool-subagent` 的 `modelSelectionSettings` 可按宿主设置暴露 `provider/model/reasoning_effort`，让子代理用更便宜的档；需要宿主设置里先开启，暂未开。
- **子代理深度**：宿主默认 `maxDepth=1`，主控只能派一层；要嵌套需显式调高，代价是失控风险。

## 本轮已做的低风险优化

- playwright MCP 加 `--headless`：自动化时不再弹出可见浏览器窗口。
- 新增项目级 `<repo>\AGENTS.md`：目录地图 + 操作约定，新会话自动加载，减少每次问「东西在哪」。
- 技能目录与 MCP 成本已量化，作为后续取舍依据。

## 建议顺序

1. 先隔离试驾 `dshmarket`，通过后装进 desktop；以后你自己在 Settings → Plugin Market 里挑插件。
2. 需要看图时再上 `modlens`（先准备免费 Gemini key，明确图片会出网）。
3. 长期记忆先用 `session_search`；确实不够再试 `dsh-engram`。
4. `agent-team`、`switchman` 这类重型编排，等 rc/stable 再说。
