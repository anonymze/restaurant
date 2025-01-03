// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
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
		},
	},
});
