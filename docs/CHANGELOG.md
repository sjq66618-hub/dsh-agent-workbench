# 变更记录

格式：Keep a Changelog。版本跟随仓库，不跟 DSH 内核。

## [Unreleased]

### 新增

- `docs/decorations.md` — DSH 装饰插件合集，467 条，按皮肤 / 主题 / 壁纸 / 桌面宠物 / 启动动画 / 字体 / 图标 / 动效分 8 类，每条附 npm 包名、周下载量、许可证与一行说明。
- `docs/research/` — 三个可复现脚本：`fetch-decorations.mjs` 抓 npm、`parse-awesome.mjs` 解析社区清单、`build-catalog.mjs` 合并去重生成目录。

## [1.0.0] — 2026-10-23

首次开源。

### 新增

- `workbench/` — 5 个预设（主控 + builder / auditor / scribe / gamedev），主控带持久终端、Git worktree、会话检索、目标与计划、子代理与 workflow。
- `we-workshop/` — Steam 创意工坊壁纸搜索插件（AppID 431960），代理自动探测，订阅唤起 Steam。
- `media-plugins/media-hub/` — QQ 音乐 + 百度网盘双面板 P0 骨架：路由鉴权、只读状态工具、卸载清理。
- `codex-bridge/` — 零依赖 stdio MCP server，把 `codex exec` 暴露成两个工具，单并发队列。
- `docs/` — 生态调研（4307 个 npm 包实测）、插件计划、媒体插件分阶段计划、IM 凭据准备指南、SillyTavern 使用说明。

### 修复（记录在案，来自开发期）

- 主控预设「加载失败」：`@deepseek-ai/dsh-plan-mode` 的 `section` 是必填项，补规划模式指引后通过。
- worktree 服务泄漏：`dsh-experimental-worktree` 的 `ctx.worktrees` 必须与消费者同组隔离，改用 `cordis:group` + `isolate: worktrees: true` 包住。

### 已知限制

- 兼容基线 DSH `0.2.1-rc.2`，更高版本未验证。
- `media-hub` 只有骨架，没有真实账号与业务实现。
- `we-workshop` 的壁纸目录默认值按 Windows + Steam 常规位置推断，其他布局需设 `DSH_WE_WORKSHOP_DIR`。
