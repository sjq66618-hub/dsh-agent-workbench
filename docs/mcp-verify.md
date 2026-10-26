> 核验时间 **2026-10-22 23:24 (+08:00)** ｜ **命令**：`node docs\research\_scan.mjs` → 逐包 `GET https://registry.npmjs.org/<pkg>`（读 `dist-tags.latest`、`time`、`versions[latest].{deprecated,engines,peerDependencies,peerDependenciesMeta,bin,repository}`）；抽样 4 个包用 `npm view <pkg> version dist-tags.latest time.modified --json` 交叉校验，结果一致。

## 0. 口径（先看这个，避免误读）

- 数据源只有 npm registry（`registry.npmjs.org`）。**没有**读 GitHub、README、release notes：凡是 registry 里没有的字段，本文不写。
- 「最后发布」= 该包 latest 版本的 `time[latest]`，UTC，只显示到日。
- 状态判定规则（机械执行，可复核）：
  - **不存在**：registry 返回 404，或 latest 版本号形如 `0.0.1-security`（npm 安全占位包）。
  - **版本旧**：latest 被标记 `deprecated`，或 latest 发布距核验时间 **超过 365 天**。
  - **可用**：存在、非占位、非 deprecated、latest 在 365 天内发布。
  - **未核实**：无法用 registry 判定（本次主表 0 条）。
- 「是否需要外部 key」列**不是 registry 字段**，是按包描述与常见部署方式做的人工判断，仅作选型参考；具体环境变量名以各包 README 为准（本次未读）。
- 核验环境：`node -v` = **v24.12.0**，`npm -v` = **11.6.2**，PowerShell 5.1（5.1.26100）。engines 兼容性结论基于这个 Node。

## 1. 主表（43 行）

