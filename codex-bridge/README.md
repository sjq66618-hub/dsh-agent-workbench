# Codex ⇄ DSH 桥接

把本机 `@openai/codex@0.162.0` 变成 DSH 会话里的一个工具：`mcp__codex__codex_exec`。

## 为什么是 MCP，不是插件

试过三条路，结论如下。

| 路子 | 可行性 | 结论 |
|---|---|---|
| **MCP stdio server 包 `codex exec`** | ✅ 本机已验证 | 采用。零依赖、重启即生效、不动 DSH 内核、可随时摘掉 |
| cordis 插件里写工具 | ⚠️ 可行但重 | 要跟着内核版本走，改一次内核就返工 |
| `subagent` 人设（`~/.agents/agents/codex.md`） | ❌ 名不副实 | 人设只换提示词，底层模型仍是 DSH 自己的 provider，跑的不是 codex |
| `codex mcp-server` 子命令 | ❌ 0.162 没有 | `codex mcp` 只管外部 MCP（客户端），没暴露 server；feature flag 里也没有 |

顺带：`codex exec --json` 有 `-o/--output-last-message`，比解析 JSONL 取最终答复可靠，本实现两者都用——`-o` 取正文，JSONL 取命令轨迹与 token 用量。

## 文件

| 路径 | 作用 |
|---|---|
| `mcp-codex-server.mjs` | 零依赖 stdio MCP server，两个工具，单并发队列 |
| `selftest.mjs` | 协议自测 + 可选真实调用 |
| `README.md` | 本文件 |

## 挂载点

两处都写了，任一生效即可：

1. `<repo>\workbench\cordis.patch.yml` → `mcp-codex`（工坊主控预设，**改完要重启 DSH**）
2. `C:\Users\<user>\.agents\mcp.json` → `mcpServers.codex`（用户级声明）

## 工具

### `codex_exec`

| 参数 | 说明 |
|---|---|
| `prompt` | 必填。自包含任务说明——Codex 看不到你的会话上下文 |
| `cwd` | 默认 `<repo>` |
| `sandbox` | `read-only` / `workspace-write` / `danger-full-access`；省略则用 codex 自己的 `config.toml` |
| `model` / `profile` / `addDirs` | 可选 |
| `timeoutMs` | 默认 900000，上限 3600000 |

返回：最终答复 + 执行过的命令（带 exit code）+ token 用量 + thread id。

### `codex_health`

可执行文件路径、版本、是否在跑、上一次调用结果。不烧额度。

当第二意见用，不要当批处理机。

## 三个坑（都踩过了）

1. **pwsh 管道死锁**：`codex exec ... | Select-Object` 会让 codex 认为 stdin 有输入，一直等 EOF，90 秒起步。必须 `< NUL`（命令行）或 `stdio: ['ignore','pipe','pipe']`（Node）。
2. **prompt 走 stdin**：shell 里拼 prompt 会被引号啃掉，本实现用 `codex exec ... -` 从 stdin 灌 prompt。
3. **单并发**：codex 共享本地 app-server 状态，并发调用会互相踩。server 内置串行队列。

## 验证

```powershell
# 1) 协议 + health（不烧额度）
cmd /c "cd /d <repo>\codex-bridge && node selftest.mjs < NUL 2>&1"

# 2) 端到端真实调用（烧一次）
cmd /c "cd /d <repo>\codex-bridge && node selftest.mjs --run ""只回答一行：PONG"" < NUL 2>&1"

# 3) DSH 侧（重启后）：让主控调 codex_health，应返回 exe 路径与版本
```

## 回滚

```powershell
# 摘掉预设项：把 patch yml 恢复到备份
Copy-Item "<repo>\workbench\cordis.patch.yml.bak-codex-20261022-2257" "<repo>\workbench\cordis.patch.yml" -Force
# 删 mcp.json 里的 codex 块；或直接删整个目录
Remove-Item "<repo>\codex-bridge" -Recurse -Force
```

## 注意

`~/.codex/config.toml` 里 `disable_response_storage` 在当前版本已失效，每次调用会多吐两条 `unrecognized configuration setting` 错误事件，无害，删掉那行即可消失。

`config.toml` 里 API key 是明文存的。要分享配置前先抹掉。
