# DSH 超级 AI 工具：能加什么 + 开源项目清单

> 调研时间：2026-10-22 23:20–23:50
> 数据来源：npm registry 实测（15 个关键词去重 4307 个 DSH 相关包，其中 1012 个拿到周下载量）；官方仓库结构用 DeepWiki 读；本机 profile / 插件清单实读。
> 口径：包存在性、版本、发布时间、license、peer 区间都是命令输出；「好不好用」是判断，未试驾的会标明。

---

## 0. 一句话结论

DSH 是「一切皆插件」的壳：模型、工具、技能、界面、记忆、自动化六层都能换或加。
你现在只有一个工作台骨架（5 预设 + 3 MCP + 1151 个技能文件），往上还能叠 **6 类能力、4000+ 社区包**，但真正值得装的不到 20 个——剩下 80% 是皮肤、宠物和玩具。

---

## 1. 你现在有什么（实读本机）

| 层 | 现状 |
|---|---|
| 内核 | DSH `0.2.1-rc.2`（2026-10-17） |
| profile `desktop` | 9 个 bundle：`dsh-base`、`dsh-web-app`、`startup-animation`、`wallpaper-engine`、`we-workshop`、`workbench`、`experimental-voice-input-bundle`、`im-connect 1.0.10`、`meow-smooth` |
| 预设 | 5 个：`wb-main / builder / auditor / scribe / gamedev` |
| MCP | context7（2 工具）、deepwiki、playwright（25 工具） |
| 技能 | `~/.dsh/skills` 下 1151 个 md 文件（约 97 个唯一技能，安全向为主） |
| 模型 | `deepseek-flash` + reasoning max，走本地网关 `127.0.0.1:7864/v1`；另配了 minimax provider |
| 个性化 | 壁纸引擎、启动动画、猫猫平滑、frieren 皮肤、语音输入 |

**顺手发现一个问题**：本会话 `web_search` 报 401（DeepSeek API key 无效），联网搜索目前是坏的。下面第 2 层有个直接替代品。

---

## 2. 六层扩展面 × 代表项目

### L1 模型层：换脑、多脑、省钱

| 要什么 | 项目 | 怎么接 | 门槛 |
|---|---|---|---|
| 接 Claude / GPT / Gemini / Ollama / OpenRouter | 官方 `@deepseek-ai/dsh-llm-pi-ai` | 改 `cordis.patch.yml` 的 `providers` 字典，`api: anthropic-messages` 或 `openai-completions` | 无，配置即得 |
| 一键管多家 provider | `dsh-providers-hub`（MIT，10-22） | 装插件，设置页配 | 低 |
| 把 ChatGPT/Codex 订阅额度用上 | `dsh-codex-subscription` | 装插件 + OAuth | 中，要订阅 |
| 修复联网搜索 | `dsh-free-search`（MIT，27 个免费引擎，周下载 1.4 万） | 装插件 | 低，最划算 |
| 自建网关（开源） | LiteLLM、one-api / New API、Ollama、vLLM | 起服务，把 `baseURL` 指过去 | 中 |

> 你现在只用了 deepseek-flash 一个模型。加一个强模型做「难任务 / 子代理」，是提升上限最直接的一步。

### L2 工具层：MCP 生态（已逐个核验）

主表见 [`mcp-verify.md`](mcp-verify.md)（43 个包，32 个可用）。挑重点：

| 用途 | 包 | 状态 |
|---|---|---|
| 浏览器自动化 | `@playwright/mcp` 0.0.83 | 已装 |
| 浏览器深度调试（性能/网络/DOM） | `chrome-devtools-mcp` 1.12.0 | 可用 |
| 文件读写（限定目录） | `@modelcontextprotocol/server-filesystem` 2.0.0 | 可用，要求 Node ≥24 |
| 知识图谱记忆 | `@modelcontextprotocol/server-memory` 2.0.0 | 可用，同上 |
| 分步推理 | `server-sequential-thinking` 2.0.0 | 可用 |
| MCP 调试面板 | `@modelcontextprotocol/inspector` 2.12.0 | 可用，别用 `@next`（比 latest 旧） |
| 搜索 / 抓取 | `tavily-mcp`、`exa-mcp-server`、`firecrawl-mcp` | 可用，要 API key |
| Notion / Sentry / K8s / Git | 对应官方包 | 可用 |
| MCP / 技能图形化管理 | `dsh-mcp-connector`、`dsh-skill-mcp-panel` | 社区插件，未试驾 |