| 包名 | 最新版本 | 最后发布(UTC) | 类型 | 用途一句话 | 需外部 key | 状态 |
|---|---|---|---|---|---|---|
| `@modelcontextprotocol/server-filesystem` | 2.0.0 | 2026-10-19 | MCP server | 按允许目录读写本地文件 | 否 | 可用⁷ |
| `@modelcontextprotocol/server-github` | 2025.4.8 | 2025-04-08 | MCP server | GitHub API：issue / PR / 仓库操作 | 需 GitHub token | 版本旧¹ |
| `@modelcontextprotocol/server-memory` | 2.0.0 | 2026-10-19 | MCP server | 知识图谱式跨会话记忆 | 否 | 可用⁷ |
| `@modelcontextprotocol/server-sequential-thinking` | 2.0.0 | 2026-10-19 | MCP server | 分步思考 / 问题分解推理工具 | 否 | 可用⁷ |
| `@modelcontextprotocol/server-fetch` | — | — | — | 官方未在 npm 发布（registry 404） | — | 不存在 |
| `@modelcontextprotocol/server-sqlite` | — | — | — | 官方未在 npm 发布（registry 404） | — | 不存在 |
| `@modelcontextprotocol/server-postgres` | 0.6.2 | 2024-12-04 | MCP server | PostgreSQL 只读查询 | 需数据库连接串 | 版本旧¹ |
| `@modelcontextprotocol/server-slack` | 2025.4.25 | 2025-04-25 | MCP server | Slack 频道消息与历史读取 | 需 Slack token | 版本旧¹ |
| `@modelcontextprotocol/server-puppeteer` | 2025.5.12 | 2025-05-12 | MCP server | Puppeteer 浏览器自动化 | 否 | 版本旧¹ |
| `@modelcontextprotocol/server-everything` | 2.0.0 | 2026-10-19 | MCP server | MCP 协议全特性演示 / 测试 server | 否 | 可用⁷ |
| `@modelcontextprotocol/inspector` | 2.12.0 | 2026-10-21 | CLI | MCP server 调试面板（连 stdio/HTTP 手测工具） | 否 | 可用⁷ |
| `@playwright/mcp` | 0.0.83 | 2026-09-28 | MCP server | Playwright 浏览器工具（Microsoft 官方） | 否 | 可用 |
| `chrome-devtools-mcp` | 1.12.0 | 2026-10-22 | MCP server | Chrome DevTools 协议：性能 / 网络 / DOM 调试 | 否 | 可用⁷ |
| `@upstash/context7-mcp` | 4.4.4 | 2026-10-19 | MCP server | 按库名拉取最新文档片段（Context7） | 需 Context7 key | 可用 |
| `tavily-mcp` | 0.2.22 | 2026-08-05 | MCP server | Tavily 搜索与页面抽取 | 需 TAVILY_API_KEY | 可用 |
| `exa-mcp-server` | 3.4.2 | 2026-10-06 | MCP server | Exa 语义搜索 / 内容抓取 / 多步研究 | 需 EXA_API_KEY | 可用 |
| `firecrawl-mcp` | 3.33.4 | 2026-10-20 | MCP server | 网页 search / scrape / crawl / map（Firecrawl） | 需 FIRECRAWL_API_KEY | 可用⁷ |
| `mcp-server-git` | 0.0.1-security | 2026-08-20 | — | 名字被 npm 安全占位包占用，不是 MCP server | — | 不存在² |
| `@notionhq/notion-mcp-server` | 2.5.2 | 2026-09-20 | MCP server | Notion 页面 / 数据库读写（官方） | 需 Notion integration token | 可用 |
| `@sentry/mcp-server` | 0.42.0 | 2026-09-25 | MCP server | Sentry issue / 事件查询（官方，FSL-1.1-ALv2） | 需 Sentry token | 可用⁷ |
| `mcp-server-kubernetes` | 4.1.9 | 2026-10-02 | MCP server | 经 kubectl 操作 Kubernetes 集群 | 需 kubeconfig | 可用 |
| `@cyanheads/git-mcp-server` | 2.15.3 | 2026-08-24 | MCP server | Git 仓库操作（STDIO / Streamable HTTP） | 否 | 可用 |
| `@executeautomation/playwright-mcp-server` | 1.0.12 | 2025-12-12 | MCP server | Playwright 浏览器自动化（社区实现） | 否 | 可用 |
| `@deepseek-ai/dsh-experimental-session-search` | 0.2.1-alpha.2 | 2026-10-09 | 库（DSH 插件） | 检索 / 读取当前 workspace 的历史会话 | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-experimental-browser-use-playwright-mcp` | 0.1.6-alpha.1 | 2026-09-15 | 库（DSH 插件） | 按会话注入 Chromium 工具（经 @playwright/mcp） | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-experimental-computer-use-cua-driver-mcp` | 0.1.6-alpha.1 | 2026-09-15 | 库（DSH 插件） | 经外部 Cua Driver MCP 可执行文件做桌面操作 | 需先装 Cua Driver | 可用³⁶ |
| `@deepseek-ai/dsh-experimental-api-speech-to-text` | 0.1.7-alpha.1 | 2026-09-22 | 库（DSH 插件） | 浏览器端带鉴权的语音转写 | 视上游 STT 配置 | 可用³⁶ |
| `@deepseek-ai/dsh-experimental-plugin-market-bundle` | 0.2.1-alpha.4 | 2026-10-15 | 库（DSH 插件） | 插件市场 Discover 页：浏览 / 安装 bundle | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-hooks-claude-code` | 0.0.1-rc.5 | 2026-08-12 | 库（DSH 插件） | 在 DSH 拦截点执行 Claude Code hooks.json | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-hooks-codex` | 0.0.1-rc.1 | 2026-08-10 | 库（DSH 插件） | 在 DSH 拦截点执行 Codex hooks.json | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-tool-lsp` | 0.0.1-rc.1 | 2026-08-10 | 库（DSH 插件） | 只读 LSP 工具（定义 / 引用 / 实现 / hover） | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-experimental-inspector` | 0.1.6-alpha.1 | 2026-09-15 | 库（DSH 插件） | 跨 realm CDP 调试 Hub（Host + Client） | 否 | 可用³⁶ |
| `@deepseek-ai/dsh-session-persistence-sqlite` | 0.0.1-rc.1 | 2026-08-10 | 库（DSH 插件） | SQLite 会话持久化后端 | 否 | 可用³⁶ |
| `baiduwangpan-cli` | 1.6.0 | 2026-08-12 | CLI | 百度网盘全盘读写（bin: bdp） | 需网盘登录态 | 可用 |
| `@sansenjian/qq-music-api` | 2.6.0 | 2026-08-27 | CLI | QQ 音乐 API 的 koa2 实现（bin: qq-music-api） | 部分接口需登录态 | 可用 |
| `@yakult-green-tea/qq-music-api` | 3.3.5 | 2026-10-21 | 库 | QQ 音乐 API 库：扫码登录 / 音乐库 / 播放链接 | 部分接口需登录态 | 可用⁵ |
| `youtube-dl-exec` | 3.1.17 | 2026-10-03 | 库 | 包装 youtube-dl / yt-dlp 的 Node 下载器 | 否（需 yt-dlp 二进制） | 可用 |
| `openai-whisper` | 1.0.2 | 2023-02-15 | 非 npm | 语音转写：官方是 Python 包；npm 同名包与此无关 | 否 | 版本旧⁴ |
| `ffmpeg-static` | 5.3.0 | 2025-11-14 | 库 | 提供 macOS / Linux / Windows 的 ffmpeg 静态二进制 | 否 | 可用 |
| `pandoc` | 0.2.0 | 2012-02-18 | 非 npm | 文档转换：本体为独立二进制；npm 同名包是 2012 年 wrapper | 否 | 版本旧⁴ |
| `markmap-cli` | 0.18.12 | 2025-06-12 | CLI | Markdown 转思维导图（bin: markmap） | 否 | 版本旧 |
| `mermaid-cli` | 0.2.4 | 2014-12-22 | CLI | 旧版 mermaid 渲染 CLI，已被 npm 标记弃用 | 否 | 版本旧¹⁴ |
| `@mermaid-js/mermaid-cli` | 12.0.0 | 2026-09-24 | CLI | mermaid 渲染 PNG / SVG（bin: mmdc） | 否 | 可用⁷ |

