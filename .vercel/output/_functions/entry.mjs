import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_W4ajzhnU.mjs';
import { manifest } from './manifest_0LtI6YHS.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agenda.astro.mjs');
const _page2 = () => import('./pages/api/email/_email_.json.astro.mjs');
const _page3 = () => import('./pages/api/trigger-deploy.astro.mjs');
const _page4 = () => import('./pages/caviste.astro.mjs');
const _page5 = () => import('./pages/concept.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/cuisine.astro.mjs');
const _page8 = () => import('./pages/en/agenda.astro.mjs');
const _page9 = () => import('./pages/en/caviste.astro.mjs');
const _page10 = () => import('./pages/en/concept.astro.mjs');
const _page11 = () => import('./pages/en/contact.astro.mjs');
const _page12 = () => import('./pages/en/cuisine.astro.mjs');
const _page13 = () => import('./pages/en/equipe.astro.mjs');
const _page14 = () => import('./pages/en.astro.mjs');
const _page15 = () => import('./pages/equipe.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.2_jiti@2.4.2_lightningcss@1.28.2_rollup@4.30.0_terser@5.37.0_typescript@5.7.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agenda.astro", _page1],
    ["src/pages/api/email/[email].json.ts", _page2],
    ["src/pages/api/trigger-deploy.ts", _page3],
    ["src/pages/caviste.astro", _page4],
    ["src/pages/concept.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/cuisine.astro", _page7],
    ["src/pages/en/agenda.astro", _page8],
    ["src/pages/en/caviste.astro", _page9],
    ["src/pages/en/concept.astro", _page10],
    ["src/pages/en/contact.astro", _page11],
    ["src/pages/en/cuisine.astro", _page12],
    ["src/pages/en/equipe.astro", _page13],
    ["src/pages/en/index.astro", _page14],
    ["src/pages/equipe.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0ef8fc6c-da77-462b-9b10-284711d20f51",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
