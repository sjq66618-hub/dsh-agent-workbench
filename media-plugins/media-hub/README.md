# DSH Media Hub

一个本地安装包 `@local/dsh-media-hub`，两个独立原生侧栏入口：**QQ 音乐**、**百度网盘**。不增加额外设置入口，不嵌入 iframe，不修改宿主全局样式、fetch 或 WebSocket。

## 当前范围：P0 集成骨架

- 两个独立主面板，共享后台只读状态服务。
- 配置 `musicEnabled`、`netdiskEnabled` 默认为 `true`，分别控制入口。
- `GET /media-hub/api/status` 先通过宿主 `connection.admit(req)`，保留 401/403 拒绝码；已鉴权非 GET 返回 405。
- 只读工具 `media_hub_status` 接受空对象 `{}`，输出与状态路由来自同一服务。
- 请求有超时、取消、错误态；插件卸载清理路由、工具、服务、入口和样式。

尚未实现：真实账号登录、QQ 音乐搜索/播放/音质、百度网盘文件浏览/上传/下载。界面中的“未检查”“未连接”为明确的未实现状态，不表示已经检测过账号或网络。

## 本地测试

在本目录运行 `node --test`；语法检查运行 `node --check index.js` 和 `node --check client.js`。不安装额外 SDK 或依赖。

独立集成验收使用 `<repo>\_dev\media-hub-p0-20261022` 中的隔离 DSH_HOME 和浏览器测试器。结果以该测试器实际产物为准，单元测试不代表桌面端、手机端或真实业务通过验收。

## 配置与回滚

将包加入测试 profile 的 bundles 并建立本地依赖链接。Host patch 中按现有 `media-hub` id 配置：

```yaml
- id: media-hub
  config:
    musicEnabled: true
    netdiskEnabled: false
```

整包停用：

```yaml
- id: media-hub
  disabled: true
```

从 profile 的 bundles 和本地 dependencies 移除此包即可撤销安装。当前不修改正式 desktop profile，不执行账号操作。正式接入前仍需原生桌面/跨端验收和独立的 provider 业务阶段。
