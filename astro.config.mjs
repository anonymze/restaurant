// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321",
	output: "static",
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
			SENDGRID_API_KEY: envField.string({
				context: "client",
				access: "public",
			}),
			SENDGRID_EMAIL_RESERVATION_NOTIFICATION: envField.string({
				context: "client",
				access: "public",
			}),
			// VERCEL_PROJECT_ID: envField.string({
			// 	context: "client",
			// 	access: "public",
			// }),
		},
	},
});
