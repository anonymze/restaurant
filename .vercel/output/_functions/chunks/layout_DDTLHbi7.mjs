import { createClient } from '@sanity/client';
import { g as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, d as renderScript, u as unescapeHTML, s as spreadAttributes, m as maybeRenderHead, a as renderComponent, F as Fragment, h as renderSlot, i as renderHead } from './astro/server_DqiDRrON.mjs';
/* empty css                          */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$Image } from './_astro_assets_PivPFLDd.mjs';
import { motion } from 'framer-motion';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"ld33nh8g","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

const $$Astro$2 = createAstro("http://localhost:4321");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/ano/dev/pro/restaurant/node_modules/.pnpm/astro@5.1.2_jiti@2.4.2_lightningcss@1.28.2_rollup@4.30.0_terser@5.37.0_typescript@5.7.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ano/dev/pro/restaurant/node_modules/.pnpm/astro@5.1.2_jiti@2.4.2_lightningcss@1.28.2_rollup@4.30.0_terser@5.37.0_typescript@5.7.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== void 0 && props.width === void 0 && props.height === void 0) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const FlagEN = createSvgComponent({"meta":{"src":"/_astro/flag-en.BQBM_Em6.svg","width":512,"height":512,"format":"svg"},"attributes":{"mode":"inline","id":"Layer_1","x":"0px","y":"0px","class":"size-7","viewBox":"0 0 512 512","style":"enable-background:new 0 0 512 512;","xml:space":"preserve"},"children":"\r\n<path style=\"fill:#103B9B;\" d=\"M469.058,421.161H42.942c-19.155,0-34.684-15.528-34.684-34.684V125.523\r\n\tc0-19.155,15.528-34.684,34.684-34.684h426.115c19.155,0,34.684,15.528,34.684,34.684v260.954\r\n\tC503.741,405.632,488.213,421.161,469.058,421.161z\" />\r\n<path style=\"fill:#FFFFFF;\" d=\"M467.957,90.839h-44.608L256,202.405L88.65,90.839H39.271c-17.128,0-31.014,13.886-31.014,31.014\r\n\tv22.581L175.607,256L8.259,367.566v18.911c0,19.155,15.528,34.684,34.684,34.684H88.65L256,309.594l167.35,111.566h46.809\r\n\tc18.548,0,33.583-15.035,33.583-33.583v-20.012L336.392,256l167.35-111.566v-17.81C503.741,106.86,487.72,90.839,467.957,90.839z\" />\r\n<path style=\"fill:#ED1F34;\" d=\"M20.817,412.787c6.169,5.219,14.142,8.373,22.856,8.373h18.179l220.945-147.296l208.385,138.923\r\n\tl12.547-26.569c0-0.011,0.001-0.022,0.001-0.033L282.487,238.341L491.181,99.211c-6.169-5.219-14.142-8.373-22.856-8.373h-18.18\r\n\tL229.214,238.142L20.817,99.211c-7.679,6.496-12.559,16.199-12.559,27.045v0.337l220.659,147.461L20.817,412.787z\" />\r\n<g>\r\n\t<path style=\"fill:#121B21;\" d=\"M229.214,246.401c-1.597,0-3.193-0.462-4.58-1.387L16.237,106.082\r\n\t\tc-3.794-2.529-4.82-7.657-2.29-11.451c2.529-3.794,7.658-4.819,11.451-2.29l203.816,135.877L445.566,83.968\r\n\t\tc3.794-2.53,8.923-1.504,11.451,2.29c2.53,3.794,1.504,8.922-2.29,11.452L233.795,245.013\r\n\t\tC232.408,245.938,230.811,246.401,229.214,246.401z\" />\r\n\t<path style=\"fill:#121B21;\" d=\"M503.734,394.452c-1.578,0-3.171-0.45-4.58-1.393L277.899,245.207\r\n\t\tc-2.295-1.534-3.671-4.111-3.67-6.871s1.382-5.336,3.678-6.866L486.601,92.341c3.794-2.529,8.922-1.504,11.451,2.29\r\n\t\tc2.53,3.794,1.504,8.922-2.29,11.452L297.363,238.348l210.967,140.978c3.792,2.535,4.812,7.662,2.277,11.454\r\n\t\tC509.016,393.164,506.399,394.452,503.734,394.452z\" />\r\n\t<path style=\"fill:#121B21;\" d=\"M61.86,429.419c-2.669,0-5.287-1.292-6.878-3.679c-2.53-3.794-1.504-8.922,2.29-11.452\r\n\t\tl220.943-147.296c2.775-1.85,6.387-1.849,9.161,0l208.386,138.923c3.794,2.53,4.82,7.657,2.29,11.452\r\n\t\tc-2.53,3.794-7.658,4.819-11.451,2.29L282.797,283.79L66.434,428.031C65.025,428.97,63.434,429.419,61.86,429.419z\" />\r\n\t<path style=\"fill:#121B21;\" d=\"M20.825,421.046c-2.669,0-5.287-1.292-6.878-3.679c-2.53-3.794-1.504-8.922,2.29-11.452\r\n\t\tl197.806-131.87L3.67,133.459c-3.792-2.535-4.812-7.662-2.277-11.454c2.532-3.792,7.662-4.812,11.453-2.278l220.659,147.461\r\n\t\tc2.295,1.534,3.671,4.111,3.67,6.871c-0.001,2.759-1.382,5.336-3.678,6.866L25.398,419.659\r\n\t\tC23.991,420.597,22.399,421.046,20.825,421.046z\" />\r\n</g>\r\n<polygon style=\"fill:#FFFFFF;\" points=\"503.741,211.406 300.593,211.406 300.593,90.839 211.407,90.839 211.407,211.406 \r\n\t8.259,211.406 8.259,300.593 211.407,300.593 211.407,421.161 300.593,421.161 300.593,300.593 503.741,300.593 \" />\r\n<polygon style=\"fill:#ED1F34;\" points=\"503.741,232.051 279.948,232.051 279.948,90.839 232.052,90.839 232.052,232.051 \r\n\t8.259,232.051 8.259,279.948 232.052,279.948 232.052,421.161 279.948,421.161 279.948,279.948 503.741,279.948 \" />\r\n<path style=\"fill:#121B21;\" d=\"M468.323,82.581H43.677c-24.083,0-43.676,19.592-43.676,43.676v259.487\r\n\tc0,24.083,19.594,43.676,43.676,43.676h424.646c24.083,0,43.676-19.592,43.676-43.676V126.256\r\n\tC511.999,102.173,492.406,82.581,468.323,82.581z M495.483,126.256v97.536H288.206V99.097h180.117\r\n\tC483.299,99.097,495.483,111.28,495.483,126.256z M43.677,99.097h180.117v124.697H16.517v-97.536\r\n\tC16.517,111.28,28.7,99.097,43.677,99.097z M16.517,385.742v-97.536h207.277v124.697H43.677\r\n\tC28.7,412.903,16.517,400.718,16.517,385.742z M468.323,412.903H288.206V288.206h149.471c4.562,0,8.258-3.697,8.258-8.258\r\n\ts-3.696-8.258-8.258-8.258H279.948c-4.562,0-8.258,3.697-8.258,8.258v132.955H240.31V279.948c0-4.561-3.696-8.258-8.258-8.258\r\n\tH16.517v-31.381h215.535c4.562,0,8.258-3.697,8.258-8.258V99.097h31.381v132.955c0,4.561,3.696,8.258,8.258,8.258h215.535v31.381\r\n\th-24.774c-4.562,0-8.258,3.697-8.258,8.258s3.696,8.258,8.258,8.258h24.774v97.536C495.483,400.718,483.299,412.903,468.323,412.903\r\n\tz\" />\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n"});