**坑（实测）**：官方 `server-github / postgres / slack / puppeteer` 在 2026-09-17 被 npm **批量标记 deprecated**；`server-fetch`、`server-sqlite` 在 npm 上根本不存在；`mcp-server-git`、`mcp-server-fetch` 是被占位的空安全包。别按老教程装。

### L3 技能层：最便宜的能力扩展

| 要什么 | 项目 | 说明 |
|---|---|---|
| 现成工程技能包 | `dsh-mattpocock-skills-deck`（27 个工程/效率技能，一键装） | 周下载 2458 |
| 可视化技能管理 | `@linxin666/dsh-client-ui-skill-explorer`（BSD-3，2.5 万） | 按来源浏览已加载技能 |
| 自己写 | `~/.dsh/skills/<name>/SKILL.md` | 零依赖，比装插件稳 |

你已有 97 个技能（逆向、渗透、CTF、Office、游戏、写作都在），这一层不是短板。

### L4 界面层：让它变成你的

| 要什么 | 项目 | 周下载 |
|---|---|---|
| 文件树 / 编辑器 / 改动视图 | `dsh-better-sidebar`（MIT） | **49719**（社区第一） |
| 桌面宠物 | `dsh-pet`（MIT）、`dsh-pet-live2d` | 28181 / 1382 |
| 皮肤合集 | `@iasiv5/dsh-skins`、`dsh-dream-skin`（8 套）、`dsh-claude-style`、`dsh-theme-studio` | 2k–7k |
| 终端界面（TUI） | `@tomowang/dsh-tui`（MIT） | 10367 |
| 手机扫码接入 Web GUI | `@linxin666/dsh-remote-web-ui`（Apache-2.0） | 21536 |
| 任务看板 | `@linxin666/dsh-client-ui-task-board`、`dsh-task-ledger` | 21174 / 8875 |
| 市场/预设/更新中心 | `@linxin666/dsh-client-ui-market / preset-center / update` | 1.5 万档 |

你已经装了壁纸 + 启动动画 + 皮肤，这一层属于「锦上添花」，别贪多：每个都是首屏成本。

### L5 记忆层：跨会话记住你

| 方案 | 项目 | 机制 | 许可 |
|---|---|---|---|
| 分层蒸馏 | `dsh-prime-memory` | L0 捕获 → L1 原子记忆 → L2/L3 整合 | MIT |
| 轻量笔记 | `dsh-memento` | 工具侧读写 | Apache-2.0 |
| SQLite + FTS5 + 向量 | `dsh-engram` | 从会话日志沉淀，自动召回 | MIT |
| 大脑式 | `@furongjun1999/dsh-memory`（灵枢） | 长期记忆 + 知识飞轮 | 未核 |
| Obsidian 兼容 | `@jacklika/dsh-memory` | Markdown vault，能直接用 Obsidian 打开 | 未核 |
| 官方 | `@deepseek-ai/dsh-experimental-session-search` | 全局会话检索 | 预发布 |

你现在的 `session_search / session_trace` 只能"查"，不能"自动记住"。要长期陪伴感，这一层值得加一个（建议 prime-memory 或 memento，先隔离试驾）。

### L6 自动化与远程：让它自己动

| 要什么 | 项目 | 说明 |
|---|---|---|
| 生命周期钩子 | 官方 `dsh-hooks-claude-code` / `dsh-hooks-codex` | 兼容 Claude Code hooks.json：SessionStart / UserPromptSubmit / PreToolUse / PostToolUse / Stop / SubagentStart / SubagentStop。退出码 2 = 阻塞操作 |
| 定时任务 | `@michengai/dsh-automation`（Apache-2.0） | 按计划在独立 session 跑编码任务 |
| 第二模型审批 | `dsh-auto-review`（Apache-2.0） | 危险操作先给另一个模型审 |
| 后台常驻 | `@chenkai114/dsh-daemon` | 把 dsh web 注册成服务 |
| IM 远程 | 你已装 `im-connect`；官方腾讯 `@tencent-connect/dsh-qqbot`（MIT） | 手机发消息驱动电脑 |
| 手机端 | `dsh-mobile`（Apache-2.0）、`remote-web-ui` | 独立移动界面 / 扫码配对 |

### L7 感官层：看图、说话、动鼠标

| 要什么 | 项目 | 说明 |
|---|---|---|
| 生图 | `dsh-image-gen`（Apache-2.0，接 Gemini） | 周下载 6643 |
| 看图（文本模型补视觉） | `@linxin666/dsh-tool-describe-image`、`dsh-image-pathify`、`@liustack/modlens` | 后两个把图片转描述/路径再喂模型 |
| 语音输入 | 官方 `experimental-voice-input-bundle`（**你已装**）；`@goodandready/dsh-voice` | — |
| 朗读回复 | `@goodandready/dsh-tts` | 周下载 726 |
| 本地转写 | `@try-works/dsh-stt`（本地 Whisper） | 不上传 |
| 桌面操作 | `@logictan/dsh-desktop-agent`（MIT）、官方 `experimental-computer-use-*` | 视觉决策循环驱动鼠标键盘 |

