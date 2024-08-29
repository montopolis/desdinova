import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"

/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    // make sure to safelist these classes when using purge
    safelist: [
        "w-64",
        "w-1/2",
        "rounded-l-lg",
        "rounded-r-lg",
        "bg-gray-200",
        "grid-cols-4",
        "grid-cols-7",
        "h-6",
        "leading-6",
        "h-9",
        "leading-9",
        "shadow-lg",
    ],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                // Your preferred accent color
                accent: colors.indigo,
                // Your preferred gray scale
                gray: colors.slate,
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
            },
            fontFamily: {
                body: ["Aleo Variable"],
                sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
                serif: ["Aleo Variable", ...defaultTheme.fontFamily.serif],
                mono: [
                    "JetBrains Mono Variable",
                    ...defaultTheme.fontFamily.mono,
                ],
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("flowbite-typography")],
}