const FlagFR = createSvgComponent({"meta":{"src":"/_astro/flag-fr.X0rGiExJ.svg","width":512,"height":512,"format":"svg"},"attributes":{"mode":"inline","id":"Layer_1","x":"0px","y":"0px","class":"size-7","viewBox":"0 0 512 512","style":"enable-background:new 0 0 512 512;","xml:space":"preserve"},"children":"\r\n<rect x=\"173.419\" y=\"90.839\" style=\"fill:#FFFFFF;\" width=\"165.161\" height=\"330.323\" />\r\n<path style=\"fill:#164FCE;\" d=\"M173.419,90.839v330.323H45.144c-20.371,0-36.886-16.515-36.886-36.886V127.725\r\n\tc0-20.371,16.515-36.886,36.886-36.886H173.419z\" />\r\n<path style=\"fill:#ED1F34;\" d=\"M503.742,127.725v256.551c0,20.371-16.515,36.886-36.886,36.886H338.581V90.839h128.275\r\n\tC487.227,90.839,503.742,107.354,503.742,127.725z\" />\r\n<path style=\"fill:#121B21;\" d=\"M468.324,82.581H43.676C19.593,82.581,0,102.173,0,126.257v259.487\r\n\tc0,24.083,19.593,43.675,43.676,43.675h424.648c24.082,0,43.675-19.593,43.675-43.676V126.257\r\n\tC512,102.173,492.406,82.581,468.324,82.581z M16.516,385.743V126.257c0-14.977,12.183-27.16,27.16-27.16h121.485v313.806H43.676\r\n\tC28.7,412.903,16.516,400.72,16.516,385.743z M495.484,385.743c0,14.977-12.183,27.16-27.16,27.16H346.839V189.935\r\n\tc0-4.561-3.696-8.258-8.258-8.258s-8.258,3.697-8.258,8.258v222.968H181.677V99.097h148.645v57.806c0,4.561,3.696,8.258,8.258,8.258\r\n\ts8.258-3.697,8.258-8.258V99.097h121.485c14.977,0,27.16,12.183,27.16,27.16V385.743z\" />\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n"});