标记说明：
- ¹ 最新版在 registry 被标记 `deprecated`（原始文案见 §3）
- ² 最新版是 npm 的 security holding 占位包（`0.0.1-security`），不是目标软件
- ³ latest 落在 alpha / rc 预发布通道
- ⁴ npm 上存在同名包，但**不是**该工具本体
- ⁵ 包内无 `bin` 字段，不能直接当命令行用
- ⁶ `peerDependencies` 绑定 `@deepseek-ai/*` 预发布版本，必须与 DSH 本体版本配套
- ⁷ `engines.node` 下限偏高（≥22 或 ≥24），旧 Node 装不上或跑不起来

## 2. 不存在或查不到（3 条）

| 包名 | registry 事实 | 结论 |
|---|---|---|
| `@modelcontextprotocol/server-fetch` | HTTP 404；`npm view @modelcontextprotocol/server-fetch version` 返回 `E404` | 该名字在 registry 上当前没有可用包（404 本身无法区分"从未发布"与"已被撤下"，此处不做推断） |
| `@modelcontextprotocol/server-sqlite` | HTTP 404；`npm view` 同样 `E404` | 同上 |
| `mcp-server-git` | 存在，但唯一版本 `0.0.1-security`（2026-08-20 建包），description = `security holding package`，无 bin、无 repository、434 字节 | npm 安全占位包，**不可当 MCP server 用**；不存在可用版本 |

顺带核实到、可用于替代的名字（不在原清单内，仅供选型，未验证功能）：

