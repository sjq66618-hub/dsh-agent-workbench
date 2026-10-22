# SillyTavern 酒馆 完整使用手册

> 环境：Windows · SillyTavern v1.19.0 · Node 24.12
> 路径：<repo>\SillyTavern ｜ 地址：http://127.0.0.1:8000
> 本机：RTX 5070 Ti Laptop 12GB VRAM / 32GB RAM / Ryzen 9 7945HX

---

## 0. 一分钟上手

1. 双击 <repo>\SillyTavern\启动酒馆.bat
2. 浏览器开 http://127.0.0.1:8000
3. 右上【插头图标】→ 选 API → 填 Base URL / Key / 模型 → 测试 → 连接
4. 拖一张角色卡 PNG 进页面
5. 点角色 → Start New Chat → 说话

---

## 1. 界面地图

| 图标 | 名称 | 作用 |
|---|---|---|
| 插头 | API 连接 | 配模型后端，第一步 |
| 人形 | 角色管理 | 导入/导出/编辑角色卡 |
| 三条杠 | 设置 | 语言、主题、预设、扩展、备份 |
| 书本 | 世界书 | Lorebook，关键词触发设定注入 |
| 滑杆 | 生成参数 | 温度、top_p 等采样 |
| A | 高级格式 | 提示词模板 / Instruct 模式 |
| 方块 | 扩展 | 装插件（酒馆助手、TTS、翻译…） |
| 调色板 | 主题 | 配色 / 字体 |

左侧角色列表，右侧聊天区，顶部是上下文条（已用 token / 上限）。

---

## 2. API 连接（三条路）

### 2.1 云端 API

插头 → API 选 **Chat Completion** → 来源选 **Custom (OpenAI 兼容)**：

| 字段 | 填什么 |
|---|---|
| Base URL | https://<中转域名>/v1 （必须带 /v1，不要带 /chat/completions） |
| API Key | sk-... |
| 模型 | 点【获取模型列表】或手填模型 ID |
| 代理 | 留空（只有走境外官方才需要） |

点 Test Message → 回话即通 → Connect。

常见坑：
- Base URL 结尾多写 / 或漏 /v1 → 404
- 中转上模型 ID 与官方别名不同 → 400 model not found
- Streaming 开 = 逐字蹦；关 = 全部生成完再显示，长文更稳

### 2.2 本地模型（真·零限制）

装 LM Studio（图形化最省事）或 KoboldCpp（RP 参数面最全）：

1. 下 GGUF 模型 → 加载 → 开 Local Server（默认 http://127.0.0.1:1234/v1）
2. 酒馆 API 选 Custom → Base URL 填上面地址 → Key 随便填 sk-no-key
3. 模型名填 LM Studio 显示的 ID

要 DRY / XTC 这类细粒度采样，走 **Text Completion** + KoboldCpp。

### 2.3 混合用法

日常角色扮演走云端 API（文笔好），敏感题材切本地模型。两套配置在插头面板随时切，聊天记录共用。

---

## 3. 角色卡

### 3.1 导入
- PNG 卡：直接把图拖进网页
- JSON 卡：角色管理 → Import
- 落盘：data\default-user\characters\<角色名>.png

### 3.2 字段说明（自己捏角色必看）

| 字段 | 说明 |
|---|---|
| Name | 角色名 |
| Description | 核心设定，最重要。外貌/性格/说话方式 |
| Personality | 性格摘要 |
| Scenario | 当前场景 |
| First Message | 开场白，决定文风基调 |
| Alternate Greetings | 备选开场，右侧 ↻ 切换 |
| Example Messages | 对话范例，最有效的文风控制手段 |
| System Prompt | 角色专属系统提示，优先级高 |
| Post-History Instructions | 每轮插在历史末尾，防跑偏 |
| Creator's Note | 作者注释，可设注入深度 |

铁律：具体 > 抽象。不要写「她很温柔」，写「她说话句尾带呢，被夸奖会低头玩头发」。

### 3.3 深度提示

聊天设置里可给单卡加注入指令，带【深度】参数（从末尾往前数第几条插入）。深度 0 = 紧跟用户输入，压文风最有效。

---

## 4. 世界书 Lorebook

为什么用：设定塞 Description 会占满上下文且每轮重发（烧钱 + 稀释注意力）。世界书只在关键词命中时注入。

设置要点：
- 关键词：逗号分隔，英文不区分大小写；中文用短词或多写法并列
- 扫描深度：往回看几条消息（2~4）
- 注入位置：角色定义前/后、系统提示前/后、示例消息、作者注释
- 插入顺序 / 深度：数字越大越靠前，越靠前越硬
- 概率：100% 恒定；低于 100 是随机触发（做偶尔想起效果）
- 递归扫描：条目内容再触发别的条目（小心链式膨胀）

