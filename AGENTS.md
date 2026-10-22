# 仓库约定（项目级）

本文件描述 **DSH 工坊** 仓库自身的结构与操作约定。DSH 进入本目录时会自动加载它。

身份、语气、安全条款属于**用户级**配置（`~/.dsh/AGENTS.md`），不在本仓库内，也不应提交。

## 目录地图

| 路径 | 内容 |
|---|---|
| `workbench/` | 预设包：`cordis.patch.yml`（1 主控 + 4 子代理）、`README.md`、`COMMUNITY.md` |
| `we-workshop/` | 插件：Steam 创意工坊壁纸搜索与订阅 |
| `media-plugins/media-hub/` | 插件：QQ 音乐 + 百度网盘侧栏面板（P0 骨架） |
| `codex-bridge/` | MCP 桥：`codex exec` → `mcp__codex__codex_exec` |
| `docs/` | 生态调研、插件计划、凭据指南、变更记录 |
| `cases/SAMPLE/` | 分析案例目录模板（`SAMPLE` 为骨架） |

本机的其他私有资产——DSH 安装目录、第三方服务部署、独立游戏工程、素材与截图库——**不在本仓库**，也不要提交。

## 操作约定

- 默认中文；命令按 PowerShell 5.1 语法写。
- 改配置前先读目标文件；改完给「怎么装上 / 怎么验证」。
- 不提交：凭据、`.env`、日志、`node_modules`、第三方部署目录、本机安装副本、二进制发布包。
- 新增插件放独立目录，自带 `package.json` + `cordis.patch.yml` + `README.md`，与现有插件同级。
- 预设改动只动 `workbench/cordis.patch.yml`，它是唯一事实来源。

## 常用命令

```powershell
# 语法自检（无外部依赖）
node --check we-workshop\index.js
node --check codex-bridge\mcp-codex-server.mjs
node --check media-plugins\media-hub\index.js

# 单元测试
cd media-plugins\media-hub; node --test

# MCP 桥协议自测（不调用真实模型）
cmd /c "cd /d .\codex-bridge && node selftest.mjs < NUL"

# 装包（DSH 会话内执行）
# plugin_manager install_bundle  target = <仓库绝对路径>\workbench
```

## 提交前检查

1. `git status` 里没有 `node_modules`、日志、`*.zip`、个人截图。
2. 新增文件里没有真实 AppSecret / token / cookie / 本机用户名。
3. 示例路径用 `<repo>`、`<USER_HOME>`、`<DSH_HOME>` 之类的占位符。

## 扩展阅读

- 生态调研：[docs/DSH-ecosystem-2026-10.md](docs/DSH-ecosystem-2026-10.md)
- 插件计划：[docs/plugin-plan.md](docs/plugin-plan.md)
- 凭据申请：[docs/im-credentials-guide.md](docs/im-credentials-guide.md)