| 包名 | 事实 | 备注 |
|---|---|---|
| `mcp-server-fetch` | `0.0.1-security`，description `security holding package`，无 maintainer | 同 mcp-server-git，也是占位包 |
| `mcp-server-sqlite` | `0.0.2`，2025-09-28，bin `mcp-server-sqlite`，engines `node>=18`，repo `github.com/madnh/mcp-server-sqlite`，maintainer `madnh` | 第三方社区实现，**非官方** |
| `@modelcontextprotocol/sdk` | `1.32.1`，2026-10-05，engines `node>=18` | 自己写 server 时的官方 SDK |

结论：清单里 `server-fetch` / `server-sqlite` 这两个"官方包"在 npm 上没有可用实现。它们是否以 Python（PyPI）/uvx 等别的形式分发，本次**未核实**（只有 npm registry 访问，不下结论）。要 fetch/sqlite 能力，能落地的只有 `mcp-server-sqlite`（第三方）或自写 server。

## 3. 值得注意（只列 registry 元数据里真实存在的字段）

### 3.1 4 个官方 `@modelcontextprotocol/server-*` 包被 npm 标记 deprecated（外加 1 个 mermaid-cli）

- `@modelcontextprotocol/server-github@2025.4.8`（最后发布 2025-04-08，deprecated 字段改写于 2026-09-17 12:02:03 UTC）："Package no longer supported. Contact Support at https://www.npmjs.com/support for more info."
- `@modelcontextprotocol/server-postgres@0.6.2`（最后发布 2024-12-04，deprecated 字段改写于 2026-09-17 12:02:07 UTC）："Package no longer supported. Contact Support at https://www.npmjs.com/support for more info."
- `@modelcontextprotocol/server-slack@2025.4.25`（最后发布 2025-04-25，deprecated 字段改写于 2026-09-17 12:02:11 UTC）："Package no longer supported. Contact Support at https://www.npmjs.com/support for more info."
- `@modelcontextprotocol/server-puppeteer@2025.5.12`（最后发布 2025-05-12，deprecated 字段改写于 2026-09-17 12:02:08 UTC）："Package no longer supported. Contact Support at https://www.npmjs.com/support for more info."
- `mermaid-cli@0.2.4`（最后发布 2014-12-22，deprecated 字段改写于 2022-06-19 17:55:25 UTC）："mermaid-cli is now part of mermaid core. please > contextify@0.1.11 install /usr/local/lib/node_modules/mermaid/node_modules/dagre-d3/node_modules/d3/node_modules/jsdom/node_modules/contextify > node-gyp rebuild CXX(targ …（原文过长，此处截断）"

四条官方包的 deprecated 文案**逐字相同**（npm 批量标注的默认措辞），`time.modified` 都落在 **2026-09-17T12:02 UTC** 前后 8 秒内 —— 是同一次批量下架操作，不是各自独立停更。`mermaid-cli` 那条是 2022 年另一次操作，字段内容异常（见 §3.5）。实际影响：能装能跑最后一个版本，但 npm 会打 deprecation warning，且不会再有修复。

### 3.2 还活着的 4 个官方包统一到了 2.0.0，并抬到 `node >= 24`

- `server-filesystem` / `server-memory` / `server-sequential-thinking` / `server-everything` 最新版本**全部是 2.0.0**，发布时间集中在 2026-10-19 06:49–06:51 UTC，四个包相隔不到 90 秒。
- 四个包的 `engines` 都是 `{"node":">=24"}`。v24.12.0 满足；Node 20/22 会直接被 engines 拦。
- license 字段是 `SEE LICENSE IN LICENSE`（不是 SPDX 标识），仓库统一指向 `modelcontextprotocol/servers`。

### 3.3 `@modelcontextprotocol/inspector` 的 dist-tags 有点绕

