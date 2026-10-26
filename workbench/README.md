# 工坊（Workbench）— DSH 个性化 Agent 工作台

一个负责调度的主控，加四个各管一段的专职子代理。新会话默认进「工坊 · 主控」，它把活拆开派给合适的子代理，自己收口验收。

## 编制

| 预设 id | 显示名 | 职责 | 工具面 |
|---|---|---|---|
| `wb-main` | 工坊 · 主控 | 路由、拆解、规划、验收、跨会话记忆 | 全部工具 + 子代理 + workflow + 历史检索 + 目标/计划 + 持久终端 + worktree + MCP |
| `wb-builder` | 工坊 · 实现 | 读代码、最小 diff、跑测试 | shell / fs / 搜索 / 后台任务 / 技能 |
| `wb-auditor` | 工坊 · 审计 | 只读安全与质量审计，证据优先 | shell / fs / 搜索 / 技能（无写入纪律） |
| `wb-scribe` | 工坊 · 写作 | 中文长文、报告、文档 | fs / 搜索 / web / 技能（无 shell） |
| `wb-gamedev` | 工坊 · 游戏 | 玩法循环、前端、资源、打包 | shell / fs / 搜索 / 后台任务 / 技能 |

主控的 `subagent` 工具带 `agent_preset` 参数，可选后四个，默认派给 `wb-builder`。

**几个刻意的取舍**

- 审计员不给写权限，逼它只出证据不出补丁。
- 写作者不给 shell，避免"顺手改个文件"。
- 规划模式单独隔离成一组，`planMode` 不是全局单例。
- worktree 服务用 `cordis:group` + `isolate: worktrees: true` 包住——不隔离会被判服务泄漏，整组拒绝挂载。

## 工具层（只挂主控）

- **持久终端**：`terminal_open / send / read / signal / close / list`，跨工具调用保留 shell 状态，适合 REPL、调试器。
- **Git 工作树**：`worktree` 工具，创建独立分支与 checkout，不污染主工作区。
- **MCP**
  - `context7`：`resolve-library-id`、`query-docs`，查第三方库文档；
  - `deepwiki`：GitHub 仓库结构/内容/问答；
  - `playwright`：浏览器工具，直接操作页面、抓 DOM、截图；
  - `qqmusic`：QQ 音乐搜索与详情。
- **历史检索**：`session_search / session_event_search / session_trace` 等。

## 附带技能

工坊依赖若干用户级技能（`~/.agents/skills/` 下的 md 文件），其中这几个是这套工作台常用到的：

| 技能 | 用途 |
|---|---|
| `handoff` | 交接包，写 `docs/handoff/` |
| `spec-first` | 先规格后动手 |
| `zh-prose` | 中文去 AI 味 |
| `debug-loop` | 复现→最小化→假设→观测→修复→回归 |
| `commit` | 分组、Conventional Commits、不擅自 push |
| `review` | 只读审查，分级 + 文件:行 + 已验证/推测 |
| `research` | 带来源台账的调研，不编引用 |

技能不在本仓库内，需要自行准备。

## 安装

```text
plugin_manager install_bundle  target = <仓库绝对路径>/workbench
```

装完重启 DSH，Agent 选择器里应出现「工坊 · 主控」。默认预设可在 profile 的 `agent-preset-registry.selectedDefault` 里设成 `wb-main`。

## 回滚

```text
plugin_manager remove_bundle  target = @local/dsh-workbench
```

再把 profile 的 `selectedDefault` 改回原来的值。

## 设计依据

BMAD-METHOD 的角色分工、Claude Code subagents 的职责边界、Anthropic Agent Skills 的渐进披露、agency-swarm 的编排/执行分层。

## 文件

| 文件 | 作用 |
|---|---|
| `cordis.patch.yml` | 5 个预设声明（唯一事实来源） |
| `package.json` | bundle 清单 |
