# Desdinova

## Objectives

- Provide a modern, clean and simple website starting point for non-designers
- Quickly build and deploy a basic small Astro website
- Opinionated for use with Tailwind CSS, Flowbite, and Cloudflare Pages
- Minimize external and 3rd-party dependencies
- Ideally 100s on Lighthouse
- Help unblock anyone new to Astro and/or Cloudflare Pages
- F R E E !
- F A S T !

## Features

- automatic light & dark mode support
- responsive
- automatic robots.txt and sitemap.xml generation
- seo
- basic blog
- includes some free Flowbite blocks setup & optimized (its absolutely worth paying for to get access to ALL blocks!)
- video embed capability (YouTube and Vimeo, Twitter/X is also supported by does that still work?)
- embed icons from Iconify

## To Do

- ~~page title support~~
- ~~Blog posts and post~~
- ~~privacy policy~~
- ~~announcement banner~~
- ~~social media links~~
- ~~add staging area support~~
- ~~blog post show category~~
- related blog posts
- paginate blog posts
- blog post tags
- blog post reading time

## Future ideas

- easier color palettes

## First Steps (deployed publicly in 10 minutes!)

1. Copy this repo into a folder (no other install needed)
1. Initialize as a git repo on Github or Gitlab (Bitbucket is not supported by Cloudflare Pages)
2. run `npm install`
1. Update `astro.config.mjs`

- update SITE_* variables
- update `site:`

2. Update Logo
2. Update Favicon
2. Update Font (if necessary)
2. Update Colors (if necessary)
3. run `npm run dev` to test site locally
3. When finished commit all and push to Git
3. Setup Cloudflare Pages
4. Fin!

## Second Steps

1. Customize Top Menu in `TopMenu.astro`
2. Customize Bottom Menu in `BottomMenu.astro`
3. Add any needed scripts to `Analytics.astro`
4. Update `index.astro` - this is your home page
5. Ideally `/src/components/_core` will remain untouched to make future updates easier

## Adding a new page (aka A Basic Flowbite Workflow)

1. Copy `_starterPage.astro` to a new file
1. Update `pageTitle` and `pageDescription` in `<Layout pageTitle="_starter" pageDescription="_starter Page">`
1. Find a component or block on https://flowbite.com that you want to use
1. Click "Copy Code" (you do not need the CSS)
1. Paste inside `<Layout></Layout>`
1. Customize
1. Review, Edit, and Repeat until happy
1. Add page to the Top or Bottom Menu, or as a hyperlink somewhere else on the site

----

## Setup Cloudflare Pages for testing

1. Sign in/Sign up at https://dash.cloudflare.com
2. Go to Workers & Pages
3. Click "Create"
4. Go to Pages tab
5. Click "Connect to Git"
6. Connect your Git
7. Select your repo
8. Click "Begin Setup"
9. Leave all defaults EXCEPT change "Framework Preset" to "Astro"
10. Click "Save and Deploy"
11. Fin!

## Setup Cloudflare Pages for your Domain

1. Your DNS needs to be on Cloudflare for this to work?
2. Go to Workers & PagesYou need to have done "Setup Cloudflare Pages for testing" and everything working
2. Go to Workers & Pages
3. Click on your Site
4. Click on "Custom Domains" tab
5. Click "Setup a custom domain"
6. Type in the name of your website (ex. www.mywebsite.com or mywebsite.com)
7. Click "Continue"
8. Click "Activate Domain" if everything is correct
9. Wait 5-60 minutes for Cloudflare do its DNS & SSL magic
10. Fin!
11. NOTE: If you want to support non-www and www access to the same domain it might be best to setup a custom Cloudflare
    Redirect Rule (https://community.cloudflare.com/t/redirect-the-www-to-non-www/558655)

## Update Logo

- replace `/src/images/logo-square.png` with your square logo
- replace `/src/images/logo.png` with your logo

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

- ...

## Updating Astro

- Stash any pending git updates so you have a clean slate
- run `npx @astrojs/upgrade` to upgrade astro 1st party packages
- be aware of breaking changes or live dangerously and try it anyway!
- you can now optionally run `npm run update` to update non-astro packages
- run `npm run astro check` to make sure no errors
- test site using `npm run preview`
- if all works, commit and push!
- I'll do my best to keep Desdinova up to date with upstream updates

## How to port Desdinova updates to your site

- this is tricky 😬
- if your site is working and building properly, don't worry about it 😅

### Update approaches:

1. (easy) if you have limited your updates to only the `/src/pages` folder you can copy everything else over, re-run
   `npm install` and validate
1. (tricky) apply individual updates from Desdinova repo into yours as needed
1. (reboot option) pull down a new copy of Desdinova and refactor your old site into it (this is probably what I will be
   doing once a year for my sites)
1. more than likely I'll just Update Astro (using method included in README), Tailwind and Flowbite, and third party
   packages as needed

## Images

- images put in `src/assets/images` will be optimized by Astro if they are imported
- https://docs.astro.build/en/guides/images/#where-to-store-images
- otherwise put images in `/public`

## Scripts (ex. Analytics, etc.)

- put any scripts you need in `Analytics.astro`

## STAGING/PRODUCTION environments support

If you create a `BUILD_MODE` .ENV variable on Cloudflare Pages or locally you can conditionally render code/scripts as
required.

This allows you to conditionally include scripts or HTML as needed per Environment.

```javascript
{
    import.meta.env.BUILD_MODE === "production" && (
        <script>// add scripts here for production only</script>
    )
}
```

```javascript
{
    import.meta.env.BUILD_MODE === "production" && (
        <b>Or put HTML code which only renders for production</b>
    )
}

```

-----

## Links to dependencies

- Astro https://docs.astro.build
- Astro SEO https://github.com/onwidget/astrolib/tree/main/packages/seo
- Astro Sitemap https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astro Icon https://github.com/natemoo-re/astro-icon#readme
- Astro Embed - https://astro-embed.netlify.app/getting-started/
- Playform Compress https://github.com/PlayForm/Compress
- Fontsource https://fontsource.org/docs/getting-started/introduction
- Tailwind https://tailwindcss.com
- Flowbite https://flowbite.com/blocks/
- Flowbite Typography https://flowbite.com/docs/components/typography/
- Iconify https://icon-sets.iconify.design/
- Privacy Policy https://github.com/ArthurGareginyan/privacy-policy-template

-----

## Desdinova?!?

https://en.wikipedia.org/wiki/Astronomy_(song)

One of my all-time favorite Blue Öyster Cult songs!

When I was in middle school the original studio and live versions were in constant rotation either on vinyl or cassette
tape. I was lucky to see them many times in high school.

I was 17 when the 1988 version dropped on the album Imaginos, which is a SPECTACULAR redo of the song, along with the
entire album. Imaginos is still in rotation for me.

```text
Call me Desdinova
Eternal light
These gravely digs of mine
Will surely prove a sight
```

-----

## HUGE THANKS TO

1. The **Astro** team for their **AMAZING** work
2. The **Tailwind** team for their **AMAZING** work
3. The **Flowbite** team for their **AMAZING** work
4. The **Iconify** team for their **AMAZING** work
4. The **Cloudflare Pages** team for their **AMAZING** work

If you found this repo helpful for your Astro journey please give it a STAR!

Pull requests welcomed!

I hope you are happy, healthy and secure 🤗

Maintain,

Babul