- latest = `2.12.0`（2026-10-21），但 `next` 指向 `2.0.0-rc.3`，另外还留了 `v1-latest = 1.0.3`。
- 也就是说 `next` 比 `latest` 旧，别用 `@next` 装。
- 一个包里塞了 3 个 bin：`mcpdo`、`inspector`、`mcp-inspector`；engines `node>=22.19.0`；解包 6.17 MB / 27 文件。

### 3.4 `chrome-devtools-mcp` 的 peer 依赖是 optional

- `1.12.0` 的 `peerDependencies`：`@toon-format/toon@^4.1.0`、`@blackwell-systems/gcf@^2.2.2`。
- 但 `peerDependenciesMeta` 对两者都是 `{"optional":true}` —— 不装这两个不会阻塞，也不会报 missing peer。
- `engines.node` = `^20.19.0 || ^22.12.0 || >=23`（不是简单 `>=`）；解包 14.28 MB / 378 文件，是本次扫描里体积第二大的包（最大的是 @sentry/mcp-server）。

### 3.5 `@mermaid-js/mermaid-cli` 的 peer 不是 optional

- `12.0.0`，`engines.node >= 22.13.0`，`peerDependencies: {puppeteer: ^25.0.0}`，且 **没有** `peerDependenciesMeta` 豁免 —— 装的时候 puppeteer 版本对不上会报错。
- 老包 `mermaid-cli@0.2.4`（2014 年）的 deprecated 字段是一段**误粘进去的终端构建日志**（内含 `contextify` / `node-gyp rebuild` 记录），不是有效说明；只能确认它"已弃用"。

### 3.6 DSH 的 10 个包全部公开可查，但都还是预发布

