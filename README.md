# Cable Tie B2B Showcase Site

Vue 3 + Vite 静态外贸展示站。**只做展示，没有后端和数据库**，所有内容都写在本地数据文件里。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:5173
npm run build     # 产出 dist/
npm run preview   # 本地预览打包结果
```

## 目录结构

```
cable-tie-site/
├── index.html              # SEO meta / title / og 标签
├── vercel.json             # SPA 路由重写（部署 Vercel 用）
├── public/
│   ├── favicon.svg
│   └── images/             # 所有图片放这里，文件名必须英文
│       ├── hero.png
│       ├── factory.png
│       ├── product-nylon-white.png
│       ├── product-uv-black.png
│       ├── product-releasable.png
│       ├── product-heavy-duty.png
│       └── product-stainless-steel.png
└── src/
    ├── main.js
    ├── App.vue             # Navbar + RouterView + Footer
    ├── style.css           # 全局样式（改 :root 变量即可换配色）
    ├── router/index.js     # 4 个页面路由 + SEO title/description
    ├── data/
    │   ├── site.js         # 公司信息、优势、历程、证书、FAQ、表单接口
    │   └── products.js     # 产品数据（新增产品只改这里）
    ├── components/
    │   ├── Navbar.vue
    │   └── Footer.vue
    └── pages/
        ├── Home.vue
        ├── Product.vue     # 分类筛选 + 产品详情弹窗
        ├── About.vue
        └── Contact.vue     # 询价表单
```

## 四个页面

| 路由 | 页面 | 内容 |
| --- | --- | --- |
| `/` | Home | Hero、数据条、Featured 产品、为什么选我们、工厂介绍、应用行业、合作流程、客户评价、CTA |
| `/products` | Product | 分类筛选、产品卡片、点击弹出规格详情、OEM 说明 |
| `/about` | About | 公司简介、使命愿景、发展历程时间轴、认证、QC 流程、FAQ |
| `/contact` | Contact | 联系方式卡片、询价表单、贸易条款、WhatsApp |

## 你需要替换的东西

### 1. 公司信息

编辑 `src/data/site.js`：品牌名、邮箱、电话、WhatsApp、地址、营业时间、证书、历程、优势、FAQ 等。

### 2. 产品

编辑 `src/data/products.js`，复制一个对象改字段即可，**不用新建页面**。新增图片放 `public/images/`，引用写成 `/images/xxx.png`。

### 3. 图片

直接覆盖 `public/images/` 里的同名文件即可（保持文件名不变就不用改代码）。
建议：产品图 1:1 或 4:3、单张 < 200KB、英文文件名、不带中文水印。

### 4. 配色

`src/style.css` 顶部 `:root` 里改 `--brand`（主色）、`--accent`（强调色）。

### 5. SEO

- `index.html` 里的 `title` / `description` / `keywords` / `canonical` / `og:image`
- `src/router/index.js` 里每个路由的 `meta.title` 和 `meta.description`

## 配置询价表单（Formcarry）

当前已配置：

```js
// src/data/site.js
formEndpoint: 'https://formcarry.com/s/s9LVzQT9xSS',
```

换表单时：登录 <https://formcarry.com> → 你的表单 → Endpoints → 复制 URL 替换上面这行。

想临时停止收信：把它改回空字符串 `''`，页面会自动进入 **Demo 模式**（顶部黄色提示，提交只显示本地成功，不发邮件）。

表单提交后发往 Formcarry 的字段：`name / email / company / country / phone / product / quantity / message`。
在 Formcarry 后台 → Settings → Notification 里可以开启邮件通知。

提交逻辑按 Formcarry 官方文档实现（`src/pages/Contact.vue`）：

| Formcarry 返回 | 页面表现 |
| --- | --- |
| `code === 200` | 显示成功页 |
| `code === 422` | 把 `data.errors` 逐字段显示在对应输入框下方 |
| 其它 / 网络错误 | 顶部红色提示，并给出直接发邮件的兜底地址 |

⚠️ 字段名 `email` 不要改，Formcarry 靠它识别回复地址（Reply-To）。

## 部署到 Vercel

1. 代码推到 GitHub 仓库
2. 在 Vercel 导入该仓库，Framework 选 Vite，直接 Deploy
3. `vercel.json` 已配置 SPA 重写，刷新子页面不会 404
4. Settings → Domains 绑定你自己的 .com 域名

> 每次 push 到 GitHub，Vercel 会自动重新构建部署。
