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

### Admin CMS (Firebase)

Trang **`/admin`** cho phép chỉnh Hero, About, Projects, v.v. qua Firestore — phù hợp static export trên GitHub Pages.

1. Tạo project tại [Firebase Console](https://console.firebase.google.com/)
2. Bật **Authentication** → Email/Password → tạo 1 user admin
3. Bật **Firestore** → tạo database
4. Deploy rules từ [`firestore.rules`](firestore.rules) — thay `REPLACE_WITH_YOUR_FIREBASE_UID` bằng UID của user admin (xem trong Authentication → Users)
5. Copy Firebase web config vào `.env.local` (xem `.env.example`)
6. Set `NEXT_PUBLIC_ADMIN_UID` = UID admin
7. Chạy `npm run dev` → mở `/admin` → đăng nhập → **Save changes**

**Production:** thêm Firebase env vào hosting provider (Vercel, v.v.) — không còn auto-deploy GitHub Pages.

Lần đầu save sẽ tạo document `portfolio/main` trên Firestore. Site public tự sync realtime (không cần rebuild).

**Lưu ý SEO:** meta title/description trong HTML vẫn lấy từ `config/site.ts` lúc build. Nội dung sections trên trang chủ cập nhật ngay từ Firestore.

## Deploy GitHub Pages

Site URL: **https://v13tdu0119.github.io**

Repo: **`v13tdu0119.github.io`** (đúng username GitHub hiện tại)

1. Push lên `main` → workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) tự build & deploy
2. Repo → **Settings** → **Pages** → Source: **GitHub Actions**
3. Set secrets Firebase (nếu dùng admin): `NEXT_PUBLIC_FIREBASE_*`, `NEXT_PUBLIC_ADMIN_UID`

```env
NEXT_PUBLIC_SITE_URL=https://v13tdu0119.github.io
```

## SEO khi go-live

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