- `@deepseek-ai/dsh-experimental-session-search` latest=`0.2.1-alpha.2`，最新发布 2026-10-09；dist-tags={"latest":"0.2.1-alpha.2","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-experimental-browser-use-playwright-mcp` latest=`0.1.6-alpha.1`，最新发布 2026-09-15；dist-tags={"latest":"0.1.6-alpha.1","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-experimental-computer-use-cua-driver-mcp` latest=`0.1.6-alpha.1`，最新发布 2026-09-15；dist-tags={"latest":"0.1.6-alpha.1","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-experimental-api-speech-to-text` latest=`0.1.7-alpha.1`，最新发布 2026-09-22；dist-tags={"latest":"0.1.7-alpha.1","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-experimental-plugin-market-bundle` latest=`0.2.1-alpha.4`，最新发布 2026-10-15；dist-tags={"latest":"0.2.1-alpha.4","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-hooks-claude-code` latest=`0.0.1-rc.5`，最新发布 2026-08-12；dist-tags={"latest":"0.0.1-rc.5","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-hooks-codex` latest=`0.0.1-rc.1`，最新发布 2026-08-10；dist-tags={"latest":"0.0.1-rc.1","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-tool-lsp` latest=`0.0.1-rc.1`，最新发布 2026-08-10；dist-tags={"latest":"0.0.1-rc.1","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-experimental-inspector` latest=`0.1.6-alpha.1`，最新发布 2026-09-15；dist-tags={"latest":"0.1.6-alpha.1","alpha":"0.2.1-alpha.5","next":"0.2.1-rc.2"}
- `@deepseek-ai/dsh-session-persistence-sqlite` latest=`0.0.1-rc.1`，最新发布 2026-08-10；dist-tags={"latest":"0.0.1-rc.1","next":"0.1.1-rc.2","alpha":"0.1.2-alpha.2"}

- 9 个包同时挂着 `alpha`（`0.2.1-alpha.5`）和 `next`（`0.2.1-rc.2`）两个 dist-tag，**latest 落后于 alpha/next**：想跟进最新代码得显式指定 tag，别以为 `latest` 就是最新。
- DSH 本体 `@deepseek-ai/dsh` latest = `0.2.1-rc.2`（2026-10-17），`@deepseek-ai/cordis` latest = `4.0.5`（2026-10-16）—— 这两个是下面那堆插件的运行时底座。
- 全部 10 个包都是 `main: lib/index.js` + `types: lib/types/index.d.ts`，**没有一个带 bin**：它们只能作为 DSH 插件挂载，不能当独立进程/CLI 起。

### 3.7 DSH 插件的 peer 依赖把版本焊死了

- `@deepseek-ai/dsh-experimental-session-search` peer：@deepseek-ai/cordis@~4.0.5-alpha.1
- `@deepseek-ai/dsh-experimental-browser-use-playwright-mcp` peer：@deepseek-ai/cordis@^4.0.2、@deepseek-ai/dsh-agent@^0.1.6-alpha.1、@deepseek-ai/dsh-tools@^0.1.6-alpha.1、@deepseek-ai/dsh-browser-use@^0.1.6-alpha.1、@deepseek-ai/dsh-system-prompt@^0.1.6-alpha.1
- `@deepseek-ai/dsh-experimental-computer-use-cua-driver-mcp` peer：@deepseek-ai/cordis@^4.0.2、@deepseek-ai/dsh-computer-use@^0.1.6-alpha.1
- `@deepseek-ai/dsh-experimental-api-speech-to-text` peer：@deepseek-ai/cordis@^4.0.3、@deepseek-ai/dsh-typert-protocol@^0.1.7-alpha.1、@deepseek-ai/dsh-experimental-speech-to-text@^0.1.7-alpha.1
- `@deepseek-ai/dsh-experimental-plugin-market-bundle` peer：@deepseek-ai/cordis@~4.0.5-alpha.2
- `@deepseek-ai/dsh-hooks-claude-code` peer：@deepseek-ai/cordis@^4.0.1-rc.4、@deepseek-ai/dsh-llm@^0.0.1-rc.5、@deepseek-ai/dsh-agent@^0.0.1-rc.5、@deepseek-ai/dsh-tools@^0.0.1-rc.5、@deepseek-ai/dsh-session@^0.0.1-rc.5、@deepseek-ai/dsh-subagent@^0.0.1-rc.5、@deepseek-ai/dsh-invariants@^0.0.1-rc.5、@deepseek-ai/dsh-hook-protocol@^0.0.1-rc.5、@deepseek-ai/dsh-session-persistence@^0.0.1-rc.5
- `@deepseek-ai/dsh-hooks-codex` peer：@deepseek-ai/cordis@^4.0.1-rc.1、@deepseek-ai/dsh-llm@^0.0.1-rc.1、@deepseek-ai/dsh-agent@^0.0.1-rc.1、@deepseek-ai/dsh-tools@^0.0.1-rc.1、@deepseek-ai/dsh-session@^0.0.1-rc.1、@deepseek-ai/dsh-invariants@^0.0.1-rc.1、@deepseek-ai/dsh-hook-protocol@^0.0.1-rc.1、@deepseek-ai/dsh-session-persistence@^0.0.1-rc.1
- `@deepseek-ai/dsh-tool-lsp` peer：@deepseek-ai/cordis@^4.0.1-rc.1、@deepseek-ai/dsh-llm@^0.0.1-rc.1、@deepseek-ai/dsh-lsp@^0.0.1-rc.1、@deepseek-ai/dsh-tools@^0.0.1-rc.1、@deepseek-ai/dsh-timeout@^0.0.1-rc.1、@deepseek-ai/dsh-invariants@^0.0.1-rc.1、@deepseek-ai/dsh-system-prompt@^0.0.1-rc.1
- `@deepseek-ai/dsh-experimental-inspector` peer：@deepseek-ai/cordis@^4.0.2、@deepseek-ai/dsh-client-modules@^0.1.6-alpha.1、@deepseek-ai/dsh-host-webserver@^0.1.6-alpha.1、@deepseek-ai/cordis-plugin-loader@^1.0.3
- `@deepseek-ai/dsh-session-persistence-sqlite` peer：@deepseek-ai/cordis@^4.0.1-rc.1、@deepseek-ai/dsh-session@^0.0.1-rc.1、@deepseek-ai/dsh-invariants@^0.0.1-rc.1、@deepseek-ai/dsh-session-persistence@^0.0.1-rc.1

三个要点：
1. peer 全是 `@deepseek-ai/*` 预发布区间（`^0.0.1-rc.1`、`^0.1.6-alpha.1`、`~4.0.5-alpha.1` 之类），与 registry 上的稳定版 `cordis@4.0.5` 并存 —— 选版本时必须成组升级，不能混。
2. `dsh-hooks-claude-code` 一次绑定 **9 个** `@deepseek-ai/*` peer，是这批里耦合最重的。
3. `dsh-session-persistence-sqlite` 的 `time.modified`（2026-08-30）明显晚于 latest 发布（2026-08-10），说明有新 `next`/`alpha` 版本但 latest tag 没动。

### 3.8 两个名字很坑的 npm 包（不是你要的工具）

- `pandoc@0.2.0`：最后发布 **2012-02-18**，description `A wrapper around the pandoc tool`，repo `sbisbee/node-pandoc`，`engines.node >= 0.4.0`。pandoc 本体是独立二进制（**非 npm**）；距核验时间 14 年多没再发版，别装。
- `openai-whisper@1.0.2`：2023-02-15，解包 **2.1 KB / 3 个文件**，repo `amosayomide05/openai-whisper`。与 OpenAI 官方 whisper 无关（官方是 Python 包，**非 npm**）；装了等于装一个壳。

### 3.9 其他实测字段

- `@sansenjian/qq-music-api` 的 `engines` 里同时约束了 **npm**：`{"node":"^20.17.0 || >=22.9.0","npm":"^11.0.0"}`，npm 低于 11 会被卡；本机 11.6.2 满足。
- `@yakult-green-tea/qq-music-api` **没有 bin**（`main: dist/src/app.js`），是库/服务而非 CLI，虽然描述里写"可以独立部署"。同名生态里 `@sansenjian/qq-music-api` 才带 bin。
- `@sentry/mcp-server` 的 license 是 **`FSL-1.1-ALv2`**（非 MIT/Apache），自托管前先看许可；解包 15.18 MB / 160 文件，本次扫描最大。
- `@cyanheads/git-mcp-server` 的 engines 同时写了 `bun>=1.2.0` 和 `node>=20.0.0`，但只有 `dist/index.js` 一个入口。
- `@playwright/mcp` 有 **436 个已发布版本**，`dist-tags.next` 是 `0.0.79-alpha-1787869812000`（带时间戳的 alpha，低于 latest 0.0.83）。
- `@executeautomation/playwright-mcp-server` 最后发布 2025-12-12，距核验时间约 10 个月 —— 未触发 365 天阈值，所以判"可用"，但已落后于同类的发版节奏（此判断属观察，非 registry 结论）。

## 4. 复核方式（自己重跑）

```powershell
# 单包
npm view @modelcontextprotocol/server-filesystem version dist-tags.latest time.modified --json
# 全量（本次用的脚本，只读，不装包）
node docs\research\_scan.mjs
```

## 5. 本次未做的事 / 假设

- 未安装任何包，未跑 `npm install`，未改任何 DSH 配置。
- 未读各包 README / tarball 内容 → 「需外部 key」列与「用途」列是**人工判断**，不是命令输出。
- 未验证 `server-fetch`、`server-sqlite` 是否以 Python（PyPI）包形式存在 —— 无 PyPI 访问，标 **未核实**。
- 未验证 `mcp-server-sqlite`（第三方）的功能完整性，只确认名字与元数据存在。
- 未评估安全/供应链风险（只做存在性与版本核实）。

---

**统计**：主表 43 行 ｜ 可用 32 ｜ 版本旧 8 ｜ 不存在 3 ｜ 未核实 0
