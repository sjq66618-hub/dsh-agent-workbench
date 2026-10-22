# DSH 装饰插件合集

> 皮肤、主题、壁纸、桌面宠物、启动动画、字体图标——一份按类别整理好的索引。共 **467** 条。
>
> 数据：npm registry 实测（2355 个 DSH 相关包中筛出 637 个装饰候选）+ awesome-dsh-plugin 列表 1594 条中筛出 166 条装饰条目。
> 生成时间：2026-10-22。下载量为 npm 周下载，缺失记「—」。

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

- [皮肤 / 换肤包](#skin) · 97 条
- [主题 / 配色](#theme) · 139 条
- [壁纸 / 背景](#wallpaper) · 42 条
- [桌面宠物 / 吉祥物](#pet) · 100 条
- [启动动画 / 开场](#boot) · 25 条
- [字体](#font) · 15 条
- [图标 / 光标 / 头像](#icon) · 42 条
- [动效 / 粒子](#animation) · 7 条

## 先看这几个

每类按周下载量取前 5（只取在 npm 上有下载数据的），完整清单见下面各分类。

| 类别 | 名称 | 安装 | 周下载 | 一句话 |
|---|---|---|---|---|
| 皮肤 | [dsh-client-ui-skin-center](https://github.com/zhu1090093659/dsh-skins) | `@linxin666/dsh-client-ui-skin-center` | 19.9k | In-GUI skin center for the dsh web GUI — the single skin package: skins are… |
| 皮肤 | [dsh-dream-skin](https://github.com/revolutionla/dsh-dream-skin) | `dsh-dream-skin` | 7017 | DeepSeek Harness 换肤插件（Dream Skin for DSH）：8 套 iOS / Linear 式清透冷调的高质感主题 + 弥散光壁纸… |
| 皮肤 | [dsh-client-ui-skin-deep-whale-manager](https://github.com/small-tailqwq/dsh-deep-whale) | `@smalltailqwq/dsh-client-ui-skin-deep-whale-manager` | 6567 | Switch between installed skins and tune each skin's own options. Find it under… |
| 皮肤 | [dsh-skin-market](https://github.com/kingofsoysauce/dsh-skin-market) | `dsh-skin-market` | 1964 | Native skin marketplace and lifecycle manager for DeepSeek Harness |
| 皮肤 | [open-sea-skin](https://github.com/d-dev0101/open-sea-skin) | `open-sea-skin` | 1223 | Realtime WebGPU ocean skin with quick controls for waves, daylight, glass… |
| 主题 | [dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | `dsh-opencode-palette` | 2077 | Ports all 38 opencode themes (33 TUI + 4 desktop 2.0 + system) into DeepSeek… |
| 主题 | [dsh-theme-studio](https://github.com/hj01857655/dsh-plugins) | `dsh-theme-studio` | 2008 | Customize the dsh UI theme: 12 accent presets, dark-mode aware accents with a… |
| 主题 | [dsh-claude-code-desktop-theme](https://github.com/165890/dsh-claude-code-desktop-theme) | `dsh-claude-code-desktop-theme` | 1255 | Claude Code desktop look for the DeepSeek Harness Web GUI: warm cream surfaces… |
| 主题 | [dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | `dsh-theme-endfield` | 784 | DeepSeek Harness web theme: the industrial editorial look of the Arknights… |
| 主题 | [dsh-claude-desktop-theme](https://github.com/zkforge/dsh-claude-desktop-theme) | `dsh-claude-desktop-theme` | 707 | Claude Code Desktop-style theme for DeepSeek Harness (DSH) Desktop on macOS and… |
| 壁纸 | [dsh-background-by-model](https://github.com/HarmlessFunny/dsh-background-by-model) | `dsh-background-by-model` | 1166 | Per-model appearance for the DSH Web UI: an ordered rule list matched against… |
| 壁纸 | [dsh-wallpaper-bg](https://github.com/nishuoyang/dsh-wallpaper-bg) | `dsh-wallpaper-bg` | 806 | DeepSeek Harness（dsh web 网页界面与 0.2 桌面端）独立壁纸背景插件：内置壁纸 / 自定义上传 / Wallpaper Engine… |
| 壁纸 | [wallpaper-engine](https://github.com/yu502950715yang/dsh-use-wallpaper) | `@dsh-use/wallpaper-engine` | 661 | 为 DSH（DeepSeek Harness）Web GUI 提供 Wallpaper Engine 壁纸背景：Scene 壁纸由… |
| 壁纸 | [dsh-mpkg-wallpaper](https://github.com/XHR666/dsh-mpkg-wallpaper) | `dsh-mpkg-wallpaper` | 372 | Load Wallpaper Engine .mpkg files as the DSH web background: embedded video… |
| 壁纸 | [dsh-ui-wallpaper](https://github.com/ansellwan/dsh-custom-wallpaper) | `dsh-ui-wallpaper` | 160 | DeepSeek Harness 自定义壁纸插件：在设置面板里选本机图片当背景，可调不透明度/模糊/界面通透度/压暗，即时预览。A DeepSeek… |
| 桌面宠物 | [dsh-pet](https://github.com/zhu1090093659/dsh-pet) | `@linxin666/dsh-pet` | 24.3k | Multi-pet companion plugin for the dsh web GUI: a registry-driven floating pet… |
| 桌面宠物 | [dsh-codex-pet](https://github.com/michengai/dsh-codex-pet) | `@michengai/dsh-codex-pet` | 3858 | DSH Codex Pet — 为 DeepSeek Harness 提供宠物陪伴、多任务提醒与交互，以及 Skill 自定义宠物 · A pet… |
| 桌面宠物 | dsh-pet-live2d-viola | `dsh-pet-live2d-viola` | 646 | Live2D desktop pet for the DeepSeek Harness web GUI. Six characters — 都子… |
| 桌面宠物 | [dsh-whale-pet](https://github.com/luweiyabo/dsh-whale-pet) | `@luweiyabo/dsh-whale-pet` | 640 | A floating whale desktop pet for the DeepSeek Harness Web UI: 95 categorized… |
| 桌面宠物 | [dsh-scriptor-companion](https://github.com/lingfengqaq/webnovel-writer) | `@linfengqaqtat/dsh-scriptor-companion` | 371 | 鲸鱼娘桌宠：DSH 窗口内的写作陪伴 |
| 启动动画 | dsh-startup-animation | `dsh-startup-animation` | 2360 | DSH 启动动画与动态背景插件：启动时全屏播放本地视频，由纯 CSS 保证按时自动消失，不会阻塞启动；持久背景视频层内置控制面板，可实时调节不透明度、开关与播放… |
| 启动动画 | [dsh-boot-video-manager](https://github.com/Firefly-TheHerta/dsh-boot-video-manager) | `dsh-boot-video-manager` | 1350 | A companion playlist panel for the dsh-boot-animation intro-video plugin: add… |
| 启动动画 | [dsh-boot-compass](https://github.com/linshufan21/dsh-boot-compass) | `dsh-boot-compass` | 794 | Desktop full-screen boot splash. It covers DSH's loading card before first… |
| 启动动画 | [dsh-boot-guard](https://github.com/saisenbox/dsh-boot-guard) | `dsh-boot-guard` | 148 | A loader-independent rescue console for DeepSeek Harness when a broken plugin… |
| 启动动画 | [dsh-opening-splash](https://github.com/liyue-hope/dsh-opening-splash) | `dsh-opening-splash` | 128 | DeepSeek Harness opening splash: plays the DSH software-opening animation full… |
| 字体 | [dsh-font](https://github.com/klarkxy/dsh-plugins) | `@klarkxy/dsh-font` | 433 | Font: customize the interface font, code font, and conversation font size of… |
| 字体 | [dsh-font](https://github.com/citisen/dsh-font) | `@citisen/dsh-font` | 40 | DeepSeek Harness plugin: customize the Web GUI fonts (interface family, code… |
| 字体 | [dsh-font](https://github.com/nakus0426/dsh-font) | `@nakus0426/dsh-font` | 15 | 为 DSH Web 客户端增加「字体」设置页的本地插件。从系统实际安装的字体里选择界面字体与代码字体，选中后立即生效，并持久化到 DSH 的 settings… |
| 图标 | [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | `dsh-emoji` | 406 | Tiny semantic inline emoji for DSH Agent responses |
| 图标 | [dsh-ui-settings-icons](https://github.com/suntianc/dsh-ui-settings-icons) | `dsh-ui-settings-icons` | 273 | Adds custom icons to the DSH Settings sidebar and exposes a keyed… |
| 图标 | [smooth-cursor](https://github.com/Lacquervii/smooth-cursor) | `dsh-smooth-cursor` | 249 | Smooth comet-mode animated caret for the DSH Web composer: a glowing comet… |
| 图标 | [dsh-realtimeavatar](https://github.com/theinfluencecompany/dsh-realtimeavatar) | `dsh-realtimeavatar` | 104 | Realtime Avatar (realtimeavatar.ai) for the DeepSeek Harness: the developer's… |
| 图标 | [dsh-cursor-theme](https://github.com/auki-zy/dsh-cursor-theme) | `dsh-cursor-theme` | 65 | Customize the PC mouse cursor for every UI state inside DeepSeek Harness. 在 DSH… |
| 动效 | [dsh-whale-particles](https://github.com/fewoot/dsh-whale-particles) | `dsh-whale-particles` | 348 | Dot-matrix backdrop for the DSH Web UI: the dots form the DeepSeek whale or a… |
| 动效 | [dsh-animations](https://github.com/kkutysllb/dsh-animations) | `dsh-animations` | 32 | DSH 原生动效技能包：8 个 HTML 动画技能（PPT 翻页演示 / 流程图 / 网络协议可视化 / 动态架构图 / 学霸笔记 / 卡片剧场 / 视频分镜… |
| 动效 | [dsh-animation-optimization](https://github.com/kelemiao/dsh-animation-optimization) | `dsh-animation-optimization` | 17 | DSH 动画优化：输出流式动画与 Claude Code 风格外观插件 |

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

## 主题 / 配色

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | `dsh-opencode-palette` | 2077 | MIT | Ports all 38 opencode themes (33 TUI + 4 desktop 2.0 + system) into DeepSeek Harness, including 25 IP preset palettes… |
| [dsh-theme-studio](https://github.com/hj01857655/dsh-plugins) | `dsh-theme-studio` | 2008 | MIT | Customize the dsh UI theme: 12 accent presets, dark-mode aware accents with a contrast guard, density, font family… |
| [dsh-claude-code-desktop-theme](https://github.com/165890/dsh-claude-code-desktop-theme) | `dsh-claude-code-desktop-theme` | 1255 | MIT | Claude Code desktop look for the DeepSeek Harness Web GUI: warm cream surfaces, terracotta accent, embedded serif UI… |
| [dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | `dsh-theme-endfield` | 784 | MIT | DeepSeek Harness web theme: the industrial editorial look of the Arknights: Endfield official site — cream paper, ink… |
| [dsh-claude-desktop-theme](https://github.com/zkforge/dsh-claude-desktop-theme) | `dsh-claude-desktop-theme` | 707 | MIT | Claude Code Desktop-style theme for DeepSeek Harness (DSH) Desktop on macOS and Windows, with light/dark themes… |
| dsh-oort-theme-plugin | `dsh-oort-theme-plugin` | 642 | MIT | 主题插件：为 DSH Web 客户端注册多套自定义外观主题和设置页面 |
| [dsh-endfield-theme](https://github.com/longxiangjunlin/dsh-endfield-theme) | `dsh-endfield-theme` | 583 | MIT | 《明日方舟：终末地》主题 for the DeepSeek Harness Web GUI — 炭黑 + 警戒黄工业 HUD、开屏动画、对话区背景。 / Arknights: Endfield theme for the DSH Web… |
| [dafy-whale-theme](https://github.com/yryd/dafy-whale-theme) | `dafy-whale-theme` | 490 | MIT | 蓝色大肥鱼主题：DeepSeek Harness web 前端的海洋配色、游动鱼群与上升气泡，带「设置 → 海洋主题」可调面板。 |
| [dsh-theme-manager](https://github.com/runcat-tommy/dsh-theme-manager) | `dsh-theme-manager` | 461 | MIT | Two-level theme manager for DeepSeek Harness Web: pick a culture/scene, a national flag, a developer palette, or a bold… |
| @qlzt/dsh-client-ui-theme | `@qlzt/dsh-client-ui-theme` | 359 | MIT | Theme plugin: Host bootstrap for the pre-plugin palette; DOM-free ThemeRuntime for light/dark/system state; --dsw-*… |
| [dsh-themes](https://github.com/mangmax/dsh-themes) | `dsh-themes` | 325 | MIT | DSH 外观与主题插件:内置调色板、Open VSX 搜索导入、颜色参数编辑器、明暗独立归属 |
| [dsh-nico-theme](https://github.com/more-nico/dsh-nico-theme) | `dsh-nico-theme` | 307 | MIT | Nico glass theme for DeepSeek Harness Web UI — glass material rendered by nico-glass-kit. Adapted for DSH 0.2.0-rc.2 /… |
| [dsh-theme-gallery](https://github.com/renjie2026/dsh-theme-gallery) | `dsh-theme-gallery` | 254 | MIT | A theme gallery for DeepSeek Harness (DSH): JSON-defined skins with full-screen coverage and sidebar scenery, a… |
| [dsh-theme-xiaohei](https://github.com/lemoncat7/dsh-theme-xiaohei) | `@lemoncat7/dsh-theme-xiaohei` | 237 | MIT | A Luo Xiaohei-inspired animated dark theme for DeepSeek Harness |
| [dsh-neu-theme](https://github.com/lhy723/dsh-neu-theme) | `dsh-neu-theme` | 217 | MIT | Neumorphism soft-UI theme for DeepSeek Harness web — gentle raised-and-recessed surfaces in a cream light and an… |
| [dsh-theme-cutout-clash](https://github.com/yrracowl/dsh-theme-cutout-clash) | `dsh-theme-cutout-clash` | 216 | MIT | EN: Selectable neo-brutalist/pop-art themes for DeepSeek Harness Web with calm reading surfaces. 0.5.11 targets the… |
| [dsh-thirteen-bg](https://github.com/feng78-boop/dsh-thirteen-bg) | `dsh-thirteen-bg` | 160 | MIT | Animated and video live wallpaper for the DeepSeek Harness Web GUI — GIF, animated WebP/APNG and static PNG/JPEG… |
| [dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) | `dsh-theme-plugin` | 143 | MIT | 中国传统色 DeepSeek Harness 主题包 · Chinese traditional color themes for DeepSeek Harness |
| [solarized-dsh-theme](https://github.com/zhijun-dai/solarized-dsh-theme) | `@yuquexianzhou/solarized-dsh-theme` | 122 | MIT | Solarized + Selenized themes for DeepSeek Harness: four faithful palettes (Solarized Dark/Light, Selenized Dark/Light)… |
| [dsh-theme-tuner](https://github.com/shawnlone/dsh-theme-tuner) | `dsh-theme-tuner` | 118 | MIT | DSH web plugin: theme customization placed under the built-in Appearance (外观) settings. It reuses the Appearance… |
| [dsh-session-theme](https://github.com/Xliecc/dsh-session-theme) | `dsh-session-theme` | 117 | MIT | Shows every session theme in the DSH Web left sidebar immediately on page load by warming the session projection cache… |
| [dsh-outerwilds-theme](https://github.com/xikan0/dsh-outerwilds-theme) | `dsh-outerwilds-theme` | 108 | SEE LICENSE IN LICENSE | 以《星际拓荒》为主题的 DSH Web 与 Windows Desktop 外观插件 |
| [dsh-theme-tarkov](https://github.com/zhigengniao258/dsh-theme-tarkov) | `dsh-theme-tarkov` | 102 | MIT | Escape from Tarkov themed plugin for the DeepSeek Harness Web UI: hero Beta-warning banner, translucent looping video… |
| [dsh-theme-kit](https://github.com/ink5897/dsh-theme-kit) | `dsh-theme-kit` | 99 | MIT | A DeepSeek Harness Web GUI appearance kit: 32 preset themes, custom backgrounds (wallpaper / glass / texture), per-zone… |
| [dsh-tui-theme](https://github.com/xiaoxiaohaigui/dsh-tui-theme) | `dsh-tui-theme` | 77 | MIT | Blossom status line and /settings section for dsh-TUI. The pink theme family (pink-night/pink-day/pink-ansi) has moved… |
| dsh-theme-button | `dsh-theme-button` | 40 | MIT | Floating theme widget for DeepSeek Harness: switch the official appearance, and set a custom background (picture or… |
| [dsh-theme-library](https://github.com/zaimokuza-yoshiteru/dsh-theme-library) | `@zaimokuza/dsh-theme-library` | 35 | SEE LICENSE IN LICENSE | Extensible animated theme library for DeepSeek Harness |
| [dsh-web-theme](https://github.com/luckzhangfengbo/dsh-web-theme) | `dsh-web-theme` | 35 | MIT | 墨韵 (Moyun) · 中国水墨画风格主题插件 for DeepSeek Harness：5 套原创水墨主题、自定义壁纸 + 模糊控制、粒子飘落效果、8 种语言国际化，把 DSH 变成一幅流动的水墨画卷。原生 token… |
| [dsh-theme-gallery](https://github.com/xuanyi-king/dsh-theme-gallery) | `@xuanyi-king/dsh-theme-gallery` | 27 | MIT | DeepSeek Harness theme center with eleven themes and safe update checks |
| dsh-theme-stardew | `dsh-theme-stardew` | 19 | MIT | A Stardew Valley themed client plugin for the DeepSeek Harness web surface. Non-commercial fan theme. |
| [dsh-glass-theme](https://github.com/cnayu/dsh-glass-theme) | `dsh-glass-theme` | 16 | MIT | 柔光玻璃 (Soft Light Glass) theme plugin for DeepSeek Harness: frosted-glass UI, settings toggle, chat-area image/video… |
| dsh-theme-color | `dsh-theme-color` | 14 | MIT | 自定义主题色：在设置-外观中添加一个调色盘方块，选择品牌主色后仅替换当前黑白主题中带颜色的按钮与图标（业务蓝一族），页面整体保持黑白。 |
| [aiko-dsh-theme](https://github.com/aiko-dsh-plugins/aiko-dsh-theme) | `aiko-dsh-theme` | 10 | UNLICENSED | Aiko orange and charcoal theme with the collaboration-core brand for aiko-dsh. |
| [dsh-theme-eyecare](https://github.com/j2st1n/dsh-theme-eyecare) | `dsh-theme-eyecare` | 9 | MIT | Eye-care themes and color palette switcher for DeepSeek Harness Web GUI |
| @guillaumemeyer/dsh-themes | `@guillaumemeyer/dsh-themes` | 8 | MIT | Selectable DSH theme palettes (Tokyo Night, Catppuccin, Dracula, Gruvbox, Nord, One Dark) with live previews, applied… |
| [dsh-theme-pack](https://github.com/vibeinging/deepseek-harness-desktop-app) | `@vibeinging/dsh-theme-pack` | 6 | MIT | Profile-owned DeepSeek Harness Desktop App themes |
| [open-theme](https://github.com/xylt369/dsh-open-theme) | `@yeesy369/open-theme` | 6 | MIT | Open Theme：给 DeepSeek Harness（dsh）Web UI 换皮肤的客户端插件——上传背景图自动取色换肤，支持自定义特效预设（skin / theme / background plugin for DeepSeek… |
| [dsh-theme-tint](https://github.com/kuaileinmylife/dsh-usage-meter) | `dsh-theme-tint` | 6 | MIT | DeepSeek Harness web plugin: account balance + token bars, theme tint panel, wallpaper with crop + photo theme mode… |
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
| [dsh-theme](https://github.com/EternalNight996/dsh-theme) | `@eternalnight/dsh-theme` | — | MIT | Theme skin plugin for DeepSeek Harness — built-in themes / static image / dynamic 360°-follow video, one-click from the… |
| [dsh-theme-eink-retro](https://github.com/exoticknight/dsh-theme-eink-retro) | `exoticknight/dsh-theme-eink-retro` | — | — | A paper-and-ink client-side theme for the DeepSeek Harness Web UI: Balanced preserves semantic status colors, and… |
| [dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass) | `dsh-theme-liquid-glass` | — | MIT | Genuine Liquid Glass theme for DSH Web UI: SVG feDisplacementMap edge refraction on input card, send button, bubbles… |
| [dsh-theme-macintosh](https://github.com/fengb3/dsh-theme-macintosh) | `dsh-theme-macintosh` | — | MIT | Classic Macintosh (System 7) pixel theme: desktop pattern canvas, Finder sidebar, monochrome buttons and dialogs… |
| [dsh-everforest](https://github.com/FormalistBlue/dsh-everforest) | `formalistblue/dsh-everforest` | — | — | Everforest palettes for the DeepSeek Harness Web/Desktop UI: six schemes (dark and light, each in hard, medium or soft)… |
| [dsh-theme-inkstone](https://github.com/fuguang12123/dsh-theme-inkstone) | `fuguang12123/dsh-theme-inkstone` | — | — | Inkstone is a monochrome theme inspired by Obsidian Minimal E-ink, with inverted sidebar interactions, colored Markdown… |
| [dsh-za-warudo](https://github.com/Fwkkk666/dsh-za-warudo) | `fwkkk666/dsh-za-warudo` | — | — | Adds an Appearance switch to the DSH sidebar with a three-second time-stop transition, synchronized sound, and… |
| [Rhine-Lab-Codex-Theme](https://github.com/Galaxy-2001/Rhine-Lab-Codex-Theme/tree/main/dsh) | `galaxy-2001/rhine-lab-codex-theme` | — | — | Rhine Lab-inspired light and dark themes with animated backgrounds for DeepSeek Harness. |
| [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme) | `ggbond2424648901/deep-whale-day-night-theme` | — | — | Non-commercial day/night whale-girl skin for official Harness rc.7: current no-viewport-frame layout, paired… |
| [dsh-stylevault](https://github.com/GptsApp/dsh-stylevault) | `gptsapp/dsh-stylevault` | — | — | 30 classic open-source theme palettes (Catppuccin, Nord, Tokyo Night, Gruvbox, Solarized, etc.) mapped to official… |
| [dsh-theme-frost](https://github.com/H2CO3w/dsh-theme-frost) | `h2co3w/dsh-theme-frost` | — | — | Turns an image folder into a frosted-glass global wallpaper for the DSH web UI, keeping the official palette. |
| [dsh-moonrise](https://github.com/hanyi7867069-create/dsh-moonrise) | `hanyi7867069-create/dsh-moonrise` | — | — | Moonrise dark theme for the DSH Web UI, with deep indigo surfaces and warm amber accents. |
| [hcguo-public](https://github.com/HCGuo2000/hcguo-public/tree/main/plugins/amber-forge) | `hcguo2000/hcguo-public` | — | — | Amber CRT-style skin for DeepSeek Harness: overrides 14 theme tokens and 23 static palette entries, forces a monospace… |
| [dsh-theme-herta](https://github.com/HerTa-st/dsh-theme-herta) | `dsh-theme-herta` | — | MIT | A Herta theme for DeepSeek Harness: an ASCII boot opening ported from the upstream Herta project, a violet palette of… |
| [dsh-orca-glass](https://github.com/huzhengbang2007/dsh-orca-glass) | `huzhengbang2007/dsh-orca-glass` | — | — | DSH Web plugin that injects an SVG (feTurbulence + feDisplacementMap) refraction filter and applies it through… |
| [DSH-Claude-Style-Reasoning-Slider](https://github.com/MEMZ-JZY/DSH-Claude-Style-Reasoning-Slider) | `memz-jzy/dsh-claude-style-reasoning-slider` | — | — | Animated Claude-style reasoning-effort slider and model picker that replaces the native DSH model selector. |
| [dsh-lifeline](https://github.com/Physicolor/dsh-lifeline) | `physicolor/dsh-lifeline` | — | — | Right-side message navigation rail for DeepSeek Harness: per-message tick marks, hover-to-expand preview drawer, smooth… |
| [dsh-ui-harmonizer](https://github.com/Physicolor/dsh-ui-harmonizer) | `physicolor/dsh-ui-harmonizer` | — | — | UI harmonizer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles style conflicts… |
| [dsh-widgets](https://github.com/Physicolor/dsh-widgets) | `physicolor/dsh-widgets` | — | — | A customizable widget rail for the right side of DeepSeek Harness: 61 cards covering session stats, tokens and cache… |
| [dsh-theme-colorizer](https://github.com/RealHacker/dsh-theme-colorizer) | `realhacker/dsh-theme-colorizer` | — | — | A Deepseek Harness plugin that gives its UI color themes. |
| [dsh-chat-history](https://github.com/Stylelinzzz/dsh-chat-history) | `stylelinzzz/dsh-chat-history` | — | — | Adds a "History" conversation view tab listing the session's user messages as a clickable directory, with auto-paging… |
| [xiao-ui-theme-ts](https://github.com/jinxlux/xiao-theme-dsh-ui-plugin) | `xiao-ui-theme-ts` | — | MIT | Customizable theme plugin for DeepSeek Harness web UI. Ships with a Xiao-style jade palette by default; accent color… |
| [dsh-custom-style](https://github.com/yutao8/dsh-custom-style) | `yutao8/dsh-custom-style` | — | — | Adds a Custom CSS section to Settings for adjusting dialog dimensions, font sizes, full-window wallpapers, and… |

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
| [dsh-wallpaper](https://github.com/xiaoxiao44443/dfy-dsh-plugins) | `@dfy-plugins/dsh-wallpaper` | 66 | MIT | DeepSeek Harness 可配置图片壁纸：适应模式、位置、透明度、模糊与颜色遮罩。 |
| [dsh-live-wallpaper](https://github.com/hinayoung23/dsh-live-wallpaper) | `dsh-live-wallpaper` | 48 | MIT | A dependency-free live wallpaper and theme center for the DeepSeek Harness Web UI. |
| [wallpaper-engine-dsh](https://github.com/weilv-d/wallpaper-engine-dsh) | `wallpaper-engine-dsh` | 31 | MIT | Wallpaper Engine library as the DSH web GUI background — video/web/still wallpapers, rotation lists, search, resource… |
| [dsh-wallpaper-bridge](https://github.com/kyorakuyk/dsh-wallpaper-bridge) | `dsh-wallpaper-bridge` | 17 | MIT | Loopback DSH session bridge for the dsh-wallpaper desktop app. |
| @starryhui/dsh-background | `@starryhui/dsh-background` | 16 | MIT | 自定义 DSH WebUI 背景：图库随机、自由拉伸裁切框、不透明度、高斯模糊、面板透明、多图交叉淡化轮播。 |
| @anningui/dsh-client-ui-skin-md3-wallpaper | `@anningui/dsh-client-ui-skin-md3-wallpaper` | 15 | MIT | Standalone Material You (MD3) dynamic-color skin for the dsh web GUI: upload any wallpaper, Monet extracts the palette… |
| [dsh-wallpaper-ui](https://github.com/adydc-99/dsh-wallpaper) | `dsh-wallpaper-ui` | 13 | MIT | Persistent image, GIF, and video wallpapers for the DeepSeek Harness Web UI |
| [dsh-wallpaper-local](https://github.com/baiiii279/dsh-wallpaper-local) | `@baiiii/dsh-wallpaper-local` | — | MIT | DSH wallpaper plugin: local Wallpaper Engine/Steam picker, video background, scene.pkg texture extraction |
| [dsh-bing-wallpaper](https://github.com/ericality/dsh-enhanced) | `@ericality/dsh-bing-wallpaper` | — | MIT | Bing daily wallpaper bridge for DSH: today's wallpaper image and note served same-origin, folder-random wallpaper… |
| [dsh-background](https://github.com/kudanen/dsh-background) | `@kudanen/dsh-background` | — | MIT | DSH web plugin: full-page static/video wallpaper with live opacity / blur / contrast sliders, glass-panel transparency… |
| [dsh-wallpaper-engine](https://github.com/marlonlau/dsh-wallpaper-engine) | `@marlonlau/dsh-wallpaper-engine` | — | MIT | One-click DSH background switcher backed by local Wallpaper Engine images/videos (WE Web API first, Steam… |
| @midnightbell/dsh-wallpaper-theme | `@midnightbell/dsh-wallpaper-theme` | — | MIT | DSH 背景壁纸主题插件：设置页「背景主题」入口，渐变预设/本地图片/剪贴板/图片链接，设置持久化到 DSH_HOME，重启自动恢复。 |
| [dsh-WallpaperAndCost](https://github.com/AppliedYuu/dsh-WallpaperAndCost) | `appliedyuu/dsh-wallpaperandcost` | — | — | Merged plugin: wallpaper customization (original-resolution uploads, crop editor, per-area opacity, MP4/WebM dynamic… |
| [dsh-wallpaper-position](https://github.com/ArimaKana-Akane/dsh-wallpaper-position) | `arimakana-akane/dsh-wallpaper-position` | — | — | Per-wallpaper offset for dsh-dream-skin - nudge the current wallpaper along X and Y in pixels from Settings, remembered… |
| [dsh-wallpaper](https://github.com/B-TQ/dsh-wallpaper) | `b-tq/dsh-wallpaper` | — | — | Full-screen dynamic wallpaper from local videos and images, with live effect controls, wallpaper switching and… |
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
| [dsh-cutesnowgirl-background](https://github.com/haihaiaicode/dsh-cutesnowgirl-background) | `haihaiaicode/dsh-cutesnowgirl-background` | — | — | Adds a muted looping video behind the Harness workspace and makes the composer translucent after the boot splash… |
| [deepseek-harness-background](https://github.com/HaoyueQin/deepseek-harness-background) | `deepseek-harness-background` | — | MIT | Custom background image for the DSH Web UI: upload a picture or paste an image URL behind the whole app surface, with… |
| [dsh-wallhaven-wallpaper](https://github.com/HaydenSmith1121/dsh-wallhaven-wallpaper) | `haydensmith1121/dsh-wallhaven-wallpaper` | — | — | Searches wallhaven.cc from a settings page and sets any wallpaper as the DSH web GUI background, with opacity, blur and… |
| [deepseek-whale-wallpaper](https://github.com/HeShen-1/deepseek-whale-wallpaper) | `dsh-plugin-harness-whale` | — | MIT | Live dot-matrix whale wallpaper for the DSH Web UI: ~1,750 breathing WebGL2 particles with pointer liquid vortices… |
| [dsh-plugin-media-wallpaper](https://github.com/laoye666-6/dsh-plugin-media-wallpaper) | `dsh-plugin-media-wallpaper` | — | MIT | Image and video wallpapers for the DSH web workspace: auto-detected GIF/APNG/animated WebP/PNG/JPEG/MP4/WebM… |
| [dsh-wallpaper-engine](https://github.com/TianYa-DAO/dsh-wallpaper-engine/tree/main/packages/dsh-wallpaper-engine) | `tianya-dao/dsh-wallpaper-engine` | — | — | Wallpaper Engine local library, background layer, native Scene panel, and desktop-mode controls for the DSH desktop… |

## 桌面宠物 / 吉祥物

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-pet](https://github.com/zhu1090093659/dsh-pet) | `@linxin666/dsh-pet` | 24.3k | Apache-2.0 | Multi-pet companion plugin for the dsh web GUI: a registry-driven floating pet that reacts to model activity, with… |
| [dsh-codex-pet](https://github.com/michengai/dsh-codex-pet) | `@michengai/dsh-codex-pet` | 3858 | Apache-2.0 | DSH Codex Pet — 为 DeepSeek Harness 提供宠物陪伴、多任务提醒与交互，以及 Skill 自定义宠物 · A pet companion with multi-task notifications… |
| dsh-pet-live2d-viola | `dsh-pet-live2d-viola` | 646 | BSD-3-Clause | Live2D desktop pet for the DeepSeek Harness web GUI. Six characters — 都子 (miyako_014_casual_spring_01_marukun), 薇欧拉… |
| [dsh-whale-pet](https://github.com/luweiyabo/dsh-whale-pet) | `@luweiyabo/dsh-whale-pet` | 640 | SEE LICENSE IN LICENSE | A floating whale desktop pet for the DeepSeek Harness Web UI: 95 categorized animations, event-aware actions, custom… |
| [dsh-scriptor-companion](https://github.com/lingfengqaq/webnovel-writer) | `@linfengqaqtat/dsh-scriptor-companion` | 371 | GPL-3.0-only | 鲸鱼娘桌宠：DSH 窗口内的写作陪伴 |
| [dsh-codex-pet](https://github.com/skr311/dsh-codex-pet) | `dsh-codex-pet` | 195 | MIT | A desktop pet plugin for DeepSeek Harness (DSH): import Codex-style sprite-sheet pets and render them in the DSH Web… |
| [dsh-pet-dfeiyu-mo](https://github.com/pc2005-cloud/dsh-pet) | `dsh-pet-dfeiyu-mo` | 144 | MIT | 大肥鱼桌宠：80 种热门角色语音、动漫/网络热梗音色、Edge TTS、点击气泡互动、自定义互动与导入音频、真实 AI 声音克隆、联网搜索、系统通知语音。 |
| [dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) | `deepseek-desk-pet` | 139 | MIT | macOS desk pet that lives outside the DSH page: a real always-on-top window that clears fullscreen Spaces, six states… |
| [dsh-pet-bridge](https://github.com/wsxwj123/dsh-plugins) | `dsh-pet-bridge` | 126 | MIT | DSH server plugin: push dsh session status to the cc-pet desktop pet bubble in real time. |
| [dsh-ikun-pet](https://github.com/eric-song-dev/dsh-ikun-pet) | `dsh-ikun-pet` | 125 | MIT | dsh-ikun-pet · ikun 桌宠 —— DeepSeek Harness 永久插件：在 DSH Deep diving 回答期间，用坤宠动图填满深潜状态行下方区块，进度 0%→100%，每 20%… |
| [dsh-pet](https://github.com/captain1275/dsh-ui-web) | `@captain1275/dsh-pet` | 120 | Apache-2.0 | 鲸鱼娘宠物插件 for the dsh web GUI: a soft healing whale-girl companion that reacts to model activity… |
| dsh-live2d-pet | `dsh-live2d-pet` | 119 | MIT | Live2D companion for DeepSeek Harness: render a Cubism model (e.g. the official Haru sample) in the web UI with… |
| dsh-pet-miyako | `dsh-pet-miyako` | 83 | BSD-3-Clause | Miyako desktop pet for the DSH web GUI — custom sprite animations (idle / waiting / working / click / online-offline)… |
| [dsh-pet-in-frame](https://github.com/harmlessfunny/dsh-pet-in-frame) | `dsh-pet-in-frame` | 65 | MIT | Agent desktop pet overlay for DeepSeek Harness: static or frame-animated poses that react to agent status and tool… |
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
| [dsh-live2d-pet](https://github.com/ankesu/dsh-live2d-pet) | `ankesu/dsh-live2d-pet` | — | — | Live2D companion for DSH: a floating Cubism model with state-driven expressions and mouse tracking; config-driven… |
| [better-dsh-pet](https://github.com/ysppwn721/better-dsh-pet) | `better-dsh-pet` | — | MIT | A desktop-native pet bubble driven by DeepSeek Harness session events: transparent always-on-top Electron window… |
| [dsh-pet-sprite](https://github.com/BlackBearCC/dsh-pet-sprite) | `blackbearcc/dsh-pet-sprite` | — | — | A pixel companion living in the chat area: hatches from an egg into one of three sprites or an LLM-drawn custom one… |
| catpet-desktop-pet | `catpet-desktop-pet` | — | MIT | DSH Cat Meme Desktop Pet Plugin - 在Web界面右下角显示猫MEME宠物，根据Agent工作状态做出不同动作 |
| [dsh-live2d-avatar](https://github.com/clown139880/dsh-live2d-avatar) | `dsh-live2d-avatar` | — | MIT | Live2D avatar stage and desktop companion for DSH: bundled Haru sample, custom Cubism 2/3+ model loading with scale and… |
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
| [dsh-codex-mini-pet](https://github.com/HuiHuangDDFS/dsh-codex-mini-pet) | `huihuangddfs/dsh-codex-mini-pet` | — | — | Adds separate Chat and Work modes to DeepSeek Harness, embeds DeepSeek's official chat page, and provides an animated… |
| [dsh-live2d](https://github.com/lrplrplrp/dsh-live2d) | `@lrplrplrp/dsh-live2d` | — | MIT | A Live2D waifu plugin for DSH. |
| [dsh-pet-guardian-dragon](https://github.com/lucas07814-hub/dsh-pet-guardian-dragon) | `lucas07814-hub/dsh-pet-guardian-dragon` | — | — | A draggable desktop pet for the DSH web interface with interactive actions and growth states. |
| [dsh-codex-pet](https://github.com/mengyun233/dsh-codex-pet) | `mengyun233/dsh-codex-pet` | — | — | Auto-migrate Codex desktop-pet skins into DSH: an animated corner pet that mirrors agent state (thinking, tool use… |
| [mimi-desktop-pet](https://github.com/mekos2772/dsh-plugin-mimi) | `mimi-desktop-pet` | — | MIT | 鲸鱼娘 Mimi 超级桌面助理：DeepSeek Harness 桌面伴侣，内置 Windows Computer Use，支持观察、点击、输入、滚动与操作后验证。 |
| [pet-whale](https://github.com/nzl153/dsh-pet-whale) | `pet-whale` | — | MIT | 桌宠小鲸鱼：DeepSeek Harness 桌宠插件，桌面端和网页端都能用，随 agent 状态切换动画（官方轮廓版） |
| [pi-dsh-pet](https://github.com/somwhy/pi-dsh-pet) | `pi-dsh-pet` | — | MIT | Floating desktop deepseek chan for the pi coding agent: idle breathing, random actions, screen wandering, and pi event… |
| [dsh-desktop-pet](https://github.com/sereinmono/dsh-desktop-pet) | `dsh-desktop-pet` | — | MIT | A plugin that adds a desktop pet to your DeepSeek Harness, supporting the Codex pet format, you can use hatch-pet or… |
| totoro-pet | `totoro-pet` | — | MIT | [![Listed on dsh-plugin.org](https://dsh-plugin.org/badges/listed.svg)](https://dsh-plugin.org/plugins/your-owner/your-p… |
| [xy-deepseek-pet](https://github.com/hexingyuofficial/xy-deepseek-pet) | `xy-deepseek-pet` | — | MIT | Harness adapter bundle for XY DeepSeek Pet |
| [dsh-pet](https://github.com/ysyyhhh/dsh-pet) | `ysyyhhh/dsh-pet` | — | — | Native desktop pet for DSH that follows agent activity, supports Codex pet packages, and imports approved pets directly… |
| [dsh-pet](https://github.com/zealot00/dsh-pet) | `zealot00/dsh-pet` | — | — | Desktop pet for the DSH Web UI: sprite-sheet animation, agent state linkage, drag, alarm (daily/one-shot) and pomodoro… |

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
| @qlzt/dsh-app-boot | `@qlzt/dsh-app-boot` | — | MIT | Shared boot glue for the app bins: .env loading, fail-loud Loader guards, snapshot-aware config resolution, and the… |
| [dsh-boot-doctor](https://github.com/mide69/dsh-boot-doctor) | `dsh-boot-doctor` | — | MIT | DeepSeek Harness plugin: mounts a console log sink and warns about plugins that resolve, validate, and then never… |
| dsh-cn-boot | `dsh-cn-boot` | — | MIT | China-network bootstrap for DeepSeek Harness (dsh): connectivity probes to npm/GitHub/HuggingFace/mirrors, local proxy… |
| [dsh-entry-transition](https://github.com/hbgdjb/dsh-entry-transition) | `hbgdjb/dsh-entry-transition` | — | — | One-shot entrance animation when the workspace opens: the logo is written onto the canvas, then an inverted color bar… |
| [dsh-splash-launcher](https://github.com/Isilsolme/dsh-splash-launcher) | `dsh-splash-launcher` | — | MIT | Windows one-click launcher with a borderless WPF startup animation (stroke-by-stroke HARNESS lettering) that starts dsh… |
| [dsh-moss-boot](https://github.com/jjt98118-beep/dsh-moss-boot) | `jjt98118-beep/dsh-moss-boot` | — | — | Plays an intro full-frame when you open DSH, when you open a new conversation, or every time you open the one you… |
| [DeepSeek-splash-animation](https://github.com/KDDKBD/DeepSeek-splash-animation) | `kddkbd/deepseek-splash-animation` | — | — | Plays a video while DSH opens, then dissolves over 0.3 seconds once it has played out. Ships with a default video so it… |
| [dsh-startup-animation](https://github.com/KylinQ01/dsh-startup-animation) | `kylinq01/dsh-startup-animation` | — | — | Startup splash for DeepSeek Harness: an animated avatar with aurora, stardust, pointer parallax and a module-assembly… |
| [dsh-boot-splash](https://github.com/liushuchang-2012/dsh-boot-splash) | `liushuchang-2012/dsh-boot-splash` | — | — | Boot film for the web UI: a blue whale floods black from below as the page loads, then glides left and pulls the \|… |
| [dsh-boot-animation](https://github.com/lxj5820/dsh-boot-animation) | `lxj5820/dsh-boot-animation` | — | — | Replaces the kernel boot page with a full-window video clip that dissolves into the app; the clip pool, enter mode and… |
| [dsh-boot-animation](https://github.com/mu915275-cmd/dsh-boot-animation) | `mu915275-cmd/dsh-boot-animation` | — | — | Plays an intro full-frame on a new conversation, or every time you open the one you pinned. Four clips ship inside the… |
| [dsh-boot-animation](https://github.com/NativeDog1/dsh-boot-animation) | `nativedog1/dsh-boot-animation` | — | — | Plays an intro full-frame on a new conversation, or every time you open the one you pinned. Four clips ship inside the… |
| [dsh-splash-gojo](https://github.com/oumaekumiko0821/dsh-splash-gojo) | `oumaekumiko0821/dsh-splash-gojo` | — | — | Full-screen boot animation for the DSH web client: the boot HTML paints a cover-fit artwork on its first frame, adds a… |
| [dsh-boot-video](https://github.com/xufu5438-netizen/dsh-boot-video) | `dsh-boot-video` | — | MIT | Full-screen video boot splash — play an mp4 at startup, skip with a click, import your own clip, and non-playable… |
| [dsh-erii-boot-splash](https://github.com/yanglingrise/dsh-erii-boot-splash) | `yanglingrise/dsh-erii-boot-splash` | — | — | Erii (Sakura) themed boot splash animation — falling sakura petals, a mint monster mascot with a blossom on its head… |
| [dsh-550c-boot](https://github.com/yannicksong0106/dsh-550c-boot) | `dsh-550c-boot` | — | MIT | Full-screen 550C boot intro for DSH: a 4-second simple cut and a 16-second rewrite sequence, skippable by click or Esc… |
| [dsh-startup-intro](https://github.com/zoe1nan/dsh-startup-intro) | `zoe1nan/dsh-startup-intro` | — | — | Startup video intro with per-clip playback parameters (segment, speed, brightness, fit, blurred cinema fill, hold ratio… |

## 字体

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-font](https://github.com/klarkxy/dsh-plugins) | `@klarkxy/dsh-font` | 433 | SEE LICENSE IN LICENSE | Font: customize the interface font, code font, and conversation font size of the DeepSeek Harness Web GUI. |
| [dsh-font](https://github.com/citisen/dsh-font) | `@citisen/dsh-font` | 40 | MIT | DeepSeek Harness plugin: customize the Web GUI fonts (interface family, code family, and two font-size axes) from… |
| [dsh-font](https://github.com/nakus0426/dsh-font) | `@nakus0426/dsh-font` | 15 | — | 为 DSH Web 客户端增加「字体」设置页的本地插件。从系统实际安装的字体里选择界面字体与代码字体，选中后立即生效，并持久化到 DSH 的 settings 文档。 |
| [dsh-font-settings](https://github.com/igaozp/dsh-font-settings) | `@igaozp/dsh-font-settings` | — | — | 为 DeepSeek Harness 添加字体设置 |
| [dsh-client-ui-font-scale](https://github.com/AprilCrystal/dsh-client-ui-font-scale) | `aprilcrystal/dsh-client-ui-font-scale` | — | — | Conversation font-size controls for the Web UI: a stepper in the composer row, keyboard shortcuts, and Ctrl+wheel zoom… |
| [dsh-font-plugin](https://github.com/wtksana/dsh-font-plugin) | `dsh-font-plugin` | — | MIT | DSH dual-face plugin: font family and ligature controls for the Web UI. Host half registers a settings namespace… |
| dsh-font-ruanio | `dsh-font-ruanio` | — | BSD-3-Clause | 自定义字体生成器（DSH 插件）：上传字体 → 生成字体插件包（@local/dsh-custom-font）→ 注入 @font-face 并重映射 --dsw-font-family（全局生效，热载无需重启）。无外部运行时依赖。 |
| [dsh-ui-font](https://github.com/yuu1111/dsh-ui-font) | `dsh-ui-font` | — | MIT | DeepSeek Harness Web GUI plugin: set the UI and code font families from Settings → General (--dsw-font-family… |
| [dsh-custom-fonts](https://github.com/it-glen/dsh-custom-fonts) | `it-glen/dsh-custom-fonts` | — | — | Fonts and code-font settings for the UI with an English-only glyph scale (100-160%), a -4..+8 px content-size offset… |
| [dsh-awesome-fonts](https://github.com/kankezhiyan/dsh-awesome-fonts) | `kankezhiyan/dsh-awesome-fonts` | — | — | Font switcher for DeepSeek Harness Web GUI: 99 UI fonts + 31 code fonts with CJK-Latin pairing. |
| [dsh-font-enhancer](https://github.com/loyalchiiina/dsh-font-enhancer) | `dsh-font-enhancer` | — | MIT | DIY your DSH UI fonts and colors: per-region styling, unified overrides, theme save and switch, random font and color. |
| [dsh-custom-fonts](https://github.com/lsh2002/dsh-custom-fonts) | `lsh2002/dsh-custom-fonts` | — | — | Customize the UI's Chinese and English fonts, code font, and global font-size offset on a settings page, with a live… |
| [dsh-fonttune](https://github.com/LyaxZ/dsh-fonttune) | `dsh-fonttune` | — | MIT | A font plugin for the DeepSeek Harness Web GUI: the conversation gets its own font, size, line height, weight… |
| [dsh-ui-font](https://github.com/warmwine/dsh-ui-font) | `warmwine/dsh-ui-font` | — | — | Font engine for the Web GUI: system font enumeration, global and per-component font-size tuning with a Spy++-style… |
| [dsh-chat-typography](https://github.com/zheshiyigehenchang/dsh-chat-typography) | `zheshiyigehenchang/dsh-chat-typography` | — | — | Set the DSH Harness conversation flow's font, font size and line spacing, plus the padding between the conversation… |

## 图标 / 光标 / 头像

| 名称 | 安装 | 周下载 | 许可 | 说明 |
|---|---|---|---|---|
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | `dsh-emoji` | 406 | MIT | Tiny semantic inline emoji for DSH Agent responses |
| [dsh-ui-settings-icons](https://github.com/suntianc/dsh-ui-settings-icons) | `dsh-ui-settings-icons` | 273 | MIT | Adds custom icons to the DSH Settings sidebar and exposes a keyed `settings.section.icon` slot for third-party settings… |
| [smooth-cursor](https://github.com/Lacquervii/smooth-cursor) | `dsh-smooth-cursor` | 249 | MIT | Smooth comet-mode animated caret for the DSH Web composer: a glowing comet trail replaces the native blinking caret and… |
| [dsh-realtimeavatar](https://github.com/theinfluencecompany/dsh-realtimeavatar) | `dsh-realtimeavatar` | 104 | MIT | Realtime Avatar (realtimeavatar.ai) for the DeepSeek Harness: the developer's API key held by the harness, the public… |
| [dsh-cursor-theme](https://github.com/auki-zy/dsh-cursor-theme) | `dsh-cursor-theme` | 65 | MIT | Customize the PC mouse cursor for every UI state inside DeepSeek Harness. 在 DSH 里自定义鼠标各种状态的图案。 |
| [dsh-avatar](https://github.com/zoyluoblue/deepseek-harness-avatar) | `@zoytown/dsh-avatar` | 18 | MIT | DeepSeek Harness (dsh) plugin for wallpaper theming — upload images from the Settings page, pick one, and the whole dsh… |
| dsh-agent-avatar | `dsh-agent-avatar` | 16 | MIT | Put your own image where the DSH Web GUI's sidebar brand mark goes (client half, sidebar.brand.mark) and override the… |
| [dsh-cursor-mcp](https://github.com/lnuxe/dsh-cursor) | `dsh-cursor-mcp` | 16 | MIT | Cursor MCP servers (from ~/.cursor/mcp.json) re-packaged as DeepSeek Harness mcp-client rows (8 servers; HTTP secrets… |
| [dsh-cursor](https://github.com/cagase/dsh-cursor) | `@cagase/dsh-cursor` | 7 | MIT | DeepSeek Harness plugin: use a Cursor workspace (skills, rules, hooks, MCP) and the Cursor agent CLI as picker +… |
| [dsh-icon-custom](https://github.com/cowwo/dsh-icon-custom) | `@cowwo/dsh-icon-custom` | — | MIT | 自定义浏览器标签页图标:在设置页上传 SVG/PNG/ICO,立即生效并持久保存,自动适配安卓/iOS/平板 PWA 图标,显示未读红点与进行中黄点(工作区数字/会话行/左上角/标签页,数字可点开清单、点条目定位到侧栏),并可把未读数显示为… |
| [dsh-brand](https://github.com/advance-lion/dsh-brand) | `advance-lion/dsh-brand` | — | — | One-click brand replacement for the DSH web GUI — logo, product name, version badge, hero headline, tab title and… |
| [dsh-plugin-offpeak-badge](https://github.com/AK-blank/dsh-plugin-offpeak-badge) | `ak-blank/dsh-plugin-offpeak-badge` | — | — | Shows whether the DeepSeek API is currently billing at the off-peak or peak rate in the sidebar brand row, with the… |
| [dsh-custom-brand](https://github.com/baisama-cloud/dsh-custom-brand) | `baisama-cloud/dsh-custom-brand` | — | — | Customizable brand area for the Web UI: replace the whale logo and DeepSeek wordmark with local images, and edit the… |
| [dsh-favicon-status](https://github.com/bf185003/dsh-favicon-status) | `bf185003/dsh-favicon-status` | — | — | Browser tab status indicator for dsh web: paints the document favicon from the session list (blue spinning while work… |
| [dsh-cursor-dev](https://github.com/dclef/dsh-cursor-dev) | `dsh-cursor-dev` | — | MIT | 把 Cursor CLI 当作子编码智能体来写业务代码：cursor_code 与 cursor_subagent 都提供可从面板点开的实时子对话，原生任务保留宿主的 External 运行记录；可按任务选模型、会话在 DSH… |
| [dsh-cursor-subscription](https://github.com/orrinzeng/dsh-cursor-subscription) | `dsh-cursor-subscription` | — | MIT | Cursor subscription for DeepSeek Harness with browser login, token refresh, model discovery, and the Cursor Agent chat… |
| dsh-emoji-wallet | `dsh-emoji-wallet` | — | MIT | DeepSeek balance wallet button for DSH: one click shows your API balance. · DSH 余额小钱包：点一下就看见本猫的小钱包 |
| [dsh-icon-theme](https://github.com/yzke/dsh-icon-theme) | `dsh-icon-theme` | — | MIT | Auto-detected, user-customizable icons for DeepSeek Harness settings and sidebar surfaces. |
| [dsh-session-sticker-board](https://github.com/linmu115/dsh-session-sticker-board) | `dsh-session-sticker-board` | — | MIT | Persistent ordinary stickers and note associations through the shared DSH Obsidian Bridge |
| [dsh-subagent-cursor](https://github.com/ninjasln-labs/dsh-subagent-cursor) | `dsh-subagent-cursor` | — | MIT | Cursor-as-subagent provider for DeepSeek Harness: one-shot local runs via @cursor/sdk, summary-first result… |
| [dsh-session-icons](https://github.com/fengb3/dsh-session-icons) | `dsh-session-icons` | — | MIT | Sidebar session-title icons: an auxiliary model call on the same route as title generation draws a 24x24 monochrome SVG… |
| [dsh-icon-changer](https://github.com/flycucu/dsh-icon-changer) | `flycucu/dsh-icon-changer` | — | — | Replaces the DeepSeek Harness desktop app icon (exe, tray and Start Menu) with any uploaded .ico, and restores the… |
| [dsh-icon-console](https://github.com/H1Kariiiiiii/dsh-icon-console) | `h1kariiiiiii/dsh-icon-console` | — | — | Icon console for the DSH desktop app: import one icon and apply it to the desktop and Start Menu shortcuts… |
| [dsh-whale-brand](https://github.com/hiJoeLee/dsh-whale-brand) | `hijoelee/dsh-whale-brand` | — | — | Puts your own animated vector logo over the DSH brand mark in the sidebar and beside the start-page headline, taking… |
| [dsh-model-provider-badge](https://github.com/huihuangdi/dsh-model-provider-badge) | `huihuangdi/dsh-model-provider-badge` | — | — | Shows the provider behind a session's current model as a compact badge in the DSH Web composer tool row, left of the… |
| [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) | `luaphes/dsh-web-attention-badge` | — | — | Attention reminders: frame badge, tab-title count, and a status-colored whale favicon for sessions waiting for input or… |
| [dsh-tool-emoji](https://github.com/LWLAymh/dsh-tool-emoji) | `lwlaymh/dsh-tool-emoji` | — | — | Replace tool-card leading icons with emoji while preserving the original cards. |
| [dsh-plugin-brand-custom](https://github.com/lzpway-jpg/dsh-plugin-brand-custom) | `lzpway-jpg/dsh-plugin-brand-custom` | — | — | Custom brand icon and name for the DSH Web sidebar and conversation hero, editable live from a settings card on the… |
| [dsh-version-badge](https://github.com/mervin1944/dsh-version-badge) | `mervin1944/dsh-version-badge` | — | — | Version badge above the sidebar settings button: shows the current dsh version, expands to list every core package… |
| [dsh-cursorlike-sidebar](https://github.com/Oxygen-Wang/dsh-cursorlike-sidebar) | `oxygen-wang/dsh-cursorlike-sidebar` | — | — | A Cursor-like sidebar for DeepSeek Harness with file browsing, code editing, Git diffs, terminal, side chat, and Ctrl+L… |
| [dsh-sidebar-session-provider-icon](https://github.com/prgrmrwy/dsh-sidebar-session-provider-icon) | `prgrmrwy/dsh-sidebar-session-provider-icon` | — | — | DeepSeek Harness plugin: show a provider + model icon in the sidebar for every session, updated live from the composer… |
| [dsh-brand-studio](https://github.com/qiweiii/dsh-brand-studio) | `qiweiii/dsh-brand-studio` | — | — | Custom branding for the shared DSH Web UI: a Settings → Branding panel for the name, badge, and local logo/wordmark… |
| [dsh-chat-avatar](https://github.com/Rabbit-bot-No-002/dsh-chat-avatar) | `dsh-chat-avatar` | — | MIT | Adds an avatar to the left of each turn's final AI reply and to the right of each user message; upload your own image… |
| [dsh-sticker-board](https://github.com/sanqiPanax/dsh-sticker-board) | `sanqipanax/dsh-sticker-board` | — | — | Fridge-magnet quick-task stickers docked above the composer: one-click sends a preloaded prompt into the current… |
| [dsh-iconic-launcher](https://github.com/SkyblueeeLabs/dsh-iconic-launcher) | `skyblueeelabs/dsh-iconic-launcher` | — | — | Customize the DeepSeek Harness desktop shortcut icon: pick a preset or upload an image, auto-remove the white backdrop… |
| [tdsh-emoji](https://github.com/tianjie52009/tdsh-emoji) | `tdsh-emoji` | — | MIT | Add widely-supported Unicode emoji to DeepSeek Harness (dsh) replies; prompt-injection plugin designed to coexist with… |
| [dsh-smooth-cursor-patched](https://github.com/ThinkofRain1213/dsh-smooth-cursor-patched) | `dsh-smooth-cursor-patched` | — | MIT | Comet-mode animated caret for the DSH Web composer: a glowing trail glides to the text position, with configurable… |
| [dsh-peak-badge](https://github.com/tuoLuoSuan/dsh-peak-badge) | `tuoluosuan/dsh-peak-badge` | — | — | A chip at the left end of the composer tool row showing whether DeepSeek bills at peak or off-peak right now. Clicking… |
| [dsh-web-icon-indicator](https://github.com/waknow/dsh-web-icon-indicator) | `dsh-web-icon-indicator` | — | MIT | Browser tab favicon mirrors the DSH session state (idle / running / asking / done), recolored and animated from one… |
| [dsh-sidebar-icon-row](https://github.com/watershow666/dsh-sidebar-icon-row) | `watershow666/dsh-sidebar-icon-row` | — | — | Turns the DeepSeek Harness sidebar panel entries and footer entries into one row of icon-only squares with hover names… |
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
| [dsh-whale-animation](https://github.com/LeemanCheung/dsh-whale-animation) | `leemancheung/dsh-whale-animation` | — | — | A 60-frame theme-aware monochrome whale-dive animation with reactive water for the DSH Web turn status: embedded… |

## 数据来源

- npm registry：`registry.npmjs.org` 搜索 + `/<pkg>/latest` 元数据 + `api.npmjs.org/downloads` 周下载量。采集脚本见 [`research/fetch-decorations.mjs`](research/fetch-decorations.mjs)。
- 社区清单：[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)（本仓库只提取名称、链接与类别，描述为原文截断，未逐条改写）。解析脚本见 [`research/parse-awesome.mjs`](research/parse-awesome.mjs)。
- 合并与去重脚本：[`research/build-catalog.mjs`](research/build-catalog.mjs)。

分类由包名关键词判定，个别条目可能归错类别——发现后直接提 issue 或 PR 改表格里的归类。