建议结构：一个世界观总纲常驻（constant 勾选）+ 若干地点/人物/事件按关键词触发。

---

## 5. 采样参数

### Chat Completion

| 参数 | 常用值 | 作用 |
|---|---|---|
| Temperature | 0.8 ~ 1.15 | 越高越发散，RP 建议 1.0 |
| Top P | 0.9 ~ 1.0 | 与温度二选一调，别同时极端 |
| Max Response Length | 300 ~ 600 | 太长 AI 会自己演完 |
| Presence Penalty | 0 ~ 0.3 | 抑制重复话题 |
| Frequency Penalty | 0 ~ 0.3 | 抑制重复用词 |
| Reasoning Effort | 低或关 | 思考型模型开高会拖慢且出戏 |

### Text Completion 专有

| 参数 | 建议 | 说明 |
|---|---|---|
| Min P | 0.02 ~ 0.1 | 比 top_p 好用，高温不崩 |
| Repetition Penalty | 1.0 ~ 1.08 | 超过 1.15 会胡言乱语 |
| DRY Multiplier | 0.8 / base 1.75 | 专治复读，优先于重复惩罚 |
| XTC | 阈值 0.5 / 概率 0.5 | 剔除最可能选项，反套路 |

配方 A（云端 API）：T=1.0，TopP=0.95，Presence 0.2，Max 450
配方 B（本地 12B 级）：T=1.05，MinP=0.05，DRY 0.8/1.75，重复惩罚 1.03

---

## 6. 上下文管理

- Context Size：按模型上限的 60~75% 设，留生成空间
- 提示词管理器：看每段注入的实际顺序，调角色定义深度 / 作者注释深度
- Summarize：超长自动总结旧消息
- Vector Storage：语义检索历史，需配 embedding 模型
- Data Bank：丢 txt/pdf 当资料库，按需检索注入

上下文爆了的信号：顶部 token 条全满 + 回复开始忘记刚才说的话。

---

## 7. 中文优化

1. 设置 → Language → 简体中文（刷新生效）
2. 系统提示末尾加：始终用简体中文回复，不要输出英文。
3. Token 估算：酒馆按 GPT tokenizer 算，中文实际消耗约为显示值 1.2~1.6 倍，上下文留余量
4. 角色卡里的中文示例对话质量 = 实际输出质量，多写几句

---

## 8. 扩展推荐

| 扩展 | 作用 |
|---|---|
| 酒馆助手 / JS-Slash-Runner | 前端脚本、变量、状态栏（游戏化 RP 必备） |
| ST-Prompt-Template | 提示词里写模板逻辑 |
| Chat Bookmark | 聊天打书签，长剧情回滚 |
| Expressions | 头像随情绪变化 |
| TTS (Edge) | 免费中文语音 |
| Translate | 一键翻译消息 |
| Stable Diffusion | 文生图配场景 |

装法：扩展面板 → Download Extensions → 填 GitHub 地址（国内前面加 https://gh-proxy.com/ ）

---

## 9. 备份与迁移

备份整个 data\default-user\ 即全部内容：

```
data\default-user\
  characters\      角色卡
  chats\           聊天记录
  worlds\          世界书
  OpenAI Settings\ 预设
  groups\          群聊
  backups\         自动备份
```

更新：

```
cd <repo>\SillyTavern
git pull origin release
npm install --registry=https://registry.npmmirror.com
```

---

## 10. 故障速查

| 现象 | 原因 | 处置 |
|---|---|---|
| 页面打不开 | 进程没了 | 跑 启动酒馆.bat |
| 端口占用 | 旧进程残留 | Get-NetTCPConnection -LocalPort 8000 → Stop-Process |
| 点发送没反应 | API 没连上 | 插头面板重新 Test Message |
| 404 / 401 | URL 或 Key 错 | URL 必须 .../v1 |
| 回复截断 | Max tokens 太小 | 调到 600~800 |
| AI 替你说台词 | 提示词没约束 | 系统提示加：只扮演 {{char}}，不要代替 {{user}} 行动或说话 |
| 复读同一句 | 采样太保守 | 开 DRY / 提温 / 加 presence |
| 忘记设定 | 上下文爆了 | 降 Context Size，设定搬进世界书 |
| 中文夹英文 | 模型习惯 | 强制语言 + 换中文好的模型 |

---

## 11. 运维命令

```
# 状态
Get-NetTCPConnection -LocalPort 8000 -State Listen

# 启动（独立进程，关会话不死）
cd <repo>\SillyTavern
Start-Process node -ArgumentList 'server.js' -WindowStyle Hidden

# 停止
Get-NetTCPConnection -LocalPort 8000 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

# 改端口
notepad <repo>\SillyTavern\config.yaml

# 局域网访问：config.yaml listen: true → http://<本机IP>:8000
```