# Desdinova

## Objectives

- Quickly build and deploy a basic small Astro website
- Opinionated for use with Tailwind CSS, Flowbite, Cloudflare Pages
- Minimize external and 3rd-party dependencies
- F A S T !

## Features

- light & dark mode support
- responsive
- automatic robots.txt and sitemap.xml generation
- includes free Flowbite blocks (its worth paying )
- astro view transitions enabled
- video embed capability
- embed icons from Iconify

## Left To Do

~~- page title support~~
~~- Blog posts and post~~
~~- privacy policy~~
~~- announcement banner~~
~~- social media links~~
~~- add staging area support~~
~~- blog post show category~~

- related blog posts
- paginate blog posts

- blog post tags
- blog post reading time

## Future ideas

- easier color palettes

## First Steps

1. Update `astro.config.mjs`

- update SITE_TITLE
- update SITE_DESCRIPTION
- update `site:`

2. Update Favicon
3. Update Font
4. Update Colors

## Update Favicon

### Modern Way to implement Favicon 🤩

https://realfavicongenerator.net/svg-favicon/

- update `favicon.svg` and `favicon.png` in `/public`
- NOTE: `Head.astro` contains Favicon code

## Update Font

### method #1 via fontsource with font bundled into site

- add font to `package.json` from https://fontsource.org
- import font in `Head.astro`

### method #2 via google fonts (recommend enabling Cloudflare Fonts)

- add font in `Head.astro`

### all methods

- update font in `Layout.astro` in CSS styles at the bottom of the file
- update font in `tailwind.config.mjs`

## Update Colors

`tailwind.config.mjs`

## Images

- images put in `src/assets/images` will be automatically optimized by Astro

## Scripts (ex. Analytics, etc.)

- put any scripts you need in `Head.astro` or `Foot.astro`

## STAGING/PRODUCTION environments support

If you create a `BUILD_MODE` env variable on Cloudflare Pages you can conditionally render code/scripts as required.

Example: I don't want to enable analytics scripts in STAGING but I do want them for PRODUCTION.

## Links to dependencies

- Privacy Policy https://github.com/ArthurGareginyan/privacy-policy-template
- Playform Compress https://github.com/PlayForm/Compress
- Fontsource https://fontsource.org/
- Flowbite https://flowbite.com/blocks/
- Flowbite Typography https://flowbite.com/docs/components/typography/
- Iconify https://icon-sets.iconify.design/
- Astro SEO https://github.com/onwidget/astrolib/tree/main/packages/seo
- Astro Sitemap https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astro Icon https://github.com/natemoo-re/astro-icon#readme
- Astro Embed - https://astro-embed.netlify.app/getting-started/