---

## 3. 社区生态真实分布（实测）

- 搜索命中去重 **4307 个包**，拿到周下载量的 1012 个。
- 官方 `@deepseek-ai/*` 40+ 个包周下载 20–47 万——因为是所有插件的公共依赖，不代表用户量。
- 社区真热点：`dsh-better-sidebar` 5.0 万 > `dsh-pet` 2.8 万 > `dsh-cost-meter` 2.6 万 > `@linxin666/*` 全家桶 1.5–2.5 万。
- 中文包很多（宠物、酒馆、小说、PPT、办公），说明生态在国内已经跑起来了。
- 许可证总体健康：抽样 37 个里 MIT / Apache-2.0 / BSD 占绝大多数；**例外：`dsh-tavern` 是 PolyForm-Noncommercial（禁止商用）**。

---

## 4. 三档装配方案

### A. 保守增强（约 1 小时，风险低）
1. `dsh-free-search` —— 修好联网搜索
2. `dsh-better-sidebar` —— 文件树 + 编辑器 + diff，日常最常用
3. `dsh-cost-meter` —— 看清每天花多少 token
4. `dsh-office-tools` —— Word/Excel/PPT 直接读写
5. `dsh-mcp-connector` —— 图形化管理 MCP

### B. 全能工作台（半天，含试驾）
A 全部 + 记忆（`dsh-prime-memory`）+ 看板（`task-board`）+ 语音（`dsh-tts`）+ 生图（`dsh-image-gen`）+ SSH（`@linxin666/dsh-ssh`）

### C. 生活助理（承接你现有的 IM 和 SillyTavern）
B 部分 + `dsh-tavern`（角色扮演，能接你本机 SillyTavern 的卡）+ `dsh-mobile` + `@michengai/dsh-automation`（定时任务）

---

## 5. 别装的

| 项 | 原因 |
|---|---|
| `@nanmicoder/dsh-agent-teams` / 官方 agent-team | peer 钉死 `0.2.1-rc.2` 附近，且会**覆盖现有 subagent 工具**，破坏工坊派单方式 |
| 官方 4 个 deprecated MCP server | 2026-09-17 批量下架，不会再有修复 |
| `mcp-server-git` / `mcp-server-fetch` / `pandoc@0.2.0` / `openai-whisper@1.0.2` | 占位包或 2012/2023 年的壳，不是本体 |
| 皮肤一次装 5 套以上 | 每个都进首屏，P4 机器直接卡 |
| `dsh-tavern` 用于商业项目 | 许可证禁止商用 |

---

## 6. 下一步（我建议的顺序）

1. **先修搜索**：装 `dsh-free-search`，验证「搜一个今天的热点新闻」能出结果。
2. **再补眼睛**：装 `dsh-better-sidebar` + `dsh-cost-meter`，确认启动不报错、首屏不卡。
3. **最后补记忆**：`dsh-prime-memory` 隔离 profile 试驾 3 天，看是否真的减少重复交代。

三个都能在 1 小时内跑完，失败随时卸。要不要我现在按 1→2 的顺序直接装？

---

## 附：通用开源项目（不依赖 DSH 生态，可包成 skill 或 MCP）

| 领域 | 项目 |
|---|---|
| 模型服务 | Ollama、vLLM、llama.cpp、LiteLLM、one-api / New API |
| 搜索 | SearXNG（自建）、Tavily / Exa / Firecrawl（API） |
| 浏览器 | Playwright、Stagehand、browser-use |
| 记忆 / RAG | Mem0、Letta、Qdrant、Chroma、Milvus |
| 语音 | faster-whisper、CosyVoice、GPT-SoVITS、ChatTTS |
| 视觉 | Qwen-VL、Florence-2、PaddleOCR、ComfyUI |
| 办公 | LibreOffice、Pandoc、markitdown、unstructured |
| 自动化 | n8n、Dify、Flowise |
| 桌面控制 | UI-TARS、Open Interpreter |
| IM | NapCatQQ、Lagrange.Core、Wechaty |
| 媒体 | yt-dlp、ffmpeg、Jellyfin |

数据文件都在本目录：`mcp-verify.md`（MCP 核验表）、`category-top.md`（分类下载量）、`peer-check.tsv`（peer 兼容性）。
