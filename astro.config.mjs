// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321",
	integrations: [
		react(),
		sitemap(),
		sanity({
			projectId: "ld33nh8g",
			dataset: "production",
			useCdn: false, // for static builds
		}),
	],
	vite: {
        // @ts-ignore
		plugins: [tailwindcss()],
	},

	experimental: {
		responsiveImages: true,
		svg: true,
	},
	env: {
		schema: {
			API_URL: envField.string({
				context: "client",
				access: "public",
			}),
			EMAIL_CONTACT: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},
});
