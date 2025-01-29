// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";
import react from "@astrojs/react";


import simpleStackQuery from "simple-stack-query";


// https://astro.build/config
export default defineConfig({
    i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
    site: "https://www.mauvaise-herbe-restaurant.fr",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    output: "static",
    integrations: [react(), sitemap(), sanity({
        projectId: "ld33nh8g",
        dataset: "production",
        useCdn: false, // for static builds, better for development when content changes frequently
		}), simpleStackQuery()],
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
            EMAIL_CONTACT: envField.string({
                context: "client",
                access: "public",
            }),
        },
    },
});