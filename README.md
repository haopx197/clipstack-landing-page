# clipstack-landing-page

Landing page cho [ClipStack](https://github.com/haopx197/electron-clipstack) — clipboard manager cho macOS.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules

## Dev

```bash
yarn install
yarn dev     # http://localhost:3000
```

## Build

```bash
yarn build
yarn start
```

Deploy: import repo lên Vercel là xong, không cần env.

## Config

Chỉnh trực tiếp trong [lib/config.ts](lib/config.ts):

| Const                | Ý nghĩa                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| `SITE_URL`           | Domain public — dùng cho canonical, OG, sitemap, JSON-LD                   |
| `APP_NAME`           | Tên hiển thị                                                               |
| `APP_VERSION`        | Version hiển thị trong JSON-LD `SoftwareApplication`                       |
| `APP_TAGLINE`        | Tagline dưới tên app                                                       |
| `APP_DESCRIPTION`    | Description cho `<meta>`, OG, JSON-LD                                      |
| `BRAND_COLOR`        | Màu primary — dùng cho icon runtime + PWA `theme_color`                    |
| `INSTALL_SCRIPT_URL` | URL script cài đặt trên GitHub Release                                     |
| `INSTALL_COMMAND`    | Command hiển thị trong `<CommandBox>` (auto sinh từ `INSTALL_SCRIPT_URL`)  |
| `MIN_MACOS_VERSION`  | macOS version tối thiểu (ví dụ `11.0`)                                     |
| `MIN_MACOS_NAME`     | Tên macOS tương ứng (ví dụ `Big Sur`)                                      |

## Đổi màu primary

Chỉ cần đổi **2 chỗ** — CSS var và const cho runtime:

- `--color-primary` trong [app/globals.css](app/globals.css) — dùng cho UI trong browser
- `BRAND_COLOR` trong [lib/config.ts](lib/config.ts) — dùng cho `app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts` (chạy edge runtime, không đọc CSS var được)

Các icon SVG (`IconLogo`, `IconKeyboard`, `IconStack`, `IconPin`, `IconShield`) mặc định lấy từ `var(--color-primary)` nên tự cập nhật theo `globals.css`.

## SEO

Đã có sẵn:

- `metadataBase`, canonical, robots, OpenGraph, Twitter card
- JSON-LD `SoftwareApplication` + `WebSite` trong [app/layout.tsx](app/layout.tsx)
- Favicon runtime tại [app/icon.tsx](app/icon.tsx) và [app/apple-icon.tsx](app/apple-icon.tsx) — sinh PNG từ SVG bằng `ImageResponse`
- `robots.txt` từ [app/robots.ts](app/robots.ts)
- `sitemap.xml` từ [app/sitemap.ts](app/sitemap.ts)
- PWA manifest từ [app/manifest.ts](app/manifest.ts)
- OG image tĩnh: `public/screenshot-og.png`

## Cấu trúc

```
app/
├── _components/              # UI components (folder có underscore = không phải route)
│   ├── button/
│   ├── button-icon/
│   ├── command-box/          # copy-to-clipboard install command
│   ├── flex/
│   ├── icons/                # SVG icons
│   └── typography/
├── globals.css               # CSS variables + reset
├── layout.tsx                # metadata + JSON-LD
├── page.tsx                  # landing content
├── page.module.css
├── not-found.tsx             # 404
├── icon.tsx                  # favicon 64×64 (edge runtime)
├── apple-icon.tsx            # apple touch icon 180×180
├── manifest.ts               # PWA manifest
├── robots.ts
└── sitemap.ts
lib/
└── config.ts                 # constants
public/
├── hero.png
├── logo.svg
└── screenshot-og.png         # OG share image
```
