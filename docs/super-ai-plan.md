# DSH 个人超级工具接入计划

> 目标：把 QQ 音乐、百度网盘、QQ、微信接进 DSH，让 Agent 能直接搜歌/放歌、管网盘、收发消息，而不是在几个客户端之间来回切。
> 状态：调研完成，待你拍板方向后进入 P1。

## 1. 先分清两种“接入”

| 方向 | 含义 | 现有生态 |
|---|---|---|
| **A. IM → DSH** | 在 QQ/微信里给机器人发消息，远程驱动 DSH 干活 | DSH 插件很多，成熟 |
| **B. DSH → IM** | DSH 读取/发送你**个人账号**的 QQ/微信消息 | 插件很少，要 hook 本地客户端，封号风险高 |

你原话是“把微信、QQ 加进 DSH”，听起来是 **B**；但社区 90% 的插件是 **A**。这两条路的技术选型、风险、工作量完全不同，必须先定。

## 2. 调研结论

### 2.1 现成 DSH 插件（npm 已核实存在）

| 目标 | 插件 | 版本/活跃 | 兼容性 | 说明 |
|---|---|---|---|---|
| QQ（官方 Bot） | `dsh-qq-plugin` | 1.0.5 / 10-20 | 未声明 peer，待试 | 腾讯官方 QQ 机器人平台，手机 QQ 远程控制电脑上的 DSH |
| QQ（官方 Bot） | `dsh-qqbot-bridge` | 0.1.3 / 10-17 | peers `^0.2.0-rc.2`，兼容 | QQ 单聊远程控制 DSH 已有会话 |
| QQ/多 IM | `@michengai/dsh-im-connect` | 1.0.12 / 10-21 | 明确列出 0.2.1-rc.2，兼容 | 把主流 IM 接进本机 DSH，带 Web 设置面板 |
| QQ（个人号） | `@yachangchang/dsh-qq-bridge` | 1.0.6 / 09-07 | 未声明，待试 | 个人 QQ 桥接（需确认底层是 OneBot/NapCat 还是官方 Bot） |
| 微信（Bot） | `dsh-wechat` | 0.13.2 / 10-21 | `dsh >=0.2.1-0 <0.3.0`，兼容 | 把微信 iLink 机器人桥到 DSH |
| 微信（小程序） | `dsh-wechat-remote` | 1.7.14 / 10-15 | 未声明，待试 | 微信小程序远程连电脑上的 DSH |
| 微信（个人号） | `dsh-wechat-plugin` | 0.46.0 / 10-20 | 未核实 | 待读 README 确认是否 WeChatFerry/wxauto |
| 微信（旧版） | `@lanbaolu/dsh-wechat-bridge` | 0.9.1 / 09-29 | peers `^0.1.0-rc.6`，**不兼容** | 基于 wechat-claude-code，0.2.1 装不上 |
| 音乐 | `@doitian/dsh-music` | 1.2.0 / 10-09 | 未声明，待试 | 网易云播放器 + AI DJ，不是 QQ 音乐 |
| 音乐 | `dsh-my-music` / `ncm-player` | 活跃 | 未核实 | 网易云全页播放器 |
| 百度网盘 | **没有 DSH 插件** | — | — | 只能用通用 CLI/API 自己包 |

### 2.2 通用开源项目（可被 DSH 包一层）

| 目标 | 项目 | 形态 | 备注 |
|---|---|---|---|
| QQ 音乐 | `@sansenjian/qq-music-api` + `qq-music-api-mcp` | Node API + **MCP server** | 最省事：DSH 直接挂 MCP，Agent 就有搜索/歌单/播放链接工具 |
| QQ 音乐 | `@yakult-green-tea/qq-music-api` 3.3.5 | Node API | 支持扫码登录、个人音乐库、播放链接，10-21 更新 |
| QQ 音乐 | `jsososo/QQMusicApi` | Node API | 老牌项目，文档全，需 cookie |
| 百度网盘 | `baiduwangpan-cli` 1.6.0 | CLI | “全盘读写、免下载读文件、Agent 友好”，最适合先包成 skill |
| 百度网盘 | `BaiduPCS-Go` | CLI | 老牌，上传/下载/分享/搜索 |
| 百度网盘 | `OpenList` / `AList` | 自建 HTTP 服务 | 多网盘挂载，DSH 走 HTTP API；适合长期方案 |
| QQ 个人号 | `NapCatQQ` + OneBot 11 | 本地 hook + HTTP/WS | 能收发个人 QQ 消息；账号风险，建议小号 |
| QQ 个人号 | `Lagrange.Core` | 协议端 | 同上，维护活跃但风险更高 |
| 微信个人号 | `WeChatFerry` | Windows hook | 版本锁定、2025 年后更新慢；封号风险高 |
| 微信个人号 | `wxauto` | Windows UI 自动化 | 版本敏感、慢，但比 hook 温和 |
| 微信 Bot | `Wechaty` | Bot 框架 | 个人号 puppet 多为付费/受限；企业微信更稳 |

