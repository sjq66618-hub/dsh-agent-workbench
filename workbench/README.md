# 工坊（Workbench）v3 — DSH 个性化 Agent 工作台

装好之后：新会话默认进入「工坊 · 主控」；主控带持久终端、Git 工作树、3 个 MCP 服务器、历史检索，并能把活派给 4 个专职子代理；用户级技能 97 个（原有 90 + 新增 7）。

## 编制

| 预设 id | 显示名 | 职责 | 工具面 |
|---|---|---|---|
| `wb-main` | 工坊 · 主控 | 路由、拆解、规划、验收、跨会话记忆 | 全部工具 + 子代理 + workflow + 历史检索 + 目标/计划 + 持久终端 + worktree + 3 个 MCP |
| `wb-builder` | 工坊 · 实现 | 读代码、最小 diff、跑测试 | shell / fs / 搜索 / 后台任务 / 技能 |
| `wb-auditor` | 工坊 · 审计 | 只读安全与质量审计，证据优先 | shell / fs / 搜索 / 技能（无写入纪律） |
| `wb-scribe` | 工坊 · 写作 | 中文长文、报告、文档 | fs / 搜索 / web / 技能（无 shell） |
| `wb-gamedev` | 工坊 · 游戏 | 玩法循环、前端、资源、打包 | shell / fs / 搜索 / 后台任务 / 技能 |

主控的 `subagent` 工具带 `agent_preset` 参数，可选 `wb-builder / wb-auditor / wb-scribe / wb-gamedev`；默认派给 `wb-builder`。

## 本轮改动

- **默认预设**：profile 的 `agent-preset-registry.selectedDefault` 从 `ptc` 改为 `wb-main`；新会话默认进主控。
- **新增 playwright MCP**：25 个浏览器工具（`browser_navigate`、`browser_click`、`browser_snapshot` 等），实测初始化通过。
- **修复主控"加载失败"**：
  1. 根因：`@deepseek-ai/dsh-plan-mode` 的 `section` 是必填项，之前没配，预设组合在审计阶段被拒。已补上规划模式指引。
  2. 一并修掉第二个隐患：`dsh-experimental-worktree` 提供 `ctx.worktrees` 服务，挂在预设里必须和消费者放在同一个隔离组，否则会被判为"服务泄漏"拒绝挂载。已用 `cordis:group` + `isolate: worktrees: true` 包住。
- 修复后真实应用已重新装载主控，并拉起了 context7 / playwright 两个 MCP 进程，说明组合完整挂载。

## 工具层（只挂主控）

- **持久终端**：`terminal_open / send / read / signal / close / list`，跨工具调用保留 shell 状态，适合 REPL、调试器。
- **Git 工作树**：`worktree` 工具，创建独立分支与 checkout，不污染主工作区。
- **MCP**
  - `context7`：`resolve-library-id`、`query-docs`，查第三方库文档；
  - `deepwiki`：GitHub 仓库结构/内容/问答；
  - `playwright`：25 个浏览器工具，直接操作页面、抓 DOM、截图。
- **历史检索**：`session_search / session_event_search / session_trace` 等。

## 技能层（7 个新增）

| 技能 | 用途 |
|---|---|
| `handoff` | 交接包，写 `docs/handoff/` |
| `spec-first` | 先规格后动手 |
| `zh-prose` | 中文去 AI 味 |
| `debug-loop` | 复现→最小化→假设→观测→修复→回归 |
| `commit` | 分组、Conventional Commits、不擅自 push |
| `review` | 只读审查，分级 + 文件:行 + 已验证/推测 |
| `research` | 带来源台账的调研，不编引用 |

## 设计依据

BMAD-METHOD 的角色分工、Claude Code subagents 的职责边界、Anthropic Agent Skills 的渐进披露、agency-swarm 的编排/执行分层；领域知识复用本机原有 90 个技能。外部网页检索受本机 DNS 限制，未抓取原文。

## 验证记录

- `plugin_manager install_bundle` 成功，`@local/dsh-workbench@1.0.0`。
- 复制 profile 起诊断实例（`--port 0 --no-open`），启动正常，stderr 只有 context7 的启动横幅，无预设错误；随后上下文证实真实应用也拉起了 MCP 进程。
- MCP 探针：
  - context7：`protocolVersion 2025-06-18`，工具 2 个；
  - playwright：工具 25 个；
  - deepwiki：HTTP 200 + SSE，serverInfo `DeepWiki 2.14.3`。
- 5 个预设声明行均为 `status: schema`（已挂载）。

## 故障修复记录

| 现象 | 根因 | 修法 |
|---|---|---|
| 主控显示"加载失败" | `dsh-plan-mode` 缺必填 `section` | 补规划模式指引文本 |
| （潜在）挂载被拒 | worktree 服务未隔离，被判服务泄漏 | 包进 `isolate: worktrees` 的 group |

## 没装什么，为什么

| 项 | 原因 |
|---|---|
| `agent-team` 系列 | 详见下节；npm 版本 `0.1.5-alpha.2` 与内核 `0.2.1-rc.2` 差距大，且会覆盖现有 subagent 工具 |
| LSP（`dsh-lsp-stdio` / `dsh-tool-lsp`） | npm 只有 `0.0.1-rc.x`，与 0.2.1 内核不匹配 |
| hooks 桥接（`dsh-hooks-claude-code`） | 同上；`~/.agents/hooks.json` 仍是惰性配置 |
| voice / inspector / plugin-market / auto-review | alpha 实验 bundle，稳定性优先不装 |

## 关于 Agent Teams（第 3 项，待定）

**它是什么**：把"主代理临时派子代理"换成"一个常驻团队"。`dsh-experimental-agent-team` 提供团队名册、成员之间直接发消息、共享任务 DAG；`client-ui-agent-team` 在 Web UI 里显示任务板与成员导航。

**好处**

- 成员是持久同伴，不是一次性子任务；适合同时推进 3 条以上长工作流（前端、后端、测试、文档）。
- 共享任务板让分工和进度可见，减少父代理来回转发消息。
- 成员之间可直接通信，协调成本比"全部经过主代理"低。

**代价**

- 版本对不上：npm 上的 team profile 是 `0.1.5-alpha.2`，当前内核 `0.2.1-rc.2`，装进去大概率被版本门槛拦或运行不稳。
- 它会**覆盖**现有 `subagent` / `subagent_control` 等工具，可能破坏工坊现在基于 `agent_preset` 的派单方式。
- 组件多（名册、消息、任务 DAG、UI），出问题更难定位；没有清晰任务边界时容易重复劳动或互相等待。
- 多代理并发更烧 token；成员间消息也是新的提示注入面。

**结论**：现在不装。等它发 rc/stable，或你确有"多条长任务并行 + 需要人盯任务板"的场景，再在**隔离 profile** 里试驾，不动主 profile。当前的 `subagent + workflow` 已覆盖扇出，teams 的增量是"持久同伴 + 共享任务板"，不是单纯并行。

## 回滚

- 移除 bundle：`plugin_manager remove_bundle`，target `@local/dsh-workbench`。
- 默认预设回退：把 profile `cordis.patch.yml` 的 `selectedDefault` 改回 `ptc`。
- 安装前备份：`<USER_HOME>\.dsh\profiles\desktop.bak-workbench-20261021-2139`
- 删除技能：`~/.agents/skills/` 下 7 个新增文件。

## 文件

- `cordis.patch.yml` — 5 个预设声明（唯一事实来源）
- `package.json` — bundle 清单
- `~/.agents/skills/*.md` — 7 个用户级技能
