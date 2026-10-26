# 安全策略

## 报告漏洞

不要开公开 issue。用仓库的 **Security → Report a vulnerability** 私有报告，或开 issue 只写「有安全问题，需要私下聊」，不要在 issue 正文里写细节。

请包含：受影响的插件/文件、复现步骤、影响范围、你验证过的证据。确认后一起商量披露时间。

## 这个仓库里有什么敏感面

| 面 | 说明 |
|---|---|
| `workbench/cordis.patch.yml` | 预设会挂 MCP server 与 shell 工具。装之前看清每个 `command` 指向什么 |
| `we-workshop/` | 起本地 HTTP 端口、走代理访问 Steam、读写本机壁纸目录 |
| `media-plugins/media-hub/` | 起 `/media-hub/api/*` 路由，靠宿主 `connection.admit(req)` 鉴权 |
| `codex-bridge/` | 把 `codex exec` 接进会话，**它能真实改盘**，等于多一个写入方 |

## 使用者的责任

- **别把 `workbench/cordis.patch.yml` 里的 `command` 指向你信不过的东西。** 预设里的 MCP server 会以你的权限运行。
- 第三方插件先放隔离 profile 试驾，通过再进主 profile。
- `wb-auditor` 只读、`wb-scribe` 无 shell——这是纵深防御，不要为了省事把权限加回去。
- IM 通道用专用小号，只开私聊，加白名单限频。

## 仓库里没有的东西

- 没有真实 AppSecret / AppID / token / cookie。
- 没有本机绝对路径与用户名（示例统一用 `<repo>` / `<USER_HOME>` / `<DSH_HOME>`）。
- 没有第三方部署目录、没有抓取的三方文档。

如果你在提交历史里发现了上述任何一项，按上面的邮箱报过来。

## 供应链

本仓库自身**零运行时依赖**（只用 Node 内置模块）。插件通过 `npx` 拉起的第三方包（playwright、qq-music-api-mcp 等）各自独立，版本在 `cordis.patch.yml` 与 `package.json` 里固定或限定了范围。
