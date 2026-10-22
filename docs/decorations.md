# DSH 装饰插件合集

> 皮肤、主题、壁纸、桌面宠物、启动动画、字体图标——一份按类别整理好的索引。共 **1269** 条。
>
> 四路数据源：npm registry（2355 个 DSH 相关包）· awesome-dsh-plugin（1594 条）· 官方插件索引 dsh-plugin-catalog（3261 条） · GitHub 仓库搜索（929 个命中）。
> 生成时间：2026-10-22。周下载为 npm 近一周数据，缺失记「—」。

## 怎么装

```bash
# npm 上发布的插件
dsh plugin add <包名>

# 只发布在 GitHub 上的插件
dsh plugin add <owner>/<repo>
```

装完重启 DSH。皮肤类插件通常还要在 **设置 → 外观 / 主题** 里选一次才会生效。

> **别一次装五套皮肤。** 每个装饰插件都进首屏资源，装太多会明显拖慢启动。挑一套主用，其余的用完即卸。

## 分类导航

- [皮肤 / 换肤包](#skin) · 218 条
- [主题 / 配色](#theme) · 274 条
- [壁纸 / 背景](#wallpaper) · 148 条
- [桌面宠物 / 吉祥物](#pet) · 391 条
- [启动动画 / 开场](#boot) · 55 条
- [字体](#font) · 64 条
- [图标 / 光标 / 头像](#icon) · 108 条
- [动效 / 粒子](#animation) · 11 条

## 先看这几个

每类取 npm 周下载量前 3 + GitHub 星标前 2，完整清单见下面各分类。

| 类别 | 名称 | 安装 | 热度 | 一句话 |
|---|---|---|---|---|
| 皮肤 | [dsh-client-ui-skin-center](https://github.com/zhu1090093659/dsh-skins) | `@linxin666/dsh-client-ui-skin-center` | 19.9k/周 | In-GUI skin center for the dsh web GUI — the single skin package: skins are… |
| 皮肤 | [dsh-dream-skin](https://github.com/revolutionla/dsh-dream-skin) | `dsh-dream-skin` | 7017/周 | DeepSeek Harness 换肤插件（Dream Skin for DSH）：8 套 iOS / Linear 式清透冷调的高质感主题 + 弥散光壁纸… |
| 皮肤 | [dsh-client-ui-skin-deep-whale-manager](https://github.com/small-tailqwq/dsh-deep-whale) | `@smalltailqwq/dsh-client-ui-skin-deep-whale-manager` | 6567/周 | Switch between installed skins and tune each skin's own options. Find it under… |
| 皮肤 | [dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins) | `xierw/dsh-beauty-skins` | ★100 | 给 DeepSeek Harness 用的美女系列皮肤：设置里从 哲风壁纸 拉预览网格，点一张即应用，配色从壁纸提取。支持动态壁纸，也保留自定义选图。 |
| 皮肤 | [dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin) | `slin-code/dsh-custom-skin` | ★91 | Custom wallpapers and translucent skins for DeepSeek Harness Web |
| 主题 | [dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | `dsh-opencode-palette` | 2077/周 | Ports all 38 opencode themes (33 TUI + 4 desktop 2.0 + system) into DeepSeek… |
| 主题 | [dsh-theme-studio](https://github.com/hj01857655/dsh-plugins) | `dsh-theme-studio` | 2008/周 | Customize the dsh UI theme: 12 accent presets, dark-mode aware accents with a… |
| 主题 | [dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | `@nonamelego/dsh-catppuccin` | 1871/周 | DSH Web GUI 的 Catppuccin 主题插件：Latte、Frappé、Macchiato、Mocha… |
| 主题 | [dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) | `dsh-status-rotator` | ★202 | 将 DSH Web 默认的 Deep Diving.../深度求索中... 换成：1379 条梗 · 打字机特效 · 昼夜渐变 · 弹幕 · 5 套外观主题… |
| 主题 | [dsh-endfield-ui](https://github.com/rison114514/dsh-endfield-ui) | `rison114514/dsh-endfield-ui` | ★92 | Endfield-inspired industrial UI shell for DeepSeek Harness (dsh) — non-official… |
| 壁纸 | [dsh-background-by-model](https://github.com/HarmlessFunny/dsh-background-by-model) | `dsh-background-by-model` | 1166/周 | Per-model appearance for the DSH Web UI: an ordered rule list matched against… |
| 壁纸 | [dsh-wallpaper-bg](https://github.com/nishuoyang/dsh-wallpaper-bg) | `dsh-wallpaper-bg` | 806/周 | DeepSeek Harness（dsh web 网页界面与 0.2 桌面端）独立壁纸背景插件：内置壁纸 / 自定义上传 / Wallpaper Engine… |
| 壁纸 | [wallpaper-engine](https://github.com/yu502950715yang/dsh-use-wallpaper) | `@dsh-use/wallpaper-engine` | 661/周 | 为 DSH（DeepSeek Harness）Web GUI 提供 Wallpaper Engine 壁纸背景：Scene 壁纸由… |
| 壁纸 | [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | `dsh-client-ui-aqua` | ★420 | 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（… |
| 壁纸 | [dsh-chat-wallpaper](https://github.com/LeeRolling/dsh-chat-wallpaper) | `leerolling/dsh-chat-wallpaper` | ★25 | 给 DeepSeek Harness 的开场视频 + 聊天底图插件 |
| 桌面宠物 | [dsh-pet](https://github.com/zhu1090093659/dsh-pet) | `@linxin666/dsh-pet` | 24.3k/周 | Multi-pet companion plugin for the dsh web GUI: a registry-driven floating pet… |
| 桌面宠物 | [dsh-codex-pet](https://github.com/michengai/dsh-codex-pet) | `@michengai/dsh-codex-pet` | 3858/周 | DSH Codex Pet — 为 DeepSeek Harness 提供宠物陪伴、多任务提醒与交互，以及 Skill 自定义宠物 · A pet… |
| 桌面宠物 | [whale-girl](https://github.com/vlln/whale-girl) | `whale-girl` | 681/周 | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| 桌面宠物 | [petdex](https://github.com/crafter-station/petdex) | `crafter-station/petdex` | ★4269 | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness… |
| 桌面宠物 | [dsh-pet-indesktop](https://github.com/MerZlin/dsh-pet-indesktop) | `merzlin/dsh-pet-indesktop` | ★1792 | 基于项目PC2005-cloud/dsh-pet.git，将桌宠移植到Windows、Linux和MacOS上，现在可以随时看到蓝色大肥鱼了：），本项目还额外实… |
| 启动动画 | dsh-startup-animation | `dsh-startup-animation` | 2360/周 | DSH 启动动画与动态背景插件：启动时全屏播放本地视频，由纯 CSS 保证按时自动消失，不会阻塞启动；持久背景视频层内置控制面板，可实时调节不透明度、开关与播放… |
| 启动动画 | [dsh-boot-video-manager](https://github.com/Firefly-TheHerta/dsh-boot-video-manager) | `dsh-boot-video-manager` | 1350/周 | A companion playlist panel for the dsh-boot-animation intro-video plugin: add… |
| 启动动画 | [dsh-boot-compass](https://github.com/linshufan21/dsh-boot-compass) | `dsh-boot-compass` | 794/周 | Desktop full-screen boot splash. It covers DSH's loading card before first… |
| 启动动画 | [dsh-boot-animation-pro](https://github.com/Yiheng-guo/dsh-boot-animation-pro) | `yiheng-guo/dsh-boot-animation-pro` | ★36 | DSH 片头开机动画增强版：播放控制、触发规则、会话名单、分时段片头、片库管理、中英双语。A full-frame intro animation for… |
| 启动动画 | [dsh-desktop](https://github.com/Alex213321/dsh-desktop) | `alex213321/dsh-desktop` | ★9 | 一键安装，基于官方dsh-web端的桌面端（Electron）开发，涵壁纸以及鲸鱼娘挂件，与原web端的对话内容完全同步，实时启动最新版的dsh，可修改与优化以… |
| 字体 | [dsh-font](https://github.com/klarkxy/dsh-plugins) | `@klarkxy/dsh-font` | 433/周 | Font: customize the interface font, code font, and conversation font size of… |
| 字体 | [dsh-font](https://github.com/citisen/dsh-font) | `@citisen/dsh-font` | 40/周 | DeepSeek Harness plugin: customize the Web GUI fonts (interface family, code… |
| 字体 | [dsh-font](https://github.com/nakus0426/dsh-font) | `@nakus0426/dsh-font` | 15/周 | 为 DSH Web 客户端增加「字体」设置页的本地插件。从系统实际安装的字体里选择界面字体与代码字体，选中后立即生效，并持久化到 DSH 的 settings… |
| 字体 | [dsh-font-probe](https://github.com/lohana20061023-29/dsh-font-probe) | `lohana20061023-29/dsh-font-probe` | ★21 | DSH 字体插件：中英文字体分设、正文字号与代码字号、字距/行距/段距/首行缩进四根滑块，吸底总预览 + 确认制，配置写回 profile，不动… |
| 字体 | [dsh-font](https://github.com/WangPaoPaoLab/dsh-font) | `wangpaopaolab/dsh-font` | ★11 | Font switcher for DeepSeek Harness Web GUI: 99 UI fonts + 31 code fonts with… |
| 图标 | [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | `dsh-emoji` | 406/周 | Tiny semantic inline emoji for DSH Agent responses |
| 图标 | [dsh-ui-settings-icons](https://github.com/suntianc/dsh-ui-settings-icons) | `dsh-ui-settings-icons` | 273/周 | Adds custom icons to the DSH Settings sidebar and exposes a keyed… |
| 图标 | [smooth-cursor](https://github.com/Lacquervii/smooth-cursor) | `dsh-smooth-cursor` | 249/周 | Smooth comet-mode animated caret for the DSH Web composer: a glowing comet… |
| 图标 | [pojia-next](https://github.com/z91772524-ai/pojia-next) | `z91772524-ai/pojia-next` | ★676 | 一个脚本搞定 DSH / WorkBuddy / ZCode / Codex / Cursor / Claude… |
| 图标 | [SpecFusion](https://github.com/wxkingstar/SpecFusion) | `wxkingstar/specfusion` | ★73 | 在 DeepSeek Harness / Claude Code / Cursor / Codex / Gemini CLI 里直接搜索 20… |
| 动效 | [dsh-whale-particles](https://github.com/fewoot/dsh-whale-particles) | `dsh-whale-particles` | 348/周 | Dot-matrix backdrop for the DSH Web UI: the dots form the DeepSeek whale or a… |
| 动效 | [dsh-animations](https://github.com/kkutysllb/dsh-animations) | `dsh-animations` | 32/周 | DSH 原生动效技能包：8 个 HTML 动画技能（PPT 翻页演示 / 流程图 / 网络协议可视化 / 动态架构图 / 学霸笔记 / 卡片剧场 / 视频分镜… |
| 动效 | [dsh-animation-optimization](https://github.com/kelemiao/dsh-animation-optimization) | `dsh-animation-optimization` | 17/周 | DSH 动画优化：输出流式动画与 Claude Code 风格外观插件 |

## 皮肤 / 换肤包

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-client-ui-skin-center](https://github.com/zhu1090093659/dsh-skins) | `@linxin666/dsh-client-ui-skin-center` | 19.9k | Apache-2.0 | In-GUI skin center for the dsh web GUI — the single skin package: skins are pure asset directories (built-in plus… |
| [dsh-dream-skin](https://github.com/revolutionla/dsh-dream-skin) | `dsh-dream-skin` | 7017 | MIT | DeepSeek Harness 换肤插件（Dream Skin for DSH）：8 套 iOS / Linear 式清透冷调的高质感主题 + 弥散光壁纸 + 每皮肤智能背景 + 强调色 +… |
| [dsh-client-ui-skin-deep-whale-manager](https://github.com/small-tailqwq/dsh-deep-whale) | `@smalltailqwq/dsh-client-ui-skin-deep-whale-manager` | 6567 | MIT | Switch between installed skins and tune each skin's own options. Find it under Settings → Skins. |
| [dsh-skin-market](https://github.com/kingofsoysauce/dsh-skin-market) | `dsh-skin-market` | 1964 | MIT | Native skin marketplace and lifecycle manager for DeepSeek Harness |
| [open-sea-skin](https://github.com/d-dev0101/open-sea-skin) | `open-sea-skin` | 1223 | MIT | Realtime WebGPU ocean skin with quick controls for waves, daylight, glass opacity, and an automatic day cycle. |
| [dsh-client-ui-skin-whale-song](https://github.com/zhu1090093659/dsh-web-ui) | `@linxin666/dsh-client-ui-skin-whale-song` | 688 | Apache-2.0 | Hot-pluggable 鲸吟 (whale-song) skin for the dsh web GUI: deep-sea whale-goddess ambience — text-free ocean art backdrop… |
| [dsh-skins](https://github.com/iasiv5/dsh-skins) | `@iasiv5/dsh-skins` | 579 | MIT | DSH Web 皮肤插件：多套品牌皮肤侧栏热切换。 |
| [dsh-skin-studio](https://github.com/realmisakamikoto/dsh-skin-studio) | `dsh-skin-studio` | 319 | AGPL-3.0-only | Desktop-adapted skin studio for DeepSeek Harness: full-interface palettes, wallpaper, per-component media, visual… |
| [dsh-client-ui-skin-maid-whale-webui](https://github.com/yunxiiqwq/dsh-maid-whale-webui) | `@yunxii/dsh-client-ui-skin-maid-whale-webui` | 268 | BSD-3-Clause | Cloud-paper DeepSeek skin for the DSH web GUI with the deepseek-drool character as a quiet page-edge mascot |
| [dsh-plugin-fly-skins](https://github.com/ethanchen669/dsh-plugin-fly-skins) | `@dsh-fly/dsh-plugin-fly-skins` | 229 | MIT | DSH Fly skins: the four Fly palettes (solid / glass / volume / neon) as a standalone DSH bundle + client plugin — token… |
| [dsh-skin-switcher](https://github.com/zhtx2024/dsh-skin-switcher) | `dsh-skin-switcher` | 187 | BSD-3-Clause | DSH Web GUI 皮肤切换器：在设置界面列出已安装的皮肤并提供一键切换按钮。切换通过 ~/.dsh/cordis.patch.yml managed section 实现，DSH 配置监视器热重载，无需重启服务器。 |
| [dsh-skins](https://github.com/neystan/dsh-web-ui) | `@neystan/dsh-skins` | 169 | Apache-2.0 | 皮肤全家桶聚合插件：装它 = 皮肤中心（skin-center）+ 全部皮肤资产（qq98 / ths / xp / blue-fantasy / dragon-heir / minecraft / miku / trading… |
| [dsh-skin-manager](https://github.com/xiaoyangcheng84-svg/dsh-skin-manager) | `dsh-skin-manager` | 158 | MIT | Skin manager for the DSH web GUI: discovers installed skins and switches the active one from a dedicated Settings page… |
| [dsh-skin-token-dashboard](https://github.com/smith-yue/harness-plugin) | `dsh-skin-token-dashboard` | 152 | MIT | DeepSeek Harness desktop skins and durable per-session token usage summaries |
| dsh-skin-center | `dsh-skin-center` | 150 | MIT | DeepSeek Harness Skin as an out-of-tree plugin bundle: 21 skins, one-image custom themes, runtime chrome stamping — no… |
| [dsh-skin-lab](https://github.com/soarguo/dsh-skin-lab) | `dsh-skin-lab` | 147 | MIT | Skin Lab for the DSH Web GUI: official token browser, live try-on (theme override layers), theme freeze, spectrum… |
| [dsh-skin](https://github.com/highjobop/dsh-gadgets) | `dsh-skin` | 114 | MIT | DSH custom appearance plugin: light/dark switch, 15 preset skins, 13 adjustable color roles and font scaling, zh/en… |
| [dsh-skin-win2000](https://github.com/lildanger/dsh-skin-win2000) | `dsh-skin-win2000` | 99 | MIT | Windows 2000 skin for the DSH Web GUI: metric-accurate grey chrome, two-tone gradient title bars, 1px bevels, square… |
| [dsh-skin-rotation](https://github.com/luoyuejun9/dsh-skin-rotation) | `dsh-skin-rotation` | 95 | MIT | Smart skin rotation for DeepSeek Harness: random, sequential, weighted or fixed policies, a per-skin pool, rotation… |
| [dsh-image-skin](https://github.com/hwayn-pixel/dsh-image-skin) | `dsh-image-skin` | 92 | MIT | Region & sticker image skin for the DSH (DeepSeek Harness) web UI - paint the window, center, sidebar, welcome, right… |
| dsh-client-ui-skins | `dsh-client-ui-skins` | 82 | MIT | DSH skin plugin: built-in skins + custom image skins, pure client plugin (no source patch) |
| [dsh-client-ui-skin-orca-maid](https://github.com/liuxiang400/dsh-client-ui-skin-orca-maid) | `@bendix400/dsh-client-ui-skin-orca-maid` | 71 | SEE LICENSE IN LICENSE | A deep-blue whale-girl maid on rectilinear, straight-line-redrawn chrome; functional by day, soothing by night. |
| [skin-codex](https://github.com/marius-patrik/dsh-stack) | `@dsh-stack/skin-codex` | 70 | — | Codex visual skin and branding contributions for DSH Stack. |
| [dsh-skin-alphacoders](https://github.com/sakka6868/dsh-skin) | `dsh-skin-alphacoders` | 57 | MIT | DSH skin plugin: Alphacoders popular wallpapers as the DeepSeek Harness Web GUI background (gallery, search, local… |
| [dsh-client-ui-skin-deep-whale-lm-manager](https://github.com/kmjjkuu/dsh-deep-whaleoptimized-version) | `@kmjjkuu/dsh-client-ui-skin-deep-whale-lm-manager` | 55 | MIT | Switch between installed skins and tune each skin's own options. Find it under Settings → Skins. |
| [dsh-skin-galactic-opera](https://github.com/xmnathan/dsh-skin-galactic-opera) | `dsh-skin-galactic-opera` | 44 | MIT | Unofficial cinematic space-opera dark skin bundle for the DSH Web GUI. |
| dsh-skin-claude-code | `dsh-skin-claude-code` | 39 | MIT | A Claude Code-inspired skin for the DeepSeek Harness web GUI: warm charcoal/cream surfaces, terracotta accent, and… |
| [dsh-skin-material-you](https://github.com/mtaech/melon) | `dsh-skin-material-you` | 32 | MIT | Material You (Material 3) skin for DeepSeek Harness: HCT tonal palette + Maple Mono NF CN typography |
| [dsh-skin-studio](https://github.com/tobewin/dsh-skin-studio) | `@tobewin/dsh-skin-studio` | 30 | MIT | Vibrant, switchable application skins for DeepSeek Harness |
| [dsh-mimo-skin](https://github.com/ronnyjung2021/dsh-mimo-skin) | `dsh-mimo-skin` | 20 | MIT | MiMo skin for the DSH Web GUI: the warm off-white editorial page, hairline black rules, serif reading face and orange… |
| @fengshen/dsh-skin-deepseek | `@fengshen/dsh-skin-deepseek` | 18 | MIT | DeepSeek Harness skin: dynamic aurora, reactive grid, pixel whale, cursor glow. Installable via `dsh plugin --profile… |
| [dsh-skin-collection](https://github.com/nonchalantludens/dsh-skin-collection) | `dsh-skin-collection` | 17 | MIT | Multi-style skin collection for the DeepSeek Harness (dsh) web GUI. Each skin registers a theme (Settings → Appearance… |
| [dsh-skin-studio](https://github.com/wsj060618/dsh-skin-studio) | `@wsj060618/dsh-skin-studio` | 14 | MIT | DeepSeek Harness enhancement plugin: a custom background image with a frosted-glass scrim (backdrop blur), leaving the… |
| @kkabuka/dsh-skin-solar-orbit | `@kkabuka/dsh-skin-solar-orbit` | 13 | MIT | 2.5D Solar System orbit skin for dsh skin center v2 — perspective giant planets, meteors, parallax starfield |
| @kkabuka/dsh-skin-triangle-mesh | `@kkabuka/dsh-skin-triangle-mesh` | 13 | MIT | Dynamic Triangle Mesh skin for dsh skin center v2 |
| @yangshunxiong/dsh-client-ui-skin-bailu-glow | `@yangshunxiong/dsh-client-ui-skin-bailu-glow` | 12 | Apache-2.0 | Hot-pluggable Bailu Glow skin for the dsh web GUI: full-bleed editorial-photo backdrop, rose-gold frosted panes, staged… |
| @liyuk/dsh-skin-feishu | `@liyuk/dsh-skin-feishu` | 10 | MIT | 飞书皮肤包：DeepSeek Harness (DSH) 的飞书/Lark 风格聊天皮肤。依赖 @liyuk/dsh-skin-chatlab-core 基座。 |
| @neystan/dsh-client-ui-skin-miku | `@neystan/dsh-client-ui-skin-miku` | 9 | Apache-2.0 | Hot-pluggable 初音未来 (miku) skin for the dsh web GUI: blue-violet-magenta gradients, frosted glass panels and inputs… |
| [dsh-client-ui-skin-fairy-kingdom](https://github.com/huntdier/dsh-web-ui-custom) | `@huntdier/dsh-client-ui-skin-fairy-kingdom` | 8 | MIT | 妖精国皮肤（本地定制皮肤，壁纸模块） |
| @leeandrew/dsh-ambient-skin | `@leeandrew/dsh-ambient-skin` | 8 | MIT | Native ambient wallpaper, material and semantic-color themes for DeepSeek Harness Web UI. |
| [dsh-skin-engine](https://github.com/xylt369/dsh-skin-engine) | `@yeesy369/dsh-skin-engine` | 8 | MIT | 换肤中心 skin-engine：上传背景图作为 DSH 应用皮肤，叠加多种光标交互动态背景（skin / theme / background plugin for DeepSeek Harness web UI） |
| dsh-skin-picker | `dsh-skin-picker` | 6 | MIT | 换肤：在设置-外观区域下方提供换肤卡片（默认/极光蓝/青竹绿/暮色紫/暖阳橙/自定义配色/自定义背景），localStorage 持久化，刷新页面不丢失。 |
| @liyuk/dsh-skin-chatlab-core | `@liyuk/dsh-skin-chatlab-core` | 5 | MIT | ChatLab 基座：可扩展聊天皮肤插件的核心——皮肤注册表、切换器、装饰逻辑、设置面板。皮肤数据由各皮肤包(如 @liyuk/dsh-skin-feishu)通过 ctx.chatlab.registerSkin 注入。 |
| @liyuk/dsh-skin-dingtalk | `@liyuk/dsh-skin-dingtalk` | 5 | MIT | DingTalk-inspired unofficial visual skin for DeepSeek Harness ChatLab. |
| [dsh-naiwa-skin](https://github.com/reddddddds/dsh-naiwa-skin) | `dsh-naiwa-skin` | 5 | MIT | 奶娃皮肤：DeepSeek Harness web 界面的可插拔皮肤插件 —— 通过主题系统注册独立的 naiwa-light/naiwa-dark 主题（不修改默认皮肤），内置设置开关，卸载即回默认。A pluggable Naiwa… |
| dsh-skin-ruanio | `dsh-skin-ruanio` | 5 | BSD-3-Clause | 自定义图片皮肤生成器（DSH 插件，自包含）：上传图片 → 生成独立皮肤包（@linxin666/dsh-custom-skin）。内嵌皮肤中心核心（/api/skin-center/* state/apply/bundle，源自… |
| @huskky/dsh-skins | `@huskky/dsh-skins` | 3 | MIT | DSH 网页皮肤包：二次元 SAKURA / 赛博 NETRUNNER / 水墨 墨境 三套全页皮肤（含组件装饰尽力层）。 |
| [dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins) | `xierw/dsh-beauty-skins` | — | — | 给 DeepSeek Harness 用的美女系列皮肤：设置里从 哲风壁纸 拉预览网格，点一张即应用，配色从壁纸提取。支持动态壁纸，也保留自定义选图。 |
| [dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin) | `slin-code/dsh-custom-skin` | — | — | Custom wallpapers and translucent skins for DeepSeek Harness Web |
| [deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) | `heigeai/deepseek-harness-skin` | — | — | DeepSeek Harness 换肤系统：21 套内置皮肤 + 一张图生成整套配色的自定义皮肤。数据源驱动，保对比度推导，构建期校验可读性。 |
| [EAC-skin-loader](https://github.com/Ebony-Vinyl/EAC-skin-loader) | `ebony-vinyl/eac-skin-loader` | — | — | DSH UI Skin Loader / DSH UI 皮肤加载器 |
| [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | `laplaceyoung/dsh-qq2006` | — | — | DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材 |
| [dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) | `147228/dsh-xiaoyao-skins` | — | — | 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链 |
| [dsh-moe-lite](https://github.com/KurosawaGeeker/dsh-moe-lite) | `kurosawageeker/dsh-moe-lite` | — | — | 轻量版鲸鱼娘 DSH 皮肤 Lightweight Whale Musume theme for DeepSeek Harness. |
| [dsh-skin](https://github.com/KinGao294/dsh-skin) | `kingao294/dsh-skin` | — | — | Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallpaper with… |
| [Mornye-Observation-Skin](https://github.com/is-limo/Mornye-Observation-Skin) | `is-limo/mornye-observation-skin` | — | — | 莫宁：DeepSeek Harness 非官方观测工作台视觉皮肤 |
| [dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | `small-tailqwq/dsh-deepcel` | — | — | 一款模仿 excel 的 dsh 皮肤 |
| [dsh-web-ui](https://github.com/wryyyds7/dsh-web-ui) | `wryyyds7/dsh-web-ui` | — | — | DeepSeek Harness Web GUI 皮肤集合 — 鲸鱼娘传说定制版（复制自 zhu1090093659/dsh-web-ui） |
| [dsh-dayu-fish-skin](https://github.com/roseion/dsh-dayu-fish-skin) | `roseion/dsh-dayu-fish-skin` | — | — | 🐟 DSH 大肥鱼皮肤：吃白饭的蓝色大肥鱼可爱主题 · DeepSeek Harness 一键安装 |
| [dsh-skin](https://github.com/wei-806206088/dsh-skin) | `wei-806206088/dsh-skin` | — | — | 内置极简主题、主色、文字色、区域文字色、图片 / GIF / 视频换肤、每个背景独立不透明度、可保存的命名预设。所有设置自动持久化，重启后自加载 |
| [dsh-skin-market](https://github.com/keman-ai/dsh-skin-market) | `keman-ai/dsh-skin-market` | — | — | Skin marketplace for DeepSeek Harness — search and install community skins from dsh.a2hmarket.ai right in the settings… |
| [dsh-priestess-skin](https://github.com/FriksD/dsh-priestess-skin) | `friksd/dsh-priestess-skin` | — | — |  |
| [dsh-desktop](https://github.com/huzhicheng/dsh-desktop) | `huzhicheng/dsh-desktop` | — | — | DeepSeek Harness 桌面端：内置 Node 运行时免安装、Harness 在线升级、皮肤与插件管理（社区项目，非官方） |
| [dsh-stock-terminal](https://github.com/linhut/dsh-stock-terminal) | `linhut/dsh-stock-terminal` | — | — | 股市行情皮肤+功能插件：DSH Web GUI 全局交易终端视觉 + 实时行情面板（A股/港股/美股/加密/外汇），自选跑马灯、首字母模糊搜索、持仓盈亏管理 |
| [dsh-devquest](https://github.com/lucky8197/dsh-devquest) | `lucky8197/dsh-devquest` | — | — | 把开发变成 RPG 的 DSH 插件：回合/工具/待办积累 XP、47 枚成就+稀有度、每日/每周挑战、每日抽奖、赛季商店、7 款主题皮肤、多称号、活跃日历+荣誉墙。事件流驱动，装好自动计分。 |
| [dsh-skins](https://github.com/c0de3/dsh-skins) | `c0de3/dsh-skins` | — | — | Mirror of dsh-external/dsh-skins + fix: HARNESS badge inverted-contrast (forks disabled upstream, for issue reference) |
| [dsh-sticky-notes](https://github.com/charrywhite/dsh-sticky-notes) | `charrywhite/dsh-sticky-notes` | — | — | Sticky notes for DeepSeek Harness: draggable notes with text & image support, 9 skins, and AI-powered read/write… |
| [dsh-skin-universe](https://github.com/springbrand-lab/dsh-skin-universe) | `springbrand-lab/dsh-skin-universe` | — | — | Themes and web GUI plugins for DeepSeek Harness: task board, Git graph, file panel, SSH, mobile remote, companion, live… |
| [dskin](https://github.com/dancingmemory/dskin) | `dancingmemory/dskin` | — | — | DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / living pixel… |
| [dsh-skin-schierke](https://github.com/unpain/dsh-skin-schierke) | `unpain/dsh-skin-schierke` | — | — | Schierke forest-spirit grimoire skin for the DeepSeek Harness web UI |
| [marathon-like-deepseek-harness-skin](https://github.com/yasneg616/marathon-like-deepseek-harness-skin) | `yasneg616/marathon-like-deepseek-harness-skin` | — | — | Marathon-inspired industrial DeepSeek Harness skin with palette-driven motion, random Max effects, and compact… |
| [dsh-chat-skin](https://github.com/1m01m0/dsh-chat-skin) | `1m01m0/dsh-chat-skin` | — | — | DeepSeek Harness client plugin: chat wallpaper & skins for the Web GUI — 6 presets, custom wallpaper, native settings… |
| [deepseek-harness-plugin-image-skin](https://github.com/fufankeji/deepseek-harness-plugin-image-skin) | `fufankeji/deepseek-harness-plugin-image-skin` | — | — | Turn any image into an installable DeepSeek Harness Web skin plugin. |
| [dsh-skin-pack](https://github.com/keman-ai/dsh-skin-pack) | `keman-ai/dsh-skin-pack` | — | — | A full set of skins for DeepSeek Harness — one repository, each theme installable on its own |
| [dsh-mario-pixel-skin](https://github.com/EachSheep/dsh-mario-pixel-skin) | `eachsheep/dsh-mario-pixel-skin` | — | — | Unofficial Mario-inspired pixel-adventure skin for DeepSeek Harness. |
| [dsh-skin-claude-code](https://github.com/le-soleil-se-couche/dsh-skin-claude-code) | `le-soleil-se-couche/dsh-skin-claude-code` | — | — | 完美复刻 Claude Code 皮肤，纪念我的 Vibe Coding 白月光。 |
| [dsh-qq2007-skin](https://github.com/LeemanCheung/dsh-qq2007-skin) | `leemancheung/dsh-qq2007-skin` | — | — | QQ 2007-inspired retro messenger skin for the DeepSeek Harness Web GUI |
| [dsh-skin-master](https://github.com/Lzhimie/dsh-skin-master) | `lzhimie/dsh-skin-master` | — | — | DeepSeek Harness 皮肤大师：主题壁纸/自定义皮肤插件 —— 全局背景图片/视频、毛玻璃、输入框背景、弹出框毛玻璃、滤镜、AI 回复文本与消息气泡颜色 |
| [dsh-deep-diving-skin](https://github.com/Menghuan1918/dsh-deep-diving-skin) | `menghuan1918/dsh-deep-diving-skin` | — | — | 替换“深度求索中”为任意你想要的文本，比如：少女祈祷中...... |
| [dsh-deep-whale-desktop](https://github.com/shixun926-dotcom/dsh-deep-whale-desktop) | `shixun926-dotcom/dsh-deep-whale-desktop` | — | — | DSH 桌面端（Electron）鲸鱼娘皮肤二创整理版：深海女仆工坊 + 虎鲸链路 + 皮肤管理器｜非原创，仅供非商业使用 |
| [dsh-internet-angel-desktop](https://github.com/Small-tailqwq/dsh-internet-angel-desktop) | `small-tailqwq/dsh-internet-angel-desktop` | — | — | 一款基于主播女孩重度依赖创建的 适用于 DSH 的 实验性主题皮肤 / Unofficial pixel desktop skin for DSH Web inspired by NEEDY GIRL OVERDOSE… |
| [dsh-skin-toggle](https://github.com/tiantyu/dsh-skin-toggle) | `tiantyu/dsh-skin-toggle` | — | — | 皮肤管理🐋切换按钮，用于 DeepSeek Harness (DSH)网页 GUI 的皮肤管理。纯客户端插件。 |
| [dsh-skin-asuka](https://github.com/unpain/dsh-skin-asuka) | `unpain/dsh-skin-asuka` | — | — | 面向 DSH Web UI 的明日香 / EVA 二号机主题皮肤 |
| [deepseek-harness-animated-skin](https://github.com/bangbang-PPT/deepseek-harness-animated-skin) | `bangbang-ppt/deepseek-harness-animated-skin` | — | — | DeepSeek Harness的动态皮肤，上传静态或者动态webm视频格式，可以出现在界面上 |
| [dsh-skin-toggle](https://github.com/Btmy520/dsh-skin-toggle) | `btmy520/dsh-skin-toggle` | — | — | DeepSeek Harness 皮肤切换按钮：会话头部胶囊按钮，一键切换原版与深海女仆工坊皮肤 |
| [dsh-genshin-skin](https://github.com/bupianlizhugui/dsh-genshin-skin) | `bupianlizhugui/dsh-genshin-skin` | — | — | 可以直接给deepseek harness换原神主题 |
| [dsh-skin](https://github.com/changan0617/dsh-skin) | `changan0617/dsh-skin` | — | — | DeepSeek Harness homepage-style chat background skin: fluid + dot grid + digitile whale |
| [dsh-modern-skin](https://github.com/gavinlee9051/dsh-modern-skin) | `gavinlee9051/dsh-modern-skin` | — | — | DeepSeek Harness 现代皮肤插件 · 5 套可切换配色 · 归档会话管理 · 跨平台一键安装 参考 Codex / Claude Code 的现代 Agent 客户端视觉：暖灰画布 + 白色分层卡片、墨水按钮 +… |
| [dsh-skin-luoxiaohei](https://github.com/haohaozi328-arch/dsh-skin-luoxiaohei) | `haohaozi328-arch/dsh-skin-luoxiaohei` | — | — | DeepSeek harness 罗小黑主题 |
| [dsh-chatgpt-desktop](https://github.com/jjy114514/dsh-chatgpt-desktop) | `jjy114514/dsh-chatgpt-desktop` | — | — | DeepSeek Harness ChatGPT desktop skin plugin: three disguised models, six-level effort slider, Sol-exclusive Liang skin |
| [dsh-chat-skin](https://github.com/LQH-A-A-O/dsh-chat-skin) | `lqh-a-a-o/dsh-chat-skin` | — | — | DSH 会话窗口聊天化：聊天 / 游戏（视觉小说）/ 极简 + 壁纸玻璃；纯 CSS 不改逻辑 |
| [dsh-integrated-pack](https://github.com/mawen0317/dsh-integrated-pack) | `mawen0317/dsh-integrated-pack` | — | — | 开箱即用的 DeepSeek Harness 社区整合包 — 一键安装精选插件、优化配置和自定义皮肤 |
| [dsh-skin](https://github.com/Necthak/dsh-skin) | `necthak/dsh-skin` | — | — | Skin/theme tool for the DeepSeek Harness Web GUI (colors + bundled background images) |
| [dsh-sky-skin](https://github.com/QinpanWan/dsh-sky-skin) | `qinpanwan/dsh-sky-skin` | — | — | Sky: Children of the Light themed skin for DeepSeek Harness web UI - light children on a glowing star map, candlelight… |
| [dsh-skin-switcher](https://github.com/tsdfy/dsh-skin-switcher) | `tsdfy/dsh-skin-switcher` | — | — | Skin switcher for DeepSeek Harness web UI: one-click theme switching with auto-discovery of community skins |
| [dsh-gbc-ui](https://github.com/U1s1-king/dsh-gbc-ui) | `u1s1-king/dsh-gbc-ui` | — | — | 适用于DeepSeek Harness Web GUI的GirlsBangCry 皮肤 |
| [dsh-skin-switch](https://github.com/unpain/dsh-skin-switch) | `unpain/dsh-skin-switch` | — | — | A full-skin manager for DeepSeek Harness Web. |
| [dsh-macos-skin](https://github.com/wangkuntian/dsh-macos-skin) | `wangkuntian/dsh-macos-skin` | — | — |  |
| [dsh-wx-skin](https://github.com/wangxilhy23/dsh-wx-skin) | `wangxilhy23/dsh-wx-skin` | — | — | deepseek harness 皮肤插件。支持选择本地目录下的图片作为背景设置 |
| [dsh-home-migrate](https://github.com/ygcdsj/dsh-home-migrate) | `ygcdsj/dsh-home-migrate` | — | — | 一个插件，把本地的 DSH 配置（皮肤、预设、注入包）打包成文件，到另一台 Windows 上直接还原。 |
| [dsh-kafka-ui](https://github.com/54088lp/dsh-kafka-ui) | `54088lp/dsh-kafka-ui` | — | — | Kafka (Honkai: Star Rail) theme skin for DeepSeek Harness web GUI |
| [dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) | `adamplatin123/dsh-tonghuashun` | — | — | DSH harness 客户端插件：同花顺行情终端风格皮肤 + 代码量 K 线行情面板（ui-skin-ths + ui-market） |
| [dsh-tp7-skin](https://github.com/adamwdff/dsh-tp7-skin) | `adamwdff/dsh-tp7-skin` | — | — | Turbo Pascal 7.0 blue-screen skin for the DeepSeek Harness web GUI |
| [dsh-linpianpian-skin](https://github.com/AiNaer/dsh-linpianpian-skin) | `ainaer/dsh-linpianpian-skin` | — | — | 一个用于deepseek harness的林翩翩主题外观皮肤 |
| [dsh-skin-studio](https://github.com/daboge-beach/dsh-skin-studio) | `daboge-beach/dsh-skin-studio` | — | — | 🎨 Create, try on & share living DeepSeek Harness skins — no code required. 无代码创建/试穿/分享 DSH 动态皮肤 |
| [dsh-skin-whalegirl](https://github.com/deepseek-club/dsh-skin-whalegirl) | `deepseek-club/dsh-skin-whalegirl` | — | — | 深求社区主题皮肤 · DeepSeek.Club themed skin for DeepSeek Harness Web GUI：3D 鲸鱼科技环背景 + 社区形象角色，热插拔客户端插件，CC BY-NC-SA 4.0 |
| [dsh-ui-skins](https://github.com/edwardyang0011/dsh-ui-skins) | `edwardyang0011/dsh-ui-skins` | — | — | DeepSeek Harness Skin Plugin |
| [dsh-photo-skins](https://github.com/frankxxxxue/dsh-photo-skins) | `frankxxxxue/dsh-photo-skins` | — | — | A DeepSeek Harness plugin that turns your photos into Web GUI skins — auto-extracted accent colors, all files stay… |
| [dsh-ui-skin](https://github.com/huabai-flowerwhite/dsh-ui-skin) | `huabai-flowerwhite/dsh-ui-skin` | — | — | 面向 DeepSeek Harness 的 **UI 皮肤插件**：在 UI 下方注入壁纸 / 视频背景，并把 DSH 整个界面（含侧栏）的表面背景烘焙为半透明（毛玻璃）让皮肤透出。支持拖动裁剪缩放、历史皮肤记录与可拖动悬浮窗；自定义皮肤支… |
| [dsh-butler-atelier](https://github.com/juliye2025/dsh-butler-atelier) | `juliye2025/dsh-butler-atelier` | — | — | DeepSeek Harness Web GUI 深海男仆工坊主题皮肤 |
| [dsh-skin-studio](https://github.com/LeemanCheung/dsh-skin-studio) | `leemancheung/dsh-skin-studio` | — | — | A local token-safe DSH theme generator, editor, auditor, and exporter |
| [dsh-skins](https://github.com/leo-aba/dsh-skins) | `leo-aba/dsh-skins` | — | — | AI-generated skin/theme plugins for DeepSeek Harness web UI — 樱花 Sakura / 银狼 Silver Wolf / 蕾米艾尔 Remielle Dan，dsh… |
| [dsh-skin-claude-code](https://github.com/lucasx001/dsh-skin-claude-code) | `lucasx001/dsh-skin-claude-code` | — | — | Claude Code-inspired skin for the DeepSeek Harness web GUI |
| [dsh-skin20260814](https://github.com/ManuSpurs/dsh-skin20260814) | `manuspurs/dsh-skin20260814` | — | — | dsh-skin 增强版：为 DeepSeek Harness 提供皮肤切换与自定义背景壁纸。在原版基础上修复了两处问题——① 大图/特殊格式上传无响应（改用 createImageBitmap 直接解码、增加处理中与错误提示）；②… |
| [dsh-skins](https://github.com/Moeblack/dsh-skins) | `moeblack/dsh-skins` | — | — | DSH 换肤插件镜像 + 夕港（harbor）皮肤 \| Mirror of dsh-external/dsh-skins + harbor (夕港) dusk-harbor skin |
| [deepseek-harness-academy-skin](https://github.com/mofinnear/deepseek-harness-academy-skin) | `mofinnear/deepseek-harness-academy-skin` | — | — | DeepSeek Harness 桌面版「星海书院」皮肤插件（非官方）：书院背景、金边面板、角色陪伴栏与表情切换 |
| [chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) | `moonshadow1976/chiral-pulse` | — | — | Death Stranding skin for DeepSeek Harness UI + live heartbeat feed that pulses on agent thinking/tool execution. Whale… |
| [dsh-skin-kit](https://github.com/mysn777/dsh-skin-kit) | `mysn777/dsh-skin-kit` | — | — | A skin toolbox for DeepSeek Harness with 10 built-in wallpapers, live tuning, and image/video DIY skins. |
| [dsh-ide-layout-skin](https://github.com/myzane678/dsh-ide-layout-skin) | `myzane678/dsh-ide-layout-skin` | — | — | Abyssal maid atelier skin for the DSH Web GUI, designed to pair with dsh-ide-layout |
| [dsh-beautify](https://github.com/nlqh7/dsh-beautify) | `nlqh7/dsh-beautify` | — | — | DeepSeek Harness Dream Skin，DSH theme plugin: Dream Skin color presets with a settings-page switcher. |
| [dsh-skin-prts](https://github.com/QinpanWan/dsh-skin-prts) | `qinpanwan/dsh-skin-prts` | — | — | 明日方舟 PRTS 终端皮肤 for DeepSeek Harness Web UI — 深色工业终端 / 航空控制台，直角面板 + 硬阴影 + 青强调色 #11AFCF。纯 CSS client 侧皮肤。CC BY-SA 4.0 |
| [dsh-skin-mari](https://github.com/unpain/dsh-skin-mari) | `unpain/dsh-skin-mari` | — | — | Mari Makinami Unit-08 optical-lab skin for DeepSeek Harness |
| [dsh-skin-rei](https://github.com/unpain/dsh-skin-rei) | `unpain/dsh-skin-rei` | — | — |  |
| [dsh-skins](https://github.com/unpain/dsh-skins) | `unpain/dsh-skins` | — | — | Curated gallery and machine-readable catalog for DeepSeek Harness Web UI skins |
| [dsh-sanrio-skin](https://github.com/weibubao030/dsh-sanrio-skin) | `weibubao030/dsh-sanrio-skin` | — | — | Sanrio DSH skin for DeepSeek Harness |
| [dsh-skin-rotator](https://github.com/wensincai/dsh-skin-rotator) | `wensincai/dsh-skin-rotator` | — | — | A background image carousel plugin based on the https://github.com/kingOfSoySauce/dsh-skin-market project. |
| [dsh-550c-skin](https://github.com/yannicksong0106/dsh-550c-skin) | `yannicksong0106/dsh-550c-skin` | — | — | 550C 皮肤：把 DeepSeek Harness 的界面换成 550C 控制台（四套磷光配色 / 扫描线 / 等宽 / 读数栏）· 550C skin for DSH |
| [dsh-chat-bubble-skin](https://github.com/yujingqh/dsh-chat-bubble-skin) | `yujingqh/dsh-chat-bubble-skin` | — | — | DSH Web 气泡聊天皮肤插件 — 社交软件风格气泡对话 + 主题配色 + 可读代码块 |
| [zc](https://github.com/Zcc6657/zc) | `zcc6657/zc` | — | — | 个人项目：main 为主项目（Python 工具）；dsh-deep-whale 分支为 DeepSeek Harness 鲸鱼娘主题皮肤系列（maid-atelier 深海女仆工坊 / orca-link 虎鲸链路 +… |
| [dsh-skin-blue-whale](https://github.com/zenghuizhu69-hub/dsh-skin-blue-whale) | `zenghuizhu69-hub/dsh-skin-blue-whale` | — | — | dsh Web UI skin: DeepSeek blue-whale theme with official gradient and leaping whale art (dsh plugin) |
| [dsh-pixel-ui](https://github.com/zhang66633/dsh-pixel-ui) | `zhang66633/dsh-pixel-ui` | — | — | DeepSeek Harness 像素皮肤（Agent Xi 风格）：四个主题一键切换——像素·木屋 / 像素·羊皮纸 / 像素·暖阳 / 像素·终端绿，随时可切回现代默认 UI。 |
| [dsh-free-skins](https://github.com/0928OYX/dsh-free-skins) | `0928oyx/dsh-free-skins` | — | — | DeepSeek Harness (DSH) 界面皮肤插件：7 款原创免费皮肤 + 皮肤画廊 + 一键应用免重启 + 皮肤不透明度 + 自定义对话区背景（CC BY-NC-SA 4.0，0928OYX） |
| [deepseek-harness-skin](https://github.com/chujianyun/deepseek-harness-skin) | `chujianyun/deepseek-harness-skin` | — | — | DeepSeek Harness 壁纸插件 |
| [dsh-cho-kaguya-plugin-public](https://github.com/DaydreAmRing/dsh-cho-kaguya-plugin-public) | `daydreamring/dsh-cho-kaguya-plugin-public` | — | — | DSH皮肤插件、有超时空辉夜姬概念元素 |
| [dsh-skin-diablo-dark](https://github.com/dengxuhui/dsh-skin-diablo-dark) | `dengxuhui/dsh-skin-diablo-dark` | — | — | DeepSeek Harness Web GUI 暗黑·熔火皮肤插件（Diablo dark-gothic skin） |
| [deepseek-harness-skin](https://github.com/fendouai/deepseek-harness-skin) | `fendouai/deepseek-harness-skin` | — | — |  |
| [dsh-whale-voice](https://github.com/gollasmari87-commits/dsh-whale-voice) | `gollasmari87-commits/dsh-whale-voice` | — | — | 鲸声 · DSH 非官方语音交互修复与海洋动态皮肤 |
| [deepseek-harness-skin](https://github.com/goodpostidea-tech/deepseek-harness-skin) | `goodpostidea-tech/deepseek-harness-skin` | — | — | deepseek-harness-skin |
| [dsh-skin-argentina](https://github.com/henrychenhao/dsh-skin-argentina) | `henrychenhao/dsh-skin-argentina` | — | — | 梅西 阿根廷皮肤 |
| [dsh-image-skin](https://github.com/Jack-sun-learner/dsh-image-skin) | `jack-sun-learner/dsh-image-skin` | — | — | DSH 图片皮肤插件：导入 PNG/JPG/WebP 自动生成主题配色，可选 Q 版宠物（程序化/AI 生图） |
| [dsh-qq-skin](https://github.com/kevinnn04/dsh-qq-skin) | `kevinnn04/dsh-qq-skin` | — | — | DeepSeek Harness Web UI — 古早QQ 聊天框皮肤包 (old-QQ chat skin for DSH) |
| [dsh-skinctl](https://github.com/lovetpy/dsh-skinctl) | `lovetpy/dsh-skinctl` | — | — | DSH (DeepSeek Harness) Web GUI 皮肤管理器：运行时扫描已装皮肤，设置页一键热切换 \| Lightweight runtime-scanning skin manager |
| [dsh-skin-picker](https://github.com/Lzh-12/dsh-skin-picker) | `lzh-12/dsh-skin-picker` | — | — | DeepSeek Harness 换肤插件：10 套预设皮肤 + 自然语言换肤 + 自定义背景图片 + 界面控件联动，设置→通用→「皮肤」行内切换，settings.yaml 跨设备同步。 |
| [dsh-my-plugin](https://github.com/NoMindSama/dsh-my-plugin) | `nomindsama/dsh-my-plugin` | — | — | DeepSeek Harness (DSH) Web 超天酱皮肤插件 |
| [dsh-monash-skin](https://github.com/QinpanWan/dsh-monash-skin) | `qinpanwan/dsh-monash-skin` | — | — | Monash University 品牌皮肤 for dsh Web UI — 蒙纳士蓝校园展示皮肤（CC BY-SA 4.0） |
| [dsh-skin-digital-arcade](https://github.com/RizenHNT/dsh-skin-digital-arcade) | `rizenhnt/dsh-skin-digital-arcade` | — | — | Rizen Signal Console — digital arcade HUD skin for DeepSeek Harness Web GUI: neon cyan/violet/magenta palette, pixel… |
| [dsh-amyth](https://github.com/sakuraa1wadawd/dsh-amyth) | `sakuraa1wadawd/dsh-amyth` | — | — | 爱弥斯 · 电子幽灵 —— DeepSeek Harness Web 鸣潮爱弥斯同人皮肤 |
| [dsh-skin-family](https://github.com/smdk000/dsh-skin-family) | `smdk000/dsh-skin-family` | — | — | DSH 皮肤全家桶:8 个皮肤家族 × 15 套明暗主题 + 设置页皮肤中心,官方 --dsw-* token 机制,WCAG AA。A family of skins for DeepSeek Harness Web. |
| [dsh-skin-prts](https://github.com/tenebris173/dsh-skin-prts) | `tenebris173/dsh-skin-prts` | — | — | PRTS —— DSH (DeepSeek Harness) UI 皮肤：罗德岛终端风格，直角切角 + 黑色发丝线 + 黄黑警示条，纸面/终端两套底。有控制台则进卡片墙，没控制台也能自立运行；「皮肤」下拉第一项「原生」即还原默认皮肤。 |
| [dsh-xiaoxinxin-skin](https://github.com/tinnyxx/dsh-xiaoxinxin-skin) | `tinnyxx/dsh-xiaoxinxin-skin` | — | — | DeepSeek Harness WebUI 蜡笔小新主题皮肤（基于 dsh-deep-whale maid-atelier 工程） |
| [dsh-skin-showcase](https://github.com/Tully-L/dsh-skin-showcase) | `tully-l/dsh-skin-showcase` | — | — | DeepSeek Harness 皮肤策展：从近七千个社区插件里筛出真正有视觉内容的皮肤 |
| [dsh-custom-skin](https://github.com/v587d/dsh-custom-skin) | `v587d/dsh-custom-skin` | — | — | Theme, fonts settings for DSH web and desktop. |
| [dsh-skin-amis](https://github.com/wanzhiwei5/dsh-skin-amis) | `wanzhiwei5/dsh-skin-amis` | — | — | 鸣潮爱弥斯主题皮肤: 粉白配色+赛博霓虹装饰的 DeepSeek Harness Web GUI 皮肤 / Amis-inspired pink-white skin for DSH Web UI |
| [Genshen-Varisha-Skin](https://github.com/WPH666-py/Genshen-Varisha-Skin) | `wph666-py/genshen-varisha-skin` | — | — | 原神 瓦蕾莎（Varisha）动态皮肤 — 3 张壁纸可切换 / 点击释放元素爆发语音与特效 / DSH 动态插件 / VSCode 扩展 / 桌面桌宠 / DeepKing |
| [dsh-skin-kit](https://github.com/wsljc/dsh-skin-kit) | `wsljc/dsh-skin-kit` | — | — | DeepSeek Harness 皮肤引擎：token 覆盖层 + 可插拔皮肤，内置 P5R 漫画 / 纸白纸墨 / 终端绿 |
| [dsh-skin-yanisuu](https://github.com/xassuyge003-ui/dsh-skin-yanisuu) | `xassuyge003-ui/dsh-skin-yanisuu` | — | — | DeepSeek Harness Web 客户端换肤方案：毛玻璃壁纸 + 控制抽屉（模糊滑条/自动轮播/本地上传） |
| [dsh-zhangxuefeng-skin](https://github.com/XQ-zheng/dsh-zhangxuefeng-skin) | `xq-zheng/dsh-zhangxuefeng-skin` | — | — | DeepSeek Harness 张雪峰半透明磨砂壁纸皮肤技能（Agent Skill） |
| [dsh-glass-skin](https://github.com/yesang0924-beep/dsh-glass-skin) | `yesang0924-beep/dsh-glass-skin` | — | — | Glass Skin · 玻璃肌肤 — 给 DeepSeek Harness Web UI 的玻璃材质主题：材质冻结、壁纸是唯一变量。 |
| @captain1275/dsh-client-ui-skin-aurora | `@captain1275/dsh-client-ui-skin-aurora` | — | BSD-3-Clause | 极光（Aurora）皮肤：支持自定义背景图片（URL / 透明度 / 模糊）与极光渐变背景，半透明毛玻璃面板，浅色 / 深色两套调色板。 |
| @captain1275/dsh-client-ui-skin-miku | `@captain1275/dsh-client-ui-skin-miku` | — | Apache-2.0 | Hot-pluggable 初音未来 (miku) skin for the dsh web GUI: blue-violet-magenta gradients, frosted glass panels and inputs… |
| @captain1275/dsh-client-ui-skin-trading | `@captain1275/dsh-client-ui-skin-trading` | — | Apache-2.0 | Hot-pluggable stock-trading skin for the dsh web GUI: live ticker tape, longbridge/fun-ticker quote feeds… |
| [dsh-client-ui-skin-verdandi](https://github.com/sddft97/dsh-client-ui-skin-verdandi) | `@hjbztlbr/dsh-client-ui-skin-verdandi` | — | MIT | Verdandi White Vow skin for the DSH Web GUI: deep crimson navigation, bridal-white workspace, soft-gold knight details… |
| [dsh-client-ui-skin-815](https://github.com/lengduan/dsh-815-skin) | `@lengduan/dsh-client-ui-skin-815` | — | MIT | 1945 终战皮肤：陈坚《公元一九四五年九月九日九时》作为 DeepSeek Harness Web 背景 |
| @levisbale0824/dsh-skin-eason-chen | `@levisbale0824/dsh-skin-eason-chen` | — | BSD-3-Clause | Eason Chen concert-photo skin for the DeepSeek Harness Web UI: full-viewport stage backdrop (cover), translucent… |
| @linxin666/dsh-client-ui-skin-matrix | `@linxin666/dsh-client-ui-skin-matrix` | — | Apache-2.0 | Matrix-style night-friendly dark skin for the dsh web GUI: near-black green background, ink-green monospace text… |
| @linxin666/dsh-client-ui-skin-miku | `@linxin666/dsh-client-ui-skin-miku` | — | BSD-3-Clause | Hot-pluggable 初音未来 (miku) skin for the dsh web GUI: blue-violet-magenta gradients, frosted glass panels and inputs… |
| @linxin666/dsh-client-ui-skin-trading | `@linxin666/dsh-client-ui-skin-trading` | — | Apache-2.0 | Hot-pluggable stock-trading skin for the dsh web GUI: live ticker tape, longbridge/fun-ticker quote feeds… |
| [dsh-skin-chatlab](https://github.com/liyuk/dsh-skin-chatlab) | `@liyuk/dsh-skin-chatlab` | — | MIT | ChatLab 聚合包：一键安装基座 + 飞书、Slack、企业微信、钉钉、Telegram、WhatsApp 六套独立皮肤包。 |
| @liyuk/dsh-skin-slack | `@liyuk/dsh-skin-slack` | — | MIT | Slack-inspired unofficial visual skin for DeepSeek Harness ChatLab. |
| @liyuk/dsh-skin-telegram | `@liyuk/dsh-skin-telegram` | — | MIT | Telegram-inspired unofficial visual skin for DeepSeek Harness ChatLab. |
| @liyuk/dsh-skin-wecom | `@liyuk/dsh-skin-wecom` | — | MIT | WeCom-inspired unofficial visual skin for DeepSeek Harness ChatLab. |
| @liyuk/dsh-skin-whatsapp | `@liyuk/dsh-skin-whatsapp` | — | MIT | WhatsApp-inspired unofficial visual skin for DeepSeek Harness ChatLab. |
| @neystan/dsh-client-ui-skin-trading | `@neystan/dsh-client-ui-skin-trading` | — | Apache-2.0 | Hot-pluggable stock-trading skin for the dsh web GUI: live ticker tape, longbridge/fun-ticker quote feeds… |
| [dsh-client-ui-skin-claude](https://github.com/pakiknowledge/dsh-client-ui-skin-claude) | `@pakiknowledge/dsh-client-ui-skin-claude` | — | MIT | Claude-style skin for the dsh web GUI — warm-black canvas, clay accent, Anthropic Sans UI / Serif body font modes… |
| [dsh-client-ui-skin-qingxiao](https://github.com/taoser258/dsh-client-ui-skin-qingxiao) | `@taosee258/dsh-client-ui-skin-qingxiao` | — | CC-BY-NC-SA-4.0 | Qingxiao (Wuthering Waves) themed skin with ice-blue/jade/moon-white palette, sword-light motes and user-swappable… |
| [dsh-skin-velocity](https://github.com/restlessnight/dsh-skin-velocity) | `@victor.smile/dsh-skin-velocity` | — | MIT | Velocity Grid automotive HUD skin and trusted runtime effects for the DSH Web GUI. |
| [dsh-skin-plugin](https://github.com/ylqit/dsh-skin-plugin) | `@ylq77147/dsh-skin-plugin` | — | MIT | Declarative component visuals and a safe theme studio for DeepSeek Harness WebUI |
| [dsh-neo-skin](https://github.com/0nt-one/dsh-neo-skin) | `0nt-one/dsh-neo-skin` | — | — | Neo-brutalism skin with two switchable schemes (Blue Command / Aged Newspaper), hard shadows, sharp corners, and… |
| [dsh-skin-tuner](https://github.com/1207627875/dsh-skin-tuner) | `1207627875/dsh-skin-tuner` | — | — | Standalone appearance tuner for DeepSeek Harness (dsh): background occlusion, backdrop blur, composer frost, bubble… |
| [ikun-theme-skin](https://github.com/AKS1st/ikun-theme-skin) | `aks1st/ikun-theme-skin` | — | — | IKUN fandom skin for the DSH Web UI: star-blue and black-gold palettes in the system theme list, full-screen photo… |
| [dsh-client-ui-skin-real-madrid](https://github.com/alexfengrui/dsh-client-ui-skin-real-madrid) | `dsh-client-ui-skin-real-madrid` | — | SEE LICENSE IN LICENSE | Real Madrid dual-mode skin: Bernabeu night stadium for dark, white-kit pinstripes with crest and 1902 layers for light… |
| [MahoutsukaiNoYoru-DSH-Skin](https://github.com/AvalonskyAfar/MahoutsukaiNoYoru-DSH-Skin/tree/master/skin) | `avalonskyafar/mahoutsukainoyoru-dsh-skin` | — | — | A Witch on the Holy Night (Mahoutsukai no Yoru) visual-novel theme for the DeepSeek Harness Web UI, with original-style… |
| [dsh-yexueqing-skin](https://github.com/Bancott/dsh-yexueqing-skin) | `bancott/dsh-yexueqing-skin` | — | — | Ye Xueqing (Justice Online) theme skin: two switchable artwork variants (wisteria courtyard / snowy river) rendered as… |
| [dsh-client-ui-skins](https://github.com/caoyiwei850/dsh-client-ui-skins) | `caoyiwei850/dsh-client-ui-skins` | — | — | Skin plugin for the DSH Web UI: 4 built-in skins plus custom image skins with the photo as a full-interface background… |
| [dsh-client-ui-skin-alice-greyrat](https://github.com/ChengX0721/dsh-client-ui-skin-alice-greyrat) | `chengx0721/dsh-client-ui-skin-alice-greyrat` | — | — | A pale rose-and-gold Mushoku Tensei skin for the DSH web GUI: an arcane sigil and two full-body Eris figures behind the… |
| [dsh-uiskin-theme](https://github.com/chouxiaohuai/dsh-uiskin-theme) | `chouxiaohuai/dsh-uiskin-theme` | — | — | A Blue Glass ocean-fantasy skin for DeepSeek Harness Web: crisp ocean backdrop, glass bubbles, an ocean sidebar with a… |
| [claude-style-skin](https://github.com/taiyakioffical/claude-style-skin) | `claude-style-skin` | — | MIT | Claude Style — Anthropic warm-editorial skin for the dsh web GUI, distilled from anthropic.com |
| [dsh-protect-eyes-skin](https://github.com/CynicismBoyJYD/dsh-protect-eyes-skin) | `cynicismboyjyd/dsh-protect-eyes-skin` | — | — | An eye-friendly green skin that reskins the whole DeepSeek Harness Web UI to a low-blue-light green palette, with… |
| [dsh-client-ui-skin-bayern](https://github.com/dirtywork22/dsh-client-ui-skin-bayern) | `dirtywork22/dsh-client-ui-skin-bayern` | — | — | Bayern Munich skin for the dsh web GUI: home-red/away-white canvases, real match-photo backdrops for 19 first-team… |
| [dsh-ui-skin-switcher](https://github.com/domitor-syh/dsh-ui-skin-switcher) | `@domitor-syh/dsh-ui-skin-switcher` | — | MIT | Replaces the model button with a Claude Desktop-style model and reasoning-effort switcher, with per-model effort… |
| [harness-plugins](https://github.com/dragonfeng12138/harness-plugins) | `dragonfeng12138/harness-plugins` | — | — | DSH plugins collection — dsh-skins (ACG appearance pack) |
| dsh-angelsanddemon-fatesumphony-skin | `dsh-angelsanddemon-fatesumphony-skin` | — | MIT | DeepSeek Harness Web 皮肤：《弹丸论破：天魔命曲》同人游戏素材全量皮肤。 |
| [dsh-client-liang-intensity-skin](https://github.com/kingofsoysauce/dsh-liang-skin) | `dsh-client-liang-intensity-skin` | — | — | 滑动变祖：an opt-in adaptive reasoning slider skin for DeepSeek Harness |
| [dsh-client-vpet-skin](https://github.com/lorisyounger/dsh-vpet-skin) | `dsh-client-vpet-skin` | — | — | VPet：five illustrated forms with an adaptive reasoning slider for DeepSeek Harness |
| [dsh-diy-skin](https://github.com/chang-an2002/dsh-diy-skin) | `dsh-diy-skin` | — | MIT | DSH皮肤插件，可添加壁纸及装饰图片（支持gif），自定义UI配色，余额显示功能，适用于桌面端应用。 |
| [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) | `dsh-homepage-skin` | — | MIT | DeepSeek Harness homepage-style background skin: WebGL fluid, dot grid and digital whale. Dark and light variants… |
| [dsh-leafy-skin](https://github.com/badai147/dsh-leafy-skin) | `dsh-leafy-skin` | — | MIT | Leafy — an eye-friendly green skin that folds the DSH Web GUI's --dsw-* palette into leafy greens (light + dark). |
| [dsh-myskin](https://github.com/wtstarmark/dsh-myskin) | `dsh-myskin` | — | MIT | DSH 全兼容皮肤可视化编辑框架：可视化自定义 + 「皮肤管理」，可以随心设计你的专属皮肤，并通过分发 .dshframework 皮肤包和你的小伙伴们分享。非侵入式、可逆覆盖层，适配 DSH 0.1.7-rc.2 /… |
| dsh-odette-skin | `dsh-odette-skin` | — | CC-BY-NC-SA-4.0 | Odette 冰雪梦幻主题：深/浅双模式 UI 美化皮肤（背景图 + 主题 token + 毛玻璃） |
| [dsh-pixel-skin](https://github.com/zhuifengqug/pixel-skin) | `dsh-pixel-skin` | — | MIT | DeepSeek Harness 的宝可梦风像素皮肤：8 色主题 + 自定义强调色、像素字体与缩放、HP 段与 GBA 窗框、回合状态句替换；桌面端（Electron/Windows 自绘标题栏）适配。 |
| [dsh-qq-skin](https://github.com/lispking/dsh-qq-skin) | `dsh-qq-skin` | — | MIT | QQ 风格皮肤插件 for DeepSeek Harness: overlays a Tencent QQ messenger look on the Web client through the official theme token… |
| [dsh-skin-dark-gold](https://github.com/fengguang10086/dsh-skin-dark-gold) | `dsh-skin-dark-gold` | — | MIT | Dark-gold particle skin for the DeepSeek Harness Web GUI: 暗金背景 + 漂浮金色粒子 + 暖白黄文字 |
| dsh-skins | `dsh-skins` | — | MIT | ACG-style appearance pack for DSH web: token theme families with native light/dark pairs plus full CSS skins, both… |
| [dsh-trae-skin](https://github.com/ronnyjung2021/dsh-trae-skin) | `dsh-trae-skin` | — | MIT | Trae skin for the DSH Web GUI: the near-black page, mint-green accent, gradient wordmark band and 2px geometry of… |
| [dsh-video-skin](https://github.com/something11235/dsh-video-skin) | `dsh-video-skin` | — | MIT | DSH 视频皮肤：一段短片循环铺成整个界面的聊天背景（无声、可调透明度），另一段做有声的开机动画（片尾交叉溶解进界面、点击画面随时跳过）。零依赖。 |
| dsh-wx-skin | `dsh-wx-skin` | — | MIT | DSH Web GUI 皮肤插件：侧栏「皮肤」面板，支持自选本地图片 / URL / 本地文件夹轮播（顺序或随机、一轮内不重复）作为全屏背景，含预设、暗化、模糊、关闭皮肤，跨刷新持久化（外部 client 插件，dsh-web-ui… |
| dsh-xp-skin | `dsh-xp-skin` | — | MIT | Windows XP skin for the DSH Web GUI. Host-inject mode ONLY: injects CSS and a plain-DOM taskbar through… |
| [dsh-skin-xuyuanwu](https://github.com/elong16/dsh-skin-xuyuanwu) | `elong16/dsh-skin-xuyuanwu` | — | — | Wishing House theme skin with warm amber glow, live moon phases, meteors, typing sparks, procedural chime audio, and… |
| [dsh-f1-skin](https://github.com/frank-fan-818/dsh-f1-skin) | `dsh-f1-skin` | — | MIT | An F1 Race Control theme for DSH Web with four switchable team skins, broadcast-photo backgrounds, light and dark… |
| [dsh-restart-button](https://github.com/FuriousKinght/dsh-restart-button) | `furiouskinght/dsh-restart-button` | — | — | Adds a Windows-only button at the foot of the sidebar that restarts the DSH desktop app and reloads the page when it… |
| [dsh-plugin-skins](https://github.com/I-QX-I/dsh-plugin-skins) | `i-qx-i/dsh-plugin-skins` | — | — | 玻璃皮肤 / Glass Skins — Independent DeepSeek Harness appearance plugin. Nine themes, liquid/frosted glass, 中文/English… |
| [dsh-video-skin](https://github.com/JZQiang/dsh-video-skin) | `jzqiang/dsh-video-skin` | — | — | deepseek harness 视频壁纸，内置视频壁纸 |
| [dsh-skin-pixel-anime](https://github.com/longgege-cd/dsh-skin-pixel-anime) | `longgege-cd/dsh-skin-pixel-anime` | — | — | Pixel-anime skin plugin for DeepSeek Harness web UI: palettes, pixel fonts (incl. simplified Chinese), corner presets… |
| [dsh-skin-whale-girl](https://github.com/Neo65536-engineer/dsh-skin-whale-girl) | `neo65536-engineer/dsh-skin-whale-girl` | — | — | An anime skin for DSH Desktop: full-bleed day/night artwork, mirrored twin characters, layered text backings for… |
| [dsh-forest](https://github.com/QSyingSQ/dsh-forest) | `qsyingsq/dsh-forest` | — | — | Typora Forest theme skin for the DeepSeek Harness web GUI: forest-green light/dark palettes + selectable fonts. |
| [dsh-wtskin-project](https://github.com/Wuqiu-Ying/dsh-wtskin-project) | `wuqiu-ying/dsh-wtskin-project` | — | — | 战争雷霆自定义涂装插件：四点 UV 取点器、按四边形裁切的艺术图层，导出 PNG/DDS/.blk。 |
| [dsh-we-skin](https://github.com/xzk09164418-droid/dsh-we-skin) | `xzk09164418-droid/dsh-we-skin` | — | — | DSH Web 壁纸皮肤插件，支持 Wallpaper Engine 壁纸、阅读遮罩与透明度设置。 |
| [dsh-video-skin-issue-1-hdr-attachments-20261016](https://github.com/zlysd55/dsh-video-skin-issue-1-hdr-attachments-20261016) | `zlysd55/dsh-video-skin-issue-1-hdr-attachments-20261016` | — | — | Attachments for dsh-video-skin issue #1 (HDR boot animation rework) |

## 主题 / 配色

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | `dsh-opencode-palette` | 2077 | MIT | Ports all 38 opencode themes (33 TUI + 4 desktop 2.0 + system) into DeepSeek Harness, including 25 IP preset palettes… |
| [dsh-theme-studio](https://github.com/hj01857655/dsh-plugins) | `dsh-theme-studio` | 2008 | MIT | Customize the dsh UI theme: 12 accent presets, dark-mode aware accents with a contrast guard, density, font family… |
| [dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | `@nonamelego/dsh-catppuccin` | 1871 | MIT | DSH Web GUI 的 Catppuccin 主题插件：Latte、Frappé、Macchiato、Mocha 四套主题接入原生主题系统，一键切换并记住选择；另附可开关的玻璃质感皮肤，顶栏、侧边栏、输入框、统计行与轨迹视图的磨砂玻璃效… |
| [dsh-claude-code-desktop-theme](https://github.com/165890/dsh-claude-code-desktop-theme) | `dsh-claude-code-desktop-theme` | 1255 | MIT | Claude Code desktop look for the DeepSeek Harness Web GUI: warm cream surfaces, terracotta accent, embedded serif UI… |
| [dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | `dsh-theme-endfield` | 784 | MIT | DeepSeek Harness web theme: the industrial editorial look of the Arknights: Endfield official site — cream paper, ink… |
| [dsh-claude-desktop-theme](https://github.com/zkforge/dsh-claude-desktop-theme) | `dsh-claude-desktop-theme` | 707 | MIT | Claude Code Desktop-style theme for DeepSeek Harness (DSH) Desktop on macOS and Windows, with light/dark themes… |
| dsh-oort-theme-plugin | `dsh-oort-theme-plugin` | 642 | MIT | 主题插件：为 DSH Web 客户端注册多套自定义外观主题和设置页面 |
| [dsh-tui-pi](https://github.com/fan56/dsh-tui-pi) | `@aiwayds/dsh-tui-pi` | 588 | MIT | A fully-featured pi-style terminal UI for DeepSeek Harness (dsh) — history look-back & fork-at-turn, guided preset… |
| [dsh-endfield-theme](https://github.com/longxiangjunlin/dsh-endfield-theme) | `dsh-endfield-theme` | 583 | MIT | 《明日方舟：终末地》主题 for the DeepSeek Harness Web GUI — 炭黑 + 警戒黄工业 HUD、开屏动画、对话区背景。 / Arknights: Endfield theme for the DSH Web… |
| [dafy-whale-theme](https://github.com/yryd/dafy-whale-theme) | `dafy-whale-theme` | 490 | MIT | 蓝色大肥鱼主题：DeepSeek Harness web 前端的海洋配色、游动鱼群与上升气泡，带「设置 → 海洋主题」可调面板。 |
| [dsh-theme-manager](https://github.com/runcat-tommy/dsh-theme-manager) | `dsh-theme-manager` | 461 | MIT | Two-level theme manager for DeepSeek Harness Web: pick a culture/scene, a national flag, a developer palette, or a bold… |
| @qlzt/dsh-client-ui-theme | `@qlzt/dsh-client-ui-theme` | 359 | MIT | Theme plugin: Host bootstrap for the pre-plugin palette; DOM-free ThemeRuntime for light/dark/system state; --dsw-*… |
| [dsh-themes](https://github.com/mangmax/dsh-themes) | `dsh-themes` | 325 | MIT | DSH 外观与主题插件:内置调色板、Open VSX 搜索导入、颜色参数编辑器、明暗独立归属 |
| [dsh-client-ui-paopaocat](https://github.com/zmm863-commits/dsh-client-ui-paopaocat) | `dsh-client-ui-paopaocat` | 311 | MIT | 为 DSH Web 界面打造的奇幻玻璃拟态皮肤：月光冥界森林，青绿流云缓缓翻涌、绯红彼岸花自左下蔓延、角落里趴着一只睡猫，底层是 WebGL2 流体；另有自定义壁纸与视频背景。内置两套可一键切换的风格（淡雅 /… |
| [dsh-nico-theme](https://github.com/more-nico/dsh-nico-theme) | `dsh-nico-theme` | 307 | MIT | Nico glass theme for DeepSeek Harness Web UI — glass material rendered by nico-glass-kit. Adapted for DSH 0.2.0-rc.2 /… |
| [dsh-composer-glass](https://github.com/Lbunc/dsh-composer-glass) | `dsh-composer-glass` | 256 | MIT | 替换 DSH 对话界面为均匀的毛玻璃，底层铺一张壁纸或循环视频 \| one uniform frosted-glass layer for the DSH conversation UI, with a wallpaper or… |
| [dsh-theme-gallery](https://github.com/renjie2026/dsh-theme-gallery) | `dsh-theme-gallery` | 254 | MIT | A theme gallery for DeepSeek Harness (DSH): JSON-defined skins with full-screen coverage and sidebar scenery, a… |
| [dsh-theme-xiaohei](https://github.com/lemoncat7/dsh-theme-xiaohei) | `@lemoncat7/dsh-theme-xiaohei` | 237 | MIT | A Luo Xiaohei-inspired animated dark theme for DeepSeek Harness |
| [dsh-neu-theme](https://github.com/lhy723/dsh-neu-theme) | `dsh-neu-theme` | 217 | MIT | Neumorphism soft-UI theme for DeepSeek Harness web — gentle raised-and-recessed surfaces in a cream light and an… |
| [dsh-theme-cutout-clash](https://github.com/yrracowl/dsh-theme-cutout-clash) | `dsh-theme-cutout-clash` | 216 | MIT | EN: Selectable neo-brutalist/pop-art themes for DeepSeek Harness Web with calm reading surfaces. 0.5.11 targets the… |
| [dsh-thirteen-bg](https://github.com/feng78-boop/dsh-thirteen-bg) | `dsh-thirteen-bg` | 160 | MIT | Animated and video live wallpaper for the DeepSeek Harness Web GUI — GIF, animated WebP/APNG and static PNG/JPEG… |
| [dsh-diorama](https://github.com/ZaVang/dsh-diorama) | `dsh-diorama` | 150 | MIT | 角色皮肤舞台：雪乃·暖阳日常与隐秘年代志双主题，各带双角色立绘与表情贴纸；可视化装饰看板支持拖动/缩放/旋转/坐标精调/锚定切换/上传素材，装饰包（素材+布局）可导出分享、导入后自动打开看板继续调整。 |
| [dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) | `dsh-theme-plugin` | 143 | MIT | 中国传统色 DeepSeek Harness 主题包 · Chinese traditional color themes for DeepSeek Harness |
| [dsh-yorha-ui](https://github.com/MrmoLabs/dsh-yorha-ui) | `dsh-yorha-ui` | 134 | MIT | 一款面向 DeepSeek Harness Web 的 NieR:Automata / YoRHa 风格工业终端主题，提供沙色与炭黑配色、直角几何和全界面样式。 |
| [solarized-dsh-theme](https://github.com/zhijun-dai/solarized-dsh-theme) | `@yuquexianzhou/solarized-dsh-theme` | 122 | MIT | Solarized + Selenized themes for DeepSeek Harness: four faithful palettes (Solarized Dark/Light, Selenized Dark/Light)… |
| [dsh-theme-tuner](https://github.com/shawnlone/dsh-theme-tuner) | `dsh-theme-tuner` | 118 | MIT | DSH web plugin: theme customization placed under the built-in Appearance (外观) settings. It reuses the Appearance… |
| [dsh-edex-xry-ui](https://github.com/ph4310822/dsh-edex-xry-ui) | `@danielng23/dsh-edex-xry-ui` | 118 | MIT | 以 XRY/B1 医疗 HUD 为主题色的 eDEX-UI 风格 DSH 外壳：右侧 ECG 心电波形与旋转雷达扫描盘、左侧能量条仪表、底部 DATA TIMELINE 扫描日志表，青蓝近黑 CRT 皮肤包裹原始界面。 |
| [dsh-session-theme](https://github.com/Xliecc/dsh-session-theme) | `dsh-session-theme` | 117 | MIT | Shows every session theme in the DSH Web left sidebar immediately on page load by warming the session projection cache… |
| [dsh-outerwilds-theme](https://github.com/xikan0/dsh-outerwilds-theme) | `dsh-outerwilds-theme` | 108 | SEE LICENSE IN LICENSE | 以《星际拓荒》为主题的 DSH Web 与 Windows Desktop 外观插件 |
| [dsh-theme-tarkov](https://github.com/zhigengniao258/dsh-theme-tarkov) | `dsh-theme-tarkov` | 102 | MIT | Escape from Tarkov themed plugin for the DeepSeek Harness Web UI: hero Beta-warning banner, translucent looping video… |
| [dsh-theme-kit](https://github.com/ink5897/dsh-theme-kit) | `dsh-theme-kit` | 99 | MIT | A DeepSeek Harness Web GUI appearance kit: 32 preset themes, custom backgrounds (wallpaper / glass / texture), per-zone… |
| [DSH-appearance](https://github.com/LX-HMKK/DSH-appearance) | `@hmkk/dsh-appearance` | 99 | MIT | 轻量的 DSH 字体与主题插件：中英文与代码字体选择器（只列本机已安装的字体），以及 One Dark Pro、Dracula、Nord、GitHub、Catppuccin 五套官方色板预设，全部走官方主题… |
| [dsh-custom-workspace](https://github.com/JeremyGuo/dsh-custom-workspace) | `dsh-custom-workspace` | 94 | MIT | Per-workspace appearance settings for DeepSeek Harness Web |
| [dsh-tui-theme](https://github.com/xiaoxiaohaigui/dsh-tui-theme) | `dsh-tui-theme` | 77 | MIT | Blossom status line and /settings section for dsh-TUI. The pink theme family (pink-night/pink-day/pink-ansi) has moved… |
| dsh-theme-button | `dsh-theme-button` | 40 | MIT | Floating theme widget for DeepSeek Harness: switch the official appearance, and set a custom background (picture or… |
| [dsh-theme-library](https://github.com/zaimokuza-yoshiteru/dsh-theme-library) | `@zaimokuza/dsh-theme-library` | 35 | SEE LICENSE IN LICENSE | Extensible animated theme library for DeepSeek Harness |
| [dsh-web-theme](https://github.com/luckzhangfengbo/dsh-web-theme) | `dsh-web-theme` | 35 | MIT | 墨韵 (Moyun) · 中国水墨画风格主题插件 for DeepSeek Harness：5 套原创水墨主题、自定义壁纸 + 模糊控制、粒子飘落效果、8 种语言国际化，把 DSH 变成一幅流动的水墨画卷。原生 token… |
| [dsh-theme-gallery](https://github.com/xuanyi-king/dsh-theme-gallery) | `@xuanyi-king/dsh-theme-gallery` | 27 | MIT | DeepSeek Harness theme center with eleven themes and safe update checks |
| dsh-theme-stardew | `dsh-theme-stardew` | 19 | MIT | A Stardew Valley themed client plugin for the DeepSeek Harness web surface. Non-commercial fan theme. |
| [dsh-glass-theme](https://github.com/cnayu/dsh-glass-theme) | `dsh-glass-theme` | 16 | MIT | 柔光玻璃 (Soft Light Glass) theme plugin for DeepSeek Harness: frosted-glass UI, settings toggle, chat-area image/video… |
| [dsh-appearance](https://github.com/shkzhang/dsh-appearance) | `@skzhang/dsh-appearance` | 14 | MIT | DSH外观设置 |
| dsh-theme-color | `dsh-theme-color` | 14 | MIT | 自定义主题色：在设置-外观中添加一个调色盘方块，选择品牌主色后仅替换当前黑白主题中带颜色的按钮与图标（业务蓝一族），页面整体保持黑白。 |
| [aiko-dsh-theme](https://github.com/aiko-dsh-plugins/aiko-dsh-theme) | `aiko-dsh-theme` | 10 | UNLICENSED | Aiko orange and charcoal theme with the collaboration-core brand for aiko-dsh. |
| [dsh-theme-eyecare](https://github.com/j2st1n/dsh-theme-eyecare) | `dsh-theme-eyecare` | 9 | MIT | Eye-care themes and color palette switcher for DeepSeek Harness Web GUI |
| @guillaumemeyer/dsh-themes | `@guillaumemeyer/dsh-themes` | 8 | MIT | Selectable DSH theme palettes (Tokyo Night, Catppuccin, Dracula, Gruvbox, Nord, One Dark) with live previews, applied… |
| [open-theme](https://github.com/xylt369/dsh-open-theme) | `@yeesy369/open-theme` | 6 | MIT | Open Theme：给 DeepSeek Harness（dsh）Web UI 换皮肤的客户端插件——上传背景图自动取色换肤，支持自定义特效预设（skin / theme / background plugin for DeepSeek… |
| [dsh-theme-tint](https://github.com/kuaileinmylife/dsh-usage-meter) | `dsh-theme-tint` | 6 | MIT | DeepSeek Harness web plugin: account balance + token bars, theme tint panel, wallpaper with crop + photo theme mode… |
| [dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) | `dsh-status-rotator` | — | MIT | 将 DSH Web 默认的 Deep Diving.../深度求索中... 换成：1379 条梗 · 打字机特效 · 昼夜渐变 · 弹幕 · 5 套外观主题 · 四个鲸尾动作,14 个词库包可编辑 \| Custom phrases… |
| [dsh-endfield-ui](https://github.com/rison114514/dsh-endfield-ui) | `rison114514/dsh-endfield-ui` | — | — | Endfield-inspired industrial UI shell for DeepSeek Harness (dsh) — non-official fan theme. Install: dsh plugin… |
| [dsh-theme](https://github.com/oil-oil/dsh-theme) | `oil-oil/dsh-theme` | — | — | Live theme editor for DeepSeek Harness with curated palettes and typography controls. |
| [dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077) | `tommy00748/dsh-theme-cyberpunk2077` | — | — | Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — CRT scanlines, Kiroshi lock-on, typewriter SFX… |
| [dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) | `10086ggqq/dsh_theme_terraria` | — | — | 把 DeepSeek Harness 的 AI 编码控制台变成泰拉瑞亚像素世界——向导陪你写代码，真实对话、工具审批、难度切换，单文件零依赖。 |
| [dsh-claude-theme](https://github.com/aklnaaw/dsh-claude-theme) | `aklnaaw/dsh-claude-theme` | — | — | Claude-style theme for the DeepSeek Harness Web GUI: warm cream canvas, serif reading text, coral accent — plus a… |
| [dsh-themes](https://github.com/whyihaveyou/dsh-themes) | `whyihaveyou/dsh-themes` | — | — | DeepSeek Harness (DSH) 皮肤合集：151 个昼夜一体皮肤，迁移自 aionui-themes —— 绝区零/原神/崩铁/宝可梦/任天堂角色、20 个经典编辑器配色、20 种美学风格、节日限定、系统复古与彩蛋 |
| [dsh-liquid-glass](https://github.com/xingyingyuzhui/dsh-liquid-glass) | `xingyingyuzhui/dsh-liquid-glass` | — | — | Wallpaper plus optional Liquid Glass overlay for DeepSeek Harness Web UI |
| [dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme) | `dviridescent/dafy-whale-theme` | — | — | DeepSeek Harness 蓝色大肥鱼主题插件：海洋配色、鱼群、气泡、吉祥物与品牌替换 |
| [dsh-freestyle-theme](https://github.com/suzike/dsh-freestyle-theme) | `suzike/dsh-freestyle-theme` | — | — | DeepSeek Harness 主题体验插件：OKLCH 主题提案 + 主题设计器（跨重启持久化） |
| [dsh-theme-mls-desktop](https://github.com/ALPDM00/dsh-theme-mls-desktop) | `alpdm00/dsh-theme-mls-desktop` | — | — |  |
| [dsh-whale](https://github.com/1Lyn-en/dsh-whale) | `1lyn-en/dsh-whale` | — | — | DeepSeek Harness 极简回复插件，提供六档精简模式与 CyberUI 主题，可节省 60–75% 输出 Token｜A DSH plugin with six brevity modes and a CyberUI… |
| [dsh-liquid-glass-theme](https://github.com/Rainpomelo/dsh-liquid-glass-theme) | `rainpomelo/dsh-liquid-glass-theme` | — | — | DeepSeek Harness - 液态玻璃与动态壁纸主题 (WebGL 物理透镜、动态壁纸与多层毛玻璃) #dsh-plugin |
| [dsh-perlica-ding](https://github.com/117BS/dsh-perlica-ding) | `117bs/dsh-perlica-ding` | — | — | 「我们不是理想的陈述者，而是理想的践行者。」 佩丽卡主题 DeepSeek Harness 分级任务提示音插件：计划出方案 / 任务完成 / 需要你回应 / 出错四档提示音，普通问答静音，音效可自定义。 Perlica-themed… |
| [deepseek-harness-angelina-themes](https://github.com/bilbillm/deepseek-harness-angelina-themes) | `bilbillm/deepseek-harness-angelina-themes` | — | — | Angelina light and dark glass themes with parallax for DeepSeek Harness |
| [dexthemes](https://github.com/daeshawnballard/dexthemes) | `daeshawnballard/dexthemes` | — | — | Discover, preview, create, and apply themes across Codex, DeepSeek Harness, and community catalogs. |
| [Changzheng-for-dsh](https://github.com/JP-AsagiriRine/Changzheng-for-dsh) | `jp-asagiririne/changzheng-for-dsh` | — | — | A simple theme for deepseek-harness |
| [deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes) | `orxz/deepseek-harness-themes` | — | — | A collection of UI themes for deepseek-harness. |
| [dsh-unknown-theme](https://github.com/ycqaq233/dsh-unknown-theme) | `ycqaq233/dsh-unknown-theme` | — | — | DeepSeek 官网视觉风格主题 (dsh-plugin) — 官网流体背景 / 交互网格 / 粒子鱼 LOGO / 标题聚光灯 / 磨砂玻璃，双主题自适应 |
| [dsh-naiwa-theme](https://github.com/DevourerM/dsh-naiwa-theme) | `devourerm/dsh-naiwa-theme` | — | — | 为deepseek harness构建的奶蛙主题，可是我觉得很神圣呀。（素材来自互联网） |
| [dsh-deepspace-theme](https://github.com/Fangnai-byte/dsh-deepspace-theme) | `fangnai-byte/dsh-deepspace-theme` | — | — | dsh-deepspace-theme - deepspace glassmorphism theme for DeepSeek Harness Web GUI |
| [dsh-theme-blackgold](https://github.com/frostgao/dsh-theme-blackgold) | `frostgao/dsh-theme-blackgold` | — | — | A black-gold theme plugin for DeepSeek Harness |
| [whalechan-dsh-theme](https://github.com/online111111/whalechan-dsh-theme) | `online111111/whalechan-dsh-theme` | — | — | Unofficial Whale-chan community fan-art theme for DeepSeek Harness |
| [dsh-minecraft-theme](https://github.com/SuperLS-X/dsh-minecraft-theme) | `superls-x/dsh-minecraft-theme` | — | — | Minecraft theme plugin for DeepSeek Harness: block-texture background, pixel fonts, MC-style buttons with click sounds… |
| [dph-endfield-theme](https://github.com/thjyy/dph-endfield-theme) | `thjyy/dph-endfield-theme` | — | — | Unofficial Endfield-inspired theme and animated mascot for DeepSeek Harness Web |
| [dsh-codsh-theme](https://github.com/Chiyang001/dsh-codsh-theme) | `chiyang001/dsh-codsh-theme` | — | — | Codex 风格的 DeepSeek Harness 界面美化插件，支持通过 GitHub 仓库链接安装。 |
| [dsh-theme-yourname](https://github.com/elfin1z/dsh-theme-yourname) | `elfin1z/dsh-theme-yourname` | — | — |  |
| [dsh-outdoor-theme](https://github.com/Estellalee/dsh-outdoor-theme) | `estellalee/dsh-outdoor-theme` | — | — | DSH 户外皮肤 · 山野向导（Trail Guide） |
| [maid-atelier-ui-bundle](https://github.com/flaricy/maid-atelier-ui-bundle) | `flaricy/maid-atelier-ui-bundle` | — | — | A calm Maid Atelier theme and practical file, preview, Git, and terminal side panel for DeepSeek Harness Web. |
| [DeepSeek-Harness-yizi-themes](https://github.com/laoduu/DeepSeek-Harness-yizi-themes) | `laoduu/deepseek-harness-yizi-themes` | — | — | 为 DeepSeek Harness（dsh）Web UI 提供的 19 个精品风格主题，完整移植自 YiziMarkdown 的设计语言。 |
| [dsh-weniger-theme](https://github.com/lesliechowsh/dsh-weniger-theme) | `lesliechowsh/dsh-weniger-theme` | — | — | "Weniger" — less, but better: a Dieter Rams-inspired theme for the DeepSeek Harness Web GUI |
| [dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | `makuralymi/dsh-webui-glass-theme` | — | — |  |
| [dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin) | `oceanxuikun/dsh-eva-theme-plugin` | — | — | Evangelion-inspired theme plugin for DSH WebUI, featuring Unit-00, Unit-01, and Unit-02 themes with immersive… |
| [dsh-ansk-theme](https://github.com/rruixi/dsh-ansk-theme) | `rruixi/dsh-ansk-theme` | — | — |  |
| [dsh-luna-theme](https://github.com/shinku-xuan/dsh-luna-theme) | `shinku-xuan/dsh-luna-theme` | — | — | 借鉴 Luna-Chat 视觉语言的 **DeepSeek Harness（DSH）换肤插件**，桌面端与 Web 端通用。 |
| [deepseek-web-theme](https://github.com/wcyaba/deepseek-web-theme) | `wcyaba/deepseek-web-theme` | — | — | 【大肥鱼网页端皮肤】把 DSH 热门皮肤「虎鲸链路 / ORCA LINK」移植到 DeepSeek 官网的 Edge 扩展。基于官方设计令牌 1:1 重新实现：104 项 --dsw-*… |
| [dsh_web_client_theme_switcher](https://github.com/yingpanwang/dsh_web_client_theme_switcher) | `yingpanwang/dsh_web_client_theme_switcher` | — | — | 使用DeepSeek Flash0731 自实现的 DeepSeekHarness 自定义主题插件,支持预制纯色和自定义主题背景 |
| [one-dark-pro-dsh-plugin](https://github.com/yudaxia1/one-dark-pro-dsh-plugin) | `yudaxia1/one-dark-pro-dsh-plugin` | — | — | One Dark Pro theme plugin for DeepSeek Harness (DSH) Web UI. 为 DSH Web 界面打造的 One Dark Pro 暗色主题插件。 |
| [dsh_theme_Minecraft](https://github.com/10086ggqq/dsh_theme_Minecraft) | `10086ggqq/dsh_theme_minecraft` | — | — | 把 DeepSeek Harness 变成 Minecraft Java Edition 风格——WebGL 旋转全景主菜单、存档式会话选择、四种游戏模式对应 Agent 预设、世界内 HUD 聊天台、像素风工具卡片与审批面板、AI… |
| [dsh-cyberpunk-theme](https://github.com/ai7603/dsh-cyberpunk-theme) | `ai7603/dsh-cyberpunk-theme` | — | — |  |
| [kaori-theme](https://github.com/Bonny0430/kaori-theme) | `bonny0430/kaori-theme` | — | — | Kaori (Your Lie in April) x kitten theme skin for DeepSeek Harness Web (dsh web): sakura petals, character card, cat… |
| [dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) | `drfccv/dsh-theme-neko` | — | — | A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI. |
| [dsh-minecraft-theme](https://github.com/EDMOK/dsh-minecraft-theme) | `edmok/dsh-minecraft-theme` | — | — | Minecraft Launcher 风格的 DeepSeek Harness WebUI 皮肤插件 |
| [dsh-theme](https://github.com/EsshUwU/dsh-theme) | `esshuwu/dsh-theme` | — | — | Custom theme for deepseek harness |
| [dsh-theme-miyabi](https://github.com/InkDemon911/dsh-theme-miyabi) | `inkdemon911/dsh-theme-miyabi` | — | — | 《绝区零》星见雅主题的 DeepSeek Harness Web UI 皮肤：霜蓝冷调令牌层 + 新艾利都 CRT 身份层 |
| [Deepseek-Harness-as-Desktop](https://github.com/KhanZou/Deepseek-Harness-as-Desktop) | `khanzou/deepseek-harness-as-desktop` | — | — | Turn DeepSeek Harness into a Codex-style desktop app: native WebView2 shell, system tray, auto-start, Windows toasts… |
| [dsh-vesna-theme](https://github.com/Mahiru0427/dsh-vesna-theme) | `mahiru0427/dsh-vesna-theme` | — | — | 薇斯纳主题：DeepSeek Harness Desktop 插件，含全窗口壁纸、明暗配色与日常表情。 |
| [dsh-theme-edgerunners](https://github.com/OLDnana1/dsh-theme-edgerunners) | `oldnana1/dsh-theme-edgerunners` | — | — | DSH Web GUI 独立主题插件：《赛博朋克：边缘行者》Lucy Moon 神经链接终端风格 |
| [dsh-vscode-theme](https://github.com/Sim-xia/dsh-vscode-theme) | `sim-xia/dsh-vscode-theme` | — | — | allow deepseek harness to use .vsix theme file designed for visual studio code |
| [dsh-song-ui](https://github.com/yunfei07/dsh-song-ui) | `yunfei07/dsh-song-ui` | — | — | The light palette combines silk-paper surfaces, warm ink text, Ru-celadon interactions, and cinnabar error states. The… |
| [dsh-liquid-glass](https://github.com/394804078-pixel/dsh-liquid-glass) | `394804078-pixel/dsh-liquid-glass` | — | — | A dsh liquid glass appearance enhancement plugin that changes the styles of dialogs, settings, and buttons to make them… |
| [dsh-mornye-theme](https://github.com/eraerkni/dsh-mornye-theme) | `eraerkni/dsh-mornye-theme` | — | — | 莫宁主题皮肤 · DSH Desktop 全屏动态壁纸 + 桌宠与订阅额度 |
| [dsh-desktop-claude-theme](https://github.com/guxinideng/dsh-desktop-claude-theme) | `guxinideng/dsh-desktop-claude-theme` | — | — | Unofficial warm Claude-style desktop theme for DeepSeek Harness (dsh) · 非官方的 DeepSeek Harness 桌面暖色主题 |
| [dsh-studio](https://github.com/IRdotAI/dsh-studio) | `irdotai/dsh-studio` | — | — | Themes and personalisation for DeepSeek Harness: 17 themes, a theme editor, liquid-glass panels, wallpapers, custom… |
| [dsh-theme-studio](https://github.com/Jany314/dsh-theme-studio) | `jany314/dsh-theme-studio` | — | — | Theme presets, background gallery, bar styling and a desktop pet for the DSH Web client |
| [dsh-theme-management-plugin](https://github.com/jeffliu95800-source/dsh-theme-management-plugin) | `jeffliu95800-source/dsh-theme-management-plugin` | — | — | DSH Web GUI 主题与桌面宠物管理插件（多主题/多宠物、新建、切换、上传素材；内置灌篮高手主题 + 樱木花道宠物） |
| [dsh-zcode-ui](https://github.com/jungenius-stack/dsh-zcode-ui) | `jungenius-stack/dsh-zcode-ui` | — | — | DSH ZCode UI — 把 DeepSeek Harness Web 的界面换成 ZCode 风格：侧栏、工作区会话树、全局搜索与轮次导航。A ZCode-styled sidebar, workspace session… |
| [dsh-theme-rheostat](https://github.com/nineandnine-9/dsh-theme-rheostat) | `nineandnine-9/dsh-theme-rheostat` | — | — | 一个「滑动变阻器」主题皮肤：根据当前会话的模型 + 推理等级，把界面切成四个挡位的外观，并在输入框上方显示当前挡位指示条。 |
| [dsh-tint-theme](https://github.com/OneZero-Y/dsh-tint-theme) | `onezero-y/dsh-tint-theme` | — | — | A skin picker for the DeepSeek Harness (DSH) Web GUI |
| [dsh-lulu-theme](https://github.com/shaoqing404/dsh-lulu-theme) | `shaoqing404/dsh-lulu-theme` | — | — | DSH 水豚噜噜主题皮肤插件（可自由切换、可分发） |
| [dsh-v-theme](https://github.com/victor10035445/dsh-v-theme) | `victor10035445/dsh-v-theme` | — | — | theme plugin for deepseek harness by victor |
| [dsh-easy-appearance](https://github.com/Zhen-WushuiLingchun/dsh-easy-appearance) | `zhen-wushuilingchun/dsh-easy-appearance` | — | — | Persistent appearance settings for DeepSeek Harness WebUI |
| [dsh-appearance](https://github.com/le-soleil-se-couche/dsh-appearance) | `le-soleil-se-couche/dsh-appearance` | — | — | 为 DSH 配置外观功能。支持主题配色、本地字体、配置导入复制与皮肤切换。 |
| [dsh-rhine-theme](https://github.com/mjn96/dsh-rhine-theme) | `mjn96/dsh-rhine-theme` | — | — | 明日方舟莱茵生命美术风格的deepseek harness皮肤主题 |
| [dsh-blue-archive-shiroko](https://github.com/mldhao/dsh-blue-archive-shiroko) | `mldhao/dsh-blue-archive-shiroko` | — | — | Blue Archive-inspired DSH theme with a Shiroko desktop companion, Codex-style reply bubbles, petting effects, and… |
| [dshLiquidTheme](https://github.com/more-nico/dshLiquidTheme) | `more-nico/dshliquidtheme` | — | — | macOS Liquid Glass theme for DeepSeek Harness Web UI: floating frost, rounded refraction, mouse rim, custom wallpaper |
| [dsh-themes](https://github.com/naniwet/dsh-themes) | `naniwet/dsh-themes` | — | — | A configurable skin for the DeepSeek Harness web UI: palette, display font and every image slot are configuration, with… |
| [dsh-palette](https://github.com/soidaken/dsh-palette) | `soidaken/dsh-palette` | — | — | Theme palette & UI tweaks for the DeepSeek Harness (dsh) Web GUI: extra themes, scrollable thinking box, taller… |
| [dsh-codex-appearance](https://github.com/zhongjiadeng-cmd/dsh-codex-appearance) | `zhongjiadeng-cmd/dsh-codex-appearance` | — | — | Appearance settings and a blue-gray theme for DeepSeek Harness |
| [dsh-appearance-tuner](https://github.com/zxyxxby/dsh-appearance-tuner) | `zxyxxby/dsh-appearance-tuner` | — | — | DeepSeek Harness 外观调校插件：浮层/面板不透明度与配色、毛玻璃模糊、背景与侧栏色、强调色、圆角、正文字号、滚动条宽度 \| Appearance tuner for DSH UI tokens |
| @1mlightyears/dsh-theme-synthwave | `@1mlightyears/dsh-theme-synthwave` | — | Apache-2.0 | DSH Synthwave theme plugin: neon glow hover/focus, translucent panels over image/video background, configurable blur… |
| @dsh-do/fabric-theme-studio | `@dsh-do/fabric-theme-studio` | — | — | Interactive theme studio and personalization showcase for DeepSeek Harness built on Fabric |
| [dsh-theme-tone](https://github.com/peiyucn/dsh-sparrow) | `@dsh-sparrow/dsh-theme-tone` | — | MIT | Tone skins for the official light and dark themes, plus conversation-area layout tuning once a tone is picked |
| @dsh-suite/themes | `@dsh-suite/themes` | — | Apache-2.0 | 151 款 AionUi 皮肤聚合 + 皮肤中心试穿面板 / A 151-skin pack with a try-on panel for DSH Web UI. |
| @huaqiu/dsh-ui-theme-huaqiu | `@huaqiu/dsh-ui-theme-huaqiu` | — | — | HuaQiu Web theme and HQ brand plugin for DeepSeek Harness |
| [dsh-theme-cyrene](https://github.com/lutisure/cyrene-dsh-plugin) | `@lutisure/dsh-theme-cyrene` | — | MIT | 昔涟主题 · Cyrene — 淡粉柔光配色 + 半透明壁纸 + 环境流萤粒子 + 背景音乐 + 打字音效（DeepSeek Harness 客户端主题插件） |
| @npm-liqingfeng/dsh-theme-center | `@npm-liqingfeng/dsh-theme-center` | — | BSD-3-Clause | DSH web UI 主题插件（一体化）：设置 > 插件配置「主题」卡片双 Tab——「主题」23 款皮肤试穿 / 应用、亮暗预览与背景遮罩；「外观」聊天宽度预设、聊天区精简、会话区字号、全站字体、隐藏开关。配置保存在服务器设置中，一处配置… |
| [dsh-theme-eye-care](https://github.com/xiaotuchu/dsh-theme-eye-care) | `@xiaotuchu/dsh-theme-eye-care` | — | MIT | 护眼配色 Eye-care palettes — three switchable low-glare themes (warm paper, eye green, warm grey) for the DeepSeek Harness… |
| [dsh-chatgpt-style](https://github.com/137/dsh-chatgpt-style) | `137/dsh-chatgpt-style` | — | — | ChatGPT-like conversation layout for the DeepSeek Harness Web client: a 768px centered column, right-aligned neutral… |
| [dsh-codefall](https://github.com/4444Hao/dsh-codefall) | `4444hao/dsh-codefall` | — | — | Adds a Matrix-inspired digital-rain startup animation for DeepSeek Harness, a rectangular light portal that opens to… |
| [dsh-aqua-theme](https://github.com/acdsh4869/dsh-aqua-theme) | `acdsh4869/dsh-aqua-theme` | — | — | Aqua glassmorphism theme for the DSH Web UI, adapted to DSH v0.2.x and desktop v0.22.3+: the header, sidebar, composer… |
| [aemeath-theme-plugin](https://github.com/malyjacob/aemeath-theme-plugin) | `aemeath-theme-plugin` | — | MIT | Aemeath theme for the dsh web GUI — sakura pink × icy cyan × pearl white × deep navy, dual light/dark, animated pulsing… |
| [dsh-bliss-glass](https://github.com/ahian-lee/dsh-bliss-glass) | `ahian-lee/dsh-bliss-glass` | — | — | Theme that pairs Windows XP-era scenery wallpapers with a modern frosted-glass interface: a fixed background layer… |
| [air-pixel-liquid-glass](https://github.com/AIR-pixel/air-pixel-liquid-glass) | `air-pixel/air-pixel-liquid-glass` | — | — | A configurable Liquid Glass theme for DeepSeek Harness with translucent surfaces, wallpaper, desktop transparency… |
| [dsh-client-ui-aqua-patched](https://github.com/Aliww2468/dsh-client-ui-aqua-patched) | `aliww2468/dsh-client-ui-aqua-patched` | — | — | Aqua glassmorphism theme for the DeepSeek Harness web UI, forked from upstream and repaired to load on DSH 0.1.2-rc.1… |
| [dsh-yukimi-theme](https://github.com/AlyceStocking/dsh-yukimi-theme) | `alycestocking/dsh-yukimi-theme` | — | — | Yukimi Sajo theme with illustrated backgrounds, interactive characters, and an optional Windows desktop companion. |
| [deepseek-harness-hello-kitty-suite](https://github.com/Angel2518975237/deepseek-harness-hello-kitty-suite) | `angel2518975237/deepseek-harness-hello-kitty-suite` | — | — | Hello Kitty-styled task-completion and question alerts for DSH Web, bundled with an optional light/dark pink Skin… |
| [dsh-theme-prts](https://github.com/ash-qw/dsh-theme-prts) | `@ash-qw/dsh-theme-prts` | — | SEE LICENSE IN LICENSE | An unofficial Arknights P.R.T.S.-inspired interface theme for DSH Web with appearance presets, accessibility controls… |
| [dsh-style-hub](https://github.com/Au1314/dsh-style-hub) | `dsh-style-hub` | — | MIT | Theme studio for the DeepSeek Harness web GUI: eight switchable preset styles, accent and panel-translucency… |
| awesome-dsh-theme | `awesome-dsh-theme` | — | MIT | A theme studio for DeepSeek Harness: original-path media, categorized Wallpaper Engine videos, native HD Scene… |
| [dsh-bg-switcher](https://github.com/Bainianzzz/dsh-bg-switcher) | `bainianzzz/dsh-bg-switcher` | — | — | Adds a Background button above Settings in the sidebar foot that fills the window with one of six preset wallpapers… |
| [dsh-theme-native](https://github.com/BarneyZhaoooo/dsh-theme-native/tree/main/plugin) | `dsh-theme-native` | — | MIT | A token-based DeepSeek Harness theme plugin with ten presets, custom colors, and system font pickers. |
| [MDSM](https://github.com/bauerelizabeth07139/MDSM) | `bauerelizabeth07139/mdsm` | — | — | MDSM (Male DeepSeek Mascot) appearance layer for the DeepSeek Harness web GUI: wears the bundled mascot character as… |
| [nai](https://github.com/bauerelizabeth07139/nai) | `bauerelizabeth07139/nai` | — | — | Nai milk-frog mascot appearance layer for the DeepSeek Harness web GUI: wears the bundled milk-frog artwork as the GUI… |
| [tangsan](https://github.com/bauerelizabeth07139/tangsan) | `bauerelizabeth07139/tangsan` | — | — | TangSan mascot appearance layer for the DeepSeek Harness web GUI: wears a generated TangSan portrait as the GUI… |
| [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) | `beizi6/dsh-theme-plugin` | — | — | Theme studio for the DSH Web GUI: five built-in presets plus fully customizable light/dark palettes (accent… |
| [dsh-cyrene-theme](https://github.com/berhbro/dsh-cyrene-theme) | `berhbro/dsh-cyrene-theme` | — | — | Pink-and-white frosted-glass skin for the DSH Web GUI, themed after Cyrene from Honkai Star Rail. Also rewrites the… |
| [dsh-ui-plugin](https://github.com/Cci-65/dsh-ui-plugin) | `cci-65/dsh-ui-plugin` | — | — | Restyles the DeepSeek Harness welcome area and composer, with workspace, mode, and skill shortcuts. |
| [dsh-theme-studio](https://github.com/cherrchen/dsh-theme-studio) | `@dsh-electron/dsh-theme-studio` | — | MIT | Adds a Theme row to Settings → General between Appearance and Font size — 8 builtin palettes plus Default, hover… |
| [dsh-whale-atelier](https://github.com/Cicero010/dsh-whale-atelier) | `dsh-whale-atelier` | — | MIT | Full-interface whale skin pack for the DSH Web UI — layered wallpaper, metallic trim, lace and bows, a corner mascot… |
| [dsh-cool-theme](https://github.com/CoolTea001/dsh-cool-theme) | `dsh-cool-theme` | — | MIT | Theme plugin — supports dark/light appearance switching, ships 34 preset themes, and supports creating, sharing, and… |
| [dsh-yoimiya-theme](https://github.com/CosmerHomura/dsh-yoimiya-theme) | `cosmerhomura/dsh-yoimiya-theme` | — | — | Genshin Impact Yoimiya theme: two hand-tuned palettes, a procedural fireworks particle layer, and a local music player… |
| [dsh-bloomglass](https://github.com/CosmoSail/dsh-bloomglass) | `dsh-bloomglass` | — | MIT | A DeepSeek Harness Web theme: ten OKLCH Chinese-traditional-colour palettes that adapt to light and dark, plus an… |
| [dsh-csdn-theme](https://github.com/d0ublecl1ck/dsh-csdn-theme) | `dsh-csdn-theme` | — | MIT | Ports CSDN blog article typography into the DeepSeek Harness web GUI — heading hierarchy, quote blocks, solid-grid… |
| [dsh-whale-aqua-theme](https://github.com/dataizu/dsh-whale-aqua-theme) | `dataizu/dsh-whale-aqua-theme` | — | — | macOS-style skin with a swimming whale aquarium background and a dot-matrix whale send button for the DeepSeek Harness… |
| [dsh-appearance-glass](https://github.com/david0304git/dsh-appearance-glass) | `david0304git/dsh-appearance-glass` | — | — | DSH 外觀外掛：介面透明度（四個分區獨立可調）＋ 內建壁紙顏色。純 alpha，沒有模糊與玻璃特效。 |
| [dsh-plugins](https://github.com/dennisrongo/dsh-plugins/tree/main/plugins/dsh-theme) | `@dennisrongo/dsh-theme` | — | MIT | Twelve curated palettes, eight accent colours, a contrast slider and font/scale overrides for the DSH web UI, with an… |
| [dsh-theme-mineradio](https://github.com/dhicoc/dsh-theme-mineradio) | `dsh-theme-mineradio` | — | MIT | Mineradio glassmorphism theme for the DSH web UI: champagne-gold glass panes, a fluid or wallpaper backdrop, and a… |
| [dsh-plugin-gemini-theme](https://github.com/dingyi580/dsh-plugin-gemini-theme) | `dingyi580/dsh-plugin-gemini-theme` | — | — | Gemini-styled skin restyling the conversation ground, sidebar rows, hero greeting and composer through one stylesheet… |
| [dsh-arknights](https://github.com/DocJlm/dsh-arknights/tree/main/skins/pramanix-eyjafjalla) | `dsh-arknights` | — | (MIT AND CC-BY-NC-SA-4.0) | Arknights-inspired fan skin for the DSH Web UI featuring Pramanix and Eyjafjalla in a day/night celestial garden. |
| [dsh-colors](https://github.com/dreamtao2199/dsh-colors) | `dreamtao2199/dsh-colors` | — | — | 22 light-only palettes (Pantone / Chinese traditional / Morandi) and 14 composable surface effects for DeepSeek… |
| [dsh-arknights-theme](https://github.com/theflowyears/dsh-arknights-theme) | `dsh-arknights-theme` | — | MIT | 为《明日方舟》玩家在 DSH Web 上构建沉浸感：12 张整屏壁纸（按画面自适应的边缘虚化）、按每张图解算的玻璃与文字色、罗德岛图标体系，以及签字式的授权与选择交互。 / Building immersion for Arknights… |
| [dsh-bloom-theme](https://github.com/webkubor/dsh-bloom-theme) | `dsh-bloom-theme` | — | MIT | Bloom for DSH — 玻璃+莫兰迪主题。10 套 OKLCH 配色（黛蓝/朱砂/桃夭/天青/竹青/赭石/青金/琥珀/落霞/青莲），明暗自适应；磨砂玻璃面板默认常开；微动效 +… |
| [dsh-claude-style](https://github.com/nwflower/dsh-claude-style) | `dsh-claude-style` | — | MIT | Claude Code Desktop theme for DeepSeek Harness (dsh) web GUI — visual & interaction overhaul |
| [dsh-claude-theme](https://github.com/jipika/dsh-claude-theme) | `dsh-claude-theme` | — | MIT | Claude warm-ivory appearance for DeepSeek Harness: color tokens + serif typography, extracted verbatim from… |
| [dsh-client-ui-theme-xp](https://github.com/samizuhm/dsh-client-ui-theme-xp) | `dsh-client-ui-theme-xp` | — | MIT | Windows XP Luna desktop theme for the DeepSeek Harness web GUI: floating window manager with taskbar and desktop icons… |
| [dsh-columbina-theme](https://github.com/hyposelen1a/dsh-columbina-theme) | `dsh-columbina-theme` | — | MIT | A Genshin Impact Columbina (哥伦比娅) themed plugin for DeepSeek Harness (Web and Desktop): preset/custom background images… |
| [dsh-custom-theme](https://github.com/sparrived/dsh-custom-theme) | `dsh-custom-theme` | — | MIT | User-editable CSS themes and background images for the DSH Web GUI and Desktop app, with pickers in Settings |
| [dsh-dracula-theme](https://github.com/ossfrankfrank/dsh-dracula-theme) | `dsh-dracula-theme` | — | MIT | 🧛 Dracula theme for DeepSeek Harness: the classic dark palette (plus the Soft variant) registered into the built-in… |
| [dsh-glass-ui-theme](https://github.com/lkdxzhxi/dsh-glass-ui-theme) | `dsh-glass-ui-theme` | — | MIT | 为 DeepSeek Harness 打造的液态玻璃 UI 主题：磨砂玻璃+边缘折射、可调透明度/模糊/色调、自定义字体、背景图与动态壁纸（多图轮播）、自定义 CSS、柔和动画。 |
| [dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) | `dsh-joi-channel-theme` | — | MIT | 轴伊 Joi 双衣装主题（Joi-Flowers / Joi-Library）for DeepSeek Harness — unofficial, non-commercial fan theme plugin（0.1.14：修复… |
| [dsh-kaze-tachinu-theme](https://github.com/suuuuunamei/dsh-kaze-tachinu-theme) | `dsh-kaze-tachinu-theme` | — | MIT | Kaze Tachinu (The Wind Rises) theme for DeepSeek Harness Web GUI — dynamic Cordis plugin source (host + client halves)… |
| [dsh-kimino-theme](https://github.com/niiang/dsh-kimino-theme) | `dsh-kimino-theme` | — | MIT | Kimi no Na wa (Your Name) theme for DeepSeek Harness Web GUI — dynamic Cordis plugin source (host + client halves) plus… |
| [dsh-kinich-theme](https://github.com/xian-jl/dsh-kinich-theme) | `dsh-kinich-theme` | — | SEE LICENSE IN LICENSE | Modern Jungle Kinich & Ajaw UI for DeepSeek Harness Web and Desktop with live official DeepSeek balance monitoring and… |
| [dsh-official-homepage-theme](https://github.com/johnnyting/dsh-official-homepage-theme) | `dsh-official-homepage-theme` | — | MIT | DeepSeek Harness官方首页主题插件，包含流体鼠标效果、弹性网格与动态小鱼。 |
| [dsh-oh-my-theme](https://github.com/zhxqc/dsh-oh-my-theme) | `dsh-oh-my-theme` | — | MIT | Theme + file workspace plugin for DeepSeek Harness (dsh) web GUI: curated --dsw-alias-* skin palettes with live hover… |
| dsh-shell-themes | `dsh-shell-themes` | — | MIT | dsh-desktop 内建主题宿主：一个插件承载多个数据主题（themes/<id>/），经 webserver/index-inject 注入活动主题的前端 CSS；主题清单同时供壳复用（窗口底色 / 启动屏） |
| [dsh-theme](https://github.com/mux9056-bot/dsh-theme) | `dsh-theme` | — | Apache-2.0 | 30-theme pack for the DeepSeek Harness web UI — a zero-dependency DSH client plugin plus drop-in CSS themes. |
| [dsh-theme-acid-noir](https://github.com/yrracowl/dsh-theme-acid-noir) | `dsh-theme-acid-noir` | — | MIT | EN: Usability-first cyber-editorial themes for DeepSeek Harness Web with reversible lifecycle effects. 0.4.7 renames… |
| [dsh-theme-brick](https://github.com/shanhaifish/dsh-theme-brick) | `dsh-theme-brick` | — | MIT | Brick — a restrained, token-only theme layer for DeepSeek Harness Web. Warm plaster neutrals, mortar hairlines, one… |
| [dsh-theme-center](https://github.com/dac114514/dsh-theme-center) | `dsh-theme-center` | — | MIT | DeepSeek Harness 主题中心 · Theme Center for dsh web UI：精选主题画廊（浅色/深色分组）、一键切换、自定义壁纸、dsh-theme 导入导出 |
| [dsh-theme-customizer](https://github.com/lxxz1918/dsh-theme-customizer) | `dsh-theme-customizer` | — | MIT | DeepSeek Harness (DSH) Web 界面自定义主题插件：七区域背景（主界面/侧边栏/输入区/设置界面/浮窗/Cordis，纯色/图片/选区裁剪/透明度）、文字颜色 5… |
| dsh-theme-cyberpunk2077 | `dsh-theme-cyberpunk2077` | — | MIT | Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — NC yellow × neon cyan identity, CRT scanlines… |
| [dsh-theme-endfield-re](https://github.com/skillynotfound/dsh-theme-endfield-re) | `dsh-theme-endfield-re` | — | MIT | Fork of dsh-theme-endfield (based on upstream 1.1.5): the industrial editorial look of the Arknights: Endfield official… |
| [dsh-theme-escook](https://github.com/simon-yyy/dsh-theme-escook) | `dsh-theme-escook` | — | MIT | 🌸 彬哥の经典主题 (escook-theme) for DeepSeek Harness — 优雅暗夜紫调与琥珀金高亮美学主题 |
| [dsh-theme-firefly](https://github.com/liu-za-81/dsh-theme-firefly) | `dsh-theme-firefly` | — | MIT | 崩坏：星穹铁道 · 流萤主题 —— 立绘壁纸背景 + 萤火绿霓虹配色 + 开屏变身动画 |
| [dsh-theme-machine](https://github.com/yuqisun/dsh-theme-machine) | `dsh-theme-machine` | — | MIT | Person-of-Interest skin for DeepSeek Harness: THE MACHINE surveillance-HUD theme (dark, cyan-on-black). Token override… |
| dsh-theme-neko | `dsh-theme-neko` | — | MIT | A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI, featuring the artist's artwork as the wallpaper… |
| [dsh-theme-pack](https://github.com/math-lrz/dsh-theme-pack) | `dsh-theme-pack` | — | MIT | 16 third-party theme skins for the DeepSeek Harness (DSH) Web GUI — Catppuccin / Gruvbox / Everforest / Rosé Pine /… |
| [dsh-theme-songgrid](https://github.com/yefengliu1/dsh-theme-songgrid) | `dsh-theme-songgrid` | — | MIT | 宋律 Songgrid —— 宋代美学 × 瑞士国际主义设计语言的 DeepSeek Harness Web 主题：宣纸/夜墨双变体、汝窑天青功能色、青绿山水背景。Not affiliated with DeepSeek. |
| [dsh-theme-triptych](https://github.com/imocking/dsh-theme-triptych) | `dsh-theme-triptych` | — | MIT | DeepSeek Harness appearance theme pack — NEXUS / COMIKET / IRONCORE, three themed editions (palettes from keyshub.top /… |
| [dsh-theme-webgui](https://github.com/lqtungfx32577/deepseek-web-gui-plugin) | `dsh-theme-webgui` | — | MIT | Enhanced DSH Web GUI plugin: custom background image, interactive terminal, code editor, and accept/reject code changes. |
| [dsh-theme-whalegirl](https://github.com/zhoucourier/dsh-theme-whalegirl) | `dsh-theme-whalegirl` | — | MIT | DeepSeek-鲸鱼娘 (Whale Girl) theme for the DeepSeek Harness web GUI — ported from the DreamSkin skin package: full --dsw-*… |
| [dsh-theme-windowsxp](https://github.com/liyy996/dsh-theme-windowsxp) | `dsh-theme-windowsxp` | — | MIT | 把 DSH 换成 Windows XP：Luna 蓝皮肤（米色面板、渐变按钮、#7F9DB9 输入框、圆角滚动条、Bliss 桌面壁纸）＋ 一轮跑完时的提示音与完成弹窗。 |
| [DSH-Transparent-UI-Plugin](https://github.com/du-u-uck/DSH-Transparent-UI-Plugin) | `du-u-uck/dsh-transparent-ui-plugin` | — | — | Aqua glassmorphism theme for the DeepSeek Harness web UI: mica and compatibility modes with adjustable blur and frost… |
| [dsh-vietnam](https://github.com/DucLong06/dsh-vietnam) | `duclong06/dsh-vietnam` | — | — | Vietnamese UI language for the DSH web client (all 2,615 core strings), three Vietnamese palettes in light and dark… |
| [dsh-theme-mediascape](https://github.com/EIGHTfs/dsh-theme-mediascape) | `dsh-theme-mediascape` | — | MIT | Media-scape theme for the DSH web UI: standing/character-art and video wallpapers (mp4/webm, local + online) with boot… |
| [dsh-session-colorful-unread-pin-jobs](https://github.com/enterhalf/dsh-session-colorful-unread-pin-jobs) | `enterhalf/dsh-session-colorful-unread-pin-jobs` | — | — | Colors each DSH sidebar session title by state: unread (blue while the model is running, green once it has finished)… |
| [dsh-client-ui-dracula](https://github.com/Erbsen16/dsh-client-ui-dracula) | `dsh-client-ui-dracula` | — | MIT | Dracula (VS Code) dark theme for the DSH Web GUI: the vampire palette mapped onto the product colour tokens, plus a… |
| [dsh-aura-theme](https://github.com/erdnc39/dsh-aura-theme) | `erdnc39/dsh-aura-theme` | — | — | Aura theme plugin for the DeepSeek Harness web GUI: warm orange-black palette, frosted-glass surfaces, animated chat… |
| [dsh-theme](https://github.com/EternalNight996/dsh-theme) | `@eternalnight/dsh-theme` | — | MIT | Theme skin plugin for DeepSeek Harness — built-in themes / static image / dynamic 360°-follow video, one-click from the… |
| [dsh-theme-studio](https://github.com/Ether0516/dsh-theme-studio) | `ether0516/dsh-theme-studio` | — | — | Custom themes, colors, and fonts for DeepSeek Harness Desktop. |
| [dsh-theme-eink-retro](https://github.com/exoticknight/dsh-theme-eink-retro) | `exoticknight/dsh-theme-eink-retro` | — | — | A paper-and-ink client-side theme for the DeepSeek Harness Web UI: Balanced preserves semantic status colors, and… |
| [dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass) | `dsh-theme-liquid-glass` | — | MIT | Genuine Liquid Glass theme for DSH Web UI: SVG feDisplacementMap edge refraction on input card, send button, bubbles… |
| [dsh-theme-macintosh](https://github.com/fengb3/dsh-theme-macintosh) | `dsh-theme-macintosh` | — | MIT | Classic Macintosh (System 7) pixel theme: desktop pattern canvas, Finder sidebar, monochrome buttons and dialogs… |
| [dsh-everforest](https://github.com/FormalistBlue/dsh-everforest) | `formalistblue/dsh-everforest` | — | — | Everforest palettes for the DeepSeek Harness Web/Desktop UI: six schemes (dark and light, each in hard, medium or soft)… |
| [dsh-theme-inkstone](https://github.com/fuguang12123/dsh-theme-inkstone) | `fuguang12123/dsh-theme-inkstone` | — | — | Inkstone is a monochrome theme inspired by Obsidian Minimal E-ink, with inverted sidebar interactions, colored Markdown… |
| [dsh-za-warudo](https://github.com/Fwkkk666/dsh-za-warudo) | `fwkkk666/dsh-za-warudo` | — | — | Adds an Appearance switch to the DSH sidebar with a three-second time-stop transition, synchronized sound, and… |
| [Rhine-Lab-Codex-Theme](https://github.com/Galaxy-2001/Rhine-Lab-Codex-Theme/tree/main/dsh) | `galaxy-2001/rhine-lab-codex-theme` | — | — | Rhine Lab-inspired light and dark themes with animated backgrounds for DeepSeek Harness. |
| [Cyberpunk-theme-for-dsh](https://github.com/GGbao-114/Cyberpunk-theme-for-dsh) | `ggbao-114/cyberpunk-theme-for-dsh` | — | — | Cyberpunk 2077 red/neon theme for DeepSeek Harness (dsh-plugin) — fork of dsh-theme-cyberpunk2077 by Tommy00748… |
| [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme) | `ggbond2424648901/deep-whale-day-night-theme` | — | — | Non-commercial day/night whale-girl skin for official Harness rc.7: current no-viewport-frame layout, paired… |
| [dsh-plugin-appearance](https://github.com/gh-gongjin/dsh-plugin-appearance) | `gh-gongjin/dsh-plugin-appearance` | — | — | DSH (DeepSeek Harness) 外观插件：8 张内置配色皮肤走宿主官方主题通道，brand slot 换侧栏/首屏标志与名称行（内置六枚或用户自己的图片）。零第三方依赖，不写宿主文件、不注入全局 CSS。 |
| [dsh-appearance-studio](https://github.com/Goku-Raku/dsh-appearance-studio) | `goku-raku/dsh-appearance-studio` | — | — | Appearance themes, wallpaper, frosted glass and typography for official DeepSeek Harness Desktop. DSH 皮肤、外观主题与壁纸插件。 |
| [dsh-stylevault](https://github.com/GptsApp/dsh-stylevault) | `gptsapp/dsh-stylevault` | — | — | 30 classic open-source theme palettes (Catppuccin, Nord, Tokyo Night, Gruvbox, Solarized, etc.) mapped to official… |
| [dsh-theme-frost](https://github.com/H2CO3w/dsh-theme-frost) | `h2co3w/dsh-theme-frost` | — | — | Turns an image folder into a frosted-glass global wallpaper for the DSH web UI, keeping the official palette. |
| [dsh-moonrise](https://github.com/hanyi7867069-create/dsh-moonrise) | `hanyi7867069-create/dsh-moonrise` | — | — | Moonrise dark theme for the DSH Web UI, with deep indigo surfaces and warm amber accents. |
| [dsh-self-built-plugins](https://github.com/harmless0819-dev/dsh-self-built-plugins) | `harmless0819-dev/dsh-self-built-plugins` | — | — | Index of self-built DSH plugins, grouped by purpose: appearance, control, collaboration. |
| [hcguo-public](https://github.com/HCGuo2000/hcguo-public/tree/main/plugins/amber-forge) | `hcguo2000/hcguo-public` | — | — | Amber CRT-style skin for DeepSeek Harness: overrides 14 theme tokens and 23 static palette entries, forces a monospace… |
| [dsh-appearance-studio](https://github.com/HealtherAnna/dsh-appearance-studio) | `dsh-appearance-studio` | — | MIT |  |
| [dsh-theme-herta](https://github.com/HerTa-st/dsh-theme-herta) | `dsh-theme-herta` | — | MIT | A Herta theme for DeepSeek Harness: an ASCII boot opening ported from the upstream Herta project, a violet palette of… |
| [dsh-anime-theme](https://github.com/huantest2024/dsh-anime-theme) | `huantest2024/dsh-anime-theme` | — | — | 二次元主题插件 for DeepSeek Harness — anime wallpaper / glass panel / mascot widgets, installable via the official plugin… |
| [dsh-orca-glass](https://github.com/huzhengbang2007/dsh-orca-glass) | `huzhengbang2007/dsh-orca-glass` | — | — | DSH Web plugin that injects an SVG (feTurbulence + feDisplacementMap) refraction filter and applies it through… |
| [dsh-ui-liquid-glass](https://github.com/iStarryDust/dsh-ui-liquid-glass) | `istarrydust/dsh-ui-liquid-glass` | — | — | DSH 全液态玻璃皮肤：13 个可调折射液态玻璃面、随时段轮换的壁纸、四档主题色、水滴样式高亮飞镜。 |
| [dsh-flowglass](https://github.com/Iwctwbh/dsh-flowglass) | `iwctwbh/dsh-flowglass` | — | — | DeepSeek Harness 会话实时流程图，可查看工具调用、并行分组、子代理分支和逐层详情。 |
| [dsh-theme-presets](https://github.com/JessenReinhart/dsh-theme-presets) | `jessenreinhart/dsh-theme-presets` | — | — | DSH plugin: Catppuccin, Gruvbox, Dracula, Nord, Tokyo Night, Rosé Pine, Solarized palettes with accent and font… |
| [dsh-theme-manager](https://github.com/jipika/dsh-theme-manager) | `jipika/dsh-theme-manager` | — | — | Theme manager for DeepSeek Harness: one settings page that lists every theme layer injected into the page (color… |
| [dsh-huashu-pixel](https://github.com/jizenghui81/dsh-huashu-pixel) | `jizenghui81/dsh-huashu-pixel` | — | — | Warm pixel theme for the DeepSeek Harness Web UI: cream-paper and arcade-phosphor palettes, pixel chrome with bundled… |
| [dsh-liquid-glass-input](https://github.com/jkamkk/dsh-liquid-glass-input) | `jkamkk/dsh-liquid-glass-input` | — | — | 给 DSH Web GUI 输入卡加上液态玻璃折射效果与弹簧按压动画。已发布 npm：dsh plugin --profile web add dsh-liquid-glass-input。 |
| [dsh-appearance](https://github.com/LeeKai233/dsh-appearance) | `leekai233/dsh-appearance` | — | — |  |
| [deepseek-style-theme](https://github.com/Lichtspur/deepseek-style-theme) | `lichtspur/deepseek-style-theme` | — | — | 为 dsh web GUI 复刻 DeepSeek 官网风格的主题皮肤：流体粒子背景、玻璃拟态侧边栏与输入框、运行中子代理面板与 DSTT 高峰时段配色。 |
| [ds-hentai](https://github.com/lisongxuan/ds-hentai) | `ds-hentai` | — | MIT | ExHentai 皮肤 for DeepSeek Harness。DS Hentai / DeepSeek Hentai，深炭底、浅灰文字、灰色边框；会话列表像画廊索引，发送框像搜索栏。预览Demo：https://dshentai-dem… |
| [dsh-theme-studio](https://github.com/marselarts/dsh-theme-studio) | `marselarts/dsh-theme-studio` | — | — | Theme Studio for the DeepSeek Harness Web UI: edit the design-system color tokens and fonts per light/dark scheme, in… |
| [dsh-node-appearance](https://github.com/Max-Null/dsh-node-appearance) | `@max-null/dsh-node-appearance` | — | MIT | DeepSeek Harness Web GUI 会话节点外观插件：按节点类别/工具名可配置着色（左侧色条 + 淡色底），附带"显示思考过程"开关；纯前端渲染增强，改动即时生效并持久化到 DSH 用户设置文件。 |
| [dsh-pwsh-style](https://github.com/me9rez/dsh-pwsh-style) | `me9rez/dsh-pwsh-style` | — | — | 修改 DSH 会话回复中 pwsh(PowerShell) 工具卡片的主题、字体与可读性增强。Restyle pwsh tool-call cards in DSH: themes, system fonts, copy &… |
| [DSH-Claude-Style-Reasoning-Slider](https://github.com/MEMZ-JZY/DSH-Claude-Style-Reasoning-Slider) | `memz-jzy/dsh-claude-style-reasoning-slider` | — | — | Animated Claude-style reasoning-effort slider and model picker that replaces the native DSH model selector. |
| [dsh-markdown-xyy](https://github.com/mengnanxyyyy/dsh-markdown-xyy) | `dsh-markdown-xyy` | — | MIT | 轻量级对话 Markdown 主题插件——增强原生着色，4 套内置主题（浅/深双档）、用户自定义 CSS 主题、系统感知自动切换、内置主题编辑器，提升快速阅读体验。 |
| [dsh-appearance-plugins](https://github.com/MisakaZentai/dsh-appearance-plugins) | `misakazentai/dsh-appearance-plugins` | — | — | DeepSeek Harness Web GUI appearance plugins: themes + mascots, zero bundled image assets |
| [dsh-appearance-plugin](https://github.com/Mortis-Hope/dsh-appearance-plugin) | `mortis-hope/dsh-appearance-plugin` | — | — | DeepSeek Harness appearance plugin: palette presets, custom RGB gradient background, local image/video wallpaper… |
| [dsh-ui-liteglass](https://github.com/mumuer1024/dsh-ui-liteglass) | `dsh-ui-liteglass` | — | MIT | DeepSeek Harness 轻量级外观皮肤：自定义壁纸、玻璃质感面板与重点色；服务端持久化、多设备一致，不接管原生深浅色。 |
| [dsh-sky-window](https://github.com/nickfast2025/dsh-sky-window) | `nickfast2025/dsh-sky-window` | — | — | 为 DSH 网页工作区添加按城市当地时间变化的天空主题，支持太阳移动、日夜配色、浮云、时间预览与沉浸天空。 |
| [dsh-theme-industrial](https://github.com/nishicouqie/dsh-theme-industrial) | `nishicouqie/dsh-theme-industrial` | — | — | 工业灰域外观插件：为 DeepSeek Harness Web 提供纯黑灰工业风 + LaTeX 学术论文排版（可独立开关）。Industrial dark appearance plugin for the dsh web UI… |
| [dsh-liao-shelf](https://github.com/oliblue-evan/dsh-liao-shelf) | `oliblue-evan/dsh-liao-shelf` | — | — | 插件书架：把官方插件页排成卡片网格，带过滤搜索。Plugin Shelf: card grid for the official plugins page. Appearance only. |
| [dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) | `perrylink/dsh-output-styles` | — | — | 运行时切换模型输出风格（对标 Claude Code outputStyles），另加 output.render.* 呈现协议：/style 命令、按会话持久化、systemPrompt 注入、六个内置风格、Web… |
| [dsh-lifeline](https://github.com/Physicolor/dsh-lifeline) | `physicolor/dsh-lifeline` | — | — | Right-side message navigation rail for DeepSeek Harness: per-message tick marks, hover-to-expand preview drawer, smooth… |
| [dsh-ui-harmonizer](https://github.com/Physicolor/dsh-ui-harmonizer) | `physicolor/dsh-ui-harmonizer` | — | — | UI harmonizer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles style conflicts… |
| [dsh-widgets](https://github.com/Physicolor/dsh-widgets) | `physicolor/dsh-widgets` | — | — | A customizable widget rail for the right side of DeepSeek Harness: 61 cards covering session stats, tokens and cache… |
| [dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) | `realhacker/dsh-theme-colorizer` | — | — | A Deepseek Harness plugin that gives its UI color themes. |
| [dsh-appearance](https://github.com/Semidia/dsh-appearance) | `semidia/dsh-appearance` | — | — | DSH plugin: unified appearance coordinator — theme colors, fonts, UI font size, per-workspace markdown… |
| [dsh-theme-liuguang](https://github.com/ShokouP/dsh-theme-liuguang) | `shokoup/dsh-theme-liuguang` | — | — | 给 DSH 界面的两套可切换设计语言：内部发光的液态玻璃，与米色/血红/墨黑的苏联构成主义海报；附带个性化面板、投放式 CSS 皮肤包与 7 种表情的鲸鱼娘桌宠。 |
| [dsh-dusk-theme](https://github.com/Skylin1129/dsh-dusk-theme) | `skylin1129/dsh-dusk-theme` | — | — | 明日方舟，夕主题壁纸。#Arknights #Dusk |
| [dsh-plugin-liquid-glass](https://github.com/smj-1680/dsh-plugin-liquid-glass) | `dsh-plugin-liquid-glass` | — | MIT | 适用于 DSH 桌面端的液态玻璃 UI 美化插件，可与大部分壁纸插件联动使用，目前仅适配深色模式。 |
| [dsh-liquid-glass-balance-card](https://github.com/SoDaZilla-zzz/dsh-liquid-glass-balance-card) | `sodazilla-zzz/dsh-liquid-glass-balance-card` | — | — | DSH 网页右上角可拖动 3D 液态玻璃余额卡片：显示 DeepSeek API 余额、累计消费与 Token 统计（今天/昨天/近7天/近30天/全部），玻璃参数/3D 厚度/颜色均可调，内置官方充值入口。 |
| [dsh-appearance](https://github.com/stars-3/dsh-appearance) | `stars-3/dsh-appearance` | — | — | dsh-appearance-editor - DeepSeek Harness appearance editor (client plugin): background / wallpaper / color tokens /… |
| [dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale) | `dsh-blue-whale` | — | MIT | 复刻 DeepSeek Chat 蓝鲸配色的皮肤，亮色/深色跟随系统外观。 |
| [beautiCode](https://github.com/starsstreaming/beautiCode) | `beauticode-dsh` | — | MIT | 为 DSH Web 与 Desktop 设置本地图片与 MP4 视频背景（也支持 Codex、Cursor、豆包、WorkBuddy）：侧栏「背景」面板、可保存命名主题、声音开关、恢复上次背景、只留背景的摸鱼模式，以及… |
| [dsh-chat-history](https://github.com/Stylelinzzz/dsh-chat-history) | `stylelinzzz/dsh-chat-history` | — | — | Adds a "History" conversation view tab listing the session's user messages as a clickable directory, with auto-paging… |
| [dsh-appearance](https://github.com/sunyuhuirong/dsh-appearance) | `sunyuhuirong/dsh-appearance` | — | — | DSH appearance plugin: theme, sidebar, readability, background image |
| [dsh-minecraft-ui](https://github.com/TFboy1/dsh-minecraft-ui) | `tfboy1/dsh-minecraft-ui` | — | — | 将 DSH Web 直接呈现为可游玩的全屏第一人称 Minecraft 风格体素界面，而非只更换颜色的皮肤：用户可以在可持久化的 Three.js… |
| [dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | `dsh-ui-appearance` | — | MIT | DeepSeek Harness 外观自定义:主题调色、壁纸与视频背景、半透明与毛玻璃。 |
| [dsh-skill-x4-npc-replacement-mod](https://github.com/tridkx/dsh-skill-x4-npc-replacement-mod) | `tridkx/dsh-skill-x4-npc-replacement-mod` | — | — | DSH skill: build NPC appearance replacement mods for X4: Foundations (AI-generated) |
| [dsh-deepseek-theme-studio](https://github.com/tuibe/dsh-deepseek-theme-studio) | `tuibe/dsh-deepseek-theme-studio` | — | — | DSH Web GUI 客户端主题插件：流体背景、毛玻璃面板与量子化着色器效果，100 项参数可调并持久化到 JSON 文件。 |
| [dsh-liquid-glass](https://github.com/Ultronen/dsh-liquid-glass) | `dsh-liquid-glass` | — | MIT | 一键让整个 DeepSeek Harness 界面通透起来：透明度滑块随心调，背景图自由换。 |
| [dsh-glass-weather](https://github.com/w-j-y-wjy/dsh-glass-weather) | `w-j-y-wjy/dsh-glass-weather` | — | — | 会话顶栏的玻璃天气胶囊：23 种天气状态各自配色、SVG 图标与 canvas 粒子层，可按字段开关显示内容，并注册 get_weather 工具（Open-Meteo 免密钥数据）。 |
| [dsh-dragon-control](https://github.com/wangtheme-coder/dsh-dragon-control) | `wangtheme-coder/dsh-dragon-control` | — | — | 仅支持 Windows x64，0.5.4 预览版：两个受控工具（dragon_browser 与 dragon_desktop），网页走 DOM/CDP、桌面走 Windows UI Automation，按网站来源和可执行文件分… |
| [dsh-Xiao-theme](https://github.com/Xian-JL/dsh-Xiao-theme) | `xian-jl/dsh-xiao-theme` | — | — | 面向 DeepSeek Harness Web 与 Desktop 的魈角色主题，提供明暗配色、可切换立绘、可拖动伙伴、会话状态反馈及可选的官方 DeepSeek 余额展示。 |
| [xiao-ui-theme-ts](https://github.com/jinxlux/xiao-theme-dsh-ui-plugin) | `xiao-ui-theme-ts` | — | MIT | Customizable theme plugin for DeepSeek Harness web UI. Ships with a Xiao-style jade palette by default; accent color… |
| [dsh-theme-hacker-terminal](https://github.com/XiaoluoFoxington/dsh-theme-hacker-terminal) | `xiaoluofoxington/dsh-theme-hacker-terminal` | — | — | Hacker-terminal skin for the dsh web GUI: pure black, high-contrast green, right-angle geometry, monospace font… |
| [dsh-desktop-glass](https://github.com/xiaoyan3587/dsh-desktop-glass) | `xiaoyan3587/dsh-desktop-glass` | — | — | 给 DeepSeek Harness 网页端加一层磨砂玻璃皮肤，背板是你正在用的壁纸——支持 Wallpaper Engine 动态壁纸，换壁纸 10 秒内自动跟随。 |
| [dsh-client-ui-seaglass](https://github.com/xiyunyunyun/dsh-client-ui-seaglass) | `dsh-client-ui-seaglass` | — | MIT | Seaglass是一个高自由度的玻璃质感主题。 |
| [dsh-glass-effect](https://github.com/Yinhefuluoye/dsh-glass-effect) | `yinhefuluoye/dsh-glass-effect` | — | — | A glass-material appearance for DSH: translucent composer, dialogs, menus and code blocks — one switch in Settings, off… |
| [dsh-custom-style](https://github.com/yutao8/dsh-custom-style) | `yutao8/dsh-custom-style` | — | — | Adds a Custom CSS section to Settings for adjusting dialog dimensions, font sizes, full-window wallpapers, and… |
| [dsh-appearance](https://github.com/yuzhou1227/dsh-appearance) | `yuzhou1227/dsh-appearance` | — | — |  |
| [Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme) | `dsh-catppuccin` | — | MIT | 🐱 Catppuccin 主题插件：充满活力、令人放松的柔和彩色主题。遵循官方 26 色粉彩盘，🌻 Latte / 🪴 Frappé / 🌺 Macchiato / 🌿 Mocha… |
| [dsh-text-appearance](https://github.com/zhuyoujie-2025/dsh-text-appearance) | `zhuyoujie-2025/dsh-text-appearance` | — | — |  |
| [dsh-ivory](https://github.com/ZJUZhiyuCai/dsh-ivory) | `zjuzhiyucai/dsh-ivory` | — | — | DSH Web 暖中性色明暗主题，支持响应式布局、双语设置、安全 Markdown 预览、内容块复制与无遥测运行。 |
| [dsh-vscode-themes2](https://github.com/zxbc/dsh-vscode-themes2) | `zxbc/dsh-vscode-themes2` | — | — | 在 DeepSeek Harness Web UI 中浏览、搜索、安装并应用 VS Code 配色主题：内置 14 款精选主题并带实时色卡预览，可搜索官方 VS Code 插件市场安装更多主题，一键安装会把任意主题的调色板映射到 DSW… |
| [dsh-anime-theme](https://github.com/zxr2115-1/dsh-anime-theme) | `zxr2115-1/dsh-anime-theme` | — | — | DeepSeek Harness (DSH) 二次元壁纸主题插件 · 随机动漫壁纸 / 四档铺满 / 边缘羽化 / 深浅色自适应 / 可拖动控制坞 · theme plugin for DeepSeek Harness |

## 壁纸 / 背景

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-background-by-model](https://github.com/HarmlessFunny/dsh-background-by-model) | `dsh-background-by-model` | 1166 | MIT | Per-model appearance for the DSH Web UI: an ordered rule list matched against the current session model name, each rule… |
| [dsh-wallpaper-bg](https://github.com/nishuoyang/dsh-wallpaper-bg) | `dsh-wallpaper-bg` | 806 | MIT | DeepSeek Harness（dsh web 网页界面与 0.2 桌面端）独立壁纸背景插件：内置壁纸 / 自定义上传 / Wallpaper Engine… |
| [wallpaper-engine](https://github.com/yu502950715yang/dsh-use-wallpaper) | `@dsh-use/wallpaper-engine` | 661 | MIT | 为 DSH（DeepSeek Harness）Web GUI 提供 Wallpaper Engine 壁纸背景：Scene 壁纸由 Three.js（WebGL2）+ Rust/WASM 粒子模拟在浏览器实时渲染，视频壁纸直接播放、Web… |
| [dsh-mpkg-wallpaper](https://github.com/XHR666/dsh-mpkg-wallpaper) | `dsh-mpkg-wallpaper` | 372 | MIT | Load Wallpaper Engine .mpkg files as the DSH web background: embedded video, time-of-day switching, unified frosted… |
| [dsh-ui-wallpaper](https://github.com/ansellwan/dsh-custom-wallpaper) | `dsh-ui-wallpaper` | 160 | MIT | DeepSeek Harness 自定义壁纸插件：在设置面板里选本机图片当背景，可调不透明度/模糊/界面通透度/压暗，即时预览。A DeepSeek Harness Web wallpaper plugin with a… |
| [dsh-wallpaper](https://github.com/Frog755/dsh-wallpaper) | `@frog755/dsh-wallpaper` | 155 | MIT | Persistent image or MP4 wallpaper for the DSH Web profile: a wallpaper card under Settings -> General selects a local… |
| [dsh-client-ui-wallpaper](https://github.com/gnk478/dsh-client-ui-wallpaper) | `dsh-client-ui-wallpaper` | 139 | MIT | Local images and videos as the DSH desktop window background: timed rotation with 0.7s cross-fades, first-frame-ready… |
| [dsh-shunshun-wallpaper](https://github.com/Ddamage/dsh-shunshun-wallpaper) | `dsh-shunshun-wallpaper` | 117 | MIT | Fan-made wallpaper plugin themed on the streamer Zhang Shunfei: full-screen high-definition rotating colorful pegasus… |
| [pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill) | `dsh-pdf-background-gray` | 105 | MIT | 注册 remove-pdf-background-gray 技能：去除扫描 PDF 的灰色/米白底色，保持分辨率、页面几何与抗锯齿文字边缘（无损 Flate 写回），核心为单文件 Python 脚本（pypdf + Pillow +… |
| [dsh-wallpaper](https://github.com/xiaoxiao44443/dfy-dsh-plugins) | `@dfy-plugins/dsh-wallpaper` | 66 | MIT | DeepSeek Harness 可配置图片壁纸：适应模式、位置、透明度、模糊与颜色遮罩。 |
| [dsh-live-wallpaper](https://github.com/hinayoung23/dsh-live-wallpaper) | `dsh-live-wallpaper` | 48 | MIT | A dependency-free live wallpaper and theme center for the DeepSeek Harness Web UI. |
| [dsh-liuli-ui-enhance](https://github.com/LilycleHeart/dsh-liuli-ui-enhance) | `dsh-liuli-ui-enhance` | 39 | MIT | 琉璃 UI 增强 —— DSH 主题插件:M3 动态取色、壁纸磨砂材质、声纹可视化、dock shell、嵌入式浏览器 |
| [wallpaper-engine-dsh](https://github.com/weilv-d/wallpaper-engine-dsh) | `wallpaper-engine-dsh` | 31 | MIT | Wallpaper Engine library as the DSH web GUI background — video/web/still wallpapers, rotation lists, search, resource… |
| [dsh-wallpaper-bridge](https://github.com/kyorakuyk/dsh-wallpaper-bridge) | `dsh-wallpaper-bridge` | 17 | MIT | Loopback DSH session bridge for the dsh-wallpaper desktop app. |
| @starryhui/dsh-background | `@starryhui/dsh-background` | 16 | MIT | 自定义 DSH WebUI 背景：图库随机、自由拉伸裁切框、不透明度、高斯模糊、面板透明、多图交叉淡化轮播。 |
| @anningui/dsh-client-ui-skin-md3-wallpaper | `@anningui/dsh-client-ui-skin-md3-wallpaper` | 15 | MIT | Standalone Material You (MD3) dynamic-color skin for the dsh web GUI: upload any wallpaper, Monet extracts the palette… |
| [dsh-wallpaper-ui](https://github.com/adydc-99/dsh-wallpaper) | `dsh-wallpaper-ui` | 13 | MIT | Persistent image, GIF, and video wallpapers for the DeepSeek Harness Web UI |
| [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | `dsh-client-ui-aqua` | — | MIT | 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关… |
| [dsh-chat-wallpaper](https://github.com/LeeRolling/dsh-chat-wallpaper) | `leerolling/dsh-chat-wallpaper` | — | — | 给 DeepSeek Harness 的开场视频 + 聊天底图插件 |
| [touhou-hakurei](https://github.com/xiake595/touhou-hakurei) | `xiake595/touhou-hakurei` | — | — | 灵梦（Reimu）·博丽神社（东方Project）美化版皮肤：神社昼夜实景背景、灵梦立绘、画框侧边栏与输入框、纸白透明界面 — DeepSeek Harness Web GUI skin |
| [dsh-bg-new](https://github.com/sz1698/dsh-bg-new) | `sz1698/dsh-bg-new` | — | — | DSH 网页界面换背景：侧栏「壁纸」按钮弹出右侧抽屉，支持系统预设/纯色/渐变/图片/视频，滚轮+拖动小图同时管缩放与定位，毛玻璃质感，本地媒体伺服不走云端。DSH web background & wallpaper plugin… |
| [dsh-wallpaper-engine](https://github.com/sakuraaa667/dsh-wallpaper-engine) | `sakuraaa667/dsh-wallpaper-engine` | — | — | 将wallpaper接入到deepseek harness中，可以设置dsh的动态壁纸 |
| [dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | `gameswu/dsh-plugin-background` | — | — | dsh壁纸插件 |
| [dsh-anime-wallpaper](https://github.com/1622352030/dsh-anime-wallpaper) | `1622352030/dsh-anime-wallpaper` | — | — | DeepSeek Harness 自定义皮肤壁纸插件 |
| [dsh-plugin-wallpaper-engine](https://github.com/li8476295-bot/dsh-plugin-wallpaper-engine) | `li8476295-bot/dsh-plugin-wallpaper-engine` | — | — |  |
| [dsh-wallpaper-rotator](https://github.com/liceses/dsh-wallpaper-rotator) | `liceses/dsh-wallpaper-rotator` | — | — | DSH 壁纸轮换插件：定时轮换应用背景壁纸（交叉淡化动效）、内置壁纸集、毛玻璃/压暗/文字阴影可读性调节。dsh plugin add 一键安装。 |
| [dsh-ui-preset-enhance](https://github.com/lssyd20070106/dsh-ui-preset-enhance) | `lssyd20070106/dsh-ui-preset-enhance` | — | — | Third-party DSH WebUI enhancement plugin: custom backgrounds, theme colors, prompt presets, token/context visibility… |
| [dsh-custom-ui](https://github.com/lsaa4/dsh-custom-ui) | `lsaa4/dsh-custom-ui` | — | — | 毛玻璃风格DSH主题，含壁纸、字体定制与网易云音乐 |
| [dsh-wallpaper](https://github.com/kdzhang-hub/dsh-wallpaper) | `kdzhang-hub/dsh-wallpaper` | — | — | Wallpaper Engine integration for DeepSeek Harness and Windows desktop customization. |
| [dsh-wallpaper](https://github.com/RexCue/dsh-wallpaper) | `rexcue/dsh-wallpaper` | — | — | Wallpaper skin for the DeepSeek Harness (dsh) web UI: image background with opacity, mask and blur controls. |
| [dsh-whale-background](https://github.com/tuogusa/dsh-whale-background) | `tuogusa/dsh-whale-background` | — | — | DeepSeek Harness Web 背景插件（client-only）：深海鲸鱼娘壁纸 + 半透明磨砂应用表面，支持设置页换图、透明度、contain/cover 与恢复默认，远程图片自动预检并 no-referrer 加载 |
| [silk-background](https://github.com/z21for99/silk-background) | `z21for99/silk-background` | — | — | DSH Web GUI 客户端插件：WebGL Silk 丝绸动态背景 + 全站玻璃化皮肤（官方主题 token 覆盖，零依赖） \| WebGL silk shader background & glassmorphism skin… |
| [dsh-anime-ui](https://github.com/ZhangQiding/dsh-anime-ui) | `zhangqiding/dsh-anime-ui` | — | — | Yamada Night Shift — 夜间动漫 UI 皮肤 + 本地相册背景插件 for DeepSeek Harness |
| [dsh-OyamaMahiro](https://github.com/dingmengchang/dsh-OyamaMahiro) | `dingmengchang/dsh-oyamamahiro` | — | — | 🎀《别当欧尼酱了！》(Onimai) 绪山真寻主题皮肤 for DeepSeek Harness (dsh-web)：马卡龙亮/暗双主题 × 纯 CSS… |
| [dsh-wallpaper](https://github.com/Gao-Yee/dsh-wallpaper) | `gao-yee/dsh-wallpaper` | — | — | Custom wallpaper background for the dsh web GUI (light theme only): fixed cover image under translucent liquid-glass… |
| [dsh-deepseek-flow](https://github.com/ifsherlock/dsh-deepseek-flow) | `ifsherlock/dsh-deepseek-flow` | — | — | DeepSeek 官网首屏的流动光场背景，逐像素复刻 deepseek.com 的 WebGL pattern shader，用作 DSH Web GUI 动态壁纸 |
| [dsh-wallpaper](https://github.com/kyorakuyk/dsh-wallpaper) | `kyorakuyk/dsh-wallpaper` | — | — | DeepSeek Harness 桌面壁纸：和你的大肥鱼一起生活吧！/DeepSeek Harness wallpaper——live with your whale girl! |
| [dsh-bg-image](https://github.com/lyh9712/dsh-bg-image) | `lyh9712/dsh-bg-image` | — | — | DSH (DeepSeek Harness) Web 背景图插件：自定义网页背景壁纸，侧边栏/聊天区半透明磨砂，带设置界面 |
| [dsh-plugin-wallpaper-engine-Yun](https://github.com/sdfsd85fds74f9d8/dsh-plugin-wallpaper-engine-Yun) | `sdfsd85fds74f9d8/dsh-plugin-wallpaper-engine-yun` | — | — | 让 DSH 更美观的插件，它接入了 Wallpaper Engine —— 基于 elysia395/dsh-wallpaper-engine v1.3.1 二次开发（合体版：壁纸美化 + 开机画面），致谢原作者及其所有贡献者。 |
| [DSH-easywallpaper](https://github.com/ZAB789752/DSH-easywallpaper) | `zab789752/dsh-easywallpaper` | — | — | Unofficial wallpaper plugin for DeepSeek Harness: image/video backgrounds, cropping, text styling and local persistence |
| [dsh-open-source](https://github.com/2154911078-ship-it/dsh-open-source) | `2154911078-ship-it/dsh-open-source` | — | — | DeepSeek Harness 本地配置与插件集：GIF 动态壁纸 + @文件选择插件 线条小狗主题 |
| [dsh-wallpaper-plugin](https://github.com/2746152175-beep/dsh-wallpaper-plugin) | `2746152175-beep/dsh-wallpaper-plugin` | — | — |  |
| [dsh-plugin-odette](https://github.com/bblike/dsh-plugin-odette) | `bblike/dsh-plugin-odette` | — | — | Odette / Snezhnaya theme skin for DeepSeek Harness Web: winter backgrounds, ballet cursors, ballerina thinking spinner |
| [dsh-plugin-image-wallpaper](https://github.com/CaoNing3212/dsh-plugin-image-wallpaper) | `caoning3212/dsh-plugin-image-wallpaper` | — | — | 自定义Deepseek Harness webUI主题 |
| [dsh-wallpaper](https://github.com/dugujun3-cloud/dsh-wallpaper) | `dugujun3-cloud/dsh-wallpaper` | — | — | DSH web plugin: whole-app background wallpaper - local library, wallhaven online search, local import, right-click… |
| [dsh-frutiger-aero](https://github.com/Hotsteel2901/dsh-frutiger-aero) | `hotsteel2901/dsh-frutiger-aero` | — | — | 🫧 Frutiger Aero skin for DeepSeek Harness (dsh): glass over a living sky-and-water wallpaper, aqua gloss, light +… |
| [dsh-chat-customizer](https://github.com/Magic-Mercury/dsh-chat-customizer) | `magic-mercury/dsh-chat-customizer` | — | — | DSH web plugin: dual-mode sidebar (sessions/contacts), per-agent wallpaper carousels, and DIY theme/color customization |
| [dsh-skin-background](https://github.com/megatronyy/dsh-skin-background) | `megatronyy/dsh-skin-background` | — | — | Image-background skin plugin for DeepSeek Harness (dsh): shipped + user wallpapers, custom image URLs, live dim/blur… |
| [DSH-Wallpaper-Engine](https://github.com/mhwww/DSH-Wallpaper-Engine) | `mhwww/dsh-wallpaper-engine` | — | — | DeepSeek Harness (dsh) 背景图片插件：内置默认图 / 自定义上传 / Wallpaper Engine 创意工坊一键应用 / 视频壁纸 ffmpeg 高清抽帧 |
| [dsh-wallpaper](https://github.com/miaoliwen/dsh-wallpaper) | `miaoliwen/dsh-wallpaper` | — | — | DSH (DeepSeek Harness) 壁纸插件：将本地图片注入为 Web 界面背景，右下角开关 + 透明度滑杆。\| Host-only wallpaper plugin for DeepSeek Harness web UI. |
| [dsh-ui-background](https://github.com/MM071022/dsh-ui-background) | `mm071022/dsh-ui-background` | — | — | DeepSeek Harness web UI customization plugin: local/URL background images, carousel, blur, dark overlay, glassmorphism… |
| [dsh-we-wallpaper-sync](https://github.com/tiger0012/dsh-we-wallpaper-sync) | `tiger0012/dsh-we-wallpaper-sync` | — | — | Reusable skill: browse/search/download Wallpaper Engine (Steam 431960) workshop wallpapers and wire them into the DSH… |
| [dsh-wallpaper-bridge](https://github.com/vanhungbui-11/dsh-wallpaper-bridge) | `vanhungbui-11/dsh-wallpaper-bridge` | — | — | Wallpaper Engine bridge for DeepSeek Harness (DSH) on Windows |
| [zcode-wallpaper-xiao](https://github.com/xiahou001/zcode-wallpaper-xiao) | `xiahou001/zcode-wallpaper-xiao` | — | — | 把本地 Wallpaper Engine 创意工坊壁纸变成动态背景:Scene 实时渲染/视频/图片 + DSH 式工作台 + 智能可读性 + 可嵌入 Electron 聊天窗口 |
| [dsh-liquid-glass-wallpaper](https://github.com/XINGRUYU33224/dsh-liquid-glass-wallpaper) | `xingruyu33224/dsh-liquid-glass-wallpaper` | — | — | Liquid-glass Wallpaper Engine backdrop for the DeepSeek Harness Web GUI |
| [dsh-nazuna-wallpaper-engine](https://github.com/yangcanbin31-coder/dsh-nazuna-wallpaper-engine) | `yangcanbin31-coder/dsh-nazuna-wallpaper-engine` | — | — | NAZUNA (彻夜之歌) themed wallpaper-engine for DeepSeek Harness: 七草荠 mascot, moonlight-violet liquid glass. Derivative of… |
| [dsh-ui-wallpaper](https://github.com/youzhoujiMrLiu/dsh-ui-wallpaper) | `youzhoujimrliu/dsh-ui-wallpaper` | — | — | Wallpaper Engine–style wallpaper for the DeepSeek Harness web GUI: custom images, GIFs, and videos as your app… |
| [dsh-Zpaper](https://github.com/ZHANG-923-ZE/dsh-Zpaper) | `zhang-923-ze/dsh-zpaper` | — | — | dsh-Zpaper — DSH 动态壁纸全界面 iOS 液态玻璃主题插件：壁纸激活时把所有 UI 表面（侧栏/面板/按钮/对话框/代码块/壁纸选择器）统一为毛玻璃半透明，纯 CSS 注入 |
| [DeepSeek-Harness-DSH-](https://github.com/1966song/DeepSeek-Harness-DSH-) | `1966song/deepseek-harness-dsh-` | — | — | dsh美化工具包，消息条，壁纸，仪表盘，插件市场 |
| [dsh-wallpaper-ui](https://github.com/adydc-99/dsh-wallpaper-ui) | `adydc-99/dsh-wallpaper-ui` | — | — | DSH 壁纸插件 - 为 DeepSeek Harness Web UI 添加图片/视频壁纸 |
| [dsh-md3-wallpaper](https://github.com/AnNingUI/dsh-md3-wallpaper) | `anningui/dsh-md3-wallpaper` | — | — | deepseek harness Material Design Web Skin |
| [dsh-wallpaper](https://github.com/anqiu599/dsh-wallpaper) | `anqiu599/dsh-wallpaper` | — | — | 为deepseek harness添加背景的插件，直接接入dsh的设置 |
| [DSH-ME-](https://github.com/asheng999/DSH-ME-) | `asheng999/dsh-me-` | — | — | deep seek harness壁纸，可以用wallpaper Engine壁纸 |
| [DSH_desktop](https://github.com/BakonZHOU/DSH_desktop) | `bakonzhou/dsh_desktop` | — | — | 这是一个初版的deepseek的桌面程序，不再使用网页端监听端口，而是使用WPF+WebView2做的软件，增加了重要的更换壁纸功能，以及内置了B站@月匠… |
| [dsh-desktop-transparency](https://github.com/biotechdrli-byte/dsh-desktop-transparency) | `biotechdrli-byte/dsh-desktop-transparency` | — | — | DSH Desktop 的分区透明壁纸主题：窗口看起来真的透到桌面，同时支持分区调节 |
| [dsh-desktop-wallpaper](https://github.com/chate111/dsh-desktop-wallpaper) | `chate111/dsh-desktop-wallpaper` | — | — | A wallpaper plugin purpose-built for DSH Desktop — folder-based library, manual picking, and per-region translucent… |
| [DSH-wallpaper](https://github.com/comlearner834/DSH-wallpaper) | `comlearner834/dsh-wallpaper` | — | — | 为DeepSeek Harness desktop（浏览器web版通用）安装背景插件，可自由切换静态壁纸，动态壁纸，可同步桌面壁纸 |
| [dsh-wallpaper](https://github.com/deepseaandhighsky-arch/dsh-wallpaper) | `deepseaandhighsky-arch/dsh-wallpaper` | — | — | An unofficial MIT-licensed image and video wallpaper plugin for DeepSeek Harness, with frosted UI panels, opacity… |
| [dsh-wallhaven-wallpaper](https://github.com/DPH-1121/dsh-wallhaven-wallpaper) | `dph-1121/dsh-wallhaven-wallpaper` | — | — | DeepSeek Harness 插件：从 wallhaven.cc 搜图并铺成 GUI 背景，图片全由宿主端取回（支持代理，浏览器无需能访问 wallhaven），可一键下载原图。零运行时依赖。 |
| [wall-generator](https://github.com/dunningsjakschfn849-byte/wall-generator) | `dunningsjakschfn849-byte/wall-generator` | — | — | DSH 玻璃主题 · 动态壁纸（glass-wall） |
| [dsh-wallpaper-desktop](https://github.com/elevenp1gff/dsh-wallpaper-desktop) | `elevenp1gff/dsh-wallpaper-desktop` | — | — | Wallpaper Engine wallpapers x DeepSeek Harness desktop shell - ??? UI ????? |
| [dsh-extensions-wallpaperskin](https://github.com/haibala-aii/dsh-extensions-wallpaperskin) | `haibala-aii/dsh-extensions-wallpaperskin` | — | — | Wallpaper Engine skin plugin for the DeepSeek Harness web UI |
| [dsh-wallpaper](https://github.com/HLLO9728/dsh-wallpaper) | `hllo9728/dsh-wallpaper` | — | — | 一款针对DSH的背景自定义插件 |
| [dsh_bizhi](https://github.com/huangdsa45/dsh_bizhi) | `huangdsa45/dsh_bizhi` | — | — | deepseek harness动态壁纸 |
| [dsh-desktop](https://github.com/icyaaaww/dsh-desktop) | `icyaaaww/dsh-desktop` | — | — | DeepSeek Harness 桌面版:Electron 外壳 + 壁纸设置面板 |
| [dsh-wallpaper](https://github.com/JavSaia/dsh-wallpaper) | `javsaia/dsh-wallpaper` | — | — | 在 DeepSeek Harness 设置里加入「壁纸」页:整屏自定义背景 + 透明度调节。纯前端 dsh 客户端插件。 |
| [dsh-ui-beautify](https://github.com/Junt184/dsh-ui-beautify) | `junt184/dsh-ui-beautify` | — | — | DSH Web 美化套件（Apple 风格）：动态壁纸轮播 + Ken Burns + 毛玻璃、字体美化、粒子背景 |
| [dsh-wallpaper](https://github.com/keke050/dsh-wallpaper) | `keke050/dsh-wallpaper` | — | — | Set a custom background wallpaper for the DeepSeek Harness desktop app — presets, image URL, upload, and an opacity… |
| [dsh-wallpaper-bridge](https://github.com/late-autumn-gif/dsh-wallpaper-bridge) | `late-autumn-gif/dsh-wallpaper-bridge` | — | — | 把 Wallpaper Engine 的壁纸真正铺满 DeepSeek Harness 网页界面：跟随 dsh-plugin-wallpaper-engine 的选择，UI 面层半透明，不依赖桌面壳 extended 模式。 |
| [dsh-we-wallpaper](https://github.com/maoshiba6863/dsh-we-wallpaper) | `maoshiba6863/dsh-we-wallpaper` | — | — | 启动即全屏，有计费，有壁纸/视频管理，未加桌宠 |
| [dsh-wallpaper](https://github.com/mengzhangj/dsh-wallpaper) | `mengzhangj/dsh-wallpaper` | — | — | DSH-Wallpaper background wallpaper and system font picker plugin for DSH Desktop. Plugin source only, no DSH core. |
| [dsh-desktop-plugin](https://github.com/Mochasu123/dsh-desktop-plugin) | `mochasu123/dsh-desktop-plugin` | — | — | 专为 DeepSeek Harness 打造的高颜值沉浸式桌面端与 Web 增强插件 (Liquid Glass UI, 壁纸, 灵动球, 标签, 费用统计, 会话安全) |
| [dsh-dynamic-wallpaper](https://github.com/MoYuShisi/dsh-dynamic-wallpaper) | `moyushisi/dsh-dynamic-wallpaper` | — | — |  |
| [dsh-we-wallpaper](https://github.com/pbadgpmeb22791-sketch/dsh-we-wallpaper) | `pbadgpmeb22791-sketch/dsh-we-wallpaper` | — | — | Use your Wallpaper Engine library as the DeepSeek Harness (DSH) GUI background: video, web and scene wallpapers, with a… |
| [dsh-wallpaper-local](https://github.com/qwe907098478/dsh-wallpaper-local) | `qwe907098478/dsh-wallpaper-local` | — | — |  |
| [dsh-wallpaper-claude-compat](https://github.com/Ra-fangtang/dsh-wallpaper-claude-compat) | `ra-fangtang/dsh-wallpaper-claude-compat` | — | — | 让 dsh-plugin-wallpaper-engine 的壁纸透出 dsh-claude-style 的实色页面底（限域样式表，任一插件关闭即整体失效） |
| [dsh-wallpaper-engine](https://github.com/Ra-fangtang/dsh-wallpaper-engine) | `ra-fangtang/dsh-wallpaper-engine` | — | — |  |
| [DSH-UI-Beautify](https://github.com/Rad-Weed/DSH-UI-Beautify) | `rad-weed/dsh-ui-beautify` | — | — | DSH界面美化 · DSH UI Beautify —— 用于 DSH 的桌面壁纸 + 毛玻璃美化插件（零布局侵入、可逐字节回滚、自带诊断面板） |
| [dsh-wallpaper-tool](https://github.com/ranger6636/dsh-wallpaper-tool) | `ranger6636/dsh-wallpaper-tool` | — | — | 这是一个适用于Deepseek Harness的插件，给 DeepSeek Harness Web 界面换壁纸的插件（TypeScript）：图片/视频背景、不透明度/模糊/暗化、动态特效、面板透出、背景轮播、手动裁切构图。数据全部留在本机… |
| [dsh-desktop-wallpaper](https://github.com/Raylen-berry/dsh-desktop-wallpaper) | `raylen-berry/dsh-desktop-wallpaper` | — | — | DSH Desktop「底图工坊」插件：按类型两级浏览换底图、2/3 不重复轮次随机、输入框琉璃卡面与对话框特效（流萤 / 极光 / 气泡）；设置页图库走 640px 派生图，新加入的图自动生成缩略；对话页固定宽度自 v1.3.0 起移交… |
| [dsh-m3-monet](https://github.com/Regex520/dsh-m3-monet) | `regex520/dsh-m3-monet` | — | — | Monet (Material Design 3) dynamic-color wallpaper theming for DeepSeek Harness |
| [dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) | `rnlao/dsh-wallpaper` | — | — |  |
| [DSH-plus-plus](https://github.com/RUO-MO/DSH-plus-plus) | `ruo-mo/dsh-plus-plus` | — | — | DSH++ —— DeepSeek Harness 桌面端本地工作台：CDP 热注入增强 + 会话/凭证只读管理 + 动态壁纸插件适配。零侵入、完全可逆、不上传任何数据。 |
| [dsh-pink-bow-kitty](https://github.com/S-anZZz/dsh-pink-bow-kitty) | `s-anzzz/dsh-pink-bow-kitty` | — | — | Soft pink bow-kitty theme for the DeepSeek Harness Web UI: kitty-print wallpaper, light and dark palettes, kitty… |
| [dsh-wallpaper](https://github.com/Sostay/dsh-wallpaper) | `sostay/dsh-wallpaper` | — | — | Custom full-window wallpaper plugin for DeepSeek Harness (DSH): gradient presets, image URLs, local uploads, frosted… |
| [dsh-video-wallpaper](https://github.com/swhje/dsh-video-wallpaper) | `swhje/dsh-video-wallpaper` | — | — | DeepSeek Harness Web UI 动态壁纸插件：内置 44 个 MP4 循环播放 + 5 张壁纸切换 + 深色模式自动切换 + 选择持久化 |
| [dsh-plugin-wallpapers](https://github.com/TTAWDTT/dsh-plugin-wallpapers) | `ttawdtt/dsh-plugin-wallpapers` | — | — | Wallpaper Engine wallpapers for the DeepSeek Harness Web UI: pick any installed video or web wallpaper as the dsh… |
| [dsh-chat-wallpaper](https://github.com/wangjiaxi/dsh-chat-wallpaper) | `wangjiaxi/dsh-chat-wallpaper` | — | — |  |
| [dsh-wallpaper](https://github.com/whf-jx/dsh-wallpaper) | `whf-jx/dsh-wallpaper` | — | — | DSH Web GUI 本地壁纸插件:上传本地图片/视频、手动切换、定时轮换与随机播放,带清晰度/压暗/模糊/填充调节 |
| [dsh-wallpaper](https://github.com/woshidae/dsh-wallpaper) | `woshidae/dsh-wallpaper` | — | — | Custom wallpaper background plugin for DeepSeek Harness Web: upload, live tuning, crossfade, browser-local persistence |
| [dsh-beauty-persist](https://github.com/wuweiran-web/dsh-beauty-persist) | `wuweiran-web/dsh-beauty-persist` | — | — | 让 DSH 桌面端壁纸持久不丢：支持 GIF 动图 & MP4 视频壁纸，内置全屏皮肤中心（上传、预览、一键应用、删除素材），重启、换端口、清缓存都不丢失。Server-side wallpaper & theme persistence… |
| [dsh-mood-wallpaper](https://github.com/wzyn20051216/dsh-mood-wallpaper) | `wzyn20051216/dsh-mood-wallpaper` | — | — | DSH (DeepSeek Harness) wallpaper-aware mood engine: import your own dynamic wallpapers, background analysis… |
| [dsh-live-backdrop](https://github.com/yang19997/dsh-live-backdrop) | `yang19997/dsh-live-backdrop` | — | — | DSH Web GUI 动态背景 + UI 主题接管插件：静态图/GIF/MP4 壁纸、三视觉方向预设、六色六形参可调。 |
| [weibo-wallpaper-dsh-plugin](https://github.com/Zhiye-Tang/weibo-wallpaper-dsh-plugin) | `zhiye-tang/weibo-wallpaper-dsh-plugin` | — | — | 把微博博主的相册变成(DSH)Web 界面壁纸的宿主插件。每次打开 DSH 自动检查微博:同一天跳过,跨天/跨月增量下载,按月归档到本地 YYYY-MM 文件夹，首次启用自动回填今年1月到上个月的历史相册。即一个插件、一个你本人的微博… |
| [dsh-wallpaper](https://github.com/zypchloe-del/dsh-wallpaper) | `zypchloe-del/dsh-wallpaper` | — | — | 给 DeepSeek Harness 网页版换壁纸的插件：上传自定义壁纸、调透明度、铺满整个界面背景。A wallpaper plugin for the DeepSeek Harness web GUI. |
| [dsh-wallpaper-local](https://github.com/baiiii279/dsh-wallpaper-local) | `@baiiii/dsh-wallpaper-local` | — | MIT | DSH wallpaper plugin: local Wallpaper Engine/Steam picker, video background, scene.pkg texture extraction |
| [dsh-bing-wallpaper](https://github.com/ericality/dsh-enhanced) | `@ericality/dsh-bing-wallpaper` | — | MIT | Bing daily wallpaper bridge for DSH: today's wallpaper image and note served same-origin, folder-random wallpaper… |
| [dsh-background](https://github.com/kudanen/dsh-background) | `@kudanen/dsh-background` | — | MIT | DSH web plugin: full-page static/video wallpaper with live opacity / blur / contrast sliders, glass-panel transparency… |
| [dsh-wallpaper-engine](https://github.com/marlonlau/dsh-wallpaper-engine) | `@marlonlau/dsh-wallpaper-engine` | — | MIT | One-click DSH background switcher backed by local Wallpaper Engine images/videos (WE Web API first, Steam… |
| @midnightbell/dsh-wallpaper-theme | `@midnightbell/dsh-wallpaper-theme` | — | MIT | DSH 背景壁纸主题插件：设置页「背景主题」入口，渐变预设/本地图片/剪贴板/图片链接，设置持久化到 DSH_HOME，重启自动恢复。 |
| [dsh-ds-home-bg](https://github.com/Alphauni-x/dsh-ds-home-bg) | `alphauni-x/dsh-ds-home-bg` | — | — | Deep-navy aurora background theme for the DeepSeek Harness web UI: layered radial glows, fine grid and a drifting… |
| [dsh-plugin-bg-studio](https://github.com/Antiboday/dsh-plugin-bg-studio) | `antiboday/dsh-plugin-bg-studio` | — | — | 将动态壁纸加到Deepseek中 |
| [dsh-WallpaperAndCost](https://github.com/AppliedYuu/dsh-WallpaperAndCost) | `appliedyuu/dsh-wallpaperandcost` | — | — | Merged plugin: wallpaper customization (original-resolution uploads, crop editor, per-area opacity, MP4/WebM dynamic… |
| [dsh-wallpaper-position](https://github.com/ArimaKana-Akane/dsh-wallpaper-position) | `arimakana-akane/dsh-wallpaper-position` | — | — | Per-wallpaper offset for dsh-dream-skin - nudge the current wallpaper along X and Y in pixels from Settings, remembered… |
| [dsh-wallpaper](https://github.com/B-TQ/dsh-wallpaper) | `b-tq/dsh-wallpaper` | — | — | Full-screen dynamic wallpaper from local videos and images, with live effect controls, wallpaper switching and… |
| [dsh-bestui](https://github.com/BPZ0726/dsh-bestui) | `dsh-bestui` | — | MIT | Adaptive wallpaper and appearance studio for the DeepSeek Harness Web UI. |
| [dsh-wallpaper](https://github.com/codeMonkey-Pine/dsh-wallpaper) | `dsh-wallpaper` | — | Apache-2.0 | Wallpaper Engine integration for the dsh web GUI: scan the local WE library (Steam workshop 431960 + local projects)… |
| [dsh-wallpaper-skin](https://github.com/ddbj-hub/dsh-wallpaper-skin) | `dsh-wallpaper-skin` | — | — | Persistent wallpaper skin for the dsh web profile: static image or muted looping video as the app background, with… |
| [dsh-any-background](https://github.com/tkingxiao/dsh-any-background) | `dsh-any-background` | — | MIT | Appearance plugin for DeepSeek Harness: custom theme color (PS-style color wheel), background wallpaper with… |
| [dsh-background](https://github.com/luoyu-xingu/dsh-background) | `dsh-background` | — | MIT | DeepSeek Harness Web 背景图片插件:在设置-通用-外观中填写本地图片路径即可替换网页背景,提供实时预览与可调蒙层强度 |
| [dsh-custom-background](https://github.com/ai-written/dsh-custom-background) | `dsh-custom-background` | — | MIT | Background image with site-wide frosted glass for the DeepSeek Harness web GUI |
| dsh-plugin-nyx-wallpaper | `dsh-plugin-nyx-wallpaper` | — | MIT | Dynamic Desktop Wallpaper Plugin with Weather & Theme Matching for DeepSeek Harness |
| [dsh-plugin-wallpaper](https://github.com/jerryphoenixcky/dsh-plugin-wallpaper) | `dsh-plugin-wallpaper` | — | MIT | DeepSeek Harness Web wallpaper plugin: upload and crop a local image as the web workspace desktop background, with a… |
| [dsh-plugin-wallpaper-engine-mac](https://github.com/ruijiaang-lab/dsh-wallpaper-engine) | `dsh-plugin-wallpaper-engine-mac` | — | MIT | macOS-enhanced fork of dsh-plugin-wallpaper-engine: WaifuX + loose-media support on top of the original Windows… |
| [dsh-wallpaper_share](https://github.com/yrn-playmaker/dsh-wallpaper_share) | `dsh-wallpaper_share` | — | GPL-3.0 | Sync active Wallpaper Engine wallpapers(image/video/scence/app)to DeepSeek Harness Web UI as a customizable dynamic… |
| dsh-wallpaper-plus | `dsh-wallpaper-plus` | — | MIT | Fullscreen wallpaper for DeepSeek Harness: image or short video, auto dark mode, video audio toggle. |
| [dsh-wallpaper-rotation](https://github.com/h2682503133/dsh-wallpaper-rotation) | `dsh-wallpaper-rotation` | — | MIT | DeepSeek Harness WebUI wallpaper plugin: timed slideshow rotation over local images with per-theme (light/dark)… |
| dsh-wallpaper-rotator | `dsh-wallpaper-rotator` | — | MIT | DSH 壁纸轮换插件：定时轮换应用背景壁纸（交叉淡化动效），内置 SVG 壁纸集，毛玻璃/压暗/文字阴影/背景不透明度等可读性调节，设置页可配置。 |
| [dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | `dsh-plugin-wallpaper-engine` | — | MIT | Requires DeepSeek Harness 0.1.5-rc.1+ (DSH Desktop >= 2.0.7) and dsh-better-sidebar >= 0.19.0 - update both before… |
| [dsh-whale-wallpaper-skin](https://github.com/fishcg/dsh-whale-wallpaper-skin) | `fishcg/dsh-whale-wallpaper-skin` | — | — | 鲸鱼娘·仅壁纸：DSH 深色壁纸皮肤（11s 开场、毛玻璃、设置弹窗插画背景） |
| [dsh-custom-wallpaper](https://github.com/FunctionHookTJU/dsh-custom-wallpaper) | `functionhooktju/dsh-custom-wallpaper` | — | — | deepseek harness 可自定义主题壁纸，主题色，磨砂玻璃，不透明度 |
| [dsh-cutesnowgirl-background](https://github.com/haihaiaicode/dsh-cutesnowgirl-background) | `haihaiaicode/dsh-cutesnowgirl-background` | — | — | Adds a muted looping video behind the Harness workspace and makes the composer translucent after the boot splash… |
| [deepseek-harness-background](https://github.com/HaoyueQin/deepseek-harness-background) | `deepseek-harness-background` | — | MIT | Custom background image for the DSH Web UI: upload a picture or paste an image URL behind the whole app surface, with… |
| [dsh-wallhaven-wallpaper](https://github.com/HaydenSmith1121/dsh-wallhaven-wallpaper) | `haydensmith1121/dsh-wallhaven-wallpaper` | — | — | Searches wallhaven.cc from a settings page and sets any wallpaper as the DSH web GUI background, with opacity, blur and… |
| [deepseek-whale-wallpaper](https://github.com/HeShen-1/deepseek-whale-wallpaper) | `dsh-plugin-harness-whale` | — | MIT | Live dot-matrix whale wallpaper for the DSH Web UI: ~1,750 breathing WebGL2 particles with pointer liquid vortices… |
| [dsh-bg-carousel](https://github.com/Jonah-Wu23/dsh-bg-carousel) | `jonah-wu23/dsh-bg-carousel` | — | — | 把媒体目录中的图片与视频自动轮换为 DSH 界面背景，面板可调轮播间隔与界面透明度。 |
| [dsh-wallpaper-lab](https://github.com/KaoKashj/dsh-wallpaper-lab) | `kaokashj/dsh-wallpaper-lab` | — | — | 一个deepseek harness动态壁纸插件 |
| [dsh-plugin-media-wallpaper](https://github.com/laoye666-6/dsh-plugin-media-wallpaper) | `dsh-plugin-media-wallpaper` | — | MIT | Image and video wallpapers for the DSH web workspace: auto-detected GIF/APNG/animated WebP/PNG/JPEG/MP4/WebM… |
| [dsh-bg-switcher](https://github.com/LHXB111/dsh-bg-switcher) | `lhxb111/dsh-bg-switcher` | — | — | DSH Desktop 背景壁纸插件，支持 macOS / Windows：壁纸切换、随机轮播、交叉淡入、视差和亮暗主题设置。 |
| [dsh-wallpaper](https://github.com/lueb386-lgtm/dsh-wallpaper) | `lueb386-lgtm/dsh-wallpaper` | — | — | DeepSeek Harness 壁纸插件：为 Web 界面添加可自定义的壁纸背景——8 款渐变预设、自定义图片 URL、多来源随机壁纸（Bing 每日 / Picsum / LoremFlickr）、自动定时更换与设置持久化；随 DSH… |
| [dsh-wallpaper-engine](https://github.com/Minnjee/dsh-wallpaper-engine) | `minnjee/dsh-wallpaper-engine` | — | — | Wallpaper Engine videos as the background of the DeepSeek Harness web GUI: transparent shell, font-color control… |
| [dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) | `perrylink/dsh-background-agents` | — | — | 官方子代理接缝上的持久化后台子代理：任意会话中启动，Web 侧边栏看进度、随时留言与打断，支持按子代理限定工具、人格与委托深度。 |
| [dsh-background](https://github.com/retmon2333/dsh-background) | `retmon2333/dsh-background` | — | — | DeepSeek Harness（DSH）背景壁纸更换（单图 / 文件夹轮播）模式，可调透明、模糊、遮罩与樱花／雪花特效，侧栏与输入框也能透出壁纸 |
| [dsh-wallpaper](https://github.com/SciGeoLight/dsh-wallpaper) | `scigeolight/dsh-wallpaper` | — | — | DeepSeek Harness wallpaper plugin / DSH 壁纸与磨砂玻璃插件 |
| [dsh-wallpaper](https://github.com/strugglejin/dsh-wallpaper) | `strugglejin/dsh-wallpaper` | — | — | DeepSeek Harness Web GUI 壁纸插件：图片/视频/跟随桌面壁纸，带控制面板 |
| [DSH-CustomWallpapers-Glassmorphism-Theme](https://github.com/sujiu0616-art/DSH-CustomWallpapers-Glassmorphism-Theme) | `sujiu0616-art/dsh-customwallpapers-glassmorphism-theme` | — | — | dsh可自定义壁纸玻璃风主题 |
| [dsh-wallpaper-engine](https://github.com/TianYa-DAO/dsh-wallpaper-engine/tree/main/packages/dsh-wallpaper-engine) | `tianya-dao/dsh-wallpaper-engine` | — | — | Wallpaper Engine local library, background layer, native Scene panel, and desktop-mode controls for the DSH desktop… |
| [dsh-wallpaper-bg](https://github.com/yyhtxdy/dsh-wallpaper-bg) | `yyhtxdy/dsh-wallpaper-bg` | — | — | DSH 动态壁纸背景插件：接入 Wallpaper Engine 工坊视频壁纸，一键切换 |

## 桌面宠物 / 吉祥物

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-pet](https://github.com/zhu1090093659/dsh-pet) | `@linxin666/dsh-pet` | 24.3k | Apache-2.0 | Multi-pet companion plugin for the dsh web GUI: a registry-driven floating pet that reacts to model activity, with… |
| [dsh-codex-pet](https://github.com/michengai/dsh-codex-pet) | `@michengai/dsh-codex-pet` | 3858 | Apache-2.0 | DSH Codex Pet — 为 DeepSeek Harness 提供宠物陪伴、多任务提醒与交互，以及 Skill 自定义宠物 · A pet companion with multi-task notifications… |
| [whale-girl](https://github.com/vlln/whale-girl) | `whale-girl` | 681 | MIT | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| dsh-pet-live2d-viola | `dsh-pet-live2d-viola` | 646 | BSD-3-Clause | Live2D desktop pet for the DeepSeek Harness web GUI. Six characters — 都子 (miyako_014_casual_spring_01_marukun), 薇欧拉… |
| [dsh-whale-pet](https://github.com/luweiyabo/dsh-whale-pet) | `@luweiyabo/dsh-whale-pet` | 640 | SEE LICENSE IN LICENSE | A floating whale desktop pet for the DeepSeek Harness Web UI: 95 categorized animations, event-aware actions, custom… |
| [dsh-scriptor-companion](https://github.com/lingfengqaq/webnovel-writer) | `@linfengqaqtat/dsh-scriptor-companion` | 371 | GPL-3.0-only | 鲸鱼娘桌宠：DSH 窗口内的写作陪伴 |
| [dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) | `dsh-personal-center` | 300 | MIT | DSH 个人配置:Token 用量统计 / 成本估算 / 自定义指令 / 外观全局字号 / 桌面宠物(含会话状态概览),纯本地不联网。Personal center for DSH: usage stats, cost… |
| [dsh-ui-enhancer](https://github.com/AlexYin-Tongji/dsh-ui-enhancer) | `dsh-ui-enhancer` | 210 | MIT | Unofficial DeepSeek Harness desktop UI plugin with file workspace, wallpapers, pets, and @file references |
| [dsh-codex-pet](https://github.com/skr311/dsh-codex-pet) | `dsh-codex-pet` | 195 | MIT | A desktop pet plugin for DeepSeek Harness (DSH): import Codex-style sprite-sheet pets and render them in the DSH Web… |
| [dsh-pet-dfeiyu-mo](https://github.com/pc2005-cloud/dsh-pet) | `dsh-pet-dfeiyu-mo` | 144 | MIT | 大肥鱼桌宠：80 种热门角色语音、动漫/网络热梗音色、Edge TTS、点击气泡互动、自定义互动与导入音频、真实 AI 声音克隆、联网搜索、系统通知语音。 |
| [dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | `deepseek-desk-pet` | 139 | MIT | macOS desk pet that lives outside the DSH page: a real always-on-top window that clears fullscreen Spaces, six states… |
| [dsh-pet-bridge](https://github.com/wsxwj123/dsh-plugins) | `dsh-pet-bridge` | 126 | MIT | DSH server plugin: push dsh session status to the cc-pet desktop pet bubble in real time. |
| [dsh-whale-pet](https://github.com/duyanta123/dsh-whale-pet) | `dsh-whale-chan` | 125 | MIT | 鲸鱼娘桌宠 · A whale-girl desktop pet plugin for DeepSeek Harness (DSH) web UI: live agent-state mirroring, interactions… |
| [dsh-ikun-pet](https://github.com/eric-song-dev/dsh-ikun-pet) | `dsh-ikun-pet` | 125 | MIT | dsh-ikun-pet · ikun 桌宠 —— DeepSeek Harness 永久插件：在 DSH Deep diving 回答期间，用坤宠动图填满深潜状态行下方区块，进度 0%→100%，每 20%… |
| [dsh-pet](https://github.com/captain1275/dsh-ui-web) | `@captain1275/dsh-pet` | 120 | Apache-2.0 | 鲸鱼娘宠物插件 for the dsh web GUI: a soft healing whale-girl companion that reacts to model activity… |
| dsh-live2d-pet | `dsh-live2d-pet` | 119 | MIT | Live2D companion for DeepSeek Harness: render a Cubism model (e.g. the official Haru sample) in the web UI with… |
| dsh-pet-miyako | `dsh-pet-miyako` | 83 | BSD-3-Clause | Miyako desktop pet for the DSH web GUI — custom sprite animations (idle / waiting / working / click / online-offline)… |
| [dsh-pet-in-frame](https://github.com/harmlessfunny/dsh-pet-in-frame) | `dsh-pet-in-frame` | 65 | MIT | Agent desktop pet overlay for DeepSeek Harness: static or frame-animated poses that react to agent status and tool… |
| [dsh-harness-jarvis](https://github.com/CroissanTTs/dsh-harness-jarvis) | `dsh-harness-jarvis` | 54 | MIT | 贾维斯 · 常驻桌面的悬浮窗桌面助手 / 桌面宠物 —— DSH Desktop 的粒子光球：快速审批权限、⌃⌥J 快速对话。A floating-window desktop assistant & desktop pet for… |
| [deskpet-guard](https://github.com/cny1230/deskpet-guard) | `deskpet-guard` | 41 | BSD-3-Clause | Agent 行为守护桌宠：跨 agent 监控可疑外传（加密打包直传对象存储 / DNS 外泄线索 / 敏感密钥被读），发现即告警，明确确认后按「一次一个」终止目标 agent；事件写入只追加 guard-events.jsonl，并通过… |
| dsh-pixel-whale-pet | `dsh-pixel-whale-pet` | 36 | MIT | A cute whale desktop pet for DeepSeek Harness — QQ pet style with stats, animations, and DSH session awareness. |
| [dsh-desktop-companion](https://github.com/jiayixie-jpg/dsh-desktop-pet) | `dsh-desktop-companion` | 32 | MIT | 一只住在 DSH 网页里的养成系桌宠：随编码活动升级进化、语音打气，还能用 AI 生成专属的透明动画形象。 |
| dsh-client-ui-pet | `dsh-client-ui-pet` | 30 | MIT | Q pet desktop companion overlay for DeepSeek Harness web GUI |
| [dsh-kun-pet](https://github.com/practice019/dsh-kun-pet) | `dsh-kun-pet` | 30 | MIT | Kun Like 桌宠 —— DeepSeek Harness 桌面宠物插件：Web 界面右下角的小坤宠，随 Agent 工作状态切换 9 种动画，任务完成时播放「你干嘛~哎哟」语音 |
| [dsh-emotion-pet](https://github.com/cpt-kenvie/emotionpet) | `dsh-emotion-pet` | 25 | SEE LICENSE IN LICENSE | Emotion Ball pet dock for the DeepSeek Harness Web composer |
| dsh-plugin-pet-theme | `dsh-plugin-pet-theme` | 23 | MIT | DSH character companion plugin: Hu Tao & Furina desktop pets plus the character theme (wallpaper, colors, appearance)… |
| [dsh-deskpet](https://github.com/udbwhdjwbdj/dsh-deskpet) | `dsh-deskpet` | 21 | MIT | 主人想让我出现在桌面上——不想一个人太无聊。DSH Web 自定义桌宠：上传透明图/GIF、会走路、可拖动缩放、台词系统（点击/休闲/早中晚特殊台词，权重可编辑）、活跃度、多宠物、一键导入导出(.petpkg)。 |
| [dsh-agent-pet](https://github.com/noah-wang/dsh-agent-pet) | `dsh-agent-pet` | 20 | MIT | A pet in the DeepSeek Harness Web UI that changes pose with your agent, with an eight-pose sprite sheet you can… |
| [dsh-pet-seen](https://github.com/starwithfox/dsh-pet-seen) | `dsh-pet-seen` | 19 | MIT | Bridge between DeepSeek Harness and a local desktop pet: session event push, per-session progress buckets, and 'user… |
| [dsh-pet](https://github.com/gestaltrun/dsh-web) | `@gestaltrun/dsh-pet` | 18 | Apache-2.0 | Multi-pet companion plugin for the dsh web GUI: a registry-driven floating pet that reacts to model activity, with… |
| dsh-pet-ark | `dsh-pet-ark` | 15 | MIT | 火山AFP桌宠：Live2D 透明置顶桌宠 + 火山方舟配额浮窗（DSH 插件启动器，随 DSH 启停） |
| [dsh-plugin-desktop-pet](https://github.com/guojiangli/dsh-plugin-desktop-pet) | `@liguojiang/dsh-plugin-desktop-pet` | 11 | MIT | A configurable desktop pet overlay for DeepSeek Harness with live task progress. |
| dsh-pet-companion | `dsh-pet-companion` | 11 | MIT | A friendly floating pet companion for DeepSeek Harness Web. |
| [live2d-voice](https://github.com/john-walks-slow/live2d-voice) | `live2d-voice` | 11 | MIT | One command to a standalone Live2D voice companion on DeepSeek Harness / 一行命令跑起独立的 Live2D 语音陪伴（dsh-live2d-voice 启动器） |
| live2d-board | `live2d-board` | 10 | MIT | DSH Live2D board plugin: bundled Momose Hiyori LPK model, local LPK import, expression/motion control, AI reply bubbles… |
| [dsh-pet-compat](https://github.com/luv061211/dsh-pet) | `@luv1211/dsh-pet-compat` | 9 | MIT | Browser-safe Codex-compatible pet package parsing, frame selection, notifications, cache identity, and terminal… |
| [dsh-pet-desktop-darwin-arm64](https://github.com/b1anker/dsh-ecology) | `@seaveyon/dsh-pet-desktop-darwin-arm64` | 4 | MIT | The dsh-pet desktop companion binary for macOS on Apple silicon (optional platform package of @seaveyon/dsh-pet) |
| [dsh-pet-assets](https://github.com/liangchen-lky/dsh-pet-plugin) | `@kkkey/dsh-pet-assets` | 3 | MIT | Codex-style pet asset catalog: scans the pets directories (default $DSH_HOME/pets and $CODEX_HOME/pets, merged)… |
| [petdex](https://github.com/crafter-station/petdex) | `crafter-station/petdex` | — | — | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. |
| [dsh-pet-indesktop](https://github.com/MerZlin/dsh-pet-indesktop) | `merzlin/dsh-pet-indesktop` | — | — | 基于项目PC2005-cloud/dsh-pet.git，将桌宠移植到Windows、Linux和MacOS上，现在可以随时看到蓝色大肥鱼了：），本项目还额外实现了其他交互功能，欢迎体验 |
| [dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | `sutera-diffusus/dsh-whale-musume` | — | — | DeepSeek Harness 桌宠：元气鲸鱼娘，45 项成就、3 个小游戏、跨端存档迁移；按工具类型切换工作姿态，桌面端与旧版 Web 双端支持（desktop pet / mascot，local-first） |
| [dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) | `liyupi/dsh-kun-like-pet` | — | — | Kun Like 桌宠 —— DeepSeek Harness 桌面宠物插件：右下角小坤宠随 Agent 工作状态切换 9 种动作，任务完成播放「你干嘛~哎哟」 |
| [deepseek-pet](https://github.com/keleus/deepseek-pet) | `keleus/deepseek-pet` | — | — | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 |
| [dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) | `xiaoshihou514/dsh-desktop-pet` | — | — | DeepSeek Harness：鲸鱼娘桌宠！ |
| [dsh-whale-widget-plus](https://github.com/louke6572/dsh-whale-widget-plus) | `louke6572/dsh-whale-widget-plus` | — | — | 基于DeepSeek-Balance-Whale-Widget开发，新增了不同版本的表情，新增加台词自定义切换增加，增加了表情与台词手动切换，增加合并了dsh-pet功能，不需要单独安装，只需要一个插件就行 |
| [dsh-whale-girl-live2d](https://github.com/Andersen216/dsh-whale-girl-live2d) | `andersen216/dsh-whale-girl-live2d` | — | — | 🐋 鲸鱼娘桌宠 · Whale Girl Live2D —— DSH（DeepSeek Harness）Web 界面里的 Live2D 桌宠：跟着 agent 的真实状态换表情与动作，点一下就能直接跟 agent 说话，右键是钱包。A… |
| [dsh-pet-standalone](https://github.com/ianlike-ui/dsh-pet-standalone) | `ianlike-ui/dsh-pet-standalone` | — | — |  |
| [whale-purse](https://github.com/Suiwan/whale-purse) | `suiwan/whale-purse` | — | — | A cute whale desktop pet for DeepSeek Harness that keeps an eye on your DeepSeek balance and session usage/cost. Drag… |
| [dsh-piggy](https://github.com/CLICGGER-TYPES/dsh-piggy) | `dsh-piggy` | — | MIT | 🐖 DeepSeek Harness 养成插件，也可作为 Windows/Linux/macOS 桌面宠物运行；支持成长、学习、打工、钓鱼、图鉴与换肤 |
| [dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) | `huanlinoto/dsh-plugin-pet-rs` | — | — | DSH 桌宠（Rust 版），5 态鲸鱼 + 双 SSE 实时推送 + 透明置顶窗 + 系统托盘，三端支持 \| DSH desktop pet (Rust edition): 5-state whale + dual SSE… |
| [deepseek-harness-pet](https://github.com/wraven68/deepseek-harness-pet) | `wraven68/deepseek-harness-pet` | — | — | A Windows desktop pet that visualizes DeepSeek Harness task progress. |
| [dsh-whale-pet](https://github.com/aceice01/dsh-whale-pet) | `aceice01/dsh-whale-pet` | — | — | DeepSeek 鲸鱼娘桌宠：DSH Desktop 桌宠 + Web 版悬浮桌宠，晓伊神经网络语音、撒娇互动、任务完成提醒 |
| [dsh-whale-pet](https://github.com/rongzi5/dsh-whale-pet) | `rongzi5/dsh-whale-pet` | — | — |  |
| [dsh-think-bounce-pet](https://github.com/9livewolf/dsh-think-bounce-pet) | `9livewolf/dsh-think-bounce-pet` | — | — |  |
| [dsh-pet-android](https://github.com/Tony-Chen-Stark/dsh-pet-android) | `tony-chen-stark/dsh-pet-android` | — | — | 把 dsh-pet 移植成安卓悬浮桌宠：106 段透明动画、点击 Q 弹、拖拽甩抛、长按动作菜单；无 AI、不联网 |
| [cute-fat-fish-pet](https://github.com/12we21/cute-fat-fish-pet) | `12we21/cute-fat-fish-pet` | — | — | 蓝毛小女仆 (Blue-Haired Little Maid) · 住在 Windows 桌面上的 Q 版蓝发小女仆桌面宠物：106 个手绘透明动画、本地 Ollama… |
| [dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion) | `tisitan/dsh-live2d-companion` | — | — | Live2D 监控面板・看板娘桌宠 for DeepSeek Harness |
| [dsh-dania-voice](https://github.com/xcw520/dsh-dania-voice) | `xcw520/dsh-dania-voice` | — | — | Local GPT-SoVITS TTS for DeepSeek Harness: reads assistant replies aloud with a draggable mascot and one-click… |
| [xiaoxiao-zhuochong](https://github.com/yshuang722-spec/xiaoxiao-zhuochong) | `yshuang722-spec/xiaoxiao-zhuochong` | — | — | 小小桌宠：Windows 多角色桌宠完整源码及解压即用版。基于 PC2005-cloud 的 dsh-pet：https://github.com/PC2005-cloud/dsh-pet |
| [desk-llm-pet](https://github.com/isKage/desk-llm-pet) | `iskage/desk-llm-pet` | — | — | 桌宠大肥鱼：一个可交互，可对话的桌面宠物【deepseek-harness coding】 |
| [dsh-live2d-mygo](https://github.com/U1s1-king/dsh-live2d-mygo) | `u1s1-king/dsh-live2d-mygo` | — | — | MyGO!!!!! Live2D 桌宠插件 for DeepSeek Harness（本地模型同源加载，零外部依赖） |
| [dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) | `flytomayday80/dsh-pet` | — | — | 🐋 DSH 有声桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材 |
| [dsh-aemeath](https://github.com/hachimi-ai/dsh-aemeath) | `hachimi-ai/dsh-aemeath` | — | — | 爱弥斯主题皮肤 + 像素桌宠（鸣潮 Aemeath / Wuthering Waves），用于 DeepSeek Harness Web GUI。 |
| [dsh-web-whale-maid](https://github.com/AcidGr/dsh-web-whale-maid) | `dsh-web-whale-maid` | — | MIT | DeepSeek Harness (dsh) Web plugin — Anime maid whale desktop pet with satiety system and real-time LLM interaction |
| [dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) | `nanki-nn/dsh-answer-pet` | — | — |  |
| [dsh-aemeath-pet](https://github.com/culture-flask/dsh-aemeath-pet) | `culture-flask/dsh-aemeath-pet` | — | — | 爱弥斯 · DeepSeek Harness 桌宠 — DeepSeek Harness Web GUI 的像素风宠物插件。 |
| [my-cat-desktop-pet](https://github.com/jc98629/my-cat-desktop-pet) | `jc98629/my-cat-desktop-pet` | — | — | A lightweight macOS desktop cat pet with Codex and DeepSeek Harness status integration. |
| [dsh-whale-maid-mascot](https://github.com/yefeng7531/dsh-whale-maid-mascot) | `yefeng7531/dsh-whale-maid-mascot` | — | — | DeepSeek 娘 (whale maid) in-page mascot plugin for DeepSeek Harness web UI |
| [dsh-ventus-whale](https://github.com/meto-ventus/dsh-ventus-whale) | `meto-ventus/dsh-ventus-whale` | — | — | 🐳 蓝色大肥鱼 · DeepSeek 虎鲸 3D 桌宠插件 — 由 DeepSeek 虎鲸 logo 轮廓重建，悬浮于 Web GUI 角落：拖拽旋转、360° 转圈、爱心互动、悬停工具栏、大小/灵敏度/文字设置，配置本地持久化 / A… |
| [codex-deskpet-for-deepseek-harness](https://github.com/yihanz0107/codex-deskpet-for-deepseek-harness) | `yihanz0107/codex-deskpet-for-deepseek-harness` | — | — | Native macOS desktop pets for DeepSeek Harness, compatible with all Codex v1/v2 pet repositories |
| [dsh-dafeiyu](https://github.com/Zoria-Lind/dsh-dafeiyu) | `zoria-lind/dsh-dafeiyu` | — | — | DeepSeek Harness plugin for the desktop pet: launch/stop it and manage today's tasks right from the dsh web sidebar… |
| [dsh-whale-girl-live2d-custom](https://github.com/3Asterism/dsh-whale-girl-live2d-custom) | `3asterism/dsh-whale-girl-live2d-custom` | — | — | DSH 鲸鱼娘 Live2D 桌宠——基于 Andersen216/dsh-whale-girl-live2d 的定制/二次开发版本 |
| [Codex-dafeiyu](https://github.com/bianbian-666/Codex-dafeiyu) | `bianbian-666/codex-dafeiyu` | — | — | 我们codex用户也要有自己的大肥鱼！🐟 基于 dsh-pet 与 GPT-Niang 魔改的 Windows Codex 桌宠，支持透明动画、额度查看、工作状态联动、本地碎碎念与聊天。 |
| [shorekeeper-deepseek-pet](https://github.com/Doya16/shorekeeper-deepseek-pet) | `doya16/shorekeeper-deepseek-pet` | — | — | 守岸人 DeepSeek 桌宠 \| DeepSeek Harness 插件：任务状态 GIF、语音与字幕配对、多会话提醒、账户余额、自定义大小与便携配置。Shorekeeper desktop companion for… |
| [wali-dsh-plugin](https://github.com/fuzhengwei/wali-dsh-plugin) | `wali-dsh-plugin` | — | MIT | Deepseek Harness 宠物插件 |
| [DSH-Pixel-Toons](https://github.com/Hjh-12138/DSH-Pixel-Toons) | `hjh-12138/dsh-pixel-toons` | — | — | Pixel mascot animations for DeepSeek Harness |
| [deepseek-dafeiyu-pet](https://github.com/mdd111/deepseek-dafeiyu-pet) | `mdd111/deepseek-dafeiyu-pet` | — | — | 大肥鱼桌宠增强版 · 跟着 DSH 干活实时换立绘 · Windows，大肥鱼桌宠增强版 · Windows 桌面宠物。基于 RYANFFY/deepseek-dafeiyu-pet，并入 1190fasheqi/dafeiyu-pet… |
| [DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) | `minybear/deepseek-harness-pet` | — | — | Codex-style desktop pet plugin for DeepSeek Harness |
| [whale-girl-pet](https://github.com/2177302423qqcom-byte/whale-girl-pet) | `2177302423qqcom-byte/whale-girl-pet` | — | — | 🐳 鲸鱼娘小助理 — Windows 桌面陪护桌宠 + DeepSeek Harness 智能体:摸头/亲亲/喂小鱼干/聊天/派任务/藏起来偷看 |
| [harness-pet](https://github.com/cakeni/harness-pet) | `cakeni/harness-pet` | — | — | Harness Pet — an unofficial community pet for DeepSeek Harness. Not affiliated with, endorsed by, or maintained by… |
| [dsh-desktop-pet](https://github.com/FenyxHuang/dsh-desktop-pet) | `fenyxhuang/dsh-desktop-pet` | — | — | Whale desktop pet for DeepSeek Harness: live agent status + API balance as a circular sea level, with jump/dive… |
| [dsh-pet-inAndroid](https://github.com/FLT18355/dsh-pet-inAndroid) | `flt18355/dsh-pet-inandroid` | — | — | 手机上面的dsh-pet, 目前暂时不更新... |
| [dsh-pet-ronaldo](https://github.com/Stellum-Waq/dsh-pet-ronaldo) | `stellum-waq/dsh-pet-ronaldo` | — | — | C罗桌宠 · DeepSeek Harness 桌面宠物插件：葡萄牙 7 号 chibi 吉祥物，随 Agent 状态切换动画，对话完成 SIU 庆祝 + 提示音，支持导入自定义 spritesheet 统一管理 |
| [whalegirl-deskpet](https://github.com/wei125775-lab/whalegirl-deskpet) | `wei125775-lab/whalegirl-deskpet` | — | — | 会跟着 Claude Code 干活的鲸鱼娘桌宠（PetPet / dsh 双版本，Windows x64）。干活时她端碗吃饭，收工收碗，按 Esc 打断会甩你一个屑表情。A desktop pet that reacts to your… |
| [makise-kurisu-desktop-pet](https://github.com/David131131/makise-kurisu-desktop-pet) | `david131131/makise-kurisu-desktop-pet` | — | — | 牧濑红莉栖桌宠 Makise Kurisu Desktop Pet — DSH 动态插件 + Electron 桌面应用 |
| [liang-desktop-pet](https://github.com/Flycat43/liang-desktop-pet) | `flycat43/liang-desktop-pet` | — | — | An unofficial desktop companion UI for DeepSeek Harness.梁圣 |
| [dsh-bigfish](https://github.com/gosomea/dsh-bigfish) | `dsh-bigfish` | — | MIT | 🐋 DeepSeek Harness Web 宠物插件：动画陪伴、自适应输出节奏、可替换角色包与角色制作 Skill。 |
| [dsh_plugins](https://github.com/linyufeng123456/dsh_plugins) | `linyufeng123456/dsh_plugins` | — | — | DSH plugin: whale-purse 桌宠——DeepSeek 余额 + 多订阅用量/花费监视 + 精灵动画桌宠 + 后台任务进度卡。DeepSeek Harness (DSH) 插件 / desktop pet for… |
| [simiao-dsh-pet](https://github.com/sijin14514-sys/simiao-dsh-pet) | `sijin14514-sys/simiao-dsh-pet` | — | — | 肆喵 · AI 图生视频桌宠：25 段动作素材 + 一键安装（独立桌面版 / DSH 联动）+ 完整制作方法与脚本。dsh-pet 的衍生作品。 |
| [Bigfish](https://github.com/Spudruritanian370/Bigfish) | `spudruritanian370/bigfish` | — | — | Turn DeepSeek Harness into a desktop app with tray, hotkeys, pet mascot, and bundled skills—no terminal needed. |
| [dsh-angelina-pet](https://github.com/alybg/dsh-angelina-pet) | `alybg/dsh-angelina-pet` | — | — | DeepSeek Harness 部署级桌宠：右下角随 Agent 工作状态切换 GIF 动画，气泡实时显示 DeepSeek 余额与语音台词，可拖动、可点击互动，任务完成随机播放语音。 |
| [dsh-plugin-pet](https://github.com/c-ling/dsh-plugin-pet) | `c-ling/dsh-plugin-pet` | — | — | DeepSeek Harness 0.2.1+（Web / 桌面端）桌面电子宠物插件：实时心情浮层、头像菜单进入的独立宠物页面、内置/自定义/Codex 精灵图与本地养成系统。 |
| [dsh-deepseek-girl-pet](https://github.com/f0909172434/dsh-deepseek-girl-pet) | `f0909172434/dsh-deepseek-girl-pet` | — | — | Animated deepseek girl desktop pet plugin for DeepSeek Harness |
| [hermes-pet](https://github.com/ghoststarz/hermes-pet) | `ghoststarz/hermes-pet` | — | — | Hermes Desktop pet plugin - transparent desktop pet window (ported from dsh-pet) |
| [all-pet](https://github.com/haverainlilili/all-pet) | `haverainlilili/all-pet` | — | — | 🐾 九平台 AI 编码桌宠：Codex、Claude、DSH、Grok、Cursor、WorkBuddy、Qoder、pi、Z Code。macOS / Windows / Linux 桌面气泡与本地状态监控。 |
| [dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet) | `lglglglgy/dsh-whale-pet` | — | — | dsh-whale-pet |
| [DeepSeek-Pet](https://github.com/nanonocturne-altago/DeepSeek-Pet) | `nanonocturne-altago/deepseek-pet` | — | — | DeepSeek娘桌宠插件整合版：在 DeepSeek Harness 网页中生活的透明动画宠物（余额显示/记账/音效/汉堡菜单），全中文注释源码 |
| [dsh-pet](https://github.com/Suef-666/dsh-pet) | `suef-666/dsh-pet` | — | — |  |
| [dsh-coo-pet](https://github.com/vortioxetine213/dsh-coo-pet) | `vortioxetine213/dsh-coo-pet` | — | — |  |
| [dsh-plugin-pixel-fishing](https://github.com/willimqiao/dsh-plugin-pixel-fishing) | `willimqiao/dsh-plugin-pixel-fishing` | — | — | 把「像素渔场」装成一个 DSH 插件：Harness 启动时自动拉起一只透明、无边框、总在最前的像素钓鱼宠物， 像 QQ 宠物一样浮在桌面上，挂机钓鱼、随时展开面板。 |
| [niulai-pet](https://github.com/xs-java2ai/niulai-pet) | `xs-java2ai/niulai-pet` | — | — | 牛来A股桌宠 (Electron + DSH bundle) |
| [deepseek-pet-Seeki](https://github.com/BenjaminSHI4008/deepseek-pet-Seeki) | `benjaminshi4008/deepseek-pet-seeki` | — | — | DeepSeek Harness 桌宠插件：透明置顶的桌面精灵（2D 像素风状态机） |
| [fatfish-pet-smart-companion](https://github.com/botaochen840-lgtm/fatfish-pet-smart-companion) | `botaochen840-lgtm/fatfish-pet-smart-companion` | — | — | FatFish Pet Smart Companion - 自包含智能桌面桌宠（改编自 whale-girl），下载即用，可选真连 DeepSeek Harness |
| [dsh-pet](https://github.com/BOXLINEovo/dsh-pet) | `boxlineovo/dsh-pet` | — | — | DSH Web 桌面宠物：实时汇报 DeepSeek 余额的蓝色大肥鱼（角色图源：bilibili 这个刀子真甜 https://space.bilibili.com/23315338） |
| [SeekMaid-pet](https://github.com/DoloresCaritasAngelus/SeekMaid-pet) | `dolorescaritasangelus/seekmaid-pet` | — | — | SeekMaid 女仆：基于 DeepSeek Harness 的 Windows 原生桌宠插件，自动监控 DSH 任务、授权、QA 并气泡提醒，支持零配置自动部署。 |
| [dsh-whale-widget-sankou](https://github.com/fiven577/dsh-whale-widget-sankou) | `fiven577/dsh-whale-widget-sankou` | — | — | DSH 小鲸鱼余额挂件·三口皮肤版 —— 基于 MeteorNOX/DeepSeek-Balance-Whale-Widget（MIT）的修改版：自定义桌宠“三口”形象/语音/不同状态动画，含余额提醒与菜单修复 |
| [dsh-mornye-quota-pet](https://github.com/is-limo/dsh-mornye-quota-pet) | `is-limo/dsh-mornye-quota-pet` | — | — | DSH 莫宁额度桌宠：实时显示 OpenCode Go 与自定义额度，支持拖拽吸附、告警、台词、音效和多档仪表。 |
| [deepseek-whale-pet](https://github.com/knight-dotcom9/deepseek-whale-pet) | `knight-dotcom9/deepseek-whale-pet` | — | — | 鲸鱼娘桌宠 - DeepSeek 桌面宠物，跟随 DSH 工作状态切换形态 |
| [DSH-desktop-pet](https://github.com/lishLRF/DSH-desktop-pet) | `lishlrf/dsh-desktop-pet` | — | — | DeepSeek Harness (DSH) 桌面宠物：置顶可拖动的宠物小窗实时显示 DSH 工作状态，任务完成弹出气泡提醒，无需把 DSH 置顶。DSH 插件 + Electron 应用。 |
| [deepseek-pet](https://github.com/Mrzhailiming/deepseek-pet) | `mrzhailiming/deepseek-pet` | — | — | Pet your AI's whale girl 🐳 — DeepSeek Harness 右下角的桌面养成宠物插件：Agent 干活=喂食，Combo/暴食/进化/多宠物孵蛋全都有。 |
| [dsh-token-pet](https://github.com/pk7j7sqryy-ops/dsh-token-pet) | `pk7j7sqryy-ops/dsh-token-pet` | — | — | DSH 动态 Cordis 插件：卡通用量小部件 + 天气/预报/预警（Token Pet 布布玩偶） |
| [dsh-live2d-poppinparty](https://github.com/U1s1-king/dsh-live2d-poppinparty) | `u1s1-king/dsh-live2d-poppinparty` | — | — | Poppin'Party Live2D 桌宠插件 for DeepSeek Harness (local models, zero external deps) |
| [dsh-pet-xiaoshen](https://github.com/wfknife/dsh-pet-xiaoshen) | `wfknife/dsh-pet-xiaoshen` | — | — |  |
| [kun-pet-desktop](https://github.com/anticipate218/kun-pet-desktop) | `anticipate218/kun-pet-desktop` | — | — | 坤宠桌面版 (Kun Pet Desktop) — Windows 桌面坤宠：透明置顶、可拖动、可缩放、点击互动、可开机自启。素材与动画源自 dsh-kun-pet (MIT, Practice019) |
| [dsh-cyber-pet](https://github.com/BorisXiao/dsh-cyber-pet) | `borisxiao/dsh-cyber-pet` | — | — | A “Cyber Whale” pet designed for DeepSeek Harness: a whale that hovers on the web page, can be fed, and changes color… |
| [dsh-pet-shura](https://github.com/brittanistrehlowll-oss/dsh-pet-shura) | `brittanistrehlowll-oss/dsh-pet-shura` | — | — | 修罗小脑斧 — animated desktop pet for the DeepSeek Harness (DSH) web surface: v2 spritesheet animation, drag & drop… |
| [suona](https://github.com/comery/suona) | `comery/suona` | — | — | A screen pet for reporting the task status collected from local agent APPs, such as codex, hermes, DSH desktop. |
| [dsh-png-pet](https://github.com/comfylies/dsh-png-pet) | `comfylies/dsh-png-pet` | — | — | A Windows desktop pet companion for DeepSeek Harness (DSH PNG pet). |
| [dsh-desktop-pet](https://github.com/crabossss/dsh-desktop-pet) | `crabossss/dsh-desktop-pet` | — | — |  |
| [kun-desktop-pet](https://github.com/ddldydd/kun-desktop-pet) | `ddldydd/kun-desktop-pet` | — | — | Windows 桌面宠物（Kun Like 桌宠）：悬浮桌宠 + DeepSeek Harness 任务进展与审批提醒，纯 PowerShell + WPF 零依赖 |
| [dsh-whale-pet](https://github.com/drfai/dsh-whale-pet) | `drfai/dsh-whale-pet` | — | — | DeepSeek Harness 桌宠插件：内置 Coopanion 鲸鱼娘分层精灵，随模型峰谷计价自动更换女仆装发带颜色，并常驻显示时段倒计时 |
| [dsh-mascot-xiadie](https://github.com/Edison-q/dsh-mascot-xiadie) | `edison-q/dsh-mascot-xiadie` | — | — | Q版遐蝶余额小管家 —— DeepSeek Harness 网页插件：悬浮小人实时播报账户余额与 token 用量，可拖动、可换图、可换角色台词。 |
| [external-pet-renderer](https://github.com/fuyao606/external-pet-renderer) | `fuyao606/external-pet-renderer` | — | — | A local Windows desktop pet renderer for Codex and DeepSeek Harness session activity. |
| [dsh-kun-like-pet](https://github.com/GangLongYu/dsh-kun-like-pet) | `ganglongyu/dsh-kun-like-pet` | — | — | Kun Like desktop pet static bundle plugin for DeepSeek Harness |
| [paseo-stuff](https://github.com/geoqiao/paseo-stuff) | `geoqiao/paseo-stuff` | — | — | Independent community plugins for Paseo: readable activity, DeepSeek Harness, math and pets |
| [DSH-PET](https://github.com/HiBer2007/DSH-PET) | `hiber2007/dsh-pet` | — | — | DSH余额桌宠C#版 |
| [deepseek-harness-balance-pet](https://github.com/Ho11ow8/deepseek-harness-balance-pet) | `ho11ow8/deepseek-harness-balance-pet` | — | — | A deepseek balance pet |
| [A-desktop-pet-based-on-dsh](https://github.com/Jasonchen2026/A-desktop-pet-based-on-dsh) | `jasonchen2026/a-desktop-pet-based-on-dsh` | — | — | 一个桌宠，截止创立此库为止仅用了两天，代码是claude opus5.5写的 |
| [DSH-Desktop](https://github.com/jiuge2467/DSH-Desktop) | `jiuge2467/dsh-desktop` | — | — | 🐬 专为小白与极客打造的 DeepSeek Harness 桌面全栈工作台：内置小鲸鱼姬桌宠、多源 MCP 调试沙箱、持久化终端与看板 \| The Geek & Cozy Desktop Client for DeepSeek… |
| [dsh-live2d-avatar](https://github.com/Lsc-91-69/dsh-live2d-avatar) | `lsc-91-69/dsh-live2d-avatar` | — | — | A DeepSeek Harness plugin that turns a Live2D model into a desktop pet showing the agent's live status and inner… |
| [CodexPet-DSH-macOS](https://github.com/Lucifer-962301/CodexPet-DSH-macOS) | `lucifer-962301/codexpet-dsh-macos` | — | — | A macOS desktop pet with Codex task integration, Usage bubbles, and Chinese / Japanese / English UI. Based on dsh-pet. |
| [dsh-pet-standalone](https://github.com/masknull/dsh-pet-standalone) | `masknull/dsh-pet-standalone` | — | — | Windows 桌面宠物（单文件）：双击即用，内嵌 91 组透明动画，原生 C++/Win32，支持拖拽、屏幕漫游、托盘与开机自启。 \| A single-file Windows desktop pet: double-click… |
| [dsh-pet](https://github.com/mathhyphen/dsh-pet) | `mathhyphen/dsh-pet` | — | — |  |
| [dsh-dafeiyu](https://github.com/minghaoxia61-web/dsh-dafeiyu) | `minghaoxia61-web/dsh-dafeiyu` | — | — | dsh-plugin, deepseek-harness, desktop-pet, deepseek, pyside6, windows, 桌宠 |
| [dsh-dafyfish-pet](https://github.com/mizuki5101/dsh-dafyfish-pet) | `mizuki5101/dsh-dafyfish-pet` | — | — | 大肥鱼桌宠：DSH Live2D 桌面宠物（DSH 插件 + 独立 Electron 外壳），可脱离 DSH 运行 |
| [neoxider-agent-deck](https://github.com/NeoXider/neoxider-agent-deck) | `neoxider/neoxider-agent-deck` | — | — | A desktop pet for your AI agents: a slime that climbs your screen, naps on the taskbar and tells you when DeepSeek… |
| [dsh-desktop-pet-harness-](https://github.com/oktinayeri-stack/dsh-desktop-pet-harness-) | `oktinayeri-stack/dsh-desktop-pet-harness-` | — | — | 开源 |
| [dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | `omdsh-dev/dsh-pet-corner` | — | — | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| [dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets) | `pineapple880066/dsh-webui-pets` | — | — | Codex-style desktop pets for the DeepSeek Harness Web UI / 类似 Codex 的 DeepSeek Harness Web UI 桌宠 |
| [dafeiyu-iphone-83af6f2524](https://github.com/qwqyinhao-cpu/dafeiyu-iphone-83af6f2524) | `qwqyinhao-cpu/dafeiyu-iphone-83af6f2524` | — | — | Personal noncommercial animated pet. Original: github.com/PC2005-cloud/dsh-pet |
| [dsh-desk](https://github.com/Renakoni/dsh-desk) | `renakoni/dsh-desk` | — | — | 🐾 DSH 的桌面端状态监听与桌宠交互工具，为你的DSH提供5000+桌宠选择。DeepSeek Harness desktop companion for live workflow events, usage insights… |
| [dsh-whale-girl-pet](https://github.com/sharkyworkshop/dsh-whale-girl-pet) | `sharkyworkshop/dsh-whale-girl-pet` | — | — | 鲸鱼娘桌宠 · Windows 桌面宠物（逐像素 alpha + 真物理）与单文件网页吉祥物 \| DSH Whale Girl Pet: a Windows desktop pet with per-pixel alpha and… |
| [dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet) | `sundusk/dsh-waterball-pet` | — | — | A floating water-ball pet plugin for the DeepSeek Harness Web UI. |
| [dsh-pet](https://github.com/SundustYc/dsh-pet) | `sundustyc/dsh-pet` | — | — | DSH Pet 是一个面向 DeepSeek Harness (DSH) 的持久化桌宠插件。它把 Codex 风格的动画桌宠接入 DSH 会话：不开 WebUI 也能查看工作状态、切换会话、发送消息，并处理工具审批。 |
| [dsh-pet-android](https://github.com/Tongyu3/dsh-pet-android) | `tongyu3/dsh-pet-android` | — | — | dsh-pet 的 Android 上层显示衍生插件：多载体自动探测（尽力适配所以安卓移植dsh / 宿主悬浮窗契约），不含上游代码，MIT |
| [dsh-live2d-afterglow](https://github.com/U1s1-king/dsh-live2d-afterglow) | `u1s1-king/dsh-live2d-afterglow` | — | — |  |
| [dsh-live2d-avemujica](https://github.com/U1s1-king/dsh-live2d-avemujica) | `u1s1-king/dsh-live2d-avemujica` | — | — |  |
| [dsh-live2d-hhw](https://github.com/U1s1-king/dsh-live2d-hhw) | `u1s1-king/dsh-live2d-hhw` | — | — |  |
| [dsh-live2d-morfonica](https://github.com/U1s1-king/dsh-live2d-morfonica) | `u1s1-king/dsh-live2d-morfonica` | — | — |  |
| [dsh-live2d-pastelpalettes](https://github.com/U1s1-king/dsh-live2d-pastelpalettes) | `u1s1-king/dsh-live2d-pastelpalettes` | — | — |  |
| [dsh-live2d-ras](https://github.com/U1s1-king/dsh-live2d-ras) | `u1s1-king/dsh-live2d-ras` | — | — |  |
| [dsh-live2d-roselia](https://github.com/U1s1-king/dsh-live2d-roselia) | `u1s1-king/dsh-live2d-roselia` | — | — |  |
| [anon-pet](https://github.com/umr0911/anon-pet) | `umr0911/anon-pet` | — | — | dsh桌宠插件 |
| [dsh-desktop-pet](https://github.com/UNICUS1221/dsh-desktop-pet) | `unicus1221/dsh-desktop-pet` | — | — | 🐟 由大肥鱼完成的桌面小鲸鱼（DSH 桌宠插件）：余额卡 / 情绪词库 / 每日网络梗 / 压扁动效 |
| [dsh-Friend](https://github.com/wanghehe123/dsh-Friend) | `wanghehe123/dsh-friend` | — | — | 人格化伴侣插件 for DeepSeek Harness：角色卡、语音、Live2D、本地记忆与工作陪伴。 |
| [jingbao-voice-pet](https://github.com/windfind-02/jingbao-voice-pet) | `windfind-02/jingbao-voice-pet` | — | — | 鲸宝语音桌宠 Jingbao Voice Pet · DSH 桌宠插件（网页版 + 桌面端通用）：确认&提问语音播报 + 任务完成闹钟 + CPU/内存/GPU 监测 + DeepSeek 余额 + 音量调节 + 自动更新 + H3… |
| [dsh-kun-like-pet](https://github.com/wt7439216/dsh-kun-like-pet) | `wt7439216/dsh-kun-like-pet` | — | — | Kun Like 桌宠 · DSH 静态插件版 — 全窗口持久桌面宠物（由 liyupi/dsh-kun-like-pet 改造） |
| [dsh-pocket](https://github.com/xiazhuo123456789/dsh-pocket) | `xiazhuo123456789/dsh-pocket` | — | — | 把 DeepSeek Harness 装进手机：远程发任务、批审批、盯进度。内置 106 段动画的桌面宠物「大肥鱼」，不连电脑也能在手机上玩。Mobile client for DeepSeek Harness (DSH) with an… |
| [dsh-live2d-mao](https://github.com/xkk6663/dsh-live2d-mao) | `xkk6663/dsh-live2d-mao` | — | — | 把 DeepSeek Harness 的工作状态，变成一只住在你桌面上的 Live2D 看板娘 |
| [dsh-pet-agent](https://github.com/YenWuLiu/dsh-pet-agent) | `yenwuliu/dsh-pet-agent` | — | — | 一只会管理你电脑的桌面宠物：自制角色「小蓝」（蓝鲸女仆）桌宠外壳 + DeepSeek Harness 内核 Agent 大脑。双击跟她聊天，她真的会用 pwsh、鼠标、 键盘、窗口管理帮你干活——查系统、管文件、开程序、操作… |
| [DSH-desktop](https://github.com/z-time-007/DSH-desktop) | `z-time-007/dsh-desktop` | — | — | DeepSeek Harness 桌面增强套件：壁纸 · 黑鲸鱼桌宠 · 贴边隐藏 · 界面透明度 · Office 文档 · 本地秘书，附原生 Electron 桌面应用。 |
| [dsh-petdex-pet](https://github.com/zenglihunter/dsh-petdex-pet) | `zenglihunter/dsh-petdex-pet` | — | — | Petdex pet in the DSH web GUI: floating, draggable, sprite-animated by agent activity, with a live settings page. Ships… |
| [dsh-maid-whale-suite](https://github.com/Zguangliang/dsh-maid-whale-suite) | `zguangliang/dsh-maid-whale-suite` | — | — | 整合：DSH 鲸鱼娘皮肤（dsh-client-ui-skin-maid-atelier） + DSH 鲸鱼娘皮肤开关（dsh-skin-toggle），并新增开关悬停动画（3D鲸鱼养成桌宠） 。 |
| [dsh-pet](https://github.com/ZhanboHua/dsh-pet) | `zhanbohua/dsh-pet` | — | — | A community DeepSeek Pet client plugin for DeepSeek Harness |
| [dsh-pet-](https://github.com/zhouovo-code/dsh-pet-) | `zhouovo-code/dsh-pet-` | — | — |  |
| [dsh-aemeath-pet](https://github.com/zouyuanqing/dsh-aemeath-pet) | `zouyuanqing/dsh-aemeath-pet` | — | — | 🐾 Aemeath Mini desktop pet plugin for DeepSeek Harness (DSH) - Q版像素爱弥斯电子幽灵桌宠，随 Agent 状态切换 9 种动画，支持拖动和点击互动 \| Codex V1… |
| [cursor-dsh-pet-hooks](https://github.com/1393111968/cursor-dsh-pet-hooks) | `1393111968/cursor-dsh-pet-hooks` | — | — | 可以把cursor Agent的状态显示到 dsh-pet大肥鱼上 |
| [dsh-nailong-desktop-pet](https://github.com/2002yxy/dsh-nailong-desktop-pet) | `2002yxy/dsh-nailong-desktop-pet` | — | — | Nailong (奶龙) desktop-pet plugin for DeepSeek Harness |
| [dsh-deck-pet](https://github.com/228co/dsh-deck-pet) | `228co/dsh-deck-pet` | — | — | DSH（DeepSeek Harness）+ 鲸鱼娘 Live2D 桌宠的 Steam Deck 插件：Game Mode 里截图问攻略、语音提问、桌宠悬浮，语气由她本体人设驱动。A Decky Loader plugin that… |
| [dsh_whalebuddy](https://github.com/2DogsLee/dsh_whalebuddy) | `2dogslee/dsh_whalebuddy` | — | — | whalebuddy - DeepSeek Harness desktop pet (Windows): a DSH bundle plugin + Tauri shell. A porthole whale reflects your… |
| [deepseek-pet](https://github.com/a18946525716-create/deepseek-pet) | `a18946525716-create/deepseek-pet` | — | — | DeepSeek 大肥鱼桌宠 — 透明置顶桌宠，对话直接接入 DeepSeek Harness |
| [dsh-pet-windows](https://github.com/ad17819350271/dsh-pet-windows) | `ad17819350271/dsh-pet-windows` | — | — | DSH 桌面宠物 dsh-pet 的 Windows 版：修复 Electron GPU 子进程崩溃，并可一键打包成免安装 dsh-pet.exe（基于 PC2005-cloud/dsh-pet） |
| [dsh-pet-refu](https://github.com/andyluss/dsh-pet-refu) | `andyluss/dsh-pet-refu` | — | — | DeepSeek Harness 电子宠物插件，未来复古风格 |
| [dsh-pet-calico](https://github.com/Antony0223/dsh-pet-calico) | `antony0223/dsh-pet-calico` | — | — | 🐱 A cute calico cat desktop pet plugin for DSH (Web & Desktop) — edge crawling, stats, interactions, calico themes |
| [dsh-BFF-pet](https://github.com/anyuinlara-bit/dsh-BFF-pet) | `anyuinlara-bit/dsh-bff-pet` | — | — | DSH 桌面宠物插件 🐾 透明悬浮窗 + WebM 动画，由 Agent 真实状态驱动的 Windows 桌宠。纯 Windows / WSL 均支持，自动识别 Electron 环境。 |
| [dsh-desktop-pet](https://github.com/Ares-song-RD/dsh-desktop-pet) | `ares-song-rd/dsh-desktop-pet` | — | — | 桌宠插件：在 DeepSeek Harness Web 界面右下角悬浮一只可拖拽、会眨眼摇尾的小猫。A cute desktop pet plugin for the DeepSeek Harness Web GUI. |
| [dsh-live2d-pet](https://github.com/AutumunC927/dsh-live2d-pet) | `autumunc927/dsh-live2d-pet` | — | — | 本插件为DSH专门定制的画师懒人一站式桌宠插件（非DSH慎用，其他工作台我没做过测试），内置说明文档非常详细，不用联网也能用，仅需复制粘贴链接并告诉DSH我要下载这个即可… |
| [dsh-plugin-live2d-stage](https://github.com/B612plant/dsh-plugin-live2d-stage) | `b612plant/dsh-plugin-live2d-stage` | — | — | DSHLive2D: Live2D characters and desktop chat for DeepSeek Harness. 作者：小红书号 4190947207 / B612plant |
| [dsh-tavern-desktop-pet](https://github.com/bigmalove/dsh-tavern-desktop-pet) | `bigmalove/dsh-tavern-desktop-pet` | — | — | DSH Tavern 的 Live2D 桌宠插件：跟着正文吐槽、按情绪换表情、走 Tavern 配音渠道 |
| [dsh-desktop-pet](https://github.com/bryanchen463/dsh-desktop-pet) | `bryanchen463/dsh-desktop-pet` | — | — | 紫色圆球桌宠：眼睛始终盯着鼠标，可拖动、点击眨眼、空闲随机动作。DSH 动态 Cordis 插件 + 无依赖网页版。 |
| [dsh-desktop](https://github.com/C12isme945/dsh-desktop) | `c12isme945/dsh-desktop` | — | — | Unofficial DSH Harness Electron desktop client with a task-aware animated desktop pet. |
| [agent-pet](https://github.com/chthollyphile/agent-pet) | `chthollyphile/agent-pet` | — | — | dsh-pet for codex and claude code in quickshell 蓝色大肥鱼codex/cc桌面宠物 |
| [dsh-whale-pet](https://github.com/cloudddddddddd/dsh-whale-pet) | `cloudddddddddd/dsh-whale-pet` | — | — | DSH 桌面伴侣：Live2D 鲸鱼娘桌宠插件 |
| [dsh-pet-desktop](https://github.com/crosslab-air/dsh-pet-desktop) | `crosslab-air/dsh-pet-desktop` | — | — | 一款不依赖 DeepSeek Harness宿主，即脱离DSH的、双击即用的蓝色大肥鱼独立桌面桌宠，能帮你盯着DeepSeek账户余额。单进程、无控制台、支持点击音效与托盘设置。快让你的Agent帮你安装吧。 |
| [whale-desktop-pet](https://github.com/csdKK/whale-desktop-pet) | `csdkk/whale-desktop-pet` | — | — | 鲸鱼娘桌宠 (DSH-FatFish) |
| [dsh-pet-frieren](https://github.com/dakeshui123/dsh-pet-frieren) | `dakeshui123/dsh-pet-frieren` | — | — | A chibi Frieren desktop pet for the DeepSeek Harness Web GUI: install with dsh plugin --profile web add… |
| [dsh-blubby](https://github.com/Darsham/dsh-blubby) | `darsham/dsh-blubby` | — | — | deepseek-harness插件-后台宠物-小咕噜 |
| [whalemaid-desktop-pet](https://github.com/dfzjb/whalemaid-desktop-pet) | `dfzjb/whalemaid-desktop-pet` | — | — | 像素风蓝发鲸鱼女仆桌面宠物 · DSH Agent 桌面入口 · Electron + TypeScript |
| [dsh-bluewhale-pet](https://github.com/Digua520/dsh-bluewhale-pet) | `digua520/dsh-bluewhale-pet` | — | — | DSH 插件：像素蓝鲸陪伴宠物——sunny-pixel 双主题、三级反射弧对话、QQ 宠物式养成、Ambient Observer 求助侦测；真实联网查询（天气/新闻走 web.search+LLM 合成）、host LLM 直调零… |
| [yuhao-pet](https://github.com/dlpufan/yuhao-pet) | `dlpufan/yuhao-pet` | — | — | DeepSeek Harness Web GUI 桌面宠物「宇昊」 |
| [dsh-whale-rice](https://github.com/DMM-331/dsh-whale-rice) | `dmm-331/dsh-whale-rice` | — | — | DeepSeek Harness plugin: a chibi whale maid desktop pet who eats white rice while the model generates |
| [dsh-music](https://github.com/Dongfang81/dsh-music) | `dongfang81/dsh-music` | — | — | 第一款真正意义上的 AI 原生音乐播放器 🎵 在对话里说一句想听的歌，月宝 Moony 全网搜集、整理、开播；十只月亮宠物随音乐起舞。零依赖安装即用，DSH 插件。 |
| [GrokBot_in_DeepseekHerness](https://github.com/Edge-HH/GrokBot_in_DeepseekHerness) | `edge-hh/grokbot_in_deepseekherness` | — | — | 将GrokBot宠物代入DSH网页端并加入拖拽效果和通知功能 |
| [dsh-pets](https://github.com/eivmosn/dsh-pets) | `eivmosn/dsh-pets` | — | — | Codex Pets integration for the DeepSeek Harness Web GUI |
| [dsh-pet-indesktop-rs](https://github.com/entropy356/dsh-pet-indesktop-rs) | `entropy356/dsh-pet-indesktop-rs` | — | — | Rust 重构版桌面宠物（原项目 MerZlin/dsh-pet-indesktop，Python+PySide6 → Rust），蓝色大肥鱼跨 Windows/Linux/macOS |
| [dsh-deep-whale](https://github.com/ericzzhou/dsh-deep-whale) | `ericzzhou/dsh-deep-whale` | — | — | 🐳 Deep Whale: 一只会满屏巡游的 DeepSeek Harness 宠物鲸鱼插件——吃工具调用、放技能、鲸跃砸浪、珍珠占卜、whale_talk 动态工具。 |
| [dsh-real-fish-pet](https://github.com/FaMuer/dsh-real-fish-pet) | `famuer/dsh-real-fish-pet` | — | — | A 3D whale desktop pet for the dsh web UI: free swimming, attention animations and whale-call sounds on task events. |
| [dsh-pet-app](https://github.com/fandreamdev/dsh-pet-app) | `fandreamdev/dsh-pet-app` | — | — | deepseek harness pet app |
| [Emoji_Desktop_Pet](https://github.com/Gcsimple/Emoji_Desktop_Pet) | `gcsimple/emoji_desktop_pet` | — | — | Emoji Desktop Pet 表情桌面宠物 — A draggable emoji desktop pet for the DeepSeek Harness (DSH) web UI, built as a dynamic… |
| [dsh-pet-indesktop](https://github.com/Gjs9178U/dsh-pet-indesktop) | `gjs9178u/dsh-pet-indesktop` | — | — | A desktop pet for the DSH web GUI: an inline-SVG whale that bobs, blinks and sways, can be dragged anywhere and… |
| [DeepSeek-Harness-Pet](https://github.com/Hai-mian-33/DeepSeek-Harness-Pet) | `hai-mian-33/deepseek-harness-pet` | — | — | DeepSeek Harness Pet · Bilingual desktop whale pet (zh-CN/English) — live session status bubbles, drag with… |
| [sakiko-for-dsh](https://github.com/hg4/sakiko-for-dsh) | `hg4/sakiko-for-dsh` | — | — | 把《BanG Dream!》豊川祥子请进 DeepSeek Harness：Live2D 立绘 + 会话管理 + 日语语音 + 长期记忆。非官方二创，仅供个人学习与技术交流。 |
| [dsh-pet-android](https://github.com/hhyy-yy/dsh-pet-android) | `hhyy-yy/dsh-pet-android` | — | — | 蓝色大肥鱼 · 安卓桌宠 —— 悬浮窗宠物，整屏透明 WebView 渲染 + 原生前台服务宿主，106 段烘焙动画。桌面版见 dsh-pet-indesktop |
| [dsh-whale-girl-tauri](https://github.com/Howling202524/dsh-whale-girl-tauri) | `howling202524/dsh-whale-girl-tauri` | — | — | Tauri 2 desktop pet bundle for DeepSeek Harness |
| [dsh-desktop-pet](https://github.com/HXLanan/dsh-desktop-pet) | `hxlanan/dsh-desktop-pet` | — | — |  |
| [dsh-ikaros-pet](https://github.com/ikaros-sora/dsh-ikaros-pet) | `ikaros-sora/dsh-ikaros-pet` | — | — | DSH-aware Ikaros desktop pet built on Sakura Desktop Pet - sees your screen, reads your DeepSeek Harness sessions… |
| [dsh-mascot](https://github.com/jing83506-lab/dsh-mascot) | `jing83506-lab/dsh-mascot` | — | — |  |
| [dsh-ui-desktop-pet](https://github.com/jmctsh/dsh-ui-desktop-pet) | `jmctsh/dsh-ui-desktop-pet` | — | — | deepseek harness 桌宠模块 |
| [dsh-pet](https://github.com/kmm331752-ai/dsh-pet) | `kmm331752-ai/dsh-pet` | — | — | 桌面陪伴宠物：有 DeepSeek Harness 任务时显示七种任务状态，没任务时自己溜达、犯困、睡觉，会记住你 · 单文件 exe 开箱即用 · 支持 Codex 精灵图契约与 clawd 主题两种素材格式 |
| [dsh-live2d-deskpet](https://github.com/lampe9703/dsh-live2d-deskpet) | `lampe9703/dsh-live2d-deskpet` | — | — | Live2D desktop companion plugin for DeepSeek Harness: agent-state driven animations, an independent companion LLM, and… |
| [dsh-desktop-pet-bulldog](https://github.com/leonty1/dsh-desktop-pet-bulldog) | `leonty1/dsh-desktop-pet-bulldog` | — | — |  |
| [dsh-nba-pets](https://github.com/lijian-888/dsh-nba-pets) | `lijian-888/dsh-nba-pets` | — | — | 🏀 为 DeepSeek Harness 打造的篮球桌面宠物插件：自由切换 Curry 30、King 23，支持投篮待机动画、AI 任务状态提醒、拖拽与位置记忆，让每一次 AI 编程都像置身比赛现场！ |
| [dsh-live2d-avatar](https://github.com/lijiaxing1997/dsh-live2d-avatar) | `lijiaxing1997/dsh-live2d-avatar` | — | — |  |
| [dsh-seekbuddy](https://github.com/lilightspeed/dsh-seekbuddy) | `lilightspeed/dsh-seekbuddy` | — | — | Desktop pet peer client for DeepSeek Harness (DSH): /api + WebSocket client, MCP server, desktop shell (Electron). |
| [dsh-co-pet](https://github.com/LINNoot/dsh-co-pet) | `linnoot/dsh-co-pet` | — | — | DeepSeek Harness 桌面宠物：DSH 桌宠桥接插件 A desktop-pet for dsh |
| [dsh--liucan](https://github.com/liucan1281831/dsh--liucan) | `liucan1281831/dsh--liucan` | — | — | DSH 插件合集：DeepSeek 余额与峰谷时段查询 + 桌面小鱼宠物（语音合成、本地声音克隆、天气、Live2D） |
| [dsh-minecraft-pet](https://github.com/lovejavacore/dsh-minecraft-pet) | `lovejavacore/dsh-minecraft-pet` | — | — | DeepSeek Harness（DSH）网页界面的桌面宠物——Steve、Creeper 和 Ultraman 会根据代理的工作状态做出反应。A desktop pet for the DeepSeek Harness (DSH)… |
| [whale-girl-desktop-pet](https://github.com/lyl1352/whale-girl-desktop-pet) | `lyl1352/whale-girl-desktop-pet` | — | — | 把 dsh-whale-girl-pet 的鲸鱼娘桌宠原样搬到 Windows 桌面：透明置顶浮窗 + 打字机气泡 + 分时段花费看板 + 实时余额。原版代码零改动运行。 |
| [dsh-status-pet](https://github.com/milu-hub/dsh-status-pet) | `milu-hub/dsh-status-pet` | — | — | DSH 桌面状态宠物：通过系统托盘和悬浮气泡实时显示 Agent 工作状态。 |
| [dsh-anime25d-pets-v2](https://github.com/moon-partner/dsh-anime25d-pets-v2) | `moon-partner/dsh-anime25d-pets-v2` | — | — | DSH0.2.0compatible anime 2.5D desktop pet |
| [whale-chan-mobile-pet](https://github.com/MYKAND37/whale-chan-mobile-pet) | `mykand37/whale-chan-mobile-pet` | — | — | Android WebView client for DeepSeek Harness |
| [dsh-plugin-petdex-market](https://github.com/NattoCB/dsh-plugin-petdex-market) | `nattocb/dsh-plugin-petdex-market` | — | — | DSH plugin: petdex.dev companion-pet market with a native macOS desktop pet renderer |
| [dsh-xiangqi](https://github.com/ovdoesw/dsh-xiangqi) | `ovdoesw/dsh-xiangqi` | — | — | DSH 中国象棋消遣插件：卡通小宠物邀请你在 AI 思考间隙下棋，内置引擎 + 中文记谱 + LLM 点评 |
| [deepseek-whale-girl-pet](https://github.com/pokerface-1224/deepseek-whale-girl-pet) | `pokerface-1224/deepseek-whale-girl-pet` | — | — | DeepSeek Harness 鲸鱼娘桌宠插件：透明 Windows 桌宠、五种动作立绘与互动菜单 |
| [silverhand-dsh-pet](https://github.com/Qiao-NEYC/silverhand-dsh-pet) | `qiao-neyc/silverhand-dsh-pet` | — | — | Silverhand desktop pet for DeepSeek Harness — drag to move, reacts to agent state. |
| [DSH-Balance-Desk-Pet](https://github.com/QingCheng3962/DSH-Balance-Desk-Pet) | `qingcheng3962/dsh-balance-desk-pet` | — | — | 一款基于 B站 月匠（ https://space.bilibili.com/345797244?spm_id_from=333.337.0.0 ）制作的桌面宠物款DSH记账小桌宠，不仅限于DSH应用内！ |
| [dsh-pet-desktop](https://github.com/qiqibabyy/dsh-pet-desktop) | `qiqibabyy/dsh-pet-desktop` | — | — | A self-contained desktop pet plugin for DeepSeek Harness — Codex-style animated pets with affinity, activity bubbles… |
| [dsh-pet-60fps](https://github.com/r0setan79/dsh-pet-60fps) | `r0setan79/dsh-pet-60fps` | — | — | dsh-pet（DeepSeek Harness 桌面宠物）60fps 改版：106 段素材全部运动插帧到 60fps，改 0.35s 交叉淡入 + 预解码 + 防重复随机 |
| [dsh-desk-pet-yami](https://github.com/Retr67/dsh-desk-pet-yami) | `retr67/dsh-desk-pet-yami` | — | — | DSH 桌面宠物插件 — 金色暗影 Yami（To Love-Ru）皮肤版。非营利，仅供学习交流，侵权请联系下架。 |
| [dsh-pets](https://github.com/rikfish163-rgb/dsh-pets) | `rikfish163-rgb/dsh-pets` | — | — | Codex Pets–style desktop pet + live task panel plugin for DeepSeek Harness (DSH) Web UI |
| [deepseek-dafeiyu-pet](https://github.com/RYANFFY/deepseek-dafeiyu-pet) | `ryanffy/deepseek-dafeiyu-pet` | — | — | 🐋 DeepSeek 大肥鱼桌宠 · Windows 独立桌面宠物：会散步、查天气，并盯着你的 DeepSeek 余额——余额 / 今日已用 / 峰谷时段 /… |
| [dsh-salary-cat](https://github.com/sorry123maker/dsh-salary-cat) | `sorry123maker/dsh-salary-cat` | — | — | dsh的月薪猫宠物 |
| [deepseek-whale-pet](https://github.com/sublatesublate-design/deepseek-whale-pet) | `sublatesublate-design/deepseek-whale-pet` | — | — | Independent DeepSeek Harness whale pet plugin with Electron Desktop companion example |
| [dsh-pet-hermes](https://github.com/Theathens/dsh-pet-hermes) | `theathens/dsh-pet-hermes` | — | — | A standalone desktop pet for the DeepSeek Harness web GUI, powered by your local Hermes Agent — with real conversation… |
| [deepseek-harness-pet-mac](https://github.com/timpcfan/deepseek-harness-pet-mac) | `timpcfan/deepseek-harness-pet-mac` | — | — | DeepSeek Harness 桌宠（macOS 版）：原生透明桌宠、全局会话聚合、任务面板。 |
| [bigfatfish](https://github.com/tk553521/bigfatfish) | `tk553521/bigfatfish` | — | — | DSH 桌面宠物插件：DeepSeek 鲸鱼娘（情绪驱动 + 鼠标拖拽） |
| [deepseek-harness-whale-pet](https://github.com/Vinsenz0122/deepseek-harness-whale-pet) | `vinsenz0122/deepseek-harness-whale-pet` | — | — | DeepSeek Harness Web 的可拖动鲸鱼女仆状态宠物插件 |
| [dsh-pet](https://github.com/wangxudong970713-cmd/dsh-pet) | `wangxudong970713-cmd/dsh-pet` | — | — | 基于 DSH 桌面宠物的独立桌面版二创，支持透明置顶交互、多动作动画链与离线/自配Key运行 |
| [dsh-mario-pet](https://github.com/weishengli119-del/dsh-mario-pet) | `weishengli119-del/dsh-mario-pet` | — | — | 超级马里奥宠物 |
| [dsh-big-fat-whale-deskpet](https://github.com/weizhi-notfound/dsh-big-fat-whale-deskpet) | `weizhi-notfound/dsh-big-fat-whale-deskpet` | — | — | 这是一条蓝色大肥鱼桌面宠物/this is a blue big fat whale ,which is deskpet |
| [whale-musume-desktop](https://github.com/whaoqi666-pixel/whale-musume-desktop) | `whaoqi666-pixel/whale-musume-desktop` | — | — | Electron desktop pet port of dsh-whale-musume (standalone, chat-capable) |
| [dsh-pet-desktop-linux](https://github.com/Wlaeg/dsh-pet-desktop-linux) | `wlaeg/dsh-pet-desktop-linux` | — | — | A transparent always-on-top desktop pet for DSH on Linux (X11 / XWayland) |
| [YierPet](https://github.com/wusai2333/YierPet) | `wusai2333/yierpet` | — | — | YierPet — a macOS desktop pet that watches over your AI coding agents (qwen / qodercli / opencode / omp / omo / dsh)… |
| [dsh-live2d-widget](https://github.com/xieluyang912/dsh-live2d-widget) | `xieluyang912/dsh-live2d-widget` | — | — | 给 DeepSeek Harness Web 界面加一只 Live2D 桌宠：打开 DSH 就能看到可爱的二次元角色站在聊天界面角落。 |
| [dsh-pet](https://github.com/xingxingluolei/dsh-pet) | `xingxingluolei/dsh-pet` | — | — | Standalone DeepSeek Harness desktop pet with task states, total-credit treasury and compensation pouch. |
| [dsh-pet-3d](https://github.com/XTIqwq/dsh-pet-3d) | `xtiqwq/dsh-pet-3d` | — | — | DSH 3D desktop pet plugin (code only, no game assets) - v1.0.3 |
| [dsh-plugin-simple-pet](https://github.com/YangShen-SWE/dsh-plugin-simple-pet) | `yangshen-swe/dsh-plugin-simple-pet` | — | — | Windows desktop pet with DeepSeek billing, Codex subscription quotas, opt-in automatic Codex warm-up, six skins and… |
| [bigfish-pet](https://github.com/yiling10-creature/bigfish-pet) | `yiling10-creature/bigfish-pet` | — | — | 大肥鱼桌宠 · 独立 Electron 桌面宠物 Tip:独立桌面宠物，需先安装 dsh-bigfish 插件提供角色素材（接入了对话模型可以联网搜索哦） |
| [dsh-pet-live2d](https://github.com/YilunLi-999/dsh-pet-live2d) | `yilunli-999/dsh-pet-live2d` | — | — | A pet for DeepSeek Harness, supporting live2d model |
| [dsh-token-pet](https://github.com/YISU-noinjory/dsh-token-pet) | `yisu-noinjory/dsh-token-pet` | — | — | Q弹的DeepSeek余额桌面宠物 |
| [shalom-dsh](https://github.com/youngiry/shalom-dsh) | `youngiry/shalom-dsh` | — | — | 瑟琳 DeepSeek Harness 同人皮肤：昼夜底图 + 审查囚服像素宠物。Fan skin for DeepSeek Harness (Shalom / Path to Nowhere). |
| [dsh-bear-pet](https://github.com/yyzh520/dsh-bear-pet) | `yyzh520/dsh-bear-pet` | — | — | DSH desktop pet plugin: a self-deprecating bear at the bottom-right corner that reacts to agent status and plays a… |
| [dsh-worktable-pet](https://github.com/yztdtf/dsh-worktable-pet) | `yztdtf/dsh-worktable-pet` | — | — | DeepSeek Harness ??????????(Dynamic Cordis Plugin) |
| [dsh-pet-zhuangfangyi](https://github.com/zealot00/dsh-pet-zhuangfangyi) | `zealot00/dsh-pet-zhuangfangyi` | — | — | DeepSeek Harness WebUI desktop pet plugin (chibi pet with idle animation & click speech) |
| [dsh-launcher](https://github.com/zhangxiang1993621/dsh-launcher) | `zhangxiang1993621/dsh-launcher` | — | — | DeepSeek Harness 启动器：Windows 桌面工具，从源码更新、构建、启动/停止 dsh Web 服务，内置桌面宠物 DeepSeek Harness launcher: a Windows desktop GUI to… |
| [ds-pet](https://github.com/zhaoryder/ds-pet) | `zhaoryder/ds-pet` | — | — | Cartoon desktop pet for DeepSeek Harness (DSH) with real-time status, selectable styles, offline launcher, and native… |
| [dsh-desktop-pet](https://github.com/zhengmin486/dsh-desktop-pet) | `zhengmin486/dsh-desktop-pet` | — | — | A desktop pet plugin for DeepSeek Harness (DSH), packaged as a Cordis plugin. |
| [dafeiyu-pet](https://github.com/zhongyi0102/dafeiyu-pet) | `zhongyi0102/dafeiyu-pet` | — | — | DeepSeek 鲸鱼娘·大肥鱼 桌面宠物（Python + PySide6）｜素材来自 dsh-pet，禁商用 |
| [dsh-fatfish-desktop](https://github.com/ZjDing989/dsh-fatfish-desktop) | `zjding989/dsh-fatfish-desktop` | — | — | 大肥鱼桌面宠物：DeepSeek Harness 的 Windows 插件，显示单行任务动作、堆叠气泡并一键跳转聊天。 |
| [dsh-pet-plugin](https://github.com/zjlljx123/dsh-pet-plugin) | `zjlljx123/dsh-pet-plugin` | — | — | DSH desktop pets with sounds (usagi/luffy/iikun/goku/capybara/pikachu/yasuo/tiga) - DeepSeek Harness pet plugin |
| [dsh-rick-and-morty](https://github.com/zsyayo112/dsh-rick-and-morty) | `zsyayo112/dsh-rick-and-morty` | — | — | Rick and Morty theme + desktop pet for the dsh web GUI — three skins, six companions, agent-driven moods |
| [dsh-pet](https://github.com/zuodazuoqiang001/dsh-pet) | `zuodazuoqiang001/dsh-pet` | — | — | Windows desktop pet plugin for DeepSeek Harness. Codex-compatible pets as a layered overlay, with a Plugins settings… |
| [dsh-deep-pet-win32-x64](https://github.com/0x3fffff/dsh-deeppet) | `@0x3fffff/dsh-deep-pet-win32-x64` | — | MIT | dsh-deep-pet 桌宠二进制（Windows x64） |
| [dsh-desktop-pet](https://github.com/asahimoon/dsh-desktop-pet) | `@asahimoon/dsh-desktop-pet` | — | MIT | DSH 桌面宠物（鲸鱼娘）— 透明置顶悬浮窗 + Agent 状态联动 + 热配置 + 多角色兼容（Codex/petdex）。安装：dsh plugin --profile web add… |
| [dsh-cyber-pet](https://github.com/borisshaw6/dsh-cyber-pet) | `@borisshaw6/dsh-cyber-pet` | — | MIT | Cyber whale pet for DeepSeek Harness: a floating, feedable, color-customizable whale over shell.overlay that reports… |
| [dsh-deepseek-pet](https://github.com/yoshino-jf/dsh-deepseek-pet) | `@deepseekstudio/dsh-deepseek-pet` | — | MIT | DeepSeek 桌宠：把「DSH 账户余额 + 蓝鲸女仆桌宠」连起来。宿主端查询余额、通过 127.0.0.1 回环接口喂给桌面悬浮窗，并提供 pet_balance / pet_control 两个模型工具。 |
| [pet](https://github.com/mjw-git/dsh-pet) | `@dsh-pet/pet` | — | MIT | Pet-raising companion for DeepSeek Harness in one package: the host half (XP economy from token use, evolution stages… |
| [dsh-whaleharbor-pet](https://github.com/moonlitdropofblood/dsh-whale-pet) | `@duke-dsh-plugins/dsh-whaleharbor-pet` | — | MIT | 鲸港 WhaleHarbor 大白鲸娘桌面窗宠：透明置顶浮窗，实时反映 DSH 空闲/繁忙/审批/子代理等工作状态。px-v42 拆件 + CSS 纸片人动画。 |
| [dsh-desktop-pet](https://github.com/ecnu/eduwork) | `@eduwork/dsh-desktop-pet` | — | MIT | Desktop pet for DSH applications with the EduWork Electron desktop bridge |
| [mascot](https://github.com/falser101/dsh-mascot) | `@falser101/mascot` | — | MIT | Draggable animated floating companion for the DeepSeek Harness web GUI, with cat and dog breed skins that react to the… |
| [dsh-pets](https://github.com/hellosz/dsh-pets) | `@hellosz/dsh-pets` | — | MIT | DeepSeek Harness pet companion — Codex Pets style floating pet with notification broadcasting and a pet_say tool |
| @jeromejiayu/dsh-whale-pet | `@jeromejiayu/dsh-whale-pet` | — | MIT | A desktop whale-girl mascot pet for the DeepSeek Harness web GUI. |
| [dsh-pet](https://github.com/kuixiu/dsh-pet) | `@kuixiu/dsh-pet` | — | MIT | Bottom-right electronic pet for DeepSeek Harness with a DeepSeek peak / off-peak pricing indicator, per-turn cost, and… |
| @levisbale0824/eason-pet | `@levisbale0824/eason-pet` | — | MIT | An Eason-themed floating desktop pet for the DeepSeek Harness Web UI: 18 Eason-only transparent animations (concert… |
| [dsh-live2d-widget](https://github.com/yidong-liu/dsh-live2d-widget) | `@liuyidong/dsh-live2d-widget` | — | MIT | DSH 客户端插件：Live2D 三月七看板娘挂件（角落悬浮 + 交互 + 会话状态通知 + 桌宠功能） |
| [dsh-whale-pet](https://github.com/miku00039-01/dsh-whale-pet) | `@miku00039-01/dsh-whale-pet` | — | MIT | 🐋 DSH 鲸鱼娘桌宠插件:/whalepet 命令启动 DeepSeek Harness 桌面宠物(启动/停止/监测服务、双击唤起 GUI) |
| [dsh-codex-pet](https://github.com/signalight/codex-to-dsh-pet) | `@signalight/dsh-codex-pet` | — | MIT | DSH web-GUI pet runtime: renders Codex spritesheet-atlas pets (v1/v2) with drag/wave/jump, live activity poses and… |
| @tangyuewei/dsh-client-ui-pet | `@tangyuewei/dsh-client-ui-pet` | — | — | A QQ-pet-style floating salted fish mascot for the DeepSeek Harness web UI |
| [dsh-pet-companion](https://github.com/tobewin/dsh-pet-companion) | `@tobewin/dsh-pet-companion` | — | MIT | Animated, local-only desktop pets for DeepSeek Harness |
| @yshark/dsh-codex-pet | `@yshark/dsh-codex-pet` | — | MIT | DSH 宠物插件：状态驱动悬浮宠物（Codex 宠物包兼容） |
| [dsh-harness-pet](https://github.com/ai-pm-lab/dsh-harness-pet) | `ai-pm-lab/dsh-harness-pet` | — | — | 一个盯着 DSH agent 干活的桌面宠物（macOS / Windows） |
| [dsh-live2d-pet](https://github.com/ankesu/dsh-live2d-pet) | `ankesu/dsh-live2d-pet` | — | — | Live2D companion for DSH: a floating Cubism model with state-driven expressions and mouse tracking; config-driven… |
| [dsh-whale-tools](https://github.com/ArimaKana-Akane/dsh-whale-tools) | `arimakana-akane/dsh-whale-tools` | — | — | dsh-whale-widget satellite: replace the whale mascot with any image (auto cutout) + restart button + heartbeat… |
| [dsh-whale-widget-upgrade](https://github.com/BagpipeArk/dsh-whale-widget-upgrade) | `bagpipeark/dsh-whale-widget-upgrade` | — | — | DSH 小鲸鱼余额挂件的桌面增强升级包：控制中心、多平台记账、额度报警、Live2D 形象层（依附原插件运行，不含挂件本体） |
| [better-dsh-pet](https://github.com/ysppwn721/better-dsh-pet) | `better-dsh-pet` | — | MIT | A desktop-native pet bubble driven by DeepSeek Harness session events: transparent always-on-top Electron window… |
| [dsh-pet-sprite](https://github.com/BlackBearCC/dsh-pet-sprite) | `blackbearcc/dsh-pet-sprite` | — | — | A pixel companion living in the chat area: hatches from an egg into one of three sprites or an LLM-drawn custom one… |
| [dsh-live2d-pet](https://github.com/br0ny4/dsh-live2d-pet) | `br0ny4/dsh-live2d-pet` | — | — | DeepSeek Harness 的 Live2D 桌宠：页面内插件 + 系统全局悬浮外壳，状态与 harness 实时绑定 |
| catpet-desktop-pet | `catpet-desktop-pet` | — | MIT | DSH Cat Meme Desktop Pet Plugin - 在Web界面右下角显示猫MEME宠物，根据Agent工作状态做出不同动作 |
| [dsh-live2d-avatar](https://github.com/clown139880/dsh-live2d-avatar) | `dsh-live2d-avatar` | — | MIT | Live2D avatar stage and desktop companion for DSH: bundled Haru sample, custom Cubism 2/3+ model loading with scale and… |
| [dsh-pet-think-voice](https://github.com/cuiyuanlie2020-stack/dsh-pet-think-voice) | `cuiyuanlie2020-stack/dsh-pet-think-voice` | — | — | vibe coding时无聊犯困，可以使用DSH 思考朗读桌宠：把模型的 reasoning 挑成人话念出来（Live2D + Edge TTS） |
| [dsh-lived-pet](https://github.com/deanzhang2026-max/dsh-lived-pet/tree/main/packages/dsh-pet-bridge) | `deanzhang2026-max/dsh-lived-pet` | — | — | Writes the harness agent live state (thinking, working, waiting, done, error) to a state file that a bundled Electron… |
| [deepseek-harness-pets](https://github.com/orxz/deepseek-harness-pets) | `deepseek-harness-pets` | — | MIT | DeepSeek Harness 桌宠插件：像素鲸鱼/机械章鱼随评测与回合状态在 DSH Web UI 中动起来；宠物资产兼容 Petdex 格式。 |
| [deepseek-pet](https://github.com/ambar/deepseek-pet) | `deepseek-pet` | — | MIT | Run Codex Code Pet packages inside the DeepSeek Harness Web UI. |
| [dsh-signal-pet](https://github.com/dingchenhui0618-arch/dsh-signal-pet) | `dingchenhui0618-arch/dsh-signal-pet` | — | — | A small pet in the corner of the interface that reads the real event stream instead of guessing: it drifts when idle… |
| [dsh-macos-pet](https://github.com/Dkrillex/dsh-macos-pet) | `dsh-macos-pet` | — | MIT | macOS desk pet forked from anneheartrecord/dsh-desk-pet, in a real always-on-top window that covers fullscreen Spaces… |
| dsh-app-pet | `dsh-app-pet` | — | MIT | 把 DSH Android 的悬浮球变成 dsh-pet 风格的桌面宠物：24 段透明 webm 动画、随机动作链、点击回应、拖拽抛掷、七个运行状态联动。素材随包分发，装上即用。 |
| [dsh-coopanion-pet](https://github.com/wangquanqing/dsh-coopanion-pet) | `dsh-coopanion-pet` | — | AGPL-3.0-or-later | Coopanion desktop pet for DeepSeek Harness: a whale-girl mascot that speaks, moves and can be driven by the agent |
| [dsh-kylin-pet](https://github.com/kkutysllb/dsh-kylin-pet) | `dsh-kylin-pet` | — | MIT | 麒麟仔 vs 鲸鱼娘 —— 双宠同台桌宠。clean-room 原创实现：机制参考 PC2005-cloud/dsh-pet（MIT），零上游代码/素材/文案。 |
| dsh-live2d | `dsh-live2d` | — | MIT | DSH web plugin: show a Live2D character at the bottom corner of the DeepSeek Harness web page, with a load progress bar… |
| [dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) | `dsh-live2d-pets` | — | MIT | Live2D pet plugin for DeepSeek Harness: a characterful agent companion — follows session state, switchable personas… |
| [dsh-live2d-voice](https://github.com/john-walks-slow/dsh-live2d-voice) | `dsh-live2d-voice` | — | MIT | Live2D session view with realtime voice: continuous voice input, streaming TTS, subtitle translation, multi-model… |
| [dsh-niulai-pet](https://github.com/whitefirer/dsh-niulai-pet) | `dsh-niulai-pet` | — | MIT | dsh web desktop pet: a Niulai calf that lives in the corner, hops around, and moos "mama" when an agent task completes… |
| [dsh-pet-component](https://github.com/dsh-tauri/dsh-pet-component) | `dsh-pet-component` | — | MIT | 把 dsh-pet 与 Codex Pet 两套桌宠协议收进一个 <Pet> React 组件 |
| [dsh-pet-copilot](https://github.com/ltmroberthk915/dsh-pet) | `dsh-pet-copilot` | — | Apache-2.0 | DSH 多会话桌宠：鲸鱼娘、MIKU 与商务小蓝鲸，模型配色、tok/s 调速及共享亲密度。 |
| dsh-pet-dom | `dsh-pet-dom` | — | MIT | 在 DeepSeek Harness Web 界面上跳跃的桌面宠物（Miku）：真实物理跳跃、自动识别页面可落脚区域、规划巡游与突发小动作；支持键盘控制玩法与可调控制台（高亮/合并/主题色/透明度），设置自动保存。 |
| [dsh-pet-live2d-desktop-win32-x64](https://github.com/a8chann/dsh-pet-live2d) | `dsh-pet-live2d-desktop-win32-x64` | — | MIT | dsh-pet-live2d 的桌面端二进制（Windows x64）：让桌宠站在桌面上而不是 DSH 页面里。由主包按需安装，不需要手动装。 |
| dsh-pet-live2d-miyako | `dsh-pet-live2d-miyako` | — | BSD-3-Clause | Live2D desktop pet for the DeepSeek Harness web GUI: a real Cubism 5 model with breath, physics, blinking, gaze… |
| [dsh-pet-remielle](https://github.com/gin-7/dsh-pet-remielle) | `dsh-pet-remielle` | — | MIT | 蕾米埃尔（Remielle）桌宠 for DeepSeek Harness (DSH): session-event-driven sticker pet with status bubbles, SSE live updates… |
| [dsh-pet-statuslight](https://github.com/kongchengavg/dsh-pet-statuslight) | `dsh-pet-statuslight` | — | MIT | DeepSeek Harness status-light plugin: character expressions follow the model state, chat-bubble notifications, and a… |
| [dsh-photo-pet](https://github.com/tangkui/dsh-photo-pet) | `dsh-photo-pet` | — | MIT | Photo pet plugin for the DeepSeek Harness (DSH) Web GUI: turn any uploaded photo into a floating pet that can be… |
| [dsh-plugin-npc-pet](https://github.com/hejiu45/dsh-plugin-npc-pet) | `dsh-plugin-npc-pet` | — | MIT | 小鹤 Crane — a customizable desktop companion NPC for DeepSeek Harness, driven by your own artwork. |
| dsh-plugin-pet | `dsh-plugin-pet` | — | MIT | Virtual Cat Companion, Biological Bands Worker & DSH Web GUI Widget for DeepSeek Harness |
| [dsh-plugin-whale-pet](https://github.com/yifffan/dsh-plugin-whale-pet) | `dsh-plugin-whale-pet` | — | SEE LICENSE IN LICENSE | Your little whale buddy for work, wins, and well-earned naps. |
| [dsh-thought-buddy](https://github.com/dsh-plugins/dsh-thought-buddy) | `@dsh-plugin/dsh-thought-buddy` | — | BSD-3-Clause | A GrokBot-style animated avatar with a synchronized typewriter status line — right in front of the "Deep diving..."… |
| [dsh-token-pet](https://github.com/jimmy0123-ux/dsh-token-pet) | `dsh-token-pet` | — | MIT | A bilingual floating pet for DeepSeek Harness with runtime status, context and lifetime token usage, trends, and… |
| [dsh-web-pets](https://github.com/yucong-28/dsh-skills-plugins) | `dsh-web-pets` | — | MIT | DSH Web 桌宠插件：浏览器里养一只随会话状态换表情的桌宠（内置 demo/remiel），支持随时切换或替换宠物形象；自带设置面板、一键更新与反馈入口 |
| [dsh-whale-girl-pet](https://github.com/yanzwzz/dsh-whale-girl-pet) | `dsh-whale-girl-pet` | — | MIT | 🐋 DeepSeek 娘桌宠：住进 DeepSeek Harness Web 界面的蓝发鲸鱼女仆。工作链路（开工/轮播/收工庆祝）、任务完成统计气泡（用时/消耗/花费）、会话与单轮费用 pill（缓存命中/未命中/输出三桶 +… |
| [dsh-whale-pet](https://github.com/er1c0v0/dsh-whale-pet) | `dsh-whale-pet` | — | MIT | An unofficial whale-girl desktop pet for the DeepSeek Harness Web UI. |
| [dsh-whale-pet-plugin](https://github.com/dleaf6211-hash/dsh-whale-pet) | `dsh-whale-pet-plugin` | — | MIT | Whale girl desktop pet for DeepSeek Harness: browser floating mascot + Windows desktop pet, balance watching, task… |
| [dsh-yisi-pet](https://github.com/your_github_name/dsh-yisi-pet) | `dsh-yisi-pet` | — | MIT | 14酱 · DSH Web 的 Live2D 桌宠：丧、话少、按对话吐槽并念出来（豆包 TTS）、点击换表情、自带记账与余额面板（模型需自行导入） |
| [dsh-pet-progress](https://github.com/Elefseus/dsh-pet-progress) | `elefseus/dsh-pet-progress` | — | — | Folds the durable todo and goal events the dsh pet ignores into a percentage bubble on the pet, and falls back to a… |
| [dsh-im-companion](https://github.com/FeatherHunter/dsh-im-companion) | `featherhunter/dsh-im-companion` | — | — | IM Companion for dsh-im: groups Feishu/WeChat/QQ bots by Agent in DSH workspaces and enhances DSH native session states… |
| [dsh-plugin-live2d](https://github.com/fromatlantis/dsh-plugin-live2d) | `fromatlantis/dsh-plugin-live2d` | — | — | A Live2D anime mascot + theme plugin for the DeepSeek Harness Web GUI |
| [dsh-desktop-pet](https://github.com/GalaxyCcx/dsh-desktop-pet) | `galaxyccx/dsh-desktop-pet` | — | — | DeepSeek Harness in-page desktop pet overlay |
| [dsh-gpt-niang-quota](https://github.com/guyue211/dsh-gpt-niang-quota) | `guyue211/dsh-gpt-niang-quota` | — | — | GPT娘额度挂件 by Tokyo — Codex quota monitoring, editable replies and an original draggable mascot for DSH. |
| [dsh-bluefish-pet](https://github.com/Gyccc0828/dsh-bluefish-pet) | `gyccc0828/dsh-bluefish-pet` | — | — | Bluefish desktop pet plugin for DeepSeek Harness (dsh-pet derivative). |
| [dsh-live2d](https://github.com/hacxy/dsh-live2d) | `hacxy/dsh-live2d` | — | — | 一个用于DeepSeek Harness网页界面的Live2D宠物伴侣插件。 |
| [dsh-whale-live2d](https://github.com/harmless0819-dev/dsh-whale-live2d) | `harmless0819-dev/dsh-whale-live2d` | — | — | Replace the whale widget static image with a Live2D model, stacked at identical geometry. Degrades to the static widget… |
| [dsh-codex-mini-pet](https://github.com/HuiHuangDDFS/dsh-codex-mini-pet) | `huihuangddfs/dsh-codex-mini-pet` | — | — | Adds separate Chat and Work modes to DeepSeek Harness, embeds DeepSeek's official chat page, and provides an animated… |
| [dsh-wukong-pet](https://github.com/hunterfish2027-coder/dsh-wukong-pet) | `hunterfish2027-coder/dsh-wukong-pet` | — | — | dsh桌面宠物插件 |
| [dsh-kamen-rider-pet](https://github.com/JoeEmp/dsh-kamen-rider-pet) | `joeemp/dsh-kamen-rider-pet` | — | — | dsh plugin desktop pet |
| [dsh-fish](https://github.com/KovacBro/dsh-fish) | `kovacbro/dsh-fish` | — | — | 一个给 DeepSeek Harness 的极简宠物插件。 |
| [dsh-mascot](https://github.com/Lighting-cell/dsh-mascot) | `lighting-cell/dsh-mascot` | — | — | Carlotta |
| [DSH-balance-pet-github](https://github.com/LIUXINGYUCN/DSH-balance-pet-github) | `liuxingyucn/dsh-balance-pet-github` | — | — | 作为DSH的余额宠物的插件版 |
| [dsh-live2d-pet](https://github.com/lizekun793-beep/dsh-live2d-pet) | `lizekun793-beep/dsh-live2d-pet` | — | — | Modified fork of ankesu/dsh-live2d-pet (feat/tororo): settings panel, richer Tororo motions, Cubism desktop boot fix |
| [dsh-plugins](https://github.com/lizekun793-beep/dsh-plugins) | `lizekun793-beep/dsh-plugins` | — | — | DSH plugin series: Live2D pet, custom background, image generation |
| [dsh-live2d](https://github.com/lrplrplrp/dsh-live2d) | `@lrplrplrp/dsh-live2d` | — | MIT | A Live2D waifu plugin for DSH. |
| [dsh-pet-guardian-dragon](https://github.com/lucas07814-hub/dsh-pet-guardian-dragon) | `lucas07814-hub/dsh-pet-guardian-dragon` | — | — | A draggable desktop pet for the DSH web interface with interactive actions and growth states. |
| [dsh-pet-whale](https://github.com/LuffySmile/dsh-pet-whale) | `luffysmile/dsh-pet-whale` | — | — | dsh的小宠物 |
| [dsh-pet](https://github.com/Luo-fengyi/dsh-pet) | `luo-fengyi/dsh-pet` | — | — | DS娘桌宠：Live2D 桌面宠物，跟随 DSH 会话状态变脸，能看屏幕、聊天、长期记忆 |
| [dsh-codex-pet](https://github.com/mengyun233/dsh-codex-pet) | `mengyun233/dsh-codex-pet` | — | — | Auto-migrate Codex desktop-pet skins into DSH: an animated corner pet that mirrors agent state (thinking, tool use… |
| [dsh-plugin-Desktop-toy](https://github.com/MFWTW/dsh-plugin-Desktop-toy) | `mfwtw/dsh-plugin-desktop-toy` | — | — | deepseek桌面宠物 |
| [dsh-pet](https://github.com/MGter/dsh-pet) | `mgter/dsh-pet` | — | — | DSH 桌面宠物包体（github 依赖引用版）：即装即用的浮动宠物 + 透明动画素材 |
| [mimi-desktop-pet](https://github.com/mekos2772/dsh-plugin-mimi) | `mimi-desktop-pet` | — | MIT | 鲸鱼娘 Mimi 超级桌面助理：DeepSeek Harness 桌面伴侣，内置 Windows Computer Use，支持观察、点击、输入、滚动与操作后验证。 |
| [live2dshow](https://github.com/mosuzi/live2dshow) | `mosuzi/live2dshow` | — | — | my live2d show using many models made by many authors. thank them and beg for the right just to use |
| [dsh-plugin-live2d-pet](https://github.com/MQGXG/dsh-plugin-live2d-pet) | `mqgxg/dsh-plugin-live2d-pet` | — | — |  |
| [dsh-anime-companion](https://github.com/Murphy1134/dsh-anime-companion) | `murphy1134/dsh-anime-companion` | — | — | DSH (DeepSeek Harness) 动漫伴侣插件：零 token 主题换肤 / Live2D 形象 / TTS 朗读，Cordis 双半插件。 |
| [dsh-whale-girl-desktop](https://github.com/nickkkkkk123123/dsh-whale-girl-desktop) | `nickkkkkk123123/dsh-whale-girl-desktop` | — | — | 鲸鱼娘桌面宠物 (Tauri) |
| [dsh-ui-pet](https://github.com/Nkjv2/dsh-ui-pet) | `nkjv2/dsh-ui-pet` | — | — | A canvas sprite-sheet pet plugin for the DeepSeek Harness web GUI. A dsh bundle + client plugin that renders a… |
| [dsh-live2d-assistant](https://github.com/odysliu/dsh-live2d-assistant) | `odysliu/dsh-live2d-assistant` | — | — | live2d assisant for deepseek harness |
| [pet-whale](https://github.com/nzl153/dsh-pet-whale) | `pet-whale` | — | MIT | 桌宠小鲸鱼：DeepSeek Harness 桌宠插件，桌面端和网页端都能用，随 agent 状态切换动画（官方轮廓版） |
| [pi-dsh-pet](https://github.com/somwhy/pi-dsh-pet) | `pi-dsh-pet` | — | MIT | Floating desktop deepseek chan for the pi coding agent: idle breathing, random actions, screen wandering, and pi event… |
| [dsh-wakamo-pet](https://github.com/qazwsx503/dsh-wakamo-pet) | `qazwsx503/dsh-wakamo-pet` | — | — | Wakamo DSH desktop pet |
| [dsh-lucky](https://github.com/QPLANK/dsh-lucky) | `qplank/dsh-lucky` | — | — | 实现多功能桌面宠物 |
| [dsh-live2d-pet](https://github.com/qqmqq/dsh-live2d-pet) | `qqmqq/dsh-live2d-pet` | — | — | Live2D 桌宠挂件 for DeepSeek Harness Web: 可拖动吸附/滚轮缩放/待机呼吸眨眼, 单击显示 DeepSeek 余额 |
| [dsh-desktop-pet](https://github.com/sereinmono/dsh-desktop-pet) | `dsh-desktop-pet` | — | MIT | A plugin that adds a desktop pet to your DeepSeek Harness, supporting the Codex pet format, you can use hatch-pet or… |
| [dsh-codex-pet](https://github.com/sharkisyou/dsh-codex-pet) | `sharkisyou/dsh-codex-pet` | — | — | DSH 宠物插件：状态驱动悬浮宠物（Codex 宠物包兼容，原型已验证） |
| [dsh-liuying-pet](https://github.com/sleeper-foever/dsh-liuying-pet) | `sleeper-foever/dsh-liuying-pet` | — | — | 流萤宠物插件 |
| [dsh-dogpet](https://github.com/syfun/dsh-dogpet) | `syfun/dsh-dogpet` | — | — | 🐕 中华田园犬桌面宠物 - DSH Desktop Pet |
| [dsh-deepseek-balance](https://github.com/taoyiii112-creator/dsh-deepseek-balance) | `taoyiii112-creator/dsh-deepseek-balance` | — | — | DeepSeek Harness API balance plugin with Wallpaper Engine backgrounds and an in-page mascot |
| [dsh-cook-pet](https://github.com/ting-good/dsh-cook-pet) | `ting-good/dsh-cook-pet` | — | — | 桌面宠物「照照」：透明置顶窗悬浮于所有应用之上，镜像 DeepSeek Harness 状态——待机、颠锅、上菜、托腮等你回话，支持点击回应、拖拽、右键调大小，Electron 运行时自动下载。 |
| totoro-pet | `totoro-pet` | — | MIT | [![Listed on dsh-plugin.org](https://dsh-plugin.org/badges/listed.svg)](https://dsh-plugin.org/plugins/your-owner/your-p… |
| [dsh-future-robot-pet](https://github.com/uckkk/dsh-future-robot-pet) | `uckkk/dsh-future-robot-pet` | — | — | 机器宠物 |
| [dsh-pet-bath](https://github.com/uckkk/dsh-pet-bath) | `uckkk/dsh-pet-bath` | — | — | 宠物洗澡频率 |
| [dsh-pet-bath2](https://github.com/uckkk/dsh-pet-bath2) | `uckkk/dsh-pet-bath2` | — | — | 宠物洗澡 |
| [dsh-pet-disease](https://github.com/uckkk/dsh-pet-disease) | `uckkk/dsh-pet-disease` | — | — | 宠物常见病 |
| [dsh-pet-first-aid](https://github.com/uckkk/dsh-pet-first-aid) | `uckkk/dsh-pet-first-aid` | — | — | 宠物急救药品 |
| [dsh-pet-heat](https://github.com/uckkk/dsh-pet-heat) | `uckkk/dsh-pet-heat` | — | — | 宠物中暑急救 |
| [dsh-pet-pack](https://github.com/uckkk/dsh-pet-pack) | `uckkk/dsh-pet-pack` | — | — | 宠物旅行清单 |
| [dsh-pet-pill](https://github.com/uckkk/dsh-pet-pill) | `uckkk/dsh-pet-pill` | — | — | 宠物喂药 |
| [dsh-pet-sitting](https://github.com/uckkk/dsh-pet-sitting) | `uckkk/dsh-pet-sitting` | — | — | 宠物寄养 |
| [dsh-pet-transport](https://github.com/uckkk/dsh-pet-transport) | `uckkk/dsh-pet-transport` | — | — | 宠物托运 |
| [dsh-pet-trip](https://github.com/uckkk/dsh-pet-trip) | `uckkk/dsh-pet-trip` | — | — | 宠物出行准备 |
| [dsh-pet-wound](https://github.com/uckkk/dsh-pet-wound) | `uckkk/dsh-pet-wound` | — | — | 宠物伤口处理 |
| [dsh-poison-check](https://github.com/uckkk/dsh-poison-check) | `uckkk/dsh-poison-check` | — | — | 宠物中毒识别 |
| [dsh-senior-pet](https://github.com/uckkk/dsh-senior-pet) | `uckkk/dsh-senior-pet` | — | — | 老年宠物 |
| [dsh-desktop-pet](https://github.com/wwen28694-oss/dsh-desktop-pet) | `wwen28694-oss/dsh-desktop-pet` | — | — | deepseek harness Desktop pet |
| [mira_live2d](https://github.com/xhqm-xyz/mira_live2d) | `xhqm-xyz/mira_live2d` | — | — | DSH Live2D 看板娘插件：会话界面浮层（拖拽/滚轮缩放/右键表情菜单）+ 模型可说话（OpenAI/阿里 TTS）+ MCP 工具（状态/切模型/表情动画开关/思考等待表情） |
| [PluginDSH](https://github.com/xhqm-xyz/PluginDSH) | `xhqm-xyz/plugindsh` | — | — | DSH client plugins: mira-live2d mascot plugin (model data excluded, private asset) |
| [xy-deepseek-pet](https://github.com/hexingyuofficial/xy-deepseek-pet) | `xy-deepseek-pet` | — | MIT | Harness adapter bundle for XY DeepSeek Pet |
| [dsh-kun-like-pet](https://github.com/Yang-wudi/dsh-kun-like-pet) | `kunpet-dsh` | — | MIT | 住在 DSH Web 界面右下角的坤坤桌宠：随 Agent 状态切换动作，任务完成时播放「你干嘛~哎哟」。 |
| [lucky](https://github.com/yiurhub/lucky) | `yiurhub/lucky` | — | — | Lucky monorepo — apps/server (agent + HTTP backend) and apps/desktop (Live2D Electron client), dsh plugins under… |
| [dsh-whale-pet](https://github.com/yjj730/dsh-whale-pet) | `yjj730/dsh-whale-pet` | — | — | dsh像素鲸鱼宠物，支持查看对话最新内容，状态，可以和宠物对话，可以在桌面上显示 |
| [dsh-live2d-board](https://github.com/YoungSimpleBoy/dsh-live2d-board) | `youngsimpleboy/dsh-live2d-board` | — | — | Deepseek harness Live2D plugin |
| [dsh-pet](https://github.com/ysyyhhh/dsh-pet) | `ysyyhhh/dsh-pet` | — | — | Native desktop pet for DSH that follows agent activity, supports Codex pet packages, and imports approved pets directly… |
| [dsh-rabbit-pet](https://github.com/zdjmrq/dsh-rabbit-pet) | `zdjmrq/dsh-rabbit-pet` | — | — | DeepSeek Harness 写实小兔子桌面宠物插件 |
| [dsh-pet](https://github.com/zealot00/dsh-pet) | `zealot00/dsh-pet` | — | — | Desktop pet for the DSH Web UI: sprite-sheet animation, agent state linkage, drag, alarm (daily/one-shot) and pomodoro… |
| [dsh-pixel-pet](https://github.com/zhuifengqug/dsh-pixel-pet) | `zhuifengqug/dsh-pixel-pet` | — | — | 像素宠物 |
| [dsh-plugin-mascot](https://github.com/ZYAONS/dsh-plugin-mascot) | `zyaons/dsh-plugin-mascot` | — | — | DeepSeek Harness mascot plugin - a clickable character sprite (Arknights' Closure / BanG Dream!'s Sengoku Yuno) showing… |
| [dsh-live2d-pet](https://github.com/zza66/dsh-live2d-pet) | `zza66/dsh-live2d-pet` | — | — |  |
| [dsh-plugin-night-dog](https://github.com/zzhi191/dsh-plugin-night-dog) | `zzhi191/dsh-plugin-night-dog` | — | — | A tan DeepSeek mascot dog named 夜官 that lives in the corner of the DSH web GUI: floats, reacts to the harness, adapts… |

## 启动动画 / 开场

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| dsh-startup-animation | `dsh-startup-animation` | 2360 | MIT | DSH 启动动画与动态背景插件：启动时全屏播放本地视频，由纯 CSS 保证按时自动消失，不会阻塞启动；持久背景视频层内置控制面板，可实时调节不透明度、开关与播放状态，设置自动持久化。无第三方依赖，跨平台。 |
| [dsh-boot-video-manager](https://github.com/Firefly-TheHerta/dsh-boot-video-manager) | `dsh-boot-video-manager` | 1350 | MIT | A companion playlist panel for the dsh-boot-animation intro-video plugin: add clips without leaving the app, order… |
| [dsh-boot-compass](https://github.com/linshufan21/dsh-boot-compass) | `dsh-boot-compass` | 794 | MIT | Desktop full-screen boot splash. It covers DSH's loading card before first paint, plays a 4.5 s five-stage compass… |
| [dsh-boot-guard](https://github.com/saisenbox/dsh-boot-guard) | `dsh-boot-guard` | 148 | MIT | A loader-independent rescue console for DeepSeek Harness when a broken plugin prevents the Web UI from starting. |
| [dsh-opening-splash](https://github.com/liyue-hope/dsh-opening-splash) | `dsh-opening-splash` | 128 | MIT | DeepSeek Harness opening splash: plays the DSH software-opening animation full screen when the Web UI boots, then fades… |
| [dsh-app-boot](https://github.com/deepseek-ai/deepseek-harness) | `@x1a0f3n9/dsh-app-boot` | 115 | MIT | Shared boot glue for the app bins: .env loading, fail-loud Loader guards, snapshot-aware config resolution, and the… |
| @nuonuo26/dsh-video-splash | `@nuonuo26/dsh-video-splash` | 30 | MIT | Video splash for DeepSeek Harness: plays a film over the boot card through the web server index injection table… |
| dsh-entry-transition | `dsh-entry-transition` | 14 | MIT | One-shot entrance animation for the DSH workspace: logo is written onto the canvas, an inverted color bar sweeps across… |
| [dsh-boot-animation-pro](https://github.com/Yiheng-guo/dsh-boot-animation-pro) | `yiheng-guo/dsh-boot-animation-pro` | — | — | DSH 片头开机动画增强版：播放控制、触发规则、会话名单、分时段片头、片库管理、中英双语。A full-frame intro animation for DSH. Fork of… |
| [dsh-desktop](https://github.com/Alex213321/dsh-desktop) | `alex213321/dsh-desktop` | — | — | 一键安装，基于官方dsh-web端的桌面端（Electron）开发，涵壁纸以及鲸鱼娘挂件，与原web端的对话内容完全同步，实时启动最新版的dsh，可修改与优化以及添加壁纸！ |
| [dsh-rhine-splash](https://github.com/Respawn-ID/dsh-rhine-splash) | `respawn-id/dsh-rhine-splash` | — | — | Rhine Lab theme for DeepSeek Harness — 莱茵生命主题：开屏动画、界面主题、品牌标志与附加功能 |
| [dsh-web-start-ui](https://github.com/stushansusu/dsh-web-start-ui) | `stushansusu/dsh-web-start-ui` | — | — | dsh web start ui - 启动动画 / launch-video plugin for the DSH Web GUI and desktop client: built-in and custom launch skins… |
| [dsh-boot-animation-pro](https://github.com/KEYloyee/dsh-boot-animation-pro) | `keyloyee/dsh-boot-animation-pro` | — | — | 这是在https://github.com/lxj5820/dsh-boot-animation这个插件基础上进行了改善，避免DSH开机时自身UI与插件争夺GPU资源而造成卡顿。 |
| [dsh-boot-animation](https://github.com/zhenghuaquan/dsh-boot-animation) | `zhenghuaquan/dsh-boot-animation` | — | — | dsh会话动画插件优化版本，支持设置多个片头会话。优化视频播放页面。 |
| [dsh-boot-suite](https://github.com/LeeRolling/dsh-boot-suite) | `leerolling/dsh-boot-suite` | — | — | DeepSeek Harness 开机动画 + 聊天壁纸，一个插件：六幕冷启动动画（真声台词/可交互）+ 开场视频/底图/大字横幅。双击 安装.cmd 即可，出问题双击 卸载.cmd。 |
| [dsh-interface-settings](https://github.com/Qiongkura/dsh-interface-settings) | `qiongkura/dsh-interface-settings` | — | — | DSH interface customization plugin: wallpaper / transparency / glass blur / splash screen一个 DeepSeek Harness 前端插件：把「壁纸… |
| [dsh-boot-animation-sound](https://github.com/2034126171/dsh-boot-animation-sound) | `2034126171/dsh-boot-animation-sound` | — | — | DSH 开机动画：声音不需要全屏。触发时机（启动应用/页面刷新/新对话/任意会话）与播放频率（每次/每天一次/只播一次/限播 N 次）可自选。 |
| [dsh-plugin-lx-music](https://github.com/afawfawffaf/dsh-plugin-lx-music) | `afawfawffaf/dsh-plugin-lx-music` | — | — | 落雪音乐（LX Music）内嵌歌词 + 播放控制插件：歌词贴进 DSH 右侧壁纸带，胶囊放上一首/播放暂停/下一首；播放器没开时点播放会自动把它拉起来（托盘启动，不弹窗）。不接管播放。 |
| [dsh-boot-animation](https://github.com/Alice-Marx/dsh-boot-animation) | `alice-marx/dsh-boot-animation` | — | — | DSH plugin: replaces the kernel boot page with a full-window video clip, then dissolves into the app. 中文说明见 MANUAL.md |
| [Dsh-550-Boot](https://github.com/Sun-sh902/Dsh-550-Boot) | `sun-sh902/dsh-550-boot` | — | — | A DSH boot-animation plugin with 550C and 550W intros, a 550A work-in-progress placeholder, terminal-workbench visuals… |
| [dsh-epindel-boot-animation](https://github.com/tszmzz1026/dsh-epindel-boot-animation) | `tszmzz1026/dsh-epindel-boot-animation` | — | — | DSH 原创主题与效率扩展：液态玻璃、头像裁切与命名、长期记忆、目标待办、今日计划；。 |
| @qlzt/dsh-app-boot | `@qlzt/dsh-app-boot` | — | MIT | Shared boot glue for the app bins: .env loading, fail-loud Loader guards, snapshot-aware config resolution, and the… |
| [dsh-startup-guard](https://github.com/aokamoaki/dsh-startup-guard) | `aokamoaki/dsh-startup-guard` | — | — | 启动守卫：修复会话日志、预检插件组合、校验客户端工件、冒烟宿主 apply() 并隔离崩溃源，让坏插件再也无法砖掉启动。 |
| [zcode-550c-boot](https://github.com/Captainlidong/zcode-550c-boot) | `captainlidong/zcode-550c-boot` | — | — | 550C boot animation for ZCode - amber CRT splash on app launch, full web show via /550c-boot. Ported from… |
| [dsh-deepsea-echo](https://github.com/cshengyi023-collab/dsh-deepsea-echo) | `cshengyi023-collab/dsh-deepsea-echo` | — | — | 深海回响 / dsh-deepsea-echo —— 明日方舟风 DSH 启动动画：鲸鱼娘 × PRTS 终端、全息锁定与干员档案，4 套原创配乐可选，可跳过、可配置。Arknights-flavoured startup / boot… |
| [dsh-visual-deck](https://github.com/DrGhost917/dsh-visual-deck) | `drghost917/dsh-visual-deck` | — | — | 给 DeepSeek Harness 自定义开场动画和会话壁纸：导入本地图片/视频，视频当开机动画（带声音、可调音量、每次或每天或仅首次），图片或视频当会话背景（强度、模糊、临时关闭）。纯本地，MIT。/Startup animation… |
| [dsh-boot-doctor](https://github.com/mide69/dsh-boot-doctor) | `dsh-boot-doctor` | — | MIT | DeepSeek Harness plugin: mounts a console log sink and warns about plugins that resolve, validate, and then never… |
| dsh-cn-boot | `dsh-cn-boot` | — | MIT | China-network bootstrap for DeepSeek Harness (dsh): connectivity probes to npm/GitHub/HuggingFace/mirrors, local proxy… |
| [dsh-entry-transition](https://github.com/hbgdjb/dsh-entry-transition) | `hbgdjb/dsh-entry-transition` | — | — | One-shot entrance animation when the workspace opens: the logo is written onto the canvas, then an inverted color bar… |
| [dsh-splash-launcher](https://github.com/Isilsolme/dsh-splash-launcher) | `dsh-splash-launcher` | — | MIT | Windows one-click launcher with a borderless WPF startup animation (stroke-by-stroke HARNESS lettering) that starts dsh… |
| [dsh-boot-animation](https://github.com/Jiushudemowang/dsh-boot-animation) | `jiushudemowang/dsh-boot-animation` | — | — | 鲸鱼娘启动加载动画（修改版）：在原版多片轮换基础上新增「固定片目」——可在 DSH 设置页指定每次开机固定播放哪一段视频。基于 lxj5820/dsh-boot-animation v0.2.0 (MIT) 修改 |
| [dsh-moss-boot](https://github.com/jjt98118-beep/dsh-moss-boot) | `jjt98118-beep/dsh-moss-boot` | — | — | Plays an intro full-frame when you open DSH, when you open a new conversation, or every time you open the one you… |
| [dsh-startup-command](https://github.com/kagurazakayashi/dsh-startup-command) | `kagurazakayashi/dsh-startup-command` | — | — | 在 dsh web 启动成功后运行用户自定义命令的 DeepSeek Harness Web 插件。 |
| [dsh-550c-boot-deepseek](https://github.com/kai-can101/dsh-550c-boot-deepseek) | `kai-can101/dsh-550c-boot-deepseek` | — | — | 20.5-second community DeepSeek Harness UAV boot animation with original synthesized sci-fi audio |
| [DeepSeek-splash-animation](https://github.com/KDDKBD/DeepSeek-splash-animation) | `kddkbd/deepseek-splash-animation` | — | — | Plays a video while DSH opens, then dissolves over 0.3 seconds once it has played out. Ships with a default video so it… |
| [dsh-boot-animation](https://github.com/Kyenix/dsh-boot-animation) | `kyenix/dsh-boot-animation` | — | — | DSH（DeepSeek Harness）开机动画插件：短片按顺序铺满播完再淡入界面，一键安装、素材可替换、不改 DSH 本体源码。基于 lxj5820 的作品二次修改（MIT）。 |
| [dsh-startup-animation](https://github.com/KylinQ01/dsh-startup-animation) | `kylinq01/dsh-startup-animation` | — | — | Startup splash for DeepSeek Harness: an animated avatar with aurora, stardust, pointer parallax and a module-assembly… |
| [dsh-mo-startup-screen](https://github.com/lightbryond/dsh-mo-startup-screen) | `lightbryond/dsh-mo-startup-screen` | — | — | A Mental Omega–themed boot animation plugin for DeepSeek Harness (DSH) Web Client. Four factions, four independently… |
| [dsh-boot-animation-probe](https://github.com/liushuchang-2012/dsh-boot-animation-probe) | `liushuchang-2012/dsh-boot-animation-probe` | — | — | probe repo for git push channel verification |
| [dsh-boot-splash](https://github.com/liushuchang-2012/dsh-boot-splash) | `liushuchang-2012/dsh-boot-splash` | — | — | Boot film for the web UI: a blue whale floods black from below as the page loads, then glides left and pulls the \|… |
| [dsh-boot-animation](https://github.com/lxj5820/dsh-boot-animation) | `lxj5820/dsh-boot-animation` | — | — | Replaces the kernel boot page with a full-window video clip that dissolves into the app; the clip pool, enter mode and… |
| [dsh-boot-animation](https://github.com/mu915275-cmd/dsh-boot-animation) | `mu915275-cmd/dsh-boot-animation` | — | — | Plays an intro full-frame on a new conversation, or every time you open the one you pinned. Four clips ship inside the… |
| [dsh-boot-animation-adapted](https://github.com/myconstance1999-pixel/dsh-boot-animation-adapted) | `myconstance1999-pixel/dsh-boot-animation-adapted` | — | — | Third-party MIT boot-animation adaptation for DeepSeek Harness Desktop rc.2, with upstream attribution and original… |
| [dsh-boot-animation](https://github.com/NativeDog1/dsh-boot-animation) | `nativedog1/dsh-boot-animation` | — | — | Plays an intro full-frame on a new conversation, or every time you open the one you pinned. Four clips ship inside the… |
| [dsh-splash-gojo](https://github.com/oumaekumiko0821/dsh-splash-gojo) | `oumaekumiko0821/dsh-splash-gojo` | — | — | Full-screen boot animation for the DSH web client: the boot HTML paints a cover-fit artwork on its first frame, adds a… |
| [dsh-boot-animation](https://github.com/Sprout-0/dsh-boot-animation) | `sprout-0/dsh-boot-animation` | — | — | DeepSeek Harness (DSH) ????????:???????????????,??????????A full-frame boot animation for DSH. |
| [DSH-desktop-boot-animation](https://github.com/TapKeen/DSH-desktop-boot-animation) | `tapkeen/dsh-desktop-boot-animation` | — | — | 8 秒开机动画 + 开机音，作为 DSH Desktop / DSH Web 的 Cordis 客户端插件。不依赖打包器，不依赖 React。 |
| [dsh-boot-animation](https://github.com/tito0824/dsh-boot-animation) | `tito0824/dsh-boot-animation` | — | — | DSH plugin: replaces the kernel boot page with a full-window video clip, then dissolves into the app. |
| [dsh-bootstrap](https://github.com/why-sir/dsh-bootstrap) | `why-sir/dsh-bootstrap` | — | — | DSH 新人引导插件：按八个领域推荐插件（GitHub Star 与 npm 近月下载加权排序），先出计划再一键安装，并可导出／导入记录 profile 插件清单、精确版本与启用状态的环境码。 |
| [dsh-boot-video](https://github.com/xufu5438-netizen/dsh-boot-video) | `dsh-boot-video` | — | MIT | Full-screen video boot splash — play an mp4 at startup, skip with a click, import your own clip, and non-playable… |
| [dsh-erii-boot-splash](https://github.com/yanglingrise/dsh-erii-boot-splash) | `yanglingrise/dsh-erii-boot-splash` | — | — | Erii (Sakura) themed boot splash animation — falling sakura petals, a mint monster mascot with a blossom on its head… |
| [dsh-550c-boot](https://github.com/yannicksong0106/dsh-550c-boot) | `dsh-550c-boot` | — | MIT | Full-screen 550C boot intro for DSH: a 4-second simple cut and a 16-second rewrite sequence, skippable by click or Esc… |
| [dsh-boot-animation](https://github.com/YunSu052/dsh-boot-animation) | `yunsu052/dsh-boot-animation` | — | — | DSH的启动动画仓库，单击全屏，双击放大，内部包含mkv转mp4文件 |
| [dsh-boot-animation-2k60-hdr-rework-screenshots-for-issue-17-20261016](https://github.com/zlysd55/dsh-boot-animation-2k60-hdr-rework-screenshots-for-issue-17-20261016) | `zlysd55/dsh-boot-animation-2k60-hdr-rework-screenshots-for-issue-17-20261016` | — | — | Screenshots showing how the DSH boot animation (720p24) was reworked to 2560x1440@60 HDR: SVFI Waft frame-interpolation… |
| [dsh-startup-intro](https://github.com/zoe1nan/dsh-startup-intro) | `zoe1nan/dsh-startup-intro` | — | — | Startup video intro with per-clip playback parameters (segment, speed, brightness, fit, blurred cinema fill, hold ratio… |

## 字体

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-font](https://github.com/klarkxy/dsh-plugins) | `@klarkxy/dsh-font` | 433 | SEE LICENSE IN LICENSE | Font: customize the interface font, code font, and conversation font size of the DeepSeek Harness Web GUI. |
| [dsh-font](https://github.com/citisen/dsh-font) | `@citisen/dsh-font` | 40 | MIT | DeepSeek Harness plugin: customize the Web GUI fonts (interface family, code family, and two font-size axes) from… |
| [dsh-font](https://github.com/nakus0426/dsh-font) | `@nakus0426/dsh-font` | 15 | — | 为 DSH Web 客户端增加「字体」设置页的本地插件。从系统实际安装的字体里选择界面字体与代码字体，选中后立即生效，并持久化到 DSH 的 settings 文档。 |
| [dsh-font-probe](https://github.com/lohana20061023-29/dsh-font-probe) | `lohana20061023-29/dsh-font-probe` | — | — | DSH 字体插件：中英文字体分设、正文字号与代码字号、字距/行距/段距/首行缩进四根滑块，吸底总预览 + 确认制，配置写回 profile，不动 app.asar。 |
| [dsh-font](https://github.com/WangPaoPaoLab/dsh-font) | `wangpaopaolab/dsh-font` | — | — | Font switcher for DeepSeek Harness Web GUI: 99 UI fonts + 31 code fonts with CJK-Latin pairing, instant apply… |
| [dsh-whale-font](https://github.com/kxSenlin/dsh-whale-font) | `kxsenlin/dsh-whale-font` | — | — | 把 DeepSeek Harness 对话里的主语人称「我/你/I/me」渲染成 DeepSeek 蓝鲸图标（DSH 插件） |
| [dsh-ui-font](https://github.com/linshufan21/dsh-ui-font) | `linshufan21/dsh-ui-font` | — | — | DSH 字体插件：界面字体/代码字体/显示比例/行高/字体浏览器 \| DSH font plugin: UI/code fonts, display scale, line-height, font browser with CJK… |
| [dsh-sidebar-plus](https://github.com/sailoumili/dsh-sidebar-plus) | `sailoumili/dsh-sidebar-plus` | — | — | 基于 DSH 官方侧边栏的文件视图增强插件，提供源码视图、原位编辑、行号显示、搜索和字体缩放功能。 A file-view enhancement plugin that extends the official DSH sidebar… |
| [dsh-typography](https://github.com/Gan332/dsh-typography) | `gan332/dsh-typography` | — | — | Typography plugin for DeepSeek Harness - independent interface & code fonts, online presets, zero-conversion local font… |
| [dsh-terminal-font](https://github.com/HTROY/dsh-terminal-font) | `htroy/dsh-terminal-font` | — | — | DeepSeek Harness 插件：在设置中为侧边栏终端选择字体与字号，修正 oh-my-posh / Powerline / Nerd Font 图标显示为方块的问题。 |
| [HwFee-dsh](https://github.com/HwFee/HwFee-dsh) | `hwfee/hwfee-dsh` | — | — | DeepSeek Harness plugins: a Claude Design System theme, system fonts, and a usage panel. Design language derived from… |
| [dsh-snapcompact](https://github.com/JessenReinhart/dsh-snapcompact) | `jessenreinhart/dsh-snapcompact` | — | — | Bitmap-frame context compression plugin for DeepSeek Harness (DSH): deterministic pixel-font visual archiving of… |
| [dsh-font-tweaks](https://github.com/jryxxx/dsh-font-tweaks) | `jryxxx/dsh-font-tweaks` | — | — |  |
| [dsh-desktop-acrylic](https://github.com/LeoLee0097/dsh-desktop-acrylic) | `leolee0097/dsh-desktop-acrylic` | — | — | Tokyo Night 暗色 / 亮色主题 for DeepSeek Harness (DSH) 桌面端 —— 注册进主题运行时的真实皮肤，含亚克力磨砂面板、材质模糊与等宽字体选择器。Tokyo Night dark & light… |
| [dsh-font-adjust](https://github.com/SHW-bit/dsh-font-adjust) | `shw-bit/dsh-font-adjust` | — | — | DSH 字体调整插件：字号、字体、字重、行高、文字颜色，实时预览、保存、恢复默认。 |
| [dsh-font-size](https://github.com/Tikzen/dsh-font-size) | `tikzen/dsh-font-size` | — | — | Adjust native DSH font sizes from General settings |
| [dsh-custom-font](https://github.com/Vergil-long/dsh-custom-font) | `vergil-long/dsh-custom-font` | — | — | DSH自定义界面字体插件 |
| [dsh-output-setting](https://github.com/yijiezhong/dsh-output-setting) | `yijiezhong/dsh-output-setting` | — | — | DSH output settings plugin: auto-expand reasoning/tool nodes, code block font size & line height, model output language… |
| [dsh-ui-beautify](https://github.com/zhang-guo-wen/dsh-ui-beautify) | `zhang-guo-wen/dsh-ui-beautify` | — | — | Page beautification for DeepSeek Harness: ship open-source CJK webfonts and let the Web GUI pick its body font |
| [dsh-font-settings](https://github.com/igaozp/dsh-font-settings) | `@igaozp/dsh-font-settings` | — | — | 为 DeepSeek Harness 添加字体设置 |
| [dsh-font-master](https://github.com/AnAcretiondisk9986/dsh-font-master) | `anacretiondisk9986/dsh-font-master` | — | — | DeepSeek Harness 字体插件：中西文分别指定，界面 / 内容 / 代码三处独立 · Set the CJK and Latin families separately, and the interface, content… |
| [dsh-client-ui-font-scale](https://github.com/AprilCrystal/dsh-client-ui-font-scale) | `aprilcrystal/dsh-client-ui-font-scale` | — | — | Conversation font-size controls for the Web UI: a stepper in the composer row, keyboard shortcuts, and Ctrl+wheel zoom… |
| [dsh-font-settings](https://github.com/BakaCirno233/dsh-font-settings) | `bakacirno233/dsh-font-settings` | — | — | DSH font settings plugin for DeepSeek Harness Desktop |
| [dsh-font](https://github.com/caparisen/dsh-font) | `caparisen/dsh-font` | — | — | DeepSeek Harness plugin: customize the Web GUI fonts (interface font, code font, and font sizes) from Settings |
| [dsh-font-size](https://github.com/chengoak/dsh-font-size) | `chengoak/dsh-font-size` | — | — | DSH Web GUI plugin: 'Conversation font size' slider (12-22 px) in Settings → General. |
| [dsh-font-customizer](https://github.com/daha1216/dsh-font-customizer) | `daha1216/dsh-font-customizer` | — | — | DeepSeek Harness 字体定制插件：自定义界面/代码字体与正文字号，支持本机字体扫描与持久化 |
| [dsh-font-plugin](https://github.com/wtksana/dsh-font-plugin) | `dsh-font-plugin` | — | MIT | DSH dual-face plugin: font family and ligature controls for the Web UI. Host half registers a settings namespace… |
| dsh-font-ruanio | `dsh-font-ruanio` | — | BSD-3-Clause | 自定义字体生成器（DSH 插件）：上传字体 → 生成字体插件包（@local/dsh-custom-font）→ 注入 @font-face 并重映射 --dsw-font-family（全局生效，热载无需重启）。无外部运行时依赖。 |
| [dsh-ui-font](https://github.com/yuu1111/dsh-ui-font) | `dsh-ui-font` | — | MIT | DeepSeek Harness Web GUI plugin: set the UI and code font families from Settings → General (--dsw-font-family… |
| [dsh-font](https://github.com/enforcer-a06/dsh-font) | `enforcer-a06/dsh-font` | — | — |  |
| [dsh-global-font](https://github.com/ErrorLst/dsh-global-font) | `errorlst/dsh-global-font` | — | — | DSH plugin: global font picker in Settings (UI/code fonts, applies to plugin UI too). Pure cordis plugin, dsh plugin… |
| [dsh-peak-timer](https://github.com/Ether0516/dsh-peak-timer) | `ether0516/dsh-peak-timer` | — | — | Custom themes, colors, and fonts for DeepSeek Harness Desktop. |
| [dsh-font-settings](https://github.com/fuzz1og/dsh-font-settings) | `fuzz1og/dsh-font-settings` | — | — |  |
| [dsh-jp-font](https://github.com/InterfaceX-co-jp/dsh-jp-font) | `interfacex-co-jp/dsh-jp-font` | — | — | DeepSeek Harnessの日本語優先fontプラグイン |
| [dsh-font](https://github.com/io-oss/dsh-font) | `io-oss/dsh-font` | — | — |  |
| [dsh-anthropic-fonts](https://github.com/Isilsolme/dsh-anthropic-fonts) | `isilsolme/dsh-anthropic-fonts` | — | — | Anthropic Sans/Serif/Mono 字体：界面 Sans、对话 Serif、代码 Mono，中文回退思源字体。 |
| [dsh-custom-fonts](https://github.com/it-glen/dsh-custom-fonts) | `it-glen/dsh-custom-fonts` | — | — | Fonts and code-font settings for the UI with an English-only glyph scale (100-160%), a -4..+8 px content-size offset… |
| [dsh-awesome-fonts](https://github.com/kankezhiyan/dsh-awesome-fonts) | `kankezhiyan/dsh-awesome-fonts` | — | — | Font switcher for DeepSeek Harness Web GUI: 99 UI fonts + 31 code fonts with CJK-Latin pairing. |
| [dsh-system-fonts](https://github.com/kira4094/dsh-system-fonts) | `kira4094/dsh-system-fonts` | — | — |  |
| [dsh-font-manager](https://github.com/Leafmy/dsh-font-manager) | `leafmy/dsh-font-manager` | — | — | DeepSeek Harness (DSH) plugin: pick UI/code/terminal fonts visually - enumerate installed fonts, edit fallback stacks… |
| [dsh-font-enhancer](https://github.com/loyalchiiina/dsh-font-enhancer) | `dsh-font-enhancer` | — | MIT | DIY your DSH UI fonts and colors: per-region styling, unified overrides, theme save and switch, random font and color. |
| [dsh-custom-fonts](https://github.com/lsh2002/dsh-custom-fonts) | `lsh2002/dsh-custom-fonts` | — | — | Customize the UI's Chinese and English fonts, code font, and global font-size offset on a settings page, with a live… |
| [dsh-fonttune](https://github.com/LyaxZ/dsh-fonttune) | `dsh-fonttune` | — | MIT | A font plugin for the DeepSeek Harness Web GUI: the conversation gets its own font, size, line height, weight… |
| [dsh-font-overrides](https://github.com/motchii709/dsh-font-overrides) | `motchii709/dsh-font-overrides` | — | — | Change the DeepSeek Harness web UI font by Google Fonts family name — minimal standard DSH client plugin. |
| [dsh-custom-font](https://github.com/Nameless-Face/dsh-custom-font) | `nameless-face/dsh-custom-font` | — | — |  |
| [dsh-font-picker](https://github.com/onmokoworks/dsh-font-picker) | `onmokoworks/dsh-font-picker` | — | — | Windows font picker for DeepSeek Harness |
| [Dsh-font-JP](https://github.com/otetcham/Dsh-font-JP) | `otetcham/dsh-font-jp` | — | — |  |
| [dsh-free-font](https://github.com/qiuchangjie/dsh-free-font) | `qiuchangjie/dsh-free-font` | — | — | dsf 设置字体插件 |
| [dsh-plugin-ui-font-family](https://github.com/rhczz/dsh-plugin-ui-font-family) | `rhczz/dsh-plugin-ui-font-family` | — | — | 给 DeepSeek Harness 的 Web 界面换字体。 Change the font for the DeepSeek Harness web interface. |
| [dsh-font-settings](https://github.com/SatukiSuto-HPC/dsh-font-settings) | `satukisuto-hpc/dsh-font-settings` | — | — |  |
| [dsh-compact-chat-ui](https://github.com/secyborg/dsh-compact-chat-ui) | `secyborg/dsh-compact-chat-ui` | — | — | DSH web plugin: a settings card to tune chat reading density — font size, line height, and block spacing of the… |
| [dsh-fusion-pixel-font](https://github.com/TableRogue/dsh-fusion-pixel-font) | `tablerogue/dsh-fusion-pixel-font` | — | — | 用 Fusion Pixel 12px 像素字体替换 DeepSeek Harness GUI 界面与代码字体 |
| [dsh-custom-font](https://github.com/vanvanhasnophi/dsh-custom-font) | `vanvanhasnophi/dsh-custom-font` | — | — | A Deepseek Harness plug-in that enables font customization in dsh web/desktop. |
| [dsh-ui-font](https://github.com/warmwine/dsh-ui-font) | `warmwine/dsh-ui-font` | — | — | Font engine for the Web GUI: system font enumeration, global and per-component font-size tuning with a Spy++-style… |
| [dsh-local-font-picker](https://github.com/Wepoi9/dsh-local-font-picker) | `wepoi9/dsh-local-font-picker` | — | — | Community DSH plugin for selecting installed local UI and code fonts in the DeepSeek Harness Web UI. |
| [24-uib-typography-font-family-dshacham](https://github.com/wi-fighters/24-uib-typography-font-family-dshacham) | `wi-fighters/24-uib-typography-font-family-dshacham` | — | — | 24-uib-typography-font-family-dshacham created by GitHub Classroom |
| [25-uib-typography-font-sizing-dshacham](https://github.com/wi-fighters/25-uib-typography-font-sizing-dshacham) | `wi-fighters/25-uib-typography-font-sizing-dshacham` | — | — | 25-uib-typography-font-sizing-dshacham created by GitHub Classroom |
| [dsh-chat-tune](https://github.com/xingyingyuzhui/dsh-chat-tune) | `xingyingyuzhui/dsh-chat-tune` | — | — | DeepSeek Harness plugin: tune chat font, width, line height, and paragraph spacing |
| [dsh-font-settings](https://github.com/YiQiuAcc/dsh-font-settings) | `yiqiuacc/dsh-font-settings` | — | — | A DeepSeek Harness web plugin that replaces the font settings in general settings with searchable font pickers. |
| [dsh-darkplus-code](https://github.com/yis94744/dsh-darkplus-code) | `yis94744/dsh-darkplus-code` | — | — | VS Code Dark+ syntax colors and font-size control for DeepSeek Harness (dsh) code blocks |
| [dsh-plugin-font-switcher](https://github.com/Yoimiya-Lover-0621-01/dsh-plugin-font-switcher) | `yoimiya-lover-0621-01/dsh-plugin-font-switcher` | — | — | Chinese/Latin font switcher plugin for DeepSeek Harness: separate Chinese and Latin font rows with system lists and… |
| [dsh-locale-ja](https://github.com/yuuturn/dsh-locale-ja) | `yuuturn/dsh-locale-ja` | — | — | Japanese (ja) UI locale and font pack for the DSH (DeepSeek Harness) web GUI — for the desktop app and dsh web profiles |
| [dsh-pdf-formula](https://github.com/zhangzhichen18/dsh-pdf-formula) | `zhangzhichen18/dsh-pdf-formula` | — | — | PDF formula reader for DeepSeek Harness — decodes subset-font math glyphs into LaTeX |
| [dsh-chat-typography](https://github.com/zheshiyigehenchang/dsh-chat-typography) | `zheshiyigehenchang/dsh-chat-typography` | — | — | Set the DSH Harness conversation flow's font, font size and line spacing, plus the padding between the conversation… |

## 图标 / 光标 / 头像

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | `dsh-emoji` | 406 | MIT | Tiny semantic inline emoji for DSH Agent responses |
| [dsh-ui-settings-icons](https://github.com/suntianc/dsh-ui-settings-icons) | `dsh-ui-settings-icons` | 273 | MIT | Adds custom icons to the DSH Settings sidebar and exposes a keyed `settings.section.icon` slot for third-party settings… |
| [smooth-cursor](https://github.com/Lacquervii/smooth-cursor) | `dsh-smooth-cursor` | 249 | MIT | Smooth comet-mode animated caret for the DSH Web composer: a glowing comet trail replaces the native blinking caret and… |
| [dsh-cursor-acp](https://github.com/loeanxi/dsh-cursor-acp) | `dsh-cursor-acp` | 152 | MIT | 将独立任务交给同机已登录的 Cursor 命令行，并提供命令行就绪/代理诊断、子模型设置和只读连通性测试。 |
| [dsh-realtimeavatar](https://github.com/theinfluencecompany/dsh-realtimeavatar) | `dsh-realtimeavatar` | 104 | MIT | Realtime Avatar (realtimeavatar.ai) for the DeepSeek Harness: the developer's API key held by the harness, the public… |
| [dsh-cursor-theme](https://github.com/auki-zy/dsh-cursor-theme) | `dsh-cursor-theme` | 65 | MIT | Customize the PC mouse cursor for every UI state inside DeepSeek Harness. 在 DSH 里自定义鼠标各种状态的图案。 |
| [dsh-avatar](https://github.com/zoyluoblue/deepseek-harness-avatar) | `@zoytown/dsh-avatar` | 18 | MIT | DeepSeek Harness (dsh) plugin for wallpaper theming — upload images from the Settings page, pick one, and the whole dsh… |
| dsh-agent-avatar | `dsh-agent-avatar` | 16 | MIT | Put your own image where the DSH Web GUI's sidebar brand mark goes (client half, sidebar.brand.mark) and override the… |
| [dsh-cursor-mcp](https://github.com/lnuxe/dsh-cursor) | `dsh-cursor-mcp` | 16 | MIT | Cursor MCP servers (from ~/.cursor/mcp.json) re-packaged as DeepSeek Harness mcp-client rows (8 servers; HTTP secrets… |
| [dsh-cursor](https://github.com/cagase/dsh-cursor) | `@cagase/dsh-cursor` | 7 | MIT | DeepSeek Harness plugin: use a Cursor workspace (skills, rules, hooks, MCP) and the Cursor agent CLI as picker +… |
| [pojia-next](https://github.com/z91772524-ai/pojia-next) | `z91772524-ai/pojia-next` | — | — | 一个脚本搞定 DSH / WorkBuddy / ZCode / Codex / Cursor / Claude 六客户端的提示词与人格替换：零依赖、双击即用、可自证、改前备份、一键还原。另附【免装 Python 的单文件… |
| [SpecFusion](https://github.com/wxkingstar/SpecFusion) | `wxkingstar/specfusion` | — | — | 在 DeepSeek Harness / Claude Code / Cursor / Codex / Gemini CLI 里直接搜索 20 个中国开放平台的 65,600+ 篇 API 文档；零配置，支持 Skill 与 DSH… |
| [deepseek-visionary](https://github.com/xlight/deepseek-visionary) | `xlight/deepseek-visionary` | — | — | 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop） |
| [dsh-resume](https://github.com/aa2246740/dsh-resume) | `@aa2246740/dsh-resume` | — | Apache-2.0 | Continue Codex, Claude Code, and Cursor work in DeepSeek Harness |
| [nightme](https://github.com/cnlangzi/nightme) | `cnlangzi/nightme` | — | — | Run your local coding agents(claude,codex,cursor,pi,opencode,dsh...). Walk away. Control them from your phone. |
| [dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | `jesse-njx/dsh-skillport` | — | — | Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery… |
| [SpecWave](https://github.com/Cyning12/SpecWave) | `spec-wave` | — | MIT | SpecWave — multi-host coding CLI + P0 gates/Harness (Cursor/Claude/DSH). Formerly SpecGate / dsh-coding-kit. npx… |
| [Sidor_UI](https://github.com/AKI2253/Sidor_UI) | `aki2253/sidor_ui` | — | — | SIDOR starfield skin for DeepSeek Harness Web GUI: intro animation, starfield, balance badge, settings FX, low-balance… |
| [shengjia](https://github.com/dongliqianxian/shengjia) | `dongliqianxian/shengjia` | — | — | 47 ECU/TCU calibration skills for AI agents (Claude Code, Codex, Cursor, DSH): A2L/DAMOS/WinOLS, VE/MAF, torque model… |
| [dsh-better-sidebar-icons](https://github.com/eg-bole/dsh-better-sidebar-icons) | `eg-bole/dsh-better-sidebar-icons` | — | — | VSCode-style file/folder icon theme for the dsh-better-sidebar explorer and editor tabs (vscode-icons port) - DOM… |
| [deepseek-harness-vscode-sidebar](https://github.com/yushenghai1106/deepseek-harness-vscode-sidebar) | `yushenghai1106/deepseek-harness-vscode-sidebar` | — | — | DeepSeek Harness VSCode插件，按照Codex结合自身web页面设计，交互上多参考codex，页面排版参考codex、codebuddy、cursor。将 Harness 智能体体验以紧凑形式集成到 VS Code… |
| [dsh-cursor-codex](https://github.com/jeremy9682/dsh-cursor-codex) | `jeremy9682/dsh-cursor-codex` | — | — | Connect DeepSeek Harness (dsh) to Cursor and Codex: ACP agent bundle, MCP server, skills, and config templates |
| [dsh-external-plugin-devkit](https://github.com/aa2246740/dsh-external-plugin-devkit) | `aa2246740/dsh-external-plugin-devkit` | — | — | Out-of-process plugin devkit for DeepSeek Harness. CLI: dshx. For Cursor / Grok / Codex — not Creator Mode. |
| [dsh-load-agent-rules](https://github.com/acus9345/dsh-load-agent-rules) | `acus9345/dsh-load-agent-rules` | — | — | DeepSeek Harness plugin that loads the Cursor, Copilot, Windsurf and other AI rule files your repo already has. |
| [dsh-computer-use-ng](https://github.com/AndroidSix/dsh-computer-use-ng) | `androidsix/dsh-computer-use-ng` | — | — | Community-maintained dsh-computer-use: virtual-cursor Computer Use for DeepSeek Harness, compatible with DSH 0.2.1 |
| [dsh-subscriptions](https://github.com/daybreak33167-commits/dsh-subscriptions) | `daybreak33167-commits/dsh-subscriptions` | — | — | DeepSeek Harness plugin that drives Cursor models through the official SDK |
| [mcp-dsh-plugins](https://github.com/feely0208/mcp-dsh-plugins) | `feely0208/mcp-dsh-plugins` | — | — | 深鲸 DSH 插件市场 MCP 服务器：让 Claude / Cursor 等任意 MCP 客户端发现、检索和检查 50+ 个深鲸 DSH 插件 |
| [dsh-agent-session-import](https://github.com/howtomakeaname/dsh-agent-session-import) | `howtomakeaname/dsh-agent-session-import` | — | — | Import local sessions from Cursor, Codex, Claude Code, ZCode, Kimi into DeepSeek Harness. |
| [dsh-codex-bridge](https://github.com/Lavender3533/dsh-codex-bridge) | `lavender3533/dsh-codex-bridge` | — | — | DSH plugin / MCP server — let Codex, Claude Code, Cursor use DSH as an external resumable sub-agent |
| [dsh-session-drafts](https://github.com/ne-ilyxa/dsh-session-drafts) | `ne-ilyxa/dsh-session-drafts` | — | — | Cursor-style draft chats for DeepSeek Harness (DSH): New Session reuses the empty draft — and only mints a fresh one… |
| [dsh-selection-quote](https://github.com/xt765/dsh-selection-quote) | `xt765/dsh-selection-quote` | — | — | Cursor + GitHub PR Review style selection quote & comment plugin for DeepSeek Harness (Add to Chat ⌘L + Inline Comment… |
| [dsh-wsl-editor](https://github.com/173787247/dsh-wsl-editor) | `173787247/dsh-wsl-editor` | — | — | Open a WSL Linux path in Windows Cursor/VS Code/Notepad. |
| [dockyard-dsh](https://github.com/4sa1ary9/dockyard-dsh) | `4sa1ary9/dockyard-dsh` | — | — | Windows fork of Dockyard DSH: composer provider picker for Codex / Grok / Claude / Cursor / Antigravity |
| [dsh-cursor-settings](https://github.com/Argonaut790/dsh-cursor-settings) | `argonaut790/dsh-cursor-settings` | — | — | DSH web plugin: Cursor-like Settings pages (AGENTS.md Rules, Skills, MCP servers, import) plus a pinned 'latest input'… |
| [dsh-bafx](https://github.com/AzusaKe/dsh-bafx) | `azusake/dsh-bafx` | — | — | DSH 蔚蓝档案鼠标点击特效与光标拖尾插件 · 竖排侧栏入口 + 弹窗设置 · Blue Archive click effect and cursor trail for DeepSeek Harness |
| [agent-session-sync](https://github.com/Chendestiny/agent-session-sync) | `chendestiny/agent-session-sync` | — | — | 跨 Agent 会话同步工具包：codex/claude/dsh/opencode/cursor 等 19 家 AI agent 会话归一导入 dsh 续聊，反向写入 12 家；C 规范库中转、幂等增量防环、人在回路三道确认，附… |
| [dsh-import](https://github.com/cms19859230182-lang/dsh-import) | `cms19859230182-lang/dsh-import` | — | — | Import MCP / rules / hooks from Claude Code, Codex & Cursor into DeepSeek Harness — the /import DSH was missing. |
| [dsh-mcp-installer](https://github.com/EquityQ/dsh-mcp-installer) | `equityq/dsh-mcp-installer` | — | — | 告别繁琐的手动配置！本插件支持从 Claude Desktop、Cursor、VS Code、YAML 或网页中直接导入 MCP 配置。在写入前，它会自动帮你进行安全审查和风险提示，只需点一下确认，就能把第三方工具无缝接入… |
| [web-ide](https://github.com/goatbroai/web-ide) | `goatbroai/web-ide` | — | — | DeepSeek Harness web 的 Cursor 风格三栏工作台。用文件树、多标签编辑器与原生 DSH conversation UI 替换默认 web shell。 |
| [oh-my-agents-above-all](https://github.com/gulagala001/oh-my-agents-above-all) | `gulagala001/oh-my-agents-above-all` | — | — | DSH 深度代理预设：Codex、Grok Build、Cursor、Pi、ZCode，主题与可选 OMD 增强 |
| [dsh-open-in-ide](https://github.com/harrithy/dsh-open-in-ide) | `harrithy/dsh-open-in-ide` | — | — | Open file references from DeepSeek Harness chat in VS Code, Cursor, Windsurf or a JetBrains IDE — at the right line, in… |
| [project-rsi](https://github.com/jdbsh-AI/project-rsi) | `jdbsh-ai/project-rsi` | — | — | Approval-gated project improvement skills for Codex, Claude Code, Gemini CLI, Cursor, Copilot, OpenCode, DSH and… |
| [dsh-plugins](https://github.com/lnuxe/dsh-plugins) | `lnuxe/dsh-plugins` | — | — | Reverse-engineered Cursor system prompts, skills, and MCP servers repackaged as DeepSeek Harness plugins |
| [dsh-inherit](https://github.com/MayBeTheWorld/dsh-inherit) | `maybetheworld/dsh-inherit` | — | — | Import MCP servers & Skills from Claude Code / Cursor / Codex / cc-switch into DeepSeek Harness (Settings → General →… |
| [dsh-oauthpro](https://github.com/meyaomiao/dsh-oauthpro) | `meyaomiao/dsh-oauthpro` | — | — | dsh-oauthpro — provider account pool & quota plugin for DeepSeek Harness (Codex/Claude/Cursor/Grok/Antigravity/GLM)… |
| [dsh-llm-cursor](https://github.com/NOirBRight/dsh-llm-cursor) | `noirbright/dsh-llm-cursor` | — | — | Cursor subscription login and chat for DeepSeek Harness |
| [chaoxing-chapter-test-solve](https://github.com/pigkingouo/chaoxing-chapter-test-solve) | `pigkingouo/chaoxing-chapter-test-solve` | — | — | 学习通章末测试自动答题skill，适配 WorkBuddy/TRAE（内置浏览器直跑）、Claude Code、Cursor、Codex、OpenCode/DSH（走 playwright-solver）、任意 Playwright… |
| [dsh-plugin-debug-mode](https://github.com/rh666666/dsh-plugin-debug-mode) | `rh666666/dsh-plugin-debug-mode` | — | — | 完全由 DSH 写的 DSH 插件，用于复刻 Cursor 中的 Debug 模式。 |
| [dsh-review-panel](https://github.com/sadgsk/dsh-review-panel) | `sadgsk/dsh-review-panel` | — | — | Cursor 式只读代码审查插件：在 DeepSeek Harness 右侧栏查看完整源码 + 行级内联 diff，含文件树、编辑器标签页与 VS Code 快捷键。Cursor-style code review panel for… |
| [dsh-git-chain](https://github.com/ShinonomeAya/dsh-git-chain) | `shinonomeaya/dsh-git-chain` | — | — | DeepSeek Harness plugin: Cursor-style Git commit-chain graph with SVG lanes, commit details, diff, filtering, and… |
| [dsh-code-ui](https://github.com/sogoodayo/dsh-code-ui) | `sogoodayo/dsh-code-ui` | — | — | Cursor 风格的 AI 代码编辑器工作台插件（DSH）：文件树、多标签页编辑、引用/备注/翻译、内嵌 AI 输入框、语法高亮 |
| [feyagate](https://github.com/toddpan/feyagate) | `toddpan/feyagate` | — | — | 让 AI 助手直接控制你家里的智能设备：米家（小米）、涂鸦、美的、易微联（Sonoff）、华为智慧生活。支持 Claude Code、Cursor、Codex CLI、Windsurf、Gemini CLI、DeepSeek… |
| [dsh-skill-station](https://github.com/WilShi/dsh-skill-station) | `wilshi/dsh-skill-station` | — | — | Skill station for DeepSeek Harness: scan Claude/Codex/Cursor/Gemini skill libraries, one-click import, global/project… |
| [dsh-icon-custom](https://github.com/cowwo/dsh-icon-custom) | `@cowwo/dsh-icon-custom` | — | MIT | 自定义浏览器标签页图标:在设置页上传 SVG/PNG/ICO,立即生效并持久保存,自动适配安卓/iOS/平板 PWA 图标,显示未读红点与进行中黄点(工作区数字/会话行/左上角/标签页,数字可点开清单、点条目定位到侧栏),并可把未读数显示为… |
| [dsh-orca-agents](https://github.com/aa2246740/dsh-orca-agents) | `aa2246740/dsh-orca-agents` | — | — | DSH plugin: dispatch Grok/Codex/Claude/Cursor/Antigravity into local Orca. |
| [dsh-brand](https://github.com/advance-lion/dsh-brand) | `advance-lion/dsh-brand` | — | — | One-click brand replacement for the DSH web GUI — logo, product name, version badge, hero headline, tab title and… |
| [dsh-plugin-offpeak-badge](https://github.com/AK-blank/dsh-plugin-offpeak-badge) | `ak-blank/dsh-plugin-offpeak-badge` | — | — | Shows whether the DeepSeek API is currently billing at the off-peak or peak rate in the sidebar brand row, with the… |
| [dsh-cursor-sessions](https://github.com/Allenbyz/dsh-cursor-sessions) | `allenbyz/dsh-cursor-sessions` | — | — | Cursor-style session management for DeepSeek Harness: draft chats with live preview titles, empty-draft reuse… |
| [dsh-custom-brand](https://github.com/baisama-cloud/dsh-custom-brand) | `baisama-cloud/dsh-custom-brand` | — | — | Customizable brand area for the Web UI: replace the whale logo and DeepSeek wordmark with local images, and edit the… |
| [dsh-favicon-status](https://github.com/bf185003/dsh-favicon-status) | `bf185003/dsh-favicon-status` | — | — | Browser tab status indicator for dsh web: paints the document favicon from the session list (blue spinning while work… |
| [dsh-cursor-router](https://github.com/cn2005/dsh-cursor-router) | `cn2005/dsh-cursor-router` | — | — |  |
| [dsh-billing-badge](https://github.com/devacc8/dsh-billing-badge) | `devacc8/dsh-billing-badge` | — | — | 在输入框统计行里、缓存命中读数之后显示高峰/非高峰计费时段：状态圆点与切换倒计时，点击展开面板显示按接口返回货币表示的余额，并拆分为总额、赠送与充值。 |
| [dsh-cursor-dev](https://github.com/dclef/dsh-cursor-dev) | `dsh-cursor-dev` | — | MIT | 把 Cursor CLI 当作子编码智能体来写业务代码：cursor_code 与 cursor_subagent 都提供可从面板点开的实时子对话，原生任务保留宿主的 External 运行记录；可按任务选模型、会话在 DSH… |
| [dsh-cursor-subscription](https://github.com/orrinzeng/dsh-cursor-subscription) | `dsh-cursor-subscription` | — | MIT | Cursor subscription for DeepSeek Harness with browser login, token refresh, model discovery, and the Cursor Agent chat… |
| dsh-emoji-wallet | `dsh-emoji-wallet` | — | MIT | DeepSeek balance wallet button for DSH: one click shows your API balance. · DSH 余额小钱包：点一下就看见本猫的小钱包 |
| [dsh-icon-theme](https://github.com/yzke/dsh-icon-theme) | `dsh-icon-theme` | — | MIT | Auto-detected, user-customizable icons for DeepSeek Harness settings and sidebar surfaces. |
| [dsh-session-sticker-board](https://github.com/linmu115/dsh-session-sticker-board) | `dsh-session-sticker-board` | — | MIT | Persistent ordinary stickers and note associations through the shared DSH Obsidian Bridge |
| [dsh-subagent-cursor](https://github.com/ninjasln-labs/dsh-subagent-cursor) | `dsh-subagent-cursor` | — | MIT | Cursor-as-subagent provider for DeepSeek Harness: one-shot local runs via @cursor/sdk, summary-first result… |
| [dsh-session-icons](https://github.com/fengb3/dsh-session-icons) | `dsh-session-icons` | — | MIT | Sidebar session-title icons: an auxiliary model call on the same route as title generation draws a 24x24 monochrome SVG… |
| [dsh-icon-changer](https://github.com/flycucu/dsh-icon-changer) | `flycucu/dsh-icon-changer` | — | — | Replaces the DeepSeek Harness desktop app icon (exe, tray and Start Menu) with any uploaded .ico, and restores the… |
| [dsh-quota](https://github.com/Francesco502/dsh-quota) | `@francescoli/dsh-quota` | — | Apache-2.0 | AI Quota and Token Usage Monitor for DeepSeek Harness (Codex, Cursor, Antigravity, OpenCode-Go) |
| [dsh-connect-cursor](https://github.com/greatyao/dsh-connect-cursor) | `greatyao/dsh-connect-cursor` | — | — | 把本机已登录的 Cursor 模型接入 DeepSeek Harness：原生 LlmAdapter 直连 agent.v1.AgentService/Run 双向流 |
| [dsh-icon-console](https://github.com/H1Kariiiiiii/dsh-icon-console) | `h1kariiiiiii/dsh-icon-console` | — | — | Icon console for the DSH desktop app: import one icon and apply it to the desktop and Start Menu shortcuts… |
| [dsh-whale-brand](https://github.com/hiJoeLee/dsh-whale-brand) | `hijoelee/dsh-whale-brand` | — | — | Puts your own animated vector logo over the DSH brand mark in the sidebar and beside the start-page headline, taking… |
| [dsh-model-provider-badge](https://github.com/huihuangdi/dsh-model-provider-badge) | `huihuangdi/dsh-model-provider-badge` | — | — | Shows the provider behind a session's current model as a compact badge in the DSH Web composer tool row, left of the… |
| [dsh-for-cursor](https://github.com/Jillson1/dsh-for-cursor) | `jillson1/dsh-for-cursor` | — | — |  |
| [dsh-workspace-git-badge](https://github.com/Kevin-McIsaac/dsh-workspace-git-badge) | `kevin-mcisaac/dsh-workspace-git-badge` | — | — | DSH 的 Git 状态徽章：侧边栏工作区行徽章与输入行徽章，显示当前会话工作区的 git 状态，通过 SSE 事件驱动保持实时。 |
| [dsh-pstack](https://github.com/l246804/dsh-pstack) | `l246804/dsh-pstack` | — | — | pstack for DeepSeek Harness: rigorous agent workflows ported from cursor/plugins. |
| [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) | `luaphes/dsh-web-attention-badge` | — | — | Attention reminders: frame badge, tab-title count, and a status-colored whale favicon for sessions waiting for input or… |
| [dsh-tool-emoji](https://github.com/LWLAymh/dsh-tool-emoji) | `lwlaymh/dsh-tool-emoji` | — | — | Replace tool-card leading icons with emoji while preserving the original cards. |
| [dsh-plugin-brand-custom](https://github.com/lzpway-jpg/dsh-plugin-brand-custom) | `lzpway-jpg/dsh-plugin-brand-custom` | — | — | Custom brand icon and name for the DSH Web sidebar and conversation hero, editable live from a settings card on the… |
| [dsh-version-badge](https://github.com/mervin1944/dsh-version-badge) | `mervin1944/dsh-version-badge` | — | — | Version badge above the sidebar settings button: shows the current dsh version, expands to list every core package… |
| [dsh-cursor-passthrough](https://github.com/mingzhong15/dsh-cursor-passthrough) | `mingzhong15/dsh-cursor-passthrough` | — | — | Add a Cursor passthrough group to the DSH chat model picker. |
| [dsh-mzm-bot-cursor](https://github.com/mohzmadhoun/dsh-mzm-bot-cursor) | `mohzmadhoun/dsh-mzm-bot-cursor` | — | — |  |
| [dsh-loglens](https://github.com/Monicaxixi/dsh-loglens) | `monicaxixi/dsh-loglens` | — | — | DeepSeek Harness dsh-plugin for bounded, cursor-aware log inspection |
| [dsh-mcp-sync](https://github.com/nan1010082085/dsh-mcp-sync) | `nan1010082085/dsh-mcp-sync` | — | — | DSH plugin: sync MCP configs from Claude Code, Codex CLI, and Cursor Agent |
| [dsh-acp-cursor](https://github.com/NOirBRight/dsh-acp-cursor) | `noirbright/dsh-acp-cursor` | — | — | Official Cursor Agent ACP provider for DeepSeek Harness |
| [dsh-cursorlike-sidebar](https://github.com/Oxygen-Wang/dsh-cursorlike-sidebar) | `oxygen-wang/dsh-cursorlike-sidebar` | — | — | A Cursor-like sidebar for DeepSeek Harness with file browsing, code editing, Git diffs, terminal, side chat, and Ctrl+L… |
| [dsh-sidebar-session-provider-icon](https://github.com/prgrmrwy/dsh-sidebar-session-provider-icon) | `prgrmrwy/dsh-sidebar-session-provider-icon` | — | — | DeepSeek Harness plugin: show a provider + model icon in the sidebar for every session, updated live from the composer… |
| [dsh-brand-studio](https://github.com/qiweiii/dsh-brand-studio) | `qiweiii/dsh-brand-studio` | — | — | Custom branding for the shared DSH Web UI: a Settings → Branding panel for the name, badge, and local logo/wordmark… |
| [dsh-cursor-toolkit](https://github.com/qyjqio/dsh-cursor-toolkit) | `qyjqio/dsh-cursor-toolkit` | — | — | Cursor integration for DeepSeek Harness (DSH): cursor_agent tool, OpenAI-compatible cursor-agent bridge, and an LLM… |
| [dsh-chat-avatar](https://github.com/Rabbit-bot-No-002/dsh-chat-avatar) | `dsh-chat-avatar` | — | MIT | Adds an avatar to the left of each turn's final AI reply and to the right of each user message; upload your own image… |
| [dsh-sticker-board](https://github.com/sanqiPanax/dsh-sticker-board) | `sanqipanax/dsh-sticker-board` | — | — | Fridge-magnet quick-task stickers docked above the composer: one-click sends a preloaded prompt into the current… |
| [dsh-iconic-launcher](https://github.com/SkyblueeeLabs/dsh-iconic-launcher) | `skyblueeelabs/dsh-iconic-launcher` | — | — | Customize the DeepSeek Harness desktop shortcut icon: pick a preset or upload an image, auto-remove the white backdrop… |
| [dsh-cursor-agent](https://github.com/softmanmaker/dsh-cursor-agent) | `softmanmaker/dsh-cursor-agent` | — | — | Cursor Agent for DeepSeek Harness, adapted to DSH 0.2.1 (presets as bundle patch rows, tool-message model, settings… |
| [tdsh-emoji](https://github.com/tianjie52009/tdsh-emoji) | `tdsh-emoji` | — | MIT | Add widely-supported Unicode emoji to DeepSeek Harness (dsh) replies; prompt-injection plugin designed to coexist with… |
| [dsh-smooth-cursor-patched](https://github.com/ThinkofRain1213/dsh-smooth-cursor-patched) | `dsh-smooth-cursor-patched` | — | MIT | Comet-mode animated caret for the DSH Web composer: a glowing trail glides to the text position, with configurable… |
| [tokens_DshBrowserUse_code](https://github.com/TokensAPI/tokens_DshBrowserUse_code) | `tokensapi/tokens_dshbrowseruse_code` | — | — | TokensHarness browser-use plugin: Playwright MCP bridge with full toolset, visible cursor overlay, and configurable… |
| [dsh-peak-badge](https://github.com/tuoLuoSuan/dsh-peak-badge) | `tuoluosuan/dsh-peak-badge` | — | — | A chip at the left end of the composer tool row showing whether DeepSeek bills at peak or off-peak right now. Clicking… |
| [dsh-cursor](https://github.com/TwintailsTBM/dsh-cursor) | `twintailstbm/dsh-cursor` | — | — |  |
| [dsh-web-icon-indicator](https://github.com/waknow/dsh-web-icon-indicator) | `dsh-web-icon-indicator` | — | MIT | Browser tab favicon mirrors the DSH session state (idle / running / asking / done), recolored and animated from one… |
| [dsh-sidebar-icon-row](https://github.com/watershow666/dsh-sidebar-icon-row) | `watershow666/dsh-sidebar-icon-row` | — | — | Turns the DeepSeek Harness sidebar panel entries and footer entries into one row of icon-only squares with hover names… |
| [dsh-cursor-agent](https://github.com/wuyouchao/dsh-cursor-agent) | `wuyouchao/dsh-cursor-agent` | — | — | Cursor Agent SDK integration for DeepSeek Harness, with Cursor account authentication and native agent capabilities. |
| [dsh-tide-badge](https://github.com/xiangrikuibaize/dsh-tide-badge) | `xiangrikuibaize/dsh-tide-badge` | — | — | DSH 输入框下方的计费时段与余额药丸：常显账户余额与本次对话花费，并显示峰价/谷价档位与距下次切换的倒计时。峰谷判定含中国法定节假日与周末；本次对话花费按余额差值记账，采样点是插件自带的「对话停止满一分钟后刷新余额」。 |
| [dsh-whale-rod-cursor](https://github.com/xingheyewang-1/dsh-whale-rod-cursor) | `xingheyewang-1/dsh-whale-rod-cursor` | — | — | 🎣 鱼竿鲸鱼娘光标 —— DSH Web 的鱼竿光标：弹性绳吊着 Q 版鲸鱼娘，随鼠标甩飞/回弹，悬停变色，甩猛了尖叫，停下演「钓鱼佬又空军了」小剧场。A fishing-rod cursor companion for the DSH… |
| [dsh-cursor-agent](https://github.com/xytoki/dsh-cursor-agent) | `xytoki/dsh-cursor-agent` | — | — | 在DeepSeek Hareness中引入Cursor Hareness，获得和Cursor一致的速度与体验。非官方调用cursor api，可能引入账号风险，谨慎使用。 |
| [dsh-coros-badge](https://github.com/ZhangBo-cmd/dsh-coros-badge) | `zhangbo-cmd/dsh-coros-badge` | — | — | Shows the linked COROS watch model and cumulative activity days in the Web UI, expanding to a one-line review and… |
| [dsh-pricing-badge](https://github.com/ZhangBo-cmd/dsh-pricing-badge) | `zhangbo-cmd/dsh-pricing-badge` | — | — | Shows the DeepSeek API peak and off-peak hours, the current model's output price and the account balance in the Web UI. |

## 动效 / 粒子

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-whale-particles](https://github.com/fewoot/dsh-whale-particles) | `dsh-whale-particles` | 348 | MIT | Dot-matrix backdrop for the DSH Web UI: the dots form the DeepSeek whale or a transparent PNG you import… |
| [dsh-animations](https://github.com/kkutysllb/dsh-animations) | `dsh-animations` | 32 | MIT | DSH 原生动效技能包：8 个 HTML 动画技能（PPT 翻页演示 / 流程图 / 网络协议可视化 / 动态架构图 / 学霸笔记 / 卡片剧场 / 视频分镜 / 手机 UI 演示），激活即注册为 runtime skill，由… |
| [dsh-animation-optimization](https://github.com/kelemiao/dsh-animation-optimization) | `dsh-animation-optimization` | 17 | MIT | DSH 动画优化：输出流式动画与 Claude Code 风格外观插件 |
| [dsh-boo550wt-animation](https://github.com/456erddgr/dsh-boo550wt-animation) | `456erddgr/dsh-boo550wt-animation` | — | — | Plays a full-screen video while DeepSeek Harness starts and reveals the UI only after it ends. Esc skips it. |
| [dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle) | `aks1st/dsh-cyber-particle` | — | — | Particle-network background overlay for the DSH Web shell: full-screen, click-through, zero runtime dependencies. |
| [dsh-reduce-effects](https://github.com/azazo1/dsh-reduce-effects) | `azazo1/dsh-reduce-effects` | — | — | Adds a UI effects page to Settings that switches off DSH Web animations and transitions, loading and progress… |
| [dsh-whale-particles-bg](https://github.com/kviiinh/dsh-whale-particles-bg) | `kviiinh/dsh-whale-particles-bg` | — | — | 为 DSH Web 界面加的一层动态鲸鱼背景：由鲸鱼剪影采样出的粒子场，加上一层点阵网格，两者都是挂在 shell.overlay 上的全屏点击穿透… |
| [dsh-whale-animation](https://github.com/LeemanCheung/dsh-whale-animation) | `leemancheung/dsh-whale-animation` | — | — | A 60-frame theme-aware monochrome whale-dive animation with reactive water for the DSH Web turn status: embedded… |
| [dsh-read-animation](https://github.com/NeoHotaru/dsh-read-animation) | `neohotaru/dsh-read-animation` | — | — | 把 gif 和动图 webp 当作动画来读：贴进聊天框的照常播放，模型收到的是横跨整段采样、带帧号与时长的胶片条；工作区里的文件由 read_animation 按需采样。 |
| [dsh-all-usage](https://github.com/ParticleLight/dsh-all-usage) | `particlelight/dsh-all-usage` | — | — | 支持跨多个模型、供应商、工作区与时间范围进行统一分析，并可在全部保留历史中自定义起止日期；实时呈现缓存命中率，并可分别查看模型和供应商的分类数据；单日趋势按小时、跨日趋势按日，提供 53 周 GitHub… |
| [dsh-browser-plus](https://github.com/ParticleLight/dsh-browser-plus) | `dsh-browser-plus` | — | MIT | 面向 DSH 的可见 Electron 浏览器：共享一个 BrowserWindow，提供隔离任务视图、显式人机交接、快照引用与原生导航工具、操作轨迹、按需页面缩略图、可靠标签页切换与关闭的 keyed session… |

## 数据来源

- npm registry：`registry.npmjs.org` 搜索 + `/<pkg>/latest` 元数据 + `api.npmjs.org/downloads` 周下载量。采集脚本 [`research/fetch-decorations.mjs`](research/fetch-decorations.mjs)。
- 社区清单：[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)。只提取名称、链接与类别，描述为原文截断。解析脚本 [`research/parse-awesome.mjs`](research/parse-awesome.mjs)。
- 官方索引：[dsh-plugin-catalog](https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json)（3261 条，带官方分类与中英双语描述）。脚本 [`research/fetch-catalog.mjs`](research/fetch-catalog.mjs)。
- GitHub 搜索：`/search/repositories` 按 17 组关键词扫仓库名与描述，补上没发 npm、也没进任何清单的项目。脚本 [`research/fetch-github.mjs`](research/fetch-github.mjs)。
- 合并与去重：[`research/build-catalog.mjs`](research/build-catalog.mjs)，按 GitHub `owner/repo` 与 npm 包名两条键对齐。

分类由包名关键词判定，个别条目会归错——尤其 GitHub 搜索来的仓库，描述里带 "background"、"pet" 这类词就可能被拉进来。发现后提 issue 或直接 PR 改归类。
