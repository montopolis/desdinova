import {defineConfig} from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"

export const darkMode = "media"
export const SITE_URL = "https://astro.build" // set site URL and update site below also
export const SITE_TITLE = "Desdinova"
export const SITE_DESCRIPTION = "Built using Desdinova in Astro"
// SITE_BACKGROUND_COLOR is color of canvas behind everything else
export const SITE_BACKGROUND_COLOR = "bg-white dark:bg-gray-800"
export const ACTIVE_LINK =
    "flex items-center justify-center py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
export const INACTIVE_LINK =
    "flex items-center justify-center py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-800 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"

// https://astro.build/config
export default defineConfig({
    site: "https://astro.build",
    integrations: [
        mdx(),
        tailwind({
            // Example: Disable injecting a basic `base.css` import on every page.
            // Useful if you need to define and/or import your own custom `base.css`.
            // applyBaseStyles: false,
        }),
        (await import("@playform/compress")).default({
            CSS: false,
            HTML: {
                "html-minifier-terser": {
                    removeAttributeQuotes: false,
                },
            },
            Image: false,
            JavaScript: false,
            SVG: false,
        }),
        sitemap(),
        icon(),
    ],
})
