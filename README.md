# Gen Z Portfolio — Next.js + RetroUI

Landing page cá nhân phong cách neo-brutalist (RetroUI) với bảng màu Gen Z pastel, tối ưu Technical SEO.

## Tech stack

- **Next.js 16** (App Router, Server Components)
- **RetroUI** + shadcn/ui
- **Tailwind CSS v4**
- SEO: Metadata API, sitemap.xml, robots.txt, JSON-LD

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Cập nhật nội dung

Chỉnh sửa file [`config/site.ts`](config/site.ts):

- `name`, `tagline`, `description` — thông tin cá nhân & SEO
- `author` — tên, email, job title
- `social` — link GitHub, LinkedIn, X, Instagram, ...
- `projects` — danh sách project (title, mô tả, tags, demo, GitHub)

Không cần sửa component UI.

## Biến môi trường

Copy `.env.example` thành `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

URL này dùng cho canonical, Open Graph, sitemap và JSON-LD.

## Deploy GitHub Pages (free)

Site URL: **https://douviiii.github.io**

### 1. Tạo repo trên GitHub

- Tên repo: **`douviiii.github.io`** (đúng username GitHub)
- Public repo

### 2. Push code

```bash
git init
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git branch -M main
git remote add origin https://github.com/douviiii/douviiii.github.io.git
git push -u origin main
```

### 3. Bật GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push lên `main` → workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) tự chạy
4. Vài phút sau site live tại `https://douviiii.github.io`

### Nếu repo tên khác (vd: `portfolio`)

Set env khi build:

```env
NEXT_PUBLIC_BASE_PATH=/portfolio
NEXT_PUBLIC_SITE_URL=https://douviiii.github.io/portfolio
```

## Deploy (Vercel) — tuỳ chọn

1. Revert `output: "export"` trong `next.config.ts` nếu muốn SSR
2. Import project trên [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` = domain production

## SEO trên GitHub Pages

GitHub Pages **ổn cho SEO** — site export ra HTML tĩnh, Google index bình thường:

- Meta tags, JSON-LD, sitemap, robots vẫn hoạt động
- HTTPS miễn phí
- URL `douviiii.github.io` hơi dài hơn custom domain nhưng **không bị phạt SEO**
- Sau này mua `douviiii.dev` → trỏ CNAME về GitHub Pages hoặc chuyển Vercel

## Checklist SEO trước khi go-live

- [ ] Cập nhật `config/site.ts` với thông tin thật
- [ ] Set `NEXT_PUBLIC_SITE_URL` đúng domain
- [ ] View page source — kiểm tra JSON-LD + meta OG
- [ ] Truy cập `/sitemap.xml` và `/robots.txt`
- [ ] Test [Google Rich Results](https://search.google.com/test/rich-results)
- [ ] Lighthouse: Performance + SEO ≥ 90

## Palette màu

| Token | Hex |
|-------|-----|
| Pale Yellow | `#FFF9D2` |
| Pale Peach | `#FFEBCC` |
| Light Sky Blue | `#BFDDF0` |
| Soft Blue | `#8CC0EB` |
