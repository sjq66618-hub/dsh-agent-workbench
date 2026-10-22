# DSH 工坊（Workbench）

给 [DeepSeek Harness](https://github.com/deepseek-ai) 用的一套**个人 Agent 工作台**：一个负责调度验收的主控，加四个各管一段的专职子代理，再挂几个自研插件。

不是给所有人用的通用框架，是一个真在日常干活的工作台。装好之后新会话默认进「工坊 · 主控」，它把活拆开派给合适的子代理，自己收口验收。

> 兼容基线：DSH `0.2.1-rc.2`（2026-10）。内核还在 rc 阶段，插件名与配置结构可能变，升级前先看 [CHANGELOG](docs/CHANGELOG.md)。

---

## 目录

| 路径 | 内容 |
|---|---|
| [`workbench/`](workbench/) | **核心**：5 个预设（主控 + 4 子代理）的 `cordis.patch.yml` 与装包清单 |
| [`we-workshop/`](we-workshop/) | 插件：在 DSH 里搜 Steam 创意工坊壁纸，点订阅直接进 Wallpaper Engine |
| [`media-plugins/media-hub/`](media-plugins/media-hub/) | 插件：QQ 音乐 + 百度网盘两个原生侧栏面板（P0 骨架） |
| [`codex-bridge/`](codex-bridge/) | MCP 桥：把本机 `codex exec` 暴露成 `mcp__codex__codex_exec`，当第二实现用 |
| [`docs/`](docs/) | 生态调研、插件计划、凭据准备、变更记录 |
| [`AGENTS.md`](AGENTS.md) | 仓库级 Agent 约定，DSH 进目录时自动加载 |

---

## 编制

| 预设 | 显示名 | 职责 | 工具面 |
|---|---|---|---|
| `wb-main` | 工坊 · 主控 | 路由、拆解、规划、验收、跨会话记忆 | 全部工具 + 子代理 + workflow + 历史检索 + 持久终端 + worktree + MCP |
| `wb-builder` | 工坊 · 实现 | 读代码、最小 diff、跑测试 | shell / fs / 搜索 / 后台任务 / 技能 |
| `wb-auditor` | 工坊 · 审计 | 只读安全与质量审计，证据优先 | shell / fs / 搜索 / 技能（无写入纪律） |
| `wb-scribe` | 工坊 · 写作 | 中文长文、报告、文档 | fs / 搜索 / web / 技能（无 shell） |
| `wb-gamedev` | 工坊 · 游戏 | 玩法循环、前端、资源、打包 | shell / fs / 搜索 / 后台任务 / 技能 |

主控的 `subagent` 带 `agent_preset` 参数，可选后四个，默认派给 `wb-builder`。

**几个刻意的取舍**

- 审计员不给写权限，逼它只出证据不出补丁。
- 写作者不给 shell，避免"顺手改个文件"。
- 规划模式单独隔离成一组，`planMode` 不是全局单例。
- worktree 服务用 `isolate: worktrees` 包住，否则会被判定服务泄漏、整组拒绝挂载——这个坑 [README](workbench/README.md) 里有记录。

---

## 快速开始

前置：本机装好 DSH，Node ≥ 22，`node` 在 PATH 里。

**1. 克隆**

```bash
git clone https://github.com/<your-name>/dsh-workshop.git
cd dsh-workshop
```

**2. 改成本机路径**

`workbench/cordis.patch.yml` 里有两处路径要按你的实际位置调整：

```yaml
- id: mcp-codex
  config:
    command: node
    args:
      - './codex-bridge/mcp-codex-server.mjs'   # 改成克隆下来的绝对路径
```

相对路径在 MCP 子进程里不一定能解析，起不来就换绝对路径。

**3. 装预设包**

DSH 会话里：

```text
plugin_manager install_bundle  target = <仓库绝对路径>/workbench
```

装完确认 `@local/dsh-workbench@1.0.0` 出现在 bundle 列表里，重启 DSH，Agent 选择器里能看到「工坊 · 主控」。

**4. 装插件（可选）**

```text
plugin_manager install_bundle  target = <仓库绝对路径>/we-workshop
plugin_manager install_bundle  target = <仓库绝对路径>/media-plugins/media-hub
```

两个插件都要重启才生效。

**5. 回滚**

```text
plugin_manager remove_bundle  target = @local/dsh-workbench
```

再把 profile `cordis.patch.yml` 里的 `agent-preset-registry.selectedDefault` 改回默认值。

---

## 插件说明

### we-workshop · 壁纸工坊

在 DSH 里搜 Wallpaper Engine 创意工坊（Steam AppID 431960），点订阅直接唤起 Steam。

- 复用 Steam 网页接口，不需要 API key。
- 代理候选按环境变量 `DSH_WE_WORKSHOP_PROXY` → 常见本地端口顺序探测。
- 本地壁纸目录用 `DSH_WE_WORKSHOP_DIR` 指定，默认按 Steam 库常规位置猜。

### media-hub · 媒体中心

QQ 音乐 + 百度网盘两个独立侧栏面板，P0 只做了集成骨架：路由鉴权、只读状态工具、面板入口、卸载清理。**没有**实现真实账号登录与业务功能，界面上标注的「未登录」就是字面意思。

设计上刻意不嵌 iframe、不改宿主全局样式、不动正式 profile。

### codex-bridge · 第二实现

把 `@openai/codex` CLI 包成 stdio MCP server，两个工具、单并发队列、零依赖。

试过别的路子：写成 cordis 插件要跟着内核版本返工；用 `subagent` 人设只是换了提示词、底层模型没变；`codex mcp-server` 子命令在 0.162 里根本不存在。MCP 是唯一不侵入内核的做法，细节见 [README](codex-bridge/README.md)。

---

## 文档

| 文件 | 内容 |
|---|---|
| [docs/DSH-ecosystem-2026-10.md](docs/DSH-ecosystem-2026-10.md) | 4307 个 npm 包的实测调研：六层扩展面、值得装的不到 20 个、哪些是坑 |
| [docs/plugin-plan.md](docs/plugin-plan.md) | 远程控制 / 音乐 / 网盘三条线的插件选型与合并方案 |
| [docs/media-plugins-plan.md](docs/media-plugins-plan.md) | 媒体中心的分阶段计划与验收口径 |
| [docs/im-credentials-guide.md](docs/im-credentials-guide.md) | QQ Bot / 企微 / iLink 的凭据申请流程与安全红线 |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | 变更记录 |

---

## 安全

- 仓库里没有凭据。Secret 只写进 DSH 设置页或系统凭据库。
- `im-credentials-guide.md` 里所有 AppSecret 都是**占位符**，不是真实值。
- 第三方插件先隔离 profile 试驾再进主 profile，见 [SECURITY.md](SECURITY.md)。

---

## 许可

代码 [MIT](LICENSE)。`docs/` 下的调研文档同一许可。

`workbench/cordis.patch.yml` 里的 `@deepseek-ai/*` 组件由 DeepSeek 提供，遵循其各自许可；本仓库只声明预设组合与提示词。

## 致谢

分工模型参考 BMAD-METHOD 的角色划分、Claude Code subagents 的职责边界、Anthropic Agent Skills 的渐进披露、agency-swarm 的编排/执行分层。生态调研数据来自 npm registry 实测与各项目 README。
