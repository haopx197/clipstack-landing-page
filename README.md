# clipstack-landing-page

Landing page for [ClipStack](https://github.com/haopx197/electron-clipstack) — a clipboard manager for macOS.

Built with Next.js 16 (App Router), React 19, TypeScript, CSS Modules.

## Run

```bash
yarn install
yarn dev     # http://localhost:3000
yarn build && yarn start
```

Deploy to Vercel — no env vars needed.

## Config

All content lives in [lib/config.ts](lib/config.ts): `SITE_URL`, `APP_NAME`, `APP_TAGLINE`, `APP_DESCRIPTION`, `APP_VERSION`, `BRAND_COLOR`, `INSTALL_SCRIPT_URL`, `MIN_MACOS_VERSION`, `MIN_MACOS_NAME`.

To change the primary color, update **both**:

- `--color-primary` in [app/globals.css](app/globals.css) — browser UI
- `BRAND_COLOR` in [lib/config.ts](lib/config.ts) — edge-runtime icons & PWA manifest (can't read CSS vars)

## SEO

Metadata, OpenGraph, Twitter card, JSON-LD (`SoftwareApplication` + `WebSite`) in [app/layout.tsx](app/layout.tsx). Favicons generated at [app/icon.tsx](app/icon.tsx) and [app/apple-icon.tsx](app/apple-icon.tsx). `robots.txt`, `sitemap.xml`, and PWA manifest from their respective files in [app/](app/). OG image at `public/screenshot-og.png`.
