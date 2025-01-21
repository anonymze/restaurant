import { s as sanityClient, $ as $$Layout } from '../../chunks/layout_DDTLHbi7.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DqiDRrON.mjs';
import { C as Card, a as CardContent } from '../../chunks/card_DR8O1Dcz.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_PivPFLDd.mjs';
export { renderers } from '../../renderers.mjs';

const $$Equipe = createComponent(async ($$result, $$props, $$slots) => {
  const TEAM_QUERY = `*[_type == "team"]{
	firstname,
	lastname,
	role,
	description,
	"image": image.asset->url
}`;
  const team = await sanityClient.fetch(TEAM_QUERY);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "overflow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-stone-50 py-16 px-4 md:py-24"> <section class="container mx-auto max-w-6xl space-y-12"> <div class="text-center mb-12"> <h1 class="text-4xl font-serif text-stone-800 mb-4">Notre équipe</h1> <div class="flex justify-center items-center gap-3 mb-6"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary">
Une équipe soudée et passionnée à votre service
</span> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> </div> <p class="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
Découvrez les différents membres du restaurant, chacun avec son expertise et sa passion pour la
					cuisine.
</p> </div> </section> <article class="bg-stone-50 py-10 px-4"> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${team.map((member) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-stone-50 border-none overflow-hidden rounded-none" }, { "default": ($$result3) => renderTemplate` <div class="aspect-[4/3] overflow-hidden"> ${renderComponent($$result3, "Image", $$Image, { "width": 400, "height": 300, "src": member.image, "alt": member.lastname + " " + member.firstname, "class": "w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105" })} </div> ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-6 text-center" }, { "default": ($$result4) => renderTemplate` <h3 class="text-xl font-serif text-stone-800 mb-1">${member.lastname + " " + member.firstname}</h3> <p class="text-sm font-medium text-primary">${member.role}</p> <p class="text-sm text-stone-600">${member.description}</p> ` })} ` })}`)} </div> </article> </main> ` })}`;
}, "/Users/ano/dev/pro/restaurant/src/pages/en/equipe.astro", void 0);

const $$file = "/Users/ano/dev/pro/restaurant/src/pages/en/equipe.astro";
const $$url = "/en/equipe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Equipe,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
