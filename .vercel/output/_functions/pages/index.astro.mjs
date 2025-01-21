import { a as FlagEN, c as cn, $ as $$Layout } from '../chunks/layout_DDTLHbi7.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../chunks/astro/server_DqiDRrON.mjs';
import { g as getImage, $ as $$Image } from '../chunks/_astro_assets_PivPFLDd.mjs';
import { E as EspaceImg, C as Cave2Img, A as AnimatedText, a as AnimatedLink, L as LogoSmall } from '../chunks/logo_small_BS5y58Oq.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const optimizedPlanteImage = await getImage({
    src: EspaceImg,
    format: "webp",
    widths: [240, 540, 720, 980, EspaceImg.width],
    loading: "eager"
  });
  const optimizedPlatImage = await getImage({
    src: Cave2Img,
    format: "webp",
    widths: [240, 540, 720, 980, Cave2Img.width],
    loading: "eager"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "overflow": false, "header": false, "footer": false }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="relative flex flex-col w-full h-full lg:flex-row"> <h1 class="sr-only">Mauvaise herbe restaurant</h1> <a class="absolute top-4 right-6 z-10" href="/en"> ${renderComponent($$result2, "FlagEN", FlagEN, { "class": "w-12 h-12  hover:scale-110 transition-all duration-200" })} </a> <div class="relative flex-1 h-1/2 lg:h-full"> ${renderComponent($$result2, "AnimatedText", AnimatedText, { "client:load": true, "className": "absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-fit text-6xl text-primary uppercase font-bold text-shadow lg:top-16 lg:right-3 lg:left-auto lg:translate-x-0 lg:text-8xl", "client:component-hydration": "load", "client:component-path": "@/components/animated-text", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
Mauvaise
` })} ${renderComponent($$result2, "Image", $$Image, { "src": optimizedPlanteImage.src, "width": 980, "height": 1200, "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 980px) 720px, (max-width: 1600px) 980px, ${EspaceImg.width}px`, "alt": "Un plat du restaurant", "class": "w-full h-full object-cover opacity-0 transition-opacity duration-300", "fetchpriority": "high", "onload": "this.classList.remove('opacity-0')" })} <div class="absolute inset-0 z-10 m-auto text-center w-fit h-fit"> <h2 class="mb-3 p-1 pb-2 text-4xl text-white text-shadow backdrop-blur-xs uppercase font-serif lg:text-5xl">
Notre restaurant
</h2> ${renderComponent($$result2, "AnimatedLink", AnimatedLink, { "client:load": true, "title": "Redirection \xE0 la page de la carte du restaurant", "href": "/concept", "className": "bg-primary/90", "client:component-hydration": "load", "client:component-path": "@/components/animated-link", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
Voir la présentation de notre restaurant
` })} </div> <div${addAttribute(cn(
    "absolute inset-0",
    "bg-gradient-to-t from-white/10 to-transparent",
    "after:block after:w-full after:h-full after:bg-gradient-to-t after:from-white/50 after:to-transparent after:opacity-0 after:transition-opacity after:duration-600"
  ), "class")}></div> </div> <div class="relative flex-1 h-1/2 group lg:h-full"> <div class="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-end gap-2 h-fit text-6xl text-green-700 text-dark text-shadow font-bold uppercase lg:text-8xl lg:top-16 lg:pt-8 lg:left-3 lg:translate-x-0"> ${renderComponent($$result2, "AnimatedText", AnimatedText, { "client:load": true, "delay": 0.3, "client:component-hydration": "load", "client:component-path": "@/components/animated-text", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`Herbe` })} ${renderComponent($$result2, "AnimatedText", AnimatedText, { "client:load": true, "delay": 0.6, "client:component-hydration": "load", "client:component-path": "@/components/animated-text", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": LogoSmall, "alt": "Logo du restaurant", "class": "w-auto h-12 ml-2 mb-1 lg:h-18 lg:mb-2", "style": {
    filter: "drop-shadow(3px 6px 66px #000)"
  } })} ` })} </div> ${renderComponent($$result2, "Image", $$Image, { "src": optimizedPlatImage.src, "width": 980, "height": 1200, "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 980px) 720px, (max-width: 1600px) 980px, ${Cave2Img.width}px`, "alt": "Un plat du restaurant", "class": "w-full h-full object-cover opacity-0 transition-opacity duration-300", "fetchpriority": "high", "onload": "this.classList.remove('opacity-0')" })} <div class="absolute inset-0 z-10 m-auto text-center w-fit h-fit"> <h2 class="mb-3 p-1 pb-2 text-4xl text-white text-shadow backdrop-blur-xs uppercase font-serif lg:text-5xl">
Réservation
</h2> ${renderComponent($$result2, "AnimatedLink", AnimatedLink, { "client:load": true, "title": "Redirection \xE0 la page de la carte du restaurant", "href": "/contact", "className": "bg-green-700/90", "client:component-hydration": "load", "client:component-path": "@/components/animated-link", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
Contactez-nous
` })} </div> <div${addAttribute(cn(
    "absolute inset-0",
    "bg-gradient-to-t from-white/10 to-transparent",
    "after:block after:w-full after:h-full after:bg-gradient-to-t after:from-white/50 after:to-transparent after:opacity-0 after:transition-opacity after:duration-600"
  ), "class")}></div> </div> </main> `, "head-preload": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head-preload" }, { "default": ($$result3) => renderTemplate` <link rel="preload"${addAttribute(optimizedPlanteImage.src, "href")} as="image"${addAttribute(optimizedPlanteImage.srcSet.attribute, "imagesrcset")}${addAttribute(`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 980px) 720px, (max-width: 1600px) 980px, ${EspaceImg.width}px`, "imagesizes")}> <link rel="preload"${addAttribute(optimizedPlatImage.src, "href")} as="image"${addAttribute(optimizedPlatImage.srcSet.attribute, "imagesrcset")}${addAttribute(`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 980px) 720px, (max-width: 1600px) 980px, ${Cave2Img.width}px`, "imagesizes")}> ` })}` })}`;
}, "/Users/ano/dev/pro/restaurant/src/pages/index.astro", void 0);

const $$file = "/Users/ano/dev/pro/restaurant/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
