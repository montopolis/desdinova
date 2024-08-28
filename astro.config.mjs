import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import siteData from "./src/config/siteData"

export default defineConfig({
    site: siteData.url,
    trailingSlash: "never",
    integrations: [
        mdx(),
        tailwind({
            // Example: Disable injecting a basic `base.css` import on every page.
            // Useful if you need to define and/or import your own custom `base.css`.
            // applyBaseStyles: false,
        }),
        (await import("@playform/compress")).default({
            // css already compressed
            CSS: false,
            HTML: {
                "html-minifier-terser": {
                    removeAttributeQuotes: false,
                },
            },
            Image: true,
            JavaScript: true,
            SVG: true,
        }),
        sitemap(),
        icon(),
    ],
})
