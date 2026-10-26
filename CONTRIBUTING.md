# 贡献指南

这是个工作台，不是框架。所以对外部的期待很具体：**修 bug、补文档、加插件**，不建议改核心预设的编制方式。

## 可以提 PR 的

- 插件 bug 修复（`we-workshop/`、`media-plugins/media-hub/`、`codex-bridge/`）
- 文档纠错、路径/版本失效的更新
- 新的独立插件（放新目录，自包含）
- 兼容性适配（DSH 内核升级后配置结构变化）

## 不建议动的

- `workbench/cordis.patch.yml` 里 5 个预设的职责划分——这是有意设计的，改之前先开 issue 讨论
- 审计员（`wb-auditor`）的只读约束、写作者（`wb-scribe`）的无 shell 约束——不是漏配

## 提交规范

Conventional Commits，中文正文：

```text
feat(we-workshop): 支持自定义 Steam 库路径
fix(codex-bridge): selftest 在无 codex 环境下误报失败
docs: 更新 DSH 内核兼容基线到 0.2.2
```

一次 PR 一件事。涉及配置结构变更的，同步更新 `docs/CHANGELOG.md`。

## 提交前自查

```powershell
git status                     # 没有 node_modules / 日志 / zip / 个人截图
node --check <改动的 .js/.mjs>
cd media-plugins\media-hub; node --test
```

**不要**在 PR 里夹带：真实凭据、本机绝对路径、个人账号信息、第三方仓库的拷贝代码。

## 许可

提交即表示同意以 [MIT](LICENSE) 授权。
