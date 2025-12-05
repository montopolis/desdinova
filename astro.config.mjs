import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import desdinovaConfig from './src/config/desdinova-config.ts';

export default defineConfig({
	site: desdinovaConfig.url,
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		mdx(),
		pagefind(),
		(await import('@playform/compress')).default({
			// css already compressed
			CSS: false,
			HTML: {
				'html-minifier-terser': {
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
});
