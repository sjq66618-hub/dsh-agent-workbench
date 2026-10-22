# DSH Media Hub

一个本地安装包 `@local/dsh-media-hub`，两个独立原生侧栏入口：**QQ 音乐**、**百度网盘**。不增加额外设置入口，不嵌入 iframe，不修改宿主全局样式、fetch 或 WebSocket。

## 当前阶段：P1（服务层，版本 0.2.0）

已实现：

- 两个独立主面板，共享后台服务；插件卸载清理路由、工具、服务、入口和样式。
- 配置 `musicEnabled`、`netdiskEnabled` 默认为 `true`，分别控制入口；非布尔值直接抛 `TypeError`。
- `GET /media-hub/api/status` 与 `/media-hub/api/music` 先通过宿主 `connection.admit(req)`，保留 401/403 拒绝码；已鉴权非 GET 返回 405。
- `operationsEnabled` 语义：**仅当 `musicEnabled !== false` 且音乐 provider 状态为 `ready` 时** 为 `true`。即使 provider 已就绪，只要 `musicEnabled: false`，该值必为 `false`，同时 music provider 回报 `state: 'disabled'`、`accountState: 'not_checked'`。
- 音乐服务能力（`src/host/music-service.js`）：`search` / `details` / `lyrics` / `queue`（客户端隔离，有上限、幂等）/ `play`。`play` 只返回短期租约（`leaseId` + `expiresAt`），不向前端暴露上游音频地址；`stream` 通过租约转发并支持 Range。
- 错误统一归一化为 `MusicError`（`AUTH_REQUIRED`、`FORBIDDEN`、`UNPLAYABLE`、`UPSTREAM_UNAVAILABLE`、`ABORTED`、`CONFLICT`、`SERVICE_STOPPED` 等），路由按码映射状态码。
- 工具：`media_hub_status`、`media_music_search`、`media_music_details`、`media_music_lyrics`、`media_music_play`、`media_music_queue`，与路由共用同一服务实例。
- Provider 预留接缝：`createUnavailableMusicProvider()` 为默认实现，所有调用显式抛 `UPSTREAM_UNAVAILABLE`，不会假装已登录或已连接。

## 未实现 / 未验收

- **真实 QQ provider 验收未执行**：没有真实账号登录，没有读取 Cookie/token，没有调用真实 QQ 播放接口。仓库内所有 provider 均为桩实现或测试替身，因此 `state: 'ready'` 只代表"注入的 provider 自报可用"，不代表真实链路连通。
- 百度网盘侧仅保留入口与 `not_connected` 状态，文件浏览/上传/下载均未实现。
- 桌面端、手机端、真实业务链路均未验收；单元测试通过不代表集成通过。

## 本地测试

在本目录运行 `node --test`；语法检查运行 `node --check index.js` 和 `node --check client.js`。不安装额外 SDK 或依赖。

测试覆盖要点：`media-service.test.js` 显式断言 `musicEnabled: false` + ready provider 时 `operationsEnabled === false`，以及 ready 启用时为 `true`、provider 不可用时为 `false`。

## 隔离集成方式

- 使用独立 `DSH_HOME`（例如 `E:\DSHwork\_dev\media-hub-p1-20261023`）与独立测试 profile，只在该隔离目录内创建 bundles 与本地依赖链接。
- **不修改正式 profile** `C:\Users\孙敬淇\.dsh`；不执行真实账号登录、不读取 Cookie/token。
- 集成结论以隔离测试器的实际产物为准；P1 目前该目录内仅有改动前快照（`baseline-hashes.txt`、`git-status-baseline.txt`），尚未产出桌面/浏览器验收结果。

## 配置与回滚

将包加入测试 profile 的 bundles 并建立本地依赖链接。Host patch 中按现有 `media-hub` id 配置：

```yaml
- id: media-hub
  config:
    musicEnabled: true
    netdiskEnabled: false
```

注意：`musicEnabled: false` 时即使注入了 ready provider，`operationsEnabled` 也为 `false`。

整包停用：

```yaml
- id: media-hub
  disabled: true
```

从 profile 的 bundles 和本地 dependencies 移除此包即可撤销安装。正式接入前仍需原生桌面/跨端验收和独立的 provider 业务阶段。
