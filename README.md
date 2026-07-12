# airdb.vc

AirDB Ventures 官网 — 立足海南三亚的早期基金，投资中国大陆一人公司（OPC）
与「一带一路」沿线国家的超级个体企业。

## 1. 内容结构（单页）

| 区块 | 内容 |
|------|------|
| Hero | 品牌主张「投资一个人的公司」，三亚 · 海南自贸港身份 |
| 壹 · 我们的信念 | AI 时代超级个体论点：AI 杠杆 / 一人公司制度 / 数字丝路市场 |
| 贰 · 投资范围 | 两大支柱：境内 OPC + 一带一路沿线一人公司，附城市走马灯 |
| 叁 · 为什么在三亚 | 自贸港 15% 企业所得税、QFLP、区位、人才流动（含免责说明） |
| 肆 · 投资流程 | 提交 → 初谈 → 尽调 → 决策 → 投后 |
| 联系 | hello@airdb.vc + 合规免责声明 |

## 2. 设计

东方编辑风：宣纸底色 / 墨色衬线 / 朱砂印章红 / 鎏金点缀。
以汉字「一」为贯穿视觉母题（一人公司、一带一路）。
全部使用系统中文字体栈（宋体系），不加载外部字体，大陆访问友好。

## 3. 本地开发

```sh
make install   # pnpm install --frozen-lockfile
make run       # pnpm dev
make build     # pnpm build
```

## 4. 技术方案

| 项 | 选型 | 理由 |
|----|------|------|
| 框架 | **Astro 7**（静态输出） | 内容型官网首选：零 JS 起步、性能极佳、SEO 友好 |
| 包管理 | pnpm | 已定 |
| 构建/任务 | Makefile（`make install / run / build`） | 已定，保持现状 |
| 样式 | 自定义 CSS（`src/styles/global.css`，CSS 变量设计令牌） | 定制排版（竖排、text-stroke、印章）用原生 CSS 更直接，少一个依赖 |
| 交互点缀 | 原生 IntersectionObserver 滚动显现 + CSS 走马灯动画 | 不引入重型依赖，尊重 prefers-reduced-motion |
| 部署 | GitHub Pages（`.github/workflows/deploy-docs.yml`，CNAME airdb.vc） | 已配置 |
