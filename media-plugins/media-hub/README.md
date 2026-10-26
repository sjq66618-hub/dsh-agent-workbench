# DSH Media Hub

一个安装包、两个独立原生入口：**QQ 音乐**与**百度网盘**。不增加额外设置栏，不嵌入 iframe，不修改宿主全局样式、fetch、WebSocket 或 DSH 本体。

## 当前阶段：P1.1 / 0.3.0

QQ 音乐现已接入固定版本 @yakult-green-tea/qq-music-api@3.3.5（MIT），不再只有测试 provider。依赖版本与 integrity 固定在 package-lock.json。

### 接入方式

- SDK 只运行在插件拥有的受管子进程中；打开 DSH、读取状态、停用音乐入口均不会启动该进程或连接 QQ 音乐。
- 直接组合固定版本包内无监听模块；不加载会自动开 Koa 服务、检查更新及初始化磁盘配置的包根入口或 app.js。SDK 版本不匹配会明确失败。
- 不新增固定监听端口；宿主通过自己的鉴权路由和 IPC 访问 SDK。
- 账号、扫码会话和设备上下文仅存进程内存。不读取旧 MCP 凭据或环境中的 QQ 凭据，不将 token/Cookie/账号资料交给 Agent 或 UI，不落盘明文凭据。重启、卸载、子进程异常退出或硬超时后需要重新扫码。
- 当前仅支持一个账号上下文。手机 QQ 使用 SDK 内置的 QQ 互联网页登录流程；微信和 QQ 音乐 App 保留各自通道。使用者主动发起扫码并在手机确认，只有上游换凭证成功后才显示已登录。
- 手机提示成功仅表示扫码授权完成，不代表服务端已拿到 QQ 音乐凭证。失败时显示经过脱敏的阶段与上游码；冷却期间显示倒计时，禁止重复获取。网页登录的多步换凭证有独立认证时限，不沿用普通查询的短超时。

### 音乐功能

- 真实歌曲搜索（最多 60 字，每页最多 20 首）、详情、歌词；上游错误或响应结构异常不会伪装成空结果。
- 登录后显示“我的音乐”：我喜欢、个人自建及收藏歌单、歌单歌曲；支持分批加载、刷新、详情、加入本地队列及按账号权限播放。只读取当前扫码账号，不导入或修改云端收藏。
- 音乐库数据只保存在页面内存；退出登录后隐藏并清空，切换列表中止过期请求。音乐库读取取消或超时不会终止持有登录态的工作进程。
- 客户端分区的本地队列，支持加入、去重、取下一首和清空。
- 登录后请求 128 kbps 播放，实际权限由上游账号与曲目决定；缺少授权明确报错，不自动切换试听或规避权限。
- Agent/UI 只获得短期随机播放租约；签名音频 URL 保留在 Host。鉴权流代理支持 Range、HEAD、背压、超时和断开取消，不整曲缓存；只允许受控 QQ 音频 CDN 地址且不跟随重定向。
- 注销清空队列、撤销租约、中止现有流并终止持有凭据的工作进程；注销前尚未返回的播放结果不会重新生成租约。
- 子进程请求有并发上限、真实 deadline 和取消终止；只读瞬时上游故障最多退避重试一次，登录/权限错误不重试。

### 状态不是假连接

- 未选择后端：unavailable。
- 已选择 QQ 后端但尚未成功请求：configured / networkState=not_checked。
- 成功获得真实搜索、详情或歌词响应后：ready / networkState=verified。仅代表已有真实上游请求成功，不等于已经登录或已验收所有功能。
- accountState 单独表示 signed_out / waiting / scanned / authenticated；安全诊断 lastFailure 只含固定枚举，不包含原始错误、URL 或凭据。
- operationsEnabled 表示入口启用且后端可接受业务操作，不表示登录或播放已通过。

## 路由和工具

所有 API 首先经过宿主 connection.admit(req)，保留 401/403 拒绝码。状态只接受 GET；账号操作只接受已准入 UI 的 POST 与专用标头。

- /media-hub/api/status：两个独立入口与音乐后端状态。
- /media-hub/api/music：search / details / lyrics / queue / play / stream。
- 同一路由 op=account：status / qr.create / qr.check / qr.cancel / logout。只返回二维码和脱敏状态。
- 同一路由 op=library（GET）：kind=playlists / liked / tracks，支持 offset、limit；曲目列表支持 id / dirId。仅当前已登录账号可读，不向 Agent 注册个人音乐库工具。
- Agent 工具仍为 media_hub_status、media_music_search、media_music_details、media_music_lyrics、media_music_play、media_music_queue；不注册登录、Cookie 或凭据工具。
- 租约不是设备绑定凭据；仍要求宿主准入，不宣称其不可在已准入客户端间转移。

