# Proposal B — 2026 J:COM STREAM RECAP

> J:COM LINK VOD 假想「年度觀影回顧」功能的限動風 Landing Page 設計提案。
> **概念展示用途** — 非正式產品。
> *（頁面本體為英文版，本文件為中文說明）*

---

## 一、設計概念

Proposal B 是把 Proposal A 精簡到「最能被分享的一個瞬間」：一個 mobile-first、Instagram 限動風格的年度回顧，使用者可以一頁一頁滑過去、直接發到社群。

- **Proposal A**：長篇 web 儀表板（5 章節、統計、觀影人格、分享卡片）
- **Proposal B**：兩屏定調的簡潔提案
  1. **Hero** — 品牌主張 + CTA
  2. **限動展示區** — 三支手機並排，預覽真實 in-app story 的樣子

目標是在一次滾動內傳達功能的「感覺」——可滑動、易消化、隨時可分享。

---

## 二、設計參考來源

| 參考來源 | 借用什麼 |
|---|---|
| **jcom.co.jp** | 明亮白底、品牌紅橘 `#E93817`、Pill 按鈕、圓角 token（4 / 16 / 32 / 100 px）、Noto Sans JP 字型 |
| **linkvod.myjcom.jp** | 16:9 縮圖處理、`image-transfer.saku.ottfs.com` CDN、片庫用語（見放題、TVOD 等）|
| **YouTube Recap 2025（手機限動版式）** | 三支手機並排構圖、亮色區塊內的深色限動畫布、頂端 progress pill、blob 漸層「moment」卡片、底部下載 + 分享列 |

---

## 三、整頁結構

```
┌──────────────────────────────────────────────────────┐
│ NAV — J:COM logo · Proposal A / B 切換 · Sign In      │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HERO                                                 │
│  ● 2026 J:COM STREAM RECAP                           │
│  H1  2026 J:COM STREAM RECAP                         │
│  Sub 348 hours · 127 titles · your highlight reel    │
│  [View My Recap →]  [▶ Watch Trailer]                │
│  3.24M members · 15,000 hours · 52 weeks             │
│                                                       │
│  ↓ SCROLL                                             │
├──────────────────────────────────────────────────────┤
│                                                       │
│  STORY SHOWCASE（JCOM 暖色漸層背景）                  │
│                                                       │
│  CHAPTER · YOUR STORY                                 │
│  Swipe through your 2026.                            │
│                                                       │
│   ┌──────┐   ┌──────┐   ┌──────┐                    │
│   │Phone │   │Phone │   │Phone │                    │
│   │  1   │   │  2   │   │  3   │                    │
│   │Titles│   │Moment│   │Genre │                    │
│   └──────┘   └──────┘   └──────┘                    │
│                                                       │
│  [Get Your Recap →]                                   │
│  Unlocks Dec 12, 2026                                │
├──────────────────────────────────────────────────────┤
│ FOOTER — Proposals · Support · Legal                  │
└──────────────────────────────────────────────────────┘
```

---

## 四、Hero 區

- **Slogan（eyebrow）**：`● 2026 J:COM STREAM RECAP`
- **主標 H1**：`2026 J:COM STREAM RECAP`，其中 `2026` 用 Bebas Neue + 品牌紅橘凸顯
- **副標**：
  > 348 hours on the sofa. 127 titles. Countless late-night "just one more episode."
  > Tap through your year on J:COM — a story you can share in a swipe.
- **主要 CTA**：`View My Recap →`（實心紅橘、Pill 100px）
- **次要 CTA**：`▶ Watch Trailer`（透明外框）
- **Meta 三欄**：`3,240,000+ members joined` · `15,000+ hours of stories` · `52 weeks together`

**背景細節：**
- 暖色漸層（`#FFF2F0 → #FFF`）
- 三顆動態 blur blob（橘 / 黃 / 紅橘）
- 六張白色浮動 tile 卡片，含影音 emoji（游標 parallax 追隨）
- 巨大描邊「2026」浮水印字

---

## 五、手機限動展示區 — 三支手機

### 5.1 共用手機外殼

每支手機共用同一套機殼設定：

- **尺寸**：桌面 290 × 590 px／≤1024 px 縮為 250 × 510 px
- **框體**：黑色 bezel 漸層、外圓角 46 px、內圓角 34 px
- **細節**：藥丸型瀏海、小圓孔鏡頭、電源鍵與音量鍵側邊指示
- **螢幕底色**：`#0a0a0a`

每個螢幕都由同樣四個區塊組成：

1. **Progress 進度條** — 頂端 4 段 pill；已完成 / 播放中 / 待播三種狀態；播放中的 pill 有 4.5 秒循環的 scale-X 填充動畫，模擬限動自動前進
2. **Header 列** — 左：J:COM 品牌 mark（紅橘圓角方塊＋白點）／右：三個 icon（`⋮` 更多、`🔊` 音量、`✕` 關閉）
3. **限動主體** — 每支手機內容不同（見下）
4. **底部操作列** — 圓形下載 icon（36 × 36）＋ Pill 型分享按鈕

**入場動畫**：三支手機依序 100 ms / 250 ms / 400 ms 淡入向上。
**Hover**：整支手機浮起 8 px。

---

### 5.2 Phone 1 — *Your top titles*（我的年度作品）

**版式**：直向 1–5 名排行清單，每列 = 名次 · 圓形縮圖 · 作品名。

| # | 作品名 | 縮圖來源 |
|---|---|---|
| 1 | 鬼滅の刃（鬼滅之刃） | 設計版 mockup 卡片（排版＋漸層），非取自 linkvod 公開清單 |
| 2 | Super Mario Bros. Movie | Hotlink 自 linkvod CDN |
| 3 | VIVANT — Special Edition | Hotlink 自 linkvod CDN |
| 4 | Tsumi to Aku | Hotlink 自 linkvod CDN |
| 5 | Working Man | Hotlink 自 linkvod CDN |