## 3. 总体架构

```
DSH (workbench preset)
├─ 统一“个人工具”层
│  ├─ QQ 音乐适配器 → MCP server 或 host 插件（搜索/歌单/播放链接/歌词）
│  ├─ 百度网盘适配器 → CLI 包装成 skill，后续升级 host 工具
│  ├─ QQ 适配器 → 官方 Bot 桥（IM→DSH）或 NapCat/OneBot（DSH→IM）
│  └─ 微信适配器 → iLink/企业微信 Bot（优先）或 WeChatFerry（最后手段）
└─ 凭据与权限
   ├─ 凭据只存本机（.env / 凭据库），不进模型上下文
   ├─ 读操作默认放行；发消息、删文件、分享链接必须二次确认
   └─ 所有外部调用走本机代理/本地服务，不直连第三方
```

## 4. 分阶段计划

### P0 方向确认（0.5 天，先做）

- 确认 QQ/微信是“远程控制 DSH”（A）还是“DSH 操作个人号”（B）。
- 确认是否接受小号/企业微信/官方 Bot，还是必须主号。
- 确认 QQ 音乐/网盘是否接受“本机常驻一个 API/CLI 服务”。

**验收**：一张决策表，确定每个工具的接入方向与账号策略。

### P1 QQ 音乐（1-2 天）

1. 起 `qq-music-api-mcp`，验证 MCP 握手与工具列表。
2. 在 workbench 预设里挂 `dsh-mcp-client`，暴露搜索、歌单、播放链接、歌词工具。
3. 用真实关键词（如“周杰伦 晴天”）验证搜索 → 取播放链接 → 浏览器可播。
4. 失败回退：自写 host 插件，直接调 `@yakult-green-tea/qq-music-api`。

**验收**：Agent 能“搜一首歌并给出可播放链接/歌词”，不需要打开 QQ 音乐客户端。

### P2 百度网盘（1-2 天）

1. 安装 `baiduwangpan-cli`，扫码/cookie 登录，验证 `ls`、`search`、`download`。
2. 写成 DSH skill：`baidu-netdisk`，内含命令模板、路径规范、错误处理。
3. 只读先行（列表/搜索/下载自己的文件）；上传/删除/分享后续再加确认流程。
4. 长期方案评估 OpenList：如果要多端挂载再切。

**验收**：Agent 能列出网盘目录、搜文件、下载到工作区；危险操作默认拒绝。

### P3 QQ（1-3 天，取决于方向）

- **A（IM→DSH）**：先试 `@michengai/dsh-im-connect`（明确兼容 0.2.1-rc.2），再试 `dsh-qqbot-bridge`；需要 QQ 开放平台机器人资质。
- **B（DSH→个人 QQ）**：NapCatQQ + OneBot 11，写 host 插件暴露 `qq_send/qq_recent/qq_search`；**必须用小号**，并限制发送频率。

**验收**：A 能在手机 QQ 里给 DSH 发指令并收到结果；B 能读取最近会话并发送一条测试消息。

### P4 微信（2-5 天，风险最高）

- 优先：`dsh-wechat`（iLink bot）或企业微信 Bot，不动个人主号。
- 次选：`dsh-wechat-remote`（小程序远程），只做“控制 DSH”，不碰聊天记录。
- 最后：WeChatFerry/wxauto 个人号方案，必须小号 + 版本锁定 + 随时可回滚。

**验收**：在微信侧收到 DSH 的结果；或明确决定“暂不接个人微信”。

## 5. 风险与对策

| 风险 | 影响 | 对策 |
|---|---|---|
| 个人 QQ/微信 hook 被封 | 账号损失 | 只用小号；限频；不群发；准备停用开关 |
| 第三方插件供应链 | 代码执行、凭据泄露 | 装前过三关门（npm 正式包/peer 兼容/近 60 天活跃）+ 隔离 profile 试驾 |
| 音乐/网盘 cookie 失效 | 工具不可用 | 凭据集中存放，失败时提示重新扫码；不做自动重试轰炸 |
| 网盘限速/风控 | 下载失败 | 只读优先；大文件走后台 job；错误码透传 |
| 插件互相冲突 | DSH 启动失败 | 一次只装一个 IM 插件；保留 profile 备份；失败回滚 |

## 6. 需要你决定

1. QQ/微信要 **A（远程控制 DSH）** 还是 **B（DSH 操作个人号）**，还是两个都要？
2. 是否接受小号/企业微信/官方 Bot？主号是否绝对不能动？
3. 先做哪个：QQ 音乐（最稳）、百度网盘（最实用）、QQ、微信？
4. UI 形态：只要 Agent 工具（对话里用），还是要一个侧栏“个人工具中心”页面？

## 7. 下一步

你拍板后，我先做 P1 的 QQ 音乐 spike：起 MCP、挂到 workbench、用一首歌跑通搜索→播放链接，再决定要不要继续做面板。