## 配置

随包 patch 选择 QQ 音乐与百度网盘后端。直接调用 createMediaService() 不选择后端时仍保持明确未连接，测试注入的 provider 接缝继续兼容。

在隔离 profile 的 patch 层中配置现有 media-hub id：

    - id: media-hub
      config:
        musicBackend: qqmusic
        netdiskBackend: baidu
        musicEnabled: true
        netdiskEnabled: true

musicBackend 可为 qqmusic 或 none，netdiskBackend 可为 baidu 或 none。musicEnabled、netdiskEnabled 必须是布尔值，默认均为 true。停用音乐不仅隐藏入口，还阻断 HTTP 和 Agent 业务调用，且不启动 SDK。单独停用网盘不影响音乐。

DSH 的后续 config 补丁会替换该实例的整段配置；覆盖入口开关时应同时保留 musicBackend: qqmusic。省略后端会回到明确的 unavailable，而不是偷偷连接。

整包停用：

    - id: media-hub
      disabled: true

从隔离 profile 的 bundles 与 dependencies 移除本包即可撤销安装。正式安装前应完成个人账号与完整播放验收；本轮未修改正式 desktop profile。

## 使用

1. 在隔离 profile 加入本地包依赖和 bundle，安装锁定依赖；使用独立 DSH_HOME 启动 DSH。
2. 打开 QQ 音乐入口，可先搜索、查看详情/歌词、加入队列。
3. 选择手机扫码通道，点击“扫码登录”，自行在手机确认。取消登录或离开音乐面板会清理尚未完成的扫码；二维码有时效，过期后重新获取。
4. 登录后手动点“播放”；浏览器的播放权限、账号权益和曲目限制仍然生效。
5. “退出登录”停止播放器并清除内存账号。无需向聊天窗口粘贴账号密码或 Cookie。

## 实测与未执行

验收记录（2026-10-23）：

- 已通过独立 Node 与 DSH 自带 Electron Node 的真实无账号搜索、详情和歌词请求。
- 已在独立 DSH_HOME 的原生浏览器界面通过真实搜索、详情、歌词、队列、未登录播放阻断，以及手机 QQ 二维码生成、轮询和取消。
- 观察到上游存在间歇性连接重置；查询采用一次有界退避重试，仍失败时显示真实故障，不保证外部服务恒定可用。
- 登录成功到退出的渲染器状态转换有测试替身回归；该项不是一次真实账号登录。
- **真实手机扫码确认、已登录账号权限、实际完整音频播放：未执行，等待用户本人扫码。** 微信与 QQ 音乐 App 的真实扫码链路也未执行。
- 百度网盘已实现独立扫码面板、目录浏览、递归搜索、分页、容量读取与单文件下载代理；离线回归已通过，真实扫码后的登录、文件列表与下载仍待本人确认验收，不以二维码生成成功替代登录成功。上传、删除、分享和批量操作未实现。
- 手机远程访问与原生桌面正式安装：未执行。本轮使用独立 Web profile 验收，不代表手机/正式桌面全部通过。

## 本地验证

### 百度网盘使用与数据边界

- 打开独立“百度网盘”侧栏，主动获取二维码，用百度网盘 App 扫码确认。只有凭据交换后容量 API 校验成功，界面才显示已登录。
- 凭据仅在 Host 私有内存，不导入浏览器/客户端旧 Cookie、不落盘、不返回给 UI 或 Agent。插件重载、卸载或 DSH 重启后重新扫码。
- 登录后可打开文件夹、返回上级/根目录、搜索、刷新、分页及单文件下载。下载走宿主同源鉴权流代理，不把云端下载地址或凭据暴露给前端，不整文件读入内存。
- `/media-hub/api/netdisk` 提供 status / account / files / quota / download。账号操作只接受带 `x-media-hub-ui: 1` 的 POST；下载支持 GET、HEAD 与单段 Range。
- 注销取消当前读取与下载、清空内存文件索引；离开面板取消未完成的扫码但不退出已登录账号。不注册网盘文件或账号 Agent 工具，不自动上传、删除或修改任何云端文件。
- 普通账号下载速率与可用性以百度上游返回为准，不承诺加速。桌面协议的实际文件保存交互仍需实测。

在包目录运行 npm ci --ignore-scripts、npm run check、npm test。测试使用纯映射与进程替身，以及无联网认证结果的真实 SDK 启动检查；真实业务探针在独立案例目录中单独运行，不混入离线单元测试。

测试包含 SDK 实际响应层级、字段白名单、静态错误脱敏、惰性启动、超时杀进程、AbortSignal、并发上限、注销竞态、入口停用、DSH schema 子集，以及真实 HTTP Range/HEAD/注销中止回归。