const LogoComplete = new Proxy({"src":"/_astro/logo_complete.BFDVD8C2.webp","width":1918,"height":973,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/logo_complete.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentUrl = Astro2.url.pathname;
  const navigation = [
    { name: "Concept", href: currentUrl.startsWith("/en") ? "/en/concept" : "/concept" },
    { name: "Cuisine", href: currentUrl.startsWith("/en") ? "/en/cuisine" : "/cuisine" },
    { name: "Equipe", href: currentUrl.startsWith("/en") ? "/en/equipe" : "/equipe" },
    { name: "Caviste", href: currentUrl.startsWith("/en") ? "/en/caviste" : "/caviste" },
    { name: "Agenda", href: currentUrl.startsWith("/en") ? "/en/agenda" : "/agenda" },
    { name: "Contact", href: currentUrl.startsWith("/en") ? "/en/contact" : "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm"> <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8" aria-label="Navigation principale"> <div class="flex lg:flex-1"> <a${addAttribute(currentUrl.startsWith("/en") ? "/en" : "/", "href")} class="-m-1.5 p-1.5"> <span class="sr-only">Votre Restaurant</span> <span class="flex items-center gap-2 text-2xl whitespace-nowrap font-serif text-stone-800">${renderComponent($$result, "Image", $$Image, { "src": LogoComplete, "alt": "Logo du restaurant", "class": "w-auto h-12" })}</span> </a> </div> <div class="flex lg:hidden"> <button type="button" id="menu-open" class="-m-2.5 inline-flex items-center justify-center p-2.5 text-stone-700"> <span class="sr-only">Ouvrir le menu principal</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"> <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line> </svg> </button> </div> <div class="hidden lg:flex md:gap-x-8 lg:gap-x-10"> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(cn(
    "p-3 text-sm font-semibold leading-6 hover:text-primary transition-colors",
    currentUrl === item.href && " text-primary!"
  ), "class")}> ${item.name} </a>`)} </div> <div class="hidden lg:flex md:flex-1 md:justify-end lg:max-w-36 xl:max-w-80"> ${currentUrl.startsWith("/en") ? renderTemplate`<a${addAttribute(currentUrl.replace("/en", ""), "href")}> ${renderComponent($$result, "FlagFR", FlagFR, { "class": "w-9 h-9 hover:scale-110 transition-all duration-200" })} </a>` : renderTemplate`<a${addAttribute("/en" + currentUrl, "href")}> ${renderComponent($$result, "FlagEN", FlagEN, { "class": "w-9 h-9 hover:scale-110 transition-all duration-200" })} </a>`} </div> </nav> <!-- Mobile menu --> <div id="mobile-menu" class="hidden lg:hidden" role="dialog" aria-modal="true"> <div class="fixed inset-0 z-50"></div> <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> <div class="flex items-center justify-between"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Votre Restaurant</span> <span class="flex items-center gap-2 text-xl font-serif whitespace-nowrap text-stone-800">${renderComponent($$result, "Image", $$Image, { "src": LogoComplete, "alt": "Logo du restaurant", "class": "w-auto h-12" })}</span> </a> <button type="button" id="menu-close" class="-m-2.5 p-2.5 text-stone-700"> <span class="sr-only">Fermer le menu</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"> <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path> </svg> </button> </div> <div class="mt-6 flow-root"> <div class="-my-6 divide-y divide-gray-500/10"> <div class="flex flex-col space-y-4 py-5"> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="-mx-3 block  px-3 py-4 text-base font-semibold leading-7 text-stone-900 hover:bg-gray-50"> ${item.name} </a>`)} </div> <div class="py-6"> ${currentUrl.startsWith("/en") ? renderTemplate`<a${addAttribute(currentUrl.replace("/en", ""), "href")}> ${renderComponent($$result, "FlagFR", FlagFR, { "class": "w-9 h-9 hover:scale-110 transition-all duration-200" })} </a>` : renderTemplate`<a${addAttribute("/en" + currentUrl, "href")}> ${renderComponent($$result, "FlagEN", FlagEN, { "class": "w-9 h-9 hover:scale-110 transition-all duration-200" })} </a>`} </div> </div> </div> </div> </div> </header>`;
}, "/Users/ano/dev/pro/restaurant/src/layouts/header.astro", void 0);

const FacebookSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" fill=\"url(#a)\" height=\"40\" width=\"40\"><defs><linearGradient x1=\"50%\" x2=\"50%\" y1=\"97.078%\" y2=\"0%\" id=\"a\"><stop offset=\"0%\" stop-color=\"#0062E0\"/><stop offset=\"100%\" stop-color=\"#19AFFF\"/></linearGradient></defs><path d=\"M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z\"/><path fill=\"#FFF\" d=\"m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z\"/></svg>";

const InstagramSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" preserveAspectRatio=\"xMidYMid\" viewBox=\"0 0 256 256\"><path fill=\"#fff\" d=\"M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z\"/></svg>";

const ArrowMailRightSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"  viewBox=\"0 0 420 160\" width=\"100\">\n        <path d=\"M400.595,89.711C399.813,86.351 401.905,82.988 405.265,82.206C408.624,81.424 411.987,83.516 412.769,86.876C415.069,96.749 416.551,104.247 416.275,109.86C416.018,115.07 414.404,119.046 411.345,122.16C407.257,126.322 399.703,129.049 386.503,129.822C383.06,130.023 380.1,127.391 379.898,123.948C379.697,120.504 382.329,117.545 385.772,117.343C390.702,117.054 394.617,116.557 397.678,115.71C399.785,115.128 401.378,114.469 402.428,113.4C403.858,111.944 403.915,109.836 403.779,107.123C403.55,102.587 402.264,96.876 400.595,89.711Z\"/>\n        <path d=\"M25.169,34.165C24.36,34.314 23.564,34.619 22.741,34.609C22.364,34.605 20.192,34.581 18.402,32.779C18.129,32.504 16.554,30.92 16.577,28.292C16.58,27.915 16.599,25.746 18.407,23.953C18.595,23.767 19.454,22.915 21.257,22.287C31.952,18.567 117.33,-4.774 209.866,47.179C225.118,55.742 239.979,68.092 251.483,79.015C260.48,78.028 271.247,77.566 289.966,76.967C317.049,76.1 365.67,79.399 396.038,101.71C399.525,104.272 401.99,106.372 404.745,109.057C405.546,109.839 405.97,110.998 406.039,111.185C406.913,113.577 406.008,115.549 405.851,115.891C405.769,116.071 405.313,117.065 404.403,117.9C404.122,118.157 402.511,119.636 399.927,119.533C399.128,119.502 398.318,119.319 397.589,118.987C395.766,118.158 395.925,117.923 394.609,116.408C372.623,91.112 325.472,84.828 289.225,86.068C278.909,86.421 268.961,86.704 259.935,87.37C265.08,92.671 269.007,97.144 271.246,99.96C294.342,129.015 281.944,145.314 267.328,150.189C247.468,156.813 217.273,147.757 210.821,124.959C201.934,93.56 222.411,84.357 239.236,80.88C228.712,71.537 216.812,62.433 204.993,55.931C189.343,47.321 138.518,20.64 68.616,26.045C44.114,27.94 27.868,33.08 25.169,34.165ZM247.628,88.644C232.696,90.764 221.889,94.964 218.79,104.169C218.16,106.039 216.508,111.614 219.596,122.491C225.787,144.299 263.17,148.883 272.601,135.807C277.383,129.177 274.483,116.939 258.577,99.789C255.3,96.256 251.616,92.486 247.628,88.644Z\"/>\n</svg>";

const MapSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-map-pin\"><path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg>";

const PhoneSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-phone\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/></svg>";

const EmailSVG = "<svg stroke=\"currentColor\" width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"ekq0ReAMJZU1\" viewBox=\"0 0 24 24\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"fe9d83e6a1f94929812ea18c302ac157\" export-id=\"4115796819694b59983c0288a9627e1a\" cached=\"false\">\n<style><![CDATA[\n#ekq0ReAMJZU1{pointer-events: all}button:hover #ekq0ReAMJZU2_tr {animation: ekq0ReAMJZU2_tr__tr 3000ms linear 1 normal forwards}@keyframes ekq0ReAMJZU2_tr__tr { 0% {transform: translate(12px,12px) rotate(0deg)} 4.333333% {transform: translate(12px,12px) rotate(-10.000834deg)} 8.333333% {transform: translate(12px,12px) rotate(17.358001deg)} 12.666667% {transform: translate(12px,12px) rotate(-18.32002deg)} 17% {transform: translate(12px,12px) rotate(5.490059deg)} 21.333333% {transform: translate(12px,12px) rotate(-17.872187deg)} 25.333333% {transform: translate(12px,12px) rotate(9.572147deg)} 29.333333% {transform: translate(12px,12px) rotate(-11.473123deg)} 33.333333% {transform: translate(12px,12px) rotate(0deg)} 100% {transform: translate(12px,12px) rotate(0deg)}} button:hover #ekq0ReAMJZU9_tr {animation: ekq0ReAMJZU9_tr__tr 3000ms linear 1 normal forwards}@keyframes ekq0ReAMJZU9_tr__tr { 0% {transform: translate(135.33781px,207.03926px) rotate(720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(135.33781px,207.03926px) rotate(439.480519deg)}} button:hover #ekq0ReAMJZU10_tr {animation: ekq0ReAMJZU10_tr__tr 3000ms linear 1 normal forwards}@keyframes ekq0ReAMJZU10_tr__tr { 0% {transform: translate(11.12px,29.9px) rotate(-720deg);animation-timing-function: cubic-bezier(0.415,0.08,0.115,0.955)} 100% {transform: translate(11.12px,29.9px) rotate(-439.480519deg)}}\n]]></style>\n<defs><linearGradient id=\"ekq0ReAMJZU3-fill\" x1=\"0.5\" y1=\"0\" x2=\"0.5\" y2=\"1\" spreadMethod=\"pad\" gradientUnits=\"objectBoundingBox\" gradientTransform=\"translate(0 0)\"><stop id=\"ekq0ReAMJZU3-fill-0\" offset=\"0%\" stop-color=\"rgba(255,255,255,0)\"/><stop id=\"ekq0ReAMJZU3-fill-1\" offset=\"100%\" stop-color=\"#010022\"/></linearGradient></defs><g id=\"ekq0ReAMJZU2_tr\" transform=\"translate(12,12) rotate(0)\"><path d=\"M21.75,6.75v10.5c0,1.242641-1.007359,2.25-2.25,2.25h-15c-1.242641,0-2.25-1.007359-2.25-2.25v-10.5m19.5,0c0-1.242641-1.007359-2.25-2.25-2.25h-15c-1.242641,0-2.25,1.007359-2.25,2.25m19.5,0v.243c.000087.781099-.404937,1.506357-1.07,1.916l-7.5,4.615c-.723546.445666-1.636454.445666-2.36,0L3.32,8.91c-.665063-.409643-1.070087-1.134901-1.07-1.916v-.244\" transform=\"translate(-12,-12)\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>";

const EMAIL_CONTACT = "mauvaise-herbe81@gmail.com";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const id_current_year = "current-year";
  const siteMap = [
    { name: "Accueil", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Cuisine", href: "/cuisine" },
    { name: "Equipe", href: "/equipe" },
    { name: "Caviste", href: "/caviste" },
    { name: "Agenda", href: "/agenda" },
    { name: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="grid grid-cols-6 grid-rows-4" data-astro-cid-wvdybf5w> <p class="flex items-center gap-2 col-span-6 md:col-span-2" data-astro-cid-wvdybf5w> <span class="w-5 h-5" data-astro-cid-wvdybf5w>${unescapeHTML(MapSVG)}</span>
3 le Fond du Barri, 81140 le Verdier
</p> <p class="hidden font-bold col-span-4 justify-self-end content-center md:block" data-astro-cid-wvdybf5w>
Plan du site
</p> <p class="flex items-center gap-2 col-span-6 md:col-span-2" data-astro-cid-wvdybf5w> <span class="w-5 h-5" data-astro-cid-wvdybf5w>${unescapeHTML(PhoneSVG)}</span>
05 67 72 00 86
</p> <nav class="hidden items-center justify-self-end md:flex md:col-span-4" aria-label="Plan du site" data-astro-cid-wvdybf5w> <ul class="flex items-center gap-4" data-astro-cid-wvdybf5w> ${siteMap.map(({ name, href }) => renderTemplate`<li data-astro-cid-wvdybf5w> <a${addAttribute(href, "href")} class="text-xs px-0 mx-0" data-astro-cid-wvdybf5w> ${name} </a> </li>`)} </ul> </nav> <p class="flex items-center gap-2 col-span-6" data-astro-cid-wvdybf5w> <span class="w-5 h-5" data-astro-cid-wvdybf5w>${unescapeHTML(EmailSVG)}</span> ${EMAIL_CONTACT} </p> <p class="relative col-span-6 text-sm sm:col-span-3 pt-2" data-astro-cid-wvdybf5w>
Vous souhaitez nous trouver sur les différents réseaux sociaux ? Cliquez sur les icônes pour être
		redirigés.
<span${addAttribute([
    "hidden absolute translate-full [&>svg]:max-w-[23rem]",
    "sm:inline sm:[&>svg]:w-[calc(40vw-8.5rem)] sm:-right-1 sm:bottom-8 sm:rotate-22",
    "md:[&>svg]:w-[calc(40vw-9rem)] md:bottom-[calc(1rem+2vw)] md:rotate-9",
    "lg:inline lg:[&>svg]:w-[calc(20vw+7rem)] lg:-right-2 lg:bottom-18 lg:-rotate-2",
    "xl:inline xl:[&>svg]:w-[calc(24vw+8rem)] xl:-right-2 xl:bottom-25 xl:-rotate-1",
    "2xl:inline 2xl:[&>svg]:w-[calc(24vw+5rem)] 2xl:-right-2 2xl:bottom-[calc(7vw)] 2xl:-rotate-1"
  ], "class:list")} data-astro-cid-wvdybf5w>${unescapeHTML(ArrowMailRightSVG)}</span> </p> <p class="block col-span-6 self-end mt-5" id="copyright-container" data-astro-cid-wvdybf5w>
© <span${addAttribute(id_current_year, "id")} data-astro-cid-wvdybf5w>2000</span>
Tous droits réservés <span class="font-bold underline underline-offset-3" data-astro-cid-wvdybf5w>Etienne Zurawsky</span> &
<span class="font-bold underline underline-offset-3" data-astro-cid-wvdybf5w> Maria Gulstam</span>.
</p> <div class="col-start-1 col-span-2 flex justify-start items-start gap-x-10 my-3 fading-in sm:gap-x-4 sm:col-start-5 sm:justify-end sm:my-0" id="social-links" data-astro-cid-wvdybf5w> ${renderComponent($$result, "motion.a", motion.a, { "client:visible": true, "whileHover": { scale: 1.1 }, "transition": { stiffness: 400, damping: 10, duration: 0.1 }, "target": "_blank", "href": "https://www.instagram.com/restaurant_mauvaiseherbe/?hl=fr", "title": "Ouvre le comtpe Instagram dans un nouvel onglet", "className": "w-15 h-15 min-w-15", "client:component-hydration": "visible", "client:component-path": "framer-motion", "client:component-export": "motion.a", "data-astro-cid-wvdybf5w": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(InstagramSVG)}` })} ` })} ${renderComponent($$result, "motion.a", motion.a, { "client:visible": true, "whileHover": { scale: 1.1 }, "transition": { stiffness: 400, damping: 10, duration: 0.1 }, "title": "Ouvrele compte Facebook dans un nouvel onglet", "target": "_blank", "href": "https://www.facebook.com/people/Restaurant-Mauvaise-Herbe/61559086842872/", "className": "w-15 h-15 min-w-16", "client:component-hydration": "visible", "client:component-path": "framer-motion", "client:component-export": "motion.a", "data-astro-cid-wvdybf5w": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(FacebookSVG)}` })} ` })} </div> </footer> `;
}, "/Users/ano/dev/pro/restaurant/src/layouts/footer.astro", void 0);

const $$MobileMenuScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/ano/dev/pro/restaurant/src/components/mobile-menu-script.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ano/dev/pro/restaurant/src/components/mobile-menu-script.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { overflow, header = true, footer = true } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Restaurant"><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" href="/fonts/wotfard/wotfard-regular.woff2" as="font" type="font/woff2">${renderSlot($$result, $$slots["head-preload"])}<title>Restaurant</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(["h-dvh", !overflow && "overflow-hidden"], "class:list")}> ${header && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`} ${renderSlot($$result, $$slots["default"])} ${footer && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`} ${renderComponent($$result, "MobileMenuScript", $$MobileMenuScript, {})} </body></html>`;
}, "/Users/ano/dev/pro/restaurant/src/layouts/layout.astro", void 0);

export { $$Layout as $, EMAIL_CONTACT as E, FlagFR as F, FlagEN as a, cn as c, sanityClient as s };
