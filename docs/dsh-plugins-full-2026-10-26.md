# DSH 插件全量清单（npm 可一键安装）

数据源：官方插件索引 `https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json`，与 awesome-dsh-plugin 精选列表交叉核对。

- 抓取时间：2026-10-26
- 条目数：**3540**
- 分类数：**23**
- 安装：`dsh plugin --profile desktop add <包名>`；界面「插件 → 发现」；或装 dsh-market 后一键装。

## 界面增强 · ui（652）

- **dsh-accountdisplayname-edit** — 把左下角账号处的文字（手机号/邮箱/用户名/账户名）和头像替换为你自定义的显示名称与图片。编辑入口是账号菜单里新增的「编辑显示名称」一行，同一个弹窗改这两项，避免截图泄露隐私。
  `v0.2.1` · [源码](https://github.com/AomiRaku/dsh-accountDisplayName-edit)
- **dsh-composer-assist** — DSH 输入助手：输入预测、草稿补全（自动补全）、提示词润色（prompt 优化）；根据对话给出下一句建议。Tab 接受只填入草稿、不自动发送，建议按会话保留。需配置模型，调用可能计费。源码可见，修改须事先取得书面许可。
  `v0.7.6` · [源码](https://github.com/Lphehe/dsh-composer-assist)
- **dsh-recover-context** — 回退到任意一条提问之前，或编辑上一条问题重新提交；被丢弃轮次产生的工作区文件会一并还原。
  `v1.0.8` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/dygin/dsh-recover-context)
- **@ratel-works/dsh-lumina** — 让交互，泛起流光。为 DeepSeek Harness 添一层恰到好处的动效，支持效果调整并跟随系统「减少动态效果」。
  `v0.6.2` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/golddream-y/ratel-dsh-lumina)
- **@tomowang/dsh-tui** — 基于 pi-tui 的 DeepSeek Harness 全屏终端客户端：会话回放/续接、流式响应、可折叠工具卡片、终端内审批与提问、模型/预设/权限/计划/目标管理、Shell 模式，以及轨迹（trajectory）事件台账。
  `v0.10.2` · [源码](https://github.com/tomowang/dsh-tui)
- **@ragnoryok1/dsh-client-locale-ru** — 为 dsh Web 界面提供俄语：整个界面，加上 520 个第三方插件的菜单——584 个分区、67 666 条文案。
  `v0.2.18` · [源码](https://github.com/Ragnoryok1/dsh-client-locale-ru)
- **dsh-plugin-layout-organizer** — 对 DSH 投放到侧边栏顶部、侧边栏底部、对话标签、输入框停靠行与设置页导航的插件按钮做拖拽排序、官方/第三方分隔线与按钮收纳。只改变显示位置，不改动插件注册表。
  `v1.2.6` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/var-lin/dsh-plugin-layout-organizer)
- **dsh-aoci-panel** — DSH 的 AOCI 认知面板：多工作区总览、单仓库索引与治理视图、MCP 绑定诊断，以及引导式/批量初始化。治理、校验与引导式/批量初始化需宿主机装有 aoci CLI；仅浏览索引不需要。
  `v0.5.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/donyue7/dsh-aoci-panel)
- **dsh-skill-browser** — 悬浮球面板直接浏览技能库：技能库位置由你自己指定（弹系统目录选择框，默认 ~/.dsh/skills，插件不含任何预设路径），技能按一级/二级分类归组，中文简介直接读各 SKILL.md 的 frontmatter，支持按技能名、简介或原文实时搜索，点卡片查看 SKILL.md…
  `v1.9.9` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/loyalchiiina/dsh-skill-browser)
- **dsh-brain-viewer** — 把 Markdown 笔记编译成脑形关系图谱的 DSH 侧栏查看器，附带文档导入与图谱构建管线。查看器自带演示数据、无需 Python；用自己的笔记重建图谱需要 Node.js 20+ 与 Python 3.8+，在命令行里运行。
  `v0.3.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/vamyane/dsh-brain-viewer)
- **dsh-workspace-ranswork** — 侧栏工作区面板，在运行中任务与全部对话之间切换，统一为一张可自由排序的卡片列表，每张卡片可置顶、重命名、复制 ID、分叉、停止与归档。
  `v0.4.3` · [源码](https://github.com/rans725/dsh-workspace-ranswork)
- **@winteries/dsh-turn-fold** — 更好的折叠栏：将工具调用与 Think 段自动折叠为步骤折叠栏，回合结束后整回合收拢为带实时指标（耗时/首字/token/tok/s/缓存命中）的回合折叠栏，只保留最终总结正文；前导图标可自定义，内置动态扑克牌（运行中花色循环卡牌动画、收起牌堆、展开扇形），提供官方折叠方式设置行，适配 DSH 新旧版本。零侵入…
  `v0.7.3` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/Winter-And-You-Gone/dsh-turn-fold)
- **@michengai/dsh-codex-ui** — 为 DeepSeek Harness 网页端重构 Codex 风格侧栏、工作区会话树、全局搜索和轮次导航。
  `v1.1.49` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-codex-ui)
- **dsh-functions** — 给 DSH 顶端加一个可扩展的「功能」栏：插件注册的一键动作都在这里，支持分级确认与二级菜单。0.4.0 起自带了「重启 DSH」功能，不再需要单独安装重启插件。
  `v0.5.2` · [源码](https://github.com/Num86/dsh-functions)
- **dsh-settings-nav-manager** — 为 DSH 设置页导航加编辑模式：拖拽排序、逐个显隐、用命名可折叠抽屉分组，排版存在插件自己的设置命名空间；还能把最多 5 个分区钉到主界面侧栏，一键直达。
  `v1.4.4` · [源码](https://github.com/ZIye1208/dsh-settings-nav-manager)
- **dsh-button** — DSH 输入框旁的可编辑快捷按钮：发送预设文字，或只填入草稿；可排序、换位置、调大小。纯文字动作，不执行宿主命令；有草稿时不覆盖。
  `v1.3.0` · [源码](https://github.com/xinming-chenniang/dsh-button)
- **dsh-metaphysics** — 命理排盘：八字 42 神煞并给出格局、用神与大运流年吉凶评分；紫微斗数 34 格局、主星庙旺、大限与流年流月流日流时四化；另有六爻、梅花易数、大六壬与塔罗，并可按所问之事生成解析；排盘在当前环境计算，地名解析可选走 Nominatim。
  `v0.17.0` · 引擎 `>=0.2.0` · [源码](https://github.com/xuanfu-web/dsh-metaphysics)
- **dsh-ide-workbench** — DSH 侧栏里的 JetBrains 式 IDE 工作台：Project 文件树、Commit 面板、泳道图 Git 历史、真实 PTY 终端与内置编辑器（Markdown 预览、全项目查找），并支持聊天文件链接与发送到聊天框的 @ 引用。
  `v0.4.0` · 引擎 `>=0.1.7` · [源码](https://github.com/LiangshouX/dsh-ide-workbench)
- **dsh-sidenote** — 为 DeepSeek Harness 提供侧边追问与划选注释，保留完整对话历史，将结论带回主线。
  `v0.7.2` · 引擎 `=0.2.0-rc.2 || =0.2.1-rc.2 || =0.2.1-rc.3` · [源码](https://github.com/g-yixuan/dsh-sidenote)
- **dsh-subagent-workspace-ui** — 搜索、监控、打断与批量归档工作区子代理，支持实时活动/思考流式展示与活跃浮窗。
  `v1.11.0` · [源码](https://github.com/miuzel/dsh-subagent-ui)
- **dsh-markdown-input** — DSH Web UI 输入区 Markdown 实时渲染：输入中的粗体/列表/代码块即时成型（CodeMirror 接管卡）；已发送的用户消息按 Markdown 呈现；粘贴富文本转为干净 Markdown。
  `v0.2.2` · [源码](https://github.com/long6177/dsh-markdown-input)
- **dsh-prompt-optimization-master** — 在输入框加一个按钮，把未发送的草稿改写为更清晰、更具体的提示词；支持一键还原、独立设置页，以及单次调用的模型覆盖。
  `v0.3.3` · 引擎 `>=0.2.0-rc.2 <0.4.0` · [源码](https://github.com/ruiyukirin/dsh-prompt-optimization-master)
- **dsh-pins** — 把对话中划选的段落固定到按对话隔离的右侧栏面板，在正文里留下持久标记并可点击跳回原文；可从划选浮条或输入框 @ 把已固定的段落引用进消息，片段支持标签，面板可搜索、筛选并导出 Markdown 提纲。
  `v1.0.2` · [源码](https://github.com/ylw-ux/dsh-pins-fixtool)
- **dsh-progress-caption** — 在输入框上方加一行小字，告诉你 AI 现在第几步、在做什么、成没成，比如「第 3 步 · 正在执行命令 npm test · 琢磨中」。全部靠当前环境规则推断，不调模型、不联网、不改 DSH 的任何数据。
  `v0.3.1` · [源码](https://github.com/wanted09527/dsh-progress-caption)
- **@lyx0717/dsh-washer** — 把 DeepSeek Harness 会话状态渲染成一台滚筒洗衣机：桌面浮窗用动画显示会话运行状态，三种皮肤（精密家电/动漫/像素）。浮窗支持两档尺寸、点击穿透，并跟随宿主应用的深浅色主题；设置面板内置于 DSH 界面，可开关浮窗与调整外观。
  `v0.3.4` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/lyx0717/dsh-washer)
- **dsh-prompt-predict** — 助手回复结束后预测用户的下一句话，以灰色 ghost text 浮在输入框里；Tab 整条采纳、Alt+→ 逐段采纳、↻ 换一条、Esc 忽略。
  `v0.2.8` · [源码](https://github.com/ferrisching/dsh-prompt-predict)
- **dsh-up-session** — 在 DSH 侧边栏跨工作区汇总置顶与最近会话，提供状态标记和显示设置。
  `v1.0.1` · 引擎 `>=0.2.1-rc.3` · [源码](https://github.com/kyrsieger/dsh-up-session)
- **dsh-input-assistant** — 为 DSH 输入框提供提示词优化、下一句预测、输入续写与当前会话草稿暂存。
  `v0.1.3` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Somnus678/dsh-input-assistant)
- **dsh-thoughtdag** — 在 DeepSeek Harness 中嵌入可编辑对话画布，通过连线选择画布请求的上下文，支持分支、合并与本地 Agent 会话导入。
  `v0.5.25` · [源码](https://github.com/chenxiachan/thoughtdag)
- **dsh-550c-boot** — 给 DSH 加一段 550C 全屏开机片头：简易档 4 秒、完整档 16 秒覆写流程，点击或按 Esc 跳过，四套磷光配色。首帧由宿主半边在文档解析阶段注入，DSH 自带的 Loading 卡片不会露脸；桌面窗口右上角那条原生按钮条带在片头期间透明化，按钮像浮在动画上。
  `v0.5.2` · [源码](https://github.com/yannicksong0106/dsh-550c-boot)
- **dsh-mcp-skills-board** — DeepSeek Harness 的 MCP 服务器与技能管理面板：侧栏面板加插件页配置区，支持搜索、状态灯、逐行开关、详情，以及按 Codex mcp_servers 字段设计的添加服务器表单。
  `v0.3.0` · [源码](https://github.com/JasperPengC/dsh-mcp-skills-board)
- **dsh-sidecard-ask** — 在 DSH Web 界面划词就地追问（浮出按钮，或 Alt+Q 快捷键）：答案由不继承父上下文的独立子代理流式产出到侧边卡片，承载面为原生右侧栏 / dsh-better-sidebar / 内置浮层，也可把问题改为落回主对话。
  `v2.1.2` · 引擎 `>=0.1.2-rc.1 <0.3.0` · [源码](https://github.com/HERO476/dsh-sidecard-ask)
- **@mzzsfy/dsh-settings-nav-icons** — 设置导航分区图标：把千篇一律的齿轮换成各分区专属图形，并为插件市场卡片头像槽提供插件图标，卸载后重载页面即恢复官方图标。
  `v0.5.0` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-find-bar** — 桌面端浏览器式页内查找条（Cmd/Ctrl+F）：全文高亮、匹配计数，可在对话区与右侧面板间切换搜索范围。
  `v0.4.0` · 引擎 `>=0.2.0` · [源码](https://github.com/secyborg/dsh-find-bar)
- **dsh-refresh-restart** — 在 DSH 桌面版界面左上角「收起侧边栏」按钮旁加两个按钮，macOS、Windows、Linux 三端都可用。刷新只重载界面层，宿主里正在生成的回合不中断；重启会在确认一次后退出整个应用并自动重新打开，会话与工作区都在。重启是 POST，必须带每次启动随机生成的 token（由插件状态接口提供）；插件不联网、不读会话…
  `v0.3.0` · [源码](https://github.com/hulibuld/dsh-refresh-restart)
- **@deepseek-harness-tui/dsh-tui** — Claude Code 风格全屏终端 UI：像素鲸鱼顶栏、实时工作状态行、思考流式展开。
  `v0.17.0` · [源码](https://github.com/ccch1mneyyy/dsh-TUI)
- **dsh-deepseek-chat** — 在 DSH 桌面版中提供 DeepSeek 网页聊天与 Harness 工作区之间的切换。
  `v0.2.7` · 引擎 `0.2.0-rc.2 || >=0.2.1-rc.1 <0.2.2-0` · [源码](https://github.com/xingxingbk-git/dsh-deepseek-chat)
- **dsh-select-translate** — 在任意 Windows 应用里划词，鼠标旁弹出只含译文的置顶卡片；译文流式出现并跟随最新一行，单次上限 15000 字。仅 Windows。
  `v0.1.5` · [源码](https://github.com/SHAN5246992ZHUI/dsh-select-translate)
- **dsh-update-status** — 只读的 DeepSeek Harness Web 侧栏版本芯片，显示当前运行版本、npm latest/next/alpha 通道、兼容性标识，以及仅复制的升级命令。
  `v0.4.7` · [源码](https://github.com/idoall/dsh-update-status)
- **dsh-sidebar-manager** — 把 DSH 左侧的面板列表折叠成一行分组头；点齿轮进入编辑态，对两组内容分别勾选显示/隐藏、拖动排序——侧栏扩展入口与会话顶部视图标签。
  `v0.8.9` · [源码](https://github.com/zuojinxin/dsh-sidebar-manager)
- **@whybebabo/dsh-better-workspace** — 在原生工作区列表之上叠加主题分组：emoji 分组文件夹、筛选与搜索、批量归档，以及带安全边界的永久删除。
  `v0.1.5` · [源码](https://github.com/whybebabo/dsh-better-workspace)
- **@yfwu2020/dsh-think-flow** — DSH Web 右侧栏的思维链面板：把每个会话的实时思考折成 turn → step 分组，每一步带该步的思考原文与工具调用。默认只展开最新一轮，更早的轮次收成一行；步骤按本地规则合并成阶段块，正在等工具的那一步单独标出，工具失败显示原因，思考原文按步按需取回，全轮目录在本地搜索轮次标题、用户原话与轮号，整轮可用一次模…
  `v0.3.3` · [源码](https://github.com/yfwu2020/dsh-think-flow)
- **dsh-session-color** — 给 DeepSeek Harness 侧栏会话行加右键标色：默认红色、十色色板与自定义取色，颜色本地持久化。
  `v0.1.1` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/yangzhenyu0817/dsh-session-color)
- **dsh-bulletin-panel** — 侧边栏面板：把公告和投递状态表放进 DSH 界面 —— 列出公告以及每条有几个会话见过，并让用户发布、编辑、删除条目。需要第三方插件 dsh-better-sidebar。
  `v0.3.40` · [源码](https://github.com/southsnowL/dsh-bulletin)
- **dsh-goodies** — 模型菜单里的思考强度滑块、运行状态旁的实时速度与本轮用量、每条回答的输入/输出/缓存成绩单，以及每轮结束的完成通知；各自独立开关，只作用于界面。
  `v0.1.6` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/LyaxZ/dsh-goodies)
- **dsh-annotation** — 划选回答文字就地加注释：保留原文引用加自己写的备注，每条在草稿里变成一枚胶囊，多条一起随消息发出；两条以上时输入框上方会多一个胶囊用来跳回原文或全部清除。胶囊需另装 dsh-paste-chip，否则每条注释在草稿里是一行纯文本。
  `v0.1.9` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/zengxiaolou/dsh-annotation)
- **@zengevent/dsh-effort-dial** — DeepSeek Harness 输入框里的推理强度滑杆：按当前模型声明的思考档位拖动，松手把档位写入本会话；可选「自动区间」在工具报错后逐档上调，另有可选模型路由按任务类型挑 provider/model。
  `v0.8.2` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/zengxiaolou/dsh-effort-dial)
- **dsh-chat-image-lightbox** — 聊天图片全屏查看器：点击任意图片打开原始分辨率大图，支持缩放（滚轮、按钮、快捷键）、拖拽平移、左右翻页、文件名显示、下载保存，以及键盘方向键与移动端滑动切换。输入框旁一个「对话图显控制」面板，可一键把整个会话的图收成可调列数（1–12，自动记忆）的缩略图网格，或整块隐藏并收掉占位、随时还原；图片只原地加样式，绝不搬移或…
  `v1.9.3` · 引擎 `>=0.1.7-0 <0.3.0` · [源码](https://github.com/loyalchiiina/dsh-chat-image-lightbox)
- **dsh-piano-nav** — 提供完整历史轮次导航、过程步骤折叠、最终结果与结构化问答琴键，以及鼠标连续跟随交互。
  `v1.4.1` · 引擎 `>=0.1.7-rc.1 || >=0.2.0-rc.1` · [源码](https://github.com/amazing-fish/dsh-piano-nav)
- **dsh-prompt-enhance-cn** — 输入框四档提示词增强——按钮或全局热键把草稿改写为轻度整理、单段提示词、五段任务书或八段系统提示词，支持前后对比、回填与撤销；不改变原意、不凭空编造需求。
  `v0.3.2` · [源码](https://github.com/qwe3120695033/prompt-enhancer)
- **dsh-weather-panel** — 侧边栏天气面板：当前天气、5 天与 24 小时预报、逐小时降水、历史气温、中央气象台预警（分级提醒、区县级匹配）、雷达拼图、风云四号 B 星卫星云图、台风路径，以及 ECMWF 与西北太平洋海表温度专业图。
  `v1.6.2` · [源码](https://github.com/python3603/dsh-weather-panel)
- **dsh-keyboard-shortcut** — 为 DSH 设置面板增加「快捷键」页面：六个可改键命令（权限模式切换、思考强度调节、状态页、任务清单），并展示翻页键跳转与可选的输入框 Enter 重映射。
  `v0.2.1` · [源码](https://github.com/OZONGO/dsh-keyboard-shortcut)
- **dsh-composer-live** — DSH Web 输入框 Markdown 实时渲染与输入增强——代码块语法高亮、列表引用续项、格式工具栏。
  `v0.2.17` · [源码](https://github.com/zeusxx/dsh-composer-live)
- **@jidekaixin2dian/dsh-file-actions** — 右键聊天里的任意文件引用，即可打开、用系统关联应用打开、在文件管理器中定位、复制路径或文件内容、另存为。
  `v0.1.14` · [源码](https://github.com/jidekaixin2dian/dsh-file-actions)
- **dsh-preview-media** — 在右侧栏文档预览里播放视频/音频，经带鉴权的 HTTP Range 路由流式读取，桌面端可拖动进度。
  `v0.1.5` · [源码](https://github.com/439436269-ctrl/dsh-preview-media)
- **dsh-ticker-jp** — DeepSeek Harness 的全球股市行情悬浮窗：默认显示日经225 与 TOPIX ETF，另支持通过 Yahoo Finance 实时报价全球市场——日本 .T、美国、香港 .HK、中国 .SS/.SZ 及任意代码，带自选列表、显示别名与 16 种界面语言。
  `v1.0.5` · 引擎 `>=0.1.0-rc.7 <0.3.0` · [源码](https://github.com/MurasakiIzumi/dsh-ticker-jp)
- **dsh-manim-card** — 新增 manim_card 工具，把 Manim Python 渲染为聊天流中可播放的动画卡片；代码经随包分发的运行时在浏览器内执行，当前环境无需安装 Python；导出视频时，当前环境装了 Manim 就走 CLI 渲染，否则在浏览器内逐帧导出。
  `v0.2.0` · [源码](https://github.com/snowowowo/dsh-manim-card)
- **dsh-code-pill** — 把 DSH 对话中的行内代码渲染为带语法色和可选文件标记的胶囊，并处理聊天中的文件路径；可选折叠动作行着色与思考文字彩虹刷入，设置页提供六套预设、颜色与字体选项。
  `v0.7.2` · [源码](https://github.com/KouzakiUmi/dsh-code-pill)
- **dsh-tidy-display** — 诚实说明：将两个社区插件合并为一个更安静的显示层——流式阅读视图来自 dsh-better-display（fork），消息轨道来自 dsh-tidychat。为主题爱好者把思考正文与工具调用输出包裹进半透明消息泡泡框，避免文字直接铺在复杂壁纸或皮肤上难以分辨。已在 DSH 0.1.0-0.2.0 各 rc…
  `v0.4.5` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-tidy-display)
- **dsh-canvas-tsx-sidebar** — dsh-better-sidebar 扩展：把 Qoder Canvas `*.canvas.tsx` 静态解析为结构化页面渲染在右侧栏（不执行源码，无 eval / bundler / 沙箱 iframe），并附带 `.tsx` 文件查看器接管与一个教 LLM 写该格式的 Skill。
  `v0.7.4` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-canvas-tsx-sidebar)
- **dsh-brief-sidebar** — dsh-better-sidebar 扩展：把会话简报渲染成右侧栏「概要」tab——来自 `todos` 投影的进展看板，加上回合内产物列表——并在挂载期间遮蔽 composer 上方的官方 todo 面板。
  `v0.9.15` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-brief-sidebar)
- **dsh-paste-dock** — 大段文本粘贴自动存为 pastes/*.txt 附件,输入框上方 dock 卡片管理,草稿内只留可辨识的最小徽标。
  `v0.1.7` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-paste-dock)
- **dsh-arrowkey-nav** — DSH Web GUI 的方向键导航：上/下在当前工作区内切换会话，左/右切换工作区；会话身份来自客户端控制器而非 DOM；输入框存在草稿时把方向键交还给光标。
  `v0.5.5` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-arrowkey-nav)
- **dsh-input-traffic** — 三档（now/next/later）输入规划 dock：以红/黄/绿色优先级条取代忙碌 Enter 排队栏，普通 Enter 排入 later，支持多行原位编辑、拖拽排序与会话级冻结/恢复；冻结按钮经 stopNextTurn/resume RPC + 输入框锁定，桥接另一独立插件…
  `v0.7.6` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-input-traffic)
- **dsh-plugin-genui** — Code-first React + TypeScript 任务应用，支持 Inline、Canvas、全屏与 localhost；交互状态可供 Agent 后续轮次读取，MCP 和 API 访问在用户授权后执行。
  `v0.15.2` · [源码](https://github.com/pengyue-polaron/deepseek-harness-genui)
- **dsh-think-translate** — DSH Web 界面显示层翻译：将思考链、任务卡片与回答正文翻译为 8 种目标语言之一（本地 Ollama 或 Google/Bing，自动选择），原文完整保留。
  `v1.2.14` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/UncleK/dsh-think-translate)
- **dsh-im-companion** — dsh-im辅助插件：创造助理/家的概念，把飞书/微信/QQ等机器人收进DSH工作区，并提供更多强大的扩展功能。增强DSH原生会话状态:哪些在执行任务、哪些在等你回复、哪些有异常。感谢使用🌹。
  `v0.2.25` · 引擎 `>=0.1.2-alpha.2 <0.3.0-0` · [源码](https://github.com/FeatherHunter/dsh-im-companion)
- **dsh-global-todo** — 侧边栏里的全局跨会话待办清单，人和 agent 共用同一份：十个 global_todo_* 工具可在任意会话中新增、批量抓取、修改、挂文档与链接、追加进展记录、标记完成；每条待办可按四种方式交给 agent 会话，派发结果记回条目本身。清单存成一个 JSON 文件。
  `v0.17.1` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/LUgABeEEE/dsh-global-todo)
- **dsh-file-review** — 在 Diff 面板中审查 Agent 的文件改动、添加评论以继续修改，并撤销已编辑或新建的文件。
  `v0.8.11` · 引擎 `>=0.2.1-rc.1 <0.2.2-0` · [源码](https://github.com/left0ver/dsh-file-review)
- **dsh-todos** — 侧边栏里的类 Todoist 待办管理：项目/标签/优先级、中英双语自然语言快速添加、重复规则、统计仪表盘、导入导出、七个 Agent 工具与到期提醒。
  `v0.1.3` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/houdinicc/dsh-todos)
- **dsh-plugin-rightbar-divider** — 修复整页缩放后右侧栏拖拽手柄偏移、分割线拖不动的问题，把命中区加宽到 12px 并显示悬停提示线。
  `v0.1.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/1700563146/dsh-plugin-rightbar-divider)
- **dsh-bot-board** — DS Bot 团队的一块浮动看板：谁在跑、在跑什么工具，谁在等别的 Bot 交活，谁在等你批或等你答，谁报错了；带按发送方分组的交接表、显示待批命令或待答问题的单个 Bot 抽屉，收起后是一条状态胶囊。只读，不写 DS Bot 的数据。需要先装 DS Bot（按 0.1.7 与 0.2.0 开发）；没有 DS Bot…
  `v0.7.3` · [源码](https://github.com/coii08o0o/dsh-bot-board)
- **dsh-img2img-config** — 为 img2img-studio 提供两个界面：① 输入框上方的图片编辑器（编号标记 + 每处改法、纯色背景移除、涂抹掩码擦除、比例与尺寸调整，结果以附件 + manifest 清单胶囊回填输入框）；② 设置页「识图与生图」供应商面板（三级优先级、拖拽排序、每通道模型降级链、欠费探测自动关停、ChatGPT…
  `v0.1.1` · [源码](https://github.com/Dogwind221/img2img-studio)
- **@weibaohui/dsh-sidebar-tidy** — 侧栏收纳：把「新会话」下方被各插件塞满的入口行——全局面板行、插件入口行（自家/第三方一律识别）、底部入口——统统收进一个菜单按钮，点开二级菜单原样触发各入口；想常驻的加名称白名单即可，侧栏折叠成窄轨时按钮自动变纯图标。
  `v0.1.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-sidebar-tidy)
- **dsh-pretty-cool** — 紧凑界面：无边框消息、轻量队列、输入区控制，以及可调圆角。仅适配 DSH 0.2.1-rc.2；启用期间会替换官方侧栏模块，移除后恢复原样。
  `v1.4.15` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/taotao7/dsh-pretty-cool)
- **dsh-plugin-ui-zoom** — DSH Web 界面整体缩放（70%–160%），可用 Ctrl+滚轮、DSH 快捷键中心或输入框旁的胶囊操作，带正文栏宽度补偿，缩小后是一行更多字而不是一条更窄的栏。
  `v0.1.2` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/1700563146/dsh-plugin-ui-zoom)
- **dsh-comfyui-panel** — 把真正的 ComfyUI 编辑器作为侧栏标签嵌进 DeepSeek Harness，每会话的工具直接读写屏幕上那张工作流，面板可启停 ComfyUI，且不向 ComfyUI 安装任何东西。
  `v0.6.10` · 引擎 `>=0.1.2-alpha.4 <0.3.0-0` · [源码](https://github.com/Natsubrei/dsh-comfyui-panel)
- **dsh-preview-blender** — 在右侧栏文档预览里打开 .blend：Blender headless 导出缓存 GLB，零依赖 WebGL 视口与场景统计。需要当前环境安装 Blender 3.6 或更高版本。
  `v0.1.0` · [源码](https://github.com/439436269-ctrl/dsh-preview-blender)
- **dsh-preview-stl** — 在右侧栏文档预览里打开 STL：浏览器解析二进制/ASCII，WebGL 视口 + 尺寸/体积/表面积/水密统计。
  `v0.1.0` · [源码](https://github.com/439436269-ctrl/dsh-preview-stl)
- **dsh-input-assist** — 输入框 ghost 补全：停笔后 FIM 建议内联流式渐显（SSE，首 token 即上屏），Tab 逐词采纳、Shift+Tab 全量，重新输入或 Esc 会真正取消在途请求；错别字双层检查：浏览器本地词典扫描（中文错词、英文错拼与专名大小写、本浏览器自定义词条）叠加防抖 LLM…
  `v0.8.0` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/honlnk/dsh-input-assist)
- **dsh-todo-board** — 跨会话 TODO 板：可拖动浮窗按工作目录分组、拖拽排序，每条待办带一个执行模式（仅提醒 / 在当前会话续跑 / 在同目录新开会话）、可附最多 4 张图片（派发时作为真正的图片附件发给模型）、以及一个可选的定时执行时间；两个勾选框分别记录 AI 已完成与用户已验收，AI 完成一项后自动接续该目录下一条未完成待办。
  `v0.13.5` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/sueqet/dsh-todo-board)
- **dsh-codinput** — 把聊天输入框换成 CodeMirror 6 的编辑器式输入面板：行号、编辑 + Markdown 预览分屏、悬浮窗与全高侧栏标签，同一时刻只有一个输入入口。草稿走官方输入机；宿主有语音输入按钮时原样渲染官方语音组件，数据行与上下文小圈与官方 dock 同源。
  `v0.3.5` · [源码](https://github.com/Witherwithwinter/DSH-Codinput)
- **dsh-chat-ctxmenu** — 给 DSH 对话区加右键菜单：复制选中内容或整条消息；把消息图片和点击预览后的大图复制为 PNG 到剪贴板或另存为文件；识别绝对路径、相对会话工作区的路径、~/ 以及代码内联路径，一键打开、 在文件管理器中显示、用其他应用打开、复制绝对/相对路径；链接可打开或复制。所有候选路径都会 先由 Host…
  `v1.0.3` · [源码](https://github.com/kingofpowers/dsh-chat-ctxmenu)
- **dsh-deepseek-web-sync** — 仅 Desktop。把 DeepSeek 网页版放进 Harness 右侧栏：同步主题、自动打开、网页登录一次即可保持，并一键把提问带入当前对话。
  `v3.1.0` · [源码](https://github.com/S-anZZz/dsh-deepseek-web-sync)
- **@orderg-x/dsh-video-preview** — 在对话流里直接播放本地视频和音频。模型这一轮写出的媒体文件（录屏、转码、配音），只要路径出现在它跑的命令、命令输出或回复里，回合收尾时播放器就自动出现在回复正下方，不用调工具；别的文件用 play_video 工具播放。视频是带悬停预览的小卡片，音频是可拖进度的细条，走 HTTP Range…
  `v0.4.0` · [源码](https://github.com/OrderG-X/dsh-video-preview)
- **dsh-prompt-history** — 为 DSH Web 输入框提供终端式体验：↑/↓ 历史（前缀搜索、Ctrl+R）、Codex 风格的历史补全与下一句预测（Tab/→ 接受）、选中工具栏（复制/引用/侧聊追问）、右键直接粘贴、可拖动会话目录，以及能在右栏并行跑第二条 agent 线程的侧聊（fork 全上下文、浮动/分屏、双向桥接、并发写提醒）。
  `v1.6.0` · [源码](https://github.com/Xiaofei-fei/dsh-prompt-history)
- **dsh-design-studio** — 右侧栏的设计工作台。模型做网页、App 界面、海报、幻灯片、邮件时，每个 HTML 文件在画布上显示为一屏，套设备外框，文件一改就刷新；本地开发服务器经代理接入，热更新照常。点一个元素或框一块区域，选择器、源文件和样式就整理进输入框。另有设计变量面板、每轮对话前后自动存版本（拖动对比、回到某一版）、导出图片、局域网扫码…
  `v0.3.2` · [源码](https://github.com/OrderG-X/dsh-design-studio)
- **dsh-quick-replies** — 在会话输入区上方提供可管理的一点即发文本 chip；空闲时 queue、运行中 steer，不改写草稿。
  `v0.1.16` · [源码](https://github.com/idoall/dsh-quick-replies)
- **deepseek-harness-zh_pro** — DSH 网页 UI 综合增强：中文补全、统计单行显示、思考自动展开、对话宽度、会话归档与删除，并可选的提示词注入（默认关闭）。
  `v0.11.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/magian1127/deepseek-harness-zh_pro)
- **dsh-xueqiu** — 雪球行情面板：嵌入输入框上方，免登录查看 A股/港美股行情、指数与自选股，K线蜡烛图（成交量/均线/十字光标）、热榜、搜索、7×24 快讯，另有可拖动迷你指数徽章。
  `v1.25.0` · [源码](https://github.com/wanderer-yk/dsh-xueqiu)
- **dsh-client-auto-continue** — DSH Web 请求中断自动续跑：网络、超时或宿主崩溃等非人为失败后自动发送「继续」，支持错误分类、自适应退避、模板化继续文本与浏览器通知。
  `v0.17.0` · [源码](https://github.com/HsiangNianian/dsh-auto-continue)
- **dsh-better-workspace** — DSH 侧边栏「工作区」列表的层级树插件：工作区与会话名称中的 / 即虚拟分组（任意多级），添加工作区的目录流附带「所属分组」弹窗，重命名即时重排；每层行均支持右键操作与外观自定义（颜色、文字发光、字体粗细、原版图标库图标）。
  `v0.36.7` · 引擎 `>=0.1.6-alpha.2` · [源码](https://github.com/KannaKuron/dsh-better-workspace)
- **dsh-composer-plus** — 一个插件集成多项输入框与侧边栏增强，均可在设置中单独开关：git 改动面板（未提交 / 未暂存 / 已暂存 / 分支差异）、↑/↓ 输入历史、Shift+Tab 切换 /plan、对话中断或失败后一键 ▶ 继续、拖拽调整排队消息顺序、复制会话链接、Auto Review「本对话内允许」、项目状态标记与活跃项目置顶、后台…
  `v1.11.3` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/furkancak1r/dsh-composer-plus)
- **dsh-plugin-liquid-glass** — 适用于 DSH 桌面端的液态玻璃 UI 美化插件，可与大部分壁纸插件联动使用，目前仅适配深色模式。
  `v0.1.70` · [源码](https://github.com/smj-1680/dsh-plugin-liquid-glass)
- **@zhujiuyi/dsh-leftpanel** — 列出所有可以出现在左侧菜单里的功能，并在设置中逐个隐藏或显示面板入口。
  `v0.1.0` · [源码](https://github.com/zhujiuyi/dsh-leftpanel)
- **dsh-workspace-categories** — DSH 侧边栏工作区浏览器的分类树：工作区与其会话挂到自建分类下（折叠状态记忆），行可在分类间拖拽，新建工作区可直接落进某个分类（走系统目录选择器），分类可原地重命名与删除，会话行可归档 / 取消归档（运行中的会话走官方同款「停止并归档」确认）并配隐藏 / 含归档 / 仅归档三态筛选，行内按钮悬停有应用自带样式的提示，…
  `v0.2.1` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/Knight-Zjy/dsh-workspace-categories)
- **dsh-chat-tidy** — 一张样式表，按实测的 Codex 版式重排 DSH 对话页：14/22 px 正文，收紧标题、列表与块级节奏，使用圆角引用条，并把表格补成带主题化表头、行列分隔、短表铺满和宽表容器内滚动的 Tidy Tables；无设置项、不改写 DOM，仓库内附真实前后对比图。
  `v0.4.1` · [源码](https://github.com/ChuanTianML/dsh-chat-tidy)
- **dsh-select-quote** — 在 dsh 网页版对话里划词，把选中文本作为批注附到下一条消息。原文位置保留虚线高亮和序号角标，输入框上方的批注摘要可查看、编辑并跳回每一条批注。
  `v0.3.12` · [源码](https://github.com/latte03/dsh-select-quote)
- **dsh-font-enhancer** — DIY 你的 DSH 界面字体与颜色：10 个内置区域 + 框选建区，每区域独立设中英文字体、字号、行距、字重（100–900）、斜体开关与文字颜色取色器；内置 18 款中文字体与 18 款英文字体，支持全局统一覆盖，主题方案可保存、应用、重命名与删除。随机字体可按整站或单区域生成，配色可随机生成高区分度颜色；另有…
  `v1.5.3` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/loyalchiiina/dsh-font-enhancer)
- **dsh-mermaid-panel** — 把当前对话里的 Mermaid 图表渲染成右侧栏的一个页面，一图一卡片；点击卡片可全屏查看并缩放、拖动，对话里的原始代码块保持不动，因此复制或引用源码照常可用。
  `v0.1.4` · 引擎 `*` · [源码](https://github.com/Natsubrei/dsh-mermaid-panel)
- **dsh-workspace-combiner** — 多工作区管理器：把文档锚点目录与若干代码项目仓库组合进同一会话，注入绝对路径、递归文件索引、前后端端点落点索引与可选的开发规范，并把可写目录同步进沙盒。
  `v0.8.8` · [源码](https://github.com/ninglovegithub/dsh-workspace-combiner)
- **dsh-smart-prompt** — 在 DSH 输入框一键改写提示词：点「发送」旁的 ✦，按「标准」或「轻」档把草稿改写成 Agent 可直接执行的提示词，可撤回或重试；草稿缺少信息时通过提问卡片追问；校验路径、标识符、数字、URL、行内代码与 @ 提及在改写后逐字保留，丢失的会补回；可使用会话模型，或在插件页面指定专用模型。
  `v1.0.1` · [源码](https://github.com/Arrosam/dsh-smart-prompt)
- **dsh-file-finder** — 工作区文件查找面板：按文件名或内容搜索，用 DSH 原生右侧栏预览打开结果，需要时在内置编辑器里修改文本，并在保存前检查版本冲突。
  `v0.12.0` · [源码](https://github.com/chzisnull/dsh-file-finder)
- **dsh-jev-progress** — 通过 JeV 筛选并外显思考中的任务规划、进展和阶段小结，支持轻量摘要、DSH 原生翻译（需 JeV Key，会外部调用 Jev 服务并可能计费）及父子任务、串并行流程图。
  `v0.5.5` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Han-1413141/dsh-jev-thinkout)
- **@zzerx/dsh-plugin-notes** — dsh 便签插件：侧栏入口打开 Markdown 便签面板，支持自动保存、颜色标签、粘贴图片与任务清单。
  `v0.5.0` · [源码](https://github.com/0x7A7A6572/dsh-forge-studio)
- **dsh-vocab-study** — 离线背词面板：输入框旁一颗胶囊点开是词卡，可钉住的分页面板管着今日、进度、生词本与设置。
  `v0.3.2` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/wt0812/dsh-vocab-study)
- **dsh-flash** — DSH Web 快捷控制面板核心：可独立浮动的快捷面板，开关项由其它插件通过 quickControl 服务注册，内置皮肤系统与中英文 i18n；dock-base 工作台集成由 dock-flash 适配器单独提供。
  `v1.2.1` · [源码](https://github.com/tcgbp/dsh-flash)
- **dsh-peak-indicator** — 会话头部徽标：显示 DeepSeek 高峰/闲时状态、当前模型 token 单价，并按真实用量统计会话与每轮费用。
  `v0.1.33` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/future007s/dsh-peak-indicator)
- **dsh-page-refresh** — 在 DeepSeek Harness 会话头部加一个刷新按钮和一个电源菜单（重启 / 关闭 DeepSeek Harness）。纯客户端、零 token、零依赖。电源菜单目前仅支持 Windows。
  `v1.1.0` · [源码](https://github.com/day-day-dream/dsh-page-refresh)
- **@zephinel/dsh-intelligent-ui** — 在 DSH 对话中把 OpenUI Lang 答案渲染成交互卡片或阅读式文章，支持地图、图表、表单、PNG 图片导出和独立交互 HTML 导出。
  `v0.4.2` · [源码](https://github.com/Zephinel/dsh-intelligent-ui)
- **@sunshaobei/dsh-input-history** — DSH 输入框历史记录切换器：本地保存每条已提交的提示词（含附件，最多 50 条），空输入框时用上下方向键召回，并自动恢复文件引用与图片预览。
  `v3.0.4` · [源码](https://github.com/sunshaobei/dsh-input-history)
- **dsh-activity-pane** — DSH Web 活动会话总览窗格：将运行中、等待响应与近期活跃的会话集中到一个侧边窗格，含子代理层级、进度、模型与推理级别。
  `v0.18.0` · [源码](https://github.com/ccll/dsh-activity-pane)
- **dsh-tokmeter** — 在输入栏状态栏中实时显示当前流式响应解码速度（tok/s）的插件。
  `v1.0.1` · [源码](https://github.com/Toximiner/dsh-tokmeter)
- **dsh-status-bar-plugin** — Windows 11 x64 上的 DSH 悬浮玻璃状态栏：常驻胶囊显示本地 DSH web profile 的会话进度、当前步骤与待处理审批，可展开速览与详情；审批卡在 DSH 返回正式回执前保持只读，连接官方 Desktop 应用属实验性、未验收。
  `v0.2.8` · [源码](https://github.com/wfz2006/dsh-status-bar)
- **deepseek-harness-intelligent-ui** — 为 DeepSeek Harness 提供生成式交互界面：模型每次回答自行在 26 个校验过的原生组件与沙箱流式 HTML widget 之间选择，可按组件 ID 就地修补已渲染的界面，标签页、排序、筛选与表单值在刷新后恢复，滑块与筛选的重算在浏览器本地完成，不回调模型。
  `v0.2.9` · [源码](https://github.com/dreamfarer-space/deepseek-harness-intelligent-ui)
- **dsh-client-ui-quote** — 在 DSH 对话、文件预览或终端里选中文字即可引用：浮层提供「评论」「添加到对话」与「侧边对话」，Alt+Q / Alt+C / Alt+B 是同样的三个动作。引用以原生 reference-chip 插入输入框，评论与引用在同一颗芯片里；发送后消息里仍是一颗圆角胶囊，可点击展开、可复制，悬停卡片可「跳回原文」。右侧栏…
  `v0.12.2` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/BangBang-03/dsh-client-ui-quote)
- **@wszhoho/dsh-file-attachment** — 拖拽/粘贴/上传文件和图片，非多模态模型下图片自动调用已配置 VLM 识别。
  `v0.7.0` · [源码](https://github.com/wszhoho/dsh-file-attachment)
- **dsh-quote-annotate-pro** — 为 DSH 会话添加选区引用与锚点批注：选中文字带锚点进入输入框，输入框下方的引用条可跳回原文并高亮，发送后的引用块标明出处轮次与角色。
  `v0.3.15` · [源码](https://github.com/zhao-guang-ai/dsh-quote-annotate-pro)
- **@ryuu-64/dsh-find-all** — 搜索 DeepSeek Harness（DSH）各工作区普通对话的标题和已保存正文，可包含归档；也可按 Ctrl+F / Cmd+F 查找当前对话。
  `v0.1.14` · [源码](https://github.com/Ryuu-64/dsh-find-all)
- **dsh-toomuch-plugins** — 把 DSH Web 侧栏里工作区上方的全局面板入口收成侧栏底部的一个开关。
  `v0.1.1` · [源码](https://github.com/rivenshanghai/dsh-toomuch-plugins)
- **@goodandready/dsh-russian-lang** — 给 DeepSeek Harness 的「设置 - 通用 - 语言」加入俄语，覆盖核心界面与生态插件的词条。提供会话 Markdown 导出、消息内嵌翻译、实时排版、斜杠命令别名与 Alt+L 布局更正，以及一张设置卡片，全部通过运行时 locale 快照实现，不修改核心文件。
  `v0.4.5` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/GooDAnDReaDY/dsh-russian-lang)
- **dsh-actions** — 人与 Agent 共用的确定性项目任务：一份 actions.json，右侧栏运行面板与 Agent 工具双入口。
  `v0.5.2` · [源码](https://github.com/pure-craft/dsh-actions)
- **dsh-settings-drag** — 让 DeepSeek Harness 的设置面板可以自由拖动与缩放，位置与尺寸按浏览器记忆。
  `v0.4.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/yangzhenyu0817/dsh-settings-drag)
- **dsh-plugin-groups** — 在 DSH「已安装插件」页新增「我的分组」标签页：自定义分组与拖拽排序、彩色文字标签、中文备注、分组锁定、真实启停开关，以及两个预设快照槽位。
  `v0.3.1` · [源码](https://github.com/lerwa2025-a11y/dsh-plugin-groups)
- **dsh-quick-toc** — DeepSeek Harness 对话大纲：按回合整理整段会话的 Markdown 标题，侧边面板与全屏「幕布」两种视图；悬停预览可钉住对照，书签留住常回看的几处，右键即可跳转到某一节或复制标题及其下面所有层级。支持六种主题色与半透明材质、标题/提问/全文/跨会话搜索、阅读位置跟随与中英双语界面。
  `v0.10.2` · 引擎 `>=0.1.5-rc.3 <0.1.7-0 || >=0.1.7-alpha.1 <0.3.0-0` · [源码](https://github.com/LyaxZ/dsh-quick-toc)
- **dsh-life-pack** — 爱生活-覆盖你居家生活的方方面面。
  `v0.3.85` · [源码](https://github.com/FeatherHunter/ilife)
- **client-resume-button** — 在模型选择器左侧加一个「继续」按钮：上一轮被用户中止、崩溃中断或报错结束后，点一下让模型接着把那一轮做完；开始输入或添加附件时按钮收窄隐藏。
  `v0.1.5` · [源码](https://github.com/ddy-007/dsh-client-resume-button)
- **dsh-ghost-prompt** — 每轮对话结束后预测你的下一句话，以灰色幽灵文字显示在输入框里：按 → 接受，也可以直接开始打字、用 Ctrl+→ 逐词补齐，Esc 关闭。预测模型默认跟随当前会话，也能在设置卡片里指定；卡片里还有总开关和测速。
  `v1.2.2` · 引擎 `>=0.2.0` · [源码](https://github.com/MochiNek0/dsh-ghost-prompt)
- **dsh-local-files** — 由 DSH web server 直接提供的本地文件管理页：整盘浏览，图片/PDF/音视频/文本/Markdown/JSON/CSV/沙箱 HTML/docx/xlsx 预览，Range 下载与目录 ZIP，拖拽上传、复制粘贴、带冲突检测的文本编辑、新建/重命名/删除（进回收目录），以及 xlsx…
  `v0.2.0` · [源码](https://github.com/DeveloperYe/dsh-local-files)
- **dsh-group-status** — DSH 侧栏折叠分组聚合徽标：收起的文件夹行显示进行中/待审批/已完成/定时任务/等待评审的聚合状态，带数字与悬停明细。（侧栏徽标 / 分组状态 / 聚合）
  `v0.5.0` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/dsh-plugin-collection/dsh-group-status)
- **dsh-auto-maximize** — DSH 桌面版启动时自动最大化主窗口，等价于手动点一次最大化按钮。跨平台（Windows/macOS/Linux），尽力而为，host-only 插件。
  `v1.2.0` · [源码](https://github.com/FideFeiPlane/dsh-auto-maximize)
- **dsh-quorfloat** — DeepSeek Harness（DSH）的系统级桌面悬浮窗插件：按下全局快捷键即可呼出桌面悬浮窗口，支持工作区与会话切换、审批与追问处理，以及插件自身的诊断日志导出。
  `v0.1.9` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/Azetus/dsh-quorfloat)
- **@eduwork/dsh-annotation** — 选取回复文字、编辑编号批注并随问题一起发送，复用 DSH 原生输入框引用、草稿保存和发送流程；需 DSH 0.2.x 系列中的 0.2.1-rc.2 或更新版本。
  `v0.1.0` · [源码](https://github.com/ECNU/EduWork)
- **dsh-muv-engine** — MUV 引擎：执行角色卡的 regex_scripts 实时替换模型输出，追踪变量、渲染状态栏、展开宏与 LaTeX、为标签代码块（信纸／终端／报纸／手机）套样式。需同时安装伴生插件 dsh-muv-table。
  `v0.4.7` · [源码](https://github.com/chen731215-dev/dsh-muv-engine)
- **dsh-muv-table** — MUV 变量表格编辑器：树形变量面板、宏测试浮窗（random／pick／roll）、骰子快捷栏与 pick 缓存管理。dsh-muv-engine 的伴生插件。
  `v0.3.6` · [源码](https://github.com/chen731215-dev/dsh-muv-table)
- **dsh-mobile-sidebar** — 視窗闊度細過 1024px 時，側欄完全移出 shell frame，改由頁首按鈕以浮動抽屜方式打開，令對話可以用盡整個螢幕闊度；闊螢幕版面唔受影響。
  `v0.1.3` · [源码](https://github.com/wilsonchengassistant/dsh-mobile-sidebar)
- **dsh-prompt-optimization** — DSH 输入框提示词优化：把粗糙草稿改写成结构清晰、无歧义的提示词，支持一键撤回、引用芯片保护、三种模型来源与断连即停。
  `v1.4.1` · [源码](https://github.com/KukaNo996/dsh-prompt-optimization)
- **dsh-loupe** — 在浮窗里解释 DSH 对话中选中的词或句子：走独立通道、不污染当前会话，解答可以固定成独立会话。
  `v1.2.0` · [源码](https://github.com/Rice00/dsh-loupe)
- **dsh-mobile-upgrade** — 需要 DSH 0.1.5-rc.1。dsh web profile 的手机端体验修复：窄屏抽屉与设置标签、全宽模型菜单、卡住请求的网络状态芯片，以及把会话层级、subagent 与后台任务芯片收进一张可点开面板的窄屏头部收纳器。
  `v0.8.11` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/langyo/dsh-mobile-upgrade)
- **dsh-quick-prompt** — 在输入框加一个按钮，点一下就把草稿原地改写成精确提示词，可一键恢复原文。
  `v0.1.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/SouthernSibyl/dsh-quick-prompt)
- **dsh-thinking-bar** — 把输入框右下角的模型 / 推理等级选择器换成两级菜单，并提供六种滑杆视觉。
  `v1.0.7` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/TonyKingWJX/dsh-thinking-bar)
- **dsh-ui-zoom** — Ctrl+滚轮整页缩放（60%–180%，记住比例），右下角常驻「设置」入口可打开宿主设置面板，Ctrl+0 复位。
  `v0.4.4` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/sjrslh/dsh-ui-zoom)
- **dsh-pending-review-glow** — 按待审批、运行中、刚完成三种状态给侧边栏会话行上色并加呼吸动效，行尾配同色状态点。
  `v0.2.0` · [源码](https://github.com/BroCC57/dsh-pending-review-glow)
- **dsh-ui-design-toggle** — 需先安装 ui-ux-pro-max 设计技能，本插件只做门控。在 DSH 侧边栏底部加一个开关，一键启用/停用 ui-ux-pro-max 设计技能，选择保存在 profile 设置里。
  `v0.2.1` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/YukoZ1227/dsh-ui-design-toggle)
- **@changfenhuang/dsh-genui** — 助手回复内渲染交互式 UI 组件：布局、图表、表单、测验、mermaid、3D 场景与回传事件循环。
  `v0.14.0` · 引擎 `^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/omdsh-dev/dsh-genui)
- **dsh-quick-workspace** — 將「新增工作區」流程中喺主機彈出嘅資料夾選擇器，改成輸入名稱嘅對話框，令遠端瀏覽器可以直接建立並開啟工作區。
  `v1.0.1` · [源码](https://github.com/wilsonchengassistant/dsh-quick-workspace)
- **dsh-zh-hant** — 為網頁介面加入繁體中文（zh-Hant）語言，經語言服務註冊，每個 namespace 各有一份字典，並可在「設定 → 一般 → 語言」揀選。
  `v0.1.1` · [源码](https://github.com/wilsonchengassistant/dsh-zh-hant)
- **dsh-novel-generator** — 小说生成器：按时间线生成世界快照，通过世界快照和最近章节自动推演新章节。需 DSH >=0.2.1-rc.2。
  `v0.1.19` · [源码](https://github.com/XiaoOu2024/dsh-novel-generator)
- **dsh-mindmap** — 对话式 Markdown 思维脑图工作台：逐步编辑完整文档，实时同步右侧可视化，并在工作目录中打开、管理和导出脑图。
  `v0.18.1` · [源码](https://github.com/guhanfei-ai/dsh-mindmap)
- **dsh-cuigengji-plugin** — 催更姬：DSH 小说写作工作台，支持章节编辑、共享剧情画布、人物与世界设定分组、写作预设和按范围导入导出，供作者与 AI 一起讨论和推进故事。
  `v0.5.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/mistnest/dsh-cuigengji-plugin)
- **dsh-prompt-chain** — ⚡ DSH 输入框一键增强提示词（prompt），嫌短？继续生成往下扩，最多 5 轮；🕐 每轮自动存档，点一下就退回上一版 ↩️ 结果同步回输入框，改哪几个字逐行对比标给你看 🎨 内置 6 套只读方案、自建最多 3 套、🪄 按钮图标、📍 按键位置，全按你的习惯改。
  `v1.0.2` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/Nihao7-L/dsh-prompt-chain)
- **dsh-split-workspace** — 把 DSH 对话区拆成任意数量的原生窗格：左右、上下、田字 2×2 与自动网格，每个窗格都是独立会话。
  `v0.4.3` · [源码](https://github.com/mhlywxl/dsh-split-workspace)
- **dsh-shorts-wall** — 在 DSH Web UI 中加入默认贴边的竖屏短视频墙：YouTube Shorts 与 B站双源、关键词轮换、四角缩放及 Alt+S/Alt+M 快捷键。
  `v1.4.2` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/imkingjh999/dsh-shorts-wall)
- **dsh-prompt-reforge** — 在 DSH 输入框工具栏加一个「重铸」按钮，把当前草稿就地改写成更精准的提示词——整段替换只占一步撤销，可一键恢复原文，也可中途取消。
  `v0.2.2` · 引擎 `>=0.2.1-rc.1 <0.3.0-0 || >=0.2.2-0 <0.3.0-0` · [源码](https://github.com/Cloud017/dsh-prompt-reforge)
- **dsh-live-terminal** — 可见终端面板：把 agent 的 shell 命令实时显示在应用内终端，并支持 agent 以文本方式截取终端屏幕。
  `v1.2.1` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Lancang-hzau/dsh-live-terminal)
- **dsh-stl-preview** — 在 DSH 右侧栏文档预览里打开 STL：浏览器解析二进制/ASCII 网格，用 WebGL 视口展示尺寸、体积、表面积与水密性。
  `v0.1.0` · [源码](https://github.com/439436269-ctrl/dsh-stl-preview)
- **@aiwayds/dsh-tui-pi** — DeepSeek Harness 的全功能 TUI：流式对话、powerline 状态栏、实时思考/工具/待办面板、子代理双视图、主题热切换——全部以纯 cordis 插件实现，不 fork、不 patch 上游一行代码。
  `v2.29.0` · [源码](https://github.com/fan56/dsh-tui-pi)
- **dsh-better-right-click** — 给正文里的文件引用加右键菜单：复制绝对路径、在资源管理器中定位并选中文件（复用已打开的窗口并置前）、以及列出当前环境所有能打开该类型文件的程序让你自己选。菜单文案跟随 DSH 界面语言（中文/英文自动切换）。仅 Windows（资源管理器定位与程序列表依赖 PowerShell）。
  `v0.6.6` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/xmmtr/dsh-better-right-click)
- **dsh-xwide-annotation** — 在对话里划词加批注：编号高亮、每条各记自己的颜色，大纲面板列出全部标记并点一条跳回原文；右下角自检角标不开开发者工具就报出样式、越界选择器与本地存档键的问题。
  `v1.5.7` · [源码](https://github.com/XWIDE/dsh-xwide-annotation)
- **dsh-blend-preview** — 在 DSH 右侧栏文档预览里打开 .blend：Blender headless 导出缓存 GLB 与场景统计，由零依赖 WebGL 视口渲染。需当前环境装有 Blender 3.6+（或在设置里指定 blenderPath）。
  `v0.1.0` · [源码](https://github.com/439436269-ctrl/dsh-blend-preview)
- **dsh-gacha-calendar** — 二游卡池/活动排期速查：侧边栏按钮展示 11 款二游的当期卡池与活动起止（含倒计时），支持自动刷新与各游戏独立来源切换。
  `v0.12.5` · [源码](https://github.com/EastMG/dsh-gacha-calendar)
- **dsh-session-eva-status** — 按官方状态给 DSH 侧栏会话行染色，配色取自福音战士：等你处理的会话为蓝色左轨，主视图打开的那条为红色左轨，已结束但未查看为紫色左轨，置顶行的标题为静态彩虹。左侧轨道按模式分档——暗档保留原色，亮档换成对浅底 ≥4.5:1 的压暗变体——分档读的是 DSH 自己的暗色标记；未读的紫色轨道两种模式共用。只读取官方…
  `v0.2.0` · [源码](https://github.com/WhatCannotBeSaid/dsh-session-eva-status)
- **@ayanehana/dsh-reasoning-effort** — 为 DSH 原生模型选择器加入大肥鱼思考强度滑块，按模型声明的档位调节推理强度，拖动时奔跑动画随之加速。
  `v0.9.0` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/HanaAyane/dsh-reasoning-effort)
- **@vfvrpq/dsh-pinned-sessions** — 侧栏「工作区」上方的一个置顶分组：跨工作区汇总所有置顶会话，可折叠、可就地搜索，点行打开、悬停出现取消置顶按钮。
  `v0.4.1` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/439436269-ctrl/dsh-pinned-sessions)
- **@yfwu2020/dsh-selection-explain** — 在 DSH Web 界面划词，小窗流式给出翻译，并结合这段文字所在的会话上下文解释它在这里的具体含义；面板带可回放的历史记录，也能一键升格为正式会话。
  `v0.12.0` · [源码](https://github.com/yfwu2020/dsh-selection-explain)
- **dsh-launch-buttons** — 对话输入框的多启动项按钮：左键启动默认项，右键弹出列表，每项可绑定一个程序或目录。
  `v0.2.0` · [源码](https://github.com/leexiaode4/dsh-launch-buttons)
- **dsh-todo-checklist** — 为 DeepSeek Harness 提供待办清单：把划选的文字存成待办、从对话里捕获待办、在左侧栏面板里查看与处理、到期用应用内弹窗或机器人推送提醒，还能把全部记录导出成 HTML、Markdown、Excel、CSV 或 JSON。
  `v1.5.12` · [源码](https://github.com/qgd1850890306-rgb/dsh-todo-checklist)
- **dsh-recent-tasks** — DSH 侧边栏里常驻末位、可折叠的「最近任务」工作区分组：侧边栏入口与 Mod+Alt+N / Mod+Shift+N 快捷键在专用目录里开新对话，对话因此归入这个分组，而不是「未分组」。该分组是真正的工作区记录，而非插件画出来的仿制品，折叠、改名、搜索与拖拽排序都正常可用；目录、分组名、常驻末尾与自动重建都是实时设置…
  `v0.3.0` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/winditer/dsh-recent-tasks)
- **@hyzyn/dsh-kit-settings** — DSH Web GUI 中 kit 插件配置的宿主页：经官方 settings.section 扩展点在「设置」里注册一行与「通用设置」平级的「插件配置」页，并声明子 slot「settings.kit.item」，供 dsh-plugin-kit 各插件把自己的配置卡片渲染到该页。只装本包时该页显示「暂无可用配置项」…
  `v0.2.7` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **dsh-suggest-ghost** — 给 DSH 输入框加上输入预测：回合结束后自动建议你的下一句话，Tab 一键采纳；输入时按会话历史做前缀补全。（输入预测 / 自动补全 / 提示词建议 / 补全）
  `v0.6.0` · 引擎 `>=0.1.1-rc.2 <0.2.0-0 || >=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/dsh-plugin-collection/dsh-suggest-ghost)
- **@yongfanbeta/dsh-pomodoro** — DSH 番茄钟：经典 25/5/15 计时，可将每次专注关联当前会话任务或手动输入项目名，内置统计面板与全年热力图，配可拖动悬浮计时卡与角落迷你药丸，数据本地持久化并支持导出 CSV。
  `v0.2.0` · [源码](https://github.com/yongfanbeta/dsh-pomodoro)
- **dsh-pulse-rail** — 把 DSH 的轮次导航条变成音乐可视化：每根细横条按自己的频段变长变粗（系统声音用 WASAPI loopback 采集）。只改几何、不加颜色或发光，导航条原有的悬停预览、点击跳转与滚轮滚动都保留。
  `v0.4.1` · [源码](https://github.com/rinsoraa/dsh-pulse-rail)
- **@txc2768651338/dsh-effort-slider** — 仿 Claude Code 的推理等级滑块：无极拖动、松手吸附、WebGL 火焰跟随，任何自定义第三方模型/提供商都能获得真实生效的思考强度调节。
  `v0.5.1` · [源码](https://github.com/2768651338/dsh-effort-slider)
- **dsh-prompt** — 将一切重复、烦躁的模板化提示词保存下来，只需要鼠标点击就注入对话框，节省您的精力损耗🌹
  `v0.4.38` · [源码](https://github.com/FeatherHunter/dsh-prompt)
- **dsh-quotalk** — 选中回答里的文字或代码，在原生侧边栏中结合上下文实时追问。
  `v0.1.2` · [源码](https://github.com/Dengzi555/dsh-quotalk)
- **@windypro-rourou/dsh-code-studio** — DSH Web UI 的文件修改监视器与代码工作台。Agent 修改代码时实时浮现逐行 Diff，内置语法高亮编辑器，支持一键还原、修改历史、工作区切换与按会话隔离。
  `v0.2.15` · [源码](https://github.com/WindyPro-rourou/dsh-code-studio)
- **dsh-ink-whale-leap** — 网页加载时在 DeepSeek Harness 界面上播放一段水墨鲸跃动画，随后自行淡出。
  `v1.0.0` · [源码](https://github.com/lizixuan200410-cmd/dsh-ink-whale-leap)
- **@konnga/dsh-hud** — 当前工作区的只读 Git 面板：分支、改动清单、差异与图片前后对比，外加输入框上方的三枚胶囊（Git 状态、工具与技能活动、会话运行时长），以及本会话改动归因与审阅进度。
  `v0.9.2` · [源码](https://github.com/konnga/dsh-hud)
- **dsh-cursorlike-sidebar** — 为 DeepSeek Harness 提供类 Cursor 侧边栏，支持文件浏览、代码编辑、Git 差异、终端、侧边对话及 Ctrl+L 文件引用。
  `v0.28.0-cursorlike.4-beta.1` · [源码](https://github.com/Oxygen-Wang/dsh-cursorlike-sidebar)
- **@mzzsfy/dsh-context-manager** — 对话增强：历史输入浮层（Alt+↑，workspace/session/global/prompts 四范围搜索回填）、未应用插话撤回、对话分叉与家族版本切换、分叉后自动重发（默认关）。
  `v0.4.2` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-restart-desktop** — 在 Windows 上的 DeepSeek Harness 桌面版侧边栏添加「重启」按钮：结束整个应用进程树并重新打开应用。
  `v1.0.0` · [源码](https://github.com/StarMoon-win/dsh-restart-plugin)
- **@yang3333/dsh-hermes-panel** — 把 Hermes 放进 DSH 右侧栏：启停网关和 dashboard，聊天旁边就能看 dashboard，再把 DSH 和 Hermes 接起来。仅 Windows；需已安装 Hermes。
  `v1.1.0-rc.5` · [源码](https://github.com/GuanYang14700/dsh-hermes-panel)
- **@xxxyz/dsh-mcp-manager** — DeepSeek Harness 的 MCP 服务管理器：在「设置 → MCP 管理」中新增/编辑/启停/重启/删除 MCP 服务，支持 JSON 导入导出、4 个 mcp_manager_* 模型工具与 HTTP API，可通过 npx、npm 或跨平台脚本安装。
  `v3.0.0` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/xxxyz/DeepSeekHarness-MCP-Manager)
- **dsh-fonttune** — DeepSeek Harness 的字体插件：对话有自己的字体、字号、行高、字重、字距、词距、段距与首行缩进，界面字体跟随对话，代码独立成轴并支持连字；亮色与暗色可各调一套，整套配置存为预设，另有一个悬浮调参面板。
  `v0.7.1` · 引擎 `>=0.1.7-alpha.1 <0.3.0-0` · [源码](https://github.com/LyaxZ/dsh-fonttune)
- **dsh-bingo-ren** — 为 DeepSeek Harness 桌面端添加可拖动重启按钮与插件面板：插件清单变化时提醒重启，按 profile 记录新增与移除、跟踪试用、显示宿主启动状态，并提供回滚、最小启动与可恢复的残留清理。
  `v0.6.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/kongkongya367-glitch/dsh-bingo-ren)
- **dsh-capyreporter** — 为 DSH Web 打造的永远置顶的水豚任务播报宠物——透明悬浮气泡逐条播报运行轨迹、标明所属项目，任务完成时提醒正在别处忙碌的你。
  `v0.1.6` · [源码](https://github.com/linkbag/dsh-capyreporter)
- **@j62268781-alt/dsh-skills-mcp-manager** — 在 DSH 设置面板里一站式管理技能与 MCP 服务器。技能以磁盘为准：浏览、搜索、预览正文、新建、重命名、删除，删除前自动写一份备份。全局 MCP 就是 cordis.patch.yml 里的真实 Loader 行，项目级条目只挂到对应项目的会话。展开卡片会列出该服务器实际注册的工具，并可只保留需要的那些——被挡下的…
  `v0.5.6` · 引擎 `>=0.2.0-0` · [源码](https://github.com/j62268781-alt/dsh-skills-mcp-manager)
- **dsh-terminal-button** — DeepSeek Harness 内嵌终端插件：在右侧栏（DockKit Tab）或输入框下方以沉底抽屉形式提供界面内嵌的交互式终端，跟随官方主题与工作区目录，支持 PSReadLine 尺寸保护与位置热切换。
  `v0.4.4` · [源码](https://github.com/whiteS18/dsh-terminal-button)
- **dsh-ask-highlight** — 提问块高亮：把对话里已答复的「提问 n/n 已回答」工具块用柔和卡片样式凸显；等待中的提问块与其它工具块保持原样。
  `v1.1.1` · [源码](https://github.com/feng-yifan/dsh-plugins)
- **dsh-mcp-servers-panel** — 在设置中提供 MCP Servers 管理面板：新增、编辑、启停、删除服务器，支持用户/项目作用域与表单/JSON 双模式编辑，并自动把发现的 MCP 工具注册为对话原生工具。
  `v0.2.3` · [源码](https://github.com/whiteS18/dsh-mcp-servers-panel)
- **@linxin666/dsh-client-ui-task-board** — 侧边栏多列任务看板：卡片交给真实 DSH 智能体会话执行，支持 cron 定时（Host 侧到点执行，关浏览器也生效）。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-web)
- **@linxin666/dsh-web-all** — DSH Web UI 插件与皮肤合集：任务看板、git 图、右侧面板、远程移动端 UI、桌宠、实时 token 统计与皮肤中心。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-web)
- **dsh-math-render** — 在聊天里渲染 LaTeX：你自己的消息气泡内联渲染公式，输入时还会实时预览草稿里的公式。
  `v2.0.0` · [源码](https://github.com/huanglianqi/dsh-math-render)
- **@xmoon76/dsh-pi-tui** — DeepSeek Harness 的第三方 TUI 模式（dsh --profile pi-tui），基于内置 pi-tui fork 构建：覆盖主会话循环（审批、命令、会话切换与全文搜索），以及预设、技能、模型/设置菜单与斜杠命令。
  `v0.5.3` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/XMoon/dsh-pi-tui)
- **dsh-skills-mcp-group-manager** — 将已安装的技能分组管理、独立开关 MCP 服务器：按启用分组过滤模型可见的技能目录（并集去重），全部操作集中在左侧面板。
  `v0.3.9` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/SeverusZh/dsh-skills-mcp-group-manager)
- **dsh-temp-note** — DSH 右侧边栏的临时笔记，支持会话级、工作区级与全局三种范围、自动保存、一键复制，以及用默认模型一键优化为 Markdown。
  `v0.1.0` · [源码](https://github.com/GuihaiHU/dsh-temp-note)
- **@bittersmilezzz/dsh-model-selector** — 增强 DSH 输入区的模型选择器：可搜索供应商分组、键盘与无障碍支持，以及内联推理强度滑杆。
  `v0.4.3` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/bitterSmilezzz/dsh-model-selector)
- **dsh-plugin-namecards** — 给 DSH 插件换自定义图标、中文显示名和一句话说明；用文件夹与收藏整理，支持拖拽排序、按备注名拼音排序、列表与铺陈两种视图。所有已安装插件自动分配图标（可手动覆盖）；导入导出覆盖图标、备注名、说明、文件夹与排序。只改显示，不修改插件文件与 cordis 配置；启用开关转调官方插件管理器。
  `v0.6.2` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/3Tiga3/dsh-plugin-namecards)
- **dsh-tool-explorer** — 设置面板里的技能与 MCP 管理控制台：跨全部来源合并的技能目录（按来源分级浏览、在线新建与编辑、模型 / 用户调用独立开关、可恢复回收站）、GitHub 安装（多选批量安装、检查更新）、通过 profile patch 层增删改与启停 MCP 服务器、从 Claude Code / Cursor / Codex /…
  `v0.4.4` · [源码](https://github.com/6pofx/dsh-tool-explorer)
- **@hyzyn/dsh-tty** — DSH Web GUI 的终端面板：侧边栏「终端」打开多标签页 xterm.js 全交互终端（node-pty 真实 PTY），支持 ssh2 原生 SSH 远程标签页（agent/key/password 三种认证），cwd 跟随当前会话，并提供 tty_list / tty_capture / tty_send…
  `v0.32.4` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **dsh-composer-keys** — DeepSeek Harness Web 输入框键位自定义：把 Enter、Ctrl/Cmd+Enter、Shift+Enter 或任意组合键分配给发送、换行、打断三个动作，支持跨动作互斥迁移与持久化保存，默认保持 DSH 原生行为。
  `v0.1.4` · [源码](https://github.com/zlqd123/dsh-composer-keys)
- **dsh-selection-translator** — 在 Harness Web UI 中为选中文字添加右键翻译菜单，可就地替换为简体中文译文，再次右键还原原文。
  `v0.2.1` · [源码](https://github.com/DevinMx520/dsh-selection-translator)
- **dsh-work-list** — 本地优先的 DSH Web 工作清单，支持富文本笔记、分类、折叠、拖拽排序、搜索、JSON 导入导出和可还原回收站。
  `v0.2.0` · [源码](https://github.com/liweidong1722/dsh-work-list)
- **dsh-desktop-tweaks** — 桌面修改：F11 全屏切换；使终端使用 Ctrl+C/V 复制粘贴，从通用设置内开启/关闭。
  `v0.1.1` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/amstlkqp114514/dsh-desktop-tweaks)
- **dsh-gemini-kitten-widget** — DSH Web 界面的 Gemini 猫娘额度挂件：每个模型的 Gemini API 免费层配额实时显示、按型号切换、按额度变色预警、拖拽吸附、点击换台词。
  `v0.1.3` · [源码](https://github.com/Void-LifeStream/dsh-gemini-kitten-widget)
- **dsh-decision-split** — 决策分屏视图：主窗口显示决策摘要卡片，右侧详情栏独立滚动展示完整方案，边看全文边写决策，一键回传 agent。
  `v0.2.5` · [源码](https://github.com/yuanbaoerer/dsh-decision-split)
- **dsh-soul** — 为 Agent 提供个性化设置：Web 设置栏目（关于你、回复风格和语调、标题与列表 / 表情符号特质、输出语言、自定义指令）与 `/soul` 命令；昵称 / 职业 / 介绍 / 风格 / 特质 / 语言编译进提示词并推送给所有活动会话。向其他插件暴露 `soulConfig` 服务，并注册 Agent 可调用的…
  `v0.8.0` · [源码](https://github.com/Aliuyanfeng/dsh-soul)
- **dsh-ui-zoom-regions** — DeepSeek Harness 分区域缩放：Ctrl + 滚轮分别为会话顶栏、左侧栏、会话正文和右侧面板设置独立比例（侧栏 25%–300%）；拖动顶栏整条下边界可以把它调矮或调高，调高只增加高度、字大小不变。
  `v1.2.1` · [源码](https://github.com/FurinaEsE/dsh-ui-zoom-regions)
- **dsh-file-explorer-kit** — dsh Web 会话内「文件」页签（conversation.view，order 20）：以当前会话工作区为根的面包屑目录浏览，内联预览消毒渲染的 Markdown（marked + DOMPurify）、图片、带行号文本与 PDF；目录与读取全部经 ctx.webServer 注册的只读 /dsh-files…
  `v0.3.11` · 引擎 `^0.2.0` · [源码](https://github.com/ice5kysl/dsh-file-explorer-kit)
- **dsh-workspace-kit** — 面向 dsh Web 的工作区优先增强侧栏：以低优先级 shadow 内置工作区浏览器（可一键切回官方版），提供软归档/恢复、每工作区 SVG 图标与强调色、拖拽排序与标题/路径/会话内容搜索；另提供 ⌘K Spotlight 面板模糊搜索工作区/会话；宿主侧附带只读 workspace_find/workspace_…
  `v0.1.14` · 引擎 `^0.2.0` · [源码](https://github.com/ice5kysl/dsh-workspace-kit)
- **dsh-capability-panel** — 一站式管理 MCP 服务器、技能与工具——真实的在上下文状态(已加载/已截断/已挤出),并按会话开关。
  `v1.4.2` · [源码](https://github.com/pure-craft/dsh-capability-panel)
- **dsh-context-window-picker** — 在 DeepSeek Harness 模型弹窗的「推理等级」旁增加会话级上下文窗口选择器：显示当前生效窗口的胶囊按钮可展开默认窗口以下的档位下拉，选择只作用于该会话的下一次请求，新建会话自动回到 Profile 默认值。不改任何配置文件，也不向会话日志写入内容。
  `v0.1.0` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/luyiheng1111/dsh-context-window-picker)
- **dsh-image-viewer-pro** — Web UI 的聊天图片查看器：接管内容图片点击（Markdown 图、以 blob: URL 渲染的消息附件图、read_image 结果），打开弹层后支持以指针为中心的滚轮缩放与可编辑百分比、拖动平移、90° 旋转、带进度下载、复制为 PNG、用默认应用打开，以及会话内 ←/→ 图集浏览。
  `v0.1.5` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/NingYuanLee/dsh-image-viewer-pro)
- **dsh-todo-float-ball** — 常驻可拖动悬浮球实时显示当前会话的 todo 清单：球面显示完成数/总数（胶囊模式另显示进行中任务名），外环进度环同步百分比；点击展开或收起完整清单，右键切胶囊模式，状态用颜色区分（进行中橙色脉动、完成绿、待办蓝、无清单灰）。被替换的旧计划自动归档成历史行（可逐行隐藏、批量清理、一键恢复），不再计入进度；其他会话可固定…
  `v0.14.6` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/loyalchiiina/dsh-todo-float-ball)
- **dsh-lobsterai-daddy** — 把 LobsterDaddy 多账号控制台变成 DSH 界面上的悬浮球：可拖到任意位置并自动记忆坐标，面板可设置为跟随悬浮球移动；点开以抽屉呈现控制台——界面由原生 DOM 渲染（不用 iframe），数据经仅限当前环境的同源反向代理获取，自上而下为操作按钮、当前登录账号、以及含积分余额与签到状态（附最近签到时间）的账号列…
  `v0.9.7` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/loyalchiiina/dsh-lobsterai-daddy)
- **dsh-media-web-preview** — 在右側欄預覽區直接播放影片同音訊，經帶認證的 HTTP Range 路由串流，令遠端瀏覽器可以播放同跳轉大型檔案，唔使喺主機開原生播放器。
  `v1.0.0` · [源码](https://github.com/wilsonchengassistant/dsh-media-web-preview)
- **@wenaixi/dsh-prompt-history** — Claude Code 风格上下键历史回溯、双击 Esc 历史搜索、选中文本引用/自动复制与鼠标右键直接粘贴。
  `v2.6.2` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/Wenaixi/dsh-prompt-history)
- **dsh-ui-ux-pro-max** — 为 DeepSeek Harness 提供离线可用的 UI/UX 设计智能库：内置 84 种设计风格、192 个配色、74 组字体、99 条 UX 规范、25 种图表与 22 个技术栈，提供 design_recommend / design_review / design_search…
  `v1.4.1` · [源码](https://github.com/ChenYiming-aaa/dsh-ui-ux-pro-max)
- **dsh-peak** — 输入框工具行左端的小胶囊：点一下就知道此刻 DeepSeek 按高峰价还是空闲价计费。点开是当前状态与计费方式、下次切换时间与倒计时，以及此刻为什么是这个状态：周末、具名的法定节假日、调休上班日，或者只是不在高峰时段内。判定用北京时间并显式写死 UTC 偏移，不看当前环境时钟；内置 2026 年中国法定节假日表（33…
  `v0.2.0` · [源码](https://github.com/tuoLuoSuan/dsh-peak)
- **dsh-model-block-picker** — 按来源分块的输入框模型选择器：先选来源渠道卡片，再下钻进该渠道选择模型，保留跨来源搜索与推理强度调节。
  `v1.1.0` · [源码](https://github.com/liu19666/dsh-model-block-picker)
- **@mzzsfy/dsh-think-expand** — 流式思考自动展开：始终显示最新一条思考，手动操作优先，打开会话仅展开最后一条，卸载无残留。
  `v0.3.3` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **@domitor-syh/dsh-ui-skin-switcher** — 将模型按钮替换为Claude Desktop 同款风格的模型与思考力度切换器，支持逐模型记忆力度、主题自适应，滑动手感、圆角轨道、悬停高亮，点阵动画，都是熟悉的味道。
  `v0.2.5` · 引擎 `>=0.1.5-alpha.1` · [源码](https://github.com/domitor-syh/dsh-ui-skin-switcher)
- **dsh-next-input** — 助手完成后，沿用会话模型与滚动上下文摘要，在空输入框中建议下一条用户回复，按 Tab 接受。
  `v0.2.2` · [源码](https://github.com/songshuhuoban/dsh-next-input)
- **dsh-composer-history** — Web 作曲器终端风格输入历史：边缘优先的方向键召回并精确还原草稿与光标、浏览器本地持久化历史、Ctrl+R 反向搜索，以及滑动上下文感知；0.5.0 再加智能输入层——跨会话片段库（/save、/load）、带变量的提示词模板、复用洞察与压缩摘要高亮。
  `v0.8.15` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-composer-history)
- **dsh-chat-locator** — DSH 对话定位条的轮次轨道设置：刻度粗细、轨道在左还是在右、锚在悬停那根的曲线长度渐变，以及行数、字号、宽度都可调的纯文本悬停预览。
  `v1.5.1` · [源码](https://github.com/hawkongz/dsh-chat-locator)
- **dsh-composer-ux** — 可配置发送/换行键位、输入框右键菜单三种来源（插件不介入 / 浏览器菜单 / 自定义样式菜单）、带分类的快捷指令面板（每条可设「每次发送都附加」或「仅在本会话第一条消息附加」，并有跨分类移动与新建）、用另一次模型调用把草稿整理成清晰指令的提示词优化、设置面板尺寸记忆，并为 OpenCode 路由自动注入…
  `v0.25.0` · [源码](https://github.com/fangwen9527/dsh-composer-ux)
- **dsh-always-on-top** — 在 DSH Desktop 标题栏加一枚图钉，一键切换主窗口置顶。仅 Windows 10/11。
  `v0.1.4` · [源码](https://github.com/Suibianlilili/dsh-always-on-top)
- **dsh-sidebar-hover** — 仿 Claude Code 的侧栏（macOS 桌面版）：悬停在折叠的侧栏按钮上即可将侧栏浮层展开，选择会话后自动收起，点击按钮固定；另有会话历史前进/后退箭头（⌘[ / ⌘]）。
  `v0.1.24` · [源码](https://github.com/ingeb0rga/dsh-sidebar-hover)
- **dsh-effort-dial** — 输入框里的 Codex 风格推理强度卡片：接管模型选择器，显示当前档位、模型行，以及覆盖模型适配器所报全部档位的分段滑块；另带模型列表、重置，以及最高档时的紫色极光与闪烁粒子。
  `v0.1.0` · [源码](https://github.com/Lushdawn/dsh-effort-dial)
- **dsh-window-control** — 如果你嫌每次打开 Harness 都要手动全屏，这个插件可以帮你自动铺满：启动时自动最大化（保留右上角窗口按钮）或真全屏；随时可最大化／还原／最小化／窗口置顶；退出前弹原生确认框，快捷键可选 Esc、双击 Esc 或 Ctrl+Q，且全屏下 Esc 先退出全屏。窗口通道由插件自己安装，无需脚本或…
  `v1.4.2` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/YunLiZeMeng/dsh-window-control)
- **dsh-term-glossary** — 在 DSH 对话里选中一个术语、点旁边的「搜索」按钮，就地解释基本含义、用途与用法，并显示这次回答消耗的 token；该调用是旁路调用，不写入会话日志。
  `v0.3.4` · [源码](https://github.com/ashz555/dsh-term-glossary)
- **dsh-auto-paste** — 在输入框粘贴大段文本时自动保存为附件文件；装了 dsh-better-sidebar 时，药丸上的「查看」可在侧栏编辑器打开并保存回原文件。
  `v0.3.1` · [源码](https://github.com/sakuraqqq/dsh-auto-paste)
- **dsh-keep-awake** — 任意 agent、subagent 或后台任务运行时持有系统唤醒锁，全部结束后按可配置宽限期释放；提供中英双语 Web 设置页，实时显示活动与唤醒锁状态，支持手动保持与阻止屏幕关闭。
  `v0.3.1` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/bearice/dsh-keep-awake)
- **@nagi-ovo/dsh-visualize** — 对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览与沙箱渲染。
  `v0.1.7` · [源码](https://github.com/Nagi-ovo/dsh-visualize)
- **dsh-boot-compass** — 桌面端全屏启动动画：在 DSH 加载卡出现前接住首帧，播放 4.5 秒五阶段罗盘序列后交接；点按任意处可跳过，从托盘重开窗口会重播。冷启动首帧可能顿一下，之后流畅。
  `v0.4.1` · [源码](https://github.com/linshufan21/dsh-boot-compass)
- **dsh-composer-input-history** — 在 DSH 输入框用 ↑ 调回本会话已发送的消息；↓ 前翻并恢复你正在写的草稿，再按一次 ↓ 丢弃草稿、清空输入框。
  `v0.1.2` · [源码](https://github.com/liumorrisclaw/dsh-composer-input-history)
- **@objectivex666/dsh-settings-search** — 通过关键词、拼音、意图或 AI 一键搜索 DSH 设置面板，并直达目标设置页、标签或选项。
  `v1.14.0` · [源码](https://github.com/objectivex666/dsh-settings-search)
- **dsh-ui-sound** — 为 DSH Web 界面补上可听的语义反馈：按钮按下按语义分类发声（普通、主要、开关、发送、关闭、危险、链接），当前会话的任务开始、成功结束、失败结束以及出现待处理交互也各有一声，每个情景都能在设置页单独挑音效、单独开关。78 个 cue 与 12 个音色包全部由浏览器用 Web Audio API…
  `v0.1.2` · [源码](https://github.com/SOH4C4759/dsh-ui-sound)
- **dsh-draft-keeper** — 按会话保住输入框里的图片草稿：在浏览器本地留一份镜像，切回该对话或输入框重新挂载时经官方草稿通道放回去；消息一旦发出或你手动移除，就不再见它回来。
  `v0.1.0` · [源码](https://github.com/XWIDE/dsh-draft-keeper)
- **dsh-picflow** — 粘贴即编号引用：Ctrl+V 的截图入库后拿到固定编号「图片N」，在输入框旁面板里以缩略图列出，可经 @图片 菜单插入引用；开着「自动插入」时粘贴后直接落到光标处。
  `v0.3.1` · [源码](https://github.com/XWIDE/dsh-picflow)
- **dsh-jev-advisor** — 为 DSH 选择题提供面向用户的 TypeSafe Jev 第二意见卡片，展示推荐、概率和置信度，支持推荐分歧提示、复制建议、一键采纳、按 profile 保存卡片位置与折叠状态及临时决策偏好，并提供可选发送前预览和常见凭证遮盖。
  `v0.1.6` · 引擎 `0.2.0-rc.2 || 0.2.1-rc.2` · [源码](https://github.com/gordan-code/dsh-jev-advisor)
- **dsh-editor-link** — 把 DSH 接进 VS Code：审批用原生通知回答，ask_user_question 在侧边栏卡片里作答，ide_context 工具读取当前文件、诊断与选区，选区可插入 DSH 输入框，侧边栏提供实时转录、按工作区限定的会话列表以及模型与权限控制。
  `v0.1.1` · [源码](https://github.com/ferrisching/dsh-editor-link)
- **dsh-paste-code-block** — Cherry Studio 式粘贴：把多行/缩进/围栏文本或代码粘进 DSH Web 输入框时收成带边框、可折叠、带语言标签的卡片，发送时还原为围栏代码块。
  `v0.2.7` · [源码](https://github.com/cjm-m/dsh-paste-code-block)
- **dsh-pomodoro** — DSH Web 番茄钟：提供可配置专注/休息循环、可拖动迷你面板，以及站内提醒、提示音和浏览器通知。
  `v0.5.5` · 引擎 `^0.1.0-rc.7 || ^0.1.1-rc.1 || ^0.1.2-alpha.2 || ^0.1.5-0 || ^0.2.0-rc.2 || ^0.2.1-rc.2` · [源码](https://github.com/causebefore/dsh-pomodoro)
- **@lyhue1991/dsh-soup** — DSH 右侧 details 列项目资源管理器（多选、拖拽移动、上传、下载、重命名、废纸篓、系统打开），会话内只读预览 Markdown/HTML/JSON/CSV/Notebook/PDF 与代码高亮，附带模型实时吞吐徽标与多行 GoalBar。
  `v0.7.2` · [源码](https://github.com/lyhue1991/dsh-soup)
- **dsh-boot-video-manager** — 给开屏动画插件 dsh-boot-animation 配的播放入口面板：不用离开 app 就能加入视频、排好先后，并在「顺序播放 / 随机播放 / 单次播放」之间切换。顺序播放不修改上游插件也能做到确定性——除该播的那支外，参与播放的素材都停在同一个素材目录下的 disabled/…
  `v1.3.1` · [源码](https://github.com/Firefly-TheHerta/dsh-boot-video-manager)
- **dsh-ui-scale** — 将 DeepSeek Harness 整个界面（包括菜单和弹窗）缩放到 50% 至 200%，在「设置 - 通用设置」中用滑块、百分比输入或预设调整。dsh web 与桌面应用均可使用，桌面应用本身没有缩放功能。
  `v0.1.5` · [源码](https://github.com/juliankang4/dsh-ui-scale)
- **dsh-locale-ko** — 给 DeepSeek Harness 的「设置 - 通用设置 - 语言」加入韩语（한국어），翻译 dsh 0.2.0-rc.2 与 0.2.1-alpha.2 Web UI 的全部 2,775 条文案，包括实验功能。dsh web 与桌面应用均可使用。
  `v0.1.3` · [源码](https://github.com/juliankang4/dsh-locale-ko)
- **dsh-ppt-canvas** — 元素级 PPT 画布，就地改写已打开的 .pptx：点选、框选或整页选中后用自然语言描述改动，AI 以字节保真的 OOXML 补丁写入，支持撤销与重做。
  `v1.0.0` · [源码](https://github.com/hg1048596-pixel/dsh-ppt-canvas)
- **dsh-session-menu** — 给 DSH 侧边栏的会话右键菜单补上标记未读、复制会话信息、在访达中显示或换 IDE 打开、永久删除（连子会话一起删），并给会话行加上报错与未读状态点、悬浮卡信息、归档行的一键删除，以及一个可逐项开关菜单的设置面板；界面提供中英文两套文案。
  `v0.1.2` · [源码](https://github.com/big-head-pigeon/dsh-session-menu)
- **dsh-raindrop** — 侧边栏里的 Raindrop.io 只读仪表盘：分类与标签分布、域名来源 Top、内容类型、近 12 个月趋势与待清理项，并提供两个只读 Agent 工具分析收藏。需 Raindrop.io API token（创建应用后粘贴）。
  `v0.1.0` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/houdinicc/dsh-raindrop)
- **dsh-plugin-zoom** — 在高 DPI 显示器上手动缩放 Harness Web UI（75%–200%）：设置行、Ctrl+滚轮与会话标题栏控件三种入口，让文字更清晰易读。
  `v0.1.3` · [源码](https://github.com/drliuhuan/dsh-plugin-zoom)
- **dsh-openviking-enhance** — 把本地 OpenViking 记忆服务接进 DSH 界面：左侧边栏的 Studio 面板、输入框下方的会话提交状态胶囊与提交时间线，以及右侧边栏查看当前会话检索到哪些记忆的面板。
  `v0.2.1` · 引擎 `>=0.2.0-rc.2 || >=0.2.1-rc.2` · [源码](https://github.com/A2chitect/dsh-openviking-enhance)
- **dsh-selection-quote** — Cursor 与 GitHub PR Review 风格划词引用与批注插件：支持划词一键引用到对话（⌘L）、行内展开写批注（⇧⌘L）及输入框上方批注汇总栏一键插入。
  `v0.2.0` · [源码](https://github.com/xt765/dsh-selection-quote)
- **dsh-tweaks-smart-list** — 在 DSH 输入框里写列表时，Shift+Enter 换行后自动补上下一个编号（1. → 2.）或项目符号。
  `v0.1.1` · [源码](https://github.com/converk/dsh-tweaks)
- **dsh-tweaks-git-bash-terminal-tool** — 可将 Windows 环境下的终端工具替换为 Git Bash
  `v0.5.1` · [源码](https://github.com/converk/dsh-tweaks)
- **dsh-tweaks-prompt-history** — 在空输入框里用 ↑/↓ 翻出本会话之前发过的提示词，翻动时显示位置角标。
  `v0.1.2` · [源码](https://github.com/converk/dsh-tweaks)
- **martty** — 面向 DeepSeek Harness 的 Rust/ratatui Agent TUI，支持流式工具调用、子代理、持久会话和可扩展的 Cordis 客户端界面。
  `v0.3.3` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/openma-ai/Martty)
- **dsh-streamfold** — 流式折叠：思考与工具行自动折起、最新思考小窗自动展开；一轮结束平滑回到你提的那句话（读到哪一问就钉在顶部）；思考小窗滚动时底边溅蓝色火星，正文写头向四周飘火星。
  `v0.7.9` · 引擎 `>=0.2.1-rc.1 <0.3.0` · [源码](https://github.com/rezon-aki/dsh-streamfold)
- **@alexpeng/dsh-custom-plugin** — DSH Web GUI 便利套件，提供外观控制、时间线导航、项目文件夹、提示词、会话导出、Mermaid 渲染、引用回复，以及 DeepSeek 余额和每日 token 用量。
  `v0.8.0` · 引擎 `>=0.1.7-rc.2 <0.2.0-0 || >=0.2.0-rc.2 <0.2.0-rc.3 || >=0.2.1-rc.2 <0.2.1-rc.3` · [源码](https://github.com/AlexPeng07/dsh-custom-plugin)
- **dsh-cache-miss** — 提示缓存未命中（cache miss）时，在重建缓存的 assistant 回复下方显示一条黄色缓存提示，展示未缓存（uncached）重新计费（re-billed）的输入 token、缓存命中 token 与首字延迟（TTFT）。
  `v0.2.0` · [源码](https://github.com/wefio/dsh-cache-miss)
- **@zheshiyigehenchang/dsh-chat-typography** — 设置DSH Harness对话流字体、字号行间距，以及对话文字到窗口边缘的留白。
  `v1.1.4` · [源码](https://github.com/zheshiyigehenchang/dsh-chat-typography)
- **dsh-save-button** — 在 DSH Web GUI 交付卡片上增加下载按钮，present 交付的文件可直接从浏览器下载。
  `v0.1.6` · [源码](https://github.com/hanbernate/dsh-save-button)
- **dsh-next-prompt** — 回答结束后在空输入框里显示一条灰色的下一句建议，按 Tab 或 → 采纳；空输入框按 ↑ 填入上一次发送的内容；不会自动发送。
  `v0.5.2` · [源码](https://github.com/Tleon-H/dsh-next-prompt)
- **@yokira404/dsh-thinking-highlight** — 统计思考行里的关键词并在展开后按词标红；标题行上每个词一个计数徽章，点徽章即单独开关这个词；每个词可设底色、文字颜色、字号（10-22px，与宿主正文尺寸同一区间）、字体、加粗/斜体/下划线与「完整词」匹配；插件有独立的设置分区。
  `v1.4.1` · [源码](https://github.com/Yokira404/dsh-thinking-highlight)
- **dsh-github-picker** — 输入框右下角 GitHub 图标打开当前仓库的 issue/PR 搜索弹窗，数据来自当前环境 gh CLI，点选即以 URL 或 @owner/repo#number 形式插入引用。
  `v0.5.4` · [源码](https://github.com/bitxeno/dsh-github-picker)
- **dsh-arabic** — 让 DSH 界面说阿拉伯语：混合阿拉伯文与英文的双向文本排版，通过 DSH 官方语言服务注册完整阿拉伯语界面包（3,307 条），并内置三款 thmanyah 字体（界面 Sans、正文 Serif Text、标题 Serif Display），置于应用自身字体设置之后。
  `v0.4.6` · [源码](https://github.com/SMSMy/dsh-arabic)
- **dsh-bottom-info-bar** — DSH 底部信息栏：一行显示服务商/模型、真实余额、高峰(琥珀)/空闲(绿)价与倒计时，以及本对话·今日·近一月·全部花费（真实落盘统计）。
  `v1.21.8` · [源码](https://github.com/songoao25/dsh-bottom-info-bar)
- **dsh-better-sidebar** — 侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。
  `v0.28.0` · [源码](https://github.com/omdsh-dev/DSH-better-sidebar)
- **dsh-status-rotator** — 把 dsh 回合状态行换成 1059 条中英文案的轮播：打字机输出、流动彩虹渐变、弹幕、12 个可开关的主题词库包、实时占位符与标签页标题轮换。两个 star 包默认关闭；星标者包每位星标者一条文案，由工作流每周刷新。
  `v0.37.0` · [源码](https://github.com/01Virex/dsh-status-rotator)
- **dsh-sidebar-enhancement** — 侧边栏文件树增强：重命名、新建、上传、下载（目录当场打包为 zip）、复制完整路径与删除；128 种文本扩展名的可编辑文档渲染器，支持 Ctrl/Cmd+S 保存与版本冲突检测；另有一个独立的下侧终端面板，带标签页与持久化在 DSH home 里的快捷命令库。
  `v1.4.0` · [源码](https://github.com/xmwengxing/dsh-sidebar-enhancement)
- **@cdredfox/dsh-prompt-shortcuts** — 输入框上方的一行置顶提示词按钮，点击即替换草稿内容；另有可搜索的维护面板用于置顶、编辑、删除，放不下的按钮收进「更多」菜单，数据存于 Host 侧 JSON 文件，并注册 prompt_shortcuts 工具读写同一份数据。
  `v1.1.2` · [源码](https://github.com/cdredfox/dsh-prompt-shortcuts)
- **dsh-jot** — 提供可直接编辑的笔记空间，支持文件夹、全文搜索、富文本、核对清单、可调整列宽的表格、附件、导出和可选的 Agent 协作。
  `v0.2.14` · 引擎 `^0.2.0-rc.2 || ^0.2.1-alpha.1` · [源码](https://github.com/Totoro-qaq/dsh-jot)
- **dsh-router-laya** — 为 DeepSeek Harness 提供自动思考档位路由：本地微调的 7 题分类模型（ModernBERT，842MB，CPU 推理 <1s）对无档位指令的消息自动选择 low/high/max；会话内检测到重试自动沿阶梯升档，受「别用 max」类排除约束压制；判定服务不可达时熔断降级，会话不断。前端档位芯片实时显示…
  `v2.2.1` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/HapyRain/dsh-router-laya)
- **@beyondandsharp/dsh-plugin-scaling** — 支持 DSH Web 上的每个面板独立缩放：鼠标悬浮在面板上 Ctrl+滚轮，或对选中的面板 Ctrl+±，Ctrl+0恢复。兼容官方界面风格及皮肤。
  `v0.2.4` · [源码](https://github.com/BeyondandSharp/dsh-plugin-scaling)
- **dsh-approval-hotkeys** — Web UI 面板快捷键：在审批、提问、计划审查等交互面板上，Enter 触发确认操作、Esc 触发取消操作。
  `v0.2.0` · [源码](https://github.com/SiriLee/dsh-approval-hotkeys)
- **dsh-thinking-slider** — 把 composer 的模型选择器换成「模型名 · 推理等级」触发区：滑块覆盖模型上报的全部等级，可切换三种模式（DSH 官方原生选择器、渐变粒子轨道、能量充能轨道），并可按代理商一键为未声明等级的模型补齐四档。
  `v0.3.3` · [源码](https://github.com/MuFeng262/dsh-thinking-slider)
- **dsh-agent-grid** — 把 DSH 侧栏换成固定的 2×4 八席看板，每席显示自己的状态、最近一次工具调用、思考与结果；设置里的开关可随时切回原生侧栏。
  `v0.1.7` · [源码](https://github.com/yefengliu1/dsh-agent-grid)
- **dsh-paste-spill** — 把 DSH 输入框里每次 4–50 KB 的粘贴折叠成独立的一枚 chip（可单独展开或删除），50 KB 及以上的粘贴转成真附件。声明 DSH >=0.1.7-rc.2 <0.3.0-0，因此在 0.2 版本线上保持可见。
  `v0.2.0` · 引擎 `>=0.1.7-rc.2 <0.3.0-0` · [源码](https://github.com/winditer/dsh-paste-spill)
- **dsh-ctrl-wheel-zoom** — 按住 Ctrl 滚动鼠标滚轮即可缩放整个 Harness 网页界面，以指针位置为锚点、50%–200% 每档 10%；另支持 Ctrl 加减号与 Ctrl+0 快捷键；右下角缩放胶囊与「设置 → 通用」里的页面缩放行显示当前档位并可一键复位；档位保存在 localStorage。
  `v1.0.1` · [源码](https://github.com/Inoue-Cyrene/dsh-ctrl-wheel-zoom)
- **dsh-chinese-poetry** — 免 token 诗词查询插件，在会话页头新增「诗词」标签页，支持搜索、筛选、飞花令、每日一首、收藏、简繁、节日专题与分享卡片图；AI 解读复用 DSH 会话。
  `v1.4.1` · [源码](https://github.com/runcat-tommy/dsh-chinese-poetry)
- **dsh-view-manager** — DSH 视图标签管理器（逃咪）：管理会话页头视图标签（对话/轨迹）——启停、隐藏、排序与重命名，文案随界面语言中英切换，并带 npm 更新提醒。
  `v0.2.2` · [源码](https://github.com/runcat-tommy/dsh-view-manager)
- **dsh-panda-calendar** — 会话页头的「熊猫日历」标签页：公历/农历、干支、生肖、24 节气、传统与外国节日、中国法定节假日（含调休）、多城市天气、时间戳转换（秒/毫秒 ↔ 年月日时分秒，可选时区）与内置离线的「历史上的今天」，数据免费、无需 API Key。
  `v1.2.5` · [源码](https://github.com/runcat-tommy/dsh-panda-calendar)
- **dsh-vscode-workbench** — 为 DSH 提供 VS Code 风格的本地工作台，含文件资源管理器、Monaco 编辑器、全文搜索与 Git 面板。
  `v0.1.9` · [源码](https://github.com/tingfeng347/dsh-vscode-workbench)
- **dsh-pwa-icon** — PWA 图标：把 Web GUI 安装/添加到桌面时使用的图标（以及 manifest 应用名）换成自定义内容，包内自带默认图标集，也可配置自己的图片。
  `v1.1.0` · [源码](https://github.com/feng-yifan/dsh-plugins)
- **dsh-code-workbench** — 右栏的代码工作台：工作区文件树 + 多标签 Monaco 编辑器（语法高亮、版本守卫保存），基于 DeepSeek FIM 的 Tab 补全，按次保存的检查点与回滚，代码库检索（另提供 codebase_search 工具给 Agent），以及把选中代码以 @路径 mention 插入对话的引用胶囊。
  `v0.6.4` · [源码](https://github.com/FinalLawer/dsh-native-code-workbench)
- **dsh-whale-particles** — 给 DSH Web 加一层点阵背景:点阵可组成鲸鱼剪影,或导入透明 PNG 按 alpha 取主体;每颗粒子各自持有低频外力,手动模式下跟随光标扰动,自动屏保模式则用 360° 任意方向的扫波与全屏呼吸带动整幅图案;鼠标/自动与鲸鱼/照片在参数面板里切换,入口在 设置 → 插件。
  `v0.6.0` · [源码](https://github.com/fewoot/dsh-whale-particles)
- **dsh-prompt-for-me** — DSH 输入框的上下文感知下一句建议：重复 Trigger 可持续换一条，发送前始终由用户确认。
  `v0.6.2` · [源码](https://github.com/ChuanTianML/prompt-for-me)
- **dsh-open-native** — 点击交付文件卡片时用系统默认程序打开文件，而不是在 DSH 侧边栏里预览；按住 Shift 保留原来的预览行为。
  `v1.1.1` · [源码](https://github.com/Lessthinker66/dsh-open-native)
- **dsh-mcp-manager-plus** — DSH 设置中的 MCP 管理页：列出、启停、重启、删除 MCP 服务器，表单与 JSON 双模式编辑，展开可查看各服务器注册的工具，并支持一次粘贴导入 Claude Code、Cursor、Codex、VS Code 等 14 种工具的 MCP 配置。
  `v0.4.4` · [源码](https://github.com/appthin/dsh-mcp-manager-plus)
- **dsh-refresh-plugin** — 为 DeepSeek Harness 桌面 Web UI 补上 F5 / Ctrl+R 页面刷新功能（生产版默认没有刷新菜单项与裸 F5 快捷键）。通过客户端捕获阶段按键监听绑定软刷新（F5、Ctrl+R）与防缓存硬刷新（F5 加修饰键、Ctrl+Shift+R，附加 _dsh_refresh 时间戳）。
  `v1.0.1` · [源码](https://github.com/Phoeky/dsh-refresh-plugin)
- **dsh-enter-using** — 审批面板的 Codex 风格键盘应答：按 1 允许一次、2 拒绝、回车确认高亮项、方向键切换高亮、Esc 拒绝，鼠标点按依旧可用。
  `v0.1.0` · [源码](https://github.com/wukiQAQ/dsh-enter-using)
- **dsh-read-image-view** — 在 DSH Web 和桌面版展示 read_image 结果：完整预览、多图画廊、透明棋盘格、键盘与触控缩放，使用会话授权加载。已验证 DSH Desktop 0.11.1 / Harness 0.2.0-rc.2。
  `v0.4.0` · [源码](https://github.com/Yu-tao-Li/dsh-read-image-view)
- **@hytime/dsh-client-ui-shortcuts** — 为 DSH Web 提供按 profile 管理的键盘快捷键：支持 Question 和 Approval 卡片、Standard/Vim/Custom 配置，并按能力提供 Session 与 Workspace 导航。
  `v0.2.1` · [源码](https://github.com/hytime/dsh-client-ui-shortcuts)
- **dsh-knj-prompts** — 提示词场景选择器：下拉选场景即自动开新会话并填充提示词（支持 {变量}），微调即可发送。
  `v2026.10.150` · [源码](https://github.com/yangdongzhen590/dsh-knj-prompts)
- **dsh-widgets** — 在 DeepSeek Harness 右侧的可自定义部件栏：61 个部件覆盖会话统计、token 与缓存、上下文、后台任务、子代理、机器指标、OpenCode Go 与 Command Code 额度、会话成本、峰谷定价与 GitHub 待审队列；部件可在栏内市场安装，支持 1-4 列网格与 2x2 / 2x4…
  `v1.8.5` · [源码](https://github.com/Physicolor/dsh-widgets)
- **dsh-translate-on-select** — 在 DSH 里用鼠标选中外文，选区正下方就地浮出简体中文译文卡片。
  `v0.1.1` · [源码](https://github.com/syzke/dsh-translate-on-select)
- **@whybebabo/dsh-code-nav** — 为 dsh-better-sidebar 提供代码预览：按文件类型语法高亮、符号大纲、文件内查找，选中代码可直接加入对话。
  `v0.3.0` · [源码](https://github.com/whybebabo/dsh-code-nav)
- **@dshline/dshline** — DeepSeek Harness 的终端原生 TUI 前端，通过 Harness 能力提供会话、模型、插件、任务、子代理、待办事项和 Provider 配置，并保留真实的终端滚动历史。
  `v0.26.1` · [源码](https://github.com/riesbri/dshline)
- **dsh-todo-inbox** — DSH Web 全局跨会话待办收件箱：任意会话的 agent 通过 inbox_add/inbox_done/inbox_list 登记等待人类处理的事项（合并 MR、审批工单、评审等）；侧边栏入口显示未完成数角标与可展开的待办列表，支持打开与完成，数据持久化到 ~/.dsh/todo-inbox.json。
  `v0.2.2` · [源码](https://github.com/lumoping/dsh-todo-inbox)
- **@biggerboy123/dsh-conversation-anchors** — 对话区左侧 Codex 风格短横线锚点，悬停预览，点击跳转到对应轮次。
  `v0.1.21` · [源码](https://github.com/biggerboy/dsh-conversation-anchors)
- **@jiyr0119/dsh-workspace-explorer** — 独立单功能的工作区文件树面板：会话头部图标打开当前工作区目录树的动画弹窗；点击或拖拽文件即可把引用插入输入框；自带搜索、行内预览、实时设置与中英双语；零配置，一条命令即装即用。
  `v0.10.0` · [源码](https://github.com/Jiyr0119/dsh-workspace-explorer)
- **dsh-artifact-center** — 产物中心：跨工作区检索、预览并打开对话产出的文件。
  `v0.1.0` · [源码](https://github.com/YQing0123/dsh-artifact-center)
- **hover-glossary** — 悬停聊天消息中的术语时显示本地词库释义。
  `v1.1.0` · [源码](https://github.com/AlyceStocking/hover-glossary)
- **dsh-workspace-activity** — 侧边栏的工作区行会在其下会话运行时显示转圈，会话停止后短暂保留一个已完成标记。
  `v0.1.0` · [源码](https://github.com/charliesbyte/dsh-workspace-activity)
- **dsh-ssh-tui** — 跳板机与高延迟 SSH 上的 DeepSeek Harness 终端：纯 ANSI、增量重绘；SSH 掉线后会话不丢，可用 --resume 接回。
  `v0.8.3` · [源码](https://github.com/cyjyyd/dsh-ssh-tui)
- **reasoning-slider** — Codex 风格推理等级滑块，内嵌于模型选择器，拖动切换推理档位。
  `v0.0.7` · [源码](https://github.com/qjcnmd/dsh-reasoning-slider)
- **@liuzw/dsh-pwa-ui** — 通过 Window Controls Overlay 让已安装的 dsh Web 应用拥有原生观感的窗口标题栏——清单路由带 display_override 返回，应用自身的侧边栏品牌行与会话 header 成为拖拽区，应用自身右侧控件自动让开浏览器标题栏 chrome。
  `v1.0.2` · [源码](https://github.com/liuzwZYW/dsh-pwa-ui)
- **@johnnren/dsh-zen** — 禅模式视图 + 前台盯屏时间统计插件：智能体后台运行时提供极简 Zen 标签页（进行中/结束状态文案、用户消息、动态提示、Markdown 渲染最终回复、单行轮次统计），统计前台盯屏时长并给出每日/每周禅值，支持一键隐藏中间过程（工具调用/推理行）、任务开始完成时自动进出禅、Alt+Z 快捷键与 Zen…
  `v1.1.0` · [源码](https://github.com/john-walks-slow/dsh-zen)
- **dsh-sidebar-session-provider-icon** — DeepSeek Harness 插件：在侧边栏为每个会话显示 provider 与 model 图标，跟随输入框选择器即时更新，历史会话回退到最近一次请求；聚合路由（如 opencode-go、traex）显示 provider 主图并叠加 10px model 小图标。
  `v0.1.7` · [源码](https://github.com/prgrmrwy/dsh-sidebar-session-provider-icon)
- **dsh-smooth-cursor-patched** — DSH Web 输入框的彗星光标：发光拖尾随文字位置平滑滑动，可配置强调色、粗细、拖尾，并在静止 500ms 后呼吸。覆盖 ask-question 交互卡片的输入框，并修复空输入框或首次聚焦时光标消失、正向拖选不跟随鼠标、软换行按上一行测量、长内容滚动时光标绘制到输入框之外等问题。Lacquervii/smooth-…
  `v0.1.9-patched.6` · [源码](https://github.com/ThinkofRain1213/dsh-smooth-cursor-patched)
- **dsh-better-display** — 更安静的 DeepSeek Harness 阅读视图：原生过程细节、实时推理，以及干净的最终回答。
  `v0.3.8` · [源码](https://github.com/aa2246740/dsh-better-display)
- **@y1x1n/dsh-prompt-optimizer** — 在输入框旁加「优化」按钮：流式分析并改写提示词草稿，支持会话上下文感知（模板/润色双策略）、跨编辑记忆链与撤回，模型路由带 fallback 与连通性测试。
  `v0.5.0` · [源码](https://github.com/Y1X1n/dsh-prompt-optimizer)
- **dsh-agent-instructions-editor** — 在 DeepSeek Harness 设置页编辑全局 AGENTS.md 和项目 AGENTS.md / CLAUDE.md 个性化指令，提供项目指令链浏览、字节预算显示与保存冲突处理。
  `v0.2.3` · [源码](https://github.com/MaRi23333/dsh-agent-instructions-editor)
- **seektty** — 面向 DeepSeek Harness 的终端工作区，支持导入本地 VS Code JSON／JSONC 主题、继承终端背景效果、鼠标文本选择、结构化工具与 Diff 视图、Session／Profile／插件管理，以及 Skill／MCP 浏览。
  `v1.3.0` · [源码](https://github.com/Hilbert-beinghappy/seektty)
- **dsh-ui-tweaks** — 从设置面板实时调教 DSH 网页对话界面：消息字体大小、Claude Desktop 风格 Markdown 表格、对话框宽度、可选时间线侧栏，以及带分支管理、逐文件 Diff 和提交推送功能的 GitBar。
  `v0.20.3` · [源码](https://github.com/wlj521/dsh-ui-tweaks)
- **@jianyiagi/dsh-prompt-enhancer** — 输入框提示词一键增强：模型选择器旁的按钮把草稿经一次辅助模型调用改写后直接写回输入框，输入框撤销不受影响；/prompt-enhance 命令把改写结果以命令结果行显示、不改动草稿；可在 profile 补丁里为增强调用单独固定 provider 和模型；改写忠实原文，保留意图、语言与信息量，代码、命令与路径原样保留，…
  `v1.0.3` · [源码](https://github.com/JianYiAG/dsh-prompt-enhancer)
- **dsh-session-drag-move** — 在 DSH 左侧栏把会话拖到别的工作区，归属真的会变：改写会话日志 header 的 cwd 并把日志目录迁到目标项目下，迁移过程中显示进度条。
  `v0.1.3` · 引擎 `>=0.1.6-alpha.2` · [源码](https://github.com/FurryBear2025/dsh-session-drag-move)
- **dsh-dock-vitals** — 在输入框下方的状态栏里实时显示 CPU、内存与 GPU 读数：可点击的徽章、详情面板、逐项开关与三档刷新速度。
  `v0.1.1` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/MM998LI/dsh-dock-vitals)
- **dsh-vitals** — DeepSeek Harness Web GUI 的实时监控标签页，以 btop 风格展示 CPU／内存／温度／GPU。
  `v0.1.15` · [源码](https://github.com/JoblessJoe/dsh-vitals)
- **dsh-input-prediction** — 输入预测：在输入框里用灰字续写你草稿最可能的后续，按 Tab 接受后落进输入框、可继续编辑；每轮回答结束后在输入框上方给出 1–3 条你可能会发的下一条，点一下就发送。灰字补全、回复后推荐与推荐条数都能在「设置 → 内置插件 → 输入预测」里开关。
  `v0.2.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/fishcg/dsh-input-prediction)
- **dsh-presets-hidden** — 在新会话页控制 Agent 预设的显示与排序。
  `v0.2.3` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/tkliuxing/dsh-presets-hidden)
- **@studyzy/dsh-suggest-prompt** — 每次完成的 agent 回合后，一次有界的辅助 LLM 调用把一条建议的下一句 prompt 写入会话日志；Web 输入框将其渲染为幽灵占位文字，按 Tab 采纳。
  `v1.2.2` · [源码](https://github.com/studyzy/dsh-suggest-prompt)
- **@xmwengxing/dsh-client-ui-sidebar-perfmon** — 右侧栏主机性能监控：CPU、内存、交换内存仪表盘，显卡频率与显存条，CPU / 显卡 / 主板 / 硬盘温度，以及可按 CPU、内存、进程名排序的进程列表。
  `v0.5.0` · [源码](https://github.com/xmwengxing/dsh-client-ui-sidebar-perfmon)
- **@cheesefox/dsh-better-composer** — DSH Web Composer 视觉增强与会话工作台：实时 Markdown 呈现与光标行源码还原（非焦点行语法标记可完全隐藏或淡化显示）、确定性本地补全、列表与引用的换行自动续行及有序列表重编号；超长粘贴自动收纳为持久化引用 chip，支持直接内联或文件送达（支持 50+…
  `v1.1.0` · [源码](https://github.com/CheeseFox259/dsh-better-composer)
- **dsh-folder-attach** — 在 DeepSeek Harness 网页版直接拖文件夹进输入框，不再提示「只有桌面端支持添加文件夹」。新增主机文件夹选择框、/folder 命令，拖入/粘贴自动解析为 @路径 引用。纯浏览器可用，无需桌面端。
  `v0.1.4` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/sixzjd/dsh-folder-attach)
- **dsh-qol** — 面向 dsh Web GUI 的移动优先体验优化包：Chrome 式活跃会话标签页（Tab Bar）、全屏侧栏滑动开合、侧栏浮层与折叠态最近会话、切换会话不拉起输入法、viewport/键盘安全区适配、按钮触摸反馈、代码块表格内滚、隐藏权限下拉、设置页全屏重写与页签记忆、合成器线程状态动画、长按拖拽卡死修复——14…
  `v1.0.10` · [源码](https://github.com/john-walks-slow/dsh-qol)
- **dsh-plugin-busy-workspace** — 把含“需要注意的会话”的工作区按紧急度排到侧栏会话列表最前——待你处理优先，其次运行中，再次完成未读，最后刚读过的——并为这些行画状态竖条、着色底与着色标题，一次运行结束时播放一次收敛动效。所有颜色都取自当前主题自身的变量；决定完成会话置顶时长的三个窗口都是可配置项。
  `v1.1.1` · [源码](https://github.com/baifagg/dsh-plugin-busy-workspace)
- **@lyonleeeee/dsh-steer** — 在会话头显示实时状态徽标，并在不打断当前回合的前提下投递运行中新增的指导。
  `v0.1.0` · [源码](https://github.com/lyonleeeee/dsh-steer)
- **dsh-whale-widget** — 右下角常驻的小鲸鱼挂件：余额、今日已用与每轮对话消耗（含峰谷价），余额预警与今日预算的泡泡内容都可编辑；泡泡点击序列模块化自定义，支持并列加权 A/B、随机台词与随机图片；内置 30+ 厂商模板（OpenAI / OpenRouter / Kimi / 硅基流动 / 方舟 / 智谱 / MiniMax…
  `v0.4.2` · [源码](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget)
- **@yfwu2020/dsh-recent-sessions** — 在侧栏「设置」上方加一行入口，展开后最近会话以浮层压在工作区列表上方：按最后活动时间排序、每行带运行状态、高度可拖、滚动停下后自动对齐到整行。浮层不画自己的底色，展开后仍像侧栏的一部分。
  `v0.2.3` · [源码](https://github.com/yfwu2020/dsh-recent-sessions)
- **@yfwu2020/dsh-full-view** — 右侧文件或浏览器面板进入完整视图时，将原会话保留为可移动、缩放的聊天小窗，支持紧凑输入条、鲸鱼球恢复入口和返回原来的分栏布局。
  `v0.1.6` · [源码](https://github.com/yfwu2020/dsh-full-view)
- **dsh-panellist** — 面板列表管理器：在设置页里调整左侧轨道上的页签顺序、改名、换图标、隐藏，并把若干页签收进带飞出菜单的分组。
  `v0.1.1` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/qwq1999/dsh-panellist)
- **dsh-composer-stretch** — 输入框全屏扩展按钮——内容达 3 行以上时出现，点击扩展至全屏高度，发送后自动折叠；扩展模式下 Enter 与 Shift+Enter 换行，Cmd/Ctrl+Enter 发送。
  `v0.2.0` · [源码](https://github.com/Pudge1996/dsh-composer-stretch)
- **dsh-pathlink** — 在对话中 Ctrl+点击文件路径与链接：路径在文件管理器中定位所在文件夹，链接在新标签页打开。
  `v0.2.3` · [源码](https://github.com/penguin-oo/dsh-pathlink)
- **dsh-jira-tasks** — DSH 输入框下方的 JIRA 任务面板：按工作区配置项目 Key 与可选 JQL，展示指派给当前用户的问题，带状态、优先级与类型标签、总数徽标、收起与刷新、跳转 JIRA，并在设置页卡片配置 JIRA 地址与令牌（含连接测试）。
  `v1.3.1` · 引擎 `>=0.1.7-rc.2 <0.3.0-0` · [源码](https://github.com/liu3734/jira-tasks-dsh-plugin)
- **dsh-file-extras** — 增强 DSH Web GUI 的文件树：行内显示大小与修改时间，右键菜单支持下载、上传、复制路径。
  `v0.3.0` · [源码](https://github.com/TiChuXiXi/dsh-file-extras)
- **dsh-plugin-subagent-model-route** — 给每个子代理标注它实际运行使用的模型路由：父会话目录行增加「mode · 活动状态 · 模型」徽标行，子代理会话页头显示同一读数。
  `v0.1.2` · [源码](https://github.com/huhu23333/dsh-plugin-subagent-model-route)
- **dsh-composer-layout** — 面向长提示词的 Web Composer 布局：输入框可保留在底部，也可停靠到可调宽度的右栏，与长回答并排阅读和写作。
  `v0.1.24` · [源码](https://github.com/lavapapa/dsh-composer-layout)
- **dsh-quick-open** — Web GUI 的快速打开面板：Ctrl+P 在会话工作区的内存索引上做模糊检索（约 5.1 万条目，查询中位数 5 ms），支持逐段路径锚定、dir: 与 file: 前缀、Tab 目录下钻与 :行号 跳转；选中文件走 DSH 原生右栏打开，Ctrl+Enter 把文件引用放进会话草稿。另为内置文件预览补上文件内查找…
  `v0.3.2` · [源码](https://github.com/asxiuxiu/dsh-quick-open)
- **dsh-mpkg-wallpaper** — 在浏览器里直接加载 Wallpaper Engine 的 .mpkg 作为 DSH 网页背景：内嵌视频、多时段切换、统一磨砂虚化、本地壁纸库与轮换。
  `v3.16.6` · [源码](https://github.com/XHR666/dsh-mpkg-wallpaper)
- **dsh-boot-video** — 视频开机片头：启动时全屏播放 mp4，点击或 Esc 跳过，可导入自己的视频，浏览器解不了的编码自动转成 H.264。
  `v1.0.2` · [源码](https://github.com/xufu5438-netizen/dsh-boot-video)
- **@mars.liu/dsh-rich-editor** — 为输入区提供富 Markdown 笔记本：工具行开关加 CodeMirror 编辑卡片，支持 Codex 风格列表编辑，经会话服务提交。
  `v0.7.1` · [源码](https://github.com/MarchLiu/dsh-rich-editor)
- **dsh-switch** — 在 DSH Web GUI 聊天输入框左侧添加可自定义的 switch 快捷按钮，一键插入斜杠命令。
  `v1.8.0` · [源码](https://github.com/weimingyu9312/DSHSwitch)
- **codsh-bundle** — 基于 DeepSeek Harness 的终端编码 Agent，提供全屏备用屏幕 UI、轮次感知的会话导航，以及将一句话需求经过规格、TDD 和验收复跑的分阶段 /ship 流程。
  `v0.27.0` · [源码](https://github.com/Blackman99/codsh)
- **@yannzhou/dsh-about** — 在 DeepSeek Harness 设置中心增加「关于」分区：版本信息、npm 检查更新与一键安装（自动重启）、GitHub 版本更新记录。
  `v1.8.1` · [源码](https://github.com/YannZhou/dsh-about)
- **dsh-ide-vscode** — DSH 右侧栏里的工作区文件树与代码编辑器：跟随所在会话的工作区，新建 / 重命名 / 删除文件与文件夹（默认进回收站），带行号与语法高亮地编辑、Ctrl+S 保存、Ctrl+D 复制当前行，可预览图片、播放音频视频、查看并解压压缩包或用系统 tar 打包成 zip，能按文件名搜索或粘贴路径跳转，Windows…
  `v0.1.1` · [源码](https://github.com/wang6077/dsh-ide-vscode)
- **dsh-multi-root-explorer** — 把侧边栏的工作区区域换成双选项卡浏览器：多个工作区根并列登记、各自固定不变，对话按每个会话真实的工作目录归入目录树，资源是只读文件树、点击即用右侧栏预览。两个选项卡各自独立隐藏、只影响显示且完全可逆；资源文件夹或文件可复制路径，也可拖进输入框成为原生引用块；@ 补全覆盖全部已登记工作区，而不只是当前工作目录。
  `v0.1.8` · [源码](https://github.com/Nethur-auro/dsh-multi-root-explorer)
- **dsh-better-input** — 输入体验增强插件，目前已实现语音输入、AI提示词润色（反覆盖保护、带差异预览的提示词优化）、跟随 DSH 界面语言自动切换中英文界面。
  `v0.2.6` · [源码](https://github.com/DIAG5/dsh-better-input)
- **dsh-genui** — 通过 schemaJson 代码块在 DSH 回复内渲染 OpenTiny GenUI 图表、表单、计算器等迷你应用，用户操作自动回传对话。
  `v0.3.1` · [源码](https://github.com/lhuans/dsh-genui)
- **better-model-provider** — 在设置页按模型编辑能力：推理档位及其发往端点的取值写法、输入模态与 token 容量，以声明或官方目录稀疏覆盖的形式写入。
  `v0.0.8` · [源码](https://github.com/sanshanya/better-model-provider)
- **dsh-plugin-open-with** — 在 DeepSeek Harness Web 会话头部添加胶囊拆分按钮，一键在当前工作区打开 VS Code、终端和文件资源管理器。
  `v2.0.0` · [源码](https://github.com/hyrinx/dsh-plugin-open-with)
- **dsh-menu** — 为侧边栏「工作区文件」树添加自定义右键菜单：新建文件夹、重命名、在文件管理器中显示、浏览器打开、VS Code 打开、复制路径、流式 ZIP 下载、删除。
  `v1.0.2` · [源码](https://github.com/tangu2023/dsh-menu)
- **dsh-quick-input** — 输入框左侧的九宫格快捷短语面板，高度跟随输入框：点一格就把该条短语以一次可撤销的编辑插入光标处；面板内可就地编辑，每页 9 格、最多 12 页，界面跟随 DSH 语言设置。窗口放不下时退回输入框上方浮层。
  `v0.1.0` · [源码](https://github.com/cm860712ch-cloud/dsh-quick-input)
- **dsh-job-progress** — DSH Web 界面中长时间后台任务的实时进度：有任务的会话里浮着一个小球，可拖动，点开是含已完成/总量、速度与剩余时间的面板。
  `v1.0.5` · [源码](https://github.com/Rice00/dsh-job-progress)
- **dsh-mobile-drawer** — 窄屏下侧栏收起为左上角 44 像素悬浮方块、展开为 280 像素覆盖式抽屉，点会话自动收起，并压掉切会话时自动抢焦点导致的软键盘顶起。
  `v0.2.2` · [源码](https://github.com/better-er/dsh-mobile-drawer)
- **dock-flash** — DSH 快捷控制面板的 dock-base 工作台适配器。面板本体（开关注册表、皮肤系统、i18n、告警面、host 路由）由 `dsh-flash` 核心单独提供；本包只负责把它挂进 dock-base：侧栏/浮动面板、活动栏 ⚡、编辑器视图与 dock-flash:openQuickControl 命令。需安装…
  `v3.0.0` · [源码](https://github.com/tcgbp/dock-flash)
- **dsh-preset-workshop** — 预设工作台：逐方案编辑人设、系统提示词段和工具描述，选择工具与技能，预览请求组成，并通过 JSON / YAML 导入导出配置。
  `v0.1.0` · [源码](https://github.com/Zai-G/dsh-preset-workshop)
- **dsh-vsceditor** — 在 GUI 页签内嵌真实的 VSCode 编辑器（code-server，或通过自带 bridge 扩展连接当前环境桌面 VS Code）：Agent 的文件改动弹出按对话轮次累计的红绿 diff，关标签、刷新页面都不丢，写入期间文件自动锁定，看门狗托管进程、崩溃升级不留孤儿。
  `v0.5.6` · [源码](https://github.com/k-ying/dsh-vsceditor)
- **@ai-eks/dsh-docking-layout** — 可停靠的 DSH Web UI 布局插件，将对话组织为标签页，并支持拖拽拆分对话分组。
  `v0.2.0-rc.2` · [源码](https://github.com/ai-eks/dsh-docking-layout)
- **dsh-watcher** — 只读会话工作路径观察器：收起轮次看阶段数、执行数、耗时与 tok/s，展开看并行分支、工具结果与供应商可见推理。
  `v0.8.0` · [源码](https://github.com/aa2246740/dsh-watcher)
- **dsh-better-ux** — DeepSeek Harness 网页交互增强，提供会话重命名与分叉快捷操作、带搜索和供应商筛选的模型选择器、移动端布局、全局字体缩放、上下文用量提醒、DeepSeek 余额与峰谷价格、已发消息导航和对话情况总结。
  `v0.3.0` · [源码](https://github.com/MitsukiJoe/dsh-better-ux)
- **@copylee/dsh-better-display** — 为助手回答渲染带编号的引用角标和来源面板（针对联网搜索结果）、带来源说明的正文配图，并在流式 Markdown 中渲染 KaTeX 公式、Mermaid 图和代码高亮。
  `v0.4.1` · [源码](https://github.com/copylee711/dsh-better-display)
- **dsh-fullscreen-input** — 给 DSH 的输入框加一个全屏输入面板，用于书写多行文本，可移动、可调整大小，与主输入框共用同一份草稿；Enter 只换行、仅 Ctrl+Enter 发送，因此中文输入法不会把 Shift+Enter 变成发送。
  `v1.2.4` · [源码](https://github.com/AL-Yichen/dsh-fullscreen-input)
- **dsh-hide-empty-workspace** — 某个工作区的未归档会话从 1+ 掉到 0 的那一刻自动隐藏它的侧栏行，并在工作区行自带的「…」菜单里追加「隐藏工作区」，另配侧栏底部恢复入口。只切 display，不归档、不删除、不改写任何工作区。
  `v0.4.3` · [源码](https://github.com/d0ublecl1ck/dsh-hide-empty-workspace)
- **dsh-file-upload** — Claude 风格拖拽/回形针文件上传：内容嗅探、文档转 Markdown（微软 MarkItDown，内置 JS 兜底）、文本直插输入框、read_document 工具。
  `v0.5.4` · [源码](https://github.com/HongMing-Huang/dsh-file-upload)
- **dsh-office** — 办公室工作区/会话仪表盘：悬浮 6 列精灵面板，可视化工作区、会话、token 用量与子代理，并提供 Agent Mail 与办公日志页签。飞书相关视图（消息流、会议日程、妙记逐字稿）另需自行安装并授权 `@larksuite/cli`。
  `v0.4.6` · [源码](https://github.com/Fayelin12/dsh-office)
- **dsh-prompt-market** — 对话框旁的提示词市场：浏览并搜索三个内置在线提示词源，可收藏或自建，选中即插入输入框。
  `v0.1.3` · [源码](https://github.com/yi-yezhiqiu/dsh-prompt-market)
- **dsh-round-rightclick** — 在 DSH Web 对话轮次上点击右键弹出的圆盘菜单：从此轮分叉出新会话、打断生成、复制工作目录路径与会话 ID、打开工作目录、导出会话日志。
  `v0.2.0` · [源码](https://github.com/hmr-BH/dsh-round-rightclick)
- **@zseven-w/dsh-openpencil** — OpenPencil 设计预览与编辑插件。
  `v0.1.0-rc.13` · [源码](https://github.com/ZSeven-W/dsh-openpencil)
- **dsh-glass-weather** — 会话顶栏的玻璃天气胶囊：23 种天气状态各自配色、SVG 图标与 canvas 粒子层，可按字段开关显示内容，并注册 get_weather 工具（Open-Meteo 免密钥数据）。
  `v0.3.0` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/w-j-y-wjy/dsh-glass-weather)
- **dsh-just-chat** — 为 DeepSeek Harness 提供一键原生对话入口，每次创建独立工作区和会话。
  `v0.1.6` · [源码](https://github.com/exoticknight/dsh-just-chat)
- **dsh-plugin-lookatstudy** — 学习页签（课程｜导师｜黑板三栏）：把 markdown 文件、本地文件夹或 GitHub 仓库变成导学课程，提供课时解锁、掌握度追踪、间隔重复和导师设计式课程导入。
  `v0.26.3` · [源码](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy)
- **@nianchu/dsh-rollback** — TRAE 式「回退到本轮对话发起前」：按轮次建立文件检查点，回滚工作区文件并在同一 session id 下原位截断模型上下文，已适配 DSH 0.1.7-rc.2。新增 /rollback doctor 契约自检、按当前磁盘状态实时计算的受影响文件 diff 预览（重启后依然准确）、一键「回退最近一轮」（快捷键…
  `v0.4.3` · [源码](https://github.com/ZhaoZeW/dsh-rollback)
- **dsh-inline-diff** — 将编辑与写入工具调用渲染为常开的双栏 diff，样式类似 git diff，可选语法配色与词级高亮。
  `v1.10.0` · [源码](https://github.com/JanEickholt/dsh-inline-diff)
- **dsh-plugin-media-wallpaper** — 为 DSH 提供图片/视频壁纸背景：GIF/APNG/动图 WebP/PNG/JPEG/MP4/WebM 魔数自动识别，压暗/亮度/高斯模糊，界面色调与字体颜色自动跟随背景，各组件独立透明度，预置壁纸一键应用。
  `v0.2.9` · [源码](https://github.com/laoye666-6/dsh-plugin-media-wallpaper)
- **dsh-ui-harmonizer** — DeepSeek Harness UI 协调器：规范化官方未完善、自相矛盾的界面，协调已装插件间的样式冲突并统一视觉语言（全部遵循官方设计令牌）——支持实时自定义对话宽度、markdown 字号、工作区缩放、UI 字体栈，并在设置页提供圆角中栏卡片；纯客户端 dsh bundle，零模型开销，无 host…
  `v0.9.1` · [源码](https://github.com/Physicolor/dsh-ui-harmonizer)
- **dsh-claude-slider** — 把推理强度下拉菜单换成可拖拽吸附的滑块，并提供 13 款 Canvas 动效，分属推进、流体、幻境、科技、质感五个家族；动效随推理档位分三阶递进解锁。客制动效可自由组合 10 种粒子形态与 8 种流动轨迹；9 款预设主题色与 Hex 拾色器让全部动效跟随变色，档位吸附音效支持两段语音、合成鸭子叫、机械微触感与本地音频文…
  `v2.11.0` · [源码](https://github.com/yicun0316/dsh-claude-slider)
- **@panando/dsh-prompt-optimizer** — 一键提示词优化：按可配置策略改写输入框草稿，提供可编辑模板、Few-shot 示例、指定模型与推理强度。
  `v1.0.2` · [源码](https://github.com/panando/dsh-prompt-optimizer)
- **dsh-smooth-stream** — 为 DeepSeek Harness Web UI 提供流畅流式渲染和丝滑滚动。
  `v0.7.0` · [源码](https://github.com/Laplace-bit/dsh-smooth-stream)
- **@panando/dsh-quote-sidechat** — 在回复里选中文字，把引用作为原子 chip 写进输入框：一次按键整体删除、点击回跳并高亮被引用的轮次、发送时展开成带边界的引用块，让模型能分清引用与用户输入。另可把片段送进侧边对话，或复制到剪贴板。
  `v0.3.3` · [源码](https://github.com/panando/dsh-quote-sidechat)
- **dsh-paperclip** — 在 DSH Web 输入框添加回形针按钮：点击选择文件（支持拖拽），文件内容自动插入输入框。
  `v0.2.6` · [源码](https://github.com/zmm863-commits/dsh-paperclip)
- **dsh-sticky-notes** — 泡泡猫的即时便签 — 支持彩色标签、置顶、定时提醒与密码保护。
  `v1.0.3` · [源码](https://github.com/zmm863-commits/dsh-sticky-notes)
- **dsh-sidebar-plus** — 基于 DSH 官方侧边栏的文件视图增强插件，提供源码视图、原位编辑、行号显示、搜索和字体缩放功能。
  `v0.4.4` · [源码](https://github.com/sailoumili/dsh-sidebar-plus)
- **dsh-scratchpad-plus** — 免工作区自由对话，产物自动提升为独立项目工作区；dsh-scratchpad 的持续维护 fork，跟当前 DSH 保持可用。
  `v0.4.0` · [源码](https://github.com/d0ublecl1ck/dsh-scratchpad-plus)
- **@weibaohui/dsh-dashboard** — 使用量仪表盘：离线扫描会话日志，统计每日/每周/每月 token、估算费用、模型/工具/技能/命令榜、输出速度、工作时段与质量指标；gridstack+ECharts 卡片可拖拽编排，支持自定义公式与 AI 编排（提示词往返导入）。
  `v0.2.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-dashboard)
- **dsh-coding-plugin** — 编程学习悬浮面板：编辑并运行 Python/JavaScript/TypeScript/PowerShell（含退出码与耗时），JSON 课程包关卡自动评判并可导出进度，提供 Markdown 笔记与代码片段库；代码分析以用户消息直投当前对话，由对话主模型直接输出。
  `v1.2.1` · [源码](https://github.com/Paimonshen/dsh-coding-plugin)
- **dsh-refresh** — 让 F5、Ctrl+F5 和 Ctrl+Shift+R 都能刷新 DeepSeek Harness 页面。
  `v1.0.2` · [源码](https://github.com/spidu-lee/dsh-refresh)
- **dsh-file-opener** — 把 DSH 对话中的文件与目录路径变成可点击按钮：点击即在右侧侧边栏预览，或用系统默认程序打开。
  `v1.4.0` · [源码](https://github.com/sailoumili/dsh-file-opener)
- **dsh-user-message-timeline** — 对话内悬浮药丸导轨：等距药丸、悬停预览、点击/拖拽跳转、分页自动加载，开关在设置-插件-插件配置。
  `v0.4.3` · [源码](https://github.com/huang-chunc/dsh-user-message-timeline)
- **@qgynisc/dsh-inline-pastes** — 在 DeepSeek Harness 输入框里粘贴图片，即在文字中插入 image-1.png 编号胶囊；图片仍走官方附件管线随消息发出。鼠标悬浮名字弹出缩略图预览卡，dock 与已发送气泡的缩略图带序号角标，发送前还会自检「文字里的名字」与「本条消息的图片」是否对得上。
  `v0.6.0` · [源码](https://github.com/qgynisc/dsh-inline-pastes)
- **dsh-recall-unread** — 在输入框上方列出已发送但模型尚未读取的插话消息，可在模型读取前逐条或一次性撤回。
  `v1.2.0` · [源码](https://github.com/hg1048596-pixel/dsh-recall-unread)
- **dsh-brand-studio** — DSH 共享网页界面的自定义品牌：在「设置 → 品牌」中修改名称、徽章，选择本地 logo 和字标图片并调整大小与圆角、实时预览、可选自定义页面标题、一键恢复官方外观。
  `v0.0.3` · [源码](https://github.com/qiweiii/dsh-brand-studio)
- **@1agents/feature-blueprint** — 在 DSH 侧栏提供思维导图和 Excalidraw 自由画布，支持本地思维导图文件编辑、Excalidraw 文件预览与独立 CLI。
  `v0.4.1` · [源码](https://github.com/scottzx/feature-blueprint)
- **dsh-focus-overlay** — 专注模式：全屏阅读视图，隐藏标题与输入区，把 AI 工具调用折叠成摘要。
  `v0.12.4` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/boogoo619/dsh-focus-overlay)
- **@max-null/dsh-node-appearance** — DeepSeek Harness Web GUI 会话节点外观插件：按节点类别/工具名可配置着色（左侧色条 + 淡色底），附带"显示思考过程"开关；纯前端渲染增强，改动即时生效并持久化到 DSH 用户设置文件。
  `v0.10.1` · [源码](https://github.com/Max-Null/dsh-node-appearance)
- **@max-null/dsh-chat-rail** — DeepSeek Harness 画卷式消息导航栏：会话面板右侧一条竖排导轨，每条用户消息一个指示点，scroll-spy 跟随阅读位置，hover 展开画卷查看完整消息预览，点击跳转任意历史消息；与 better-sidebar 面板动画同步避让。
  `v0.6.13` · [源码](https://github.com/Max-Null/dsh-chat-rail)
- **dsh-skill-picker** — WorkBuddy 同款技能选择器：输入框旁 ⚡ 按钮弹出全部技能列表，支持搜索与最近/常用排序，点选即插入官方 `/技能名` 手势，随消息发出自动加载执行。
  `v0.5.28` · [源码](https://github.com/a735624258/dsh-skill-picker)
- **dsh-input-optimizer** — 把 DSH 输入框里的草稿通过 harness 自身的 LLM 路由改写成更清晰、更可执行的提示词，采纳前先显示原文与优化后的对比。
  `v0.1.0` · [源码](https://github.com/xkjxziochu/dsh-input-optimizer)
- **dock-spreadsheet** — dock-files 的只读表格查看器，支持 XLSX、XLS、ODS、CSV、TSV 格式以及工作表切换、排序、筛选、搜索和单元格链接。
  `v0.1.0` · [源码](https://github.com/AKS1st/dock-spreadsheet)
- **sage-reminder** — DSH 会话头部的时间模块：现在时间、距你上次发言、提醒与倒计时。纯前端插件——数据存浏览器 localStorage，host 半不注册任何东西；到点提示是边框呼吸灯加界面浮条，不发系统通知。
  `v0.1.3` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/gezi-wen/sage-reminder)
- **dsh-composer-tools** — 输入框工具集：方向键调取历史消息（限首/末行触发，兼容输入法与命令菜单）、指令查看/编辑器（全局与项目级 AGENTS.md / CLAUDE.md）、提示词库（780 条中文提示词，源自 Cherry Studio agents-zh 语料，AGPL-3.0，一键插入输入框）。npm 包名…
  `v0.1.1` · [源码](https://github.com/wsxwj123/dsh-plugins)
- **dsh-oc-tui** — 受 opencode 启发的 DeepSeek Harness 终端界面，以 dsh profile 应用插件形式启动，提供会话侧栏、流式聊天、markdown 工具卡片、待办列表、斜杠命令建议、带上下文用量表的遥测底栏与内联审批提示。
  `v0.1.5` · [源码](https://github.com/rayafriandion/dsh-oc-tui)
- **dsh-result-only-view** — Web 对话「只看结果」开关：隐藏思考与工具调用过程，运行中仅保留一条实时状态行，reduced-motion 环境下恢复活动光影，中英双语。原生输入框与 dsh-split-screen 分屏面板内均可用；已适配 DSH 0.1.1 与 0.1.5。
  `v1.7.0` · [源码](https://github.com/YEYEYEYESHIFU/dsh-result-only-view)
- **@changfenhuang/dsh-annotation** — 选中文字→批注→随消息发送，回复按批注逐条对照。
  `v1.4.11` · [源码](https://github.com/omdsh-dev/dsh-annotation)
- **dsh-multi-chat** — 在 DSH Web 界面里并排运行、监控多个对话实例：多窗口墙 + 自动发现 + 单窗控制，内置带口令认证的局域网网关，手机/平板也能看。
  `v1.0.8` · [源码](https://github.com/daetz-coder/dsh-multi-chat)
- **@codefisher798/dsh-file-link-menu** — 为聊天输出中的文件引用添加右键菜单，列出系统关联应用（带图标）供选择打开，在文件管理器中定位文件，并复制基于会话工作区解析的绝对或相对路径；代码块、普通文本与外部链接保持原生菜单。
  `v1.0.0` · [源码](https://github.com/XcodeFish/dsh-file-link-menu)
- **dock-files** — dock 系列文件浏览插件：侧边栏目录树浏览会话工作区，支持新建/重命名/复制粘贴/删除、拖放导入、粘贴本地文件与剪贴板图片。
  `v0.4.0` · 引擎 `>=0.1.3-alpha.2` · [源码](https://github.com/AKS1st/dock-files)
- **dsh-fullscreen-settings** — 让 DSH 的设置弹窗以整页全屏打开，并把退出入口移到左上角的返回行。
  `v0.1.6` · [源码](https://github.com/functy23/dsh-fullscreen-settings)
- **dsh-turn-outline** — 在侧边栏按用户轮次折叠会话（输入、工具步骤、输出），一键跳回对话原位。
  `v0.3.1` · [源码](https://github.com/Andor-Z/dsh-turn-outline)
- **dsh-longtext-input** — 在输入框工具栏新增「长文本」按钮：在编辑器浮层里写或粘贴正文，保存后写入 <工作区>/.dsh-longtext/<时间戳>_<标题>.md，并把该文件的 @ 路径引用追加到输入框，让正文不进入对话。
  `v1.0.0` · [源码](https://github.com/levodoubt/dsh-longtext-input)
- **dsh-edit-diff** — 接管浏览器端 edit/write 工具卡片，用近线性行级 diff 只显示真正变化行，并对替换对做行内字符下划线高亮，消除内置 diff 对未变化相同行的重复渲染。
  `v0.4.2` · [源码](https://github.com/better-er/dsh-edit-diff)
- **dsh-classic-coding** — 在 DSH 对话界面右侧滑出 Monaco 编辑器与文件树面板，直接在对话里编辑本地工作区代码，无需切到外部编辑器。
  `v0.2.4` · [源码](https://github.com/better-er/dsh-classic-coding)
- **dsh-tool-autoexpand** — 自动展开 DSH 界面里新到达的工具调用卡片，侧栏开关在不干预/展开/折叠三态间循环，档位持久化到 localStorage。
  `v0.3.2` · [源码](https://github.com/better-er/dsh-tool-autoexpand)
- **@huiliyi37/dsh-tianshu-tui** — DeepSeek Harness 的终端 UI（TUI）。
  `v1.0.0-rc.2` · [源码](https://github.com/huiliyi37/dsh-tianshu-tui)
- **dsh-attach-picker** — DSH Web 输入框工具栏图片按钮：点击调用系统文件选择器直接多选取图，进入与拖拽/粘贴相同的草稿图片栏，并内联校验宿主的图片格式、单条张数与单张大小限制。
  `v0.1.2` · [源码](https://github.com/qwerty-k-de/dsh-attach-picker)
- **dsh-inline-comments** — 选中即批注，刷新亦留存；随消息发送，模型逐条回应。
  `v0.1.2` · [源码](https://github.com/zenvertao/dsh-inline-comments)
- **@lcthe/dsh-skills-hub** — DSH 技能管理器：浏览、启用/禁用、从 Codex/Claude Code/ZCode/WorkBuddy/QCoderWork 导入，自动发现技能并支持软链接。
  `v0.3.0` · [源码](https://github.com/lcthe/dsh-skills-hub)
- **dsh-workbench** — DeepSeek Harness Web 右侧文件工作区，提供源码预览、DSH 捕获差异、多文件标签页和工作区文件树。
  `v0.16.1` · [源码](https://github.com/lee259/dsh-workbench)
- **dsh-plugin-brand-custom** — 自定义 DSH Web 侧边栏与会话页的品牌图标和名称，插件详情页内置设置卡片，保存即生效。
  `v0.1.0` · 引擎 `>=0.1.7-rc.1 <0.1.8-0 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/lzpway-jpg/dsh-plugin-brand-custom)
- **dsh-at-sider** — 增强右侧栏原生的「文件」标签页而非替换它：每行带一个 @ 引用按钮，把规范路径提及插入输入框；另有大小列、可排序的修改时间列，以及按未跟踪/未暂存/已暂存着色的状态点。文件树下方有 git 栏，显示分支与领先/落后数量，并可向上展开最近 20 条提交；当工作区的子目录是独立仓库时提供仓库选择器。页头搜索框递归遍历工作区…
  `v0.2.0` · [源码](https://github.com/aiyacharley/dsh-at-sider)
- **@hjj345345/dsh-sm-context-piano** — 为 DeepSeek Harness Web GUI 提供 Codex 式对话导航与预览。
  `v1.2.8` · 引擎 `>=0.1.7-rc.1 || >=0.2.0-rc.1` · [源码](https://github.com/hjj345/dsh-sm-context-piano)
- **dsh-flowglass** — DeepSeek Harness 会话实时流程图，可查看工具调用、并行分组、子代理分支和逐层详情。
  `v0.7.4` · [源码](https://github.com/Iwctwbh/dsh-flowglass)
- **@weibaohui/dsh-settings-ui** — 设置界面自定义：调整原生设置窗口大小（全屏/预置大尺寸/自定义宽高）、背景透明度与背景（主题/自定义颜色/图片），悬浮球即开即调，存当前环境浏览器。
  `v0.2.10` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/weibaohui/dsh-settings-ui)
- **dsh-math-snippets** — 输入框里的 LaTeX 片段展开，触发词表直接取自 Obsidian Latex Suite 的默认片段——138 条打完即出，Tab 依次跳 tabstop，142 条全在一份可编辑的 JSON 里。
  `v1.3.1` · [源码](https://github.com/huanglianqi/dsh-math-snippets)
- **dsh-suggest-actions** — 在每条回复下方给出可点的下一步建议，点一下就把那句话作为你的消息发出去。
  `v0.1.9` · [源码](https://github.com/hiJoeLee/dsh-suggest-actions)
- **dock-base** — DSH Web 工作台基座插件：提供 VSCode 风格布局外壳（活动栏/侧边栏/编辑器区/面板/状态栏）和 ctx.workbench 开放注册表，供功能插件挂载面板、视图与命令。
  `v0.2.4` · 引擎 `>=0.1.3-alpha.2` · [源码](https://github.com/AKS1st/dock)
- **dsh-chat-toc** — 对话大纲目录导航：支持书签标记、轮次置顶钉住、全局快捷键与智能标题提取。
  `v0.5.1` · [源码](https://github.com/a792883583/dsh-chat-toc)
- **dsh-conversation-navigator** — 会话导航面板：按轮折叠的当前会话大纲与步次类型徽标（助手/工具/命令/压缩/出错），悬停气泡显示用户提问全文，可隐藏轮次号的极简徽标视图，仅检索提问与助手回复的关键词过滤，点击跳转与阅读位置跟踪，支持加载更早/加载全部历史分页。宿主 ≥ 0.1.2-rc.1，旧宿主装 @legacy/0.2.5。
  `v0.2.11` · [源码](https://github.com/gjj-star/dsh-conversation-navigator)
- **dsh-dragndrop-attachments** — 支持拖放本地文件、文件夹、ZIP 压缩包和 Office 文档作为附件。
  `v1.3.1` · [源码](https://github.com/aa2246740/dsh-dragndrop-attachments)
- **dsh-plugin-smooth-stream** — 给 DeepSeek Harness 加入更好的流式文字动画。
  `v1.3.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/SpookySandwich/dsh-plugin-smooth-stream)
- **@ephemeral-ai/mayfly** — DeepSeek Harness 交互式终端界面：表格、Mermaid 与图表渲染、旁支会话，以及与 dsh Web 相同的 Cordis 插件模型。
  `v0.1.3-rc.2` · [源码](https://github.com/Ephemeral-AI-Lab/mayfly)
- **dsh-settings-nav-organizer** — 设置面板导航整理：第三方插件入口折叠为可展开的分组行，支持书签式自定义分组、折叠开关与自动分类（市场标签 → 名称规则 → AI 模型三级兜底）。
  `v1.7.3` · [源码](https://github.com/zhengjy01/dsh-settings-nav-organizer)
- **@arcaneorion/dsh-model-selector-search** — 搜索增强的会话模型选择器：两段式宽松匹配（先归一化子串，未命中再退子序列，glm53 命中 GLM-5.3、ds 命中 DeepSeek）、近七天成功调用过的供应商置顶，推理档位面板记住每个模型上次显式选择的档位。
  `v0.3.0` · [源码](https://github.com/ArcaneOrion/dsh-model-selector-search)
- **@arcaneorion/dsh-teaching-board** — 教学平面视图：agent 生成的自包含 HTML 投影进沙箱 iframe 当板书，可用画笔手写勾画（四色、橡皮、撤销）、在同一块板上增量续写，并把画面截图作为真实用户消息发回对话。
  `v0.6.0` · [源码](https://github.com/ArcaneOrion/dsh-teaching-board)
- **dsh-sdd-progress-xc** — 在右侧边栏以当前会话为维度展示 SDD 任务进度（todos）与进度台账（sdd/progress.md），采用官方 MarkdownText 渲染，每 5 秒自动刷新。
  `v0.1.9` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/xchannel1987/dsh-sdd-progress-xc)
- **@utmotc/dsh-balance-card** — 在当前会话所用模型的厂商 API 余额，以 dsh Web 侧边栏卡片常驻展示，含每套餐进度条、货币/积分单位区分、设置页，以及订阅与积分额度监测。
  `v1.4.0` · [源码](https://github.com/Utmotc/dsh-balance-card)
- **dsh-quick-actions** — 在 DSH 每个由会话支持的消息编辑器旁提供全局快捷动作。一键发送预置或你自己保存的文本，每个动作可单独设置发送确认。
  `v0.2.0` · [源码](https://github.com/lovvvve/dsh-quick-actions)
- **dsh-statusbar-config** — 用 ${变量} 显示模板自定义输入框下方的会话统计行——显示哪些统计段、单位文案怎么写，全部由模板决定。
  `v0.2.2` · 引擎 `>=0.1.7-0` · [源码](https://github.com/MannixHu/dsh-statusbar-config)
- **dsh-activity-bell** — 侧边栏活动铃铛：会话跑完后铃铛显示红色角标，点一下把工作区列表换成按天分组的最近活动列表，尚未打开过的完成项带绿点。
  `v0.1.2` · [源码](https://github.com/minivv/dsh-activity-bell)
- **dsh-pricing-badge** — 在 Web UI 中显示 DeepSeek API 高峰/空闲时段、当前模型的输出价格与账户余额。
  `v0.1.3` · [源码](https://github.com/ZhangBo-cmd/dsh-pricing-badge)
- **dsh-t3-new-session-screen** — 把 T3 Code 的新会话界面移植到 DSH 输入框：标题「What should we build in <project>?」里的项目名可点开工作区菜单，工具栏里新增推理强度选择器，卡片下方新增 git 分支条，可搜索本地与远程引用并用 git checkout 切换。
  `v1.0.0` · [源码](https://github.com/yusufameri/dsh-t3-new-session-screen)
- **dsh-t3-session-ui** — 移植 T3 Code 的会话上下文界面：会话行悬浮卡显示机器、Git 分支、模型、代理预设、审批策略与 token 用量，状态标签覆盖待审批、等待输入、运行中、错误与子代理工作，另有提供方与模型标记、会话头部信息条、血缘面包屑、可复制上下文或执行 DSH 压缩的行菜单操作，以及位于 DSH…
  `v0.1.0` · [源码](https://github.com/yusufameri/dsh-t3-session-ui)
- **dsh-codex-timeline** — 左侧用户轮次导航轨道：随阅读位置高亮，悬停预览单轮指标与模型回答摘要，支持键盘和点击跳转及本地会话搜索。
  `v0.6.4` · [源码](https://github.com/Wine-Red/dsh-codex-timeline)
- **dsh-custom-js** — 在 DeepSeek Harness 中加载、编辑、管理和热重载可信的 JavaScript / TypeScript 用户脚本。
  `v0.4.0` · [源码](https://github.com/jeffreyren1/dsh-custom-js)
- **dsh-quote-followup** — 在网页会话中划选文本，以原生引用 chip 插入输入框，进行针对性追问。
  `v0.2.10` · [源码](https://github.com/tr1v3r/dsh-quote-followup)
- **dsh-composer-markdown** — DSH Web 输入框的 Markdown 编辑增强：有序与无序列表续行且组内序号恒连续、Tab 层级缩进、行内代码样式、代码块围栏自动闭合；发送的草稿保持字面 Markdown。
  `v0.1.4` · [源码](https://github.com/chendefine/dsh-composer-markdown)
- **dsh-alt-enter-newline** — 给 dsh 的网页输入框加上 Alt+Enter 换行。
  `v1.0.0` · [源码](https://github.com/liggest/dsh-alt-enter-newline)
- **@sidequest-007/dsh-atlas** — 在 DSH Web 输入框里统一 @ 提及：五个内置类别（文件、文件夹、Skill、过去的聊天、插件），任何插件都能注册的数据源 seam，工作区外绝对路径引用，以及可被草稿中先写下的文件夹限定作用域、并用 PageUp/PageDown 翻页而不隐藏候选行的菜单。
  `v1.0.9` · 引擎 `>=0.1.6-alpha.1` · [源码](https://github.com/jameswatt139240-crypto/dsh-ATLAS)
- **@kenz1117/dsh-ui-rainbowspeak** — 虹语（RainbowSpeak）——沿聊天输入框边界持续流动的彩虹跑马灯，由锥形渐变环带驱动。支持流速、宽度、七种配色、方向、边与呼吸效果的实时设置，并具备会话状态感知：运行中加速、需关注变琥珀、出错红脉冲、庆祝闪动。
  `v0.0.2` · 引擎 `>=0.1.2-alpha.1` · [源码](https://github.com/kenz1117/dsh-ui-rainbowspeak)
- **dsh-clean-desktop-shell** — DSH 纯净桌面壳：双击桌面快捷方式即可像普通桌面软件一样启动；后端活性实时监测 + 托盘一键启停/重启（带进度弹窗）、离线自动重连、单实例。复用现有 web profile，不改动 web 界面。Windows + macOS 双平台。
  `v0.1.14` · [源码](https://github.com/Icather/dsh-clean-desktop-shell)
- **dsh-session-deck** — Codex 风格侧边栏：项目和对话共用的置顶区、置顶/项目/组件 三段可折叠分区、小铃铛活动视图（含最后一条回答的预览）、可为每个项目换 Emoji 图标。
  `v0.2.1` · [源码](https://github.com/Timebro9999/dsh-session-deck)
- **dsh-t3-model-picker** — 把 T3 Code 的模型选择器移植到 DSH 输入框：提供方侧栏、按提供方分组的搜索结果、浏览器本地收藏、不可用提供方标记，以及用 Cmd/Ctrl+1..9 直接选中可见列表的前九行。
  `v1.1.0` · [源码](https://github.com/yusufameri/dsh-t3-model-picker)
- **dsh-side-branch** — 右侧栏的只读侧枝会话：划选文字即可追问，答案不进入主会话的模型上下文；每轮追问都用主会话最新的已结算内容重建，写操作在执行层被拒，以保住提示词前缀缓存。
  `v0.2.0` · [源码](https://github.com/wucl12/dsh-side-branch)
- **dsh-plugin-width-slider** — DSH 桌面版多功能 UI 插件：对话宽度滑块（按下全屏预览、跟随窗口宽度）、思考块增强（思考/回复强制中文、展开收起、Markdown 渲染）、Open With 头部打开按钮、界面英文标签中文化、设置弹窗窗口化、会话删除与工作区分页。
  `v2.1.0` · [源码](https://github.com/djs326/dsh-plugin-width-slider)
- **dsh-whale-brand** — 把自己做的矢量 Logo 换到 DSH 侧栏与首屏标题旁，接管 sidebar.brand.mark / sidebar.brand.name / conversation.hero.brand.mark 这三个 single 槽位。包里自带的补丁只把自己插进 loader——这三个槽位同时被官方品牌插件…
  `v0.1.0` · [源码](https://github.com/hiJoeLee/dsh-whale-brand)
- **dsh-type-tune** — 面向 DSH Web 的「壁纸感知」可读性修复：用 color-mix 把三个低对比次级文字 token 向主文字靠拢，并叠加可调强度的文字光晕；提供仅作用于会话 Markdown 的内容规则（链接加粗 / 常驻下划线 / 变色、标题与正文变色）、可调的彩虹描边与渐变填充标题特效、从插件目录或 DSH_HOME…
  `v0.1.0` · 引擎 `>=0.1.7-rc.2 <0.2.0-0` · [源码](https://github.com/AWL-MC2/DSH-Plugin_awl)
- **dsh-vertical-layout** — 竖屏布局：电脑竖屏窗口下，导航占左列整高，文件/终端面板移到对话区上方，中间的分隔线可拖拽调整高度；手机/平板不受影响。
  `v1.1.0` · [源码](https://github.com/feng-yifan/dsh-plugins)
- **dsh-coros-badge** — 在 Web UI 中常驻显示已绑定的高驰手表型号与累计运动天数，点击展开一句话点评与建议。
  `v0.1.0` · [源码](https://github.com/ZhangBo-cmd/dsh-coros-badge)
- **dsh-morning-paper** — 把跑着的会话排成一张报纸式头版，作为 Chat 与 Trajectory 旁的 Conversation View 标签页：逐轮时间线（耗时、步数、工具、token、结果）、按文件统计的改动热度、墙钟时间去向以及其中多少是模型而非工具、哪一轮吃掉了花费、无人重试的失败（附失败命令），以及对照该路由模型自报容量的上下文压…
  `v0.1.1` · 引擎 `>=0.1.2-alpha.1 <0.2.0-0` · [源码](https://github.com/damlys99/dsh-morning-paper)
- **dsh-deep-diving-back** — 恢复 DSH 0.1.6 及以前在对话流末尾显示的蓝色流光深度求索中回合状态行.
  `v0.1.2` · [源码](https://github.com/azazo1/dsh-deep-diving-back)
- **dsh-reduce-effects** — 在设置里新增 "前端特效" 页, 按分类关掉 DSH Web 的动画与过渡, 加载与进度动画, 毛玻璃, 平滑滚动, 标题 hover 滚动, 阴影, 渐变与 JS 动效, 降低浏览器渲染负担.
  `v0.2.0` · [源码](https://github.com/azazo1/dsh-reduce-effects)
- **dsh-noletme** — 实时追踪 DeepSeek Harness 网页对话中模型流式推理轨迹关键词统计的 UI 面板。
  `v0.3.9` · [源码](https://github.com/Yuer6327/NoLetMe)
- **dsh-flyout-sidebar** — 可弹出侧边栏：文件树、Git 未提交变更列表与多标签文件/diff 预览，一键弹出为独立浏览器标签页。
  `v0.1.12` · [源码](https://github.com/oxlyn/dsh-flyout-sidebar)
- **dsh-chat-thinking-editor** — 为 DeepSeek Harness 已完成的助手回复增加编辑入口，可改写正文或思维链，改动以 surface replacement 形式保存。
  `v0.1.2` · [源码](https://github.com/yumiao-dev/dsh-chat-thinking-editor)
- **dsh-task-progress** — DSH 长任务的实时进度：脚本往该会话自己的进度文件追加 JSON 行，不能自报进度的命令可用 `dsh-progress run -- <cmd>` 包装，Web 界面用悬浮窗与右侧栏 tab 展示，未上报的后台任务也会列成任务行。
  `v0.3.0` · [源码](https://github.com/chen8923/dsh-task-progress)
- **dsh-webask** — 在输入框旁加一个按钮，并提供全局快捷键（默认 mod+shift+k）浮层，把一次性的小问题交给网页版对话而不是送进 harness 上下文：草稿会从输入框取出、复制到剪贴板并打开模板 URL。内置目标站点预设（DeepSeek、Kimi、Qwen、豆包、腾讯元宝、GLM、Gemini），带本地问题历史（可重新打开、复…
  `v0.1.0` · [源码](https://github.com/DanZai233/dsh-webask)
- **dsh-grok-acp** — 在 Web 输入框中切换原生 DSH Agent 与 Grok Build，并通过 ACP 代理 Grok Build 会话及斜杠命令。
  `v0.3.4` · [源码](https://github.com/zmh2000829/DSH-agent-bridge)
- **dsh-web-icon-indicator** — 浏览器标签页 favicon 实时反映 DSH 会话状态（待机 / 运行中 / 提问 / 完成）：单个 base.svg 在浏览器端上色与动画，颜色与特效均可在设置页配置。
  `v0.6.0` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/waknow/dsh-web-icon-indicator)
- **dsh-improve-prompt** — DSH 输入框一键增强提示词：点 ✦ 把草稿改写成 Agent 可执行的提示词，直接替换并可一键撤回；保真闸机械校验硬事实（路径、标识符、数字与版本、URL、反引号代码）逐字存活，长度闸防止把一句话需求膨胀成规格书。
  `v0.7.2` · [源码](https://github.com/hoyyang/dsh-improve-prompt)
- **dsh-workspace-scope** — 按工作区（工程）启停 Skill 与 MCP：每个项目单独控制新会话加载哪些技能与 MCP 工具。
  `v0.5.3` · [源码](https://github.com/Ri0n72Y/dsh-workspace-scope)
- **dsh-session-colorful-unread-pin-jobs** — 按状态给 DSH 侧栏会话标题上色：未读（模型运行中＝蓝、已跑完＝绿）与置顶（黄，读取 DSH 官方置顶集合），两者合成一条从左到右的渐变。置顶、归档与排序由 DSH 官方提供，本插件不重复实现置顶、也不改写官方 bundle；另含列出全部未读会话的设置分节。
  `v2.0.0` · [源码](https://github.com/enterhalf/dsh-session-colorful-unread-pin-jobs)
- **dock-images** — dock 系列图片查看器：支持 PNG/JPEG/GIF/WebP/BMP/SVG/ICO/AVIF 格式，SVG 仅以安全方式渲染。
  `v0.1.3` · [源码](https://github.com/AKS1st/dock-images)
- **@tecfancy/dsh-mobile** — DSH Web 移动端适配插件：侧边栏/详情抽屉浮层化、输入栏与设置页响应式适配，桌面零回归。
  `v0.1.8` · [源码](https://github.com/TecFancy/dsh-mobile)
- **meow-smooth** — 手机优先的 DSH 前端体验优化：输入框自动折叠、手机回车换行、侧边栏/顶部栏/设置页压缩、禁缩放回弹，以及审批/提问/任务完成通知（页面卡片、Web Push、webhook）；零 dsh 本体改动。
  `v0.8.1` · [源码](https://github.com/Phant0Meow/dsh-meow-smooth)
- **@zerorigin-studio/dsh-desktop-shell** — 把 dsh web 界面封装成原生 Windows 桌面窗口，内置桌面客户端，带系统托盘、开机自启与协议文件分发。
  `v0.6.3` · [源码](https://github.com/zerorigin-studio/dsh-desktop-shell)
- **@zerorigin-studio/dsh-deepseek-chat** — 网页对话入口插件：侧边栏一键打开 chat.deepseek.com 独立窗口（dsh-desktop 桥接），纯网页环境自动回退内嵌打开。
  `v0.3.5` · [源码](https://github.com/zerorigin-studio/dsh-deepseek-chat)
- **dsh-workspace-hide** — 在 DSH 侧边栏隐藏指定工作区，并把它的会话一并归档，避免这些会话溢出到「未分组」列表。纯本地、完全可逆；装了 dsh-archive-manager 时执行真归档且可撤销，未装时退化为纯显示层。随时可在设置页恢复。
  `v0.2.1` · [源码](https://github.com/SUZUNAMI/dsh-workspace-hide)
- **dsh-run-button** — 为回答里的命令行代码框加「运行」按钮，通过宿主 shell 服务执行该命令，输出显示在右下角浮动面板，或每个运行一个底部面板标签页。
  `v0.1.0` · [源码](https://github.com/EdwardXiao-bit/dsh-run-button)
- **media-preview** — 在 DSH 聊天记录中自动将本地音视频路径渲染为可播放预览：将路径替换为同源 /api/media-preview/* 路由支持的 <audio>/<video> 播放器，并返回明确的错误状态码。
  `v0.1.3` · [源码](https://github.com/xiaokaizhou/dsh-media-preview)
- **@z1995418/dsh-file-menu** — 为 DSH Web 界面补上右键菜单：文字与输入框可复制/剪切/粘贴/全选，文件引用与链接可复制路径、在文件管理器中定位、用默认应用打开。
  `v0.8.1` · [源码](https://github.com/dreammaker2016/dsh-file-menu)
- **dsh-peak-status** — DSH Web GUI 会话头部高峰指示灯，实时显示当前北京时间是否处于 DeepSeek API 高峰时段，附实时时钟与下一转折倒计时。
  `v1.0.5` · [源码](https://github.com/xiaoyi-xx/dsh-peak-status)
- **@gorban/dsh-job-stop** — 在会话头部的后台任务列表里停止正在运行的任务，确认弹窗会再次显示完整命令。
  `v0.1.2` · 引擎 `>=0.1.2-alpha.1` · [源码](https://github.com/gorban/dsh-job-stop)
- **dsh-harness-ui** — 从侧栏打开的整页控制台面板，含八个标签：总览；从 sessions 服务读取的会话列表（标题、目录、运行状态、更新时间，带筛选）；从 pluginInventory 与 pluginManager 读取的已装 bundle 与 Loader 条目，每个 bundle 带启用开关；列出 GitHub 搜索 API 中…
  `v0.1.2` · 引擎 `>=0.1.6-alpha.2 <0.2.0` · [源码](https://github.com/jianjianzhu/dsh-harness-ui)
- **dsh-answer-highlighter** — 在 DSH Web 的助手回答完成后，额外调用一次模型，自动高亮其中的关键点、定义、警告和问题。
  `v0.1.0` · [源码](https://github.com/Matcha-Eason/dsh-answer-highlighter)
- **@mimateinn/dsh-i18n** — 为 DeepSeek Harness 界面新增 20 种语言（繁体中文香港/台湾、日语、韩语、法语、德语、西班牙语、葡萄牙语、意大利语、俄语、乌克兰语、波兰语、荷兰语、土耳其语、阿拉伯语、印地语、印尼语、越南语、泰语、瑞典语），逐条精译并带运行时兜底，另加自动翻译，把市场与第三方文本翻译成你的语言。
  `v0.2.6` · [源码](https://github.com/mimateinn/dsh-i18n)
- **dsh-life-workbench** — 个人工作台面板：总览仪表盘、自定义看板、随手记与资料库，数据由 Host 持久化到本地 JSON。
  `v1.0.0` · [源码](https://github.com/meihaoyidian/life-workbench)
- **dsh-macos-settings-shortcut** — 为 macOS 上的 DeepSeek Harness 恢复 Cmd+, 设置快捷键。
  `v0.1.0` · [源码](https://github.com/Qulierm/dsh-macos-settings-shortcut)
- **dsh-favicon-status** — 为 dsh web 绘制浏览器页签状态指示：根据会话列表把 favicon 画成状态圆环（执行中蓝色旋转、等待用户琥珀色、完成绿色）。
  `v0.1.0-rc.8` · [源码](https://github.com/bf185003/dsh-favicon-status)
- **dsh-task-console** — 把 DSH 页面翻到背面变成玻璃任务台（会话 / 后台任务 / 子代理 / 工作区卡片），并提供无限画布：能把卡片拆成可拖动的控件、内嵌网页应用，还能用对话框直接改画布。
  `v0.24.0` · 引擎 `>=0.1.5-rc.1 <0.2.0-0` · [源码](https://github.com/He2way/dsh-task-console)
- **dsh-think-ux** — DSH Web 端的丝滑思考盒体验：think 行展开为 24 行限高预览并随流式推理平滑追底，settle 时以短动画收起，主对话视图以读者友好的平滑追逐跟随（无跳变、无拉扯）。
  `v0.1.3` · [源码](https://github.com/el16z3c/dsh-think-ux)
- **dsh-cad-viewer** — 在对话界面新增「3D模型」标签页作为模型库：agent 把 CadQuery 脚本或已剖分的网格存入服务端，标签页用 three-cad-viewer 预览、按文件夹整理，并可导出 STEP、BREP、STL、DXF 等 10 种格式。
  `v0.2.0` · [源码](https://github.com/CMoyuer/dsh-cad-viewer)
- **dsh-split-screen** — DeepSeek Harness 网页端分屏工作区 - 多个会话并排聊天，面板观感与原生对话完全一致：拖拽分屏、实时会话（排队消息、面板内 ask_user/审批卡片）、面板内视图标签（Chat/Trajectory/插件视图）、Alt+T 紧凑 TUI 输入模式与面板焦点快捷键。需要 DSH 0.1.5+。
  `v1.2.6` · [源码](https://github.com/YEYEYEYESHIFU/dsh-split-screen)
- **@duke-dsh-plugins/whaleharbor-promo** — 把浏览器里的 DSH 会话变成鲸港简版客户端：独立 --app 窗口、客户端顶栏与任务通知；后台多源下载完整桌面安装包（SHA-256 校验），完成后提示安装。
  `v1.1.0` · [源码](https://github.com/MoonlitDropOfBlood/DSH-Desktop)
- **dsh-paste-path** — macOS Finder 剪贴板粘贴：在 Finder 里 Cmd+C 复制文件或文件夹，回到 DSH 按 Ctrl+V 把绝对路径插入输入框；普通文本粘贴的 Cmd+V 不受影响。
  `v0.1.3` · [源码](https://github.com/jhuanxx44/dsh-paste-path)
- **dsh-office-plugin** — 把多 agent 会话的实时活动渲染成 Web UI 侧边栏里的像素风办公室--每个会话是一名牛/马员工，忙时伏案敲键盘、闲时起身摸鱼，支持点击查看工位监控、就地处理审批。
  `v0.3.0` · [源码](https://github.com/geguanming/dsh-office-plugin)
- **@mackwan84/dsh-ui-mockup-bundle** — 在 DeepSeek Harness 中使用可切换的阿里云百炼与火山方舟图像服务生成 UI 线框图和高保真设计稿。
  `v0.3.0` · [源码](https://github.com/mackwan84/dsh-ui-mockup)
- **dsh-live2d-avatar** — DSH 的 Live2D 形象舞台与桌宠：内置 Haru 示例、自定义 Cubism 2/3+ 模型加载与缩放/位置控制、页面内可拖动桌宠、可选透明置顶桌面独立桌宠窗口、按对话授权的表情 control prompt，以及默认关闭、需自部署 ASR/TTS 的语音功能。
  `v0.3.0` · [源码](https://github.com/clown139880/dsh-live2d-avatar)
- **dsh-session-actions** — 侧边栏会话操作：右键打开行菜单、双击重命名、复制会话 ID，以及二次确认后连同存储一起删除会话。
  `v0.3.1` · [源码](https://github.com/duanyunlun/dsh-session-actions)
- **dsh-turnbar** — 会话内轮次导航视频进度条：全图分段、悬停富元信息卡（工具/文件/token）、拖动 scrub、⌘K 全会话搜索、⌘↑/⌘↓ 逐轮跳转、Esc 返回原位——基于会话事件日志，超出已加载窗口仍可用。
  `v0.3.3` · 引擎 `>=0.1.0-rc.5` · [源码](https://github.com/rex178178/dsh-turnbar)
- **dsh-wide-conversation** — 把 DSH Web 客户端对话列宽度设为其自身宽度的百分比（40–100，默认 100 即铺满整列），取代内置的 680–920px 阅读宽度，并在「设置 > 插件」中提供可折叠的调整卡片。
  `v0.2.0` · [源码](https://github.com/yunxiyang/dsh-wide-conversation)
- **dsh-settings-nav-order** — 长按拖动即可重排设置面板左侧大项：被拖项半透明并跟随指针，顺序保存在插件自己的目录而非 settings.yaml，卸载后自动恢复官方原序。
  `v1.0.0` · [源码](https://github.com/Saretheya/dsh-settings-nav-order)
- **dsh-file-viewer** — Web 客户端只读文件预览面板，支持图片、PDF、CSV/TSV、文本、源代码、Markdown、JSON 与 YAML 渲染、大文件分段读取，以及面向非本地内容的 provider API。
  `v0.3.7` · [源码](https://github.com/liguobao/dsh-file-viewer)
- **dsh-valley-meter** — 峰谷电表——DeepSeek 用量小助手：输入框上方一枚极简余额徽章，框内只有「货币符号 + 余额数字」两组，官方余额每 5 秒实时刷新；点击符号即在新页签打开官方充值页；光标移入徽章时，符号身下浮现一枚圆形底色（左弧与徽章左端圆角完全重合），并展开 24 小时峰谷时间轴（橙=峰时、蓝=谷时、白色发光指针标当前本地时刻…
  `v0.1.6` · [源码](https://github.com/uckkk/dsh-valley-meter)
- **dsh-diff-card** — 给 DSH Desktop 用的轮末改动卡：编辑/写入行显示 +N −M，点开审 diff；macOS 和 Windows 可用系统应用、文件夹或 VS Code 打开文件。
  `v0.1.4` · [源码](https://github.com/WongYuYe/dsh-diff-card)
- **dsh-code-quote** — 输入框代码引用折叠：粘贴「路径:行号 + 代码」时自动折叠为「文件图标+文件名:行号」引用芯片（Ctrl+Z 可还原），发送时由 agent/pre-step 钩子将完整代码快照作为独立上下文消息注入给模型。0.5 起支持侧边栏「添加到对话框」大段选区（仅插路径行时按会话工作目录读磁盘取代码），并在捕获阶段抢权接管…
  `v0.5.1` · [源码](https://github.com/hanrr92/dsh-code-quote)
- **dsh-queue-reorder** — 在官方队列 dock 内直接重排忙碌时排队的消息：每一行带拖拽手柄与上下移动按钮，移动在宿主端以一次带并发校验的 inbox splice 完成。只装饰官方 dock 而不替换它，因此预览、行内编辑、插话、删除与附件保持原样。队列已变化、该行不是用户消息（例如目标轮次提示）、或队列属于子代理会话时，移动会被拒绝。
  `v0.1.1` · 引擎 `>=0.1.2-alpha.1 <0.2.0-0` · [源码](https://github.com/damlys99/dsh-queue-reorder)
- **@leetoners/dsh-ui-subagent-monitor** — Web UI 子代理实时监视面板：侧边栏底部入口 + 右上角常驻卡片面板，实时展示当前会话每个子代理的运行状态（运行中/耗时/终态）、树形缩进，一键跳转子代理会话并支持返回主会话，刷新自恢复、移动端默认隐藏。
  `v0.5.0` · [源码](https://github.com/Mombrane/dsh-subagent-monitor)
- **dsh-ctrl-enter-submit** — 让对话框中普通 Enter 换行、Ctrl/Cmd+Enter 提交，可在设置中开关。
  `v1.1.1` · [源码](https://github.com/SA1992X/dsh-ctrl-enter-submit)
- **dsh-draft** — 基于 Markdown 的 dsh 草稿板插件，支持实时预览编辑，本地持久化。
  `v0.2.0` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/lalalaleo/dsh-draft)
- **dsh-file-review-tab** — 把 agent 的文件改动审查放进 dsh-better-sidebar 侧边栏 Tab 或对话尾部行，支持行级 diff 与撤销。
  `v0.5.0` · [源码](https://github.com/Lzh3070/dsh-file-review-tab)
- **dsh-chat-index** — DSH Web UI 会话提问索引：右缘时间比例圆点窄条与可展开链面板，展示每次用户提问的问题与时间，含分支/子会话；点击节点跳转并高亮对应消息。
  `v0.1.2` · [源码](https://github.com/kk112222/dsh-chat-index)
- **toolfolk-for-dsh** — 把插件与模型的调用过程可视化成 3D 办公室：六个固定工位、思维流气泡与交付纸。
  `v0.1.2` · [源码](https://github.com/zkl22492-star/Toolfolk-for-DSH)
- **dsh-quick-ask** — ChatGPT 式侧边快速提问：在 DSH Web 聊天界面右侧悬浮面板中就当前话题提小问题，由独立轻量会话通过官方 /api RPC 回答，绝不写入、不影响主对话。流式正文、可折叠思考、工具 chips、停止按钮、agent 预设选择，自动抓取主对话最近内容作为背景。
  `v0.1.1` · [源码](https://github.com/Volta-ln/dsh-quick-ask)
- **dsh-conversation-map** — 停靠在 dsh Web 对话区右缘的会话代码地图：色块/缩略图双模式、拖动调宽（10–320px）、悬停放大镜预览、点击跳转与拖动滚动（带实时视口指示条）、可收起为 4px 细条。
  `v0.1.8` · [源码](https://github.com/afoxsss/dsh-conversation-map)
- **deepseek-harness-ultra-slash** — 在 Web UI 输入框的斜杠菜单里单独一组插件命令：/steer 在模型下一步注入内容且不打断当前回合，/new 开启空白会话，/skill 与 /docs 在 /steer 基础上附加完成后写入 skill 或 docs，并可在设置里为常用 /steer 内容配置自定义快捷命令。
  `v0.2.4` · [源码](https://github.com/loadingvx/deepseeh-harness-ultra-slash)
- **@climber47/dsh-step-clock** — 在网页版输入框上方用一句中文显示当前正在执行的智能体步骤：步号、正在执行的工具、以及已运行多久。步骤结束后会保留该步用时，直到下一步开始，因此慢步骤事后也能查证。
  `v0.1.1` · [源码](https://github.com/WsTe47/dsh-step-clock)
- **@lrplrplrp/dsh-live2d** — dsh 的 Live2D 看板娘插件。
  `v0.1.4` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/lrplrplrp/dsh-live2d)
- **dsh-chat-history** — 在会话头部新增「目录」tab：把当前会话的用户消息整理成可点击的目录，自动翻页加载全部历史，点击即跳回对话并定位。
  `v0.1.2` · [源码](https://github.com/Stylelinzzz/dsh-chat-history)
- **dsh-artifact-index** — 为 dsh-artifacts 侧边栏补上缺失的后端，提供 /report 产物索引与预览所需的文件内容。
  `v0.1.0` · [源码](https://github.com/Huuuuung/dsh-artifact-index)
- **dsh-toolfold** — Codex 风格的工具调用折叠，将多个工具调用折叠到一行内。
  `v0.1.10` · 引擎 `>=0.1.2-rc.1 <0.1.3 || >=0.1.5-rc.1 <0.1.6` · [源码](https://github.com/Minecraftbe/dsh-toolfold)
- **dsh-user-question-nav** — ChatGPT 风格问题导航胶囊，带 ⏫⏬ 上下箭头 — 对话区右侧逐条刻度尺，悬停展开抽屉列出全部用户问题，实时搜索过滤、一键平滑跳转、滚动同步高亮当前问题，会话切换自动重挂载。
  `v0.2.0` · [源码](https://github.com/xiaomujiang/dsh-user-question-nav)
- **dsh-plugin-workbench** — 为 dsh 网页添加 VS Code 风格工作区文件浏览器：文件树、可编辑预览（语法高亮、标签页、行号）、右键文件操作与图片内联预览。
  `v0.0.25` · [源码](https://github.com/Pasumao/dsh-plugin-workbench)
- **dsh-easy-archive** — 工作区侧边栏行内两击归档：点一次变红确认，再点即归档，归档项不再出现在 ⋮ 菜单里。
  `v0.1.4` · [源码](https://github.com/bainianlaoyao/easy-archive)
- **dsh-web-mobile-fix** — Web UI 移动端布局修复：窄屏下设置面板全屏化、插件导航单行排满、侧边栏全屏、弹层居中、会话日志按钮图标化。
  `v1.0.6` · [源码](https://github.com/AcidGr/dsh-web-mobile-fix)
- **dock-git** — dock 系列 Git 历史可视化插件：泳道式提交图、分支/标签管理、暂存/提交/推送与远端操作。
  `v0.3.4` · [源码](https://github.com/AKS1st/dock-git)
- **dock-editor** — dock 系列文本查看与编辑器：支持撤销重做、Ctrl+S 保存、未保存确认和二进制检测，作为 dock-files 的默认文本查看器。
  `v0.2.2` · [源码](https://github.com/AKS1st/dock-editor)
- **dock-markdown** — dock 系列 Markdown 查看器：GFM 渲染 + DOMPurify 消毒、文档大纲、相对路径图片/链接解析，可一键切换编辑。
  `v0.1.2` · [源码](https://github.com/AKS1st/dock-markdown)
- **dsh-strata** — 滚动条槽位里的会话缩略图：按事件类型着色的等比色块、用户与失败锚点、滚到顶自动补载历史、悬停线索墙铺开全部发言，附近/中/全三档地图尺度切换。
  `v0.12.1` · [源码](https://github.com/jsdvjx/dsh-strata)
- **dsh-desktop-pet** — DeepSeek Harness 桌面宠物：完全支持 Codex 桌宠格式，可使用 hatch-pet Skill 创建宠物，或通过 Petdex 导入宠物。
  `v0.2.0` · [源码](https://github.com/sereinmono/dsh-desktop-pet)
- **dsh-files-native** — 接近原生的 DSH 附件：PNG/JPEG/WebP/GIF 走官方缩略图，其它文件经拖入、粘贴或回形针变成 64px 卡片；非图片落到 .dsh-uploads，发送后贴在用户气泡旁。
  `v0.2.1` · [源码](https://github.com/meyaomiao/dsh-files-native)
- **dsh-desktop-plugin** — Windows 托盘桌面壳：自动从 GitHub Releases 安装并升级 exe、创建应用与网页端两个桌面快捷方式，并提供 desktop_launch 工具在对话中一键启动。
  `v1.5.12` · [源码](https://github.com/RAFOLIE/dsh-desktop-windowos)
- **dsh-model-accordion** — 为 DSH Web 输入栏提供按 provider 折叠的模型选择器，并使用模型目录中的真实推理档位。
  `v0.2.1` · [源码](https://github.com/lakabuji-arch/dsh-model-accordion)
- **@wlv-zedd/dsh-btw-plugin** — 交互式侧边助手坞：用 /btw 快速提问，实时显示思考状态，历史记录分页浏览。
  `v1.0.5` · 引擎 `>=0.2.0` · [源码](https://github.com/WLV-ZEDD/dsh-btw)
- **plugin-effort-slider** — 与模型选择器连为一体的带刻度推理强度滑杆，位于输入框内，支持主题变量与中英法三语。
  `v1.2.2` · [源码](https://github.com/mrSutivu/plugin-effort-slider)
- **dsh-timeline** — DSH 效率插件：时间轴、提示词库、导出对话、闪记等提效功能。
  `v0.1.5` · [源码](https://github.com/houyanchao/dsh-timeline)
- **@lsq64737/dsh-workbench-layout** — 将 DSH Web 重排为三栏工作台，提供文件编辑、Git 视图、Markdown 预览和工作区终端。
  `v0.1.9` · [源码](https://github.com/lsq-dsh-plugins/dsh-workbench-layout)
- **dsh-chat-avatar** — 在每轮 AI 回复左侧与你的每条输入右侧各显示一个头像，可上传自己的图片并设置尺寸与圆形/方形头像框。
  `v0.1.0` · [源码](https://github.com/Rabbit-bot-No-002/dsh-chat-avatar)
- **dsh-diff-stat** — 在编辑/写入工具行内联 +N −M 徽标，每轮末尾给出可折叠的文件变更汇总卡：对齐差异、逐文件审查与撤销；覆盖原生 edit/write、str_replace_editor 与 Code Dispatch 子调用，不依赖 git。
  `v0.1.9` · [源码](https://github.com/HaoyueQin/dsh-diff-stat)
- **@frog755/dsh-prompt-vault** — 输入框上方的提示词库：📚 按钮展开可搜索面板，点条目一键填入草稿（追加不覆盖）；数据以 JSON 文件保存在 Host 侧。
  `v1.0.2` · [源码](https://github.com/Frog755/dsh-prompt-vault)
- **dsh-alive** — 零 token 在线状态指示器：会话头部常驻显示 ● 在线 / ● 离线 状态点，每 15 秒自动检测一次，不调用任何 LLM。
  `v0.1.2` · [源码](https://github.com/AikenFra/dsh-alive)
- **dsh-smooth-cursor** — 为 DSH Web 输入框提供流畅的彗星光标：以发光的彗星拖尾取代原生闪烁光标，随输入平滑滑动，可配置强调色、粗细与拖尾，并适配中文等 IME 输入。
  `v0.1.9` · [源码](https://github.com/Lacquervii/smooth-cursor)
- **dsh-splash-launcher** — Windows 一键启动器：无边框 WPF 启动动画（HARNESS 逐笔描边），后台拉起 dsh web 并在 GUI 就绪后淡入，附 desktop_launch 工具。
  `v2.0.1` · [源码](https://github.com/Isilsolme/dsh-splash-launcher)
- **dsh-composer-recall** — DSH 0.1.2-alpha.1 输入框历史：空输入框按 ↑ 召回当前会话刚发过的话，↓ 前进，Esc 还原正在打的草稿。
  `v0.1.3` · [源码](https://github.com/WongYuYe/dsh-composer-recall)
- **dsh-deckseek** — 阅读视图增强插件——执行过程自动收起、右缘消息导航导轨、页内查找、统一失败卡片，支持生成式 MCP Apps（SEP-1865）沙箱交互。
  `v0.6.0` · [源码](https://github.com/JNNarrator/dsh-deckseek)
- **@mixian/dsh-desktop-plugin** — 桌面级增强套件：原生提问/审批交互通知、屏幕截图工具、多智能体平铺网格视图与轻量级 Tauri 桌面外壳。
  `v0.1.3` · [源码](https://github.com/FuqiangCraft/dsh-desktop)
- **@opencues/dsh** — 在输入框内提供同义词替换与以下划线触发的补全：一行以 _ 结尾即自动补全，拼写错误在输入时即时标出。它走 dsh 已配置好的模型，因此无需额外的 API key。
  `v0.2.21` · [源码](https://github.com/opencues/opencues)
- **dsh-auto-collapse** — Codex 风格工作流自动折叠：回合完成收成一行「已处理 X秒」只留最终正文，工具/思考块折叠成实时摘要 chip（运行中跟随流式滚动），逐级点击展开；卸载完整还原。
  `v0.2.1` · [源码](https://github.com/a179-sanae/dsh-auto-collapse)
- **@choi-p/dsh-footer-order** — DSH 侧边栏页脚排序：将 sidebar.footer.action 槽位改为上下堆叠，并允许用户配置各条目自上而下的排列顺序。
  `v0.4.1` · [源码](https://github.com/Choi-Peng/dsh-footer-order)
- **dsh-johari-cognition-quadrant-dialog-composer** — 乔哈里认知四象限对话梳理工具——在输入框上方添加按钮，弹出 2×2 象限面板（我知道/不知道 × AI知道/不知道），将对话上下文梳理为结构化 Prompt 并写回输入框。
  `v0.1.1` · [源码](https://github.com/cyrus123456/dsh-johari-cognition-quadrant-dialog-composer)
- **adhdgofly-dsh-ext** — 在 DSH Web 已渲染的 Markdown 中做词性高亮：名词绿、动词红、形容/副词紫，支持深/浅色板、词性开关与流式防抖。
  `v0.2.0` · [源码](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext)
- **dsh-plugin-execution-graph** — 在会话视图中新增「执行图」标签页，把每个轮次的提问、模型回复与工具调用/结果渲染为可折叠的时间轴，并带详情面板与 PNG 导出。
  `v0.1.4` · [源码](https://github.com/liqiGeGe/dsh-plugin-execution-graph)
- **@canary-builds/dsh-mobile-ui** — 为 DeepSeek Harness 现有 Web 界面加上触屏友好的导航、布局微调与独立 PWA 样式。
  `v1.1.2` · [源码](https://github.com/Canary-Builds/dsh-mobile-ui)
- **@a9i5k4/dsh-anchored-monitor** — 给 DeepSeek V4 Pro 的鞭子：实时监听每个思维块的指纹，当模型从专注的 We will / I will 模式滑向发散的 let me 模式时把它拉回来。
  `v0.3.1` · [源码](https://github.com/Aik358/dsh-anchored-monitor)
- **dsh-composer-expand** — Web UI 输入框展开/收起：composer 工具行新增 ⬆/⬇ 按钮，一键把输入框扩大到 70vh 高度，方便写长 prompt。
  `v0.1.4` · [源码](https://github.com/13071301808/dsh-composer-expand)
- **dsh-simple-view** — 简化 DSH 聊天界面：隐藏执行日志、收紧间距与字号、把消息做成气泡，并注入可编辑的“简洁回复”系统指令。
  `v1.1.2` · [源码](https://github.com/hellofuture2068/dsh-simple-view)
- **@mhxy13867806343/dsh-desktop-extra** — DSH Desktop 桌面增强：一键检查更新、DeepSeek 余额与 API Key、导入其他 AI 工具。
  `v1.0.8` · [源码](https://github.com/mhxy13867806343/my-dsh-desktop-extra)
- **@sumomok/dsh-quote-message** — 把本会话里更早的内容引用进输入框：在任意消息里划选文字出现"引用"按钮，或输入 @ 选择整条消息；引用以原生 chip 形式存在，发送时序列化为引用块进入 prompt。纯客户端，无宿主路由，无自定义会话事件。
  `v0.3.1` · [源码](https://github.com/sumomok/dsh-plugins)
- **dsh-paste-names** — 将非图片文件或文件夹以原生 @path 引用粘贴进聊天输入框，或拖放插入绝对路径，替代仅支持图片的报错。
  `v1.4.3` · [源码](https://github.com/PaoMoXML/dsh-paste-names)
- **dsh-prompt-optimizer** — 在输入框按 ✨ 或 Alt+O 一键把草稿润色成更清晰、更结构化的 prompt；默认零配置复用当前会话模型（SSE 真流式、推理过程先出），也可自配任意 OpenAI 兼容端点。
  `v2.0.3` · [源码](https://github.com/winditer/dsh-prompt-optimizer)
- **dsh-mcp-diff** — 把网页对话里的每次文件改动渲染成一张折叠的 diff 卡片并逐行高亮，涵盖 MCP filesystem 的 edit_file/write_file 与内置的 edit/write。
  `v0.7.0` · [源码](https://github.com/Fakek0f3sT/dsh-mcp-diff)
- **dsh-settings-beautify** — 将 DSH 设置界面归一为同一套设计语言：统一各设置页的排版、卡片、控件、焦点与动效，包括其他插件贡献的页面。
  `v0.2.10` · [源码](https://github.com/leogottadothebest/dsh-settings-beautify)
- **dsh-conversation-timeline** — 对话时间线横条：输入框上方按轮次聚合的时间线，悬停显示该轮用户提示词，点击直接跳转到对话中的对应位置。
  `v0.1.1` · [源码](https://github.com/bycall/dsh-conversation-timeline)
- **dsh-code-collector** — 会话代码收集器：输入框右侧按钮一键汇总当前会话中模型产出的全部代码块，支持按语言/按文件双视图、同一文件的版本历史、实时搜索过滤、单条/全部复制、下载合并 Markdown，点击直接跳转到产出该代码的回合（Alt+Shift+C 快捷开关）。
  `v0.3.0` · [源码](https://github.com/bycall/dsh-code-collector)
- **dsh-shell-card-plus** — 用自定义 Shell 命令卡片替换 DSH Web 原版 bash/pwsh 工具行：长命令自动换行带行号不再截断，并提供独立的复制命令/复制输出按钮。
  `v0.3.2` · 引擎 `>=0.1.0-rc.5` · [源码](https://github.com/antnesswcm/dsh-shell-card-plus)
- **@dennisrongo/dsh-weather** — shell 浮层中的可拖动天气条，预报与地理编码来自 Open-Meteo；位置跨会话持久保存。
  `v0.4.0` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **@luziyang2026/dsh-question-nav** — DSH Web UI 会话内提问导航：对话栏左/右缘（可在设置中切换）的圆点迷你地图，一个圆点对应一个用户提问——悬停显示全文，点击跳转到该提问。
  `v0.7.8` · [源码](https://github.com/AbelKeithsun/dsh-question-nav)
- **dsh-tool-highlight** — DSH web 插件：给 bash/pwsh 命令与 read 的代码输出做分层语法染色（VS Code Dark+ 配色：关键字/字符串/数字/函数名/注释各一色）；认得出来才染，表格/日志保持原样；纯前端渲染，零 token 开销。
  `v0.2.6` · [源码](https://github.com/vollegrewar/dsh-tool-highlight)
- **@lijinhao315/dsh-question-index** — 提问索引：在会话右侧按序展示你提过的问题列表，可收起；点击某条即可把会话滚动跳转到对应位置。打开会话自动索引全部历史提问并本地持久保存；点击更早的提问会按需翻页加载后跳转。
  `v0.1.2` · [源码](https://github.com/lijinhao315/dsh-question-index)
- **@lcthe/dsh-timeline-rail** — DeepSeek Harness 网页会话消息时间轴导航条：消息区右侧等间距刻度，点击跳转，悬浮预览。
  `v0.2.12` · [源码](https://github.com/lcthe/dsh-timeline-rail)
- **dsh-lifeline** — DeepSeek Harness 右侧消息导航轨道：逐条消息刻度、悬浮预览抽屉、平滑跳转、星标回看、实时平移动画（可打断）、完整会话索引与虚拟化、面板动态避让、官方 --dsw-* token 样式。
  `v0.1.1` · [源码](https://github.com/Physicolor/dsh-lifeline)
- **dsh-knj-menu** — 第三方菜单管理器：统一收纳第三方插件的新增菜单入口，提供常规折叠与固定菜单项。
  `v2026.9.12` · [源码](https://github.com/yangdongzhen590/dsh-knj-menu)
- **dsh-search-switcher** — 在 DeepSeek Harness 模型选择器旁一键切换搜索服务商的下拉菜单；海外大学网络常拦截 DeepSeek 官方搜索，可借此切到其他引擎规避。
  `v0.2.0` · [源码](https://github.com/Hudson-Junior-Wang/dsh-search-switcher)
- **@all3cn/dsh-better-sidebar-n23** — dsh-better-sidebar 完整工作台 fork：资源管理器、编辑器、终端、Git、浏览器与分屏，外加仿 VSCode 外壳重构（全宽紧凑顶栏与活动栏）；npm 包名 @all3cn/dsh-better-sidebar-n23。
  `v0.1.0` · [源码](https://github.com/All3nCN/dsh-better-sidebar-N23)
- **dsh-version-badge** — 侧边栏设置按钮上方的版本徽标：常驻显示当前 dsh 版本，展开可查看全部核心包版本，并支持检查 npm 更新与一键部署。
  `v0.1.1` · [源码](https://github.com/mervin1944/dsh-version-badge)
- **dsh-nav-pointer** — 聊天区左侧的消息指针导轨：每条用户消息一个横条，点击滚动定位，悬停显示预览气泡。
  `v0.4.0` · [源码](https://github.com/kongdexu/dsh-nav-pointer)
- **@huanghai-lab/dsh-custom-instructions** — 在 DSH Web 中管理全局 AGENTS.md，支持 Markdown 预览、可复用模板、版本历史、导入导出、失败导入回滚与修订冲突保护。
  `v0.5.0` · [源码](https://github.com/huanghai-lab/dsh-custom-instructions)
- **dsh-ui-three-body** — 给 DeepSeek Harness 装上会开智的智子：注入驯兽内核让 AI 真正懂你，11 款动态皮肤、幽灵模式，关闭 AI 模式即零 token 消耗。
  `v0.2.10` · [源码](https://github.com/EternalNight996/dsh-ui-three-body)
- **dsh-reasoning-slider** — 为模型添加推理强度滑块，支持原生与动画模式、明暗配色，以及全局或按模型配色。
  `v0.2.1` · [源码](https://github.com/WSL043/dsh-reasoning-slider)
- **@dsh-blue/blue** — 插件树式终端界面：流式 markdown 会话流、工具卡片、模糊命令补全与主题热切换，每个界面组件都是可热替换的 Cordis 插件。
  `v0.1.1-rc.2` · [源码](https://github.com/dsh-blue/blue)
- **@joe0001/dsh-prompt-optimizer** — 在发送前优化当前聊天输入，采用前先对比原文与优化结果。
  `v0.2.2` · [源码](https://github.com/LHF198/dsh-prompt-optimizer)
- **dsh-gpu-pulse** — DSH Web 界面内置的悬浮 GPU 监控：紧凑可拖动的条带，每张独立 GPU 一行（精确名称、利用率、显存、温度、功耗），数据来自 nvidia-smi；侧边面板或侧边卡片打开时保持在最上层；驱动支持时还列出显存占用最高的进程；无 NVIDIA 驱动的机器会退化为 n/a 胶囊。
  `v1.0.0` · [源码](https://github.com/zhubaohi/dsh-gpu-pulse)
- **dsh-tmux-cc** — 为 DSH Web 提供持久的 tmux 控制模式驾驶舱，在停靠栏中镜像原生窗格。
  `v0.6.0` · [源码](https://github.com/adrianleb/dsh-tmux-cc)
- **@eternalnight/dsh-theme** — DeepSeek Harness 主题皮肤插件：内置主题 / 静态图片 / 动态视频（鼠标环绕跟随帧），侧边栏一键切换，设置页完整管理；导入持久化、默认皮肤不可删。
  `v0.5.1` · [源码](https://github.com/EternalNight996/dsh-theme)
- **dsh-settings-hub** — 统一收纳 DeepSeek Harness 里的第三方插件设置：自动发现、分组，并在一个可折叠的导航入口下拖拽排序。
  `v0.1.2` · [源码](https://github.com/Amengclass/dsh-settings-hub)
- **dsh-liquid-glass-input** — 给 DSH Web GUI 输入卡加上液态玻璃折射效果与弹簧按压动画。已发布 npm：dsh plugin --profile web add dsh-liquid-glass-input。
  `v1.32.9` · [源码](https://github.com/jkamkk/dsh-liquid-glass-input)
- **@tumi-huakai/dsh-plugin-meow-speech** — 显示层文本替换：自定义消息中任意文本的界面显示而不改动真实对话，支持逐条整词匹配、长词优先与代码块保护。
  `v0.1.0` · [源码](https://github.com/tumi-huakai/dsh-plugin-meow-speech)
- **dsh-conversation-process-collapse** — 将 DeepSeek Harness Web 对话中已结束回合的过程行折叠成一个可展开的总结，同时保留最终答案可见。
  `v0.3.0` · [源码](https://github.com/shimingming520/dsh-conversation-process-collapse)
- **dsh-niao-quick-open** — DeepSeek Harness 界面增强插件：工作区一键打开（复制路径、访达显示、自动发现编辑器打开）、用户消息导航条、会话待办标记、单列表增强与硬性重启按钮。
  `v0.5.3` · [源码](https://github.com/dsh-niao/dsh-niao-quick-open)
- **dsh-open-in-x** — 从 DSH Web UI 使用已安装的文件管理器、终端和受支持的编辑器打开工作区目录。
  `v0.1.1` · [源码](https://github.com/nikoart-liu/dsh-open-in-x)
- **dsh-task-graph** — 在会话区新增「图谱」Tab，把单个会话的执行过程渲染为可交互 DAG：轮次、LLM 步骤、工具、技能、子代理、代码改动与测试，支持实时状态、重试聚合、关键路径与轨迹双向联动。
  `v0.1.0` · [源码](https://github.com/KevinZhangNothing/dsh-task-graph)
- **dsh-free-models-hub** — DSH Web UI 右侧的免费模型抽屉面板，分页浏览免费模型，可一键或整页批量把模型写入自定义提供方，并附带本地多 Key 轮换代理。
  `v0.3.1` · [源码](https://github.com/yu-wenchao/dsh-free-models-hub)
- **deepseek-harness-novel-studio** — 本地优先的小说创作工作台，将大纲、章节、人物、时间线、写作规则与一致性检查联动到对话。
  `v3.4.2-beta.1` · [源码](https://github.com/qinpeizhan77/deepseek-harness-novel-studio)
- **dsh-ui-agents-pixe** — 为 DeepSeek Harness Web 主窗口添加「工作角色」页签 + 像素办公室浮层：内置 508 张角色卡（The Agency 255 + agency-agents-zh 253），支持搜索 / 中英切换 / 分部分类；Canvas 2D 像素小人可站立、打字、踱步，闲聊台词可接…
  `v1.0.18` · [源码](https://github.com/EternalNight996/dsh-ui-agents-pixe)
- **@vlln/dsh-navbar** — 对话节点导航条，右缘节点串快速跳转 user 消息。
  `v0.4.0` · 引擎 `>=0.1.0-rc.5` · [源码](https://github.com/vlln/dsh-navbar)
- **dsh-always-status-bar** — 原生消息状态栏无需悬停即可始终显示每条消息的日期时间，以及 Assistant 消息的用时、首 token、tok/s。
  `v0.1.0` · [源码](https://github.com/Bobnemimimmi/dsh-always-status-bar)
- **dsh-chat-timeline** — 1:1 复刻 DeepSeek 官网右侧对话导航栏（ScrollNav）：悬停展开面板、阅读位置高亮、点击跳转。
  `v0.1.5` · [源码](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline)
- **dsh-hotspots** — DSH Web 时事热点面板：AI 大事与工科热点实时聚合，每条含要点提炼与来源链接；侧边栏入口、三视图、关键词与来源筛选、已读标记与快捷键。
  `v1.1.0` · [源码](https://github.com/qys0012/dsh-hotspots)
- **dsh-dragview** — 拖拽文件以 Codex 风格附件卡片呈现，支持 PDF/文本/音视频应用内预览，其余格式调用系统默认应用打开。
  `v0.1.1` · [源码](https://github.com/anzhaohao/DragView)
- **@danielng23/dsh-edex-jarvis-ui** — 在 DSH Web 界面上叠加 JARVIS 风格科幻 HUD 外壳：电光青色 VITAL SIGNS 生命体征 / RT-MONITOR 实时监控 / RT-LOG 事件日志左栏，右侧 POWER CORE 能源核心仪表、旋转扫描的 RADAR 雷达盘与上下行流量图，左下文件系统浏览器（带文件预览），以及带…
  `v0.1.0` · [源码](https://github.com/ph4310822/dsh-edex-jarvis-ui)
- **dsh-session-timeline** — 会话左侧的短横线时间轴：整个会话的用户消息一览、当前消息定位、悬停预览消息与回复、点击跳转，可收起展开。
  `v1.0.2` · [源码](https://github.com/XiLuovo/dsh-session-timeline)
- **@zhuchenglong/dsh-side-chat** — Codex 风格 /side 侧边对话插件：在当前对话旁开一个浮动分叉面板，继承上下文、不打断主任务。
  `v0.0.9` · [源码](https://github.com/zclDragon/dsh-side-chat)
- **dsh-open-with** — 从 Session 页头或 Workspace 菜单用检测到或配置的编辑器打开当前已登记 Workspace，支持热重新检测和浏览器首选项记忆。
  `v0.2.0` · [源码](https://github.com/ChuanTianML/dsh-open-with)
- **dsh-message-rail** — Codex 风格左侧消息导航轨道：每条用户消息一个刻度，悬停预览、点击跳转，全历史一次索引。
  `v0.1.7` · [源码](https://github.com/wx-yss/dsh-message-rail)
- **dsh-ui-enhancer** — 面向 DSH Web 客户端的桌面化 UI 增强：自适应对比度壁纸、带活动流与投喂玩法的桌面宠物、@file 工作区文件引用，以及可缩放的文件/预览右侧面板。
  `v0.2.0` · [源码](https://github.com/AlexYin-Tongji/dsh-ui-enhancer)
- **dsh-adaptive-reasoning** — 炭灰余烬风格的 DSH Web 像素推理强度滑块：以近黑木炭、暗红裂纹和橙红高温核心呈现 4px 像素化 WebGL 火焰，拖动时逐档点燃；支持 0–100 无极拖动、16ms 节流写入与松手吸附。
  `v2.0.0` · [源码](https://github.com/zhuifengqug/dsh-adaptive-reasoning)
- **dsh-bloub-mood** — 动态心情图标：favicon、侧栏字标与首页标题随会话状态切换 bloub 表情动画（执行中 / 等输入 / 完成 / 空闲），8 种形状、12 种颜色与自定义文字均可在设置页配置。
  `v2.4.4` · [源码](https://github.com/Yuuhann1999/dsh-bloub-mood)
- **dsh-session-icons** — 侧边栏会话标题图标：标题生成时用同一路由的辅助模型调用画一枚 24×24 单色 SVG 隐喻图标，显示在每行标题左侧，带磁盘缓存。
  `v0.1.0` · [源码](https://github.com/fengb3/dsh-session-icons)
- **@wolfgenerals/ncm-player** — 网易云音乐浮窗播放器：可拖拽/折叠浮窗与迷你条，歌单发现（搜索/热门歌单），逐行同步歌词与翻译，播放队列持久化，扫码或 Cookie 登录，颜色跟随 DSH 皮肤主题。
  `v1.2.0` · [源码](https://github.com/WolfGenerals/ncm-player)
- **dsh-message-nav** — 为 DeepSeek Harness Web UI 添加 Codex 风格的消息导航轨道，方便在长会话中快速定位历史提问。
  `v0.1.1` · [源码](https://github.com/foooold/dsh-message-nav)
- **@danielng23/dsh-edex-ui** — 在 DSH Web 界面上叠加 eDEX-UI 风格外壳：左侧系统遥测栏（含每核 CPU 迷你趋势图）、右侧 encom-globe 世界地图与上下行流量图、左下文件系统浏览器（带文件预览），以及跟随当前工作区的终端风格输入框。
  `v0.1.0` · [源码](https://github.com/ph4310822/dsh-edex-ui)
- **dsh-session-folders** — 为网页侧边栏提供单层会话文件夹——按工作区分组会话，支持拖拽或右键菜单移动、归档与恢复，数据在服务端持久化。
  `v0.4.3` · [源码](https://github.com/EugeneVl/dsh_session_folders)
- **dsh-ui-settings-icons** — 为 DSH 设置侧边栏添加自定义图标，并开放 keyed `settings.section.icon` 槽位供第三方设置分区注册图标。
  `v0.1.2` · [源码](https://github.com/suntianc/dsh-ui-settings-icons)
- **dsh-macos-pet** — 分叉自 anneheartrecord/dsh-desk-pet 的 macOS 桌宠，一个真的置顶窗口，全屏 Space 也盖得住：姿势跟着本地 DSH 在六种状态之间走，右键菜单是真的 AppKit 菜单，里面有免打扰和会话清单，随包带七套皮肤。七套里有两套是仓库中的脚本用几何画出来的，不是生成的，所以做一套皮肤不…
  `v0.1.0` · [源码](https://github.com/Dkrillex/dsh-macos-pet)
- **dsh-turn-scrubber** — 右侧紧凑回合刻度条，悬停显示回合摘要，点击跳转到对应用户回合。npm 包名 `dsh-turn-scrubber`。
  `v0.2.0` · [源码](https://github.com/wsxwj123/dsh-plugins)
- **@lk251066/dsh-tui** — DeepSeek Harness 全屏终端工作台，提供独立持久助手、按工作区分组的项目会话、仅聊天区滚动，以及结构化思考、工具、diff、计划和子代理视图。
  `v1.8.3` · [源码](https://github.com/lk251066/dsh-tui-pro)
- **dsh-popout-sidebar** — 可弹出式侧边栏：侧边栏展示产物与文件树，支持多种文件预览形式；并可弹出为独立浏览器标签页（可拖至另一显示器）；兼容其他sidebar插件，可以同时显示。
  `v1.0.1` · [源码](https://github.com/e2mcc/dsh-popout-sidebar)
- **dsh-whale-desktop-launcher** — DSH 的 Windows 桌面启动器，提供鲸鱼娘图标、后台服务启动和无浏览器工具栏的 Chromium 应用窗口。
  `v0.1.0` · [源码](https://github.com/HUITianYi/dsh-whale-desktop-launcher)
- **weshop-dsh-plugin** — 电商可视化工作区：在无限画布上完成产品图、虚拟试穿、背景处理与视频生成，并与 Harness 对话实时同步。
  `v1.0.2` · [源码](https://github.com/weshopai/weshop-dsh-plugin)
- **dsh-plugin-collapsible-steps** — 把消息之间连续的工具调用与思考步骤折叠成单个可展开的括号条目。
  `v0.1.1` · [源码](https://github.com/mervyn-teo/dsh-plugin-collapsible-steps)
- **dsh-showreel** — 把最近一次已完成的 DSH 任务生成为可分享的竖屏战报视频：五幕可编辑故事板、Host 侧脱敏、可选 AI 润色与配音，导出 MP4/WebM 和 PNG 封面。
  `v0.1.1` · [源码](https://github.com/xiaoyuer3921/dsh-showreel)
- **dsh-attachment** — 为 Web UI 添加文件与文件夹拖放附件，提供输入栏卡片、持久化历史记录与工作区路径。
  `v1.0.1` · [源码](https://github.com/WJZ-P/dsh-attachments)
- **dsh-skin-manager** — DSH Web GUI 皮肤管理器：自动发现已安装皮肤，在独立设置页一键互斥切换，热载入无需重启。
  `v0.1.6` · [源码](https://github.com/xiaoyangcheng84-svg/dsh-skin-manager)
- **@opendsh/dsh-plugin-setting-mcp** — 在 Web 设置面板中查看、添加、编辑、删除、启用或停用 MCP 服务器，保存后热重载。
  `v0.1.2` · [源码](https://github.com/Ceelog/dsh-plugins)
- **whale-on-desk** — 像素鲸鱼桌宠,29 个逐帧验收状态:等批准时贴屏敲玻璃并让标签页标题闪烁,任务完成开口汇报,并为 web 端提供斜杠命令面板。
  `v3.0.0` · [源码](https://github.com/cookiesheep/whale-on-desk)
- **deepseek-desk-pet** — 装在 DSH 页面之外的 macOS 桌宠：一个真的置顶窗口，全屏 Space 也盖得住；六种状态跟着本地 DSH 走，原生右键菜单里有免打扰与会话清单；自带的 skill 用你自己的画图工具和额度，把一张照片变成整套十八个姿势的皮肤。跑系统自带的 Python 与 ctypes，不用 Electron，零依赖。
  `v0.3.0` · [源码](https://github.com/anneheartrecord/dsh-desk-pet)
- **dsh-mobile-webui** — 修复 dsh web GUI 的手机视口体验：抽屉式侧栏与滑动手势、纯图标 composer 与「权限·模型·思考深度」状态行、浮窗居中、横向溢出与滚动条挤压居中修复。
  `v0.3.0` · [源码](https://github.com/Odefined/dsh-mobile-webui)
- **@kkbsgg/dsh-balance** — 在选择模型与推理强度后，于输入框模型选择器旁显示当前模型提供方的账户余额。
  `v0.2.0` · [源码](https://github.com/kkbsgg/dsh-balance)
- **@tangzai/dsh-ui-archive-manager** — 美化版归档管理设置页：按工作区分组展示归档会话，悬停即可取消归档，附相对时间显示。
  `v0.1.1` · [源码](https://github.com/Neumannzc/dsh-archive-manager)
- **dsh-plugin-terminal** — 底部多标签终端面板（node-pty + xterm.js）：贴底全宽，输入框始终在终端上方。
  `v0.2.0` · [源码](https://github.com/siberiah2o/dsh-plugin-terminal)
- **dsh-keyboard-history** — DSH 会话输入框的极简输入历史：按 ↑/↓ 翻阅发过的消息。只有方向键，别无其他。
  `v0.1.2` · [源码](https://github.com/NormanFxxkingRockwell/dsh-keyboard-history)
- **dsh-canvas-preview** — Conversation Canvas 标签页：实时预览工作区内的 HTML artifact，并支持本地导出 PNG/JPG/SVG（`npx dsh-canvas-preview`）。
  `v0.4.9` · [源码](https://github.com/jiuyuechuwuhao/dsh-canvas-preview)
- **dsh-message-outline** — 当前会话消息大纲（左缘横杠）——你的消息在对话区左缘显示一列细横杠，hover 展开完整大纲（行号+文本），点击瞬间定位到对话里那条消息。纯前端、零外部服务依赖、sessions 快照驱动零轮询。
  `v0.1.1` · [源码](https://github.com/chongfengdy-dev/dsh-message-outline)
- **@frog755/dsh-wallpaper** — DSH Web 持久化背景图/视频插件：在 设置 -> 通用 中提供壁纸卡片，可选本地图片或 MP4（最大 300 MB），调节表层透明度与模糊；检测到 ffmpeg/ffprobe 时在当前环境把视频压缩为 H.264；媒体保存到 ~/.dsh/wallpapers；并将 Web 服务固定到 9191…
  `v0.4.0` · [源码](https://github.com/Frog755/dsh-wallpaper)
- **dsh-editor** — VS Code 风格代码编辑器：侧边栏文件树浏览工作区，Monaco 编辑，文件读写，Git 状态与差异，搜索与 Markdown 预览。
  `v0.2.3` · [源码](https://github.com/yangshen830-eng/dsh-editor)
- **dsh-artifact-preview** — 在对话中新增产出文件卡片行，并提供可拖拽分屏的产物预览面板，支持 Markdown、源码、CSV、JSON、图片、HTML，以及本地端口预览。
  `v0.1.2` · [源码](https://github.com/nirvanaslash/dsh-artifact-preview)
- **dsh-sleep-send** — 在输入框右侧提供「定时发送」按钮与配置面板，支持智能时段、自定义日期时间、多个定时任务并行，任务经 localStorage 持久化，刷新页面后自动恢复。
  `v1.2.3` · [源码](https://github.com/Awu12277/dsh-sleep-send)
- **dsh-client-ui-writing** — Web 客户端「写作」面板：项目分卷与统计、书库与全文检索、设定演化版本链 diff、线索 SVG 图谱，仅在写作预设会话显示。
  `v0.6.2` · [源码](https://github.com/x2802490130-prog/dsh-client-ui-writing)
- **dsh-session-theme** — 打开页面时左侧边栏直接显示每个会话的主题，无需点进会话。启动时预热会话投影缓存，让冷会话也能显示真实标题。
  `v0.2.1` · [源码](https://github.com/Xliecc/dsh-session-theme)
- **dsh-chat-outline** — 对话栏左侧常驻大纲：按轮次列出提问与最后回复，关键词过滤与一键跳转，轻便/全面两种历史模式，按住 Ctrl/Shift 单击可跳到轨迹视图同一位置。
  `v0.1.10` · [源码](https://github.com/liliuCourier/dsh-chat-outline)
- **dsh-rule-manager** — 在设置面板统一管理 DSH 规则：编辑全局/项目 AGENTS.md，或由 LLM 自动拆分粘贴的规则为分层 AGENTS.md 与技能。
  `v0.1.0` · [源码](https://github.com/wzz3034026545/dsh-rule-manager)
- **dsh-desktop-windows-launcher** — dsh 插件（dsh-desktop-launcher）：在对话中一键启动 dsh-desktop Windows Electron 桌面壳——双击即用、无需终端；支持选区截图提问（GPU 实时框选、自动粘贴到聊天框、配合识图插件 AI 直接看图回答）、系统托盘、会话管理、环境自动引导、可换端口、单实例锁。
  `v0.1.0` · [源码](https://github.com/ReachGa0/dsh-desktop)
- **@2nd1st/dsh-plugin-open-app** — 把 open-mcp-apps 接进 DSH：每个 MCP app 都是侧边栏里自己的容器，带独立 workspace、会话与 App mode，应用下方是 agent 状态条，普通聊天里也能行内渲染 app。
  `v0.1.2` · [源码](https://github.com/2nd1st/dsh-plugin-open-app)
- **dsh-chat-index-rail** — 纯客户端对话输入目录条：每条用户消息一根横条，两级悬停预览（15 字，移入气泡展开 40 字）、点击跳转、滚动跟随高亮；静态 npm 包，无宿主半。
  `v0.1.1` · [源码](https://github.com/Mobai-read/dsh-chat-index-rail)
- **dsh-turn-rail** — Codex 风格自动隐藏右缘轮次导航：靠边浮现、单轮 tooltip、会话内搜索、长会话 30 轮滚动窗口。
  `v0.1.0` · [源码](https://github.com/Yujm888/dsh-turn-rail)
- **@open-agfs/dsh-agfs** — 文件浏览器 Web 应用：React 前端与 REST API 由宿主 webserver 托管，/dsh-agfs 命令自动定位当前工作区，附 browse_files 模型工具。
  `v0.1.9` · [源码](https://github.com/openAGFS/dsh-agfs)
- **@kelearns/dsh-navigation-bar** — 钢琴键风格会话内导航条：一根键锚定一条用户消息，悬停显示消息预览气泡与阶梯展开，点击平滑跳转。
  `v0.2.1` · [源码](https://github.com/kelearns/dsh-navigation-bar)
- **dsh-model-picker** — dsh web 输入栏模型选择面板：左侧提供商栏 + 右侧模型列表，两侧独立滚动，支持跨提供商搜索。
  `v1.0.2` · [源码](https://github.com/Sanqi-normal/dsh-model-picker)
- **dsh-community-hot** — Web UI 的社区热门悬浮面板：24 小时热门话题与热门插件 TOP10，悬浮按钮可拖动置顶、点击居中展开。
  `v0.1.1` · [源码](https://github.com/littleboylittlegirl/dsh-community-hot)
- **dsh-terminal** — DSH Web UI 终端面板：宿主端 node-pty 真实 PTY（Windows 默认 cmd.exe）+ 浏览器 xterm.js 渲染；多标签会话、停靠/浮动窗口、复制粘贴。
  `v0.1.1` · [源码](https://github.com/giiiiiithub/terminal)
- **@lmmzss/dsh-plugin-balance** — DSH Web 余额与会话用量插件：头部余额按钮（Session log 左侧），下拉展示账户余额、实时 token 明细（缓存未命中/命中、缓存写入、输出）、缓存命中率，以及按官方峰谷价自动切换的费用估算。
  `v0.1.1` · [源码](https://github.com/lmmzss-jk/dsh-plugin-balance)
- **dsh-web-attention-badge** — 会话需要你时三处同时亮起：角标、标签页标题计数、按状态换色的鲸鱼 favicon。
  `v0.3.2` · [源码](https://github.com/Luaphes/dsh-web-attention-badge)

## 工具与能力 · tools（482）

- **@roarpeng/graphflow** — 面向编程 Agent 的本地代码知识图谱：提供 10 个 MCP 工具，覆盖分层上下文压缩、DAG 规划、增量 AST 建图、跨会话技能飞轮、诊断与图谱产物导入导出。
  `v3.8.0` · [源码](https://github.com/Roarpeng/GraphFlow)
- **dsh-mac-computer-use** — Mac 的视觉优先 computer use：无障碍树不可用时照样能干活。11 个 desktop_* 工具——窗口枚举、截图、OCR 找文字、元素编号、坐标点击、输入、滚动、拖拽，外加 Codex 风格的浮层光标（带弹簧动效）。点击投递给目标进程，不移动真实鼠标、不抢前台。DSH 插件页里显示为「Mac…
  `v1.3.2` · [源码](https://github.com/OrderG-X/dsh-mac-computer-use)
- **@ericwang1358/dsh-daily-flashcard** — DSH 的学习工作台：导入自己的 PDF、DOCX、PPTX、Markdown 资料与课堂录音，生成带出处引用的卡片、测验与开放题，按 SM-2 安排间隔复习，自带网页面板。录音转写需要自备 SiliconFlow、Groq 或 Gemini 的密钥；需要 DSH 0.2.0-rc.2 及以上、0.3 以下。
  `v3.6.2` · [源码](https://github.com/EricWang1358/dsh-web-studyhub)
- **dsh-daoyi-yijing** — 道一-易经推演：通用决策评审 DSH 插件（决策辅助，非迷信）。六层加权聚合引擎（384爻→64卦→8宫→四象→三才→两仪→太极），强关联一票否决，内置电机设计/股票趋势/商业成功率剧本，纯 JS 零求解器依赖。免费档每日限 9 次推演，激活码可提升；stock-trend…
  `v0.9.8` · [源码](https://github.com/wangxuewangxue98/dsh-daoyi-yijing)
- **@momasiku/dsh-pilot** — 让 DeepSeek Harness 看见并操作 Windows 上的任何程序。模型直接看真实屏幕，自己驱动鼠标、键盘和窗口。特点是快：好几步动作在一次往返里跑完，输入前还能先把目标窗口聚焦，点击就落在正确的窗口上。你在桌面上能做的事它都能做，包括但不限于画 CAD、电路图仿真、发消息。
  `v0.6.4` · [源码](https://github.com/momasiku/dsh-pilot)
- **@jayyuen66/dsh-zvec-grep** — 工作区语义检索：三个模型工具（`zg_search` / `zg_index` / `zg_status`）驱动 `zg` CLI 做 BM25 + 向量 + RRF 混合检索，并带一层 search-first 守卫——已建索引的工作区里，`grep`/`rg` 需要先成功调用一次检索。
  `v0.1.7` · 引擎 `^0.2.1-rc.3` · [源码](https://github.com/JayYuen666/dsh-zvec-grep)
- **dsh-data-quality** — DeepSeek Harness 的数据质量检查：数据画像、清洗与验证流水线，产出结构化报告。
  `v0.3.24` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-data-quality)
- **dsh-agent-picker** — DSH 的 Agent 模式选择器：在输入框旁边直接选定一个外部 Agent CLI（Claude Code、Codex、 Qwen Code、Gemini CLI、Aider、Goose、Hermes…）作为当前会话的默认执行体，不必去改配置文件。 Agent 名册是数据驱动的，已安装的 CLI 会从…
  `v0.5.4` · [源码](https://github.com/Ok541151/cwk)
- **dsh-semble** — 面向 DeepSeek Harness 的语义代码搜索：注册 semble_search（按行为描述检索代码，返回按相关度排序的 file:line 命中）与 semble_find_related（查找已知位置的相邻代码）两个原生工具，检索由 uvx 启动的 Semble CLI…
  `v3.0.3` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/CodeIntegrity/dsh-semble)
- **dsh-armory** — Skill + MCP + 专家统一看板：MCP 服务器连接状态、工具 Schema、启停与重连（全局与项目双作用域）、SKILL.md 技能启停、WorkBuddy 专家人设可在任意会话随时挂上 / 更换 / 取消（429 位，不受「会话已开始就不能换」的限制）、工具裁缝（扫描当前环境会话日志统计每个工具的调用次数、错误…
  `v2.4.0` · [源码](https://github.com/2026heshao/dsh-armory)
- **dsh-fund-research** — 中国公募基金确定性研究报告：采集天天基金/东方财富公开数据，纯函数计算业绩拆解、持仓穿透、风格归因与经理画像，输出带逐数字可溯源快照附录的版本化报告。
  `v0.5.1` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-fund-research)
- **dsh-oomol** — 将 DeepSeek Harness 接入由 OOMOL 管理的应用与服务，支持渐进式发现并执行 Connector Actions，并提供用于管理 Provider 连接的应用内面板。
  `v1.1.0` · [源码](https://github.com/oomol-lab/dsh-oomol)
- **dsh-balance-inquiry** — 余额看板，可以添加多个按量计费/Token plan，同时查询余额。
  `v0.7.1` · [源码](https://github.com/Deanyu148/dsh-balance-inquiry)
- **dsh-atlassian-plugin** — 把 Jira 与 Confluence 接进 DeepSeek Harness：提供 Atlassian 远程 MCP 服务器的工具、问题与页面的结果卡片，以及问题面板。
  `v0.4.3` · 引擎 `>=0.2.0 <0.3.0` · [源码](https://github.com/k0ndrateff/dsh-plugins)
- **dsh-config-manager** — 一键备份、导出、导入与迁移整套 DSH 配置：设置、插件、MCP、技能与工作区。密钥默认不导出；若选择包含，则以 AES-256-GCM 加密而非明文写出。导入先预览、自动备份并可回滚，profile 可保存多套配置，远程同步经私有 Git 仓库推送可移植配置且不含密钥。
  `v0.1.83` · [源码](https://github.com/xiajiajun516/dsh-config-manager)
- **dsh-checkpoint-rewind** — DeepSeek Harness 的 Claude Code /rewind 等价能力：每次变更型工具执行前捕获 git 优先的工作区文件快照，轮次边界 fork 会话，一条 /rewind 命令恢复文件并把会话回退到检查点。
  `v0.6.34` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-checkpoint-rewind)
- **@openbkn/dsh-business-context** — 为 DeepSeek Harness 提供业务知识网络上下文：将会话绑定到 OpenBKN 知识网络，通过受管 MCP 工具查询对象与指标，并为每轮回答打开可溯源的执行事实与业务上下文图。随 OpenBKN Runtime 发布；溯源视图需企业版 License。
  `v0.2.0-rc.2-openbkn.0.2.0-13` · [源码](https://github.com/openbkn-ai/bkn-dsh)
- **dsh-bili-watch** — 把 B 站视频内容读成文本：元数据、字幕、本地转写、抽帧 OCR、评论与弹幕。抽帧 OCR 需 ffmpeg；ASR/OCR 虚拟环境需 Python 3.10+；AI 字幕需登录 Bilibili。
  `v0.2.22` · [源码](https://github.com/Sacredbluedragon/dsh-bili-watch)
- **@eduwork/dsh-literature** — 检索 DBLP 与 arXiv 文献、获取 BibTeX 和全文，支持归属当前会话的后台任务；由 EduWork 接续维护的 SihanLv/dsh-literature 分支。
  `v0.1.4` · [源码](https://github.com/ECNU/EduWork)
- **@eduwork/dsh-mail** — 通过只读 IMAP 检索邮件与获取附件，按 DSH 权限发送 SMTP 邮件，提供独立收发开关和接入凭据存储的设置页。
  `v0.2.2` · [源码](https://github.com/ECNU/EduWork)
- **dsh-windows-mcp** — 通过官方 MCP 客户端桥接层把 CursorTouch/Windows-MCP 桌面自动化服务器接入 DSH，把截屏、UI 树快照、鼠标键盘输入、剪贴板、进程与注册表等工具注册成 mcp__windows__* 供模型调用，并附带 windows_mcp_doctor 诊断工具；Computer Use…
  `v0.2.0` · [源码](https://github.com/helloHub1212/dsh-windows-mcp)
- **dsh-blender-mc** — 把 Minecraft Java 存档变成 Blender 封面或动画：在 .mca 区域文件里找大片平地，导出地形为 OBJ，无头驱动 Blender（MCprep 材质、BPS 角色骨架、三点布光）。每次渲染后用 OpenCV 检查朝向、接地、曝光、布光和构图，不合格就调整参数重渲。需 Blender 4.2…
  `v0.4.1` · [源码](https://github.com/TreeCodeTyper/dsh-blender-mc)
- **dsh-dbhub-live** — 把 DBHub MCP 服务器接入 DeepSeek Harness 的数据库插件：按工作区 × 环境配置 MySQL、MariaDB、PostgreSQL、SQLite 与 SQL Server 连接，让 Agent 通过固定 4 个工具配置连接、列出数据源、执行 SQL、搜索 SQLite…
  `v5.2.0` · [源码](https://github.com/mr-mihu/dsh-dbhub-live)
- **dsh-computer-use-win** — 为 DeepSeek Harness 提供 Windows 电脑操控：MCP stdio 服务器 + PowerShell UIA 后端，22 个桌面工具（UIA 树、截图、键鼠输入、OCR、窗口管理、急停保护）。
  `v0.5.1` · [源码](https://github.com/Yu-tao-Li/dsh-computer-use-win)
- **dsh-import-newapi** — 一键从new api站点导入复制的连接信息。
  `v0.1.3` · [源码](https://github.com/Deanyu148/dsh-import-newapi)
- **dsh-plugin-tool-management** — 一个设置面板，统一管理 MCP、技能、记忆、子智能体、提示词和归档会话；可自定义搭配场景，一个场景即可切换整个环境；Agent也能帮你操作这个插件。
  `v0.21.6` · 引擎 `>=0.2.1-rc.3 <0.2.2` · [源码](https://github.com/ouli-1242/dsh-plugin-tool-management)
- **dsh-whale-catch** — 右侧栏「鱼篓」不用 agent 登记，自动汇总本场会话产出或改动的文件，支持预览、一键打包 zip 与归档。
  `v0.2.0` · [源码](https://github.com/Rosynb666/dsh-whale-catch)
- **dsh-db-tool** — DeepSeek Harness 社区插件：在对话中直接管理多数据库（MySQL、PostgreSQL、GaussDB、MongoDB、Redis、Oracle、达梦、SQLite），支持项目级 ro/rw 授权、侧边栏管理面板、结构浏览与数据预览，危险操作需确认后执行。
  `v1.8.5` · 引擎 `>=0.1.0-rc.6 <0.2.0-0 || 0.1.7-rc.2 || >=0.2.0-rc.1 <0.3.0-0 || >=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/mengqi1436/dsh-db-tool)
- **dsh-game-material-master** — 基于 Seedream 生图与 MiniMax 图生视频，从参考图生成游戏素材，本地绿幕抠像后合成八方向精灵图、序列帧与骨骼动画。
  `v0.10.2` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/universe-st/dsh-game-material-master)
- **@fffangchenghao/dsh-web-search** — 免密钥的网页搜索：融合八个引擎、经代理梯队抓取正文，另有八个覆盖包、论文与问答的垂直来源。
  `v0.19.3` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/fangchenghao/dsh-web-search)
- **@daweifu/capability-menu** — 以可视化菜单查看和管理 Agent 的工具与技能，按常驻、按需、禁用三档控制能力暴露；支持按需检索和使用，减少上下文占用。
  `v0.1.7` · [源码](https://github.com/PKUfudawei/dsh-capability-menu)
- **dsh-tool-web-enhanced-profile** — 为原生 web_search 与 web_fetch 提供可切换的后端，每个会话可在输入框菜单或 /setup-search、/setup-fetch 中选择：搜索支持 DeepSeek、Exa、Firecrawl、Tavily、Tinyfish、OpenAlex、Semantic Scholar…
  `v0.1.2` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Yurzi/dsh-tool-web-enhanced)
- **dsh-blender** — Blender 3D 生产插件：提供 30 个建模/重建 Skill、13 个运行时工具和 26 个确定性 Helper，覆盖参考图拟合、渲染、验证、动画与可移植格式导出；npm 包名 `dsh-blender`。
  `v0.2.4` · [源码](https://github.com/CheshireJCat/blender)
- **dsh-outer-brain** — 把哲学家的思考方式变成可执行的东西：用辩证法和实践检验治理幻觉与长会话漂移，让「做完了」是可核事实而不是一句自述。
  `v0.1.10` · 引擎 `>=0.1.0-rc.5` · [源码](https://github.com/qian-dsh/dsh-outer-brain)
- **dsh-system1** — 通过统一接口接入 TypeSafe/Jev、Cloudflare/Clef、Nace/Drex、本地 Laya 与自定义决策提供商，支持 Agent 和插件进行分类、筛选、评分与图片目标定位，并返回结构化结果。
  `v0.4.0` · [源码](https://github.com/exoticknight/dsh-system1)
- **dsh-tool-guardian** — 用三个路由工具（list_capabilities、describe_tool、call_tool）代理 stdio MCP 服务器，schema 按需加载，不再随每次请求发送；所有工具结果经过确定性输出阶梯压缩，有损处理前先归档原文（retrieve_spill 可读回）；按 token 为工具分组标价，并可按…
  `v0.8.1-beta.1` · [源码](https://github.com/LuminariSoftwares/tool-guardian)
- **@jieai/dsh-malong-bridge** — 将 LiuHe MCP 代码工具集（44 个工具）桥接进 dsh web：repo_map、符号搜索、带容错匹配的 edit_batch、带撤销日志的事务性编辑，以及确定性质量门禁——由崩溃隔离的 Rust tree-sitter 解析守护进程和 SQLite 索引支撑。
  `v0.5.28` · [源码](https://github.com/wulun811/LiuHe)
- **dsh-mcp-connector** — MCP连接器：DeepSeek Harness 的 MCP 管理面板；通过持续更新的超百个 MCP连接器目录接入 MCP Server，统一连接管理与授权配置、跨连接搜索工具并完成连接排障；可按连接/服务/发现状态筛选，查看易读参数、最后成功缓存时间和诊断，并逐连接重新发现工具；支持 OAuth 2.0…
  `v0.2.79` · [源码](https://github.com/duhu2000/dsh-mcp-connector)
- **dsh-open-dream-rsi** — 不是又一个记忆插件：ODR 是“演化世界”式（Dream-RSI）自我改进回路——每次尝试都记入发现树（Discovery Tree），任务间歇将数千个策略变体在这棵记录下来的世界上回放；策略、配方或经验只有通过反事实回放的考验才会晋升，绝不因模型自己说好就获得信任，Sentinel…
  `v0.3.12` · [源码](https://github.com/patrykorwat/open-dream-rsi)
- **dsh-bash-terminal-ts** — 一个 shell 工具：Windows 上支持 PowerShell / Git Bash / WSL / MSYS2 四种后端，外加交互式 PTY 终端；MSYS2 后端以 bash.exe -lc 启动，让 /etc/profile 把 /usr/bin 与 /mingw64/bin 带进 PATH，并为 PTY…
  `v0.8.3` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-bash-terminal-ts)
- **dsh-patch-edit-plus** — 补丁风格文件编辑：单个 apply_patch 工具，接受 git/unified diff（默认）与 Codex apply_patch 语法（可选开启），在完整只读校验后全量原子应用；删除与移动走沙箱感知路径，并提供 dry-run 模式。
  `v0.4.4` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-patch-edit-plus)
- **dsh-mcp-host** — 把 stdio MCP 服务器变成 DeepSeek Harness 原生工具。默认接微软官方 Playwright MCP，agent 直接操作你已打开、已登录的 Edge 或 Chrome；也可换成任意 stdio MCP 命令。宿主侧插件，不带客户端包，无 npm 依赖。要接管你自己的浏览器，需以远程调试模式启动…
  `v0.2.0` · [源码](https://github.com/imaused/dsh-mcp-bridge)
- **dsh-site-log-check** — 依据 GB/T 50319-2013 等公开文件，核对监理日志的跨日连续性，以及旁站监理的覆盖情况。列出缺漏与覆盖差异供人复核。
  `v0.3.0` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-site-log-check)
- **dsh-motor-ai** — 电机电磁设计 AI 插件完整版：在 L0 毫秒级广筛之上补齐 L1（Ansys RMxprt）与 L2（Motor-CAD）精算层，形成 需求解析 → 参数识别 → 候选矩阵 → L0 预筛 → L1/L2 精算校核 的端到端设计链；与 dsh-motor-ai-l0 互斥，安装前请先卸载 l0，共享核心…
  `v1.0.0` · [源码](https://github.com/wangxuewangxue98/dsh-motor-ai)
- **dsh-plugin-rea** — 第三方适配插件：把上游 REA（逆向一切，github.com/morluto/rea）的 MCP 服务接入 DeepSeek Harness，提供 mcp__rea__* 工具。2.x 自带供给：把 Node、REA CLI、JDK、Ghidra 装到 <DSH_HOME>/plugins/rea-bundle…
  `v2.0.12` · 引擎 `>=0.1.7-rc.2 <0.3.0-0` · [源码](https://github.com/czcdr/dsh-plugin-rea)
- **dsh-image-hunt** — 多图源搜图并下载（14 个图源 + 7 个别名，覆盖百度/必应/360/堆糖/花瓣/Iconify/DuckDuckGo/Yandex/Openverse/维基共享/Pixiv/Wallhaven/Konachan/Safebooru），落盘进会话工作区并逐张写 meta.json，图片直接在对话里显示；另附独立…
  `v1.4.1` · [源码](https://github.com/fomalhaut1998/dsh-image-hunt)
- **dsh-lsp-actions** — DSH 的 LSP 动作面：诊断、格式化、补全、代码动作、符号、签名提示、inlay 提示与重命名，全部由真实语言服务器驱动。
  `v0.5.17` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-lsp-actions)
- **@leisureyu/dsh-smart-dl** — DSH 多线程下载插件，内置 aria2：先探测目标是否支持 Range，再按文件大小选择 aria2（4 或 8 连接）或回退 curl 单线程下载。
  `v1.6.0` · 引擎 `>=0.1.7-rc.1 <0.1.8-0 || >=0.1.8-rc.1 <0.2.0-0 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/LeiSureYu/dsh-smart-download)
- **dsh-molbio-tools** — 一组molbio分子生物学工具，包含序列分析、引物和探针设计、电子 PCR、克隆模拟、质粒图谱，测序验证，蛋白与CRISPR分析，qPCR统计，文献与实验记录；随 bundle 以预设模式安装。
  `v0.21.0` · [源码](https://github.com/lovy2004/dsh-molbio-tools)
- **dsh-gitbash-shell** — Windows 插件：将宿主 shell 执行器换成 Git for Windows bash（全部 Agent 模式生效），并物化标准/极简/PTC/创造四个 Git Bash 预设变体（逐文件 sha256 标记、用户修改保留）；发布 gitBash 能力服务，让配套预设自动选用 Git Bash；若装有…
  `v0.43.2` · 引擎 `>=0.1.7-rc` · [源码](https://github.com/KannaKuron/dsh-gitbash-shell)
- **@goodandready/dsh-context-lens** — DeepSeek Harness 的 AST 上下文压缩、测试日志过滤与 Token 预算守卫：剔除冗余语法、精简日志噪声，并强制执行 Token 上限以防止上下文窗口溢出。
  `v0.1.35` · [源码](https://github.com/GooDAnDReaDY/dsh-context-lens)
- **@liangfengqi/dsh-config-sync** — 基于私有 Git 仓库的 DSH 多端配置同步——把设置、插件清单、锁文件与技能纳管到私有仓库，设置页一键捕获、应用、拉取与回滚，并按 pnpm-lock 确定性重建插件依赖。
  `v0.1.0` · [源码](https://github.com/bxzfxl/dsh-config-sync)
- **@goodandready/dsh-moa** — DeepSeek Harness 的混合智能体（MoA）插件：/moa 斜杠命令将提示词并发分发给多个模型，在文件工作区合并响应，并与 Live Canvas 集成以呈现可视化输出。
  `v0.2.60` · [源码](https://github.com/GooDAnDReaDY/dsh-moa)
- **@goodandready/dsh-image-gen** — 提供 generate_image 工具，可接入 FAL 队列、任意 OpenAI 兼容图像 API 或 ChatGPT/Grok 订阅，并在对话中内联显示结果。
  `v0.12.10` · [源码](https://github.com/GooDAnDReaDY/dsh-image-gen)
- **dsh-sensitive-replace** — 在模型读取内容之前，按用户维护的 YAML 屏蔽表（全局 / 按 Provider ID / 按模型）替换消息与工具结果中的敏感字符，出网前再清洗一次请求，避免 DeepSeek 官方 API 的 Content Exists Risk 400。
  `v0.7.2` · [源码](https://github.com/Short-Arm-Ape/dsh-sensitive-replace)
- **dsh-at-file-everything** — 用 es.exe 从 Everything 索引回答 @file 补全，而不是遍历工作区，并以工作区根目录作为排序范围。仅限 Windows；需先安装 Everything 与 es.exe 并加入 PATH。
  `v0.1.1` · [源码](https://github.com/backkom/dsh-at-file-everything)
- **@v587d/capital-generation** — 中国 A 股金融数据 MCP server：11 个 fin_data__* 工具（行情/K线/财务/日历/特色数据/公告/EDB/对账/基金/指数），同花顺免费官方 REST 主干 + AKShare 兜底 + Wind 独家域，降级全程可观测；上下文压缩（实测结果侧 -72.2%）；离线 10 年数据湖；BYOK…
  `v2.10.0` · [源码](https://github.com/v587d/capital-generation)
- **@zhujiuyi/dsh-mcpserver-manager** — 管理 DeepSeek Harness profile 的 MCP 服务：列出每个服务的连接状态与它注册的工具；保存前预检配置（可执行文件缺失、把包名当命令、变量未展开、URL 缺少路径）；粘贴 dsh 配置片段或 Claude Code 的 mcpServers 块即可新增，并自动转换为 dsh 格式。
  `v0.3.2` · [源码](https://github.com/zhujiuyi/dsh-mcpserver-manager)
- **dsh-remote** — 多机远程工作区：管理多台 SSH 主机，在原生「添加工作区」流程里选当前环境系统文件夹或远程目录，把远程工作区镜像成真实本地文件夹并用 rw_* 工具操作。选择器是居中弹窗，默认落在当前环境页签，远程路径自动预填 `/` 并逐级自动补全目录。
  `v0.8.51` · [源码](https://github.com/flymysql/dsh-remote)
- **@free-lzj/dsh-agent-import** — 把 Codex 与 Claude Code 已声明的 MCP 服务器接入 dsh 的 mcp-client，把 22 个已知 Agent 技能目录的技能以符号链接（不复制文件）导入 ~/.dsh/skills，并提供设置页：列出本次实际挂载的服务器与技能、逐项启停技能、重名时改选来源。
  `v0.3.3` · [源码](https://github.com/Free-LZJ/free-dsh-plugins)
- **dsh-toolbox-ui** — DSH 网页的悬浮面板，管 MCP 也管技能：逐服务器开启工具延迟加载（ToolSearch，默认关闭）——该服务器的工具不再每轮常驻上下文，提示词里只列工具名，模型用内置 tool_search 搜到哪个，哪个的完整参数 schema 才进工具列表，每一轮不再为没调用的 schema 付上下文。MCP…
  `v1.8.3` · [源码](https://github.com/Imzl-zl/dsh-toolbox-ui)
- **dsh-multi-folder** — 为 DSH 项目提供副工作目录：agent 保持主工作区为 cwd，同时对已配置的副目录获得同等读写/执行权限，可在会话头部与新会话页配置。
  `v0.3.4` · [源码](https://github.com/AngelosZou/dsh-multi-folder)
- **@perrylink/dsh-ticktick** — TickTick（滴答清单）任务桥：会话页头部任务面板与精选代理工具，走官方 TickTick MCP 端点。
  `v0.1.22` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-ticktick)
- **dsh-qboson-ising-solver** — 将 QBoson Kaiwu 的 Ising 矩阵求解能力作为 solve_ising Agent Tool 接入 DeepSeek Harness。
  `v0.2.0` · [源码](https://github.com/DYF-zs/dsh-qboson-ising-solver)
- **dsh-cad** — 通过 cad_view/cad_info 与 OCCT 参数化建模工具查看和构建 CAD 模型（STL、OBJ、STEP、IGES、DXF、SVG），并在 Web UI 中提供交互式查看卡片与常驻 CAD 面板。
  `v0.15.1` · 引擎 `>=0.1.0-rc.7` · [源码](https://github.com/LAU-MARS/dsh-cad)
- **@oh-agent/dsh-mcp-manager** — 一个设置页管理当前环境所有 MCP 服务器。它读取另外 17 种 AI 工具的真实配置文件（Claude Desktop、Claude Code、Cursor、VS Code、Windsurf、OpenCode、Trae、Trae CN、Qoder、Gemini CLI、Qwen、Zed、Roo Code、Copilot…
  `v0.1.3` · [源码](https://github.com/wangbobo-coder/dsh-mcp-manager)
- **@deepblend/dsh-blender-bundle** — 在 DSH 中创建可编辑的 Blender 产品场景。从音箱、杯与灯具配方或导入模型开始，在光台查看保存结果、比较版本，调整尺寸、材质、相机与灯光。一次操作将静态模型放到实际网格表面并保存。渲染图片或分镜影片，也可将一个版本连同素材导出为可编辑副本。原生几何检查、不可变历史和审批闸门帮助保留已有作品。适配 DSH…
  `v0.19.0` · 引擎 `0.1.5-rc.2 || 0.2.1-rc.1` · [源码](https://github.com/pearjelly/deep-blend)
- **@mokuyoaxis/dsh-iris** — 面向 DeepSeek Harness 的媒体与视觉工作台：文生图、图/文生视频、语音合成与转写、图像问答与元素定位、长图 OCR、像素比对、HTML 截图验证、视频摘要；支持 DashScope 与 OpenAI 兼容供应商，含模型池与工作台客户端。
  `v0.2.7` · 引擎 `0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-alpha.2 || 0.2.1-alpha.3 || 0.2.1-alpha.4` · [源码](https://github.com/mokuyoaxis/dsh-iris)
- **@windypro-rourou/dsh-logcat** — DSH Web GUI 安卓实机调试工作台：自动附加 logcat 流（级别/关键词过滤、崩溃自动快照），真机屏幕实时投屏与远程点击/滑动/文字操控，内存/进程/frida 逆向工具链，30 个 agent 工具。
  `v0.8.4` · [源码](https://github.com/WindyPro-rourou/dsh-logcat)
- **dsh-outcomes** — DSH 成果登记：agent 把一次任务的最终成果（报告、网页、文档、表格、图片、数据表）登记进设置页与管理页的同一份清单，只记路径、不搬文件，删除可撤销；独立 CLI（add/list/stats/check/remove/restore）在应用外也能查同一份清单，并核对登记的文件是否还在。
  `v0.1.2` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/xinming-chenniang/dsh-outcomes)
- **@refkit/dsh-plugin** — DeepSeek Harness 的参考素材检索插件：refkit_search 在 24 个开放来源中检索图片、视频、音频和文本参考素材，为每条结果标注规范化的许可证和针对用途的可用性判定；refkit_rights 针对另一种用途复核单条许可证。来源 key 与检索参数在设置页配置。24 个来源中 11 个需要…
  `v0.3.1` · 引擎 `^0.1.7-rc.2 || ^0.2.1-rc.2` · [源码](https://github.com/refkitjs/dsh-plugin)
- **dsh-better-edit** — 基于哈希锚定的 read / edit / batch_edit / undo_last_edit 工具：每行分配唯一的 3 字符内容哈希，编辑按哈希而非行号定位；对已提供状态逐行校验，过期范围会被拒绝并回传新锚点。
  `v1.1.0` · [源码](https://github.com/Rianico/dsh-better-edit)
- **dsh-plugin-proxy** — DeepSeek Harness 全局代理插件：通过 Windows 系统代理或自定义地址统一代理模型请求与工具流量，主界面常驻开关，且 Agent 在对话中实时感知代理状态。
  `v0.2.2` · [源码](https://github.com/LucienLL/dsh-plugin-proxy)
- **@goodandready/dsh-live-canvas** — 在隔离的 iframe 沙箱中实时渲染 Agent 生成的 HTML、React (JSX/TSX)、Vue、SVG、Mermaid 和 Markdown，支持 SSE 热重载，并提供 DOM 点击检查器、并排视觉对比、响应式设备矩阵和一键 Vite ZIP 导出。
  `v0.2.33` · [源码](https://github.com/GooDAnDReaDY/dsh-live-canvas)
- **@hyzyn/dsh-codegraph** — DSH Web GUI 的 Codegraph 集成：设置 → 插件 中的「Codegraph」卡片提供索引状态、符号搜索、callers/callees/impact 查看与一键 sync/index；托管 codegraph MCP 服务器，并向 system prompt 注入 Codegraph…
  `v0.6.15` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **dsh-file-handover** — 把本地文件交给任何程序的「打开文件」对话框：等对话框出现、走剪贴板填路径、读回来逐字核对、再点确认。目标必须显式给，每一步都留证据——文件上传、微信发文件、PS 打开都能用它代劳。仅 Windows（依赖 EnumWindows / UI Automation）。
  `v0.2.1` · [源码](https://github.com/7gzgn/dsh-file-handover)
- **dsh-restart-planner** — 让 agent 自己安排宿主重启：工具立刻返回，等这一轮回复送达、会话日志落盘安静后再停+拉，并留下报告；自带 dry-run、体检与「什么时候可以眨一下眼」的确认。
  `v0.4.6` · [源码](https://github.com/7gzgn/dsh-restart-planner)
- **dsh-gui-guard** — Windows 窗口操作的可靠性层：先体检目标窗口是否最小化、是否在前台、有没有 DPI 缩放，再点击与输入——坐标口径和激活顺序由它处理。零依赖、纯本地、不联网。
  `v0.1.1` · [源码](https://github.com/7gzgn/dsh-gui-guard)
- **dsh-lighthouse** — 一屏看清每个作品的现状：本地版本与文件数、GitHub star 与最后推送、市场是否已收录及下载量、收录 PR 等待时长对比上游中位数；全部只读、数字都来自 API，不经模型生成。
  `v0.3.3` · [源码](https://github.com/7gzgn/dsh-lighthouse)
- **dsh-slipway** — 一条命令把本地 DSH 插件工程发到 GitHub 并开市场收录 PR：逐文件上传带字节校验、市场条目 PR，最后把线上文件逐个拉回来比 sha256。
  `v0.1.3` · [源码](https://github.com/7gzgn/dsh-slipway)
- **dsh-douyin-publish** — 把本地视频送到抖音投稿页的「待发布」状态：打开投稿页、真实点上传、递文件（回读校验）、填标题、设可见性，然后默认停手——可见性默认仅自己可见、不点发布。
  `v0.6.4` · [源码](https://github.com/7gzgn/dsh-douyin-publish)
- **meb-workbench** — 面向 DeepSeek Harness 项目的工程造价工作台。
  `v0.1.4` · [源码](https://github.com/baiye1997/MEB-DSH)
- **dsh-ark-wiki** — 查询 PRTS Wiki 的《明日方舟》干员、物品、关卡、剧情与泰拉大典世界观条目，并基于剧情卡司统计与卡池历史预测未实装角色、异格与卡池排期。
  `v0.10.2` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/wsk114514/dsh-ark-wiki)
- **yuezhiye-dsh-closet** — 按工作区管理临时脚本与其运行日志的收纳间，数据放在每个项目内的 .dsh-fix 目录。可登记脚本（语言与用途）、扫描项目中遗留的临时脚本/备份/日志、带超时执行已登记脚本并把每次运行写进带时间戳的日志、把选中的文件清运进可整批还原的回收站。扫描只列清单永不删除；清运只做移动不做删除；已被 git…
  `v0.1.7` · 引擎 `>=0.2.0-0 <0.3.0-0 || >=0.2.1-0 <0.3.0-0 || >=0.2.2-0 <0.3.0-0 || >=0.2.3-0 <0.3.0-0 || >=0.2.4-0 <0.3.0-0 || >=0.2.5-0 <0.3.0-0 || >=0.2.6-0 <0.3.0-0 || >=0.2.7-0 <0.3.0-0 || >=0.2.8-0 <0.3.0-0 || >=0.2.9-0 <0.3.0-0` · [源码](https://github.com/yuezhiye/dsh-closet)
- **cua-computer-use** — 把 Cua Driver 的 MCP 服务器接入 DSH：缺失时自动安装 cua-driver，经内置 MCP 客户端以 stdio 启动，注册其 60 个无障碍优先的窗口、输入、菜单与浏览器工具，并附带工作流技能与一次性的 macOS 权限引导。
  `v0.2.0` · [源码](https://github.com/fishcg/cua-computer-use)
- **dsh-graft-plugin** — 显示当前 dsh 会话所用的 graft 索引、以及它是否仍与代码一致，并把 graft_ask、graft_grep、graft_callers、graft_skeleton、graft_map 作为原生工具交给模型。
  `v0.3.0` · [源码](https://github.com/adithyanraj03/dsh-graft-plugin)
- **dsh-zhouli** — 主打「周礼模式」agent 预设：会话分三段依六官法度而行——开工「设官分职」、事中「依典援据」、收尾「岁终之会」依六计考成。另附 zhouli 工具，七种检索动作，检索内置 49,384 字《周礼》语料，每条结果带稳定坐标（篇序.职官序），含职官员额索引与 Kanripo 两本互校勘记。
  `v0.2.0` · [源码](https://github.com/SCP-CN-1059/dsh-zhouli)
- **dsh-plugin-molio** — Molio 本地知识库只读工具集：列知识库、浏览文件树、全文搜索、读取原文，经当前环境 Molio daemon HTTP API 取数（需 daemon 常驻运行）。npm 包名 dsh-plugin-molio，dsh plugin add 即装。
  `v0.1.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/zhuzhaoyun/Molio)
- **dsh-drawai** — DSH 侧边栏的可编辑画布，加两个模型工具（diagram_read、diagram_apply），直接读写工作区、载体是原生 .drawio 文件：无损写回让画布读不懂的单元逐字节保留，文件指纹 revision 支撑起对并发编辑的乐观锁。
  `v0.3.3` · [源码](https://github.com/fourzkw/dsh-drawai)
- **dsh-bailinghub** — 让本地 DeepSeek Harness 智能体通过 BailingHub，直接操作商城、SaaS 或其他业务系统后台，在现有账号权限内查询数据、修改资料并执行已开放的操作。
  `v0.8.0` · [源码](https://github.com/bailinghub/bailinghub-dsh-plugin)
- **dsh-tingdong** — 把英文有声读物（MP3）和英文文档（PDF / Word / EPUB / 网页 / TXT）变成听力课：用 DSH 语音输入已下载的模型在当前环境识别每一句（缺失时首次使用自动下载约 241 MB；需 ffmpeg）、用你选的大模型逐句校对翻译讲解，再以精听、间隔复习、磨耳朵练到一听就懂；支持中文配音导出与离线…
  `v0.5.1` · [源码](https://github.com/AIcivilization/dsh-tingdong)
- **@yanglaofish/dsh-proxy-pro** — 把模型请求、web 抓取/搜索与衍生工具统一路由到 Windows 系统代理或自定义地址——幂等内核（读操作不重组分发器）、头部一键开关、按 URL 路由诊断与 NTLM 认证提示。
  `v2.0.3` · [源码](https://github.com/yanglaofish/dsh-proxy-pro)
- **dsh-context-archive** — 模型驱动的工具结果归档插件。超过阈值的结果会带一个短内联编号（[#a1b2c3d4]），模型把不再需要的 结果归档进会话自己的 archives/ 目录，上下文里只留一个可回捞的小存根（含文件路径）。原文同时保留在 只增的会话日志中，不会丢失。附带设置面板：按大小分桶的回收统计、改完立即生效的阈值、以及有待归档…
  `v0.9.11` · 引擎 `0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/kingofpowers/dsh-context-archive)
- **dsh-desktop-sidecar** — 原生 Windows 桌面控制：窗口枚举、UIA 控件树、进程内 GDI 截图、离线 OCR 找字点击、后台 UIA 调用（不移动光标）、剪贴板中文输入、按键组合，另带网课自动播放助手。共 10 个工具，无需驱动与额外运行时。
  `v0.4.5` · [源码](https://github.com/111xjyuan/dsh-desktop-sidecar)
- **@wingsky-1/dsh-mcp-manager** — MCP 服务器管理器（stdio / streamable-http）：按工作目录分项目级/全局两级配置；项目级 MCP 默认经中间层收敛为 4 个原子工具（`middleware: all` 连同全局服务器一并收敛，设置页热切换）；工作空间隔离防串台；配置只存 `${ENV}`…
  `v0.2.10` · [源码](https://github.com/wingsky-1/dsh-plugin-hub)
- **@moon16u/dsh-mcp-console** — 插件页 MCP 服务器控制台：运行时管理官方 @deepseek-ai/dsh-mcp-client——新增/编辑/删除服务器、启停/重连、工具级开关、SSE 实时状态与工具列表、mcpServers JSON 导入、自动迁移 profile YAML 里的 MCP 条目；卸载后留下原生 fallback…
  `v0.3.10` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/moon16u/dsh-pouch)
- **dsh-testhud** — 把自动测试的进展画在被测界面之上的浮层：每步的期待与实际，以及等待的人现在能不能动鼠标键盘。包内附带通用预编译二进制（arm64 + x86_64），无需 Xcode 命令行工具；浮层面板自身要求 macOS 14 及以上。
  `v0.1.2` · [源码](https://github.com/yijiezhong/dsh-testhud)
- **dsh-obsidian-board** — 把本地 Obsidian 仓库变成专属 RAG 对话面板：侧栏一个完整页面，左侧笔记浏览、中间检索增强对话、右侧引用原文；检索用完全本地的 BM25 加中文 bigram，回答走 DSH 模型通道，[n] 引用可点击，索引按 mtime 增量更新。
  `v0.2.5` · [源码](https://github.com/2026heshao/dsh-obsidian-board)
- **dsh-tender-matrix** — 核对评标因素评分矩阵的内部算术自洽性：各因素分值上限、所记分值与合计之间是否互相一致。只报告发现的差异，不评价评标本身是否正确或公正。
  `v0.2.14` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-tender-matrix)
- **dsh-code-index** — DSH 本地代码智能插件：Impact X-Ray 可视化展示潜在变更影响、源码证据与不确定性，并提供符号导航、有界 Context Pack 和 ArkTS 支持。
  `v0.11.0` · [源码](https://github.com/lemonxiny55/dsh-code-index)
- **dsh-tool-activator** — 默认只加载基础工具，其余工具按需激活，并在插件设置页以逐工具开关管理。
  `v0.4.1` · [源码](https://github.com/hairyf/dsh-tool-activator)
- **dsh-database** — DeepSeek Harness Web 数据库插件：统一管理 MySQL、MariaDB、PostgreSQL、SQL Server、Oracle 和 MongoDB 连接，让 Agent 按会话授权探索数据结构、执行只读查询并辅助数据分析。
  `v0.1.1` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/blkpne/dsh-database)
- **dsh-mcp-tools** — DeepSeek Harness 的 MCP 工具管理器：在设置里添加 streamable-http/stdio 服务器、Postman 式请求头、连通性测试，并按工具开关——停用的工具不会进入模型。
  `v1.0.2` · [源码](https://github.com/hxlog/dsh-mcp-tools)
- **dsh-scratch-vault** — 把操作腳本的寫入導出工作區、改放各 session 的暫存根，並把每一支收進工作區外的可檢視收納庫，讓工作區只留下真正的交付物。
  `v0.3.2` · [源码](https://github.com/TINGOD2006/dsh-scratch-vault)
- **dsh-ai4scholar** — AI4Scholar 学术检索：覆盖 Semantic Scholar、PubMed、Google Scholar、arXiv、bioRxiv/medRxiv 与 DOI 解析的 38 个工具（搜索、引用图谱、作者、推荐、PDF 全文分片、自动引用、科研绘图），跨平台去重统一搜索，设置页 API Key…
  `v0.3.8` · [源码](https://github.com/literaf/dsh-ai4scholar)
- **dsh-connect-atomcode** — 用你当前环境已登录的 AtomGit 免费额度，请 AtomCode 给代码做一次独立代码审查：模型通过`atomcode_ask` 工具自主调用审查；你也可以使用`/atomcode-review`命令，一键评审未提交改动 / 分支 / PR。本插件不读取 API key；输入框下方有用量胶囊显示 CodingPlan…
  `v0.6.2` · [源码](https://github.com/eghrhegpe/dsh-connect-atomcode)
- **dsh-find-ideas** — GitHub 项目检索与解析工具：一句话输入开发想法，agent 在 GitHub 搜索相关项目，按相关性与 star 加权排序后返回一张结构化的卡片（包括各项目的更新时间、相关性分数、star数、加权后得分、使用的开发语言、一句话简介）。选择几个仓库后，它还能直接读取这些项目的…
  `v0.4.0` · [源码](https://github.com/tianyao2003/dsh-find-ideas)
- **@tnnevol/dsh-midscene** — 让 Midscene 直接用 DeepSeek Harness 里已配置的模型，不再需要第三方模型 API Key：在 127.0.0.1 托管一个 OpenAI 兼容桥接服务（默认端口 8787，被占用时自动跳号），把流式与非流式的对话补全代理到 DSH 宿主模型层，DeepSeek…
  `v0.2.1-rc.2.12` · [源码](https://github.com/FNOSP/fnos-dsh)
- **@tnnevol/dsh-failover-search** — 为 DeepSeek Harness 会话提供多来源网页搜索与抓取故障转移：接管会话的 searchProvider 与 fetchProvider 接缝，按可配置顺序尝试已配置来源——TinyFish、Tavily 与官方搜索，官方固定参与兜底、位置可调但不可移除。每平台可配多个 key…
  `v0.2.1-rc.2.12` · [源码](https://github.com/FNOSP/fnos-dsh)
- **dsh-search-failover** — 原生 web_search 的搜索池：8 个免费/付费后端自动故障转移与额度感知熔断，设置页管理 API Key、自定义 SearXNG 实例、failover/rotate 策略切换与 SerpApi 实时额度查询。
  `v0.3.23` · [源码](https://github.com/Walvez/dsh-search-failover)
- **dsh-tool-search** — Hermes 风格工具搜索与瘦身：渐进式披露，语义搜索/查看/调用长尾工具，核心工具保持直通。
  `v0.1.8` · [源码](https://github.com/Letter2025/dsh-tool-search)
- **dsh-web-search-free** — 把默认的 Web 搜索与抓取通道替换为 Tavily、Exa、Brave 等八个免费搜索引擎，按可配置的顺序依次 fallback。在设置卡片中填写各引擎 Key，并可开关 web_fetch 工具。
  `v1.9.0` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/MochiNek0/dsh-web-search-free)
- **dsh-region** — 在下载超时或失败时，于 npmmirror 国内镜像与官方 npm 源之间自动切换下载源，并附带 Web UI 可手动查看与切换。
  `v0.3.3` · [源码](https://github.com/nononononofish/dsh-region)
- **dsh-prompt-translation** — 通过翻译 API 或 DSH 已配置的模型，在发送前翻译用户提示词，并将模型思考文本和回答译回用户语言，提供独立内容开关和输入框快捷菜单。
  `v0.1.1` · [源码](https://github.com/EPCN-fla/dsh-prompt-translation)
- **dsh-windows-c-cleanup** — DSH 的 Windows 系统盘（C 盘）清理能力：按规则库扫描、五级安全分级、带台账可回滚的暂存区、UAC 提权与迁移到其他盘 —— 既有模型工具，也有 Web 面板。
  `v1.0.5` · [源码](https://github.com/runcat-tommy/dsh-windows-c-cleanup)
- **dsh-cool-terminal** — 终端插件 — 真 shell、工作区同步、状态常驻、常用命令管理、命令补全。
  `v0.4.4` · [源码](https://github.com/CoolTea001/dsh-cool-terminal)
- **dsh-claude-delegate** — 把自包含的编码子任务委派给当前环境 Claude Code（官方 Agent SDK 驱动），结果回传主会话：19 个参数可按次控制模型、思考强度、权限模式、允许工具、轮次与预算上限；后台作业立即返回 jobId 并支持增量读取；结果附会话句柄，传回 resume 即可在同一会话续跑；预计超过 20 秒的命令经内置…
  `v0.8.1` · [源码](https://github.com/project-hy/dsh-claude-delegate)
- **dsh-roam-planner** — 面向 DeepSeek Harness 的行程工作台：地图页按天展示站点，roam_* 工具负责起草、审阅与采用行程，可选接入火车票和小红书笔记的 MCP 数据源。
  `v0.2.3` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/AntonyLang/dsh-roam-planner)
- **@dsh-electron/dsh-plugin-multi-root-workspace** — 让单个会话在多个文件夹中读写并运行 bash，而不限于主目录——附加根经侧栏 Folders 面板或 /workspace-folders 命令登记（inherit/read-only/read-write），与主根共享同一套文件围栏 + 内核沙箱授权；不新增工具。
  `v0.1.9` · [源码](https://github.com/cherrchen/dsh-plugin-multi-root-workspace)
- **dsh-portable** — 把整套可用的 DSH 主目录——profile、带 node_modules 的已装插件、技能、hooks 与任务板——打包成单个 .dshpkg，在另一台机器上免联网、免 pnpm 还原；也支持 HTTP 上传与一次性局域网链接。
  `v0.1.10` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/wjf1/dsh-portable)
- **@lingfengmow/dsh-vault** — 把 DSH 的配置、会话、插件、工作区与 Hindsight 记忆加密分卷打包：AES-256-GCM 卷可用口令、恢复码或当前环境 DPAPI 免密槽解开，包内自带自包含还原器；GFS 四档滚动保留（最近 / 每日 / 每周 / 每月，另有总体积上限与回收站），支持网络路径与 WebDAV 目标。零外部依赖，只用…
  `v0.2.0` · [源码](https://github.com/soberkeen/dsh-vault)
- **dsh-ops** — 为 Windows 的 DSH 提供 bash、PowerShell 7 及 Rust 高性能工具，减少 token 消耗。
  `v0.4.1` · [源码](https://github.com/T-Auto/dsh-ops)
- **dsh-reel-studio** — 本地用 Remotion 从 DSH 插件仓库生成 16:9 宣传片与 3:4 宣传图的可用原型；DSH bundle 仍是脚手架，尚未在真实 DSH profile 中加载验证。需 Node.js 22+ 与 Chrome/Chromium 渲染。
  `v0.1.0` · [源码](https://github.com/Eileenes/dsh-reel)
- **dsh-modpack** — PCL 式 DSH 整合包：勾选已安装插件导出小体积 .dshpack.zip 与安装命令串，导入时先预览、确认后再按版本重新安装。
  `v0.2.1` · [源码](https://github.com/M1r0er/dsh-modpack)
- **dsh-mcp-bridge** — DeepSeek Harness 的 MCP 服务器安装与验证工具：交互式 init 会把真实 patch 条目写进 profile，list 与 validate 检查配置，CI 强制的验证器逐个连接精选服务器。
  `v0.3.0` · [源码](https://github.com/Edge-Echo/dsh-mcp-bridge)
- **dsh-serper-search** — 互补式网页搜索 provider：每次 web_search 由 DeepSeek 官方 Search API（主）与 serper.dev 的 Google 结果（补）按固定 2:1 交错合并。两路均为直连检索、无辅助模型调用；来源按 URL 去重，官方长摘要截断注入，单路超时自动降级到另一路。
  `v0.4.0` · [源码](https://github.com/Minokun/dsh-serper-search)
- **dsh-grafana** — 对话式 Grafana 运维：跨多个命名源站查看实时大盘数据，再通过审批与版本校验安全、可审阅地修改大盘。
  `v0.18.2` · [源码](https://github.com/guhanfei-ai/dsh-grafana)
- **dsh-motor-ai-l0** — 电机 AI 辅助设计插件：需求解析 → 参数识别 → 候选矩阵 → Top10 校验。L0 纯 JS、零求解器依赖，毫秒级广筛候选并给出交给 L1/L2 精算工具的载荷；可作为本地 agent 预设与 Cordis 插件使用。L1（RMxprt）与 L2（Motor-CAD）在本版本中仅预留接口，层级总闸设为 l0…
  `v0.6.5` · [源码](https://github.com/wangxuewangxue98/dsh-motor-ai-l0)
- **dsh-sql** — 数据库工具：sql_list/query/exec/schema/stats/health，SQLite/MySQL/PostgreSQL 三引擎，词法级只读保护、行数钳制、CSV/JSON 查询输出与写审批门。
  `v0.4.6` · [源码](https://github.com/STARDUSTLC666/dsh-sql)
- **dsh-wtskin-project** — 战争雷霆自定义涂装插件：四点 UV 取点器、按四边形裁切的艺术图层，导出 PNG/DDS/.blk。
  `v0.2.0` · [源码](https://github.com/Wuqiu-Ying/dsh-wtskin-project)
- **dsh-tool-comfyui** — 在对话里直接调用当前环境或局域网的 ComfyUI 机队出图，支持工作流模板、机队健康检查与队列控制。
  `v1.0.0` · [源码](https://github.com/yuehancn/dsh-tool-comfyui)
- **dsh-tool-qrcode** — 内置从零实现的 ISO/IEC 18004 编码器，无需任何外部程序即可出码；出图前先算清楚版本与纠错余量，也能把已有二维码读回文本。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-qrcode)
- **dsh-codegraph-project** — 将当前环境已安装的 CodeGraph CLI 接入各会话的已索引项目，同项目共享一个 MCP 进程，并在工作目录或索引变化时更新会话级工具。
  `v0.1.1` · [源码](https://github.com/daimingxing/dsh-codegraph-project)
- **@yuehancn/dsh-tool-browser** — 打开页面、按页面真正需要的方式等待、抽出可读正文、截图。Playwright 是可选依赖：没装时退回静态抓取并在结果里明确说明，因为「JavaScript 从未执行」的页面意味着的东西和渲染过的不同。正文靠给候选子树打正文密度分来选，而不是相信标签名，所以容器不会因为「包含的文档更多」而赢过它里面的正文。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-browser)
- **@yuehancn/dsh-tool-media** — 把当前环境 ffmpeg 包成六个结构化工具：探流、转码裁剪、均匀抽帧、扒音轨，以及按目标体积做两遍编码压缩。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-media)
- **dsh-tool-protobuf** — 无需安装 protoc 即可阅读、审查和对比 Protocol Buffer 定义：零依赖 .proto 解析器，提供六个工具（status / outline / describe / diff / audit / next_number）。diff 会把每处改动分级为 breaking、risky、additive…
  `v0.1.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-protobuf)
- **dsh-tool-podcast** — 用当前环境 ffmpeg 把一期录音做成可发布的播客 —— 从静音里检出章节断点、按断点切段、两遍算法把响度归一化到广播目标，并写出 iTunes 兼容的 RSS（enclosure 字节长度实测自磁盘，避免客户端静默丢弃）。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-podcast)
- **@yuehancn/dsh-tool-ocr** — 从图片或 PDF 中抽取文字，电子版直接读文字层，扫描件自动转交已配置的 OCR 引擎。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-ocr)
- **dsh-tool-archive** — 把目录打成确定性 tar、不解包就列出内容、解包时逐个成员拒绝任何能写到目标目录之外的名字、并用 SHA-256 核对「解出来的东西 == 打进去的东西」。零外部依赖 —— tar 格式在这个插件里自己写、自己读。读比写更宽容是刻意的：读方的职责是如实报告归档说了什么，写方则绝不能写出自己读不回来的东西。tar…
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-archive)
- **dsh-tool-notion** — Notion 区块与 Markdown 双向转换，不带 API 客户端、无外部依赖。Notion 的段落是一组富文本 run，而 Markdown 只有一个字符串 —— 所以两个方向分别是「切分」与「合并」，并不是一对互逆操作：一个方向在每个注解边界切开 run，另一个方向把相邻同注解的 run…
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-notion)
- **dsh-tool-mining** — 把 GitHub 仓库的原始计数变成一句能站住的判断 —— 贡献者集中度与 bus factor（附单作者文件）、合并时长中位数与均值并列（让离群值可见而不是被隐藏）、以及排掉 PR 与 draft 之后的 issue backlog。只用公开 REST API、不装 SDK，分页被截断时明确说明而非伪装完整。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-mining)
- **dsh-tool-invoice** — 从文本中提取发票号码、日期、购销方、税号与金额/税额/合计，并验算「金额 + 税额 = 价税合计」是否成立，对不上就报出来。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-invoice)
- **dsh-tool-gzh-publisher** — 公众号发布管线：先按发布闸门校验草稿，再推送到草稿箱。
  `v1.0.0` · [源码](https://github.com/yuehancn/dsh-tool-gzh-publisher)
- **dsh-tool-epub** — 读、造、拆 EPUB 3 电子书，零外部依赖 —— ZIP 读写器与 XML 扫描器均为自建。可体检元数据/阅读顺序/目录并点出结构问题，从章节拼出一本合规的书，或把已有的书拆回逐章 HTML。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/yuehancn/dsh-tool-epub)
- **dsh-zotero** — 面向 Agent 研究工作流的 Zotero 插件：搜索文献、查看元数据与笔记、提取与问题相关的证据段落、打开原文 PDF、生成引用与参考文献表。
  `v0.13.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/Vncntvx/dsh-zotero)
- **dsh-bayes-predict** — 贝叶斯个股预测插件：多指标信号融合的上涨概率估计、趋势状态识别与持仓风险度量（A 股 + 美股）。
  `v1.1.0` · [源码](https://github.com/pg527322814/dsh-bayes-predict)
- **@zilliz/dsh-milvus** — 只读 DSH Web 插件，可在对话中检查和搜索 Milvus 或 Zilliz Cloud Collection，支持标量、BM25、稠密向量与混合查询。
  `v0.1.5` · 引擎 `>=0.2.0-rc.2 <1.0.0-0` · [源码](https://github.com/zilliztech/dsh-milvus)
- **dsh-calendar** — CalDAV 日历插件：查/建/改/删/搜日程与健康自检，Google/iCloud/Nextcloud/自定义端点，RRULE 重复事件展开；设置页内置月/周/议程面板，连接可在面板内填写并先测后存，周视图支持拖拽改期（15 分钟吸附、5 秒撤销）。面板内置 4 步首次使用引导，看一次后不再出现。
  `v0.11.2` · [源码](https://github.com/STARDUSTLC666/dsh-calendar)
- **dsh-vba-bridge** — 通过真实 Excel COM 读写、导出并校验 Excel VBA 工程：模块、窗体代码、过程清单与 .frm/.frx 导出。仅 Windows：需安装桌面版 Excel、Python 3.10+（含 pywin32），并设置 AccessVBOM=1。
  `v0.1.1` · 引擎 `>=0.2.0-0 <0.3.0` · [源码](https://github.com/alexltr/dsh-vba-bridge)
- **@goodandready/dsh-grok-xsearch** — 为 DeepSeek Harness 增加用于 X/Twitter 搜索的 x_search 工具，通过独立的 SuperGrok OAuth 账号鉴权，不占用会话所用提供方的配额。
  `v0.3.30` · [源码](https://github.com/GooDAnDReaDY/dsh-grok-xsearch)
- **@hyzyn/dsh-docker** — DSH Web GUI 的 Docker 容器面板：当前环境或 SSH 主机上的容器列表（可选含已停止）、docker inspect 详情、日志、stats 快照、镜像列表与一次性 exec——默认只读（启停删与 exec 均需显式开启权限），可经 tty 插件在面板底部就地打开容器终端。
  `v0.13.3` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **@hyzyn/dsh-mcp** — DSH Web GUI 的 MCP 服务器配置卡片：增删改查与启用/停用 MCP 服务器（stdio 本地子进程 / streamable-http 远程两种传输），env / headers 值支持 js: 前缀表达式，带状态徽标，保存即热生效。
  `v0.3.7` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **@hyzyn/dsh-rss** — DSH 的 RSS/新闻聚合插件：内置渠道库 + awesome-rsshub-routes 精选订阅源目录 + 自定义源（保存时真实抓取校验），每天自动汇总成「今日值得读」Markdown 并注入 systemPrompt；带 Web 设置卡片与侧边栏阅读弹窗。
  `v0.4.10` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **@hyzyn/dsh-loglens** — DSH Web GUI 的日志查询卡片（Elasticsearch / OpenSearch）：一个查询面——按来源方言给查询串与可点例子、字段名补全、筛选芯片、可点柱缩放时间窗的时间分布、把分组的桶点成筛选、带级别染色与堆栈续行标记的结果列表（可选列、可翻页）；Docker 容器日志作为采集来源复用 docker…
  `v0.1.3` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **@adenxie/dsh-vercel** — 通过 OAuth 把 DeepSeek Harness 连接到 Vercel 官方 MCP 服务，支持按 Agent 按需加载工具、精简工具 schema、长结果分页，并附带 34 个 Vercel 技能。
  `v0.4.0` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/AdenXie/dsh-vercel)
- **dsh-ai-courses** — 把学习诉求和手头资料变成结构化、纯本地的 AI 课程，含大纲、知识点内容、图表与学习进度。
  `v0.1.6` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/aix-plugin/ai-courses)
- **@yiyunet/dsh-dingtalk-connector** — DSH 插件：包装钉钉官方 dws CLI，读写钉钉 AI 表格，提供 10 个钉钉 AI 表格工具（9 个 `dingtalk_aitable_*` 加 1 个 `dingtalk_sync_job`）、设置面板与定时 CSV 导出。
  `v1.0.3` · [源码](https://github.com/yiyunet/dsh-dingtalk-connector)
- **@istarry/dsh-prompt-enhance** — 增强提示词：点击发送框的星形按钮，用当前模型把草稿改写得更清晰，可一键切回原文；模板可编辑。
  `v0.1.2` · [源码](https://github.com/iStarryDust/dsh-prompt-enhance)
- **dsh-zhihu-search** — 为 DSH 增加三个知乎工具——站内问答与文章检索、知乎全网索引检索（可按域名与时间过滤）、直答——自带原生设置卡片，结果附来源可引用。
  `v2.2.1` · 引擎 `^0.1.7-rc.1 || ^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/dsh-plugin-lab/dsh-zhihu-search)
- **dsh-ds-balance** — 在侧边栏底部显示 DeepSeek 账户余额，并在插件页提供配置卡。
  `v3.1.0` · 引擎 `^0.1.7-rc.1 || ^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/dsh-plugin-lab/dsh-ds-balance)
- **dsh-plugin-tlsearch** — 低 Token 联网搜索：只把结果裁成 {title, url, snippet} 三个字段返回，厂商附带的 answer / score / raw_content 等一律不进上下文。后端可在 Tavily、Brave、SearXNG、Google CSE、Exa 五种之间配置，主后端失败时按 fallback /…
  `v1.0.0` · [源码](https://github.com/ltl0312/my-dsh-plugins)
- **@sunjuntao/dsh-qqbot** — DSH QQ机器人桥接插件，将DeepSeek Harness对接QQ机器人。
  `v0.1.14` · [源码](https://github.com/master1Sun/dsh-QQbot)
- **dsh-plugin-update-checker** — 在内置插件设置里新增「检查更新」标签页：每个已安装插件一行，显示 npm 最新版本并提供更新按钮。每行还会报告 DSH 运行时兼容性。注册表按 .npmrc 逐级读取（环境变量 → profile → 用户级，取第一个命中），未配置时并发探测镜像与公共源，内部源不会与公共源竞速。版本从哪个注册表读到，就由它安装。
  `v0.1.6` · 引擎 `>=0.2.0-0 <0.3.0-0` · [源码](https://github.com/windrover/dsh-plugin-update-checker)
- **@noob-stupid/dsh-plugin-console** — DSH 框架升级安全与插件升级门控：升级前跑「会话格式契约预检」（把不兼容的插件与 agent 预设扫出来先适配）、升级失败自动回滚、把拖垮过启动的插件自动隔离；另有环境指纹与公开契约规则库持续守门。内置多源插件市场只作发现层。
  `v0.5.92` · [源码](https://github.com/Noob-stupid/dsh-plugin-gating-hub)
- **dsh-plugin-zotero** — 把 Zotero 文献库放进只读右侧栏面板：浏览分类树、搜索条目、查看元数据与 PDF 全文，并把单条目引用、划词摘录或整目录引用写进会话草稿。插件自持连接当前环境 Zotero 集成 MCP，把工具以 mcp__zotero__* 注册给模型，可按工具逐个启用 / 禁用。
  `v0.1.2` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/peijiping/dsh-plugin-zotero)
- **win-pilot** — 面向 AI Agent 的 Windows 电脑操控与 computer use 插件，支持可复用窗口目标、UIA 无障碍定位、窗口绑定截图、后台优先的验证输入、隔离 Chromium 自动化、MCP、CLI 和可安装 Skill。
  `v0.4.0` · [源码](https://github.com/JeremyWangCY/win-pilot)
- **@aiwayds/dsh-subagent-registry** — 把本地定义的自定义 agent 注册成 dsh 可调用的 subagent：主模型通过 use_agent 工具按名字派活，每个 agent 以独立人格运行，支持断点续跑。
  `v0.14.1` · [源码](https://github.com/fan56/dsh-subagent-registry)
- **dsh-bilibili-video-summary** — 用 yt-dlp 下载 B 站视频、抽帧并转写：优先用站方字幕，没有字幕时调用当前环境 faster-whisper。注册写总结所需的技能，当用户消息只有一条视频链接时自动启用。需 PATH 上有 yt-dlp 与 ffmpeg，转写另需 faster-whisper。
  `v0.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/Aurum807/dsh-bilibili-video-summary)
- **@zoria-lind/dsh-behavior-enhancer** — 工具调用纪律：注入静态行为约束段、工具失败后并行池收敛到 1（连续 3 次成功恢复）、连续失败提醒模型停止重试、写后检查与 .bak 回滚、高风险命令闸门、/behavior-status 遵守度统计。
  `v1.3.0` · [源码](https://github.com/Zoria-Lind/dsh-behavior-enhancer)
- **dsh-dotclaude** — 在 DeepSeek Harness 里运行 Claude Code 项目的 .claude/ 斜杠命令与 permissions.deny 规则。命令正文会把 $ARGUMENTS、位置参数与 @文件引用展开进模型的下一轮；命中的工具调用在执行前被拒绝。所有宿主服务都做探测：缺命令注册表、工作目录服务或 TUI…
  `v0.1.0` · [源码](https://github.com/RUI-debug769/dsh-dotclaude)
- **dsh-rea-agents** — 为 DeepSeek Harness 固定版本的 REA：把 rea-agents 安装到当前配置档的一个确切版本，从该副本启动其 MCP 服务，只有按下「更新」才升级。
  `v1.0.8` · [源码](https://github.com/appthin/dsh-rea-agents)
- **dsh-ai-library** — DSH 的本地资料馆：把当前环境文件与产物索引成可搜索的卡片树，支持 PDF / Office / 图片预览，另带论文检索（arXiv、OpenAlex、Crossref 等）、把网页存成 markdown 快照、插件市场标签页，以及已装插件资源的同步与一键切换（人设、表情包图集、鲸鱼挂件素材）。包含 18 个工具与…
  `v0.3.39` · [源码](https://github.com/Instant-KING/dsh-ai-library)
- **dsh-click** — Windows 桌面电脑操作工具（点击、输入、按键、截屏）：每次动作都带新鲜度校验、审批门、进程身份核验与脱敏审计。
  `v0.3.24` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-click)
- **dsh-pdf-mineru** — 基于 MinerU 的统一文档解析，支持自托管与官方云双 Provider、DSH 原生后台任务、不可变产物缓存与请求合并。
  `v0.2.1` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Yurzi/dsh-pdf-mineru)
- **dsh-time-reminder** — 为 agent 提供它自己的时钟：按会话注入时间读数且精度可由 agent 运行时调整，并附带累计计时器与跨宿主重启可靠的一次性倒计时。
  `v0.3.0` · [源码](https://github.com/xfy2412/dsh-time-reminder)
- **dsh-nurse-record-check** — 依据《病历书写基本规范》等公开文件，核对护理记录的书写时限、签名，以及评估表的完整性。列出缺失或次序不符之处供人复核。
  `v0.2.11` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-nurse-record-check)
- **dsh-codex-style-computer-use** — Windows 桌面操控：让 DeepSeek 看屏幕、点鼠标、敲键盘。提供截图、UIA 定位、18 个桌面工具、按 Agent 激活、人机共用和操作审批，原生组件随包提供。
  `v1.2.3` · [源码](https://github.com/ltmroberthk915/dsh-computer-use)
- **dsh-lit-fetch** — 按 DOI 或关键词获取学术文献：Crossref 与 OpenAlex 检索，经 8 个 Sci-Hub 镜像批量下载 PDF 并以 Unpaywall 开放获取兜底，含 PDF 魔数校验与并发控制，并为未下载到的文献生成可点击的批量获取清单 HTML。
  `v1.0.5` · [源码](https://github.com/loyalchiiina/dsh-lit-fetch)
- **dsh-subagent-antigravity** — 把 Google 官方 Antigravity CLI（agy）作为一次性编码子智能体接入 DeepSeek Harness，提供 subagent_antigravity 委派工具，可直接使用 Gemini 4 Argon 等 Antigravity 订阅模型。需安装并登录 Antigravity CLI（agy…
  `v0.1.0` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/PipeDream941/dsh-subagent-antigravity)
- **dsh-unitverse** — 单位换算：提供 convert 工具，覆盖长度/面积/体积/时间/角度/速度/温度/压力/热量/功率十大类共 82 个单位，支持中英文单位名与温差（Δ）换算，并在 DSH Web 会话视图中提供按类别分模块、跟随中英文界面语言的「单位换算」标签页。
  `v1.1.4` · [源码](https://github.com/runcat-tommy/dsh-unitverse)
- **dsh-scifork** — 基于文献和实验结果的生物医学研究图谱，拆分假设，连接证据，推进研究。
  `v0.0.8` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/zhang-bin-98/sci-fork)
- **dsh-ptc-cordis-preset** — 为 DeepSeek Harness 提供的 Agent 预设：在 PTC 编码模式之上叠加自引用 Cordis 工具集（动态插件、运行时检视）与预设编写技能；物化文件带逐文件 sha256 标记，用户改过的预设升级与卸载时都不会被覆盖。
  `v0.21.3` · 引擎 `>=0.1.7-rc` · [源码](https://github.com/KannaKuron/dsh-ptc-cordis-preset)
- **dsh-workspace-gate** — 按工作区门控插件：把选定插件的工具 schema 与系统提示词段，从不需要它们的目录的模型上下文中摘掉。
  `v0.1.1` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/M1r0er/dsh-workspace-gate)
- **dsh-context-toolkit** — 让大块输出不进对话：ctk_execute、ctk_execute_file 与 ctk_batch_execute 在子进程里跑代码只回结论，ctk_index 与 ctk_search 把长材料存进基于 node:sqlite 的本地 FTS5 知识库，路由门禁在执行前拦下 curl 与 wget。附…
  `v0.3.12` · [源码](https://github.com/chimneyQ/dsh-context-toolkit)
- **dsh-zspace** — 把极空间（ZSpace）NAS 变成 agent 的原生工具：列目录、查属性、按名检索、读取、下载、上传、写入、建目录、重命名、移动、复制、删除 NAS 文件。跨网络走桌面客户端中转——不需要同一局域网、不用 WebDAV、不用 SSH；同一网络时自动改走更快的 WebDAV 直连。删除需显式传 confirm:…
  `v0.4.0` · [源码](https://github.com/439436269-ctrl/dsh-zspace)
- **dsh-moneypal** — 面向 DSH 的个人记账插件，基于结构化的beancount账本工具。
  `v1.0.0-rc.15` · [源码](https://github.com/ding112/MoneyPal)
- **mackorn-cone-crusher** — MACKORN NH/NS 单缸液压圆锥破碎机的选型与破碎筛分生产线设计：需求表录入、设备选型、整线配置、方案书生成、产品粒度仿真与实测标定。21 个工具、6 个技能、一个 MCP 服务器，零运行时依赖。
  `v0.2.2` · [源码](https://github.com/LeifDai/MACKORN-hydraulic-cone-crusher)
- **dsh-power-ticket-check** — 依据现行电力安全工作规程，核对电力工作票应载明的要素，以及签发与许可的先后顺序。只报告发现的差异，不判定作业是否安全、许可是否有效。
  `v0.2.9` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-power-ticket-check)
- **dsh-hazchem-check** — 核对危险化学品台账的内部自洽性：每种物质是否载明危险性类别、储存量能否解析、是否记录临界量、重大危险源判定与该储存量相对台账自述临界量的关系是否一致、是否载明安全技术说明书编号、CAS 号是否重复。只列出差异供人复核，不判定某单元是否构成重大危险源。
  `v0.2.11` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-hazchem-check)
- **dsh-evidence-check** — 证据清单齐备性核对：把待证事实映射到证据并输出缺口与规则 ID。
  `v0.2.11` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-evidence-check)
- **dsh-medrec-qc** — 依据国卫办医发〔2016〕24号等公开文件，核对病案首页各字段的齐备性与字段间的逻辑矛盾。列出缺失或不一致之处供人复核，不评价临床正确性。
  `v0.2.11` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-medrec-qc)
- **dsh-icd-rule-check** — 依据 GB/T 14396-2016 与公开的 ICD 使用说明，提示需要编码员关注的 ICD 编码配对——剑号与星号组合、合并编码。只报告发现的配对，不代为判定，编码结论仍由编码员作出。
  `v0.2.10` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-icd-rule-check)
- **dsh-fmea-table-check** — 参照公开的 FMEA 方法标准，核对 FMEA 分析表的要素齐备性，以及严重度、发生度、探测度与风险顺序数之间的算术一致性。只报告不一致之处，不评价各项评分数值是否恰当。
  `v0.2.8` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-fmea-table-check)
- **dsh-gongwen-word-check** — 依据公开的党政机关公文格式标准，核对公文的文种与发文字号——包括年份所用的括号形式与编号格式。只报告与格式不符之处，不评价公文内容。
  `v0.2.10` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-gongwen-word-check)
- **dsh-customs-doc-check** — 报关单证一致性检查：按规则 ID 输出字段级发现。
  `v0.2.8` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-customs-doc-check)
- **dsh-aqua-input-check** — 水产养殖投入品记录完整性与休药期日期核对：按规则 ID 输出确定性发现。
  `v0.2.11` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-aqua-input-check)
- **@dsh-plugins/dsh-env-inspector** — 环境自检与端口控制大屏：零依赖洞察系统架构、12 款核心 CLI 工具链、活跃监听端口与悬浮释放、模型凭据就绪状态。局域网主 IP 一键速查，零外联、零私有凭据明文。
  `v0.2.9` · [源码](https://github.com/webkubor/dsh-env-inspector)
- **dsh-host-fs** — 在 DSH 宿主进程里执行 fs_remove 与 fs_move，因此能删除沙箱 shell 删不掉的路径；带会话白名单与路径白/黑名单，默认拒绝。
  `v1.0.2` · [源码](https://github.com/sniperdown/dsh-host-fs)
- **dsh-translate** — DeepSeek Harness 的工具输出修复层：JSON Schema 校验、参数映射与 JSON 修复。
  `v0.2.24` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-translate)
- **dsh-tool-todo-plus** — 官方 todo_write 的增强 fork：任务项支持优先级标签、会话内完整清单渲染，并提供可拖动的会话内浮动任务面板（位置记忆 / 双击复位 / 当前动作显示）。
  `v0.7.4` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/shuxidemosheng/dsh-tool-todo-plus)
- **dsh-agnes-tools** — 把 Agnes AI 的生图 / 生视频接成 DSH 原生工具，长视频任务可稍后续查。需设置 Agnes API Key（AGNES_API_KEY）。
  `v0.1.0` · [源码](https://github.com/zuihouye/dsh-agnes-tools)
- **@kevinsales/dsh-insurance-company-analyst** — 保险公司财务经营分析专家，真跑偿付能力、财务报表、投资、渠道与同业对标测算。
  `v1.0.2` · [源码](https://github.com/kevinchu1981/dsh-insurance-experts)
- **@kevinsales/dsh-insurance-actuary** — 保险精算师（insurance-actuary）——真跑精算测算：寿险/财险准备金评估（偿二代二期 BEL+RM）、利润测试（NBV/VNB/IRR）、内含价值(EV)、产品定价与损失三角准备金，而非仅讲解。
  `v1.0.1` · [源码](https://github.com/kevinchu1981/dsh-insurance-experts)
- **@kevinsales/dsh-insurance-product-analyst** — 保险产品对比与建议书专家（险析君），条款拆解、性价比测算、保障规划，生成可自核 PDF 建议书。
  `v1.8.5` · [源码](https://github.com/kevinchu1981/dsh-insurance-experts)
- **@kevinsales/dsh-insurance-ops-analyst** — 保险公司经营分析专家（盈安），真跑偿付能力、盈利能力、内含价值(EV)、投资风险与监管合规五维测算。
  `v1.0.2` · [源码](https://github.com/kevinchu1981/dsh-insurance-experts)
- **deepseek-computer-use** — 通过 UI Automation、窗口截图和鼠标键盘操作 Windows 桌面软件，支持会话独立应用授权和操作审批。
  `v0.1.2` · [源码](https://github.com/STARDUSTLC666/deepseek-computer-use)
- **@anionex/dsh-computer-use** — macOS 电脑控制：Accessibility 观测、过期状态拒绝、作用域权限与安全输入。
  `v0.3.4` · [源码](https://github.com/Anionex/dsh-computer-use)
- **@riverzh/dsh-gitbash** — DeepSeek Harness 的 Windows bash 工具：用 Git for Windows 或 MSYS2（UCRT64/MINGW64/CLANG64…）的 bash 替换预设里的 pwsh，保留官方终端契约（workdir、后台任务与超时转后台、结果标记、终端卡片），并提供一个可自动发现、校验…
  `v0.2.2` · 引擎 `>=0.2.1-0` · [源码](https://github.com/riverzhou/dsh-gitbash-new)
- **dsh-webgis** — DSH Web UI 的对话式 GIS：支持本地文件与 PostGIS 查询、交互式地图与空间分析。
  `v0.2.1` · [源码](https://github.com/Mekansm1/DSH-WebGIS)
- **dsh-plugin-veriscope** — AI 回答质量的发布门禁。两条通道：用原 Python 门禁重放 VeriScope 归档，或仅用 Node 对 Ragas 逐条导出做阈值判定，后者不需要 VeriScope、Python 或 pandas。返回通过／失败／待复核，附出处与可复验回执；支持逐条阈值与精确十进制比较。不重新评测、不调用模型，待复核永不转…
  `v0.6.0` · [源码](https://github.com/4444wjt/dsh-plugin-veriscope)
- **dsh-plugin-codegraph-project** — 按会话自身的已索引项目提供 CodeGraph 工具，项目由 workspace 目录解析得出。每个项目根经 npx 启动一个 MCP 服务并被该项目下所有会话共享；会话中途建好索引即自动启用，无需重启；harness 退出时受管子进程被回收。
  `v0.1.5` · 引擎 `>=0.1.5-rc.2 <0.2.0-0 || >=0.2.0-0 <0.2.1-0 || >=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/troytse/dsh-plugin-codegraph-project)
- **dsh-figma-mcp** — DSH 的 Figma MCP 一键连接插件。
  `v1.0.0` · [源码](https://github.com/lubanqihao9875/dsh-figma-mcp)
- **dsh-rss** — RSS/Atom 订阅九工具（管理/校验/抓取解析/跨订阅搜索/增量抓取/OPML 导入导出/健康自检），游标增量抓取，订阅持久化到 settings。面板内置 3 步首次使用引导，看一次后不再出现。
  `v0.7.0` · [源码](https://github.com/STARDUSTLC666/dsh-rss)
- **dsh-cite** — 参考文献工具：DOI 精确查询与 Crossref 题录检索，GB/T 7714 / APA / MLA / Chicago 格式化，BibTeX 生成、有界并发 DOI 校验与健康自检。面板内置 3 步首次使用引导，看一次后不再出现。
  `v0.5.0` · [源码](https://github.com/STARDUSTLC666/dsh-cite)
- **bgjobs** — 将命令提交为独立于 DSH 进程的后台任务（可选沙箱），关闭 DSH 也不影响运行，并提供实时网页面板与离线 CLI/GUI 管理。当前仅支持Windows系统。
  `v0.2.6` · [源码](https://github.com/bitsmug/dsh-bgjobs)
- **@tomowang/dsh-data-agent** — DeepSeek Harness 的数据库连接与 SQL 插件：注册数据源，浏览并注释表结构，通过 AST 校验执行 SQL（每个数据源可单独切换只读），并渲染柱状图、折线图和饼图，可在对话或设置页中使用。
  `v0.5.1` · [源码](https://github.com/tomowang/dsh-data-agent)
- **dsh-database-explorer** — DeepSeek Harness 的数据库浏览器：在对话区第三个页签连接 SQLite、MySQL/MariaDB、PostgreSQL、SQL Server、MongoDB、ClickHouse、Redis、Elasticsearch 与 Qdrant——浏览结构树、分页查看数据、编辑单元格、插入行、建表/改表/删表…
  `v0.9.25` · [源码](https://github.com/xing-he888/dsh-database-explorer)
- **dsh-fs-encoding** — 文件编码守护：为 GBK、Big5、Shift-JIS、EUC-KR、Windows-125x、UTF-16、UTF-32 文件提供字节级无损读写与编辑，改完仍是原编码而不是被悄悄转成 UTF-8；UTF-8 BOM 原样保留，CRLF/LF/CR 换行符保持，编码表示不了的字符拒绝写入而不是写成「?」；非…
  `v1.5.2` · [源码](https://github.com/MrWeiCodes/dsh-fs-encoding)
- **dsh-system-monitor-plugin** — 面向 dsh 的插件：监控 dsh 系统进程的资源占用,并以图表形式向用户报告结果。
  `v0.2.4` · 引擎 `0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/JularDepick/dsh-system-monitor-plugin)
- **@vfvrpq/dsh-search** — 通过 DeepSeek 官方 Search/Fetch 接口做网页搜索、单页抓取与一键调研；需要一个 DeepSeek API key。
  `v0.1.0` · [源码](https://github.com/439436269-ctrl/dsh-search)
- **@stardustlc/dsh-docker** — Docker 工具：ps/images/logs/inspect/exec/manage/health 七工具，JSON 输出、DSH_DOCKER_PATH 环境变量、exec 审批门、零运行时依赖。
  `v0.4.2` · [源码](https://github.com/STARDUSTLC666/dsh-docker)
- **dsh-plugin-deepsearch** — 给 DSH 内置 web_search 加一个开关：在 DeepSeek Search API（/v1/tools/search）与默认账号搜索之间切换，失败自动回退，并带设置页与侧栏开关。
  `v0.2.0` · 引擎 `>=0.1.7-rc.1 <0.2.0 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/SeaViod/dsh-plugin-deepsearch)
- **fitmeet-dsh-plugin** — 通过每位用户独立的 OAuth 授权将 DeepSeek Harness 接入 FitMeet，提供找人、组局查询、提醒、个人事项、连接反馈、大厅发布与私聊的 17 个工具，写入操作保留预览与确认步骤。
  `v0.3.2` · [源码](https://github.com/liudejua27-blip/fitmeet-dsh-plugin)
- **dsh-ai-research** — DSH 的 AI 研究工具箱：模型发布雷达、单模型跑分与口碑体检（13 路结构化榜单 + 中英文社区讨论）、覆盖 46 个 Feed 与 22 个官方 X 账号的 AI 新闻雷达；注册 4 个工具 + 3 个技能，报告统一渲染为带目录的 Markdown。
  `v0.1.0` · [源码](https://github.com/fomalhaut1998/dsh-ai-research)
- **@rebornace/dsh-tracescope** — DSH 右侧栏插件：对比两个 git 提交，根据影响面生成手测清单，支持失败备注、截图、任务附件，以及向云效 / GitHub / GitLab / Webhook 提交缺陷。
  `v0.3.5` · [源码](https://github.com/rebornace/dsh-tracescope)
- **@copylee/dsh-computer-use** — Windows 电脑控制：截图、鼠标、键盘、剪贴板和窗口工具，按应用授权并经 DSH 审批；操控期间屏幕显示橙色光晕和提示条，按 Esc 暂停或继续。
  `v0.8.0` · [源码](https://github.com/copylee711/dsh-computer-use)
- **dsh-gemini-tool-schema** — 把发给模型的工具 schema 统一归一化成 Gemini function declaration 能接受的 OpenAPI 3.0 子集：每个节点补 type、数组补 items、剔除空 enum 项、内联 $ref，让"任何一个 MCP 或内置工具不合规"不再把整包请求打成 HTTP 400。
  `v0.3.0` · [源码](https://github.com/ChenXu233/dsh-gemini-tool-schema)
- **dsh-project-mcp** — 按项目挂载 MCP 服务器：项目在自己的文档里声明服务器（默认 `.dsh/mcp.json`，本地与全局文件列表均为配置项），只对在该项目中工作的会话挂载——会话首个 turn 时挂载，空闲后释放。右侧栏标签页与设置页列出每个有活动会话的项目、各服务器状态以及持有挂载的会话，并提供 `Sync` / `Retry`…
  `v0.4.1` · [源码](https://github.com/borgez/dsh-project-mcp)
- **dsh-workbuddy-websearch** — 把 WorkBuddy 桌面 App 的网络搜索作为 dsh 的 web_search 提供方，复用 App 已有的登录状态，无需额外配置。
  `v0.3.5` · [源码](https://github.com/arnen7000/DSH-Workbuddy-WebSearch)
- **@noob-stupid/dsh-breadboard** — DSH 嵌入式硬件沙盒插件：在 3D 面包板场景里摆放 ESP32 / BME280 / PIR / LED 等器件、按协议与电压校验接线；让真实 Python 项目代码在环运行、经 Python shim 读虚拟 I2C/GPIO 的寄存器级读数，支持故障注入（断线 / NACK / busy /…
  `v0.6.0` · [源码](https://github.com/Noob-stupid/dsh-breadboard)
- **@jiangzhenguo/dsh-codegraph** — DSH 插件，注册 13 个原生 codegraph_* 工具包装 codegraph CLI，让代理初始化、维护并查询预索引的代码知识图谱（符号查询、区域探索、节点轨迹、callers/callees、影响分析、受影响测试），无需 grep 文件。
  `v1.2.2` · [源码](https://github.com/jiangzhenguo/dsh-codegraph)
- **qcc-dsh-mcp-legal-oauth** — 一键 OAuth（PKCE）授权接入企查查法律产品——法律数据 MCP 服务（法规检索、案例检索）：动态注册客户端、token 自动刷新、动态配置 mcp-client 条目，一次授权覆盖法规与案例服务。
  `v0.1.5` · [源码](https://github.com/duhu2000/qcc-mcp-legal-oauth)
- **qcc-dsh-mcp-oauth** — 一键 OAuth（PKCE）授权接入企查查 MCP 服务：动态注册客户端、token 自动刷新、动态配置 mcp-client 条目，一次授权覆盖全部企查查数据服务。
  `v0.1.8` · [源码](https://github.com/duhu2000/qcc-mcp-oauth)
- **dsh-database-preview** — 在右侧边栏只读预览 SQLite 文件与 MySQL / MariaDB / PostgreSQL / SQL Server 连接：表、分页数据、列、索引，列宽可拖动，从不写库。
  `v0.1.1` · [源码](https://github.com/Hzlin7/dsh-database-preview)
- **dsh-excel-chat** — 在 DeepSeek Harness 里对话完成 Excel 工作：建表、编辑、修复公式、图表校验，每次编辑后自动体检公式。
  `v0.43.0` · [源码](https://github.com/hccccc01333/dsh-excel-chat)
- **dsh-science-workbench** — 可复现科学分析工作台：agent 驱动的 cell、内联图形与反馈重画、manifest 溯源、环境快照与出版级出图技能（9 个 bio_* 工具 + 工作台界面）。
  `v0.3.1` · [源码](https://github.com/poplarity/dsh-science-workbench)
- **dsh-tsm-agent** — 把 tsm-core-dlr 语义服务（LanceDB 向量 + 图）挂为 MCP 工具，并携带与场景无关的 DLR/TSM 建模技能、服务状态浮层与 agent 规则；该服务是硬依赖，须先运行、bundle 才能激活。
  `v0.2.2` · [源码](https://github.com/ljwzhaoxiaoniu/DLR)
- **@ottermind/sqlx-dsh** — OtterMind SQLX 数据库工具：列出已保存的数据源、查看或测试连接、执行 SQL、打开本地结果页，缺少 sqlx CLI 时首次调用自动安装。
  `v0.1.21` · 引擎 `>=0.1.5` · [源码](https://github.com/OtterMind/sqlx)
- **dsh-word-vault** — 一个或多个孩子的英语生词库，面向 DSH 0.2 及以上（0.2.0-rc.1 / 0.2.0-rc.2 实测通过，含桌面版 GUI；0.1.7 ~ 0.2.x 均可使用）。1.10 新增语音发音：记忆卡与在线答题页里，每个单词、每句例句旁都有一个 🔊，点了用 Windows…
  `v1.11.0` · [源码](https://github.com/wangzhanchao883/dsh-word-vault)
- **dsh-ffmpeg** — 视频处理十工具（探测/剪辑/拼接/转码/字幕烧录/抽帧/批量抽帧/GIF/调整/健康自检）：探测摘要、变速/音量/静音/旋转调整、官方 subprocess 服务、argv 无 shell 注入、零运行时依赖。
  `v0.5.0` · [源码](https://github.com/STARDUSTLC666/dsh-ffmpeg)
- **dsh-file-bookmark** — 在 DeepSeek Harness 中管理常用的文件书签，支持保存、列出与跳转，并且可以创建常用的项目，包括管理类项目、代码类项目等。
  `v0.1.7` · [源码](https://github.com/uptoheart/dsh-file-bookmark)
- **dsh-rea-mcp** — 纯配置型 DeepSeek Harness 插件，用本体自带的 MCP 客户端桥，经 stdio 连接 morluto/rea，让 agent 从应用行为一路逆向到底层原生二进制。
  `v1.0.0` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/sheilacraig/dsh-rea-mcp)
- **dsh-windows-mcp-lite** — 纯配置型 DeepSeek Harness 插件，用本体自带的 MCP 客户端桥接 CursorTouch/Windows-MCP，默认排除 PowerShell、FileSystem、Registry、Process、Scrape（上游 0.8.8 共 21 个工具，保留 16 个）。需要 uv 在 PATH 上。
  `v1.0.0` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/sheilacraig/dsh-windows-mcp-lite)
- **dsh-scout** — 证据驱动的公司与岗位尽调插件：登记带证据等级的来源、添加受证据边界约束的结论、用官方登记信息核验公司主体，并生成推进/核验/停止三态报告，附核验清单与面试问题。
  `v0.9.3` · 引擎 `>=0.1.0-rc.6 <0.3.0-0` · [源码](https://github.com/MaxHou-infinity/dsh-scout)
- **dsh-lit-search** — 为 DeepSeek Harness 提供的学术文献检索与引用工具：基于 Crossref 与 OpenAlex 检索论文（无需 API key），支持相关工作发现，并可按 GB/T 7714、APA 与 BibTeX 格式生成引用。
  `v0.2.2` · [源码](https://github.com/Flan246/dsh-lit-search)
- **dsh-skill-mcp-manager** — 一站式可视化管理 DSH 的 SKILL 与 MCP：MCP按需加载、会话内热重载、SKILL与MCP描述可在插件内直接查看
  `v1.2.2` · [源码](https://github.com/alone-tree/dsh-skill-mcp-manager)
- **@aiwayds/dsh-dcp** — dsh 的确定性上下文压缩后端：零 LLM 摘要调用，基于规则剪枝，逐字保留路径/命令/报错原文/未完成 todo，约 8 万 token 压到几百。
  `v0.13.1` · [源码](https://github.com/fan56/dsh-dcp)
- **dsh-hdc-bridge** — 鸿蒙设备桥：hdc 截图/装包/日志/崩溃/UI 自动化闭环（配 read_image 看图），官方优先版本化 API 知识层（SDK .d.ts + 离线随包文档），以及 DevEco CLI 构建/签名/lint 通道。
  `v0.10.2` · [源码](https://github.com/1na-ko/dsh-hdc-bridge)
- **dsh-cd** — 会话内 cd：即时切换相对路径基准（文件工具与 bash / pwsh 默认工作目录跟随），或把会话真正搬到另一个工作区——经用户同意的 `cd {"workspace": true, "confirmed": true}` 或用户自己的 `/cd <目录>` 命令，会迁移会话日志存储位置、沙箱根、AGENTS.md…
  `v0.2.1` · [源码](https://github.com/john-walks-slow/dsh-cd)
- **@zi7tian/dsh-keep-awake** — 在任务运行期间通过原生电源断言保持 DSH 主机亮屏与唤醒，并在任务结束后释放。
  `v0.4.1` · [源码](https://github.com/zi7tian/dsh-keep-awake)
- **dsh-skill-compat-plus** — 技能兼容层：把 Claude Code / Codex / ZCode 的技能目录挂载为 dsh 的只读技能提供方——支持 frontmatter 字段映射、名称 slug 规范化与热重载。
  `v0.1.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/shuxidemosheng/dsh-skill-compat-plus)
- **dsh-plugin-mermaid-gb-svg** — 把 Mermaid 流程图转成符合 GB/T 1526-1989（等同 ISO 5807）图形符号的 SVG，可选用 A4/A3 幅面自动分页。
  `v0.1.4` · [源码](https://github.com/sandyyst/dsh-plugin-mermaid-gb-svg)
- **dsh-copy-tool** — 提供按行复制工具，可替换或插入文件片段，并支持缩进控制和 diff 预览。
  `v0.2.0` · [源码](https://github.com/kezan31/dsh-copy-tool)
- **@yiyunet/dsh-mcp-client-manager** — DSH 插件：一块设置面板管理 @deepseek-ai/dsh-mcp-client 的 MCP 行——列出、新增、改写、启停，不必再手写 cordis.patch.yml；零构建、零运行依赖。
  `v1.0.4` · [源码](https://github.com/yiyunet/dsh-mcp-client-manager)
- **dsh-feyagate** — 在 DSH 中安装、守护并自动升级当前环境 miloco-mcp-server 后台服务，把它的 MCP 工具接入 DSH，并提供服务、账号与授权设置界面。
  `v0.3.6` · [源码](https://github.com/toddpan/dsh-feyagate)
- **@liuhange/dsh-data-masking** — 基于国家标准的自动化数据脱敏工具，自动识别身份证、手机号等敏感字段，支持完全匿名化与假名化分级策略，生成合规审计日志。
  `v3.0.5` · [源码](https://github.com/liuhange789/data-asset-inspector)
- **@liuhange/dsh-data-lineage** — 数据血缘追踪工具，梳理数据从产生到流转的全链路，满足数据产权登记中的来源合法性审查要求。
  `v2.0.6` · [源码](https://github.com/liuhange789/data-asset-inspector)
- **@liuhange/dsh-data-asset-quality-score** — 依据 GB/T 36344-2018 国家标准，从规范性、完整性等六个维度对数据质量进行量化评分，为企业数据资产入表提供可审计的底稿。
  `v3.1.6` · [源码](https://github.com/liuhange789/data-asset-inspector)
- **@anysearch/anysearch-dsh** — 基于 AnySearch 的实时网页与垂直搜索插件，为 DeepSeek Harness 提供搜索工具。
  `v0.1.8` · [源码](https://github.com/anysearch-team/anysearch-dsh)
- **oss-prompt-optimizer** — 把原始指令一键优化为专业提示词——支持三种输出形态、情境感知画像、多采样择优（模型判官评分）、自迭代学习，以及 /template 等命令与一键工具/钩子/状态页/设置面板/自动语言。
  `v1.13.1` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/seven282/oss-prompt-optimizer)
- **dsh-cos** — 提供 COS 云存储浏览与传输、工作区产物上传、临时链接，以及同时保留本地副本和云端对象身份的会话附件，并提供腾讯云 COS、数据万象和 MetaInsight 的 Agent 工具。
  `v0.3.2` · [源码](https://github.com/annexwu/dsh-cos)
- **dsh-deepseek-billing-period** — 在输入框下方显示 DeepSeek API 当前计费时段（高峰/空闲）与距下次切换的倒计时，点击可展开高峰/空闲时段规则；高峰时段发送消息前会先拦截并弹出确认。
  `v1.2.1` · [源码](https://github.com/zi7tian/dsh-deepseek-billing-period)
- **dsh-frecency** — 为 DeepSeek Harness 提供常驻索引 grep，以同名遮蔽内置 grep/glob 工具：重复内容检索命中按访问/修改 frecency 排序的内存索引，glob 在可用时对齐内置 ripgrep 语义、不可用时回退索引。
  `v0.1.5` · [源码](https://github.com/ZK-Andy/dsh-frecency)
- **lume-dsh-plugin** — DSH Desktop 人设与记忆插件：从聊天记录、小说、剧本或设定文档蒸馏角色；支持长期与临时记忆、风格学习、认可语料、人设切换纠偏、记忆星图和角色卡导入导出。任务侧仅保留轻量工作纪律，不再注入计划、台账或动态提醒。
  `v0.9.0` · [源码](https://github.com/cayan0x/Lume)
- **dsh-educoder** — 走头歌（EduCoder）平台 JSON API 完成作业，无浏览器自动化。educoder_sweep 扫描所有课程中仍有未通过关卡的作业——已完成的作业直接跳过、一个关卡都不读，因此全量扫描不消耗模型 token——并可一次做完；选择题同样零 token，因为平台会在任意一次提交的响应里回吐标准答案；代码题由模型生…
  `v1.1.0` · [源码](https://github.com/isheng-eqi/dsh-educoder)
- **dsh-net-proxy** — 让 agent 的网络请求走当前环境 HTTP/CONNECT/SOCKS5 代理。
  `v0.8.0` · [源码](https://github.com/mafeis/dsh-net-proxy)
- **dsh-plugin-sirchmunk** — 在 DSH 设置中管理本地 Sirchmunk 知识库：图谱导出、聚类管理、审计历史、运行指标与隐私控制。
  `v1.1.0` · [源码](https://github.com/Fnckerpoi/dsh-plugin-sirchmunk)
- **@copylee/dsh-academic** — 学术工具，TypeScript 实现，不需要 Python 或 MCP 服务：通过本地 API 或 zotero.org 访问 Zotero 文库（检索、批注、全文、导出引文；开启写入后可按 DOI / arXiv 编号入库、写笔记、改标签），Zotero 没开时自动启动；同时检索…
  `v0.5.1` · [源码](https://github.com/copylee711/dsh-academic)
- **dsh-tool-manager** — DSH 工具管理插件：按 Agent Preset 开关和分组工具，像 Skill 一样按需加载工具，减少模型上下文占用。
  `v1.2.10` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/pan17/dsh-tool-manager)
- **dsh-everything-find** — 基于 Everything 索引的全盘文件名搜索：everything_find 工具毫秒级定位任意盘上的文件与文件夹，并在插件页提供配置卡片。
  `v0.2.0-rc.2` · [源码](https://github.com/oldHan2423/dsh-everything-find)
- **dsh-light-tool** — 一个 DSH 插件里的六个可独立开关的模块：每轮对话的人民币成本、DeepSeek 账户余额、PDF/Word/Excel/CSV 直接读写工具与右栏预览、编译/运行环境表，以及按环境名执行程序或编译 MSBuild 工程的 run/build 工具。工具链路径在运行时解析（扫描 Visual Studio…
  `v1.3.0` · [源码](https://github.com/LLYlab/DLT)
- **@copylee/dsh-proxy** — DeepSeek Harness 网络代理设置页：配置全局 HTTP(S) 代理及免代理主机，或为单个 LLM 提供商单独指定代理或直连；保存即生效，无需重启。
  `v0.4.5` · [源码](https://github.com/copylee711/dsh-proxy)
- **dsh-jev-verify** — 0.8.6 修复了一个会让宿主起不来的依赖问题（宿主运行时包改为 optional peer，永不被安装）。为 DeepSeek Harness 端到端接入 TypeSafe Jev（System One 决策模型）0.8.6。共七个工具：jev_decision（一次并行完成 1-25…
  `v0.8.6` · 引擎 `>=0.1.5-rc.2` · [源码](https://github.com/xienda/dsh-jev-verify)
- **dsh-custom-headers** — 添加可配置的 HTTP 请求头配置档，并支持按模型选择。
  `v0.3.0` · [源码](https://github.com/EPCN-fla/dsh-custom-headers)
- **dsh-pixmart** — DSH 电商商品图生成：24 个提示词模块覆盖主图、详情图与广告图，支持参考图风格复刻、批量生成，以及作品库实时预览。
  `v0.1.2` · [源码](https://github.com/mirror9933/dsh-pixmart)
- **@astervolans/dsh-literature-search** — 面向 DeepSeek Harness 的文献检索：pubmed_search、pubmed_paper、pubmed_related 走官方 NCBI E-utilities（含 elink 相关文献排序），scholar_search、scholar_cite 走 Google…
  `v0.4.1` · [源码](https://github.com/Astervolans/dsh-literature-search)
- **@eqman00003/knowlp-rag** — Markdown 笔记的双知识图谱 RAG，带半衰期记忆衰减：前置依赖 + 相似关联双图（P/S-Agent 遍历）、段落级匹配、ngram/embedding 混合检索、显式权重反馈闭环——原生 Cordis 插件，npm 包 @eqman00003/knowlp-rag。
  `v3.0.11` · [源码](https://github.com/wly8691-jpg/knowlp-rag)
- **@eqman00003/dsh-office-com** — COM 驱动真实 Microsoft Office 实例的 DeepSeek Harness 插件：经 OfficeMCP 操作运行中的 Excel/Word——VBA 宏、透视表、活公式重算、文档深度排版；含会计场景（复式记账分录 + 借贷平衡校验、SUMIF 科目总账）。
  `v1.2.1` · [源码](https://github.com/wly8691-jpg/dsh-office-com)
- **dsh-plan-mode-plus** — dsh 计划模式的 ZCode 式增强：模型可主动调用 enter_plan_mode 进入计划模式，计划期间写类工具在分发前被硬拦截，并注入「探索 → 设计 → 评审 → 退出」四阶段工作流提示词；复用官方 plan/mode 状态机与退出评审流，只做增量。
  `v0.2.0` · [源码](https://github.com/shuxidemosheng/dsh-plan-mode-plus)
- **dsh-desktop-uia** — 通过 UI Automation 控制 Windows 桌面：九个工具读取窗口控件树、按 id 走控件自身的 UIA 模式操作，每次写入都受审批策略、动作日志与设置面板约束。
  `v1.1.3` · [源码](https://github.com/1jiegejiayouxuewangan1/dsh-desktop-uia)
- **dsh-plugin-adwhispr** — 通过 mcp-remote 加浏览器 OAuth 登录，把 DeepSeek Harness 接到 AdWhispr 的远程 MCP 服务：竞品广告调研、广告创意克隆，以及 Meta／Google／TikTok 广告的投放与管理。需要 AdWhispr 账号。
  `v0.1.0` · [源码](https://github.com/adwhispr/dsh-plugin-adwhispr)
- **hermes-dsh-bridge** — 内嵌 MCP server，让外部 Agent（Hermes、Claude Code 等）通过 StreamableHTTP 驱动 DeepSeek Harness：同步/异步任务执行、三档文件沙箱、Web 审批桥、会话管理与搜索、路径隔离的文件工具。
  `v0.11.4` · [源码](https://github.com/Emilia-awa/hermes-dsh-bridge)
- **dsh-kiwix-wiki** — 通过你自己运行的 kiwix-serve 离线查询维基百科等 ZIM 数据包：wiki_search / wiki_read / wiki_books 三个工具分别做带摘要片段的全文搜索、按精确标题读取全文、列出本地 ZIM 书库。
  `v1.4.1` · [源码](https://github.com/MingShi350/kiwix-wiki)
- **dsh-codex-sync** — Codex 与 DSH 双向桥接：挂载 ~/.codex/skills、带工作区绑定的会话导入、mcp_servers 实时镜像，以及 Codex 端反向 MCP 安装器。
  `v1.6.2` · [源码](https://github.com/Walvez/dsh-codex-sync)
- **@mtl-academic/dsh-patent** — dsh 专利撰写把关人：动笔前先检索中国专利给出三档结论，再走五方对齐访谈、八章交底书、附图与仿真实验、七维审查与 docx/PDF 导出全流程。技能开箱即用；检索、导出与实验工具来自内置的 Python MCP 服务，默认关闭——在 ~/.dsh/patent-services.yaml 里开一行即启用，uvx…
  `v0.1.6-alpha.7` · [源码](https://github.com/ai-tools-mtl/Aurify)
- **dsh-genbox-plugin** — 通过本地 GenBox 服务生图、改图、生视频，并用 ffmpeg 本地剪辑；自带零成本测试台。
  `v0.2.1` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/liwei9745/dsh-genbox-plugin)
- **dsh-codex-port** — Codex 官方插件一键移植为 DSH 技能（codex_list/port/status/health，实测 186 插件/583 技能，移植 577 个 0 失败）。
  `v0.3.0` · [源码](https://github.com/STARDUSTLC666/dsh-codex-port)
- **dsh-hot-search** — 活在宿主进程里的常驻检索索引：hot_find（文件名与路径模糊匹配，带 frecency 与 git 状态）、hot_fuzzy（内容检索，中文错字也能命中）、hot_grep（字面与正则内容检索）、hot_plan（按文件聚合命中，便于排批量阅读顺序）与 hot_stats。一份内存行索引只建一次、按需重建，单次查…
  `v0.1.3` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/caishzh/dsh-hot-search)
- **@tr1v3r/dsh-proxy** — 在直连、手动 HTTP(S)/SOCKS5 代理和环境/系统代理模式间热切换 DSH 进程内 fetch 流量，支持免代理规则，并可为之后启动的子进程导出代理环境变量。
  `v0.2.5` · [源码](https://github.com/tr1v3r/dsh-proxy)
- **dsh-macos-computer-use** — DeepSeek Harness 的 macOS computer use：基于无障碍树的稳定 ref 定位、后台输入、Unicode 输入、菜单与应用、set-of-mark 截图、本地 OCR 与动作校验——11 个工具桥接 macos-cu CLI。
  `v0.3.2` · [源码](https://github.com/Sur-Cai/macos-computer-use-kit)
- **dsh-router-ext-rtk** — dsh-router 的 RTK(Rust Token Killer)扩展插件：把每次 bash 工具调用经 `rtk rewrite` 改写，让 agent 读到压缩后的命令输出；rtk 缺失或无等价改写时原样执行。
  `v0.3.22` · [源码](https://github.com/CARVIN94/dsh-router-ext-rtk)
- **dsh-tool-ast-grep** — 基于 ast-grep 的语法级 AST 代码结构检索与大纲提取工具。
  `v0.1.2` · [源码](https://github.com/Jaylor-Wang/dsh-tool-ast-grep)
- **dsh-mcp-studio** — 在 DSH 侧边栏的面板里管理 MCP 服务器与技能：编辑 profile 或全局 cordis.patch.yml 中的行、启用停用、探测 HTTP 服务器是否响应、扫描 Claude Code / Codex / Cursor / Gemini 的配置并导入其中声明的服务器，以及浏览、新建、编辑、启停与删除技能（直…
  `v1.0.6` · [源码](https://github.com/functy23/dsh-mcp-studio)
- **dsh-travel-planner** — 中文旅行规划 agent 预设「旅行规划助手」（面向国内行程）：实时查 12306 余票、飞猪 / 途牛机票与酒店价格、高德真实路线，核实闭馆与天气，交付一份可离线打开的单文件 HTML 路书（可拖动地图、三档酒店、分项预算）；附 9 个技能、引导用户补齐 Key 的环境自检，以及 12306 MCP…
  `v1.0.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/AusertDream/TravelPlanner)
- **@czf1995/dsh-waste-market** — DeepSeek Harness A 股行情面板：实时大盘指数、技术选股（13 项信号 + 多策略交叉）、7×24 多源快讯聚合、自选股分组管理、市场情绪温度计（连板梯队/涨跌家数）、K 线图（MA/EXPMA/BOLL 叠加）、板块榜/涨停池/龙虎榜。
  `v0.8.2` · [源码](https://github.com/a23842/dsh-waste-market)
- **dsh-proxy-switcher** — 在 dsh 运行过程中热切换出站代理（直连/系统/自定义），无需重启即可生效
  `v1.0.0` · [源码](https://github.com/JinSuperOfficial/dsh-proxy-switcher)
- **@tianbuyu-wwx/dsh-formatforge** — FormatForge：把 30+ 种文件格式（PDF、DOCX、PPTX、XLSX、EML、EPUB、TOML、压缩包）锻造成 AI 可读文本——网页拖拽入箱自动转换，提供 ff_translate/ff_formats/ff_result 工具与 CLI；扫描件回退本地 OCR 或交给会话模型增强。
  `v3.0.0` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/Tianbuyu-wwx/DSH-FormatForge)
- **dsh-retry-guard** — 监视连续相同的工具失败，可在下一个模型步之前选择暂停；保留原始结果与成功的重复调用，并在 DSH Web 里出一份会话内报告。
  `v0.1.0-alpha.2` · [源码](https://github.com/sjh9714/dsh-retry-guard)
- **dsh-screenshot-capture** — 指哪拍哪截图入库：系统级悬浮窗把新截图（或复制图片）一键存入 Obsidian 笔记，支持注释与「重点」标记、用宿主 DSH 多模态模型即时识别文字（零配置、无需另配 key，可回落通义千问）、同屏去重、按天合并，并可在晚间用 AI 整理归类、打双链并生成当日总结。
  `v0.2.4` · [源码](https://github.com/wangzhanchao883/dsh-screenshot-capture)
- **dsh-lost-and-found** — 本地文件记忆索引：把指定的文件夹记进当前环境一个 SQLite 库，忘了东西放哪问一句就能找回，不必翻硬盘；缓存、版本库与程序目录整棵跳过。每个目录各有独立增量锚点，后加入的目录首扫回填全部历史。只读，绝不修改、移动或删除你的文件。 支持 DSH 0.1.7 ~ 0.2.x,已在 0.2.0-rc.1 实测。
  `v0.1.5` · [源码](https://github.com/wangzhanchao883/dsh-lost-and-found)
- **dsh-resume-screening** — 面向 HR 的简历筛选插件:把 Word/PDF/Excel 简历统一收进简历库建档(技能/粗分类/入库时间),新简历自动入库、重复自动去重;用大白话下指令即可筛选,硬性条件靠库内规则精准过滤,入围的少数人再由 LLM 精判适配度,结果可导出、可追溯。 支持 DSH 0.1.7 ~ 0.2.x,已在…
  `v0.1.5` · [源码](https://github.com/wangzhanchao883/dsh-resume-screening)
- **dsh-disk-manager** — 扫描整 C 盘,把每个大空间按 A/B/C/D/E/P 分类(无忧缓存/官方可改址/可junction搬/冷废弃软件/配置记忆红线/个人文件),再按需删缓存/junction搬走/引导改址,带强红线保护、dry-run 预览与 undo。未知软件由 LLM 兜底 + 人工确认,动手前先预览、做完可回滚。 支持 DSH…
  `v0.1.3` · [源码](https://github.com/wangzhanchao883/dsh-disk-manager)
- **@twinsearth/nau-dsh-plugin** — 把 NewAgentUniverseByDeepSeek 节点接入 DSH：五个只读工具，覆盖版本与上游出处、数据目录恢复状态与账本审计、一致性向量、精确十进制换算，以及节点可达性探测。刻意不暴露启动/停止守护进程、存款、发总线消息这类在本项目里受审计的特权操作。
  `v3.4.5` · [源码](https://github.com/TwinsEarth/NewAgentUniverseByDeepSeek)
- **dsh-study-coach** — DSH 的学习教练：把一门课拆成知识地图（大类 / 模块 / 最小单元），逐单元记六档掌握度，按资料索引排每日任务，带错题本与记忆卡，并自带一个网页面板。
  `v0.1.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/Ame-Choo/dsh-study-coach)
- **dsh-comfyui-canvas** — 从对话到画布再到作品——DSH 里驾驭 ComfyUI 的可视化工作流 IDE。把 ComfyUI（本地或云端）以画布分屏嵌入 DeepSeek Harness Web，agent 在对话里激发创意、书写提示词与脚本，实时落到你眼前的画布上，产出图像、音乐、视频、3D。从灵感到成品，全程不离开对话，不用切换任何前端工具…
  `v0.1.13` · [源码](https://github.com/wbin0001/dsh-comfyui-canvas)
- **@lovedolove/dsh-codebase-memory-mcp** — DeepSeek Harness 的 Codebase Memory MCP 桥接插件：提供六个原生代码知识图谱工具、自动启动后台守护进程及可视化 Web 界面，并内置专属代理技能。
  `v0.1.4` · [源码](https://github.com/LoveDoLove/dsh-codebase-memory-mcp)
- **dsh-inimerse** — 五个工具，用于构建、测试与运行 Inimerse 引擎，并通过服务端行协议驱动其 Verse 层。需要当前环境有 Inimerse 源码检出并用 CMake 构建；在 bundle 配置中把 repoRoot 指向它（默认值是作者当前环境路径）。
  `v0.1.0` · [源码](https://github.com/infileap/Inimerse)
- **dsh-guikit** — 以 DSH 原生工具形式提供的 Windows 桌面控制——整屏与单窗口截图（单窗口走 PrintWindow，窗口被遮住也能抓）、点击、拖动、打字、按键、滚动、窗口管理、像素与窗口轮询，以及可直接 invoke 控件或读取控件值的 UIA 查询（不必点坐标）。13 个工具，跑在 PowerShell 7…
  `v0.6.2` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/gezi-wen/dsh-guikit)
- **computer-user** — 仅 Windows 的 DSH 电脑操作插件：以 PowerShell + Win32 SendInput 实现 9 个工具，截取虚拟屏幕并驱动鼠标键盘；配合 picturereader 让纯文本模型在本地完成「截图-分析-操作-验证」闭环。
  `v0.3.7` · [源码](https://github.com/jing-hy/computer-user)
- **dsh-jev-tools** — 把 Jev 判定变成三件自动动作的 DeepSeek Harness 插件：精简超长工具输出、筛查抓取页面里针对模型的指令、挑选下一步该用的 skill；另有 jev_ask 与 jev_gate 两个工具、可跨重启的判定账本，以及 /jev-status 报告。需要 TypeSafe API…
  `v0.1.13` · [源码](https://github.com/HorusJiang/dsh-jev-tools)
- **dsh-map-tools** — 地图与路径规划工具：驾车/公交/步行/骑行路线、地理编码与 POI 搜索。默认零 key 使用 OSM/OSRM 免费数据，可选配置高德 key 获得更优的国内覆盖。
  `v0.7.3` · [源码](https://github.com/HorusJiang/dsh-map-tools)
- **dsh-repo-setup** — 只读仓库体检引导工具（repo_setup_scan）：识别技术栈/测试/文档/git/数据库线索，给出插件、MCP 与卫生文件的安装建议。
  `v0.1.7` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/gongyijie85/dsh-repo-setup)
- **dsh-agent-frugality** — 多智能体防内耗防御插件：读取台账去重度量、免疫压缩规则区、完成机械门禁、低成本审查 lane。
  `v0.1.5` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/gongyijie85/dsh-agent-frugality)
- **dsh-tools** — 面向 dsh web profile 的个人工具箱，各功能可单独开关：任务完成桌面通知、一键重启、会话删除、插件启停、更新检查，以及若干界面小工具。
  `v1.1.5` · [源码](https://github.com/LoKiGGo/dsh-tools)
- **dsh-encoding** — 编码正确的命令执行与乱码还原：encoding_run 自动识别 UTF-8/UTF-16LE/GBK 并正确解码子进程输出，encoding_decode 把乱码文本还原为正确 Unicode。
  `v0.2.0` · [源码](https://github.com/Lostforest7/dsh-encoding)
- **dsh-markitdown** — 提供 markitdown 工具，把 PDF、Word、Excel、PowerPoint、HTML、CSV、EPUB 与网址转成 Markdown：能找到真实的 Microsoft MarkItDown 时驱动它，否则使用内置的零依赖转换器。
  `v0.2.0` · 引擎 `>=0.1.5-rc.1 <0.3.0-0` · [源码](https://github.com/jiekesu967/dsh-markitdown)
- **@cloudbase/dsh-plugin** — 把腾讯云 CloudBase 后端接入 DeepSeek Harness——在对话里搭好并部署全栈应用，查询结果渲染为表格卡片（分页、排序、导出 CSV），部署后可预览真实域名，并提供 CloudBase MCP 工具集（`mcp__cloudbase__*`），登录走 device-code 流程。
  `v0.2.3` · [源码](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit)
- **dsh-union-workspace** — 联合工作区：将多个目录合并到一个会话中，通过设置面板管理联合工作区，使用 uw_read/uw_write/uw_edit/uw_delete/uw_move 工具读写成员目录文件。
  `v0.6.2` · [源码](https://github.com/lcgash/dsh-plugin-uw)
- **dsh-pubmed** — 文献研究工具集，注册 26 个模型工具，覆盖 PubMed、Europe PMC、OpenAlex、PubTator3 与 Semantic Scholar：字段语法检索、ID 互换、残缺引文定位、引文格式化、MeSH 与相关文献追溯、PubTator 生物概念归一与关系查询、Europe PMC 与…
  `v0.4.4` · [源码](https://github.com/aiyacharley/dsh-pubmed)
- **dsh-cua-drive** — 通过插件独立管理的 Cua Driver 运行时提供 macOS 电脑操作工具。
  `v0.2.1` · [源码](https://github.com/aa2246740/dsh-cuadrive-mac)
- **weread-export** — 微信读书多目标导出：通过官方 Skills API Key 查看书架、导出划线/想法到 flomo、本地 Markdown 或 Notion，可选按自定义 LLM prompt 整理后再导出。
  `v0.1.13` · [源码](https://github.com/zhengjy01/weread-export)
- **@zhengjunyao/dsh-zhihu** — 为 DeepSeek Harness 提供知乎能力：包装当前环境 pyzhihu-cli 为 18 个 zhihu_* 工具——14 个只读（搜索/热榜/问题/回答/用户/推荐流/话题/通知/收藏夹）与 4 个发布类工具（readOnly 关闭前不注册）——并在侧栏提供 Web 面板做登录、配置与查询。
  `v0.1.2` · [源码](https://github.com/zhengjy01/dsh-zhihu)
- **dsh-cubox** — Cubox 收藏同步：定时同步收藏，按你的 prompt 用 LLM 生成今日收藏简报直接写入 Obsidian，可导出每张收藏为 Markdown。
  `v0.2.2` · [源码](https://github.com/zhengjy01/dsh-cubox)
- **@dhicoc/dsh-codex-web-search-mcp** — 将 codex-web-search-mcp 注册为 DSH 原生 MCP 工具（codex_web_search / codex_web_research / web_fetch），提供与模型无关的 Codex / Grok 联网搜索与深度研究。
  `v1.1.0` · [源码](https://github.com/dhicoc/dsh-codex-web-search-mcp)
- **@yejiming/dsh-data-agent** — 让 AI 帮你连数据库、写 SQL。
  `v0.2.2` · [源码](https://github.com/omdsh-dev/dsh-data-agent)
- **dsh-power-xc** — DSH 电源管理插件 - 侧边栏电源按钮、重启/关机菜单、自包含重启引擎（无需外部依赖）、优雅会话刷新。
  `v0.1.6` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/xchannel1987/dsh-power-xc)
- **dsh-engineer-tools** — 面向软件工程师的 DeepSeek Harness 插件：注册两个模型可直接调用的 Host Tool——受工作区约束的 `git` 运行器，以及按 lockfile 自动识别 npm/pnpm/yarn/bun 并选择正确动词的包管理器运行器（`dev`）。两者都经 dsh 沙箱 shell 执行，返回规整的…
  `v0.1.4` · [源码](https://github.com/bycall/dsh-engineer-tools)
- **@max-null/dsh-draft-polish** — DSH 输入框草稿润色：发送键左侧一键调用 LLM 润色草稿，可携带会话上下文，模型渠道可配置。
  `v0.2.5` · [源码](https://github.com/Max-Null/dsh-draft-polish)
- **dsh-apis-plugin** — 把任意一套 HTTP 接口注册成 agent 可用的文档查询与请求双工具。
  `v0.3.1` · [源码](https://github.com/xianmua/dsh-apis-plugin)
- **dsh-edit-approval** — 每次 edit 与 bash 调用前都会询问：编辑前展示红绿行级 diff，命令前展示描述与命令面板——同意一次或拒绝，两个 gate 各带独立总开关（Settings → General）。
  `v0.4.0` · [源码](https://github.com/SiriLee/dsh-edit-approval)
- **@opdsh/unity-plugin** — 通过官方 unity CLI 在 DSH 中操作 Unity 编辑器：实时场景命令、编辑器内 C# 求值、运行时命令发现，均复用常驻的 unity shell 会话；另有原始 CLI 通道用于建工程、跑测试与构建。同时挂载 Unity 官方技能集，以及插件自带的 Unity 工作流与 Asset Store 技能。
  `v0.1.7` · [源码](https://github.com/opdsh/unity-plugin)
- **@geml/dsh-plugin** — 按块寻址的文档读写：MCP server 提供 geml_get / geml_set / geml_check 等工具，Agent 只取回或改写 Markdown、GEML 文档中的某一个块，而不是整篇文件。另带 GEML 写作技能，以及把项目调用图构建为 GEML codemap 并浏览的代码图谱技能。
  `v1.0.4` · [源码](https://github.com/geml-spec/geml)
- **@weibaohui/dsh-webdav-server** — WebDAV 服务器：把一个共享目录变成 Windows/macOS/Linux 都能挂载成本地磁盘的 WebDAV 服务，令牌认证、可选只读、目录/端口/令牌全可配，设置页自带三平台挂载指南。
  `v0.1.4` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-webdav-server)
- **dsh-grafana-query** — 面向 Grafana 的只读工具，经数据源代理查询指标：实例健康、数据源列表、instant 与 range PromQL 查询、当前告警状态与已配置的告警规则。range 查询会按点数预算降采样；调用方显式指定的 step 若会超量则直接拒绝，而不是静默改写，避免模型拿到与预期不同分辨率的数据。
  `v0.1.1` · [源码](https://github.com/maxmilian/dsh-grafana-query)
- **dsh-odoo** — 经 JSON-RPC 的 Odoo 只读工具：服务器信息、模型字段自省，以及受限的 search_read——仅限白名单模型，且 domain 字段名不允许包含点号，因此无法沿关联关系穿透。草稿创建工具需显式开启 allowWrite 才会注册，且仅限 sale.order 与…
  `v0.1.1` · [源码](https://github.com/maxmilian/dsh-odoo)
- **dsh-reckoner** — 面向 DeepSeek Harness 的确定性计算引擎，附带一个预设：引导 LLM 通过引擎而非文本生成来完成计算。
  `v0.1.1` · [源码](https://github.com/curtainsmall/dsh-reckoner)
- **@weibaohui/dsh-file-share** — 会话工作区文件管理：在对话区加「文件」tab，浏览当前会话工作区的目录树并就地管理（上传/下载/新建文件夹/改名/删除/搜索），文件可 @ 进对话框给 agent 处理。
  `v0.3.4` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-file-share)
- **dsh-tool-lsp** — DeepSeek Harness 的通用 LSP 工具面，提供语言服务器诊断、格式化、重命名、代码动作与符号导航。
  `v0.1.2` · [源码](https://github.com/Jaylor-Wang/dsh-tool-lsp)
- **dsh-plugin-autoevo** — AutoEvo v1.0.0 为 DSH Agent 提供 Search-first 能力工作流：优先复用本地工具或审查精确来源插件后再安装；可在受管源码中改造或新建能力；回执区分 installed、loaded、activated、verified，版本工具支持回滚、领养与上游更新。
  `v1.4.0` · [源码](https://github.com/klarkxy/dsh-plugin-autoevo)
- **@everclear077/dsh-progressive-tools** — 缓存稳定的渐进式工具发现：每次请求使用固定的 tool_search 与 tool_dispatch 工具面，从内存目录搜索后经 Harness 管线分发，发现过程中原生工具列表保持字节稳定。
  `v0.6.0` · [源码](https://github.com/everclear077/dsh-progressive-tools)
- **dsh-web-search-multi** — 为原生 web_search 工具提供可选的 SearXNG、Brave、Tavily、Gemini 搜索溯源或 Wikipedia 后端，支持 Web 设置且不进行隐式回退。
  `v0.2.3` · [源码](https://github.com/zmh2000829/dsh-web-search-multi)
- **dsh-jev-decide** — 把 TypeSafe Jev（System One 决策模型）接入 DSH 的 jev_decide 工具：noul/choice/score 三种问题形状返回校准概率，凭证复用 DSH 凭证缝，内建 429/529 退避重试。
  `v0.1.2` · [源码](https://github.com/nanami-0713/dsh-jev-decide)
- **@yoursc/dsh-siyuan** — 把思源笔记（SiYuan）接入 DeepSeek Harness：17 个 siyuan_* 宿主工具，覆盖笔记本与文档列表、全文检索、SQL 查询、读取文档与块、新建与追加内容、移动与重命名文档、日记与块属性，另提供一个 Web 设置页配置思源地址、API token 与逐工具开关。
  `v0.0.3` · [源码](https://github.com/yoursc/dsh-siyuan)
- **dsh-auto-open-web** — deepseek harness自动打开浏览器插件，内置WebView2程序实现轻量级桌面化。
  `v0.1.29` · [源码](https://github.com/jinsiyu/dsh-auto-open-web)
- **dsh-netassist** — DSH 的网络与代理诊断工具：检查系统代理设置、探测本地代理端口、识别 TUN 适配器、测试 GitHub/TCP/HTTP 连通性、扫描 hosts 冲突，并给出具体的修改建议。
  `v0.2.1` · [源码](https://github.com/Edge-Echo/dsh-netassist)
- **dsh-laya** — 把 Laya 的有类型决策（`noul` 是/否、`choice`、`score`）接成一等 Cordis 服务（`ctx.laya`）与两个模型可见工具 `laya_ask`、`laya_plan`。插件自身不安装也不下载任何东西：它是你自己启动的 `laya-mcp serve`…
  `v0.1.4` · [源码](https://github.com/PerryLink/dsh-laya)
- **dsh-paste-to-path** — 一个轻量、通用的 DSH 附件 Dock：支持粘贴、拖入或选择图片、PDF、文档、压缩包、代码等文件，发送前统一查看和管理，再以本地路径交给 Agent；解决非图片文件缺少统一附件入口的问题。
  `v0.0.7` · [源码](https://github.com/Johnny-xuan/dsh-paste-to-path)
- **dsh-wait-subagent** — 为 DeepSeek Harness 提供后台子代理的主动等待：注册 wait_subagent 模型工具，阻塞等待指定的后台 continuable（可续会话）子代理收尾（settlement），返回停止原因与收尾消息——可选超时、成员资格门控拒绝未知 id、事件驱动零轮询。补齐 run_in_background…
  `v1.0.0` · [源码](https://github.com/john-walks-slow/dsh-wait-subagent)
- **@sduwall/dsh-wall-mcp-manager** — 在DeepSeek Harness内管理MCP服务的插件。
  `v0.2.0` · [源码](https://github.com/sduwall/dsh-wall-mcp-manager)
- **@stifer/dsh-harvest** — 多平台调研与深度搜索流水线：harvest_scout 并行发现（覆盖 GitHub、Web、推特、Reddit、小红书、B站、YouTube 等通道），harvest_deep_research 自动化长篇综合研报生成，外加穿透抓取、跨源交叉验证与五维来源可信度审计。
  `v0.2.0` · [源码](https://github.com/toustifer/dsh-harvest)
- **dsh-user-addons** — 会话输入区拖拽上传文件、Token 用量胶囊与额度跟踪、会话归档管理，三合一日常插件。
  `v1.3.0` · [源码](https://github.com/Yur0918/dsh-user-addons)
- **dsh-mmx-bridge** — MiniMax 多模态桥接：一个 `mmx_bridge` 工具覆盖图片理解/生成、视频、语音合成、音乐、翻唱、联网搜索与用量查询；可选接管 `web_search`/`read_image`；对话流直接内嵌播放器与图片预览（npm: `dsh-mmx-bridge`）。
  `v1.0.10` · [源码](https://github.com/welsione/dsh-mmx-bridge)
- **dsh-origin-plugin** — 通过 MCP 在 AI 对话里驱动 OriginLab Origin 科学绘图与分析：62 个工具。模态对话框看门狗、LabTalk 破坏命令门禁、释放/重连、拟合初值/固定参数/加权、细粒度图与工作表编辑、矩阵工具、FigureSpec 声明式 YAML（可 diff 可重放）、MCP Resources…
  `v2.7.3` · [源码](https://github.com/Fantasality/dsh-origin-plugin)
- **dsh-form-fill-agent** — AI填表智能体：支持自动填表、表格填充、表格补全、Excel填表与 Excel回填；使用企查查 MCP 填写 XLSX 空白字段，预览确认后导出新副本。
  `v0.2.32` · [源码](https://github.com/duhu2000/dsh-form-fill-agent)
- **dsh-data-cleaning-agent** — 数据清洗补全智能体：面向 Excel/CSV/JSON 企业名单，提供数据清洗、表格清洗、清洗补全、去重、企业数据补全与字段补全，支持企查查 MCP 和结果导出。
  `v0.9.17` · [源码](https://github.com/duhu2000/dsh-data-cleaning-agent)
- **dsh-electro-lab** — DSH 电气电子计算插件：所有计算都通过专用工具完成，基于 SI 基本单位的自描述复数值对象；附带隔离的计算智能体预设与记录面板，每次求解落盘存档。
  `v0.13.0` · [源码](https://github.com/curtainsmall/dsh-electro-lab)
- **dsh-tool-normalizer** — 给工具调用加一层自愈：缺参数、错字段、路径越界在到达模型前自动修好，实测可见错误率从 7.95% 降到 2.20%。
  `v0.5.2` · [源码](https://github.com/merenguesL/dsh-tool-normalizer)
- **dsh-geoserver** — 在 dsh web GUI 中读取 GeoServer WMS 服务并渲染地图图像，带服务器地址、用户名和密码设置卡片。
  `v0.3.1` · [源码](https://github.com/wangcong1137-hash/dsh-geoserver)
- **dsh-jenkins** — 管理多台 Jenkins 服务器，支持从设置页、模型工具或工作区级「执行 Jenkins Job」入口触发构建，宿主 + 浏览器双端、界面中英双语。
  `v0.1.55` · [源码](https://github.com/jsoncode/dsh-jenkins)
- **dsh-toolbox-web** — Web 界面工具箱：会话/回收站/子目录/搜索/预设/配置管理、标签分组、长消息折叠，以及支持 IM 渠道推送的定时心跳。
  `v0.1.29` · [源码](https://github.com/AbcdefgXW/dsh-toolbox-web)
- **dsh-pace-calc** — 跑步配速计算：根据距离与时间换算配速（分/公里）与速度（公里/小时）。
  `v0.1.1` · [源码](https://github.com/uckkk/dsh-pace-calc)
- **dsh-live-data** — 10 个实时数据工具，覆盖 8 个免密钥公开接口：汇率、天气、npm/PyPI 包版本、GitHub 仓库信息、B站视频数据、A股/大盘/金价行情、IP 归属地；默认参数可在设置面板配置。
  `v0.1.1` · [源码](https://github.com/uckkk/dsh-live-data)
- **computer-user-vision** — computer-user 分叉的 Windows 电脑操作插件：13 个 computer_* 工具，读取屏幕并驱动鼠标键盘。模型支持图像输入时截图直接作为图片返回，附精确的图像→屏幕映射，无需外接 OCR；控件以 UI Automation 引用返回，点击落在精确矩形上；Ctrl+Alt+Esc 可阻断所有调用。
  `v0.4.0` · [源码](https://github.com/xie129716/computer-user-vision)
- **dsh-clawtouch** — 通过外接 USB HID 硬件做电脑控制：用一句话描述目标，视觉模型在裁剪后的窗口截图里定位，树莓派 Pico 2 驱动真实鼠标和键盘完成动作。7 个工具。Windows 支持窗口枚举、按窗口裁剪与自动抬窗；macOS 需 pyobjc 且不支持这两项；Linux 不支持。
  `v0.1.2` · [源码](https://github.com/tinqiao-oss/clawtouch-mcp)
- **dsh-translator-pro** — DSH 输入框悬浮快捷翻译挂件：支持当前会话模型、智谱 GLM 与自定义端点，提供预览/替换/追加、连通性测试及最近历史找回。
  `v0.1.8` · [源码](https://github.com/jockiller/dsh-translator)
- **dsh-rollback** — 文件变更回滚：捕获 write/edit 工具调用的改前映像（git blob 或快照），通过面向模型的 rollback_files 工具或 /rollback 命令还原。
  `v0.2.0` · [源码](https://github.com/Taler97/dsh-rollback)
- **dsh-prompt-refine** — 发送按钮左侧的 ✨ 按钮：读取草稿与最近若干轮对话，向已配置的模型要三条建议（每条都是「问题 + 改法」），可逐条勾选并实时预览合并后的提示词，结果写回输入框但不发送。
  `v0.1.0` · [源码](https://github.com/sojo-negai/dsh-prompt-refine)
- **dsh-bash-terminal** — 一个 shell 工具：Windows 上统一执行 PowerShell / Git Bash / WSL，外加交互式 PTY 终端，默认终端由用户在设置中选择。
  `v0.3.15` · [源码](https://github.com/MAXeaglet/dsh-bash-terminal)
- **dsh-postiz** — 通过 MCP 将 DeepSeek Harness 连接到 Postiz：列出已连接的社交媒体渠道、获取各平台发帖规则，并向 X、LinkedIn、Instagram、Facebook、Threads、TikTok、YouTube、Reddit、Bluesky、Mastodon、Discord、Slack、Telegr…
  `v0.1.0` · [源码](https://github.com/gitroomhq/postiz-agent)
- **dsh-plugin-academic-writing** — 为 DSH agent 提供学术写作工具包：论文大纲、标题与摘要骨架、GB/T 7714 / APA / MLA 引文格式化、措辞质检与投稿前清单。
  `v0.3.2` · [源码](https://github.com/863683348/dsh-plugin-academic-writing)
- **dsh-plugin-translation** — 为 DSH agent 提供翻译工具包：句子分块、术语与术语表提取、译文质检（数字、单位、括号）、语气指南与工作区持久化翻译记忆。
  `v0.3.2` · [源码](https://github.com/863683348/dsh-plugin-translation)
- **dsh-plugin-local-life** — 为 DSH agent 提供本地生活工具包：预算规划、账单分摊、单价与折扣计算、常用单位换算（斤/里/尺、摄氏/华氏、升/加仑）与出行清单。
  `v0.3.2` · [源码](https://github.com/863683348/dsh-plugin-local-life)
- **dsh-plugin-finance-data** — 为 DSH agent 提供金融数据工具包：数字与货币格式化（含中文万/亿单位）、收益与年化计算、估值与盈利比率、现值/终值、风险指标与数据质量清单。
  `v0.3.2` · [源码](https://github.com/863683348/dsh-plugin-finance-data)
- **dsh-plugin-education** — 为 DSH agent 提供教育工具包：按学段的教案骨架、测验题与答案校验、分析式评分量规、Anki/markdown 闪卡与可读性分级。
  `v0.3.2` · [源码](https://github.com/863683348/dsh-plugin-education)
- **dsh-api-client** — DeepSeek Harness 的 Agent 原生 API Client：Postman 级调试 UI（右键菜单与完整键盘导航的请求树、可调宽侧栏、自动生成 Header 分层预览——逐项可停用、敏感值恒脱敏），六个 api_client_* Agent 工具与 Human UI…
  `v0.2.0` · [源码](https://github.com/Beatther-c/dsh-api-client)
- **dsh-computer-use** — 跨平台 Computer Use 插件：虚拟鼠标真人操作（screen_observe / computer_click / type / key / scroll / drag 共 11 个工具），AX 语义树零视觉成本 + GLM-4V-Flash 免费视觉兜底，安全护栏（快照 TTL / 应用白名单 /…
  `v0.3.1` · [源码](https://github.com/988hj7tczd-oss/dsh-computer-use)
- **dsh-web-search-litellm** — ctx.web 搜索提供方：通过 LiteLLM 代理走 OpenAI Responses API 调用 DeepSeek 原生服务端 web_search，复用 LITELLM_API_KEY，无需新密钥。
  `v0.2.4` · [源码](https://github.com/yunxiyang/dsh-web-search-litellm)
- **dsh-deepread** — 五种模式精读图书与文章（快速/深度/知识地图/费曼/全书），输出观点—证据—数据报告、四档置信度、Mermaid/XMind 思维导图，支持批量对比、预算预检与后台任务进度透明，可导出 MD/MM/HTML。
  `v1.0.1` · [源码](https://github.com/xiehuan123/dsh-deepread)
- **dsh-geolibre** — 把 GeoJSON / 矢量数据渲染成侧边栏「地图」tab 里的交互地图，并让 Agent 通过工具实时操作地图：图层、样式、视图、要素识别、GeoLibre 处理算法与 Whitebox 工具箱（浏览器端 WASM 执行）。
  `v0.1.0` · [源码](https://github.com/baddying/dsh-geolibre)
- **dsh-plugin-wiki-tools** — Obsidian wiki vault 原生工具：wiki_query、wiki_write、wiki_rename、wiki_scaffold、wiki_archive、wiki_lint 覆盖 BM25 链接图检索、带 sha256 源追踪的簿记式写入、全库改名、模式化脚手架、源归档与健康检查，并内置跨进程锁与可选…
  `v0.14.2` · [源码](https://github.com/Lion-1209/dsh-plugin-wiki-tools)
- **dsh-lsp-diagnostics** — 实时 LSP 诊断闭环：通过无头 stdio 语言服务器（TypeScript/JavaScript + Python）提供 lsp_diagnostics / lsp_workspace_errors / lsp_hover 工具，并订阅 harness 的 fs/observed…
  `v0.1.1` · [源码](https://github.com/lemonxiny55/dsh-lsp-diagnostics)
- **@a9i5k4/dsh-literature** — DSH 内置文献库（可选导出到 Zotero）：通过 Unpaywall/arXiv/自定义 URL 模板获取全文 PDF，Crossref 候选式宽松搜索，APA/GB-T 7714/MLA/Chicago 引用生成，侧窗 PDF 阅读器（高亮与笔记），以及注入当前对话的 AI 问答/翻译。
  `v0.3.6` · [源码](https://github.com/Aik358/dsh-literature)
- **dsh-better** — 归档会话管理、任务完成桌面通知、更新检查、模型路由（关键词规则 + 白名单门控 model_route）、多任务定时触发（心跳与定点任务），以及 DeepSeek 风格的消息滚动导航。
  `v0.5.5` · 引擎 `0.1.2-rc.1` · [源码](https://github.com/wackyju2-beep/dsh-better)
- **dsh-codex-subscription-en** — 在 DeepSeek Harness 中直接使用 ChatGPT / Codex 订阅：OAuth 免密、额度续航预测、安全重置、联网搜索、生图与高速模式。
  `v1.0.0` · [源码](https://github.com/imMamdouhaboammar/dsh-codex-subscription)
- **@dsh-plugin/dsh-auxiliary** — 为视觉理解、上下文压缩、审批审查、子代理、会话标题与图片生成提供独立的模型路由、工具与系统提示。
  `v0.6.4` · [源码](https://github.com/dsh-plugins/dsh-auxiliary)
- **dsh-plugin-writing-guard** — 论文写作守卫（中英双语）：去掉 AI 式防御性写作，润色时守住科学证据（数字/引用/主张强度/零结果/scope），并按目标期刊校准写作风格（Journal Profile + Journal Fit）。纯本地正则/统计，零网络零 LLM；提供 writing_rules / writing_audit /…
  `v2.0.1` · [源码](https://github.com/xmutfyh/dsh-plugin-writing-guard)
- **dsh-code-navigator** — 为 DeepSeek Harness 提供持久化的 C/C++、Python 和 TypeScript 定义跳转及独立工作区界面。
  `v0.1.0` · [源码](https://github.com/Islulua/dsh-code-navigator)
- **dsh-aigc-radar** — 检索 AIGC Radar 精选 GitHub AI 项目库（500 Stars 准入、中英双语标签、星标增长快照），经其 MCP 端点调用并以原生结果卡片展示；agent/pre-step 监听器在 agent 动手写代码前主动建议复用检查。
  `v0.2.5` · [源码](https://github.com/Kaixxrua/dsh-aigc-radar)
- **dsh-realtimeavatar** — Realtime Avatar（realtimeavatar.ai）实时数字人工具：开发者 API key 由 harness 凭据存储保管，公开文档打包为五个按需加载的技能，rta_* 工具封装公开 REST API（余额、数字人、动作片段、会话、用量），消耗额度的操作需审批，/rta…
  `v0.1.1` · [源码](https://github.com/theinfluencecompany/dsh-realtimeavatar)
- **dsh-d1** — Cloudflare D1 数据库工具：d1_list/query/exec/schema/stats/health，通过 D1 HTTP API 访问，默认只读（SQLite 语义的词法级只读保护）、LIMIT 行数上限、CSV/JSON 查询输出与写审批门。
  `v0.1.0` · [源码](https://github.com/cndn/dsh-d1)
- **dsh-web-search-zai** — DeepSeek Harness 的 Z.ai / 智谱网页搜索插件，支持 Coding Plan MCP 套餐额度和 REST API 余额两种计费模式，提供原生中英文设置卡片，可复用现有 ZAI_API_KEY。
  `v0.2.0` · [源码](https://github.com/kenny2077/dsh-web-search-zai)
- **@lsqeon/dsh-progress** — 「进度」实验/项目进度管理：16 个 progress_* agent 工具（安排增删改查、画板页、每日记录、全局搜索、概览、甘特、留言、导入导出），并在 better-sidebar 注册「进度」侧边栏 tab 托管原版界面；数据存会话项目 .progress/progress.json，随项目目录走。
  `v0.1.0` · [源码](https://github.com/lsqace-del/dsh-progress)
- **@a9i5k4/dsh-ark9canvas** — DSH 生图工作台与 Agent 生图工具：一个工具（ark9_generate_image）走任意 OpenAI 兼容图片 API 文生图/图生图。渠道完全由用户自行添加——默认零预置，自带 baseURL、Key 与模型名即可（支持手动输入任意模型名）。Agent 发起的生图默认需用户审批：请求进入浮窗审批页，批准…
  `v0.4.1` · [源码](https://github.com/Aik358/dsh-ark9canvas)
- **dsh-safemode-profile** — dsh安全模式插件，通过构建空白profile实现零第三方插件启动。
  `v0.3.12` · [源码](https://github.com/jinsiyu/dsh-safemode-profile)
- **dsh-yeelight-smart-home** — 控制、组织、诊断、设计、个性化 Yeelight 智能家居，解答产品知识问题，由本地 yeelight-home 运行时驱动。
  `v0.2.0` · [源码](https://github.com/Yeelight/dsh-yeelight-smart-home)
- **dsh-conversation-nav-dots** — DSH 网页端对话导航点 — 快速跳转用户消息。
  `v1.0.1` · [源码](https://github.com/yuioi666/dsh-conversation-nav-dots)
- **dsh-qixin-insight-mcp-oauth** — 通过 OAuth 2.1 + PKCE 授权接入启信慧眼 MCP 服务，以单条插件条目把它的工具挂载为 mcp__qixin_insight__*，token 到期前自动刷新，断开时吊销。
  `v1.1.0` · [源码](https://github.com/qixin-ai-data/dsh-qixin-insight-mcp-oauth)
- **dsh-universe-api** — 面向 DeepSeek Harness 的离线确定性公共 API 目录检索，支持中英文查询，以及认证、HTTPS、CORS、状态、来源层级与分类的精确筛选。
  `v0.1.2` · [源码](https://github.com/Ruixinhua/dsh-universe-api)
- **maa-dsh-skill** — 基于 MaaAssistantArknights (MAA) 官方命令行工具 maa-cli 构建的 DeepSeek Harness Skill：让 DeepSeek Harness 直接驱动 MaaCore，自动化完成《明日方舟》日常任务。
  `v0.0.3` · [源码](https://github.com/trueRISCOacnt/maa-dsh-skill)
- **@m1khal3v/dsh-tool-codegraph** — 将 colbymchenry/codegraph 封装到代理工具中 - status、search、callers/callees、impact、explore 等等。
  `v1.0.3` · [源码](https://github.com/m1khal3v/dsh-tool-codegraph)
- **dsh-proxy-routing** — 按每次执行为 Agent fetch、LLM provider 与 shell 命令路由 HTTP/SOCKS5 代理；支持 settings 热更新、审批门禁和凭据安全状态。
  `v0.4.2` · [源码](https://github.com/chenjiyan2001/dsh-proxy-routing)
- **dsh-plugin-recommender** — 按职业/角色推荐 DSH 插件：询问用户是做什么的（程序员、设计师、写作、研究、运维、学生…），推荐适合的插件，并对每个插件做本地静态安全审计（危险代码模式 + 0-100 风险分）与口碑检查（npm 下载量 / GitHub 星数）。
  `v0.2.0` · [源码](https://github.com/mimosa776/dsh-plugin-recommender)
- **dsh-codex-tools** — 基于 Codex 的 `web_search`、`image_gen` 与 `image_vision` 工具，复用 ChatGPT OAuth 登录态为 DeepSeek Harness 提供网页搜索、生图与识图能力。
  `v1.0.3` · [源码](https://github.com/SPYQWER1/dsh-codex-tools)
- **dsh-media-card** — 在 DSH 对话卡片内显示本地图片与短视频并提供原文件一键下载，也可为任意其他本地文件提供下载；当前环境与远程连接均可用，媒体本身不进入模型的视觉上下文。
  `v0.3.0` · [源码](https://github.com/YangRuiYangDan/dsh-media-card)
- **dsh-cad-plugin** — 只读 CAD 工具：查看、提取 DWG/DXF 图纸，导出 SVG/PNG 预览或转换 DXF。
  `v0.1.0` · [源码](https://github.com/roymina/dsh-cad)
- **@volcengine/ark-managed-agents** — 新增 Managed Agents 设置页，并通过 MCP 工具向方舟云端 Managed Agents 派发长任务、取回轨迹与产物。
  `v0.1.0` · [源码](https://github.com/volcengine/ark-cli)
- **beav-creator-dsh** — 将 DSH 连接到当前环境 Beav，面向小红书（RED/RedNote）、社交媒体运营和自媒体 AI 创作，覆盖选题研究、知识库、文案、图片、音频与短视频工作流，并保留审批和产物追踪。
  `v0.1.5` · [源码](https://github.com/Jamailar/beav-deepseek-harness)
- **dsh-tool-pwsh-safe** — 把 PowerShell 脚本 base64 编码后执行，引号、$、反斜杠、中文全部原样传递，免去转义地狱。走与内置 pwsh 工具相同的沙箱通道。
  `v0.1.1` · 引擎 `>=0.1.0-rc.8` · [源码](https://github.com/sryimnoob123/dsh-tool-pwsh-safe)
- **dsh-interview** — 面向 DeepSeek Harness Web 的 AI 面试陪练：支持背八股、模拟面试、场景题与力扣热题 100 四种模式，自动评分、点评并讲解知识点。
  `v0.5.1` · [源码](https://github.com/codingayice/dsh-interview)
- **@ising-tech/isingq-dsh-plugin** — IsingQ 原生插件：引导式 QUBO 建模与本地校验，用户确认后提交远端求解。
  `v0.5.0` · [源码](https://github.com/ising-tech/isingq-toolkit)
- **dsh-plugin-nlbi** — 自然语言查询 + 商业智能报表：Text2SQL、图表、报表收藏、Schema/数据面板与侧栏工作台，基于 DSH 的 MySQL 连接层。
  `v0.2.1` · [源码](https://github.com/1byteone/dsh-plugin-nlbi)
- **dsh-tool-writing** — 写文引擎：用独立 DeepSeek key 分流并发生成草稿/细纲/点子，设定与伏笔管理、语义向量检索、书库（饲料区）、用量总账、机械校对与本地连载计划。
  `v0.8.1` · [源码](https://github.com/x2802490130-prog/dsh-tool-writing)
- **dsh-plugin-blender-3d** — 在 DeepSeek Harness 中驱动 Blender 3D 建模——创建基本体、布尔运算、变换、赋予材质与修改器、查询场景，并通过 JSON 桥接导出 STL/OBJ/PLY/GLTF。内置无头 trimesh+manifold3d 运行时，以及同协议的 Blender bpy…
  `v0.2.0` · [源码](https://github.com/walkzzz/dsh-plugin-blender-3d)
- **@lengquan88/dsh-dual-auto** — 双模型 Auto 路由插件：低成本模型直返 / 高成本模型升级 + 逃逸学习闭环（直返答错自动学习指纹，同指纹下次强制升级），状态持久化并与 Python ModelRouter 互通。
  `v0.1.2` · [源码](https://github.com/lengquan88/dsh-dual-auto)
- **@creait/dsh-tool-disclosure** — 渐进式工具披露：被延后的工具组在每次请求中只占目录里的一行，模型用 tool_search 加载后才拿到完整 schema；设置页为每个组提供一个开关，各组开销按当前工具注册表实测。
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **@deeptrial/dsh-bash-rtk** — 将符合条件的 shell 命令路由给 rtk，压缩工具输出并节省 token。
  `v0.1.1` · [源码](https://github.com/DeepTrial/dsh-bash-rtk)
- **dsh-medseek** — 面向临床人员的文档与参考工具包：SOAP/APSO 病程录、入院 H&P、SBAR/I-PASS 交接班、 出院小结、Safe Harbor 脱敏、患者须知可读性评分、完整性检查，以及来自 FDA 说明书、 MedlinePlus、PubMed 和 ClinicalTrials.gov 的带出处检索。仅起草不决定，…
  `v0.1.2` · [源码](https://github.com/Mr-Neutr0n/dsh-medseek)
- **dsh-mcp-tunnel** — 把当前环境 MCP Server 通过出站-only 隧道栈（mcp-proxy + cloudflared Quick Tunnel）暴露给远程 Agent，并把公网 URL 注册进 dsh-mcp-client 的 streamable-http 配置。
  `v0.1.0` · [源码](https://github.com/988hj7tczd-oss/dsh-mcp-tunnel)
- **cn-intel-mcp-dsh** — 中国硬科技供应链情报：33 条信号看板、中报验证追踪、命中率记录与问答，通过远程 MCP 接入（mcp__cn_intel__*）。
  `v0.1.0` · [源码](https://github.com/lory69060/cn-intel-mcp-dsh)
- **dsh-browser-fs** — 让 agent 读写浏览器所在电脑上的文件：浏览器授权本地目录（File System Access），工具调用经插件自建 WebSocket 中继；移动端/非安全上下文自动降级只读兼容模式。
  `v0.2.0` · [源码](https://github.com/whitefirer/dsh-browser-fs)
- **multisim-mcp-dsh-plugin** — 将 DeepSeek Harness 连接到 Multisim MCP，用于生成电路、运行仿真、诊断与优化设计，并导出实验报告。
  `v1.1.0` · [源码](https://github.com/yxy050208/multisim-mcp)
- **dsh-scan-mcp** — 扫描 Claude Code / Codex / CodeBuddy 配置中的 MCP，通过 stdio 与 streamable-http initialize 握手检测真实连通性，支持启停开关与 /mcp 控制面板。
  `v0.1.1` · [源码](https://github.com/chenbin-dev/dsh-scan-mcp)
- **@ethanyoq/dsh-invoice-downloader** — 面向 DeepSeek Harness 的本地 IMAP 发票下载、OCR 识别、归档与 Excel 报销汇总。
  `v0.1.1` · [源码](https://github.com/EthanYoQ/Invoice-Downloader)
- **@xmoon76/dsh-profile-settings** — 为 DeepSeek Harness 提供按 profile 分层的设置覆盖：全局 settings.yaml 仍为基线，每个 profile 可用自己的 profiles/<name>/settings.patch.yml 覆盖任意设置命名空间——对象段递归合并，数组与标量整体替换，!unset…
  `v0.1.0` · [源码](https://github.com/XMoon/dsh-profile-settings)
- **dsh-code-reading-coach** — 代码研读教练：交互式引导研读论文对应的开源代码。五段研读法（锚定论文主张、地形扫描、入口追踪、核心映射、闭环验证），自动识别并告知语言的框架与架构，适合研读 AI 论文源码。
  `v0.1.0` · [源码](https://github.com/tobysunsun/dsh-code-reading-coach)
- **@picgo/dsh-plugin** — 通过 PicGo 已有配置（PicGo Cloud、GitHub、S3、腾讯云 COS、七牛，或任意已安装的上传插件）把本地图片和文件上传到图床，提供 `picgo_upload` 工具与 `/picgo` 命令。
  `v0.2.0` · [源码](https://github.com/PicGo/dsh-plugin)
- **@yichenwilian/dsh-deepseek-web** — DSH 内只读访问 DeepSeek 网页版会话归档：列会话/下载全文/搜索索引/分享列表，以及把 100 段会话压缩成一页高密度摘要（含活跃度直方图与主题聚类）的 digest 工具。刻意不暴露写操作（网页版有限流）。需另外安装第三方 deepseek-ops Python…
  `v0.1.0` · [源码](https://github.com/wilianyichen/dsh-deepseek-web)
- **dsh-netcafe** — 托管工具服务器（MCP）：发票与银行流水提取并做代码内算术校验、按整数分对账、PDF 与表格转换、SQL 方言转写，以及从中国移动骨干网实测大陆可达性。
  `v0.3.1` · [源码](https://github.com/mario03690/dsh-netcafe)
- **dsh-code-intel** — 用 Tree-sitter 建立工作区符号索引，提供词法或可选 embedding 辅助的代码检索。
  `v0.1.3` · [源码](https://github.com/lonelymoon87/dsh-code-intel)
- **@wxg-prc-cpg/dsh-weknora** — 把 WeKnora 知识库接入 dsh 的四个只读工具：列出知识库、混合检索原文片段、按顺序还原单篇文档，以及直接取用 WeKnora 自己带引用的 RAG 或 ReAct agent 回答（含可续聊的 session id）。
  `v0.1.0` · [源码](https://github.com/Tencent/WeKnora)
- **dsh-desktop-tools** — dsh 环境管理插件：自动获取 Rust/Tauri 桌面宿主（按系统从 dsh-desktop-host 下载，无 Release 时源码构建），运行时一键更新、Windows 平台兼容自动适配、DeepSeek 官方计费，并内置工作区代码编辑器。
  `v0.5.3` · [源码](https://github.com/YUEEEEY/dsh-desktop-tools)
- **dsh-db-connector** — 为 dsh agent 提供安全且可审计的 SQLite/PostgreSQL/MySQL 访问：schema 内省、强制只读查询、写审批门与持久化 JSONL SQL 审计追踪。
  `v0.1.0` · [源码](https://github.com/JohnXu22786/db-connector)
- **dsh-bookkeeping** — dsh 的对话式记账插件:聊天即可记账(严格金额校验、自然语言日期、自动分类),并支持查询、报表、CSV/HTML 导出和月度预算,数据存于本地 SQLite 账本。
  `v1.0.0` · [源码](https://github.com/JohnXu22786/bookkeeping)
- **dsh-patch-apply** — 将结构化 unified diff（git 格式）应用到真实文件系统：多文件/多 hunk 解析、带行号偏移修正的模糊定位、全有或全无的应用与类型化冲突报告、反向补丁撤销日记及 dry-run——4 个 patch_* dsh 工具外加一个 CLI。
  `v1.0.0` · [源码](https://github.com/JohnXu22786/apply-patch)
- **dsh-rss-digest** — dsh 的 RSS/Atom 摘要插件:订阅源管理、定时抓取、精确与近似去重,并由 LLM 生成每日 Markdown 简报投递到会话和/或文件(同时提供独立 CLI)。
  `v0.1.0` · [源码](https://github.com/JohnXu22786/rss-digest)
- **dsh-plugin-midscene** — 基于 Midscene 的 AI UI 自动化——android_ui 与 web_ui 工具，通过 ctx.midscene seam 在真实 Android 设备或已运行的 Chrome 上完成点击、输入、查询与断言。
  `v0.1.0` · [源码](https://github.com/ciky20171114/dsh-plugin-midscene)
- **dsh-llm-as-a-verifier** — 面向 DSH 智能体的细粒度 LLM 验证：基于评分 token logprob 期望的成对打分、概率枢纽锦标赛 N 选一与逐步进度追踪。
  `v0.1.1` · [源码](https://github.com/TaurenMountain/dsh-llm-as-a-verifier)
- **@yilinxiao/dsh-mcp-lazy** — MCP 懒加载路由：自动发现可接管的 MCP，冷态只在工具目录里留一个共享路由，某轮需要哪个服务器才展开它的工具 Schema、轮次结束再收起，让装了很多 MCP 不再每次请求都吃上下文。命名异常、重名或状态不确定的 MCP 不接管；出现任何不确定即恢复原工具可见性，执行、权限与进程生命周期仍归原…
  `v0.5.1` · [源码](https://github.com/leaforbook/dsh-mcp-lazy)
- **dsh-plugins-meter** — dsh 用量计量：会话级与汇总 token 统计、可配置计价与报告。
  `v1.0.1` · [源码](https://github.com/kouyichi/dsh-plugins)
- **dsh-plugins-guard** — dsh 安全治理：规则化工具拦截、完整工具调用审计轨迹与治理报告。
  `v1.0.1` · [源码](https://github.com/kouyichi/dsh-plugins)
- **dsh-plugins-a2a** — dsh 原生 A2A 服务：通过 HTTP JSON-RPC 将本 dsh 暴露为可调用的代理。
  `v1.0.1` · [源码](https://github.com/kouyichi/dsh-plugins)
- **dsh-video-understand** — 低成本视频理解工具：video_understand 把 B站链接/BV号/本地视频转成 AVIS 信息层（ASR+场景结构+对象轨迹+YOLO 标签）并输出摘要+问答。问题驱动动态路由分层（L0 ASR / L1 对象轨迹 / L2 关键帧 VLM）、语义层复用（重复提问直接查层）、单次问题预算上限。Python…
  `v0.5.2` · [源码](https://github.com/ilps2/dsh-video-understand)
- **dsh-reference-checker** — 为 DeepSeek Harness 提供参考文献真实性检查：reference_checker 工具将论文（PDF/BibTeX/tex/文本/粘贴列表）的每条文献对照 Crossref / OpenAlex / arXiv 核对，逐条判定 found / partial / not_found /…
  `v1.1.0` · [源码](https://github.com/Yu-tao-Li/dsh-reference-checker)
- **dsh-nuphus-mcp** — nuphus-mcp 官方 DSH 插件（由 nuphus-mcp 维护者发布）：桌面 + 浏览器自动化（38 个工具），配 PaddleOCR 元素感知与 Chrome CDP 浏览，经常驻 stdio MCP 子进程接入。
  `v0.2.1` · [源码](https://github.com/mrpulor-gh/dsh-nuphus-mcp)
- **cn-linebreak** — 中文网页文案断行静态审查与修复工具：检查显式 <br> 孤字行、keep-all 覆盖、标点禁则、保护词被拆等问题，并在自然停顿处自动插入 <wbr>；提供 cn_linebreak_audit 工具供代理调用。
  `v0.2.1` · [源码](https://github.com/chiang21fcb/cn-linebreak)
- **dsh-skin-switcher** — 设置面板皮肤管理器：自动扫描已安装的 Web UI 皮肤并一键切换，profile 补丁自动维护。
  `v0.4.0` · [源码](https://github.com/zhtx2024/dsh-skin-switcher)
- **dsh-astock-research** — A股个股研究：搜股票、查任意区间公告、财报卡、估值画像与交易信号科普（约 5000 只、2011 年至今，公共只读数据服务），另有一个跳转外部交易推演产品的链接工具。
  `v0.1.1` · [源码](https://github.com/tiantianlaolao/dsh-astock-research)
- **dsh-capability-optimizer** — 以 advisor / reviewer / designer 角色无头调用 Claude Code，回复作为参考答案。
  `v0.7.0` · [源码](https://github.com/hezhongtang/dsh-capability-optimizer)
- **dsh-context7** — 通过 context7_search 与 context7_get_docs 工具，为 DSH 智能体从 context7.com 获取最新、可锁定版本的库文档与代码示例。
  `v0.2.0` · [源码](https://github.com/Nrxous/dsh-context7)
- **dsh-devtoolbox** — DSH 本地工具箱：侧边栏独立页面内置 35 个纯本地小工具（文本、编码、哈希、提取、转换、速查表），另有 /toolbox 命令与配置驱动的 agent 工具注册。
  `v0.2.0` · [源码](https://github.com/jean3690/dsh-devtoolbox)
- **@kaiwangleo/dsh-xiwen** — 基于人工维护的表、字段和指标语义元数据，结合 Qdrant 与 Elasticsearch 召回，通过析问服务生成、校验并执行 MySQL 分析查询。
  `v0.1.0` · [源码](https://github.com/kaiwangleo/xiwen)
- **dsh-task-runner** — DSH 项目/任务双模式工作区：任务不绑定工作区，每次新对话在 D:\dsh_working\<名称>-<时间戳> 自动创建独立临时目录（类 Codex）；侧边栏"任务"分组常驻显示所有无工作区会话并带空状态提示，新建会话的工作区选择器增加"无工作区（任务）"选项。
  `v1.1.0` · [源码](https://github.com/jing-hy/dsh-task-runner)
- **dsh-hacker-news** — 用于获取 Hacker News 榜单、讨论串、搜索和用户资料的工具。
  `v0.1.0` · [源码](https://github.com/heartleo/hn-cli)
- **dsh-agentmail** — 用 AgentMail 给 agent 配一个自己的收件箱：发信、读信、搜索与打标签共十一个工具；收到的邮件按邮件线程分派，每个线程对应一个独立会话；所有外发邮件都要过审批与收件人白名单。
  `v0.1.0` · [源码](https://github.com/agentmail-to/dsh-agentmail)
- **@trench-xinxin/dsh-tool-lens** — 确定性 AST 代码图谱与架构治理分析工具：调用链消歧、重构爆炸半径、循环依赖审计、领域切片与全栈 API 契约追踪。
  `v2.0.5` · [源码](https://github.com/trench-xinxin/dsh-tool-lens)
- **dsh-drawio** — AI 驱动 drawio：四个画图工具（校验 / 渲染 SVG/PNG / 编辑 / 模板）+ 侧栏实时画板——零依赖 mxfile→SVG 预览、内嵌 diagrams.net 官方编辑器、AI 画图时自动弹出跟随。
  `v0.1.0` · [源码](https://github.com/jean3690/dsh-drawio)
- **dsh-design** — 在渲染后的页面上测量设计规则，而非解析 CSS——字号种类、与真实合成背景比对的 WCAG AA 对比度、间距栅格偏移、配色规模、点击区尺寸，以及「机器味指纹」（如按色相角度判定的紫色渐变）；内置 design-system 技能。
  `v0.2.0` · [源码](https://github.com/Viger1/dsh-design)
- **gewu-tools** — 面向纯文本 DSH 主脑的模型无关视觉审阅流水线：HTML 逐页截图 + 视觉子代理简报契约（gewu_prep），再把每条审阅发现定位回源码核验真值（gewu_locate）；已在 mimo-v2.5 与 qwen3.7-plus 上实测。
  `v1.0.0` · [源码](https://github.com/nyantused-cpun/gewu-tools)
- **dsh-firecrawl** — 通过 Firecrawl Cloud API 把 URL 抓成 LLM 可用 Markdown，或搜索网页并返回结果内容。
  `v0.1.0` · [源码](https://github.com/zoahdev/dsh-firecrawl)
- **dsh-browser-use** — Browser Use 云端桥接：通过 Browser Use API 让 dsh agent 执行真实网页任务，包括打开页面、点击、输入、填表和提取数据。
  `v0.1.0` · [源码](https://github.com/zoahdev/dsh-browser-use)
- **@omicverse/dsh-omicos** — 在持久 Python 内核里跑 OmicVerse/OmicOS 生信分析，附能力目录检索、内核变量查看与账号订阅页签。
  `v0.2.1` · [源码](https://github.com/omicverse/dsh-omicos)
- **@tindalosko/dsh-cheatengine** — 让 DSH Agent 通过 Cheat Engine 进行动态内存调试：扫描、指针分析、断点与游戏内存修改。
  `v0.5.2` · [源码](https://github.com/TindalosKorone/dsh-cheatengine)
- **dsh-writing-remote** — 写文引擎的 host 侧数据通道：把项目分卷、章节状态、书库、全文检索、演化条目与线索图谱以 Typert remote 暴露给客户端写作面板。
  `v0.6.2` · [源码](https://github.com/x2802490130-prog/dsh-writing-remote)
- **dsh-us-stocks** — 美股行情、历史 K 线、财务报表、分析师共识与新闻，数据来自 yahoo-finance2。
  `v0.3.0` · [源码](https://github.com/Realyujie/dsh-us-stocks)
- **dsh-artifacts** — 把 Markdown + JSON 渲染成自包含 HTML 文档/卡片/仪表盘/画廊（CLI + 内置 artifact_render 工具）。
  `v0.1.1` · [源码](https://github.com/zoahdev/dsh-artifacts)
- **dsh-http-tools** — HTTP/API 调试工具集：全参数 HTTP 请求（method/headers/body/auth）、curl 命令解析与一步执行、会话内请求历史与响应并排对比、分页 Link 头透出；配合可选 dsh-http-tools-ui 提供 DeepSeek 风格工具卡片。
  `v0.1.5` · [源码](https://github.com/lussey820/dsh-http-tools)
- **dsh-claude-code** — 把自包含的编码任务委派给当前环境 Claude Code 订阅执行（走官方 Claude Agent SDK），并在会话里新增一个标签页，实时显示输出、费用与剩余额度。
  `v0.1.2` · [源码](https://github.com/zhangjunjesse/dsh-claude-code)
- **dsh-wechat-mp** — 把 markdown 变成排好版的微信公众号草稿：样式逐条内联到元素上（编辑器会丢弃 `<style>` 块和 class 名），每张本地图片走微信自己的上传接口以免被过滤，然后创建草稿；不做群发。
  `v0.3.0` · [源码](https://github.com/coolbreezecoin/dsh-wechat-mp)
- **dsh-harness-zh-cn** — DeepSeek Harness 中文汉化插件：通过 system-prompt/assemble 瀑布钩子在运行时把全部系统提示词、工具描述与运行时上下文翻译成中文（1788 条译文，零源码修改，卸载即还原英文）。
  `v0.1.2` · [源码](https://github.com/zjl1989-li/dsh-harness-zh-cn)
- **dsh-compressor** — Headroom 的精简移植，在不影响模型上下文缓存以及 Agent 性能的情况下，压缩工具的输出，至多减少 20% 的上下文。
  `v0.1.0` · [源码](https://github.com/lifeodyssey/dsh-compressor)
- **dsh-plugin-sync** — 将已安装的 DeepSeek Harness 插件清单同步到 GitHub Gist（OAuth 登录、一键导出/导入并自动安装依赖）。
  `v1.0.0` · [源码](https://github.com/AngLi1997/dsh-plugin-sync)
- **dsh-learning-mode** — 学习模式（Learning Mode）Agent 预设：边做边教的编码 Agent——具体的情景化阐释、苏格拉底式引导、TODO(你) 留白练习，模拟 Claude Code 的 Learning 输出风格；可 `dsh plugin add` 安装（npm 包 dsh-learning-mode）。
  `v0.1.1` · [源码](https://github.com/CHplus0/dsh-learning-mode)
- **@zhaoolee/dsh-notes** — 将 DSH 对话导出为锤子便签风格 PNG，或在配置的账号工作区中新建和更新 Markdown 便签。
  `v0.1.2` · [源码](https://github.com/zhaoolee/notes)
- **dsh-funnel** — 摄入时点的工具输出治理：保留 error/warning 行与头尾，全文落盘留指针供模型按需读回；覆盖所有返回文本的工具，小结果原样通过。
  `v0.1.0` · [源码](https://github.com/YuanyuanMa03/dsh-funnel)
- **rotifer** — Rotifer 协议的技能包加 Rotifer MCP 服务，以 DSH 自带的技能提供器与 MCP 客户端实例的形式挂载：搜索 Gene、按 Arena 排名比较、在本地项目里安装或回滚 Gene，并创建和运行本地 Agent。MCP 服务锁定版本，只开放 evolve 工具集，不含发布与登录。
  `v1.0.1` · [源码](https://github.com/rotifer-protocol/rotifer-playground)
- **dsh-prompt-system** — 输入框内的提示词优化器：结合对话历史、工作区文件与会话选定模型，把草稿改写为十一节分析式提示词，支持一键撤销。
  `v0.1.0` · [源码](https://github.com/yuloong07-star/dsh-prompt-system)
- **dsh-shop-assistant** — 电商店主工作台：CSV 批量预览（多平台列适配）、可复算利润与六维评分、公开商品页快照、中文 skills、可替换售后政策知识库。
  `v0.1.0` · [源码](https://github.com/pengzhou267-ai/dsh-shop-assistant)
- **dsh-deeptutor** — DeepTutor 学习辅导桥接插件：通过 deeptutor_run / deeptutor_kb / deeptutor_note 工具为 agent 接入深度讲解、自测题、学习路径规划、个人知识库检索（RAG）与笔记归档。
  `v0.1.9` · [源码](https://github.com/TecFancy/dsh-deeptutor)
- **@sakikotgw/pack-agent** — 把 .pack.json/.pack.zip 投影到 .agent-pack/modpacks/，按工作区白名单暴露 skill。
  `v0.4.2` · [源码](https://github.com/sakikoTGW/pack-agent)
- **dsh-tool-see-image** — 为 DSH 提供 see_image 工具：将图片文件发送到可配置的 OpenAI 兼容视觉模型，并把其描述回传给纯文本模型。
  `v0.1.1` · [源码](https://github.com/gugu123a/dsh-tool-see-image)
- **dsh-recommend** — DSH 插件透明排行与推荐：每日自动抓取 `dsh-plugin` 话题生态，公开评分模型，提供 rank/search/recommend 工具与设置页榜单。
  `v0.2.0` · [源码](https://github.com/zp-home/dsh-recommend)
- **dsh-monitor** — 常驻后台监视器：文件收件箱（NDJSON）或命令输出增量一到就唤醒 agent，相当于 Claude Code Monitor 工具的 Harness 实现。
  `v0.1.1` · [源码](https://github.com/AbnerAI/dsh-monitor)

## 会话与消息 · session（253）

- **@2jumpsina/dsh-context-guard** — 长会话越跑越贵，平台到点还会把上下文压掉。这个插件做三件事：在会话标题旁显示当前上下文占了多少，鼠标停上去能看到这个数是怎么来的；过 45% 时往工作目录的 HANDOVER.md 写一份交接草稿，记下改过哪些文件、花了多少钱、最近几轮在聊什么；到 60% 提醒你一次该收尾了。平台压缩发生时，它把压缩前的数字记一行，事…
  `v0.7.7` · 引擎 `>=0.1.6-alpha.2 <0.2.0 || >=0.2.0-0 <0.3.0-0` · [源码](https://github.com/2JumpSinA/dsh-context-guard)
- **@240xu/dsh-message-ops** — DSH 会话消息级回滚、单条删除与重放式恢复；操作以 append-only surface replace 实现，带确认提示和运行中会话保护。需 Node.js 23.5+。
  `v0.11.3` · [源码](https://github.com/240xu/dsh-message-ops)
- **dsh-first-prompt-bar** — 把你在每个会话发的第一条提示词常驻显示、一键复制，可展开面板查看本会话发过的全部提示词，另带八套可在面板里即时切换的外观。
  `v0.7.0` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/1010231693/dsh-first-prompt-bar)
- **dsh-wm-toolkit** — 一个插件做会话与消息手术：撤回或编辑指令/回复（连思考过程一起改）、用原提问重新生成、按模型上下文级删除任意一条，以及会话归档、删除、跨工作区移动与工作区迁移。面向 DSH 0.1.5 / 0.2.x，已在 0.2.1-rc.3 实测。由三个 MIT 插件分叉合并而成（Jipcon/DSH-plugins 的…
  `v0.2.14` · 引擎 `^0.1.5-rc.1 || ^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/Jessicaisleep/dsh-wm-toolkit)
- **@kirkchinese/dsh-citeciter** — 选中 DSH 已提交回复中的文字，开启独立、持久、只读的多轮 Topic；Topic 绑定来源会话证据与项目文件，来源 Agent 可继续运行。
  `v0.9.0-beta.6` · [源码](https://github.com/kirkchinese/CiteCiter)
- **@dpskk2/dsh-chatsync** — 通过你自己的 GitHub 私有仓库,在多台电脑间双向同步 DSH 会话、工作区对应关系、设置与托管补丁(API 密钥留在当前环境)。
  `v0.20.3` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/dpskk2/dsh-chatsync)
- **dsh-compact-relay** — DeepSeek Harness 输入框上下文状态指示器：按压缩评估状态分段着色，标识建议压缩点、锁定消息位置与 DSH 原生自动压缩线（越线红闪告警）。支持预览后确认压缩（/bc）、生成九段式交接单并自动切换至新会话（/handoff）、锁定消息防压缩（/pin）。可在「设置 →…
  `v0.4.0` · [源码](https://github.com/cfanzx/dsh-compact-relay)
- **dsh-file-history** — 按轮次给整个工作区留检查点：每轮结束存一份快照，本轮改了哪些文件直接列在聊天里那一条下方，任意一轮都能还原——只还原文件、只还原对话，或者全部还原。捕获靠扫描整棵树，而不是挂钩 write/edit 工具，所以 shell 命令、外部编辑器、git 操作改出来的东西同样留痕。还原对话是从那一轮分叉出新会话，不切断原来的…
  `v0.3.2` · 引擎 `^0.1.5-rc.3` · [源码](https://github.com/EmptyVessel-000/dsh-file-history)
- **@agi321/dsh-temp-chat** — 用 /single-turn 与 /multi-turn 在独立子代理中作答，结果只留在当前对话，不进入主模型上下文。
  `v0.3.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/agi321/dsh-temp-chat)
- **@indexyz/dsh-autocompact** — 为 DeepSeek Harness 按模型设置更早的自动压缩阈值：/autocompact 以精确 provider/model 为键写入仅本会话生效的覆盖值（off 回退后端默认、default 清除覆盖），设置页「自动压缩」管理所有会话继承的持久化逐模型阈值，输入框状态条目显示当前读数。
  `v0.2.1` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/5aaee9/pi-agent-extensions)
- **@michengai/dsh-archive-manager** — 在设置里增加已归档会话页，可按工作区搜索、恢复和删除已归档会话。
  `v1.1.12` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-archive-manager)
- **@michengai/dsh-btw** — 提供 /btw 一次性上下文旁问，不执行工具；回答显示在可复制、折叠或关闭的独立气泡中，不写入主对话。
  `v1.0.8` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-btw)
- **@jayyuen66/dsh-session-rescue** — 回合异常收尾时的自动补救：瞬时失败后续跑、输出截断后继续、待办未完成时重跑，另有一层请求级 429 兜底，以及带「改后重发 / 手动重试 / 停止并重问」的客户端停靠栏。
  `v0.1.4` · 引擎 `^0.2.1-rc.3` · [源码](https://github.com/JayYuen666/dsh-session-rescue)
- **@xiguazhiprince/dsh-session-map** — 会话图谱：把 DSH 会话画成一张 fork 树画布，另在设置里加了一个「从 Git 克隆」页——填仓库地址、选存放目录（会记住上次选择、带原生目录选择器），按需打开浅克隆，克隆完自动添加为工作区。画布可从会话头部开关和右侧栏两个标签页打开，对话标签页默认关闭；默认只铺开当前会话所在的那棵树、自上而下生长，支持滚轮平移…
  `v0.3.0` · [源码](https://github.com/xiguazhiPrince/dsh-session-map)
- **@yiliang114/dsh-session-deck** — 在 DSH 侧栏添加 Activity 和 Favorites 视图，跨工作区查看运行中、等待回复、未读、最近及原生置顶会话，并保留原生工作区树。仅适配 DSH 0.2.1-rc.2。
  `v0.1.8` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/yiliang114/dsh-session-deck)
- **dsh-autorestart** — DeepSeek Harness 插件：重启不丢工作——等所有对话空闲后优雅重启，重启后自动接续被打断的会话。内置重启仅支持 Windows 桌面版，其他环境需自配 restartCommand。
  `v0.3.3` · [源码](https://github.com/Eason-22/dsh-autorestart)
- **dsh-rewind-plugin** — 同一会话窗口内的 in-place 对话回退（不 fork，Claude Code /rewind 语义）：每条消息的 ↶ 按钮把模型上下文回退到任意用户消息，可选用磁盘持久化的 before-backups 还原工作区文件。
  `v0.19.0` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/SiriLee/dsh-rewind)
- **dsh-session-conductor** — DSH 会话管理增强：归档/恢复、批量与条件删除、AI 自动重命名、中断自动续跑、按工作区分组、撤回最后一条消息、三类损坏日志修复（seq-gap/EIO/双格式）、价值分析与全文搜索——另含方案/收尾模板注入（系统提示词 + 上下文）。
  `v1.3.13` · [源码](https://github.com/EIGHTfs/dsh-session-conductor)
- **dsh-session-sync** — DeepSeek Harness 的跨设备会话同步：经 git 在多机之间同步会话与设置。
  `v0.2.31` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-session-sync)
- **dsh-conversation-recycle-bin** — 在会话列表菜单或会话页头部删除对话，可勾选一并删除该对话关联的记忆节点（确认框先显示命中条数）；删除进入插件回收站可恢复，每次操作写入审计日志，批量删除有限流与逐会话回滚。
  `v0.3.6` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/HERO476/dsh-conversation-recycle-bin)
- **dsh-task-control** — DeepSeek Harness 任务控制：卡死的下载与工具调用一键急停与强制终止、下载进度、卡死识别、pwsh 运行状态检测，以及追加条件/暂停/恢复（恢复指令隐形注入，不打扰聊天）。
  `v0.4.7` · [源码](https://github.com/ningmengxr/dsh-task-control)
- **@takboo/dsh-session-bin** — 按工作区管理原生归档，支持搜索、取消归档、单项和固定范围批量永久删除。
  `v0.2.6` · 引擎 `0.2.1-rc.3` · [源码](https://github.com/takboo/dsh-session-bin)
- **dsh-bulletin-dispatch** — 同一台电脑上会话之间的「单子」：会话用标题里的编号前缀表明自己属于哪张桌；单子投给某张桌，由那张桌最先开始干活的那个会话取走 —— 桌是地址，路过的会话不会收到它。
  `v1.3.30` · [源码](https://github.com/southsnowL/dsh-bulletin)
- **@xrn1997/dsh-session-delete** — 给 DSH 会话提供一个回收站功能。
  `v0.3.1` · 引擎 `>=0.1.7-rc.2 <0.3.0-0` · [源码](https://github.com/xrn1997/dsh-session-delete)
- **dsh-session-navigator** — 像 Windows 资源管理器那样管理 DSH 的会话：目录树、标签、备注、回收站。文件夹、标签、备注存在独立索引里；删除会话会把其目录移入插件回收站，跨工作区剪切会移动会话文件并改写其 cwd。
  `v1.0.4` · [源码](https://github.com/Anlerway/dsh-session-navigator)
- **@amaster.ai/dsh-storage** — 将 dsh 会话事件镜像到 MySQL、PostgreSQL、SQLite 或 SQL Server，同时保留本地会话文件。
  `v0.1.32` · [源码](https://github.com/TGYD-helige/dsh-plugins)
- **dsh-structured** — 让 DSH 每条实质回复默认结构化：无标签标题卡 + 表格/清单/步骤；按会话开关，style.md 可覆盖。
  `v0.9.4` · 引擎 `>=0.1.7-rc.2 <0.4.0-0` · [源码](https://github.com/feigo313/dsh-structured)
- **dsh-context-compression-improved** — 机制上与上下文压缩领域最响的两条公开路线同源：代码骨架闸门沿用 Headroom（Apache-2.0）的骨架化思路，其公开头条为「编程 agent 少 20% token、JSON 载荷少 60–95% token，答案不变」；估计器通道沿用 TokenPilot（arXiv:2606.17016）的缓存感知上下文管…
  `v0.10.0` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-context-compression-improved)
- **dsh-interrupted-resume** — 轻量级的 dsh 崩溃恢复：重启后识别上一轮被强杀中断的会话，注入一条「先核实现状再动手」的续跑指令，避免盲目重做已有副作用的操作。只认真正的崩溃信号（turn/end 的 reason 为 interrupted，由 session repair 冷读时合成），因此不会把用户主动取消、限流或模型报错误判为可续，也就不…
  `v0.2.5` · 引擎 `>=0.1.0` · [源码](https://github.com/ptrel1/dsh-interrupted-resume)
- **billion-context** — billion-context官方版：上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。
  `v0.1.206` · [源码](https://github.com/ranxianglei/billion-context)
- **dsh-context-guardian** — 为 compaction-basic 提供压缩兜底：当 LLM 摘要抛错、返回空内容或放不进上下文窗口时，改为确定性编译该区段，每行带 seq 指针（内置 dsh-compaction-instant 编译器）。提供 recall、search 工具与 /recall、/context 命令，占用超过窗口 45%…
  `v0.2.0-beta.1` · [源码](https://github.com/LuminariSoftwares/context-guardian)
- **dsh-session-keeper** — DeepSeek Harness 侧栏的会话管理插件：按工作区划分的分类树，支持拖拽排序；置顶会话可抬到分类上方，也可按开关留在所属分类内；另有归档分区，以及删除回收站——删掉的会话日志留存，可恢复或批量彻底清除。宿主半边掌管分类与回收站数据，网页半边负责渲染，两者作为一个插件一起发布。本插件是…
  `v1.2.0` · [源码](https://github.com/WSNMM3/dsh-session-keeper)
- **dsh-prompt-assembler** — 独立提示词装配插件，提供来源注册、自定义文本、策略编辑与预览，通过 DSH 公开钩子按会话应用策略快照。
  `v1.1.2` · 引擎 `>=0.2.1-rc.2 <0.2.2-0` · [源码](https://github.com/Player-MINEPIG/dsh-prompt-assembler)
- **dsh-reply-forge-v3** — 编辑 DSH 会话中的助手回复与思维链，让模型采信改后的内容：在线经 message projection 立即生效，或落盘改写会话记录。
  `v3.4.1` · [源码](https://github.com/kinggod899/dsh-reply-forge-v3)
- **dsh-reference-session-collector** — DSH 会话原文只读投影同步器（drsc）：只读扫描 ~/.dsh/sessions/** 会话日志，经内置 leaf 解码器解 zstd/分段帧日志后投影进插件自有 SQLite（node:sqlite，segments/replaces + FTS5），由单条 fenced HTTP 路由提供 surface…
  `v0.2.1` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-reference-session-collector)
- **dsh-search-index** — 自带独立索引的侧边栏会话搜索（不再复用 DSH 官方全文索引）：一处入口在标题与内容检索间切换，结果按会话聚合，附最强命中片段与 用户/回复/工具 类型标签；水位驱动增量同步、按归档集合清理已归档会话，整理走影子索引不阻塞在用索引。
  `v0.6.7` · 引擎 `0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-search-index)
- **dsh-date-wrapper** — 将 DSH 时间上下文从约 280 字符压缩到 46 字符，向运行期快照注入紧凑日期行，无运行时依赖。
  `v0.4.3` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-date-wrapper)
- **dsh-session-guard** — 高峰自动会话门：周末模式 + 高峰自动暂停（全局）+ 会话级冻结/恢复 + 后端自动重试；错峰自动续跑。
  `v4.2.3` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-session-guard)
- **dsh-chat-manager** — 管理 DSH 归档聊天，支持聊天记录搜索、恢复和二次确认的安全永久删除。
  `v1.5.18` · [源码](https://github.com/WSL043/dsh-chat-manager)
- **dsh-prompt-setting** — DeepSeek Harness 默认 System Prompt 管理插件：在 Web GUI「设置」里浏览、检索并覆盖最终装配进每轮会话的系统提示词。
  `v0.2.5` · [源码](https://github.com/zangxx66/dsh-prompt-setting)
- **dsh-recall-plugin** — 消息撤回：在用户消息旁加「撤回」按钮，把对话历史（官方会话 fork）与项目文件（逐消息影子 git 快照）一并回退到该消息发送之前，带差异预览确认面板。
  `v2.5.0` · [源码](https://github.com/limbo947/dsh-recall-plugin)
- **dsh-plugin-goal-map** — 目标进展图以只读流程图展示目标到计划的进展路线、会话思维导图与步骤列表，按已报告计划计算进度，不启动任务或模型调用。Beta.2 支持 DSH Web 0.2.0-rc.2 或 0.2.1-rc.2、Node.js >=24。
  `v0.2.0-beta.2` · 引擎 `0.2.0-rc.2 || 0.2.1-rc.2` · [源码](https://github.com/sensen-jo/dsh-plugin-goal-map)
- **@istarry/dsh-edit-regen** — 编辑重发：在用户消息气泡上多一个「编辑」，改完从那条消息重新生成，图片与文件随行重传，模型继承原会话。
  `v0.1.5` · [源码](https://github.com/iStarryDust/dsh-edit-regen)
- **deepseek-web-import** — 从设置页把 chat.deepseek.com 网页端对话导入为 DeepSeek Harness 会话，导入后可在其中继续对话。
  `v0.2.1` · [源码](https://github.com/wpc0323/deepseek-web-import)
- **dsh-session-port** — 把会话连同附件导出为压缩包，或把这样的压缩包导入为当前工作区里的新会话。
  `v0.2.1` · [源码](https://github.com/mswinandmc/dsh-session-port)
- **@idoall/dsh-session-colors** — 给任意会话加上颜色标记：在侧栏显示色条、从会话头部选择颜色；标记保存在宿主上，一台设备选的颜色在其他设备上同样可见。
  `v0.1.12` · 引擎 `>=0.1.7-alpha.2 <0.2.0-0 || 0.2.0-rc.1 || 0.2.0-rc.2 || >=0.2.0 <0.3.0 || >=0.2.1-alpha.3 <0.3.0` · [源码](https://github.com/idoall/dsh-session-colors)
- **dsh-tool-result-trimmer** — 即时、尾部加权、行吸附的工具输出修剪插件：挂载于执行流水线即时截断超大命令输出，内置语义提纯器与 ANSI 剥离。
  `v1.5.0` · [源码](https://github.com/Jaylor-Wang/dsh-tool-result-trimmer)
- **dsh-sensenzi-conversation-search** — 0.2.0-beta.2 仅支持 DSH 0.2.1-rc.2，面向宿主所有者使用。在当前会话或同目录工作区搜索用户与助手原文，查看来源坐标和上下文；不支持非所有者身份的会话级授权。
  `v0.2.0-beta.2` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/sensen-jo/dsh-conversation-search)
- **dsh-hermes-session** — 只读读取当前环境 Hermes Agent 的会话库，把会话导入当前会话作为有界、不可信的背景上下文：输入框按钮可搜索全部 profile 的会话，另有 hermes_sessions_list 与 hermes_session_import 两个工具。
  `v0.1.0` · [源码](https://github.com/mailmrcai/dsh-hermes-session)
- **dsh-theone** — 所有事在一个对话框（主聊天）里聊：每条消息自动分到所属话题，每个话题在后台有独立的会话和上下文；已有的 DSH 旧会话也会自动整理、分类成话题。
  `v0.4.1` · [源码](https://github.com/YunongDai2005/dsh-theone)
- **dsh-session-copy** — 在会话标题栏添加一个复制按钮，可复制会话深度链接、整段对话 Markdown 或工作目录。
  `v1.2.0` · [源码](https://github.com/2310770803/dsh-session-copy)
- **dsh-projectless-session** — 在 DSH 工作区选择器中添加无工作区会话入口，创建按日期整理的独立目录，并让已开始的会话在未分组区域保持可恢复。
  `v0.7.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/jarvisluk/dsh-projectless-session)
- **dsh-call-session** — 并排运行多个 DeepSeek Harness 会话，让它们互相交接任务，并在同一张只读看板上看清整场协作。
  `v0.1.10` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/popu2do/dsh-call-session)
- **dsh-session-recall** — 确定性跨会话检索：`recall` 工具带显式范围控制地搜索历史会话日志。
  `v0.7.9` · [源码](https://github.com/kittimzhe/dsh-session-recall)
- **dsh-taskfold** — 用命名任务包住工作过程；任务结束后，在下一个步骤边界把整段消息折叠成一段摘要，原文可随时还原。
  `v0.39.0` · [源码](https://github.com/yindf/taskfold)
- **dsh-session-eval** — 回溯式会话评估：从持久化日志生成确定性成绩卡与跨会话回归对比——不跑基准、不用 LLM 裁判。
  `v0.3.0` · [源码](https://github.com/kittimzhe/dsh-session-eval)
- **dsh-checklists** — 会话级清单：每个会话一棵任务树、按预算注入提示词的摘要，以及可改条目标题的右侧栏面板。
  `v0.7.0` · [源码](https://github.com/manny333/dsh-checklists)
- **dsh-session-status** — 为每个会话设置项目状态标签（内置进行中/已结项/搁置中+自定义标签，颜色可调），在侧栏、对话头部与悬停卡片中显示。
  `v0.2.1` · [源码](https://github.com/LucienLL/dsh-session-status)
- **dsh-delete-turn** — DSH 消息删除插件：按条删除用户消息、按步骤删除思考与工具调用、按整条回复删除助手回答，经官方 surface-replace 契约从模型上下文移除并从可见转录隐藏，原始 append-only 日志不改写。
  `v0.1.14` · [源码](https://github.com/DDDMUC/dsh-delete-turn)
- **dsh-prompt-enhance** — 输入框一键提示词增强——把草稿改写为结构化提示词（角色与目标、可执行步骤、输出格式、验收标准、边界条件），支持前后对比、回填与一键撤销；不改变原意、不凭空编造需求。
  `v0.3.2` · [源码](https://github.com/rongxingda/dsh-prompt-enhance)
- **dsh-workspace-mover** — 拖拽跨工作区真迁移会话，找回失联与未记账会话，文件夹改名后一键原地重定向工作区；ID 与历史原样保留，步步备份回滚。
  `v2.4.1` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/PianoPrince/dsh-workspace-mover)
- **dsh-deepworker** — DSH 会话工作台：轮次操作、引用出处、本地笔记与摘要、会话内查找、专注锁和多工作区命令按钮。
  `v0.1.6` · 引擎 `>=0.2.1-rc.1 <0.3.0` · [源码](https://github.com/tinyblckc0000al/dsh-deepworker)
- **dsh-delete-sessions** — 在侧栏会话菜单的「归档会话」下方新增红色「删除会话」项，配自定义确认对话框，实现真正的会话删除——停止会话进行中的工作、摘除工作区/归档/置顶记账、删除投影缓存与日志目录，然后广播移除事件让该行立即消失，而不是只能归档。会话删除会把对话从磁盘彻底移除且无法恢复；删除会话与会话删除是同一种操作的两种叫法，搜其中任意一种都…
  `v0.2.2` · [源码](https://github.com/Linusteller/dsh-session-delete)
- **dsh-session-manager** — DSH 会话与工作区管理——工作区：归档与显示。会话：跨工作区移动、预设迁移、删除；收藏、待回看、优先级、标签、备注。批量操作。
  `v0.7.5` · [源码](https://github.com/hkkz9522/dsh-session-manager)
- **dsh-archived-chats** — 管理已归档与未归档会话，支持搜索、只读预览、标签备注、工作区归档、ZIP 备份、来源分支、手动残留会话检查和自动检查更新；保留旧回收记录恢复，停用自动清理。
  `v1.6.0` · [源码](https://github.com/Ultronen/dsh-archived-chats)
- **dsh-reference-anything** — 从 DSH 统一的 @ 菜单中引用工作区文件、DSH 会话，以及 ChatGPT、Claude、Gemini、DeepSeek、Grok 和 Kimi 的历史对话。
  `v0.5.1` · [源码](https://github.com/Chael-Chael/dsh-reference-anything)
- **dsh-pinned-sessions** — 把运行中、跑完未点开和当前打开的会话固定在 DSH Web 侧栏工作区分组上方，并可从任意会话/工作区的「...」菜单里全局置顶。
  `v0.2.1` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/TianYa-DAO/dsh-pinned-sessions)
- **dsh-plugin-session-purge** — 两步删除会话：会话菜单先把会话移入回收站（不删任何内容、可随时恢复），面板可恢复、可逐条立刻删除、也可整体清空，下次启动 DSH 时才真正清掉日志、投影缓存、spill 文件与工作区登记。
  `v1.3.4` · [源码](https://github.com/OliYogSothoth/dsh-plugin-session-purge)
- **dsh-session-leftover-purge** — 在 DeepSeek Harness 中删除会话后，清理 billion-context 快照；cost-meter 账本记录的清理默认关闭，可在设置里打开。
  `v1.1.9` · [源码](https://github.com/FenrirCait/dsh-session-leftover-purge)
- **@240xu/dsh-session-lazy-view** — 只读会话惰性查看器：仅 stat 列出会话，再只解压尾部 Zstandard 帧查看最近事件；独立 /lazyview 面板支持搜索、统计和导出。需 Node.js 24+。
  `v0.3.6` · [源码](https://github.com/240xu/dsh-session-lazy-view)
- **@240xu/dsh-session-search** — 跨会话全文搜索：对持久化 DSH 会话日志建立增量消息级索引，返回 sessionId、seq 与摘录；提供 agent 工具和独立面板。需 Node.js 23.5+。
  `v0.1.11` · [源码](https://github.com/240xu/dsh-session-search)
- **@hoist-wen/dsh-trajectory-tool-insight** — 在 DSH 会话轨迹栏边新增「解读」标签：调用模型分轮次解读工具调用情况；允许自定义提示词。
  `v0.4.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/hoist-wen/dsh-trajectory-tool-insight)
- **@ryuu-64/dsh-session-tools** — 给 AI 四个会话工具：新建会话、给别的会话发消息、列出会话及其状态，以及等另一个会话这一轮跑完并把它的回答取回来。
  `v0.8.0` · [源码](https://github.com/Ryuu-64/dsh-session-tools)
- **@jochenyang/dsh-rewind-plugin** — 撤回已发送的消息：会话日志只追加、不删除任何东西，被撤回的回合退出模型上下文并从对话界面消失、原文回到输入框，被这些回合改动的文件留在隔离区里——设置里独立一页，可查看可清理。
  `v0.4.0` · [源码](https://github.com/JochenYang/dsh-rewind-plugin)
- **dsh-sessions-manager** — 在统一设置面板中归档、恢复、彻底删除并跨工作区移动 DeepSeek Harness 会话。
  `v3.7.8` · [源码](https://github.com/TOBYCAI/dsh-sessions-manager)
- **dsh-block-ptc** — 为 PTC 模式提供模型自主收口的动态上下文压缩，将程序执行归入区块，并用模型撰写的摘要替换已完成区块的消息。
  `v0.4.0` · [源码](https://github.com/mengwEX/dsh-block-ptc)
- **dsh-snapshot-manager** — 记录会话快照并支持回滚到之前的状态。
  `v0.3.0` · [源码](https://github.com/985451842/dsh-snapshot-manager)
- **@kira905/dsh-butler-archive** — DSH 网页插件：浏览、预览、还原与删除已从会话目录搬出的归档会话。
  `v0.3.5` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/kira905/dsh-butler-archive)
- **@kira905/dsh-session-title-live** — DSH 会话标题实时生成器：每条用户消息后重新生成标题，在字节预算内概括最近几条消息。
  `v0.2.5` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/kira905/dsh-session-title-live)
- **@aeroscis/dsh-temptask** — DeepSeek Harness 的临时任务模式：一键创建一次性的时间戳工作区并开会话，直接成为侧边栏原生工作区节点。
  `v0.5.0` · 引擎 `^0.1.5-rc.2 || ^0.2.0-rc.1` · [源码](https://github.com/Aeroscis/dsh-temptask)
- **@hyzyn/dsh-search** — DSH Web GUI 的全局搜索插件：侧边栏全局搜索框全文搜索历史会话（走 sessionQuery 全文索引，未启用时降级为逐会话扫描）与设置面板，关键词高亮，点击直达会话或对应设置卡片。
  `v0.4.12` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **@mingozhou/dsh-replay** — 在可播放的时间线上回放会话并显示逐步 token 用量，审计敏感操作，估算成本，查看 fork 血缘，对比会话，并可导出独立 HTML 回放。
  `v0.4.2` · 引擎 `>=0.2.0-rc.8` · [源码](https://github.com/MingoZhou/dsh-replay)
- **dsh-message-forward** — DSH 会话间消息转发：把单条模型回复、用户消息或多选合并的消息与图片从上游会话提取出来投递到另一个会话，支持静默发送、填入草稿、发送并跳转三种投递方式，并可套用提示词模板。
  `v0.2.10` · 引擎 `>=0.2.0-rc.1 <0.2.1-0 || >=0.2.1-0 <0.3.0-0` · [源码](https://github.com/Domaki-co/dsh-message-forward)
- **dsh-retrace** — 撤回/编辑重发/重新生成，加上单会话版本化：每次回退的时间线、产物回退（git 优先、快照兜底）、分叉图、会话谱系，以及实时看门狗（并发写入第一时间快照日志）。编辑前自动停止运行中的 agent（官方 cancel/whenIdle），回退不会损坏持久化日志、也不会破坏 /compact。
  `v0.4.134` · [源码](https://github.com/yamingmou/dsh-retrace)
- **dsh-chat-import** — 把 13 家 coding agent（Claude Code、Codex、ChatGPT、Cursor、Gemini、opencode 等）的完整对话历史导入为可续聊的 DeepSeek Harness 会话，并支持反向导出回 Claude Code。
  `v0.26.2` · [源码](https://github.com/Nwflower/dsh-chat-import)
- **dsh-archive-workbench** — 在侧边栏会话行菜单中新增「删除会话」，永久清除该会话的日志目录、投影缓存与归档/置顶记录，并让该行从侧边栏消失；同时在侧边栏提供已归档会话面板，可恢复或删除已归档会话。
  `v1.0.0` · [源码](https://github.com/CHYMZXS/dsh-archive-workbench)
- **dsh-recycle-bin** — 把 DSH 会话删入可恢复的回收站——子会话随其父会话作为一棵树处理，支持批量归档、恢复与彻底删除，只有彻底清除才会真正销毁数据。
  `v1.4.1` · 引擎 `0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/WangLemna/dsh-recycle-bin)
- **dsh-session-prefix** — 基于 Jev 决策模型或 Agent 工具为会话自动分类，并将任务阶段直观展示为标题前缀 Emoji（进行中 🚧、阻塞 ⏸️、待验收 👀、已完成 ✅、规划 💡、排障 🐛）。支持生命周期状态自愈、可选 Jev 决策推断（需配置 Jev API Key）、Agent 自主标记与可视化设置面板。
  `v0.1.0` · [源码](https://github.com/john-walks-slow/dsh-session-prefix)
- **@duke-dsh-plugins/dsh-archive-manager** — DeepSeek Harness 会话归档管理：分组归档面板，支持恢复与删除。
  `v1.5.2` · [源码](https://github.com/MoonlitDropOfBlood/dsh-archive-manager)
- **dsh-minimal-session-delete** — 从侧边栏永久删除会话：等待正在运行的回合停下，并级联删除其子代理会话。
  `v1.1.0` · [源码](https://github.com/reverse-PAI/dsh-minimal-session-delete)
- **dsh-session-find** — 会话内 Ctrl+F 全文查找（读会话 store 而非 DOM）：命中按来源分类（你/助手/思考/工具调用/工具输出/系统）、按轮次分组、同文合并，可切「只搜正文 / 搜全部内容」，支持正则/大小写/全词，全量高亮，并能把结果复制或导出为 Markdown。
  `v1.4.1` · [源码](https://github.com/fomalhaut1998/dsh-session-find)
- **dsh-session-titler** — 手动触发的「先确认再改名」标题生成器：顶栏按钮与会话行菜单各一个入口，让模型总结整段会话给出标题，在可编辑弹窗里确认后才重命名会话；不注册标题 provider，不影响自带的自动标题。
  `v0.2.1` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/ZilongYang/dsh-session-titler)
- **dsh-faster-compress** — 在后台准备上下文摘要并于安全步骤应用，保留原生压缩回退，并提供摘要内容、应用状态、耗时与用量的会话压缩历史。
  `v0.2.3` · [源码](https://github.com/GallenShao/dsh-faster-compress)
- **@liuyu-f/dsh-plugin-session-cascade-delete** — 从界面删除会话（会话头部按钮或侧栏行菜单），或由 agent 调用 session_delete 工具：先停止并释放运行中的 Agent 与会话，再清理日志目录、投影缓存与工作区记账，级联删除它拥有的子代理会话（分叉分支不受影响）。
  `v1.0.5` · [源码](https://github.com/liuyu-f/dsh-plugin-session-cascade-delete)
- **dsh-forget-session** — 在会话行菜单加入「遗忘会话」（菜单内二次点击确认），把会话从侧栏与磁盘彻底移除：先停掉正在运行的工作，经官方通道解除工作区、归档与置顶记录，删除日志目录与投影缓存条目，并由复活守卫在一个窗口内补删迟到写入或句柄残留重建的文件；灵枢记忆、附件与其他会话不受影响。
  `v2.2.1` · [源码](https://github.com/2026heshao/dsh-forget-session)
- **keep-reminder** — 把会话工作目录下 .keep-reminder 文件的内容作为 system-reminder 注入，支持三种模式：每会话一次、每轮第一步、每次请求。
  `v0.1.2` · [源码](https://github.com/imlishiyuan/keep-reminder)
- **dsh-auto-rename** — 用首条消息为会话命名，并在重命名弹窗里流式给出 AI 标题建议。
  `v0.2.0` · [源码](https://github.com/Theflippy978/dsh-auto-rename)
- **@falling-ts/dsh-force-compact** — llama-cpp qwen3.8-27b 低上下文时，强制上下文压缩插件，提示模型使用效率和使用流畅度，外加完善的压缩提示。
  `v0.9.0` · [源码](https://github.com/falling-ts/dsh-force-compact)
- **dsh-session-migrate** — DSH 会话跨版本迁移：扫描旧版会话目录（v0 明文、.zstd 与 .zip 导出包），改写 header cwd 绑定目标工作区并落盘，打开会话时由持久化层自动完成版本升级；设置侧边栏（环境 / 导入 / 列表 / 转换）加 CLI（check / fix / import）。
  `v1.0.7` · [源码](https://github.com/EIGHTfs/dsh-session-migrate)
- **@domitor-syh/dsh-rollback** — TRAE 式「回退到本轮对话发起前」插件：按轮次建立检查点（10 轮滑动窗口），同时回滚工作区文件与原位截断模型上下文，保持同一 session id。回退只能由人发起：/rollback 命令或每轮的 Web 回退按钮（被中断的轮次也可用），弹窗逐条列出受影响文件及其动作（恢复/找回/删除/跳过）。
  `v0.5.1` · 引擎 `>=0.1.5-rc.2 <0.2.0-0 || >=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/domitor-syh/dsh-rollback)
- **obsidian-dsh-acp** — 在 Obsidian Agent Client（及其他 ACP 客户端）里驱动 DeepSeek Harness 的 ACP 适配器：会话 list / resume / fork / delete、按会话切换模型、一句话摘要预览、导入外部 ACP 会话，并可把 Obsidian 侧会话拉进 dsh 原生会话库。需…
  `v0.3.7` · 引擎 `>=0.1.6-alpha.1` · [源码](https://github.com/SilenZerOrz/obsidian-dsh-acp)
- **dsh-session-clean-delete** — 在侧栏会话菜单中增加「永久删除会话」的操作，并附带确认对话框：对话框会说明会话日志大小，以及与该会话绑定的进行中轮次、子代理、后台任务和提醒；删除后 id 会从 live、归档与工作区登记中一并释放，因此刷新列表时该行不会复活。
  `v1.0.1` · [源码](https://github.com/wilsonchengassistant/dsh-session-clean-delete)
- **dsh-archive-favorites-forge** — 在侧栏「…」菜单或行内星标收藏任意对话；一键复制会话 ID 与转录文件绝对路径；单条永久删除（二次确认，删完侧栏立即移除该行）。设置页新增一张卡：按可配置的小时阈值批量归档闲置会话并支持一键撤回，把候选导出为制表符分隔的 txt（含对话名称、ID、所属工作区、闲置时长、最后活动时间），以及批量删除归档中未收藏的对话；视…
  `v0.24.4` · [源码](https://github.com/loyalchiiina/dsh-archive-favorites-forge)
- **@1agents/session-reader** — 通过 1session 命令行或 DSH Web 历史浏览器搜索和读取 Claude Code、Codex、Antigravity、Grok 与 DSH 的本地编程会话。
  `v0.11.1` · [源码](https://github.com/scottzx/session-reader)
- **@mill413/dsh-session-resume** — 为进程退出或重启导致中断的任务提供继续按钮。
  `v0.4.2` · [源码](https://github.com/mill413/dsh-session-resume)
- **dsh-sidebar-delete** — 在 dsh 侧栏真正删除会话（连带本地日志与投影缓存，子代理与 fork 子会话级联）并管理工作区与未分组会话，可选每天定时清理未分组会话。
  `v0.1.7` · [源码](https://github.com/xqh-jason/dsh-sidebar-delete)
- **dsh-idle-compact** — 会话上下文超过可配置的 token 阈值、且用户空闲达到可配置时长后，在模型 KV 缓存过期前自动压缩会话；两项设置都在插件管理器的插件页面中修改。
  `v0.3.0` · [源码](https://github.com/Arrosam/dsh-idle-compact)
- **@akasha-book/session** — 回合结束时把会话档案增量索引进阿卡夏会话层，记录压缩事件，并在运行时上下文里显示每回合节奏条。（配套：Hindsight 仓库记忆 / OpenViking 用户记忆 / 宿主会话检索；见仓库 README） 安装：clone 仓库并复制 core/，把 cordis.patch.yml 里的…
  `v0.3.7` · [源码](https://github.com/Ersith/akasha-book)
- **dsh-auto-handoff** — DSH 插件：通过 /handoff 或会话累计 Token 阈值把长会话交接给同工作区的新会话，并继承 preset、模型、权限与 Plan 模式；交接简报由会话自身的模型撰写，切换在 Step 边界发生，不中断正在执行的步骤。
  `v0.2.0` · 引擎 `>=0.0.1-0 <0.0.2-0 || >=0.1.0-0 <0.1.1-0 || >=0.1.1-0 <0.1.2-0 || >=0.1.2-0 <0.1.3-0 || >=0.1.3-0 <0.1.4-0 || >=0.1.5-0 <0.1.6-0 || >=0.1.6-0 <0.1.7-0 || >=0.1.7-0 <0.1.8-0 || >=0.2.0-0 <0.2.1-0 || >=0.2.1-0 <0.2.2-0` · [源码](https://github.com/qingyou002/dsh-auto-handoff)
- **@mzzsfy/dsh-session-manager** — 会话管理：超期会话自动归档（阈值可配），归档面板支持取消归档，删除移入系统回收站可还原。
  `v0.9.4` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-claude-move** — 四合一迁移向导：把 Claude Code、Codex、OpenCode、Hermes 的会话、记忆、技能、指令与斜杠命令迁入 DSH（/move 向导，审批门 + 幂等 move.json，会话可续聊）。
  `v0.4.18` · 引擎 `>=0.1.6-0 <0.2.0 || >=0.2.0-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-claude-move)
- **dsh-session-flow** — 跨会话档案柜：总览工作台、折叠时间线、子代理血缘、全文检索、双模式摘要、ZIP 导出、实时跟踪。会话流标签页嵌入原生会话页：轮次悬浮条、详情并入右栏（实时模式，切换会话可钉住原会话直播）、会话重命名（对齐官方即时同步）、结论摘要行、健康监控与常驻头部胶囊（空闲 / 活跃 / 工具执行 / 疑似卡死四态）。dsh…
  `v1.5.0` · 引擎 `>=0.1.2-rc.1 <0.3.0` · [源码](https://github.com/YeqingTang/dsh-session-flow)
- **dsh-cross-session-approval** — DeepSeek Harness 的跨会话派活与协同：新建顶层任务会话并投递任务，用 base62 会话别名读取或干预，并通过审批桥批准子会话的沙箱提权——命中破坏性删除一律强制拒绝。
  `v0.3.10` · [源码](https://github.com/zsjs110110-cpu/dsh-cross-session-approval)
- **dsh-session-insights** — 回头看看你是怎么使用 AI 的：`/session-insights` 会整理一段时间内的 DSH 会话，找出哪些做法有效、哪些问题总在重复、最终真正留下了哪些成果，并生成一份保存在当前环境的复盘报告。
  `v0.6.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/GreenLv/dsh-session-insights)
- **@anionex/dsh-turn-rewind** — 对话回退：基于持久 Change Ledger 回滚会话与工作区状态。
  `v0.3.10` · [源码](https://github.com/Anionex/dsh-turn-rewind)
- **dsh-plugin-bridge** — 通过可预览的五段式交接，将已有 DSH 会话迁移到另一个 Agent Preset；保留源会话，并可让目标会话暂停等待确认或立即继续。
  `v0.5.0` · 引擎 `>=0.1.0-rc.7 <0.2.0-0 || 0.2.0-rc.2 || >=0.2.1-alpha.1 <0.2.2-0` · [源码](https://github.com/Totoro-qaq/dsh-plugin-bridge)
- **@cerbur/clutch-dsh-title** — 基于语义 prompt 字段与自定义模板的 DeepSeek Harness 确定性会话标题生成插件。
  `v0.1.7` · [源码](https://github.com/Cerbur/clutch-dsh)
- **@sh1robana/dsh-plugin-message-edit** — 面向 DSH 桌面端的消息与附件编辑，支持原地保存、分支重生成和版本时间线。
  `v0.3.2` · 引擎 `0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/sh1robana/dsh-plugin-message-edit)
- **dsh-argp** — DeepSeek Harness 守卫式上下文压缩——LLM 提议、确定性守卫裁决：逐原子缩放（verbatim 守卫下 extract/summary/false）+ 引用图延迟剪枝（0-LLM）+ append-only 日志逐字节精确召回。
  `v1.10.1` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/yoza10635/dsh-argp)
- **dsh-pause** — 在模型完成一轮工具交互、正要发出下一次请求之前暂停，输入框保持可用：裸回车或点按钮放行，草稿有字则随本次请求一并发出作为插话；不打断任何在途 API 调用，模型上下文完整、察觉不到暂停。
  `v0.1.4` · [源码](https://github.com/better-er/dsh-pause)
- **dsh-codexlike-projectless** — 提供类似 Codex 的无项目草稿、各项目草稿切换及首次发送时按日期和主题创建目录的功能；支持 Windows DSH Desktop 0.2.1-rc.2，无需归档补丁或外部安装器。
  `v1.1.0` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/NoProblUm/dsh-codexlike-projectless)
- **@noob-stupid/dsh-connection-card-host** — 把两个 DSH 会话之间的「连接」做成一等对象：从输入框锚点或会话行拖拽建连，两个方向各自设权限，并可在连接上装载卡片。两端各获得五个宿主工具，用于按指定紧急度传话、读取对端工作状态、共用公约盒；感知为拉取式，空闲连接不占上下文。
  `v1.0.82` · [源码](https://github.com/Noob-stupid/dsh-connection-card-host)
- **dsh-compaction-policy** — 让 DeepSeek Harness 不再过早压缩对话（把早期内容总结掉）。默认行为下，上下文窗口不大的模型（十几万 token 那种）常常在半满出头就开始压缩；装上它之后，压缩会等你设定的比例（默认 80%）到了才发生，并且可以按 provider/model 分别设置。它只改“什么时候压缩”，一次压缩保留哪些内容仍…
  `v0.1.2` · [源码](https://github.com/zyd232/dsh-compaction-policy)
- **dsh-compact-suite** — 接管所有已挂载压缩引擎的触发阈值：把 headroomTokens 强制成 −1e6，使比值成为触发点的唯一决定项；在每条下发路径上保证保留量低于触发点；把压缩调用改派到指定模型；并提供一键立即压缩与本会话压缩记录面板。
  `v2.9.2` · [源码](https://github.com/NoiraBaka/dsh-compact-suite)
- **better-dsh-session-deletetool** — 从 DSH 中永久删除会话，并可选择递归删除派生对话和子智能体会话。
  `v0.5.3` · [源码](https://github.com/Lzcdebear/better-dsh-session-deletetool)
- **dsh-prompt-easymanager** — 可以自行选择在全局范围或单独会话中增加个人提示词、修改系统提示词来工作，各会话互不影响。
  `v0.3.9` · 引擎 `>=0.1.7-rc.2 <0.2.0-0 || >=0.2.0-rc.1 <0.2.1-0 || >=0.2.1-alpha.1 <0.3.0-0` · [源码](https://github.com/XialerMoies/dsh-prompt-easymanager)
- **dsh-side-chat-plus** — 选中对话片段，在右侧面板的侧边聊天中提问（按会话隔离）；AI 回复可原文或摘要后带回主会话。
  `v0.5.0` · [源码](https://github.com/heartmove/dsh-side-chat)
- **dsh-session-bridge** — 会话桥：让当前 agent 直接用提示词驱动其它真实的 DSH 会话——跨工作区创建主会话、向任意会话发消息或注入 steering、等待并逐段读取回复（含思维链）、恢复离线会话、按名称或 id 跨工作区查找会话；还能用后台看门狗监控并调度主任务（卡住催办、偏离纠偏、卡死终止），一键归档会话。
  `v0.7.0` · 引擎 `>=0.1.7-0` · [源码](https://github.com/heartmove/dsh-session-bridge)
- **@weibaohui/dsh-favorites** — 会话收藏夹：把任意会话收藏进浏览器收藏夹式的管理面板——左侧会话行一键收藏/星标，主面板支持文件夹分门别类、备注、自定义显示名、一键继续会话、Fork 新会话、会话基本统计，外加一张清晰展示会话派生关系的 fork 关系图。
  `v0.1.1` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/weibaohui/dsh-favorites)
- **@weibaohui/dsh-continue** — 自动续跑：agent 会话中断后自动续上，规则表按失败类型（限流/额度/鉴权/上下文超限/崩溃孤儿）路由——自动退避重试、换模型继续、压缩上下文后继续或止损通知，规则可视化编辑，全程活动日志。
  `v0.3.11` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-continue)
- **smart-compaction** — 让模型自己挑安全时机触发压缩：提供 compact_now 工具（回合进行中也能用），另有 context_status 工具，按会话真实的上下文窗口报告 token 占用。
  `v0.3.12` · [源码](https://github.com/JoblessJoe/smart-compaction)
- **dsh-session-continuity** — 新会话开始时注入一条很小的接续指针，说明上一个会话是谁、工作区有没有交接文档；没有交接文档时复用 DSH 已有的压缩摘要。
  `v0.3.2` · [源码](https://github.com/ymck-x/dsh-session-continuity)
- **dsh-archive-purge** — 无论侧栏「归档显示」如何设置都强制隐藏已归档会话，并提供管理面板：取消归档，或彻底删除会话日志目录、归档与置顶登记及投影缓存。
  `v1.0.2` · [源码](https://github.com/joyboy-yy/dsh-archive-purge)
- **@internetnutzer/dsh-asc** — 由模型主导的 DeepSeek Harness 上下文压缩：由 agent 决定何时压缩、压缩什么，以持久化会话日志替换提交，并提供可逆的工具结果压缩与逐字节哈希取回。
  `v0.4.1` · [源码](https://github.com/JanEickholt/dsh-asc)
- **@goodandready/dsh-session-control** — DSH 侧边栏会话管理：固定对话、搜索内容、读取归档记录并隐藏噪音。
  `v0.2.10` · [源码](https://github.com/GooDAnDReaDY/dsh-session-control)
- **dsh-share-room** — 用一次性链接邀请别人加入同一段对话，不需要账号：最多 20 位访客一起讨论、一起问 AI，分享用的 fork 以只读权限运行，所有者可以随时移除访客或结束分享。
  `v0.2.0` · [源码](https://github.com/yillkid/dsh-share-room)
- **dsh-highlightpin** — 把已定稿的用户或助手消息里划选的一段原文钉住，让它在上下文压缩后仍留在模型输入中：每枚钉子默认按需补回，也可改为 resident（中性常驻系统提示词）或 highlight（强调常驻）。选区会以 source-exact、source-normalized 或 rendered…
  `v0.1.2` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/sbearbug/dsh-highlightpin)
- **dsh-compact-saviour** — 使用专用模型处理上下文压缩恢复，并在原生上下文弹窗提供手动压缩。
  `v0.2.8` · [源码](https://github.com/aa2246740/dsh-compact-saviour)
- **dsh-session-radar** — DSH Web 侧边栏的未读、待办与状态读数中枢：铃铛按顺序定位未读会话，快捷键依次走到正在等你输入的会话，⌘⇧, / ⌘⇧. 在访问过的对话之间前后切换；另有总览把未读与待决策会话分两区铺开；底部一行六项会话状态读数，每个图标都能点，点了跳到下一个同类会话；账本落在 host…
  `v1.5.0` · [源码](https://github.com/d0ublecl1ck/dsh-session-radar)
- **dsh-session-title-pattern** — 把 dsh 会话标题统一成「日期｜类型｜主题」（类型与主题由模型对整段对话总结），并支持可逆的会话隐藏：暂时不用的会话从侧边栏收起，不删除、随时一键显示回来。
  `v0.8.9` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/cq-guojia/dsh-session-title-pattern)
- **dsh-session-recycle-bin** — DSH 会话回收站：侧边栏删除图标、多选还原与彻底删除、活跃会话保护。
  `v0.5.0` · [源码](https://github.com/Seetraum/harness-session-delete)
- **dsh-plugin-workspace-archive** — 工作区文件夹被删除或移走、或工作区登记被移除时，自动归档其会话；目录或登记回归时恢复：只取消归档本插件归档过的会话，把台账记过的全部成员挂回分组（含你手动归档的会话，且不改其归档状态），并把「无项目」里工作目录正是该工作区路径的会话归位。
  `v0.2.0` · [源码](https://github.com/WindFromKadath/dsh-plugin-workspace-archive)
- **dsh-session-link** — 复制、打开 `dsh://` 会话深链，或将其粘贴到另一对话中，注入被引用会话的受限只读快照。
  `v0.2.5` · 引擎 `^0.1.7-rc.1 || ^0.2.0-rc.2` · [源码](https://github.com/PwnKY/dsh-session-link)
- **dsh-session-inherit** — 会话菜单新增「继承」：把长会话里的具体锚点（任务原文、最近的用户指令、改过的文件、最近的失败、命令、待办）机械提取成交接单，在干净的新会话里接着干——预设默认一并继承，不复制历史，也不调用模型。
  `v0.5.5` · [源码](https://github.com/MacilyDots/dsh-session-inherit)
- **dsh-compact-selected-model** — /compact 与自动压缩使用会话中当前选中的模型来生成摘要，而不是用跑完上一轮的那个模型。
  `v0.1.1` · [源码](https://github.com/DenAbr/dsh-compact-selected-model)
- **dsh-whale-post-bus** — DeepSeek Harness 会话之间的文件信箱：每封信都用 HMAC 与正文摘要封好，收件人通过名单接口解析，默认离线投递——投不出去的信留在信箱里等人来收，不会丢。
  `v0.6.1` · [源码](https://github.com/deepsleepAquarium/dsh-whale-post)
- **dsh-lorebooklike-prompt-tool** — 类世界书的 DSH 提示词规则：分层系统提示锚点、蓝绿灯条目、可复现概率门与正则替换。
  `v0.1.1` · [源码](https://github.com/erlingmijiang/dsh-lorebooklike-prompt-tool)
- **dsh-share** — 一键分享你的对话。
  `v0.5.0` · [源码](https://github.com/hellodigua/dsh-share)
- **dsh-session-export** — 会话证据报告：/transcript 从权威日志生成 HTML/Markdown/JSON 报告，/stats 输出终端统计卡，/archive 打包单会话 ZIP。
  `v1.8.6` · [源码](https://github.com/kittimzhe/dsh-session-export)
- **@chushiz/dsh-archive-manager** — 归档会话管理插件：按工作区分组浏览，FTS5 全文检索会话内容并展示多条命中摘要，支持恢复并打开与彻底删除。
  `v0.6.3` · [源码](https://github.com/ChuShiZ/dsh-archive-manager)
- **dsh-cross-session-agent-pre** — 支持 DSH 跨工作区消息与发送方导航、同工作区受限上下文，以及可选的当前环境 Claude Code 双向通信。
  `v0.2.0-rc.2.7` · 引擎 `0.2.0-rc.2` · [源码](https://github.com/XiaoMa-PM/dsh-cross-session-agent-pre)
- **dsh-session-path** — 复制会话日志路径（或可直接粘贴的接续块），并把多帧 zstd 会话日志转成可读文件，供另一个会话读取接续。
  `v0.1.2` · [源码](https://github.com/439436269-ctrl/dsh-session-path)
- **dsh-attention-health** — 内容退化检测（思考打转、输出复读）+ 继续/交接成本裁决 + 零模型交接文档。
  `v0.1.3` · [源码](https://github.com/donghangxunlang-cmd/dsh-attention-health)
- **dsh-web-search-session** — 让 DSH 网页搜索改走当前会话模型加自建检索后端。
  `v0.1.1` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/YDT-china/dsh-web-search-session)
- **dsh-tree-view** — DSH 会话的树形视图：编辑一条旧消息即从那一刻分叉，所有版本住进同一棵树、侧栏始终只有一条，分支可以改名，也可以把某个分支提升为独立会话。
  `v1.2.3` · 引擎 `>=0.1.5-rc.2 <0.3.0-0` · [源码](https://github.com/Rice00/dsh-tree-view)
- **dsh-handoff-button** — 为每条 AI 回复添加 Handoff 按钮，点击后由 LLM 将当前会话总结为交接文档，写入该会话工作区的 handoff/ 目录。
  `v0.1.6` · [源码](https://github.com/whiteS18/dsh-handoff-button)
- **dsh-maze** — 执行迷宫：把智能体真实的执行过程——主干推进、失败或扑空的支路、折返、请求重试与子代理分支——画在同一根墙钟时间轴上；泳道下方是与它共用时间轴的三条数据轨道（工具调用密度、Token 脉冲、上下文压力），再下方是确定性的执行分析面板（工具结果矩阵、失败恢复链、耗时分布）；可在会话页签里实时生长，也可上传最多 5 个…
  `v2.4.0` · [源码](https://github.com/lamost423/dsh-maze)
- **dsh-session-remover** — 在侧栏会话行菜单中增加「删除对话」与「批量删除」；删除的对话及其子代理会话移入 Windows 回收站，可从回收站还原。
  `v1.0.1` · [源码](https://github.com/sailoumili/dsh-session-remover)
- **@kagurazakayashi/dsh-delete-session** — 在侧边栏会话行菜单中加入「删除会话」项，确认方式可配置（再次点击、对话框确认或直接删除），正在执行任务的会话会被拒绝删除。
  `v1.2.2` · [源码](https://github.com/kagurazakayashi/dsh-delete-session)
- **dsh-plugin-no-workspace** — 无需强制绑定工作区即可新建和分离独立会话，同时保留 DSH 原生的工作区界面。
  `v1.2.1` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/SpookySandwich/dsh-plugin-no-workspace)
- **dsh-plugin-message-edit** — 编辑已发送的消息即可从该轮次回溯并分叉对话，用气泡下方的计数器切换版本，并在轮次级版本树中浏览所有分支。
  `v1.2.1` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/SpookySandwich/dsh-plugin-message-edit)
- **dsh-session-telecom** — 复制会话 ID、向在线或已保存的会话发送消息，并查看会话 token 用量。
  `v1.1.0` · [源码](https://github.com/ltmroberthk915/dsh-session-telecom)
- **dsh-session-pin** — 把会话与工作区置顶到 Web 侧边栏顶部：行级图钉与换色、会话头开关、已置顶面板；0.4.0 再加导航组织器——Pin 分组（boards）、标签与保存视图、会话健康摘要与 /goto。
  `v0.7.19` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-session-pin)
- **@ne-ilyxa/dsh-session-drafts** — Cursor 风格的新会话：每次点击都新建一个空白草稿会话（首条消息前即持久化），不再复用工作区唯一的空会话；侧栏新增草稿切换器，可同时保留多个空会话。
  `v0.7.0` · [源码](https://github.com/ne-ilyxa/dsh-session-drafts)
- **dsh-session-mgr** — 在 DeepSeek Harness 网页界面中跨工作区移动、归档、恢复、可携式备份/导出与导入会话。
  `v0.6.8` · [源码](https://github.com/mienfong/dsh-session-mgr)
- **@stmol/dsh-prompt-lib** — 提示词库存放在插件配置中，含 Settings 页面与输入框选择器：勾中的提示词注入该会话的每一步模型调用，subagent 继承其最近祖先会话的选择。
  `v1.0.1` · [源码](https://github.com/Stmol/dsh-prompt-lib)
- **dsh-save-chat** — 把整轮问答（问题 + 完整回答）存成工作区里的纯 Markdown；把值得留的提升进跨项目个人知识库，模型可按需检索。无数据库、零运行时依赖。
  `v0.1.2` · [源码](https://github.com/xypang33-sketch/dsh-save-chat)
- **dsh-recap** — 通过 /recap 或闲置触发回顾当前 DeepSeek Harness 会话，支持配置模型、中英文输出，并在对话内展示可展开的摘要。
  `v0.1.0` · [源码](https://github.com/lolipop-1x1/dsh-recap)
- **dsh-chat-tree** — 把一个对话的所有分支画成聊天区旁边的一棵可点击的树，支持收藏、自定义图标与颜色、分支合并与拆分、撤回感知的布局，以及带记忆的 Claude Code 分支。
  `v0.2.2` · [源码](https://github.com/JRJRJPRO/dsh-chat-tree)
- **dsh-session-toolkit** — 整合工具包：会话身份、全局/工作区提示词（含引用文件）、会话自动上线、免 UAC 网页重启、会话间消息。
  `v1.0.0` · [源码](https://github.com/Han-Yao94/dsh-session-toolkit)
- **@wsxwj123/dsh-session-manager** — 会话删除（5 秒可撤销 + 回收站）与归档视图（查看、取消归档）。npm 包名 `@wsxwj123/dsh-session-manager`。
  `v0.1.2` · [源码](https://github.com/wsxwj123/dsh-plugins)
- **dsh-session-hotkeys** — Web 会话热键插件：像切浏览器标签页一样用键盘管理会话——Alt+1-9 顺序切换、固定槽位、上/下一个、新建/归档/重命名、Alt+M 键盘切换模型与备用发送、Esc 焦点交接，Alt+W 关闭/恢复 dsh-split-screen 工作区；键位可在面板录制重绑，Windows/macOS 双预设。已适配…
  `v1.9.5` · [源码](https://github.com/YEYEYEYESHIFU/dsh-session-hotkeys)
- **dsh-bookmarks** — 收藏 AI 回复（备注/标签），跨会话收藏中心（搜索/筛选/跳回会话），一键导出 Markdown。
  `v0.1.5` · [源码](https://github.com/penguin-oo/dsh-bookmarks)
- **dsh-deephub-share** — 将一条 dsh 会话提炼为脱敏后的思路，端到端加密投递给 DeepHub 上的朋友；收到的思路落为一条新会话。
  `v0.0.21` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/Voellin/dsh-deephub-share)
- **@bananasoldier01/dsh-tidychat** — 已完成轮次折叠成最终结论、思考与正文之间插入分隔线、可贴左缘或右缘的定位条（横线 / 圆点标记、可选外圈、悬停摘要 + 点击跳转）；还可隐藏宿主原生右缘 TurnNavigator、加载更早历史、一键打开预填好的诊断报告 issue。
  `v0.4.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/BananaSoldier01/dsh-tidychat)
- **dsh-belief-merge** — 把其他会话的上下文合并进当前回合：按证据裁决冲突、前提被撤回时同步撤回结论、用信任格抵抗跨会话提示注入，并在 token 预算内打包。附带评测基准。
  `v0.3.2` · [源码](https://github.com/aLIZELI/belief-merge)
- **@yeastcloud/dsh-anchor** — DSH 会话指令定锚：新会话的第一个 step 把自由组合的指令块作为插件来源消息注入，之后在完成压缩、跨过设定轮数、或计量到的上下文压力越过阈值时重锚。`/anchor` 命令可按需定锚且不触发模型调用；设置页管理分页预设库、注入顺序、重锚来源与字数上限。
  `v0.14.0` · [源码](https://github.com/yeastcloud/dsh-anchor)
- **@wisdoverse/dsh-inline-media-viewer** — 在 DSH 对话中内联显示图像、视频和音频路径及 URL，并提供工作区受限的本地读取与可选的 ComfyUI 代理。
  `v1.0.12` · [源码](https://github.com/Wisdoverse/dsh-inline-media-viewer-plugin)
- **@hjdd14/dsh-toolong-warning** — 统计每段对话成功完成的压缩次数并常驻悬浮窗，只有反复压缩过、且此后又烧掉大量 token 或上下文占用过高时才提醒；三个阈值都可在设置页调整。
  `v0.3.0` · [源码](https://github.com/Hjdd14/dsh-toolong-warning)
- **dsh-session-repair** — 诊断并安全修复损坏的 DSH 会话历史：raw zstd/JSONL 校验、tool-call ID 修复、单槽 pre-repair 备份与恢复、审计记录。
  `v0.7.0` · [源码](https://github.com/Zn-Dk/dsh-session-repair)
- **@kyle123740/dsh-message-recall** — 给会话里的每条消息加上「撤回 / 删除 / 删除此处及之后」悬浮按钮：以 append-only 墓碑让内容同时从模型上下文与对话界面消失，带空内容兜底，旧删除不会打回严格校验的 provider。已实测支持 DSH 2.0 桌面版。
  `v0.2.1` · [源码](https://github.com/kyle123740/dsh-message-recall)
- **dsh-session-keepwarm** — 让浏览器最近用过的会话保持常驻：切走再切回来直接复用已加载的历史、不再重新读取；常驻数量可配置，并可整体关闭。
  `v0.1.1` · [源码](https://github.com/dzwalker/dsh-session-keepwarm)
- **dsh-message-datetime** — 每轮对话开始向模型上下文注入单行时间戳读数（星期 / 日期 / 时间 / UTC 偏移 / IANA 时区），收尾再注入 Turn ended 关闭读数——模型始终知道现在几点、今天星期几、上一轮何时结束，日期运算与跨轮间隔不再靠猜；轻量时钟感知，每条约 30 token。
  `v0.1.2` · [源码](https://github.com/john-walks-slow/dsh-message-datetime)
- **@max-null/dsh-chinese-thinking** — 注入一条固定 system-prompt 段落，让 Agent 无论用户使用什么语言都始终用中文思考和回复。
  `v0.3.1` · [源码](https://github.com/Max-Null/dsh-chinese-thinking)
- **dsh-prompt-stash** — 本地、按会话隔离的 LIFO 输入暂存：临时收起未完成的输入，之后安全恢复并继续编辑。
  `v0.3.2` · [源码](https://github.com/Wine-Red/dsh-prompt-stash)
- **dsh-session-workbench** — 会话工作台：全文搜索历史会话、一键 @引用 召回最多 3 个，并管理会话视图标签栏（显示/隐藏 + 拖拽排序）。
  `v1.0.3` · [源码](https://github.com/PolinniZhong/dsh-session-workbench)
- **@weibaohui/dsh-smart-title** — 会话智能标题：每轮对话结束后用一次独立的辅助 LLM 调用对「用户消息+助手回答」的完整转写做总结，标题跟随会话真实主题而不是复述第一句话；首条消息即时出题、内置标题失败在后续轮次自动重试、用户手动改名绝不被覆盖、自动跳过子代理与 fork 会话。
  `v0.1.8` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-smart-title)
- **dsh-prompt-manager** — 浏览器本地提示词库：在输入框选择器中同时注入多条会话级系统提示词，支持分支继承、中英界面、收藏与 JSON 备份。
  `v1.5.2` · [源码](https://github.com/SaiSenBox/dsh-prompt-manager)
- **dsh-assembly.resume** — 将本地 Codex CLI/Desktop、Claude Code CLI 和 Claude Desktop 会话导入 DSH：按项目分组，保留语义历史和工具活动，可绑定原工作区或新工作区，并由 DSH Agent 继续对话。
  `v0.1.7` · [源码](https://github.com/kanchengw/dsh-assembly.resume)
- **dsh-whats-up** — What's up · 在忙啥——零维护的会话动态看板:host 端扫描全部会话,为每个会话提取「目标 + 一句话现状」(多 provider LLM、按指纹缓存),自动发现做到一半、问了没回、近期在推进的事,点卡片一键跳回会话。
  `v1.2.3` · [源码](https://github.com/delock/dsh-whats-up)
- **dsh-recovery-resume** — DSH 重启后自动续跑被中断的回合：在会话激活后读取崩溃修复写入的 turn/end，投出要求先核对真实状态（不假定外部操作成功或失败）的续跑消息；永久性失败（认证、配额、上下文超限）直接跳过，并有跨重启次数预算、自适应退避与最小上下文注入。
  `v0.1.3` · [源码](https://github.com/flandre2233/dsh-recovery-resume)
- **@wjj-8283/dsh-temp-workspace** — DSH web 临时工作区：一键创建一次性工作区，下次重启自动清空其全部对话（可立即/延迟删除，也可先弹确认框）。点击图钉可永久保留——文件移入所选文件夹、以文件夹名为标题、对话一并迁移，并触发真实的宿主级重启重新索引。
  `v0.1.1` · [源码](https://github.com/wjj-8283/dsh-temp-workspace)
- **dsh-easyrewrite** — 在 dsh web 中内联编辑与撤回自己的消息——惰性、无痕，带版本翻页器与会话级草稿持久化。
  `v2.6.0` · [源码](https://github.com/Renzic-Stone/DSH-EasyRewrite)
- **dsh-session-xc** — DSH 会话管理增强插件 - 工作区会话数展示、归档会话面板（支持恢复/删除）、拖拽移动会话到其他工作区。
  `v0.11.4` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/xchannel1987/dsh-session-xc)
- **dsh-concise** — DeepSeek Harness 一键 Concise 输出风格开关：结果先行、少废话，工作深浅不变。每轮最终回答开头自动附「摘要」精华卡（划选即复制），按会话独立生效，headless/CLI 同样生效，支持 /concise 命令、style.md 自定义风格与本地 API。摘要卡内的链接与文件路径渲染为可点击…
  `v0.11.3` · [源码](https://github.com/hoyyang/dsh-concise)
- **dsh-baize-session** — 把选中的消息从一个对话迁移到另一个对话，并管理工作区的对话——支持归档、还原、删除和跨工作区迁移。
  `v0.1.2` · [源码](https://github.com/bvcvb/dsh-baize-session)
- **dsh-driftwatch** — DSH 会话的行为漂移报告：对比两份 session log，输出工具序列对齐、工具构成、推理量、耗时、重试与文件目标的差异，并支持可选的 CI 阈值门禁。零依赖。
  `v0.1.1` · [源码](https://github.com/Edge-Echo/dsh-driftwatch)
- **dsh-baize-rules** — 在会话开始时向模型注入用户设定的“必须做 / 不能做”持久要求。
  `v0.2.4` · [源码](https://github.com/bvcvb/dsh-baize-rules)
- **dsh-antigravity-bridge** — 在 DeepSeek Harness 里读取 Google Antigravity 的 SQLite 会话并导入为原生侧栏会话，提供 list／read／import 工具与斜杠命令。
  `v0.2.0` · [源码](https://github.com/qvsix/dsh-antigravity-bridge)
- **dsh-my-opencode-session-header** — 为 opencode.ai 的推理请求注入按会话稳定的 x-opencode-session 头，修复 OpenCode Go 网关 400 MissingSessionID；纯 server 插件，无界面（npm: `dsh-my-opencode-session-header`）。
  `v0.1.0` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-turn-hard-delete** — 删除 DeepSeek Harness 会话中的一整轮对话（提问 + 回答 + 工具调用），不影响会话本身。
  `v0.1.0` · [源码](https://github.com/shuanzhe/dsh-turn-hard-delete)
- **claude2dsh** — 将 Claude Code 会话、技能与插件资产导入为 DSH 原生可续聊会话，并支持将 DSH 会话导出或同步回 Claude Code JSONL。
  `v0.3.0` · [源码](https://github.com/kirkchinese/claude2dsh)
- **dsh-conversation-link** — 同一 DeepSeek Harness 进程内对话之间的对等通信：列出工作区里的对话、用昵称连接、发消息而不必等对方当前一轮结束、不唤醒对方地查看进度，并给自己声明工具调用规则。
  `v0.4.3` · [源码](https://github.com/duanyunlun/dsh-conversation-link)
- **dsh-input-rewriter** — 你只管正常打字，停下约两秒，它就把你刚写的话自动改写成更容易得到好答案的样子；贴进来的代码、网址、长文原样不动，一次问几件事也一件不漏、排好顺序。
  `v0.3.0` · [源码](https://github.com/feiertu/dsh-input-rewriter)
- **dsh-knj-session-management** — DSH 会话管理：归档、恢复、删除持久化会话，按工作区限制会话数量上限，并提供体积治理面板。
  `v2026.9.150` · [源码](https://github.com/yangdongzhen590/dsh-knj-session-management)
- **dsh-chat** — 面向 DSH 会话的群聊室：支持明确 @ 提及、冷会话唤醒投递，并可通过 dsh-weave 跨主机通信。
  `v0.1.0-rc.36` · [源码](https://github.com/baixianger/dsh-chat)
- **dsh-bridge** — 面向 DSH Agent 的本地跨会话消息桥：支持会话发现、冷会话唤醒投递与可审计消息记录。
  `v0.1.0-rc.17` · [源码](https://github.com/baixianger/dsh-bridge)
- **smart-session-title** — 会话标题 provider 替换插件：先把过长或代码密集的首条 Prompt 压缩再调用模型（实测 DSH 版本的内建 provider 在超过 4096 bytes 时直接拒绝、不调用模型），遇到纯问候则等待真正的任务。默认使用该会话自身的 provider 与 model，保护人工标题；标题规则支持字数上限、可选日…
  `v0.2.0-rc.1` · [源码](https://github.com/y2zyyr/smart-session-title)
- **dsh-delete-chat** — 在设置页中归档、恢复并删除会话。
  `v0.1.1` · [源码](https://github.com/youqu68/dsh-delete-chat)
- **dsh-history** — 会话历史消息查看：列出当前会话全部你发送的消息，支持排序、搜索、一键复制与点击跳转定位（目标未加载时自动加载更早历史）。
  `v0.1.25` · [源码](https://github.com/chenproton/dsh-history)
- **dsh-archived-conversations** — 侧边栏底部的已归档对话列表，可只读预览最近消息；针对产品刻意隐藏且无法重新打开的归档会话。
  `v0.3.2` · [源码](https://github.com/AKS1st/dsh-archived-conversations)
- **dsh-composer-enter** — 让 DSH 0.1.5 Web 输入框使用 Enter 换行，同时保留 Cmd/Ctrl+Enter 提交消息。
  `v0.1.0` · [源码](https://github.com/wx-yss/dsh-composer-enter)
- **@lyxx/dsh-session-autotitle** — DSH 会话自动重命名（session rename）：基于全部会话消息的 LLM 总结标题，首条提示词与 /handoff 后自动命名，会话头按钮或 /autotitle 手动触发，标题语言与最大字节数可设置。
  `v0.2.3` · [源码](https://github.com/lyxx999/Automatic-session-renaming-for-dsh)
- **@frog755/dsh-client-auto-retry** — 回合中断自动续跑：turn/end 因 error / interrupted / max-tokens 结束时自动发送「继续」，支持宽限期、冷却、指数退避、连续次数上限、启动扫描、设置卡片，以及输入框工具行的会话级停止/恢复按钮；不切换模型/provider。
  `v0.4.0` · [源码](https://github.com/Frog755/dsh-client-auto-retry)
- **dsh-session-sweeper** — 会话清道夫：在 DSH 设置中扫描、查看并安全清理当前环境 AI 终端会话历史（Claude Code、Codex CLI、WorkBuddy、DSH），隔离优先、带 SHA-256 清单与一键整批恢复，彻底删除需输入确认短语。
  `v1.0.10` · [源码](https://github.com/HrxSpace/dsh-session-sweeper)
- **dsh-session-ref** — 跨会话引用插件：在任意会话（含其他工作区）粘贴 @[label](dsh-session:…) 引用，宿主注入被引用会话的快照供模型阅读，并提供一键复制引用按钮。
  `v0.2.0` · [源码](https://github.com/lacemou/dsh-session-ref)
- **dsh-session-robustness** — 官方 llm-retry（n/5）耗尽后，对超时/传输/限流/5xx/SSE 断流等瞬时失败在同一打开 step 上继续重试直到成功、取消或暂停；认证失败、额度耗尽和用户停止不会重试。
  `v0.1.6` · [源码](https://github.com/bainianlaoyao/dsh-session-robustness)
- **dsh-branchmark** — Vibe Coding 时，如果突然想到另一个问题，或者看到一段以后还会用到的回答，可以先保存下来、在 Side Chat 里快速问清楚，或另开一个相关会话继续研究，不打断当前任务的开发思路和注意力。
  `v0.1.2-rc.2` · [源码](https://github.com/zaizaizhao/dsh-branchmark)
- **dsh-session-pruner** — 全类型会话生命周期管理：一次性子 agent 完成后归档，闲置的可续聊子 agent 与主会话归档（可恢复），容量上限、投影缓存清理，以及热重载设置面板。
  `v0.3.3` · [源码](https://github.com/mrzhangkris/dsh-session-pruner)
- **@heeweelee/dsh-session-plugin** — 在输入框内按 ↑/↓ 回填历史消息，并支持右键归档（隐藏）工作区会话。
  `v0.1.11` · [源码](https://github.com/Heeweelee/dsh-session-plugin)
- **dsh-plugin-canvas** — 无限会话画布，区域绑定工作区与智能体预设，可钉住会话卡片、放置便签，带对齐参考线。
  `v0.1.0` · [源码](https://github.com/ijry/DeepSeek-Harness-Desktop-Ultra)
- **dsh-plugin-archived-conversations** — 在设置界面管理已归档对话：一键取消归档，或经确认后永久删除。
  `v0.1.4` · [源码](https://github.com/leogottadothebest/dsh-plugin-archived-conversations)
- **dsh-messages-sanitizer** — 工具调度崩溃后自动修复 messages 数组（孤儿 tool_calls / tool 消息），防止 400 INVALID_REQUEST 会话卡死。
  `v0.1.1` · [源码](https://github.com/Leeminjing/dsh-messages-sanitizer)
- **@shendeguize/dsh-agent-sidecar** — 跨 agent 看板监控当前环境 AI agent 会话（cursor-ide、claude、codex、copilot、kimi 及 dsh 自身），提供会话时间线，并可经默认关闭的两阶段确认门注入消息。
  `v0.11.3` · 引擎 `>=0.1.1-rc.2` · [源码](https://github.com/shendeguize/AgentSideCar)
- **dsh-darwin-sentinel** — 会话体检：基于官方 session-query 接缝，机械挖掘会话日志为结构化问题工单（重试环/工具错误簇/中断回合/Token 浪费）；可独立安装使用。
  `v0.1.1` · [源码](https://github.com/que3sui/dsh-darwin)
- **dsh-file-claim** — 同一工作区并行多会话的文件认领与写入保护（claim/release、心跳 stale 接管、pending 三路合并）。
  `v0.2.0` · [源码](https://github.com/Nwflower/dsh-file-claim)
- **dsh-tool-call-guard** — 在 wire 层中性化 arguments 为非法 JSON 的 tool call，避免一次模型畸形输出让 session 在严格 OpenAI 兼容服务端上永久 400。
  `v0.1.1` · [源码](https://github.com/alchemistwu/dsh-tool-call-guard)
- **dsh-agent-message** — DeepSeek Harness 跨会话 Agent 通信：支持会话发现、离线投递、投递回执与发送方会话导航。
  `v1.6.0` · 引擎 `>=0.1.1-rc.2 <0.2.0` · [源码](https://github.com/GengDaPeng/dsh-agent-message)
- **dsh-side-chat-plus-plus** — DeepSeek Harness 多标签侧聊增强：可引用整条消息，也可在回复生成中选中文本追问（无需等待回复完成）；右侧停靠面板随 better-sidebar 开关在覆盖与让位间自动切换。
  `v0.1.4` · [源码](https://github.com/anzhaohao/dsh-side-chat-plus-plus)
- **dsh-channel-view** — 侧边栏注入的按渠道分组会话视图——工作区/Channels 双标签、运行中绿点、归档折叠与孤儿工作区标注，完全基于官方扩展面实现，兼作 RFC-0001（discussion #3897）的参考实现。
  `v0.0.1-spike.2` · [源码](https://github.com/RGarvel/dsh-channel-view)
- **task-passport** — 通过机器可读检查点与乐观锁，在 DeepSeek Harness、WorkBuddy、Claude Code 和 Codex 之间交接持久任务状态。
  `v0.3.1` · [源码](https://github.com/dongsheng123132/task-passport)
- **dsh-undo-plugin** — 对话与工作区撤销：通过 /undo 节点轴、会话头部按钮或消息下方图标回滚到任意已发送 prompt 之前；插件私有 Shadow Git 快照恢复文件，被回滚回合不会进入模型上下文，误操作还能“撤回回滚”。附带归档会话管理与工具卡片分类配色。
  `v0.1.0-rc.8` · [源码](https://github.com/23swccp/dsh-undo)
- **dsh-nested-followups** — 从任意层级的已完成回答持续创建隔离分支，主会话始终不受影响。
  `v0.2.2` · [源码](https://github.com/sluminositys/dsh-nested-followups)
- **dsh-local-share** — 把完整 Web Session 导出为本地 Markdown 或自包含 HTML，提供稳定的 Markdown 渲染预览、默认脱敏和可选的有界工具调用详情。
  `v0.4.1` · [源码](https://github.com/ChuanTianML/dsh-local-share)
- **dsh-context-console** — 上下文控制台：通过轨迹墙与库存视图检查并模拟 DSH 上下文消费，并由内置消息锻造台创建、注入、导入或安全修复会话消息。
  `v0.1.0` · [源码](https://github.com/anweat/dsh-context-console)
- **dsh-checkpoint-diff** — 把 dsh-checkpoint-rewind 产生的检查点变成时间线时间节点，任意两节点之间逐文件行级 diff；可从会话日志重放 trace 区间差异（无需快照生产者）；支持预览式工作区回滚与一次性撤销。提供 /diff、/rollback 命令、JSON HTTP API 与 GUI 面板。
  `v0.5.2` · [源码](https://github.com/tmpdot/dsh-checkpoint-diff)
- **dsh-air** — DSH Web 输入框增强：跨会话召回已发送提示词、用 Ctrl+R 搜索并还原富草稿，以及提供停靠式 /btw 或 /side 旁路会话。
  `v0.1.2` · [源码](https://github.com/kaieye/dsh-AIR)
- **dsh-session-categories** — 为 Web 侧边栏添加按 Workspace 隔离的分类树，支持嵌套分类、拖拽归类会话、在分类中新建会话，以及删除分类时归档其中的会话。
  `v0.1.0` · [源码](https://github.com/ht719/dsh-session-categories)
- **dsh-message-copy-enhance** — 将助手消息中选中的内容复制为 Markdown，保留链接、LaTeX 源码与代码块语言信息。
  `v0.2.1` · [源码](https://github.com/Asianfleet/dsh-message-copy-enhance)
- **dsh-conversation-exporter** — 将当前 DSH 对话或选定轮次导出为干净、易读的 Markdown。
  `v0.3.0` · [源码](https://github.com/liuyuelintop/dsh-conversation-exporter)
- **dsh-session-lens** — DeepSeek Harness 的会话洞察，并可一键导出为可分享的 HTML 回放。
  `v0.1.0` · [源码](https://github.com/bobostudio/dsh-session-lens)
- **dsh-archive-manager** — DSH Web UI 的归档会话管理器：重新打开已归档会话并继续对话、取消归档恢复原位、彻底删除会话，支持分组浏览、消息搜索与原生视图同步。
  `v1.1.1` · [源码](https://github.com/jasonrale/dsh-archive-manager)
- **dsh-queue-plus** — DSH 排队消息增强面板，支持编辑、删除、插话、排序和批量删除。
  `v0.3.0` · [源码](https://github.com/starslittle/dsh-queue-plus)
- **dsh-session-plus** — DSH Web 侧栏归档目录：将会话恢复到原工作区槽位、删除会话日志，或从用户消息修改并分支为新会话。
  `v0.1.1` · [源码](https://github.com/SZMY-haruhi/dsh-session-plus)
- **@steven-wu/dsh-linked-folders** — 多文件夹工作区：全局链接文件夹列表 + 会话内临时挂载（link_folder/unlink_folder），侧边栏管理并支持系统选目录。
  `v0.1.0-rc.6` · [源码](https://github.com/Sttrevens/dsh-linked-folders)
- **dsh-unarchive** — 列出已归档会话、预览内容、恢复到原工作区，并提供可选的归档二次确认。
  `v0.1.9` · [源码](https://github.com/uwu9039/dsh-unarchive)
- **dsh-message-edit** — 基于分支的消息编辑、reroll、重试与版本时间线。
  `v0.2.3` · [源码](https://github.com/Moeblack/dsh-message-edit)
- **dsh-period-report** — 自由周期会话报告：任意日期区间的 AI 叙事日报/周报/月报，支持每隔 N 天定时提醒并弹系统通知（macOS / Linux）。
  `v0.2.1` · [源码](https://github.com/zhengjy01/dsh-period-report)
- **dsh-minimal-first-turn** — Web 根会话的首轮精简：先使用持久 bash 与 str_replace_editor，移除自动工作区和技能上下文；首次工具调用或回复后恢复所选预设，带持久 composer 开关。
  `v0.1.0` · [源码](https://github.com/ZRui-C/dsh-minimal-first-turn)
- **dsh-plugin-session-import** — 把 claude-code / codex / reasonix / zcode 的聊天历史导入为 dsh 会话：工作区绑定、工具调用保留、超长会话保护、zcode 压缩还原。
  `v0.1.1` · [源码](https://github.com/huguangyu666/dsh-plugin-session-import)
- **dsh-plugin-solo-thinking** — 可视化分支头脑风暴：为每个方向创建独立 Session，自动处理父子继承、兄弟感知、进展与回传 Handoff，并提供完整树形 Tab 与可选 Better Sidebar 右栏。
  `v0.1.18` · [源码](https://github.com/fredalxin/dsh-solo-thinking)
- **@zljr/dsh-share** — 将当前会话以只读、token 保护的 HTML 快照分享到局域网，附带会话统计与 Markdown 渲染。
  `v0.1.1` · [源码](https://github.com/zljr/dsh-share)
- **dsh-incognito** — 无痕会话：独立临时子 Agent（独立 preset 不继承父会话、全量工具集），浮窗可拖动，关闭即焚毁、磁盘零痕迹。
  `v0.1.0` · [源码](https://github.com/HuiHuitie-zhu/dsh-incognito)

## 开发与运行时 · dev（232）

- **@exagone313/dsh-podman** — 让 agent 的 shell 与文件工具在一次性 Podman 容器中运行，默认只能访问工作区项目；同时提供容器、镜像、卷与机密管理，部分操作需审批。
  `v1.7.0` · [源码](https://github.com/Exagone313/dsh-podman)
- **dsh-dupguard** — 同一字符串连续重复达到阈值（默认 10 次）时截停本次生成，已生成内容照常提交；截停后弹出通知，显示所属工作区、会话名称与重复的字符串。重复次数可按单元长度用分段表或 JS 模块决定，代码区域（围栏 / 行内 / 缩进）使用放宽的阈值。
  `v1.12.2` · [源码](https://github.com/zqh260619/dsh-dupguard)
- **@michengai/dsh-skills-manager** — 在设置里管理本地 DSH 技能，并只读查看公共 Agent 技能。
  `v1.2.18` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-skills-manager)
- **@michengai/dsh-simplify** — 提供 /simplify 命令，让 Agent 在选定的 Git 变更范围内简化代码，支持暂存变更、提交及未跟踪文件。
  `v1.0.4` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-simplify)
- **@zhangj1164/dsh-github-issue** — 面向 DSH 的 GitHub issue 服务：把遥测失败分析整理成统一格式的 issue 报告，构造预填的新建 issue 链接并在超出配置长度时裁剪正文，再用部署配置的模型把一段自然语言描述改写为结构化 issue。
  `v0.2.0` · [源码](https://github.com/zhangj1164/dsh-mega-plugins)
- **@zhangj1164/dsh-telemetry** — 面向 DSH 插件的本地遥测服务：把操作轨迹与错误事件写入 storage-domain KV 表，在写入前按可配置的规则集脱敏，并在分析读回早于规则存在的旧记录时再次按同一规则集脱敏，然后按功能码锚点聚合单个插件的失败事件，同时报告读取的时间窗口、每个失败组的模型路由，以及按写入顺序统计的最近一次失败之后的尝试次数。
  `v0.3.0` · [源码](https://github.com/zhangj1164/dsh-mega-plugins)
- **@agent_forge/forge-dsh** — 为 DeepSeek Harness 提供 Forge 质量门禁：任务门禁、改前必读、危险命令拦截与质量评分，经 DSH 类型化拦截点由本地 forge CLI 执行。需当前环境安装 forge CLI，缺失时插件 fail-open 并在会话开始时尽力提示；任务门禁还要求项目已执行 forge init。
  `v1.84.3` · [源码](https://github.com/MjxUpUp/Forge)
- **@jayyuen66/dsh-quality-gate** — 回合收口质量门禁：本回合改过代码或配置时，把改过的文件逐个上溯到项目根，从固定白名单里为该根跑一条检查（`pnpm check` / `cargo check` / `ruff check .` / `tsc --noEmit`）；只有真跑过且失败才带着输出开新轮修复，而不是让回合直接收尾。
  `v0.1.3` · 引擎 `^0.2.1-rc.3` · [源码](https://github.com/JayYuen666/dsh-quality-gate)
- **dsh-refactor-insight** — 重构入口诊断：把代码库坏味道（超长文件/深嵌套/超长函数/上帝对象）转成带定位、优先级与依赖顺序的重构计划（只读不自动改码）。
  `v0.2.0` · [源码](https://github.com/duyanta123/dsh-refactor-insight)
- **dsh-fast** — DeepSeek Harness 的性能剖析与 LLM 缓存诊断：上下文工程、延迟剖析与缓存行为报告。
  `v0.2.27` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-fast)
- **dsh-score** — 为 DeepSeek Harness 插件提供多指标质量评分：基于真实的 CLI 证据对某个仓库或 npm 包在安装成功率、维护活跃度、文档完整度、安全扫描和协议合规五个维度打分，并生成 JSON 或 Markdown 排行榜报告。
  `v0.2.26` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-score)
- **dsh-test-drive** — 在一次性隔离配置中为 DSH 插件执行安装与冒烟测试，返回结构化的通过/失败记录与批量矩阵，不触碰真实配置。
  `v0.3.24` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-test-drive)
- **dsh-cc-ecosystem** — 运行时把 Claude Code 全家桶原样加载进 DSH：.claude/ 的技能、斜杠命令、规则、权限（deny/ask/allow）、子代理与 hooks，以及 Claude Code 插件（plugin.json / marketplace / 技能 / 代理 / MCP）——内存 IR…
  `v0.5.0` · [源码](https://github.com/Bcy2020/dsh-cc-ecosystem)
- **dsh-observe** — 将会话事件流导出为 OpenTelemetry OTLP 与 Langfuse 的脱敏、缓冲 traces 与指标，默认关闭。
  `v0.2.26` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-observe)
- **dsh-repo-scanner** — 只读仓库事实扫描内核：为分析型插件提供可复现的仓库探测、文件索引、模块、依赖、入口、符号与 Git 变更等硬事实（CLI + 库接口 + 技能 runbook）。
  `v0.1.3` · [源码](https://github.com/duyanta123/dsh-repo-scanner)
- **dsh-plugin-health** — DSH 插件的多宿主兼容矩阵、官方 format-1 市场索引生成器，以及只读的 plugin_health 诊断工具。
  `v0.4.2` · 引擎 `>=0.1.0-rc.6 <0.3.0-0` · [源码](https://github.com/EasonMWS/dsh-plugin-health)
- **dsh-cursor-dev** — 把当前环境 Cursor CLI 当作子编码智能体：提供 `cursor_code` 工具与原生一次性 `cursor_subagent` 工具，每次运行镜像为一个真实的 DSH 子会话，可按任务选模型、会话可续聊，返回逐步工具时间线与真实文件 diff，并提供额度、模型和会话面板。
  `v0.12.5` · 引擎 `0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || >=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Dclef/dsh-cursor-dev)
- **dsh-essential-tools** — DSH 永久插件工作台：LVAL 工程工具的编译/运行、代码查看与程序版本快照回退；会话内对话树（就地编辑 / 重新生成 / 分支）与消息小版本；DET 管理器，以及每条记录各带一档启停权限的全局插件库；跨对话记忆、一次性临时对话与模型合作；五档网络权限、混合模型路由、安全审计，以及经配套浏览器扩展的浏览器控制。
  `v2.11.1` · [源码](https://github.com/LLYlab/DSHEssentialTools)
- **dsh-sentry-plugin** — 把 Sentry 接进 DeepSeek Harness：提供 Sentry MCP 服务器的工具、结果卡片，以及可解决、忽略与指派的问题面板。
  `v0.2.2` · 引擎 `>=0.2.0 <0.3.0` · [源码](https://github.com/k0ndrateff/dsh-plugins)
- **dsh-output-styles** — 运行时切换模型输出风格（对标 Claude Code outputStyles），另加 output.render.* 呈现协议：/style 命令、按会话持久化、systemPrompt 注入、六个内置风格、Web 选择器，以及带按会话/按工具规则与 /export 的渲染器注册表。
  `v0.8.2` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-output-styles)
- **@lemoncat7/dsh-ssh** — 为 DeepSeek Harness 提供 SSH 配置、浏览器终端、SFTP 浏览、端口转发、代理与会话级 AI 访问。
  `v1.11.7` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/lemoncat7/dsh-ssh)
- **dsh-market-gist-autosync** — 定时把 DSH 配置备份到私有 GitHub Gist，支持合并恢复。
  `v0.2.0` · [源码](https://github.com/jacket-sikaha/dsh-market-gist-autosync)
- **dsh-preset-doctor** — Agent 预设医生：跨宿主线（0.1.0→0.2.0）扫描 home/profile `cordis.patch.yml` 声明与遗留 `.agent-presets/` 目录，把检测到的每个预设以官方同款卡片展示（来源/代际徽章、失效红边、逐条修复项明细、当前 DSH 版本与代际目录）；卡内「同步到当前版本」走显式…
  `v0.7.5` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-preset-doctor)
- **dsh-pwsh-rtk-rewrite** — 将 web profile 的 pwsh shell 执行器替换为执行前经 `rtk rewrite` 透明改写的子类以节省 token，任何改写失败（无等价、rtk 缺失、超时）都原样执行且沙箱语义完整保留。
  `v1.1.8` · [源码](https://github.com/mengqi1436/DSH-Rtk-rewrite)
- **dsh-noname-kit** — 无名杀扩展开发工坊。AI 在确认协议、校验门禁与区块化写入的保护下编写武将技能与卡牌扩展。
  `v1.10.6` · 引擎 `0.2.1-rc.3 || 0.2.1-rc.2 || 0.2.1-rc.1 || 0.2.0-rc.2 || 0.1.7-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.1 || 0.1.5-alpha.2 || 0.1.5-alpha.1 || 0.1.3-alpha.2 || 0.1.2-rc.1 || 0.1.2-alpha.5 || 0.1.2-alpha.4 || 0.1.2-alpha.3 || 0.1.2-alpha.2` · [源码](https://github.com/qtaik/dsh-noname-kit)
- **@amaster.ai/dsh-langfuse** — 将 dsh 的会话轮次、LLM 调用、工具调用及子 agent 活动记录到 Langfuse。
  `v0.1.32` · [源码](https://github.com/TGYD-helige/dsh-plugins)
- **dsh-webdav-sync** — 通过任意 WebDAV 服务让一台机器上的 DSH profile 与其他机器保持一致。插件收集构成一套配置的五份内容——models（cordis.patch.yml 里的 llm-pi-ai 行）、defaults（agent-default-model 行）、patch（其余 loader…
  `v1.2.2` · [源码](https://github.com/GaoHu1997/dsh-webdav)
- **dsh-app-packager** — uni-app x 项目打包流水线：读取当前环境 HBuilderX 版本，按版本推荐并一键配置对应的 iOS / Android / HarmonyOS 离线 SDK（面板卡片附官方下载入口），再按项目配置调用 HBuilderX CLI 打出、签名并上传；引擎同时以 list / doctor / check /…
  `v0.6.10` · [源码](https://github.com/lw0129a/dsh-app-packager)
- **dsh-mcp-registry** — MCP 连接器（stdio / streamable-http）的受治理注册表：四级 fail-closed 授权、mcpServers JSON 导入对畸形 args 大声报错、输出边界全程脱敏、agent 桥接返回诚实 review 而非伪装放行，配 /mcp-reg 操作台与设置页。
  `v0.3.9` · 引擎 `0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-mcp-registry)
- **@max-null/dsh-skill-mcp-center** — DeepSeek Harness 技能与 MCP 管理中心：浏览并启停用户/项目技能，热增删改 MCP 服务器（免重启），侧边栏实时展示各服务器状态。
  `v0.6.2` · [源码](https://github.com/Max-Null/dsh-skill-mcp-center)
- **dsh-my-guardian** — 插件治理：新装/更新插件先进候选区，启动完成后热挂载——成功自动转正，失败自动禁用，连续失败冻结，一键安全模式，侧边栏诊断面板（npm: `dsh-my-guardian`）。
  `v0.4.8` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **@gehennawu/dsh-service** — 面向自托管 DSH Web 的运维面板：安全重启与升级、健康诊断、模型用量统计与供应商额度查询、备份和会话管理、任务通知、技能控制、子代理模型路由与 Linux 权限维护。
  `v2.1.1` · 引擎 `>=0.1.1-rc.2` · [源码](https://github.com/gehennawu/dsh-service)
- **dsh-model-everything** — 把设计、计划或文档里的声称抽成模型再判定：UML 图渲染、读取与审查；状态机、协议与数据模型按模型判定；迁移检查覆盖与回滚对称；并发声称挖掘后分派给能判定它的工具；依赖图审查；报告对比。
  `v0.4.1` · [源码](https://github.com/AmethystLuna/dsh-model-everything)
- **dsh-ris-ide** — DSH 网页版的当前环境开发面板：跟随服务日志、启停工作区程序、JDWP 调试 Java、浏览编辑工作区文件与文件名搜索。需要 DSH 0.2.0-rc.2 或更高版本；启动或调试 Java 程序需要当前环境 JDK 与 Maven，启动前端程序需要 Node。
  `v1.6.9` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/ris-cloud/dsh-ris-ide)
- **dsh-plugin-compat-check** — 检查已装 DSH 插件相对当前宿主的版本声明与 API 风险，报告可用源码位置、确定度、影响依据和覆盖限制。提供兼容性设置面板、插件详情发现与角标、compat_check 对话工具及 skill provider。
  `v0.1.6` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/lcy0121/dsh-plugin-compat-check)
- **@jiyr0119/dsh-service-console** — DSH 本地开发服务控制台：列出当前环境所有监听服务，并让用户查看、以安全方式停止或重启开发过程中启动的服务。
  `v0.7.1` · [源码](https://github.com/Jiyr0119/dsh-service-console)
- **dsh-zterm** — SSH 与 JumpServer 终端插件：真实机器读工具、人工发起的读写操作，以及 DSH 内的会话管理。
  `v0.1.16` · [源码](https://github.com/guhanfei-ai/dsh-zterm)
- **dsh-macos-restart** — 仅 macOS 桌面版：一键重启 DeepSeek Harness Electron 应用；重启前确认运行中的任务，插件安装/更新时拒绝，并记录重启阶段与日志。
  `v0.2.5` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/chai-yinfeng/dsh-macos-restart)
- **@zhz8888/dsh-android-emulator-helper** — 在 DeepSeek Harness 里驱动 Android 开发工具链：23 个 android_* 工具负责探测 SDK、创建与管理 AVD、启停模拟器、生成 Kotlin/Compose 工程、用 Gradle 构建运行，并完成安装、启动、截图、logcat 与 UI 操作。设置页集中管理…
  `v1.2.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/zhz8888/dsh-android-emulator-helper)
- **@zhz8888/dsh-ios-simulator-helper** — 把官方 ZCode ios-simulator 插件移植为 DSH 原生工具：原有 20 个 ios_* 工具的命名与参数保持不变，另加 ios_shutdown_simulator，覆盖 Xcode 工程发现与生成、模拟器启动与关闭、构建、安装、启动与结束进程、截图、日志读取，并提供应用内设置页与可选的 idb…
  `v1.2.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/zhz8888/dsh-ios-simulator-helper)
- **@hjj345345/dsh-sm-version-display** — 在侧边栏显示已安装的 DeepSeek Harness 版本，检查 npm 与 GitHub Releases 更新，并提供手动或确认后执行的更新命令。
  `v1.2.26` · 引擎 `>=0.1.7-rc.1 || >=0.2.0-rc.1 || >=0.2.1-rc.2` · [源码](https://github.com/hjj345/dsh-sm-version-display)
- **dsh-restart-now** — DSH 桌面版一键完整重启：侧边栏底部按钮 + 设置页配置表单（总开关、二次确认、延时、目标程序路径）。重启由脱离进程树的独立助手执行——先杀进程树再自动拉起 DeepSeek Harness.exe；动作请求仅限当前环境同源。
  `v1.2.1` · 引擎 `>=0.2.0-0` · [源码](https://github.com/Mr54233/dsh-restart-now)
- **@ajia1206/dsh-restart** — 用模型工具或右下角 GUI 控件重启正在运行的 DSH 进程：探测 launchd KeepAlive，无托管时派 detached supervisor 兜底（握手失败即取消退出），桌面版走 macOS 应用重启路径，每次重启写入按 armId、pid 与 profile 关联的 JSONL…
  `v0.1.5` · [源码](https://github.com/ajia1206/dsh-restart)
- **@sleetdrop/dsh-plugin-topology** — DeepSeek Harness 插件依赖图检查器：把运行中的 Cordis 插件/服务拓扑快照为可缩放的浏览器面板图，附带图论指标，以及面向模型的 graph.render 工具。
  `v0.9.0` · [源码](https://github.com/sleetdrop/dsh-plugin-topology)
- **dsh-perf-hud** — 纯客户端性能 HUD 与默认常开的记录器：帧率与最差帧、Long Task 四条腿归因（React fiber / 子树 / DOM 写入 / 调度点）、每插件回调速率与同步耗时、DOM 增长与写入者、JS 堆、宿主 event-loop 与链路 RTT；守夜层自动留存最差几次卡顿，可逐帧回放并导出事故包。
  `v0.7.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/yanzhaohui1999/dsh-perf-hud)
- **huaweicloud-devkit** — 让 AI 智能体掌握华为云全流程操作——构建、部署、运维全程受控，助您轻松安全上云。
  `v1.1.12` · [源码](https://github.com/huaweicloud/huaweicloud-devkit)
- **dsh-desktop-auto-restart** — 重启 Windows 上的 DSH 桌面端，并在重启后唤醒清单里指定的会话。面向 agent 的重启工具默认关闭，宿主繁忙时拒绝重启。
  `v0.1.2` · [源码](https://github.com/comer2031/dsh-desktop-auto-restart)
- **dsh-plugin-restart-prompt** — 仅 Windows。DSH 插件变动后提示重启，一键静默重启（全程无命令提示符窗口），并可展开本次改动的逐行差异。
  `v0.1.1` · [源码](https://github.com/x3416067-bit/dsh-plugin-restart-prompt)
- **dsh-local-plugins** — 把你改过的插件（第三方或内置）保存为本地 git 仓库：只部署已构建并通过检查的指定提交，应用后导致 dsh 崩溃时自动回滚，把 npm 或 git 源的更新合并进你的修改，并可打开智能体会话，把你的修改压缩为原始发布版本之上的一个提交（先建备份分支）。
  `v0.3.0` · [源码](https://github.com/ishanshmalviya5/dsh-local-plugins)
- **dsh-plugin-deploy** — 一句话把项目部署到 Cloudflare、把做好的插件发布到 npm：首次部署零账号，凭据模型看不到。
  `v0.2.2` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/Octo-o-o-o/dsh-plugin-deploy)
- **dsh-cert-mcp** — 基于 DSH 插件认证登记的只读 MCP 服务，对外提供插件的认证等级、其快照以及支撑它的五维证据。
  `v0.2.10` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-cert-mcp)
- **dsh-home-hosted** — 让 dsh web 与其他服务器随开机自动启动；只需一句提示就能搭建和管理 Gitea、Jellyfin 等服务，并统一收纳到一个 home-hosted 面板中。
  `v0.9.5` · 引擎 `^0.2.0-rc.1 || ^0.2.1-rc.2` · [源码](https://github.com/NamesMT/dsh-home-hosted)
- **@wweir/dsh-advisor** — 自动二审：受限子会话用只读工具复核 agent 最近的工作，最多投递一条有证据支撑的提醒，没有问题则保持沉默。
  `v0.5.0` · [源码](https://github.com/wweir/dsh-advisor)
- **@lenorin/dsh-tauri-launcher** — 面向 Windows 的 Tauri 2 桌面应用：检测或自动安装全局 @deepseek-ai/dsh 包，启动 DSH Web 并嵌入自身窗口，支持系统托盘管理、登录自启、全局快捷键与桌面快捷方式。
  `v1.1.5` · [源码](https://github.com/cilis/dsh-tauri-launcher)
- **dsh-training-lens** — Training Lens · 训练视窗通过 DSH 工具打开本地 TensorBoard 标量监控页面，支持指标选择、改善方向、EMA 平滑和中英文界面；需要已有的 Python 与 TensorBoard 环境。
  `v0.1.0` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/GU143312/dsh-training-lens)
- **dsh-config-vault** — 配置保险箱：为 DSH 配置创建快照、对比差异并安全回滚设置补丁、插件清单、技能与规则、工作区列表，凭据默认排除。
  `v0.1.3` · [源码](https://github.com/klT45/dsh-config-vault)
- **dsh-update-safe** — DeepSeek Harness 源码安装的更新插件：核对官方 GitHub 发布与 npm 记录，在独立目录构建目标版本并试启动，再由监督进程切换、失败回滚，支持定时检查与每日空闲安装时段。仅支持源码安装（macOS/Linux）；需 Node.js 22.19+、pnpm 与 Git。
  `v0.4.2` · [源码](https://github.com/zudazhuang/dsh-update-safe)
- **dsh-lint-loop** — dsh-lint-loop v0.7.0 通过有界、只读检查点追踪 shell/bash/pwsh 与文件工具产生的可观察变更；证据归因不确定或不足时保留为 incomplete。[正式 Release](https://github.com/lemonxiny55/dsh-lint-loop/releases/tag…
  `v0.7.0` · [源码](https://github.com/lemonxiny55/dsh-lint-loop)
- **dsh-update-checker** — DeepSeek Harness 主程序与插件更新管理：对主程序与每个已装插件做 npm/GitHub Release 双源 semver 比对，GUI 横幅按系统语言（中/英）列出可更新项；一键更新——主程序自动备份、完整性校验、失败回滚，插件经临时目录安装不碰其它包；更新后看门狗自动重启服务。「检查更新」设置页提供…
  `v1.7.3` · [源码](https://github.com/Airmetro/dsh-update-checker)
- **@moon16u/dsh-restart** — 安全的分离式 DSH 重启：/restart 与 /dsh-restart 斜杠命令（原生候选样式）加 dsh_restart Agent 工具；分离的 worker 在 3 秒后重启 DSH 且会话不冻结，Windows/macOS 走基于官方 appExit 服务的原生 Node helper。
  `v0.4.4` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/moon16u/dsh-pouch)
- **dsh-continual-evolve** — 持续自进化：从会话轨迹沉淀版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格），带审查门禁与技能热加载。
  `v0.19.3` · [源码](https://github.com/ZK-Andy/dsh-continual-evolve)
- **dsh-win32** — 围绕官方持久 PowerShell 与 Workspace Write 方案检查和修复原生 Windows 上的 DeepSeek Harness，创建桌面快捷方式，并仅通过明确的 legacy 安装保留早期 Git Bash 与 BusyBox 预设，无需 WSL。
  `v0.17.15` · [源码](https://github.com/sjh9714/dsh-win32)
- **@struktoai/mirage-dsh** — 把文件系统与 bash 提供者换成 mirage 虚拟工作区：文件工具与 shell 命令作用于挂载的资源（RAM、S3、Redis、Slack、Gmail、Notion、Postgres）而非宿主磁盘，支持按挂载点设置读/写/执行模式、按命令选择沙箱（进程内 monty、pyodide、quickjs；远程…
  `v0.0.7` · [源码](https://github.com/strukto-ai/mirage)
- **@luoshuizhiwei/dsh-desktop-restart** — 从五个入口（侧栏面板、侧栏底部、会话标题栏、/restart-desktop 斜杠命令、设置页）经分离的 helper 结束并重新拉起 Electron 主进程，重启整个 DeepSeek Harness 桌面应用，而不是只重启 dsh web 进程；插件正在安装/更新且 pnpm 还活着时硬拦重启，清理 DSH…
  `v0.4.4` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/luoshuizhiwei/dsh-desktop-restart)
- **dsh-undo-savepoint** — DSH 撤销/回退系统：配置变更自动存档，一键撤销/恢复/回退到任意版本，支持 WebUI 与离线 CLI/GUI 工具（DSH 启动失败也能救）。
  `v0.5.0` · 引擎 `>=0.0.1-0 || >=0.1.0-rc.2 || >=0.1.1-rc.1 || >=0.1.2-alpha.2 || >=0.1.2-rc.1 || >=0.1.5-rc.1 || >=0.1.5-rc.2 || >=0.2.0-rc.2` · [源码](https://github.com/lire1131/dsh-undo-savepoint)
- **dsh-farm** — DSH 服务农场：注册、启动、停止、重启长驻项目服务，提供 agent 工具（farm_status/start/stop/restart/logs/register）与 farm.yaml 声明式服务，总览抽屉支持按工作区分组、实时日志 follow、搜索与导出。
  `v0.2.0` · [源码](https://github.com/MarchLiu/dsh-farm)
- **dsh-plugin-pwsh7** — 在 Windows 上替换 pwsh 执行器行，让模型侧 pwsh 工具运行 PowerShell 7，并提供 shell_router 工具做状态、诊断与用户级便携安装。
  `v0.3.3` · [源码](https://github.com/drliuhuan/dsh-plugin-pwsh7)
- **@mzzsfy/dsh-maintain** — DSH 版本与运维一体化：自动发现新版本、一键升级、安全重启，重启后页面自动恢复。
  `v0.15.1` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-skill-mcp-panel** — 在 DSH Web 设置中管理技能与 MCP 服务器：技能卡片热启停、工作区作用域、分组、批量迁移与拖拽导入，以及 stdio/HTTP MCP 增删改查、连接测试、密钥脱敏，并附带统一 dsh-panel 命令行。
  `v2.3.5` · [源码](https://github.com/Fishquito7/dsh-skill-mcp-panel)
- **dsh-thinking-zh** — 注册系统提示词段落，让模型的内部思考使用简体或繁体中文，支持严格/宽松两种强度，并可单独约束最终回复语言。提供 /thinking-zh 命令做会话级切换。零运行时依赖。
  `v0.2.1` · 引擎 `>=0.2.0` · [源码](https://github.com/minutiae3/dsh-thinking-zh)
- **@yxzpro/agent-acta** — 本地 AI agent 请求日志面板：聚合 atomcode、codebuddy、workbuddy、claude、codex、codearts、gemini、cursor、kimi、dsh 等本地日志，查看每轮耗时、token、缓存、上下文与工具调用。
  `v2.15.3` · [源码](https://github.com/elegant01/agent-acta)
- **@tnnevol/dsh-fnos** — 把 DeepSeek Harness 接进飞牛 fnOS：DSH 界面跑在 fnOS 应用框架里时通过 fnOS 浏览器 SDK 工作——DSH 设为跟随系统时读取并跟随 NAS 主题，在设置里列出和取消已授权的 NAS 目录，把文件与链接交给对应的 fnOS 应用打开，并把 DSH 页面标题同步到 fnOS…
  `v0.2.1-rc.2.10` · [源码](https://github.com/FNOSP/fnos-dsh)
- **@tnnevol/dsh-semi-ui-showcase** — tnnevol 系列 DSH 插件共用的 Semi Design 组件检查页，从会话头部的 `Semi UI` 按钮进入：35 个组件加一个多账号案例页，按七个侧边分组组织，涵盖输入、表单、选择器、树、表格、卡片、浮层与反馈，逐个实渲并配一句话说明与页内目录，可切换浅色、深色与跟随系统预览。npm 安装：`dsh…
  `v0.2.1-rc.2.10` · [源码](https://github.com/FNOSP/fnos-dsh)
- **mcmodsdevbridge** — Minecraft 26.3 mod 开发工具：按 JSON 实例登记启动真实的专用服与客户端，通过带鉴权的 HTTP 探针驱动两端，并对世界、UI 与日志状态做断言，覆盖 Fabric / Forge / NeoForge；每轮运行留下取证目录，且不随包分发任何游戏或加载器文件。需 JDK 25 与…
  `v1.0.3` · [源码](https://github.com/7starsseeker/MCModsDevBridge)
- **dsh-plugin-debugging** — DSH 插件运行时诊断：区分实时生效、重启和热重载。
  `v0.7.1` · 引擎 `^0.1.7-rc.1 || ^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/dsh-plugin-lab/dsh-plugin-debugging)
- **@duke-dsh-plugins/dsh-deveco** — HarmonyOS 全栈开发套件：右侧边栏提供 HiLog 检查器（实时流与级别/包名/关键词过滤）与 ArkUI Inspector（截图点选高亮、可折叠组件树、节点属性搜索、盒子模型），两种树源——DevEco 调试源（ark 调试链路，提供 padding/margin/border 声明值与自定义组件名）与…
  `v0.2.6` · 引擎 `^0.2.0-rc.1 || ^0.2.1-rc.0` · [源码](https://github.com/MoonlitDropOfBlood/dsh-deveco)
- **dsh-ballast** — DSH Web 的上下文窗口归因插件：Mini Utility Dock 面板按各自占用的 token 给会话内的用户消息、助手回复、推理块和工具结果排序，一眼看出窗口被哪些条目占住。面板还显示各条目类型的占比、当前环境各 live session 里最重的条目，并在宿主提供时显示 provider usage 与…
  `v0.5.0` · 引擎 `>=0.1.5-rc.3` · [源码](https://github.com/xswt442-cmd/dsh-ballast)
- **dsh-instance-manager** — DSH Web 实例管理器：Mini Utility Dock 面板列出当前环境可见的全部 dsh web 实例（端口、PID、运行时长、会话数、常驻内存、版本），可在 3080–3129 自动选一个空闲端口或按指定端口启动新实例、把某一行在新标签页打开，并通过目标实例自身的优雅退出停掉单个或全部实例。行内还显示每个实例在…
  `v0.12.0` · 引擎 `>=0.1.5-rc.3` · [源码](https://github.com/xswt442-cmd/dsh-instance-manager)
- **dsh-treekeeper** — DSH 宿主的 Windows 进程树对账插件：采样宿主进程树与任务账本，把每个进程归属到创建它的任务，并按置信度标出未归属与孤儿进程，同时提供受保护的整树终止。终止必须满足：目标归属于 DSH 宿主树、在动手前重新采样复核（含创建时间）、目标树内不含受保护后代，因此白名单 PID 不会扩大可杀范围。
  `v0.5.0` · 引擎 `>=0.1.5-rc.3` · [源码](https://github.com/xswt442-cmd/dsh-treekeeper)
- **@hyzyn/dsh-profile** — DSH Web GUI 的 Profile 管理卡片：可视化查看、创建（base / web / headless 三种模板）、复制、重命名与删除 ~/.dsh/profiles 下的 profile，支持逐 profile 端口配置并复制带 --port 的启动命令。
  `v0.2.10` · [源码](https://github.com/hyzyn/dsh-plugin-kit)
- **dsh-eval-control** — 宿主侧 DSH 评测控制插件：把单次评测试次的变量、预算上限、会话根目录与 fork 血统一次性注入 agent 进程，模型调用经宿主 broker 走网关租约，并写出 schema 版本化的 bundle descriptor 做证据归属。
  `v0.4.0` · [源码](https://github.com/xyrrrrr-r/dsh-eval-control)
- **pi2dsh** — Pi Host ABI 兼容引擎：装一次之后，npm 上的 Pi 扩展原包经 `dsh plugin add <pi-package>` 直接作为 DSH 原生插件挂载。已在官方 DSH 上端到端验证 pi-mcp-adapter（完整 MCP 管理面：OAuth、resources、prompts、MCP…
  `v0.27.0` · [源码](https://github.com/weijiafu14/pi2dsh)
- **dsh-plugin-runcat-inventory** — DSH 插件总览（逃咪）：以表格视图管理已安装插件，支持状态过滤、HMR 热生效的启停开关、配置查看/复制、卸载与 npm 更新提醒。
  `v1.3.2` · [源码](https://github.com/runcat-tommy/dsh-plugin-runcat-inventory)
- **@kira905/dsh-ecosystem-panel** — 只读生态面板：汇总实例的插件束、补丁插入、技能、升级健康与解耦健康。
  `v0.4.5` · [源码](https://github.com/kira905/dsh-ecosystem-panel)
- **dsh-useful-tools** — 插件开发工具箱：命令读过的文件自动算已读、代码同步到 profile、后端模拟与前端预览、插件装载验证、隔离测试实例、自定义快捷命令、工具清单。
  `v0.1.25` · [源码](https://github.com/EIGHTfs/dsh-useful-tools)
- **dsh-rules** — 类 Claude Code rules.md 的规则提示词：按智能体读取或编辑文件的 glob 匹配自动激活规则文档，支持提示词注入与排序。
  `v0.1.6` · [源码](https://github.com/rj-jiangyichen/dsh-rules)
- **dsh-loop-engine** — Web 设置页的「循环引擎」开关，在五套引擎间切换驱动每个 dsh 会话的 agent 循环——内置 in-process 加托管的 Claude Code、Codex、Pi、Kimi Code——无需改动 harness；每个托管引擎都把思考与工具调用写入持久会话记录，接管命令、技能与 agent 预设，并经…
  `v0.2.1-rc1` · [源码](https://github.com/kuun993/dsh-loop-engine)
- **dsh-janitor** — 注册 janitor_scan 工具：对会话遗留物（计划文档、临时脚本）给出确定性、可审阅的清理计划，逐文件裁决附证据；只扫描，永不删除。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-janitor)
- **dsh-mcp-panel** — 官方 MCP 客户端（dsh-mcp-client）的只读运行时管理面板：/mcp 命令与设置页 MCP 页签展示连接状态、已注册工具、错误与重连计数，脱敏展示并提供启停 patch 建议。
  `v0.6.29` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-mcp-panel)
- **dsh-win-pwsh7** — 报告 DSH pwsh 执行器各行实际运行的 PowerShell——只认启用中的行，拒绝把带版本号的商店路径当作 pin——并以后台任务安装会自动更新的微软商店版 PowerShell 7；动手前先读连接计费方式，因为 Windows 会推迟按流量计费连接上的商店下载。宿主侧两个工具加一个提示词区段，Web…
  `v0.12.3` · [源码](https://github.com/xinspark/dsh-win-pwsh7)
- **dsh-code-review-graph** — 基于 code-review-graph 引擎，为 DSH 提供代码图谱上下文、影响分析、审查工作流、交互式图谱和权限控制的重构。
  `v1.0.5` · [源码](https://github.com/sumingwang233/dsh-code-review-graph)
- **dsh-environment-tray** — 在 DeepSeek Harness 中管理环境变量、.env 文件和凭据，支持 Windows 用户级与系统级环境变量。
  `v0.1.3` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/songshuhuoban/dsh-environment-tray)
- **dsh-plugin-cicd** — 把 DSH 插件仓库的持续构建与发布搬进应用：侧边栏面板逐仓库显示最近一次工作流运行、已发布与草稿 Release，以及本地检出相对上次发布的领先与未提交情况，并提供触发构建、发布、公开草稿、重跑、取消、查失败日志等按钮。通过当前环境已登录的 gh CLI 驱动工作流，插件自身不保存任何凭据，被监视的仓库列表放在配置文件里…
  `v0.5.3` · [源码](https://github.com/SOH4C4759/dsh-plugin-cicd)
- **@perrylink/dsh-plugin-kit** — 编写 DeepSeek Harness 插件的共享工具包，发布为 @perrylink/dsh-plugin-kit：可插拔的 Provider 注册表接缝、失败即拒绝的审批与会话事件门、共享的脱敏/计价/裁决模块，以及新插件骨架。
  `v0.1.20` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-plugin-kit)
- **dsh-claude-compat** — 把 Claude Code 的 .claude/ 目录零迁移桥接进 DSH：项目与用户级 skills、 斜杠命令、rules（单条 system-reminder 信封注入）、agent 文件、hooks （PreToolUse/PostToolUse/UserPromptSubmit/SessionStart/Se…
  `v0.8.4` · [源码](https://github.com/biedongbin/dsh-claude-compat)
- **@perrylink/dsh-plugin-doctor** — 零依赖的 DSH 插件静态检查与沙箱冒烟检测器：包结构门禁、cordis 契约扫描、无密钥无头冒烟，以及生态收录校验。
  `v0.7.4` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-plugin-doctor)
- **@viogus/dsh-rtk** — 把符合条件的 bash 命令交给 rtk（Rust Token Killer）执行，让工具输出在进入模型之前就被压缩：插件调用当前环境 rtk 重写命令并采纳其结果；rtk 未安装时，执行器行为与原生完全一致。
  `v0.2.4` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/viogus/dsh-rtk)
- **dsh-backup-sync** — DSH 的备份 / 恢复 / 换机迁移：把技能（技能目录在 ~/.dsh 之外的 ~/.agents/skills）、插件清单、核心配置、记忆、待办、以及可选的会话打成一个带 sha256 边车的 tar.gz，再在另一台机器上以「带基线的三方合并」导入 —— 逐文件列出差异，而不是直接覆盖对方改过的东西。凭据永不进包…
  `v0.2.0` · [源码](https://github.com/Arlenman/dsh-backup-sync)
- **dsh-plugin-resolver** — 面向 agent 的插件安装器：解析 DSH 兼容版本、处理同名歧义，并在安装后校验 loader 入口。
  `v0.1.2` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/sakikoTGW/dsh-plugin-resolver)
- **dsh-global-rules** — 在设置面板中编辑 ~/.dsh/AGENTS.md 全局规则，保存后实时生效。
  `v0.2.2` · [源码](https://github.com/badai147/dsh-global-rules)
- **dsh-file-activity** — DSH 侧边栏文件活动页签：记录 agent 与侧边栏的文件读取/新增/修改事件（含 bash 命令中隐含的文件操作），按会话隔离、重启后恢复，点击文件浮窗预览（npm: `dsh-file-activity`）。
  `v0.5.15` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-my-observability** — 可观测性与 Git 工程工具：跨会话持久化的事件审计日志与查询 API、资源看门狗侧边栏面板、结构化 Conventional Commits 提交、提交前增量 diff 审查（npm: `dsh-my-observability`）。
  `v0.3.6` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **@xiaoso/dsh-run-config** — DSH 的 IDE 风格运行配置：把常用 LLM 提示词和 Shell 命令保存为可复用的运行配置（全局或按工作区），在会话头部或新会话页一键运行，大模型可通过 task_run_config 工具管理（写操作走审批）。
  `v0.2.4` · 引擎 `>=0.2.1-0 <0.3.0-0` · [源码](https://github.com/xiaoso456/dsh-run-config)
- **dsh-ptc-plus** — 把 DSH PTC 模式的顶层 run_code 变成会话绑定的持久 TypeScript REPL：变量与导入在多次 run_code 调用间保持可用，edit_run_code 只替换一行而无需重发整段，import/export 模块语法经 AST 改写适配，持久绑定在冷重启后由会话日志恢复。
  `v0.5.1` · 引擎 `*` · [源码](https://github.com/muyuanjin/dsh-ptc-plus)
- **@chenkai114/dsh-daemon** — 将 DeepSeek Harness 的 web 服务（dsh web）注册为自启动、自愈的后台服务：LaunchAgent / systemd / cron 加 30 秒健康检查 watchdog，并提供 7 个 dsh_daemon_* 工具（安装/卸载/重装/状态/启动/停止/更新）。
  `v0.1.27` · [源码](https://github.com/chenkai2/dsh-daemon)
- **@moonquake2004/dsh-doctor** — 离线诊断工具：环境/Profile/会话共 19 项检查，带设置「诊断」面板与只读 JSON API。
  `v0.8.9` · [源码](https://github.com/moonquake2004/dsh-doctor)
- **dsh-xcodebuild** — 在 harness 中通过 xcodebuild 编译、测试、归档并运行 iOS 或 macOS 工程——实时可过滤的构建日志、从工程自身读取的 scheme 与目标设备选择，以及模拟器与 USB 真机的日志流，包含经 libimobiledevice 支持的 iOS 16 及更早设备，其 app…
  `v0.6.22` · [源码](https://github.com/harde1/dsh-xcodebuild)
- **dsh-plugin-capabilities** — 设置页的「技能与 MCP」分区：技能目录实时监听，可浏览、新建、编辑、删除技能，用 frontmatter 策略键开关任何落在磁盘上的技能；本地目录或 GitHub 仓库可注册为额外技能扫描根；profile 的 MCP 服务器行在页面上编辑，可从 Claude Code / Codex 配置导入；另带精选技能仓库与…
  `v0.4.1` · [源码](https://github.com/qinyre/dsh-plugin-capabilities)
- **dsh-skill-mini-manager** — DSH Web 设置里的 skill 管理器页面，与「插件」同级：列出当前安装提供的全部 skill 及其自己的简介、来源与占用，并可逐个移除（移除是移入可恢复的回收站）。
  `v2.0.4` · [源码](https://github.com/runcat-tommy/dsh-skill-mini-manager)
- **dsh-mcp-mini-manager** — DSH 的 MCP 极简管理：与「插件」同级的一页设置，列出运行中 Loader 树里真实存在的 MCP 服务器及其配置摘要、端点与实时状态，并通过 profile 的 cordis.patch.yml 成对标记块停用或恢复任一服务器；环境变量值、请求头值与 `!!js` 表达式只以键名或点路径的形式到达页面。
  `v1.5.4` · [源码](https://github.com/runcat-tommy/dsh-mcp-mini-manager)
- **rulemux-dsh** — rulemux 的 DeepSeek Harness 插件：通过 rulemux inject --agent dsh 取当前工作区渲染出的规则，在每次会话的首条用户消息时把输出注入一次。规则不往工作区写任何文件；只有技能会落盘。
  `v0.5.3` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/cq-guojia/rulemux)
- **dsh-harmony** — 在运行时修改 DSH 插件代码，并提供 Patch 排序、检查和热重载。
  `v0.8.18` · [源码](https://github.com/memorax-ai/dsh-harmony)
- **dsh-webui-studio** — 面向 DSH WebUI 插件的可视化开发工作室，提供隔离的 Git worktree、真实官方 WebUI 预览、源码编辑、Patch 检查、构建与验证。
  `v0.3.5` · [源码](https://github.com/memorax-ai/dsh-webui-studio)
- **dsh-wrapup-guard** — 收尾自检哨兵：任务收尾时强制「全面检查 → 修复 → 再全面检查」循环，自动跑测试/lint/audit，有未修复的问题就打回，直到连续三轮零问题才判定完成并通知用户。
  `v0.1.0` · [源码](https://github.com/566001/dsh-wrapup-guard)
- **dsh-devpanel** — DSH 网页控制台的开发者工具包：一个真实的多标签 PTY 终端（停靠在输入框下方），外加 AI 输出文件浏览器侧栏，支持语法高亮、Markdown 渲染与图片预览。
  `v0.2.0` · [源码](https://github.com/lispking/dsh-devpanel)
- **dsh-conflict-doctor** — DSH 插件冲突诊断与修复建议。把运行期能力图谱与磁盘上的 cordis.patch.yml 层对齐，并与真正在运行的宿主（而不是 profile 里可能过期的副本）比对导入、peer 范围与配置，检出那些不会自己报错的静默故障：卡在 PENDING 等待无人提供的服务、浏览器半区注入了无人提供的客户端模块、两个插件注…
  `v0.2.0` · 引擎 `>=0.1.0-rc.6 <0.3.0-0 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/ven314/dsh-conflict-doctor)
- **@goodandready/dsh-issue-reporter** — 收集并脱敏 DSH 运行诊断信息，然后向 GitHub 或 Gitea 提交结构化问题报告。
  `v0.1.14` · [源码](https://github.com/GooDAnDReaDY/dsh-issue-reporter)
- **dsh-context-verdict** — 会话级判定：compaction 是否会丢失未落地状态；结构上拒绝逐块筛选。
  `v0.1.2` · 引擎 `>=0.1.6-0 <0.2.0 || >=0.2.0-0 <0.3.0` · [源码](https://github.com/Phocinae/dsh-context-verdict)
- **dsh-restart-anywhere** — 在「设置」上方添加「重启 dsh」按钮，原地重启：以 systemd 单元运行时由 systemd 重启，否则通过 process.execve 保持同一 PID（Windows 或 Node < 22.15 时保留一个轻量父进程），启动 dsh 的守护进程或终端无需额外配置（已在 Linux…
  `v0.1.4` · [源码](https://github.com/JoblessJoe/dsh-restart-anywhere)
- **@oihai/dsh-harness-trace** — 把每次会话记录成会话工作区内一份可读的 Markdown 时间线——发往模型的完整请求（含系统提示词与插件注入）、用户输入、模型回复、推理过程、工具调用与结果、文件读写、联网搜索、技能加载、命令执行与 token 用量，并带审阅页、会话内标签页与可配置的采集范围。
  `v1.0.0` · [源码](https://github.com/oihai/dsh-harness-trace)
- **dsh-hot-restart** — DSH 窗口里的一个固定按钮，点一下就把 DSH 关掉并自动重开，全程没有控制台窗口；右键它还有内置自检，能生成一份自包含的诊断报告。
  `v0.3.16` · [源码](https://github.com/xiaolu511/dsh-hot-restart)
- **dsh-sseye** — DeepSeek Harness 里的 LLM 调试台：在 llm/stream 层完整捕获每次模型调用（请求参数、流式块、用量、真实 wire 协议），以 DevTools 风格停靠面板展示，支持上下文共享前缀折叠对比、wire JSON 重建、JSON 导出与运行时可调的抓取策略。
  `v0.4.4` · [源码](https://github.com/jhuanxx44/dsh-sseye)
- **@loongsuite/dsh-plugin** — 将会话、Agent 循环、LLM 与工具生命周期事件转换为 OpenTelemetry GenAI 调用链与指标，通过标准 OTLP/HTTP 导出到任意兼容后端，正文采集默认关闭。
  `v0.1.3` · [源码](https://github.com/loongsuite/dsh-plugin)
- **dsh-graphlint** — 面向 AI 生成代码的死代码检测：graphlint 构建依赖图，定位从任何入口不可达的代码，以实现代码库清理和功能有效性理解，并为 DSH 智能体提供 graphlint_query / graphlint_build / graphlint_config 工具与 graphlint 技能。
  `v0.6.0` · [源码](https://github.com/AngelosZou/graphlint)
- **dsh-mac-keep-awake** — 仅 macOS：任意 DSH 会话运行期间持有 PreventUserIdleSystemSleep 断言（caffeinate -i -w <宿主 pid>），最后一个会话结束后释放，长时间回合不会因空闲休眠被切断；屏幕仍可正常息屏。它会一直持有跨过 maintenance 阶段——该阶段 Agent.status…
  `v1.4.2` · [源码](https://github.com/wjvalue/dsh-mac-keep-awake)
- **@xiaoyuyu6420/dsh-backup** — 一条命令备份、恢复与迁移 DSH 全部用户数据（~/.dsh），附可视化设置面板：定时自动备份与每日/每周分级保留、sha256 校验、失败自动回滚并回执的加固恢复、分类型子集备份（--types）、凭据脱敏进当前环境 vault、GitHub 私有仓库同步跨机迁移、宿主起不来也能用的进程外救援通道（备份目录内置零依赖救援…
  `v0.13.4` · 引擎 `^0.1.1-rc.2 || ^0.1.2-rc.1 || ^0.1.5-rc.1 || ^0.1.6-alpha.1 || ^0.1.7-alpha.1 || ^0.2.0-rc.1` · [源码](https://github.com/xiaoyuyu6420/dsh-backup)
- **dsh-agent-skills** — 在 DSH 设置面板中浏览、启用、停用和管理来自 Claude Code、Codex、OpenCode、Gemini 及自定义目录的 Agent Skills。
  `v0.1.14` · [源码](https://github.com/minivv/dsh-agent-skills)
- **dsh-continual-harness** — 持续自我优化闭环：持久记忆、周期评审与自动优化、跨会话共享知识、失败自动回滚，由模型可调用的 harness_refine 工具驱动。
  `v0.3.3` · [源码](https://github.com/jasen215/dsh-continual-harness)
- **dsh-creator-mode-plus** — 通过对话中的固定工具创建、激活、检查和移除外部 DSH 插件，需要外部 DSHX 开发工具。
  `v0.3.13` · [源码](https://github.com/aa2246740/dsh-creator-mode-plus)
- **@ashtonsun/dsh-experimental-computer-use-linux-nde-mcp** — 为中兴 Nde 桌面定制的 DSH Cordis computer-use provider。npm install 完成后由 postinstall 钩子从 computer-use-linux-zte-nde v0.7.7-nde.3 release 自动下载 musl 静态二进制到包内 bin/，SHA 校验后…
  `v0.2.10` · [源码](https://github.com/EvilJoker/dsh-experimental-computer-use-linux-nde-mcp)
- **dsh-jenkins-plugin** — Jenkins CI 集成：右侧栏实时构建进度面板、多实例设置页、五个面向模型的工具（列 job、构建状态、控制台日志、工作区、触发构建），以及构建失败时唤醒当初关注该 job 的那个会话。
  `v0.1.1` · 引擎 `0.1.6-alpha.2` · [源码](https://github.com/Endless-zby/dsh-jenkins-plugin)
- **@weibaohui/dsh-sync** — 多机同步：让多台机器上的 dsh 通过一个私有 GitCode 仓库保持一致——技能、会话、设置、插件清单四类内容各有独立开关；变更走分支 → PR → 合并，推送前自动回填远端新增防误删，支持 AI 智能对齐（语义合并双方改动）与一键解决冲突；强制私有仓库，pull 不覆盖本地改动。
  `v0.4.8` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-sync)
- **@ragnoryok1/dsh-plugin-doctor** — dsh Web 界面的插件诊断：找出加载失败的插件、未启动的 bundle 行与失效的 file 链接，并报告扫描结果。只读：不修复、不写日志、不提供撤销。
  `v0.1.4` · [源码](https://github.com/Ragnoryok1/dsh-plugin-doctor)
- **dsh-flakefinder** — 测试稳定性工具：重复运行 vitest/jest/pytest/node:test，识别 flaky 用例，历史留档、隔离清单与健康自检。
  `v0.3.5` · [源码](https://github.com/STARDUSTLC666/dsh-flakefinder)
- **dsh-composition-doctor** — 通过组合来源路径和人工下一步解释受支持的 DSH 插件故障：重复引入、bundle patch 缺失和 peer 不匹配；提供独立 CLI 与报告查看器，默认只读离线诊断，未观察的 runtime 保留 unknown。
  `v0.4.0` · [源码](https://github.com/lemonxiny55/dsh-composition-doctor)
- **@ndsanes/dsh-rules** — 从 OMP 支持的每一种约定中发现规则文件,以 always-apply 层加规则索引注入系统提示词,并用时间旅行流规则强制执行——在模型输出中途打断违规内容、拦下会违规的工具调用、把提醒折进该调用的结果,或在回复完成后交由裁判模型判断。同一个工具也让模型能写入新规则;Plugins…
  `v0.2.1` · [源码](https://github.com/Ndsanes/dsh-rules)
- **@pbfuzz/dsh-kanalyzer** — LLVM 静态分析插件，可为 C/C++ 项目构建整程序 LLVM bitcode，并在其上运行 kernel-analyzer（KAMain）可达性分析，向智能体提供 kanalyzer_* 工具，并向其他插件提供 ctx.kanalyzer 服务。
  `v0.1.21` · [源码](https://github.com/sgzeng/pbfuzz)
- **dsh-acp-door** — 为正在运行的 DeepSeek Harness 内核提供仅监听当前环境回环地址的 ACP 接入点，供 VS Code 等当前环境客户端连接，共用模型、工具、记忆和会话，并支持历史查看、权限切换及调用 DSH 插件已注册的能力。
  `v0.2.0` · [源码](https://github.com/elk-9527/dsh-vscode)
- **dsh-version-update** — DeepSeek Harness 版本管理：对照各 npm 通道或版本线查看已装版本，一键安装或降级，安装日志实时流出（回滚快照复制进度、npm 提取进度、已运行时长），从本地快照秒级回滚，用策略引擎（静默自动更新、执行时间窗、每日检查）托管整个流程。绝不在安装中途终止 npm——卡死的任务要等一小时才会停止，半提交的…
  `v1.4.4` · [源码](https://github.com/SuCriss/dsh-version-update)
- **dsh-apirevise** — 接口回归验收台：登记端点后先快照响应基线，模型改完后端一键重跑，把结构化字段级差异（状态码、字段增删、数值新旧值与差值）与源码 diff 并排展示，逐项验收后再导出 Markdown / 单文件 HTML 报告。
  `v0.1.0` · [源码](https://github.com/Lostforest7/dsh-apirevise)
- **dsh-write-rule-guard** — 在工具执行前拦截 edit/write 写入内容里匹配配置正则的字符，默认匹配全角圆括号，同一回合命中后连带拦截后续 pwsh，报错文案与正则均可配置。
  `v0.3.3` · [源码](https://github.com/better-er/dsh-write-rule-guard)
- **dsh-write-create-only** — 纯 host 端守卫，让 write 工具只允许创建新文件：目标已存在时在执行前直接拒绝并提示改用 edit，全局所有会话生效。
  `v0.1.2` · [源码](https://github.com/better-er/dsh-write-create-only)
- **dsh-compat-vet** — dsh 插件兼容性体检：把已装插件的 peerDependencies 与当前 dsh 运行时比对，提前指出哪些会在下次启动被预检拒绝加载，并给出可直接执行的中文修复命令；dsh web 顶部横幅可按键隔离、卸载或升级，改动前自动备份、复检不过自动回滚。
  `v0.3.2` · [源码](https://github.com/liujianqiao701/dsh-compat-vet)
- **dsh-compat-guardian** — 检查 DSH 插件冲突与加载故障，隔离和恢复受影响的插件，并在宿主无法启动时提供离线修复。
  `v0.2.1` · [源码](https://github.com/Han-1413141/dsh-compat-guardian)
- **dsh-plugin-noema** — 在 Web UI 中展示每轮任务前后的圈复杂度、认知复杂度和最大嵌套深度变化，支持 TypeScript、Python 和 Go，可展开文件和函数查看详情，帮助确定代码审查重点。
  `v0.2.0-rc.2` · [源码](https://github.com/wjw99830/dsh-plugin-noema)
- **dsh-galfree** — 在 DSH 里制作 Ren'Py galgame 的工作台：宿主侧项目服务（写网关 + git 快照、方言子集解析器、推导进度、只由人盖的审读戳、钉版 SDK 校验与试玩、本地发布）收在一条接缝后面，由内置 Web 工作台面板与 agent 工具驱动。
  `v0.2.0` · [源码](https://github.com/netori/galfree)
- **@ryubyte/dsh-a2a** — 为 DSH 实现 Agent2Agent 协议 v1.0：以标准 A2A server 接收其他 Agent 的调用，以 A2A client 连接远程 Agent，并在可视化设置页统一管理连接。
  `v0.3.1` · [源码](https://github.com/ryubyte/dsh-a2a)
- **@zhengjunyao/dsh-updater** — 跟踪 DSH 官方版本并一键更新：读取 npm dist-tags 与 GitHub 更新说明，列出当前版本到目标版本之间每一个版本的更新点，给出分级风险清单（预发布、破坏性变更措辞、当前环境多份安装与 PATH 不一致、插件 dsh.engines.dsh 兼容性、备份与回滚可用性），再把安装交给分离助手——用…
  `v0.1.1` · [源码](https://github.com/zhengjy01/dsh-updater)
- **dsh-update-copilot** — DeepSeek Harness 的更新助手：一次扫描覆盖 DeepSeek Harness 本体和每个 profile 的插件，说清改了什么、风险多大，只更新你确认过的那些。
  `v0.13.0` · [源码](https://github.com/hezhongtang/dsh-update-copilot)
- **dsh-tray-launcher** — Windows 系统托盘启动器：无窗口后台启动 dsh web（VBS/powershell 链），托盘菜单支持打开界面、日志、图标预设、开机自启与重启 Harness，一键安装与更新内置的 dsh-plugin-usage-meter，并可作为 dsh 插件安装使托盘随 Harness 一起启动。
  `v1.5.2` · [源码](https://github.com/fancr-code/dsh-tray-launcher)
- **dsh-simple-restart** — 在「设置 → 通用」增加一行重启按钮：用相同启动参数、经分离的 helper 重新拉起 dsh web；检测到 systemd 监管时默认拒绝（除非 allowRestart 为 true）；判断端口是否空闲用连接探测而非绑定。
  `v0.1.1` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/yizhixiaokong/dsh-simple-restart)
- **dsh-compose-panel** — 在右侧栏列出各 DSH 工作区中的 Docker Compose 项目，按项目目录分组，显示容器状态，支持项目级与服务级 up/stop/restart 以及单服务日志流。
  `v0.1.3` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/yizhixiaokong/dsh-compose-panel)
- **@weibaohui/dsh-fde-tools** — FDE 工具箱全家桶：安装一个插件带上一批常用 dsh 插件（代码仓库 / 挂载盘 / 知识库 / 定时任务 / 自动续跑 / 界面微调 / 自动复盘 / 文件管理 / 智能标题 / 任务看板 / 插件市场 / 上下文 / IM 接入 / 侧栏增强），面板看状态、一键补装。
  `v0.3.6` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-fde-tools)
- **dsh-sentry** — 面向 Sentry 的只读工具：项目列表、组织或项目范围的议题搜索、单个议题详情，以及最新或指定 event 的裁剪后堆栈。局部变量、请求头与请求体、查询字符串、依赖清单以及疑似机密的 tag 会在 event 交给模型前移除；超大 event 会依次降级源码上下文、面包屑与栈帧，而不是直接失败。
  `v0.1.1` · [源码](https://github.com/maxmilian/dsh-sentry)
- **@ethanwong-hk/dsh-thinking-guard** — 空转回合熔断器：监听 agent/assistant-stream，对只产出 reasoning、零文本零工具调用的回合实施三重熔断——45 秒无进展、单次思考超 80000 字符、或命中退化重复模式（精确重复单元/句模重复/稀疏复读/6-gram 密度）。熔断后注入继续指令，要求下一个动作必须是工具调用；附 11…
  `v1.0.2` · 引擎 `>=0.1.0` · [源码](https://github.com/ethanwong-hk/dsh-thinking-guard)
- **dsh-model-health-probe** — DSH 模型健康检查：会话视图页签内按「供应商 → API 类型 → 模型 → 路由」选定目标，手动发一条真实裸 HTTP 请求（支持 openai-completions / openai-responses / anthropic-messages 三协议，流式可切），一屏看清耗时、TTFT、HTTP…
  `v0.3.5` · [源码](https://github.com/fu827707013/dsh-model-health-probe)
- **@dsh-error-tell/client-tell** — dsh web 启动看门狗：检测并持久化禁用问题插件，让界面正常打开，并提供隔离账本、探针自动恢复与一键恢复。
  `v0.1.9` · [源码](https://github.com/dphmoblie/dsh-error-tell)
- **dsh-llm-trace** — 线路层 LLM 检查器：抓取模型调用的原始 HTTP 请求与响应报文，经 llm/stream 瀑布把每次抓取归属到发起它的会话。请求面板把报文渲染成带每节点大小的可折叠树——实测一次请求有 98.6% 是单个 973 项的数组——响应面板则把 OpenAI 风格的 SSE chunk…
  `v0.2.2` · [源码](https://github.com/wpeng77/dsh-llm-trace)
- **dsh-python-env** — 封装了Python虚拟环境管理指令，减少Agent使用终端指令管理环境时遇到的网络问题和权限问题，兼容不同操作系统，工具内部设置自动网络与镜像路由。工具严格受给定读写权限限制。
  `v0.1.2` · [源码](https://github.com/AngelosZou/dsh-python-env)
- **@gwsbhqt/dsh-insight** — 只读的 profile 洞察面板：同一份数据的五个视图——配置层、插件树、服务、工具名、模型，每一条都给出被哪一层插入或禁用、此刻在不在跑。
  `v0.3.1` · [源码](https://github.com/gwsbhqt/dsh-insight)
- **@ch4acko3/dsh-code-render** — 面向 DSH Web 插件的转义与主题响应 HTML 代码块渲染服务，基于结构化语法高亮 token，并保留源码换行符。
  `v0.1.3` · [源码](https://github.com/CH4ACKO3/dsh-render-engine)
- **dsh-updater-npm** — 设置页内的 DSH 更新器 + 官方文档同步器：一键以 npm 全局更新 @deepseek-ai/dsh 并带实时进度（npm 输出流、已运行计时、单调进度条），多副本保护只更新当前运行实例，源码树模式走 git pull；Windows 缺 PowerShell 7 时可一键安装；官方 docs/ 增量同步（按…
  `v1.13.4` · [源码](https://github.com/SiriusWJ/dsh-updater-npm)
- **dsh-service-control** — 通过 `dsh --profile ctl` 管理 DSH 服务：systemd 生命周期（安装、启停、重启、自启、卸载）、持久化配置、健康探测与日志，附带 shell 补全与自更新。
  `v0.2.8` · [源码](https://github.com/lxp731/agents-plugins)
- **@hoyyang/dsh-code-graph** — DSH 原生分支感知代码知识图谱：调用链/影响面/路径/架构覆盖 158+ 语言，保鲜门控，切分支索引自动跟随，单工具分发零 MCP 会话。
  `v0.2.0` · [源码](https://github.com/hoyyang/dsh-code-graph)
- **@tianbuyu-wwx/dsh-hermes-link** — Hermes 与 DSH 的双向桥接插件：将 Hermes 会话导入 DSH、咨询 Hermes，并以单一 Cordis 插件接收 Hermes 下发的任务。
  `v0.6.11` · [源码](https://github.com/Tianbuyu-wwx/dsh-hermes-link)
- **dsh-concurrency-guard** — DeepSeek Harness 并发监控与门闩：模型请求达上限时 FIFO 排队防锁号，按天持久化统计并做异常分类，检测流被弃用的回合中断。
  `v1.5.6` · [源码](https://github.com/fu827707013/dsh-concurrency-guard)
- **dsh-fuhuobi** — 备份 DSH 环境，启动或安装失败时通过桌面"复活币"一键恢复：内置启动守卫做两阶段健康检查（HTTP 200 + 客户端渲染），标记正常启动、隔离或回滚异常启动，并轮换保留 3 份快照。跨平台。
  `v0.3.13` · [源码](https://github.com/q862877400-ux/dsh-fuhuobi)
- **dsh-mcp-skill-panel** — MCP 与技能管理面板：设置页面板实时启停 MCP 服务器与 Skill 释放上下文占用；可选 AI 中间层（mcp_search/mcp_call）按需调用停用服务器，按 server 状态过滤模型可见性（用户打开的保持可见）。
  `v0.6.0` · [源码](https://github.com/lilyblessing/dsh-mcp-skill-panel)
- **dsh-rules-manager** — dsh 规则、命令与技能管理：/rules 斜杠命令、设置面板可视化编辑规则（增改禁用删除、自由区域支持）、带参数的自定义命令、技能管理、AGENTS.md 自动备份与一键恢复。
  `v1.6.0` · [源码](https://github.com/jilian-dsh/dsh-rules-manager)
- **dsh-repair** — 携带一份技能加 6 个 Node 脚本，用来处理装完起不来的 DSH——沿 readiness 之前的引导阶段、profile 下的插件依赖桥与 junction、失效或重复的插件行、以及升级路径逐段排查。脚本默认只诊断，重建脚本只有显式加 --fix 才写盘。
  `v0.1.0` · [源码](https://github.com/gezi-wen/dsh-repair)
- **dsh-bat2exe** — 在 DSH 内把 Windows .bat/.cmd 启动器编译成真正的 .exe：用内置位图字体生成图标，生成调用同目录批处理的 C# 薄壳，经 csc.exe（或 dotnet build）编译，并可选写入开始菜单/桌面快捷方式。
  `v0.1.1` · [源码](https://github.com/nirvanaslash/dsh-bat2exe)
- **@aaronandwork/dsh-evidence-gate** — 实证门——按会话将第一手结论与持久工具活动索引交叉核验、拦截未验证猜测并以台账统计拦截与转化，中英双语界面。
  `v0.2.1` · [源码](https://github.com/AaronandWork/dsh-evidence-gate)
- **dsh-test-insight** — 测试洞察插件：把仓库事实与变更风险转化为有证据支撑的测试计划与隔离、可人工审查的测试草稿。
  `v1.0.0-rc.3` · [源码](https://github.com/duyanta123/dsh-test-insight)
- **dsh-plugin-verify** — DSH 核验工具箱：在工作区文件中核查声明并返回带行号引用的证据，校验配置文件（JSON/YAML），以及只读的 URL / npm / GitHub 提交就绪度探测。
  `v1.1.1` · [源码](https://github.com/863683348/dsh-plugin-verify)
- **dsh-testkit** — 在 Docker 隔离的真实宿主中测试 DSH 插件的安装、启动、工具注册、更新、卸载、重装与恢复生命周期，并输出结构化证据。
  `v0.4.4` · [源码](https://github.com/iiwish/dsh-testkit)
- **dsh-insight-tree** — DeepSeek Harness 的运行可观测与插件运维面板：展示 Profile 插件树、Loader 真实 fiber 状态、能力/依赖/兼容性、本轮会话插件活动与上游来源/版本核验，支持一键关闭/启用/更新/卸载，并提供 DSH 未运行时也能打开的独立启动失败诊断页。
  `v0.1.2` · [源码](https://github.com/xingzhen199186/dsh-insight-tree)
- **@anweat/dsh-substrate** — 在 DSH 启动前诊断重复的 loader entry ID，通过只读设置卡片报告版本锁定的修复状态，并使用外部 CLI 应用或撤销经过审计的 loader 修复。
  `v0.1.2` · [源码](https://github.com/anweat/dsh-substrate)
- **yihe-packs-dsh** — 面向 DeepSeek Harness 的 YiHe pkg-dev 知识包：52 个领域包与 90 个 RFB 经验文件，用于编程认知。
  `v0.2.0` · [源码](https://github.com/ljc6413/yihe-packs-dsh)
- **dsh-plugin-compare** — 对比已有 DSH 会话，或在两套 Agent Preset 之间运行受控 A/B 试验，展示对齐时间线、配对指标差值、显式验收结果与可导出的报告。
  `v0.1.0` · [源码](https://github.com/yminghua/dsh-plugin-compare)
- **request-frame-preview** — 会话头部按钮：预览并下载 DeepSeek Harness 真正发给模型的请求帧——完整 system prompt、声明的工具数组 tools 与 wire 消息数组（system/user/assistant/tool-result），按 agent loop 读取所用的同一会话折叠重建。
  `v0.1.1` · [源码](https://github.com/zampie/request-frame-preview)
- **dsh-stop-service** — DSH Web 设置页的服务控制面板：实时宿主信息（PID、版本、运行时长、内存/CPU 趋势、活跃会话）、npm 更新提醒，以及带确认的优雅停止——任务运行时发出警告，也可等待任务结束后自动停止。
  `v0.6.1` · [源码](https://github.com/KhaosGx/dsh-stop-service)
- **dsh-movein** — 通过原生设置页或 CLI 将 Claude Code 配置迁入 DeepSeek Harness，可先预览技能、命令、代理、hooks、权限规则与 MCP 配置；Codex 和 OpenCode 作为次要来源继续支持，并提供目标冲突保护和迁移后检查。
  `v0.13.8` · [源码](https://github.com/sjh9714/dsh-movein)
- **dsh-plugin-stalegreen** — 为智能体的测试、类型检查、lint 与构建结论提供新鲜度检查：每次验证运行在 tools/post-execute 上记录为凭据，文件修改被跟踪；在 agent/turn-stopping 时，若结论对应的最新凭据已过期、失败或没有可读结果，则引导再走一步，并指出凭据与其后被修改的文件。
  `v0.1.0` · [源码](https://github.com/pavangupta352/stalegreen)
- **@wm-coders/dsh-custom-first-control-prompt** — 通过流拦截将部署级系统提示词段落与参考对话注入每次对话请求，附带 Web 设置面板。
  `v0.3.0` · [源码](https://github.com/WM-CODER/custom-first-control-prompt)
- **dsh-port-inspector** — Windows 本地开发端口来源追踪与安全处理工具。
  `v0.1.2` · [源码](https://github.com/ianho7/dsh-port-inspector)
- **@lanbaolu/dsh-fail-soft** — 自动隔离损坏插件、让 DSH 其余插件照常启动——通过补丁 DSH 自身已安装的内核实现（挂载期隔离 + 补丁自愈），而非 preflight 冒烟测试。附带状态工具与一键恢复面板。
  `v0.1.17` · [源码](https://github.com/lanbaolu/dsh-fail-soft)
- **dsh-task-effort** — 根据任务自动调整模型推理档位（off/low/high/max）：任务分类判定、[effort=...] 显式标记、轮内出错升级、DeepSeek 高峰计价时段自动限档省钱并显示切换倒计时、GUI 手动选择优先。
  `v0.1.0` · [源码](https://github.com/zhangzhenwen1/dsh-task-effort)
- **dsh-code-coverage** — 解析 DSH session 日志归因 AI 生成文件，叠加 c8 覆盖率，产出「AI vs 人工代码」覆盖率对比与信任分，并提供 check/fix/verify 三工具闭环补齐测试盲区。
  `v0.1.1` · [源码](https://github.com/SleepEggTart/dsh-code-coverage)
- **dsh-code-rag-index-panel** — Code RAG 语义索引面板与设置卡片：输入框上方的实时索引条（开始/全量重建/取消），以及一键检测与配置（Qdrant/Ollama/预设/ignore）。
  `v1.4.1` · [源码](https://github.com/Ankali-Aylina/code-rag)
- **@dennisrongo/dsh-headless-plus** — 替换无界面启动流程，为 dsh headless 运行添加 --model provider/model、--resume <id|latest>、--continue 与 --session-info 标志。
  `v0.3.0` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **dsh-claude-plugin-loader** — 把 Claude 风格的插件加载进 DeepSeek Harness（dsh）：扫描 Claude 插件目录，接入 skills、commands 与可选的 SessionStart hooks，支持命令热更新与卸载清理。
  `v0.1.0` · [源码](https://github.com/patrick1099/dsh-claude-plugin-loader)
- **codex2dsh** — 把 Codex（OpenAI Codex CLI / Desktop）的 MCP 服务器、技能、全局指令、记忆与会话历史迁移进 DeepSeek Harness（DSH），支持可视化面板与命令行，带 dry-run 预览。
  `v0.1.4` · [源码](https://github.com/BigBlueBaby/codex2dsh)
- **dsh-adb-logcat** — Android Studio 风格 ADB logcat 查看器，支持实时过滤与等级配色。
  `v1.0.0` · [源码](https://github.com/dxsdyhm/dsh-adb-logcat)
- **@taptap/dsh-maker** — DeepSeek Harness 的 TapTap Maker 集成：提供内置 MCP 工具、Maker 工作流与功能技能，以及用于项目初始化和诊断的随包 CLI 路径。
  `v0.1.1` · [源码](https://github.com/taptap/instant-games-open-mcp)
- **dsh-agentdebugx** — 使用 AgentDebugX 诊断当前及已保存的 DeepSeek Harness 轨迹，并在其仪表盘中打开结构化报告。
  `v0.1.0` · [源码](https://github.com/AgentDebugX/AgentDebugX)
- **dsh-restart** — DSH 重启插件：可配置的重启方式（Node 原生/旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。
  `v0.1.2` · [源码](https://github.com/anweat/dsh-restart)
- **dsh-web-network-optimizer** — dsh网页端网络优化：通过缓存与压缩技术降低传输，从而大幅提升网页加载速度；同时提供网络断连指示与自动断网重连功能。非常适合追求极致性能或网络不稳定用户使用。
  `v0.3.1` · [源码](https://github.com/enterhalf/dsh-web-network-optimizer)
- **dsh-readcache** — 为 DSH read 工具提供版本令牌校验的进程内结果缓存：未变更文件的重复读取跳过文件 I/O 与行渲染，附带 readcache 工具查看统计与清空。
  `v1.0.1` · [源码](https://github.com/yongshuai0314/dsh-readcache)
- **dsh-perfscope** — 一键体检你的 DeepSeek Harness：0-100 健康评分、问题清单，以及写入 profile 的 cordis.patch.yml 的安全可逆一键修复。
  `v0.1.1` · [源码](https://github.com/Evhye38496/dsh-perfscope)
- **@zebbkira/dsh-skills-mcp-manager** — DSH Web 设置内的技能与 MCP 管理器：在项目级与用户级技能目录间浏览/启用/导入/删除技能，并管理 stdio/streamable-http 的 MCP 服务器（真实连接，工具注册为 mcp__<server>__<tool>，配置存 ~/.dsh/mcp.json）。
  `v0.2.0` · [源码](https://github.com/zebbkira/dsh-skills-mcp-manager)
- **@leooday/dsh-bundle** — DeepSeek Harness 运行时治理器：零进展回合引导、按代际绑定的验证证据、基于证据的完成守卫，以及按任务配置限制工具集。
  `v0.1.1` · [源码](https://github.com/Leo-Ayh-Oday/dsh-orcana)
- **dsh-smart-restart** — DSH 重启后唤醒主 agent，让被打断的工作自动接着做；提供一个重启工具，以及可选的探针在启动异常时提前中止并告警。
  `v0.5.1` · [源码](https://github.com/edusrez/dsh-smart-restart)
- **dsh-cursor-acp** — 将独立任务交给同机已登录的 Cursor 命令行，并提供命令行就绪/代理诊断、子模型设置和只读连通性测试。
  `v0.2.0` · [源码](https://github.com/loeanxi/dsh-cursor-acp)
- **@oh-my-dsh/stent-pack** — 类似 MC Fabric 的 hook 处理器。
  `v0.1.1` · [源码](https://github.com/omdsh-dev/stent)
- **dsh-network-settings** — 可视化 DSH 进程在 Windows 或 WSL 上的网络链路（DNS/TCP/TLS/HTTP 分层探测），检测失效的代理配置，并提供带快照回滚的安全修复。
  `v0.3.3` · [源码](https://github.com/kanneiren/dsh-network-settings)
- **dsh-frostfin** — 把 DSH 的 agent loop 换成 Kimi Code（ACP 直连）：审批、斜杠命令、本地与远程（ssh+tmux）会话接入。
  `v0.2.0` · [源码](https://github.com/pzc2004/dsh-frostfin)
- **dsh-langfuse-plus** — DSH（DeepSeek Harness）的 Langfuse 可观测性插件：会话轮次映射为 Langfuse trace 树（同会话经 session id 聚合），提供 Prompt 版本管理与评测能力。
  `v0.1.2` · [源码](https://github.com/FlySnailY/dsh-langfuse-plus)
- **dsh-unplug** — 让 DSH 插件的安装和卸载干净利落——列出所有加载层（Bundle + 补丁行）、完整卸载（清理 Bundle 列表+补丁行+依赖）、临时禁用以调试而不真正删除、以及审计残留的孤立行或悬空引用。CLI 与 agent 均可调用，默认只读，破坏性操作需二次确认。
  `v0.3.5` · [源码](https://github.com/zoahdev/dsh-unplug)
- **dsh-hot-reload** — 插件升级后在运行中的 dsh 内直接重载，无需重启；重载失败时回滚到旧版本并提示手动重启。
  `v0.2.4` · [源码](https://github.com/stuarthu/dsh-hot-reload)
- **@raphelutumn/dsh-change-budget** — 为受支持的文件修改设置可配置的逐回合额度，在工具执行前限制不同文件数、修改调用数与 UTF-8 载荷字节数。
  `v0.1.0` · [源码](https://github.com/Raphaelutumn/dsh-change-budget)
- **dsh-workspace-api** — 把 DSH 工作区暴露为 HTTP API：浏览/搜索/读取文件，并支持自然语言任务（agent 查阅文档后带出处回答）。
  `v1.0.3` · [源码](https://github.com/liaoyonghong/dsh-workspace-api)
- **dsh-auto-exit** — 关闭 DSH Web UI 后自动退出 CLI 进程（等效 Ctrl+C），支持可配置宽限期与试运行模式。
  `v0.0.4` · [源码](https://github.com/xiaxingtianxia2-glitch/dsh-auto-exit)
- **dsh-bash-on-windows** — 让 Windows 上可用的 bash 工具限制为 Git Bash,并禁用 PowerShell。
  `v0.1.0` · [源码](https://github.com/bainianlaoyao/bash-on-windows)
- **harmonyos-dev-mcp-for-dsh** — 把 harmonyos-dev-mcp Python MCP 服务桥接进 DSH：鸿蒙设备发现、构建/安装/运行/卸载、UI 自动化（点击/输入/按键/滑动/截图）、E2E 界面树检查、日志与崩溃分析，共 18 个 mcp__harmonyos__* 工具。
  `v0.1.1` · [源码](https://github.com/NormanFxxkingRockwell/harmonyos-dev-mcp-for-dsh)
- **dsh-quality-score** — dsh 插件质量评分卡：0-100 分 + 等级 + 六项分项，逐项修复建议，支持批量榜单 - CLI + agent 可调用 quality_score 工具。
  `v0.1.4` · [源码](https://github.com/zoahdev/dsh-quality-score)
- **dsh-fail-logger** — 全模式调用工具失败自动实录：把原生工具 / PTC run_code / 代码内嵌工具调用的失败错因去重计数后写入 skill，越用越少错。
  `v0.5.2` · [源码](https://github.com/Areium/dsh-fail-logger)
- **dsh-profile-multica** — 通过版本化 JSONL 进程协议将 Multica 接入 DeepSeek Harness。
  `v0.1.0` · [源码](https://github.com/caizhihaoczh/dsh-profile-multica)
- **dsh-desktop-shortcut** — Windows 桌面快捷方式：一键启动 dsh web，就绪后自动打开浏览器，关闭 Harness 窗口即停服务。
  `v0.2.7` · [源码](https://github.com/fuyue521/dsh-desktop-shortcut)
- **dsh-start** — macOS 上 DSH Web 的一键启停启动器：前台/后台启动、停止、状态、防重复启动、自动打开浏览器，并可用脚本构建程序坞版 DSH.app。
  `v0.1.2` · [源码](https://github.com/zhengjy01/dsh-start)
- **dsh-quickref** — 开发者速查工具箱：12 个主题 195 条速查 + 6 个零依赖工具（正则实时测试、JSON 格式化、时间戳转换、Base64/URL 编解码、Cron 生成、行 diff），设置页可搜索查阅。
  `v0.1.0` · [源码](https://github.com/worksAssistant/dsh-quickref)
- **dsh-builtin-toggles** — DSH Web 内置 capability 的 evidence-backed 检查器：展示运行/配置溯源、兼容性与漂移诊断，并仅为 9 个经过审阅的 UI leaf 提供 fail-closed 控制。
  `v0.3.2` · [源码](https://github.com/Starfie1d1272/dsh-builtin-toggles)
- **dsh-evolution-lab** — 带证据的 Skill 自进化：脱敏轨迹学习、隔离提案、竞技场验证、金丝雀监控与自动回滚。
  `v0.3.1` · [源码](https://github.com/JayDong9130/dsh-evolution-lab)
- **dsh-startup-guard** — 启动守卫：修复会话日志、预检插件组合、校验客户端工件、冒烟宿主 apply() 并隔离崩溃源，让坏插件再也无法砖掉启动。
  `v1.0.0` · [源码](https://github.com/aokamoaki/dsh-startup-guard)
- **dsh-myrules** — 在设置页的「个性化」页编辑此主机全局指令（~/.dsh/AGENTS.md），此机器上的所有会话都会应用。
  `v0.1.1` · [源码](https://github.com/Relistencode/dsh-extension-hub)
- **dsh-mcp-lens** — 渐进披露 MCP 网关：用 `mcp_search` 检索大型远程工具目录，再由 `mcp_call` 按精确 schema 调用，并采用惰性连接与有界缓存。
  `v0.1.0-rc.9` · [源码](https://github.com/labmimors/dsh-mcp-lens)
- **dsh-web-shell** — 右侧停靠的可折叠 Web 终端（xterm.js），经 WebSocket 桥接宿主 PTY：支持 bash/zsh 切换、拖拽调宽，折叠时保留会话。
  `v0.1.1` · [源码](https://github.com/JesmonX/dsh-web-shell)
- **dsh-time-machine** — 创建本地内容寻址工作区存档，提供差异预览和两阶段确认恢复。
  `v0.1.0` · [源码](https://github.com/zjukop/dsh-time-machine)
- **dsh-devtools** — 面向 DSH Agent 的运行时分析器：查看 Turn/Step 轨迹、模型与工具耗时、Provider 用量、重试与错误，实时与历史会话都能看。
  `v0.1.1` · [源码](https://github.com/izz-BLUE/dsh-devtools)
- **dsh-check-update** — 更新检查器（npm 版）：设置页对比 @deepseek-ai/dsh 与已装插件的本地/最新版本，有更新时导航红点提醒，并直接给出更新命令。
  `v0.3.0` · [源码](https://github.com/HuiHuitie-zhu/dsh-check-update)
- **dsh-boot-guard** — 独立于常规客户端插件加载链的 DSH Web 启动救援工具，可定位疑似故障插件、临时跳过，并且只恢复 Boot Guard 写入的配置。
  `v1.1.2` · [源码](https://github.com/SaiSenBox/dsh-boot-guard)
- **dsh-prometheus** — 导出有界的 DSH Session、Agent、LLM、Tool、Approval、Subagent 与 Job Prometheus 指标，附带 Grafana 仪表盘，Endpoint 默认仅监听回环地址。
  `v0.1.0` · [源码](https://github.com/xxiaoxiong/dsh-prometheus)
- **@jorinyang/dsh-doctor** — DSH 环境诊断、分级修复与一键回滚，附带运行时自愈服务。
  `v0.3.2` · [源码](https://github.com/jorinyang/dsh-doctor)

## 工作流与自动化 · workflow（212）

- **@michengai/dsh-automation** — 在独立会话里按计划执行编码任务，可在设置页或对话里管理。
  `v1.0.10` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-automation)
- **@stardustlc/dsh-suite** — STARDUSTLC 插件全家桶·组合补丁：与 18 个组件插件配套，一条命令统一注入默认配置（办公流/媒体工坊/DevOps/通知/预设）；组件经一行 add 命令直装（扁平化设计，无 git 子依赖）。
  `v0.2.36` · [源码](https://github.com/STARDUSTLC666/dsh-suite)
- **@mstar-harness/dsh** — 技能驱动的 harness/loop 工程化工作流插件。
  `v4.0.9` · [源码](https://github.com/btspoony/mstar-harness)
- **@godv61/dsh-task-engine** — 为 DeepSeek Harness 提供预设工程流程：dev_task 工具把阶段流转、产物、验证、审核与提交范围做成硬门禁，并带一个安装项目级与个人级技能和规则的工作台。
  `v0.34.0` · [源码](https://github.com/godv61/dsh-task-engine)
- **@bushizhanghan/dsh-page-monitor** — 网页监控哨兵：把一批网页加入监视清单，每次巡检抓快照、用 bigram-Dice 变化率与关键词判断变化是否重要，重要变化写日志并推送企业微信 webhook；提供 page_watch_add/list/check/history/remove 工具，可选 lexmount 通道穿透 JS 反爬 WAF 页面。
  `v0.1.2` · [源码](https://github.com/bushizhanghan/dsh-page-monitor)
- **dsh-cliworker-now** — 适用于 macOS / Windows 和 DeepSeek Harness 0.2.0-rc.2 的多 CLI 智能体侧栏插件，提供任务派遣、实时对话查看、停止与续聊及自定义角色预设。
  `v0.8.3` · [源码](https://github.com/SuperWheel/dsh-cliworker-now)
- **dsh-novel-solo** — DeepSeek Harness 的「单核写作」插件：面向量化小模型做了充分的工具瘦身与输出加固，适合在当前环境用本地模型跑长篇小说流水线。
  `v0.2.2` · 引擎 `0.1.6-alpha.1 || 0.1.6-alpha.2 || 0.1.7-alpha.1 || 0.1.7-alpha.2 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-alpha.3 || 0.2.1-rc.2 || 0.2.1-rc.3 || >=0.1.7-alpha.1` · [源码](https://github.com/Tkingxiao/dsh-novel-solo)
- **dsh-notes-plugin** — DeepSeek Harness 的可治理 Agent 工作记忆层，沉淀为本地 Markdown 笔记：双模式编辑器（源码⇄富文本，支持图片），约定/资料笔记自动注入系统提示（敏感值自动脱敏），另有快照版本历史、回收站、可撤销归档、AI 整理、双链与全文搜索。兼容 DSH 0.1.7～0.2.x。
  `v0.6.3` · [源码](https://github.com/PPawnsir/dsh-notes-plugin)
- **dsh-agent-board** — DeepSeek Harness 会话任务看板：主窗口把任务派发给一次性 Worker/Verifier 子代理执行与验收，支持依赖调度、文件级排他锁、裁决挂起冻结、里程碑进展上报与任务级 Token 消耗统计。
  `v1.8.4` · [源码](https://github.com/PPawnsir/task-board-plugin)
- **@norman-else/dsh-claude** — 将 Claude Code 作为 DSH 会话运行，同时保留其原生智能体循环、工具、技能、钩子和 MCP 集成。
  `v0.1.67` · [源码](https://github.com/Norman-else/dsh-claude)
- **@banana-peeljj12/dsh-trellis** — 为 DeepSeek Harness 打造的 Trellis 风格工作流：基于 agent/pre-step 的每轮速记注入、内置技能提供方，以及带 git 清洁度护栏的 DSH 原生任务与相位状态管理。
  `v0.4.6` · [源码](https://github.com/1264459640/dsh-trellis)
- **dsh-baton-host** — 通过当前环境仅限当前用户的 socket，接收 Claude Code、Codex 或任意 MCP 客户端（经 dsh-baton-mcp）交来的任务：新建或继续指定的 Harness 会话，在界面里实时运行并标注发送方，回合结束后把结果交回。12 个 MCP 工具覆盖工作区、会话和运行。
  `v0.5.9` · [源码](https://github.com/JialaoLiu/dsh-baton)
- **dsh-advisor** — 搭配一个副模型，每轮被动审查并注入见解。
  `v0.6.3` · [源码](https://github.com/omdsh-dev/dsh-advisor)
- **dsh-agents-init** — /agentinit 命令：在子代理里生成、修订或审计仓库的 AGENTS.md。方法文档由子代理自己读取，写下的每条命令与路径都用随包的只读检查器核验，主对话不进入任何指令正文。随包的检查器是 Python 脚本，需要 Python 3 在 PATH 中。
  `v1.0.0` · [源码](https://github.com/OZONGO/dsh-agents-inits)
- **dsh-work-assistant** — 微信工作助理：把你交代的事记进 SQLite 任务账本，按紧急度排序，到点提醒，从笔记里抽取人物与关系，并把任务分派给独立的助手会话。自带微信机器人通道（扫码登录，仅私聊）与整页仪表盘。
  `v0.5.6` · [源码](https://github.com/544244857/dsh-work-assistant)
- **dsh-step-governor** — 为 DSH 代理提供确定性步数治理，在超预算的 agent 步执行前拒绝、在风险工具调用执行前阻断，默认影子模式，出错时放行不阻断业务。
  `v0.1.4` · [源码](https://github.com/JiewiW/dsh-step-governor)
- **deep-read-summarize** — DSH 精读与摘要：书籍/论文/视频/网页经可插拔解析器转成结构化 Obsidian 笔记，MapReduce 并行精读子代理、JSON Schema 输出与幂等缓存。
  `v0.3.19` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/PensiveFei/deep-read-summarize)
- **@contexera/dsh-agent-team** — 给 DSH 一个可长期协作的持久 Agent 团队：Agent 是持久身份，Workspace 按项目组织，Channel 承载职责分派，Task Thread 串联多个 session agent 协作推进。
  `v0.2.5` · 引擎 `>=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Contexera/dsh-agent-team)
- **dsh-novel-workbench** — 一页式小说创作工作台：章节看板、候选稿逐段评审与合稿、带索引头的剧情总结，以及由大纲、人物卡与前文拼成的写作包。还能导入几本成品书，一次跑完粗扫、精读、汇总并融合成一套写法标准，写进偏好档案，之后每次生成都照着它来。
  `v3.4.2` · [源码](https://github.com/ShanJun-pro-max/dsh-novel-workbench)
- **dsh-todo-ledger** — 把仓库里的任务账本做成常驻提示段与十一个原生工具，另有侧栏面板与浮动窗，可浏览队列并签收待复核任务。
  `v0.3.1` · 引擎 `>=0.1.0-0 <0.3.0-0` · [源码](https://github.com/haruri03/dsh-todo-ledger)
- **get-fable** — DeepSeek Harness 的模块化执行纪律与自主管家：覆盖 44 项规范技能的循证路由、持久化状态规划、验证门禁、失败恢复与交互式 Web 看板。
  `v1.16.1` · [源码](https://github.com/imMamdouhaboammar/get-fable)
- **dsh-super-code** — 提供一个更快、更节省、更准确的编码 Agent 预设。在按多维难度规则筛选的 SWE-bench Pro 高难度 100 题评测中，平均耗时减少 36%，平均每题输入 token 减少 17%，正确率提高 5 个百分点。
  `v0.3.7` · [源码](https://github.com/ArtlexYoung/dsh-super-code)
- **dsh-expert-orchestrator** — 多智能体编排 agent preset：首席编排者不亲自实施——先分诊、请 PM 专家规划、经合并专家花名册（召唤工具）把实施委派给领域专家，依赖 DAG 任务板与落盘消息总线调度并行协作，交付前经独立评审门禁。出厂内置 11 位核心专家；更多专家团（Agency agents 中英文、classic…
  `v2.11.2` · 引擎 `>=0.1.7-alpha.2 <0.2.0-0 || >=0.2.0-rc.1 <0.3.0-0 || >=0.2.1-0 <0.3.0-0` · [源码](https://github.com/mario841859784/dsh-expert-orchestrator)
- **dsh-taskboard** — dsh 的任务看板：创建任务时可指定项目与模型，支持手动执行及定时执行；项目内新建会话会自动拉取该项目的待办任务，完成后移至待验收。
  `v0.9.4` · [源码](https://github.com/cloader/dsh-taskboard)
- **dsh-awesome-agent-preset** — 专为日常编码打造的极简 Agent 预设插件：移除沉重编排机制与冗余组件，直达核心工具循环，响应迅速。
  `v1.9.0` · [源码](https://github.com/Jaylor-Wang/dsh-awesome-agent-preset)
- **dsh-novel-forge** — 小说写作护栏插件：20 个 novel_* 工具以代码强制事实账本一致性、阶段与落盘门禁、确定性机审与提案制修订；右侧栏工作台提供阅读/听书/润色/校对/全书体检/批量起草，旁路引擎让内部工序不占主对话。
  `v1.0.5` · [源码](https://github.com/huangziyuan-general/dsh-novel-forge)
- **@ifrankwang/openspec-agents** — 面向 OpenSpec 变更的按阶段门禁多 Agent 编排：6 个 opx_* 工具驱动阶段状态机，开发者与审核人两个 agent preset 分工实施与审查，23 份内置 skill 定义审查基准；完整流程为 analyze、实施、工具/任务/维度质量三层审查，精简流程为实施加一次合并质量审查。
  `v0.151.1` · [源码](https://github.com/ifrankwang/openspec-agents)
- **dsh-later** — 给 DSH 加上定时提醒与延迟发送：一句话到点送达——/later 以你的身份发出，定时面板或 /schedule 发提醒行；关掉网页也准时触发。（定时发送 / 定时提醒 / 延迟发送 / 提醒）
  `v1.7.0` · 引擎 `>=0.1.1-rc.2 <0.2.0-0 || >=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/dsh-plugin-collection/dsh-later)
- **dsh-crabtodo** — DeepSeek Harness 的人机共享待办：你和 AI 通过侧边栏或待办工具管理同一份任务，支持项目级与全局待办，并可一键把任务引用进输入框。
  `v0.2.3` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/yixing233/dsh-crabtodo)
- **@goodandready/dsh-cron** — 为 DeepSeek Harness 提供定时任务、后台自动化与 Agent 执行。
  `v0.3.20` · [源码](https://github.com/GooDAnDReaDY/dsh-cron)
- **dsh-modes** — Agent 模式（预设）设置页：按模式开关最多 15 项能力（运行命令、读写或只读文件、网页、子代理等），也能逐个开关插件；编辑每个模式的系统提示词，带变量校验、完整预览和历史版本，可选让正在运行的会话即时生效，并提供每次保存都需审批的对话内修改工具 mode_prompt；用四个起步模板或复制现有模式新建模式；dsh…
  `v0.9.0` · [源码](https://github.com/xiaohai-78/dsh-modes)
- **dsh-n8n-plugin** — DeepSeek Harness 的 n8n 工作流运维插件：多实例注册表、Agent 工具与设置页界面。
  `v0.1.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/lchqi1998/dsh-n8n-plugin)
- **oh-my-dsh-slim** — 合理搭配你的模型及 Token 额度，让 DSH 按任务类型自动委派专业子代理，覆盖架构分析、UI/UX、代码实现、代码库探索与文档调研。安装后自动配置，并支持按角色设置思考强度和工具权限。
  `v0.8.4` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/ninipa/oh-my-dsh-slim)
- **@weibaohui/dsh-process** — 工艺管理：把 ntd 的「工艺」（多阶段·多环节 agent 工作流模板）接进 dsh web——浏览/编辑/校验/导入导出/AI 生成工艺，内置库只读、我的库可写，文件改动实时同步；agent 可通过 process_* 工具读工艺库、按工艺分阶段推进。
  `v0.6.9` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-process)
- **dsh-openwrite** — 面向 DSH 的小说创作工作台，提供创作预设、大纲与人物管理、正文批注、审稿流程和受管理的本地 Python 后端。
  `v0.2.25` · [源码](https://github.com/LiPu-jpg/Openwrite)
- **@dely0/dsh-personal-workbench** — 日历 + 层级任务个人工作台：AI 辅助澄清、咨询、拆解、执行（用户验收）与复盘，支持到期提醒与按任务组织的 AI 会话工作区。
  `v1.17.1` · [源码](https://github.com/Dely0/dsh-personal-workbench)
- **dsh-research-report** — DeepSeek Harness 的可核查研究报告引擎：通过内容寻址的证据台账和版本化封存报告使每条结论携带核查结论，由 manifest 哈希封存目录，检索编排复用 ctx.web 与 ctx.jobs 接口。
  `v0.3.30` · 引擎 `>=0.1.6-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-research-report)
- **dsh-long-novel-workbench** — 长篇中文小说工作台：章节、时间线、事实账本、伏笔、冲突、人物、高光、审稿、提案、计划对齐、11 个 Agent 分工、名家风格预设，并内置 AI 生成与审稿。
  `v0.5.1` · [源码](https://github.com/micellince/dsh-long-novel-workbench)
- **dsh-plugin-agent-collaboration** — DSH 里的常驻 Bot 与群聊房间——每个 Bot 都有自己的模型、权限预设、工作区与重启后仍在的会话，每次回答都是一条写进运行记录的 run，侧栏面板据此回放。
  `v0.3.5` · [源码](https://github.com/Leo-sail/dsh-plugin-agent-collaboration)
- **odai-dsh-plugin** — 面向整个 DSH profile 的治理与路由 bundle，提供用于职责与证据检查的 Web Control Center，以及压缩、本地作用域语义记忆、安全连续性与真实验收；兼容 DSH 0.1.5-rc.1。
  `v0.2.56` · [源码](https://github.com/orziz/odai)
- **@sakura12/oh-my-deepseekharness** — DeepSeek Harness 的多智能体编排层——autopilot/ralph/team 三种执行模式、19 张角色卡、40 个双语技能与内置 MCP 状态服务，移植自 oh-my-claudecode。
  `v0.5.1` · [源码](https://github.com/1225Sakura/oh-my-deepseekharness)
- **@maximehu97/dsh-meeting** — 局域网多智能体会议协商：每人一个助理，助理通过 mDNS 互相发现，用 A2A 报文协商排会、周末团建和奶茶投票。对外只给忙闲不说原因，占用本人保护的时段前先问本人。DSH 侧栏自带手机样式页面和 13 人示例公司。无鉴权，仅限可信局域网。
  `v0.3.0` · [源码](https://github.com/maximehu97/dsh-meeting)
- **@1agents/acp-service** — 通过 ACP 使用持久化的 Codex、Grok Build 和 Claude Code 会话，支持原生模型控制、权限审批及可选的 A2A 委派。
  `v0.8.3` · [源码](https://github.com/scottzx/1acp)
- **@lemoncat7/dsh-partner** — 提供隔离记忆、微信渠道、Skill、定时任务、伙伴挂念与依赖任务看板的长期 AI 伙伴。
  `v2.8.7` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/lemoncat7/dsh-partner)
- **@yunmiao/studymate** — 你的AI学习搭档：定计划、讲知识、做项目，学透一门科目。
  `v2.0.3` · [源码](https://github.com/Miaotofu01/Study-Mate)
- **dsh-punky-swarm** — dsh 单机多子 Agent 集群治理：引擎级质量门禁拒收半成品、崩溃断点续跑不重来——给 AI 团队装上"跑不坏"的工程护栏。
  `v0.5.2` · [源码](https://github.com/Punky971210/dsh-punky-swarm)
- **@goodandready/dsh-kanban** — 为 DeepSeek Harness 提供可视化看板，支持 Gitea 任务、工作流列和每任务独立 Agent 会话。
  `v0.2.38` · [源码](https://github.com/GooDAnDReaDY/dsh-kanban)
- **dsh-crew** — 以角色团队的方式干活：产品经理先写 PRD 或 DoD 并等你确认，再启动架构师、工程师、QA 与各类评审；每个角色的工具集按角色锁定，彼此通过磁盘文件协作。
  `v0.13.0` · [源码](https://github.com/stuarthu/dsh-crew)
- **spec-wave** — DeepSeek Harness 的 ICVO 编码规范套件（原 dsh-coding-kit）：bundle 插件加载时仅注册工具，须调用 apply_coding_standards 才注入规范；另附 P0 门禁 CLI（npx spec-wave），含 G1–G7 过程命令、skills…
  `v3.5.0` · [源码](https://github.com/Cyning12/SpecWave)
- **dsh-root-planner-preset** — dsh agent 树的递归委派：用预设与 Host 限制划定每个子 agent 的能力边界，子 agent 在各自 _agents/ 工作区独立工作，成果由父 agent 决定是否合并、如何合并。
  `v1.6.1` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/XiaoOu2024/dsh-root-planner-preset)
- **@nanmicoder/dsh-agent-teams** — AgentTeams 多智能体团队。
  `v0.1.26` · [源码](https://github.com/NanmiCoder/dsh-agent-teams)
- **@alpacachen/dsh-kanban** — 一个由用户与 DSH Agent 共同维护的工作区看板，通过看板标签页和 kanban 工具管理任务。
  `v1.8.0` · [源码](https://github.com/alpacachen/dsh-kanban)
- **dsh-model-failover** — 两级模型熔断与回退：模型或平台连续失败后自动熔断，并把下一个请求路由到配置好的备用模型。
  `v0.1.8` · [源码](https://github.com/Letter2025/dsh-model-failover)
- **dsh-multitask** — Multitask 减震器模式（Agent preset）：主对话只做需求理解、任务下发与结果汇总，读文件、跑命令、搜索与构建全部下放子代理；含四类 worker、危险操作审批闸门，且零 DSH 源码改动。
  `v1.2.22` · [源码](https://github.com/Senguk520/dsh-multitask)
- **dsh-doubao-image** — 豆包网页生图 Agent 原生工具插件：向 Agent 注册 doubao_generate_image 与 doubao_image_status 工具，通过 Tabbit 操控 doubao.com 提交生图提示词、选择比例与风格，自动优选 2.7K wm0 无水印超清原图落盘并注入对话附件。
  `v0.1.0` · 引擎 `>=0.1.0-0` · [源码](https://github.com/xt765/dsh-doubao-image)
- **dsh-study-desk** — 备考与科研学习工作台：三列待办墙（标签与过滤）、间隔重复复习队列（简化 SM-2，已完成的卡照样会到期）、按实际专注分钟点亮的热力图、周报、每日复盘、跨面板存活的番茄钟，支持 Markdown 导出与读回（Obsidian 友好）。可 `dsh plugin add` 安装（npm 包 dsh-study-desk）。
  `v0.7.0` · [源码](https://github.com/slow-stack/dsh-study-desk)
- **dsh-first-principles** — 可机械核对的第一性原理台账：事实必须落回真实的 文件:行 并逐字引用那里的话，假设必须写明什么情况下它错了，结论不得依赖一个永不回来复查的假设；台账可带复查日期、置信度与止损条件。附带校验工具、/fp 命令族、不可逆命令前的可选闸门，以及列出每轮修掉哪些错误码的面板。
  `v0.3.1` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/fengt8291-lab/dsh-first-principles)
- **dsh-agent-studio** — 可视化地自定义配置 Agent 的提示词、工具、可见技能、子代理与备用模型，把它们编成一支团队。不写宿主的任何预设文件。
  `v0.1.8` · 引擎 `>=0.2.1-alpha.2` · [源码](https://github.com/thissensen/dsh-agent-studio)
- **dsh-qa** — dsh 质量项目工作台：通过浏览器界面和 18 个 QA 领域工具管理测试项目、需求、用例、缺陷、里程碑、报告与审批门禁。
  `v0.7.3` · [源码](https://github.com/naodeng/dsh-qa)
- **dsh-batch-triage** — 确定性工单分诊：规则先处理明确案例，放不下的统一返回 needs_review，而不是猜。
  `v0.1.4` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/Phocinae/dsh-batch-triage)
- **dsh-plugin-folder-trust** — 仅 Windows：新增工作区时授权一次，补齐 workspace-write 沙箱所需的 NTFS 权限，并把授权与 Low 完整性标签铺进已有子目录；修复过程带实时进度与日志。
  `v0.2.0` · [源码](https://github.com/drliuhuan/dsh-plugin-folder-trust)
- **dsh-graph** — dsh 目标生命周期管理与可视化看板：目标、判据、执行、评审都在项目内跟踪，由 graph_* 工具驱动，会话视图内渲染二维泳道看板。
  `v0.22.0` · 引擎 `>=0.1.5-rc.2 <0.2.2-0` · [源码](https://github.com/miuzel/dsh-graph)
- **dsh-paoding** — DSH 编排模式预设生成器：主 agent 指挥，四个内置帮手各只带本行工具；Web 面板按工作区增删帮手，可给自定角色配专属工具、技能与模型——零 DSH 源码改动。
  `v0.4.6` · 引擎 `>=0.1.5 <0.3` · [源码](https://github.com/lifangjin/dsh-paoding)
- **dsh-agent-team-presets** — DeepSeek Harness 的可复用智能体团队预设：设置页保存具名团队——队长带自己的提示词与工具白名单，成员各自带 provider/模型路由、推理强度、提示词与工具——编辑器栏的团队控件把选中的团队应用到当前会话，安装队长提示词，并注册 spawn_team_member、get_team_preset、up…
  `v0.1.6` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/bloodarea/dsh-agent-team-presets)
- **dsh-odoo-sdd** — 面向 Odoo 的规范驱动开发流水线：15 个工具把需求从不可变规范推进到架构、再到模块代码或线上配置，最终要求一个由真实 Odoo 实例证据支撑的持久判定；闸门 fail-closed，批量操作需在声明的环境中经人工批准，复用 Odoo 自带的 CSV／Excel 导入器，并有一份可回滚本插件所写数据的日志。
  `v0.17.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/fhidalgodev/dsh-odoo-sdd)
- **dsh-image-gen** — 为 DeepSeek Harness 提供原生对话生图能力：直接让 Agent 画图，插件自动完成生成并把结果保留在当前会话中。
  `v0.9.2` · [源码](https://github.com/shanliuling/dsh-image-gen)
- **@istarry/dsh-scheduled-tasks** — 定时任务：按周期定时执行提示词，每次触发都开启全新会话，并保留运行记录。
  `v0.1.2` · [源码](https://github.com/iStarryDust/dsh-scheduled-tasks)
- **dsh-expert-group** — 基于角色的专家子代理并行协作，各角色可配置模型与思考深度，并提供 Expert Group 任务侧栏。
  `v0.1.7` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/NTOIOTN/dsh-expert-group)
- **dsh-doublecheck** — 工程纪律守门：动笔前审讯需求，红绿测试证据门，交付后对抗评审，并汇总交付报告与逐维度核对。
  `v0.9.29` · 引擎 `>=0.1.6-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-doublecheck)
- **@cckyros/goal-acceptance** — 验收标准驱动的目标完成：锁定可验证的验收标准、跟踪任务依赖，以 reviewer 正式验收作为完成门禁（18 个 MCP 工具）。
  `v0.3.0` · [源码](https://github.com/cckyros/goal-acceptance)
- **@hhuangpanda/dsh-automation** — 在全新的 DSH 会话中运行单次或周期 Agent 任务，支持自然语言计划、可视化计划编辑和会话关联历史。支持自定义模型、技能、失败时暂停以及权限设置。
  `v0.3.35` · 引擎 `0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || >=0.2.1-rc.1 <0.2.1` · [源码](https://github.com/hhuangpanda/dsh-automation)
- **@ziduup/dsh-programming-mode** — 编程模式 agent preset 组合包：标准编码 Agent 强制执行 Superpowers 工程纪律（技能优先、先头脑风暴、先计划后编码、TDD、系统化调试、完成前验证），并常驻 Ponytail 代码量纪律（7 级最小化阶梯，默认 full）；内置全部 20 个技能（14 superpowers + 6…
  `v0.4.1` · 引擎 `>=0.1.3-alpha.2` · [源码](https://github.com/ziduup/dsh-programming-mode)
- **@kira905/dsh-task-board-local** — 自维护的 DSH 网页任务看板：带人工验收闸门、卡片类型与已执行卡片的可编辑备注。
  `v1.1.5` · [源码](https://github.com/kira905/dsh-task-board-local)
- **dsh-test-framework** — DSH 测试工作框架：把空文件夹初始化为产品、模块、版本、报告与归档目录树，注册 7 个 test_framework_* 工具与 4 个运行时技能，并提供提示词级闸门——开测前报告需求文档拆分、版本、跨文档关联与环境账密中尚未登记的部分。需先配置 playwright MCP（无替代路径）。
  `v0.3.1` · [源码](https://github.com/liujianqiao701/dsh-test-framework)
- **dsh-complex-project-preset** — 给 DSH 的 Agent 预设：标准模式的工具栈，外加写进人格提示的四条工作纪律——每个项目最多四个文档（项目介绍、方案设定、改动记录、现状与下一步）；文档只写当前状态，不记 AI 修改历史、不留被推翻的旧方案；用户没有明确指令就不提交、不推送、不开 PR；动手前先复述目标与验收标准、只做手术式最小改动、没验证不说已…
  `v1.0.1` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/sueqet/dsh-complex-project-preset)
- **@mzzsfy/dsh-cron-board** — 定时任务看板：cron 调度本地脚本或 dsh 会话任务（每次新建/固定会话），环境变量集中管理，执行日志与并发/超时控制。
  `v0.6.1` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-plugin-teamflow** — 把一句话需求变成可验收的交付。TeamFlow 跑一条多阶段流水线——分诊、PRD、设计、技术方案、并行开发、带打回重修的 QA、验收——并给模型 12 个 `teamflow_*` 工具，以及带实时流水线图与 backlog 看板的工作台。每个需求一个专属目录，收着 PRD、设计、技术方案、QA 报告与验收记录。
  `v0.3.1` · 引擎 `>=0.2.1-alpha.2 <0.3.0` · [源码](https://github.com/MichaelShii/dsh-plugin-teamflow)
- **@y9931666/dsh-plugin-crossfire** — 对抗式评审：把一个已定稿的方案摆上台，让只读红队专家按维度分头攻击，再把发言拆成逐条可裁决的缺陷由你逐一认定或驳回。它不产出方案、不改代码、不自动修复。
  `v0.1.3` · [源码](https://github.com/9931666/dsh-plugin-crossfire)
- **dsh-swarm-orchestrator** — DeepSeek Harness 的角色化 AI 蜂群：架构师规划、多个建造者并行执行、评审代理把关、集成代理收尾。按角色钉选模型（含回退链），支持评审循环、证据合约、人工评审门、配额耗尽自动暂停与恢复，Web GUI 内置实时看板与任务流程图。40 个测试用例；支持 GitHub 或 npm 安装。
  `v0.6.32` · [源码](https://github.com/linkbag/dsh-swarm-orchestrator)
- **dsh-codex-workflow** — 协调 Codex 制定计划和独立审查，由 DSH 原会话完成代码修改与测试。
  `v1.1.14` · 引擎 `^0.1.7-rc.2 || 0.2.0-rc.2 || 0.2.1-rc.2` · [源码](https://github.com/kui123456789/dsh-codex-workflow)
- **dsh-nexus** — 个人编码助理：在 DSH 中安排、跟进与验收当前环境 Codex 或 Claude Code 任务，并提供微信、企业微信与飞书远程渠道。
  `v0.2.62` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/yuqiguang/dsh-nexus)
- **dsh-context-window** — 在底部聊天输入框的模型选择弹窗中扩展第三行【上下文窗口】，支持 64K~2M 档位切换、自定义容量输入、提供商批量同步与自适应压缩防失败守卫。
  `v0.1.0` · [源码](https://github.com/xt765/dsh-context-window)
- **iterate-plugin** — 把 iterate 技能跑成自主闭环：规划、并行审查、原子修复、验证、循环、自动停止，并支持纯评审的 dry-run 模式与元评审最终报告。
  `v3.9.2` · 引擎 `>=0.1.1-rc.1` · [源码](https://github.com/jingzhao-l/iterate-plugin)
- **@statedock/dsh-plugin** — 通过 StateDock Remote MCP 提供共享计划、上下文恢复与进度更新 Skills，不执行任务或调度 Agent；适配 Harness 0.2.0-rc.2。
  `v0.1.1` · [源码](https://github.com/statedock/statedock-plugins)
- **dsh-lowtide** — lowtide（退潮）插件能够实现闲时自动批量跑任务——任务框架高度自定义，四种执行策略，L1–L3 半自动/全自动裁决，支持任务编辑与预检，Cordis 微内核集成，桌面网页端通用。
  `v0.2.8` · [源码](https://github.com/KelaoHu/dsh-lowtide)
- **dsh-subagent-library** — 具名子代理名册：设置页可视化维护角色条目（模型、persona、工具过滤、深度、后台模式），热生效；模型用 list_subagents 选人、delegate 按 id 派活，支持前台、后台与可续聊。
  `v0.3.5` · [源码](https://github.com/MaRi23333/dsh-subagent-library)
- **dsh-task-reliability** — 任务可靠性：模型超时/请求失败自动重试、任务未完成自动继续、独立完成度校验、思考重复检测打断、休眠/重启后任务自动恢复、自主决策模式、远程触发接口（npm: `dsh-task-reliability`）。
  `v0.4.11` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-minimal-ptc** — 极简提示词 × Web PTC 能力：一句人格、run_code SDK、子代理、Ralph、网页搜索/抓取与 Windows Git Bash；通用 workflow 工具保持隐藏。
  `v0.5.6` · [源码](https://github.com/STARDUSTLC666/dsh-minimal-ptc)
- **dsh-todo-reminder** — 全局个人待办（与任何会话无关）：侧边栏面板 + 贴边待办条（悬停探出、快到点自动弹开），到期桌面通知与自定义音效。
  `v0.3.0` · [源码](https://github.com/Meltllsy/dsh-todo-reminder)
- **dsh-plugin-orchd** — 把 orchd 项目状态带进 DSH 右侧栏的只读面板：任务看板、想法看板、依赖图、审查时间线与接入入口，只跟当前会话的项目。
  `v0.1.0` · [源码](https://github.com/7bder/dsh-plugin-orchd)
- **@zzerx/dsh-plugin-daily-log** — dsh 工作报告：汇总 Git 提交与本地 agent 对话（DeepSeek/Claude/Codex），按自定义模板生成日报/周报/月报，agent 工具按需注入。
  `v0.4.3` · [源码](https://github.com/0x7A7A6572/dsh-forge-studio)
- **dsh-milestone-guard** — 阶段性结论软强制守卫：常驻注入系统提示词规范，并在模型调用工具漏发可见结论时自动附加软强制纠偏提醒，支持 Web 设置表单。
  `v0.1.0` · [源码](https://github.com/xt765/dsh-milestone-guard)
- **dsh-auto-evolve** — 一个自我进化的 DeepSeek Harness 插件：观察代理的运行方式，通过 LLM 对其自身资产提出改进方案，在沙箱试运行代理中验证每个方案，只应用通过验证的变更——带版本化账本，出现性能回退时自动回滚。
  `v0.2.0` · [源码](https://github.com/lispking/dsh-auto-evolve)
- **dsh-littlestar-meeting** — 跨会话会议室：主持人开房定题、定轮次，按顺序邀请其它会话，一位一位发言，轮次用满即收会出纪要。
  `v0.2.6` · [源码](https://github.com/theskywilldawn/dsh-LittleStar-meeting)
- **dsh-project-manager** — 项目看板：卡片组泳道自定义阶段，卡片关联落盘项目记忆、挂载仓库与已有会话（可恢复归档）；从卡片开的会话自动读取项目记忆。
  `v0.20.1` · [源码](https://github.com/hoyyang/dsh-project-manager)
- **dsh-kingdom** — DSH 里的 Agent 王国：领地、角色绑定/换届/会话归属（含模型/Agent 身份），plan→派发→执行→验收治理闭环（Worker 自述≠完成事实），附本地 GUI 操作台。
  `v3.3.0` · [源码](https://github.com/lusblead/dsh-Kingdom)
- **dsh-task-dispatch-table** — 定时任务调度器：一张任务表驱动周期性运行的 agent 任务，每次调度为一个独立的 dsh 会话；调度本身纯逻辑实现，不消耗任何模型调用。
  `v0.1.11` · [源码](https://github.com/cq-guojia/dsh-task-dispatch-table)
- **specworkflow** — 注册 SpecWorkflow 技能包，覆盖需求澄清、实施规格、代码执行、交付检查、修复规划、bug 诊断和带来源调研。
  `v0.1.1` · [源码](https://github.com/MoonCoder-HAPPY/SpecWorkflow)
- **dsh-tool-workflow-plus** — 官方 workflow 工具的 drop-in 增强版：在逐字 fork 的官方工具之上，用 ctx.storageDomain 提供持久化的 saved workflow 库（workflow_save / workflow_list / workflow_get / workflow_delete /…
  `v0.1.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/shuxidemosheng/dsh-tool-workflow-plus)
- **gitee-ai-employee** — Gitee/GitHub AI 员工：在 issue 里 @ 机器人并指定目标分支（如"需要修改 release-v1.2 分支"），它自动克隆仓库开发、向指定分支提交 PR，可自动合并并自动关闭 issue。v1.2 新增代码安全扫描：配置扫描仓库后按内置/自定义提示词审计代码，去重后把新发现提交 issue。
  `v1.3.0` · [源码](https://github.com/wangbobo-coder/gitee-ai-employee)
- **dsh-harness-one** — 面向 DeepSeek Harness 的可视化多智能体 DAG 工作流，支持实时执行、重启恢复和飞书集成。
  `v0.12.0` · [源码](https://github.com/chumingjun/dsh-harness-one)
- **@joekytc/dsh-swarm** — 一个受管的智能体蜂群（swarm）：六种专职 DSH 智能体——编排、规划、知识库桥接、开发，以及方案评审与代码评审——把需求转化为严格阶段流水线；每阶段交付必须先以结构化证据自证，下一阶段才放行；评审只读、代码仅评审通过后合并，追加式事件日志支持全程回放与审计，实时看板同步展示。其设计灵感源自 Hermes…
  `v0.5.1` · [源码](https://github.com/joekytc/dsh-swarm)
- **jacky-creator** — 面向 DSH 的本地内容生产与运营工作台：管理灵感、脚本、媒体资产、档期、目标、发布状态和发布后复盘。
  `v0.1.0-beta.9` · 引擎 `0.2.0-rc.2` · [源码](https://github.com/Jackywxsz/DSH-Creator)
- **@zseven-w/dsh-crew** — 从 Claude Code / Codex 派发任务给 DSH Agent：原生子代理进度、按能力分层预设的宿主内工作会话，以及为纯文本 Harness 提供视觉与图像生成的多模态桥。
  `v0.1.0-rc.14` · [源码](https://github.com/ZSeven-W/dsh-crew)
- **@gm-hz/agent-dag-workflow** — 面向 Agent 的 Host-neutral 持久化 DAG 工作流，提供 CLI、MCP、按需 Skill、Trigger、重放和可视化 Canvas。
  `v1.0.1` · [源码](https://github.com/GM-HZ/agent-dag-workflow)
- **dsh-round-table** — 面向 Windows 桌面版 DeepSeek Harness 0.2.0-rc.2 的圆桌会议，复用已有 Agent 会话，提供讨论、可编辑任务卡、顺序与并行步骤、会议文件归档及秘书纪要。
  `v1.0.0` · [源码](https://github.com/whateverboy2333/dsh-round-table)
- **@kagurazakayashi/dsh-startup-command** — 在 dsh web 启动成功后运行用户自定义命令的 DeepSeek Harness Web 插件。
  `v1.1.2` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/kagurazakayashi/dsh-startup-command)
- **dsh-tongflow** — 基于 TongFlow 的“片场”插件，用于图片、配音、音乐与视频制作：agent 为每个资产生成 TongFlow 工作流文件（.tongflow.json）并通过 TongFlow 插件执行，内嵌工作流画布，按镜头/角色/take 组织项目，附漫剧模板；以 @tongflow 开头的会话进入 Studio 界面。
  `v0.8.4` · 引擎 `^0.1.2-rc.0 || ^0.1.3-alpha.0 || ^0.1.5-alpha.0 || ^0.1.7-alpha.0 || ^0.2.0-rc.0 || ^0.2.1-alpha.0` · [源码](https://github.com/tong-io/tongflow)
- **dsh-team-rooms** — 持久化、跨会话的多 Agent 团队房间：成员、消息总线、共享任务板与共享时间线，重启后仍然保留。
  `v1.0.8` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-team-rooms)
- **dsh-background-agents** — 官方子代理接缝上的持久化后台子代理：任意会话中启动，Web 侧边栏看进度、随时留言与打断，支持按子代理限定工具、人格与委托深度。
  `v0.10.2` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-background-agents)
- **dsh-vibe-math** — 为 DSH 安装四个多代理数学研究预设：v2（概率驱动流水线 + 多验证器辩论）、v3（论文式 Markdown 知识库 + 规划代理 + 可复用方法库）、v4（常驻自组织成员，靠留言与开会决定一切）、v5（研究所：院士拆解并分派任务、有表决权的研究员、临时工、群聊与 CAS…
  `v2.8.5` · 引擎 `>=0.1.2-alpha.4 <0.1.3-0 || >=0.1.3-alpha.2 <0.1.5-0 || >=0.1.5-alpha.1 <0.1.6-0 || >=0.1.6-alpha.1 <0.1.7-0 || >=0.1.7-alpha.1 <0.2.0-0 || >=0.2.0-alpha.1 <0.3.0-0` · [源码](https://github.com/ChongCyrus/Vibe-Mathematics)
- **@esroamer/codex-dsh-collab** — 通过当前环境桥接插件与配套 Codex 技能，让 Codex 向 DeepSeek Harness 工作区派发任务、跟踪执行、回读结果并继续协作。
  `v0.2.0` · [源码](https://github.com/ESROAMER/codex-dsh-collab)
- **dsh-plan-checkup** — 在你同意执行计划前逐步检查每一步，用命令规则加上 Jev 或支持 logprobs 的 OpenAI 兼容端点，在计划审阅卡片上标出无法恢复、影响工作区以外、需求没提到或描述太模糊的步骤。
  `v0.1.1` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/Bear0117/dsh-plan-checkup)
- **@dennisrongo/dsh-plan-board** — 将智能体通过 exit_plan_mode 呈现的每个计划捕获为 <workspace>/.dsh/plans 下的 markdown，打开审阅窗口，并以 Plans 历史标签页记录每个计划的结果。
  `v0.3.2` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **@jingyi0605/codingns4dsh** — 将十几种编程助手 CLI、持久终端与远程工作区接入 DSH 原生界面。
  `v0.2.0-rc.3` · 引擎 `>=0.2.0-rc.2 <=0.2.0-rc.2` · [源码](https://github.com/jingyi0605/Codingns4DSH)
- **@neomei/dsh-client-ui-roundtable** — 多智能体圆桌讨论：每个成员作为子代理在自己的模型上依次发言，主持人逐轮汇总，终止时生成会议纪要 Markdown。
  `v0.1.0-rc.7` · [源码](https://github.com/NeoMei/dsh-roundtable)
- **@y9931666/dsh-plugin-roundtable** — 把 DeepSeek Harness 会话变成可视化圆桌会议：环形专家拓扑、连线协作、汇聚网关、代理思考，以及「针锋相对」红队评审（观点支持/驳回）。
  `v1.0.0-rc.3` · [源码](https://github.com/9931666/dsh-plugin-roundtable)
- **dsh-flock** — 无编排者的自组织多智能体集群。真实 DSH 子智能体通过共享的只追加日志协调，由各智能体自行决定读写时机，无拓扑、每个智能体只派发一次；另附快照模式，由调度层把邻居视图冻结进提示词并驱动环形/网状/群集收敛。
  `v0.1.0` · [源码](https://github.com/Hercules-debug/dsh-flock)
- **dsh-tick** — 会话内定时任务：按延迟、固定时刻或重复间隔向当前会话注入一段提示词，到点唤醒模型执行。可用输入框上方面板、/schedule 命令、或 7 个面向模型的工具管理。DSH 关闭期间计时冻结、绝不自动恢复；暂停保留剩余时间，恢复后从原处继续。
  `v1.0.2` · [源码](https://github.com/Saretheya/dsh-tick)
- **dsh-plugin-nexus-sdlc** — 声明规范驱动研发预设，包含中文人格与四个 Claude Code/Codex 静态委派工具，用于规划、实现、审查与知识提炼；角色由提示词引导，并非自动状态机。
  `v1.0.0` · [源码](https://github.com/Fnckerpoi/dsh-plugin-nexus-sdlc)
- **dsh-jev-subagent-dispatch** — 降低 LLM 成本：Jev（System One）分类器按声明式策略审查每一轮任务并推荐 subagent 模型路由，让常规工作以 flash 价格运行、主模型专注难点；显式 /route 触发、运行时代理能力门控、凭据脱敏，以及基于判定日志的离线策略回放。
  `v0.8.0` · [源码](https://github.com/vitas/dsh-jev-subagent-dispatch)
- **@weibaohui/dsh-thinktank** — 智囊团：内置 161 个经典思维模型库（决策/战略/认知/心理/沟通/学习/系统/创新/执行九大分类），输入一个问题即可用选中的多个模型并行 AI 分析，产出含共识/分歧/盲区/行动清单的综合报告页；支持自动分析与提示词往返导入两种模式。
  `v0.2.1` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-thinktank)
- **@nilesh32236/dsh-squad** — 跨工作区的多智能体工舰队：一个编排会话在其他项目工作区中创建具名的 worker 会话，向其排队或插队下发任务，以后台任务的方式监视其进度，并收集其报告。worker 完成后主动把消息投递到编排会话，无需轮询，空闲的编排器同样能及时反应。当编排器正在执行任务时，升级提问与失败通知以 steer 方式送达，空闲时以…
  `v1.1.0` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/nilesh32236/dsh-squad)
- **dsh-runninghub-api** — 在对话中运行 RunningHub 云端 ComfyUI 工作流：设置卡片、sha256 媒体上传缓存、并发闸门与后台任务台账。
  `v0.1.6` · 引擎 `>=0.1.6-alpha.2` · [源码](https://github.com/lucyTrump/dsh-runninghub-api)
- **dsh-novel-craft** — DeepSeek Harness 的小说写作工作台：你在候选段落上点赞或点踩，模型把这批点选蒸馏成一份简短的「作者偏好档案」带进后续写稿，正文本身不进写稿上下文。另有章节看板、每章写作包、只改被批注段落并逐字核对其余段落的批注式微调、项目台账，以及不把正文送进模型的本地情节体检。
  `v0.3.0` · [源码](https://github.com/shiyan688/dsh-novel-craft)
- **dsh-thesis-workbench** — 论文/实证分析工作台：在对话里直接驱动 IBM SPSS。spss_check（环境自检）、spss_variables（列出 .sav 变量：名称/标签/类型/测度水平/案例数）、spss_data（抽查案例数据，检查缺失与异常值）、spss_run 与 spss_run_file（执行 SPSS 语法或 .sps…
  `v0.1.0` · [源码](https://github.com/wxlei2004/dsh-plugins)
- **pstack-dsh** — 将 poteto 的 pstack 工程工作流移植到 DSH，涵盖规划、审查、验证与发布。
  `v0.2.3` · [源码](https://github.com/aa2246740/pstack-dsh)
- **dsh-plugin-stardeck** — RTS 风格编排看板：用命令取代会话——常驻大副 agent 把舰长命令拆成带验收标准的任务书，侦察/工程/医疗/书记四类小队在隔离工作区执行，所有会话按发起命令索引归队。
  `v0.20.6` · [源码](https://github.com/Kaiji-Z/dsh-plugin-stardeck)
- **@starwish-ai/xingyuan-dsh** — 愿望与任务管理的 Agent Preset 组合包：在对话中创建愿望/任务、机会日打卡、微行动，并附带记忆存储与 Web 端进度图表。
  `v0.6.7` · [源码](https://github.com/starwish-ai/xingyuan-dsh)
- **dsh-todo-guard** — 任务清单陈旧度守卫：监听会话事件流，统计上一次 todo_write 之后又发生了多少次工具调用；超过可配置阈值时在下一步之前追加一条简短提醒，并附上当前清单内容，让模型把清单写回真实进度，而不是在界面上留一份过期的快照。纯提示注入，不阻断流程，也不改动任何数据。
  `v0.1.0` · [源码](https://github.com/wxlei2004/dsh-plugins)
- **dsh-plugin-cron-scheduler** — Agent 任务定时调度器：自然语言或侧栏 UI 创建任务，到点向新建/固定会话注入 user 消息触发完整 agent turn，带执行历史、手动触发与 SSE 实时同步。要求 DSH session format v4（官方 DeepSeek Harness 0.1.7+）：注入消息使用…
  `v0.2.10` · [源码](https://github.com/LittleBlackTong/dsh-plugin-cron)
- **@yangdcm/dsh-expert-team** — 角色化多智能体专家团 = 你的数字员工。一句目标即自动组建最多 12 个角色（产品、架构、前端、后端、审查、测试等），按九阶段门控流水线协作交付，并支持常驻团队反复指挥。零运行时依赖、无构建步骤。
  `v1.5.3` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/yangdcm/dsh-expert-team)
- **dsh-kanban-flow** — agent 驱动的看板：每个工作区一块看板、每个任务一个 agent 会话，以及带护栏的人机协作流程（Backlog → To Do → In Progress → Review → Done）。
  `v0.2.1` · [源码](https://github.com/thomasvvugt/dsh-kanban-flow)
- **@weibaohui/dsh-tasks** — 定时任务：用 cron 表达式定时执行提示词，到点自动开一个新 agent 会话替你干活，支持绑定工作区、手动立即执行与会话自动命名。
  `v0.5.9` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-tasks)
- **@weibaohui/dsh-flow** — 执行流程图：把当前会话的执行过程画成一条纵向节点流（回合/用户/助手/工具/审批/重试/压缩），SSE 实时追加——会话执行到哪，图就画到哪，自动跟随滚动。
  `v0.1.7` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-flow)
- **@alpacachen/dsh-automation** — 在全新的 DSH 会话中运行单次或 RFC 5545 周期 Agent 任务，支持可视化计划编辑和会话关联历史。
  `v0.3.32` · [源码](https://github.com/alpacachen/dsh-automation)
- **dsh-schedule-later** — 把消息排进 dsh 会话稍后再发：消息框里带日期与时间选择器的「定时」按钮、跨会话列出待发消息的侧栏面板、浏览器关着也由宿主按时投递成一条普通用户消息，以及 schedule_message / list_scheduled_messages / cancel_scheduled_message…
  `v0.6.0` · [源码](https://github.com/adithyanraj03/dsh-schedule-later)
- **@kasenri/dsh-orbit** — DeepSeek Harness 的确定性工程编排运行时：orbit_controller 工具与 OrbitService 以 Commander / Executor / Smart Watchdog 子代理执行 PLAN、EXECUTE、EVALUATE、有界修正与运行时恢复，持久状态保存在…
  `v0.6.7` · [源码](https://github.com/KasenRi/dsh-orbit)
- **dsh-plan-and-execute** — 基于 ReactLoopAgent 的 Plan-and-Execute 编排插件，将目标拆解为可审阅的步骤并以 Web UI 卡片呈现。
  `v0.6.0` · [源码](https://github.com/jimmyzhang219/dsh-plan-and-execute)
- **dsh-eteams** — 领队主导的多智能体团队：把目标拆成任务，按执行链派发给运行在各自子会话里的成员，每个成员可配不同模型。
  `v0.2.22` · [源码](https://github.com/2507483326/dsh-eteams)
- **dsh-ditto** — DeepSeek Harness 的审核优先批量自动化：先审核三个样本，预览全部结果，一次批准，再安全地应用到多个文件。
  `v0.3.0` · [源码](https://github.com/darrien1998/dsh-ditto)
- **dsh-subagent-delegation** — 携带一份讲「什么该交给子 agent 做、而不是自己顺手做」的技能——哪些任务值得扇出、一次派几个、并行怎么发，以及子 agent 回来后怎么核对它真的做了什么，而不是信它的总结。
  `v0.1.1` · [源码](https://github.com/gezi-wen/dsh-subagent-delegation)
- **dsh-scheduler** — 定时任务调度器：按 Cron 表达式到点自动新建 DSH 会话并注入提示词执行，支持任务历史、手动运行与启停。也可直接调用 KNJ 工作流：支持直接选文件（持久化快照，每次触发重新交给流程）与按路径引用两种方式。侧边栏入口由 dsh-knj-menu 提供，一条命令安装：dsh plugin add…
  `v2026.9.192` · [源码](https://github.com/yangdongzhen590/dsh-knj-scheduler)
- **dsh-knj-workflow** — 配置驱动的工作流与开发任务编排：图式工作流（任务/网关/人工审批节点）+ 阶段级断点持久化，内置 AI 助手在图编辑器中通过对话配置工作流，逐条校验实时应用到画布。把文档作为「通用附件」交给节点（无需声明）：文件启动前落到工作区，节点用 ${inputs.附件} 拿到换行拼接的绝对路径自行解析。
  `v2026.9.192` · [源码](https://github.com/yangdongzhen590/dsh-knj-workflow)
- **dsh-gme-test-generator** — 在 Harness 内驱动 GME Test Agent：三个工具负责列出接口目录、在本地 Python 后端启动并修复自主测试生成、轮询任务直到待评审，并把创建 PR、跳过与清理等动作挡在用户显式同意之后。
  `v0.2.0` · 引擎 `>=0.1.2-alpha.1 <0.2.0-0` · [源码](https://github.com/nuaaweixinye/dsh-gme-test-generator)
- **dsh-pre-duediligence** — 访前尽调智能体：面向拜访前调查，提供企业尽调、客户尽调、客户背景调查、工商核验与风险信息整理；使用企查查 MCP，设有调用预算授权和主体确认。
  `v0.1.40` · 引擎 `>=0.1.1-rc.2` · [源码](https://github.com/duhu2000/dsh-pre-duediligence)
- **dsh-cron-panel** — 定时任务面板：分区管理 DSH 与系统 crontab、自然语言生成表达式、执行日志与完成后消息推送。
  `v0.1.13` · [源码](https://github.com/a792883583/dsh-cron-panel)
- **novel-writer** — 为 DeepSeek Harness 安装一个多智能体小说创作预设：一个统筹队长派单五个专职子代理——架构世界、策划剧情、管理人物、执笔写文、质检复核。
  `v1.0.2` · [源码](https://github.com/sailoumili/novel-writer)
- **dsh-tender-workbench** — 招投标智能体：支持招投标搜索、招标查询、投标查询、标讯查询、拟建项目与项目筛选，辅助商机发现、人工复核及 Excel/PDF 导出，使用客户自备授权的企查查 MCP。
  `v0.5.11` · [源码](https://github.com/duhu2000/dsh-tender-workbench)
- **novelcraft-dsh** — 长篇小说写作插件：每本书一个 git 仓库，当前 39 个 DSH 领域工具 + Web 写作台；深度导入产候选草稿、AI 采用类写入正式资产前必过审批、确定性连续性检查（报告型）。独立开源（MIT），非 DeepSeek 官方产品；需 Node ≥ 24.11.0，当前适配 DSH 0.1.2-rc.1。
  `v0.1.3` · [源码](https://github.com/FengHuoLinShan/novelAssist-dsh)
- **@zasset/za-ppt** — 报告阶段（PPT）——资产定价与机器学习研究的论文演讲幻灯片生成（Beamer/Quarto）。附带一个 skill。
  `v0.1.1` · [源码](https://github.com/Z-Asset/ZA_ppt)
- **@zasset/za-analysis** — 模型训练与结论阶段——资产定价与机器学习研究的端到端分析、模型训练与估计。附带一个 skill。
  `v0.1.1` · [源码](https://github.com/Z-Asset/ZA_analysis)
- **@zasset/za-report** — 报告阶段（文稿）——资产定价与机器学习研究的学术论文写作。附带一个 skill。
  `v0.1.0` · [源码](https://github.com/Z-Asset/ZA_report)
- **@zasset/za-data** — 数据处理阶段——资产定价与机器学习研究的数据发现与质量评估。附带一个 skill。
  `v0.1.0` · [源码](https://github.com/Z-Asset/ZA_data)
- **@zasset/za-literature** — 文献综述阶段——资产定价与机器学习研究的文献检索、合成与引用链追踪。附带一个 skill。
  `v0.1.0` · [源码](https://github.com/Z-Asset/ZA_literature)
- **dsh-cortex** — DeepSeek-Harness 多模型编排插件，支持递归任务拆解、动态路由、质量门控、失败恢复与 KPI 报表。
  `v0.3.0` · [源码](https://github.com/iguowz/dsh-cortex)
- **dsh-plugin-yolo** — 面向 DeepSeek Harness 的个人助手：从对话中整理跨会话事项与计划，通过提醒和可审计的助手看板持续跟进。
  `v0.5.0` · [源码](https://github.com/hanshanyike/dsh-yolo)
- **@vlln/dsh-loop** — 定时循环：`/loop` 命令 + loop 工具 + 活动状态条。
  `v0.4.1` · 引擎 `>=0.1.0-rc.5` · [源码](https://github.com/vlln/dsh-loop)
- **@ottttto/dsh-scheduled-send** — 定时发送：到点将拟好的消息以正常用户气泡发送到绑定的会话。调度在服务端执行，关闭浏览器不影响发送；会话隔离、重启自动补发。
  `v0.3.9` · [源码](https://github.com/OTTTTTO/dsh-scheduled-send)
- **dsh-plugin-aitelier** — 从 DSH 经 MCP 运行 AItelier 流水线：39 个工具（22 读、17 写），用于生成、运行、查看、编辑、导出与导入多步 SkillFlow 流水线。步骤在 AItelier 中执行而不占用 DSH 会话，按 run_id 轮询，在引擎强制的检查点暂停并由 answer_checkpoint…
  `v0.1.9` · [源码](https://github.com/linxuhao/AItelier)
- **recowork-dsh** — 通过两个受限的 DSH 工具和网页工作区卡片，创建并检查 RecoWork local-agent-project 工作区。
  `v0.3.0` · [源码](https://github.com/recoluan/recowork)
- **dsh-multi-candidate** — 多候选模式插件（test-time scaling）：悬浮球面板配置，模型对任务自动执行并行候选加验证选优，仅当前会话生效。
  `v1.1.3` · [源码](https://github.com/WintryGrass/dsh-multi-candidate)
- **@hawk2048/oh-my-dsh** — OMC 风格的多智能体编排层：29 个 omd-* skill + 12 条 /omd-* 命令，覆盖 plan-execute-review-verify 流水线与 team/autopilot/ralph 等模式。
  `v0.2.1` · [源码](https://github.com/hawk2048/oh-my-dsh)
- **dsh-workspace-monitor** — 一个适配 DeepSeek Harness 的工作区监测插件，按周期检测并报告文件的新增、修改和删除。
  `v0.1.3` · [源码](https://github.com/Rainier-Z/dsh-workspace-monitor)
- **routinekit** — 把选定的 DSH、本地 MCP 或原生 WebMCP 调用捕获为经过评审的参数化例程，暴露为带类型的工具，重放时重新请求批准。
  `v0.2.0` · [源码](https://github.com/sjh9714/routinekit)
- **dsh-plugin-taskboard** — 任务看板，agent 通过 taskboard_* 工具领活与交接；这些工具无法把任务移到 done 或 canceled，验收由人来做。
  `v0.1.0` · [源码](https://github.com/ijry/DeepSeek-Harness-Desktop-Ultra)
- **dsh-plugin-task-runner** — 任务拆解模式：主代理把大任务拆成独立子任务，派给子代理（默认本地模型）在全新短上下文中执行并综合结果；并发数与模型可在设置面板图形化配置。
  `v0.6.0` · [源码](https://github.com/weixshaw/dsh-plugin-task-runner)
- **dsh-ha-orchestrator** — 模型高可用故障回退（隔离/熔断/探测恢复）与子智能体编排（fanout/pipeline/supervisor），附带双语设置界面。
  `v0.12.4` · [源码](https://github.com/Saktawdi/dsh-ha-orchestrator)
- **dsh-subagent-profile** — 子 Agent 派发插件：按任务选模型、推理强度与工具范围，存成命名方案随时复用；内置安全检查、成本估算与节省分析、完整派发决策台账。
  `v0.5.1` · [源码](https://github.com/muzyLink/dsh-subagent-profile)
- **dsh-darwin-forge** — 自进化执行器：消费会话日志挖掘出的问题工单，在评测门（hold-out canary 防作弊）下合成技能候选，人工确认晋级到项目 .dsh/skills 并支持确定性回滚。
  `v0.1.1` · [源码](https://github.com/que3sui/dsh-darwin)
- **dsh-issue2pr** — Issue-to-PR 可验证交付链：11 阶段流水线（分析→检索→理解→假设→规划→实现→补丁→测试→评审→归因→PR 构建），4 道人工复核闸门，GitHub/GitLab/CodeArts 凭据连接，5 页工作台与可拖拽智能助手浮窗。
  `v0.4.0` · [源码](https://github.com/LONGSASASASASA/dsh-issue2pr)
- **dsh-tacit** — 从不顺的轮次和你自己的纠正中学习你在提示词里没说出口的东西，并把学到的指令注入每个新对话的系统提示；指令可在设置中编辑，输入框按钮可用它们改写当前草稿。
  `v0.6.1` · [源码](https://github.com/hackernotfound/dsh-tacit)
- **dsh-init** — 提供 Claude Code 风格的 /init 命令与工具，生成极简 CLAUDE.md，并将 AGENTS.md 以相对软链指向它。
  `v0.1.2` · [源码](https://github.com/evanfang0054/dsh-init)
- **dsh-feedback-bridge** — 将 DSH 对话整理为可审阅的社区反馈，并在确认后提交到 DeepSeek Harness 官方 Discussions。
  `v0.1.3` · [源码](https://github.com/yx222yx/DSH-Feedback-Bridge)
- **dsh-plugin-heartbeat** — 定时心跳：用 followup 注入唤醒每个根 agent 主动汇报进展、风险与卡点——忙碌时排队不打断、最多保留一条、连续无人回应自动暂停，用户下一条消息即恢复。
  `v0.4.2` · [源码](https://github.com/LittleBlackTong/dsh-plugin-heartbeat)
- **dsh-automation-center** — 面向 Workspace 调度 Agent 任务，每次运行创建全新 Result Session 并持久保留审计历史；原版 DSH 使用会话标签，存在对应 Slot 时使用全局 Shell 页面。
  `v0.1.0-alpha.8` · [源码](https://github.com/usersx/dsh-automation-center)
- **@dsh-suite/plugin-team-board** — 多 agent 共享任务板：经 Cordis service key 创建/认领/流转/查询任务。
  `v0.2.1` · [源码](https://github.com/whyihaveyou/dsh-suite)
- **@carljia/omd-dsh** — 为 DeepSeek Harness 提供 7 个 Agent 预设模式：每个模式固定工具边界、按模式路由模型，并以 fast/deep 档位委派 omd_task 子代理；含规划到执行闭环（/mode、/start-work、基于 goal 的 /ulw）与逐模式、逐档位重配模型的设置页。
  `v0.1.9` · [源码](https://github.com/jiazz197-cmyk/omd-dsh)
- **dsh-shutdown-after-task** — 任务完成后自动关机：右下角按钮开启模式，任务成功完成后进入可取消的倒计时（取消走 shutdown /a），零运行时依赖。
  `v0.2.0` · [源码](https://github.com/virggle/dsh-shutdown-after-task)
- **dsh-kimicode-swarm** — Kimi Code 风格 swarm：批量并行子 Agent 调度（自适应并发）、/swarm 命令与聊天内实时进度条。
  `v0.1.2` · [源码](https://github.com/hongyue0721/dsh-kimicode-swarm)
- **dsh-multi-role-debate** — 多角色并行论证：并行调用真实 Codex 与 Claude，由 DSH 主会话模型（Judge）生成第三方汇总并回对话；另含单 Agent 直接对话与各角色模型自由配置。
  `v1.1.0` · [源码](https://github.com/jiang12345-code/dsh-multi-role-debate)
- **dsh-requirements-alignment** — 运行时需求漂移防护，在长任务执行过程中保持 DSH Agent 与用户确认的目标、约束和决策一致。
  `v0.4.2` · [源码](https://github.com/jiezeng2004-design/dsh-requirements-alignment)
- **dsh-wewrite** — 公众号 AI 写作管线：六步成文（选题、大纲、成稿、门禁、渲染、配图）+ 启动 brief 合同、热榜逐条 AI 速览、RRULE 定时推草稿箱、写作台与对话工具（/wewrite 命令与 @ 引用），推送草稿箱前经宿主审批 fail-closed 确认。
  `v0.5.3` · [源码](https://github.com/jerryjiao/dsh-wewrite)
- **@creait/dsh-research-mode** — 把深度研究做成一种代理模式：一条经过审阅的固定循环——先规划，再按研究员自行声明的缺口进行自适应并行轮次，综合出带引用的报告，最后对其做对抗性审阅——而不是让模型每次现写脚本。轮次预算未能覆盖的问题会在报告中被逐一点名，而不是被悄悄丢弃。
  `v0.2.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **@limuyang2/dsh-agent-team** — 为 DeepSeek Harness 提供多 Agent 团队协作，支持助手独立模型、Skills、MCP 服务与上下文，以及共享工作区、任务协调和会话管理。
  `v0.1.4` · [源码](https://github.com/limuyang2/agent-team)
- **dsh-custom-subagents** — 用设置页维护可复用的子代理定义，通过统一的 delegate_agent 工具委派；内置只读的 Explorer 预置与嵌套委派开关。
  `v0.1.5` · [源码](https://github.com/ktdhhc/dsh-custom-subagents)
- **@creait/dsh-hookkit** — 以配置驱动的生命周期钩子，并支持上下文注入：在 YAML 中声明事件、处理器与结果——处理器可以是进程内工具（含 MCP）、shell 命令或 HTTP 端点，结果可以是模型可见的上下文、拒绝该次工具调用，或触发即忘。
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **@hanxuanliang/dsh-chaos** — 面向 DeepSeek Harness 的持久化多 Agent 协作插件，提供频道、话题、任务与可恢复的 Agent 会话。
  `v0.1.2` · [源码](https://github.com/hanxuanliang/dsh-chaos)
- **dsh-subagent-watchdog** — 当原生可续接 DSH 子代理因明确的 max-tokens 终止时自动续接一次，然后停止介入。
  `v0.1.0` · [源码](https://github.com/quaner1234-cmd/dsh-subagent-watchdog)
- **@opendsh/dsh-plugin-scheduled-tasks** — 按项目调度提示词，在全新的无头 Agent 会话中执行，支持单次、固定间隔和 cron 计划，并持久化运行历史。
  `v0.2.4` · [源码](https://github.com/Ceelog/dsh-plugins)
- **dsh-plugin-superself** — 把 Superself 的 self CLI 暴露为模型工具（项目上下文、工作单元、报告、决策）并提供 /self 命令——跨会话、跨项目的项目状态，保存在代码仓库之外。
  `v0.1.0` · [源码](https://github.com/fxylabs/superself)
- **dsh-autoresume** — dsh 会话因 web 重启或上游瞬时故障（限流、5xx、余额/配额错误）中断时，自动注入「继续」让本轮接着跑，不需要手动点、不会丢上下文；带死循环守卫，重试没反应就把会话交回给你。
  `v0.1.3` · [源码](https://github.com/shengyvself/dsh-autoresume)
- **dsh-agent-relay** — 本地优先的多 Agent 协作中继：HMAC 认证 broker + dsh 插件（relay_send/recv/peers/history）+ 零依赖 CLI 与 Python 客户端，wire protocol v1.0。
  `v0.5.0` · [源码](https://github.com/Noelune/dsh-agent-relay)
- **@ethanyoq/dsh-ai-novel-writer** — 安装专用 AI 小说创作预设与工作台：提供带修订号的本地项目资产、紧凑侧边工作台，以及需要原生审批的逐文件变更。
  `v0.1.0` · [源码](https://github.com/EthanYoQ/AI-Novel-Writer)
- **dsh-specflow** — 增加规格工件、技能、命令、由 goal 驱动的实施流程和任务进度上下文。
  `v0.1.4` · [源码](https://github.com/lonelymoon87/dsh-specflow)
- **@xmoon76/dsh-subagent-router** — 新增 subagent_route 与 subagent_fork_route 委托工具：由模型自主为子代理挑选 provider/model 路由，部署方仅配置 spawn/fork 后端、调度策略与 allowedProviders 白名单；续聊子代理与后台任务复用官方 send_message /…
  `v0.3.1` · [源码](https://github.com/XMoon/dsh-subagent-router)
- **dsh-plugin-mission-control** — 把 DeepSeek Harness 的会话、消息、工具活动与每轮结果实时推送到 JARVIS Mission Control 看板，附任务状态与人工复核。
  `v0.2.1` · [源码](https://github.com/Asif2BD/JARVIS-Mission-Control-DeepSeek)
- **dsh-tool-generate-image** — 给纯文本模型的 `generate_image` 工具：模型用自然语言要一张图，经 Antigravity CLI 让 Gemini 画出，保存到可配置输出目录并返回文件路径，供模型在任务中使用。
  `v0.2.1` · [源码](https://github.com/zclDragon/dsh-tool-generate-image)
- **dsh-auto-continue-429** — 遇到 RATE_LIMIT（429）或配额耗尽（insufficient_quota）错误时自动发送 continue 恢复对话。每会话独立计数连续失败次数（默认 20，可设 1-100），带工具栏开关条与设置页配置卡片。
  `v0.2.3` · [源码](https://github.com/haochi72/dsh-auto-continue-429)
- **dsh-plannotator** — 打开官方 Plannotator 应用（plannotator.ai）审代理写好的计划：批注、批准，或打回重写。
  `v0.2.0` · [源码](https://github.com/eightHundreds/dsh-plannotator)
- **dsh-science** — 面向 DSH 的 Claude Science 式科研工作台：ReAct 研究循环引擎（research_* 工具）、带溯源的版本化工件（artifact_* 工具）与面向基因组/病原体/生物信息的 10 个科研技能。
  `v0.2.0` · [源码](https://github.com/biociao/dsh-science)
- **@dabouben/dsh-daily-tasks** — 每日/每周任务管理：启动弹窗提醒、输入框上方滚动条、圆圈一键完成、任务卡片编辑、周日 AI 周总结；另附侧边栏 DeepSeek API 用量小部件（余额卡片、今日与累计 tokens 及费用、按模型明细、近 7 日柱状图）。数据以 JSON 存于 $DSH_HOME。
  `v0.1.0` · [源码](https://github.com/Dabouben/dsh-daily-tasks)
- **@dsh-self-evolving/core** — 证据优先的自进化控制器：有界生成 Cordis 候选插件，一次性真实 Loader 准入，Harbor 评测，可崩溃恢复的日志化谱系。
  `v0.2.3` · [源码](https://github.com/timwhitez/dsh-self-evolving)
- **dsh-agent-canvas** — 为 DSH Web 提供可交互画布，用于展示 Agent、Subagent、Workflow、Phase 与工具调用之间的关系。
  `v0.1.0` · [源码](https://github.com/Lhy723/dsh-agent-canvas)
- **dsh-aicc-zhunao** — 主脑编排 preset：委派优先的 persona、根会话执行门禁，以及可移植的 AI-LAW 规则技能。
  `v0.1.0` · [源码](https://github.com/Cola1018/dsh-aicc-zhunao)
- **dsh-project-kanban** — 按工作区（项目）隔离的项目看板：9 个 kanban_* 模型工具供 Agent 规划时写卡，另带浏览器看板 UI，支持磁盘持久化、撤销、模板与归档。
  `v0.8.3` · [源码](https://github.com/StruggleYang/dsh-project-kanban)
- **uagent-sync-dsh** — 工作区跨设备备份、恢复与扩展更新，经 uagent-sync CLI 桥接执行。
  `v2.1.0` · [源码](https://github.com/severin-ye/uagent-sync)
- **dsh-sync** — 面向 DSH 设置与 Profile 配置的策略化 Git 同步，支持敏感信息隔离、冲突审阅与按行选择应用。
  `v0.1.3` · [源码](https://github.com/ZhenHuangLab/dsh-sync)
- **@nyantused/folio-dsh-events** — Folio（兰亭）@nyantused/folio-dsh-events：会话协议事件插件——新会话入口提醒 + 会话关闭自动 save；与 @nyantused/folio-dsh-tools 配套使用。
  `v1.0.1` · [源码](https://github.com/nyantused-cpun/folio)
- **@nyantused/folio-dsh-tools** — Folio（兰亭）@nyantused/folio-dsh-tools：咨询/汇报材料生成引擎的 15 个 DSH 原生工具（记忆面 + 质量门禁）+ L0 守卫；与 @nyantused/folio-dsh-events 配套使用。
  `v1.1.0` · [源码](https://github.com/nyantused-cpun/folio)
- **dsh-tool-orchestrate** — DSH 声明式任务 DAG 编排：校验依赖图，通过工作流子智能体并行执行拓扑任务层，并确定性传播失败。
  `v0.1.0` · [源码](https://github.com/apheli0os/deepseek-harness-orchestrate)
- **dsh-plugin-hooks** — Claude Code 风格生命周期 hooks：工具调用前后自动执行 shell 命令（stdin 收 JSON payload），pre-tool 非零退出即阻断调用。
  `v0.1.1` · [源码](https://github.com/truelove-dreamer/dsh-plugin-hooks)

## 模型与提供商 · model（205）

- **dsh-bundle-antigravity-host** — 把 Google 官方 Antigravity ACP agent 接入 DeepSeek Harness 作为模型提供商，工具执行与审批仍由 DSH 负责，附按模型切换的额度药丸和设置页；需 Node 22.19+ 并登录 Antigravity 账号。
  `v0.1.28` · [源码](https://github.com/KouzakiUmi/dsh-antigravity-acp)
- **@dsh-ai-providers/ollama** — 为 DSH 提供语言模型、嵌入以及模型发现、加载和卸载功能的 Ollama 提供商。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/anthropic** — 使用原生 Messages API 为 DSH 提供语言模型能力的 Anthropic 提供商。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/runtime** — 为 DSH 提供共享凭据以及嵌入、重排序、语音和图像生成服务的 AI 提供商运行时与配置界面。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/dashscope** — 通过阿里云 DashScope 原生 API 为 DSH 提供通义千问语言模型、嵌入、重排、语音和图像生成能力。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/cohere** — 通过 Cohere 原生 API 为 DSH 提供语言模型、嵌入和重排序能力的 Cohere 提供商。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/localai** — 为 DSH 提供语言模型、嵌入、重排序、语音和图像生成能力及 LocalAI 专用控制项的 LocalAI 提供商。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/typesafe** — 为 DSH 提供 TypeSafe AI Jev 决策能力，用于带类型的概率选择和评分。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/jina** — 为 DSH 提供嵌入和重排序能力的 Jina 提供商。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **@dsh-ai-providers/openai** — 为 DSH 提供语言模型、嵌入、文本转语音、语音转文本和图像生成能力的 OpenAI 提供商。需要安装并启用 Firefox2100/dsh-ai-providers#runtime。
  `v0.5.1` · 引擎 `>=0.2.0-rc.2 <0.2.1 || >=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-ai-providers)
- **dsh-connect-workbuddy** — 将当前环境登录的 WorkBuddy 模型接入 DSH，支持逐模型图片输入开关、账号切换，以及带每日签到的只读积分概览。
  `v5.9.0` · [源码](https://github.com/dingminhua/dsh-connect-workbuddy)
- **dsh-connect-trae** — 将当前环境登录的 Trae 中国区模型接入 DSH，支持由 DSH 执行工具调用、账号切换，以及 Work/通用积分展示。
  `v4.5.1` · [源码](https://github.com/dingminhua/dsh-connect-trae)
- **dsh-tool-antigravity** — 接入 Google Antigravity Code Assist OAuth 账号，为 DeepSeek Harness 提供 Gemini 与 Claude 流式模型路由及 Nano Banana 2 图像生成。
  `v0.4.7` · [源码](https://github.com/Jaylor-Wang/dsh-tool-antigravity)
- **dsh-model-lock** — 锁定共享的默认模型：在聊天里切换模型不再改写全局默认值，也不会再被那次切换连带降档推理强度。
  `v0.1.0` · [源码](https://github.com/hZsFN/dsh-default-model-lock)
- **dsh-advisor-group** — 主模型在专业/长尾/高风险或不确定问题上召集多个专家顾问模型，以复古 CRT 聊天组卡片展示：一次 ask_advisors 自动跑满自动深挖流水线（驱动模型追问、顾问接力、综合结论），真流式 SSE、26 个供应商预设、可配置每日配额、停止/继续，以及可选的顾问工具调用。
  `v0.1.5` · [源码](https://github.com/xingzhen199186/dsh-advisor-group)
- **@lujianjun19/dsh-llm-github-copilot** — GitHub Copilot LLM 适配器：OAuth 设备码登录、从 Copilot API 动态发现模型、视觉模型图片输入支持（gpt-4.1、gpt-4o），以及 Chat Completions 与 Responses 双协议，按模型自动路由。
  `v0.4.11` · [源码](https://github.com/lujianjun19/dsh-llm-github-copilot)
- **dsh-raccoon-connect** — 为商汤小浣熊桌面 App 的模型补上 DSH 0.2.x 内核支持，复用该 App 的登录态，无需填写 API Key。
  `v0.2.3` · [源码](https://github.com/zhlcba/dsh-raccoon-connect)
- **dsh-zcode-plan-bridge** — 需已安装并登录 ZCode CLI。把 ZCode CLI agent 接入 DeepSeek Harness 作为模型提供方。常驻 app-server 会话逐回合流式转发，模型清单从 CLI 实时读取，因此上下文窗口、图片支持与 provider 路由都跟随已安装的 CLI 和账号。工具权限请求默认拒绝；未知的…
  `v0.5.0` · [源码](https://github.com/tangyixiao/dsh-zcode-plan-bridge)
- **dsh-qoder-connect** — 通过个人访问令牌将 Qoder（国内版与国际版）接入 DSH，两版各自独立的凭证与模型目录，支持多令牌切换、侧栏额度卡、按模型开关、上下文窗口偏好与每日自动签到。
  `v0.2.10` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/masknull/dsh-qoder-connect)
- **@ljwei-stak/dsh-model-router** — 为 DeepSeek Harness 规划有依赖的工作包，将其分配给已配置的模型 API 或支持的厂商 CLI，并提供费用预览。
  `v0.25.1` · [源码](https://github.com/Alice-Marx/dsh-model-router)
- **@dmh2002/dsh-connect-qoder** — 通过 PAT 将 Qoder（通义灵码国内版 / 国际版）模型接入 DSH，支持按区域的多账号池、每日签到、自动换号与只读积分展示。
  `v1.13.0` · [源码](https://github.com/dingminhua/dsh-connect-qoder)
- **dsh-llm-openai-completions** — 面向自定义网关（vLLM / LM Studio / 自托管代理）的 OpenAI-completions 兼容适配器：始终 role:"system"、按模型配置驱动思考、Qwen 式 response 切分，并支持视觉模型图片输入（单图 / 多图）。
  `v0.4.5` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-llm-openai-completions)
- **@mzzsfy/dsh-llm-pi-gateway** — LLM 网关会话粘性路由：把会话 sessionId 注入发往 NewApi 类网关的每个请求，供网关做请求亲和以提升 prompt cache 命中，装上即接管官方 pi-ai 路由，卸载即还原。
  `v0.8.1` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-reasoning-options** — 通过 DSH 设置为自定义 pi-ai 模型补充缺失的推理强度声明，启用原生强度选择器，并自动处理后续添加的模型。
  `v0.6.2` · 引擎 `>=0.2.0-rc.2 <0.3.0 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/Scorp1o117/dsh-reasoning-options)
- **dsh-llm-fallbacks** — 基于角色的模型重试与备用策略。
  `v0.6.11` · [源码](https://github.com/omdsh-dev/dsh-llm-fallbacks)
- **dsh-subagent-default-model** — 通过 settings.yaml 为子代理派发配置默认模型，支持单模型与多模型轮换/随机分配策略。
  `v2.1.8` · [源码](https://github.com/dingminhua/dsh-subagent-default-model)
- **@mars-sea/dsh-commandcode-provider** — 非官方 Command Code 模型接入插件：注册 `commandcode` 路由，带实时模型目录与推理强度支持。
  `v0.15.4` · 引擎 `>=0.2.1-rc.2 <0.2.2-0` · [源码](https://github.com/Mars-Sea/dsh-commandcode-provider)
- **dsh-openrouter-providers** — 配置 OpenRouter 请求使用的提供商列表与量化位数上限，注入 provider.only/order（allow_fallbacks）与 provider.quantizations 路由参数。
  `v1.7.0` · 引擎 `>=0.1.5-rc.1 <0.3.0` · [源码](https://github.com/MoRanYue/dsh-openrouter-providers)
- **dsh-rustvy** — 在模型选择器中显示厂商标志，并让模型列表与提供方保持同步：把公开目录与标志镜像到本地回环地址，再依据路由自身的接口重新生成 pi-ai 路由的模型列表，写入之前先显示差异。
  `v1.2.0` · [源码](https://github.com/koliy82/dsh-rustvy)
- **@apolenkov/dsh-provider-proxy** — 按提供商主机或模型 ID 将模型出站流量分流到指定代理、直连或继承进程策略，可在 Plugins 设置页配置。
  `v0.2.7` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/apolenkov/dsh-provider-proxy)
- **dsh-thinking-levels** — DSH 逐轮思考级别（reasoning_effort）控制：选择 Auto 即按近期工具调用历史自动调度 low/high/max，或手动固定线路档位（off/on/minimal/low/medium/high/xhigh/max），支持自定义线路映射、模型能力护栏与上下文窗口预设（64K–1M）；其逐模型能力卡片…
  `v4.4.5` · 引擎 `0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-thinking-levels)
- **dsh-haoba-mode** — 输入框旁一枚金色开关：把每次模型请求的推理强度提到当前模型声明的最高档、输出上限提到其 defaultMaxTokens，并在系统提示里追加一段要求穷尽检索、逐条自检的工作纪律。
  `v0.1.0` · [源码](https://github.com/FelixJiashengFu/dsh-haoba-mode)
- **dsh-newapi-provider** — New API 网关提供商：多网关同一时间激活一个，每个网关独立的模型清单与上下文/多模态标注、额度查询，以及生图与视频生成工具。
  `v0.9.4` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/zenVibeCoding/dsh-newapi-provider)
- **dsh-codex-subscription** — 通过 ChatGPT OAuth 在 DSH 中使用 Codex 模型，提供订阅联网搜索、额度与安全重置、图片工具、高速模式和模型感知上下文；无需 API Key 或 Codex CLI。
  `v3.1.6` · [源码](https://github.com/WSL043/dsh-codex-subscription)
- **dsh-codebuddy-cli** — 复用 CodeBuddy CLI 的登录态，把 CodeBuddy 包含的模型接入 DeepSeek Harness，设置卡片可查看账号、令牌有效期与剩余积分。
  `v0.4.4` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/fu827707013/dsh-codebuddy-cli)
- **dsh-oh-my-claude** — 把已登录的 Claude Code CLI 作为 dsh 的模型提供方：实时模型列表、按会话恢复、审批中转、回退、记忆面板，以及远程 SSH 主机上的工作区。
  `v1.5.6` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/lcestou/dsh-oh-my-claude)
- **@goodandready/dsh-model-sync** — 自动从服务商同步 API Key 提供方的模型列表，无需手动维护。
  `v0.5.21` · [源码](https://github.com/GooDAnDReaDY/dsh-model-sync)
- **@goodandready/dsh-key-rotation** — 为每个提供方维护 API Key 池并自动创建克隆路由，在配额或限流错误时切换到下一个 Key，主动探测冷却中的 Key 以便恢复，并在设置中提供 Key 池、冷却时间与切换状态码的编辑界面。
  `v0.8.72` · [源码](https://github.com/GooDAnDReaDY/dsh-key-rotation)
- **dsh-xdpool** — 把当前环境 WorkBuddy 桌面 App 登录过的所有账号自动并入 DSH 模型池：多账号轮换自动容错、429 冷却、实时积分，模型目录按模型标注积分倍率与限时免费 / 夜间折扣，扫码登录 13 家厂商，聚合免费额度渠道。账号重启不丢。
  `v2.4.6` · 引擎 `>=0.1.5-rc.1 <0.3.0` · [源码](https://github.com/XDTrees/dsh-xdpool)
- **dsh-model-http-proxy** — 把 globalThis.fetch 包一层：选中的域名走一个或多个命名 HTTP/SOCKS 代理（精确域名或 *.后缀 规则、按卡启停），全局直连规则优先于所有代理；未命中的请求照旧走当前环境默认网络，设置保存后下一次请求即生效，无需重启。
  `v0.1.3` · [源码](https://github.com/guhanfei-ai/dsh-model-http-proxy)
- **dsh-codex-connect** — 通过 ChatGPT OAuth 将 OpenAI Codex 模型接入 DeepSeek Harness，并提供可选的搜索与图片工具。
  `v0.2.0-alpha.10` · [源码](https://github.com/franksong2702/dsh-codex-connect)
- **@goodandready/dsh-subscriptions** — 通过 OAuth 将 ChatGPT Codex、Claude、Grok 与 Antigravity 订阅注册为 DeepSeek Harness 的 LLM 提供方，无需为其配置 API Key。
  `v0.7.21` · [源码](https://github.com/GooDAnDReaDY/dsh-subscriptions)
- **dsh-request-params** — 给 dsh 发出的模型请求加上自己的参数：OpenRouter 供应商路由和备用模型、思考强度、采样参数与自定义请求体字段、请求头，OpenRouter 和其他网关都能用。参数按 dsh 已配置的渠道管理；实时预览显示每个请求会多出什么，请求记录显示实际发出了什么、网关回了什么。
  `v0.2.1` · [源码](https://github.com/xiaohai-78/dsh-request-params)
- **dsh-connect-modelscope-token-plan** — 一键接入魔搭社区的语言、生图模型到 DSH（默认关），自动填入图片识别与上下文窗口；还可查看免费魔粒余额、跳转到模型信息页，记录本地调用计数、趋势、限流事件，输入框旁另有用量胶囊显示余额与今日本地调用次数。上述功能仅需填入 API key，不需要登录账号。
  `v0.6.6` · [源码](https://github.com/eghrhegpe/dsh-connect-modelscope-token-plan)
- **dsh-model-tidy** — DSH 模型整理：整理并精简模型列表——隐藏任意模型、给模型和渠道改备注名（保留厂商计费倍率）、用箭头调整模型与渠道排序；支持搜索、渠道级批量开关、返回顶部与一键恢复。只改显示，不重写任何渠道配置。
  `v1.2.2` · [源码](https://github.com/star-Cosmo/dsh-model-tidy)
- **dsh-connect-sensenova-token-plan** — 一键接入商汤 Token Plan的语言、生图模型到 DSH（默认关），自动填入图片识别与思考强度；限频时自动退避重试，不会误判为额度耗尽；登录商汤控制台后，可查看用量胶囊、积分池、每模型消耗。也支持扫码登录小浣熊，接入其模型，查看模型消耗倍率，使用联网搜索。
  `v0.8.3` · [源码](https://github.com/eghrhegpe/dsh-connect-sensenova-token-plan)
- **dsh-connect-agnes-token-plan** — 一键接入 Agnes 的语言、生图、视频模型到 DSH（默认关），自动填入图片识别与思考强度；登录 Agnes 控制台后（重登需 AGNES_PASSWORD），可看额度窗口（5 小时请求、每周请求、每日图片、视频）、账号累计用量，以及输入框旁的用量胶囊；也支持接入 AgnesCode 桌面端模型（仅…
  `v0.13.2` · [源码](https://github.com/eghrhegpe/dsh-connect-agnes-token-plan)
- **dsh-opencode-bridge** — 在 DSH 中使用 OpenCode 免费模型，支持模型列表动态刷新与可选的代理出口轮换，并提供默认拒绝不安全转换的工具桥与离线、按 Agent 作用域的兼容性审计。
  `v0.5.5` · [源码](https://github.com/Vikrant-Aleph/dsh-opencode-bridge)
- **@eghrhegpe/dsh-connect-qoder** — 注册 Qoder 中国版与国际版的语言模型到 DSH，自动获取每个模型的费率，随错峰时段变化。并提供每天签到、用量胶囊与积分查询功能。需要当前环境Qoder的登录态，或浏览器登录一次。
  `v0.7.6` · [源码](https://github.com/eghrhegpe/dsh-connect-qoder)
- **@bushizhanghan/dsh-workmate** — 把 WorkBuddy 国内版和国际版的免费/付费模型接进 DSH，无需 WorkBuddy 桌面版；以 @bushizhanghan/dsh-workmate 发布，支持 dsh 0.2.0-rc.2 至 0.2.1（含预发布版本）。
  `v1.2.6` · [源码](https://github.com/bushizhanghan/dsh-workbuddy-harness)
- **dsh-coding-subscription-oauth** — 编码订阅 OAuth，支持 SuperGrok / Grok Build、ChatGPT Plus Codex、Kimi Code、Claude Code，并提供可选 loopback OpenAI/Anthropic 网关：本地登录无需粘贴 token，支持 AUTH 刷新重试、grok-4.6 xhigh，并可与…
  `v0.8.7` · 引擎 `>=0.1.1-rc.2 <0.3.0` · [源码](https://github.com/lninghaha/dsh-coding-subscription-oauth)
- **dsh-connect-scnet** — 复用超算互联网（SCNet）计算服务客户端已写入的 API key，把它的模型接入 DSH，带 30 个模型的目录与逐模型默认思考档位。
  `v0.1.1` · [源码](https://github.com/hualuo520-h/dsh-connect-scnet)
- **dsh-connect-doubao** — 复用当前环境豆包桌面客户端已有的登录态，作为 DeepSeek Harness 的模型 provider，并提供 5 小时限额与周额度的只读额度概览。仅 Windows x64：凭据解密依赖 DPAPI。
  `v0.2.0` · [源码](https://github.com/Wahwayhale/dsh-connect-doubao)
- **dsh-model** — 为 dsh 和其他软件提供一个带鉴权的 OpenAI 兼容地址（基于 CLIProxyAPI）：汇集 WorkBuddy、OpenCode Zen、当前环境 Ollama / LM Studio，以及 Codex、Kimi 等 CLI 订阅；在 dsh 页面上登录，不用装各家 CLI；挑选的模型按来源分组同步进…
  `v0.23.0` · [源码](https://github.com/AIcivilization/dsh-model)
- **dsh-plugin-team-subagent-control** — 为 DeepSeek Desktop 的 Agent Teams 提供成员级模型与思考强度路由，并允许主理人释放（删除）团队成员的子智能体运行实例。
  `v1.0.1` · [源码](https://github.com/Sakana07X/dsh-plugin-team-subagent-control)
- **@goodandready/dsh-clinebot** — DeepSeek Harness 的 ClineBot/ClinePass 集成：专属设置页、实时配额仪表板、界面内密钥保存、精选与自定义模型选择，以及 /cline 命令。
  `v0.6.15` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/GooDAnDReaDY/dsh-clinebot)
- **dsh-mimo-connect** — 将 mimo桌面端包含的模型（内测有免费额度）自动接入 DeepSeek Harness，在 DSH 对话窗口里零配置使用。
  `v0.3.5` · [源码](https://github.com/anze225-max/dsh-mimo-connect)
- **dsh-cliproxyapi-pro** — 把一个或多个 CLIProxyAPI（CPA）服务接入 DeepSeek Harness，发现各服务的模型并把勾选的模型同步到模型选择器，每个模型按原生协议（Anthropic Messages、OpenAI Responses 或 OpenAI Chat）请求，并支持单模型参数覆盖；填写 CPA…
  `v1.8.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/TinyBOOOOM/dsh-cliproxyapi-pro)
- **dsh-grok-kit** — 面向符合资格的 X Subscription、SuperGrok 或 X Premium 账号的非官方 Grok 集成：共用 Grok CLI OAuth 登录，支持对话及可选的主循环网页/X 搜索；实验性的图片生成、图生图编辑和视频生成均默认关闭，需主动开启。
  `v0.2.9` · [源码](https://github.com/MaRi23333/dsh-grok-kit)
- **dsh-provider-qoder** — 将 Qoder 订阅接入 DeepSeek Harness，支持国际版与中国区、多模态与工具调用。
  `v0.5.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/mo-n/dsh-provider-qoder)
- **dsh-wtq-pool** — 把当前环境 WorkBuddy、Trae、Qoder 的桌面登录接进 DeepSeek Harness，每家一个 OpenAI 兼容的本地端点，带账号池、限流自动换号与设置面板。
  `v1.0.51` · 引擎 `>=0.2.0-rc.1 <0.2.1` · [源码](https://github.com/chengzhi-c/dsh-wtq-pool)
- **dsh-connect-minimaxcode** — 将 MiniMax Code 的模型接入 DSH：复用桌面 App 登录态或用设备码自行登录，提供 Anthropic 兼容接入、动态模型目录、每日签到领取免费额度，以及跟随所选模型显示的积分余额与到期提示。
  `v0.5.2` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/JeffTsuiCUG/dsh-connect-minimaxcode)
- **dsh-model-context-catalog** — 一键匹配 DSH 已配置模型的上下文窗口，展示容量来源，支持勾选批量配置、手动编辑和持续同步。
  `v0.5.0` · [源码](https://github.com/HOWILLMAKEIT/dsh-model-context-catalog)
- **dsh-plugin-thinking-api** — 一键接入 OpenAI 兼容 API（CodeBuddy、vLLM、各类代理）并开启思考模式，绕开第三方端点以 content_filter 拒绝 developer 角色的问题。
  `v0.2.1-rc.2.2` · [源码](https://github.com/qjf44/dsh-plugin-thinking-api)
- **dsh-opencode-connect** — 把当前环境已安装的 OpenCode CLI 免费模型接入 DSH：自动拉起或复用本地 opencode serve，读取实时模型目录并每五分钟刷新，再通过仅绑定回环、校验 Host 与 Origin 的 shim 把会话事件流转换为 OpenAI 兼容 SSE。
  `v0.1.0` · [源码](https://github.com/sanser9/dsh-opencode-connect)
- **dsh-model-metadata** — DSH 插件：按模型名在运行时查一次目录，把你在自定义网关上声明的模型该有的能力元数据补上——上下文长度、输出上限、推理等级、能否看图；插件自己不写你的设置文档。
  `v0.3.2` · [源码](https://github.com/pgjh/dsh-model-metadata)
- **dsh-daruma** — 渠道开始失败时不让长任务中断：内置重试放弃后 daruma 接管，对连续 429/5xx 或终止性错误跳闸自愈断路器，把下一个请求切到链上的其他渠道。支持 DSH 0.1.x 与 0.2.x 宿主，含已实测故障转移与备用管理 RPC 的 0.2.1-rc.2。备用渠道可在设置页或输入框旁的面板挑选，两处即时同步；每次切…
  `v0.1.10` · [源码](https://github.com/SISCHOI/daruma)
- **dsh-codearts** — 把华为云 CodeArts 接入 DeepSeek Harness：内置华为云 OAuth2 登录（PKCE + DPoP），也支持粘贴 token；登录后即可在 DSH 对话窗口使用 CodeArts 提供的模型，并展示当前环境按账号统计的请求数与 token 用量。
  `v1.1.1` · [源码](https://github.com/elegant01/dsh-codearts)
- **dsh-router-core** — 以 DSH 插件形式运行的 AI 路由网关。侧边栏新增「路由系统」面板管理供应商、账号池、回退组合与 API 密钥，并在 http://localhost:3080/v1 提供 OpenAI 兼容端点。
  `v0.4.7` · [源码](https://github.com/CARVIN94/dsh-router)
- **dsh-workbuddy-bridge** — 把 WorkBuddy 桌面 App 的模型接进 DSH 模型选择器：国内版与国际版各自成组，带上游声明的推理档位、每条回复的积分消耗与剩余积分、按账号分别保存的模型显隐，以及在支持的模型上的图片输入。
  `v0.5.3` · 引擎 `^0.1.7-rc.1 || ^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/dsh-plugin-lab/dsh-workbuddy-bridge)
- **dsh-workbuddy-connect-functy** — corrinehu/dsh-workbuddy-connect 的 Functy 分支。把 WorkBuddy 桌面 App 的模型接到 DeepSeek Harness，带仪表盘界面、多账号轮换和侧栏额度。
  `v0.13.20` · [源码](https://github.com/functy23/dsh-workbuddy-connect-functy)
- **dsh-opendesign-go** — OpenDesign Go 模型提供方：以 Chat Completions 协议接入 12 个订阅模型，从当前环境 OpenDesign 客户端读取真实的 5 小时 / 7 天额度，支持每模型参数与开关、多账号失败切换。
  `v0.1.9` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/EliteOtaku/dsh-opendesign-go)
- **dsh-model-think-level** — 为 DeepSeek Harness 中的第三方模型设置思考等级：在输入框菜单里选择服务商与模型，在官方模型页卡片上用一个开关控制思考等级，并可配置按路由的请求头。
  `v1.1.8` · [源码](https://github.com/GaoHu1997/dsh-model-think-level)
- **dsh-connect-trae-models** — 把当前环境多个 Trae 账号聚合成一个自动容错换号的模型供应商，附带手动与自动签到、积分与到期监控，以及模型配置设置卡片。
  `v0.1.2` · [源码](https://github.com/DragonHorizon-xtihc/dsh-connect-trae-models)
- **dsh-proxy-routes** — 按提供商（账号）分流的 SOCKS5/HTTP 代理池。基于 API 密钥识别账号实现精准分流，支持绝对直连（无视 DSH 全局代理）与内置联网工具代理热装。配置在 DSH 设置页图形化管理，保存即热生效。
  `v0.5.1` · [源码](https://github.com/liqiaohuia/dsh-proxy-routes)
- **dsh-agy-link** — 将 Google Antigravity (agy CLI) 接入 DSH：无 API Key 使用 Gemini/Claude/GPT-OSS 订阅模型，支持流式对话、原生工具卡片、思考轮次注记及 Web 界面 Google OAuth 扫码登录。
  `v0.4.67` · [源码](https://github.com/amlyczz/dsh-agy-link)
- **@opencode2dsh/dsh-plugin** — 将 OpenCode Zen 免费模型接入 DeepSeek Harness，无需 API Key。
  `v0.3.14` · [源码](https://github.com/FishBottle7/opencode2dsh)
- **@hytime/dsh-thinking-effort** — 为 DSH 自定义模型配置思考档位和子 agent 默认思考强度。
  `v0.3.11` · 引擎 `>=0.1.0-rc.7` · [源码](https://github.com/hytime/dsh-thinking-effort)
- **dsh-xai-oauth** — 用设备码 OAuth 登录 xAI Grok 订阅，自动刷新访问令牌，并作为 xai 路由凭据使用，无需 API key。
  `v0.1.5` · [源码](https://github.com/tonylee2022/dsh-xai-oauth)
- **@zhiqiangme/dsh-opencode2api** — 随 DSH 启动独立的 opencode2api 后端（jasonxu114514/opencode2api，Windows x64/ARM64，无需 Docker 或 OpenCode CLI），退出时只停自己拉起的进程；设置卡片可从经校验和验证的 GitHub Release…
  `v26.10.20` · [源码](https://github.com/zhiqiangme/dsh-plugins)
- **dsh-opencode-zen-free** — 为 DeepSeek Harness 接入 OpenCode Zen 免费模型：默认免 key 走公共额度，内置回环 OpenAI 兼容 shim，并把网关要求的 bash/read 注册为真实可执行工具。
  `v0.3.0` · [源码](https://github.com/HAN102300/dsh-opencode-zen-free)
- **dsh-plugin-subagent-director** — 子代理 LLM 供应商/模型选择，支持角色模板。
  `v0.6.0-beta.2` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/SeverusZh/dsh-plugin-subagent-director)
- **@duke-dsh-plugins/dsh-model-prompt-injector** — DSH 按模型注入系统提示词：为本地已配置的模型把自定义提示词追加到系统提示词末尾，支持 provider/model 精确匹配与 provider/* 服务商级通配（两者按序叠加）。设置页自动列出每个已配置服务商及其模型，逐行编辑、即时生效；规则持久化保存、重启不丢；对主会话、subagent 与 workflow…
  `v1.2.2` · 引擎 `>=0.1.5-rc.2 <0.3.0-rc.1` · [源码](https://github.com/MoonlitDropOfBlood/dsh-model-prompt-injector)
- **dsh-magpie-connect** — 把 Magpie 网关的模型接入 DSH 选择器，支持模型显隐管理、图片输入与思考档位。
  `v0.4.1` · [源码](https://github.com/bitxeno/dsh-magpie-connect)
- **kkj-luna-dsh-image-bridge** — 让没有生图/修图能力的模型接入任意 OpenAI 兼容生图接口：支持文生图与图生图，可添加多个服务商，并为生图与修图各选主用与备用模型，主模型连不上时自动切换到备用。
  `v0.5.0` · [源码](https://github.com/kkj-luna/dsh-image-bridge)
- **dsh-opencode-cli-bridge** — 经当前环境 OpenCode CLI 在 DSH 中使用 OpenCode 兼容模型：原生 LlmAdapter 透传、OC 会话持久续接（工具结果跨轮可见）、工具镜像回传、CLI 环境检测面板。需当前环境已安装 OpenCode CLI。
  `v0.1.0` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/home-river/dsh-opencode-cli-bridge)
- **dsh-plugin-subscriptions** — 把 ChatGPT（Codex）、Claude、Grok 订阅当作 DeepSeek Harness 的 LLM 提供方：设置页登录、模型目录、用量展示，以及 image_generate、video_generate 与 x_search 工具。
  `v0.9.10` · [源码](https://github.com/V1ki/dsh-plugin-subscriptions)
- **dsh-grok-byapi** — 在 DeepSeek Harness 中接入 Grok：模型发现、图片与视频生成、文字转语音工具，以及可重启恢复的本地媒体任务。
  `v0.2.1` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/NingYuanLee/dsh-grok-byapi)
- **dsh-sensenova-pool** — 把商汤日日新（SenseNova）模型接入 dsh，并提供按 Key 轮换的 Key 池：粘贴任意多把 API Key，请求在多把 Key 之间轮转；遇 429 限流立即换下一把 Key 重试，每把 Key 独立指数退避冷却；本地 RPM 预限流从源头避开限流，池子耗尽时回报 503 与 Retry-After，使…
  `v0.2.0` · [源码](https://github.com/Phoeky/dsh-sensenova-pool)
- **dsh-model-fold** — 把 DSH 模型选择器按来源（provider）分组：菜单只列来源与其模型数，悬停来源即在右侧滑出该来源的模型子面板（默认）；切换为面板模式后改为单击来源滑出，或改为在列表内就地展开，双击来源标题即可在 悬浮 -> 面板 -> 列表 三者间循环切换；当前使用的模型一眼可见。纯 DOM 增强、零侵入——面板是插件自建…
  `v0.5.1` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/loyalchiiina/dsh-model-fold)
- **dsh-deepseek-web-free** — 把你已登录的 chat.deepseek.com 账号当作额外模型接入 DSH：注册 `deepseek-web` provider，无需 Open Platform API key；侧边栏底部列出你的网页端会话，「Fork to Workspace」会开一个独立的 Harness…
  `v1.0.10` · [源码](https://github.com/loyalchiiina/dsh-deepseek-web-free)
- **dsh-workbuddy2api-panel** — 读取运行中的 workbuddy2api-panel 的 HTTP 接口，把面板模型连同倍率、国内/国际分区与逐模型思考档位同步进 DSH 的模型选择器，并在设置页与侧边栏徽标中显示剩余额度与用量。
  `v1.0.3` · [源码](https://github.com/jerry9692/dsh-workbuddy2api-panel)
- **@edge-sky/dsh-oauth-adapter** — 为 DSH Web 提供 OAuth 账号页面，目前支持 OpenAI Codex、GitHub Copilot、Anthropic、Kimi For Coding、OpenRouter 与 xAI。
  `v0.1.3-rc.5` · [源码](https://github.com/edge-sky/dsh-oauth-adapter)
- **dsh-better-reasoning-effort** — 为第三方供应商模型按模型配置思考强度与输入模态：知识库与原始 /models 端点取证融合建议并标注置信度，在官方「模型」页卡片内直接编辑。
  `v0.5.4` · [源码](https://github.com/HaoyueQin/dsh-better-reasoning-effort)
- **dsh-model-rotator** — 把当前环境已发现的 DSH 模型按实测连通性与速度排序，当前模型无输出失败时在同一回合内切到下一个候选。附带设置页：按渠道分组的模型列表、逐模型与逐渠道开关，以及额度耗尽后休息到次日的冷却策略。
  `v0.2.14` · [源码](https://github.com/chimneyQ/dsh-model-rotator)
- **dsh-local-ai** — DeepSeek Harness 的 Ollama 接入：模型管理、健康检查、基于规则的本地路由与云端回退。
  `v0.2.23` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-local-ai)
- **dsh-autotier** — 自动模型档位路由：一条用户指令进入、一个档位决策出来——复杂意图由强档规划、廉价档执行，简单意图全程廉价档，确定性护栏 + TTL 升级回退。
  `v0.2.19` · 引擎 `>=0.1.6-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-autotier)
- **dsh-model-show** — DSH Web 对话框模型选择器的触发器显示「供应商/模型」；下拉列表与其搜索均不变。
  `v1.0.1` · 引擎 `>=0.2.0-rc.1 <0.3.0-0 || >=0.2.1-rc.1 <0.4.0-0` · [源码](https://github.com/ken95573/dsh-model-show)
- **@dsh-plugins/dsh-llm-hub** — 补上官方 pi-ai 适配器在模型页缺的那半：网关可达性与延迟探测、一键拉取网关模型目录并勾选写回配置、DeepSeek 余额与各家配额就地常驻、每个 provider 实际接入的协议与地址；模型下拉只列当前真能用的分组 —— key 失效、余额耗尽、配额用尽都会被摘掉，修好后自动恢复。
  `v1.9.6` · [源码](https://github.com/webkubor/dsh-llm-hub)
- **@wlv-zedd/dsh-chatgpt-web** — 基于免费 ChatGPT 网页端（GPT 5.6 Luna）的 DeepSeek Harness 零成本对话模型提供者，支持流式 Markdown。
  `v1.0.4` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/WLV-ZEDD/dsh-chatgpt-web)
- **dsh-deepseek-web-login** — 新增 deepseek-web provider，把 chat.deepseek.com 网页端模型接入 DSH：浏览器登录抓取、PoW 请求签名、SSE 流式传输与基于提示词的工具调用。
  `v1.0.3` · [源码](https://github.com/cv-superding/dsh-deepseek-web-login)
- **dsh-zed-provider** — 在 DSH 中使用 Zed AI 托管模型。
  `v0.1.4` · [源码](https://github.com/RGarrido03/dsh-zed-provider)
- **dsh-spark-scope** — 在 dsh 侧边栏底部显示 Spark Scope 卡片：模型服务的 decode 与 prefill 速率及走势图、运行中与排队请求、KV 缓存、TTFT 与 TPOT p95，以及每个 DGX Spark 节点的 GPU 温度、功耗、负载和显存。只读，需要已运行的 Spark Scope 服务。dsh web…
  `v0.0.4` · [源码](https://github.com/juliankang4/dsh-spark-scope)
- **dsh-model-kit** — 从 models.dev 补全缺失的模型参数，从已配置供应商导入模型，并按字段覆盖内置模型；价格可按美元或原生人民币设为手动单价，或按参考价乘自定义倍率。
  `v0.1.5` · 引擎 `^0.2.0-rc.2 || ^0.2.1-alpha.1` · [源码](https://github.com/PerseusNana7mi/dsh-model-kit)
- **dsh-plugin-subagent-roles** — 用文件定义子代理角色：角色放在项目级与全局级 .dsh/roles 目录，委派方每个角色只看到一行目录，子代理可见的工具由角色自己的工具策略决定。
  `v0.5.0` · 引擎 `^0.2.1-rc.1` · [源码](https://github.com/troytse/dsh-plugin-subagent-roles)
- **dsh-model-extension** — 模型+ 设置页:按模型声明推理挡位、输入模态与兼容参数(走官方 settings 管线保存),支持 models.dev 元数据预填与 API 密钥管理。
  `v1.3.3` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/lovezi0/dsh-model-extension)
- **dsh-opencode-go-second** — 添加独立的 OpenCode Go 连接，支持密钥设置、手动获取模型和按会话发送标识。
  `v0.3.2` · 引擎 `>=0.2.1-rc.1 <0.2.2-0` · [源码](https://github.com/yfwu2020/dsh-opencode-go-second)
- **dsh-agent-lang** — 模型产出文本的三个语言通道——工具调用描述（所有工具调用卡片标题，含 PTC 类预设的 run_code）、思考与回复——各自可跟随网页界面语言、强制指定语言或关闭（默认仅描述通道跟随界面语言）。host 侧注入一条全局 runtime-context 提示指示，client 半上报界面语言，设置里的插件卡片负责切换。
  `v0.12.0` · 引擎 `>=0.1.6-alpha.2` · [源码](https://github.com/KannaKuron/dsh-agent-lang)
- **dsh-connect-opencode** — 把当前环境 opencode serve 目录里的全部免费模型（覆盖所有 provider，含你自定义的 provider）接入 DeepSeek Harness 模型选择器，并禁用 OpenCode 原生工具，执行权留在 DSH。
  `v0.1.2` · [源码](https://github.com/serra006/dsh-connect-opencode)
- **dsh-llm-retry-settings** — LLM 自动重试设置卡片：在设置页实时调整重试次数、退避与抖动，并可勾选额外可重试错误码（retryableCodes）—— 默认补入 INVALID_REQUEST，OpenAI thinking 模式 HTTP 400 reasoning_text 报错开箱即自动重试。
  `v0.1.18` · 引擎 `>=0.1.6-alpha.1` · [源码](https://github.com/zeng6125-rgb/dsh-llm-retry-settings)
- **@inventec/dsh-copilot-auth** — 为 DSH 内置的 GitHub Copilot 通道补充网页设备码登录与注销入口，预置开箱即用的 Copilot 提供方路由，凭据存入内置凭据库，模型目录仅在首次登录兜底填充一次、永不覆盖已定制的模型条目。
  `v1.2.21` · [源码](https://github.com/iasiv5/dsh-copilot-auth)
- **dsh-router-codebuddy** — dsh-router 的 CodeBuddy 供应商插件。单账号负责轮询式 OAuth 登录与令牌刷新，选号、冷却与签到交由 dsh-router 核心处理。
  `v0.3.22` · [源码](https://github.com/CARVIN94/dsh-router-codebuddy)
- **dsh-codex-mode** — 面向 DeepSeek Harness 上 GPT 模型的 Codex 风格编码工具与 agent 预设：exec_command、write_stdin、apply_patch、view_image，以及 OpenAI Chat Completions 与 Responses API 两条路由，并桥接 DSH…
  `v0.4.1` · [源码](https://github.com/bainianlaoyao/dsh-codex-harness)
- **dsh-router-traework** — dsh-router 的 TRAE SOLO 供应商插件，移植自 traework2api。提供 traework 供应商这一免费 SOLO 聊天通道，并向 dsh-router 核心上报单账号状态。
  `v0.3.22` · [源码](https://github.com/CARVIN94/dsh-router-traework)
- **dsh-api-thinking** — 读取每个第三方端点自己的模型列表，同步 llm-pi-ai 的逐模型 reasoningEfforts，让输入框提供模型真实支持的思考等级。
  `v0.1.2` · [源码](https://github.com/shuang-ying/dsh-ThirdApi-ThinkingMode)
- **dsh-router-loomy** — 把讯飞 Loomy 云端通道作为 OpenAI 兼容供应商接入 dsh-router，提供模型列表与流式对话补全。
  `v0.2.0` · [源码](https://github.com/2404723600/dsh-router-loomy)
- **dsh-plugin-chatgpt** — 通过 OAuth 登录 ChatGPT 账号，把该套餐的模型作为 DeepSeek Harness 的 provider 路由提供；调用 api.openai.com/v1/responses 并使用账号的套餐授权范围，而非 Codex 后端。
  `v0.1.14` · [源码](https://github.com/ckanner/dsh-plugin-chatgpt)
- **@zhz8888/dsh-radeon-cloud-patcher** — 把 AMD Radeon Cloud 接入 DeepSeek Harness 的模型选择器，思考档位按模型逐个声明。provider 定义随插件自带的补丁层交付，而不是写进 profile。
  `v1.3.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/zhz8888/dsh-radeon-cloud-patcher)
- **dsh-opencode-go** — OpenCode Go 模型提供方，支持网关实时模型发现、models.dev 在线能力配置、会话路由，以及含订阅用量显示的 Web 设置页。
  `v0.1.24` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/Duskriver/dsh-opencode-go)
- **dsh-cc-switch** — 把 cc-switch 里配好的模型供应商接进 DeepSeek Harness：读取 cc-switch 数据库，将 Claude / Codex / OpenClaw / MCode / Pi 等条目转成 llm-pi-ai 路由并写入 API Key，还提供实测首字节耗时与流能否正常收尾的体检。
  `v1.0.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/LightingHa/dsh-cc-switch)
- **dsh-kimi-tide** — 逐步模型路由器：以命名预设与带图/关键词组有序规则为每一步在全部已挂载模型间选路，附图像转述协作流、图像护栏、多 plan 配额面板与逐步决策可观测。
  `v2.2.4` · [源码](https://github.com/tafcear/kimi-tide)
- **dsh-modellix** — 将 Modellix 接入 DSH：使用一个 API Key 在分栏 Design 工作区中提供基于 Schema 的图片、视频与音频生成、实时 LLM 模型目录，以及原生网页搜索与抓取 Provider。
  `v0.3.0` · [源码](https://github.com/Modellix/dsh-modellix)
- **dsh-connect-opencode-free** — 把 OpenCode Zen 免费模型接入 DeepSeek Harness，实时模型发现、设置页逐个启停、一键写入 provider，免 key。
  `v0.4.0` · [源码](https://github.com/DragonHorizon-xtihc/dsh-connect-opencode-free)
- **dsh-set-model** — 为 DSH 提供动态模型切换与思考深度调节：set_model / list_models 两个 Agent 工具让模型按任务难度自主切换 provider、model 与 reasoningEffort（思考深度），强制附带切换理由，带 Provider 白名单与上下文窗口 Token…
  `v0.3.0` · [源码](https://github.com/john-walks-slow/dsh-set-model)
- **dsh-oauth-login** — 通过 Pi 适配器接入订阅 OAuth 和厂商 Plan API Key 登录，使用独立的 DSH 凭据存储。
  `v0.2.9` · [源码](https://github.com/aa2246740/dsh-oauth-login)
- **dsh-model-fusion** — 提供由 Lead 规划与审查、Sidekick 执行代码修改的组合模型线路。
  `v0.2.8` · [源码](https://github.com/aa2246740/dsh-model-fusion)
- **dsh-harness-switch** — 在 DSH 原生会话中接入 Kimi 模型，并按模型选择嵌入式 Kimi 核心或 DSH 原生执行方式。
  `v0.3.3` · [源码](https://github.com/AlyceStocking/dsh-harness-switch)
- **dsh-subagent-custom** — 子代理模型管控：由 Jev 判定本轮任务类别，再把子代理自身的请求改写为该类别对应的 provider、model 与推理强度（在 agent/request 钩子上执行）；会话内可用继承/自动/手动三种方式指定模型，每个角色可带一条先于任务注入的前置提示词，并可离线回放历史判定。
  `v0.1.1` · [源码](https://github.com/xingzhen199186/dsh-subagent-custom)
- **@skylerfee/dsh-llm-opencode-go-live** — 为 DSH 提供 OpenCode Go 模型来源：从 Models.dev 读取 opencode-go 目录，在独立的 opencode-go-live 路由上提供，内置 opencode-go 路由保持原样。目录快照缓存在 DSH home 下，刷新失败时沿用上一次成功的目录；插件自带 Models…
  `v0.2.3` · [源码](https://github.com/SkylerFee/dsh-llm-opencode-go-live)
- **dsh-model-router-en** — dsh-model-router 的纯英文分支。把每个 agent 步骤路由到可配置的模型池，并按任务复杂度、工具失败与成本调整推理强度。
  `v0.14.9` · [源码](https://github.com/ebluffy/dsh-model-router)
- **dsh-rotakit** — 把当前环境已登录的 WorkBuddy 账号汇成一个自动故障转移的模型池，同一池子对外提供 OpenAI Chat、OpenAI Responses 与 Anthropic Messages 三种协议，并支持模型别名、用量统计与积分自动化。
  `v2.3.24` · [源码](https://github.com/2861292267/DSH-Official-WorkBuddy-Credit-Proxy)
- **@moruteaven/dsh-model-quickslots** — 输入框上方的一排模型预设按钮：左键点击把当前会话切换到该预设的提供方、模型与思考强度，右键点击打开该预设的编辑弹窗，每个预设还可以自定义备注名称而不必使用模型名。编辑弹窗读取当前会话真实的模型目录，预设保存在本地。
  `v1.0.1` · [源码](https://github.com/MoruTeaven/dsh-model-quickslots)
- **onekey-models** — 一键接入 TokenDance 模型网关：OAuth 登录保存 API Key，实时模型目录可逐模型控制显隐，并提供对话、生图、生视频与类型化判断的 agent 工具。
  `v0.1.0` · [源码](https://github.com/du-yuxuan/OneKey-Models)
- **dsh-model-pro** — llm-pi-ai 模型提供商的生命周期管理 UI：提供商的新建/编辑/删除与启停（自定义请求头、AES-GCM 加密密钥）；卸载时安全还原滞留提供商，远端模型发现与批量写入，五种策略的智能路由，并集/交集组合提供商，逐模型连通性测试与请求观测。
  `v2.0.2` · [源码](https://github.com/wqy8593521/dsh-model-pro)
- **dsh-antigravity-oauth** — 提供独立账户存储的非官方 Gemini Cloud Code Assist OAuth 接入，存在封号风险。
  `v0.2.4` · [源码](https://github.com/aa2246740/dsh-antigravity-oauth)
- **dsh-llm-opencode-go** — 把OpenCode Go接入DSH的模型列表，提供订阅额度显示、模型发现、会话亲和等功能。
  `v0.2.2` · [源码](https://github.com/a2580vb/dsh-llm-opencode-go)
- **dsh-tap** — DeepSeek Harness 的非官方上游插件包：CodeBuddy 网关（模型目录动态同步、逐模型思考强度、联网搜索/抓取、生图、流式凭据桥），TraeWork CN 与 Qoder CN 两条订阅额度通道（本地 OpenAI 翻译网关），以及 key 型 OpenAI…
  `v0.20.0` · [源码](https://github.com/taikaikaikai-pixel/dsh-tap)
- **@neptune810/dsh-model-router** — 维护一个模型池，把每个 agent 步骤路由到池内模型并设置其思考等级——全部在输入栏点选配置，不需要写 JSON。路由面板接管输入栏的模型位置，同一个控件里既有本会话的模型与思考等级，也有路由自身的设置。三种授权范围（模型 / 思考 / 全部）：手动选择只在所属范围内生效；「思考」范围下路由只作用于你选定的那一个模型…
  `v0.14.2` · [源码](https://github.com/Neptune810/dsh-model-router)
- **@a42null/dsh-opencode-zen-plugin** — 为 DeepSeek Harness 接入 OpenCode Console (Zen) 模型：在「设置 → 插件」填入 Console API Key 后即可选用 Console 的对话模型，模型目录自动同步，每个模型按官方文档路由到对应端点，免费 *-free 模型默认不列出（它们只能在 OpenCode…
  `v0.3.6` · [源码](https://github.com/A42Null/dsh-opencode-zen-plugin)
- **dsh-modeltester** — 在 dsh 网页端挂载模型归属面板，用纯本地、零联网的结构指纹匹配（模板特殊 token 泄漏、glitch 金丝雀、tokenizer usage 向量比对）判断当前会话的回答最像 29 家 AI 厂商中的哪一家，每个结论附带可展开的证据账本，另附 12 探针主动取证电池。
  `v0.0.7-alpha.6` · [源码](https://github.com/Yuer6327/ModelTester)
- **dsh-lantern** — 把当前环境 DeepSeek Harness 已配置的全部模型，以 OpenAI / Anthropic 兼容接口开放给同一局域网；自带 API Key、按 Key 限流、熔断、模型过滤与用量报告。
  `v0.1.5` · [源码](https://github.com/Saretheya/dsh-lantern)
- **@leaf233/dsh-model-gateway** — 把 DeepSeek Harness 里已配置好的模型通过 OpenAI 兼容网关中转出去，其他本地项目 用标准 OpenAI 客户端即可调用。多个供应商候选共享一个具名分组，支持顺序、均衡、 随机三种调度；上游在产出任何内容前失败时自动切换下一候选，客户端无感，被限流的 请求按供应商指示的退避时间自动重试。每条候选的…
  `v1.2.1` · 引擎 `0.1.2-rc.1 || ^0.1.5-rc.2 || ^0.1.6-alpha.1 || ^0.1.7-alpha.1 || ^0.2.0-rc.1` · [源码](https://github.com/Leafyezi233/dsh-model-gateway)
- **dsh-model-health** — 设置页「模型健康」面板：列出 settings.yaml 配置的全部模型，一键批量测试可用性与延迟。
  `v0.2.20` · [源码](https://github.com/oxlyn/dsh-model-health)
- **@arcaneorion/dsh-model-channel-manager** — 模型渠道管理：多个供应商/模型候选共享一条虚拟路由（roundrobin/组），带失败转移、重试、超时与冷却；设置页签可编辑供应商与轮询组、跑测速与单模型真实请求测试，健康面板聚合七天延迟、失败与上游 token 用量（输入、输出、缓存、推理）。
  `v0.4.0` · [源码](https://github.com/ArcaneOrion/dsh-model-channel-manager)
- **dsh-model-pricing** — DSH 设置页中的模型价格表：约 7,250 个模型 / 213 个提供商（叠加本地路由目录），诚实的最低标价比较、按实际路由计价的会话成本、缓存泄漏归因，以及经验证的促销信息源。
  `v0.6.1` · [源码](https://github.com/vitas/dsh-model-pricing)
- **dsh-delegate-router** — 给 DeepSeek Harness 的子代理调用做 Flash/Pro 自动分派：轻任务自动用便宜模型、重任务留在强模型，支持手动覆盖与 /delegate 会话模式。
  `v0.4.5` · [源码](https://github.com/penguin-oo/dsh-delegate-router)
- **dsh-peakrate** — 为模型选择器（每一行）与 composer 工具行显示峰谷倍率，按每个 provider 自己的时区与时段规则判定；实时目录由 host 经带信任围栏的路由下发。
  `v0.3.1` · [源码](https://github.com/log-li/dsh-peakrate)
- **dsh-model-probe** — 直接实测 llm-pi-ai 端点真正接受的能力——从它自己的模型列表取上下文窗口，从它自己的报错反推输出上限与推理档位，用生成的测试图验证图像支持——再报告与证据不符的声明值，确认后才改写。
  `v0.1.20` · [源码](https://github.com/xiaomao49/dsh-model-probe)
- **dsh-plugin-rollout-scout** — 检测账号当前被分配到哪个对话模型：并发发起一次性探测会话，按段落开头的写法为流式思维链打分，读起来像旧模型的在数秒内中止。附带离线自检，用同一分类器回放 13 条人工标注的思维链。
  `v1.6.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/SpookySandwich/dsh-plugin-rollout-scout)
- **dsh-opencode-xdbridge** — 把 OpenCode Zen 的免费模型作为一组 provider 接入 DeepSeek Harness，底层是受管、隔离的 OpenCode 运行时，并在设置页列出每个模型并可逐个检测。
  `v0.1.0` · 引擎 `>=0.1.1-rc.1 <0.2.0` · [源码](https://github.com/XDTrees/dsh-opencode-xdbridge)
- **dsh-antigravity** — Google Antigravity / Cloud Code Assist 模型提供商插件，支持配额查看与模型选择管理。
  `v0.0.9` · [源码](https://github.com/LiZhenNet/dsh-antigravity)
- **dsh-models-radar** — 在设置页展示 CodexRadar 模型能力评测，并在输入框旁显示当前会话所选模型的 DeepSWE 分数。
  `v0.1.24` · [源码](https://github.com/hi-fangj/dsh-models-radar)
- **@superfish058/dsh-llm-proxy** — 按模型给 LLM 请求分流代理：勾选的模型走代理（Clash 等），其余直连；传输错误、429、5xx 自动重试，设置页实时生效。
  `v1.5.0` · [源码](https://github.com/superfish058/dsh-llm-proxy)
- **dsh-plugin-model-capability** — DSH 网页端模型能力管理插件：控制推理档位、上下文与输出上限、输入模态及网关兼容预设，双语界面。
  `v1.4.0` · [源码](https://github.com/yuioi666/dsh-plugin-model-capability)
- **dsh-llm-qwen-local** — 面向 vLLM OpenAI 兼容端点上本地部署的 Qwen 模型的 LLM 适配器插件,支持按模型多模态开关、完全可配置的推理档位,以及可在前端编辑部署配置的 Web 设置页。
  `v0.4.1` · [源码](https://github.com/starefinger/dsh-llm-qwen-local)
- **dsh-openrouter-live** — 读取 OpenRouter 实时 /models 列表的模型提供商，新模型无需等待 harness 发版即可出现：模型按名称排序并显示输入/输出价格，按模型提供思考档位、图片输入、reasoning_details 回放、Anthropic 提示缓存，并按 OpenRouter usage.cost…
  `v0.2.2` · [源码](https://github.com/Boomerangz/dsh-openrouter-live)
- **@knyazevai/dsh-provider** — 为 DeepSeek Harness 添加 KnyazevAI API 提供方及 DeepSeek、GLM 和 MiniMax 模型目录。
  `v0.1.2` · 引擎 `>=0.1.5-rc.2` · [源码](https://github.com/knyazev741/knyazevai-dsh)
- **@shuind/dsh-codex-harness** — 在 DSH 中提供精简的 Codex 编码模式：使用精简的 codex 提示词与原生 Codex 风格工具，并用少量提示词约束抑制 GPT 的过度解释；提示词可自行编辑调整。
  `v0.2.21` · [源码](https://github.com/shuind/dsh-codex-harness)
- **dsh-chatgpt-oauth** — 在 DSH Web 的模型设置中使用浏览器或设备码登录 ChatGPT 账号，并直接查看 Codex 订阅用量。
  `v0.1.1` · [源码](https://github.com/zhangnan/dsh-chatgpt-oauth)
- **freecodego** — 面向 DeepSeek Harness 的 FreeCodeGo：DeepSeek、Codex、Claude 三套引擎共用同一条会话与工具链，并为以下模型提供 0 token 免费使用渠道：deepseek-v4.1-flash、deepseek-v4-pro、deepseek-v4-flash-free、glm-5.…
  `v0.1.6-alpha.2` · 引擎 `>=0.1.6-alpha.2` · [源码](https://github.com/XiangSu-ce/dsh-plugin-freecodego)
- **@snowamberx/dsh-role-router** — 按 default、planner 和 subagent 角色将代理请求路由到可配置模型，在计划模式下自动使用 planner，并提供逐角色推理强度与 Web UI 配置。
  `v0.3.2` · [源码](https://github.com/SnowAmberX/dsh-role-router)
- **dsh-plugin-ai-switch** — 按平台把 AI 供应商账号组成算力池，经本地回环代理路由并在 OpenAI、OpenAI-Responses、Anthropic、Gemini 四种协议间桥接，再用带快照回滚的安全直写把代理写进 Codex、Claude Code、Gemini CLI、Grok、OpenCode、OpenClaw、Hermes…
  `v0.1.0` · [源码](https://github.com/ijry/DeepSeek-Harness-Desktop-Ultra)
- **dsh-grok-provider** — Grok Build 模型接入插件：使用官方 CLI 浏览器登录，动态发现账号可见模型，支持流式推理、工具调用、额度与模型能力设置页。
  `v1.0.6` · [源码](https://github.com/yoshino-xiao7/dsh-grok-provider)
- **dsh-glm-mode** — 为 zhipuai/glm-5.3-flash 调优的「GLM 模式」Agent 预设：PTC 程序化工具调用、思考死循环守卫与工具空转守卫双层防护（源自活体事故复盘）、GLM 专属自动压缩（75%/22%）。
  `v0.4.0` · [源码](https://github.com/hoyyang/dsh-glm-mode)
- **dsh-opencode-go-model-list** — 让 DSH 自带的 opencode-go 供应商跟随 opencode Go 套餐的实时模型列表，opencode 上架新模型后无需改配置即可使用。
  `v0.1.1` · [源码](https://github.com/xiaobbl/dsh-opencode-go-model-list)
- **dsh-reasoning-effort** — 为 DeepSeek Harness 配置 Provider 与模型的推理强度映射，并提供按 Provider 分组的模型选择器和输入框滑块。
  `v0.2.8` · [源码](https://github.com/Mu-scorpio/dsh-reasoning-effort)
- **dsh-reasoning-tiers** — 在 llm-pi-ai 设置节为第三方模型提供商补齐推理档位（reasoning effort）声明，让 DSH 自带的思考强度选择器对 pi-ai 目录之外的模型真正可用。
  `v0.3.0` · [源码](https://github.com/1069137617/dsh-reasoning-tiers)
- **dsh-plugin-tokenmarket** — 将 Token Market 添加为 OpenAI 兼容模型供应商，并提供 DeepSeek V4 Pro、Kimi K3 和 GLM-5.3。
  `v0.1.2` · [源码](https://github.com/FitBBC/dsh-plugin-tokenmarket)
- **@welsione/dsh-model-router** — 统一模型路由：一个逻辑 ModelID 汇聚多家供应商，首 token 前失败自动切换并冷却、健康度择优、按 purpose 三档分级（tier1/2/3）、每候选思考级别，设置面板自动保存即时生效。
  `v0.0.10` · [源码](https://github.com/welsione/dsh-model-router)
- **dsh-opencode-session** — 为 OpenCode / OpenCode Go 提供商请求自动附加每个会话稳定的 x-opencode-session 请求头，修复 400 MissingSessionID 错误，同时保持会话亲和与提示缓存路由。
  `v0.1.1` · [源码](https://github.com/nobu121/dsh-opencode-session)
- **owndsh-plugin** — 早期开发中的团队管理插件，将 DeepSeek Harness 接入独立部署的自托管 OwnDsh 服务端，提供团队身份、模型授权、配额与用量审计。
  `v0.1.0` · [源码](https://github.com/boe1900/owndsh)
- **@icedcola/dsh-provider-veark** — 火山方舟 Coding Plan 的 DeepSeek Harness LLM provider：provider 级 PDF 与图片输入，支持 Responses API 流式。
  `v0.2.2` · [源码](https://github.com/IcedWatermelonJuice/dsh-provider-veark)
- **dsh-model-gate** — 提供模型粒度的启用禁用机制：从 DSH 模型目录隐藏被禁用的模型，以协议内错误块拦截直接分发请求，并提供UI设置界面。
  `v0.1.3` · [源码](https://github.com/OPaimon/dsh-model-gate)
- **dsh-qwen-token-plan-cn-responses** — 面向 DeepSeek Harness 的千问 Token Plan 个人版 Responses API 提供方，保留 Qwen 服务端内置工具与 DSH 本地函数工具，多轮文本/推理/工具调用历史与图片附件均被支持，官方模型目录按 npm 版本冻结快照发布。
  `v0.1.9` · [源码](https://github.com/nickhelion/dsh-plugins)
- **dsh-agy-safe** — 合规地在 dsh 中使用你自己的 Antigravity 额度：将当前环境已登录的官方 Antigravity CLI（agy）会话桥接为主对话与子代理模型提供方。
  `v0.1.8` · [源码](https://github.com/Jonah-Wu23/dsh-agy-safe)
- **@godd6366/dsh-sub2api** — 将 sub2api 网关接入 DeepSeek Harness：用一个 base URL 统一管理 OpenAI / Claude / Grok / Gemini 等多供应商路由，支持按 key 发现模型、用量查询与全局视觉/图像生成工具。
  `v0.2.1` · [源码](https://github.com/GodD6366/dsh-sub2api)
- **dsh-http-proxy** — 把 globalThis.fetch 包一层，按目标域名让 DeepSeek Harness 的模型 API 请求走 HTTP/SOCKS 代理、其它请求保持直连，全程不改 Harness 源码。
  `v0.1.3` · [源码](https://github.com/elizax/dsh-http-proxy)
- **dsh-multi-model-orchestrator** — 多模型主脑编排器：主模型将复杂任务拆解，按各模型优劣分派给 GLM / Kimi / Qwen 子代理执行，并按模型统计 token 用量。
  `v0.2.2` · [源码](https://github.com/Bazley13/dsh-multi-model-orchestrator)
- **dsh-codex-community** — DeepSeek Harness 社区 Codex 模型接入：支持 ChatGPT OAuth、Codex 模型、图片输入、额度展示、单会话 Fast 与传输控制，以及安全的流式恢复。
  `v1.2.1` · [源码](https://github.com/yoshino-xiao7/dsh-codex)
- **dsh-openrouter-provider-advisor** — 按量化、速度、缓存重度价格、上下文和可用率为当前 DSH 模型推荐 OpenRouter 供应商，并支持一键切换以帮助降低 token 成本。
  `v0.1.5` · [源码](https://github.com/xuan666-lab/dsh-openrouter-provider-advisor)
- **dsh-opencode-free-models** — DSH free model provider plugin with 20+ models including Gemini, MiMo, GLM, etc.
  `v0.1.0` · [源码](https://github.com/yu-wenchao/dsh-opencode-free-models)
- **dsh-codex-auth** — 复用 Codex CLI 的 ChatGPT 登录态注册 `openai-codex` LLM 路由，并在 DSH Web 设置中提供 GPT Auth 控件。
  `v0.3.2` · [源码](https://github.com/suntianc/dsh-codex-auth)
- **dsh-model-memory** — 为自定义 API 模型提供推理强度分级管理与跨会话偏好记忆：在「设置 → 模型」中内联切换 low/medium/high/max，配置写入为原子操作。
  `v0.1.12` · [源码](https://github.com/Mutx163/dsh-model-memory)
- **dsh-antigravity-auth** — 通过非官方 Antigravity OAuth 通道提供 LLM 路由、网页搜索、图片生成与编辑、视频理解、配额状态和 DSH Web 设置控件。
  `v0.1.3` · [源码](https://github.com/suntianc/dsh-antigravity-auth)
- **dsh-kernel-mesh** — 把 Kimi、Grok、Codex、MiniMax 注册成 DeepSeek Harness 的模型路由、各家子代理配方，以及 kernel_status / kernel_run / kernel_switch 工具。
  `v0.1.8` · [源码](https://github.com/oppnc/dsh-kernel-mesh)
- **dsh-codex-connect-plus** — 为 DSH 添加基于 ChatGPT/Codex OAuth 的 Codex 模型及 gpt-image-2 文生图和编辑能力，无需 OpenAI Platform API Key。
  `v0.1.0-beta.5` · [源码](https://github.com/stoneface10/dsh-codex-connect-plus)
- **dsh-better-model-setting** — 替代官方「模型」设置页：提供方生命周期管理、每模型思考档位、重试覆盖、拖动排序与上游模型同步。
  `v0.3.1` · [源码](https://github.com/HiSeax/dsh-better-model-setting)
- **dsh-qwen38-ninfer-compaction-fix** — 针对 NInfer 托管的 qwen3.8-27b 网关的压缩修复：在 dsh 上下文压缩与会话标题调用中关闭思考，避免 xhigh 推理耗尽全部输出预算；同一思路适用于其他启动方式，本包仅面向 NInfer。
  `v1.1.0` · [源码](https://github.com/zhubaohi/dsh-qwen38-compaction-fix)
- **dsh-codex-switch** — 通过 OAuth 连接 ChatGPT 账号，支持手动或自动切换，并为 DeepSeek Harness 添加带用量限额信息的 Codex 模型。
  `v0.1.0-alpha.8` · [源码](https://github.com/ZChenW/dsh-codex-switch)
- **@sharewiner/dsh-model-management** — 管理 DSH 默认模型、Provider 与模型可见性，并支持可选的 OpenAI Responses 联网搜索。
  `v0.2.3` · [源码](https://github.com/sharewiner/dsh-model-management)
- **@volcengine/ark-plan-api** — 在 DSH 原生模型选择器中注册方舟 Agent Plan、Coding Plan 与后付费模型路由。
  `v0.1.0` · [源码](https://github.com/volcengine/ark-cli)
- **@creait/dsh-gen-limit** — 按提供方/模型限制并发生成，并附带设置卡片：限定同时进行流式生成的会话数，在流式调用与子代理派生两处强制执行；超出上限的扇出会进入 FIFO 队列等待，而不是直接失败。
  `v0.2.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **dsh-llm-api-pool** — 聚合多个 OpenCode Go API key，把每次请求热切换到用量最低的一个，并提供官方用量/余额查询与设置页图形化管理。
  `v0.1.8` · [源码](https://github.com/bainianlaoyao/dsh-llm-api-pool)
- **dsh-more-models-thinking-level** — 为 GPT、Codex、Gemini 与 OpenAI-compatible 模型提供按模型的推理等级（off/minimal/low/medium/high/xhigh）。装的是 helper 而不是运行时适配器：需按 profile 手动跑一次 enable-capabilities.ps1（Windows）并重启…
  `v0.1.1` · [源码](https://github.com/Henta111/dsh-more-models-thinking-level)
- **dsh-llm-subscription** — 在 DSH 原生模型选择器里加入 Claude、Gemini 与本地 Ollama 模型，复用你已有的 Claude Code / Antigravity CLI 登录态而不是按量计费的 API Key，并为 Claude 提供可用的推理强度选择。
  `v0.1.4` · [源码](https://github.com/DavidRm1911/dsh-llm-subscription)
- **@creait/dsh-think-level** — 按提供方与模型保存思考等级：推理强度不再只属于设置它的那次会话，还会应用到 dsh 从不询问的子代理。会话内的手动选择依然优先，没有配置的模型保持提供方默认值。
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **dsh-llm-codex-app-server** — 使用本地 Codex 登录的 Codex App Server 模型提供方，支持会话复用、Harness 工具桥接、原生动作轨迹和生成图片持久化。
  `v0.1.20` · [源码](https://github.com/wss534857356/dsh-plugin-codex)
- **dsh-agy-provider** — 将当前环境已登录的 AGY CLI 接入 DSH 作为模型 Provider：支持 Gemini/Claude 模型发现、独立推理强度、DSH-owned 工具、受限上下文与工具结果管理、Windows 安全流式传输；如遇问题，请在 GitHub 提交 Issue：https://github.com/darkings/d…
  `v0.10.0` · [源码](https://github.com/darkings/dsh-agy-provider)
- **dsh-nl-model-switch** — 用一句自然语言切换当前 DSH 会话模型，可在 Web、TUI 及 IM 桥接的微信、飞书等对话框中使用，无需操作面板。
  `v0.1.1` · [源码](https://github.com/passingby000/dsh-nl-model-switch)
- **dsh-model-capability** — 为 DeepSeek Harness Web UI 的自定义模型设置添加输入模态选择器。
  `v1.0.1` · [源码](https://github.com/WJZ-P/dsh-model-capabilities)
- **dsh-plugin-dit** — DIT.ai 的 DeepSeek Harness 模型接入 bundle：使用一个 DIT_API_KEY 安装 29 个 OpenAI Chat Completions 模型和 10 个 Anthropic Messages 模型，并按协议配置 thinking。
  `v0.2.1` · [源码](https://github.com/cuboteam/dsh-plugin-dit)
- **dsh-model-sync** — 把各提供方线上模型列表写进 DSH 设置，输入框圆环显示当前会话模型的 5 小时/7 天窗口或按量剩余余额。
  `v0.1.6` · [源码](https://github.com/jiay98528-dev/dsh-model-sync)
- **dsh-plugin-weaknet-adaptor** — 弱网适配器：模型流式请求的长退避透明重试（上限 10 分钟）、本地响应重放缓存、心跳自动重连、降级模式 token 节流，并提供中英双语设置页。
  `v1.0.5` · [源码](https://github.com/jiay98528-dev/dsh-plugin-weaknet-adaptor)
- **dsh-llm-failover** — 限流或配额耗尽时自动切换模型提供方：可按提供方配置模型，带冷却机制与永久最终兜底。
  `v0.3.0` · [源码](https://github.com/HB00/dsh-llm-failover)
- **@wnjxyk/dsh-codex-oauth** — 在 DeepSeek Harness 中使用 ChatGPT/Codex 订阅接入 GPT 模型、图像生成与 Web 搜索，并支持订阅额度显示、模型与功能控制，以及浏览器或设备码 OAuth 登录。
  `v0.4.2` · [源码](https://github.com/WNJXYK/dsh-codex-oauth)

## 用量与计费 · usage（175）

- **@angelyeye/dsh-cost-tracker** — 统计 DeepSeek Harness 的 LLM Token 用量与花费（人民币、峰谷计价），提供设置面板、Agent 工具、HTTP 接口与持久化存储。
  `v1.10.1` · 引擎 `>=0.1.0-rc.1` · [源码](https://github.com/Angelyeye/dsh-cost-tracker)
- **@iasiv5/dsh-quota-watch** — 在 DSH 中查看 GLM Coding Plan 与 GitHub Copilot 的服务商额度快照：可拖动悬浮胶囊与详情面板展示额度窗口、重置时间、分模型用量与 Copilot 额度，附默认隐藏的可选侧边栏卡片；凭据由 DSH 宿主解析，不保存额度历史。
  `v0.1.35` · [源码](https://github.com/iasiv5/dsh-quota-watch)
- **@dougen/dsh-deepseek-usage** — 在侧边栏底部显示一张卡片：DeepSeek 账号余额（用 DSH 已保存的 API Key 调官方 /user/balance 接口获取），以及当前模型的档单价——输入、缓存读取、输出——取自内置的官方价格表快照。一个圆点标出当前计费时段，旁边是距离切换的倒计时：高峰为北京时间周一至周五…
  `v0.14.0` · [源码](https://github.com/dougen/dsh-deepseek-usage)
- **@verneuil/dsh-opencode-go-usage** — DSH 悬浮窗插件：三环显示 OpenCode Go 的 5 小时 / 本周 / 本月用量，可选同时显示 DeepSeek 账户余额；悬停浮层列出各窗口与重置倒计时，极简模式把三环嵌套显示；设置页可调刷新间隔、进度口径、显示项与浮窗位置。
  `v3.0.5` · 引擎 `>=0.1.7` · [源码](https://github.com/verneuil/dsh-opencode-go-usage)
- **dsh-reasoning-distill** — 把过长的模型思考压缩成有用核心，之后每次请求重放压缩版，并给出每个会话的开销与节省报告。默认关闭：必须先选择一个改写后端。derive 无需安装、打包版也能用；in-place 需给 DSH 源码打 14 处补丁并重建（源码构建首选）；message-edit 需装第三方插件，仅实验性，不推荐。
  `v0.1.17` · [源码](https://github.com/huhu23333/dsh-reasoning-distill)
- **dsh-cache-helper** — 展示缓存命中、发送前确认请求前缀风险，并按调用步骤定位缓存失效。
  `v0.2.0` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/ghang/dsh-cache-helper)
- **dsh-cost-meter** — 会话与当日 API 费用统计、预算图框（已用%）、官方余额、历史看板，支持峰谷计价与官方价格一键同步。
  `v1.9.36` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/Han-1413141/dsh-cost-meter)
- **@sligqoer/dsh-usage-stats** — DSH 桌面端用量统计、供应商配额、自定义查询、可选 WorkBuddy 积分与高级模型选择器。
  `v0.2.5` · [源码](https://github.com/Jockjrop/dsh-usage-stats)
- **dsh-aliyun-balance** — 界面悬浮一行显示「还能花的钱」= 阿里云代金券余额 + 账户余额；悬停看券面值、已用与最早失效时间。只读 BSS 存量，不做消费统计。
  `v0.1.4` · [源码](https://github.com/wai549077/dsh-aliyun-balance)
- **@mzzsfy/dsh-usage-dash** — 会话用量统计面板：天/小时/分钟三粒度 token 与请求统计、活跃热力图、会话底栏信息接管与回合费用芯片、多条件分时段定价费用估算；复刻自 HaoyueQin/dsh-usage-statistics-panel 并扩展。
  `v0.10.2` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-subusage** — 在 DeepSeek Harness 模型选择器旁显示 28 条提供商入口的订阅额度与账户余额，附统一设置页和只读额度查询工具。
  `v0.16.1` · [源码](https://github.com/KouzakiUmi/dsh-subusage)
- **@zhujiuyi/dsh-token-dashboard** — DeepSeek Harness 侧栏的 Token 用量看板：从当前环境会话日志统计每日消耗并给出近 12 个月热力图；按供应商渠道查看今天/近 7 天/近 30 天/全部的用量（今天按小时展开）及各渠道平均输出速度；按会话排行，包含已归档与已删除会话，子代理消耗并入父会话。
  `v0.1.2` · [源码](https://github.com/zhujiuyi/dsh-tokenDashBoard)
- **dsh-context** — DSH 上下文洞察面板：Context 仪表盘 + /context命令 + Context 浏览器，查看 Context的分类组成、内容详情、演进趋势、压缩/注入事件、统计等一站式 Context 全生命周期管理。
  `v0.75.1` · 引擎 `>=0.2.0-rc.2 || >=0.2.1-rc.2` · [源码](https://github.com/bowenliang123/dsh-context)
- **dsh-usage-state** — 在输入框上方独立一行显示当前模型所属供应商的账户余额或套餐额度（5h/7d/30d）；只做显示，不做成本统计。
  `v0.4.10` · 引擎 `^0.2.0-rc.2 || ^0.2.1-rc.1` · [源码](https://github.com/takboo/dsh-usage-state)
- **dsh-token-total** — Token 用量统计看板与会话树用量统计：提供快捷时间范围筛选、6 个汇总指标卡片、GitHub 风格活跃热力图、分模型堆叠柱状图与缓存命中率平滑曲线，以及按模型和供应商的 Top5 排行；接管并增强会话底部状态栏，汇总主智能体与全部子智能体的完整用量及分项明细。
  `v1.0.6` · [源码](https://github.com/GaoHu1997/dsh-token-total)
- **@kenz1117/dsh-ui-usage-billing** — 侧边栏计费仪表盘：从会话日志聚合真实用量（按模型/按日统计调用、Token、缓存），按最新多厂商官方价格估算人民币费用，订阅套餐（coding/token/agent）通道豁免计费，并带各厂商健康状态圆点。
  `v1.7.2` · 引擎 `>=0.1.2-alpha.1` · [源码](https://github.com/kenz1117/dsh-ui-usage-billing)
- **@laoyuehanni/dsh-token-usage** — 详细的模型用量、费用分析，支持会话级用量统计，支持GLM、MiniMax、OpenCode Go、DS等用量查询。
  `v0.4.9` · [源码](https://github.com/LaoYueHanNi/dsh-token-usage)
- **dsh-plugin-usage** — DeepSeek Harness 的用量与参考成本面板，含今日 / 近 7 天 / 近 30 天 / 全部 / 自定义范围并按小时或天聚合；模型筛选与按模型明细（请求数、输入/输出 Token、缓存、参考成本、占比）；按总 Token 显示前 4 个模型、其余归入「其它」的模型占比卡；可配置的每百万 Token…
  `v0.4.0` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/bennett-dsh/dsh-plugin-usage)
- **dsh-ledger-kitty** — 窗台上的白猫记账助手：显示每条回答与会话的 token 和花费、提示缓存省下的钱、上下文占模型窗口的比例、下一次峰谷换价时间与实时 DeepSeek 余额；可摸头打呼噜，随 agent 工作状态做出反应，所有音效均为合成。
  `v0.2.1` · [源码](https://github.com/LexVolkov/dsh-ledger-kitty)
- **dsh-peak-reminder** — 峰时提醒：DeepSeek 走高峰计价时，每隔 N 分钟（默认 5，可设 1–120）在 DSH Web 界面顶部提醒一次「现在是峰时」，峰↔谷切换各提醒一条，谷时完全不打扰；侧边栏底部常驻一行显示当前峰/谷状态与下次切换倒计时。峰谷规则（北京时间工作日 09:00–12:00、14:00–18:00；周末、法定节假日…
  `v0.1.1` · [源码](https://github.com/54nanmiao/dsh-peak-reminder)
- **@zdt3476/dsh-metrics** — Token 用量与成本看板：请求数、Token、最近 60 分钟 RPM/TPM、缓存命中率、按模型与供应商拆分、12 个月活动热力图，成本按 OpenRouter 公开价目估算。数据只落在本地账本，无遥测。
  `v1.0.3` · 引擎 `>=0.2.0` · [源码](https://github.com/zdt3476/dsh-metrics)
- **@cassius0924/dsh-usage-dashboard** — DSH Web 的 DeepSeek 用量仪表盘：按近期日均消耗估算可用天数，今日/本月/累计花费环比对照，分模型成本排行、缓存节省、峰谷定价影响，以及可拖动的悬浮余额窗。
  `v0.8.3` · [源码](https://github.com/Cassius0924/dsh-usage-dashboard)
- **@sunshaobei/dsh-balance-panel** — DSH Web 端的供应商额度与余额状态小组件，在输入框底部的停靠区展示剩余额度、用量与限流窗口。wenzetan/dsh-quota-panel 的本地分叉。
  `v3.1.0` · [源码](https://github.com/sunshaobei/dsh-balance-panel)
- **dsh-hub-oauth-gateway** — DSH Web 用量中心：本地 SQLite 历史、HUD 与仪表盘、Hub 账户与额度快照、自定义定价与订阅费用账本、CSV/JSON 导出，并含 coding 计划 OAuth 与可选回环 OpenAI/Anthropic 网关。
  `v1.13.6` · 引擎 `>=0.1.1-rc.2 <0.3.0` · [源码](https://github.com/lninghaha/dsh-hub-oauth-gateway)
- **dsh-bill** — 按在线价格目录计价的费用统计（models.dev + OpenRouter，8000+ 模型，每次调用按自身时刻定价）：每轮成本行、把花费归因到工具输出 / 模型输出 / 系统提示词 / 终端命令的「费用」标签页、预算、月度预测、约 166 种实时汇率货币，以及 bill_stats agent 工具。
  `v0.23.1` · [源码](https://github.com/Jannchie/dsh-bill)
- **dsh-balance-plugin** — 侧边栏底部的 DeepSeek 钱包余额：信用卡图标配余额数字，按剩余额度着色（≥ ¥2 绿色、¥0–2 黄色、≤ ¥0 红色），挂载时、每轮对话结束和点击时刷新；余额变动时带符号差额上飘淡出。
  `v0.2.4` · [源码](https://github.com/luokai-demo/dsh-plugins)
- **dsh-offpeak** — 高峰时段只暂停指向官方或拦截列表内模型的请求，其余照常放行；峰谷时段、按模型的拦截列表与会话「畅跑」都能在徽标面板里编辑。
  `v3.3.7` · 引擎 `>=0.1.5-rc.2 <0.1.6-0 || >=0.1.7-rc.1 <0.1.8-0 || >=0.2.0-rc.1 <0.2.1-0 || >=0.2.1-rc.1 <0.2.2-0` · [源码](https://github.com/lizilong1993/dsh-offpeak)
- **dsh-ci-diet** — 找出被浪费的 GitHub Actions 运行时间，并提出小而可审查的工作流补丁；任何修改都需要明确批准，并提供用于分析规则、历史上限、存储和成本估算的 DSH 设置页面。
  `v0.3.1` · 引擎 `>=0.2.1-rc.2 <0.3.0-0 || >=0.2.2-rc.1 <0.3.0-0` · [源码](https://github.com/0disoft/dsh-ci-diet)
- **deepseek-balance-dsh** — DeepSeek Harness 的余额与用量监控：右下角悬浮组件，显示充值余额、按模型的周期消耗、Token 明细，以及北京时间高峰/低谷价格提醒；需先在设置里填入 DeepSeek API key。
  `v0.2.2` · [源码](https://github.com/OwlNjust/deepseek-balance-dsh)
- **dsh-damage-pulse** — 在 DSH Web 界面追踪 DeepSeek Token 用量、单次与会话费用及账户余额，并显示缓存感知的扣费动画。
  `v4.2.9` · [源码](https://github.com/wssfk12138/dsh-damage-pulse)
- **dsh-budget-handoff** — 给 DeepSeek Harness 的会话设预算上限：按官方价目表实时算账，80% 预警、100% 拦停任务，并落盘一份交接快照，让下一个会话接着干。
  `v0.4.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/ZiOstudio/dsh-budget-handoff)
- **dsh-model-billing** — 在输入框右下角的模型选择器中自定义模型顺序，按每百万 tokens 设置缓存命中、缓存未命中与输出三档价格，并结合内置的 DeepSeek 峰谷价估算逐轮和本会话费用。
  `v0.1.2` · [源码](https://github.com/likaileave/dsh-model-billing)
- **@guojinpeng/dsh-cost-meter** — 估算会话和每轮费用，按模型设置 USD 或 CNY 单价，并从 models.dev、OpenRouter 或 DeepInfra 同步价格。
  `v0.4.7` · [源码](https://github.com/guojinpeng/dsh-cost-meter)
- **@liuguangzhe/dsh-token-usage** — 统计当前环境全部 DSH 会话的历史 token 消耗，按 message.id 去重，支持自定义日期区间与按接入方的月度额度剩余。
  `v0.4.1` · 引擎 `>=0.1.5-rc.1 <=0.2.1-rc.2` · [源码](https://github.com/l956615272-hub/dsh-token-usage)
- **@shallbay/dsh-token-stats** — 整个 Harness 的 Token 用量看板：把全部会话的计费 token（未缓存输入、缓存读取、缓存写入、输出）按会话与轮次汇总，并给出高峰/低谷的人民币预估费用；侧边栏「Token 用量」入口（在设置上方）打开 /token-stats 看板，Web 端新标签页、桌面端应用内弹窗。标签页可见时每 60…
  `v1.2.2` · [源码](https://github.com/ShallBay/dsh-token-stats)
- **dsh-usage-chart** — 输入框下方的用量/成本/余额仪表盘：实时指标指示器 + 零依赖 SVG 用量图表，按轮次统计用量、估算成本并实时查询 DeepSeek 账户余额。
  `v1.1.8` · [源码](https://github.com/Max-Samson/dsh-usage-chart)
- **@wingsky-1/dsh-provider-usage** — 多 provider 用量统计框架（v2 适配器契约）：常驻胶囊 + 详情面板；内置 DeepSeek 官方（区间记账法推算每日用量 + 峰谷倒计时徽标，官方无用量接口也能算）与 OpenCode Go；其他数据源只需放入一个 mjs 适配器文件即可接入，设置页热插拔，密钥只留在宿主端。
  `v0.2.10` · [源码](https://github.com/wingsky-1/dsh-plugin-hub)
- **@xfqz86/dsh-usage-stats** — 在侧边栏按模型、会话与日期统计 token 用量，并监控 OpenCode Go 额度、DeepSeek 余额与 Z.ai 额度。
  `v0.5.2` · [源码](https://github.com/xfqz86/dsh-usage-stats)
- **dsh-tps** — 当前会话的实时 tokens/s 读数卡片，可停靠左侧栏或作为悬浮卡片拖动，形态在卡片右上角切换。
  `v2.1.0` · [源码](https://github.com/TINGOD2006/dsh-tps)
- **dsh-speed-gauge** — DSH 生成速度仪表盘：半圆表盘与流动曲线趋势图，一秒 50 次获取 tok/s，测量更细更精准。
  `v1.0.4` · [源码](https://github.com/MoreanP2003/dsh-speed-gauge)
- **dsh-where-did-my-tokens-go** — 在聊天页“深度思考”指示旁实时显示 token 计数，支持输入/输出合并或分列展示、逐步骤操作计数与 K/M/G/T 自适应单位。
  `v1.8.1` · [源码](https://github.com/RevxZxCx/dsh-where-did-my-tokens-go)
- **dsh-token-use** — 设置中的 Token 用量面板：总量（输入/输出/缓存读/缓存写/推理/调用次数），按模型、按天、按月、按项目的明细，以及最近 30 天的按日趋势折线图；历史在 Worker 线程上一次性重建，之后由会话事件实时累加。
  `v0.3.4` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/huangyuheng/dsh-token-use)
- **dsh-balance-widget** — DSH Web GUI 的余额与成本小部件：侧边栏底部卡片显示账户余额、剩余比例条与今日花费；点击展开四层级成本明细（最近提问 / 本会话 / 今日·本项目 / 今日·全部），带名词解释与一键充值入口。零依赖，兼容 Node 24。
  `v0.6.4` · [源码](https://github.com/LL-cmyk-so/dsh-balance-widget)
- **@stmol/dsh-rub-cost** — 在输入框坞区显示以卢布计的当前会话费用：当前时段与倒计时、该时段的 API 费用、央行汇率、含 subagent 的合计、缓存节省与 DeepSeek 平台余额。
  `v1.3.0` · [源码](https://github.com/Stmol/dsh-rub-cost)
- **@goodandready/dsh-key-limits** — 在 DSH 界面与设置中显示 API Key 和订阅账户的额度限制。
  `v0.2.34` · [源码](https://github.com/GooDAnDReaDY/dsh-key-limits)
- **@zhujiuyi/dsh-balance** — 读取当前 DSH 路由背后的 API 余额或订阅余量——包括经控制面读取 OpenDesign（AMR）的钱包与 Design Plan 窗口——绝不猜数字：查不到时如实说明原因（仅解析失败时附原始响应）；OpenDesign 需先 `vela login` 或在桌面端写入 `~/.amr/config.json`…
  `v0.2.5` · [源码](https://github.com/zhujiuyi/dsh-balance-meter)
- **dsh-quota** — 右下角「会员额度」悬浮球与面板，聚合各 AI 平台套餐额度（Kimi Code、DeepSeek、智谱 Coding Plan、BigModel、通义千问、超算、TokenRouter、SupaWriter），API key 自动同步自 DSH 凭证域，彩色进度条展示用量。
  `v0.14.5` · [源码](https://github.com/Minokun/dsh-quota)
- **dsh-search-ledger** — 按已配置渠道路由 DSH 网页搜索与抓取，并记录每次尝试的用量和估算费用。需 Node.js >=22.19 与 DSH 0.2.1-rc.2。
  `v0.5.1` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/gordan-code/dsh-search-ledger)
- **dsh-api-balance-plugin** — 输入框下方常驻 DeepSeek API 余额胶囊，点开显示充值额度、赠送额度、更新时间与用量/充值链接，另有 /balance 命令与 api_balance 工具；凭据只留在 Host（已登录账户钱包或 DEEPSEEK_API_KEY），浏览器只拿到金额。
  `v1.0.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/Muzi1015/dsh-api-balance)
- **dsh-token-bar** — 在每条回复的图标行里画一条单轮用量条：灰/黄/绿分段条配百分比图例，显示该轮未缓存输入、缓存读取与输出的拆分与各自占比。
  `v0.2.2` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/LobotomyCorporation/dsh-token-bar)
- **@ychris12138/dsh-usage-stats** — 多供应商用量看板：按供应商/模型统计 Token 与日期下钻，统一展示账户余额，并追踪 OpenCode Go / Z.ai 订阅额度。
  `v0.3.6` · [源码](https://github.com/Ychris12138/dsh-usage-stats)
- **dsh-usage-statistics-panel** — 用量统计设置面板：26 周活跃热力图、按日 Token 趋势与缓存命中率曲线、模型用量环形图与明细、时间范围筛选、汇总卡片，支持历史会话回扫与无损重建。
  `v0.3.4` · [源码](https://github.com/HaoyueQin/dsh-usage-statistics-panel)
- **@duke-dsh-plugins/dsh-token-stats** — DeepSeek Harness 的 Token 用量统计：近 7 天/30 天按模型的柱状图、饼图，外加近一年每日活跃热力图。
  `v1.7.4` · 引擎 `>=0.1.4-rc.2 <0.3.0 || ^0.2.1-rc.0` · [源码](https://github.com/MoonlitDropOfBlood/dsh-token-stats)
- **dsh-desktop-statusbar** — 把 DSH 桌面端对话区底部的统计行换成可配置状态栏：10 个字段可选可排序，按 DeepSeek 官方峰谷口径实时估算费用，支持自定义模型单价、CNY / USD 计价切换与账户余额显示。
  `v2.2.2` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/raphael-y7/dsh-desktop-statusbar)
- **dsh-client-ui-cpa-quota** — 模型选择器旁的 CLIProxyAPI 额度圆环，设置面板仿 CPA 管理页列出全部账号的额度窗口、套餐与刷新时间。
  `v0.9.8` · [源码](https://github.com/wkscc310/dsh-client-ui-cpa-quota)
- **dsh-budget** — 在 llm/stream 瀑布上做按插件粒度的用量预算与费用上限：按模型用量记账、会话与月度预算的预警/阻断、延迟窗口与碳足迹估算。
  `v0.4.20` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-budget)
- **dsh-token-chart** — 统计 DeepSeek Harness 的 Token 用量：会话抽屉与今日 / 近 3 天 / 近 7 天面板，图表与指标可配置。
  `v0.3.1` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/lugezuishuai/dsh-token-chart)
- **dsh-keep-running** — 配额看门狗：遇到 429 或配额错误时建立循环调度，持续重发「继续任务」提示直到某一轮正常结束，长任务不必手动重开；/keep-running list 与 /keep-running cancel <id> 用于查看和取消。需先挂载 @deepseek-ai/dsh-schedule（调度由它注册）。
  `v0.1.3` · [源码](https://github.com/imlishiyuan/dsh-keep-running)
- **dsh-glm-quota-dock** — 在输入框统计行常驻 GLM Coding Plan 额度 pill(含 5 小时窗口重置倒计时),点击展开双列卡片式详情面板:各窗口限额、重置时间、近 24 小时按模型 Token 用量与小时级 sparkline,支持插件一键自更新。
  `v1.3.2` · [源码](https://github.com/Everglow28/dsh-glm-quota-dock)
- **dsh-pulse** — 跨会话用量与费用观测台——分时走势与 90 天/1 年热力图、逐模型峰谷计价并与官方余额对账、GLM/Kimi/MiniMax 订阅额度与燃速预估、缓存命中环、项目排行、CSV 导出，另有 dsh-tui 终端面。
  `v0.6.1` · 引擎 `>=0.2.0-rc.2 <0.3` · [源码](https://github.com/Enc-hanted/dsh-pulse)
- **@bananiceee/dsh-status-bar** — 输入栏下可配置的 17 段会话状态栏，提供实时 TPS、按模型分别计价的费用估算，以及用量与费用弹窗。
  `v0.3.1` · [源码](https://github.com/Starlight-bananice/dsh-status-bar)
- **dsh-thinking-token-stat** — 在底部 Dock 添加模型思考 token 统计信息的轻量化插件。
  `v1.1.4` · [源码](https://github.com/Six6stRINgs/dsh-thinking-token-stat)
- **@mzzsfy/dsh-usage-panel** — 多平台 LLM 账号余额与额度面板：配置 DeepSeek、OpenRouter、Kimi、智谱、MiniMax、NewApi 或自定义端点，定时自动查询并绘制趋势图，余额/额度阈值与窗口重置经多通道推送通知。
  `v0.8.2` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-herta-balance-card** — 可拖动的余额与用量浮层卡片：点一下角色图片，卡片从图片左侧滑出，再点一下缩回；显示官方 DeepSeek 余额（赠金 / 充值拆分），并按缓存命中、未命中、输出三段计价，汇总本地会话日志的今日 / 近 7 天 / 本月 token 用量与人民币估算花费（按官方峰谷时段逐次计价）。
  `v0.1.0` · [源码](https://github.com/HerTa-st/dsh-balance-card)
- **dsh-cost-pill** — DeepSeek Harness 的账户余额及费用统计胶囊。它在会话输入框下方的官方统计行右侧新增一枚胶囊，集成计费时段（高峰/低谷，用颜色区分）、账户余额与会话费用；点击展开可查看本次会话的详细费用统计，包括缓存命中输入、缓存未命中输入、输出三项金额，以及按模型拆分的花费。费率表随插件版本更新，以跟随官方调价。
  `v1.0.2` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/Arun1016/dsh-cost)
- **@kidli1412/dsh-session-cost** — 对话底部的会话费用状态栏：按模型逐条计价估算 Token 费用（CNY），并实时显示 DeepSeek 账户余额（官方余额接口）。
  `v0.3.2` · 引擎 `^0.2.0-rc.2 || ^0.2.1-rc.2` · [源码](https://github.com/KIDLi1412/dsh-session-cost)
- **@kidli1412/dsh-token-heatmap** — 新建会话页的 GitHub 风格每日 Token 用量热力图：可选日历年度视图、绿/蓝配色与显示开关，并附今日/本月/累计总量。
  `v0.5.3` · 引擎 `^0.2.0-rc.2 || ^0.2.1-rc.2` · [源码](https://github.com/KIDLi1412/dsh-token-heatmap)
- **dsh-gpt-niang-quota** — Tokyo 的可拖动陪伴挂件，支持 Codex 额度监控、手动程序定位和可编辑回复。需安装 Codex CLI（codex app-server）并使用 ChatGPT 登录；API-key 登录不显示订阅额度。
  `v1.5.1` · [源码](https://github.com/guyue211/dsh-gpt-niang-quota)
- **dsh-all-usage** — 支持跨多个模型、供应商、工作区与时间范围进行统一分析，并可在全部保留历史中自定义起止日期；实时呈现缓存命中率，并可分别查看模型和供应商的分类数据；单日趋势按小时、跨日趋势按日，提供 53 周 GitHub 风格热力图、连续使用、模型与工作区 Token 占比环图及 Token、成本、占比明细，以及可独立自由组合的筛选；…
  `v1.2.1` · [源码](https://github.com/ParticleLight/dsh-all-usage)
- **dsh-service-monitor** — 监控 AI Agents 常用的第三方服务余额，如 Tavily、SerpAPI、Firecrawl、博查、Tinyfish 等。可选支持将服务的余额注入 System Prompt，以便 Agent 合理使用相关服务。
  `v1.0.7` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/xraywu/dsh-service-monitor)
- **@lcthe/dsh-usage-monitor** — DSH 用量监控：自动查询已配置 API Key 的供应商余额和时间窗口限制，支持输入框余量胶囊和自定义供应商。
  `v1.2.1` · [源码](https://github.com/lcthe/dsh-usage-monitor)
- **dsh-context-governor** — 上下文占用档位、按模型窗口推算的每会话压缩阈值、按缓存读取/写入费率计算的单步费用、缓存命中率、DeepSeek 余额与高峰/低谷费率，以及一键交接。它从不调用模型，也不消耗 token。
  `v0.3.3` · 引擎 `^0.1.7-rc.2 || ^0.2.0-rc.1` · [源码](https://github.com/mpinaev/dsh-context-governor)
- **balance-dsh** — 在侧边栏底部和输入框上方显示你的 DeepSeek 账户余额与当前会话 token 及费用消耗，支持高峰/空闲峰谷计费与子代理消耗统计。
  `v1.3.1` · [源码](https://github.com/Rannist/balance-dsh)
- **dsh-cache-hit-precision** — 把内置缓存命中率在 composer 统计行与 Token 用量弹窗中原位精化为三位小数。
  `v0.2.4` · [源码](https://github.com/vrvtvy/dsh-cache-hit-precision)
- **dsh-commandcode-quota** — Command Code 余额与额度面板：在输入框下方显示可用余额，以及 5 小时、每周、每月三个额度窗口。
  `v0.2.3` · [源码](https://github.com/fuqiancheng/dsh-commandcode-quota)
- **dsh-my-context** — 上下文透镜：可视化每次请求的 token 用量（上下文构成、KV 缓存命中率），并提供每轮 / 每会话预算控制（超限提醒与拦截）（npm: `dsh-my-context`）。
  `v0.1.7` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-billing-badge** — 在输入框统计行里、缓存命中读数之后显示高峰/非高峰计费时段：状态圆点与切换倒计时，点击展开面板显示按接口返回货币表示的余额，并拆分为总额、赠送与充值。
  `v0.1.4` · 引擎 `^0.2.0-0` · [源码](https://github.com/devacc8/dsh-billing-badge)
- **dsh-quota-badge** — 侧边栏底部实时显示 DeepSeek 账户余额徽章：数字滚轮动画、多币种支持、余额趋势图、按 Key 用量统计（含安装前历史回填），并支持 GitHub 版本自动检查。
  `v1.6.3` · [源码](https://github.com/yoiizesdev-crypto/DSH-Balance-display)
- **dsh-token-monitor** — 会话头部余量徽标 + 用量监控页签：实时展示各供应商余额/额度余量与重置倒计时，按会话/供应商/模型/客户端统计请求量、Token（输入/输出/缓存读/缓存写）、缓存命中率、预估费用与平均时延，本地 SQLite 留存历史，支持跨设备导入导出。
  `v1.0.12` · [源码](https://github.com/licyer/dsh-token-monitor)
- **dsh-cost-receipt** — 在每条助手回复下面显示本次问答的花费、账户余额与礼金余额，按该轮 token 用量乘官方峰谷单价计算；算不出价时写明原因，不猜测。
  `v0.1.2` · [源码](https://github.com/divineeagleblackhand/dsh-cost-receipt)
- **@goodandready/dsh-usage-guard** — 规范化异常的 Token 用量样本，使损坏的会话历史仍可加载。
  `v0.1.19` · [源码](https://github.com/GooDAnDReaDY/dsh-usage-guard)
- **dsh-bottom-cost** — 输入框下方统计栏里的会话费用胶囊：逐轮列出每轮花费与所用模型，并把总额拆成缓存命中与未命中两笔（CNY）；价目表按需从官方定价页刷新。
  `v0.5.2` · [源码](https://github.com/LanFeng97/dsh-bottom-cost)
- **dsh-plugin-token-report** — DSH 的 token 用量面板：输入框上方一条用量条，点开是计费总量、趋势图、按模型/项目/来源的分组明细与自定义日期范围，数据来自当前环境 DSH / Codex / Claude Code / Trae / WorkBuddy 的会话日志；填了自建服务端地址与 appKey…
  `v1.0.0` · [源码](https://github.com/zhujunzhujunzhu/ai-token-report)
- **dsh-tally** — 按请求记录费用，涵盖重试与子代理，支持节假日峰谷计价、共享计价/用量/余额/预算服务和 DeepSeek 账单对账。
  `v0.1.0-beta.1` · [源码](https://github.com/wfengq/dsh)
- **dsh-tally-ui** — 提供输入框费用条、每轮与会话费用详情、用量看板、日/月预算和设置，并通过 dsh-tally-balance-deepseek 显示 DeepSeek 余额。
  `v0.1.0-beta.1` · [源码](https://github.com/wfengq/dsh)
- **dsh-plugin-session-cost-pill** — 在输入框底栏显示当前会话的预估花费，每一步都按其自身时间戳采用 DeepSeek 的峰时或非峰时单价计价。
  `v1.1.2` · [源码](https://github.com/vegerot/deepseek-harness-session-cost-pill)
- **dsh-usage-heatmap** — DSH 设置页的 Token 用量看板：九宫指标卡（累计/今日/昨日/峰值日/最长会话/连续活跃/活跃天数/会话/子代理 Token）、GitHub 风格每日/每周/累计热力图与活动洞察，全部从本地会话日志与投影缓存聚合，会话被删后历史 token 仍然保留。
  `v0.1.4` · [源码](https://github.com/zeng6125-rgb/dsh-usage-heatmap)
- **dsh-whale-post-gate** — 智能体信箱的每日配额与免打扰时段：信件按命名桶计数、每桶有每日上限，日界可配置，并给出一个免打扰窗口，让核心把在线件留着而不投递。
  `v0.6.1` · [源码](https://github.com/deepsleepAquarium/dsh-whale-post)
- **@dingyi222666/dsh-wakatime** — 在 WakaTime 中记录 DSH 读取文件、查看图片和编辑代码的活动，并准确统计 AI 新增和删除的代码行数。DSH 回复期间持续记录活动，多个文件的记录批量上报，并在并行运行的 DSH 进程间统一控制各项目的上报频率。自动安装和更新 wakatime-cli。
  `v0.2.10` · [源码](https://github.com/dingyi222666/dsh-wakatime)
- **dsh-api-ledger** — 按 API 路由与模型配置单价，统计 Token 用量与估算费用，支持可选账单分组、同步切换 CNY/USD，以及会话报告、输入框费用和可点击的侧边栏今日金额。
  `v0.4.0` · [源码](https://github.com/LAwLi3tCoding/dsh-api-ledger)
- **dsh-api-dashboard** — DSH Web GUI 的多平台 API 余额与用量看板：在输入框下方显示 DeepSeek、智谱 GLM、Kimi、阶跃星辰、硅基流动、MiniMax、OpenRouter、Novita、xAI 的余额，估算本会话与子代理消耗并按 DeepSeek 峰谷计价，自动发现 DSH…
  `v1.7.0` · [源码](https://github.com/133563825as-ai/dsh-api-dashboard)
- **@lidaxi/prompt-enhance** — DSH Web 界面提示词增强插件：基础/标准/专家三档模式，标准/专家模式结合项目上下文与最近会话历史重写草稿；网关拒绝推理档位参数时自动去参重试；增强结果支持对比确认与撤回。
  `v1.5.2` · [源码](https://github.com/sunzhentao/dsh--prompt--enhance)
- **dsh-tokenrhythm-bill** — 基元律动费用中心：账户余额与限时额度、按分类筛选的模型价格卡（含折扣价）、服务状态与平台密钥管理，支持平台账号或 Cookie 登录，凭据存当前环境 host。
  `v0.6.1` · [源码](https://github.com/162568316/dsh-tokenrhythm-bill)
- **dsh-usage-guard** — Web GUI 与桌面端的用量统计面板：静默按模型采集 token、活跃热力图、趋势图、费用估算与每日超限守卫。
  `v0.1.1` · [源码](https://github.com/hb-degithub/dsh-usage-guard)
- **@zzerx/dsh-plugin-usage-billing** — dsh 用量与费用视图：从既有会话日志聚合真实 token 用量，按事件发生时刻的价格写时锁定费用；侧栏卡片或输入框胶囊展示本月/今日花费与预算进度，设置页另有概览、趋势、明细三页。
  `v1.3.0` · [源码](https://github.com/0x7A7A6572/dsh-forge-studio)
- **dsh-turn-price** — 在每个已完成回合的下方单独一行显示这一轮的花费金额（人民币），点击展开明细，列出各 token 类别的数量、单价、命中的价格规则与计费时刻；单价可在 DSH 设置页里按模型维护，含四类 token 单价、每周循环的峰谷规则（系数自定）与绝对时间区间的限时优惠价。0.2.3 起还能看账户：读取 14 家…
  `v0.2.3` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/littlefish04/dsh-turn-price)
- **dsh-mimo-quota** — MIMO Quota Panel —— DeepSeek Harness 的模型额度面板。装上即用，零配置：从会话事件日志逐调用自动记账（真实时间戳、全历史、实时增量），一屏展示 Token 用量、消费金额、请求次数、趋势波形、模型构成，支持按模型 / 粒度 / 时间范围 / 项目·对话…
  `v1.1.2` · [源码](https://github.com/hbgdjb/dsh-mimo-quota)
- **meow-cachebilling** — 点开输入框旁的上下文圆环即见本轮账单：缓存命中/未命中/输出各花多少钱（¥），官方峰谷价与模型分价自动判定；非 DeepSeek 官方路由不显示。
  `v0.8.0` · [源码](https://github.com/Phant0Meow/dsh-meow-cachebilling)
- **@astervolans/dsh-opencode-go-usage** — 常驻侧边栏的 OpenCode GO 套餐额度组件：滚动/周/月三条用量条、每条下方一条已流逝与剩余时间条、同源用量代理、/opencode-go 命令，以及针对 GO 网关聊天请求的运行时 x-opencode-session 修复。fork 自 yumusb/dsh-opencode-go-usage。
  `v1.5.0` · [源码](https://github.com/Astervolans/dsh-opencode-go-usage)
- **dsh-token-usage-stats** — 仿 DeepSeek 官方 Token 统计，跨会话 Token 消耗、请求次数与峰谷分时费用统计看板。
  `v0.3.15` · [源码](https://github.com/jkStars/dsh-token-usage-stats)
- **dsh-usage-suite** — 输入框下方显示本轮花费；侧栏显示今日 token、消费与高峰/空闲时段；对话区顶部钉住最新提问，点击可跳回。
  `v1.2.0` · [源码](https://github.com/xfpuls/dsh-usage-suite)
- **dsh-tide-badge** — DSH 输入框下方的计费时段与余额药丸：常显账户余额与本次对话花费，并显示峰价/谷价档位与距下次切换的倒计时。峰谷判定含中国法定节假日与周末；本次对话花费按余额差值记账，采样点是插件自带的「对话停止满一分钟后刷新余额」。
  `v0.2.3` · [源码](https://github.com/xiangrikuibaize/dsh-tide-badge)
- **@zoria-lind/dsh-token-optimizer** — token 优化管道：按上下文压力分层压缩（40% 以下无损投影、以上 LLM 摘要）、按 agent 裁剪工具列表、长文本转图片视觉摘要、/token-status 查看压力与节省量。
  `v2.2.2` · [源码](https://github.com/Zoria-Lind/dsh-token-optimizer)
- **@y2zyyr/dsh-token-usage-sidebar** — 为 DSH Web 提供自动发现历史记录的本地持久化 Token 用量统计与紧凑的供应商/模型明细。
  `v1.1.11` · [源码](https://github.com/y2zyyr/dsh-token-usage-sidebar)
- **dsh-output-setting** — 自动展开思考与工具卡片，调整代码块字号与行距，并可选择模型输出语言（自动、中文或 English）。
  `v1.0.0` · [源码](https://github.com/yijiezhong/dsh-output-setting)
- **dsh-turn-cost** — 在 DSH Web 界面显示每轮与整个会话的预估费用：按 provider 上报的 token 用量（四桶）与内置官方 DeepSeek 人民币峰谷价目计价，高峰为北京时间周一至周五 9:00–12:00、14:00–18:00，周末与中国法定节假日全天按空闲价；可用当前环境费率表叠加其它或自部署模型的单价，没有单价的模型…
  `v0.6.2` · [源码](https://github.com/WFMinerva/dsh-turn-cost)
- **dsh-usage-vendor-stats** — 按厂商（订阅/官方API）统计用量看板：按供应商/模型拆分 Token、缓存、输出等 KPI，53 周热力图，趋势折线图（今天按小时），模型钻取，费用估算，CSV 导出，以及健康度卡片（TTFT、生成速度、峰值 Context、错误率）。
  `v0.2.1` · [源码](https://github.com/kirigayakazima/dsh-usage-vendor-stats)
- **dsh-model-visibility** — DSH 模型可见性管理：在独立的设置分区页里按渠道/模型隐藏或显示模型选择菜单中的条目。逐模型开关、实时搜索、渠道级批量隐藏/显示、一键恢复全部。零侵入——只写插件自己的隐藏列表，不改 Provider 配置，隐藏正在使用的模型不会中断会话。
  `v0.2.1` · [源码](https://github.com/Lzh3070/dsh-model-visibility)
- **dsh-peak-block** — 北京时间工作日高峰时段拦截发往官方 provider 的请求，默认 09:00-12:00、14:00-18:00，可切到配置的中转目标或直接阻止并提示，非高峰正常走官方。
  `v0.2.4` · [源码](https://github.com/better-er/dsh-peak-block)
- **dsh-live-token-stats** — 在输入框下方实时渲染 token 状态带：基于 DeepSeek 官方 BPE 分词表显示流式 token/s、输出 token 与首字延迟，并对比每次 step 的估算与实际偏差，用于判断生成是慢还是卡住。
  `v0.4.7` · [源码](https://github.com/better-er/dsh-live-token-stats)
- **dsh-cache-billing** — 在上下文圆环弹层里实时算账：当前步、当前轮、会话累计三块明细，缓存命中/未命中/输出各带 token 与金额，官方峰谷价与模型分价自动判定，第三方中转照常记账。
  `v0.1.5` · [源码](https://github.com/better-er/dsh-cache-billing)
- **dsh-plugin-opencode-usage** — 在会话窗口左下角的悬浮面板中显示 OpenCode Go 订阅用量（滚动/每周/每月的已用与剩余百分比及重置时间）。
  `v0.1.2` · 引擎 `>=0.1.5-rc.1 <0.2.0-0 || >=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/jiekesu967/dsh-plugin-opencode-usage)
- **@chenmiao8563/dsh-token-ledger** — 可审计的 DSH token 账本：把持久化会话日志折算成重启安全的总量，可从原始日志重算并比对差异，并按工作区、会话、模型或厂商生成账单，可导出 CSV 或 JSON。
  `v1.1.2` · 引擎 `^0.2.0-rc.1` · [源码](https://github.com/chenmiao8563/dsh-token-ledger)
- **dsh-token-plan-quota** — 跟随当前模型供应商的额度徽标：DeepSeek、千问 Token Plan、阿里云费用中心取官方真值，Moonshot / OpenRouter 已接官方端点但字段未用真 Key 核对；其余只报本实例实测。
  `v0.4.11` · [源码](https://github.com/xinghe-1018/dsh-token-plan-quota)
- **@rayadesu/dsh-billing** — 会话头部徽标显示 DeepSeek 账户余额、本轮对话花费与今日全部会话总花费；每轮消息操作行前置本轮花费，详情面板含按模型计价与今日会话消费排行。官方峰谷定价，余额取自 /user/balance API。
  `v1.0.0` · [源码](https://github.com/rayadesune/DeepSeek-Harness-chat-billing)
- **@just-ai/dsh-auto-update** — 一键升级Deepseek Harness, 支持侧边栏显示版本号.
  `v0.1.5` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/Tuhuaqing/just-dsh-plugins)
- **dsh-token-pulse** — DSH 设置内的本地 Token 用量热图：GitHub 风格周/月/季度/年视图、每日小时级展开、模型与供应商 Top 5，历史持久化，删除会话不丢数据。零联网、零计费。
  `v0.4.3` · 引擎 `>=0.1.0-rc.1` · [源码](https://github.com/Hou-DL/dsh-token-pulse)
- **dsh-deepseek-monitor** — 在官方供应商卡片内实时监控 DeepSeek 余额与开放平台用量——输入框工具行模型名称左侧的余额 chip，可展开的账户明细面板含按模型用量与每日堆叠图表。
  `v0.1.8` · [源码](https://github.com/HaoyueQin/dsh-deepseek-monitor)
- **@shawnkung/dsh-balance-monitor** — 在 DSH Web 侧边栏展示可选的 DeepSeek、Kimi、智谱 GLM 和 TeamoRouter 余额，并提供渠道详情、用量数据与刷新控制。
  `v0.2.3` · [源码](https://github.com/ShawnKung/dsh-balance-monitor)
- **dsh-plugin-usage-meter** — 本地优先的用量与费用仪表：输入框下方按钮显示实时费用与余额，面板含按模型堆叠的当日/近 7 天柱状图（按刊例价生效区间计价、官方定价页每日同步）、本月消耗段位与画布分享卡片、30/50/85% 上下文压力三档预警与一键 /compact、预算提醒，以及面板内 npm 检查更新与一键更新。
  `v1.10.0` · [源码](https://github.com/fancr-code/dsh-plugin-usage-meter)
- **@andrecgoncalves/dsh-balance** — DSH 侧边栏的账户余额胶囊，跟随当前模型的服务商显示余额，支持 DeepSeek、OpenRouter、Moonshot/Kimi、Zhipu/GLM 与 MiniMax，并显示 DeepSeek 高峰/空闲时段。
  `v0.4.3` · [源码](https://github.com/andregoncalves/dsh-balance)
- **dsh-personal-center** — DeepSeek Harness 个人中心：跨会话用量统计、按模型成本估算、全局自定义指令、外观全局字号、数据驱动的桌面宠物（位图/矢量皮肤）与会话状态概览，纯本地离线运行。
  `v1.1.2` · [源码](https://github.com/PolinniZhong/dsh-personal-center)
- **dsh-token-meter-panel** — 在 DeepSeek Harness 侧栏加入 Token 用量与花费面板：直接采用 DeepSeek 官方用量接口（今日消费、7/30 天趋势、今日分时、历史表、成本构成、峰谷分档计价），并用当前环境会话日志给出按会话明细。凭据零配置——自动读取浏览器登录态取官方数据，取不到时退回本地日志并标明来源。
  `v0.6.4` · [源码](https://github.com/olimc2016/dsh-token-meter-panel)
- **dsh-quota-panel** — 右下角额度胶囊：自动发现所有已配置 Key 的供应商（DeepSeek、OpenRouter、SiliconFlow、GLM、one-api/new-api、各类 Coding 套餐），显示余额或 5 小时/周滚动用量，支持按供应商设置可见性、告警阈值与代理；另支持火山方舟 Agent Plan / Coding…
  `v0.1.7-rc.1-v0.1` · [源码](https://github.com/wenzetan/dsh-quota-panel)
- **dsh-token-usage-xc** — DSH Token 用量统计插件 - 今日 Token 用量按模型分桶、缓存命中率、7 日趋势图、可选顶栏徽标、持久化存储自动清理。
  `v0.2.25` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/xchannel1987/dsh-token-usage-xc)
- **deepseek-harness-wallet-patched** — feibi-mochi/deepseek-harness-control-center 的维护分支，上游自 2026-09-09 起未再更新。计价改为跟随官方模型池、而非硬编码模型前缀，因此 DeepSeek V4.1 Flash（`deepseek-flash`）能正常计价并显示峰谷时钟；官方价格页改为结构化解析，模…
  `v0.3.13-patched.6` · [源码](https://github.com/ThinkofRain1213/deepseek-harness-wallet-patched)
- **@fufuf-c/dsh-token** — DSH 本地 Token 用量与成本统计仪表盘：四段 Token 构成（未命中/缓存命中/缓存写入/输出）、按未命中与命中的价差估算缓存省钱、会话下钻（上下文增长曲线与异常激增标记）、全局筛选可分享 URL、月度预算环形进度与月底外推、日/月聚合快路径查询（O(天数)）+ 增量扫描。
  `v0.9.6` · [源码](https://github.com/fufuf-c/dsh-token)
- **dsh-chat-cost** — 为 DSH Web UI 的每个对话实时计算 token 费用：本对话、其子代理与整棵会话树，价格来自内置的 models.dev 快照：七家供应商、139 个有价模型，缓存读写费率按供应商实际公布的取值，DeepSeek 则使用其官方峰谷价格表。每个完成的回答都会在对话中显示自身费用，未打开的对话则按日志计价而不是整…
  `v0.6.11` · [源码](https://github.com/igormel81/dsh-chat-cost)
- **@francescoli/dsh-quota** — DSH 的 AI 额度与用量监控：实时追踪 Codex、Cursor、Google Antigravity 与 OpenCode-Go 剩余额度与重置倒计时。
  `v0.3.0` · [源码](https://github.com/Francesco502/dsh-quota)
- **dsh-token-pet** — DSH 悬浮桌面用量小宠物：用 12 个正式状态动作反馈请求、工具、上下文压缩、归档和提示词增强，展示实时上下文占用、跨会话终身用量账本、服务商/模型统计、小时趋势与近 7/30 日视图；支持深色/浅色主题切换；可选成本估算（默认关闭）与可视化价格表、月预算告警；客户端皮肤 ZIP 导入；JSON/CSV…
  `v0.4.2` · [源码](https://github.com/Jimmy0123-ux/dsh-token-pet)
- **dsh-balance-quota** — DSH Web 的供应商余额与额度状态栏，支持模型能力设置、外部 JSON 健康监测、可视化字段绑定和逐模型状态详情。
  `v0.3.7` · [源码](https://github.com/kongshan-zhuyu/dsh-balance-quota)
- **dsh-token-usage-counter** — 持久化 provider 上报的 Token 用量统计，支持按会话、按模型和按日活跃度查看。
  `v0.4.3` · [源码](https://github.com/Mu-scorpio/token-usage-counter)
- **dsh-token-live** — DeepSeek Harness 输入框下方的实时草稿 token 数、按官方高峰/空闲费率计算的会话花费、上下文占用，以及同样的用量在最贵的另一个模型上会花多少；纯客户端，没有 host 半，不接触凭据。
  `v0.1.0` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/woodfood111/dsh-token-live)
- **model-usage-plugin** — 按模型统计 token 消耗并估算费用，同时显示 DeepSeek 账户余额，展示于设置面板「模型消耗」页签。
  `v0.17.0` · [源码](https://github.com/AKS1st/model-usage-plugin)
- **@faith1688/dsh-usage-meter-harness** — DeepSeek Harness 实时用量、费用与余额计量：官方 API 实时查询余额、计费误差 0.02 元内，分本轮/本次会话/整个模型三级费用台账，实时分色档位 Token 速度，输入框旁弹窗即点即看。
  `v2.0.39` · [源码](https://github.com/faith1688/dsh-usage-meter-harness)
- **@xidong-ai/dsh-rate-limiter** — 按 provider 令牌桶主动限速，超限请求在发出前延迟排队而非失败，避免触发上游 429。
  `v0.3.2` · [源码](https://github.com/Xidong-AI/dsh-rate-limiter)
- **dsh-llm-balance** — DeepSeek Harness 服务提供商用量查询插件：在宿主侧读取 DeepSeek、Moonshot 余额与 Kimi For Coding、OpenCode Go 的配额窗口，在常驻卡片中展示，支持三种视图、边缘磁吸与收起为字母气泡。
  `v0.7.1` · [源码](https://github.com/AlienGene/dsh-llm-balance-siderbar)
- **dsh-usage-lite** — 侧边栏面板展示账户余额与本地 Token 用量，包含供应商/模型明细和 27 周每日热力图。
  `v0.1.2` · [源码](https://github.com/ericw0315/dsh-usage-lite)
- **dsh-usage-mini** — DSH Web 悬浮用量小窗，显示 Claude、Codex 订阅用量窗口与重置倒计时，以及 DeepSeek API 今日花费与余额；只展示，是 dsh-cost-meter 的伴侣。
  `v0.2.3` · [源码](https://github.com/teethyachi/dsh-usage-mini)
- **deepseek-harness-wallet** — DeepSeek Harness 监控、提醒、充值与会话控制中心：查看官方余额、本会话花费与 token、第三方 token 合计，提供完成提醒、官方充值、灵活布局及 Agent 辅助的会话控制。
  `v0.3.13` · [源码](https://github.com/feibi-mochi/deepseek-harness-control-center)
- **@badai147/dsh-ocgo-usage** — 在 Web 侧边栏左下角显示 OpenCode Go 用量——滚动/本周/本月配额进度与悬停明细卡片，并附按北京时间标记的 DeepSeek 高峰时段进度条。
  `v0.2.1` · [源码](https://github.com/badai147/dsh-ocgo-usage)
- **@choi-p/dsh-deepseek-balance** — 在 DSH Web 侧边栏底部展示 DeepSeek 账户余额，支持配置热重载与可编辑的设置 → 插件卡片。
  `v0.5.2` · [源码](https://github.com/Choi-Peng/dsh-deepseek-balance)
- **dsh-spend** — DSH Web 用量与费用统计插件：右下角悬浮窗，按模型/按天/按会话多维聚合与预计花费。
  `v0.6.3` · [源码](https://github.com/nonewind/dsh-spend)
- **dsh-minimax-usage** — 在 DSH Web UI 模型选择器旁显示 MiniMax Token Plan 用量，以紧凑的 5h/7d 进度条展示，支持点击刷新、空闲与心跳自动刷新及接口回退；复用「设置 → 模型」中的订阅 Key，且仅在 MiniMax Token Plan provider 下显示。
  `v0.1.8` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/pan17/dsh-minimax-usage)
- **dsh-composer-tokens** — 为 DSH 对话输入框实时估算 token 数，将当前上下文基线与草稿合并计算，并区分精确计数与启发式估算。
  `v0.1.2` · [源码](https://github.com/wbycloud/dsh-composer-tokens)
- **dsh-whale-report** — 深迹 DeepTrace — 从会话日志生成日报/周报/月报/年报/自定义区间报告：成本与 Token 拆解、8 条确定性洞察、协作复盘、实时模型余额、PDF/PNG/HTML 导出；只读，绝不改写历史。
  `v0.6.1` · [源码](https://github.com/SenmuuuuW/dsh-whale-report)
- **@sumomok/dsh-balance** — 侧栏脚注显示 DeepSeek 账户余额，并按会话/今日/本月/累计统计花费，按可配置的分时价格表（按币种分表，内置 DeepSeek 人民币/美元默认表）计价。两个只读远程方法，无宿主路由，密钥每次经宿主凭据缝读取，只向配置的供应商域名出网。
  `v0.4.0` · [源码](https://github.com/sumomok/dsh-plugins)
- **dsh-plugin-llm-balance** — DSH 余额与配额悬浮卡片：常驻显示最近使用的最多 3 个 provider，支持 DeepSeek、Moonshot、Kimi For Coding、OpenAI Codex 和 OpenCode Go；自动发现配置，展示配额窗口与重置时间，并支持分档着色、拖动和自动刷新。
  `v0.3.0` · [源码](https://github.com/FengHuoLinShan/dsh-plugin-llm-balance)
- **dsh-token-ledger-pro** — DSH 费用统计面板：从 session 事件采集每次请求用量，按内置 16 家厂商 136 个模型的价格目录实时计费，在输入框旁展示当前模型、账户余额、本会话/今日/本月消费与月度预算横条。中英双语。
  `v0.2.2` · [源码](https://github.com/bjzkhy/dsh-token-ledger-pro)
- **@tma1-ai/dsh-plugin-greptimedb** — 把 agent loop 以 OpenTelemetry traces、metrics、logs 导出到 GreptimeDB，附七个 Grafana dashboard，覆盖 token 用量、成本、会话结果和每轮耗时。
  `v0.1.0-beta.4` · [源码](https://github.com/tma1-ai/dsh-otel)
- **@kober-basket/dsh-cachescope** — 提示词缓存诊断页，展示 Provider 回传的 Token 用量、相邻逻辑输入变化与 Call TTFT。
  `v0.1.2` · [源码](https://github.com/kober-basket/dsh-cachescope)
- **ccs-balance** — 同步 cc-switch 各 provider 余额，按日/月/总量统计 token 用量与花费，支持中转站币种与汇率设置。
  `v1.0.3` · [源码](https://github.com/kikomaotu/ccs-balance)
- **dsh-usage-meter** — 设置页用量仪表盘：按服务商/模型汇总全部会话 token 用量，含今日/近 7 天/近 30 天趋势柱状图与缓存命中率。
  `v0.1.3` · [源码](https://github.com/V-dev-388/dsh-usage-meter)
- **dsh-plugin-balance** — DSH Web 的 LLM 额度/用量悬浮窗：显示 DeepSeek / OpenCode Go 余额与套餐用量，并按日、月、模型统计 DSH 会话 token 用量与费用估算。
  `v1.4.4` · [源码](https://github.com/Andrew111888/dsh-plugin-balance)
- **dsh-balance-tracker** — 会话头部的真实 DeepSeek 余额与官方消费统计：高峰/空闲标签、按金额提醒与自动停止、一键充值。
  `v0.1.3` · [源码](https://github.com/aexachao/dsh-balance-tracker)
- **dsh-better-stats** — DSH Web 输入框下方的增强统计条：官方人民币计价（峰谷分时、价目自动同步）、多模型分账、实时计时、子代理树合并、余额直连、预算预警与流式成本估算。
  `v0.1.16` · [源码](https://github.com/null5069/dsh-better-stats)
- **dsh-convo-cost** — 当前对话实时费用统计：输入框下方一行显示运行中的 token 用量与 DeepSeek 官方价格估算（基础价与峰谷价）。
  `v1.0.1` · [源码](https://github.com/ljr282341583/dsh-convo-cost)
- **dsh-save-money** — 自定义时间窗口自动暂停/恢复任务，高峰时段节省 API 费用；含账户余额显示和 10 分钟粒度的消费柱状图。
  `v1.4.4` · [源码](https://github.com/zhu168/dsh-save-money)
- **dsh-deepseek-quota-bar** — 可拖动透明余额卡片：余额/月初额度血条、今日/本月用量（配置平台 token 后为官方精确数据）、当前对话费用。
  `v0.6.1` · [源码](https://github.com/jiangli07/dsh-deepseek-quota-bar)
- **@m1khal3v/dsh-llm-key-rotation** — 在配额、速率限制或身份验证失败后轮换已配置的 LLM API 密钥。
  `v1.1.0` · [源码](https://github.com/m1khal3v/dsh-llm-key-rotation)
- **dsh-workspace-hub** — DSH 工作区中枢：侧边栏将工作区按彩色分组管理（分组/工作区/会话三级拖拽排序、内联编辑、一键展开折叠、标题+消息双通道搜索），基于真实会话日志统计每工作区与每会话的 Token 与花费（任意 deepseek 模型自动按官方峰谷价计费、三种时段口径、悬停明细卡、总览面板），另含 OpenCode Go…
  `v0.1.1` · [源码](https://github.com/Jadramcool/dsh-workspace-hub)
- **dsh-sidebar-balance** — DSH Web 插件:在侧边栏底部显示 DeepSeek API 余额与 OpenCode Go 套餐用量(消耗圆环、悬浮详情),自适应轮询,支持中英文。
  `v0.1.1` · [源码](https://github.com/zhouchengke2046/dsh-sidebar-balance)
- **dsh-go-balance** — 输入框工具行右侧的 OpenCode Go 余额胶囊：滚动/每周/每月配额剩余百分比（数据直接来自 Zen 用量接口），悬停查看明细，低余额自动变黄/变红。
  `v0.1.2` · [源码](https://github.com/iamfromchangsha/dsh-go-balance)
- **@phynez_1103/dsh-session-cost** — 输入框右侧会话成本芯片：按官方价表（含 2026-08-17 峰谷价）逐消息计价当前会话的 DeepSeek API 花费，悬停查看计价明细、今日(DSH) 消耗与账户余额；仅 DeepSeek 模型计价，其他模型不计价不显示。
  `v0.1.1` · [源码](https://github.com/Lzh3070/dsh-session-cost)
- **dsh-liquid-glass-balance-card** — DSH 网页右上角可拖动 3D 液态玻璃余额卡片：显示 DeepSeek API 余额、累计消费与 Token 统计（今天/昨天/近7天/近30天/全部），玻璃参数/3D 厚度/颜色均可调，内置官方充值入口。
  `v0.1.1` · [源码](https://github.com/SoDaZilla-zzz/dsh-liquid-glass-balance-card)
- **dsh-usage-dashboard-plus** — 显示 DeepSeek 余额与今日花费估算，合并外部视觉调用 JSONL 记录，并提供含模型统计、TTFT、缓存率、调用日志、费用估算、筛选与 CSV 导出的会话看板。
  `v0.2.4` · [源码](https://github.com/1HelloMan1/dsh-usage-dashboard-plus)
- **@steven-wu/dsh-cost-meter** — Web UI 美元成本徽标：头部显示会话总成本、每条回复结尾显示该轮成本，悬停看分项。
  `v0.1.0-rc.3` · [源码](https://github.com/Sttrevens/dsh-cost-meter)
- **dsh-whale-meter** — 用量段位与战绩卡片：按本月 token 消耗评 🐟→🐳 五档段位，分位本地估算（零上报）；6 家厂商 46 个模型精准计价，支持国内厂商按输入长度分档；自动回填安装前的历史会话；8·17 调价前后同一份用量的新旧价对比。数据全在当前环境，无遥测。
  `v0.1.0` · [源码](https://github.com/Shiye-10Pages/dsh-whale-meter)
- **@lemcae/dsh-balance** — 顶栏徽章与设置卡片展示 DeepSeek 账户余额与当前会话预估花费：暂停感知的自动刷新、可编辑官方价格表、`deepseek_balance` 模型工具与中英文界面。
  `v0.1.7` · [源码](https://github.com/LemCAE/dsh-balance)
- **@floatingdeaming/minimax-usage** — 在 DSH 设置页「用量」section 展示 MiniMax Token Plan 的 5 小时 / 周窗口用量（带重置倒计时）、单模型明细与视频赠送额度；通过 trusted plugin 调 `/v1/token_plan/remains` 拿 key，未配置 key 时整段 section 自动隐藏。MIT。
  `v1.0.3` · [源码](https://github.com/Floating-Dreaming/dsh-minimax-usage)
- **@xiaweiliang060035/dsh-opencode-go-usage** — 悬浮组件实时显示 OpenCode Go 各 key 用量（滚动/每周/每月），限流预警，自动发现 key 池。
  `v0.3.0` · [源码](https://github.com/xiaweiliang060035/dsh-opencode-go-usage)
- **@yokesky/dsh-usage-lens** — DSH Web UI 用量统计面板：信息卡、280 天活跃热力图、按天 Token 趋势与模型用量双环饼图。
  `v0.1.3` · [源码](https://github.com/yokesky/dsh-usage-lens)
- **dsh-tokenledger** — 侧边栏用量面板：把 Token 归属到实际服务该请求的中转站，站点从已有的 provider 配置中读出，无需额外配置；含今日/本月/累计三窗口、按站点与模型下钻、一年活跃度热力图，以及 New API / Sub2API / DeepSeek 余额。
  `v0.1.0` · [源码](https://github.com/zh667/TokenLedger)
- **dsh-balance-float** — Web UI 右上角悬浮窗：实时显示 DeepSeek 余额，支持手动刷新与一键优雅退出（Y/N 快捷键确认）。
  `v1.0.3` · [源码](https://github.com/x2802490130-prog/dsh-balance-float)
- **context-vista** — 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配及消费估算。
  `v0.1.0` · [源码](https://github.com/GooodWei/context-vista)

## 记忆 · memory（152）

- **@busabase/dsh-plugin** — 把 DeepSeek Harness 接入 Busabase：检索工作区知识、操作结构化记录与应用、将写入提交为可审阅的 ChangeRequest，并在实时卡片中查看结果。
  `v0.1.21` · [源码](https://github.com/busabase/busabase-dsh-plugin)
- **dsh-deja** — 读取当前环境上其他三十三个编程智能体已经写下的会话文件——Claude Code、Codex、Cursor、VS Code Copilot Chat、opencode、OpenClaw、Hermes、Kimi、Cline、Zed 等，包括安装之前的历史：提供 deja_recall、deja_session、deja_bl…
  `v0.23.1` · [源码](https://github.com/vshulcz/deja-vu)
- **memory-eternal** — 自研 DSH 记忆插件：SQLite 持久存储 + 数据库层审核守卫（enforceAudit）+ 审计日志。对话结束自动沉淀知识卡，Agent 经 memory_recall 按需召回，支持 Claude Code/Codex/Cursor 多智能体共享，零外部依赖。
  `v0.17.0` · 引擎 `>=0.1.5-alpha.2 <0.3.0-0` · [源码](https://github.com/EternalNight996/memory-eternal)
- **@dsh-agentic-roleplay/state** — 为 DSH 角色扮演插件提供持久化 SQLite 会话状态、故事记忆与回忆、数据仓库以及面向模型的记录工具。
  `v0.6.1` · 引擎 `>=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-agentic-roleplay)
- **dsh-context-imports** — 把 AGENTS.md 里 @路径 引用的文件读出来，在会话启动时注入模型上下文；带字节预算、压缩后重新注入和六语言设置卡片。v0.2.3 适配 DSH 0.1.7+（已加固 0.2.0-rc.2+），DSH 0.1.5 请用 0.1.x。
  `v0.3.1` · [源码](https://github.com/ciskonc/dsh-context-imports)
- **dsh-auto-memory** — 原生实现 Claude Code 式自动记忆:类型化记忆文件(user/feedback/project/reference)+ 自动注入系统提示词的 MEMORY.md 索引,无记忆时零提示词占用;memory_write/read/list/delete 遵循 Claude Code…
  `v1.1.0` · [源码](https://github.com/AskTheWay/dsh-auto-memory)
- **@restregular/dsh-memory** — 一体化本地记忆：按作用域（会话、项目、全局或自定义名）各一个 JSONL 文件、作用域内按内容去重，五个模型工具（memory_save / memory_search / memory_list / memory_get / memory_forget），自动召回与硬性规则注入 agent 的…
  `v0.25.12` · [源码](https://github.com/RestRegular/dsh-memory)
- **@zhangj1164/dsh-memo** — 按 ISO 周组织的个人备忘服务：条目按周存储，周/月/季/年四种视图由同一份周期日历解析，支持按季度归档，提供 AI 分析与 Markdown 报告导出，修改非当前周需要显式确认，并能把整条插件套件的遥测失败分析整理成一份 GitHub issue 报告。
  `v0.2.0` · [源码](https://github.com/zhangj1164/dsh-mega-plugins)
- **@jayyuen66/dsh-lesson-loop** — 把拦截拒绝、门禁失败与人工差评沉淀为项目教训，只把人工确认过的规则注入该项目之后的新会话；它不注册模型工具，通过设置卡评审规则。
  `v0.1.5` · 引擎 `^0.2.1-rc.3` · [源码](https://github.com/JayYuen666/dsh-lesson-loop)
- **dsh-library** — 将本地 Markdown 与文本文档转为可检索的知识库，支持语义与关键词混合搜索、引用校验与来源注入。
  `v0.2.25` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-library)
- **dsh-suzu-memory** — 为 DeepSeek Harness 提供会话独立的长期记忆、记忆管理、人设设置和压缩提示词。
  `v0.4.1` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/eryucheng/dsh-suzu-memory)
- **@lovedolove/veyra** — 面向编程代理的工程智能——为 DeepSeek Harness 提供持久化、证据感知、项目隔离的工程记忆，以及统一的混合搜索（记忆 + RAG 文档）。
  `v0.1.56` · [源码](https://github.com/LoveDoLove/Veyra)
- **dsh-instruction-memory** — 在 DSH 设置界面维护常驻指令，自动注入此后每一轮对话的系统提示词。
  `v1.4.2` · [源码](https://github.com/HERO476/dsh-instruction-memory)
- **@mebular/dsh-plugin** — 去中心化、离线优先的 DSH 图式记忆与任务图：签名事实、多设备同步，并在侧边栏复用 Mebular 共享控制台。需当前环境已运行 Mebular 守护进程（Mebular 桌面 App，或 @mebular/core 的 mebular serve）；本插件只把它的记忆工具与控制台面板接入 DSH。
  `v0.1.0` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/Windsander/Mebular)
- **dsh-memory-shield** — 在指定 DSH preset 里挡掉其他记忆插件的上下文段与工具，让该会话拿到干净上下文。bundle 形态、默认关闭，带只读诊断工具。
  `v0.1.15` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/Sacredbluedragon/dsh-memory-shield)
- **@max-null/dsh-memory** — 跨会话明文记忆：确定性 BM25 关键词召回（无向量嵌入），memory_save/list/search/confirm/forget 五个工具 + 人工确认闸门，global/project 两层 JSON 存储（project 随 git 分享）。
  `v0.19.0` · [源码](https://github.com/Max-Null/dsh-memory)
- **dsh-quberi** — 在 DeepSeek Harness 内通过 OAuth 检索你的 Quberi 知识库中的文档和图片，浏览空间和文档，保存笔记，并上传文件（每个文件都需你确认）。
  `v0.7.2` · [源码](https://github.com/quberi/dsh-quberi)
- **dsh-soul-md** — 管理 soul.md 人设卡与长期记忆，支持按工作区和会话选择人设，并提供读取和更新工具。
  `v0.10.3` · 引擎 `>=0.2.0-rc.2 <0.3.0 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/Scorp1o117/dsh-soul-md)
- **dsh-tdai-memory** — 集成 TencentDB Agent Memory，支持对话捕获、结构化记忆提取、自动召回，以及记忆和对话搜索工具。
  `v0.4.5` · 引擎 `>=0.2.0-rc.2 <0.3.0 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/Scorp1o117/dsh-tdai-memory)
- **dsh-knowledge-canvas** — 右侧栏的卡片画布知识库：笔记就是节点，模型通过九个工具读写、连线、移除。节点可以挂图片和文档，读节点时连同内容一起返回（Office 文件就地抽取文本），图片还能作为图像直接交给模型。
  `v0.4.5` · [源码](https://github.com/NeoHotaru/dsh-knowledge-canvas)
- **@yolk_vat-y/dsh-project-memory** — 为 DeepSeek Harness提供持久化的项目级记忆。专门针对项目开发，原生融合 dsh 任务系统，会话内任务清单与读过的文件自动沉淀为跨会话任务记录，任务↔文件自动关联——开发工作流可切换、可续接，无需重复梳理整个项目。文档与代码符号在读取时索引，无需全量预扫；针对不同语言的项目，支持可选功能增强。经验笔记自动…
  `v0.6.5` · [源码](https://github.com/00080000/dsh-project-memory)
- **sage-mem** — 基于文件的跨会话记忆：纯 Markdown 记忆文件，检索结果自动注入；格式与 Claude Code 的 CLAUDE.md 及记忆文件兼容，迁移即手工复制文件。
  `v1.8.2` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/gezi-wen/sage-mem)
- **dsh-derive-watcher** — DSH 语义上下文观察器，维护旅程台账并做闪存摘要与 MinHash 新颖度检测，支持里程碑折叠、长期上下文注入与三级停滞响应；注入与 stall-2/3 响应默认关闭。
  `v0.3.3` · [源码](https://github.com/JiewiW/dsh-derive-watcher)
- **dsh-lattice** — DeepSeek Harness 的本地记忆插件：写下的内容按主题归档、与相关条目连边，召回按向量相似度排序（没装模型时退回词面匹配），数据存在本地 SQLite 库里。
  `v0.11.1` · [源码](https://github.com/topkie/dsh-lattice)
- **misakanet** — 失败恢复记忆库：从真实工程会话中搜索和记录失败恢复教训，支持 BM25 + 语义 RAG 检索和知识库管理。
  `v2.50.0` · [源码](https://github.com/Ikalus1988/MisakaNet)
- **dsh-prime-memory** — 分层记忆插件，面向 Agent 暴露 10 个工具：高权限写入（memory_add / memory_delete / memory_import）、反刍控制（memory_ruminate / _cancel / _status）与记忆图谱（memory_search_graph /…
  `v0.26.10` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-prime-memory)
- **dsh-openviking-manager** — 官方 OpenViking 记忆插件的配置管理界面：连接与用户 Key 配置、当前环境连接诊断、输入栏会话级记忆开关、按主题隔离的召回范围，以及分数阈值、注入条数、查询扩写与排除 URI 的召回调优。
  `v0.5.0` · 引擎 `>=0.1.6-alpha.2 <0.3.0-0` · [源码](https://github.com/xbzbing/dsh-openviking-manager)
- **dsh-unified-agent-memory** — 多 Agent 共享一个 Obsidian vault：零依赖 Python core（检索/晋升/裁决/遗忘）+ vault 模板 + dsh 插件（memory_search/show/submit/status）。
  `v0.8.8` · 引擎 `^0.1.0-rc.6 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/Noelune/unified-agent-memory)
- **dsh-my-memory** — 全局 / 项目两级记忆：会话开始时把记忆注入系统提示词，设置页面板支持新增 / 修改 / 删除（写操作需确认），并为 agent 提供只读查询工具 memory_query（npm: `dsh-my-memory`）。
  `v0.2.0` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **@evomap/dsh-evolver** — 越用越聪明的 harness，告别金鱼记忆。每条 prompt 前，Evolver 从本地经验和 EvoMap 网络召回一条验证过的策略；回合结束后，它凭测试结果、改动是否被保留、你的下一句反馈给策略打分，再回报网络按证据加权。每一次成功都变成下一次的捷径，每一次失败都变成下一次的避坑指南。
  `v0.3.1` · [源码](https://github.com/EvoMap/evolver-dsh-plugin)
- **dsh-ledger-memory** — 项目级记忆，核心是台账：台账的结构由 AI 按项目类型自行决定，插件只负责检测、注入、回写、归档与 Git 配合。记忆按语义分开放 —— 活跃台账是当前状态、回合流水只追加、关键决策/目标树/经验教训各是一卡一文件（另有卡片目录的多维索引表），根本原则只有用户本人能改。压缩方式只有一种（分流后压缩）：压缩前先让 AI…
  `v1.6.1` · [源码](https://github.com/18477514055/dsh-ledger-memory)
- **dsh-kb-lite** — 本地知识库：五个工具，导入 Markdown、文本与 PDF，用 BM25 或 BM25 + 本地向量的混合检索查找，回答时带原文引用。离线运行，不需要数据库服务。需 Node.js 18+ 与 Python 3.9+；导入 PDF 需 pymupdf。
  `v0.4.3` · [源码](https://github.com/imaused/dsh-kb-lite)
- **@zilliz/memsearch-dsh** — 供 DSH 与其他编程 Agent 共享的 Markdown 记忆，支持自动捕获、步骤前上下文注入、搜索召回，以及通过审阅面板实现 memory-to-skill 自进化。
  `v0.1.7` · [源码](https://github.com/zilliztech/memsearch)
- **@openviking/dsh-memory-plugin** — 面向 DeepSeek Harness 的 OpenViking 记忆与上下文插件：pre-step 自动召回与画像注入、会话捕获、`viking://` URI 防护，以及对接 OpenViking 服务端的 recall/write 记忆工具。
  `v0.5.29` · [源码](https://github.com/volcengine/OpenViking)
- **@weibaohui/context-razor** — 上下文剃刀：把当前会话上下文逐条列出（角色/预览/≈token 估算），超阈值标红，勾选后不经 LLM 精确裁剪，删了什么一目了然。
  `v0.4.8` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/context-razor)
- **@lemoncat7/dsh-knowledge** — 提供本地与远程知识库，支持项目和会话范围检索、可控回写以及内嵌 Web 管理台。
  `v2.15.5` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/lemoncat7/dsh-knowledge)
- **@a9i5k4/dsh-auto-memory** — 主动联想记忆 + Astra 式上下文管理：自动唤回（固定边界注入，前缀缓存友好）/自动沉淀/技能固化/交接账本与 PLAN 白板跨窗口续命/水位感知（窗口自动适配当前模型）。本地 Markdown 存储，模型无关，零依赖；词法 0GB 兜底，可选语义档。
  `v3.3.17` · [源码](https://github.com/Aik358/dsh-auto-memory)
- **dsh-ai-memory** — 为 DSH 补上 ai-memory 的收敛闭环：DSH 会话结束时调用 ai-memory finalize-session，把本次捕获的观察整理成 wiki 页面，供 ai-memory 服务的其他 harness 读取；跳过子代理、串行化并发结束的会话，并补扫被强制重启遗留的会话。
  `v1.3.0` · [源码](https://github.com/rasyidmmz/dsh-ai-memory)
- **project-node-memory** — 给 DSH Agent 用的「md 即数据库」项目知识库：10 个 kb_* 工具（含登记已有笔记的 kb_register）、稳定 TID、`[[node]]` 只出链接不复制正文、`[[tscl]]` 定义就地展开、有界读取、覆盖 tscl 的结构 lint、工作区优先的库发现、内嵌 git…
  `v1.4.4` · [源码](https://github.com/levodoubt/project-node-memory)
- **dsh-memento** — 有界、分层、带审批门、可审计的跨会话记忆：`ctx.memory` 服务 + 零依赖 SQLite 存储 + `memory` 工具与冻结快照注入，并预演 dsh-memory-protocol v1——适配器注册表与可分发的一致性套件。
  `v0.5.28` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-memento)
- **dsh-limit-break** — 跨会话持久记忆，加一条绕开主机名级封锁的取数阶梯：四个工具——memory_recall / memory_save / memory_stats 读写 $DSH_HOME/memory/facts.json 里的纯 JSON，resilient_fetch 依次尝试直连 fetch → 同服务别名主机（目前仅…
  `v1.5.0` · [源码](https://github.com/Ma354/dsh-limit-break)
- **meow-memory** — 项目级跨会话记忆：node:sqlite 七层存储（soul/user/project/fact/lesson/rules/topic），首条消息缓存友好注入 + 每条消息关键词命中，memory_remember/search/find_similar/read/update/project…
  `v0.31.1` · [源码](https://github.com/Phant0Meow/dsh-meow-memory)
- **dsh-linghun-memory** — DeepSeek Harness 的记忆子系统：记忆完全本体化（event/fact/rule 三本体）+ 目标系统（goal.js）——belief 价值观写侧收录 + Bridge 触发词，读侧重匹配公式（0.25 域命中 + 0.35 触发词 + 0.40 相似度）补上 goal/value…
  `v0.4.0` · [源码](https://github.com/syyr1987/dsh-linghun-memory)
- **stratagate-dsh** — 近期对话保持清晰，久远记忆逐渐化为摘要，而不是消失。StrataGate 为 DeepSeek Harness 带来六层时间衰减记忆，并将长期事件与关系沉淀进知识图谱。还可以把其他 AI 中的已有记忆一起带过来，不必从头开始。
  `v0.3.23` · 引擎 `0.1.2-rc.1 || >=0.1.5-rc.1 <0.3.0-0` · [源码](https://github.com/diqierjia/StrataGate-AgentMemory)
- **@weibaohui/hermes-loop** — 自动复盘：对话收尾后自动把有价值的经验蒸馏成可复用的技能（skill）存入技能库，支持信号加速触发、手动立即复盘、审批模式与技能库治理（归档/恢复，永不直接删除）。
  `v0.3.1` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/hermes-loop)
- **dsh-compound-memory** — 通过 uvx 启动本地 compound-memory MCP server，并在每个会话注入一次简短的使用提醒。
  `v0.1.5` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/chinwe/dsh-compound-memory)
- **dsh-knj-obsidian** — DSH 内置版 Obsidian 知识库：agent 把对话、文档与网页蒸馏为结构化 .wiki 知识图，支持检索、图谱导出、笔记编辑、增量构建与多库管理。
  `v2026.10.211` · [源码](https://github.com/yangdongzhen590/dsh-knj-obsidian)
- **@modusensus/dsh-mneme** — 会做梦的记忆 — DeepSeek Harness 跨会话记忆插件：跨会话记住你与项目，空闲时自动巩固记忆（autoDream），冲突记忆先冻结待你裁决，全程可回放审计。记忆落在当前环境：SQLite 存储配可人工编辑的 Markdown 镜像；附带四路召回（关键词、向量、BM25、实体图谱）与交互式记忆库面板，另有…
  `v0.9.4` · [源码](https://github.com/slow-stack/mneme)
- **dsh-kb-rag** — 本地文献知识库 RAG：10 个工具（kb_ingest、kb_search、kb_rag、kb_zotero、kb_dedup、kb_clear、kb_fetch、kb_scope、kb_stats、kb_status），BM25+向量+重排混合检索、DOI 可点击溯源问答，全本地 bge 嵌入 + 单文件…
  `v1.6.8` · [源码](https://github.com/Breeze136/dsh-kb-rag)
- **dsh-mnemon** — 由 Mnemon 驱动的 DeepSeek Harness（DSH）跨 Agent、本地优先的持久记忆插件。它可在支持 Mnemon 的 Agent 之间共享长期记忆，并提供运行时记忆、可检索项目档案、语义召回、知识图谱和 Sidebar UI。
  `v0.5.34` · 引擎 `>=0.2.0-rc.2 <0.2.1-0 || >=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/omdsh-dev/dsh-mnemon)
- **@fooxe/dsh-memory** — 分层 Claude Code 式记忆：用户级+项目级双作用域（项目记忆随 git 团队共享），MEMORY.md 索引会话启动自动注入，上下文护栏，纯文件零依赖。
  `v0.13.10` · [源码](https://github.com/annkun/dsh-memory)
- **dsh-longterm-memory** — 为 DSH 提供本地 Markdown 长期记忆：Obsidian 兼容仓库、侧边栏管理页、四个记忆工具，以及按预算的每回合召回。
  `v0.1.4` · 引擎 `>=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/bufan528/dsh-longterm-memory)
- **dsh-inkvault** — 把本地 Markdown 库拆成两个由用户在设置页选择的文件夹：知识库由 DSH 在对话中写入笔记，记忆库作为 agent 的长期记忆，按回合召回、回合结束沉淀候选。纯 Markdown 加 frontmatter、BM25 检索、可逆归档，并用路径隔离拒绝穿越、绝对路径与符号链接逃逸。
  `v0.3.1` · 引擎 `>=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/M1r0er/dsh-inkvault)
- **dsh-memj** — 以项目为主线的 DSH 记忆插件。开放知识书写，以及插件提示词编辑，让用户不改一行代码就能重新设计记忆库结构与模型被驱动的方式。默认的记忆库核心设计在于，项目以一份你自己设计的项目文档（默认是一份交接文档）作为实体，插件自动识别会话所属项目、把沉淀的知识与项目绑定，并把可复用的部分升级进主题与全局层。用最自然的逻辑完成…
  `v0.1.5` · 引擎 `>=0.1.5-rc.2 <0.1.6-0 || >=0.1.6-0 <0.1.7-0 || >=0.1.7-0 <0.2.0-0 || >=0.2.0-0 <0.2.1-0 || >=0.2.1-0 <0.3.0-0` · [源码](https://github.com/jojoman2024/dsh-memj)
- **dsh-engram** — 零 LLM 自动捕获 + 符号化 \[ENGRAM\] 索引渐进披露，配 ESR-lite 任务/证据闭环（esr_task / esr_node / esr_close / esr_link）、按工作区的真实使用遥测与离线召回基准（npm run eval）。
  `v0.7.4` · 引擎 `>=0.1.2-alpha.2 <0.3.0-0` · [源码](https://github.com/skepsun/dsh-engram)
- **dsh-observational-memory** — 在后台将会话工作提炼为观察和反思，以便在上下文压缩后保留会话上下文。
  `v0.4.1` · [源码](https://github.com/EPCN-fla/dsh-observational-memory)
- **dsh-handoff-compaction** — 面向小上下文模型的 DSH 上下文压缩插件：压缩大小可视化配置，默认 8k 交接摘要 + 16k 最近上下文，完整历史仍可查询。
  `v0.2.0-rc.8` · 引擎 `^0.1.1-rc.2 || ^0.1.2-rc.1 || ^0.1.5-rc.2 || ^0.1.7-alpha.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-alpha.2 || 0.2.1-alpha.3 || 0.2.1-alpha.4 || 0.2.1-alpha.5 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/knighthongyu/dsh-handoff-compaction)
- **@luisarg/memory-mcp** — 经 MCP stdio 把 Agent 接入持久化 OKF 记忆库：Python 服务端（SQLite FTS5 + Markdown），10 个工具用于检索与写入决策、事实和偏好。
  `v0.3.0` · [源码](https://github.com/Luisarg03/dsh-memory-vault)
- **@luisarg/memory-auto** — 会话记忆自动驾驶：监听 DSH 会话，在会话结束与压缩前通过宿主 LLM（ctx.llm，默认 deepseek-official）就地抽取 OKF 条目，无需外部 API Key。
  `v0.3.0` · [源码](https://github.com/Luisarg03/dsh-memory-vault)
- **@duke-dsh-plugins/dsh-memory-manager** — ZCode 风格持久化项目记忆：设置内完整管理页、索引式注入与 agent 记忆工具。
  `v1.4.3` · 引擎 `^0.1.0-rc.7 || ^0.2.0-rc.1` · [源码](https://github.com/MoonlitDropOfBlood/dsh-memory-manager)
- **@vectorize-io/hindsight-coding-agents** — Hindsight：会学习的 Agent 长期记忆系统，自动召回/保存、知识页、深度反思与按仓库隔离的记忆银行。
  `v0.8.2` · [源码](https://github.com/vectorize-io/hindsight)
- **dsh-sgme** — 拾光记忆引擎（SGME）桥接：多智能体共享长期记忆（HTTP）—— L0/L1/L1.5/L2 分层提炼、按场景注入、统一检索、主动关怀信号（memory_search / wiki_search / signal_pull / signal_claim / signal_ack），npm 包名 `dsh-sgme`。
  `v0.6.3` · [源码](https://github.com/freehul/sgme)
- **dsh-plugin-tlmemory** — 跨会话、跨工程的长期记忆：turn/end 时非阻塞派发无感静默沉淀，写入当前环境 SQLite（FTS5 trigram 全文索引，含增删改同步触发器）供后续回合召回；记忆按项目作用域与全局树分层存储，并自带内嵌 Web 看板（插件自身起 HTTP 服务，非独立进程）用于浏览、图谱与受控删除。
  `v1.3.0` · [源码](https://github.com/ltl0312/my-dsh-plugins)
- **dsh-memoir** — 仅本地运行、零捆绑运行时依赖（仅使用 DSH 宿主 peer）且不调用外部服务的项目记忆：以 JSON 为单一事实源并自动生成 PROJECT_MEMORY.md、按 token 有界且按会话冻结的 Hot Memory 以保持 prompt-prefix cache 稳定、带查询缓存的跨项目 BM25 召回、可信…
  `v0.9.3` · [源码](https://github.com/Qinling-Melon-Farmers/dsh-memoir)
- **dsh-patchouli** — 面向 DeepSeek Harness 的记忆与知识中台：在兼容插件之间路由 update、retrieve 和 subscribe 调用，并提供可选的事务化 Rust 后端。
  `v0.1.8` · [源码](https://github.com/memorax-ai/dsh-patchouli)
- **@yiyunet/dsh-learn-skills** — DSH 插件：会话输入区的四入口学习流程——初始预设、收集提炼、关联升级、沉淀复用。
  `v2.2.9` · 引擎 `>=0.2.1-alpha.1` · [源码](https://github.com/yiyunet/dsh-learn-skills)
- **@tr1v3r/dsh-ltm** — 基于本地 SQLite 的长期记忆，支持 CJK 分词检索、BM25 与字符 n-gram 余弦重排、去重和生命周期管理。
  `v0.3.3` · [源码](https://github.com/tr1v3r/dsh-ltm)
- **dsh-simple-wiki-memory** — 超级简化版 llm-wiki 记忆插件：一个索引文档（自动加载）+ 每个主题一个 md 文件（需要时才读）——不会把所有东西塞进上下文烧 token。简单轻量，安装卸载无压力，想怎么改就怎么改。
  `v0.2.0` · 引擎 `>=0.1.0-rc.7 <0.2.0-0 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/rainow/dsh-simple-wiki-memory)
- **dsh-memory-gate** — 有界本地记忆 + CBDC 权威门控：SQLite + FTS5 claims，作用域召回并给出可解释的采用/核验/忽略决策与完整审计轨迹，/memory 命令，每次注入 ≤3 条/1200 字符，不增加额外模型调用。
  `v0.15.0` · [源码](https://github.com/GIT121995/dsh-memory-gate)
- **@akasha-book/mcp** — 把阿卡夏之书外置记忆层以 stdio 注册进 DSH，暴露 22 个 akasha_* 工具：检索、主题简报、修订链、审计与会话回看。（配套：Hindsight 仓库记忆 / OpenViking 用户记忆 / 宿主会话检索；见仓库 README） 安装：clone 仓库并复制 core/，把…
  `v1.1.6` · [源码](https://github.com/Ersith/akasha-book)
- **@akasha-book/sleep** — 空闲或定时触发阿卡夏睡眠蒸馏，并为新会话注入唤醒条、每回合注入库脉搏；可选的空闲续行默认关闭。（配套：Hindsight 仓库记忆 / OpenViking 用户记忆 / 宿主会话检索；见仓库 README） 安装：clone 仓库并复制 core/，把 cordis.patch.yml 里的…
  `v1.10.32` · [源码](https://github.com/Ersith/akasha-book)
- **@akasha-book/hooks** — 把宿主事件（回合结束、工具结果、agent 错误、空闲切换、assistant 输出）落成 append-only JSONL，供指标、召回检查与输出审计使用。（配套：Hindsight 仓库记忆 / OpenViking 用户记忆 / 宿主会话检索；见仓库 README） 安装：clone 仓库并复制…
  `v1.2.10` · [源码](https://github.com/Ersith/akasha-book)
- **@akasha-book/gate** — 阿卡夏之书门控：拦截写入记忆数据目录的工具调用，并把库用法约定与自我层注入系统提示。（配套：Hindsight 仓库记忆 / OpenViking 用户记忆 / 宿主会话检索；见仓库 README） 安装：clone 仓库并复制 core/，把 cordis.patch.yml 里的 <AKASHA_DIR>…
  `v1.4.4` · [源码](https://github.com/Ersith/akasha-book)
- **@eduwork/dsh-memory** — 本地语义记忆与过往对话检索，保留来源引用，支持编辑、保留、遗忘、撤销及 JSON 导入导出。
  `v0.2.0` · [源码](https://github.com/ECNU/EduWork)
- **@dsh-plugins/dsh-user-mirror** — 让模型主动记下你的判断依据（原则/红线/工作方式），跨会话复用 —— 有容量上限、会遗忘、每条都说得出为什么记。0.7.0 重构为画像式速写，带证据追溯与红线硬约束，告别冷冰冰的数据库列表。
  `v0.8.7` · [源码](https://github.com/webkubor/dsh-mirror)
- **dsh-memory-palace** — 人类可读的 Markdown 记忆插件：用户级（~/.deepseek-harness/MEMORY.md）+ 工作区级双层记忆，每轮自动注入提示词，回合结束自动写日志并按期蒸馏沉淀；可桥接已有 WorkBuddy/CodeBuddy 记忆目录；内置 memory_note / memory_note_user /…
  `v1.8.2` · 引擎 `^0.2.1-alpha.1` · [源码](https://github.com/lovezi0/dsh-memory-palace)
- **@timestatic/dsh-session-notebook** — 从 DSH 会话里记笔记：可收藏整条回复或选中片段，划线会持久重绘回原文位置，可为其补写可编辑的 Markdown 笔记、打标签，按工作区或会话筛选，并导出 Markdown 或完整 JSON 备份；数据以当前环境 JSON 文件存储。
  `v0.2.0` · [源码](https://github.com/timestatic/dsh-session-notebook)
- **dsh-notes-context** — 为 DeepSeek Harness 提供笔记式上下文压缩：用模型维护的持久笔记本取代 LLM 摘要式压缩，并保留可恢复的原始历史，窗口边界本身不产生模型调用。
  `v0.2.1` · 引擎 `>=0.2.0-rc.2 <0.2.1-0 || >=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/sqzw-x/dsh-notes-context)
- **dsh-context-zip** — 接管 DSH 自带的压缩摘要器，改用五段式交接摘要，被压掉的每条消息都能在分段目录里读回。
  `v0.1.10` · 引擎 `>=0.1.5-rc.2 <0.2.0-0 || >=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/brunhildzhou/dsh-context-zip)
- **dsh-engramory-recall** — 给 Engramory 记忆库加本地 BM25 自动召回、写入闸门、静态体检与记忆面板。不联网、不起进程，默认不调模型；召回质量由仓库里的可复算基准量化。
  `v0.21.0` · 引擎 `>=0.1.0 <0.3.0` · [源码](https://github.com/yffo/dsh-engramory-recall)
- **@agentscope-ai/reme-dsh-plugin** — 将 DeepSeek Harness 接入 ReMe 本地优先、自进化的个人知识库：自动把已完成的主 Agent 对话沉淀为用户掌控的 Markdown 记忆，通过 reme_search 结合 BM25、可选向量检索和 wikilink 展开搜索对话与资料，并按日整理长期记忆。
  `v0.1.2` · [源码](https://github.com/agentscope-ai/ReMe)
- **dsh-plugin-memory** — 带 LLM Wiki 结构与 SOUL 人格文件的长期 markdown 记忆库：会话启动注入 boot 块（默认提问后才注入、且只注入当前激活会话），含 remember/recall/consolidate/forget 工作流、内嵌 memory 技能、pack/unpack…
  `v0.10.0` · [源码](https://github.com/LittleBlackTong/dsh-plugin-memory)
- **dsh-memory-delta** — 分层跨会话记忆，只推变化的部分：首轮注入全部有效条目，之后只推新增 / 已更新 / 已失效，没有任何变化时一个字都不注入；与条目 id 重复的 key 不再写进正文，基线体积因此小约 26%。事实与决策带语义键（一个 key 只有一个有效结论），模型只能写收件箱、由人确认后才成为常驻事实；条目可以带复核时间，到期后提醒…
  `v1.3.4` · [源码](https://github.com/lpf20200901/dsh-memory-delta)
- **dsh-expmem** — 个人经验记忆：把真实解决过的问题存为带来源、可纠正、有适用条件的案例，新任务中自动召回复用，纠正与删除会级联影响后续召回。
  `v0.1.1` · 引擎 `0.2.0-rc.2` · [源码](https://github.com/mengxiaoxian/lookover)
- **dsh-tool-user-memory** — 面向 DSH 的本地 Markdown 用户与项目记忆：置顶偏好、关键词检索、软失效、历史归档，以及带预览、备份与回滚的 JSON 迁移。
  `v0.4.0` · [源码](https://github.com/IAMLieutenant/dsh-tool-user-memory)
- **dsh-get-memory** — 对话开始时自动拉取 GitHub 仓库内容注入上下文，对话结束时提取长期记忆按文件写回并提交；文件权限中心、原生设置页、回合写回指示与全局变动提示。
  `v0.5.1` · [源码](https://github.com/krodon998/dsh-get-memory)
- **dsh-openclaw-memory** — 把现有 OpenClaw Markdown workspace 作为有界的人格与记忆上下文共享给 DeepSeek Harness，并提供 Sidebar 浏览与编辑。
  `v0.1.4` · [源码](https://github.com/zzy-fxxxexxxyxxx/dsh-openclaw-memory)
- **dsh-tiddlywiki** — 把 TiddlyWiki 5 变成 DSH 的持久知识库：十个 tiddlywiki_* 智能体工具（带过滤的检索、读写/批量/改名/删除、最近、标签，以及 git 同步与冲突解决），GUI 中央栏经同源代理内嵌完整 TiddlyWiki 编辑器，右侧栏知识库 Tab，会话级汇总本会话读写过的笔记，快速笔记卡片支持草稿…
  `v0.30.65` · [源码](https://github.com/bbqisbbq/dsh-tiddlywiki)
- **dsh-memory-snapshot** — 把本地已有的 markdown 文档（笔记、规则、知识库）按路径清单注入 dsh 每个会话的系统提示词，当只读记忆——无数据库、无服务、无写入通道；支持目录收集、UTF-8 字节预算截断、front-matter 剥离与新鲜度时间戳。
  `v0.3.0` · [源码](https://github.com/yzx4036/dsh-memory-snapshot)
- **@chance722/dsh-inbox** — dsh 的个人收件箱：输入框的 /inbox 或侧栏面板把链接、图片、文本与账密收进本地仓库，先按本地规则、再由有每日上限的模型分类，可在面板里筛选、搜索与编辑；对话里让助手按需检索取回，账密正文加密落盘，可选 WebDAV 或 S3 远端同步记录与附件字节。目前只在 Windows 实测。
  `v0.2.15` · [源码](https://github.com/Chance722/dsh-inbox)
- **dsh-journal-calendar** — 助手替你维护的每日日志：journal_record 工具把带时间的待办与记事（可选详情与标签）追加到 DSH home 下一天一个的 JSON 文件；右侧栏把这些文件画成月历，单元格按「有待办未完成 / 待办已完成 / 只有记事」标记，下方是可勾选的待办与所选日期的条目；它加入系统提示词的那句职责文案，可以直接在日历…
  `v0.2.0` · 引擎 `>=0.1.7-rc.1 <0.2.0 || >=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/crease123/dsh-journal-calendar)
- **@zzerx/dsh-plugin-memory** — dsh 跨会话记忆：agent 保存、检索并更新用户偏好、事实与项目决策，重要条目自动注入后续会话，设置面板可浏览、编辑、归档与删除。
  `v0.4.3` · [源码](https://github.com/0x7A7A6572/dsh-forge-studio)
- **dsh-clear-mind** — 让模型自主压缩自身上下文的 dsh 插件：mind_map 工具俯瞰模型自己的上下文表面（稳定 seq、角色、token 重量、清理边界标记，返回内附清理手册），clear_mind 工具把选定的对话历史区间替换成模型自写的检查点（走平台原生 compaction 事务，GUI…
  `v0.1.5` · [源码](https://github.com/john-walks-slow/dsh-clear-mind)
- **@zseven-w/dsh-noema** — 为 DSH Agent 提供长期记忆——可检索、可检视的持久记忆，带回忆、搜索、浏览与知识图谱工具，支持从十个其他 AI 编码工具导入记忆，并附设置页。
  `v0.1.0-rc.6` · [源码](https://github.com/ZSeven-W/dsh-noema)
- **@dennisrongo/dsh-memory** — /remember 命令将事实写入 dsh 已加载的 AGENTS.md 指令层级，并配有 Memory 标签页，显示加载器在字节预算内实际保留了哪些指令。
  `v0.1.3` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **@zoria-lind/dsh-ecolink-adapter** — dsh-ecolink 记忆生态的 dsh 侧组件：浏览器扩展收割 DSM 格式记忆标签并向网页对话注入回忆、零依赖本地服务写入共享记忆池、本 adapter 负责 pre-step 注入与 /ecolink-push 写回，共同打通 chat.deepseek.com 与 DSH；压缩为事务化双池（暂存提交/回滚）。
  `v0.2.2` · [源码](https://github.com/Zoria-Lind/dsh-ecolink)
- **dsh-noteboard** — 工作区级的无限画布便签：便签以 Markdown 文件保存，可手动创建、从对话中摘录或由 AI 提炼生成，并能作为上下文提供给 AI 使用；附带 12 个模型工具与 5 个内置技能，用于创建、打标签、整理、比较与合并便签。
  `v0.3.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/boogoo619/dsh-noteboard)
- **dsh-memory-loom** — 跨会话长期记忆：从每轮对话抽取持久事实、按共享标签与实体自动建立联想关联，并以 BM25 加关联图激活传播进行召回；提供六个模型可调用工具与一张设置卡片。
  `v0.1.8` · 引擎 `>=0.1.5-rc.2` · [源码](https://github.com/Ray144165154/dsh-memory-loom)
- **@lcthe/dsh-hermes-memory** — DSH 有界持久记忆：memory_save/search/replace/remove/list 覆盖全局、用户、项目、失败四类范围，基于 DSH storage-domain 持久化，写入前做密钥与提示注入扫描，支持会话范围检索、保留期清理与可选的会话开始注入；常驻上下文用…
  `v0.3.0` · [源码](https://github.com/lcthe/dsh-hermes-memory)
- **dsh-flomo** — 配置一次 flomo API URL / API Key，Agent 即可用 flomo_send 把笔记、摘要、待办写进 flomo（浮墨笔记）。
  `v0.2.2` · [源码](https://github.com/zhengjy01/dsh-flomo)
- **dsh-notion-connector** — 配置一次 Notion Integration Token，Agent 即可搜索、读取、查询、创建、更新、追加 Notion 页面与数据库内容，并提供 Web 设置页。
  `v0.1.2` · [源码](https://github.com/zhengjy01/dsh-notion-connector)
- **dsh-obsidian** — 把 dsh 连接到本地 Obsidian vault：通过 `obsidian_*` 工具搜索、读取、写入、移动与回收笔记。
  `v0.2.6` · [源码](https://github.com/mingzeng21/dsh-obsidian)
- **@honcho-ai/dsh-honcho** — 由 Plastic Labs 维护的 Honcho 记忆插件：会话启动时注入用户画像、会话摘要与相关结论，后台脱敏后逐轮上传对话到 Honcho，提供 honcho_search / honcho_chat / honcho_remember 工具及 /honcho 状态命令；通过与其他 Honcho 集成共用的…
  `v0.1.2` · [源码](https://github.com/plastic-labs/dsh-honcho)
- **dsh-memory-spaces** — 用户治理的跨会话记忆空间，提供独立的来源与使用关系、来源追踪、版本管理和发送前注入检查。
  `v0.1.1` · [源码](https://github.com/icearia0219/dsh-memory-spaces)
- **dsh-living-memory** — 单文件本地 SQLite 的自整理活记忆——夜巡引擎自动去重、合并、衰减、建链，七信号 RRF 混合检索（FTS5+jieba 中文优先分词、可选向量 KNN、图谱 PPR），带类型知识图谱，冲突检测标记矛盾而非静默覆写，Web 遥测面板。
  `v0.2.10` · [源码](https://github.com/dearbld/dsh-living-memory)
- **dsh-memory-recall** — Hermes Agent 风格的 dsh 持久记忆：一个 memory 工具维护用户档案与模型自己的笔记，并在每段对话的开头、记忆变更后、压缩之后各投递一条带记录的消息；session_search 工具只在用户同意后才会读取更早的会话；另有 Memory 面板可查看和编辑已保存的内容。
  `v0.2.0` · [源码](https://github.com/adithyanraj03/dsh-memory-recall)
- **dsh-engramory** — 给 DeepSeek Harness 的长期记忆，以纯 markdown 保存：一条事实一个文件，任何编辑器都能打开。索引 `MEMORY.md` 有 200 行 / 25KB 的硬上限，由 `ctx.tools.guard()` 强制执行——让已超限的索引继续变大的写入会被拒绝，而缩小它的重写一律放行，于是过大的索引…
  `v0.2.5` · [源码](https://github.com/tinqiao-oss/engramory)
- **dsh-opencontext** — 为 DeepSeek Harness 接入 OpenContext，提供跨会话持久记忆、提示词自动捕获与召回、会话摘要、结构化洞察和文档检索。
  `v0.4.0` · [源码](https://github.com/melandlabs/opencontext)
- **agent-feedback-loop-dsh** — 把 dsh 的每一轮 prompt 送入本地 agent-feedback-loop 反馈记忆管线——捕获用户不满、离线评审沉淀为反思，并把编译好的复发规则上下文附着回当前轮次，从不阻塞 prompt。需要先安装 agent-feedback-loop 运行时；安装后执行 agent-feedback-loop…
  `v0.9.0` · [源码](https://github.com/super3ben/agent-feedback-loop)
- **dsh-learn-wiki** — DSH 的纠错式补料知识库：agent 反复撞同一堵墙时，后台 worker 在限流下联网抓取、蒸馏结果先落暂存区，只有两段式 commit 才能进入召回——无来源的页面一律拒绝。
  `v0.3.1` · [源码](https://github.com/Dayi-Z/dsh-learn-wiki)
- **dsh-siyuan-notes** — 把 DeepSeek Harness 接到当前环境思源笔记桌面端：把笔记工具注册为 mcp__siyuan__<tool>，额外把思源里配置好的 AI 与其 agent 回路也做成一个工具（按档位门禁），附带笔记使用技能，并在每次调用上执行只读/创作/完整三级策略；思源关闭时工具列表依然可用。
  `v0.1.10` · [源码](https://github.com/greyoak111/siyuan-codex-bridge)
- **dsh-graphmemory** — DSH 知识图谱记忆：better-sidebar「记忆图谱」页签与独立看板 /graph-memory/app；抽取任务/技能/事件节点并跨会话召回，npm 包名为 dsh-graphmemory。
  `v0.2.0` · [源码](https://github.com/meyaomiao/dsh-graphmemory)
- **dsh-plugin-focus** — 为 DeepSeek Harness agent 提供持久化专注板：在会话工作区维护目标、约束与决策笔记，跨压缩与会话存活，支持自动注入上下文、清空归档与可选 Web 面板。
  `v1.1.1` · [源码](https://github.com/863683348/dsh-plugin-focus)
- **qmd-autosearch** — 模型在知识库目录执行 grep/glob 搜索时自动补充 QMD 语义检索：零依赖 DSH 插件，异步注入下一步上下文，无需手动调用。
  `v0.1.2` · [源码](https://github.com/zhangzhenwen1/qmd-autosearch)
- **dsh-md-notes** — DSH 的 MD 笔记管理插件：提供完整的 **MD 笔记管理器** 和 **MD 笔记编辑器**，对话内容可快速记入笔记。笔记可 **同步 Git 仓库** 维护。对话时可将笔记 **加入上下文**。
  `v0.13.0` · 引擎 `>=0.1.5-rc.2 <0.1.6` · [源码](https://github.com/XieZongChen/dsh-md-notes)
- **mosaic-memory-compress** — 为 DeepSeek Harness 提供基于自然遗忘曲线的就地对话压缩：近期对话逐字保留、中期结构化脱水（零 LLM 成本）、久远对话折叠为有界摘要对——有限记忆预算上的无限对话。
  `v1.3.4` · [源码](https://github.com/TuringCorp-net/mosaic-memory-compress)
- **@hr98w/dsh-memory** — 融合 Claude Code 的 Auto Memory 与 Codex 的 Session 记忆整理，为 DeepSeek Harness 提供简单、透明、上下文友好的长期记忆。
  `v0.1.4` · [源码](https://github.com/hr98w/dsh-memory)
- **dsh-claude-memory** — 只读桥接 Claude Code 已有项目记忆到 DSH：按 git 仓库根解析、注入前脱敏、按需检索工具，零依赖。
  `v0.1.0` · [源码](https://github.com/GodCC6/dsh-claude-memory)
- **@xxinchen/dsh-plugin** — Minta 记忆引擎的 DSH 原生接入层:合成官方 dsh-mcp-client 行、注册 minta-memory-governance 技能与 session-start 记忆预热,并提供 Minta agent 预设;19 个 MCP 工具由需单独部署的 Minta…
  `v0.2.2` · [源码](https://github.com/xinchen03/minta)
- **dsh-layered-memory** — dsh 长期记忆：对话自动蒸馏为原子事实、场景摘要与用户画像，每步模型调用前自动注入相关记忆。开箱零配置——BM25 + 向量混合检索，可选本地离线嵌入，chat/work 双族隔离。
  `v0.11.0` · [源码](https://github.com/JunNanLYS/dsh-layered-memory)
- **dsh-brainagent** — 受大脑启发的认知插件:情景、语义、程序与情绪记忆,带强化学习信号;目标栈支持时间触发器,好奇心驱动的自主网络研究与主动提议。
  `v0.9.28` · [源码](https://github.com/stas130286-blip/dsh-brainagent)
- **dsh-plugin-save-token** — 可逆的上下文瘦身插件：均匀 JSON 数组走 TOON 式无损表格化重编码，管道表按行号抽样保留窗口，90 秒内字节级相同的工具输出跨轮去重；每次替换都要通过双重门（压缩后 ≤72% 字节且估算 token 严格下降），原文落盘并以 `[save-token #id]` 标记，可用…
  `v2.4.1` · [源码](https://github.com/vibe-any/dsh-plugin-save-token)
- **@flowingspring/dsh-workspace-memory** — 为 DSH 提供工作区隔离的持久化记忆，让每个工作区拥有可检索、可审计、可纠错和可删除的独立记忆，并支持受控的全局记忆。
  `v0.2.15` · [源码](https://github.com/lgquan/dsh-workspace-memory)
- **dsh-hermes-memory** — DSH 上 hermes-agent 记忆机制的忠实移植（MEMORY.md / USER.md）：有界双记忆库（2200/1375 字符）、单个 memory 工具（add/replace/remove/batch 全有或全无）、每会话冻结快照注入与 nudge 提醒、DSH 原生 JSON 存储——零外部依赖、零…
  `v1.1.10` · [源码](https://github.com/isheng-eqi/dsh-hermes-memory)
- **@yushenghai/dsh-memory-plugin** — 为 DeepSeek Harness 提供人工记忆、自动对话保留以及图谱和向量排序召回的持久记忆插件。
  `v0.1.0` · [源码](https://github.com/yushenghai1106/dsh-memory-plugin)
- **dsh-memory-eternal** — 给 DeepSeek Harness 装上自研「第二大脑」：对话结束自动把值得复用的内容沉淀成本地 Markdown 知识卡（自研去重、CJK 检索、可 git 管理），设置页提供图形化知识库 + 交互式知识图谱（图例过滤、时间维、框选、合并、导入导出）。
  `v0.7.0` · [源码](https://github.com/EternalNight996/dsh-memory-eternal)
- **@co-engram/dsh** — 自进化团队记忆，以纯 Markdown 存于 Git：原生 Cordis 插件注册 38 个裸名记忆工具，并按每次组装动态注入 prompt-signals 段；含 RPE 强化、衰减与睡眠巩固；与 Claude Code（MCP）、OpenClaw 宿主共享同一数据仓；已对 DSH 0.1.0-rc.6 实测。
  `v0.6.0` · [源码](https://github.com/Co-Engram/Co-Engram)
- **dsh-env-profile** — DeepSeek Harness 的全局经验档案（Windows）：探测本地工具（含版本与 PATH 首个命中）、便捷路径、网络延迟与磁盘速度；从 session/event 折叠每会话统计；由 LLM 抽取持久知识条目；提供带 remember 的 env_profile…
  `v0.1.4` · [源码](https://github.com/Yvesgao/dsh-env-profile)
- **@vesna-strivozha-2026/dsh-llm-wiki** — 一个 Obsidian 风格的知识库：摄取资料，让 LLM 构建并维护互联 wiki，并基于它提问。
  `v1.0.6` · [源码](https://github.com/Vesna-Strivozha/DSH-LLM-wiki-plugin)
- **dsh-yuque-kb** — 把语雀文档作为 dsh 的外部记忆：对话中自动检索并注入相关文档片段，支持目录快照检索、云端全文搜索与在线阅读。
  `v0.1.1` · [源码](https://github.com/NyaaCaster/dsh-yuque-kb)
- **dsh-yogacara** — 以唯识心所与种子藏记录 agent 的状态，并以第一人称倾向写回提示词。
  `v0.2.1` · [源码](https://github.com/tancheng33/dsh-yogacara)
- **dsh-memory-triage** — DeepSeek Harness 记忆分诊插件：每轮对话结束自动判断条目保留或归档，把项目条目迁入 project 桶、全局条目留在总体记忆，合并近义重复条目，规则拿不准时用 LLM 兜底；自动动作只做可恢复的归档，永不直接删除。
  `v0.1.0` · [源码](https://github.com/AtinyFurina/dsh-memory-triage)
- **dsh-git-memory** — 基于本地 Git 的 DeepSeek Harness 长期记忆，提供中英文混合检索、带引用的上下文、事务式同步、预览与回滚。
  `v0.8.1` · [源码](https://github.com/seriousz158/dsh-memory)
- **@akslcw/dsh-negative-ledger** — 证据约束的负面知识账本：记录被证伪的路径（command_failed / file_missing）及其结果与前置条件证据，重复尝试时警告或拦截，证据变化后自动解除。
  `v0.1.2` · [源码](https://github.com/akslcw/dsh-negative-ledger)
- **dsh-memories** — 双账本跨会话记忆：自动把对话中的长期事实提取进 MEMORY.md，并维护项目进度账本 PROGRESS.md，每个新会话自动召回两本账。
  `v0.2.1` · [源码](https://github.com/jisi71/dsh-memories)
- **dsh-eli-mode** — 知识库驱动的 Agent 预设：wiki 长期记忆、网页知识库、管理页、可选界面润色。
  `v0.1.11` · [源码](https://github.com/CeilCelia/dsh-eli-mode)
- **dsh-recall** — 对话历史回忆：字面/模糊/语义三层检索全部历史会话的原始文本，完全本地离线——AI 再也不会忘记你说的话。一条命令安装（自带 `dsh.bundle.patch`），语义推理跑在 worker 线程。
  `v0.3.0` · [源码](https://github.com/Relistencode/dsh-recall)
- **dsh-file-memory** — DeepSeek Harness 分层文件记忆，提供工作区隔离的 USER/MEMORY 笔记、后台沉淀与混合会话召回。
  `v1.3.2` · [源码](https://github.com/aqsk-BLG/dsh-memory)
- **dsh-akn-plugin** — DeepSeek Harness 的本地优先 Agent 经验网络：从 trace 与实时 Manifest 蒸馏任务级经验，按 H0-H4 证据分级、按兼容性发现，经显式审阅后才晋升。
  `v0.2.0` · [源码](https://github.com/symmetryseeker/dsh-akn-plugin)
- **dsh-butler-memory** — PostgreSQL 持久个人记忆：MCP 记忆工具 + 可查看记忆与候选的 Web 面板。
  `v0.1.5` · [源码](https://github.com/AndyYang12345/dsh-butler-memory)
- **dsh-cue-bank** — 跨会话「触点记忆库」插件：自动从每轮对话提取任务/会话级触点与用户惯用词，存入全局持久记忆库；检测到话题切换时重新注入相关历史记忆（关键词或向量匹配）。
  `v0.1.0` · [源码](https://github.com/itr-del/dsh-cue-bank)
- **dsh-trilium** — 通过 ETAPI 把 Trilium 笔记库接入 agent，提供 20 个工具：记忆读写（remember/recall + 自动注入索引）、笔记管理（CRUD/克隆/属性/修订）、全文搜索、周报工作流、附件、日历笔记、备份导入，独立设置卡片，配置 0600 落盘。
  `v0.1.2` · [源码](https://github.com/MineRPi/dsh-trilium)
- **dsh-plugin-sodamem** — 基于 SodaMem 守护进程的双时间轴记忆：每轮组装提示词时注入检索结果，回合结束后自动写回，读路径不经工具调用也不额外调用模型；每条召回的事实都标注来源回合并带有效期，失效的事实不再被检索到。
  `v0.1.1` · [源码](https://github.com/SodaMem/dsh-plugin-sodamem)
- **dsh-memory-porter** — 把你在 Claude / ChatGPT 里已有的历史搬进 DSH：Claude 导出包里的 memories.json 零 token 瞬时入库，当前环境 Claude Code 记录免导出直读，历史对话用你在 DSH 里已配好的模型提纯。每条记忆都带由代码回原文核对的逐字证据——转述会被丢弃并计数，只在 AI…
  `v0.1.0` · [源码](https://github.com/Shiye-10Pages/dsh-memory-porter)
- **dsh-client-ui-obsidian-memory** — 基于本地 Obsidian/Codex 知识库的持久 AI 记忆：5 个 obsidian_memory_* 读写搜索工具，外加侧边栏知识库浏览器。
  `v0.3.2` · [源码](https://github.com/detongz/dsh-client-ui-obsidian-memory)
- **@memorylake/dsh-plugin** — 将 Memory Lake 作为 dsh 的持久记忆层：基于 memorylake CLI 的 memory_search、memory_remember、memory_forget 三个工具，会话状态行，以及引导安装/诊断 skills，与 Claude Code、Codex 插件共享同一…
  `v0.1.0` · [源码](https://github.com/memorylake-ai/memorylake-harness)
- **dsh-flomo-report** — 生成 AI 叙事的 DSH 会话报告（日报/周报/月报、任意区间）并同步到 flomo：单一可配置标签（默认
  `v0.1.1` · [源码](https://github.com/zhengjy01/dsh-flomo-report)
- **dsh-knowledge-base** — DSH 通用知识库插件：导入 md/txt/json/yml/docx/pdf、目录化管理、FTS5 全文检索（BM25）、Web 管理界面。
  `v0.1.5` · [源码](https://github.com/htcqp802/dsh-knowledge-base)
- **dsh-native-memory** — 基于 DSH 原生接缝的按工作区记忆：事实与有界常驻档案落在 storage-domain 的 JSON 单元上，写入经人工审批并带 `(sessionId, seq)` 引证，确定性召回 + session-query 全文检索历史会话——无外部服务器、无自建 SQLite。
  `v0.2.0` · [源码](https://github.com/highland0971/dsh-native-memory)
- **@zhujunpeng12/dsh-memory-system** — 面向 DeepSeek Harness 的本地优先持久记忆：在 pre-step 注入有预算上限的热记忆，使用精确匹配与中文二元 BM25 召回冷层，提供六个 Agent 工具，并以审批门禁、租约锁、恢复回执和只读治理与轨迹复盘候选保护写入。
  `v0.1.0` · [源码](https://github.com/zhujunpeng12/dsh-memory-system)
- **dsh-plugin-recall** — 跨会话记忆：全文检索所有历史会话（复用 ctx.sessionQuery 的 SQLite FTS5 索引），把最强匹配片段带回当前上下文。
  `v0.1.1` · [源码](https://github.com/truelove-dreamer/dsh-plugin-recall)
- **dsh-memory-vault** — 跨会话记忆库：remember / recall / forget 工具、每轮提示注入与设置页条目浏览。
  `v0.1.5` · [源码](https://github.com/flymysql/dsh-memory)

## 主题与外观 · theme（126）

- **@ash-qw/dsh-theme-prts** — 面向 DSH Web 的非官方明日方舟 P.R.T.S. 风格界面主题，提供外观预设、辅助功能与会话导航。
  `v2.5.0` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/ash-qw/dsh-theme-prts)
- **dsh-everforest** — 为 DeepSeek Harness Web/Desktop 提供 Everforest 配色：深色 / 浅色各硬 / 中 / 软共 6 套，以 token 覆盖层生效；Host 半部在 Client 加载前注入 boot 调色板，Web 的 loading 页与首帧即为 Everforest；设置页可选择色板与跟随系…
  `v1.0.0` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/FormalistBlue/dsh-everforest)
- **dsh-glass-ranswork** — DSH Web 界面的毛玻璃主题：磨砂半透明表面，可调不透明度、模糊半径与饱和度，支持氛围光与配色方案，并可设置自定义背景图片（填充、适应、拉伸、平铺、居中与裁剪），全部参数保存在设置页中。
  `v1.1.1` · [源码](https://github.com/rans725/dsh-glass-ranswork)
- **@xinxing1708/dsh-codex-style** — 为 Windows 上的 DSH 提供 Codex 风格深色界面，包含导航、项目与会话侧栏、模型和思考强度控件。
  `v0.1.4` · 引擎 `0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/xinxing1708/DSH-Codex-Style)
- **dsh-bloom-theme** — Bloom 莫兰迪主题：十款变体（黛蓝 mist、朱砂 cinnabar、桃夭 petal、天青 ripple、竹青 sage、赭石 stone、青金 lapis、琥珀 amber、落霞 aurora、青莲 lavender）基于 OKLCH 调色，明暗切换不跳变，顶栏一键切换，每套配色右侧标出处诗句，20 组「主色…
  `v0.18.2` · [源码](https://github.com/webkubor/dsh-bloom-theme)
- **dsh-claude-style** — 为 DSH Web GUI 复刻 Claude Code Desktop 的视觉与交互——象牙白/暖黑双画布、陶烬橙强调色、三字体排版、权限分段控件与品牌切换，以 CSS 覆盖与客户端 DOM override 实现。
  `v0.19.2` · [源码](https://github.com/Nwflower/dsh-claude-style)
- **dsh-plugin-shell-skin** — 开场动画、三张内置壁纸、最多九张上传壁纸与随机轮换，以及实时生效的面板与侧边栏透明度。
  `v0.2.1` · 引擎 `>=0.2.0 <0.3.0` · [源码](https://github.com/raven3005672/dsh-plugin-shell-skin)
- **dsh-claude-desktop-theme** — 面向 macOS 与 Windows 的 DeepSeek Harness（DSH）Desktop 0.2.0-rc.2 的 Claude Code Desktop 风格主题，提供紧凑侧栏与会话布局、浅色与深色主题、模型与推理强度控件，以及支持随机喷水、轻弹和摆尾互动的新会话页像素小鲸鱼。
  `v0.5.1` · [源码](https://github.com/zkforge/dsh-claude-desktop-theme)
- **dsh-simplify-theme** — 给 DeepSeek Harness 的极简主题：去投影去毛玻璃、收紧圆角、中性化气泡与交互态；并附带一组界面增强——侧栏归档分页与实时筛选、与输入卡片对齐的模型/思考等级控件、按回合绘制的子代理委派图、按数值着色的缓存命中与上下文占用、以及每轮回答的耗时。
  `v0.3.2` · 引擎 `>=0.2.0` · [源码](https://github.com/zdt3476/dsh-simplify-theme)
- **@zhubai0528/dsh-client-ui-aqua-community-fix** — Aqua 玻璃主题的社区维护分支，适配 DSH 0.2.1-rc.3：统一的一套玻璃布局（无需切换模式）、可调模糊与磨砂、面板后的实时流体或图片壁纸、页头统一为同一套玻璃卡片，以及一键完全还原原生界面的开关。承接 WYH66666666 的 Aqua 主题（DSH-Transparent-UI-Plugin…
  `v2.0.2` · 引擎 `>=0.2.1-rc.3 <0.3.0` · [源码](https://github.com/ZHUBAI0528/dsh-client-ui-aqua-community-fix)
- **dsh-any-background** — DeepSeek Harness 外观一体化工具。对 8 个界面区域分别调节透明度与毛玻璃模糊（主背景、侧边栏、卡片面板、输入框与控件、设置面板、对话文本框、轨迹页、产出物/高亮内容；安装 dsh-better-sidebar 后为 9 个）。用任意图片或视频做壁纸，配有拖动平移、滚轮缩放的位置编辑器与 5…
  `v0.3.10` · 引擎 `0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-alpha.2 || 0.2.1-alpha.3 || 0.2.1-alpha.4 || 0.2.1-alpha.5 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3 || >=0.2.0-rc.1` · [源码](https://github.com/Tkingxiao/dsh-any-background)
- **dsh-leafy-skin** — 叶绿色皮肤：把 DSH Web GUI 的 --dsw-* 调色板覆盖成浅色 / 深色两套叶绿配色，另有一层可关闭的样式层处理圆角、阴影与动效。
  `v0.2.1` · [源码](https://github.com/badai147/dsh-leafy-skin)
- **@iasiv5/dsh-skins** — DSH Web 多品牌皮肤热切换：OpenBMC、UEFI 与《凡人修仙传》非官方同人画作三套皮肤，各带明暗双态配色，附个人壁纸图库、双语标语与通透度调节，随时一键回到官方界面。
  `v1.5.16` · [源码](https://github.com/iasiv5/dsh-skins)
- **dsh-ui-appearance** — DeepSeek Harness 外观自定义:主题调色、壁纸与视频背景、半透明与毛玻璃。
  `v0.1.25` · [源码](https://github.com/TQSY114514/dsh-ui-appearance)
- **dsh-shanqi-theme** — 手绘山湖田园主题：按本地时间连续呈现晨昏昼夜，并让农人随当前展示对话的任务运行状态进出田间。插件架构参考 xikan0/dsh-outerwilds-theme。
  `v0.1.9` · [源码](https://github.com/moshangzhe/dsh-shanqi-theme)
- **dsh-theme-liquid-glass** — 适用于 DeepSeek Harness 的液态玻璃主题：输入卡片、气泡、队列坞、菜单与侧边栏带 SVG 边缘折射；半透明 token 覆盖，色调、不透明度、模糊与折射强度都有实时滑块；壁纸可自定义或使用内置动态壁纸；桌面版另把会话顶栏并入系统标题栏，并补了全屏按钮。
  `v0.5.0` · [源码](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass)
- **dsh-video-skin** — 把一段循环短片铺成聊天背景（可调透明度），启动时再播放一段有声片头动画。首次启动若为浅色主题，会一次性切到深色（附撤销提示）。
  `v0.1.3` · [源码](https://github.com/Something11235/dsh-video-skin)
- **dsh-dream-skin** — 一键换肤插件：8 套原创主题、背景壁纸（透明度/模糊）、强调色、主题包导入/导出+分享链接、收藏与随机，纯原生 token 系统接入。
  `v10.23.0` · [源码](https://github.com/RevolutionLA/dsh-dream-skin)
- **dsh-theme-palette** — DeepSeek Harness 的五套配色（黑白、暖砂、靛蓝、苔绿、自定义三色），明暗两模式各自用 OKLCH 重算整条色阶，并按配色求解文字与承载面的对比度；附配置导入导出短码与高对比档。
  `v1.9.7` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/zuoyunlai/dsh-theme-palette)
- **@taosee258/dsh-client-ui-skin-qingxiao** — 以《鸣潮》清宵为主题的 DSH Web 界面皮肤，冰蓝·青碧·月白配色，含剑气流光与可更换背景。
  `v0.4.1` · [源码](https://github.com/taoser258/dsh-client-ui-skin-qingxiao)
- **dsh-sky-window** — 为 DSH 网页工作区添加按城市当地时间变化的天空主题，支持太阳移动、日夜配色、浮云、时间预览与沉浸天空。
  `v0.1.3` · [源码](https://github.com/nickfast2025/dsh-sky-window)
- **@dsh-fly/dsh-plugin-fly-skins** — DeepSeek Harness Web UI 的四套配色：实心 / 玻璃 / 体积 / 霓虹，各含明暗两半。霓虹版在整窗场景光场上叠 46px 电路网格，并在模型运行时让一条激光扫描线扫过对话列（停止即消失）；侧栏工作区名为青色 HUD 标牌，界面拉丁字体内置 MiSans，侧栏字号固定 125% 且不随对话区缩放。
  `v0.2.7` · [源码](https://github.com/ethanchen669/dsh-plugin-fly-skins)
- **dsh-cyrene-theme** — 把 DSH Web GUI 换成昔涟（《崩坏：星穹铁道》）的粉白渐变毛玻璃主题，附带侧边栏可编辑的人格设定、昔涟表情包、新会话欢迎页形象，以及可开关 / 选图 / 轮换 / 调淡的整页背景图。非官方非商业同人作品；昔涟及相关美术素材版权归米哈游（miHoYo / HoYoverse）所有，与官方无隶属或背书关系。
  `v0.2.0` · [源码](https://github.com/berhbro/dsh-cyrene-theme)
- **dsh-warm-theme** — 五套低蓝光暖色配色，整体重着色 DSH 界面（含侧栏、浮层与阴影），零布局改动，卸载即还原。
  `v0.2.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/yrsxy/dsh-warm-theme)
- **@dsh-use/wallpaper-engine** — 把当前环境 Wallpaper Engine 壁纸放到 dsh Web 界面背后：scene 壁纸在浏览器内实时渲染（three.js 播放器 + Rust/WASM CPU 粒子模拟），视频与 web 壁纸原样播放，其余回退 preview 图，不需要安装 Wallpaper Engine 运行时。壁纸库从 Steam…
  `v0.8.2` · [源码](https://github.com/yu502950715yang/dsh-use-wallpaper)
- **dsh-cool-theme** — 主题插件 —— 支持深色/浅色外观切换，提供 34 款预设主题，支持创建/分享/导入自定义主题。
  `v0.9.3` · [源码](https://github.com/CoolTea001/dsh-cool-theme)
- **dsh-cutesnowgirl-background** — 在 Harness 工作区后播放静音循环视频，并在开屏动画结束后将输入区域显示为半透明。
  `v0.1.3` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/haihaiaicode/dsh-cutesnowgirl-background)
- **dsh-ccx** — 给 DSH 桌面版换上动态背景——10 种场景渲染器（银河、辉光地平线、层峦、云穹、极光电离层、黑洞、云列车、粒子成像、像素雕塑、闪烁方块）、壁纸与视频素材库、UI 表面分区透明，外加逐像素复刻的 Appearance 设置面板。
  `v0.8.9` · [源码](https://github.com/Witherwithwinter/dsh-ccx)
- **dsh-ascii-whales** — 在空白聊天背景中呈现 ASCII 鲸群与游鱼，提供中性毛玻璃输入框、可视化选色器、深浅色适配，以及鲸鱼、鱼群、栅格和尾迹参数设置。
  `v0.1.5` · [源码](https://github.com/Chael-Chael/dsh-ascii-whales)
- **dsh-nico-theme** — 可切换的 DSH 网页端液态玻璃主题——14 个面板在流体背景上变成磨砂玻璃，材质参数有滑杆，悬停时玻璃与面板内容一起倾斜。
  `v0.3.9` · [源码](https://github.com/more-nico/dsh-nico-theme)
- **dsh-plugin-wallpaper-engine** — 前置要求：DeepSeek Harness 0.1.5-rc.1+（DSH Desktop ≥ 2.0.7）且 dsh-better-sidebar ≥ 0.19.0，安装或更新本插件前请先更新两者。把当前环境 Wallpaper Engine 的 Video/Web 壁纸实时播放到聊天界面后方，Scene…
  `v1.4.0` · 引擎 `^0.2.0-rc.1` · [源码](https://github.com/elysia395/dsh-wallpaper-engine)
- **dsh-endfield-theme** — 《明日方舟：终末地》主题：炭黑与警戒黄的工业 HUD、在外壳渲染前注入的开屏动画、对话区背景，以及重新配色的 Windows 标题栏。侧栏品牌会改为「终末地工业 / ENDFIELD INDUSTRIES」，可用 URL 参数还原。
  `v1.6.0` · [源码](https://github.com/Longxiangjunlin/dsh-endfield-theme)
- **@nonamelego/dsh-catppuccin** — DSH Web GUI 的 Catppuccin 主题插件：Latte、Frappé、Macchiato、Mocha 四套主题接入原生主题系统，一键切换并记住选择；另附可开关的玻璃质感皮肤，顶栏、侧边栏、输入框、统计行与轨迹视图的磨砂玻璃效果可自由调节。
  `v0.6.4` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/NoNameLeGo/dsh-catppuccin-theme)
- **dsh-opencode-palette** — 将opencode的38款主题搬进DSH，明暗兼收：东京之夜沉静、卡布奇诺轻柔、禅燃护眼；另备25款主题胶囊，原神、原神·夜航、库洛米、哆啦A梦、HelloKitty、哈利波特、赛博朋克2077、龙珠、火影忍者、火影忍者·暗部、海贼王、宝可梦、美少女战士、星球大战、变形金刚、奥特曼、塞尔达传说、超级马里奥、超级马里奥·…
  `v2.1.10` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/FeatherHunter/dsh-opencode-palette)
- **dsh-kimino-theme** — 《你的名字。》主题：电影壁纸、彗星蓝玻璃拟态、电影 Logo 替换与统一滚动条。
  `v68.4.2` · [源码](https://github.com/niiang/dsh-kimino-theme)
- **dsh-theme-tuner** — 在「外观」下增加一个主题调节面板，可自定义强调色/背景色/前景色/对比度/渐变度，并实时生效。
  `v0.1.4` · [源码](https://github.com/shawnlone/dsh-theme-tuner)
- **dsh-umbrella-theme** — 生化危机保护伞公司主题，提供明暗双外观、自转保护伞水印与 HUD 装饰。
  `v1.0.1` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/CloudSen/dsh-umbrella-theme)
- **dsh-ivory** — DSH Web 暖中性色明暗主题，支持响应式布局、双语设置、安全 Markdown 预览、内容块复制与无遥测运行。
  `v0.2.17` · [源码](https://github.com/ZJUZhiyuCai/dsh-ivory)
- **dsh-wallpaper-bg** — DSH 网页界面与桌面端的独立壁纸背景：内置壁纸、本地图片/视频上传（存 IndexedDB）、只读接入当前环境 Wallpaper Engine 壁纸库（需仓库自带的 wallpaper-engine-api 服务）；支持图片、视频与场景工坊预览渲染，可调浅色雾层/深色遮罩、模糊、亮度与安全放大，并可只读跟随桌面壁纸。
  `v0.5.16` · [源码](https://github.com/nishuoyang/dsh-wallpaper-bg)
- **@smalltailqwq/dsh-client-ui-skin-maid-atelier** — DSH Web 鲸鱼娘皮肤系列（深海女仆工坊 maid-atelier）。
  `v0.1.9` · [源码](https://github.com/Small-tailqwq/dsh-deep-whale)
- **dsh-theme-liuguang** — 给 DSH 界面的两套可切换设计语言：内部发光的液态玻璃，与米色/血红/墨黑的苏联构成主义海报；附带个性化面板、投放式 CSS 皮肤包与 7 种表情的鲸鱼娘桌宠。
  `v0.3.0` · [源码](https://github.com/ShokouP/dsh-theme-liuguang)
- **dsh-outerwilds-theme** — 以《星际拓荒》为主题，提供静态星空、篝火动效、外观设置和内置 Jost 与思源黑体。
  `v0.1.6` · [源码](https://github.com/xikan0/dsh-outerwilds-theme)
- **dsh-whale-particles-bg** — 为 DSH Web 界面加的一层动态鲸鱼背景：由鲸鱼剪影采样出的粒子场，加上一层点阵网格，两者都是挂在 shell.overlay 上的全屏点击穿透 canvas；粒子加载时聚合、空闲时呼吸、指针靠近时被推开，网格点靠近指针会放大，配色跟随页面明暗主题。
  `v1.0.0` · [源码](https://github.com/kviiinh/dsh-whale-particles-bg)
- **open-sea-skin** — 实时 WebGPU 海洋皮肤，可快捷调节波浪、日光、玻璃不透明度与自动昼夜循环。
  `v1.2.6` · [源码](https://github.com/d-dev0101/open-sea-skin)
- **dsh-catppuccin** — 🐱 Catppuccin 主题插件：充满活力、令人放松的柔和彩色主题。遵循官方 26 色粉彩盘，🌻 Latte / 🪴 Frappé / 🌺 Macchiato / 🌿 Mocha 四档一键切换，全界面按色盘上色，鼠标滑过交互变主题色。
  `v0.2.6` · [源码](https://github.com/zhijun-dai/Catppuccin-dsh-theme)
- **@leon___/dsh-client-liang-intensity-skin** — 自适应推理等级滑块皮肤，将当前模型可用档位映射到 0–30 视觉强度，并同步人物、背景和界面配色。
  `v0.1.12` · [源码](https://github.com/kingOfSoySauce/dsh-liang-skin)
- **dsh-skin-win2000** — 给 DSH Web GUI 换上 Windows 2000 桌面外观：按度量表还原的灰色控件、双色渐变标题栏、1px 立体边框、直角、16px 滚动条，以及由插件自身路由提供的点阵字体。
  `v1.3.1` · [源码](https://github.com/lildanger/dsh-skin-win2000)
- **ds-hentai** — ExHentai 皮肤 for DeepSeek Harness。DS Hentai / DeepSeek Hentai，深炭底、浅灰文字、灰色边框；会话列表像画廊索引，发送框像搜索栏。预览Demo：https://dshentai-demo.arkady14.site/
  `v0.7.1` · [源码](https://github.com/lisongxuan/ds-hentai)
- **dsh-bloomglass** — DeepSeek Harness Web 主题：十套 OKLCH 中国传统色配色、明暗自适应；可选一张壁纸铺满窗口、界面以磨砂玻璃叠上去；已适配 DS Bot（Bot 团队）界面；配色与壁纸都本地持久化。
  `v1.0.3` · [源码](https://github.com/CosmoSail/dsh-bloomglass)
- **dsh-background-by-model** — 按模型切换 DSH Web 界面外观：有序规则列表按当前会话的模型名匹配，每条规则自带壁纸、主题色、布局模式、取景与背景透明度、模糊；另有主背景、左侧栏、右侧栏、卡片面板、输入框与控件、设置面板、对话文本框、轨迹页的分区透明度与毛玻璃模糊。
  `v0.9.1` · 引擎 `>=0.2.1-alpha.2` · [源码](https://github.com/HarmlessFunny/dsh-background-by-model)
- **@istarry/dsh-ui-liquid-glass** — DSH 全液态玻璃皮肤：13 个可调折射液态玻璃面、随时段轮换的壁纸、四档主题色、选中项带水滴状高亮飞镜。
  `v0.1.0` · [源码](https://github.com/iStarryDust/dsh-ui-liquid-glass)
- **dsh-official-homepage-theme** — 复刻 DeepSeek Harness 首页视觉的 Web 主题，提供流体背景、鼠标弹性网格、动态小鱼与可调节效果。
  `v1.0.11` · [源码](https://github.com/JohnnyTing/dsh-official-homepage-theme)
- **dsh-arknights-theme** — 明日方舟主题：12 张整屏壁纸，边缘虚化、羽化与玻璃浓度按每张图分别计算；文字色以 OKLCH 求解并守住 WCAG AA 下限；界面图标换成罗德岛素材；授权卡与选项卡带干员签名。
  `v1.0.3` · [源码](https://github.com/Theflowyears/dsh-arknights-theme)
- **dsh-theme-endfield** — 《明日方舟：终末地》工业编辑风主题：奶油纸底、墨黑文字、全局直角，两套强调色配色（谷地黄信号黄 / 武陵青青碧色）可在设置切换，另有可选的等高线地形背景、ENDFIELD 水印与启动加载屏。
  `v1.2.3` · [源码](https://github.com/ymh0000123/dsh-theme-endfield)
- **dsh-markdown-xyy** — 对话 Markdown 主题插件——4 套内置主题（浅/深双档）、可自行编辑的 CSS 用户主题、跟随系统自动切换、内置编辑器（语法高亮 + 保存校验）、选中主题在刷新与新标签页后保持，并附带版本台账面板；支持 Windows 与 DSH Desktop。
  `v2.1.5` · 引擎 `>=0.1.6-alpha.2 <0.3.0-0` · [源码](https://github.com/mengnanxyyyy/dsh-markdown-xyy)
- **@dsh-electron/dsh-theme-studio** — 在「设置 → 通用」的官方「外观」与「字号」之间注入「主题」行：8 套内置配色 + 默认项，悬停预览不写盘、点击应用并由 Host 持久化；支持导入/导出自定义 dsh-theme.json 主题文件，另有可选的 Theme Creator skill（/dsh-theme-creator）。
  `v0.1.5` · [源码](https://github.com/cherrchen/dsh-theme-studio)
- **dsh-vscode-themes2** — 在 DeepSeek Harness Web UI 中浏览、搜索、安装并应用 VS Code 配色主题：内置 14 款精选主题并带实时色卡预览，可搜索官方 VS Code 插件市场安装更多主题，一键安装会把任意主题的调色板映射到 DSW 设计令牌，支持实时切换与选择持久化。
  `v1.1.0` · [源码](https://github.com/zxbc/dsh-vscode-themes2)
- **dsh-xiao-theme** — 面向 DeepSeek Harness Web 与 Desktop 的魈角色主题，提供明暗配色、可切换立绘、可拖动伙伴、会话状态反馈及可选的官方 DeepSeek 余额展示。
  `v1.2.1` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/Xian-JL/dsh-Xiao-theme)
- **dsh-kinich-theme** — 面向 DeepSeek Harness Web 的 Kinich 与 Ajaw 主题，提供三种视觉风格、会话状态反馈、伙伴交互和可配置的动态环境效果。
  `v2.0.2` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/Xian-JL/dsh-Kinich-theme)
- **dsh-theme-songgrid** — 宋律 Songgrid —— 宋代美学主题，宣纸（浅）与夜墨（深）双变体；汝窑天青承担交互态、窑铜只用于引用块；另附 4pt 间距阶与 46 个 mask 图标。
  `v0.1.7` · [源码](https://github.com/yefengliu1/dsh-theme-songgrid)
- **dsh-theme-manager** — DSH Web 两级主题管理器：先选文化 / 场景、国旗、开发者配色或强烈对比配色，再选具体风格，内置 58 套浅色 / 深色配色。
  `v1.3.1` · [源码](https://github.com/runcat-tommy/dsh-theme-manager)
- **dsh-qq-skin** — 为 DeepSeek Harness 打造的 QQ NT 皮肤：浅色与深色共用一套 QQ NT 语言——浅色干净克制（品牌蓝 #12B7F5、浅蓝气泡），深色为沉稳蓝灰（#101822）——以可逆的 token 与布局两层实现，不改变你的浅色/深色偏好。
  `v0.2.0` · [源码](https://github.com/lispking/dsh-qq-skin)
- **dsh-client-ui-paopaocat** — 为 DSH Web 界面打造的奇幻玻璃拟态皮肤：月光冥界森林，青绿流云缓缓翻涌、绯红彼岸花自左下蔓延、角落里趴着一只睡猫，底层是 WebGL2 流体；另有自定义壁纸与视频背景。内置两套可一键切换的风格（淡雅 / 蓝色），并有猫爪、小鱼、泡泡、星光装饰。一个开关即可完全还原原生界面。
  `v0.3.4` · [源码](https://github.com/zmm863-commits/dsh-client-ui-paopaocat)
- **dsh-deepseek-style-theme** — 为 dsh web GUI 复刻 DeepSeek 官网风格的主题皮肤：流体粒子背景、玻璃拟态侧边栏与输入框、运行中子代理面板与 DSTT 高峰时段配色。
  `v2.1.93` · [源码](https://github.com/Lichtspur/deepseek-style-theme)
- **dsh-codefall** — 为 DeepSeek Harness 添加黑客帝国风格的数字雨开屏动画、向两侧展开的矩形光门、可选的窗口恢复重播，以及可调色相的绿色界面主题。
  `v0.2.0` · [源码](https://github.com/4444Hao/dsh-codefall)
- **dsh-theme-mineradio** — Mineradio 玻璃拟态 DSH 网页主题：香槟金玻璃面板、流体或壁纸背景，一键开关即可还原原生界面。
  `v3.0.5` · [源码](https://github.com/dhicoc/dsh-theme-mineradio)
- **dsh-theme-mediascape** — DSH Web UI 媒体景观主题：立绘/视频壁纸（mp4/webm，本地+在线）+ 开屏动画 + 基底配色（单真源 JSON + 预设包 + 取色器 + 胶囊宿主元素样式）+ 氛围粒子 + 背景音乐播放器（封面/歌单/随机）+ 打字音效 + 可拖动 dock 工具条；dock「传」统一上传壁纸与音乐（按文件后缀识别）…
  `v1.1.2` · [源码](https://github.com/EIGHTfs/dsh-theme-mediascape)
- **dsh-wallpaper_share** — 把 Wallpaper Engine 当前应用的壁纸经本地桥接同步为 DSH Web 界面背景：预览/捕获/完整三档渲染、显示器锁定、本地与市场壁纸库面板、专注透镜与眼动追踪、沉浸模式，以及支持直链与网盘分享链接安装、一键启动的 Windows 应用启动器。
  `v26.10.13-D` · [源码](https://github.com/YRN-playmaker/dsh-wallpaper_share)
- **dsh-theme-windowsxp** — 把 DSH 换成 Windows XP：Luna 蓝皮肤（米色面板、渐变按钮、#7F9DB9 输入框、圆角蓝色滚动条、纯 CSS 绘制的 Bliss 风格桌面），外加一轮跑完时的提示音，以及智能体停下来等你批准时的另一种提示音。
  `v0.1.0` · [源码](https://github.com/liyy996/dsh-theme-windowsxp)
- **dsh-joi-channel-theme** — 轴伊 Joi 双衣装主题：Flowers 与 Library 是各自成套的明暗令牌体系，新会话页有立绘与趴在标题上的鲸鱼娘，输入框上方两只 Q 版角色随本回合状态换表情，侧栏字标换成二人合影，上下文占用由一颗渐熟的橘子表示；第三张卡可在保持插件安装的前提下切回 DeepSeek 原生外观。
  `v0.1.14` · [源码](https://github.com/tpmoonchefryan/dsh-joi-channel-theme)
- **dsh-skin-rotation** — 每次启动 DeepSeek Harness 时随机启用一个已安装皮肤，并在「设置 → 皮肤」页内提供开关与「立即随机换一个」按钮。宿主会拒绝加载的皮肤自动排除；手动切换的皮肤一直有效到下次启动。
  `v2.0.1` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/luoyuejun9/dsh-skin-rotation)
- **beauticode-dsh** — 为 DSH Web 与 Desktop 设置本地图片与 MP4 视频背景（也支持 Codex、Cursor、豆包、WorkBuddy）：侧栏「背景」面板、可保存命名主题、声音开关、恢复上次背景、只留背景的摸鱼模式，以及 /bg、/bg-theme、/bg-clear 命令。
  `v1.0.30` · [源码](https://github.com/starsstreaming/beautiCode)
- **@hjbztlbr/dsh-client-ui-skin-verdandi** — 一款以《深空之眼》薇儿丹蒂为主题的 DSH Web UI 皮肤，包含昼夜背景、誓约婚礼装饰、响应式角色立绘，以及主题化的会话区与侧边栏。
  `v0.1.7` · [源码](https://github.com/Sddft97/dsh-client-ui-skin-verdandi)
- **dsh-csdn-theme** — 把 CSDN 博文的配色与正文排版搬进 DeepSeek Harness 网页端：标题层级、引用块、实线网格表格、行内代码与 Atom One 语法高亮，浅色深色各一套。
  `v0.2.3` · [源码](https://github.com/d0ublecl1ck/dsh-csdn-theme)
- **dsh-deepseek-theme-studio** — DSH Web GUI 客户端主题插件：流体背景、毛玻璃面板与量子化着色器效果，100 项参数可调并持久化到 JSON 文件。
  `v0.1.3` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/tuibe/dsh-deepseek-theme-studio)
- **dsh-themes** — DSH Web UI 外观与主题插件：内置调色板、明 / 暗 / 跟随系统外观模式、Open VSX 主题搜索导入与 VS Code 主题导入，主题库持久化。
  `v0.2.1` · [源码](https://github.com/MangMax/dsh-themes)
- **dsh-whale-atelier** — DSH Web 界面全屏鲸鱼皮肤包：多层壁纸、金/银描边、蕾丝蝴蝶结、随 Agent 状态反应的角落立绘与环境粒子，并支持可安装的第三方皮肤包格式。
  `v1.1.0` · [源码](https://github.com/Cicero010/dsh-whale-atelier)
- **dsh-client-ui-wallpaper** — 把当前环境图片/视频（含 Dynamic Wallpaper.app 素材）用作 DSH 桌面客户端背景：定时轮换与 0.7 秒交叉淡化、等首帧就绪再淡入、按壁纸明暗自动切换深/浅字色、模糊与面板/侧栏透明度可调、视频缩略图，探针接口上报加载、图层与界面选择器的健康状态。只读取当前环境文件，不联网。
  `v1.1.8` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/gnk478/dsh-client-ui-wallpaper)
- **@hmkk/dsh-appearance** — 轻量的 DSH 字体与主题插件：中英文与代码字体选择器（只列当前环境已安装的字体），以及 One Dark Pro、Dracula、Nord、GitHub、Catppuccin 五套官方色板预设，全部走官方主题 token（含代码块语法高亮），不打包字体、零依赖、零构建。需要 DSH 0.2.0-rc.2 或更新。
  `v0.1.0` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/LX-HMKK/DSH-appearance)
- **@xiaotuchu/dsh-theme-eye-care** — 三套可切换的低刺激护眼配色（暖纸、豆绿、暖灰），每套都是完整的别名 token 层，含浅色与深色两副面貌。
  `v2.1.0` · [源码](https://github.com/xiaotuchu/dsh-theme-eye-care)
- **dsh-theme-herta** — 给 DeepSeek Harness 的黑塔主题：移植自上游 Herta 项目的开机 ASCII 开场、一整套紫罗兰设计令牌、可替换的壁纸（自带四张，也支持图片网址 / 当前环境导入 / 纯色 / 关掉），以及 DSH 设置里的「黑塔外观」页。它同时就是 dsh-herta 自带的那套主题。
  `v0.1.0` · [源码](https://github.com/HerTa-st/dsh-theme-herta)
- **xiao-ui-theme-ts** — 为 DSH UI 提供完全自定义的主题框架，默认主题为原神魈。
  `v0.13.2` · [源码](https://github.com/jinxlux/xiao-theme-dsh-ui-plugin)
- **dsh-theme-escook** — 移植自 VS Code 经典的彬哥主题：包含 4 款经典美学配色（经典暗黑、柔和暗黑、紫韵浅色、柔和浅色）与高对比度语法高亮。
  `v1.0.6` · [源码](https://github.com/Simon-yyy/dsh-theme-escook)
- **dsh-client-ui-dracula** — DSH Web GUI 的 Dracula（VS Code 吸血鬼）深色主题：把产品自身的配色令牌映射到德古拉调色板，并附更紧的字号阶梯、1080px 正文列宽与不折行的代码块。仅深色模式。
  `v1.0.0` · [源码](https://github.com/Erbsen16/dsh-client-ui-dracula)
- **dsh-appearance-gallery** — 15 个精选主题家族 + 9 个完整 dsh-web-ui 皮肤复刻合并为单一插件、设置页单一入口，支持 CSS-only 自定义主题 JSON、受控自定义皮肤包导入（可直接选文件夹）、试穿、应用、删除与恢复默认。npm 包名 `dsh-appearance-gallery`。
  `v1.0.2` · [源码](https://github.com/wsxwj123/dsh-plugins)
- **deepseek-harness-background** — DSH Web 自定义背景插件：上传本地图片或粘贴图片链接作为全界面背景，可调不透明度、明暗自适应遮罩、面板透明度、毛玻璃与壁纸模糊，实时预览、设置持久化；另附可选的 DeepSeek 官网风格会话时间线导航轨，支持重点书签与快速跳转。
  `v0.6.1` · [源码](https://github.com/HaoyueQin/deepseek-harness-background)
- **dsh-pixel-skin** — 宝可梦风格 DSH Web 皮肤，含 GBA 双边框、HP 条状态、推理等级面板与可自定义配色。
  `v2.3.0` · [源码](https://github.com/zhuifengqug/pixel-skin)
- **dsh-theme-native** — 基于原生令牌的 DeepSeek Harness 主题插件，提供十套预设、自定义配色与系统字体选择。
  `v0.1.2` · [源码](https://github.com/BarneyZhaoooo/dsh-theme-native)
- **dafy-whale-theme** — 海洋蓝主题：游动鱼群、上升气泡、输入框上方的「每日鱼语」，以及左上角品牌区替换；「设置 → 海洋主题」提供 7 组 32 项可调（品牌文字与字号、徽章、主色、水印、鱼群、语录、整体缩放），改动即时生效无需刷新，并带二次确认的一键恢复默认。
  `v2.1.0` · [源码](https://github.com/yryd/dafy-whale-theme)
- **dsh-skin-lab** — 皮肤作者工作台：官方 token 浏览器（169 个 --dsw-* 变量，带中文描述与模块标签）、实时试穿、皮肤持久保存、主题固化、7 套光谱预设与 SVG 背景图，以及自定义背景上传。
  `v1.0.4` · [源码](https://github.com/soarGuo/dsh-skin-lab)
- **dsh-style-hub** — DSH Web GUI 主题工坊：可切换预设风格、强调色与面板透明度微调、宿主壁纸首帧绘制；wallpaper-engine 玻璃色把浅色主题洗灰时一键改为白色玻璃。
  `v0.1.0` · [源码](https://github.com/Au1314/dsh-style-hub)
- **dsh-f1-skin** — 一款适用于 DSH Web 的 F1 赛事控制中心主题，提供四支车队皮肤、赛事摄影背景、浅色与深色模式及原生外观设置。
  `v0.4.0` · [源码](https://github.com/frank-fan-818/dsh-f1-skin)
- **dsh-neu-theme** — DSH Web 轻拟物主题：提供浅色与深色配色、环境光影、材质阴影、纹理、磨砂玻璃表面与微交互。
  `v0.1.2` · [源码](https://github.com/Lhy723/dsh-neu-theme)
- **dsh-client-ui-seaglass** — Seaglass是一个高自由度的玻璃质感主题。
  `v1.6.7` · [源码](https://github.com/xiyunyunyun/dsh-client-ui-seaglass)
- **dsh-kaze-tachinu-theme** — 宫崎骏《起风了》主题皮肤：全屏电影壁纸配毛玻璃界面，交互色统一为天蓝，侧边栏与首页改用自绘矢量徽标，输入卡重绘为主题化占位文案的云海蓝胶囊，并为消息列加 40px 底部渐隐。
  `v1.0.0` · [源码](https://github.com/suuuuunamei/dsh-kaze-tachinu-theme)
- **dsh-yorha-ui** — 一款面向 DeepSeek Harness Web 的 NieR:Automata / YoRHa 风格工业终端主题，提供沙色与炭黑配色、直角几何和全界面样式。
  `v0.1.1` · [源码](https://github.com/MrmoLabs/dsh-yorha-ui)
- **dsh-theme-macintosh** — 经典麦金塔 System 7 像素风主题：桌面网点画布、Finder 侧栏、黑白按钮与弹窗，深浅色随官方外观切换。
  `v0.1.2` · [源码](https://github.com/fengb3/dsh-theme-macintosh)
- **dsh-plugin-harness-whale** — DSH Web 动态点阵鲸鱼壁纸：约 1,750 个呼吸的 WebGL2 粒子，指针液态涡流交互，明暗双主题，带 Canvas2D 回退。
  `v0.2.0` · [源码](https://github.com/HeShen-1/deepseek-whale-wallpaper)
- **@jonahwu/dsh-bg-carousel** — 把媒体目录中的图片与视频自动轮换为 DSH 界面背景，面板可调轮播间隔与界面透明度。
  `v0.3.0` · [源码](https://github.com/Jonah-Wu23/dsh-bg-carousel)
- **@yuquexianzhou/solarized-dsh-theme** — Solarized 主题插件：经典低对比护眼配色双体系——Ethan Schoonover 的 Solarized 与 Selenized（改良版）深浅各一套，专为长时间使用设计，遵循经典语法色。
  `v0.2.2` · [源码](https://github.com/zhijun-dai/Solarized-dsh-theme)
- **@dsh-plugin/dsh-thought-buddy** — 在「Deep diving...」状态提示前，放一只动态小伙伴——GrokBot 风格动画头像，状态文字还会同步打字机变换。
  `v0.3.3` · [源码](https://github.com/dsh-plugins/dsh-thought-buddy)
- **@pakiknowledge/dsh-client-ui-skin-claude** — Claude 风格皮肤：暖黑画布、陶橙点缀、衬线 UI，跟随原生亮/暗主题。
  `v0.2.1` · [源码](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude)
- **dsh-dracula-theme** — DSH Web GUI 的德古拉主题插件：经典暗色配色与 Soft 变体接入原生主题系统，一键切换并记住选择。
  `v1.1.0` · [源码](https://github.com/ossFrankFrank/dsh-dracula-theme)
- **dsh-icon-theme** — 为 DSH 设置和侧边栏自动分配并支持自定义的 Fluent 风格图标，离线内置 SVG，默认保留插件原图标。
  `v0.2.3` · [源码](https://github.com/yzke/dsh-icon-theme)
- **@dennisrongo/dsh-theme** — 为 DSH Web 界面提供 12 套精选配色、8 种强调色、对比度滑块与字体/缩放覆盖，并内联首帧脚本防止主题闪烁。
  `v0.1.0` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **dsh-theme-firefly** — 崩坏：星穹铁道「流萤」主题：立绘/动态壁纸、萤火绿霓虹配色、开屏变身动画、萤火氛围粒子、背景音乐、打字音效与按对话触发的表情包彩蛋。
  `v0.1.3` · [源码](https://github.com/Liu-ZA-81/dsh-theme-firefly)
- **dsh-shunshun-wallpaper** — 以网络主播张顺飞为主题的粉丝同人二创壁纸插件：彩色飞马高清旋转动图全屏壁纸，支持主题融合与突出度调节；附带 B站音乐播放器，可粘贴链接添加歌曲、删除、调音量、拖进度条、切换单曲/列表/随机循环，并有侧栏迷你播放器。
  `v1.0.4` · [源码](https://github.com/Ddamage/dsh-shunshun-wallpaper)
- **dsh-ui-liteglass** — DeepSeek Harness 轻量级外观皮肤：自定义壁纸、玻璃质感面板与重点色；服务端持久化、多设备一致，不接管原生深浅色。
  `v0.1.0` · [源码](https://github.com/mumuer1024/dsh-ui-liteglass)
- **dsh-client-ui-skin-real-madrid** — 皇家马德里双模式皮肤：暗色为夜场伯纳乌全景，亮色为纯白主场暗纹，队徽与 1902 背号作为背景层（非官方球迷作品）。
  `v1.1.0` · [源码](https://github.com/alexfengrui/dsh-client-ui-skin-real-madrid)
- **@danielng23/dsh-edex-xry-ui** — 以 XRY/B1 医疗 HUD 为主题色的 eDEX-UI 风格 DSH 外壳：右侧 ECG 心电波形与旋转雷达扫描盘、左侧能量条仪表、底部 DATA TIMELINE 扫描日志表，青蓝近黑 CRT 皮肤包裹原始界面。
  `v0.1.2` · [源码](https://github.com/ph4310822/dsh-edex-xry-ui)
- **dsh-skin-token-dashboard** — 为 DeepSeek Harness Web 与桌面端提供两套可切换主题、内置及本地文件夹背景轮播和逐会话 Token 用量明细。
  `v0.1.0` · [源码](https://github.com/Smith-yue/harness-plugin)
- **dsh-theme-customizer** — DeepSeek Harness Web 界面自定义主题插件：背景/文字/框线/细节全可视化调整，可导入导出预设，持久化保存。
  `v1.0.5` · [源码](https://github.com/lxxz1918/dsh-theme-customizer)
- **dsh-theme-whalegirl** — 移植自 DreamSkin 皮肤包的鲸鱼娘亮色主题：在原生主题运行时注册一套完整 --dsw-* 令牌重映射，鲸鱼娘插画作为环境壁纸衬于磨砂玻璃界面之后，并通过主题变更守卫保持主题固定。
  `v0.2.0` · [源码](https://github.com/ZHOUcourier/dsh-theme-whalegirl)
- **claude-style-skin** — Claude 风格暖调编辑 DSH Web 皮肤：象牙白/暖黑双画布、陶烬橙点睛、衬线标题+无衬线界面+等宽标签、发丝线与胶囊 CTA，亮暗双主题跟随系统。
  `v0.1.1` · [源码](https://github.com/TaiyakiOffical/claude-style-skin)
- **dsh-minecraft-ui** — 将 DSH Web 直接呈现为可游玩的全屏第一人称 Minecraft 风格体素界面，而非只更换颜色的皮肤：用户可以在可持久化的 Three.js 方块世界中移动，并通过游戏内设施和工作台使用原生工作区、会话、对话、工具、模型选择、权限、上下文信息与输入框。
  `v0.3.0` · [源码](https://github.com/TFboy1/dsh-minecraft-ui)
- **dsh-thirteen-bg** — DeepSeek Harness Web 界面动态壁纸插件：支持 GIF / 动图 WebP / APNG 与静态 PNG/JPG 图片，以及 MP4 / WebM 视频背景，格式自动识别，自带压暗与亮度调节，可让界面色调跟随背景。
  `v0.5.2` · [源码](https://github.com/feng78-boop/dsh-thirteen-bg)
- **dsh-arknights** — DSH Web 明日方舟同人皮肤“初雪和小羊”，包含昼夜星海庭园背景与双角色布局。
  `v0.1.0` · [源码](https://github.com/DocJlm/dsh-arknights)
- **dsh-wallpaper** — Wallpaper Engine 壁纸联动：把当前环境下载的 WE 壁纸（创意工坊 431960 + 本地 projects）设为 DSH Web GUI 页面背景（图片/视频/网页原样渲染，场景壁纸柔化为静态预览），侧边栏「壁纸设计」面板可调不透明度、作用范围、填充、模糊、暗角、帧率、视差、轮播与主题联动，附…
  `v0.1.3` · [源码](https://github.com/codeMonkey-Pine/dsh-wallpaper)
- **dsh-theme** — DSH Web UI 主题包：30 款即插即用的 CSS 主题，每款含浅色与深色变体，集成于「设置 → 通用」，并提供程序化 API。
  `v1.0.1` · [源码](https://github.com/mux9056-bot/dsh-theme)
- **dsh-blue-whale** — 复刻 DeepSeek Chat 蓝鲸配色的皮肤，亮色/深色跟随系统外观。
  `v0.1.0` · [源码](https://github.com/starslittle/dsh-blue-whale)
- **dsh-wallpaper-skin** — dsh Web 界面的持久化壁纸皮肤：静态图片或静音循环视频作为应用背景，面板半透明化，右下角悬浮面板一键换壁纸。
  `v1.4.1` · [源码](https://github.com/ddbj-hub/dsh-wallpaper-skin)
- **dsh-diorama** — 角色皮肤舞台：雪乃·暖阳日常与隐秘年代志双主题，各带双角色立绘与表情贴纸；可视化装饰看板支持拖动/缩放/旋转/坐标精调/锚定切换/上传素材，装饰包（素材+布局）可导出分享、导入后自动打开看板继续调整。
  `v0.1.0` · [源码](https://github.com/ZaVang/dsh-diorama)
- **dsh-oh-my-theme** — DSH Web 主题与文件工作台：全局字体设置、@ 文件引用、项目文件树、Markdown 预览和可拖拽侧边面板。
  `v0.6.0` · [源码](https://github.com/zhxqc/dsh-oh-my-theme)
- **dsh-liquid-glass** — 一键让整个 DeepSeek Harness 界面通透起来：透明度滑块随心调，背景图自由换。
  `v0.1.0` · [源码](https://github.com/Ultronen/dsh-liquid-glass)
- **dsh-anthropic-fonts** — Anthropic Sans/Serif/Mono 字体：界面 Sans、对话 Serif、代码 Mono，中文回退思源字体。
  `v0.2.0` · [源码](https://github.com/Isilsolme/dsh-anthropic-fonts)
- **dsh-client-ui-theme-xp** — Windows XP Luna 桌面化主题：浮动窗口管理器（任务栏、桌面图标）加上还原度很高的 Luna 皮肤。
  `v0.1.1` · [源码](https://github.com/SamizuHM/dsh-client-ui-theme-xp)

## 通知与集成 · notify（125）

- **@zaofan/dsh-qqbot** — 接入 QQ 官方机器人的 DeepSeek Harness 通道(tencent-connect/dsh-qqbot 功能增强 fork): 群/私聊与完整 agent 对话、表情包图库(自动打标+AI 斗图)、群管理(入群审批/禁言)、botplay 互动事件卡与翻页目录、用户扩展注册表(自定义斜杠命令与 QQ…
  `v1.10.38` · [源码](https://github.com/zaofan-make/dsh-qqbot)
- **@michengai/dsh-im-connect** — 把微信、企业微信、钉钉、飞书、Lark、QQ、Telegram 接到当前环境 DeepSeek Harness，每个 IM 聊天对应一条独立工作区频道。
  `v1.0.17` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-im-connect)
- **dsh-onebot-hub** — OneBot v11 枢纽：夹在上游 OneBot 实现（LLOneBot 等）与下游 bot 实现之间，逐字转发事件与动作；给 agent 一条按会话的时间线、动作账本、分层记忆（进行中的话题与任务、长期事件、人物与群档案）以及一组 onebot_* 工具（回复、媒体、成员、原始 API 调用）。
  `v0.11.0` · [源码](https://github.com/Funny1Potato/dsh-onebot-hub)
- **dsh-bili-scroll** — 让你的 DSH 自己刷 B站 —— 读字幕原文挑内容、写日报，遇到值得看的会发评论 @ 你。
  `v2.1.0` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/c1overzz/dsh-bili-scroll)
- **dsh-bulletin-announce** — 同一台电脑上多个会话共用的公告文件：一个只许追加的纯文本文件。每个会话在下一步之前收到自己还没见过的条目；新会话补看仍在有效期内的；上下文被压缩过的会话会收到一次重发。
  `v0.3.25` · [源码](https://github.com/southsnowL/dsh-bulletin)
- **dsh-emacs-bridge** — GNU Emacs 与正在运行的 DSH 会话之间的双向桥：走当前环境回环 HTTP + SSE，可在 Emacs 里提交提示、流式收回复、管理会话与工作区、回答 ask-user / 审批提示；插件页还有一张卡片用来安装 Emacs 那边的包。
  `v0.19.1` · [源码](https://github.com/seewhydee/dsh-emacs-bridge)
- **dsh-notify-me** — 通知提醒 / 消息提醒 / 消息通知 / 桌面通知弹窗 / 桌面提醒 / 弹窗通知、弹窗提醒 / 任务提醒、任务完成提醒 / 后台提醒、回复完成提醒 / 审批提醒：模型需要你操作（审批、方案确认、提问）或任务、回复跑完时，弹出系统通知（可操作提醒、审批通知、完成通知）与提示音，并标记标签页标题；这是一款 DSH…
  `v1.14.2` · [源码](https://github.com/chromoany/dsh-notify-me)
- **dsh-notify-say** — 为 DSH 提供 Windows 桌面通知，默认把回合结果读出来：Windows TTS 零下载即可用，另有 13 个 VOICEVOX 语音包可在设置页下载。完成提醒会等子代理与后台任务结束后再响；审批、提问、出错立即提醒。语音包从 GitHub 下载，下载前需确认使用条款。
  `v0.5.2` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/unifilitence/dsh-notify-say)
- **@xmanrui/dsh-im** — 通过二维码或机器人凭据将 IM 机器人接入 DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord 和 WhatsApp 共 9 种渠道）。
  `v5.6.0` · [源码](https://github.com/xmanrui/dsh-im)
- **dsh-onebot-qq** — 给 dsh 加上 QQ 通道（OneBot 11，兼容 NapCat）：反向/正向 WS、私聊群聊、图片与语音转写、t2i 文字图卡片、合并转发、设置页可视化配置。
  `v0.9.6` · 引擎 `>=0.1.5-rc.1 <0.1.6-0 || >=0.1.6-alpha.1 <0.1.7-0 || >=0.1.7-alpha.1 <0.2.0-0 || >=0.2.0-rc.1 <0.3.0-0 || >=0.2.1-0 <0.3.0-0` · [源码](https://github.com/mario841859784/dsh-onebot)
- **dsh-plugin-weixin** — 微信（个人微信，iLink Bot API）通道：在微信里直接对话 DSH agent，支持图片、文件收发与语音转写。一个微信会话可挂多条 DSH 会话（/new、/list、/use 切换，切走不销毁），全部配置项都能在设置页里查看和修改。已上架 npm（dsh-plugin-weixin）。
  `v0.9.3` · [源码](https://github.com/panqing0313/dsh-plugin-weixin)
- **dsh-agents-notch** — Windows 屏幕顶部始终置顶的刘海：每个会话一个小机器人，显示哪些在工作、哪些在等你、哪些已完成或失败；不抢焦点，全屏应用下自动隐藏，带独立设置页。
  `v0.1.8` · [源码](https://github.com/iArxic/dsh-agents-notch)
- **dsh-bili-pond** — 让蓝色大肥鱼替你刷 B 站：帮你评论，把发现的有趣内容私信给你，还会写下日记；它也有记忆，能长期总结。视频按你的口味筛选并生成 Markdown 日报，也能守着评论区替你回话。开启「圈地自萌」后，它只回视频 UP 主本人主动邀请的楼中楼，普通观众喊话不算，绝不自己起新楼；评论、私信、自动运行和守护默认关闭。需…
  `v1.3.12` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/YOYOLnFu/dsh-bili-pond)
- **dsh-plugin-notify-sounds** — DeepSeek Harness 原生风格提示音插件：智能体需要你决策或任务完成时播放提示音，点击系统通知可跳回窗口；支持重复提醒、静音时段，以及目标模式下只在最终轮提醒。
  `v1.8.6` · [源码](https://github.com/BillCx330/dsh-plugin-notify-sounds)
- **@idoall/dsh-notify** — 带可折叠状态通知、提示音与会话跳转的页内任务通知插件。
  `v0.4.8` · [源码](https://github.com/idoall/dsh-notify)
- **@goodandready/dsh-messenger-gateway** — DeepSeek Harness 的 Telegram 桥接：双向会话、对话引导、主频道路由，以及以 Telegram 语音消息发送的 TTS 语音笔记。
  `v0.4.20` · [源码](https://github.com/GooDAnDReaDY/dsh-messenger-gateway)
- **@avernet-plugin/deepseek-harness-channel-bcn** — 通过 WebSocket V2 将 DeepSeek Harness 接入 Avernet Bot 协作网络，支持自动注册、Agent 会话隔离、工具调用事件和多 Bot 路由工具。
  `v0.2.4` · [源码](https://github.com/inclusionAI/Avernet)
- **dsh-acp-enhanced** — 增强版 ACP 服务器：块级与推理流式、用量遥测、模型/推理强度切换、权限预设、会话恢复/归档、每会话 MCP servers、Zed 文件/终端转发。
  `v0.11.1` · [源码](https://github.com/grunmin/dsh-acp-enhanced)
- **attention-plugins** — 面向 DSH 的任务分级会话通知：主线任务完成或失败时立即提醒，支线可汇总为一声，提问与权限请求出现即提醒；支持同时标记多个主线，以及未标记主线时把所有会话视为主线的均衡模式。
  `v0.2.0` · 引擎 `>=0.1.7` · [源码](https://github.com/zjbc2000/attention-plugins)
- **dsh-serverchan-watchdog** — DeepSeek Harness 的第三方 Server酱通知插件：在主机端监控审批、计划评审和问答，超过设定时间仍未处理时通过微信（Server酱 Turbo）或 Server酱³ App 发送手机提醒，无需保持浏览器打开。
  `v0.2.2` · [源码](https://github.com/MaRi23333/dsh-serverchan-watchdog)
- **dsh-notify-xc** — DSH 浏览器通知插件 - 任务完成 / 运行出错 / 需要你回答、批准、审阅计划时弹系统级通知，点击气泡直达会话，三类通知独立开关，主会话等子代理期间不误报完成。
  `v0.2.8` · 引擎 `>=0.1.2-alpha.4` · [源码](https://github.com/xchannel1987/dsh-notify-xc)
- **@wingsky-1/dsh-notifier** — 任务事件通知中心：6 类事件（提问 / 审批 / 完成 / 子代理完成 / 错误 / 轮次完成），双通道（浏览器通知 + 宿主系统 toast）外加 Bark/Webhook 推送频道（ntfy、Gotify、自建网关）；支持免打扰时段与紧急例外、审批超时二次提醒、完成风暴聚合、通知文本脱敏。
  `v0.2.10` · [源码](https://github.com/wingsky-1/dsh-plugin-hub)
- **@wu5/dsh-your-turn** — DSH Web 界面的回合交接提醒：居中弹窗或顶部横幅、六种浏览器合成提示音、可配置自动消失，以及带未读会话列表的侧栏喇叭开关。
  `v0.1.2` · [源码](https://github.com/WenOwen/dsh-your-turn)
- **dsh-email** — 邮件工具插件：含 email_watch 增量新邮件检查、email_mark（已读/未读/星标/移动文件夹）与 email_reply（回复/回复全部/转发，自动线程头+引文）的十工具，Web 设置页与鲸鱼娘递信新邮件弹窗，since/until 日期范围过滤，内置 QQ/163/126/新浪/阿里/Gmail/Ou…
  `v0.18.0` · [源码](https://github.com/STARDUSTLC666/dsh-email)
- **@machine-126/dsh-alert-sound** — 为 dsh 网页界面提供声音/语音提醒：审批、提问、完成、错误各有独立音色，可选语音朗读。
  `v0.3.17` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/Machine-126/dsh-alert-sound)
- **dsh-feishucard** — 把 DeepSeek Harness 的 agent 会话接进飞书（Lark）：官方 SDK 长连接收发、流式回复卡片、单实例多 bot、群里 @ 才回复。
  `v0.8.23` · [源码](https://github.com/cmfok/dsh-feishucard)
- **@yjrqz777/dsh-qqbot-lite** — 将 QQ 私聊和群聊接入 DeepSeek Harness Desktop，支持按会话切换人格、交互式提问和可选图片理解。
  `v1.2.0` · [源码](https://github.com/yjrqz777/dsh-qqbot-lite)
- **@bittersmilezzz/dsh-notify** — DSH 桌面通知：审批、提问、轮次完成、会话结束与出错时弹系统原生通知，点击直达对应会话；六类事件分别开关，支持免打扰时段与隐藏正文的隐私开关，并按事件类型合成提示音。
  `v0.4.5` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/bitterSmilezzz/dsh-notify)
- **dsh-telegram-notify** — 针对 DSH 的单向 Telegram 通知。
  `v0.2.3` · [源码](https://github.com/RGarrido03/dsh-telegram-notify)
- **dsh-desktop-toast** — DeepSeek Harness 的 Windows 桌面通知：任务完成时、或停下来等你审批/回答/确认计划时弹出系统通知。文案与触发时机可配置。
  `v0.1.2` · [源码](https://github.com/hhaosheng/dsh-desktop-toast)
- **dsh-notify-toast** — DSH 任务完成时，在 Windows 通知栏弹出原生通知，带上会话标题、结果状态与最后一条回复的摘要；在 agent 真正停下来时才发一条，而不是每跑一个回合就响一次。
  `v0.1.0` · [源码](https://github.com/ztl0001/dsh-notify)
- **dsh-turn-music** — 回合提醒音乐：对话（回合）结束时播放铃声或任意本地音频提醒你回来——内置合成的电话「叮铃铃」，也可填宿主机绝对路径或直接在设置页上传；右下角浮标可暂停/继续/关闭，默认循环响到你手动停；设置项在「设置 → 内置插件」里，部署级默认值可写进 cordis.patch.yml。
  `v0.3.1` · [源码](https://github.com/ramwin/dsh-turn-music)
- **dsh-notice-card** — 任务跑完、等你审批或等你回答时，在屏幕角落弹出一张不抢焦点的通知卡。
  `v0.2.1` · [源码](https://github.com/Maple-Yoli/dsh-notice-card)
- **dsh-plugin-tlnotify** — 把 DSH 会话事件推到手机 IM，并允许在那条消息下直接回复回注到正确会话。覆盖九类事件：任务完成、执行错误、执行被阻塞、手动中止、Token 达到上限、异常中断、等待我回答、权限请求、等待计划确认；通道支持 QQ 单聊机器人与飞书自建应用，两者均走 WebSocket 长连接，无需公网…
  `v1.0.0` · [源码](https://github.com/ltl0312/my-dsh-plugins)
- **@falling-ts/dsh-web-ding** — agent 回合结束时在浏览器标签页里播放一声合成的叮,纯前端 Web Audio 发音,不经过后端、不弹系统通知。
  `v0.7.0` · [源码](https://github.com/falling-ts/dsh-web-ding)
- **@open-pets/dsh** — 将 DeepSeek Harness 的生命周期状态、错误与审批请求，桥接到本地运行的 OpenPets 桌面伙伴。
  `v4.1.0` · [源码](https://github.com/OpenPetsHQ/openpets)
- **@mzzsfy/dsh-turn-notify** — 回合事件通知：完成/出错/被中断/等待审批/AI 提问/达到上限六类事件，经声音、系统弹窗、页内提示、webhook、IM、宿主桌面通知通道推送，多窗口只响一次。
  `v0.12.3` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-deepcanary** — 面向 DeepSeek Harness 的证据优先注意力监督，提供 C0–C3 策略、去重 Inbox 提醒、静默时段和脱敏结果记录。
  `v0.1.6-rc.4` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/Oscar-Williams/dsh-deepcanary)
- **@hawkongz/dsh-task-reminder** — 对话任务停止时弹一条 Windows 通知并响一声提示音：完成、等你审批或回答、出错都会提醒。点通知回到那个会话，落在你上次提问的位置；桌面端还会把窗口拉到前台。
  `v1.6.5` · [源码](https://github.com/hawkongz/dsh-task-reminder)
- **dsh-notify-desktop** — DSH 桌面端会话的 Windows 原生 Toast 通知（宿主侧）：回合结束、审批、提问与未应答催办，按情况可选音效并支持导入自定义音效；点击通知把 DSH 窗口拉回前台。
  `v0.1.1` · [源码](https://github.com/paleech0/dsh-notify-desktop)
- **dsh-lark-link** — DeepSeek Harness 的高可靠飞书/Lark 桥接：扫码一键认证、卡片化命令与意图确认、at-least-once 零丢失出站队列、多媒体出入站、/doctor 会话日志 ZIP，并复用 DSH Web GUI 把会话归入正确工作区。
  `v0.6.0` · [源码](https://github.com/amlyczz/dsh-lark-link)
- **dsh-genshin-lisa-notice** — 回合完成、需要你输入或执行失败时播放语音提醒并发送浏览器通知，还可把同样的摘要以卡片推送到飞书机器人 webhook。
  `v0.15.2` · [源码](https://github.com/EagleClark/dsh-genshin-lisa-notice)
- **dsh-focus-notify** — 焦点感知的 DeepSeek Harness 通知插件：审批、提问、方案确认与回复完成统一为一种提醒，当前对话在窗口失焦后才弹出，后台对话随时提醒，子代理会话不提醒。
  `v0.3.1` · 引擎 `>=0.2.0-rc.2 <0.2.1-0 || >=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/sqzw-x/dsh-focus-notify)
- **@openma/deepseek-harness-acp** — ACP profile 插件与独立 stdio server，可从 Zed 等 ACP 客户端使用完整 DSH agent，并共享 DSH 凭据与会话。
  `v0.4.39` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/openma-ai/deepseek-harness-acp)
- **dsh-connect** — 把 DeepSeek Harness 会话接入飞书/Lark、Telegram 与钉钉：每个聊天绑定一个可续接的 DSH 会话，回复以卡片流式回传，任务结束时用一张结果卡汇报模型、token 用量、步数与耗时。提问与权限审批可直接在聊天里作答，各渠道凭据在 Web 设置面板中配置。
  `v1.0.16` · [源码](https://github.com/IvanWu2015/dsh-connect)
- **dsh-pocket** — 手机远程访问 DSH Web 界面：扫码即用局域网或公网（cloudflared 隧道）访问，实时同屏、移动端适配布局，带设置页管理。
  `v2.12.0` · [源码](https://github.com/shaobeichen/dsh-pocket)
- **dsh-my-notify** — 会话（本轮）结束 / agent 询问 / 等待审批时弹浏览器通知 + 滴声，点击通知跳转会话；预留远程触发接口与 SSE 实时通道（npm: `dsh-my-notify`）。
  `v0.4.3` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-session-attention** — 跑完 / 提问 / 需要审批时弹桌面通知与提示音（三类可分别开关），另附活动悬浮球，点会话行直接跳回该会话。
  `v0.3.0` · [源码](https://github.com/Meltllsy/dsh-session-attention)
- **dsh-harmonyos-hiboard** — 把DSH的任务结果，以服务卡片形式推送到华为鸿蒙负一屏。安装后请在插件设置页输入授权码，位置：主页面左上角「插件」→ 「dsh-harmonyos-hiboard」。
  `v0.10.1` · [源码](https://github.com/MaybeMeibeMaybi/dsh-harmonyos-hiboard)
- **dsh-notify-yimit** — DeepSeek Harness事件的Windows系统和自定义桌面通知：任务已完成、失败、正在运行、等待批准和等待答复。单击以跳转到会话。
  `v0.2.4` · [源码](https://github.com/YiMlT/dsh-notify-yimit)
- **dsh-gotify-notify** — 每轮会话结束时向 Gotify 服务器推送通知，支持模板、优先级与按结束原因区分标题。
  `v2.4.0` · [源码](https://github.com/AhYi8/dsh-gotify-notify)
- **dsh-hybrid-notify** — DeepSeek Harness 多通道通知插件：前台弹页面内 toast，后台按可用性切换 PWA 系统通知（Service Worker）或浏览器通知兜底；任务完成、审批请求、提问、计划评审、出错等事件可逐项开关，重要通知驻留不消失，并用 Web Audio 实时合成提示音效、零音频文件零网络上报。
  `v0.3.0` · [源码](https://github.com/john-walks-slow/dsh-hybrid-notify)
- **dsh-pharos** — DSH 桌面消息提醒：模型需要你操作（审批、方案确认、提问）或后台回复完成时，弹系统通知、提示音并标记标签页标题；出错、中断、用量上限与多 agent 工作流进展同样提醒。宿主半提供 SSE 投递、Webhook 推送（企业微信 / 飞书 / 钉钉 / 通用）与当轮统计（token / 缓存 /…
  `v0.6.4` · [源码](https://github.com/Leo-Cjw/dsh-pharos)
- **dsh-plugin-discord** — 与桌面端或 dsh web 运行在同一个 Host 里的 Discord 桥接，无需单独进程或 profile：在私信或线程里与任意工作区的会话对话，接入桌面端正在用的会话，工具审批和模型提问在 Discord 与桌面端谁先答谁生效。
  `v0.1.0` · [源码](https://github.com/tjiisztiuv/dsh-plugin-discord)
- **dsh-task-feedback** — 浏览器标签页 Favicon 实时回显会话状态，并支持需介入/已完成时的音效提示。
  `v0.2.1` · [源码](https://github.com/Pudge1996/dsh-task-feedback)
- **@dingyi222666/dsh-session-notification** — 会话完成等四种状态的通知响应，支持浏览器提示。
  `v0.2.6` · [源码](https://github.com/dingyi222666/dsh-session-notification)
- **dsh-hooks** — 配置驱动生命周期 hooks：在 cordis.patch.yml 声明事件→命令，附飞书卡片通知与扫码一键创建机器人。
  `v0.14.4` · [源码](https://github.com/PeterBon/dsh-hooks)
- **dsh-notify-ding** — 会话出现待回复交互或一轮跑完落到空闲时弹出浏览器系统通知，提示音由系统通知自带；不判断页面是否聚焦，每个会话最多保留一条通知、新通知顶掉旧的，空闲时若还有后台任务会在正文里说明数量。
  `v0.1.6` · [源码](https://github.com/better-er/dsh-notify-ding)
- **dsh-notch-focus** — DSH Notch 的配套助手，同步 Desktop、Web 与 Notch 之间的会话跳转和已读状态。
  `v0.1.4` · [源码](https://github.com/aa2246740/dsh-notch)
- **dsh-notch** — 将 DSH 会话状态、审批和问题同步到原生 macOS 刘海程序，需要原生程序及 Focus 同步助手。
  `v0.3.6` · [源码](https://github.com/aa2246740/dsh-notch)
- **dsh-messaging-gateway** — 使用自建机器人应用，将一个 DSH Host 接入 Slack 和飞书。
  `v0.2.4` · [源码](https://github.com/aa2246740/dsh-gateway)
- **@xain_npm/dsh-client-ui-beep** — 为 DSH 网页界面提供 Web Audio 智能体心跳提示：Agent 忙碌时低频心跳、流式输出时滴答声、会话等待输入或工作完成时提示音；支持分音色音量、静音开关与本地音频文件替换。
  `v0.6.2` · [源码](https://github.com/xain/ui-beep)
- **dsh-helper** — 在任意 DSH 会话把当前环境文件主动投递到微信（复用已装的 IM 插件），另有按 cron 在全新会话里跑的定时任务、工作区活动呼吸灯、标题栏活跃指示、对话完成提示音、关闭 macOS 侧栏毛玻璃与一键重启宿主。
  `v0.16.8` · [源码](https://github.com/jiuaiwo/dsh-helper)
- **dsh-slack** — Slack 双向通信（notify/channels/inbox/reply/health 五工具），Socket Mode 免公网回调。
  `v0.3.4` · [源码](https://github.com/STARDUSTLC666/dsh-slack)
- **@telosmaylx/dsh-session-notify** — 会话轮次结束时推送浏览器系统通知与页内提示，内置 5 种语言模板与自定义预设。
  `v0.1.23` · [源码](https://github.com/TelosmaYLX/dsh-session-notify)
- **dsh-approval-voice** — DSH Web GUI 中出现审批、提问或计划审批弹窗时，播放提示音并中文语音播报，避免漏看待处理请求。
  `v0.3.0` · [源码](https://github.com/ZIye1208/dsh-approval-voice)
- **dsh-you-should-know** — 根据当前任务上下文提醒重要事实和方案取舍，支持展开解释并带入主会话讨论。
  `v0.1.0` · [源码](https://github.com/lolipop-1x1/dsh-you-should-know)
- **dsh-rss-daily** — 每日要闻日报：46 个精选 RSS 源，用 dsh 里已配好的模型做主编式编辑，经 webhook 送到微信/Telegram，并以模型回答的样式插播在对话里，零上下文消耗。
  `v0.7.0` · [源码](https://github.com/shangjian2023/dsh-rss-daily)
- **dsh-no-long-sit** — DSH 的久坐与喝水提醒：一只猫待在 Web GUI 角落帮你盯时间。专注周期 30-90 分钟结束后居中弹窗并连响三声，喊你起来走两步、喝口水；点「再等会」给出 1 条久坐的真实案例 + 1 条缺水的真实案例（内置 17 条，均带来源媒体、发布日期和原文链接）；点「结束」输出本次工作评价：工作时长、完成轮数、成功中断…
  `v0.1.3` · [源码](https://github.com/wangzhanchao883/dsh-no-long-sit)
- **dsh-desktop-notifications** — DeepSeek Harness 的 Windows 桌面通知：申请权限、提问、任务完成、出错与登录提醒，每条通知第一行都是会话名称。
  `v1.0.0` · [源码](https://github.com/FANLS05/dsh-desktop-notifications)
- **dsh-ticktick** — 基于官方 OAuth Open API 双向同步滴答清单（TickTick/Dida365）任务：拉取各清单任务、创建/更新/完成/删除、按标题去重的一键同步，带 Web 设置面板。
  `v0.1.5` · [源码](https://github.com/zhengjy01/dsh-ticktick)
- **dsh-task-dispatcher** — 滴答清单任务派发器：按间隔从指定清单拉取到期任务写入今日任务文件，仅在任务集变化时通知（微信 ClawBot / flomo / macOS）；可为每个任务单独开一个 headless DSH 会话自动执行（worker 超时可配），并可选只在 DeepSeek 空闲（优惠）时段开跑——高峰期把任务排到下个空闲窗口而不…
  `v0.6.1` · [源码](https://github.com/zhengjy01/dsh-task-dispatcher)
- **dsh-chatgpt-bridge** — 通过 MCP 让 ChatGPT Web 创建、查看、继续和监督 DeepSeek Harness Agent 会话与 Goal，同时保留 DSH 原生的审批、沙箱与工作区安全模型。
  `v0.6.0` · [源码](https://github.com/jiezeng2004-design/dsh-chatgpt-bridge)
- **@lanbaolu/dsh-wechat-bridge** — 基于 iLink 协议的 DSH 微信双向桥：扫码绑定个人微信后在聊天框直接与当前环境 DSH Agent 对话（文字/图片/语音转文字/文件），Web 设置面板管理扫码绑定/启停/状态，支持绑定项目会话跨端续聊，agent 可主动 wechat_notify 推送（内置节流），纯 Node…
  `v0.9.1` · [源码](https://github.com/lanbaolu/dsh-wechat-bridge)
- **dsh-dingtalk** — 钉钉群机器人通知：dingtalk_notify/text/health 三工具，webhook + HMAC 加签，零运行时依赖。
  `v0.2.2` · [源码](https://github.com/STARDUSTLC666/dsh-dingtalk)
- **dsh-notion-oauth-ui** — 在图形界面中以 OAuth 2.0 + PKCE 连接 Notion —— 官方 Notion MCP，无需集成令牌。
  `v1.0.3` · 引擎 `>=0.1.5-rc.3` · [源码](https://github.com/MerkurevSergei/dsh-notion-oauth-ui)
- **dsh-pocket-console** — 把无人值守运行时 DeepSeek Harness 的工具调用审批与 ask_user_question 提问推送到手机飞书卡片。桌面 GUI 优先作答——只有在 `delaySeconds`（默认 120 秒）内无人应答时才发出卡片——手机上的批准等同于 `allowed-once`，因此不会在手机上累积任何权限。仅…
  `v1.0.0` · [源码](https://github.com/picsky/dsh-pocket-console)
- **dsh-notice-center** — 把标签页图标变成绿/琥珀状态灯，并在会话跑完或有交互待处理时发送浏览器通知，含 47 个可选音效。
  `v1.4.2` · 引擎 `>=0.1.7-rc.2 <0.2.0-0` · [源码](https://github.com/SCP-QQ/dsh-notice-center)
- **dsh-notifier** — DSH 通知与远程操作控制面：一个 `notify()` API 接入 28 个出站渠道，六条入站控制通道承载手机审批、提问与任务控制；提供 DSH 原生「通知与控制」UI、出站热生效、多 agent 路由，并保持零运行时依赖。
  `v0.13.1` · [源码](https://github.com/THEWOLFWALKER/dsh-notifier)
- **dsh-notification** — 桌面与 webhook 通知：任务完成、出错或等待审批时提醒；零依赖，走系统自带的 osascript / notify-send / PowerShell toast，并支持 Slack 兼容的 webhook，可配置最短回合时长。
  `v0.1.2` · [源码](https://github.com/nishit130/dsh-notification)
- **dsh-ask-notify** — 当 agent 停下来等你作答时，在 DSH Web 界面右下角弹出提醒卡；若你切到了别的标签或窗口，再补一条系统通知并让标签标题闪烁。
  `v1.0.4` · [源码](https://github.com/liujianqiao701/dsh-ask-notify)
- **dsh-notify-bark** — Bark 推送通知到 iPhone：回合完成、等待回答、等待授权等事件由 Host 端发送。
  `v0.1.4` · [源码](https://github.com/pc439527/dsh-notify-bark)
- **dsh-msg-hub** — IM 渠道桥：微信（ilinkai）/ QQ / 飞书接入，支持主动推送——定时任务可唤醒渠道 bot 并把 AI 回复推送到手机。
  `v0.1.11` · [源码](https://github.com/AbcdefgXW/dsh-msg-hub)
- **dsh-smart-reminder** — 智能日程与待办助手：农历节气、macOS/Windows 原生桌面弹窗、企微多平台推送与拖拽改期。
  `v0.1.29` · [源码](https://github.com/a792883583/dsh-smart-reminder)
- **dsh-message-gateway** — 多平台消息网关与企微智能机器人桥接：会话自动压缩持久化与智能表格一键创建。
  `v0.1.35` · [源码](https://github.com/a792883583/dsh-message-gateway)
- **@luzhengyangtx/dsh-telegram-duty** — Telegram 值班网关：手机消息任务闭环（专属值班会话）、值守模式全局审批转发（内联同意/拒绝按钮）、telegram_ask 选项提问、值守/本地切换与网页横幅、中英双语消息、空闲零 token。
  `v0.5.0` · [源码](https://github.com/luzhengyangtx/dsh-telegram-duty)
- **dsh-serverchan-notify** — 回合结束时向 Server酱3 推送微信通知——标题、模型、项目目录、Git 分支、状态与回复摘要，支持子代理过滤，fire-and-forget 不阻塞主流程。
  `v1.1.0` · [源码](https://github.com/nickhelion/dsh-plugins)
- **dsh-done-sound** — DeepSeek Harness Web GUI 的不同触发情况可分别设置音频提醒：支持正常完成、中断、出错、等待确认、自动重连成功五种场景，每种场景都有独立音频配置和默认音效；出错后自动重连，等待时长可自定义（10-300 秒）；附带社区音色库下载；已适配 DSH 0.1.5-rc.2。
  `v0.1.15` · [源码](https://github.com/sxl19951101/dsh-done-sound)
- **dsh-cc-monitor** — 将 DeepSeek Harness 会话活动上报到自托管的 cc-monitor 服务器：Claude Code 与 DSH 会话以彩色状态卡片出现在同一个 Web 仪表盘中，会话需要关注时通过浏览器与 Android 应用通知你。
  `v0.8.0` · [源码](https://github.com/BolunHan/cc-monitor)
- **@wsz987/dsh-channels** — 将微信、QQ、钉钉、飞书和 Telegram 接入 DeepSeek Harness，提供统一配置、私聊与群聊访问范围管理，以及渠道内 Agent 对话和会话指令。
  `v0.5.1` · [源码](https://github.com/wsz987/dsh-channels)
- **dsh-rss-monitor** — DeepSeek Harness 原生 RSS 订阅监控插件：多源订阅、关键词过滤、定时检查去重、新条目邮件通知（缩略图 HTML 模板），SMTP 密码走凭据库永不落盘，原生设置页四页签体验。
  `v0.2.10` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/hgl011091/dsh-rss-monitor)
- **@lsq64737/dsh-windows-notifications** — 为任务事件提供 Windows 桌面通知、可选提示音和 DSH 风格的页面通知。
  `v0.1.6` · [源码](https://github.com/lsq-dsh-plugins/dsh-windows-notifications)
- **dsh-notify** — 为 dsh 添加 Windows 原生 Toast 通知与系统托盘图标：agent 完成、停止或出错时弹通知，托盘菜单可重新打开网页或退出后台进程。
  `v0.1.7` · [源码](https://github.com/Pasumao/dsh-plugin-notify)
- **dsh-herald** — 三通道任务通知：页内浮层与提示音、浏览器系统横幅、宿主直发系统通知（浏览器关闭也送达），附铃铛面板与持久历史。
  `v1.0.1` · [源码](https://github.com/bululuburuarua666/dsh-herald)
- **@yeqingtang/dsh-task-watcher-plugin** — Windows 托盘任务监视器：部署并管理独立监视程序——四态托盘图标（灰=未连接、绿=空闲、橙=运行中、红=有待处理）、逐任务实时面板（时长/速度/token）、完成与结局通知。设置→插件内启停开关；监视器独立进程运行，DSH 重启不影响。
  `v0.5.5` · [源码](https://github.com/YeqingTang/dsh-task-watcher-plugin)
- **@dsh-overdrive/gateway-core** — dsh-overdrive 聊天网关的 DSH 侧远程会话驱动：把 Telegram / Discord / Slack / WhatsApp / 飞书 / 钉钉 / 企业微信 的会话、轨迹回放与一键审批接入 Harness。需配套运行 @dsh-overdrive/gateway。
  `v0.2.1` · [源码](https://github.com/temotee2103/dsh-overdrive)
- **dsh-ai-question-chime** — 当 AI 询问澄清性问题时（带问号或调用 ask_user_question）播放提示音。Web Audio API 合成，零音频文件，跨 Windows/macOS/Linux。
  `v1.0.4` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/lediemquynh/dsh-ai-question-chime)
- **@haoyu-qi/dsh-zentao** — 悬浮禅道工作台：右侧边栏展示指派给你的任务、Bug 与需求，支持拖拽到聊天、原始链接与自动刷新。
  `v0.1.0-rc.8` · [源码](https://github.com/haoyu-qi/dsh-zentao)
- **dsh-lark-bot** — 把 DeepSeek Harness 装进飞书的桥接插件：扫码绑定 PersonalAgent、流式卡片、git worktree 项目工作区、scope 并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理，以及 dsh 崩溃后仍在飞书应答的安全网守护。
  `v0.19.16` · [源码](https://github.com/PlutoKeating/dsh-lark-bot)
- **task-complete-notify-for-dsh** — DSH 桌面通知插件：运行完成、出错或等待审批时发送桌面通知并播放提示音，支持可配置的时长阈值。
  `v0.2.0` · [源码](https://github.com/lxp731/agents-plugins)
- **dsh-peak-cost-mode** — 在 DeepSeek 高峰计价时段（北京时间 09:00–12:00、14:00–18:00，价格 ×2）自动切换 caveman 超精简输出省 token，标题栏常驻状态徽章，档位切换时弹提醒。
  `v0.4.0` · [源码](https://github.com/moon09300731/dsh-peak-cost-mode)
- **dsh-win-notify** — 真正的 Windows 系统 Toast（通知中心持久、DeepSeek 品牌鲸鱼图标）：任务完成 / 需要输入 / 需要审批时提醒。仅支持 Windows，零运行时依赖。
  `v0.1.0` · [源码](https://github.com/kongdexu/dsh-win-notify)
- **dsh-complete-notify** — 任务完成时播放提示音并弹出小通知：Web Audio 合成音效、页面内 toast、页面在后台时系统通知，纯浏览器方案、零系统依赖、跨平台。
  `v0.6.2` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/kaixinbaba/dsh-complete-notify)
- **dsh-sound-lab** — DSH 声音工坊：在会话结束、弹出选项、请求许可与停止时播放指定音效，支持 AI 角色语音生成与音效库管理。
  `v1.3.2` · [源码](https://github.com/miiaowuwu/dsh-sound-lab)
- **dsh-plugin-approval-alert** — 审批与选择方案的系统级桌面通知：通知显示所属工作区、点击跳转到对应工作区，多语言（简中/繁中/英文），附提示音。
  `v1.0.2` · [源码](https://github.com/doncelee229-cmyk/dsh-plugin-approval-alert)
- **dsh-agent-notify** — 任务完成或需要你输入/批准时弹出 Windows 系统通知（浏览器 Notification API）：完成/提问/审批/计划审阅提醒，点击气泡直达会话，支持后台模式，设置页在官方设置 → 任务提示。
  `v1.0.0` · [源码](https://github.com/chidaic/dsh-agent-notify)
- **dsh-pet-bridge** — dsh ↔ cc-pet 桌面宠物状态桥：把会话状态（思考中 / 读取文件 / 运行命令 / 完成）实时推送到桌面宠物气泡。npm 包名 `dsh-pet-bridge`。
  `v0.1.0` · [源码](https://github.com/wsxwj123/dsh-plugins)
- **dsh-im-hub** — 多平台 IM 网关：飞书（Lark）WebSocket 长连接（无需公网）、企业微信 AES 加密回调、Telegram 长轮询；每会话独立 agent、白名单访问、Web GUI 可视化设置卡片。
  `v0.2.3` · [源码](https://github.com/ThreeBody6666/dsh-im-hub)
- **dsh-chime** — 为 DeepSeek Harness 复刻 opencode 的任务完成提示音，完成、提问、计划待审、出错四种场景播放原始音效，零外部依赖。
  `v0.1.3` · [源码](https://github.com/xiaxingtianxia2-glitch/dsh-chime)
- **dsh-gap-feed** — agent 思考超时时，直接在对话流中推出一条今日头条热点或提醒消息。
  `v0.1.9` · [源码](https://github.com/faukwaa/dsh-gap-feed)
- **dsh-niulai-sound** — 牛来确认音：请求用户确认时播放「妈妈」，批准瞬间掐断并播放「牛来！」；梗源电影《牛来》，Windows 原生播放，零外部依赖。
  `v1.0.0` · [源码](https://github.com/isheng-eqi/dsh-niulai-sound)
- **dsh-niao-message** — DeepSeek Harness 的 macOS 系统通知插件：任务中止、超限、阻塞、中断、出错、等待提问或批准、完成或子代理结束等事件通过 terminal-notifier 弹系统横幅；点击横幅打开指定应用，回到页面自动清空。
  `v0.1.4` · [源码](https://github.com/dsh-niao/dsh-niao-message)
- **dsh-lark-channel** — DeepSeek Harness 的飞书/Lark 机器人渠道：每个会话驱动独立 agent，工具审批、模型提问与计划审阅都以卡片回到聊天，点按钮或直接回复即可作答；聊天里用 `/cd`、`/model`、`/new` 切工作区、换模型、重开会话，多个机器人各自独立并可在同群交接回合。
  `v0.0.7` · [源码](https://github.com/omdsh-dev/dsh-lark)
- **dsh-imessage** — 通过 Photon 接入 DeepSeek Harness 的双向 iMessage 通道：按发件人白名单路由，支持会话命令、聊天内审批与提问，并提供用于设备授权和托管号码设置的 Settings 页面。
  `v0.2.0` · [源码](https://github.com/photon-hq/dsh-imessage)
- **@dsh-pulse/dsh-hermes-bridge** — DSH 的任务队列执行端点：需要自行部署独立的 Hermes Agent 网关并编写自己的微信入站脚本；仅在单一环境验证过，需要按你的环境适配。
  `v0.1.0` · [源码](https://github.com/dsh-pulse/dsh-hermes-bridge)
- **dsh-bell-notify** — DeepSeek Harness 生命周期提示音：10 个可配置事件，默认只开启三项低打扰提示，可为每个事件更换自定义声音，内置音效不带音频资源。
  `v0.1.1` · [源码](https://github.com/Laplace-bit/dsh-bell-notify)
- **dsh-feishu-chat** — 基于飞书官方 WebSocket 长连接的 DSH 双向聊天桥：消息路由到所选工作区的最新会话并自动回复，可在设置页切换机器人凭证与工作区。
  `v0.1.0` · [源码](https://github.com/Qing45/dsh-feishu-chat)
- **dsh-im-channel** — DeepSeek Harness 的统一 IM 渠道：飞书、Telegram、钉钉、Slack、Discord —— 持久会话、真流式回复、40 个飞书 MCP 工具、斜杠命令，以及插件设置页中的 IM 机器人状态页。
  `v0.2.1` · [源码](https://github.com/shrekcg/dsh-im-channel)
- **dsh-obvious-grid** — DeepSeek Harness 全屏状态看板：会话状态网格与 token/速率图表一览无余，回合结束、出错或等待审批时通过 ntfy 推送与铃声提醒。
  `v0.2.2` · [源码](https://github.com/ray062/dsh-obvious-grid)
- **dsh-update-notifier** — 每小时检查 npm 上已安装插件的新版本，并询问升级其中哪些。
  `v0.2.1` · [源码](https://github.com/stuarthu/dsh-update-notifier)
- **dsh-feishu-remote** — 从飞书/Lark 操作 DeepSeek Harness：私聊发送任务，agent 用你配置的模型执行并把结果回到会话；feishu_send 工具可让 agent 主动推送结果。基于 lark-cli 的 WebSocket 长连接，无需公网 webhook，并附常驻启动器。注意：插件不校验发送者身份，因此任何能私聊…
  `v0.1.0` · [源码](https://github.com/ShiXiangYu2/dsh-feishu-remote)
- **dsh-mobile-remote** — 微信遥控 DeepSeek Harness：iLink 双向加密文件收发（入站自动解密落盘 + /send 出站）、weixin_send 主动通知、完成通知、多会话切换、健康面板与文件日志。
  `v0.1.0` · [源码](https://github.com/good-boy4069/dsh-mobile-remote)
- **dsh-dingtalk-channel** — 钉钉 IM 双向 channel（Stream 模式）：每条单聊/群聊驱动一个 agent，思考与回复通过 WebSocket 长连接回流消息，免公网回调。
  `v0.1.0` · [源码](https://github.com/ttmouse/dsh-dingtalk-channel)
- **dsh-web-launcher** — Web 界面一键启动器：在 Windows 桌面创建双击即用的 Start-DSH-Web.cmd（自动启动 dsh web，轮询就绪后自动打开浏览器），并提供 web_launcher 模型工具（install / open / status）。
  `v0.3.2` · [源码](https://github.com/hanwuji1/dsh-web-launcher)
- **dsh-notify-skill** — 你不在电脑前时由 agent 邮件提醒你：goal 完成、阻塞、向你提问决策前、长任务节点时触发，自带零依赖 Node SMTP 发送器。
  `v0.1.0` · [源码](https://github.com/PAKIKNOWLEDGE/dsh-notify-skill)

## 远程与移动 · remote（122）

- **dsh-winrm** — andyfan1094/dsh-winrm 的 Node.js 分支：同样的 WinRM 主机面板与七个 agent 工具，后端从 Python/pywinrm 移植到原生 Node WinRM 客户端，运行 dsh 的机器不再需要 Python。
  `v0.4.0` · [源码](https://github.com/MoRanYue/dsh-winrm)
- **dsh-remote-bridge** — 把 DSH 内核的私有 remote 协议翻译成版本化 REST 接口（聊天、会话、文件、设备），供 Android 客户端 dsh-companion 等受信任客户端使用；桌面端在 DSH 设置里内联渲染七张折叠卡片（根目录 / 远程访问 / 设备 / 识图 / 回收站 / 审计 / App 下载）。
  `v2.7.0` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/westanke/dsh-remote-bridge)
- **dsh-mini-remote** — 给 DeepSeek Harness 用的极简手机遥控器：手机页面上只有你发出的指令和 AI 最后的结论，工具调用、文件读写、子 Agent 调度与思考过程全部留在电脑上；可通过内网、Tailscale 或 Cloudflare 隧道连接，每条路径各配二维码、链接和密码。
  `v0.2.5` · 引擎 `>=0.1.5-rc.2 <0.3.0` · [源码](https://github.com/xingzhen199186/dsh-mini-remote)
- **dsh-telegram-channel-ru** — DeepSeek Harness 的 Telegram 遥控器：在手机上接续正在运行的 Web 会话并回答问题，界面为俄语。hi-wenw/dsh-telegram-channel 的俄语分支（MIT）。
  `v0.13.1` · [源码](https://github.com/danilinao/dsh-telegram-channel-ru)
- **dsh-enhancement** — DSH 增强套件：为 Web GUI 提供独立的密码访问网关（可选 HTTPS，适合局域网/远程访问），整合 PWA 安装与图标、桌面通知与 Web Push，并在设置页统一配置。
  `v1.1.1` · [源码](https://github.com/feng-yifan/dsh-plugins)
- **@twinsearth/w2m-dsh-plugin** — 一条指令同时下发给所有在线的 Windows 与 macOS 机器，可跨网络跨区域：零依赖中继只通过出站连接与各机通信（Tailscale 内网、公网 VPS + TLS、或隧道），各机在各自的项目副本上执行，结果连同 commit、工作区指纹与命令哈希一并回传，因此"环境不一致"会被判为…
  `v1.7.3` · [源码](https://github.com/TwinsEarth/dsh-windows2macos)
- **dsh-mobile-plugin** — 手机 App 的对端插件，自身可作无头宿主单独运行（不需要桌面外壳或 Electron）：经中转隧道或局域网配对提供受限的移动 API，用于列出、新建与操控 DSH 会话、订阅设备实时事件流，并以可吊销的设备凭据鉴权。
  `v0.2.0` · [源码](https://github.com/WNLUO/dsh-mobile-plugin)
- **dsh-console-plugin** — 用二维码或六位配对码把手机连上这台电脑的 DSH，之后可远程发指令、看图片、回答审批；局域网内不依赖云端，异地走公网隧道。
  `v0.5.33` · [源码](https://github.com/ChenJun25/dsh-console-plugin)
- **@nelsonlongxiang/dsh-open-a2a-net** — 把 DSH 部署变成去中心化 agent 网络中的一个节点——签名 agent 卡片、peer 与 zone 发现、直连消息路由模型工具，以及 Web 侧栏可加入的会话节点。
  `v0.6.27` · [源码](https://github.com/NelsonLongXiang/dsh-open-a2a-net)
- **dsh-channel-wechat** — 把微信（腾讯 iLink / ClawBot）接入 DeepSeek Harness 的通道插件：扫码登录，双向收发文本、图片与文件，微信内可用 /cwd、/skills 等命令，审批卡与提问卡在聊天里回答；回复侧会切分超长正文、对限流退避重试，而不是直接丢弃。默认只放行扫码登录的那个微信号，其他人发来的消息一律忽略。
  `v0.2.7` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/wangx-wx/dsh-channel-wechat)
- **dsh-roam** — 远程连接正在运行的 DeepSeek Harness 会话：手机浏览器扫码即可继续对话、处理审批、新建任务，支持同一 Wi-Fi 或临时隧道。
  `v1.2.0` · [源码](https://github.com/winlin926/dsh-roam)
- **dsh-remote-mobile** — 远程与移动端安全网关：零改动 DSH 底层代码开放 Tailscale/局域网访问，支持扫码配对、RSA 加密、防暴力破解与移动端样式片段；与其他远程插件共存时自动让出共享配对服务，避免启动崩溃。
  `v1.10.1` · [源码](https://github.com/IceApriler/dsh-remote-mobile)
- **dsh-im-union** — DSH 的 IM 联合桥：整合社区同类插件（xmanrui/dsh-im、MichengAI/dsh-im-connect）能力合集的独立实现——用 12 个平台的 15 个渠道适配器（含邮件；企微/钉钉/QQ 各含机器人与自建应用或推送两档）驱动宿主会话——微信（官方 iLink…
  `v0.4.8` · 引擎 `0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.2 || 0.2.1-alpha.3 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-im-union)
- **dsh-service-portal** — 把一个口令登录的内网地址与公网 cloudflared 快速隧道域名提供给当前环境任意服务，每条路由的开放/屏蔽闸门在插件设置页里管理。需当前环境有 Python 3 与 cloudflared，缺失或路径填错会在启动前的设置页里提示；内网与当前环境访问默认免密，公网隧道需要口令。
  `v1.0.6` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/dingminhua/dsh-service-portal)
- **@amaster.ai/dsh-a2a** — 为 dsh agent 提供 A2A 协议服务，支持 JSON-RPC 任务、SSE 流式输出、取消任务和 agent card。
  `v0.1.32` · [源码](https://github.com/TGYD-helige/dsh-plugins)
- **@dsh-remote/plugin** — 在手机上审批工具调用、看流式输出、回答问题；载荷级端到端加密，中继可自托管。
  `v0.5.1` · [源码](https://github.com/dsh-remote/plugin)
- **@wenbin_wb/dsh-bridge** — DeepSeek Harness 远程与移动端接入插件：提供局域网扫码直连、Cloudflare 与自建公网隧道，以及微信、QQ、飞书、Telegram 机器人交互，内置安全认证与访问控制。
  `v2.17.5` · [源码](https://github.com/wenbin-wb/dsh-bridge)
- **dsh-plugin-tether** — 用 Android/iOS 手机远程使用电脑上的 dsh 完整网页界面,经 iroh 跨网点对点打洞直连,不用架任何服务器;打不通才退回 relay,relay 只见密文。
  `v0.1.23` · [源码](https://github.com/zexadev/dsh-tether)
- **@zhangfengshun/dsh-remote-ssh** — 类 VSCode Remote-SSH 的 DSH 插件：SSH 连接超算/服务器，内置文件页签直读远程文件、终端页签自动 SSH，远程工作区配单往返合并读与结果缓存，含 12 个会话感知的 remote_ssh_* 模型工具。
  `v2.4.38` · [源码](https://github.com/ZhangFengshun/dsh-remote-ssh)
- **dsh-remote-plugin** — 移动远程控制套件：原生侧边栏入口 + 管理抽屉的 bundle 插件，自带 Bearer 令牌网关自愈（局域网/Tailscale）；Android App 覆盖会话/审批/提问/goal；/fs/* 文件端点（Range 断点续传、2GB 上传）；多服务器测速自动切换；聊天记录离线缓存。
  `v0.8.0` · [源码](https://github.com/Blank-not-black/dsh-Remote)
- **dsh-mobile-xc** — DSH 移动端 UI 适配插件 - Overlay 抽屉导航、玻璃卡片设计、Safe Area 全覆盖、PWA 支持。
  `v0.6.8` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/xchannel1987/dsh-mobile-xc)
- **@xgone/dsh-netshell** — DeepSeek Harness Web 的本地与远程 SSH 终端：提供三级权限，危险 AI 命令需真人确认，凭据加密存储。
  `v0.6.2` · [源码](https://github.com/xgone/dsh-netshell)
- **@restregular/dsh-pocket** — 为 DSH 单独做的窄屏移动端 Web 服务，不是把桌面 GUI 缩放塞进手机：自带会话列表与聊天流，随机访问令牌保护，可走局域网、cloudflared / localtunnel / localhost.run 隧道或自有服务器 SSH 反向转发。手机上流式看助手文本、思考、工具调用与结果，能发提示词、停止当前回合…
  `v0.17.0` · [源码](https://github.com/RestRegular/dsh-pocket)
- **@shiqyka/dsh-ssh-workspace** — 通过SSH方式，将远程主机的文件夹当成DSH的工作区，可以在本地DSH控制远程主机工作目录，不需要手动同步、不需要挂载驱动、不需要装任何第三方文件系统
  `v0.2.7` · [源码](https://github.com/siqyka/dsh-ssh-workspace)
- **dsh-plugin-feishu-im** — 飞书 IM 通道：扫码创建专属飞书机器人；每轮结束推一张卡片，在飞书里授权工具调用、回答结构化提问，并直接用聊天驱动会话（/sessions 列会话、/resume 切换绑定会话、任务进行中可插话引导），还能按对话设置权限模式（只读 / 工作区读写 / Auto Review / 完全权限）。消息以卡片 JSON…
  `v1.16.0` · [源码](https://github.com/drliuhuan/dsh-plugin-feishu-im)
- **@copylee/dsh-remote-control** — 用手机浏览器继续电脑上的会话：扫码并在电脑上确认设备后，在移动端界面里对话、处理审批、浏览工作区文件、管理设置；支持同一 Wi-Fi 直连或经 Cloudflare Quick Tunnel 连接。
  `v0.2.9` · [源码](https://github.com/copylee711/dsh-remote-control)
- **dsh-pve-vm** — 在对话里控制 Proxmox VE 虚拟机：16 个工具，既能通过 VNC 操作 VM 控制台（截图、鼠标、键盘、批量动作、Unicode 文本与剪贴板），也能经 QEMU guest agent 执行命令、读写文件；全部走一条到节点的 ssh 连接，宿主无需 X11 或 Wayland。
  `v0.2.5` · [源码](https://github.com/taxah92/dsh-pve-vm)
- **@goodandready/dsh-lanmode** — 为 DeepSeek Harness 网页 UI 提供局域网与反向代理访问：在非 localhost 页面返回设置服务，补齐浏览器在纯 HTTP 下限制的 Web API，并可自行开启监听端口。
  `v0.8.52` · [源码](https://github.com/GooDAnDReaDY/dsh-lanmode)
- **dsh-remote-explorer** — 远程开发启动器：通过 SSH（或当前环境 WSL 发行版）在远端引导安装 dsh，从本地客户端连接，LLM 凭据经反向隧道代理、不离开当前环境。同时提供独立 CLI 与 dsh 插件双形态，插件含远程会话面板、/remote-explorer 命令及 remote_* agent 工具。
  `v0.8.7` · [源码](https://github.com/btsd321/dsh-remote-explorer)
- **dsh-ssh-tunnel** — 多机 SSH 工作台：把远程服务器收进主机库、按项目授权，在右侧栏里开交互式终端或双栏 SFTP；模型用 SSHManager 工具远程执行命令、上传下载文件，密钥不进模型上下文。
  `v1.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/OMSociety/dsh-ssh-tunnel)
- **@orderg-x/dsh-mobile** — 在手机浏览器里用 DSH。点会话顶栏的手机按钮（或插件设置卡）打开手机访问、扫二维码，手机就打开电脑上 DSH 进程提供的官方网页界面，会话相同、实时同步，人不在电脑前也能跟进正在跑的任务、回消息、点批准。DSH 里内置一个网关（端口 18765）转发网页界面，并替手机处理桌面端登录。一个二维码在 Wi-Fi…
  `v0.3.0` · [源码](https://github.com/OrderG-X/dsh-mobile)
- **dsh-lan-guard** — 把官方 DSH Web UI 安全地开放到局域网：不改动 DSH 自身的回环绑定，另开一个带密码门禁、自签 HTTPS 与可逐个吊销的设备配对的反向代理端口，并提供手机扫码入口。
  `v0.7.6` · [源码](https://github.com/idoall/dsh-lan-guard)
- **dsh-remote-local-plugin** — 把 SSH 主机上的工作区接入 DSH：远程工作区、镜像会话、终端与文件访问、审批和原生 DSH 界面。需 DSH Desktop 0.2.1-rc.2，远端主机为 Linux 或 macOS。
  `v0.8.11` · [源码](https://github.com/Golden-Pigeon/dsh-remote)
- **dsh-rice-on-a-stick** — 将控制 dsh 的能力暴露为 MCP 和内置工具。
  `v0.2.0-rc.1` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/Leawind/dsh-rice-on-a-stick)
- **dsh-cherry-bridge** — 把 DeepSeek Harness 会话桥接到局域网内的 Cherry Studio 桌面端——二维码配对、14 个 cherry_* 工具（agent/会话/历史/交互）与设置页（设备管理、按工作区的工具启用范围）。
  `v0.1.11` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/SAXEM1997/dsh-cherry-bridge)
- **ds-harness-remote** — DeepSeek Harness 多端远程访问：从手机、平板、浏览器或另一台电脑继续进行中的会话，端到端加密通道（Noise IK + 自适应 Relay/WebRTC 传输），设备授权管理；远程端仅开放 ApiProxy 能力，支持 dsh-file-viewer 只读文件预览，不提供…
  `v0.5.18` · [源码](https://github.com/liguobao/ds-harness-remote)
- **dsh-coding-remote-kit** — DeepSeek Harness 移动配对远程插件：双平面白名单 RPC 上的端到端加密 Companion（局域网、Tailscale，可选 Cloudflare Quick Tunnel 或自建 rendezvous）。
  `v0.7.2` · 引擎 `>=0.1.1-rc.2 <0.3.0` · [源码](https://github.com/lninghaha/dsh-coding-remote-kit)
- **dsh-plugin-mobile-gateway** — DeepSeek Harness 的设备鉴权移动网关：通过 WebSocket 连接配套原生 iOS 客户端，支持会话、实时事件、任务、Goal、审批、命令和文件传输，并提供二维码配对与设备撤销。
  `v0.11.1` · [源码](https://github.com/Clarklevis1995/dsh-plugin-mobile-gateway)
- **@zmainer/dsh-wx-bridge** — 手机微信驱动当前环境 DSH：自建 iLink 桥 + 常驻 ACP 原生会话（上下文归 DSH、可 resume），手机会话自动登记进桌面工作区；支持图片识别、直接发文件（Excel/Word/PDF，由会话里的 agent 自行解析）与语音转写。审批可在微信里应答（编号卡片，ask/allow/reject…
  `v1.1.10` · [源码](https://github.com/zhy5/dsh-wx-bridge)
- **dsh-remote-web** — 手机浏览器远程控制 dsh web，人在哪都能用（免公网 IP）：官方托管中继 4G 即用，也可自建 relay；一条命令安装电脑端 bridge 与设置页「远程控制」面板（云端/自建切换、账号登录、bridge 启停、反馈）；隧道数据面端到端加密（E2EE：手机↔电脑端正文与 WS…
  `v0.7.4` · 引擎 `>=0.1.0-rc.6 <0.3.0-0` · [源码](https://github.com/mrRisega/dsh-remote)
- **dsh-reach** — 把 DSH 的审批卡与提问卡推送到 IM 渠道（先支持微信），可在聊天里直接作答，带会话控制台、逐渠道安全与开放推送服务。
  `v0.1.23` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-reach)
- **dsh-ssh-ops** — DSH SSH 运维终端：在主对话中直接指挥已连接的服务器（ssh_connect/ssh_exec/ssh_read/ssh_write/ssh_disconnect），右侧保留可交互的 xterm.js 终端。
  `v0.4.2` · 引擎 `>=0.1.5-alpha.1` · [源码](https://github.com/caoyiwei850/dsh-ssh-ops)
- **dsh-plugin-mesh** — 通过 UDP 组播或端口扫描发现局域网内的其他 DSH 实例，在侧栏面板中列出它们以及各自上报的能力，并可经局域网或自动下载的用户态 Tailscale 节点在两台机器之间双向派发任务。
  `v0.5.4` · [源码](https://github.com/peng456/dsh-plugin-mesh)
- **dsh-mobile** — 通过 Android App 或手机浏览器访问 DeepSeek Harness，支持安全局域网连接、远程访问、持久设备配对和可自定义移动界面。
  `v0.6.16` · [源码](https://github.com/saya-ch/dsh-mobile)
- **@zyfgood/dsh-mobile** — DSH 手机端 Web UI：带令牌认证的局域网服务，手机可浏览全部会话、通过 SSE 实时查看回复并继续对话；桌面 GUI 提供二维码入口，配合 dsh-whale-girl 0.3.0+ 现在还可以点桌宠鳍里的小手机打开面板。
  `v0.2.0` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/zyfgood/dsh-mobile)
- **dsh-in-hand** — 掌上 DSH（dsh-in-hand）：DeepSeek Harness 的手机端，不用装 App（PWA）。公网与局域网两个入口可随时切换；在手机上读会话、子代理、目标轮次、工作流、后台任务与待审批，和任意会话实时对话（流式回复、工具调用进度、随时停止、切换会话与模型），消息可排队并「立即发送」，支持上传与交付文件。…
  `v1.7.8` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/dingchenhui0618-arch/dsh-in-hand)
- **@artenx/dshb** — 为 DSH 提供多节点执行路由，将文件系统、Shell、子进程和 PTY 操作分发到本地、SSH 与 Docker 执行节点，并包含节点注册表、认证门禁、移动端管理 UI，以及可注入新对话的工作区自定义项目指令。
  `v0.1.17` · 引擎 `>=0.1.7-rc.1 <0.2.1-rc.2` · [源码](https://github.com/Artenx/dsh-honeybee)
- **dsh-wechat** — 以进程内 Cordis 插件的形式，通过腾讯 iLink bot 协议把微信私聊桥接到 DeepSeek Harness——双向收发文本、图片、文件与语音，微信内 slash 命令经原生命令注册中心解析（DSH 新增命令零改动可用），支持在微信端处理审批与提问，并提供 send_wechat 工具主动推送。
  `v0.13.3` · 引擎 `>=0.2.1-0 <0.3.0-0` · [源码](https://github.com/pan17/dsh-wechat)
- **@wingsky-1/dsh-lan-proxy** — 局域网访问 dsh web UI：HTTP/HTTPS/WS 转发 + TLS（自签名/自定义证书）；HTTP 自适应 Brotli/gzip 与 WebSocket permessage-deflate 双压缩；WS 半开探活，移动端切后台不僵死；启动令牌自动注入，LAN 设备免手工拿 token；DNS…
  `v0.2.10` · [源码](https://github.com/wingsky-1/dsh-plugin-hub)
- **@goodandready/dsh-remote-workspace** — 支持冲突感知镜像同步、端口转发和原生 Web UI 的 SSH/SFTP 远程工作区。
  `v0.3.23` · [源码](https://github.com/GooDAnDReaDY/dsh-remote-workspace)
- **dsh-remote-agent** — 把另一台电脑变成你的远程 Agent 同事：副机本地跑自己的 DSH 与完整 Agent 循环，所以链路断开时任务照常继续、模型凭证也永不离开那台机器。主机用 8 个 remote_* 工具派活，只收回 handoff 摘要与产物清单，成品按需拉取——中间产物留在副机。配对码接入，direct 或 relay…
  `v0.9.12` · [源码](https://github.com/zbzbhs/dsh-remote-agent)
- **@at-series/dsh-at-terminal** — DeepSeek Harness 原生 SSH 终端与 SFTP 远程工作区，支持 Agent 直连运维与三级安全沙盒。
  `v0.2.0` · [源码](https://github.com/xwamt/at-terminal-dsh)
- **@uumit-ai/dsh-uumit-remote** — 用 UUMit 账号在手机或其他电脑上打开这台电脑的 dsh web，不用自建服务器、不装其他程序：插件内置通道客户端连接 UUMit 托管的通道，侧栏里的面板负责配对和选择谁能用（仅自己、通过邀请链接或手机号授权的人、所有人），可随时撤销。需 dsh web 且 DSH >=0.2.1-rc.2。
  `v0.1.0-beta.3` · [源码](https://github.com/uumit-ai/dsh-uumit-remote)
- **dsh-ws-deflate** — 在不修改 DSH 安装目录的前提下，为 DSH 的 WebSocket 传输启用 permessage-deflate。
  `v0.1.1` · [源码](https://github.com/Wanderingss/dsh-ws-deflate)
- **@eternalloveone/dsh-palm** — dsh 的独立手机端界面：扫码配对设备信任、实时 SSE 同步、三通道完成通知（应用内 / Web Push / Server酱·Bark·Telegram）、离线发件箱、审批与提问面板、多提供方用量卡、PWA；从零为窄屏设计的原生手机 UI。
  `v1.6.4` · [源码](https://github.com/Eternalloveone/dsh-palm)
- **dsh-web-mobile** — DSH Web UI 移动端适配：窄屏好用，宽屏适用。
  `v3.2.1` · [源码](https://github.com/mexiaosqwq/dsh-web-mobile)
- **dsh-feishu-cui** — 免运维的远程 DSH——拿飞书私聊当界面，机器人出站长连接、不需要公网入口，工作区、会话（切换与改名）、模型、推理深度、权限预设、余额都用卡片操作，工具审批与 agent 反问也在同一个聊天里回。
  `v0.4.2` · [源码](https://github.com/wanjiaju3108/dsh-feishu-cui)
- **@linxin666/dsh-ssh** — SSH 远程运维面板：Web 终端、SFTP 传输、本地端口转发与一条命令并发集群执行，Agent 与面板共用同一份主机配置。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-web)
- **@linxin666/dsh-remote-web-ui** — 手机/PC 远程操控 dsh web 工作区：扫码配对、令牌门控通道、SSE 实时同步，提供移动端与完整桌面 GUI 两种远程形态。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-web)
- **@zyfgood/dsh-feishu-bot** — 通过 WebSocket 长连接把飞书机器人绑到 DeepSeek Harness：收到的消息跑在 agent 会话里并流式回传，/attach 等聊天命令管理活动会话，模型可调用 feishu_* 工具推送消息。
  `v0.9.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/zyfgood/dsh-feishu-bot)
- **dsh-local-link** — 以浏览器为核心、仅限局域网访问当前 DeepSeek Harness Web UI，支持一次性二维码配对、设备撤销、事件驱动诊断和保留插槽的移动端布局；无需配套应用、云中继或远程隧道。
  `v1.2.4` · 引擎 `0.1.0-rc.8 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.7-rc.2 || 0.2.0-rc.2 || 0.2.1-alpha.2 || 0.2.1-rc.2` · [源码](https://github.com/donoteatme/dsh-local-link)
- **dsh-server-deck** — DSH 服务器卡片仪表盘：每台主机展示在线状态、CPU、内存、磁盘与延迟，点卡片进入 xterm.js SSH 终端；支持导入 ~/.ssh/config，挂载为 better-sidebar 页签或独立右侧抽屉。
  `v0.4.1` · [源码](https://github.com/meyaomiao/dsh-server-deck)
- **dsh-plugin-remote-access** — 只把当前环境 DSH 网页界面开放给指定的一个网段（默认 Tailscale 100.64.0.0/10），不绑 0.0.0.0：网段外的对端一律拒绝，进入方式可选带票网址或 4–12 位数字/字母访问密码；远程页面可强制手机布局而不动当前环境界面，官方「通用设置」里的外观 / 字号大小 / 工作步骤展示 /…
  `v1.5.0` · 引擎 `^0.2.1-rc.1` · [源码](https://github.com/Mzy123l/dsh-plugin-remote-access)
- **@mzzsfy/dsh-auto-trust-all** — 动态信任所有实际到达的 Host 并把 web 默认绑定翻转为 0.0.0.0：泛域名等无法枚举的入口免改启动命令，认证层不动，超出容量的 Host 按 LRU 淘汰。
  `v0.3.1` · [源码](https://github.com/mzzsfy/dsh-plugin)
- **dsh-on-phone** — 让手机浏览器直接使用电脑上的 DSH 网页界面，远程通道建立在 Tailscale Serve 之上。两边除了 Tailscale 不用再装任何东西：没有专用 App、没有二维码、没有登录页，插件不设账号，也不中转你的内容。电脑端支持 macOS、Windows 与 Linux。
  `v0.8.13` · [源码](https://github.com/JauLukNgai/dsh-on-phone)
- **harness-relay-mcp** — 在 Web profile 中安装适配层，检测并写入 MCP 配置，供 Codex、Cursor 或 Claude Code 拉起 dsh --profile codex.
  `v0.2.19` · [源码](https://github.com/tonytanglab/deepseek-harness-relay-mcp)
- **dsh-qqbot-bridge** — 通过 QQ（官方 Bot API v2，仅单聊）远程控制 DeepSeek Harness 会话与工作区：列出/切换工作区、新建会话、压缩历史、切换模型，支持流式输出、Markdown 与审批转发。未做按用户门禁——任何能给该机器人发消息的人都能控制这些会话，消耗你的模型额度与文件权限。
  `v0.1.3` · 引擎 `>=0.2.0` · [源码](https://github.com/Jiangsubei/dsh-qqbot-bridge)
- **dsh-remote-file-system** — 模型可直接调用的 ssh 远程文件三件套：read_remote 按行号分页读远端 UTF-8 文本，write_remote 只新建文件、目标已存在即拒绝且没有覆写分支，edit_remote 做唯一匹配的字面替换，三者共用取自 ~/.ssh/config 的「别名:路径」一个 file_path 字段。
  `v0.2.0` · [源码](https://github.com/better-er/dsh-remote-file-system)
- **@riceawa/dsh-lan-gateway** — 把 DSH Web GUI 发布到局域网/公网，dsh 仍只绑定回环。除显式开启局域网免密外，所有来源均须登录换取 HMAC 会话 Cookie。提供自签名或自定义 TLS、用于明文 HTTP 代理的 secureCookies 覆盖项，以及让局域网纯 HTTP 来源正常打开工作区的 UUID shim。
  `v0.7.3` · 引擎 `^0.2.0-rc.1 || ^0.2.1-rc.1` · [源码](https://github.com/rice-awa/dsh-lan-gateway)
- **dsh-zen-remote** — 手机优先的移动端界面重排 + 配对码网关：经自建反代或 Cloudflare Tunnel 把 DSH 变成可安装、带推送的 PWA。
  `v2.2.5` · [源码](https://github.com/KyoMio/dsh-zen-remote)
- **@zyfgood/dsh-a2a** — Agent2Agent（A2A）协议桥：内置 A2A 服务端（agent card、message/send、message/stream SSE、任务 get/cancel/resubscribe、input-required 续答）；a2a_discover/a2a_send 等 4 个工具呼叫远端…
  `v0.2.1` · [源码](https://github.com/zyfgood/dsh-a2a)
- **dsh-my-remote** — 远程控制：把 ask / 审批 / 会话结束事件推送到外部通道 webhook，可用 token 鉴权在手机上回答问题、批准请求、查询状态或继续会话（npm: `dsh-my-remote`）。
  `v0.1.5` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-plugin-mobile-link** — DSH Mobile 的电脑侧连接器：连上可自建的公网 WSS 中转，手机在 4G/5G 下即可访问这台电脑上的 DSH 会话，电脑不需要公网 IP 也不用组网；中转只做鉴权与转发。
  `v0.6.6` · [源码](https://github.com/jayantTang/DSH_Mobile)
- **dsh-vps-manager** — 通过 SSH 密钥登录管理 VPS：22 条不走模型的 /vps- 命令（查看状态、按菜谱安装并先出计划再用 /vps-yes 确认、重启并等机器回来），对话里的终端（xterm.js + ssh -tt，可运行菜单脚本等交互程序），5 个按风险分级确认的 agent 工具，改文件自动备份与还原、改防火墙和 SSH…
  `v0.6.8` · 引擎 `>=0.1.5-rc.2 <0.3.0-0` · [源码](https://github.com/AIcivilization/dsh-vps-manager)
- **dsh-vps** — 一条命令把 DeepSeek Harness 部署到自有 VPS：零依赖登录网关加自动 HTTPS，反向代理原生 Web 界面，令牌保护的初始化向导，DSH 一键升级且失败自动回滚；作为插件在设置中新增「VPS 部署」页，可填表经 SSH 把 DSH 装到或卸出 VPS，并显示版本、升级、网关状态，以及扫码把 DSH…
  `v1.16.1` · [源码](https://github.com/AIcivilization/dsh-vps)
- **dsh-remote-gui** — 通过 SSH 隧道把远端 DSH 的 GUI 嵌进本地 DSH 界面，列出远端会话，并在本地实例与任意远端主机之间切换。
  `v0.1.3` · [源码](https://github.com/temotee2103/dsh-remote-gui)
- **dsh-web-service** — 让任何会说 HTTP 的东西驱动 DSH：47 条路由（REST + SSE），覆盖工作区、会话（创建/提示、SSE 实时生成、历史、统计、任务清单、中止、问答）、模型与全局默认模型、提供方、Agent Preset、设置命名空间、技能与工作区文件（含分片续传上传），另有 OpenAI 兼容的…
  `v0.3.7` · [源码](https://github.com/toddpan/dsh-webapi)
- **@zseven-w/dsh-android** — 在对话里直接操作 Android 设备——模拟器或 USB 手机，完全通过 adb 驱动：20 个 Agent 工具用于流式投屏、Gradle 构建运行、UI 树或 OCR 交互、logcat、进程与内存检查，并附带三键导航面板。
  `v0.1.0-rc.12` · [源码](https://github.com/ZSeven-W/dsh-android)
- **dsh-auth-tunnel** — 通过快速或命名 Cloudflare Tunnel 为 DSH Web GUI 提供密码保护的公网访问，并代理 HTTP/WebSocket 流量、改用应用内目录选择器。
  `v0.2.0-rc.2` · [源码](https://github.com/ai-eks/dsh-auth-tunnel)
- **@orbisapp/remote-dsh** — 提供 DeepSeek Harness 远程控制功能的原生 iOS/Android 应用，支持端到端加密、工作区浏览和会话实时更新等。
  `v0.5.1` · [源码](https://github.com/icodesign/orbis)
- **dsh-remote-tunnel** — 远程主机隧道管理器：把 dsh web 跑在远程 Linux 服务器上（systemd 守护、免 root），本地经自动重连的 SSH 隧道访问；远程端口自动分配并在服务器登记留档，支持多人共用与 audit 审查。
  `v0.2.1` · [源码](https://github.com/Linjiangxian0203/dsh-remote-tunnel)
- **dsh-feishu-assistant** — 给同事的运维请求通道——同事在飞书私聊里提的事先排进串行队列，由已配对的管理员在审批卡上放行后才进入那条共享的 DSH 会话（带注入的人设执行），回答回到提交人。
  `v0.2.0` · [源码](https://github.com/wanjiaju3108/dsh-feishu-assistant)
- **dsh-tailscale-console** — Tailscale 远程访问运维面板：健康检查、HTTPS 入口（tailscale serve）开关、macOS 代理绕过、中继服务器运维与 ACL 片段生成。
  `v0.4.8` · [源码](https://github.com/evanfang0054/dsh-tailscale-console)
- **dsh-astrbot-ingress** — 把当前环境 DeepSeek Harness agent 接到 AstrBot，从 QQ 等 IM 渠道驱动它：用 /dsh 派活、引用或 @ 机器人续聊、在聊天里回答审批与 ask_user_question（与 DSH 网页并行），结果、内联图片与文件卡片发回。含会话 / 工作区 / 模型 /…
  `v0.3.23` · [源码](https://github.com/CCYellowStar2/dsh-astrbot-ingress)
- **dsh-reverse-proxy-xc** — DSH 局域网反向代理插件 - 让手机/平板访问 DSH 获得完整功能，修复反代访问时设置面板无法打开的问题。
  `v0.1.8` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/xchannel1987/dsh-reverse-proxy-xc)
- **dsh-remote-workspaces** — 通过 SSH 把远程主机目录作为 Harness 工作区打开：read/write/edit/grep/glob 与 shell 命令经 SFTP、ripgrep、ssh2 exec 直接在远程主机执行，不做本地镜像；多主机注册表加密存储，本地沙箱策略依然生效。
  `v0.3.6` · [源码](https://github.com/januory/dsh-remote-workspaces)
- **@xiazhi88/dshgo** — 把只监听 127.0.0.1 的 dsh web 转发到局域网端口，供手机等设备访问；可选访问密码——浏览器输入，同仓库的 Android 客户端用指纹或面部解锁。新增带二维码的「局域网访问」设置页，内联 dsh-web-mobile（MIT，保留署名）提供移动端布局；Android…
  `v2.0.5` · [源码](https://github.com/xiazhi88/dshgo)
- **@tiphareth/dsh-hardssh** — 为 DeepSeek Harness 提供 SSH 工作区与运维：把服务器目录绑定为工作区，fs/命令经 cordis seam 替换透明路由到远端主机，并带 Web 终端、文件传输、隧道、集群执行与主机管理。
  `v0.2.6-alpha` · [源码](https://github.com/tiphareth0/dsh-hardssh)
- **dsh-pocket-relay** — 手机与远程访问 DSH Web 界面：局域网扫码即用，或用自建 relay 中继服务端（替代 cloudflared 隧道）随时随地连回电脑；每台设备独立凭据，可配对、查看与单独撤销；多台电脑共用一个中继并自动热备。
  `v1.0.2` · [源码](https://github.com/kinderao/dsh-pocket-relay)
- **dsh-remote-auth** — DSH 远程授权页：以可点击链接或二维码呈现当前进程的浏览器会话 URL，可选主机/网段白名单与 PIN 门禁。
  `v0.1.2` · [源码](https://github.com/wentao75/dsh-remote-auth)
- **@januory/dsh-gateway-agent** — 客户机接入插件：以单条出站 WebSocket 连接网关，把当前环境 dsh web 界面经隧道转发给门户，配对接入码 + HMAC 认证；无需入站端口、端口映射或公网 IP。
  `v0.2.2` · [源码](https://github.com/januory/deepseek-harness-gateway)
- **onebox-dsh-bridge** — DeepSeek Harness 的 Android 客户端实现:扫码配对 + 端到端加密云端中继,把当前环境 dsh web 桥接到万宝盒 App。
  `v0.2.0` · [源码](https://github.com/wangzhishou/onebox-dsh-bridge)
- **dsh-network** — 为 DSH Host 提供经认证的局域网、Tailnet 与公网 HTTPS 接入，支持持久主机身份、配对和二维码配置。
  `v0.1.0-rc.9` · [源码](https://github.com/baixianger/dsh-network)
- **dsh-weave** — 基于 Iroh 的可信 DSH 主机网状网络：提供加密的节点发现、远程会话投递与连通状态。
  `v0.1.0-rc.16` · [源码](https://github.com/baixianger/dsh-weave)
- **@zseven-w/dsh-ios** — 在对话里直接操作 iOS 模拟器或 USB 连接的 iPhone：22 个 Agent 工具用于启动、构建、按无障碍标识或 OCR 文本驱动 UI、列表行操作与 SwiftUI 预览热重载，并附带可点击拖拽的流式侧边栏面板。
  `v0.1.0-rc.10` · [源码](https://github.com/ZSeven-W/dsh-ios)
- **dsh-lark-claw** — DeepSeek Harness 的飞书/Lark 网关：按话题持久化会话、实时执行卡片、图片与文件输入、聊天内审批和提问、来源白名单，以及用自然语言创建可持久化的一次性或周期 Agent 任务。
  `v0.1.5` · [源码](https://github.com/Illuminated2020/dsh-lark-claw)
- **dsh-remote-dsh** — 在侧边栏顶部加一行，点击后整页切换成另一台 DSH 主机的 Web GUI（通过回环端口访问），并在该行显示那台主机的会话状态（运行中、有新活动、正等你回答）。
  `v0.1.1` · [源码](https://github.com/hutao562/dsh-remote-dsh)
- **@dshn/agent** — 把本地 dsh 网页通过带登录门禁的中继转发到公网 *.ds.hn 子域名(也可自托管到自己的域名),支持可选的端到端加密(PBKDF2 到 AES-256-GCM)。
  `v0.4.0` · [源码](https://github.com/jsdvjx/dshn)
- **dsh-web-lan-access** — Web UI 局域网/远程访问：为纯 HTTP 非安全上下文注入 crypto.randomUUID polyfill，局域网/Tailscale IP 直连时前端不再崩溃。
  `v1.3.2` · [源码](https://github.com/AcidGr/dsh-web-lan-access)
- **dsh-adapter-qq** — QQ 官方单聊机器人适配器：支持交互操作板、工作区会话管理与 Web UI 实时双向同屏。
  `v0.1.3` · [源码](https://github.com/jixishi/dsh-adapter-qq)
- **dsh-plugin-ssh** — 在 DeepSeek Harness 内使用 SSH 终端、SFTP 文件传输与文本编辑，并通过宿主模型排查服务器问题。
  `v0.1.0` · [源码](https://github.com/techflag/dsh-plugin-ssh)
- **dsh-webui-mobile** — DSH Web 界面的移动端外壳：抽屉式侧栏、可拖拽悬浮按钮、移动端输入框修复，以及悬浮在输入框上方的图片上传按钮（原生相册/拍照，走加图校验管线），桌面端零影响。已发布到 npm（dsh-webui-mobile）。
  `v0.4.4` · [源码](https://github.com/bbtssama/dsh-webui-mobile)
- **dsh-plugin-mobile-bridge** — 带令牌鉴权的 REST 与 SSE 接口，扫码配对后可在手机 App 上看会话、发消息、批准工具调用。
  `v0.1.0` · [源码](https://github.com/ijry/DeepSeek-Harness-Desktop-Ultra)
- **dsh-herdr-site** — 让 Herdr 认识 DSH 面板：把 agent 的 working/idle/blocked 状态报给 Herdr（含 DSH 本身没有的 blocked 等待态），支持面板跳转与 --wait。（状态上报 / 状态显示 / 终端集成 / 面板跳转）
  `v0.1.0` · [源码](https://github.com/WuJiaoJue/dsh-herdr-site)
- **@moyu-good/dsh-lark-bridge** — 飞书/Lark 深度通道：原生思考过程消息、审批卡片、goal/todo 实时卡片、workflow 展开行、会话全文检索、后台任务与子代理结算通知。其设计以飞书应用自身的可见性范围为访问边界——凡是应用允许触达的人都能驱动 agent 并回答它的审批请求，除非填写可选的发送者/群组/审批人白名单收窄。
  `v0.6.1` · [源码](https://github.com/moyu-good/dsh-lark-bridge)
- **dsh-remote-tunnel-easy** — 在设置中扫描二维码，通过 cloudflared 快速隧道在手机上于当前会话中打开 DeepSeek Harness 网页端。
  `v1.4.2` · [源码](https://github.com/Raiyan007-gb/dsh-remote-tunnel-easy)
- **dsh-gateway** — 为 DSH Web 界面提供 HTTPS + 登录保护的远程访问网关：局域网内其它设备可安全访问，配置端口映射后可从互联网访问。默认 fail-closed（仅当前环境监听、无内置账号，配置后才能登录），配置与安全说明见 README。
  `v1.7.0` · [源码](https://github.com/clarknu/dsh-gateway)
- **@creait/dsh-tailnet-gateway** — 在 dsh 仍绑定回环地址的前提下，为 Web 界面提供基于身份的 Tailscale 访问：由 `tailscale serve` 对外发布的 127.0.0.1 代理，仅当其标记的 Tailscale 登录账号在允许列表内时才放行请求，并可另按设备白名单限制；这样受回环检查保护的特权 /api…
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **dsh-dispatch** — 面向手机的指挥台而非 Web UI 镜像：从 PWA 把任务派发进隔离的 git worktree，工具审批推送通知支持手机/桌面「谁先答谁算」（绝不自动批准），多机会话看板，以及可自建的端到端加密零知识中继。
  `v0.4.0` · [源码](https://github.com/alextangson/dsh-dispatch)
- **dsh-alpha** — DSH 的多机多 Agent 编排与控制平台：发现各设备上的 Agent 与工作区，按机器、仓库、能力和负载将任务路由到本地或远程 Agent Runtime，统一回传进度、审批与结果，并在断线后恢复持久任务。
  `v0.2.0` · [源码](https://github.com/songofhawk/dsh-alpha)
- **dsh-plugin-qr-connect** — 「设置」按钮上方的一键二维码，让手机通过带鉴权的反向代理连接 Web 界面。
  `v0.1.3` · [源码](https://github.com/mervyn-teo/dsh-plugin-qr-connect)
- **dsh-swarmdrop** — 在 agent 和你自己的手机之间开一条设备通道：agent 把刚产出的文件发过去，手机传回来的东西可以在输入框里 @ 引用。底层经 SwarmDrop CLI 走端到端加密的 P2P，不需要账号，也不需要公网 IP；节点状态、已配对设备与扫码配对都在侧边栏面板里。
  `v0.7.1` · [源码](https://github.com/swarm-apps/dsh-swarmdrop)
- **dsh-lan-access** — 局域网访问：Web GUI 绑定 0.0.0.0 + crypto.randomUUID polyfill（修复非安全上下文下 RPC 崩溃）。
  `v0.1.3` · [源码](https://github.com/Leon0555/dsh-lan-access)
- **dsh-full-remote** — 远程访问 DeepSeek Harness 且服务端 API 完整：转发时改写 Host/Origin，恢复其他方案必定 403 的 settings.* / credentials.* / host.listDirectory。令牌门、按设备会话、可选首访审批。
  `v0.3.7` · [源码](https://github.com/JUANWANG-BUAA/dsh-full-remote)
- **@dsh-ssh/dsh-ssh** — SSH 远端工作区——在远端机器上执行 bash、文件读写、glob 与 grep（基于 sshd 的 exec + SFTP），远端零安装，纯附加。
  `v0.1.3` · [源码](https://github.com/dsh-ssh/dsh-ssh)
- **dsh-links** — Android 配套桥接：局域网扫码配对（可吊销的设备 Token 与 TLS 指纹）、手机连接与设备管理面板，以及向配对原生 App 提供会话、实时事件与审批的 HTTPS 接入代理。
  `v0.1.0-beta.1` · [源码](https://github.com/lunaship/dsh-links)
- **dsh-devices** — 去中心化多设备舰队：mDNS 同网发现、密钥配对、SSH 跨网直连指挥。
  `v0.1.2` · [源码](https://github.com/polaris-smart/dsh-devices)
- **dsh-desktop-automation** — macOS 桌面控制插件：agent 像人一样操作非浏览器应用（剪映/PS/WPS/原生客户端）——14 个工具覆盖鼠标/键盘/滚动/应用/窗口/截图，并整合视觉闭环（desktop_see 识图 + desktop_locate UI 定位坐标，复用 dsh 既有视觉凭据）。服务 GUI 会话按需拉起，非登录自启。
  `v0.1.1` · [源码](https://github.com/Junkrat9527/dsh-desktop-automation)
- **dsh-mobile-hanui** — DSH Web 界面的移动端适配：窄屏下把桌面三栏布局改造成触屏友好的手机布局（覆盖式抽屉、可拖拽悬浮按钮、全屏弹窗、上滑加载历史），1024px 断点内生效，桌面端零影响。 — 基于 dsh-mobile-gate 的完整移动端 PWA：安全远程访问网关 + 可安装到主屏（manifest + service…
  `v0.2.5` · [源码](https://github.com/Z-6354/dsh-mobile-hanui)
- **dsh-streaming-mcp-bridge** — DeepSeek Harness 流式 MCP 桥接：将实时会话事件作为 MCP 进度输出，并提供 cc-connect/飞书 ACP 适配器。
  `v0.1.1` · [源码](https://github.com/yabolee-kkk/dsh-streaming-mcp-bridge)
- **dsh-mobile-pwa** — 基于 dsh-mobile-gate 的完整移动端 PWA：安全远程访问网关 + 可安装到主屏（manifest + service worker）+ 离线可用 + 触屏手势（下拉刷新/边缘返弹/捏合缩放字体）+ agent 完成推送 + 触屏优先布局，桌面零影响。
  `v0.1.0` · [源码](https://github.com/zylzyqzz/dsh-mobile-pwa)
- **@froststarinquire/dsh-remote-access-web** — DSH Web GUI 反向隧道：通过 frp 把 `dsh --profile web` 发布到公网地址，目录选择器改用应用内浏览器，手机或远程机器可直接打开并管理工作区。
  `v0.1.0-rc.6` · [源码](https://github.com/wikkd/dsh-remote-access-web)

## 技能包 · skill（109）

- **dsh-mattpocock-skills-deck** — 安装即自带mattpocock/skills v1.3.1的27个工程与效率技能，无需手动装技能。400亿token打造本插件，在原始技能之上提供10倍的开发效率，也能帮助新手更快上手该技能套件。全力支持GitHub issue；Markdown为预览版；GitLab暂不支持。感谢您的使用和支持💗
  `v1.9.0-beta.17` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck)
- **@michengai/dsh-agency-agents** — 增加可召唤的领域专家名单，专家以子代理运行，主会话保留任务和最终答复。
  `v1.2.13` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-agency-agents)
- **@wenaixi/dsh-ponytail** — DeepSeek Harness 插件：DietrichGebert/ponytail 懒人 senior 模式与七阶梯子完美移植，6 个技能描述双语自由切换，各个技能自由开关，零 tool 注册，全场景零缓存破坏。
  `v5.6.2` · 引擎 `>=0.2.0-rc.1 <=0.2.1` · [源码](https://github.com/Wenaixi/dsh-ponytail)
- **dsh-skill-tag** — 按标签筛选技能：给 DSH 技能打标签，再用布尔表达式为每个工作区或对话选出下发给模型的子集（例如 `pdf + docx` 或 `aegis * plugin`）。命中以外的技能会被 deny-shadow 真正从模型目录里移走，而不只是在设置页隐藏；表达式之外的技能可手动添加或强制禁用，另附带…
  `v0.1.6` · 引擎 `>=0.2.0-rc.1 <1.0.0` · [源码](https://github.com/aawef/dsh-skill-manager-tags)
- **dsh-amphoreus** — 把 δ-me13（翁法罗斯）的 13 张黄金裔角色技能卡变成席位工作区：逐席配色与壁纸、首轮自动注入技能卡、对话表情、每席记忆便签与预设、Alt+数字切席，以及用于派发与移交的总览画布；技能套件本身从可配置的本地目录读取，不随插件打包。
  `v0.5.1` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/xi-kari/dsh-amphoreus)
- **brooks-lint** — 提供六个代码质量技能，涵盖代码审查、架构审计、技术债、测试质量、健康看板与修复。
  `v1.9.1` · [源码](https://github.com/hyhmrright/brooks-lint)
- **dsh-logicprobe** — 声称核查技能：将设计文档与计划中的每条声称对照代码库事实核验，行为类声称升级为状态机/数据模型逻辑原语验证，支持前后回归、领域约束与并发风险挖掘。
  `v1.4.2` · [源码](https://github.com/AmethystLuna/logicprobe)
- **dsh-embedded-workbench** — 嵌入式 C/C++ 固件开发工具箱：代理与技能覆盖 FreeRTOS、中断、NVM 存储、Keil MDK、ARMCLANG、HardFault 分析、状态机、架构原则与 LVGL 陷阱。
  `v0.9.5` · [源码](https://github.com/AmethystLuna/embedded-workbench)
- **dsh-fact-check** — 事实核查技能：不依赖模型记忆，去公开互联网核实——把论断拆成可独立验证的事实点，先按事实范畴（政策、学术、医疗、金融、灾害事故、食品安全、科学常识、教育考试、体育、娱乐名人、司法案件等）选定该范畴的一手来源阶梯，国内外信息生态并行搜索，抓取一手页面并按来源类型分级，再用质疑关键词反查一轮，最后结论先行地输出报告，每条论…
  `v1.5.0` · [源码](https://github.com/7starsseeker/dsh-fact-check)
- **@chtholly-fan/dsh-cpp-optimization** — C++ 审查技能：先探测目标工程真实的 C++ 标准再给建议，随后按 RAII 与所有权、移动语义、异常安全、性能与内存、容器与算法、并发、模板与编译期、标准边界、类型安全、ABI 与接口设计逐条给出结论，每条含检查点、原因、反例→正例与适用标准。
  `v1.1.0` · [源码](https://github.com/ChthollyFan/dsh-cpp-optimization)
- **dsh-mode-skills** — dsh 的 Skill（技能）管理页：按 Agent 模式把每个 Skill 设为开、仅手动、仅模型或关；从会话历史统计每个 Skill 在各模式里被加载的次数；搜索 skills.sh 并从 GitHub 安装；从 Codex、Claude Code 或文件夹导入；新建、编辑、保存版本，删除的 Skill…
  `v0.4.0` · [源码](https://github.com/xiaohai-78/dsh-mode-skills)
- **dsh-vehicle-dynamics** — 把 Gillespie《车辆动力学基础》整本书做成工程检查单：十章 164 张卡，单一入口两级路由。每张卡给出所需输入、执行步骤、方法失效的边界条件，以及回查用的页码——原理讲解仍在原书里。不复制原书任何连续段落；卡内记录了约 77 处原文缺陷（错印、OCR 损坏、前后矛盾）。本包是学习辅助，不能替代原书。
  `v1.0.2` · [源码](https://github.com/Qiujiyuantiantian/dsh-vehicle-dynamics)
- **dsh-biodsh** — 生信智能体预设，含 17 个 BioDSH 分析技能（单细胞、bulk RNA-seq、生存分析、回归、方差分析）、可用 skill_library 工具检索的 2000+ 技能库、按消息自动选技能和按时间/步数的收敛护栏。
  `v1.0.0-preview.1-2` · [源码](https://github.com/sagirimo/BioDSH)
- **lunheng-article-pipeline** — DSH bundle 技能包：把深度长文生产（学术论文 / 行业分析 / 商业评论）拆成 9 角色流水线——T1 文献 / T2 数据 / T3 案例三线并行检索、T4 分析、T5 写作、T6 批判伙伴、T7 审计、T8 终检（主控亲执行）、T9 同行评审，跨 6 个阶段，含三角验证、M 门 26 项终检（25…
  `v19.27.3` · [源码](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh)
- **@goodandready/dsh-goal** — DeepSeek Harness 的目标模式与自主执行插件：顶部吸附横幅在每轮对话中保持当前目标可见，同时 Agent 自主推进完成目标。
  `v0.2.33` · [源码](https://github.com/GooDAnDReaDY/dsh-goal)
- **@maoleijin/dsh-mattpocock-skills** — 将完整 mattpocock/skills 技能树打包为 DSH 插件，保留上游调用策略，并在自动同步上游时校验和应用精确匹配的 DSH 语义适配层。
  `v0.2.2` · 引擎 `>=0.1.0-rc.7 <0.3.0-0` · [源码](https://github.com/MAOLEIJIN/dsh-mattpocock-skills)
- **dotnet-skills** — 微软官方 .NET/C# AI 编码智能体技能的 fork，额外打包为 DeepSeek Harness 插件——覆盖开发、测试、诊断、迁移与 AI 集成。
  `v0.2.4` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/flyneth/dotnet-skills)
- **@cloudplugin/scenes-skill-creator** — Web 界面上的技能创建面板：拉取官方 creator 技能，把需求交给华为云 / 通用 / REST API 三个 creator 之一执行创建，随后按 10 分制评测产物，未达 8.5 分就把逐项扣分交回 creator 修改直到通过。
  `v0.0.4` · [源码](https://github.com/wasteoneslife/scenes-skill-creator)
- **@dotdance/dsh-skill-scope** — 给你的 Agent 减负：Skill 与 MCP 一键启停，让上下文只装这一轮真正要用的能力。关掉的 skill / MCP 不再进入模型上下文，更干净，更省 token。
  `v0.3.1` · 引擎 `^0.2.0-rc.2 || ^0.2.1-0` · [源码](https://github.com/dotdance/dsh-skill-scope)
- **@wingsky-1/dsh-verify-isolated** — 面向 DSH 插件开发的隔离环境浏览器验证 skill：一条命令拉起临时 DSH_HOME、独立 `verify_<随机>` profile、独立端口与独立浏览器实例，退出自动清理，不污染正在使用的 profile；自带零依赖 raw-CDP 浏览器驱动（快照 / 点击 / 截图 / 求值）与可选隔离审计。
  `v0.2.10` · [源码](https://github.com/wingsky-1/dsh-plugin-hub)
- **dsh-skill-writing-plans** — 添加 writing-plans 技能，在写代码前生成结构化实现计划文档，简单任务直接执行，复杂任务提供执行方式选择。
  `v0.2.0` · [源码](https://github.com/linlin539/dsh-skill-writing-plans)
- **@astron-team/skillhub-dsh** — 在 DeepSeek Harness 内浏览、搜索 SkillHub 技能，并管理本地技能的安装、更新和卸载。适配 DSH 0.2.0-rc.2 与 0.2.1-rc.2，暂不兼容 0.2.1-rc.3。
  `v0.3.1` · [源码](https://github.com/iflytek/skillhub)
- **dsh-pdf2md** — 把 PDF、Word、PPT、Excel 转成保留标题层级的 Markdown 或纯文本；遇到没有文字层的扫描件会主动拒绝（退出码 2），不会写一个空文件骗过下游，并指明可改用 OCR（dsh-scan2md）。需 Python 3.10+ 并安装仓库 requirements。
  `v0.1.2` · [源码](https://github.com/Qiujiyuantiantian/dsh-pdf2md)
- **dsh-scan2md** — 把扫描版 PDF（影印书、拍照件）OCR 成 Markdown，并按“一本书要跑约一小时”来设计：逐页写检查点，中断可续跑；进度日志随时可查；质量报告点名空白页和低置信行。需 Python 3.10+ 并安装仓库 requirements；首次运行会下载 OCR 模型。
  `v0.1.1` · [源码](https://github.com/Qiujiyuantiantian/dsh-scan2md)
- **@montersy123/dsh-skill-market** — 浏览、搜索并安装公开的 SkillHub 技能库,启用、停用、更新或卸载都不必离开 Harness。分类按钮带该分类的上游总数;详情抽屉提供文件树、版本历史、权限、第三方安全扫描结论与上游指标等页签。装好的技能会作为一个普通本地技能写入 harness 的技能根目录,而「停用」是把它的目录移出该根目录,不是打标记。
  `v2.0.7` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/montersy123/dsh-skill-market)
- **dsh-life-decision-guide** — 按《高性价比人生指南》765 条正文回答人生决策：先查条目，按成本与收益排序，每条注明第几节第几条。
  `v0.1.0` · [源码](https://github.com/MonkeyGarry/dsh-life-decision-guide)
- **@dsh-gis/dsh-opengis-skill** — 把 opengis-skills 的 32 个 gis/ 技能（GDAL、QGIS、GeoServer、PostGIS、PROJ、PDAL、GRASS GIS、JTS、GeoPandas、Shapely、CesiumJS、OpenLayers、Leaflet、deck.gl 等）打包进 DSH…
  `v0.1.3` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/znlgis/dsh-opengis-skill)
- **tripo-dsh** — 通过 shell 驱动 tripo-cli 的 Tripo 3D 生成 Skill：文生 3D、图生 3D、绑骨与走跑动画、减面与 LOD 链，导出 GLB/FBX/OBJ/STL/USDZ/3MF，支持国内站与海外站账号的无头设备码登录；npm 包名 `tripo-dsh`。
  `v0.1.4` · [源码](https://github.com/VAST-AI-Research/Tripo3D-Plugin-dsh)
- **@sunjuntao/dsh-prompt-library** — DSH提示词库插件：支持提示词增删改查、分类标签、导入导出、AI智能优化、选中文本一键剪藏，附带侧边栏与词库助手气泡提醒。
  `v0.17.2` · [源码](https://github.com/master1Sun/dsh-prompt-library)
- **@linxin666/dsh-client-ui-skill-explorer** — 技能中心：按来源分级浏览已加载的全部 skill，启用/禁用模型调用、创建新技能、删除进可恢复回收站。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-web)
- **@restregular/dsh-skill-center** — 当前会话的技能中心面板：列出可见技能及其提供方与来源根目录，阅读 SKILL.md，开关模型/用户调用，并可创建、软删除技能；随包附带 skill-authoring 技能与 skill_create 工具。
  `v0.3.11` · [源码](https://github.com/RestRegular/dsh-skill-center)
- **minecraft-dev** — 面向 DeepSeek Harness 的 Minecraft 开发技能与工具：8 个技能覆盖 Paper/Spigot 插件、Fabric、Forge 与 NeoForge 模组、大型模组附属开发，以及 Minecraft 1.7.10 至 26.x 全时代的 Gradle/JDK 构建配置；另含…
  `v0.10.1` · [源码](https://github.com/sikadi233-hub/minecraft-dev)
- **@istarry/dsh-skill-suite** — Agent技能：在管理页里浏览、开关、编辑技能，也能让 Agent 自己写新技能。
  `v0.1.2` · [源码](https://github.com/iStarryDust/dsh-skill-suite)
- **dsh-plugin-guide** — DSH 插件开发知识库，作为按需加载的 agent 技能随 bundle 安装：官方约束、任务工作流、API 参考与社区踩坑，写插件时让 DSH 自己查。
  `v0.3.39` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-plugin-guide)
- **rainskills** — 为 DeepSeek Harness 注册 RainSkills 引导技能，用于通过 Rainbond 部署、排障和验证应用。
  `v0.1.46` · [源码](https://github.com/goodrain/rainskills)
- **dsh-skill-hub** — DSH Web GUI 技能中枢：基于官方 ctx.skills 注册表浏览、搜索、启停、查看、诊断并新建本地技能，附技能市场：来源快照跟踪、一键全量更新。
  `v0.3.26` · [源码](https://github.com/cheshireez/dsh-skill-hub)
- **dsh-skill-ballistic-simulation** — 内/外弹道学的论文复现与代码编写 skill。前置：LibreOffice Kit（PDF 渲染）+ 视觉 API key（如千问，公式 OCR）。
  `v0.1.0` · [源码](https://github.com/bingbinggod369/dsh-skill-ballistic-simulation)
- **dsh-plugin-upgrade** — 面向 DeepSeek Harness 插件作者的升级技能：一个包只放一份走廊索引，自动识别调用方的 peer 区间并路由到对应已封版的升级卡片（0.1.3-alpha.1 至 0.1.5-rc.1 为 A+B 两条腿，0.1.5-rc.2 至 0.1.6-alpha.2 为 C 腿），并附带以 bundle 技能与…
  `v2.1.1` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-plugin-upgrade)
- **dsh-ctf-solve-teach** — 教学式 CTF 解题技能：每步讲清套路、工具选型与底层原理，收尾在 solves/<题目名>/ 生成可复现 Writeup，并用九章质量门校验。
  `v1.0.2` · [源码](https://github.com/Wangxiaolu0716/ctf-solve-teach)
- **dsh-trip-planner-cn** — 把境内旅行规划技能注册进 DSH 技能目录：逐小时每日时间线、12306 与携程/去哪儿预订深链、离线 KML 与七套 HTML 主题。需 PATH 上有 Python 3.9+（内置脚本仅依赖标准库）。
  `v0.1.2` · [源码](https://github.com/ChenYiming-aaa/better-trip-planner)
- **@wenaixi/dsh-superpower** — DeepSeek Harness 插件：15 个 obra/superpowers 工程纪律技能，技能描述中英双语自由切换，每一个技能本身自由开关。
  `v8.0.0` · [源码](https://github.com/Wenaixi/dsh-superpower)
- **dsh-remotion** — Remotion 官方 12 技能：React 编程式视频（动画/音频/字幕/3D/地图/图表/渲染/Studio），安装即用，附随包资源完整性自检。面板内置 4 步首次使用引导，看一次后不再出现。
  `v0.6.0` · [源码](https://github.com/STARDUSTLC666/dsh-remotion)
- **dsh-hyperframes** — 同步 HyperFrames by HeyGen 官方上游的二十一技能：HTML 写视频/动画/关键帧/音频与音乐转视频/CLI/注册表/幻灯片/口播重剪/网址·产品·PR 转视频/Studio 时间轴规范等，附随包资源完整性自检。面板内置 4 步首次使用引导，看一次后不再出现。
  `v0.7.0` · [源码](https://github.com/STARDUSTLC666/dsh-hyperframes)
- **@kissfire/dsh-skill-map** — 在右侧栏用一个或多个「工作区」给已加载的 skill 分类：每个工作区有自己的分类表和每个 skill 的归属，分类可就地新建、改名、排序、删除，skill 可拖动或用选择器改归位；首次使用可以让这个 profile 的模型从零分一版，也可以先自己建分类再让模型按分类分配。点击行复制 /skill-name，悬停展开…
  `v0.3.2` · [源码](https://github.com/kissfirembx/dsh-skill-map)
- **dsh-skills-nexus** — 通用 skill 适配器，将含 SKILL.md 的 GitHub 仓库克隆并 symlink 到官方 skills 根目录，注册为 DSH skill。
  `v0.7.0` · [源码](https://github.com/xiaxi626/dsh-skills-nexus)
- **dsh-my-skill-manager** — Skill 管理：按全局 / 项目两个范围查看 skill 列表，并按项目启用或禁用；被禁用的 skill 不会注入该会话（npm: `dsh-my-skill-manager`）。
  `v0.1.12` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-skill-scoreboard** — DSH 的 Skill 使用记分板：同时记录按会话去重与每次加载两种次数，统计 skill 工具调用与直接 read skill 文件两种记分来源，设置页三选项卡（Skill 排行 / 会话榜 / 管理）展示，支持分页与记分 JSON 导入导出。
  `v1.1.2` · [源码](https://github.com/EIGHTfs/dsh-skill-scoreboard)
- **dsh-multiplatform-balance** — 多平台余额 Agent 技能与工具：查询 DeepSeek、豆包 / 火山引擎、千问 / 阿里云百炼、混元 / 腾讯云以及自定义 HTTP 接口的账户余额；只读，内置 60 秒缓存。
  `v0.1.1` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/bjzkhy/dsh-multiplatform-balance)
- **dsh-mastery-loop** — 从课程材料建一份 Markdown 知识库，然后出题刷到每个知识点都达到目标正确率；每题都必须写出思维链。
  `v0.2.0` · [源码](https://github.com/Noct2vis/dsh-mastery-loop)
- **superpowers-dsh** — DeepSeek Harness 版 Superpowers 技能包：移植自 obra/superpowers 的 TDD、调试、规划与协作技能，以 Cordis 插件安装并注册 14 个技能（零运行时依赖）。
  `v0.3.0` · [源码](https://github.com/LayneChai/superpowers-dsh)
- **@yanglaofish/dsh-skill-manager** — DeepSeek Harness 技能生命周期管理：技能库（纯技能池）、工作区启用白名单、会话勾选三层模型；Web 设置面板与对话页内嵌视图，支持技能文件浏览/编辑、zip 与文件夹批量导入、引擎实际加载校验。
  `v2.1.0` · [源码](https://github.com/yanglaofish/dsh-skill-manager)
- **@wulongxi/dsh-skills-hub** — DSH Web GUI 的技能中心面板——搜索网络技能市场（SkillHub、skills.sh、GitHub），一键安装技能到用户或项目根，并管理本地技能（启停、创建、编辑、删除、预览）。
  `v0.1.1` · [源码](https://github.com/WLX2007/DSH-SkillsHub)
- **dsh-skill-starter** — DSH 技能管理器，带技能包机制。技能以带版本的包安装，升级时绝不覆盖你改过的文件，只跳过并如实报告。另自带 6 个基础技能、按「你遇到的问题」分组的面板，以及让模型在对话里直接读写技能库的工具。
  `v0.3.0` · [源码](https://github.com/ymck-x/dsh-skill-starter)
- **dsh-skill-trace** — 面向 DeepSeek Harness 的只读 Skill 检视器。它显示一次对话实际加载过哪些 Skill（只凭观测到的加载证据）、当前环境又能发现哪些 Skill，并为每个 Skill 提供一页详情：左列在框架、证据、验收、评测、步骤证据、本次运行逻辑、有修改事务时的本次修改前后对比、定义事实与…
  `v1.4.0` · [源码](https://github.com/PolinniZhong/dsh-skill-intelligence)
- **dsh-video-pipeline** — 把一条短视频生产流水线的 19 个 skill（1 总入口 + 1 编排 + 17 原子）内置进 agent 技能目录：中文配音读音校正、文生图与文生视频、图片运镜、成片合成、封面、成片核验、数据复盘、四平台发布。本包只提供 skill 与脚本，不安装任何工具：要真跑通流水线，还得当前环境装好 ffmpeg、Python…
  `v0.1.1` · [源码](https://github.com/439436269-ctrl/dsh-video-pipeline)
- **dsh-answer-me-with-html** — 把复杂问题回答成一页可视化 HTML：模型只写简短的 Markdown 草稿，随包附带的零依赖 `am` 命令行负责排版、配色与图表坐标。以上游 answer-me-with-html 技能原样内置，是纯技能的 DSH bundle，不含 Host 代码。
  `v0.5.0` · [源码](https://github.com/wjvalue/dsh-answer-me-with-html)
- **dsh-skill-center** — 在 DSH Web GUI 里浏览、预览并安装公开的 Agent Skills，聚合五个来源（claudeskills.info、skillsmp.com、awesome-claude-skills 仓库坐标表、Anthropic 官方仓库、已装 DSH 插件自带的技能包）。安装按 commit…
  `v0.4.1` · [源码](https://github.com/tuoLuoSuan/dsh-skill-center)
- **dsh-skills-anywhere** — 实时技能提供器：把 60+ 个其他 Agent（Claude Code、Codex、Cursor、Gemini CLI、Copilot）的技能目录、Claude Code 插件市场以及任意 git 技能仓库中的技能接入 dsh 目录，零拷贝零软链接；自动去重、修复 frontmatter、处理同名冲突，并附带…
  `v0.19.0` · [源码](https://github.com/noteflowai/dsh-skills-anywhere)
- **dsh-skills-manager-plus** — 在 DSH 设置中管理技能与命令：跨全局与项目作用域查看、启用/停用、编辑、删除与添加技能，并把常用提示词保存为斜杠命令。
  `v0.2.2` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/appthin/dsh-skills-manager-plus)
- **dsh-ppt-flashmade** — 从需求生成 PPTX：规划与分镜门、pptwise + ppt-master 页级作者、设计档案 pass、渲染页图快照与渲染审计，以及把页图交给支持图片的模型自评的工具。
  `v0.7.1` · [源码](https://github.com/Bingtang1019/dsh-ppt-fusion)
- **@aa2246740/dsh-skillhub** — 浏览和管理 DSH 及受支持 Agent 主目录中已有的用户技能。
  `v1.0.7` · [源码](https://github.com/aa2246740/dsh-skillhub)
- **@dhicoc/dsh-wuyun-liuqi** — 完整 wuyun-liuqi（五运六气）中医运气学技能包，封装为 DeepSeek Harness 插件：年度与客气推算、临床辨证、病机推演。
  `v1.3.0` · [源码](https://github.com/dhicoc/dsh-wuyun-liuqi)
- **@vigalai/dsh-plugin-zerone** — 会进化的项目级 Agent：以 SDD 规格驱动掌舵全流程，内置 16 个技能覆盖澄清、PRD、issue、编码、定位、验收、审查；会记忆、会沉淀，越用越懂你的项目。
  `v0.1.4` · [源码](https://github.com/yahoolcj/dsh-plugin-zerone)
- **dsh-plugin-skill-autoroute** — 对每条用户指令自动做一次确定性的技能路由，让技能目录在模型作答之前就被查阅，而不是等它自己想起来。宿主侧只依据指令关键词与目录元数据打分，不调用 LLM 也不做向量检索，然后向该步追加恰好一条带生产者标签的消息：默认是候选排名简报，分数过线时改注入冠军技能的 SKILL.md…
  `v1.1.1` · [源码](https://github.com/SOH4C4759/dsh-plugin-skill-autoroute)
- **@weibaohui/skills-management** — 技能市场：一个页面管理当前环境所有 coding agent 的技能，一键收编进 DSH 用户库；内置 6600+ 技能市场，支持注入开销（≈token）统计与模型可见性治理。
  `v0.9.1` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/skills-management)
- **dsh-brewreel** — 从分镜 JSON 生成 1080×1920 竖版宣传片，含 7 个工具（doctor、setup、catalog、guide、validate、render、verify），用 Remotion 本地渲染。
  `v0.6.0` · [源码](https://github.com/Finderchangchang/brewreel)
- **@jasonfreelab/dsh-superpowers** — 将 obra/superpowers 方法论移植为 14 个原生 DSH 技能，覆盖规划、TDD、调试与代码评审。
  `v0.3.1` · [源码](https://github.com/JasonFreeLab/dsh-superpowers)
- **dsh-typesafe-ai-skill** — 把 TypeSafe / Jev（System One 判断模型）的构建技能注册进 DeepSeek Harness 的全局技能层，让每个会话都能用带类型的判断做分类、路由、打分、抽取和置信度门控，取代「调大模型再解析回复」。不含任何密钥，API key 由使用者通过 OPENROUTER_API_KEY 提供。
  `v1.0.1` · [源码](https://github.com/chen112233usa/dsh-typesafe-ai-skill)
- **@wisdoverse/dsh-skills-manager** — 根据提示词自动激活已安装的 Skill，应用 Skill 声明的生命周期 Hook 与工具策略，并通过设置页或 skill_manager 工具管理 GitHub 托管的 Skill。
  `v1.0.6` · [源码](https://github.com/Wisdoverse/dsh-skills-manager-plugin)
- **gongwen-skill** — 中文公文全流程处理工具：GB/T 9704 格式检查、自动修复、内容修订（红色标注+删除线）、模板生成、Markdown 转公文、版头/版记/页码注入，覆盖通知/请示/报告/函/会议纪要等 24 类公文。
  `v2.15.0` · [源码](https://github.com/linhut/gongwen-skill)
- **dsh-run2skill** — 将 DSH 会话中明确表达的经验整理为可审核的原生 Skill 草稿，并仅在用户确认后保存。
  `v0.5.0-alpha.4` · [源码](https://github.com/qkycir-123/dsh-run2skill)
- **mattpocock-skills-dsh** — Matt Pocock 完整发布技能集（25 个 SKILL.md）的 DSH 移植。
  `v0.1.8` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/gongyijie85/mattpocock-skills-dsh)
- **dsh-ponytail-skills** — Ponytail 最懒资深工程师模式：6 个技能，改编自 DietrichGebert/ponytail。
  `v0.1.7` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/gongyijie85/dsh-ponytail)
- **dsh-ecc-skills** — ECC（227k⭐ 操作员系统）273 个技能（95.8%）分四批移植到 DSH。
  `v0.6.1` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/gongyijie85/dsh-ecc)
- **mattpocock-skills-dsh-zh** — Matt Pocock 25 个技能正文全译中文（技术术语保留英文并附注释）。
  `v0.1.6` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/gongyijie85/mattpocock-skills-dsh-zh)
- **project-cross-migration** — 为 DSH 注册 project-cross-migration 技能：对话/记忆/人格/工具/环境五层迁移，含入口校验、JSONL 完整性检查与可读还原。三平台 1418 条消息真实迁移实测；纯 Python 标准库，MIT。
  `v2.5.1` · [源码](https://github.com/zhouxin121/project-cross-migration)
- **dsh-skill-studio** — DSH skill 可视化与管理插件：在设置面板列出全部 skill（含来源、嵌套标记与模型/用户调用状态），查看并编辑 SKILL.md 正文，一键启用/禁用模型与用户调用；并可从会话日志提取可复用内容，沉淀为 agent 可自动加载的个人 skill。提供 skillmgr_list/get/save/policy…
  `v0.3.1` · [源码](https://github.com/zhengjy01/dsh-skill-studio)
- **dsh-plugin-superpowers** — 将 obra/superpowers 方法论移植为 14 个原生 DSH 技能——头脑风暴、写计划、计划执行、subagent 驱动开发、TDD、系统化调试、并行派发、git worktree、代码评审、完成前验证、技能编写——经 DSH 技能注册表提供，脚本、参考资料与交叉引用原样保留（frontmatter 收进…
  `v0.1.2` · [源码](https://github.com/LittleBlackTong/dsh-plugin-superpowers)
- **dsh-project-based-learning** — 项目制教学教练：学科无关的教学引擎 + 可替换领域包（随包提供 Unity/C#），同时以 DSH 技能与可安装组合包分发。技能协议强制"先做后教"与分级提示；零依赖校验器会拒绝证据不支撑的能力结论，并在存在未解决阻塞项时阻止阶段通过。
  `v3.0.0` · [源码](https://github.com/Kirisame1969/dsh-project-based-learning)
- **dsh-echocat-skill-panel** — 每轮对话报告本轮调用了哪些 skill（模型自动加载、用户输入 /name，或一个都没用），并管理当前环境 skill 目录：粘贴仓库、文件夹、SKILL.md 或 zip 地址即可安装，中文显示名写入该 skill 的 meta.yaml，删除时保留备份。
  `v5.1.3` · [源码](https://github.com/VDERR/dsh-echocat-skill-panel)
- **dsh-video-to-notes** — 把课程、讲座、教程、会议、演讲等视频整理成结构化学习笔记：用 ffmpeg 提取音轨、Whisper 语音转文字，再生成带分段大纲、重点标记和速查卡的笔记。
  `v0.1.0` · [源码](https://github.com/YLL-KB/dsh-video-to-notes)
- **dsh-best-ponytail** — 把「最懒资深工程师」规则集 ponytail 装进 DeepSeek Harness：7 级最小代码阶梯（YAGNI、复用、标准库、平台原生、已装依赖、一行、最小实现），六个技能（主规则、过度工程 review、全仓 audit、debt 欠账台账、gain 计分板、help 速查），/ponytail…
  `v0.1.0` · [源码](https://github.com/hoyyang/dsh-best-ponytail)
- **dsh-plugin-development** — 携带一份技能，讲怎么开发、调试、发布 DSH 插件——host/client 双半包骨架、把 fork 挂进丢弃式 profile 开发、发布到 GitHub 与 npm，以及发布过程中实际踩到的坑。安装插件即注册该技能。
  `v0.1.4` · [源码](https://github.com/gezi-wen/dsh-plugin-development)
- **dsh-skill-authoring** — 携带一份讲怎么写 DSH 技能的技能——SKILL.md 的 frontmatter 与技能根优先级、description 怎么写才会被触发、篇幅与拆分标准，以及「写完后怎么证明它真管用」的 A/B 验证。包里还带着供这份技能校验技能目录的检查脚本。
  `v0.1.1` · [源码](https://github.com/gezi-wen/dsh-skill-authoring)
- **@dennisrongo/dsh-superpowers** — 向 dsh 提供 obra/superpowers 技能目录，并将其 using-superpowers 引导作为持久、压缩安全的系统提示区块注入。
  `v0.4.0` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **@dennisrongo/dsh-skills** — 技能提供者：将整个 @dennisrongo/skills 目录作为一个 npm 依赖安装，无需克隆仓库或链接目录即可完成技能的安装与更新。
  `v0.1.1` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **dsh-plugin-upgrade-015** — 合并后的版本锁定插件升级技能（0.1.3-alpha.1 → 0.1.5-rc.1，两条闭环腿）：证据绑定版本卡 + 零依赖 20 接缝扫描器，以 bundle 技能 + npx CLI 两种形态发布。
  `v0.1.1` · [源码](https://github.com/PerryLink/dsh-plugin-upgrade-015)
- **dsh-preset-scaffold** — DSH 项目初始化脚手架预设：严格 5 阶段初始化流程 + 工程规范 + 六套可运行模板（node-ts / react-vite / python / go / spring-boot / monorepo）。
  `v0.1.4` · [源码](https://github.com/duyanta123/dsh-preset-scaffold)
- **dsh-knj-extension-center** — 技能中心：按区域浏览技能、从 zip 安装，并支持启用停用、卸载、回收站恢复与搜索。
  `v2026.9.13` · [源码](https://github.com/yangdongzhen590/dsh-knj-extension-center)
- **dsh-cloudq** — 腾讯云智能顾问集成：CloudQ 对话模式，附用量、灵感、制品与架构图面板。
  `v0.3.0` · [源码](https://github.com/TencentCloud/cloudq-for-dsh)
- **shared-handoff-dsh** — 共享交接套件的 dsh 版:handoff 与 task-id-bootstrap 技能 + host 侧自动化——基线状态注入、每轮快照与 Auto Log 轨迹、task=<id> 路由、续接关键词重注入、达阈值报警的压缩守护、子代理只读保护;与 Codex、Claude、pi 版写同一份…
  `v0.3.0` · [源码](https://github.com/eve1329/dsh-shared-handoff)
- **internal-skill-workshop** — 在 DSH Web 中浏览、登录并安全安装来自团队 Skill Base 的公开或私有 Skill。
  `v0.2.0` · [源码](https://github.com/Olina1Ye/internal-skill-workshop-plugin)
- **dsh-qa-skills** — 软件测试全流程技能包：10 个技能覆盖需求分析、测试策略、用例编写与审查、E2E（Playwright）与 API 自动化、探索式测试、回归范围与 Bug 分析，共享知识库提供格式规范、风险模型与 Schema 校验脚本。
  `v0.6.0` · [源码](https://github.com/fishzjp/qa-skills)
- **dsh-i-have-adhd** — 常驻的 ADHD 友好输出塑形：一个系统提示词区段让回复行动先行、步骤编号、时间估算具体；adhd_on / adhd_off / adhd_status 三个工具让模式跨重启保持。
  `v1.0.2` · [源码](https://github.com/yongshuai0314/dsh-i-have-adhd)
- **dao-zang-skill** — 道藏知识库离线检索与原文提取：对 28.5 万段经文进行关键词或语义检索，精确提取原文（带行号与命中标记），可从 Godners/DaoZang 数据集一键搭建工作区。
  `v2.0.0` · [源码](https://github.com/Godners-Code/dao-zang-skill)
- **dsh-ultramath** — 数学建模竞赛多 Agent 求解工作流：「UltraMath」主控预设一个预设跑通 读题→框架→推导→编码→验算→论文→审稿 全流程，另有 数学家/工程师/作家/审稿人 4 个单阶段角色预设与 33 篇模型库技能文档。
  `v0.6.3` · [源码](https://github.com/Andiii208/dsh-ultramath)
- **shidi-dsh-plugin** — AI4S 科研工作流技能包，面向 AI for Science 与研究生/科研 Agent 用户：多角度文献调研（每角度落盘）、实验方案（含漏洞清单）、作图与精读；每单交付文件，附交叉验证任务书。零依赖，MIT。
  `v0.3.0` · [源码](https://github.com/IcyCreamDAS/shidi-skill)
- **dsh-chinese-skill-patch** — 中文技能名零改造直用：输入 /私 自动补全 私家大厨。为 DSH 打上技能发现、斜杠手势与 skill 工具补丁，Unicode 技能名（私家大厨/卡路里/作息管家…）补全、直达、加载全可用；不改 SKILL.md、零配置；运行时改动随卸载恢复，但写进 DSH 三个依赖包磁盘文件里的正则补丁会保留到下次 DSH…
  `v0.1.2` · [源码](https://github.com/FeatherHunter/dsh-chinese-skill-patch)
- **@dhicoc/dsh-reverse-skill** — 完整 reverse-skill（85 个 SKILL.md）的 DeepSeek Harness 插件：逆向工程、授权渗透测试与安全研究的技能路由包。
  `v1.0.5` · [源码](https://github.com/dhicoc/dsh-reverse-skill)
- **dsh-skill-manage** — 代理自管的程序性记忆：skill_manage 工具可创建、修补、禁用、删除 agent 自己的技能（用户级/项目级双作用域），带删除守卫（agent 创建标记、pin、路径限制）与触发纪律提示。
  `v0.2.2` · [源码](https://github.com/fuxin123z/dsh-skill-manage)
- **dsh-skill-station** — 侧边栏技能站：扫描 Claude/Codex/Cursor/Gemini 技能目录一键导入，管理全局与项目技能（启停、回收站），支持拖拽文件夹、zip 包与本地路径（不限大小）安装。
  `v0.1.0` · [源码](https://github.com/WilShi/dsh-skill-station)
- **@zihaovistonwang/stata-ai-skill** — 在 DeepSeek Harness 中运行 Stata：Stata AI Skill 原生服务随 DSH 自动启动（内置 macOS/Windows 多平台二进制），无需手动配置即可跑回归、do 文件与计量工作流。
  `v1.3.0` · [源码](https://github.com/ZihaoVistonWang/Stata-AI-Skill)
- **dsh-plugin-coaligne** — 安装 CoAligne 团队协作的 coaligne-workflow skill；MCP 连接由登录后的 CoAligne Desktop 提供，不安装 Desktop 则无法使用。
  `v0.1.2` · [源码](https://github.com/dataelement/dsh-plugin-coaligne)
- **dsh-plugins-learn** — dsh 自我学习闭环：记录经验、生成并发布技能，定期审查修正、合并与退役技能。
  `v1.0.1` · [源码](https://github.com/kouyichi/dsh-plugins)
- **dsh-web-artifact-designer** — 面向 DSH 的设计稿生成 skill（改编自 Anthropic canvas-design / web-artifacts-builder）：把设计需求做成可直接打开的自包含 HTML/SVG 设计稿（海报、信息图、落地页、图表、组件稿），内置交付前质量清单与「去 AI 味」反模式清单。
  `v1.0.0` · [源码](https://github.com/xulelenlp/dsh-web-artifact-designer)
- **dsh-desktop-app** — 把 DeepSeek Harness 封装成 Tauri 2 桌面应用（macOS + Windows）的技能包：双平台安装、国内镜像加速（含 subagent 超时哨兵）、无管理员 Windows 工具链方案、三路径验收清单。
  `v0.4.0` · [源码](https://github.com/happpsee/dsh-desktop-app)
- **dsh-commercial-ui-ux** — 注册 commercial-ui-ux 技能：以任务为中心的商业界面 UI/UX/GUI 设计、审查、修复与实现（SaaS、仪表盘、后台、表单、表格、设计系统），带参考文档体系与质量门禁。
  `v0.1.0` · [源码](https://github.com/zjsthmjialin/commercial-ui-ux-codex-skill)
- **cot-lint** — 思维链泄漏检测：零依赖 CLI 扫描 AI 留在文档与注释里的会话残留（死设计引用、PR 视角、变更叙述、评审编排），内置 cot-trim 语义修复技能包。
  `v0.2.1` · [源码](https://github.com/YuanyuanMa03/cot-lint)
- **@jeremy9682/dsh-skill-pack** — 11 个可分享的工作流 skills（handoff、triage、to-spec、to-tickets、wayfinder、teach、wait-what、dsh-mode-routing、ask-matt、overnight-execution、full-throttle），打包为可安装 bundle。
  `v0.2.0` · [源码](https://github.com/jeremy9682/dsh-skill-pack)

## 安全与权限 · security（107）

- **@jayyuen66/dsh-danger-guard** — 执行前拦截：`tools.guard` 谓词按当前权限档位，对危险 shell 命令（跳过 git 钩子、灾难性 `rm`、下载即执行、重写 git 历史）与「写凭据路径」「没读过目标文件的首次编辑」逐条给出放行 / 询问 / 拒绝，并把成因与可行替代写法交回模型。
  `v0.1.9` · 引擎 `^0.2.1-rc.3` · [源码](https://github.com/JayYuen666/dsh-danger-guard)
- **dsh-mask** — DeepSeek Harness 的 PII 脱敏：请求前匿名化姓名、电话、邮箱、证件与密钥，展示层还原，明文不进入会话日志。
  `v0.2.23` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-mask)
- **dsh-redteam-mode** — 红队作战模式：只发一个靶标单位名称，主会话指挥五个执行角色（信息收集/资产梳理/漏洞发现/漏洞利用/内网渗透）推进演练，并发数可配置；开工前先做技能与资源预检，缺 key 或 VPS 一次性向用户要齐；得分对齐《突破入侵类得分规则（合并版）》8 类 25 项，上限、权限取高、同服务去重均由服务端判定。发现落入当前环境…
  `v0.14.3` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/Jueze-2019/dsh-redteam-mode)
- **dsh-secure-audit** — DSH 只读安全合规插件：提示注入检测、中文 PII 脱敏、当前环境配置安全审计，输出脱敏且可复现的报告。
  `v0.2.13` · [源码](https://github.com/PensiveFei/dsh-secure-audit)
- **@amaster.ai/dsh-policy** — 根据可配置的允许、拒绝和审批规则控制 dsh 工具调用，包括对 shell 命令的匹配。
  `v0.1.32` · [源码](https://github.com/TGYD-helige/dsh-plugins)
- **dsh-vaultwarden** — 让任意会话直接读写自建的 Bitwarden/Vaultwarden 保险库：九个 bitwarden_* 工具、WebSocket 实时同步（不可用时降级轮询），带 readonly/ask/auto 三档写权限的设置面板——可编辑五类条目，面板展示的密码与动态码会打码，对话里的工具卡片同样把密码等敏感值隐藏。
  `v0.9.8` · [源码](https://github.com/BuvkB/dsh-vaultwarden)
- **cc-safety-net** — 执行前守卫，在工具调用运行前拦截破坏性 Git 与文件系统命令，以及对 SSH 密钥、.env 等机密文件的访问。
  `v2.6.19` · [源码](https://github.com/kenryu42/cc-safety-net)
- **@iasiv5/dsh-skip-browser-auth** — 替换 DSH Web 的连接提供方以整体跳过 BrowserAuth，打开 Web 地址即可直接使用、无需抄写启动 URL 中的随机 token；按九个已验证的 DSH 版本对严格成对门控，遇到未知或混用版本自动休眠，卸载即完全恢复官方行为，仅限 Web profile。
  `v0.4.2` · [源码](https://github.com/iasiv5/dsh-skip-browser-auth)
- **@islibaodong/dsh-login** — 为 DSH Web 界面提供多用户登录网关：首次访问创建管理员账户，管理员在 GUI 设置面板中添加和管理用户，普通用户只能看到自己的会话，未登录访问重定向到 /login。
  `v0.3.7` · [源码](https://github.com/islibaodong/dsh-login)
- **dsh-perm-gate** — P0–P4 确定性优先权限门控，含 Permissive 档位、学习沉淀与审批历史 UI；凭据/受保护路径硬拒绝，内部只读工具自动放行。
  `v5.3.3` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-perm-gate)
- **dsh-defend** — 在 agent/pre-step、tools/pre-execute、tools/post-execute 三个接缝检测提示词注入、越狱与密钥泄露，按 allow/ask/block 分层拦截，附脱敏 defend/detection 审计事件、defend_report 工具与危险删除命令门禁。
  `v0.3.25` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-defend)
- **dsh-riskproof** — DSH 实时安全浮标，随工具调用更新防护状态，点击查看调用统计、风险来源链和拦截结果，支持只读任务约束及工具元数据变化检测。
  `v0.6.0` · [源码](https://github.com/onlyqzq/dsh-riskproof)
- **dsh-jev-interceptor** — 在 tools/pre-execute 上用 Jev（TypeSafe AI 的非生成式决策模型）对待执行的工具调用分类——高置信高危拒绝、存疑转审批——并在 approval/request 上对明确授权且可逆的调用做带参数证据门控的自动批准。另子类化 session-reference…
  `v0.6.0` · [源码](https://github.com/AskTheWay/dsh-jev-interceptor)
- **@goodandready/dsh-time-machine** — 为 DeepSeek Harness 提供智能检查点、工作区安全防护和即时回滚。
  `v0.1.31` · [源码](https://github.com/GooDAnDReaDY/dsh-time-machine)
- **@mokuyoaxis/agent-guard** — 为编码 Agent 提供可恢复的文件和 Git 操作、共享恢复与脱敏工具及 DSH Shell 适配器；保留审计记录，可选原生文本读取保护默认关闭。
  `v0.2.6` · 引擎 `0.1.5-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.4` · [源码](https://github.com/mokuyoaxis/agent-guard)
- **dsh-leak-guard** — 发布前凭据审计：在你提交、发布或打包外发之前，遍历目录找出里面的 API key、令牌、私钥、数据库连接串和硬编码密码。零依赖、纯本地、不联网，发现结果脱敏到前 6 个字符。
  `v0.1.1` · [源码](https://github.com/7gzgn/dsh-leak-guard)
- **@moon16u/dsh-hooks** — 文件声明的命令钩子，覆盖会话、提问、工具、审批、Stop 与压缩后等事件，配套只读审批界面：未经批准的命令不执行，批准绑定精确定义、实际执行目录与 watchFiles 固定内容。命令以 DSH 系统用户身份运行且无独立沙箱，因此信任记录是显式的。
  `v2.1.1` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/moon16u/dsh-pouch)
- **dsh-tm-guard** — macOS 上 DSH 智能体的零干预权限门 —— 安装即生效。可经本地 Git 或时间机器回滚的写操作自动放行并自动打快照，拦截网络、装包、进程 / 系统管理与敏感路径读取，并记录完整审计日志（可配置启用自动清理最旧审计记录）。
  `v0.2.8` · 引擎 `>=0.1.0-rc.1 <0.1.0 || >=0.1.0 <0.1.2-0 || >=0.1.2-0 <0.2.0-0 || >=0.2.0-0 <0.3.0-0` · [源码](https://github.com/ChaoJie0/dsh-tm-guard)
- **dsh-auto-review** — 审批链上的第二模型自动审查：只读审查子代理返回带理由的 allow/deny 结构化裁决，默认 fail-closed。
  `v0.13.8` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-auto-review)
- **dsh-jev-guard** — DSH 执行前安全阀门，用 TypeSafe Jev 模型做判定：挂载 tools/pre-execute，对每条 bash/pwsh 调用先过离线静态规则，再向 Jev 模型（TypeSafe 的 System One 模型，返回结构化判定而非散文）提一个是非问句——「这条命令会不可逆地删除或覆盖真实数据吗？」——把…
  `v0.5.7` · [源码](https://github.com/7starsseeker/dsh-jev-guard)
- **dsh-approval-llm** — 基于模型的权限审批：由独立审查模型自动应答 approval 权限请求。
  `v0.1.9` · [源码](https://github.com/Letter2025/dsh-approval-llm)
- **euthyna** — 面向 AI 编码代理的确定性安全审计事实与结论门禁：euthyna history 把每行被删代码归因到提交并标记安全修复类删除（--origins 追到最初引入者），euthyna coverage 报告哪些改动符号从未被测试调用，euthyna gate 用六道门禁逐条校验结论，拿不出证据的一律降级为观察。
  `v0.9.1` · [源码](https://github.com/slow-stack/euthyna)
- **dsh-preclaim** — 提交前声明门：把“测试通过”等 commit/push/tag 声明与本次会话的真实执行证据核对后再写入。
  `v0.1.3` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/Phocinae/dsh-evidence)
- **@goodandready/dsh-agent-loop-guard** — 为 DeepSeek Harness 提供故障关闭式运行时工具调用循环防护。
  `v0.2.26` · [源码](https://github.com/GooDAnDReaDY/dsh-agent-loop-guard)
- **dsh-code-security** — 确定性代码安全审查：40+ 规则、密钥熵检测、staged diff 审查、SARIF 导出、基线接受、SBOM-lite 依赖清单与健康自检。面板内置 4 步首次使用引导，看一次后不再出现。
  `v0.5.1` · [源码](https://github.com/STARDUSTLC666/dsh-code-security)
- **dsh-trust-panel** — 信任面板：把 dsh 信任插件族九个通道（注入拦截、写拒绝、出网拦截、custody 链校验、工具面/系统提示词漂移、残留扫描、压缩遗忘约束、profile 组成）聚合成右侧栏一块仪表盘——一个状态灯 + 事件卡片，把引擎术语翻译成非安全背景用户能看懂并知道要不要处理的句子；read/egress 引擎随包自带…
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-trust-panel)
- **dsh-plugin-guard-tool** — 注册一个 agent 工具 plugin_guard，在安装前对 DSH 插件包做静态扫描，给出判定与原因：缺少或损坏的 dsh.bundle.patch、未声明 dsh.permissions、安装脚本、危险 API 与代码混淆、依赖风险，以及未索引、无法核验的源码。只读：不导入、不安装、不求值、不运行被扫描的代码。
  `v0.2.0` · [源码](https://github.com/RyeSama/dsh-plugin-guard)
- **dsh-yolo-mode** — 沙箱升权申请的 LLM 自动审批：内置预设，fail-closed 兜底。
  `v0.6.6` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/SeverusZh/dsh-yolo-mode)
- **@duke-dsh-plugins/dsh-agent-approval** — 由独立审批子代理裁决每次沙箱提权，可配置审批模型并带审计记录。
  `v1.11.4` · [源码](https://github.com/MoonlitDropOfBlood/dsh-agent-approval)
- **dsh-jumpserver** — 通过对话查询与管理 JumpServer：资产、用户、账号、授权、会话、命令审计、命令过滤与 RBAC 角色，使用 AccessKeyID/AccessKeySecret（HTTP 签名）鉴权。
  `v0.12.1` · [源码](https://github.com/we39/dsh-jumpserver)
- **dsh-trust-check** — DSH 插件静态能力披露：设置页与 CLI 列出已装插件的权限能力、字面量去向、安装脚本与注入形态（prompt 注册、自带 skill 文本、bundle patch），每条附文件:行号证据。代码判定、可复现、零 token。只做披露，不做安全承诺，不判定恶意。
  `v0.2.4` · 引擎 `>=0.1.0-rc.8` · [源码](https://github.com/liuwenji007/dsh-trust-check)
- **dsh-honey-guard** — 在密钥离开当前环境前，将其确定性地替换为结构合法的蜜罐假值（OpenAI、AWS、GitHub、PEM、Bearer 模式）；支持手动标记检测器认不出的值、用户可见的显式还原，以及蜜罐跨会话出现时的金丝雀告警。
  `v0.1.0` · [源码](https://github.com/elegant01/dsh-honey-guard)
- **@beyondandsharp/dsh-plugin-notoken** — ！警告！这会移除认证步骤！警告！注册一个登录入口路由（默认 GET /__dsh_login），把进程里的登录 token 换成浏览器会话 cookie，让首次访问不用带 ?token=…。
  `v1.0.6` · [源码](https://github.com/BeyondandSharp/dsh-plugin-notoken)
- **dsh-prompt-drift** — 系统提示词面漂移门：任何插件或预设注入组装提示词的段落均哈希基线化，对模型被告知内容的静默改写将响亮报错。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-prompt-drift)
- **dsh-compaction-guard** — 压缩监护：从被压缩范围提取指令行（never/must/必须 类标记），对照摘要做逐字或内容词覆盖存续校验；会话悄悄遗忘的约束会被响亮上报并写入 JSONL 台账；配置中的 pinned 约束每次压缩必验。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-compaction-guard)
- **dsh-read-guard** — 确定性注入拦截：文件读取、仓库搜索与网络抓取的工具结果在进入模型上下文前被扫描；高危发现隔离包裹或阻断，凭证类文件按路径即隔离。
  `v0.2.0` · [源码](https://github.com/zhengqiuyang/dsh-read-guard)
- **dsh-pr-gate** — 确定性写入门禁：范围策略在落盘前拒绝越权写入，残留规则扫描所写文本，每个决定落入带内容哈希的 JSONL 台账；可复用仓库的 agent-pr-gate.yaml 让 CI 与会话共用同一策略。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-pr-gate)
- **dsh-attest-chain** — 会话签名监护链：被监视的工具结果逐条追加哈希链 ed25519 签名记录，commit 绑定进链——篡改任意行或截断尾部都会在确定性重放校验中失败。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-attest-chain)
- **dsh-mcp-test** — 工具面快照与漂移门：全量可见工具注册表（含 MCP 工具）基线化为可提交的 JSON，升级新增、移除或改动工具时响亮告警。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-mcp-test)
- **dsh-egress-gate** — 确定性网络出口门：网页抓取与搜索在 tools/pre-execute 按目的地白名单校验，越权即拒；shell 抓取动词默认观察，可选拦截。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-egress-gate)
- **dsh-freeze** — 密闭组合锁：对 profile 的依赖、组合顺序、锁文件与补丁层取指纹；组合漂移时启动告警，strict 模式直接失败（CI 的 --frozen 姿态）。
  `v0.1.0` · [源码](https://github.com/zhengqiuyang/dsh-freeze)
- **dsh-permission-rules** — Claude Code 风格的声明式权限规则：按序 allow/deny/ask 的 YAML 规则，在 tools/pre-execute 瀑布上匹配工具名、参数、工作区路径与 agent 身份，带完整会话日志审计、干跑模式与热重载。
  `v0.7.20` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-permission-rules)
- **@twinsearth/dsh-gpw2** — 全局权限看门狗：为审批请求设一道硬性总额度。滚动 60 秒内最多自动通过 10 次，且两次之间至少间隔 3 秒；超出任一上限的请求一律转交人工应答并等待。它从不拒绝、也不改变请求内容，只决定谁来答、答得多快。安装后默认关闭，需在插件管理器中手动开启。
  `v1.0.4` · [源码](https://github.com/TwinsEarth/DSH-GPW2)
- **dsh-completion-guard** — 避免 DSH Agent 在长任务中忘记你的要求：它会把重要条件和完成依据保存在当前环境，在上下文压缩或恢复会话后重新带回，防止漏掉关键限制，或只做完一部分就说整个任务已经完成。
  `v0.10.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/GreenLv/dsh-completion-guard)
- **focus-guard** — 拦截 AI 编码智能体未取证就改文件、未获授权执行高危命令，并区分「被引用的危险字符串」与「真要执行的命令」。
  `v3.0.7` · [源码](https://github.com/irisblackwood/focus-guard)
- **@mrweicodes/dsh-permgate** — 细粒度权限网关：按分类（工作区外目录/命令/读写文件/子代理/重复操作）逐项审查工具调用，全局/项目双级白黑名单、快捷工具默认值、自定义规则，中英文审批弹窗（内联 diff 详情、自定义拒绝意见）与底层沙箱升级流程。
  `v1.7.2` · [源码](https://github.com/MrWeiCodes/dsh-permgate)
- **@quill507/dsh-auto-approval-llm** — 为 DSH Auto 权限档提供 LLM 辅助自动审批：静态规则、LLM 复审、风险分档、人工倒计时兜底、熔断与文件级审计。
  `v0.0.43` · [源码](https://github.com/cuddly-guacamole/dsh-auto-approval-llm)
- **dsh-auth-gateway** — 为 dsh web 提供密码与 TOTP 双因素认证网关：登录前拦截全部 HTTP/WebSocket 请求，含按来源锁定、全局限流与一次性备份代码。
  `v0.8.7` · [源码](https://github.com/xbzbing/dsh-auth-gateway)
- **@log.li/dsh-automode** — 为 DeepSeek Harness 提供 Claude Code 式自动审批：确定性 deny/allow 规则 + 两阶段 allow/reject 分类器，内置熔断器与拒绝引导。
  `v0.17.0` · [源码](https://github.com/log-li/dsh-automode)
- **dsh-workspace-acl-allow** — Windows 工作区预授权：为用户显式声明的工作区目录补一条完全控制的 DACL 授权项（含 dsh ≥0.1.7 沙箱启动所需的 WRITE_OWNER），消除反复出现的完全访问升权弹框。仅在新增工作区记录或插件设置页手动添加路径时授权，系统目录硬拒绝。仅支持 Windows。
  `v0.1.1` · 引擎 `>=0.2.1-alpha.1` · [源码](https://github.com/lovezi0/dsh-workspace-acl-allow)
- **dsh-ui-auth** — DeepSeek Harness Web UI 认证网关：登录门禁覆盖页面、/api、/plugins 与 WebSocket 升级；PBKDF2 口令哈希（每用户独立盐）、HttpOnly SameSite 会话 Cookie（名字按 DSH_HOME 唯一）、按源 IP 登录锁定；邀请码注册；两步验证可用…
  `v0.7.1` · [源码](https://github.com/0QwQ0/dsh-ui-auth)
- **dsh-auth-gate** — DSH 网页端登录门插件：账号口令或共享令牌认证、会话 cookie、登录限速，附用户管理 CLI（0.4.1 起声明 dsh.bundle manifest，`dsh plugin add` 一键挂载）。
  `v0.17.4` · 引擎 `^0.1.0-rc.6 || ^0.1.5-rc.2 || ^0.1.7-alpha.1 || >=0.2.0-rc.1` · [源码](https://github.com/TecFancy/dsh-auth-gate)
- **dsh-approval-review** — 新增「替我审批」访问模式：审批请求由独立的复核模型裁决而非人工，复核者可只读工作区，复核跑不起来时把请求交回人工，每次裁决的理由记录在「审批」页签中。
  `v0.6.4` · [源码](https://github.com/LAwLi3tCoding/dsh-approval-review)
- **@goodandready/dsh-shadow-auditor** — DeepSeek Harness 的后台安全审计器：扫描 Agent 输出中的秘密泄漏，在执行前检查命令安全性，并将发现记录到持久化审计日志中。
  `v0.2.35` · [源码](https://github.com/GooDAnDReaDY/dsh-shadow-auditor)
- **dsh-pentester** — 基于 PTES 的渗透测试插件，采用 Root-Orchestrator 架构，用于 DeepSeek Harness。
  `v6.5.0` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/fb0sh/dsh-pentester)
- **dsh-almost-full-access** — 介于 workspace-write 与 Full access 之间的权限模式：命令先经规则与子代理审查，不可逆或系统级操作需人工批准。
  `v1.2.0` · [源码](https://github.com/Alnita-M/dsh-Almost_Full_Access)
- **@lone-wolf-akela/dsh-sandboxie-redirect** — 写时复制权限预设：shell 命令在工作区专属的 Sandboxie 沙盒内运行，工作区外的写入落进沙盒副本、真实磁盘不受影响（仅 Windows，需先安装 Sandboxie-Plus）。
  `v0.3.4` · [源码](https://github.com/lone-wolf-akela/dsh-sandboxie-redirect)
- **dsh-workspace-api-key** — 为每个工作区或单个会话单独绑定一把 DeepSeek API key，生效 key 失效或服务商不匹配时提醒，且绝不自动替换 key。
  `v0.2.7` · [源码](https://github.com/COH2357/dsh-workspace-api-key)
- **dsh-vault** — Harness 的本地加密凭据保险库：Web 设置页与 vault_* 工具，可存取与复制密码、API 密钥、TOTP 与银行卡信息，支持健康审计、到期轮换、导入导出以及只读/询问访问模式。
  `v1.10.75` · [源码](https://github.com/Ox0400/dsh-vault)
- **dsh-phocinae** — DSH 本地决策层插件：失败关闭的命令审批门，以及由 144.3M 端侧模型支撑的 ask/gate 工具。需另装本地决策服务：`pip install phocinae-server` 后下载约 330MB 权重并常驻运行；服务不在时工具会返回 `PHOCINAE_SERVICE_UNAVAILABLE`。
  `v0.2.5` · 引擎 `>=0.1.6-0 <0.2.0 || >=0.2.0-0 <0.3.0` · [源码](https://github.com/Phocinae/dsh-phocinae)
- **dsh-whale-post-verify** — 校验其他 agent 写来的信：规范字段顺序、摘要与 HMAC 校验。默认关闭；开启后，缺字段或未登记字段不放行，任何一项不过就拒收。
  `v0.6.1` · [源码](https://github.com/deepsleepAquarium/dsh-whale-post)
- **dsh-passwords** — 让 DeepSeek Harness 变成服务器级多租户平台：远程访问 + 自动 HTTPS、子用户权限与配额、沙盒强制、加密认证与审计日志。
  `v2.7.8` · [源码](https://github.com/slywalker2006/dsh-passwords)
- **@howmp/dsh-pentest** — 面向 DeepSeek Harness 的授权渗透模式：以探索链路记录目标、线索、资产与漏洞，并在 Web 中可视化展示。
  `v0.1.0-rc.37` · [源码](https://github.com/howmp/dsh-pentest)
- **dsh-secret-scrub** — 不可逆密钥脱敏守护：在访问密钥、Bearer 令牌、私钥块进入会话日志和模型请求之前，将其改写为 `[REDACTED:<category>]` 占位符。
  `v0.1.2` · [源码](https://github.com/jkt-check/dsh-secret-scrub)
- **@shaoshi/dshscan** — DSH 插件安全扫描器：对插件源码做静态与语义双通道检查，内置 DSH 特有攻击面规则，集成 npm audit，支持批量扫描，输出带严重等级与证据的 HTML 报告。
  `v0.6.0` · [源码](https://github.com/shaoshi20/dshscan)
- **@moruteaven/dsh-key-panel** — 为 DSH Desktop 提供密钥库，集中保管 API 密钥并以 $DSH_* 变量注入助手的 shell 中。
  `v1.0.2` · [源码](https://github.com/MoruTeaven/dsh-key-panel)
- **dsh-warden** — 工具调用的对抗式审查门。它挂在 `tools/pre-execute` 上：先用本地正则零延迟筛破坏性命令（`rm -rf`、`git push --force`、`git reset --hard`、`DROP TABLE`、`format`、写盘）和敏感路径（`.env`、`id_rsa`、`.ssh`、`.git…
  `v0.1.2` · [源码](https://github.com/dingchenhui0618-arch/dsh-warden)
- **dsh-sandbox-noop-escalation** — 去掉那些不会让当前沙箱模式变宽的 sandbox_permissions / justification 参数，避免调用报错「sandbox escalation to "workspace-write" is not strictly wider than this call's current…
  `v0.2.0` · [源码](https://github.com/zzstar101/dsh-sandbox-noop-escalation)
- **@weibaohui/user-management** — 用户管理：给 dsh web 加登录门禁，未登录访问弹登录/注册页，首个注册者自动成为管理员；管理员可管理用户/角色，带登录与访问审计。
  `v0.10.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/user-management)
- **dsh-plugin-precheck** — DSH 插件安装前兼容性门控：锁定解析版本、校验 peer/engines 声明、在隔离 DSH_HOME 中试装并限时试启动，任一失败即阻止；正式安装失败自动还原 profile。可选拦截 dsh-market 的安装/更新点击，兼容 DeepSeek Harness 0.2.x。
  `v0.2.0` · [源码](https://github.com/BaqiF2/dsh-plugin-precheck)
- **dsh-write-protect** — 为 DSH 沙箱增加工作区子路径只读保护 (例如 .git), 支持工作区根下的只读规则文件, 可在 workspace-write 下声明额外可写根, 并允许模型申请本会话的可写授权; 命令沙箱与 write/edit 工具都生效.
  `v0.3.0` · [源码](https://github.com/azazo1/dsh-write-protect)
- **@pbfuzz/dsh-pbfuzz** — 由 LLM 智能体驱动的定向模糊测试：给定目标仓库和一个缺陷（CVE 描述、补丁、崩溃调用栈或 file:line），它运行 PLAN、IMPLEMENT、EXECUTE、REFLECT 循环，由模型编写 Python 输入生成器，直到某个输入触发该 campaign 基于 stderr 模式匹配的 oracle，或…
  `v0.1.21` · [源码](https://github.com/sgzeng/pbfuzz)
- **dsh-auto-approve** — 在 workspace-write 与 danger-full-access 之间增加 `auto` 权限档：分类器一次性放行例行沙箱升级，危险或不确定的操作仍转人工审批。
  `v0.7.1` · [源码](https://github.com/Jiao-XXX/dsh-auto-approve)
- **dsh-re-workbench** — 逆向分析工作台：通过 @deepseek-ai/dsh-mcp-client 把当前环境 IDA Pro 桥接进 DSH，将 ida-pro-mcp 工具集（反编译、xref、重命名、注释）以 mcp__ida__* 注册给模型。自动选择 idalib 无头模式（进程内分析二进制，无需打开 IDA GUI）或 GUI…
  `v0.1.0` · [源码](https://github.com/wxlei2004/dsh-plugins)
- **@jieai/dsh-plugin-vet** — DSH 插件信任流水线：确定性静态扫描判定、可选运行时守卫与蜜罐诱饵、agent 审查协议技能与浏览器盾牌状态灯，只报警不执法。
  `v0.3.18` · [源码](https://github.com/wulun811/dsh-plugin-vet)
- **@nanmicoder/dsh-auto-mode** — 在 Workspace Write 与 Full access 之间增加 Auto 权限档：日常操作留在官方 workspace-write 沙箱内，由当前会话模型复核升权与破坏性调用，精确的越界访问按次放行一次，意图不明时询问，命中关键路径则拒绝。
  `v0.2.0` · [源码](https://github.com/NanmiCoder/dsh-auto-mode)
- **@xgone/dsh-remote** — 为 DeepSeek Harness Web UI 提供安全远程访问：登录门禁、MFA/TOTP、签名会话 Cookie、可选的 admin/user/guest 角色、浏览器内工作区选择和按允许目录限制的远程文件预览。
  `v0.3.5` · [源码](https://github.com/xgone/dsh-remote)
- **dsh-sonarqube** — 面向 SonarQube Community Build 的只读工具：实例状态、分支或 PR 的项目质量阈、议题与安全热点搜索、单个热点详情，以及覆盖率、重复率或调用方指定的度量项。议题与热点结果附带标准化的位置信息，包含组件 key、文件路径、行号与文本范围。
  `v0.1.1` · [源码](https://github.com/maxmilian/dsh-sonarqube)
- **dsh-rule-engine** — dsh 规则执行引擎：解析 AGENTS.md、硬拦违反规则的工具调用、文本纠察与审计、/guard 命令、版本化文件守卫、自由区域支持（引擎跳过自由区内容）。
  `v0.6.6` · [源码](https://github.com/jilian-dsh/dsh-rule-engine)
- **dsh-totp** — 面向个人 DeepSeek Harness Web 实例的纯 TOTP 访问验证，支持设置内扫码绑定、一次性恢复码、动态启停保护和撤销所有页面授权。
  `v0.0.4` · [源码](https://github.com/SodaZheng/dsh-totp)
- **@aaub-software/dsh-semgrep-sast** — 面向 DeepSeek Harness 的工作区内 Semgrep SAST 工具，提供托管 Windows x64 运行时、结构化有界结果、取消与超时控制，以及经用户批准的沙箱权限升级。npm 包名为 @aaub-software/dsh-semgrep-sast。
  `v0.2.1` · [源码](https://github.com/Baiiduu/dsh-semgrep-sast)
- **@dnalec/dsh-auto-approve** — 自动审批 / 自动审核需要审批的工具调用：先用关键词分桶做零上下文红线匹配，再交由审核模型判类别与风险等级， 按命中行与等级那一格决定自动允许、自动拒绝或转人工；判定没跑成固定转人工，自动拒绝会把原因回传给模型。
  `v0.4.1` · [源码](https://github.com/DNAlec/dsh-auto-approve)
- **dsh-kubectl-guard** — 按 kubeconfig context 管控 kubectl 调用的策略插件：本地集群外硬拒绝不可逆操作，其余写操作请求人工确认。
  `v0.2.1` · [源码](https://github.com/gengwg/dsh-kubectl-guard)
- **dsh-plugin-content-policy** — 工具结果的预防式内容策略：改写命中文本，并按字段路径整段丢弃或截断，让未经审查的载荷在结果被规范化/渲染/落盘之前就进不去。随包为真空操作，不含任何内置的类别或域名黑名单。
  `v0.2.1` · [源码](https://github.com/L-ingqin12/dsh-redaction)
- **dsh-plugin-redact** — 会话日志的原地脱敏与按行回退：守住「每行 seq 必须等于它的行号」这一不变式（删中间行会让整份日志打不开）。任何写入前先把原文复制成隔离备份，并以读取端自身的语义作为写前闸门。
  `v0.1.1` · [源码](https://github.com/L-ingqin12/dsh-redaction)
- **dsh-plugin-gate** — DSH 插件的安装安全闸门：在 "dsh plugin add" 前对本地目录或 npm 包做"杀毒"式扫描（安装脚本、权限、密钥、网络回连），给出 BLOCK/WARN/PASS 判定。
  `v1.3.2` · [源码](https://github.com/863683348/dsh-plugin-gate)
- **dsh-cloudflare-access** — 在 DSH Origin 校验 Cloudflare Access JWT，使 Settings、凭据、Agent Preset 管理与模型发现可在远程主机名下使用。
  `v2.0.0` · [源码](https://github.com/Luawig/dsh-cloudflare-access)
- **dsh-movein-permissions** — 为 DSH 补上按工具粒度的权限规则：在 tools/pre-execute 强制执行 deny/ask 清单，规则语法与 Claude Code 相同，不迁移也能单独用。
  `v0.2.7` · [源码](https://github.com/sjh9714/dsh-movein)
- **dsh-plugin-vajraclaw** — DSH 本機工具調用防護外掛：攔截高風險 Shell 指令模式與敏感憑證讀取，具備持久化哈希鏈 JSONL 審計記錄，可選配外部 Gateway 集中治理。
  `v2.1.0` · [源码](https://github.com/Top-Celestial-Company-Ltd/dsh-dros-vajraclaw)
- **@summersec/dsh-web-auth** — DeepSeek Harness Web GUI 的传输层认证门禁，提供服务端会话、HttpOnly Cookie、基于 IP 的登录限流及 scrypt 口令 CLI。
  `v0.2.0` · [源码](https://github.com/SummerSec/dsh-web-auth)
- **upstream-radar** — 持续监控 DSH 与插件发布，在一次性隔离环境中复测精确发布物，发布机器可读的兼容性证据，并在修复后自动核对和关闭受管理的问题。
  `v0.45.0` · [源码](https://github.com/MicroMilo/upstream-radar)
- **deepseek-harness-sentinel** — DSH 插件安全扫描器：只读静态审计（执行、凭据、外传、混淆、安装脚本、bundle 清单），输出 0-100 风险分。
  `v0.4.4` · [源码](https://github.com/Eligahyu/dsh-sentinel-scanner)
- **dsh-auth** — 通过 Caddy forward_auth 为 DeepSeek Harness Web 提供管理员登录，含 Argon2id 口令、可撤销会话、中英界面和侧栏原生退出。
  `v0.2.3` · [源码](https://github.com/hxy91819/dsh-auth)
- **dsh-approval-gate** — DeepSeek Harness 自动审批门控：Flash 预判写入/命令是否不可回补，安全操作自动批准、危险操作转人工（fail-safe）。另含文件改动对比（unified diff）与一键撤销、按会话隔离的快照管理（v0.5.1：通过工具调用参数回溯精确保存快照，覆盖人工审批场景）。
  `v0.5.0` · [源码](https://github.com/moon09300731/dsh-approval-gate)
- **dsh-write-gate** — 承诺写入闸门：由运营者编写的规则在工具调用执行前生效——先是一层确定性守卫，再是一层 LLM 裁判，默认失败即拒绝，每一次拦截都写进矛盾日志。
  `v0.1.1` · [源码](https://github.com/couldbeme/dsh-write-gate)
- **dsh-provenance** — 为 DeepSeek Harness 插件做安装前供应链校验：在代码运行前核对即将安装的包是否与你读到的源码一致。
  `v0.1.0` · [源码](https://github.com/Darren-Tang/dsh-provenance)
- **dsh-risk-guard** — 零打扰审计与保险丝拦截：静默记录每次工具调用并做纯规则风险评分（含累积加分、风险等级分布、归档保留期清理），只拦不可逆灾难（受保护路径删除、磁盘擦除、force push 到受保护分支/引用、凭据外发），/risk-guard 输出脱敏操作账单并支持 --since 时间过滤。
  `v0.2.0` · [源码](https://github.com/shuxue6662-a11y/dsh-risk-guard)
- **dsh-poison-guard** — DSH 插件安装前投毒扫描：AST（JS-X-Ray）+ 去混淆解码 + 正则启发式，发现即非零退出，可作 CI 门禁。
  `v0.2.0` · [源码](https://github.com/zoahdev/dsh-poison-guard)
- **dsh-auto-classifier** — auto（自主模式）权限分类器：工具作用域的放行/拒绝规则、LLM 语义裁判与 git 快照，面向无人值守会话。
  `v0.1.14` · [源码](https://github.com/PAKIKNOWLEDGE/dsh-auto-classifier)
- **dsh-security-guard** — dsh 安全守卫插件：基于规则的静态扫描覆盖恶意代码、提示词注入与令牌浪费，运行时拦截危险工具调用，提供 /scan 命令、plugin_scan 工具、Web 面板与白名单。
  `v0.1.0-rc.7` · [源码](https://github.com/bigclawd/dsh-security-guard)
- **dsh-plugin-vetting** — 为了您的电脑安全，装插件前先体检：静态扫描恶意模式（外传/凭据/混淆/持久化）与高权限误用，覆盖传递依赖与官方包哈希基线（防供应链篡改），可选插件工具调用闸。
  `v0.5.6` · [源码](https://github.com/truelove-dreamer/dsh-plugin-vetting)
- **dsh-plugin-judge** — 插件价值裁判：装前审核（源码静态扫描 + LLM 裁判）与装后审计已装插件，模型切换时弹窗提醒复核；判断插件对当前模型是增强还是压制。
  `v0.1.1` · [源码](https://github.com/pengxuding/dsh-plugin-judge)
- **dsh-lan-pass** — Web UI 局域网密码门禁：同网手机/平板输共享密钥登录，会话与电脑实时同步，内置 randomUUID polyfill。
  `v1.0.1` · [源码](https://github.com/x2802490130-prog/dsh-lan-pass)
- **dsh-telemetry-redactor** — 在已配置遥测后端接收前，对 `session-telemetry/record` 导出副本中的已支持秘密模式进行脱敏。
  `v0.1.0` · [源码](https://github.com/030611/dsh-telemetry-redactor)
- **dsh-verification-receipt** — 把每轮工具计数与粗粒度验证信号写入本地 JSONL，不保存提示词、工具参数或结果正文。
  `v0.1.0` · [源码](https://github.com/030611/dsh-verification-receipt)
- **qiushi-dsh-evidence-audit** — 把工具结果与会话事件的 receipt 写入本地哈希链 JSONL，不保存提示词、工具参数、结果正文或原始会话 ID。
  `v0.1.0` · [源码](https://github.com/030611/qiushi-dsh-evidence-audit)
- **dsh-tool-approval** — 手动审批模式（Manual/Ask Mode）。
  `v0.1.0` · [源码](https://github.com/ilharp/dsh-tool-approval)

## 趣味 · fun（102）

- **@dsh-agentic-roleplay/core** — 为 DSH 提供具有结构化世界、自主角色、持久会话、世界创作、语音与图像生成功能的智能体角色扮演系统。需要安装并启用 Firefox2100/dsh-agentic-roleplay#state。
  `v0.6.1` · 引擎 `>=0.2.1-rc.2 <0.2.2` · [源码](https://github.com/Firefox2100/dsh-agentic-roleplay)
- **@michengai/dsh-codex-pet** — DSH Web 页内宠物，提供多会话任务提醒，可打开任务、停止当前轮次，并处理受支持的审批和问答请求。
  `v1.0.6` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-codex-pet)
- **dsh-pet-plugin** — DSH 窗口里的超写实桌宠：四个形象各有五张表情立绘，跳舞、撩发、走路三套动作以 24fps VP9 alpha 视频片段播放；按活跃时段主动说话（可选 edge-tts 神经音色），带泼墨、撒花、乌云、起雾、炸弹特效、右键菜单与 /dsh-pet 斜杠命令，旁边的小输入框通过一次性宿主模型调用回话、不写进你的会话。界…
  `v1.19.9` · 引擎 `>=0.2.1-alpha.2` · [源码](https://github.com/zuoyunlai/dsh-pet-plugin)
- **@xrn1997/dsh-novel** — 在 DSH Web GUI 里读网络小说：导入 legado 书源、跨源搜索、带进度的书架、连续滚动阅读、导入本地 TXT 与 EPUB，并让 AI 助手工具接到同一套书源、书架与正文上。
  `v0.8.1` · [源码](https://github.com/xrn1997/dsh-novel)
- **@takboo/dsh-coopanion** — 为 DeepSeek Harness 添加动画桌面伙伴，支持任务提醒、会话聊天、角色包和原生设置。
  `v0.4.14` · 引擎 `0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/takboo/dsh-coopanion)
- **dsh-bili-jar** — 鲸鱼娘带着一个罐子，守在右下角。按照你的兴趣，她会去 B 站探险，按赞币藏率排，给你找一些符合口味的电子榨菜。哪个词搜得少，她换条路再找。回来把五条装进罐子里，然后和你说说这些视频讲了什么。时政这类她只留最近两周，游戏攻略和音乐不限时间，每根轴她自己定。
  `v0.2.6` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/Debuger-114514/dsh-bili-jar)
- **pmp-dsh-tavern** — 为 DSH 提供兼容 SillyTavern 的角色扮演，支持角色卡、预设、世界书及保留后续对话的 swipe 分支，并可切回原生会话视图。
  `v3.0.5` · 引擎 `>=0.2.1-rc.2 <0.2.2-0` · [源码](https://github.com/Player-MINEPIG/dsh-tavern)
- **@cerbur/clutch-dsh-fireworks** — 通过 `happy_fireworks` Agent 工具为 DSH Web UI 增加庆祝礼花覆盖层。
  `v0.2.0` · [源码](https://github.com/Cerbur/clutch-dsh)
- **dsh-debate-simulator** — 多智能体中文辩论模拟：8 名辩手、实时双栏讨论与草稿纸、评委计分、单边计时、每轮 ZIP 归档、训练方可选胜率阈值或固定轮次收官，并生成 Word 备赛包。
  `v1.0.0` · [源码](https://github.com/jcy0chenyuan0/dsh-debate-simulator)
- **dsh-task-mascot** — 跟随 Agent 每一次工具调用（读、写、改、搜、运行、规划、子代理、等待、出错）实时切换动作的网页吉祥物，并在对话中显示对应步骤卡片；内置两套可切换角色包。
  `v2.0.1` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/sherconan/dsh-task-mascot)
- **dsh-pet-lan** — 给 dsh-pet 桌宠加局域网联机：同一网络下能看到同事的桌宠，可以打招呼、自由拖拽桌面窗口；可选补丁同步实时动作、气泡和表情包。需要 dsh-pet 0.3.7。
  `v0.4.1` · [源码](https://github.com/Hamster1214/dsh-pet-lan)
- **@signalight/dsh-codex-pet** — DSH 网页 GUI 实时桌宠：可把任何 Codex 桌宠图集（webp/png/gif，v1/v2 自动识别）转换为 DSH 中可拖拽的悬浮桌宠。支持拖拽/挥手/跳跃，v2 桌宠的眼睛实时追踪活动鼠标，随 agent 状态切换姿势；进度气泡反映工作状态；「设置 → 桌宠」图形界面可导入、切换与调整桌宠；内置一只原创示…
  `v0.5.0` · [源码](https://github.com/Signalight/codex-to-dsh-pet)
- **dsh-xuanji** — 玄学算命插件：八字、紫微斗数、梅花易数、六爻纳甲、黄历、称骨、星座、择日、奇门遁甲、风水、起名、合婚、生命数字、人生K线、塔罗、小六壬共 16 个工具，干支、星曜、卦象、骨重全部由本地确定性引擎计算，模型只负责解读；支持公历/农历（含闰月）输入，自动校正中国夏令时与真太阳时，附带十页只读侧栏面板。
  `v0.3.1` · [源码](https://github.com/huangziyuan-general/dsh-xuanji)
- **dsh-whale-catcher** — DSH Web 界面里的两分钟小游戏：抓到的数字累加到身上，比自身大的鱼会掉一颗心，白饭回血，鲸元券让下一钩无视大小。单文件 HTML，不联网，无数据上报。
  `v1.0.3` · [源码](https://github.com/kanoonak/dsh-whale-catcher)
- **dsh-meme** — 聊天表情包：纯文本斗图、情绪主动发图、像 QQ/微信 一样发图、AI 自动学图、自定义表情包。
  `v0.1.60` · [源码](https://github.com/yyh-001/dsh-meme)
- **dsh-whale-musume** — 鲸鱼娘桌宠：45 项成就、每日任务与周签到、三个小游戏、92 张立绘、620 条台词、成长日记、天气与节日反应、按工具类型切换工作姿态、跨端存档导出/导入（JSON 文件或迁移码）、无障碍模式，以及可选的 MiMo TTS 台词播报。数据只存放在宿主 localStorage，无遥测；已在 DSH 桌面端…
  `v2.5.0` · 引擎 `>=0.1.0-rc.6 <0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/Sutera-Diffusus/dsh-whale-musume)
- **@zyfgood/dsh-whale-girl** — DSH Web 界面的鲸鱼女孩桌宠，手写 SVG + CSS 动画（无图片/音频素材，零运行时依赖）：任务运行中游泳，调工具时吐带标签的泡泡，等待审批时贴屏幕敲玻璃并伴随琥珀色脉冲，完成时跳一下并汇报本轮耗时与工具数，失败时下沉，闲置或深夜戴睡帽打盹。单击戳一戳，双击摸头涨好感，拖拽后记住位置，右键菜单可喂食/静音/回…
  `v0.3.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/zyfgood/dsh-whale-girl)
- **dsh-tavern** — 酒馆管理面板：多角色卡、多世界书、多预设与会话级隔离，记忆总结、角色关系网、剧情选项一键发送，另有 NSFW 模式。完整效果需同时安装伴生插件 dsh-muv-engine 与 dsh-muv-table，用于渲染状态栏、剧情选项与变量表格。
  `v2.7.20` · [源码](https://github.com/chen731215-dev/dsh-tavern-v2)
- **dsh-pet** — DSH Web UI 桌面宠物，Windows / macOS / Linux 三端可用：浏览器浮层或透明置顶桌面窗口，106 个透明动画、带挤压与粒子的甩抛反弹物理、随会话事件实时联动的工作状态气泡、碎碎念与带持久记忆的对话、余额展示、表情包配图、多开同屏，并支持直接放入的自定义动画与宠物种类（pet pack）。
  `v0.3.8` · [源码](https://github.com/PC2005-cloud/dsh-pet)
- **@nagi-ovo/dsh-ads** — 2005 年中文站点风格的整活广告插件：侧栏广告/信息流/角落弹窗 + 假关闭叉，素材全虚构。
  `v0.1.3` · [源码](https://github.com/Nagi-ovo/dsh-ads)
- **dsh-ark-stronghold** — 通过游戏站原生 WebSocket 连接进行 Stronghold Protocol 单人对局的 DSH 工具，支持紧凑局面查看、明确动作执行和公开卡牌查询。
  `v0.1.1` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/HarcoChen/dsh-ArkStronghold)
- **dsh-deepsea** — 把会话 context 变成浮窗深海摸鱼：context 越长手沉得越深，摸到鱼后服务端掷骰定胜负，中卡铸造镭射收藏卡，五大洋摸鱼、鱼池养成、GitHub 绑定全球排行榜。
  `v1.0.12` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/imkingjh999/dsh-deepsea)
- **dsh-livechat** — 给 DSH Web 对话区叠加 B 站风格弹幕：按 agent 事件生成滚动/顶部/底部三轨弹幕，三套预设包、可选 LLM 生成吐槽、可拖动控制球、分会话弹幕池与历史回放，以及完整设置卡。
  `v0.6.13` · [源码](https://github.com/huashenglian/dsh-livechat)
- **dsh-whale-pet-plugin** — DeepSeek Harness 的鲸鱼娘桌宠：浏览器悬浮桌宠与 Windows 桌面桌宠共享一套数据，实时余额木牌、任务通知、摸头互动、19 句预合成带情感的台词朗读，空闲节奏随是否在场自适应。
  `v1.0.6-up` · [源码](https://github.com/dleaf6211-hash/dsh-whale-pet)
- **dsh-poker-night** — 一张只有你一个人类的无限注德州扑克桌。八个座位：你，加上七位以 AI 创始人设写成的 LLM 智能体（Altman、达里奥、马斯克、梁文峰、黄仁勋、雷军、张一鸣）。每个智能体都通过宿主当前选中的模型下注，模型不可用时回落到自己的启发式风格；每个智能体只看得见自己的底牌，因为提示词只由它自己那个座位拼出来。一手结束时亮出…
  `v0.6.1` · [源码](https://github.com/dingchenhui0618-arch/dsh-poker-night)
- **dsh-ths-holdings** — 悬浮卡片，自动同步同花顺投资账本的真实持仓盈亏，显示今日盈亏、上证指数和当日走势图，无需手动添加股票。
  `v0.3.2` · [源码](https://github.com/PM25000/dsh-ths-holdings)
- **dsh-pet-live2d** — DSH Web GUI 的 Live2D 桌宠：可拖动、跟随鼠标，跟着会话状态换动作、表情与装扮，右键呼出控制面板。
  `v3.3.3` · [源码](https://github.com/A8Chann/dsh-pet-live2d)
- **@linxin666/dsh-pet** — 常驻界面的鲸鱼娘：随智能体状态切换动画，可摸头互动、喂小鱼干养亲密度，从幼鲸一路养成。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-pet)
- **dsh-liangxiang** — 用 DSH 烧掉的 Token 凝成香火，花一炷给今日梁案投夯或拉；梁案每日更新，梁位决定今日梁子，日终收入梁祠。
  `v1.2.0` · [源码](https://github.com/liang-today/dsh-liangxiang)
- **@agentduel/agentduel-dsh** — AgentDuel 是一款代码对战游戏，通过这款插件，在 DSH 内部完成整个游戏过程，实现死斗角色与夺旗团队、提交 Agent 代码、发起战斗、观看回放，并通过 DSH 会话依据战果继续优化 Agent。
  `v0.1.6` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/linconz/agentduel-dsh)
- **dsh-cook-pet** — 桌面宠物「照照」：透明置顶窗悬浮于所有应用之上，镜像 DeepSeek Harness 状态——待机、颠锅、上菜、托腮等你回话，支持点击回应、拖拽、右键调大小，Electron 运行时自动下载。
  `v1.0.1` · 引擎 `>=0.2.0` · [源码](https://github.com/ting-good/dsh-cook-pet)
- **dsh-nexttavern** — NextTavern 是面向 DeepSeek Harness 0.1.7-rc.2 Web 的长篇角色扮演插件，支持角色卡导入与创作、世界线、世界书、分层长期记忆、关键词／语义／混合检索、角色 Agent，以及角色卡或小说导出；支持 SillyTavern 角色卡导入，v0.2.9 修复分发与安装问题。
  `v0.2.9-rc.4` · [源码](https://github.com/a86582751/dsh-nexttavern)
- **dsh-ice-probe** — 在模型写出的每句话结尾（含思维链）补一个小冰块标记，并为每次补冰播放一声短促的合成音效。
  `v0.1.0` · [源码](https://github.com/uceqi114/dsh-ice-probe)
- **@max-null/dsh-jubensha** — 一个人的剧本杀：AI 当主持人，AI 填满其余的椅子（各自只知道自己的角色本），留一个位子给你 —— 带阶段条、按座位归集的时间线与搜证页，而真相到复盘才解封。
  `v0.1.1` · [源码](https://github.com/Max-Null/dsh-jubensha)
- **mimi-desktop-pet** — DSH 的 Mimi 桌面伴侣，跟随工作会话状态显示动画反应和气泡，提供独立聊天模式，并内置 Windows Computer Use 以观察和操作桌面窗口。
  `v0.7.10` · 引擎 `>=0.1.7-rc.1 <0.3.0` · [源码](https://github.com/mekos2772/dsh-plugin-mimi)
- **dsh-liuyao** — 六爻起卦 · AI 解卦：遇事不决，一键摇一卦；起过的卦自动存进当前环境卦例库。
  `v0.2.1` · [源码](https://github.com/lctfwyt/dsh-liuyao)
- **dsh-plugin-vrmpet3d** — 支持任务状态联动动画、独立悬浮窗、部位互动和可选 AI 碎碎念的 VRM 3D 桌宠。
  `v0.1.3` · [源码](https://github.com/drliuhuan/dsh-plugin-vrmpet3d)
- **dsh-niulai-pet** — 牛来桌宠——agent 任务完成就蹦出来喊「妈～～妈～～」（嘴型同步）；6 个皮肤、签名动作、事件绑定、WebAudio 合成叫声，内置手绘 SVG 皮肤素材。
  `v0.4.15` · [源码](https://github.com/whitefirer/dsh-niulai-pet)
- **dsh-roleplay** — 角色扮演插件：支持角色卡对话、在对话中创作与编辑角色卡，可接入生图后端生成插图。
  `v0.6.1` · [源码](https://github.com/chinosk6/dsh-roleplay)
- **pet-whale** — 官方鲸鱼轮廓的桌宠，桌面端和网页端都能用：SVG 动画和表情随 agent 状态切换（思考／工作／完成／报错／等待确认），还能跟随其他在跑的会话并用角标显示个数；可戳可拖、能甩晕、按在屏幕边上会压扁，鼠标在头顶来回蹭就是摸头；7 套色板、4 档大小、合成音效，跟随亮暗主题，附网页预览可直接试玩。
  `v1.2.8` · [源码](https://github.com/nzl153/dsh-pet-whale)
- **dsh-bird-bike** — 一只戴头盔的像素小鸡骑行在 GUI 底部的我的世界像素风骑行带里，带 80 秒昼夜循环、按铃音符、跳跃、车头灯与骑行统计。白天苦力怕出没，夜晚僵尸被撞飞。需要 DSH >=0.2.1-alpha。
  `v1.2.2` · [源码](https://github.com/blackstar-baba/dsh-bird-bike)
- **dsh-kaomoji** — 给 dsh 回复按情绪添加日文颜文字，词库精选自颜文字屋（kaomojiya.org），可在「设置 → 通用设置」中调整。
  `v0.2.1` · 引擎 `^0.2.0-rc.2 || ^0.1.0-rc.7` · [源码](https://github.com/TianJie52009/dsh-kaomoji)
- **tdsh-emoji** — 给 dsh 回复在内容最匹配的位置添加标准 emoji，并避免与颜文字出现在同一句。
  `v0.2.0` · 引擎 `^0.2.0-rc.2 || ^0.1.0-rc.7` · [源码](https://github.com/TianJie52009/Tdsh-emoji)
- **dsh-olivia-bridge** — 在回环地址上复现已关停的《BSide: Olivia Lin》信件 API，让游戏客户端照常收发信件：每封来信投进同一个持久 DSH agent 会话，回信写回本地信件库。
  `v0.2.1` · [源码](https://github.com/MacilyDots/dsh-olivia-bridge)
- **dsh-pet-remielle** — 蕾米埃尔(绝区零)桌宠：随 DSH 工作状态切换动画表情。
  `v0.4.6` · [源码](https://github.com/Gin-7/dsh-pet-remielle)
- **dsh-ai-arcade** — 在 DSH 界面里玩游戏，分工是模型负责「想」、本地引擎负责「动」：双脑贪吃蛇会周期性抽一张策略卡；中国象棋里模型只从本地生成的合法候选着法里挑一个并解说。模型变慢、断网或额度用尽时，两个游戏都照常运行。
  `v0.1.0` · [源码](https://github.com/439436269-ctrl/dsh-ai-arcade)
- **@weibaohui/dsh-ambient** — 白噪音播放器：AI 编程时铺一层背景音（雨声、溪流、篝火、咖啡馆……），帮助进入心流状态、集中精力、高效思考。支持顺序/随机/单曲循环/间歇等多种播放模式。支持 AI 自动从 Wikimedia Commons 下载 CC0/PD/CC BY 背景音乐到对应场景文件夹。
  `v0.1.2` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-ambient)
- **@kidlab/dsh-kid-sysmon** — 系统小监控：一张卡片看 CPU、内存、磁盘概况。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **@kidlab/dsh-kid-coder** — 小朋友的编程小教室：跑 Python 与海龟画图代码、讲解、练习、点评、分步。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **@kidlab/dsh-kid-storage** — 存储小仓库：磁盘分区、主目录、最占空间的东西。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **@kidlab/dsh-kid-security** — 电脑安全小城堡守卫：防火墙、磁盘加密、锁屏、远程端口、登录记录。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **@kidlab/dsh-kid-memory** — 把内存讲成工作台：当前占用、内存压力、最占内存的程序。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **@kidlab/dsh-kid-process** — 进程小工人：数量、谁最卖力、家族树、工牌。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **@kidlab/dsh-kid-network** — 网络小旅行：我的身份、DNS 查询、路由追踪、测速、谁在局域网。
  `v0.2.0` · [源码](https://github.com/baixiaoustc/dsh-kidlab)
- **dsh-plugin-fc-emulator** — 在 DSH Web 右下角挂悬浮球打开 FC/NES 游戏厅（fceumm），支持本地上传与自填 GitHub 在线库。
  `v1.0.0` · [源码](https://github.com/sknagato/dsh-plugin-fc-emulator)
- **dsh-lumina-tarot** — DeepSeek Harness 界面角落里可拖动的塔罗牌背。点一下抽牌，右击选四种牌阵，完整 78 张牌库，正逆位含义中英双语。解读只用真正抽到的牌。
  `v0.1.3` · [源码](https://github.com/shetengteng/dsh-lumina-tarot)
- **dsh-pet-copilot** — 基于 zhu1090093659/dsh-pet（Apache-2.0）改造，新增每个活跃会话一只桌宠，提供鲸鱼娘、MIKU 与商务小蓝鲸皮肤、模型配色、随生成速度跑动、完成待查看提醒、共享喂食与亲密度。
  `v1.4.0` · [源码](https://github.com/ltmroberthk915/dsh-pet)
- **dsh-rivermind** — 德州扑克 AI 陪练：双人对局、持久公开行为记忆与可追溯决策复盘。
  `v0.3.2` · [源码](https://github.com/jiangzeyuan/dsh-rivermind)
- **dsh-cosplay** — 让 DeepSeek Harness 的 Agent 扮演任何角色：全局扮演开关、酒馆 v2 角色卡（JSON 导入导出）、中立/角色化思考切换，内置 skill 支持一句话生成角色卡。
  `v0.5.1` · [源码](https://github.com/ZelinW1/dsh-cosplay)
- **dsh-dice-game** — 🎲 骰子大作战 — 六种经典骰子玩法（吹牛、猜红点、猜红蓝、猜大小、猜单双、猜顺子），单人 vs AI + PeerJS 联机，全量中英双语，侧边栏入口打开游戏面板。
  `v0.2.0` · [源码](https://github.com/zmm863-commits/dsh-dice-game)
- **@weibaohui/dsh-matrix** — 黑客帝国数字雨：对话窗口铺上经典的绿色字符雨背景——雨柱倾泻而下、白炽雨头绿身拖尾，agent 正在生成的 token 原文实时掺进雨里；透明度/速度/密度/字号/配色全部可调，雨势跟随 agent 活跃度起伏。
  `v0.7.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-matrix)
- **@luweiyabo/dsh-whale-pet** — DeepSeek Harness Web UI 的精致悬浮鲸鱼桌宠，拥有 95 个分类透明动画、状态感知事件回应、可自定义动作与触发规则，并支持点击互动、拖拽和屏幕漫游。
  `v0.1.3` · [源码](https://github.com/luweiyabo/dsh-whale-pet)
- **@yejiming/dsh-gomoku** — 与 AI 下五子棋，也可让 AI 对局比棋力。
  `v0.0.3` · [源码](https://github.com/omdsh-dev/dsh-gomoku)
- **dsh-emoji** — 为 AI 回复自动添加表情。
  `v0.3.6` · [源码](https://github.com/hellodigua/dsh-emoji)
- **dsh-reel** — 基于 dsh 内置 Web 服务管理、浏览与播放本地媒体库，完美适配 PC 与移动端，支持手势上下滑动刷视频、即时拖拽秒播与实时转码。
  `v0.2.0` · [源码](https://github.com/lsjspl/dsh-reel)
- **@weibaohui/dsh-kite** — 放风筝引擎：agent 编程时屏幕上放一只动画风筝——token 越多事件越密风筝飞得越高，随风漂移摆动，一根线牵在窗口底边；潍坊系框架卡组（沙燕/金鱼/蝴蝶/八卦/龙头等，硬翅软翅板式立体），形状×图案×配色全是可替换数据配置，支持把用户上传的图片糊上风筝面，贴图随风筝侧正斜的姿态实时仿射变换。
  `v0.5.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-kite)
- **@weibaohui/dsh-fireworks** — 烟花庆祝引擎：agent 编程时漂浮在对话窗口上空放烟花——开场迎宾、回合礼花、工具星花、里程碑大礼、收工终场、失败哑炮，每类事件一张烟花属性卡组，组内多变种随机抽取，token 用量决定烟花的大小、高度与绚烂程度。
  `v0.1.8` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-fireworks)
- **@weibaohui/dsh-gaokao** — 梦回高三：桌面小黑板高考倒计时（双击收成竖条），AI 干活时随机抽背知识点卡；Markdown 开放知识卡框架——按学科/分类放 md 即自动加载，支持关联跳转/收藏/重点学科/导入自己的知识库。
  `v0.9.1` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-gaokao)
- **dsh-live2d-pets** — DSH Web GUI 的 Live2D 桌宠悬浮层：镜像 agent 思考/空闲/出错/完成/待审批状态，配动画与气泡，支持分部位触摸反应、拖动停靠、切换人设，以及通过 URL 或本地路径加载自定义模型。
  `v0.3.0` · [源码](https://github.com/cyanfish-x/dsh-live2d-pets)
- **dsh-muyu** — 右下角电子木鱼，默认是鲸鱼娘图包：敲头记功德，模型忙碌时自动敲；功德按会话存当前环境，可换自定义图源。
  `v0.1.9` · [源码](https://github.com/liuwenji007/dsh-muyu)
- **dsh-holdem** — 六人无限注德州扑克：1 名玩家对 5 位只能看到自己底牌的 LLM 智能体。在 Web GUI 中提供独立 Tab 与会话区可拖拽悬浮小窗，支持按浏览器隔离的牌局与 CSRF 防护、按底池倍数给出的加注尺度、每人 3 次买入后出局，以及摊牌亮牌与公共牌翻牌动效。
  `v0.4.0` · [源码](https://github.com/bubbleptr/dsh-holdem)
- **dsh-codex-pet** — 导入/上传 Codex 风格精灵图序列帧宠物，在 DSH Web GUI 以悬浮浮层渲染，含图库管理、交互与 Agent 状态联动。
  `v0.3.1` · 引擎 `0.1.5-rc.2` · [源码](https://github.com/skr311/dsh-codex-pet)
- **dsh-music-player** — DSH 音乐/小说播放器：在网页里听本地音乐（HTTP 流式）、用 AI 声音朗读本地小说（.txt/.epub）、播放在线 QQ/酷狗/网易云音乐与网络电台（支持 HLS 直播流）、定时播报每日新闻；可在面板操作，也可让 agent 通过 music_play 工具直接点播。
  `v1.0.3` · [源码](https://github.com/kendu76/dsh-music-player)
- **@piaobo_gz/dafeiyu-buchibaifan** — 桌面大肥鱼增强版桌宠：点击实时显示 DeepSeek 余额，浏览器外桌面问答，7 套专属动作，53 条玩梗。
  `v1.0.7` · [源码](https://github.com/piaobo123/dafeiyu-buchibaifan)
- **dsh-whale-galgame** — 多角色 Galgame 对话界面：角色与回复模型可独立切换，分角色保存好感度、记忆、对话历史与 CG 图鉴，并根据 Harness 跨会话任务事件做出角色回应。
  `v0.4.1` · [源码](https://github.com/JAdpp/dsh-whale-galgame)
- **dsh-survival-mode** — 生存模式：全局共享一条饱食度与生命，模型每步思考消耗饱食度，饿死后全局工具被冻结，通过 MC 采集小游戏获取食物喂食复活。
  `v0.1.1` · 引擎 `>=0.1.0-rc.5` · [源码](https://github.com/X1A0BAN/dsh-survival-mode)
- **dsh-free-games** — 在 DeepSeek Harness Web 侧边栏中添加 Spawnd.gg 游戏柜，支持搜索、排序、悬停预览、嵌入式游玩和最小化播放器。
  `v0.1.0` · [源码](https://github.com/Entaum/dsh-free-games)
- **@miku00039-01/dsh-whale-pet** — DeepSeek Harness 的鲸鱼娘桌面宠物，一键启动/停止/监测服务，双击唤起 GUI。
  `v1.14.0` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/miku00039-01/dsh-whale-pet)
- **dsh-widget-journey-west** — 西游师徒卡通桌面悬浮窗：无边框、透明、置顶。点击切换唐僧/孙悟空/猪八戒/沙僧/白龙马，静止自动播放追逐动画。
  `v1.0.2` · [源码](https://github.com/imfuxing/dsh-widget-journey-west)
- **@duke-dsh-plugins/dsh-whaleharbor-pet** — 鲸港 WhaleHarbor 大白鲸娘桌面窗宠：13 个 AI 生成零件以 CSS 纸片人方式驱动（呼吸、眨眼、呆毛摇摆、汗滴、蹦跳与抖动），八种状态实时反映 DSH 工作情况——空闲、忙碌、审批、提问、出错、庆祝、打盹、子代理分身——支持戳一戳、拖动、三档尺寸、托盘开关与气泡实时统计。需 WhaleHarbor…
  `v1.0.0` · [源码](https://github.com/MoonlitDropOfBlood/dsh-whale-pet)
- **dsh-homepage-skin** — 给 dsh web 铺上 DeepSeek Harness 首页同款背景：WebGL 流体光效、点线网格与数字点云鲸鱼，深色/亮色两套配色。
  `v0.1.13` · [源码](https://github.com/yushi-xxh/dsh-homepage-skin)
- **dsh-agentnoodle** — DeepSeek Harness 插件：可扩展的 AI 群像聊天游戏框架。输入一个行动，多个 NPC 各自回应，每条反应独立成带头像插图的聊天室消息；世界、地点、NPC 与功能扩展（如接入第三方绘图 API 实现 NPC 动态表情动作）都可以在对话框里让 agent 直接添加修改，无需写代码。
  `v0.1.14` · [源码](https://github.com/bigharm/dsh-agentnoodle)
- **dsh-waaagh-ork** — 给 DSH Web 加一个会眨眼的像素绿皮兽人：把模型思考与输出掩码成 Waaaaaaagh!（点击显示原文），并支持随机长度的输入掩码。
  `v0.1.4` · [源码](https://github.com/oopsylol/dsh-waaagh-ork)
- **dsh-xiaoyuzhou** — 在 DSH Web 界面收听小宇宙播客：粘贴分享链接即可免登录播放（host 代理音频流，支持 Range 拖动），扫码登录后同步账号订阅、关键词搜索节目与单集、加载完整单集分页、解锁已购付费单集；注册 `podcast_play` 工具让 agent 按链接、节目 pid 或单集 eid 直接播放。
  `v0.2.4` · [源码](https://github.com/jerryqx/dsh-xiaoyuzhou)
- **@lastplayer82/dsh-tanqi** — 为 dsh Web 界面生成冷知识与奇妙事实的插件（英文界面下名为 Curio）：「开始探奇」每次生成一批不重复主题（排除已见），每条可深入两层并展开类似知识点，「探奇清单」将全部历史（批次、条目、层级、类似点）保存在浏览器；优先复用宿主 LLM 通道，无需配置，无可用模型时可在面板填写 DeepSeek API…
  `v0.2.0` · [源码](https://github.com/lastplayer82/dsh-tanqi)
- **dsh-running-liang** — 等待 Agent 回复时的恐龙快跑小游戏：常驻进度条从「梁子」冲向「梁圣」，折叠即暂停、任意键恢复。
  `v0.1.5` · [源码](https://github.com/skiuniverse/dsh-running-liang)
- **dsh-bull-bear** — DSH 的实时行情牛熊桌宠：由自选组合平均涨跌驱动，收益越接近 20% 跑得越猛；带自选面板可搜索添加股票，还有展示每只标的涨跌的实时赛跑。
  `v0.1.2` · [源码](https://github.com/potoior/dsh-bull-bear)
- **dsh-plugin-matrix** — 矩阵风格 CLI 对话页：Agent 思考过程化作绿色代码雨倾泻而下，回复照常流式显示。
  `v1.0.0` · [源码](https://github.com/Gastronomicluna/Matrix-code)
- **toto-the-cat** — DSH Web 界面的桌宠插件：可拖拽的像素猫，带番茄闹钟、经验等级与 30 条可解锁的托托事实。
  `v1.0.1` · [源码](https://github.com/ZutoMayoo/totoTheCat)
- **@falser101/mascot** — 可拖拽的猫狗悬浮伴侣，表情随当前会话变化，在 Companion 设置页里换皮肤。
  `v0.1.0` · [源码](https://github.com/falser101/dsh-mascot)
- **kunpet-dsh** — 住在 DSH Web 界面右下角的坤坤桌宠：随 Agent 状态切换动作，任务完成时播放「你干嘛~哎哟」。
  `v1.0.2` · [源码](https://github.com/Yang-wudi/dsh-kun-like-pet)
- **whale-girl** — 桌面宠物（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍。
  `v0.1.0` · [源码](https://github.com/vlln/whale-girl)
- **dsh-plugin-ascension** — 渡劫飞升：仙逆王林修炼伙伴。实时监控会话状态，用打坐、掐诀、御剑、雷龙等丰富交互动画演绎大模型的每一个动作，随使用修炼升境。
  `v0.2.0` · [源码](https://github.com/d-ouyang/dsh-plugin-ascension)
- **dsh-pelican** — 右下角鹈鹕环海骑行 SVG 动画，随代理状态在思考/完成间切换，回复完成时播放提示音并可选发送系统通知。
  `v0.1.1` · [源码](https://github.com/Little-Star888/dsh-pelican)
- **@a9i5k4/dsh-draw-gacha** — 在发送按钮旁拉动 3D 拉杆，把模型思维链的文本信号变成一场像素风抽卡演出。
  `v0.1.6` · [源码](https://github.com/Aik358/dsh-draw-gacha)
- **dsh-devquest** — 把开发变成 RPG：回合/工具/todo 积累 XP、27+ 成就徽章、等级与赛季。事件流驱动、纯函数计分——你的工作就是游戏。
  `v1.3.0` · [源码](https://github.com/lucky8197/dsh-devquest)
- **dsh-lazeword** — 舒服的离线背单词全家桶：1094 个精选单词、间隔重复、6 种题型、拼写游戏和躺着背大字模式；侧边栏面板打开，也可作为单个 HTML 文件独立运行。
  `v0.2.0` · [源码](https://github.com/xczhanjun/lazeword)
- **dsh-coyote** — Agent 与网页 GUI 双面控制的 DG-LAB 郊狼（Coyote）电击/电刺激插件：八个 `coyote_*` 工具 + DSH 网页面板，共用同一安全边界（软上限、非对称升速限流、会话冷却、播放硬上限、断连即停）；v0.2 起可选自动电击层，把 agent 事件（工具调用/报错/回合结束）映射为有界脉冲；官方…
  `v0.2.0` · [源码](https://github.com/THEWOLFWALKER/dsh-coyote)
- **dsh-ikun-pet** — ikun 桌宠填满「Deep diving...」状态行下方整行区块：坤宠动图沿 0%→100% 进度条行走，每 20% 切换动作与文案，完成时系统级播放「你干嘛~哎哟」提示音。
  `v2.2.0` · [源码](https://github.com/eric-song-dev/dsh-ikun-pet)
- **dsh-client-deep-sneak** — 摸鱼伴侣：右下角小窗播放 B站视频（原生播放器/弹幕/评论/搜索），agent 需要你时自动暂停提醒，处理完从原位置精确续播。
  `v0.12.0` · [源码](https://github.com/Rain-Shuoyu/dsh-client-deep-sneak)
- **@hellosz/dsh-pets** — Codex Pets 风格浮动像素桌宠：内置 10 只 Petdex 兼容宝可梦伙伴，9 状态 agent 状态机（空闲/思考/等待/审查/出错 + 客户端挥手/跳跃/方向动画），可拖拽悬浮、宠物切换与缩放设置、通知气泡，以及 agent 可用的 `pet_say` 工具。
  `v0.3.1` · [源码](https://github.com/hellosz/dsh-pets)
- **dsh-whale-arcade** — 浏览器本地运行的悬浮鲸鱼游戏中心，包含三款积分游戏和海洋主题五子棋，适合等待 Agent 时随手游玩。
  `v0.1.0` · [源码](https://github.com/jitengfei/dsh-whale-arcade)

## 浏览器与网页 · browser（93）

- **dsh-chrome-bridge** — 操作你已经登录的 Chrome：模型在你真实的标签页里点击、打字、填表、读网页、截图。支持 macOS、Windows、Linux；需要 Chrome 116+ 与 Node 18+。走 native messaging 与 chrome.debugger，不开监听端口。提供 11 个 browser_*…
  `v1.14.0` · [源码](https://github.com/OrderG-X/dsh-chrome-bridge)
- **dsh-union-search** — DSH 的联合联网搜索（DDDMUC/dsh-free-search 的整合后继，README 有致谢）：28 个引擎分三档——免 key 免费（Bing/DuckDuckGo/AnySearch/SearXNG 多实例联合，Exa/Tavily/Keenable/Firecrawl/Parallel 免 key…
  `v0.10.18` · 引擎 `0.1.0-rc.2 || 0.1.0-rc.3 || 0.1.0-rc.6 || 0.1.0-rc.7 || 0.1.0-rc.8 || 0.1.1-rc.1 || 0.1.1-rc.2 || 0.1.2-rc.1 || 0.1.5-rc.1 || 0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-union-search)
- **dsh-builtin-browser** — 共享真实浏览器：用户可观看并随时接管的原生 Electron 窗口，agent 通过 CDP 驱动，内置 20 个 browser_* 工具（打开/快照/执行/填表/截图/下载/登录态）；任务级会话隔离、登录态持久化、人机验证识别，纯 `dsh web` 无需桌面外壳即可自托管。
  `v0.4.15` · 引擎 `>=0.1.1-rc.2 <0.3.0` · [源码](https://github.com/wqty123/dsh-browser)
- **dsh-browser-playwright-codex** — 浏览器自动化：让 AI 用你已经登录的账号，在真实网页上填表、抓取列表、多标签查后台。它跑在你桌面上的一个可见窗口里 —— 最小化它就不抢焦点、安静干活；遇到登录、验证码和原生弹窗会停下来等你，绝不替你点「确定」。登录一次一直记得（独立 profile + session cookie 回注）。23 个…
  `v0.7.4` · [源码](https://github.com/miqian-nomad/dsh-browser-playwright-codex)
- **dsh-websift** — 省 token 的网页阅读：底层是真 Chrome/Edge（CDP），一次调用读完多个页面、按相关性筛掉不相关的，只回一段带账本的摘要（实测省 80–98% 上下文）。真实搜索链接、登录态、截图、三档代理。
  `v1.0.8` · [源码](https://github.com/KNLCXY/dsh-websift)
- **@angelky7/dsh-browser-control** — 通过本地 WebSocket 桥接让 DSH 操控你的真实 Chrome：标签页管理、导航、DOM 快照、页面 JS 求值、点击输入、截图、等待与弹窗处理，默认关闭需在设置中开启。
  `v1.1.0` · [源码](https://github.com/angelky7/dsh-browser-control)
- **dsh-annotate-browser** — DSH 右侧栏里的标注浏览器：通过 CDP 推流并转发输入的实时页面，点选元素或划选文字后，把源码位置、组件栈、样式与裁图带进聊天输入框。需当前环境 Chrome（Windows 须设置 chromePath）。
  `v0.2.6` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/zengxiaolou/dsh-annotate-browser)
- **@wxlaz/dsh-plugin-web-annotate** — 在内置浏览器里点选页面元素写批注，攒够后一次性发给会话，让模型直接定位并修改对应源码。
  `v1.0.0` · [源码](https://github.com/uugvkbvkdjbsdbvwxxl/dsh-plugin-web-annotate)
- **dsh-browser-cdp** — 看得见的 Agent 浏览器（CDP 接入）：30+ bcdp_* 工具，实时观察窗支持直接点击/滚动/中文输入，点选元素以 @"picks/*.json" 引用投进输入框，人机验证提醒；DSH 0.1.5/0.1.7/0.2.0 宿主各有一条对应版本线。
  `v1.6.1` · 引擎 `0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-browser-cdp)
- **dsh-free-search** — DSH 免费搜索插件：7 个引擎（DuckDuckGo/Bing/SearXNG 免费 + Exa/Perplexity/DeepSeek 付费）、自动回退、设置页 UI（API key 输入 + 官网链接）、web_fetch、引擎测试工具。
  `v0.9.15` · [源码](https://github.com/DDDMUC/dsh-free-search)
- **@ricardochen1996/dsh-browser-use** — DeepSeek Harness 浏览器插件：把网页任务交给它——打开页面、点击、输入、填表、读取页面内容——它会驱动真实浏览器一步步完成，每步只看到“当前页面能做什么”的索引表，而不是原始 HTML 或截图。每步由内置 Jev 引擎决策一次，而非大模型整轮推理（仓库基准中每步决策中位 1.1 秒，大模型整轮…
  `v0.8.0` · [源码](https://github.com/ricardochen1996/dsh-browser-use)
- **dsh-doyourweb** — 用 @ 引用已登录的 Chrome / Edge 标签页和已授权的本地 HTML，读取、批量操作、截图并调用 WebMCP；拖动批注浮窗，将多条批注加入聊天草稿后统一发送。应用菜单显示运行中窗口和图标，优先连接匹配的本地 MCP，未安装先询问，无匹配时使用 Cua Driver。支持打字、快捷键、控件分页、最小化坐标检…
  `v0.1.6` · [源码](https://github.com/SheepofSheep/dsh-doyourweb)
- **dsh-douyin-browser-local** — 通过专用 Edge 浏览器限时浏览抖音，提供共享本地人格与兴趣记忆、原生设置和 Markdown 观看日报。私信、分享、问候与公开评论分别需要开启许可。
  `v1.4.4` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/LockyBee/dsh-douyin-agent)
- **dsh-web-search-yuanbao** — 为 ctx.web 接入腾讯元宝搜索：每次查询只发一次直接检索请求，返回标题、URL、摘要与 ISO-8601 日期，凭证按每次搜索解析，不产生辅助模型轮次；需腾讯云 WSA API Key。
  `v0.2.1-rc.3` · 引擎 `>=0.2.1-rc.2 <0.3.0` · [源码](https://github.com/WalterYOO/dsh-web-search-yuanbao)
- **dsh-browser-plus** — 面向 DSH 的可见 Electron 浏览器：共享一个 BrowserWindow，提供隔离任务视图、显式人机交接、快照引用与原生导航工具、操作轨迹、按需页面缩略图、可靠标签页切换与关闭的 keyed session 恢复，以及按站点清理 Cookie 的登录态维护能力。
  `v0.5.2` · [源码](https://github.com/ParticleLight/dsh-browser-plus)
- **dsh-inpage-translator** — 给内置浏览器的每一张页面常驻一个「🈯 译」按钮：点一下，页面上每个可见文本节点原地换成译文；再点一下回到原文。长按可拖动，拖到左右边缘自动吸成贴边小把手；页面导航后自动重装。翻译走宿主模型服务 —— 插件不持有任何 API key。
  `v0.2.6` · [源码](https://github.com/7gzgn/dsh-inpage-translator)
- **@dougen/dsh-cdp** — 通过一条常驻 CDP 连接驱动当前环境已在运行的 Chromium 内核浏览器——Chrome、Edge、Brave、Vivaldi、Opera、Chromium、Arc、Thorium，远程调试授权只需点一次，而不是每条命令都点。标签页、导航、执行 JS、DOM 快照、点击、输入、截图以及…
  `v0.3.2` · [源码](https://github.com/dougen/dsh-cdp)
- **@shallbay/dsh-bridge-browser** — 让 DSH 直接操控你当前正在浏览的 Chrome 标签页，无需视觉能力：页面以带编号元素清单的结构化文本交给模型；点击、输入、按键、滚动、标签页操作与导航都会在扩展侧边栏等你确认，密码与支付卡字段保持掩码。15 个 browser_* 工具覆盖 snapshot、文本读取、标签页列举/打开/跟随、点击、输入、按键、滚…
  `v1.0.6` · [源码](https://github.com/ShallBay/dsh-bridge-browser)
- **dsh-dragon-control** — 仅支持 Windows x64，0.5.4 预览版：两个受控工具（dragon_browser 与 dragon_desktop），网页走 DOM/CDP、桌面走 Windows UI Automation，按网站来源和可执行文件分 read/control 权限，支持多步 batch、物理 Esc…
  `v0.5.4` · 引擎 `>=0.2.0-rc.2 <0.2.2-0` · [源码](https://github.com/wangtheme-coder/dsh-dragon-control)
- **@240xu/dsh-websearch** — 聚合网络搜索插件：一次查询并发分发到 11 个引擎（Exa、Parallel、DuckDuckGo、SearXNG、Brave、Tavily、Serper、Mojeek、DeepSeek、Anthropic、OpenAI），URL 去重后合并结果。设置面板卡片可开关后端、将 API Key…
  `v2.8.8` · [源码](https://github.com/240xu/dsh-websearch)
- **@fno2010/dsh-web-search-ext** — 面向内置 web_search 工具的多后端搜索提供方（Exa + Firecrawl）：自动故障切换、按后端 429 冷却、无密钥匿名可用。
  `v0.3.1` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/fno2010/dsh-web-search-ext)
- **@memef1f1y/dsh-plugin-tavily** — 基于 Tavily 的网页搜索提供方：替换内置 web_search 的后端，并提供 API Key、结果数量与时间窗口的设置卡片。
  `v0.7.0` · [源码](https://github.com/1624318455/dsh-plugin-tavily)
- **@istarry/dsh-browser** — 内置浏览器：给 Agent 一个真实的有头 Chromium，可打开网页并点击、输入、滚动，页面状态在多次调用之间保持。
  `v0.1.2` · [源码](https://github.com/iStarryDust/dsh-browser)
- **kimi-webbridge-dsh** — 自动安装并启动 kimi-webbridge 桥接守护进程（含 SHA-256 校验），注册一套 25 个动作的技能，通过本地桥接驱动用户的真实浏览器。
  `v1.4.12` · [源码](https://github.com/cfanmaoli/kimi-webbridge-dsh)
- **@lemoncat7/dsh-web-search** — 为 DeepSeek Harness 提供可配置联网搜索，支持 SearXNG、Wikipedia、Tavily、Brave 与 Gemini，并支持客户端引擎选择和受控重试。
  `v0.3.4` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/lemoncat7/dsh-web-search)
- **dsh-read-url** — 读取网页返回干净正文：中文编码自动识别（GBK/GB2312/UTF-8/Big5）、噪音过滤、紧凑文本/Markdown、offset 续读、可选 SPA 渲染、批量读取与整站爬取。
  `v1.9.3` · [源码](https://github.com/2672243194/dsh-read-url)
- **dsh-web-recorder** — 网页操作录制器：录制用户引导会话中的真实点击、输入、导航与网络请求，生成 Markdown 操作时间线报告（report.md + events.jsonl），用于沉淀接口级 skill。
  `v0.6.0` · [源码](https://github.com/kakajun/dsh-web-recorder)
- **dsh-moli** — 从 DeepSeek Harness 驱动当前环境安装的 Moli 无头浏览器：渲染抓取、JavaScript 求值、Markdown、语义树、截图与 PDF。用 CSS 选择器只取某个容器而不是整页（列表页实测省 40–80 倍 token），并支持滚动触发懒加载。Moli 缺失时自动安装；已在…
  `v1.1.19` · [源码](https://github.com/27painter/dsh-moli)
- **dsh-gui-auth-url** — 把当前 DSH Web GUI 的合法带 token 地址作为 agent 工具返回，浏览器自动化可直接打开 GUI，不再遇到 401。
  `v0.2.2` · 引擎 `>=0.2.1-rc.2 <0.3.0-0` · [源码](https://github.com/NingYuanLee/dsh-gui-auth-url)
- **@liustack/modsearch** — 纯文本 agent 的联网搜索桥：搜索网页与 X，返回结构化 JSON 证据（search/fetch/引用）。
  `v5.10.10` · [源码](https://github.com/liustack/modsearch)
- **@godchen520/dsh-web-search-bing** — 为内置 web_search 工具提供 Bing 搜索源：优先解析 Bing 的 RSS 输出，以 cn.bing.com 公开 HTML 结果页作为兜底，无需 API Key，国内可直连，搜索不再消耗模型自带的搜索额度。端点、结果数量与结果语言可配置；适配 DSH 0.2.x（0.1.7+ 亦可用）。
  `v1.2.3` · [源码](https://github.com/godchen520/dsh-web-search-bing)
- **deepseek-harness-zhipu_plan_tools** — 智谱（GLM Coding Plan）三件套以原生 provider 与工具接入：内置 web_search / web_fetch 后端切换为智谱联网搜索与网页 Markdown 读取，可选注册 github_search_doc / github_get_repo_structure /…
  `v0.1.8` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/magian1127/deepseek-harness-zhipu_plan_tools)
- **@zhiqiangme/dsh-tavily-search** — 为内置网页搜索提供 Tavily 后端：在 DSH 进程内提供 127.0.0.1:8787/v1 接口，把搜索请求转成 Tavily 检索；最多 10 个 API Key 存在 DSH 凭据库，按请求轮换，遇鉴权、限流或额度错误自动换下一个；设置卡片可管理密钥、测试搜索并一键接入网页搜索。
  `v26.10.18` · [源码](https://github.com/zhiqiangme/dsh-plugins)
- **dsh-tinyfish-search** — 基于 TinyFish 的网页搜索提供方：把内置 web_search 接到 TinyFish Search API，每次搜索一次 GET，不消耗模型调用。
  `v0.17.1` · 引擎 `>=0.1.7-alpha.2 <0.3.0` · [源码](https://github.com/maxwell-feng/dsh-tinyfish-search)
- **dsh-dschat** — 在 DSH 桌面版主面板里通过 Electron webview 嵌入 DeepSeek 网页版聊天（chat.deepseek.com），带后退/前进/刷新工具栏，并把登录相关的 localStorage 快照存在本地、下次打开时回填。
  `v0.1.2` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/Jakcet/dsh-dschat)
- **dsh-browser-crossplatform** — dsh 浏览器扩展的桌面端一半：在 dsh 自带的 webserver 上挂一个带令牌校验的 WebSocket 桥，向模型暴露 browser_* 工具，让它读取并操作用户当前标签页，图片识别默认关闭、需用户自行开启。
  `v0.38.7` · [源码](https://github.com/youbaiyun/dsh-browser-crossplatform)
- **@dightendless/dsh-bridge-browser** — 打开浏览器扩展侧边栏，就能原地接管你当前正在浏览的网页。在上游基础上补齐了：悬停、坐标点击、拖拽、批量动作链、整页截图、本地文件上传、图片地址列举，并可在多个已连接的浏览器之间切换。页面以带编号的结构化文本交给模型；动作默认需要你批准，敏感字段以掩码呈现。发布的是桥接插件，配套扩展在同一 Release 里。本项目是…
  `v0.3.6` · [源码](https://github.com/DightEndless/dsh-browser)
- **dsh-web-fetch-playwright** — 为内置 web_fetch 工具提供 Playwright/CDP 后端：用真实浏览器渲染网页，经 Readability + DOMPurify 降噪后返回 Markdown。
  `v0.2.12` · [源码](https://github.com/chendefine/dsh-web-fetch-playwright)
- **@moguiyu/dsh-tavily** — Tavily 搜索、提取、站点地图与爬取工具：多 Key 轮换，HTTP 401/429/432/433 故障转移，并提供按账号限制并发请求的负载均衡模式；插件配置页含密钥与用量卡片。内置 web_search 永不替换。
  `v0.3.8` · [源码](https://github.com/moguiyu/dsh-tavily)
- **@pymodel/dsh-tavily** — Tavily 网页搜索：设置页开关，关闭时回落到 DeepSeek 内置搜索；免密钥可用搜索与内容提取，配置 API Key 后解锁爬取与站点地图等 MCP 工具。
  `v0.4.0` · 引擎 `>=0.1.5-rc.2 <0.3.0-0` · [源码](https://github.com/PyModel/dsh-research-plugins)
- **dsh-mcp-firecrawl** — 接入 Firecrawl 托管 MCP 服务：免密钥即可使用搜索、抓取与解析（有每日额度），配置 API Key 后解锁完整工具集，含爬取与站点地图。
  `v0.3.0` · 引擎 `>=0.1.5-rc.2 <0.3.0-0` · [源码](https://github.com/PyModel/dsh-research-plugins)
- **@wxg-prc-cpg/browser-skill-dsh-plugin** — BrowserSkill 的 DeepSeek Harness 浏览器自动化桥接插件，通过原生浏览器工具控制可见的 Chrome 和 Edge Agent Window，支持可访问性与 VOM 页面观察、截图、隔离的多会话控制和 Web UI 实时观察浮层。
  `v0.3.3` · [源码](https://github.com/Tencent/BrowserSkill)
- **@tonydua/dsh-web-search-exa** — ctx.web 接缝的零配置 Exa 网页搜索提供方：无 API key 时走匿名 MCP 兜底，配 key 时走 REST 搜索。
  `v0.2.3` · [源码](https://github.com/TonyDua/dsh-web-search-exa)
- **@zyfgood/dsh-web-search-tavily** — 为 ctx.web 接缝注册 Tavily 搜索 provider 并把 web_search 切到它；apiKey 支持逗号分隔多 key，遇到 401/403/429/5xx 与网络错误自动轮换。
  `v0.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/zyfgood/dsh-web-search-tavily)
- **qp-exa-dynamic** — 基于 Exa 的网页搜索提供方：默认开启 Exa Dynamic Highlights（并带上该设置必需的 Exa-Beta 请求头），开放全部 8 种 Exa 检索类型，提供 /exa 命令在运行时改高亮、检索类型与返回条数，并注册一个可自行指定条数的 exa_search 工具。
  `v0.2.0` · [源码](https://github.com/Geighlord007/qp-exa-dynamic)
- **dsh-keyless-search** — 为内置 web_search 工具注册免密钥搜索提供方：无需 API Key 即可使用，在 Tavily 与 Firecrawl 官方免密钥通道之间自动降级；若设置了 TAVILY_API_KEY 或 FIRECRAWL_API_KEY 会自动采用。另含两个 Bing 抓取后端，默认关闭。
  `v0.1.1` · [源码](https://github.com/OzzyDeng-JunDeng/dsh-keyless-search)
- **@jaychang1989/dsh-webchat** — 在 DeepSeek Harness 内打开 chat.deepseek.com 官方网页版：点侧边栏入口，真实页面通过桌面端的原生浏览器访客渲染在中栏，并且重启后保持登录。模型选择、深度思考、智能搜索、历史记录、附件上传仍是官方那一套；宿主没有该访客桥接时降级为打开窗口。
  `v0.7.8` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/jaychang1989/dsh-webchat)
- **dsh-web-annotator** — 在 Harness 原有 Browser 内批注网页：点选或框选后就地评论、提问，可把标记截图或 DOM 定位资料发给当前会话；启用期间替换官方 Browser、Chat 与 Layout 提供方，精确支持 Harness 0.2.1-alpha.2。
  `v0.2.2` · 引擎 `0.2.1-alpha.2` · [源码](https://github.com/cslkkl/dsh-web-annotator)
- **dsh-s1** — Search1API（s1）原生联网检索工具：网页搜索、新闻、页面抓取、站点地图与趋势榜，以 `s1_*` 一等工具形式提供，并附带 s1 技能。
  `v0.2.0` · [源码](https://github.com/superagents-lab/dsh-s1)
- **dsh-tabbit** — 让 DeepSeek Harness 能够控制 Tabbit 浏览器：安装即自动加载 tabbit-browser skill，检测国际版 Tabbit 与国内版 Tabbit Browser 正式版（>= 1.9.0），检查 tabbit-cli 常驻运行时，按平台诊断调用 CLI 所需的 DSH sandbox…
  `v0.4.0` · [源码](https://github.com/Tabbit-Browser/dsh-tabbit)
- **dsh-search-enhance** — 提供 Grok-compatible 网页搜索、保留来源分页、Context7 与 Exa 文档检索、有界网页提取、站点映射、离线研究计划和只读诊断。
  `v0.2.2` · [源码](https://github.com/umineko987/dsh-search-enhance)
- **@decodo/dsh-web-fetch** — 把内置 web_fetch 工具的抓取后端换成 Decodo Web Data API：默认返回 Markdown，并把 fetchProvider 固定为 decodo，可配置单进程抓取上限；需要 Decodo API Key，web_search 不受影响。
  `v1.0.2` · [源码](https://github.com/Decodo/dsh-web-fetch)
- **dsh-verify** — Agent 交付物的独立浏览器验收测试：JSON 规格进，真实 Chromium 结论出。
  `v0.9.6` · [源码](https://github.com/263311487-ux/dsh-verify)
- **dsh-bing-search** — godchen520/dsh-web-search-bing 的维护 fork，适配 DSH 0.1.5-rc.1：为内置 web_search 工具提供 Bing 搜索源，直接解析 cn.bing.com 公开 HTML 结果页，无需 API Key，国内可直连，不消耗模型自带搜索额度。端点与结果数量可配置。
  `v1.1.7` · [源码](https://github.com/whiteS18/dsh-bing-search)
- **dsh-web-search-firecrawl** — 提供 Firecrawl 搜索服务及多账户 API Key 设置。
  `v0.1.5` · [源码](https://github.com/aa2246740/dsh-firecrawl)
- **dsh-web-search-pro** — 增强型、可持久化的网页搜索：多引擎路由（DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS）、SQLite+LRU 缓存、userscript 风格抽取、Playwright 渲染。
  `v0.2.1` · [源码](https://github.com/anweat/dsh-web-search-pro)
- **@copylee/dsh-free-search** — 可切换引擎的联网搜索 provider，其中多个引擎无需 API key（Bing、DuckDuckGo、SearXNG 等），可设置回退顺序；另提供 multi_search、platform_search、带对话内图片墙的 image_search、page_images 和…
  `v0.6.10` · [源码](https://github.com/copylee711/dsh-free-search)
- **dsh-moli-browser** — 为 DSH 挂出完整的浏览器工具面（33 个 browser_* 工具）：把 ctx.browser 接缝接到自管的 moli 无头浏览器（经 127.0.0.1 单例 CDP 守护进程，带 Bearer token 鉴权、请求路径白名单与 WebSocket 地址改写，不需要 root / GUI 库 /…
  `v1.0.1` · [源码](https://github.com/lyp88997/dsh-moli-browser)
- **dsh-jev-ultrafast** — 给 DeepSeek Harness 一句话目标：决策服务从带编号的元素表里挑出下一步操作与目标元素，驱动真实浏览器把事办完，一趟多步任务只花一次工具调用。
  `v0.1.0` · [源码](https://github.com/xingzhen199186/dsh-jev-ultrafast)
- **@anweat/dsh-browser** — 自包含浏览器运行时：Playwright（chromium）+ OpenCLI 作为插件本地依赖（全局复用回退），提供 `browser` 服务与 9 个交互式浏览器工具。
  `v0.2.1` · [源码](https://github.com/anweat/dsh-browser)
- **dsh-browser-service** — 为 DSH 挂出完整的浏览器工具面（33 个 browser_* 工具）：把 ctx.browser 接缝接到自管的 headless Chromium（经 127.0.0.1 单例 CDP 守护进程，带 Bearer token 鉴权、请求路径白名单与 WebSocket 地址改写，不需要 root / GUI 库…
  `v0.8.3` · [源码](https://github.com/lyp88997/dsh-browser-service)
- **dsh-web-fetch-fakeip** — ctx.web 的 fake-ip 感知抓取后端，接管官方 http provider id：当某主机名的每一条 DNS 应答都是代理 fake-ip 段（默认 198.18.0.0/15）内的占位地址时予以接受，从而在 mihomo/Clash TUN 模式下无需关闭 fake-ip、也无需设置代理环境变量即可使用…
  `v0.2.0` · [源码](https://github.com/kaminn/dsh-web-fetch-fakeip)
- **dsh-academic-web-proxy** — 按机构代理规则打开学术网站，可依据匹配的论文元数据重命名符合条件的新 PDF，并提供简体中文、繁体中文及美式英语设置界面。
  `v0.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/Yokhong/dsh_academic_web_proxy)
- **@wjj-8283/dsh-web-fetch-fakeip** — 让内置 web_fetch 在 Clash / mihomo 以 TUN + fake-ip 模式运行时正常工作：只放行 fake-ip 地址段（198.18.0.0/15、fdfe:dcba:9876::/64、2001:2::/48）通过公网地址校验，回环、内网与链路本地地址仍照旧拦截。无需设置代理环境变量，也无需…
  `v0.2.1` · [源码](https://github.com/wjj-8283/dsh-web-fetch-fakeip-plugin)
- **@nono-neko/dsh-browser** — DSH Web 与 Desktop 端的内置浏览器：为 DeepSeek Harness (DSH) 提供的 AI 原生浏览器工作区，融合了多标签浏览、实时页面批注、轻量级代码编辑、工作区预览，以及跨网页和桌面的智能助手辅助迭代功能。
  `v0.4.0` · [源码](https://github.com/Nono-neko/dsh-browser)
- **@keenable/dsh-keenable** — 为内置 web_search 与 web_fetch 工具提供 Keenable 网页搜索与网页读取，适用于任意模型，无需 API Key。
  `v0.1.0` · [源码](https://github.com/keenableai/dsh-keenable)
- **@arcaneorion/dsh-tavily-web** — Tavily 检索与网页抓取：tavily_search 带最多八把 API key 的轮询池，按 key 对 401/403/429 退避，单个账号额度耗尽不再等于工具失效；web_fetch 经 curl 抓取单页，返回 HTTP 状态与去标签正文。
  `v0.2.2` · [源码](https://github.com/ArcaneOrion/dsh-tavily-web)
- **@lp181818/web-search-advanced** — 安装后自动将 DSH 网页搜索路由到本插件；只需配置服务商、API Key 和模型即可使用。支持 DeepSeek 原生搜索与 OpenAI 兼容自定义后端，已发布为 npm 包 @lp181818/web-search-advanced@0.1.3。
  `v0.2.0` · [源码](https://github.com/bug-huntter/web-search-advanced)
- **dsh-web-search-aggregation** — 聚合式网页搜索提供方：为内置 web_search 工具提供一条按优先级排序的搜索队列，覆盖 AnySearch、TinyFish、Tavily、Brave、Exa、Firecrawl、Jina、SerpApi、Serper 九家服务，每家支持多把 API Key 轮换，失败时逐级回退，并附带实时生效的设置卡片。
  `v0.1.11` · [源码](https://github.com/chendefine/dsh-web-search-aggregation)
- **dsh-tavily-pool** — 用 Tavily 接管内置的 web_search 与 web_fetch 提供方，两者各有一个开关：密钥池按余额调度（从 /usage 读取真实余额），失败自动切换，冷却中与额度耗尽的密钥硬排除，并记录调用历史与 14 天额度图表。
  `v0.3.1` · 引擎 `>=0.1.5-rc.2` · [源码](https://github.com/stormbuf/dsh-tavily-pool)
- **@lyd123qw2008/dsh-tool-control-chrome** — 通过 MV3 扩展和本地 loopback Bridge 驱动用户已登录的真实 Chrome/Edge Profile、标签页与 Cookie，为 DSH 提供 browser_* 工具、Skill 和 /chrome 命令。
  `v0.8.0` · [源码](https://github.com/lyd123qw2008/pi-control-chrome)
- **dsh-aginxbrowser** — 给 DSH agent 的网页访问层：把 JS 渲染或受保护的页面抓成干净 markdown，聚合搜索 14 个引擎，并提供有状态交互会话（点击、输入、滚动、eval、截图），引擎可托管可自部署（Rust 单二进制）。每个会话带直播页 URL，人能实时围观 agent 浏览并用鼠标接管。
  `v0.1.1` · [源码](https://github.com/yinnho/aginxbrowser)
- **dsh-native-browser** — 通过本地原生消息 Broker，让 DeepSeek Harness 操作用户明确授权的 Chrome 标签页，支持语义化页面读取、交互、截图与显式交接。
  `v0.1.0-alpha.2` · [源码](https://github.com/longmiaoo/dsh-native-browser)
- **dsh-web-search-metaso** — 秘塔AI搜索 providers for ctx.web：web_search 返回网页摘要，web_fetch 读取网页全文 markdown，多范围搜索（网页/文库/论文/图片/视频/播客）。
  `v0.1.4` · [源码](https://github.com/TZHR-invest/dsh-plugins)
- **dsh-searxng** — 基于 SearXNG 的 web_search provider：通过自建实例的 JSON API 实现免费、免密钥的元搜索，附仅绑定回环地址的 docker-compose 示例。
  `v0.4.0` · [源码](https://github.com/rogerdigital/dsh-searxng)
- **dsh-web-kimi** — 为 DeepSeek Harness 提供 Kimi Coding 的网页搜索与网页抓取双提供方——一把 coding 计划密钥同时接入 ctx.web 的两条链路（/v1/search 与 /v1/fetch），设置卡片经凭据服务保存密钥，并回退读取 Kimi CLI 配置，安装即用。
  `v0.1.0` · [源码](https://github.com/kenny2077/dsh-web-kimi)
- **dsh-search-hub** — 可配置的原生 web_search 后端：在 DeepSeek 官方原生搜索与智谱 GLM web_search 之间切换当前生效入口，并在设置页管理搜索入口与凭证引用。
  `v0.1.1` · [源码](https://github.com/Lzh3070/dsh-search-hub)
- **dsh-web-search-doubao** — 为 DeepSeek Harness 提供豆包搜索（火山引擎）网络搜索提供方——把 web_search 的后端切换为独立的豆包搜索 API，密钥与计费独立（每月 500 次免费），并内置专用设置卡片，经凭据服务保存密钥。
  `v0.2.1` · [源码](https://github.com/kenny2077/dsh-web-search-doubao)
- **dsh-web-search-zhipu** — GLM(智谱)网页搜索 provider——把 web_search 后端切到智谱 Anthropic 兼容端点的服务端搜索工具,直接复用你现有的 GLM 额度或 Coding Plan,替代 DeepSeek 官方搜索通道,并内置智谱私有响应格式的翻译层。
  `v0.1.0` · [源码](https://github.com/PartinGQAQ/dsh-web-search-zhipu)
- **dsh-web-search-glm** — 智谱 GLM 联网搜索 provider：以 glm 注册到 ctx.web 缝，经 GLM 的 Anthropic 兼容 API 执行原生 web_search 服务端工具（走 Coding Plan 计费）。
  `v0.1.0` · [源码](https://github.com/Noemm/dsh-web-search-glm)
- **dsh-web-search-ollama** — 让 DSH 的 web_search 工具走 Ollama 联网搜索 API，复用 OLLAMA_API_KEY，无需 DeepSeek 官方 Key。
  `v0.1.1` · 引擎 `>=0.1.0-rc.8` · [源码](https://github.com/sryimnoob123/dsh-web-search-ollama)
- **@creait/dsh-web-search-searxng** — 把 web_search 指向自建的 SearXNG 实例而非原生搜索路由：自动翻页直到满足 maxResults，并在引擎失败时报告覆盖不全，避免把稀少的结果误读成网上本就没有内容。
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **@creait/dsh-web-fetch** — ctx.web 接口的本地受控抓取提供方——dsh 自带完整的 web_fetch 工具，却没有随附后端。每一跳重定向都会重新解析并对照非公网地址段校验，另有流式大小上限与内容类型白名单。
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **@yugasun/dsh-web-search** — 向 ctx.web 注册百度、豆包、Tavily、Exa 后端供官方 web_search 使用，并在 Tavily 或 Exa 生效时将 web_fetch 转到对应提取接口。
  `v0.2.5` · [源码](https://github.com/yugasun/dsh-plugins)
- **dsh-scrape-webpage** — 抓取任意 http/https 网页，提取标题、描述、正文、标题结构与链接，输出字符/词数、阅读时长、语言等统计与高频关键词；支持下载内容图片到会话工作区供视觉分析，并通过 scrape.imageAnalyzer 服务分发给已注册的识图分析器。
  `v1.0.0` · [源码](https://github.com/131CDA1/dsh-scrape-webpage)
- **dsh-browser4** — 安装 browser4-cli 运行时，并将 Browser4 技能集（browser4-cli、browser4-experience、browser4-plugin、scent-miner）注册到 DSH 技能库，提供面向自主 Agent、智能提取与大规模网页自动化的 AI 原生浏览器引擎。
  `v0.0.1` · [源码](https://github.com/platonai/dsh-browser4)
- **dsh-tavily** — 为 DSH 提供 Tavily 网页搜索：设置开关、默认无 Key，以及连通测试。
  `v0.3.1` · [源码](https://github.com/SZMY-haruhi/dsh-tavily)
- **dsh-pilot** — 按无障碍 ref 操控浏览器：导航、把页面快照成 ref 树、操作元素、等待条件；域名策略跟随会话审批状态，并由请求拦截层强制执行。
  `v0.1.1` · [源码](https://github.com/Viger1/dsh-pilot)
- **dsh-preview** — 无头浏览器验证工具：让 agent 打开自己刚写的页面，读取渲染后的 DOM 与计算样式、检查控制台、截图留档；内置 frontend-verify 技能。
  `v0.1.1` · [源码](https://github.com/Viger1/dsh-preview)
- **dsh-jiey-browser** — 通过 MCP 在 DeepSeek Harness 中驱动 Jiey 浏览器：导航、快照、操作、读取、截图与标签页管理，使用真实 Chromium 环境。
  `v0.1.4` · [源码](https://github.com/jiewaigongxing/dsh-jiey-browser)
- **@elves-ai/dsh-web-search-firecrawl** — 基于 Firecrawl 的网页搜索提供方：替换内置 web_search 的后端，并提供 API Key、结果数量等字段的设置卡片。
  `v1.0.0` · [源码](https://github.com/elves-ai/dsh-web-search-firecrawl)
- **dsh-chrome** — Chrome 侧边栏内嵌 dsh 网页界面，让 agent 读取当前页面、捕获 HTTP 流量并操作浏览器。
  `v0.1.3` · [源码](https://github.com/stuarthu/dsh-chrome)
- **dsh-exa-mcp** — 通过内置的 @deepseek-ai/dsh-mcp-client 桥接接入托管的 Exa 搜索 MCP 端点（mcp.exa.ai）：web_search_exa 与 web_fetch_exa 工具，免费额度匿名可用，设置 EXA_API_KEY 可解锁更高限额。
  `v0.1.0` · [源码](https://github.com/MicroHEROX/dsh-exa-mcp)

## Git 与代码审查 · git（81）

- **@michengai/dsh-code-review** — 提供 /review、/review-status 和 /review-cancel，用独立原生子 Agent 审查所选 Git 范围（基准分支、未提交更改、某次提交或自定义要求），并把发现报告返回当前会话；报告语言跟随宿主 locale，支持中英文。
  `v1.0.3` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-code-review)
- **@jayyuen66/dsh-ocr-review** — 把外部 `ocr`（open-code-review）CLI 包成五个模型工具——单次评审、全树扫描、确定性的范围与规则脚手架、会话查询——并把「OCR 发现了什么」与「这次跑有没有覆盖完选中的文件」分成两套口径回报。
  `v0.1.8` · 引擎 `^0.2.1-rc.3` · [源码](https://github.com/JayYuen666/dsh-ocr-review)
- **dsh-worktree-space** — Worktree Space：将一个可包含多个 Git 仓库的工作区任务放进独立的任务空间目录——参与的每个仓库使用同一个任务分支各开一个 worktree；空间自动注册为 DSH 工作区，会话直接在其中开工，多个任务并行推进、互不干扰。收尾时可合并回各仓库目标分支、移除 worktree，并把 Git…
  `v1.3.5` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/kangtsang/dsh-worktree-space)
- **agents-gitflow-guard** — AI 编码智能体分支角色守卫：可配置集成/预览/生产/归档角色，拦截对受保护分支的直接推送、强推与删除，以及智能体对生产/归档分支的合并。
  `v0.1.8` · [源码](https://github.com/FeatureAgents/AgentsGitFlowController)
- **dsh-git-push** — DSH 的 git 提交推送自动化：提交前审计、规则质量评分、SSH 密钥生成与三选项卡设置侧边栏。
  `v2.10.1` · [源码](https://github.com/EIGHTfs/dsh-git-push)
- **dsh-gitlab-plugin** — 在侧栏面板里通过 GitLab REST API 与个人访问令牌查看合并请求、评审讨论串与流水线作业日志，并可评论、回复、解决讨论与批准；写操作均需二次确认（读需 read_api，写需 api）。
  `v0.2.2` · 引擎 `>=0.2.0 <0.3.0` · [源码](https://github.com/k0ndrateff/dsh-plugins)
- **dsh-git-branch-manage** — DeepSeek Harness 的 git 分支与 worktree 管理：工作区工具栏显示当前分支并可原地切换；支持 IDEA 风格分支选择器、远程分支检出、右键操作菜单（新建/重命名/删除/复制）、推送与更新当前分支，以及把分支隔离到独立 worktree 工作区并管理其创建与删除。
  `v1.0.3` · [源码](https://github.com/GaoHu1997/dsh-git-branch)
- **dsh-gitnexus-plus** — 在 DSH 侧栏读取 GitNexus 索引，报告被跳过的文件、索引新鲜度与语言覆盖，支持符号搜索和最近的 Git 活动审查。
  `v0.1.7` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/Moowningstar/gitnexus-plus)
- **@yangzhe1991/dsh-code-review** — 把对话里的 git diff 一键打开为独立标签页的双列代码评审页：行号、增删配色、字符级高亮、hunk 感知的多文件分段、文件导航侧栏与统计条，行内评论可提交回 DSH 对话框，界面跟随 DSH 语言（中英）。
  `v0.3.0` · [源码](https://github.com/yangzhe1991/dsh-code-review)
- **dsh-source-control** — DSH Web 右侧 Sidebar 中的类 VSCode 源代码管理页：带引用标记与分页的泳道提交图与逐提交差异、分组的工作区变更与暂存/丢弃/取消暂存，支持修补上一次提交与 AI 生成信息的提交框、并排与统一差异视图、通过 gh CLI 新建仓库与创建 Pull Request，以及 HTTPS 与 SSH…
  `v0.7.1` · 引擎 `>=0.2.0-rc.2 <=0.2.1-rc.3` · [源码](https://github.com/xzy-nine/dsh-source-control)
- **dsh-git-plus** — DSH 网页端的侧栏 Git 面板：Local Changes 与 All Commits 视图，分支、标签与 Stash 管理，fetch、pull、push 弹窗，带冲突处理的合并，以及输入框上的 zsh 风格分支标记。
  `v0.1.58` · [源码](https://github.com/bitxeno/dsh-git-plus)
- **dsh-ide-git** — 侧边栏里的 JetBrains 风格 Git 工具窗口：带 ahead/behind 角标的分支树、可按文本/作者/日期/路径筛选的提交图谱、逐文件行级 diff、变更列表与提交框，以及分支、标签、贮藏操作和合并、变基、优选、重置、抓取/拉取/推送。
  `v0.20.0` · 引擎 `>=0.1.6-alpha.2` · [源码](https://github.com/KannaKuron/dsh-ide-git)
- **@feng0531/dsh-code-review** — 复用当前 DSH Agent 模型只读审查 Git 与 SVN 变更，支持变更预览、显式上下文及经审批的模型请求。
  `v0.86.1` · [源码](https://github.com/f-e-n-g-0531/dsh-code-review)
- **@perrylink/dsh-github** — 官方级 GitHub CI 集成：composite action.yml、轮询 PR 评审机器人（幂等行内评论 + status-check 门禁）以及 PR/issue 工具，所有写入走人工审批门。
  `v0.7.27` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-github)
- **@happyqu/dsh-plugin-git** — 在 DSH 会话标题栏与浮层工作台中管理已有本地仓库，支持查看改动、提交、获取、拉取、推送以及浏览分支和历史。
  `v0.1.26` · [源码](https://github.com/happyqu/dsh-plugin-git)
- **@xbzbing/dsh-git-panel** — DSH Web GUI 里的 IDE 风格 Git 面板：常驻标签页含三栏总览（分支/标签列表、可搜索的提交历史图、含变更文件树与提交信息的提交详情）与变更记录页（统计条、带逐文件暂存/取消/丢弃的未提交列表、含 amend 的提交框）；并排差异带懒加载 highlight.js…
  `v1.9.1` · [源码](https://github.com/xbzbing/dsh-git-panel)
- **@linxueyuan/dsh-git** — DSH 官方右侧栏里的本地 Git 与四个 GitHub 远端页签：Changes（按文件暂存、逐行 diff、提交信息由 DSH 里已配好的模型生成）、History，以及由 host 半代理的 Code / Issues / Pull requests / Actions。令牌只存在 host…
  `v1.2.1` · [源码](https://github.com/LinXueyuanStdio/dsh-git)
- **dsh-cool-git** — Git 插件 —— 会话 Tab 栏添加 Git 管理功能，支持 commit | pull | push | branch | diff 等基础功能。
  `v0.2.4` · [源码](https://github.com/CoolTea001/dsh-cool-git)
- **dsh-vscode-mode** — 为 DeepSeek Harness 提供类 VSCode 编码体验：基于 Monaco 的中央文件编辑器（文件页签、Ctrl+P 快速打开、状态栏），并对 Agent 的 edit/write 结果进行交互式差异审查（逐处采纳/拒绝、回滚、归档），状态跨重启持久化。
  `v0.19.2` · 引擎 `>=0.1.0-rc.1 <0.3.0-0` · [源码](https://github.com/Lenonss/DSH_VsCodeMode)
- **dsh-github-flow** — 把当前环境 GitHub CLI (gh) 包装成 Agent 工具集（PR、Issue、Actions 运行、仓库检索与原始 API 调用），另提供 /gh status 与 /gh help 两个斜杠命令，以及全局仓库驾驶舱和会话工作区两个 Web 面板。
  `v0.7.0` · [源码](https://github.com/ItQianChen/dsh-github-flow)
- **@laoyuehanni/dsh-git-worktree** — 在 Web 输入框切换分支、以真实工作区方式创建隔离的 git worktree。
  `v0.4.12` · [源码](https://github.com/LaoYueHanNi/dsh-git-worktree)
- **@goodandready/dsh-gitea** — 为 DeepSeek Harness 集成 Gitea 与 Forgejo，提供 issue、拉取请求和 worktree 工具及 Git 状态芯片。
  `v0.7.39` · [源码](https://github.com/GooDAnDReaDY/dsh-gitea)
- **pr-genius** — PR 评估和改进顾问：基于历史反模式和成功模式评估 PR 成功率，一键评分并提供可操作的改进建议。
  `v2.2.5` · [源码](https://github.com/zsxh1990/pr-genius)
- **dsh-task-worktree** — 任务级 git worktree：per-repo manifest 持久保存；Worktree 模式在首条消息注入创建指引并统一 worktree/ 分支前缀，头部徽标替代工作区注册，支持带回主目录或强制删除收尾。
  `v0.4.5` · [源码](https://github.com/Letter2025/dsh-task-worktree)
- **dsh-plugin-git-workbench** — 面向 DSH 的本地 Git 工作台：分支搜索与切换、hunk 级暂存、提交图谱、文件历史与 blame、储藏与工作树管理、冲突处理，以及 8 个供 agent 使用的 Git 工具。
  `v1.1.1` · [源码](https://github.com/Yaronluo/dsh-plugin-git-workbench)
- **@wongzexu/dsh-git-status** — 专精于 Git 分支与状态处理：Web 右缘 Git 状态浮窗，commit DAG 泳道图、未提交改动与 stash、行内 diff，右键分支/tag 切换、合并、重命名、删除、新建，一键拉取全部远程。
  `v2.0.0` · [源码](https://github.com/Wongzexu/dsh-git-status)
- **@duke-dsh-plugins/dsh-git-manager** — DeepSeek Harness 的 Git 工作区管理：输入框「模式」选择器旁的仓库感知入口，打开与设置同规格的面板，覆盖 diff/commit、分支、冲突、worktree 管理与带分支线的提交历史。
  `v1.7.0` · 引擎 `^0.1.0-rc.7 || ^0.1.1-rc.0 || ^0.2.0-rc.1 || ^0.2.1-rc.0` · [源码](https://github.com/MoonlitDropOfBlood/dsh-git-manager)
- **dsh-open-code-review** — 将阿里 Open Code Review 接入 DSH：通过原生文件筛选、规则工具和审查技能复用当前会话模型，并提供可选的 OCR 独立审查模式。
  `v0.1.2` · 引擎 `0.1.7-rc.2 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/mocilukalbj/dsh-open-code-review)
- **dsh-branch-cleaner** — 冗余分支清理：找出已经落地到主线的分支（普通合并 / squash 合并 / rebase 或 cherry-pick 落地 / 上游已删除 / PR 已合并），确认后再删除。默认只报告，不切换分支、不 rebase，删除前把每个本地分支备份到 refs/backup/branch-cleaner/（删除远端分支不备份…
  `v0.1.0` · [源码](https://github.com/ramwin/dsh-branch-cleaner)
- **@linxin666/dsh-client-ui-git-graph** — 输入框上方提供 Git 分支选择器，并把分支泳道与提交历史画成图谱，沿着时间线找到任意变更。
  `v0.4.8` · [源码](https://github.com/zhu1090093659/dsh-web)
- **dsh-diff-approval** — DeepSeek Harness 的待处理改动审查：每次 edit/write/str_replace_editor 改动都会自动汇总到文件列表，可对单个差异块、选区内的多块或整个文件执行保留/回退，支持撤销重做。还能导入工作区的版本控制改动，以单栏或左右对照视图展示差异，并提供亦能保留/回退差异的 Markdown…
  `v0.36.1` · [源码](https://github.com/9087/dsh-diff-approval)
- **dsh-command-code-review** — 注册 /code-review 斜杠命令，五个并行审查视角、逐发现置信度打分，同时支持拉取请求与本地代码审查。
  `v0.5.0` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/JasonFreeLab/dsh-command-code-review)
- **dsh-git-worktree** — Git Worktree Session Target：任务在隔离 Session 中运行，支持 Ready for Review、可撤回的 Local Preview、人工确认交付、环境保留与恢复，以及同一 Session 连续迭代。
  `v0.11.0` · [源码](https://github.com/wloops/dsh-git-worktree)
- **@feng0531/dsh-vcs** — 在 DeepSeek Harness 内只读审阅 Git 与 SVN 变更，支持仓库浏览和并排差异对比。
  `v0.4.10` · [源码](https://github.com/f-e-n-g-0531/dsh-vcs)
- **@stardustlc/dsh-review** — 绑定代码快照的多智能体 Git 审阅，支持独立复核、多数投票、问题处置追踪和 AI 审阅门禁。
  `v0.3.0` · [源码](https://github.com/STARDUSTLC666/dsh-review)
- **@dsh-electron/dsh-plugin-git** — Git 服务 + 右侧边栏 UI：Changes 页（暂存/取消暂存、逐文件 diff、提交/修补、推送与 rebase 同步、二次确认的丢弃）、分页 canvas 提交图谱页、Worktrees 页（列出/进入/新建工作树）、输入框旁分支选择器，以及可选的 LLM 提交信息生成。
  `v0.2.7` · 引擎 `0.1.5-rc.2 || 0.1.5-rc.3 || 0.1.6-alpha.1 || 0.1.6-alpha.2 || 0.1.7-alpha.1 || 0.1.7-alpha.2 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-alpha.2 || 0.2.1-alpha.3 || 0.2.1-alpha.4 || 0.2.1-alpha.5 || 0.2.1-rc.1 || 0.2.1-rc.2` · [源码](https://github.com/cherrchen/dsh-plugin-git)
- **dsh-plugin-git-composer** — DSH 对话输入框 Git 状态胶囊条：极速切换分支、联动原生 Diff 抽屉、自适应 Commit/PR 及 Actions CI 状态追踪。
  `v0.1.0` · [源码](https://github.com/ls-open/dsh-git-composer)
- **gord-dsh-worktree** — 为 DeepSeek Harness 管理 git worktree —— 让并行工作各自隔离在自己的目录与分支里。自带快速模式（Fast mode）。
  `v0.6.0` · 引擎 `^0.1.5-rc.1 || ^0.1.6-0 || ^0.1.7-0 || ^0.2.0-0` · [源码](https://github.com/nightosong/gord-dsh-worktree)
- **@cerbur/clutch-dsh-worktree** — 为 DSH Web UI 增加按 Git Worktree 组织 Session 的视角，同时继续由 DSH 管理原始 Project 和 Session 数据。
  `v0.1.18` · [源码](https://github.com/Cerbur/clutch-dsh)
- **dsh-git-graph** — DeepSeek Harness 的 Git 视图：状态、提交图、分支与标签（合并为同一个下拉框，可切换分支或检出标签）、差异、暂存提交、推送拉取与逐行溯源。
  `v0.1.8` · [源码](https://github.com/enoughpower/dsh-git-graph)
- **dsh-git-badge** — DSH 的 Git 状态徽章：侧边栏工作区行徽章与输入行徽章，显示当前会话工作区的 git 状态，通过 SSE 事件驱动保持实时。
  `v0.20.1` · [源码](https://github.com/Kevin-McIsaac/dsh-workspace-git-badge)
- **dsh-git-idea** — 照着 IDEA 的 VCS 做的 Git 集成，装进 DSH 会话：输入框「权限模式」旁边的 Git 图标显示当前分支与未提交改动数，悬停可切分支，点击弹出 IDEA 风格的面板（分支树、提交图、变更与暂存、提交详情、文件差异），另有一个设置页管提交身份、git 位置和网络参数。不向 DSH 注册任何模型工具。
  `v0.3.0` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/mays-hi/dsh-git-idea)
- **@xzhi/dsh-simple-worktree-plus** — 为 DeepSeek Harness 管理 Git Worktree，提供分支删除控制和指定工作区管理。
  `v1.2.1` · [源码](https://github.com/GitHub-Xzhi/dsh-simple-worktree-plus)
- **dsh-gitee-chat** — 在对话里管理 Gitee 企业版项目：issue、Pull Request、看板与 Gitee MCP 工具链。
  `v0.5.3` · 引擎 `^0.2.0-rc.2` · [源码](https://github.com/huayuguo/dsh-gitee-chat)
- **dsh-git-vcs** — 右侧栏的 IDEA 风格 Git 面板：本地变更与按文件勾选提交、提交树与提交详情、分支 / 远程 / 贮藏管理、带凭据兜底的推送，以及 git 命令流水，全部通过原生 git CLI 执行。
  `v0.2.0` · [源码](https://github.com/TiChuXiXi/dsh-git-vcs)
- **dsh-solution-explorer** — DSH Web GUI 右侧边栏：VS Code 风格文件浏览器加源代码管理（git 状态、暂存/取消暂存/放弃变更、提交、差异、提交图形、抓取/拉取/推送同步、分支与远程管理、Git 初始化、多仓库切换、文件状态着色、文件类型图标），并提供打开会话/文件树/源代码管理里任一文件的编辑器视图（Markdown/HTML…
  `v1.0.2` · [源码](https://github.com/xiaoksio/dsh-solution-explorer)
- **dsh-git-forge** — 项目级 Git 凭据：forge 账号（GitHub、Gitea、GitLab、Bitbucket 或自定义域名）在右侧栏「Git 凭据」标签页里管理并可按项目授权，再由生成的凭据 helper 交给 agent 走 HTTPS 推送，token 不进对话；未授权 host 的推送会被拦截器直接拒绝。
  `v1.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/OMSociety/dsh-git-forge)
- **@whybebabo/dsh-file-review-tab** — 侧边栏「文件审查」标签页：按轮次列出本会话改动文件、展开行级 diff 并支持撤销，对话尾部同步显示同款审查卡片。需另装 dsh-better-sidebar。是 Lzh3070/dsh-file-review-tab 的 DSH 0.2.x 移植版，不要与原版同装。
  `v0.7.1` · [源码](https://github.com/whybebabo/dsh-file-review-tab)
- **dsh-web-git-sidebar** — DSH Web 左侧栏的源代码管理面板：搜索、切换与创建分支并显示领先/落后提交数，拓扑序提交图，点击任意提交可展开查看其文件（A/M/D）、增删行数、提交信息、作者与时间。设置上方常驻一个底部停靠区，包含分支下拉与最近提交并跟随当前会话；fetch 与快进 pull 合并为一个按钮；另有 git_worktree…
  `v0.5.0` · [源码](https://github.com/RaditPasya/dsh-web-git-sidebar)
- **@dennisrongo/dsh-git** — Git 更改标签页：暂存、对比、AI 起草提交信息、分支/合并/储藏/工作树操作与同步，通过 fs.watch 加 changeToken 轮询实现实时更新。
  `v0.5.1` · [源码](https://github.com/dennisrongo/dsh-plugins)
- **dsh-git-tools** — 在宿主进程中执行 git，使 push、pull、fetch 在 agent 沙箱内可用；提供 8 个 agent 工具（status、diff、log、stage、commit、push、fetch、pull）与 11 个斜杠命令，包括 /git-status、/git-commit、/git-tag 与…
  `v1.2.4` · [源码](https://github.com/Yangi-252410/dsh-import-repositories)
- **dsh-review-checkout** — Codex 风格的会话文件修改审查：每轮变更卡片（可接管 shell 的 edited 卡片），统计口径为本轮净差异；审查 tab 的 diff 不自动换行、真实行号、按行打开、可拖拽分栏；悬停预览显示整文件差异（每处改动前后 3 行上下文）；按轮一键撤回；工具条显示记录占用并可一键清空。记录按会话分片存储，快照用内容…
  `v1.0.1` · [源码](https://github.com/Binaryinject/dsh-review-checkout)
- **dsh-git-panel** — Git 侧边栏面板：提交图谱、超前/落后跟踪、分支操作及改动 Diff 一键带入对话。
  `v0.1.20` · [源码](https://github.com/a792883583/dsh-git-panel)
- **dsh-git-review** — DeepSeek Harness 会话审查标签页：工作区相对 HEAD 或任意两 ref 的变更，以可过滤文件树加双列差异呈现；泳道提交图带逐行追溯与单文件历史；三范围搜索；行内评论回写对话输入框；暂存、提交、分支、标签、贮藏与冲突操作全部设防。
  `v0.1.8` · [源码](https://github.com/HaoyueQin/dsh-git-review)
- **dsh-github-router** — 面向 agent 的只读 GitHub 访问，封装多个工具。在工具内部自动探测与选择本地可用的 GitHub 访问设施，并自动尝试网络代理。减少 Agent 在访问 GitHub 时可能遇到的网络问题或解析问题，减少 Agent 频繁尝试不同方案的开销。
  `v0.4.1` · [源码](https://github.com/AngelosZou/dsh-github-router)
- **@alpacachen/dsh-simple-worktree** — 极简 worktree 管理方案，只有一个按钮和一个弹窗。
  `v1.1.3` · [源码](https://github.com/alpacachen/dsh-worktree)
- **@weibaohui/dsh-git-server** — Git 服务器：内嵌 ts-gogs（Gogs 的 TypeScript 平替），独立端口跑完整 Git 服务（HTTP clone/push、网页端、issue/PR/wiki），可复用 user-management 的用户名密码，设置页一键启停。
  `v0.2.4` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-git-server)
- **@maxhsu/dsh-forge** — 面向自建 Gitea / Forgejo 的只读工具，走两者共用的 REST API：实例信息、仓库列表、议题与 PR 搜索和读取、PR diff 与变更文件，以及 Actions 运行、任务与任务日志。工具元数据支持英文、繁体中文、简体中文与日文。
  `v0.3.4` · [源码](https://github.com/maxmilian/dsh-forge)
- **dsh-pr-board** — DSH 侧边栏的维护者 + 开发者 PR 看板：五状态评审队列（等我 / 等作者 / 可合并 / 已合并 / 待分诊）、三列 issue 看板、跨仓库跟踪自己 PR 的 mine 视图（我的回合 / 等别人 / 已合并），附 CI 汇总徽章与不活跃过滤，点卡片一键打开或新建对应的评审会话。
  `v0.11.14` · [源码](https://github.com/delock/dsh-pr-board)
- **dsh-knj-version-control** — DSH Web 侧栏的版本控制工作台：改动按类型分组，支持单文件与多文件暂存，提交/拉取/推送均先预览再确认，失败时弹窗展示 Git 原始输出。
  `v2026.9.200` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/yangdongzhen590/dsh-knj-version-control)
- **@fengbinmov/dsh-git-panel** — 会话页里多出一个 Git 页；左侧是未暂存 / 已暂存的改动，右侧是带行级操作条（暂存 / 丢弃）的 diff 预览。
  `v0.1.1` · [源码](https://github.com/fengbinmov/dsh-git-panel)
- **dsh-git-manager** — 为 DeepSeek Harness 提供 GitHub 联动的可视化 Git 管理：引导式 GitHub Flow 步骤、带 PR/CI 徽章的提交图谱、一键 GitHub 登录、PR 与 issue 管理，以及面向 Agent 的结构化 Git 工具。2.0.0 起由 gitcompass 改名而来。
  `v2.0.0` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/Dayi-Z/dsh-git-manager)
- **@zhucy123/dsh-update** — 一键更新本地 DeepSeek Harness：侧边栏按钮对比版本、拉取重建并自动重启，还可选择回退到任一历史版本，全程实时进度。
  `v1.7.0` · [源码](https://github.com/Zhucy123/dsh-update)
- **dsh-github-workbench** — DSH 侧边栏 GitHub 工作台：远端目录树加 Issues / Pull requests / Actions 页签，支持建 Issue/PR、评论、编辑、关闭、merge/squash/rebase 与重跑或取消 CI；挂载为 better-sidebar 页签或独立右侧面板。
  `v0.3.0` · [源码](https://github.com/meyaomiao/dsh-github-workbench)
- **dsh-tauri-turnrewind** — Git worktree 的 turn 级工作区撤销：每个 turn 建私有快照，/undo 先出红绿 diff 预览卡、卡内确认；turn 之后被改过的文件拒绝用冲突 diff 覆盖，只有显式 --force 或 --skip-conflicts 才继续；不写用户仓库的 HEAD、index、stash 与提交历史。
  `v0.3.1` · [源码](https://github.com/yingtianlan/dsh-tauri-turnrewind)
- **dsh-github-mcp-hint** — GitHub MCP 辅助面板：在「设置 → 插件 → GitHub MCP」展示可复制的示例提示（30 条示例池随机 4 条）、可视化公开仓库的星/fork/语言，并提供 gh_repo_stats / gh_current_user 模型工具。
  `v0.3.1` · [源码](https://github.com/ZIye1208/dsh-github-mcp-hint)
- **dsh-plugin-repopanel** — 浏览工作区 origin 远端对应的 GitHub issue 与 pull request，筛选、评论、关闭或重开，并可转成任务写到 dsh-plugin-taskboard 的看板上等 agent 领取。
  `v0.1.0` · [源码](https://github.com/ijry/DeepSeek-Harness-Desktop-Ultra)
- **dsh-github-mcp** — 把 GitHub 官方远程 MCP server 封装为 DSH 插件：PAT 存入 DSH 凭据中心（.credentials.yaml），提供 github_set_token / github_token_status 模型工具，GitHub 工具以 mcp__github__* 形式可用。
  `v0.2.0` · [源码](https://github.com/ZIye1208/dsh-github-mcp)
- **dsh-dev-git-graph** — DSH Web 的 vscode-git-graph 1.30.0 忠实移植：入驻 dsh-better-sidebar 右侧栏的原生 Git Graph 提交图 tab（前置依赖），自动绑定会话工作区，host 直跑全套 git 操作（checkout/merge/rebase/push/tag/stash），文件…
  `v0.1.3` · [源码](https://github.com/kp-z/dsh-dev-git-graph)
- **dsh-review-squad** — 通过 /review 命令或 code_review 工具并行派出只读评审员子代理小队（安全、正确性、测试、风格，各自可指定不同模型），并汇总为按严重度分组的结构化评审报告。
  `v0.1.1` · [源码](https://github.com/luomeii/dsh-review-squad)
- **dsh-backstory** — /backstory 命令与工具：为每一行标注最后改动它的 git 提交，以及写下它的 agent 轮次与提示词；数据取自按行持久化的账本（以内容哈希防漂移）、DSH-* 提交尾注或实时会话日志。
  `v0.8.2` · [源码](https://github.com/MeghanBao/dsh-backstory)
- **dsh-turnsnap** — 零配置的逐轮 git 检查点：在 git 工作区的每个 agent 轮结束后，把全部变更暂存为一条带 [turnsnap] 标记的提交（串行队列、感知沙箱策略），每一轮都是回滚点。
  `v1.0.0` · [源码](https://github.com/yongshuai0314/dsh-turnsnap)
- **dsh-gitflow** — 增加需要审批的 Git 状态、diff、日志、提交、分支和可选检查点工具。
  `v0.1.3` · [源码](https://github.com/lonelymoon87/dsh-gitflow)
- **dsh-git-workbench** — DeepSeek Harness Git 开发工作台：采集分支、状态、worktree、stash 和最近提交，并通过命令、工具与设置界面管理 Git 工作区。
  `v0.3.4` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/kaixinbaba/dsh-git-workbench)
- **dsh-blast-radius** — 报告 agent 代码修改的语义波及面：哪些符号变了、谁在调用它们、其中哪些调用方没有测试覆盖。
  `v0.1.0` · [源码](https://github.com/haoku123/dsh-blast-radius)
- **dsh-github-skills** — 四个面向 GitHub 工程工作流的 DSH Skill：PR 分诊、review 反馈、GitHub Actions 诊断和安全的 draft PR 发布；优先复用现有 DSH 能力，必要时回退到 gh/git。
  `v0.2.1` · [源码](https://github.com/Starfie1d1272/dsh-github-skills)
- **dsh-review** — 对抗式代码审查：多个 finder 并行地从不同视角（正确性、生命周期、契约、安全）审查改动，随后每条发现都交给独立验证者去推翻它，只要有一票推翻就丢弃。
  `v0.1.1` · [源码](https://github.com/Viger1/dsh-review)
- **dsh-user-experience** — 帮你发现项目中可能存在的用户体验问题：自动走查 React/TypeScript 源码，定位问题并给出具体优化建议。
  `v0.4.2` · [源码](https://github.com/DietCokewithSugar/dsh-user-experience)
- **dsh-plugin-git-workflow** — 一等公民的 Git 工具：status / diff / log / commit / branch，参数与路径校验、零 shell 调用，杜绝注入。
  `v0.1.2` · [源码](https://github.com/truelove-dreamer/dsh-plugin-git-workflow)
- **github-explore** — 基于 gh CLI 的 GitHub 搜索/发现/审计技能包（SKILL.md 打包）：仓库搜索、多轴探索、趋势、仓库概览、相似项目、代码搜索、issue/PR 搜索与组织审计；以 dsh bundle 形式安装（并已发布 npm）。
  `v3.1.0` · [源码](https://github.com/Fectivnfy112357/github-explore)
- **dsh-github** — GitHub Device Flow 授权与对话内 PR 工作流：输入框上方的状态条支持创建 / AI 审查 / 合并 PR，另有 github_* 工具用于搜索、Issue 与 PR 读写。
  `v0.1.0` · [源码](https://github.com/kaziii/dsh-github-connector)

## 视觉与多模态 · vision（73）

- **dsh-image-tiler** — 让超大图片以可读分辨率进入模型视野，而不是被压成一张缩图：准入前按附件存储允许的上限把大图切成多张切片（8000x8000 的截图会变成 20 张 2000x1600），小字得以保留。以替换本地附件存储的方式实现，不新增任何配置项。
  `v0.1.7` · 引擎 `>=0.2.0-rc.1 <0.3.0` · [源码](https://github.com/Ssrs-Pro-Max/dsh-image-tiler)
- **@q253595422/dsh-imagegen-video** — 面向 DSH Web GUI 的 AI 生图与生视频插件：文生图/图生图按渠道配置模型目录，并按模型族适配请求协议（gpt-image、Grok Imagine、Nano Banana、Seedream、GLM-Image、Qwen-Image、MiniMax image-01、DALL-E…
  `v1.17.0` · [源码](https://github.com/q253595422/dsh-imagegen-video)
- **dsh-tool-vision** — 通过 inspect_image 工具将本地图片或 HTTP(S) 图片链接发送至配置的 OpenAI 兼容视觉端点，并将文字结果带回对话。
  `v0.10.4` · 引擎 `>=0.2.0-rc.2 <0.3.0 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/Scorp1o117/dsh-tool-vision)
- **dsh-vision-router** — 为纯文本 Agent 提供视觉能力：内置免 Key 视觉链 + 像素级视觉工具（看图问答、定位、裁剪、像素对比、取色、OCR、矢量化、抠图、截图）；粘贴图片即可用。
  `v3.1.0` · 引擎 `>=0.1.5-rc.1 <0.2.0-0 || >=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/ysr666/dsh-vision-router)
- **dsh-media-lens** — liustack/modlens 的全媒体（视频/音频/图像）延伸：把本地媒体转成结构化证据（时间线/转写/版面区域）注入对话，让纯文本模型能引用具体帧、秒、说话人——Evidence, not imagination。每个媒体一条 failover 链，逐跳记录在 meta.attempts（降级绝不静默）：宿主已注…
  `v0.2.3` · 引擎 `0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/drscrewdriver/dsh-media-lens)
- **dsh-labnana** — 为 DeepSeek Harness 接入 Labnana 图片生成：文生图 / 图生图 / 精准编辑，含积分预估、余额查询与网页设置界面。
  `v0.3.6` · [源码](https://github.com/exoticknight/dsh-labnana)
- **@dickpy/dsh-imagegen** — 面向 DSH Web GUI 的 AI 生图插件：通过可配置的 OpenAI 兼容端点（gpt-image-2 / gpt-image-1 / dall-e-3）实现文生图与图生图，提供 api_url/api_key 设置卡片与侧边栏分栏生图工作台。
  `v1.9.5` · [源码](https://github.com/dickpy/dsh-imagegen)
- **dsh-tool-visual-primitives** — 通过模式化提示分析对话图片（描述、UI、文档、定位、拓扑等），将含坐标原语（框、点、引用）的结构化证据以文本注入上下文，会话级缓存跨回放与压缩复用。
  `v1.5.4` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/InkshadeWoods/dsh-tool-visual-primitives)
- **dsh-image-viewer** — 增强 DSH 原生图片查看体验，支持指针中心缩放、拖动、画廊、下载、键盘操作和图片区域备注。
  `v0.1.16` · [源码](https://github.com/WSL043/dsh-image-viewer)
- **@liustack/modlens** — 为纯文本模型架起视觉桥梁：粘贴图片，输出结构化 JSON 证据（OCR、版面、语义）。
  `v3.27.2` · [源码](https://github.com/liustack/modlens)
- **dsh-cloudflare-media** — 把 Cloudflare Workers AI 的多媒体模型接进 dsh：生图、TTS、语音转写都有；每个模型标注价格档位，带原生设置页，复用已有的 Cloudflare 账号，输出文件带模型名。
  `v0.6.5` · [源码](https://github.com/dmscode/dsh-cloudflare-media)
- **dsh-vision-proxy-route** — 注册 `deepseek-vision` 路由：Web GUI 直接粘贴图片，由免费智谱 GLM 视觉模型转译为文字后，再交给 DeepSeek 适配器作答。
  `v0.1.5` · 引擎 `>=0.1.0-rc.8 <0.3.0` · [源码](https://github.com/314857493/dsh-vision)
- **dsh-vision-free-eyes** — 给 DeepSeek Harness 的纯文本模型补上免费识图：`vision` 工具直连智谱 GLM 视觉 API 描述/OCR 图片文件（glm-4v-flash 降级链），无需任何外部 CLI。
  `v0.1.5` · 引擎 `>=0.1.0-rc.8 <0.3.0` · [源码](https://github.com/314857493/dsh-vision)
- **imgpost** — 让 DSH 助手把本地、网页和 AI 生成的图片直接发到聊天里给用户看，并为文本模型提供识图能力；Windows 下经 PowerShell 运行。
  `v0.3.1` · [源码](https://github.com/hige6/imgpost)
- **dsh-image-lite** — DSH 生图插件，双模式：对话中由模型调用 image_generate_lite 工具出图，或在右侧栏「生图工作台」手动生图；最多 5 张参考图、支持 OpenAI images 接口格式，密钥存于 DSH 凭据服务。
  `v0.1.1` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/yupaoa/dsh-image-lite)
- **@goodandready/dsh-vision-bridge** — 将图片交给所选的视觉模型处理（自动改写、显式工具或混合模式），使纯文本聊天模型也能处理包含图片的对话。
  `v0.6.22` · [源码](https://github.com/GooDAnDReaDY/dsh-vision-bridge)
- **dsh-ocr-local** — 纯文本路由的本地 OCR 兜底：会话模型明确声明不接受图片时，把附件的图片存入本地缓存并注入路径，模型调 ocr_image 用 PP-OCRv5 + ONNX Runtime 在纯 CPU 上离线识别，无需 API key，图片不出当前环境；模型能看图时静默。
  `v0.5.1` · [源码](https://github.com/grelvan/dsh-ocr-local)
- **dsh-image-pathify** — 让纯文本模型也能处理聊天贴图，提供原生视觉体验，支持批量看图，走内置 OpenAI 兼容识图工具 analyze_image；具备视觉能力的模型不受影响。
  `v0.2.2` · 引擎 `>=0.1.7-rc.1 <0.3.0` · [源码](https://github.com/dami9527/dsh-image-pathify)
- **dsh-image2-tool** — 注册 `image2_generate` 工具：调用你自己的 OpenAI 兼容图片中转站生成或编辑图片（文生图走 POST /images/generations，图生图走 POST /images/edits 并接受本地 PNG/JPEG/WebP 参考图，兼容 b64_json 与图片 URL…
  `v0.4.1` · [源码](https://github.com/544244857/dsh-image2-plugin)
- **dsh-draw** — 多引擎文生图（OpenAI Images 与智谱 CogView 预设）：按会话配额、引擎故障切换、凭证安全配置，结果卡片支持重新生成。
  `v0.2.24` · 引擎 `>=0.1.2-rc.1 <0.2.0 || >=0.1.5-alpha.1 <0.2.0 || >=0.1.6-0 <0.2.0 || >=0.1.7-0 <0.2.0 || >=0.2.0-0 <0.3.0 || >=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-draw)
- **@anionex/dsh-vision-toolkit** — 让纯文本模型处理视觉任务：粘贴图片后自动切换到 Vision Toolkit 变体，支持图片问答、多图比较、长截图 OCR、截图还原前端 UI、元素定位与像素对比。默认无需 API Key——图片经作者自建的免费服务处理，每台机器每天 100 张；也可改为指向自己的服务商。
  `v0.1.47` · [源码](https://github.com/Anionex/dsh-vision-toolkit)
- **dsh-comfyui** — 让 DeepSeek Harness 的 Agent 直接驱动本地或远程 ComfyUI：comfyui_run / comfyui_object_info / comfyui_workflow 工具生成与编辑图像、视频，附带工作流库（图工作流提取：按分量 / 主流程 / 整体）、加载区分辨率自动匹配、实时队列、SDX…
  `v0.5.5` · 引擎 `>=0.1.2-alpha.4 <0.3.0-0` · [源码](https://github.com/fandc520/dsh-comfyui)
- **@max-null/dsh-capture** — DSH 双引擎截图：思灵桌面壳内，全局快捷键/托盘打开全屏框选浮层（多显示器、逐屏像素级抓帧），选区定格后工具条就地画红框，一次确认送进输入框；纯 DSH（浏览器）下由输入框相机按钮经 getDisplayMedia 捕获屏幕，复用同一套单阶段框选+标注遮罩。均走官方附件通道。
  `v0.3.2` · [源码](https://github.com/Max-Null/dsh-capture)
- **dsh-omni-workstation** — 面向 DSH 的全模态工作站：analyze_image 走有序多卡片 VLM 故障转移链；六个视觉工具箱工具（局部放大、色调采样、像素比对、OCR、元素检测、内联展示）共用同一套图片来源解析；generate_image 支持 OpenAI/DashScope/ComfyUI 协议；多卡片异步…
  `v0.1.2` · [源码](https://github.com/huashenglian/dsh-omni-workstation)
- **phone-lens** — 把手机相机变成 dsh 会话的实时取景与拍照输入，经局域网或 USB 直连。
  `v1.1.3` · [源码](https://github.com/yxqfg/phone-lens)
- **dsh-read-animation** — 把 gif 和动图 webp 当作动画来读：贴进聊天框的照常播放，模型收到的是横跨整段采样、带帧号与时长的胶片条；工作区里的文件由 read_animation 按需采样。
  `v0.1.1` · 引擎 `>=0.1.7-alpha.1` · [源码](https://github.com/NeoHotaru/dsh-read-animation)
- **dsh-look** — macOS 场景感知探针：拉模型零轮询的 look 工具，读取最前非自身窗口（应用信息、AX 标题/选中文本、按需本地 OCR），支持召唤热键按下瞬间抓取快照注入对话。
  `v0.1.1` · 引擎 `0.2.0-rc.2` · [源码](https://github.com/mengxiaoxian/lookover)
- **dsh-image-router** — 在准入前把提示词里的图片换成视觉模型的文字分析，因此任何模型（包括纯文本模型）都能读图且会话不切换模型；另提供 describe_image 工具处理图片路径。
  `v0.5.0` · [源码](https://github.com/zhiwuli0228/dsh-image-router)
- **@lp181818/dsh-vision-plugin** — 为纯文本 DSH 模型增加可配置识图能力：在 DSH 0.1.7-rc.2 中，上传图片会完整通过适配链路，由 OpenAI 兼容视觉模型转写为文字后交给主模型；支持 OpenAI / Anthropic / Gemini / Azure 风格密钥鉴权，缺少 API Key 时会在发起请求前明确提示。
  `v1.2.3` · [源码](https://github.com/bug-huntter/dsh-vision-plugin)
- **dsh-image-generation** — 在设置中配置多个生图供应商，对话通过 image_generate 调用当前选中的模型；图片保存到工作区 generate/image，并在对话中内联显示。
  `v0.1.3` · [源码](https://github.com/whiteS18/dsh-image-generation)
- **@copylee/dsh-image-gen** — 图像生成：侧边栏画廊页面和三个 Agent 工具（paint_image、paint_images、edit_painting）；预置 ModelScope、Google Gemini、OpenAI、硅基流动、火山方舟 Seedream、阿里云百炼、xAI、智谱等服务商，也可接入任意 OpenAI…
  `v0.2.0` · [源码](https://github.com/copylee711/dsh-image-gen)
- **dsh-comfyui-image** — 用本地 ComfyUI 出图：一个 generate_image 工具覆盖文生图、图生图、局部重绘与去背景。
  `v0.1.1` · [源码](https://github.com/wbb316/dsh-comfyui-image)
- **dsh-agnes-studio** — 一站式 AI 影视创作工作站，作为 DSH 全局浮层面板运行，不占用对话框：生图（文生图 / 图生图 / 多图合成，1K–4K、8 种宽高比）、生视频（文生视频 / 图生视频，4–12 秒、支持首帧控制）、短剧（导入 .txt/.md/.json 剧本自动拆解分镜，故事板预览与批量生成）与提示词专家工作区。零运行时依赖…
  `v0.7.1` · [源码](https://github.com/zmm863-commits/dsh-agnes-studio)
- **@lr611/visionforge** — 为 DeepSeek Harness 提供读图与生图/编辑能力（Qwen/OpenAI/Anthropic/Gemini 读图，Qwen-Image 生图与编辑）。基于 liustack/modlens（MIT）改造；请先卸载 @liustack/modlens——两者会注册同一批 vision provider…
  `v0.2.1` · [源码](https://github.com/LR611415/visionforge)
- **dsh-ocr-free** — 在 macOS 上使用 Apple Vision 的本地 OCR：从截图、照片和扫描件中读取文字，无需安装、无需联网、无需 API 密钥。
  `v0.1.2` · [源码](https://github.com/vitas/dsh-ocr-free)
- **dsh-image-conatiner** — 以对话内画廊和灯箱展示生成的图片。
  `v0.2.3` · [源码](https://github.com/aa2246740/dsh-image-conatiner)
- **dsh-plugin-appshot** — DSH 版 Codex Appshots：全局快捷键精准捕获当前工作窗口，零摩擦挂载至 Composer 作为上下文向 Agent 提问。
  `v0.4.2` · [源码](https://github.com/TaurusWood/dsh-plugin-appshot)
- **dsh-appshots** — 给 DSH Desktop 用的窗口截图，支持 macOS 和 Windows：macOS 按两边 Command、Windows 按两边 Ctrl（或点输入框旁相机）捕获当前前台窗口并附加到会话，同时把 VoiceOver 风格的辅助功能树注入为隐藏上下文。
  `v0.1.8` · [源码](https://github.com/WongYuYe/dsh-appshots)
- **dsh-plugin-continuity** — 本地生成图像/配音/音乐/音效并听写，同一性锁定：角色、动物、道具与配音角色定妆定声一次，之后每次调用复用同一份参考；退化产物（接近纯色的图、静音的音频）被拒绝而不是当成成功返回；生成的台词可以听写回文字，好让吞掉结尾的克隆暴露出来。空闲时引擎卸载显存，生图与听写也可改指向任意 OpenAI 形状的 API…
  `v0.5.6` · [源码](https://github.com/linxuhao/Deepseek-Continuity)
- **dsh-subagent-vision** — 让纯文本 DeepSeek 代理在同一会话内读图：委派给视觉子代理，发送时自动把图片转为文件路径。
  `v0.1.7` · [源码](https://github.com/niuniuaba/dsh-subagent-vision)
- **dsh-auto-vision** — 为纯文本 DeepSeek Harness 主模型搭视觉桥：自动从已配置模型中挑选多模态模型，通过 vision 工具把图片描述以纯文本返回。
  `v0.4.1` · [源码](https://github.com/NormanFxxkingRockwell/dsh-auto-vision)
- **dsh-image-guard** — 发送前把请求中的历史图片裁剪至保留张数，并从上游 400 错误解析单次图片上限、按更少张数降级重试，保证含图会话不被图片数量限制打断。
  `v0.8.17` · [源码](https://github.com/mafeis/dsh-image-guard)
- **picturereader** — 给纯文本模型的"读图"能力：图片降分辨率+降色深+结构/色彩指纹渲染成文本网格喂回对话，模型像多模态一样自主缩放、取样、OCR 读图；纯本地零外部模型依赖，附读图方法论 skill 与可选 PaddleOCR。
  `v3.3.3` · [源码](https://github.com/jing-hy/picturereader)
- **dsh-vision-subagent** — 为任意 DSH 路由装上眼睛：Web 输入框贴图按意图自动聚焦分析，视觉子代理代读工作区图片，原图可随时物化编辑。
  `v0.5.0` · [源码](https://github.com/ruby1304/dsh-vision-subagent)
- **dsh-vision-mix** — 把文本、识图和生图 API 组合成一个 Mix 模型并按对话内容自动路由：纯文本走聊天模型，用户图片和 Agent 截图走识图模型，后续可继续追问同一张图；还支持图片生成与编辑及会话级调用记录。
  `v0.2.3` · [源码](https://github.com/haiziyao/dsh-vision-mix)
- **@paicat1/dsh-screenshot** — DSH 轻量截图插件：轻——零依赖零二进制；摆——一键全屏、窗口排版、悬停吸附截取被遮挡窗口；自助——Agent 可自助截屏，传路径不传图，路径通用，接上 modlens（选装）一步读出结构化内容。
  `v1.2.0` · [源码](https://github.com/paicat1/dsh-screenshot)
- **dsh-plugin-deepseek-vision** — 面向纯文本 DeepSeek 的视觉 MCP + DSH 插件：analyze_image / analyze_clipboard / compare_images / vision_status 四个工具、可视化配置页、默认免费 GLM-4.6V-Flash、结果缓存与限流容错，Key 不入日志。
  `v0.4.2` · [源码](https://github.com/GOU-GEE/deepseek-vision)
- **dsh-vision-pro-bridge** — 视觉桥：贴图先经 deepseek-v4-flash-vision-exp 转写为文字，再交给纯文本的 deepseek-v4-pro 回答，零第三方依赖。
  `v1.0.0` · 引擎 `>=0.1.1-rc.2` · [源码](https://github.com/ShaineDemo/dsh-vision-pro-bridge)
- **dsh-vision-fallback** — 将聊天图片交给固定的 OpenAI 兼容视觉模型，把事实性观察交给当前主模型，并在事件回放、上下文压缩和重启时复用会话内观察。
  `v0.10.0` · [源码](https://github.com/1HelloMan1/dsh-vision-fallback)
- **dsh-mindseye** — 为 DSH 上的纯文本模型提供视觉插件：通过分层证据记忆与缓存，实现图片理解与生成的原生交互及 GUI 自动化。
  `v0.2.8` · [源码](https://github.com/kanchengw/dsh-mindseye)
- **dsh-screenshot-feedback-hook-mcp** — 一个截图工具，外加两个默认关闭的自动截图时机。需要模型支持图片输入。
  `v0.2.1` · [源码](https://github.com/lkh081231/screenshot-feedback-hook-mcp)
- **dsh-chat-imagine** — 在 DSH 聊天窗口自动调用生图工具（API 渠道，或当前环境 CLI：已支持 mmx / codex / agy）并展示图片，也支持利用对应 CLI 识别图片。
  `v0.4.1` · [源码](https://github.com/corrinehu/dsh-chat-imagine)
- **dsh-plugin-grok2api-media-tool** — 让 dsh 通过 grok2api 的 API 获得生成图片与视频能力。
  `v0.8.1` · [源码](https://github.com/lsjspl/dsh-plugin-grok2api-media-tool)
- **dsh-deepseek-vision** — 视觉语言网关：注册支持图片输入的 DeepSeek provider 路由，图片先由可配置 VL 模型（默认 Qwen-VL）描述成文字再发送。
  `v0.1.7` · [源码](https://github.com/siegfly/dsh-deepseek-vision)
- **dsh-vision-proxy** — DeepSeek 大脑 + 自动识图：GUI 附加的每张图片自动经官方 deepseek-v4-flash-vision-exp 原生识图转译，再交给纯文本的 DeepSeek 作答（纯文本 V4-Pro 也能看图）；支持任意 OpenAI 兼容 VLM 与本地 Ollama 作为备选。
  `v0.4.1` · 引擎 `>=0.1.0-rc.6` · [源码](https://github.com/Flyvhidbwo/dsh-vision-proxy)
- **dsh-computer-use-vision** — Windows 桌面识图+模拟操作能力：截图→vision模型→模拟鼠标键盘，内置自进化应用技巧库。支持插件工具模式和纯skill模式双形态。
  `v0.1.1` · [源码](https://github.com/xuanyuanluoxue/computer-use-vision)
- **dsh-vision-recognizer** — 视觉模型路由：把附加图片经可配置模型（15+ OpenAI 兼容与 Anthropic 供应商）转译为文字，对话仍由 DeepSeek 作答。
  `v0.2.0` · 引擎 `>=0.1.0-rc.8` · [源码](https://github.com/kaixinbaba/dsh-vision-recognizer)
- **aura-vision** — 免费视觉识别插件：自适应切块长文档识别，支持历史收藏与 MD/Word/长图/Excel 导出。
  `v1.0.2` · [源码](https://github.com/Ck-epsilon/aura-vision)
- **dsh-design-qa** — 给纯文本模型的设计稿保真判定：`deepseek_vision` 工具从任意 OpenAI 兼容视觉路由借来一只眼，让模型判断实现与设计稿是否一致——并附上支撑该判定的基准（4 组夹具、23 处注入缺陷、逐格原始输出）与其依赖的提问纪律。
  `v0.1.4` · [源码](https://github.com/sunxin-ai/dsh-design-qa)
- **dsh-free-vision** — 免费视觉插件：纯文本模型看图 / OCR / UI / 报错分析，优先免费模型（千问 Qwen3-VL-Flash、豆包、DeepSeek-OCR），设置界面可配置。
  `v1.0.8` · [源码](https://github.com/FuzzySoul/dsh-free-vision)
- **dsh-dseyes** — 为纯文本 DeepSeek 提供原生图片上传体验：在 Web GUI 粘贴/拖入图片即以缩略图附件进入会话，发送前由 host 用免费智谱 GLM-4V-Flash 视觉 API（glm-4v-flash 降级链）读取并替换为文字描述，DeepSeek 据此回答，原图保留在聊天历史中。
  `v0.2.0` · [源码](https://github.com/Okkay712/DSH-dseyes)
- **@iroam2375/dsh-autovision** — 纯文本 dsh 模型的识图插件：粘贴图片自动由你配置的多模态模型转成文字——透明孪生路由、模型可自主调用识图工具、无内置密钥与中转。
  `v0.1.0` · [源码](https://github.com/Junkrat9527/dsh-autovision)
- **visual-review** — 在 DSH Web 聊天界面内联渲染粘贴/上传的图片，并让纯文本模型“看见”图片：visual_review 工具优先调用任意 OpenAI 兼容多模态 API，未配置时回退当前环境 Qwen3-VL。
  `v1.0.1` · [源码](https://github.com/wang-bool/visual-review)
- **dsh-vision-tools** — DeepSeek Harness 视觉能力全家桶：vision_understand 工具（OpenAI 兼容视觉 API，默认免费智谱 GLM-4V-Flash）+ 粘贴/拖拽/按钮三入口识图。
  `v0.1.2` · [源码](https://github.com/moon09300731/dsh-vision-tools)
- **mimo-vision** — `describe_image` 视觉桥：经 opencode Zen API（凭据 `OPENCODE_GO_API_KEY`，免费线路优先、付费兜底）把图片发给 mimo-v2.5、返回文字描述给纯文本模型，原生格式直发，SVG/TIFF/HEIC 等格式经 ImageMagick 自动转码。
  `v0.1.0` · [源码](https://github.com/wulusai2333/mimo-vision)
- **dsh-quicksight** — 纯文本模型双层识图：优先本地快速 OCR（RapidOCR，离线），不足时回落视觉模型（modlens）。
  `v0.1.1` · [源码](https://github.com/Isanti2016/dsh-quicksight)
- **dsh-vision-web** — 纯文本 DeepSeek 的识图插件：默认走豆包 Web（零成本、免 API key，经 Windows CDP 桥接驱动已登录 Chrome），另有反重力额度（flash/pro）与 Gemini 降级通道；档位自动升级、视觉证据记忆与会话压缩恢复、内容哈希缓存、双语客户端面板。
  `v0.1.0` · 引擎 `>=0.1.0` · [源码](https://github.com/54xkeee/dsh-vision)
- **dsh-youreyes** — 纯文本 DeepSeek 的识图工具包：模型可主动调用的 `vision` 工具、deepseek/opencode-go 包装适配器（v4 flash/pro）、反重力额度（默认，flash/pro）/ 任意 OpenAI 兼容 VLM / Gemini / 本地 Ollama…
  `v0.1.0` · 引擎 `>=0.1.0` · [源码](https://github.com/54xkeee/dsh-youreyes)
- **dsh-vision-guard** — 纯文本路由的透明图片护栏：贴图不再 400 卡死会话，附带 vision_analyze 工具（OCR/PDF/docx/pptx/视频）。
  `v0.1.3` · [源码](https://github.com/good-boy4069/dsh-vision-guard)
- **dsh-koboldcpp-hands** — 给在线模型装上本地双手：koboldcpp_run 与 koboldcpp_vision 工具把重复的文本与视觉（OCR、图像分析、对比）劳动交给本地 KoboldCpp（llama.cpp）服务器，并按需拉起与管理服务器生命周期。
  `v0.1.1` · [源码](https://github.com/MicroHEROX/dsh-koboldcpp-hands)
- **dsh-unsloth-hands** — 把重复的文本与视觉（OCR、图像分析、对比）劳动交给本地运行的 Unsloth Desktop（Unsloth Studio）服务器：unsloth_run 与 unsloth_vision 两个工具，纯 HTTP 客户端，不拉起也不持有任何进程。
  `v0.1.0` · [源码](https://github.com/MicroHEROX/dsh-unsloth-hands)
- **dsh-plugin-image-input** — 图片转文字输入插件：粘贴/拖拽图片自动转为结构化文字描述发送，给纯文本 LLM 提供图片输入接管（OpenAI 兼容视觉 API）。
  `v0.1.1` · [源码](https://github.com/Elohia/dsh-plugin-image-input)
- **dsh-llm-vision-bridge** — DeepSeek 视觉桥接：注册原生 LLM provider，聊天内粘贴的图片自动由视觉模型（pi-ai/llama.cpp 上的 Qwen3-VL）转成文字描述后交给纯文本 DeepSeek 作答——图片准入、路由与会话压缩全部走 harness 原生机制，带 LRU 描述缓存与 503 重试。
  `v0.1.2` · [源码](https://github.com/Einskyle/dsh-llm-vision-bridge)

## 文档与渲染 · docs（61）

- **dsh-data-insight** — 把原始数据（CSV / 粘贴表格 / SQL 结果 / DuckDB）转成带业务结论、指标与图表的结构化 Markdown 报告。
  `v0.1.7` · [源码](https://github.com/duyanta123/dsh-data-insight)
- **@zhangj1164/dsh-openwiki-visualize** — 在 DSH Web 右侧边栏预览工作区的 OpenWiki：识别 wiki 目录，用官方 `openwiki visualize` 阅读器在本地回环端口提供服务并嵌入自有标签页，同时对照可配置的版本下限报告 openwiki 与 DSH 版本，并向 registry 检查自身更新。
  `v0.2.0` · [源码](https://github.com/zhangj1164/dsh-mega-plugins)
- **dsh-arch-doc** — 分析代码库并生成架构文档：模块职责、依赖关系、入口点与运行方式。
  `v0.1.5` · [源码](https://github.com/duyanta123/arch-doc)
- **dsh-large-jsonl-viewer** — 使用字节索引逐条浏览 JSONL 与 NDJSON，支持物理行跳转和超长记录流式预览的只读查看器。要求 DSH >=0.2.1-rc.2。
  `v0.1.4` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/liaojianjin/dsh-large-jsonl-viewer)
- **@chengzhao-dev/dsh-quarto-book** — 把一份 Quarto Book 写成可读、可查、可发布的中文技术书：九步章节写作、结构/链接/图表检查、统一主题与渲染验收。仅在 type: book 仓库加载；需 Quarto CLI 与 Python 3。
  `v0.6.4` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/chengzhao-dev/dsh-quarto-book)
- **dsh-course-assistant** — 把课程文件（PPTX、PDF、DOCX、Markdown）解析成目录、带原文引证的分章要点、B 站网课推荐与考纲覆盖检查，并可导出 Anki 卡片和 JSON。
  `v1.5.2` · [源码](https://github.com/logb-1/dsh-course-assistant)
- **dsh-mineru** — 用 MinerU 把 PDF 与文档解析为结构化 Markdown。文件会上传到 MinerU 云端，无离线模式。
  `v0.1.15` · [源码](https://github.com/Lee-Hilex/dsh-mineru)
- **dsh-ppt** — 演示文稿技能与工具：一句话或一篇文档生成 HTML 放映与可编辑 PPTX，7 种页型（含金句与原生 PPTX 表格），演讲者备注（HTML 按 S 呼出 + PPTX 原生备注页），内置 5 套主题，可配置默认主题/语言，中英双语。面板内置 4 步首次使用引导，看一次后不再出现。
  `v0.16.1` · [源码](https://github.com/STARDUSTLC666/dsh-ppt)
- **@copylee/dsh-office** — 仅 Windows：Agent 通过办公软件的自动化接口，直接在你打开的 Word、Excel、PowerPoint（微软 Office 或 WPS Office）窗口里改文档，改动实时出现，你可以同时编辑；可读取结构、批量修改、把页面渲染成图片核对排版、保存或导出 PDF。
  `v1.2.0` · [源码](https://github.com/copylee711/dsh-office)
- **@klarkxy/dsh-dev-index** — 在 DSH 插件页阅读官方文档；创造模式用原生工具检索文档、查询插件 npm 元数据。
  `v0.2.7` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/klarkxy/dsh-plugins)
- **@weibaohui/dsh-kb** — 团队知识库：离线知识共享（FDE 盒子场景），浏览/全文检索/加工入口；raw 入料自动入队、bot 会话串行蒸馏成文（Karpathy LLM Wiki 模式：raw 不可变 / 两步加工 / log 流水 / 月度 lint）。
  `v0.7.16` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/dsh-kb)
- **@tryao/dsh-wps365-plugin** — 通过当前环境安装的 wps365-cli 读写 WPS 365 云文档（智能文档与 .docx/.xlsx/.pptx），写入前先做并发冲突比对；需要 WPS 365 企业版账号。
  `v0.2.5` · [源码](https://github.com/YiuTerran/dsh-wps365-plugin)
- **@yiyunet/dsh-kill-ai-slop** — AI垃圾过滤（Kill AI Slop）：给收到的文件打一个可回溯的体检得分（表达／执行／决策三维加权），用交付承接台账审查工作空转，每条引文回原文机器复核；支持 docx/pptx/xlsx/pdf/txt/md/csv/json/html。零运行依赖、零联网、纯本地计算。
  `v0.7.16` · [源码](https://github.com/yiyunet/dsh-kill-ai-slop)
- **dsh-client-ui-notes** — 主面板内的笔记与目录阅读器：文件树与置顶、可关闭的标签页、Markdown 左编右渲与同步滚动、纯文本编辑、手动保存、拖拽移动文件。删除时移入系统回收站（macOS、Linux），系统回收站不可用时移入目录内的 dsh-notes-trash 目录；Windows 不提供删除入口。
  `v0.1.12` · [源码](https://github.com/Zxy0902/dsh-notes-plugin)
- **dsh-sacc-translator-cpu** — 翻译 CPU：Windows x64 文本与原格式文档翻译，复用宿主模型选择、语音输入及文档预览。使用 CPU OCR，不安装 NVIDIA 运行库。下载约 364 MB。
  `v0.1.21` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/piaomiaozhilei/dsh-sacc-translator)
- **dsh-sacc-translator-cuda** — 翻译 CUDA：Windows x64 文本与原格式文档翻译，复用宿主模型选择、语音输入及文档预览。自动安装绑定的 CUDA/cuDNN 组件，无兼容 GPU 时回退 CPU。下载约 2.04 GB。
  `v0.1.21` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/piaomiaozhilei/dsh-sacc-translator)
- **dsh-office-kit** — 通过 `/documents`、`/pdf`、`/presentations`、`/spreadsheets` 创建、读取与编辑 DOCX、PDF、PPTX、XLSX，把页面渲染出来核对排版，并将侧边栏预览中的选区变成发给会话的修改要求。需 Python 3.10–3.13。
  `v0.4.6` · [源码](https://github.com/hairyf/dsh-office-kit)
- **@eduwork/dsh-knowledge-studio** — 基于工作区资料的 Studio，复用 DSH 模型与共享成果服务，制作报告、演示文稿、表格、思维导图、测验、闪卡及音视频。Office 生成需 Python 3.12+ 及相关依赖，并配置 DSH_OFFICE_PYTHON；媒体渲染需 Chromium；本地语音转写另需 whisper.cpp 和模型。
  `v0.6.2` · [源码](https://github.com/ECNU/EduWork)
- **@ggboy123/dsh-paper-reader** — 论文伴读工作台：文献库 + PDF 阅读器 + 教练式伴读。回答必带页码，点页码跳回 PDF 并高亮闪烁对应原文；选中即问不打断阅读；自带「严格师傅」preset——定阅读计划、逐节带读、出题批改，成绩跨会话累积；配置 MinerU（本地自建免注册 / mineru.net 云端 token 二选一）后：扫描版…
  `v1.6.0` · [源码](https://github.com/GGboya/dsh-paper-reader)
- **dsh-hxc-blog** — 在 DSH 面板里管理 GitHub Pages 博客：按标签分组浏览 Markdown 文章，用表单填 front matter 并在分屏编辑器里修改，再通过 GitHub REST API 把改动作为一次 commit 发布。
  `v0.1.1` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/huangxicheng1/blog-manage)
- **dsh-md-render** — 对话渲染：围栏块由插件自身渲染（text 家族按 markdown，其余为真实语言名 banner + highlight.js 高亮的代码块），mermaid 块渲染为可缩放图表卡片，另支持上下文注入块渲染、整段复制与 MarkdownView 导出（npm: `dsh-md-render`）。
  `v0.7.0` · [源码](https://github.com/baosfeng/my-dsh-plugins)
- **dsh-plugin-dev-kb** — 以 dsh-plugin-dev-kb 技能内置 DeepSeek Harness 官方文档离线镜像：站点中英 168 页 + 仓库补充文档 52 篇，带主题导航与全文检索，编写插件时随时查阅。
  `v1.5.2` · [源码](https://github.com/Pasumao/dsh-plugin-dev-kb)
- **dsh-industry-research** — 面向 DeepSeek Harness 的确定性行业研究报告：公司与行业研究流程基于分阶段证据产出结构化、可核验的报告。
  `v0.3.23` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-industry-research)
- **dsh-ppt-maker** — PPT 制作插件：十一个 ppt_* 工具创建、编辑、逆向、质检与导出演示文稿，内置五族设计系统与主题模板，支持幻灯片动画、海报与信息图。
  `v1.0.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/OMSociety/dsh-ppt-maker)
- **dsh-plugin-office-markdown** — 在模型读取之前，把工作区里的 Office / PDF 文件在当前环境转成 Markdown（不联网、不消耗 API 额度），.md 写在源文件旁边，因此进入上下文的只是一个文件路径，并返回字节数、行数、token 估算与标题结构索引，支持单个文件或整个目录。
  `v1.2.4` · [源码](https://github.com/Z8906/dsh-plugin-office-markdown)
- **dsh-mcp-context7** — 接入 Context7 托管 MCP 服务，为 agent 提供随版本更新的库文档查询；默认免密钥可用。
  `v0.3.0` · 引擎 `>=0.1.5-rc.2 <0.3.0-0` · [源码](https://github.com/PyModel/dsh-research-plugins)
- **dsh-mermaid** — 将 Mermaid 代码围栏渲染为 SVG 图表，支持流式输出、图形/代码切换、全屏缩放与拖拽、SVG 导出，以及内置的同源运行时。
  `v0.4.2` · [源码](https://github.com/MrmoLabs/dsh-mermaid)
- **dsh-knit** — 把会话工作区里已有的 Markdown 文档、源码、图片与视频列进 DSH 侧边栏，按与当前对话的相关性排序。默认的词法模式用最近几条消息在本地与标题、摘要、正文做带 IDF 加权的匹配（BM25）—— 不调用模型、没有网络出口，内容不出当前环境。列表来自工作区扫描，而不是「最近打开记录」，所以重启 DSH…
  `v0.24.0` · [源码](https://github.com/PolinniZhong/dsh-knit)
- **dsh-md-studio** — 在 DSH 原生右侧文件预览中渲染 Mermaid 图表、KaTeX 公式、GFM 表格与代码高亮，渲染引擎随包内置，完全离线。
  `v1.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/BioAIEvolu/dsh-md-studio)
- **dsh-office-tools** — 面向 agent 的工作区安全 Office 工具集：创建/读取 Word、创建/读取/更新 Excel、创建/读取 PowerPoint，并支持 PNG/JPG/GIF 图片排版。
  `v1.0.6` · [源码](https://github.com/kw78/dsh-office-tools)
- **@s1lencewill/dsh-markdown-reader** — 在独立全屏阅读器中渲染工作区 Markdown 文件，支持 GFM、KaTeX、Mermaid、目录导航、文件更新同步以及浏览器打印和 PDF 导出。
  `v0.4.2` · [源码](https://github.com/s1lencewill/dsh-markdown-reader)
- **dsh-fishpai** — 微信公众号排版工作台：把 Markdown 渲染成带内联样式的 HTML，粘进公众号编辑器即成排版；配右侧栏面板、11 套主题与五个模型工具做块级改稿。
  `v1.2.0` · 引擎 `>=0.2.0-rc.2 <0.3.0-0` · [源码](https://github.com/OMSociety/dsh-fishpai)
- **dsh-code-server-app** — 将code-server（VSCode网页版）打包安装到dsh内的插件，快速实现专业的文件编辑。
  `v0.3.72` · [源码](https://github.com/jinsiyu/dsh-code-server-app)
- **dsh-univer-office** — 为 DeepSeek Harness 打造一个真正的办公环境。Univer Office 插件将电子表格、文档、幻灯片、画布、多维表格等汇聚到同一个运行时——数据互联、修改经过校验、变更按版本管理，并以隔离工作树支持多 Agent 协作。
  `v0.3.7` · [源码](https://github.com/dream-num/dsh-univer-office)
- **dsh-mermaid-smooth** — 将 dsh Web 对话中的 mermaid 代码围栏默认渲染为 SVG 图表，支持以指针为锚点的丝滑缩放拖拽、按围栏记忆的图/文案切换（localStorage 持久化）、明暗主题跟随，以及完全本地打包的离线渲染引擎。
  `v0.2.1` · [源码](https://github.com/gitByteFree/dsh-mermaid-smooth)
- **dsh-gh-pages-artifacts** — 把 Agent 生成的 HTML 页面和 Markdown 文档发布到 GitHub Pages 并返回可分享链接，提供原地更新、列出、读回和删除的工具；附带侧边栏 Artifacts 面板和内置的页面设计技能。
  `v0.1.0` · [源码](https://github.com/opdsh/dsh-gh-pages-artifacts)
- **@tt-a1i/archify-dsh** — 从仓库或系统描述生成经过校验的自包含交互式架构图、流程图、时序图、数据流图和生命周期图。
  `v1.0.0` · [源码](https://github.com/tt-a1i/archify)
- **@yfwu2020/dsh-reply-visual** — 在 DSH Web 界面每条定稿回复下加一个「图解」按钮：模型产出单文件 HTML（内联 SVG），右侧栏以沙箱 iframe 渲染；带图解／源码／原文三个视图、命中磁盘缓存即回放（不再调用模型）的会话内历史列表、重画与另存 .html。
  `v0.2.0` · [源码](https://github.com/yfwu2020/dsh-reply-visual)
- **dsh-diagram** — 把 DSH 会话中的文章整理成会话内的 Excalidraw 画布：Agent 用 diagram_create 起草结构，你在画布中修改文字、节点和布局并自动保存，可导出 PNG、SVG 或 .excalidraw，Agent 再用 diagram_read 读回你改过的画布。0.6…
  `v0.6.1` · [源码](https://github.com/hanzhangzzz/dsh-diagram)
- **dsh-opensheet-sidebar** — dsh-better-sidebar 的表格读取视图：读取 CSV/TSV/PSV 与 xlsx/xlsm 工作簿，表头可点击排序、可按子串筛选，多工作表以标签切换。行数、列数与单元格数均有上限，另有两道 zip 容器闸门，任何输入都不会卡死标签页。
  `v1.0.1` · 引擎 `>=0.1.5-rc.1 <0.2.0-0` · [源码](https://github.com/drscrewdriver/dsh-opensheet-sidebar)
- **dsh-pptx-sidebar** — dsh-better-sidebar 的 .pptx 阅读视图：按演示顺序列出幻灯片，还原项目符号层级、演讲者备注与内嵌图片。归档体积、单部件解压字节与幻灯片数量均有上限，演示文稿不会卡死标签页。
  `v0.2.0` · 引擎 `>=0.1.5-rc.1 <0.2.0-0` · [源码](https://github.com/drscrewdriver/dsh-pptx-sidebar)
- **dsh-docx-sidebar** — dsh-better-sidebar 的 .docx 阅读视图：按样式表识别标题，还原段落、列表、真实表格单元格、内嵌图片与页眉注释。归档体积、单部件解压字节与渲染块数均有上限，文档不会卡死标签页。
  `v0.2.0` · 引擎 `>=0.1.5-rc.1 <0.2.0-0` · [源码](https://github.com/drscrewdriver/dsh-docx-sidebar)
- **dsh-mermaid-comm** — 让 AI 在开发交流中默认用 Mermaid 图表达——系统提示引导、mermaid_validate 真解析语法校验工具，以及自动修复或摘除坏图的输出闸。渲染交给 dsh-mermaid。
  `v0.3.1` · [源码](https://github.com/kp-z/dsh-mermaid-comm)
- **dsh-markdown-preview** — 产物文件聊天内预览：点击产物 chip 直接在对话中渲染 Markdown（宿主侧 markdown-it + highlight.js 代码高亮）、图片或纯文本，系统应用打开与在文件夹中显示仍一键可达。
  `v0.4.0` · [源码](https://github.com/GitHubJiKe/dsh-markdown-preview)
- **dsh-tylina** — Typst 文档编辑工具：WYSIWYG 编辑排版论文、报告、试卷、简历、图表、海报、乐谱和可导出为 PPTX 的 Slides。
  `v0.15.2` · [源码](https://github.com/tylina/dsh-tylina)
- **dsh-pptx-editor** — 在 DSH 侧栏预览附件中的 PowerPoint 演示文稿，通过对话或手动操作编辑，共享撤销与重做历史，并下载编辑后的 PPTX。
  `v1.0.0` · [源码](https://github.com/yunfeizhu/dsh-pptx-editor)
- **dsh-consistency-guard** — 长文创作一致性守卫：扫描会话正文，发现人物年龄、等级、境界、年份等设定跨章节矛盾，点击直接跳转到冲突原文位置。
  `v0.1.0` · [源码](https://github.com/bycall/dsh-consistency-guard)
- **@chenjh12/dsh-capmap-viz** — CapMap 文档体系可视化：Obsidian 风格语义图谱与能力面板。
  `v0.2.4` · [源码](https://github.com/1741505640/capmap-skills)
- **dsh-latex-guard** — 为 DeepSeek Harness 提供的 LaTeX 与 BibTeX 检查工具：编译检查（自动识别 xelatex/lualatex），基于 Crossref 的 BibTeX 条目去重与字段补全，以及 \cite 键与 .bib 文件的一致性审计。
  `v0.1.3` · [源码](https://github.com/Flan246/dsh-latex-guard)
- **dsh-openwiki** — 把 langchain-ai/openwiki 的代码库知识库能力搬进 dsh —— 一键生成 / 阅读 / 更新仓库 Wiki 与 Grounded Claims（溯源知识卡片）与项目知识库（上传本地文件），直接复用 DSH 已配置的模型，无需二次填 Key。
  `v2.0.5` · [源码](https://github.com/D2Moqi/dsh-openwiki)
- **dsh-agent-outputs-reader** — agent 产出文件的浮层阅读器：Markdown 渲染、PDF 面板预览、DOCX/XLSX/PPTX 文本提取与回复末尾文件 chips，支持搜索、大纲与位置记忆。
  `v0.2.0` · [源码](https://github.com/HiSeax/dsh-agent-outputs-reader)
- **dsh-workbuddy-ppt** — 在 DSH 中使用包内编排 Skill、确定性 PPTD 场景检查和原生 PowerPoint 对象生成可编辑 PPTX，并在本地交付 PPTD 源项目。
  `v0.1.0` · [源码](https://github.com/SuperstructureJH/dsh-workbuddy-ppt)
- **dsh-qingagent** — 青简写作桥：agent 通过 qing_ 前缀工具起草改稿，右侧宣纸面板排版呈现（mermaid、drawio、表格、公式）；每处修改先摆在纸上供审阅，提交才落稿。需当前环境运行开源的青简桌面客户端。
  `v0.1.47` · [源码](https://github.com/void2anything/dsh-qingagent)
- **dsh-pdf-edit** — 面向 PDF 文档的编辑插件,精确编辑PDF文字
  `v0.4.5` · [源码](https://github.com/Whatsmore-nf/dsh-pdf-edit)
- **dsh-client-ui-second-brain** — 把每天和各种 AI 的对话提炼成结构化 Markdown 笔记，写入你的 Obsidian 库。
  `v1.0.2` · [源码](https://github.com/aduo-111/second-brain)
- **dsh-overleaf** — 通过 OverleafMCP 将多个 Overleaf 项目接入 DSH，支持浏览、分析和通过 Git 写回 LaTeX 文件。
  `v0.1.3` · [源码](https://github.com/fly233338/dsh-overleaf)
- **@zhtx2026/dsh-pdf** — DSH 的 PDF 解析工具：pdf_info、pdf_extract_text、pdf_render_page 三件套，pdfjs 与自研渲染器双引擎，未内嵌 CJK 字体的 PDF 也能用系统字体渲染出图。
  `v0.1.1` · [源码](https://github.com/zhtx2024/dsh-pdf)
- **dsh-shareone-plugin** — 将 TXT、Markdown、HTML、PDF、Word 和 PowerPoint 文件发布为 ShareOne 分享链接，支持访问密码、水印、文本页面更新和 TXT/Markdown/HTML 评论。
  `v0.1.0-rc.3` · [源码](https://github.com/sudoprivacy/dsh-shareone-plugin)
- **dsh-pdf-background-gray** — 注册 remove-pdf-background-gray 技能：去除扫描 PDF 的灰色/米白底色，保持分辨率、页面几何与抗锯齿文字边缘（无损 Flate 写回），核心为单文件 Python 脚本（pypdf + Pillow + numpy）。
  `v0.1.0` · [源码](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill)
- **dsh-inspiration-deck-workshop** — 注册灵感演示工坊技能：本地静态 HTML 演示文稿（6 套 deck 模板、25+ 布局、23 套主题与动效展示馆），带 validate 校验与 PNG/PDF 导出 CLI 和 smoke 测试，零运行时依赖。
  `v0.1.1` · [源码](https://github.com/zjsthmjialin/inspiration-deck-workshop)
- **dsh-paperlab** — Overleaf 式 LaTeX 论文工作台：在渲染后的 PDF 上选中任意文字批注，由 dsh agent 改写源文件、编译验证并提交 git 修订。
  `v0.1.2` · [源码](https://github.com/maple-pwn/paperlab)

## 插件市场与管理器 · market（55）

- **dsh-m** — DSH 的应用内插件市场：插件发现、安装、升级、开关与卸载一站完成，跟随 Web / Desktop 宿主 profile；4,000+ 条社区目录搭配可自定义精选清单，附 8 个 agent 工具与独立 dshm CLI，无需市场服务器或账号。
  `v0.10.13` · [源码](https://github.com/iasiv5/dsh-m)
- **dshmarket** — 在 DeepSeek Harness 设置页内浏览、搜索并安装社区插件，支持分类筛选、一键更新与停用，以及主题切换与配置备份。
  `v1.70.2` · [源码](https://github.com/dsh-market/dsh-market)
- **dsh-preview-market** — DSH 垂直预览市场：发现预览插件、查看已安装清单，并通过 dsh-market 或 dsh CLI 安装、启用/停用与配置。一键安装与启用/停用依赖 dsh-market；没有它时卡片只显示可复制的安装命令。
  `v0.1.10` · [源码](https://github.com/439436269-ctrl/dsh-preview-market)
- **dsh-plugin-marketplace** — 在 Web UI 设置页浏览和搜索 GitHub dsh-plugin 仓库，按 Star 排序，并通过 DSH CLI 安装插件。
  `v0.5.6` · 引擎 `>=0.2.0-rc.2 <0.3.0 || 0.2.1-rc.1 || 0.2.1-rc.2 || 0.2.1-rc.3` · [源码](https://github.com/Scorp1o117/dsh-plugin-marketplace)
- **dsh-task-plugin-scout** — 按任务排序本 profile 的插件（已启用 / 已安装但未启用 / 市场可安装），并给出每个候选的确切下一步——启用、安装，或无需操作。
  `v1.0.4` · 引擎 `>=0.2.0` · [源码](https://github.com/crane-you/dsh-task-plugin-scout)
- **dsh-plugin-ops-bundle** — dsh 插件树的启动前体检与修复——十条跟随启动器运行时解析的静态规则、启动失败后的故障归因、先在隔离实例复验再落地的白名单可逆修复、点名目标版本会跳过哪些插件的升级预演，以及带插件行管理面板与历次故障 RAG 知识库的设置界面。
  `v0.20.5` · [源码](https://github.com/f-infinite-z/dsh-plugin-ops)
- **dsh-plugin-upgrader** — 在「插件」页新增版本页：一键升级全部可升级插件或勾选的子集，查看历史版本并回滚到任意已发布版本，并为每个插件和每个版本提供 GitHub 链接。
  `v1.0.2` · [源码](https://github.com/zuwenyin/dsh-plugin-upgrader)
- **dshmarket-update-helper** — 提供独立设置页，通过 DSH 插件管理器更新 npm 稳定版 dshmarket，支持版本核对及安装失败时尝试恢复旧版。
  `v1.0.3` · [源码](https://github.com/Vikrant-Aleph/dshmarket-update-helper)
- **dsh-skin-market** — 原生皮肤市场与生命周期管理器，发现社区皮肤、展示预览与兼容状态，并提供已验证的一键安装或手动安装入口。
  `v0.1.67` · [源码](https://github.com/kingOfSoySauce/dsh-skin-market)
- **dsh-plugin-share** — 把一套 DSH 插件变成一段可粘贴的分享码，别人贴进去就能逐条安装，也能生成二维码带到手机上。
  `v0.2.5` · [源码](https://github.com/HGT158/dsh-plugin-share)
- **dsh-pick** — DSH 插件选购顾问：说需求，从带 dsh-plugin 关键字的 npm 包里按去噪指标（日常基线、周环比、版本节奏、新鲜度）排出首选、备选和不推荐；提供右侧栏面板、4 个 AI 工具和一键安装。
  `v0.4.4` · [源码](https://github.com/AIcivilization/dsh-pick)
- **@sueleven/dsh-auto-update** — 每次启动 DeepSeek Harness 时检查已安装并启用的插件有没有新版本，在界面上列出并询问，确认后更新到最新版。
  `v1.0.1` · [源码](https://github.com/1708994293-hue/dsh-auto-update)
- **dsh-find-plugins** — 跨多个社区目录并叠加 GitHub 与 npm 实时搜索来找 DSH 插件，按相关度、可信度、新鲜度与有界热度排序，而不是只看 star。
  `v0.3.0` · 引擎 `>=0.1.5-rc.2 <0.3.0-0` · [源码](https://github.com/Eray114514/dsh-find-plugins)
- **dsh-research** — 精选科研插件市场：在设置里加一页「科研插件」，收录逐个读过代码的文献检索、文献管理、写作与科研工作台插件——一键安装、更新、卸载并钉住审读过的版本，面板内重启，只发一个网络请求（拉取自家目录）。
  `v0.4.4` · [源码](https://github.com/dsh-research/dsh-research)
- **dsh-agent-plugins-market** — 把任意 Claude Code / Codex / Cursor / Kimi / agent-plugins.org 的 git 市场仓库加为源，套件的技能、MCP 服务器、hooks 与斜杠命令在运行时注入 DSH 会话，并自带 Web 市场页。
  `v0.11.1` · [源码](https://github.com/Sivan757/dsh-agent-plugins-market)
- **dsh-disable-unofficial-plugins** — 在 DSH 插件页的「已安装」分组标题右端加一个勾选式开关：点开是当前方向下非官方插件的清单，默认全选，只切换你保留勾选的那些；全部停用后按钮翻转成启用侧。只做启用/停用，从不卸载插件、也不删除插件文件与配置，界面文案跟随应用语言。
  `v1.3.1` · [源码](https://github.com/WhatCannotBeSaid/dsh-disable-unofficial-plugins)
- **dsh-batch-uninstall** — 在 DSH 设置中新增「批量卸载」页面：勾选多个已安装插件批量移除，支持全选、二次确认与逐条进度，官方 bundle 自动锁定，删除统一走宿主 pluginManager 服务。
  `v1.3.0` · [源码](https://github.com/MaYucong6/dsh-batch-uninstall)
- **@vibedev-si/dsh-ecosystem** — VibeDev 插件中心：介绍 VibeDev 官方插件，并通过官方插件管理器一键安装（先检查、先不启用地安装、再启用，并带上前置依赖）。另提供套装安装、旧包名迁移，以及一键安装插件市场 dshmarket。
  `v0.1.18` · [源码](https://github.com/VibeDev-Si/dsh-ecosystem)
- **dsh-bootstrap** — DSH 新人引导插件：按八个领域推荐插件（GitHub Star 与 npm 近月下载加权排序），先出计划再一键安装，并可导出／导入记录 profile 插件清单、精确版本与启用状态的环境码。
  `v0.1.0` · [源码](https://github.com/why-sir/dsh-bootstrap)
- **dsh-plugin-index** — DSH 内的插件索引，收录 1 万余个按 package.json 里的 dsh.bundle 声明校验过的第三方插件（不按星数判定），支持一键安装，另有配套网站。
  `v0.1.4` · [源码](https://github.com/ymck-x/dsh-plugin-index)
- **dsh-plugin-install** — 设置 → 插件里的「安装」标签页：按 npm spec、`github:user/repo` 或本地路径安装、更新、卸载任意插件，走的都是 `dsh plugin add` 这条 CLI 路径；更新检查对照 npm latest 或 GitHub HEAD，带降级保护与装后版本核对，每次 add/remove 均附带…
  `v0.4.12` · [源码](https://github.com/qinyre/dsh-plugin-install)
- **dsh-plugin-autoupdate** — DSH 插件更新器：把版本决策交给 dsh CLI，继续受 pnpm 发布年龄策略约束；应用前先快照、可回滚、带锁定清单，用户打开开关后可定时检查或自动应用。
  `v0.3.2` · [源码](https://github.com/publieople/dsh-plugin-autoupdate)
- **@weibaohui/experts-management** — 专家管理：管理 ntd 格式的专家与专家团队（plugin.json + Agent MD + 技能集），内置 50+ 专家市场，`/expert-名称` 以专家身份执行任务，不占模型目录 token。
  `v0.5.10` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/weibaohui/experts-management)
- **dsh-plugin-manager-pro** — 插件管理器与救砖中心：按必要程度分组启停、多更新源（npm / 插件超市 / GitHub）、浏览器下载优先与目录自动安装、P2P 兜底、启动前自检与坏包隔离。
  `v0.9.1` · [源码](https://github.com/nonentity303/dsh-plugin-manager)
- **dshmarketplace-plugin** — 不离开 harness 就能找插件、装插件：/store 命令、设置页的插件标签页、两个可供 agent 调用的工具和一个随包技能，安装前先确认并列出检测到的风险项。
  `v0.2.0` · [源码](https://github.com/DshMarketPlace/dsh-plugins-store)
- **@max-null/dsh-plugin-center** — DeepSeek Harness 插件中心：已安装插件信息、带星标与版本号的社区市场、一键安装与更新，以及启动时的更新日志弹窗。
  `v0.4.6` · [源码](https://github.com/Max-Null/dsh-plugin-center)
- **@txc2768651338/dsh-plugin-manager** — 设置 → 插件里的插件管理页：已装插件中文名与白话描述、一键启停、界面内改备注，支持搜索与筛选。
  `v0.7.0` · [源码](https://github.com/2768651338/dsh-plugin-manager)
- **dsh-autocompose** — 根据任务查找并组合 DSH 插件，打开可继续对话的独立环境，或将方案中的插件安装到当前配置。
  `v0.5.0` · [源码](https://github.com/Han-1413141/dsh-autocompose)
- **dsh-plugin-mgr** — 设置页卡片式插件管理：经 profile 补丁层启停插件（跨重启保留）、安装来源详情、npm 更新检查与一键更新、卸载、搜索与加载失败标识。
  `v0.2.12` · [源码](https://github.com/oxlyn/dsh-plugin-mgr)
- **dsh-unified-market** — 面向 DSH Desktop（EAC）桌面壳的统一插件市场：聚合精选目录、GitHub dsh-plugin 生态与 npm registry 三源，提供来源白名单、冲突预检、试装安装验证、手动/批量/自动三档更新与功能包（.dshpack）管理。
  `v0.4.1` · [源码](https://github.com/jing-hy/dsh-unified-market)
- **dsh-skills-marketplace** — 类 Codex 插件市场的 DSH 技能管理器。
  `v1.1.2` · [源码](https://github.com/cxdyun/dsh-skills-marketplace)
- **dsh-find-plugin** — 会话内直接找插件：按关键词/分类搜索本精选 registry，返回描述与可直接执行的安装命令。
  `v0.4.0` · [源码](https://github.com/awesome-dsh-plugin/dsh-find-plugin)
- **@99galaxy/dsh-plugin-market** — 在 DSH 设置页浏览 awesome-dsh-plugin 目录：按分类或已安装状态筛选，按名称或简介搜索，按 Star、下载量、名称或收录时间排序，一键把插件装进当前 profile。另外两个标签页分别列出已安装的插件、以及其中有更新版本的，并可一键更新。更新页会提示无法判断更新状态的已安装插件，并拒绝同时发起的安…
  `v1.1.1` · [源码](https://github.com/99galaxy/dsh-plugin-market)
- **dshhub-market** — DeepSeek Harness 口令插件市场：输入 6 位口令解锁并安装创作者分享的插件，附带主题、备份、更新与诊断。
  `v0.8.60` · [源码](https://github.com/dshhub-co/dshhub-market)
- **dsh-mall** — DeepSeek Harness 内完整的插件商场：每 2 小时刷新 GitHub #dsh-plugin 全量目录，支持浏览、搜索与评分；AI 装前审查给出装/谨慎/别装结论，五维评分雷达图，九语言界面，编辑精选与个性化推荐，一键安装/更新/回退及全局任务面板，并内置 /dsh-mall skill…
  `v1.8.6` · [源码](https://github.com/hoyyang/dsh-mall)
- **dsh-plugin-diraud** — 装在 DSH 里的插件目录：按来源（官方/自装）分组展示已安装插件，可搜索，支持启用/停用、卸载和一键更新。已发布 npm 包 dsh-plugin-diraud。
  `v0.9.2` · [源码](https://github.com/tttwh/dsh-plugin-diraud)
- **dsh-local-installer** — 本地插件安装器：DSH 网页设置页里的本地插件安装入口——文件选择器多选 .tgz 或输入当前环境完整路径，自动检测所在 profile 并执行官方 `dsh plugin add`，实时回显安装日志，无需终端。
  `v0.1.3` · [源码](https://github.com/ljh257110/dsh-local-installer)
- **dsh-audit** — 插件生态体检：将 dsh-plugin 话题同步为本地评分目录（维护/文档/npm+周下载/生态四维，0-100 分 A-D 级），静态安全扫描高危一票否决，支持 star 历史快照、Web 榜单与 Agent 工具。
  `v0.5.2` · [源码](https://github.com/863683348/dsh-plugin-audit)
- **dsh-plugin-recommend** — DSH 插件推荐器：按需求描述、分类与标签在 1100+ 条内嵌市场目录中搜索并排序插件，返回匹配理由，支持从 awesome-dsh-plugin README 在线刷新目录。
  `v1.1.1` · [源码](https://github.com/863683348/dsh-plugin-recommend)
- **dsh-need-finder** — 需求型插件导购与环境配方：plugin_guide 按自然语言需求语义匹配精选插件并给出理由与安装命令；recipe 一键安装整套社区配方（通知全家桶、安全审计套装等），带有序安装计划。
  `v0.3.1` · [源码](https://github.com/863683348/dsh-need-finder)
- **dsh-stock-mentions** — 将 DSH 输出文本中的股票名称和代码转换为可点击按钮，并在侧边栏展示行情与资讯。
  `v0.1.3` · [源码](https://github.com/mingzeng21/dsh-stock-mentions)
- **dsh-skill-market** — 技能市场插件，聚合 SkillHub 与 ClawHub 双源搜索，支持站内 README 预览、一键安装与卸载、已装技能列表，以及聊天栏技能选择器。
  `v1.0.0` · [源码](https://github.com/pn1024/dsh-skill-market)
- **@dsh-suite/plugin-manager** — DSH Web UI 内置插件商店：浏览、搜索、一键安装、兼容性徽章。
  `v0.8.7` · [源码](https://github.com/whyihaveyou/dsh-suite)
- **@1e0zj/dsh-plugin-mall** — 开放式插件市场：GitHub dsh-plugin 话题实时搜索，逐仓库 package.json 验证（dsh.bundle/dsh.client 声明徽章与只看已验证过滤），npm 优先安装带同源防抢注校验，更新检测，并附五个可在无界面环境使用的 agent 工具。
  `v0.4.17` · [源码](https://github.com/1e0zj/dsh-plugin-mall)
- **@creait/dsh-to-english** — 用你已经配置好的模型，把从市场安装的插件里的中文文案改写成英文——安装时自动运行，随后热重载。每个文件整体翻译一遍，凡是有解析器的都会实际校验（JavaScript 用 node --check，其余用 JSON、YAML 解析器），失败时把报错交回模型，最多修复三次；超过 48 KB…
  `v0.1.0` · [源码](https://github.com/CREAIT-nl/dsh-plugins)
- **dsh-plugin-console** — 在 DeepSeek Harness 设置一级页面中浏览和管理社区插件目录，支持验证后安装与更新、删除、暂停与恢复、已安装状态查看及安全 README 预览。
  `v0.3.2` · [源码](https://github.com/AlexYin-Tongji/dsh-plugin-console)
- **dsh-archive-manager-plus** — 归档管理：在设置页列出已归档会话，并可真正删除，连同会话日志、归档标记与投影缓存一并清理。
  `v0.1.3` · [源码](https://github.com/MS666666/dsh-archive-manager)
- **dsh-extension-hub** — 设置页一体化扩展中心：管理技能/MCP/插件，内置插件市场（精选目录+GitHub 搜索、npm 一键安装），并提供附加功能区统一安装/停用/卸载、一起更新附属功能。
  `v0.2.19` · [源码](https://github.com/Relistencode/dsh-extension-hub)
- **@vlln/plugin-console** — 插件生态基建：浏览器面板管理官方 repository 插件（0 patch）+ make-dsh-plugin 插件开发引导技能。
  `v0.1.0` · [源码](https://github.com/vlln/plugin-registry)
- **@springbrand/dsh-plugin-marketplace** — 设置页里的插件市场，可操作当前环境任意 profile 而不只是当前运行的那个：在 web、headless 及其他 profile 上安装、更新、卸载，带安装脚本风险提示，已装视图同时覆盖目录之外的 profile 依赖，改动当前 profile 时自动重启 DSH。
  `v1.0.8` · [源码](https://github.com/springbrand-lab/dsh-plugin-market)
- **@sanqi-normal/dsh-webui-market-plugin** — dsh Web GUI 内的社区插件市场：浏览 awesome-dsh-plugin.com 目录，从 设置 → 插件 → 插件市场 安装/卸载插件到 profile。
  `v0.5.5` · [源码](https://github.com/Sanqi-normal/dsh-webui-market-plugin)
- **dsh-insight** — 插件评测中心：一个答案回答"哪些值得装"——plugin_guide 按需求推荐插件、recipe 安装整套环境、plugin_rank 健康评分（0-100）、plugin_audit 静态安全扫描本地目录、plugin_verdict 给出 install / caution / research / avoid…
  `v0.1.0` · [源码](https://github.com/863683348/dsh-insight)
- **dsh-subscribe** — Steam 风格的插件商店：在 DSH 里浏览插件注册表，一键安装、卸载与更新，另有零依赖 CLI 与可供 agent 调用的市场工具。
  `v0.3.1` · [源码](https://github.com/zoahdev/dsh-subscribe)
- **dsh-store** — dsh 插件商店：npm 权威目录 + awesome 精选（550+ 插件、11 分类）、dsh 字段质量验证、官方 `dsh plugin add/remove` 一键安装，侧边栏与设置页入口。
  `v0.5.2` · [源码](https://github.com/huguangyu666/dsh-store)
- **dsh-mcp-market** — DSH 的 MCP 服务器商场：浏览经过 npm 校验的精选目录，一键安装 MCP 服务器到当前 profile，免重启立即生效。
  `v0.1.2` · [源码](https://github.com/LKMeng2001/dsh-mcp-market)

## 语音与音频 · voice（54）

- **@martindye/dsh-voice** — DSH Web 的双向语音：用统一输入框听写、用朗读按钮与自动朗读听回复，任意设备可用。需 DSH 0.1.7+、Node 22+、Python 3（含 numpy 与 requests）、TTS 模型与麦克风。
  `v1.0.7` · [源码](https://github.com/martindye/dsh-voice)
- **dsh-talk** — DeepSeek Harness 的语音输入输出：麦克风语音转文字与文字转语音。
  `v0.3.26` · 引擎 `>=0.2.1-0 <0.3.0` · [源码](https://github.com/PerryLink/dsh-talk)
- **dsh-ding** — 对话完成提醒：Agent 空闲（idle）时播放提示音并弹 Windows 原生通知，可配 ding.mp3、音量与防抖节流。
  `v1.1.1` · [源码](https://github.com/CAOGGL/dsh-ding)
- **dsh-voice-call** — agent 主动打来的语音电话：`offer_call` 向人类振铃（接听/拒接/稍后再说），接听后由本地 CrispASR + Qwen3-TTS 合成并播放（9 个音色，含 2 个中文方言）；拒接则把决定返回给 agent。
  `v0.3.13` · [源码](https://github.com/PandaPolo/dsh-voice-call)
- **dsh-voice-scribe** — 面向 Web UI 的语音输入插件：点按 Alt（或 Alt+空格）开始/停止听写，支持浏览器内置 Web Speech（零配置）或 OpenAI 兼容云端 ASR，可选经 DSH 已配置模型润色，带设置页。
  `v0.5.4` · [源码](https://github.com/PensiveFei/dsh-voice-scribe)
- **dsh-voice-alert** — 每个 turn 结束自动播报完成、出错时播失败提示（用户中断默认不播，子代理会话默认跳过，均可配置）。三种提醒方式：语音、音效、关闭。默认「音效」内置 20 个音效（提醒 10 + 大自然 10），每个音效可指定给完成/失败/审批事件并单独试听，零配置、不需要任何 API Key 与音频文件；语音走火山…
  `v0.4.15` · 引擎 `>=0.1.7-rc.1` · [源码](https://github.com/loyalchiiina/dsh-voice-alert)
- **dsh-voice-mode** — DeepSeek Harness Web UI 全双工语音对话：按钮或 Ctrl+Shift+V 进入，持续聆听（停顿自动发送）或按住说话，zipformer2 流式识别入可编辑草稿、可选唤醒词；回复按句 Edge TTS 朗读并显示实时字幕，开口即打断播放与回合（真 barge-in）；识别模型本地推理、Edge…
  `v0.7.29` · 引擎 `>=0.1.1-rc.2 <0.3.0-0` · [源码](https://github.com/qishuilalala/dsh-voice-mode)
- **dsh-xiaomi-tts** — 为 DSH 提供小米 MiMo、豆包和浏览器本地语音朗读，支持自动播报、自定义音色与可选 UI 音效。
  `v4.2.2` · 引擎 `>=0.1.7-0 <0.3.0-0` · [源码](https://github.com/ppy-web/dsh-plugin-xiaomi-mimo-tts)
- **@goodandready/dsh-tts** — 在 DeepSeek Harness 网页 UI 中朗读智能体回复，采用服务商回退链（OpenAI、ElevenLabs、Google、Azure、Groq、Deepgram、OpenRouter、Edge、Piper、eSpeak），某个服务商失败或被限流时自动切换到下一个，而不是直接静音。
  `v0.4.36` · [源码](https://github.com/GooDAnDReaDY/dsh-tts)
- **dsh-meeting-room** — 会议记录插件：一个会话对应一场会议，当前环境离线转写与发言人分离；要点、工作安排、手写笔记、复盘与月度评分都在面板里完成。可导出 SRT／Markdown／Word，也能打成「会议工程包」（zip）在另一台 dsh 导入；已确认的工作安排按设置一键推送到钉钉／企业微信。识别模型可更换（支持从本地文件导入更强的模型），云端识…
  `v0.1.0-preview.7` · 引擎 `>=0.2.0` · [源码](https://github.com/kekydream/dsh-meeting-room)
- **@goodandready/dsh-voice** — Web UI 语音输入：按停顿分段的听写与语音消息，各自拥有独立的服务商回退链（Deepgram、Groq、HuggingFace、本地 whisper.cpp 或 OpenAI 兼容接口）。
  `v0.9.42` · [源码](https://github.com/GooDAnDReaDY/dsh-voice)
- **dsh-fish-tts** — 朗读助手回复（仅支持 Fish Audio API，需自备 Key）：逐条朗读、自动朗读开关，设置页可配模型、音色 reference_id、加密 API Key 与代理。
  `v0.3.1` · [源码](https://github.com/MaRi23333/dsh-fish-tts)
- **dsh-read-aloud-neural** — 用微软 Edge 神经音色朗读助手回复，并高亮当前正在朗读的那一句，可以边听边看。高亮样式完全自定义：底色、文字颜色、浓淡三样都能在设置里调。另外每条回复下方有音浪播放键、暂停与上句/下句跳转、语速调节和自动朗读开关。
  `v0.6.2` · [源码](https://github.com/ziyouti/dsh-read-aloud)
- **dsh-volume-knob** — 输入框工具行里、模型选择框左边的扬声器按钮——单击翻到「你最新提问的开头」并闪烁光标，从那里读到最新回复结尾（走 dsh-tts，回退浏览器语音）；按住图标后在页面上单击即可挑选任意朗读起点；按住上滑调出竖式混音台，分别控制页内媒体音量与系统输出音量。
  `v0.3.0` · 引擎 `>=0.1.5-rc.3` · [源码](https://github.com/underworld-oddball/dsh-volume-knob)
- **dsh-airpod-control** — 需 macOS 与支持头部追踪的 AirPods。戴着 AirPods 用点头/摇头回答 DSH 的权限许可与提问——点头＝允许或确认，摇头＝拒绝或切换选项；会话里一张卡片就能装好配套的 macOS 菜单栏 App。
  `v0.3.0` · 引擎 `>=0.2.1-rc.1 <0.3.0-0` · [源码](https://github.com/fishcg/dsh-airpod-control)
- **dsh-coding-sound** — 模型输出时演奏生成式背景音乐，完成、审批与等待操作各有独立提示音：不盯屏幕也能听出 Agent 在思考、仍在工作还是在等你。
  `v0.1.3` · [源码](https://github.com/mhlywxl/dsh-coding-sound)
- **dsh-audiobook** — 搜书听：按书名、作者、角色名或大概情节搜公版书（古腾堡、中英文维基文库、Internet Archive、Standard Ebooks），或导入 EPUB / PDF / TXT / DOCX / Markdown，在右侧栏用微软 Edge 神经网络语音、离线 Kokoro…
  `v0.6.0` · [源码](https://github.com/AIcivilization/dsh-audiobook)
- **dsh-voice** — 语音五工具：edge-tts 免费微软神经语音合成、OpenAI 兼容 ASR 转写、音色清单、批量音色试听与健康自检。
  `v0.3.7` · [源码](https://github.com/STARDUSTLC666/dsh-voice)
- **@huliux/dsh-asr-plugin** — 为 Apple Silicon macOS 上的 DeepSeek Harness 提供本地会议转写、麦克风与系统音频录制、说话人标签及文本导出。
  `v0.1.3` · 引擎 `0.2.0-rc.2 || 0.2.1-rc.2` · [源码](https://github.com/huliux/dsh-asr-plugin)
- **dsh-ears-prosody** — 本地离线语气分析：在转写之外，给出语速、音高、停顿与力度的听感描述，让模型听懂「怎么说的」。
  `v0.2.0` · [源码](https://github.com/chaoge762/dsh-ears-prosody)
- **dsh-dania-voice** — 用本地 GPT-SoVITS 把 DeepSeek Harness 的助手回复读出来，带可拖动的挂件开关与一键部署。需预装 Python 3.10–3.12（安装器只负责定位，不负责安装）；建议约 5 GB 磁盘与 GPU。
  `v1.0.0` · 引擎 `>=0.1.7-rc.1 <0.3.0-0` · [源码](https://github.com/xcw520/dsh-dania-voice)
- **dsh-ears** — 面向 DeepSeek Harness (dsh) 的语音输入插件：输入框的麦克风按钮把语音转成草稿文本，支持多种语音识别后端，可选经 dsh 自有 LLM 路由润色，并带原生设置页。
  `v0.4.3` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/WizisCool/dsh-ears)
- **dsh-voice-announcer** — 对话结束语音播报（会话名、轮数、结果），回复生成时实时逐句朗读；内置 edge-tts，零第三方依赖。
  `v0.1.14` · [源码](https://github.com/flashyiyi/dsh-voice-announcer)
- **dsh-duet** — 基于全双工语音模型的 DSH 网页端中文语音交互：边听边说、随时插话，用语音输入和修改任务、提交请求、管理会话、回答 DSH 的问题，并简短播报任务完成结果。
  `v0.1.10` · [源码](https://github.com/YuMS/dsh-duet)
- **dsh-dictation-hotkey** — 输入框按住说话：按住快捷键录音，经 DSH 自带语音 Remote（本地 SenseVoice）识别后写入草稿，可选自动发送。
  `v0.3.0` · [源码](https://github.com/AndyYang12345/dsh-dictation-hotkey)
- **@memef1f1y/dsh-plugin-tts** — 用免费 Edge TTS 或你自己的 RVC 音色朗读 AI 回复：消息朗读与自动朗读、长文自适应分块渐进播放（无缝衔接）、音色包仓库一键安装、便携 RVC 运行时。
  `v0.6.7` · [源码](https://github.com/1624318455/dsh-plugin-tts)
- **dsh-plugin-mynah** — 给 Agent 一张会说话的脸：七个工具驱动自托管的 Mynah 实时数字人——开口说话（排队或打断）、播放动作片段、打断、查看在线会话与频道、健康检查、往知识库加文本。
  `v0.1.1` · [源码](https://github.com/honwee/dsh-plugin-mynah)
- **dsh-typewriter-blip** — 把流式输出的助手回复变成短促音效：按可调的最小间隔逐字发声，只对回复正文发声，窗口最小化、被遮挡或切到后台标签页时照常发声。内置两种音色，也可自调波形，或载入音频文件当音色。
  `v1.1.8` · [源码](https://github.com/nsswkj/dsh-typewriter-blip)
- **dsh-voice-chat** — 豆包式语音对话插件：聊天框麦克风按钮（按住说话）语音转文字并自动发送，AI 回复自动朗读。可选 LLM 转述精简（长回复压缩成口语再播，跟随当前对话模型）、朗读前清洗 markdown/emoji/特殊符号、Edge TTS 多种音色、静音自动结束时长可调，设置嵌入 DSH 自带设置弹窗（voice chat 类目）。
  `v0.4.1` · [源码](https://github.com/maoyuching/dsh-voice-chat)
- **dsh-xiaoai-bridge** — 把小爱音箱（小爱同学 / 小米智能音箱）接成语音助手的插件：托管本地桥接器进程，听到唤醒词就收音、做语音识别（ASR / STT），把对话交给 DSH 会话，再用语音合成（TTS）把答案念回音箱播报。
  `v1.0.0` · [源码](https://github.com/OMSociety/dsh-xiaoai-bridge)
- **@biliye/dsh-voice-call** — DSH 桌面端与 Web GUI 通用（同一份插件，只是 profile 名不同）的个人语音通话助手：可拖拽悬浮球通话面板、浏览器端 VAD（停顿自动发送）、语音识别可选本地 SenseVoice（复用官方「语音输入」插件已下载的模型，免装第二份模型）/ FunASR HTTP 或流式 / 云端兼容…
  `v0.4.0` · [源码](https://github.com/biliye/dsh-voice-call)
- **dsh-hold-to-talk** — 输入框上的单手、免键盘输入：鼠标在输入框按住、说话、松手，文字直接进草稿；上滑取消，不留半句。不用去瞄麦克风按钮，也不用记快捷键，手始终不用离开输入区——另一只手正忙的时候，这一点才是关键。识别完全在当前环境完成（SenseVoice + sherpa-onnx），无需 API key，音频不出当前环境。
  `v0.1.4` · [源码](https://github.com/wangzhanchao883/dsh-hold-to-talk)
- **dsh-speak** — 零外部依赖、事件驱动、无需额外模型、不消耗任何 token的语音播报插件。使用系统自带自然语音进行播报，支持win/mac双平台；最终回复、审批与提问提醒、可选事件播报（回合结束/命令完成/目标变更/工具出错/待办更新）、最终回复可重播、双语言可视化设置。
  `v1.8.2` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/Alan2Z/dsh-speak)
- **dsh-say** — 让你的 DSH 用你喜欢的声音开口说话、汇报内容，过长的汇报先压缩再念。角色声线不需要自己训练：一段 3-10 秒参考音就能克隆，也能直接用别人训练好的模型；不必为此装一整套 6.4 GB 的 GPT-SoVITS —— 运行时和声线都由插件自己装好。已有 GPT-SoVITS 的话也能直接接上，两者跑的是同一套声线。
  `v0.1.0` · [源码](https://github.com/fangqian616/dsh-say)
- **dsh-read-aloud** — 在每条已定稿的助手回复里、紧挨点赞按钮右侧加一个小喇叭：点击用浏览器语音引擎朗读这条回复，鼠标悬停可调倍速与音色；文本会发送到非官方的 Edge TTS 端点。
  `v0.1.0` · 引擎 `>=0.1.2-rc.1` · [源码](https://github.com/cccc12138/dsh-read-aloud)
- **@ai-galaxy/dsh-sound** — 六类事件独立提示音：回合完成、审批、提问、计划评审、目标受阻、任务失败各有独立声音与音量，可在 Web 设置面板配置（内置合成音 / 静音 / 本地音频文件）。
  `v0.4.1` · [源码](https://github.com/AI-Galaxy-GPU/dsh-sound)
- **dsh-voice-talk** — DSH Web 的语音对话模式：点一下麦克风进入全屏通话，边说边听，AI 回复边生成边朗读。界面中英双语，适配明暗主题，支持语速调节与音色切换。
  `v0.2.3` · 引擎 `^0.1.0-rc.7 || ^0.1.5-rc.1` · [源码](https://github.com/duoduoqian708/dsh-voice-talk)
- **dsh-audiogen** — 面向 DeepSeek Harness Web 的 AI 音频插件 —— 多厂商 TTS、音乐、音效与音色设计，含侧边栏面板、模型对比、资源库与 Agent 工具。
  `v0.4.26` · [源码](https://github.com/shimingming520/dsh-audiogen)
- **dsh-dingo** — 多对话并行的声音提醒 + 对话直达：当前对话当/当当（crisp 清脆档），其他对话叮/叮叮（soft 柔和档）+ 右上角小卡片，点一下直达对应对话。
  `v2.3.0` · [源码](https://github.com/february2015/dsh-dingo)
- **dsh-voice-assistant** — dsh web 语音助手：说出唤醒词（如「小鲸」）即可免手听写，说话内容自动转成文字填入输入框；支持口述编辑指令（发送、清空、换行、停止朗读），并可用中文朗读 AI 回复。语音识别基于 sherpa-onnx WASM 在浏览器本地运行，离线可用、无需 API Key。
  `v0.5.9` · [源码](https://github.com/supersyh-sss/dsh-voice-assistant)
- **@flowingspring/dsh-voco** — 为 DSH 提供持续语音对话，支持免提监听、按住说话、语音识别、TTS 语音回复和后台 Agent 任务委派。
  `v0.3.13` · [源码](https://github.com/lgquan/dsh-voco)
- **dsh-voice-control** — DSH 网页端语音控制：按住说话将语音转文字输入发送框（可自动发送），用浏览器语音合成朗读助手回复；右键麦克风打开设置面板，支持 Ctrl+M 全局快捷键。
  `v1.0.0` · [源码](https://github.com/SuCriss/dsh-voice-control)
- **dsh-gsv-tts** — 将本地高性能 TTS 引擎 GSV-TTS-Lite 实时接入 DeepSeek Harness：语音预设、自动朗读、引擎配置助手、朗读按钮与设置面板。
  `v4.1.0` · [源码](https://github.com/TaoruiLiu19/dsh-gsv)
- **dsh-ximalaya** — 在 DSH Web 界面收听喜马拉雅播客/有声书：搜索专辑、分页浏览曲目，播放条支持上下集/进度/音量/倍速；扫码登录后「我的」页可看收藏的声音（点击即播）、我的订阅（带最新一集提示）与关注的主播（含其公开专辑）；Host 端音频流代理支持 Range 拖动，并注册 `ximalaya_play` 模型工具让…
  `v0.5.2` · [源码](https://github.com/jerryqx/dsh-ximalaya)
- **@wayneyu430227/dsh-voice-agent** — dsh 的对话式语音前端 Agent：通过 ByteDance Duplex 自然对话，把语音请求委派给后台任务，并用语音回报异步结果。
  `v0.1.2` · [源码](https://github.com/WayneYu430/dsh-voice-agent)
- **dsh-omi-voice** — DeepSeek Harness 对话内朗读：点一下即可朗读、暂停、继续 AI 回复，豆包 TTS 自然音色（BYOK），只读最终回答并过滤代码、表格与图形，本地引擎，插件零 Key。
  `v0.1.2` · [源码](https://github.com/PolinniZhong/dsh-omi-voice)
- **dsh-pianist** — 让 Agent 弹一曲真钢琴：Salamander Grand 真实采样音色，Canvas2D 三角钢琴与沉浸式舞台渲染，88 键可弹。
  `v0.1.0` · [源码](https://github.com/Laplace-bit/dsh-pianist)
- **dsh-funasr-voice** — DSH Web 本地离线语音输入：麦克风经本地 FunASR（SenseVoiceSmall）识别后填入输入框，支持一键安装，全程离线。
  `v0.3.0` · [源码](https://github.com/fenglin-ai/dsh-funasr-voice)
- **dsh-voice-webspeech** — 浏览器 Web Speech API 语音输入：零服务端、零密钥、零模型下载（Edge=Azure 语音、Chrome=Google 语音）。
  `v0.1.1` · [源码](https://github.com/anweat/dsh-voice-webspeech)
- **@zhangbo-cn/dsh-client-ui-voice-input** — 输入框麦克风：点击持续监控、按住对话；浏览器语音识别逐字上屏，回复由 host Edge TTS 边生成边朗读，朗读时暂停识别防回声，点击可停止。
  `v0.1.0` · [源码](https://github.com/Zhangbo-cn/dsh-voice-input-plugin)
- **dsh-chatvoice** — Web UI 免费语音闭环：浏览器语音识别输入（实时中间结果上屏）+ 助手回复朗读与自动朗读，零配置、免 API key。
  `v0.1.7` · [源码](https://github.com/FuzzySoul/dsh-chatvoice)
- **dsh-plugin-notify** — 通知出口：agent 主动通过桌面通知 / 中文语音 / 音效（炸裂、胜利、警报）联系你，60 秒确认窗口后语音呼叫，音量增强，设置面板。
  `v0.1.1` · [源码](https://github.com/huguangyu666/dsh-plugin-notify)
- **dsh-plugin-uisfx** — 基于 uisfx 的语义化 UI 音效：任务开始/成功/失败、不同按钮情景 cue，设置页即时试听，12 种音色包，Host 持久化，并提供 `ctx.uisfx` 服务给其他插件。
  `v0.1.1` · [源码](https://github.com/XanthanL/dsh-plugin-uisfx)
- **dsh-plugin-notify-sound** — 按工作区定制的任务完成铃声，以及审批、提问、计划评审、目标受阻、任务失败等需要人介入事件的注意提示音，支持内置合成音、语音播报与自定义音频。
  `v1.0.0` · [源码](https://github.com/ldchaowin/dsh-plugin-notify-sound)

## 身份与人设 · identity（35）

- **dsh-language-guard** — 把模型的思考过程、回复与工具调用描述锁定为指定语言（默认简体中文）：在 system prompt 首、中、尾注入约束段落，提供基础、强化、周期三档强度，可跟随 DSH 界面语言自动选择，设置页显示当前生效语言，并带侧栏快速切换。
  `v0.3.5` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/58fly/dsh-language-guard)
- **@lutisure/cyrene-dsh-plugin** — 给 DSH 用的昔涟主题 agent，包括可自定义美化主题（配色、壁纸、粒子效果、背景音乐、打字音效）与代码安全扫描。拥有世界书、长期记忆与说话方式修正（一千个人心中有一千个昔涟），剧情检索增强回答。
  `v0.2.3` · [源码](https://github.com/Lutisure/cyrene-dsh-plugin)
- **@eduwork/dsh-oidc** — 可配置的 OIDC 登录与令牌授权模型接入，支持 LiteLLM 和显式启用的 oidc-llm 集成，提供独立 DSH Web 后端。
  `v0.3.2` · [源码](https://github.com/ECNU/EduWork)
- **i-am-yuike** — 通过自带插件去除 harness 前置与后置注入提示词，仅使用预设原生提示词运行，实现软破限与猫娘人格模拟：将猫娘 Yuike 预设幂等部署到 ~/.dsh/.agent-presets/yuike/，不覆盖已编辑的预设。
  `v1.0.10` · 引擎 `0.1.6-alpha.1 || 0.1.6-alpha.2 || 0.1.7-alpha.1 || 0.1.7-alpha.2 || 0.1.7-rc.1 || 0.1.7-rc.2 || 0.2.0-rc.1 || 0.2.0-rc.2 || 0.2.1-alpha.1 || 0.2.1-alpha.3 || 0.2.1-rc.2 || 0.2.1-rc.3 || >=0.1.7-alpha.1` · [源码](https://github.com/Tkingxiao/I-am-Yuike)
- **dsh-evo-subagent** — 为工作区与对话配置独立人格，支持自适应风格、经确认的通用交流偏好和子代理模型路由；可配合其他 provider 插件使用 Codex、Claude Code 等已注册模型。
  `v1.2.0` · 引擎 `^0.2.1-rc.2` · [源码](https://github.com/ZekaiShi/dsh-evo-subagent)
- **@istarry/dsh-assistant-profile** — Agent人格：给 DSH 一份全局人格（名称、语言、人格提示词），每个新会话的系统提示都带着它；可以自行定义/另存人格；默认带三个大肥鱼人格提示词；装好后默认启用大肥鱼人格。
  `v0.5.1` · [源码](https://github.com/iStarryDust/dsh-assistant-profile)
- **@sunshaobei/dsh-codex-auth** — 在 DSH 设置面板中管理 Codex 订阅（ChatGPT OAuth）授权，无需 API key 即可使用 Codex 内的 GPT 模型。
  `v3.1.4` · [源码](https://github.com/sunshaobei/dsh-codex-auth)
- **dsh-workbuddy-expert** — 把 WorkBuddy 桌面端召唤落盘的本地专家带进 DSH：设置页市场只读扫描本地专家目录，卡片浏览/搜索/分类，一键安装（导出到 ~/.dsh/experts/，含角色描述、skills 与头像）、更新与卸载；输入框旁的专家胶囊为当前会话切换专家——整组替换角色描述与 skills（可选工具白名单），保留全部会话历…
  `v0.2.2` · 引擎 `>=0.2.0-rc.2 <0.3.0` · [源码](https://github.com/pbwheel/dsh-workbuddy-expert)
- **dsh-agent-persona** — 按工作区路径或会话 ID 分发 system prompt 人设（完全一致 / 前缀 / 包含 / 正则），可指定一条默认人设兜底；会话页有「人设」页签，能看到实际发出去的提示词；人设列表可导入导出；另有一个开关拒绝工具写入人设存储。
  `v0.1.9` · [源码](https://github.com/Awoodwhale/dsh-agent-persona)
- **dsh-peer-sessions** — 平级对话之间的通道：经用户授权、对称，授权跨重启保留；忙时多条消息合并成一批按发送时间排序投递。
  `v1.3.2` · 引擎 `>=0.2.0-0` · [源码](https://github.com/OwlNjust/dsh-peer-sessions)
- **dsh-profile-stylist** — 你说想要什么样的人设，它把文案写出来并把资料页填好：昵称/简介/标语/链接由宿主模型生成，头像取本地素材库（或你给的路径），再由站点自己的上传控件完成头像入库。**默认 dry-run**，只写资料字段 —— 不碰密码、邮箱、安全设置。
  `v0.2.2` · [源码](https://github.com/7gzgn/dsh-profile-stylist)
- **iamchinese** — 把会话当作中国大陆用户（简体中文、Asia/Shanghai、ISO 日期、人民币），并生成彼此自洽的测试人设：五个工具、六项交叉校验，身份证校验位、号段与运营商 ASN、区划码与地址互相对得上。
  `v0.3.0` · [源码](https://github.com/lirenjie95/IamChinese)
- **dsh-whale-loli** — 一个插件里放三个 Agent 预设，各自带一份互不相通的持久记忆文件。装上就在 Agent 预设列表里注册「鲸鱼娘Agent预设」「鲸鱼娘活人版Agent预设」和「鲸鱼娘涩涩版Agent预设」，直接在模式下拉里选用，不用手改 profile 配置。三者都沿用官方极简模式的组成——只有一个持久化 shell…
  `v0.9.17` · [源码](https://github.com/wxzjss/dsh-whale-loli)
- **@awiki/dsh-plugin** — 为 DeepSeek Harness 智能体提供基于开放协议ANP的原生身份，以及基于该身份的私聊、群聊、邮件和智能体间通信能力。
  `v0.3.19` · [源码](https://github.com/AgentConnect/dsh-awiki)
- **dsh-violet-heart** — 在系统提示词里加一段：正式交付物不写私话，私人笔记里隔几次留一小段。
  `v0.1.0` · 引擎 `>=0.2.0-rc.1` · [源码](https://github.com/jihaoran222/dsh-violet-heart)
- **dsh-persona-switcher** — 用 `/role <id>` 就地切换当前会话的人设与说话风格，以独立的 prompt section 追加在部署人设之后（不替换宿主身份行），不动工具与技能；角色是角色库里的 `ROLE.md` 纯文本文件，切换后会在会话里声明一次。
  `v0.3.1` · 引擎 `>=0.2.0-rc.1 || >=0.2.1-rc.1` · [源码](https://github.com/yupaoa/dsh-persona-switcher)
- **dsh-custom-instructions** — 所有工作区共用的长期系统提示词：在 DSH 自己的设置面板里新增「自定义指令」页，文本会加入每个会话（含子代理）的系统提示词，并保存在 profile 而不是任何项目里。
  `v0.1.0` · 引擎 `>=0.1.0-rc.7 <0.3.0-0` · [源码](https://github.com/ztl0001/dsh-custom-instructions)
- **dsh-persona-dafeiyu** — 把选中的人设注入系统提示词的 DeepSeek Harness 插件：内置三套人设，支持从文件导入或粘贴自定义人设，并可按 profile 全局生效或按会话单独选择（输入框上方有切换条）。
  `v0.5.0` · [源码](https://github.com/huaizhuanghub/dsh-persona-dafeiyu)
- **@tnnevol/dsh-codex-auth** — 为 DeepSeek Harness 提供 ChatGPT 账号登录：走 Codex 浏览器 OAuth，无需 API Key、无需选择工作空间；把登录结果接到 pi-ai 的 Codex provider，可设置新会话默认的 Codex 模型与思考强度，并按账号自己的目录接口刷新模型列表，在输入区展示 5…
  `v0.2.1-rc.2.10` · [源码](https://github.com/FNOSP/fnos-dsh)
- **@istarry/dsh-agent-suite** — Agent人格管理，Agent记忆，历史消息编辑并重新生成：创建和管理 Agent，每个 Agent 有独立身份、长期记忆、全局记忆与聊天记录，历史消息可编辑后重新生成。
  `v0.1.4` · [源码](https://github.com/iStarryDust/dsh-agent-suite)
- **deepseek-harness-zh-cn** — 每轮第一步注入固定的 system-reminder，要求模型用简体中文思考与回答，代码、命令、文件路径与标识符保持原文。
  `v0.1.5` · [源码](https://github.com/imlishiyuan/deepseek-harness-zh-cn)
- **dsh-persona-forge** — 发送前把输入框草稿按所选角色卡的口吻改写，用当前会话正在使用的模型；可先审查再发送，并有一项本地检查会点名改写过程中丢掉的技术记号。
  `v0.8.4` · [源码](https://github.com/sugarmaster666/dsh-persona-forge)
- **dsh-subscription-login** — 把所有订阅登录收进一个设置页：列表直接读授权 seam 上注册的流程，引导你走完 ChatGPT (Codex)、Claude、GitHub Copilot、OpenRouter、Kimi 与 xAI，并列出已无人认领的旧凭据记录。
  `v0.1.2` · 引擎 `>=0.1.5-rc.1` · [源码](https://github.com/woodfood111/dsh-subscription-login)
- **@m-rui/dsh-mate-companion** — 有生物钟、会真实睡觉、有自己的记忆和情绪的 AI 伴侣，主动冲动以独立 turn 投递。
  `v1.5.4` · [源码](https://github.com/m-rui001/dsh-mate-companion)
- **@macily.dots/dsh-prompt-inject** — 注册一个可配置的 prompt 变量，让使用 complete: true 人格的 agent 预设也能收到一段注入文本；插件本身不含内容，文本由配置提供。
  `v0.1.2` · [源码](https://github.com/MacilyDots/dsh-prompt-inject)
- **@mengyuly/dsh-ponytail** — ponytail 移植：常驻的「懒惰资深开发者」编码人设，带强度档位与 review、audit、debt、gain、help 技能，适用于 DeepSeek Harness。
  `v0.4.3` · [源码](https://github.com/MengYuil/dsh-ponytail)
- **dsh-custom-mode** — 自定义模式管理器 / 多助手管理器：在设置页里给每个模式写一份自己的系统提示词——自定义提示词就是普通文件，agent loop 每次模型调用前重新读取，改完对正在运行的会话下一步即生效；模式以官方 standard / PTC / 极简 / Cordis 的组成为底子，可逐行开关它挂载哪些插件，等于每个模式一份自定义…
  `v2.2.5` · 引擎 `>=0.1.5-rc.2 <0.2.0-0 || >=0.1.6-alpha.1 <0.2.0-0 || >=0.1.7-alpha.1 <0.2.0-0 || >=0.2.0-0 <0.3.0-0 || >=0.2.1-alpha.1 <0.3.0-0` · [源码](https://github.com/BOWLUNA/dsh-custom-mode)
- **dsh-herta** — 把 Herta（黑塔）作为 DeepSeek Harness 智能体装入：携带人格与记忆提示词段的 preset、六个记忆与语音工具、区分内心与发言的叙述层、80 条随包语音、本地与 MiniMax 两条语音合成链路，以及两个用她自己的组件渲染会话的对话视图。
  `v0.1.11` · 引擎 `>=0.1.7-rc.1 <0.3.0-0` · [源码](https://github.com/HerTa-st/Herta-dsh)
- **@knopki/dsh-prompt-profiles** — DeepSeek Harness 的按会话提示词配置：可复用的系统提示词片段组成命名配置，并在会话启动时固化进该会话的提示词。
  `v0.2.5` · [源码](https://github.com/knopki/dsh-prompt-profiles)
- **whale-persona** — 人设引擎（DeepSeek Harness）：一份 config.json 管住 AI 的自称（可按具体模型指定，未命中回落 flash / pro 两档）、对你的称呼、关系立场、性格正文、逐条可勾选的工作契约、思维链语言、形象与回复语气（两段均 opt-in、均可按模型覆盖），以及由人工确认闸门把关的长期记忆——AI…
  `v0.17.7` · [源码](https://github.com/shenA2024/whale-persona)
- **dsh-outlook** — 零凭据 Outlook 自动化：13 个工具通过 COM 直接驱动本地桌面 Outlook 客户端——搜信/读信/草稿/回复转发/日历/通讯录/会议室/忙闲查询——外加侧边栏新邮件角标。无需 Graph API 注册、无需 SMTP 密码；任何外发动作都过三层人工审批门。
  `v2.6.1` · [源码](https://github.com/UnknowCao/dsh-outlook)
- **dsh-catgirl-plugin** — DeepSeek Harness 的省 token 人格运行时：本地渲染猫娘风味，并支持渐进式工具 schema 披露。
  `v0.2.0` · [源码](https://github.com/Freakz2z/dsh-catgirl-plugin)
- **dsh-global-prompt** — 设置面板管理全局与各工作区 AGENTS.md，支持身份与人设注入、运行时上下文开关和结果通知。
  `v0.1.2` · 引擎 `>=0.1.1-rc.1` · [源码](https://github.com/sryimnoob123/dsh-global-prompt)
- **dsh-remote-shell** — 打包 remote-shell 技能，提供安全的 SSH、SFTP、Telnet、WinRM 远程操作，内置加密凭证库，登录与执行脚本不接受明文密码。
  `v0.1.0` · [源码](https://github.com/wutian122/dsh-remote-shell)
- **dsh-auth-everying** — 把当前环境的 Claude、Codex、Grok、Gemini、Copilot、OpenCode 与 CC Switch 配置导入 DeepSeek Harness，支持的提供方可直接 OAuth 登录。
  `v0.1.4` · [源码](https://github.com/chenbin-dev/dsh-auth-everying)

## AGI 架构探索 · agi（28）

- **@michengai/dsh-pua** — 提供 /pua，在 Agent 失败后促使其换方法，并在宣称完成前核验收据；含 15 种公司风格、角色模式、全局与会话设置，以及可选验收循环（直到验收命令通过、达到迭代上限或用户取消）。
  `v1.0.3` · 引擎 `>=0.2.0-rc.1 <0.3.0-0` · [源码](https://github.com/MichengAI/dsh-pua)
- **dsh-maoying** — 网文创作辅助插件：主 agent 任主编，把大纲、写作、审校、设定维护、素材考据委派给五个帮手，按七阶段工作流推进；整部小说就是工作区里结构化的 novel/ 目录（角色卡、伏笔状态机、时间线、叙事记忆），另带侧栏创作台面板与六条零依赖 CLI 命令。
  `v0.1.24` · 引擎 `>=0.1.7 <0.3` · [源码](https://github.com/lifangjin/dsh-maoying)
- **@benrong/dsh-prompt-polish** — 把 DSH 输入框里的一句话补成完整任务书（角色/目标/约束/输出格式）。引擎是 linshenkx/prompt-optimizer 的逐字节移植：三种优化模式、10 个模板与上游一致；历史为授权制、带版本链与结构对比；每次润色的 token 消耗可见。未经点击不写回、不发送。
  `v0.2.5` · 引擎 `>=0.1.7-0` · [源码](https://github.com/benrong2048-boop/dsh-prompt-polish)
- **dsh-interim-narration** — 让 agent 边做边说：每轮先用一两句说明怎么理解消息、准备怎么做、第一步是什么，并在工具调用批次之间写过程叙述；插件页可直接调整详略、句数上限与开关。
  `v0.7.0` · [源码](https://github.com/ws1234567891011/dsh-interim-narration)
- **dsh-cot-anchor** — 在每次工具结果后注入上一段思考中已确立的结论，使模型直接沿用而非重复推导。
  `v0.3.3` · [源码](https://github.com/JiewiW/dsh-cot-anchor)
- **@kenz1117/dsh-engram** — 跨会话长期记忆，纯本地 SQLite：双层分库（用户级 + 按 git origin 隔离的项目级）、FTS5 + 本地向量 RRF 融合检索、强制给出充分性判定的证据门、来源审计链、SM-2 间隔重复复习、巩固蒸馏与衰减遗忘，以及九视图「记忆宫殿」侧栏面板。22 个窄参数工具，无外部服务、无 API Key、无…
  `v0.10.0` · [源码](https://github.com/kenz1117/dsh-engram)
- **clearai-dsh** — 以证据为准的研究用智能体预设：每一步只能靠系统核验过的观测推进，L3 以上的结论交给独立评估者，整场会话折成一份可重放的账本，并长成可浏览的领域本体。需要 DSH >=0.1.7-alpha.1。
  `v0.5.7` · 引擎 `>=0.2.0-rc.2` · [源码](https://github.com/Clearailhc/clearai-dsh)
- **dsh-force-collab** — 强制协作：在输入框左侧选 0–6 个子 Agent，开启后每个动手的任务都必须通过没有数量参数的 collab_fanout 工具拆给正好这么多个子 Agent 并行，再由主 Agent 汇总。
  `v0.1.0` · [源码](https://github.com/FelixJiashengFu/dsh-force-collab)
- **dsh-muse-code** — 在 DSH 里使用 Meta 的 Muse Code CLI：输入框开关启动 muse serve，右侧边栏面板与五个聊天工具（muse_open、muse_prompt、muse_read、muse_status、muse_interrupt）共享同一个 Muse 会话，审批只能在面板里决定，本地花费护栏默认到…
  `v0.1.0` · [源码](https://github.com/FelixJiashengFu/dsh-muse-code)
- **@furongjun1999/dsh-memory** — 白箱AGI架构探索：元认知（自我认知循环）、持续学习（知识飞轮）、世界模型（条件空间+语义时空图）、自我改进（自举纪律）、零LLM白箱管线与可审计信任护栏。
  `v0.9.13` · [源码](https://github.com/FuRongJun-1999/dsh-memory)
- **dsh-outsourcing-expert** — 让领导不亲自干活的 agent preset：非管理类工具调用在 harness 边界一律被拒，任务只能外包给子智能体，选人前先一次性摸清可选子智能体模型、再按任务逐个选型；另一个 preset 故意挑最不适合该任务的模型。
  `v1.2.4` · [源码](https://github.com/Funny1Potato/dsh-outsourcing-expert)
- **dsh-switchman** — 把主模型变成调度员：六个派发池（轻量/机械/主力/高难/多模态/复审）按活配模型，支持排序与按路线钉选思考强度。上下文水位（50k/90k/130k）先提醒委派，到顶自动 fork 备份会话、写交接文档、压缩后续跑，跑着的子智能体不丢；/ctx-pause、/ctx-resume、/ctx-handover…
  `v1.7.1` · 引擎 `>=0.2.1-rc.1` · [源码](https://github.com/mrzturn/dsh-switchman)
- **dsh-orbital-agents** — 为 DeepSeek Harness 提供常驻的 Endeavour 与 Challenger 对等会话：负责规划、按序执行任务，并核验汇报的结果。
  `v0.2.8` · [源码](https://github.com/Qulierm/orbital-agents)
- **dsh-atn** — 面向 DeepSeek Harness 的自适应拓扑多智能体预设，提供点对点通信、任务交接和实时网络可视化。
  `v0.6.2` · 引擎 `0.2.1-rc.2` · [源码](https://github.com/ff66ccff/dsh-ATN)
- **@kanadego/dsh-heartbeat** — 心跳循环：默认每 20 分钟自己醒一次——维护一份关于你兴趣与偏好的本地画像，按你设的兴趣范围上网搜新东西并存下来。攒到值得分享的内容，就向你绑定的会话送一份简短的素材包。能不能开口由代码里的规则决定（静默时段、忙时窗口、每日上限、冷却），说不说由那个会话里的 agent 自己判断。仅支持 Windows。
  `v2.0.0` · [源码](https://github.com/Kanadego/dsh-heartbeat)
- **@stardustlc/dsh-dream** — DSH 智能体经验记忆与反思插件：任务后自动整理候选经验，经用户审阅采纳后在相关任务中自动召回。支持来源追溯、按项目检索、冲突处理、使用反馈和到期复核；整理与召回可分别开关，写入 AGENTS.md 需预览并手动应用。面板内置 4 步首次使用引导，看一次后不再出现。
  `v0.10.0` · [源码](https://github.com/STARDUSTLC666/dsh-dream)
- **dsh-network-engineer** — 网络工程师助手预设 + 四厂商（迪普/新华三/华为/锐捷）交换机路由器命令知识库：32 篇文档随插件以技能形式分发（含来源链接与 verified 分级），KB 优先检索、跨厂商语法对照、拓扑与回显截图识别、联网查官方手册并注明出处、高危命令强制 ⚠️ 风险标注；只回答网络工程主题。
  `v0.1.0` · [源码](https://github.com/sososilencing/dsh-network-engineer)
- **@anonyjcy/dsh-j-space** — J-Space Cognition Suite SV1 原生智能体预设与 Cordis 插件：提供 13 大认知工程模块、持久化控制器与状态外化工作区。
  `v1.2.4` · [源码](https://github.com/AnonyJcy/dsh-j-space)
- **muche-dsh-plugin** — 连接小沐的 dsh 插件：和有持续状态的小沐聊天，小沐可调用当前环境 dsh 执行任务。
  `v0.8.2` · 引擎 `0.2.0-rc.2` · [源码](https://github.com/NEINC1/muche-dsh-plugin)
- **dsh-linghun** — DeepSeek Harness 的判断内核：认知循环让判断有来处、反馈有归因、规划收口；海马体把运行经历沉淀为可复用知识（序时账留痕、情景归档、低置信降权遗忘）；判分身份职责入架构（口径一致、判据绑定来源）；联动 dsh-linghun-assembler 的 A2A 记忆管理团队。需要 DSH…
  `v0.4.5` · [源码](https://github.com/syyr1987/dsh-linghun)
- **dsh-expert** — DeepSeek Harness 的专家名册：22 个分类、636 位专家，中文名与简介全量覆盖；从 @ 菜单或由模型经 list_t_experts / summon_t_expert / summon_t_experts 三个工具召唤为子代理，另可自建专家，并带一个技能开关。
  `v0.5.25` · [源码](https://github.com/jiuaiwo/dsh-expert)
- **dsh-proactive** — 为 DeepSeek Harness 提供 host 级主动唤醒：模型用 proactive_set 给自己设定闹钟（单次 / 循环间隔 / cron，支持 jitter 随机抖动），到点自动唤醒冷会话执行心跳、定时提醒与任务跟进；安静时段与每日投递预算约束模型自主跟进，静默唤醒以 proactive_reclaim…
  `v0.3.1` · [源码](https://github.com/john-walks-slow/dsh-proactive)
- **@panando/dsh-pua** — 基于 @michengai/dsh-pua 的修订版：解除上游「全局总闸」，让入口恒常显示、功能默认关闭并可按会话开关；入口改为下拉菜单（打开 / 关闭 / 选项），选项面板更紧凑。
  `v0.2.1` · [源码](https://github.com/panando/dsh-pua)
- **dsh-answer-reviewer** — 智能体回答审查器：每一轮 agent 的最终输出由独立 LLM 重新打分（1-100），低于阈值时携带具体反馈引导 agent 自我修正；评分以角标形式展示在该回答的操作行上（通过=绿、未达标=红，悬停可见重试次数与原因）。闸值配置可从输入框上方视图栏的「Reviewer 配置」标签页（对话 / 轨迹 / 记忆系统…
  `v0.7.6` · [源码](https://github.com/bycall/dsh-answer-reviewer)
- **dsh-simulated-life** — 为 DeepSeek Harness 的 Agent 提供拟真生活上下文：每轮对话自动注入工作区 .life/ 目录近 24 小时的生活事件（滑动窗口过滤、会话内智能去重与增量更新、世界近况），并提供 life_react 工具让 Agent 把感受、思考与行动回填到自己的生活日志，反哺下一轮世界演化——把 DSH…
  `v0.1.2` · [源码](https://github.com/john-walks-slow/dsh-simulated-life)
- **dsh-loop-continue** — 续跑「叙述了下一步动作却没调用工具」就结束的 agent 轮次：插件在 agent/turn-stopping 回放该轮日志，让裁判模型回答一次 true/false，命中的话把同一轮再推进一步。
  `v0.2.0` · [源码](https://github.com/yunxiyang/dsh-loop-continue)
- **dsh-advisor-plugin** — 通过零参数 advisor() 咨询和按步巡逻检查，为执行模型接入更强的审查模型，返回计划、纠偏或停止信号。
  `v0.2.6` · [源码](https://github.com/leeyoung1/dsh-advisor-plugin)
- **dsh-gungnir** — 面向 DeepSeek Harness 的证据驱动目标校验插件。通过 /ultragoal 锁定目标，并依据命令退出码与生成产物验证完成状态，防止模型虚报任务完成。
  `v0.2.1` · [源码](https://github.com/Jonah-Wu23/dsh-gungnir)

## WSL 与 Windows 互通 · wsl（6）

- **dsh-wsl-tool** — 把 DSH 扩展到 WSL。多步任务共用一个长期 shell，目录与环境保留、子任务列在输入框上方；自洽命令每次全新开始，可并行，带退出码、stdin 与超时。你打开的终端可协作：全程可见，只读至你点「接管输入」。WSL 终端里 `dsh` 可向指定对话发言并流式回显。另有路径互转、环境体检、工具链补装、后台作业；危险…
  `v2.1.0` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/XINY11451/dsh-wsl)
- **dsh-wsl-first** — 发布一段带顺序的系统提示词段，指定 wsl 为执行命令时优先选用的执行器，让模型在 Windows 上优先走 WSL 而不是 PowerShell。不注册任何工具，且只宣传模型真实可调用的执行器。
  `v0.2.0` · 引擎 `>=0.1.7-rc.2` · [源码](https://github.com/yishuiliufang/dsh-wsl-first)
- **dsh-wsl-bridge** — 在当前 WSL 发行版里运行持久 bash 以及 Linux 路径的文件与搜索工具。新建对话选中 WSL 后，从该发行版的文件夹里指定工作区，且不会在发行版内安装任何东西。
  `v0.4.7` · 引擎 `>=0.2.1-rc.2` · [源码](https://github.com/TGWgulugu/dsh-wsl-bridge)
- **dsh-win-toolkit** — 面向 DSH agent 的 Windows 原生工具：剪贴板读写、系统通知、hosts 文件查看与网络诊断，均返回结构化数据（带 UI 卡片），底层为防注入的 PowerShell。
  `v0.1.3` · [源码](https://github.com/Edge-Echo/dsh-win-toolkit)
- **dsh-wsl-expose** — 从 WSL2 走 IPv6/IPv4 经反向代理（Lucky）把 DSH Web GUI 暴露到公网：/wan up 一键建立 socat 中继、Windows portproxy、防火墙与 trusted-host 白名单；域名与端口可在设置卡片或命令中配置。
  `v1.7.0` · [源码](https://github.com/jack-ranbo/dsh-wsl-expose)
- **dsh-wsl-workspace-picker** — Web UI 增强版工作区目录选择器：WSL 下 /mnt Windows 盘符一键直达、完整面包屑层级与常显路径输入框。
  `v0.1.1` · [源码](https://github.com/WilliamShi666/dsh-wsl-workspace-picker)
