# ZFT Group Website / ZFT 集团官网项目

## 1. Project Overview / 项目概览

**EN**  
This is a React + Vite static website project for ZFT Group.  
The homepage is organized into key business sections and supports multiple bottom-sheet detail pages with custom animations and responsive behavior.

**中文**  
这是一个基于 React + Vite 的 ZFT Group 静态官网项目。  
首页按业务模块划分，并支持多个底部弹出页面（bottom sheet）、自定义动画和响应式适配。

---

## 2. Tech Stack / 技术栈

**EN**
- React
- Vite
- CSS (modularized by page / section)

**中文**
- React
- Vite
- CSS（按页面/模块拆分管理）

---

## 3. Quick Start / 快速开始

### 3.1 Install Dependencies / 安装依赖

```bash
npm install
```

### 3.2 Start Dev Server / 启动开发环境

```bash
npm run dev
```

### 3.3 Build for Production / 生产构建

```bash
npm run build
```

### 3.4 Preview Build / 预览构建结果

```bash
npm run preview
```

---

## 4. Project Structure / 目录结构

```text
ZFTGroup/
├── public/                 # static assets / 静态资源（图片、logo、icon）
├── src/
│   ├── components/         # shared components / 通用组件
│   ├── data/               # data config / 文案与数据配置
│   ├── pages/              # page modules / 页面模块
│   │   ├── home/
│   │   ├── our-brand/
│   │   ├── our-actions/
│   │   ├── global-presence/
│   │   ├── cooperation-investment/
│   │   └── join-us/
│   ├── styles/pages/       # page-level css / 页面级样式文件
│   └── main.jsx            # app entry / 入口文件
├── index.html
├── package.json
└── vite.config.js
```

---

## 5. Key UI Behavior / 关键交互说明

**EN**
- Homepage sections are collapsible.
- Cards open bottom-sheet pages.
- Bottom-sheet supports open/close animations and long-content scrolling.
- Section/card interactions include hover effects and transition timing tuning.

**中文**
- 首页各 section 支持展开/收起。
- 卡片可触发底部弹出页（bottom sheet）。
- 弹出页支持开合动画与长内容滚动。
- section/card 交互包含 hover 效果及动画节奏微调。

---

## 6. Asset Management Rules / 素材管理规则

**EN**
- Put image assets in `public/`.
- Use stable file names for replacement (example: `bh.png`, `hos.png`, etc.).
- If you update an asset but browser still shows old content, hard refresh or add version query (example: `image.png?v=20260302`).

**中文**
- 图片资源统一放在 `public/`。
- 建议使用稳定命名进行替换（例如：`bh.png`、`hos.png`）。
- 若替换后浏览器仍显示旧图，可强制刷新或加版本参数（例如：`image.png?v=20260302`）。

---

## 7. CSS Organization Suggestion / CSS 组织建议

**EN**
- Keep global base styles in shared files.
- Keep each sheet/page style in its own CSS file under `src/styles/pages/`.
- Reusable layout patterns should be extracted as template styles.

**中文**
- 全局基础样式放共享文件。
- 每个弹窗页/页面在 `src/styles/pages/` 维护独立 CSS。
- 可复用布局建议抽成模板样式，避免重复维护。

---

## 8. Git Workflow / Git 使用流程

### 8.1 Check Changes / 查看改动

```bash
git status
git diff
```

### 8.2 Commit / 提交

```bash
git add .
git commit -m "your message"
```

### 8.3 Push / 推送

```bash
git push origin main
```

---

## 9. Maintenance Notes / 维护注意事项

**EN**
- Prefer preserving existing spacing, typography, and animation tokens when editing UI.
- For new popup pages, follow existing sheet structure for consistency.
- Keep bilingual content updates synchronized between Chinese and English.

**中文**
- 调整 UI 时优先保持既有的间距、字重与动画参数规范。
- 新增弹窗页建议复用现有 sheet 结构，保持一致性。
- 中英文文案更新建议同步维护，避免信息不一致。

---

## 10. License / 许可证

**EN**  
Internal project for ZFT Group website development.

**中文**  
本项目用于 ZFT Group 官网开发与维护（内部使用）。