- 圓形縮圖 40 px，帶 1 px 半透明白色邊
- 名次數字用 Inter Bold

**Progress 狀態**：4 段中的第 2 段播放中。

---

### 5.3 Phone 2 — *Moments from your year*（年度回憶片刻）

**版式**：三張互相疊層、漸層 blob 卡片，各標記一個時段。

| 卡片 | 時段標籤 | 文案 | 漸層 |
|---|---|---|---|
| 1 | Early 2026 | Deep-dived into the VIVANT universe | 紫 → 深紫 → 靛，旋轉 −2° |
| 2 | Mid-2026 | Sunday nights were Mario nights | 黃 → 橙 → 紅，旋轉 +1.5° |
| 3 | Late 2026 | Locked in on late-night J-drama | 粉 → 紫 → 靛，旋轉 −1° |

- 每張卡片有左上角 radial highlight 內光，加柔和外陰影，做出極光感
- 卡片之間 margin-top −4 px 稍微重疊出深度

**Progress 狀態**：4 段中的第 3 段播放中。

---

### 5.4 Phone 3 — *Your top interests*（我的興趣類型）

**版式**：直向 1–5 名清單，每列 = 名次 · 類型名稱 · 水平進度條。

| # | 類型 | 進度 |
|---|---|---|
| 1 | Watching J-Drama（日劇） | 88% |
| 2 | Anime marathons（動畫馬拉松） | 72% |
| 3 | Family movie nights（家庭電影夜） | 60% |
| 4 | Overseas dramas（海外劇） | 44% |
| 5 | Late-night docs（深夜紀錄片） | 28% |

- 進度條高 3 px、透明白底、紅橘填充帶柔光
- 條末端有實心圓點（外圈 2 px 黑框），在深色底上更醒目

**Progress 狀態**：4 段中的第 4 段（最後一格）播放中。

---

## 六、Section 背景與動態

- **區塊主漸層**：160° 方向 `#e93817 → #f25a37 → #ff8f1f → #f5d200`（JCOM 紅橘 → 夕陽黃）
- **裝飾 blob**：手機後方三顆大型模糊圓（粉、紫、青綠），22–55% 透明度，22 秒漂浮循環
- **Chapter 標籤**：半透明白色 pill＋backdrop blur — `CHAPTER · YOUR STORY`
- **H2**：白字，其中 `your 2026` 強調為柔黃 `#ffe27a`

---

## 七、底部 CTA

- 純白 Pill 按鈕，紅橘文字 — `Get Your Recap →`
- Hover：淡淡暖色底
- 補充說明：`Full recap unlocks in the J:COM LINK VOD app · Available Dec 12, 2026`

---

## 八、Design Tokens（與 Proposal A 共用）

```
色彩
  --jcom-primary        #E93817   （品牌紅橘）
  --jcom-primary-dark   #D9161B
  --jcom-primary-soft   #FFF2F0
  --jcom-yellow         #F5D200
  文字主色              #333333
  文字次色              #666666

圓角
  4 / 16 / 32 / 100 px

字型
  Inter · Noto Sans JP · Bebas Neue（大數字展示用）
```

---

## 九、檔案清單

| 檔案 | 用途 |
|---|---|
| `index.html` | Proposal A — 完整年度回顧（5 章節） |
| `proposal-b.html` | **Proposal B — 限動展示（本文件對應）** |
| `styles.css` | 共用樣式；手機限動樣式追加於 1606 行後 |
| `app.js` | 共用 JS；透過 ID 檢查自動 no-op，Proposal B 內不需的功能會靜默跳過 |
| `proposal-b.md` | 本設計文件（中文說明） |

---

## 十、A / B 選型建議

| 選 Proposal A 的情境 | 選 Proposal B 的情境 |
|---|---|
| 想要豐富、可瀏覽的網頁儀表板 | 想要 mobile-first、社群導向的一擊 |
| 目標是留存與探索（讀、點、逛） | 目標是擴散與病毒式分享（截圖、發限動） |
| 多方利害關係人都想有自己的指標露出 | 主打社群與 App UX 的發表活動 |
| 有媒體頁面可以承載長篇故事 | 注意力短暫，5 秒內要打中 |

兩案共用同一組 tokens，也可以一起交付：Proposal B 當發表活動頁，Proposal A 作為「See full recap on web」的目的頁。

---

## 十一、素材與版權說明

- **作品名稱**：以片名事實引用（例如 *VIVANT*、*Super Mario Bros. Movie*）
- **縮圖**：全部從 JCOM 自家 CDN（`image-transfer.saku.ottfs.com`）hotlink 引用，本專案資料夾內不留任何圖片檔
- **鬼滅之刃**：概念製作當下 linkvod 首頁未見公開縮圖，改以設計版 mockup 卡代表，明確標示 `MOCKUP COVER`
- **字型**：Google Fonts — Inter、Noto Sans JP、Bebas Neue
- **Icon**：全部使用 inline SVG，無外部 icon library

本概念屬提案 mockup，與 J:COM Co., Ltd. 無關聯亦未受其背書。對外發布前請替換或更新所有素材。

---

## 十二、如何預覽

1. 用瀏覽器直接開啟 `proposal-b.html`
2. Nav 列可切換到 `Proposal A` 對照完整版
3. 手機三張限動卡的 progress pill 動畫每 4.5 秒循環一次
4. 桌面尺寸下三支手機並排；≤900 px 自動改為直向堆疊
