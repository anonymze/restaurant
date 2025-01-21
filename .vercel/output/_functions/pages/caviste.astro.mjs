import { s as sanityClient, $ as $$Layout } from '../chunks/layout_DDTLHbi7.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DqiDRrON.mjs';
export { renderers } from '../renderers.mjs';

const $$Caviste = createComponent(async ($$result, $$props, $$slots) => {
  const WINE_QUERY = `*[_type == "wine"][0]{
	"file": file.asset->url
}`;
  const wine = await sanityClient.fetch(WINE_QUERY);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "overflow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-stone-50 py-16 px-4 md:py-24"> <section class="container mx-auto max-w-6xl space-y-12"> <div class="text-center mb-12"> <h1 class="text-4xl font-serif text-stone-800 mb-4">Notre carte des vins</h1> <div class="flex justify-center items-center gap-3 mb-6"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary">
Une cave nature et bio
</span> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> </div> <p class="text-lg text-left text-stone-600 max-w-2xl mx-auto leading-relaxed my-8">
Notre sommelier a rempli notre cave à vin avec plus de 100 références, venant du gaillacois, des
					quatre coins de la France mais aussi avec une sélection de vins étrangers. Tous nos vins sont
					certifiés bios, biodynamiques ou naturels. Nous privilégions évidement les domaines à taille
					humaine, avec plusieurs petites exploitations, et aussi avec une philosophie tournée autour du
					respect de son terroir et de son environnement.
<br> <br>
La gamme quant à elle est sans cesse renouvelée afin de vous proposer toujours de nouvelles découvertes.
					Vous trouverez ci-dessous notre dernière liste de boissons. <span class="font-bold">Tous nos vins, ainsi que boissons sans alcool
					et spiritueux sont disponibles à l'achat caviste, avec une remise de 20% par rapport au prix sur table</span>.
					Alors tchin !
</p> </div> </section> <article class="container mx-auto max-w-6xl"> <iframe${addAttribute(wine.file, "src")} class="w-full h-[1200px] border-0" title="Calendrier des événements" loading="lazy"></iframe> <noscript> <p class="text-center">
Le PDF ne peut pas être affiché. ${" "} <a${addAttribute(wine.file, "href")} class="text-primary underline underline-offset-4"> Télécharger le PDF </a> </p> </noscript> </article> </main> ` })}`;
}, "/Users/ano/dev/pro/restaurant/src/pages/caviste.astro", void 0);

const $$file = "/Users/ano/dev/pro/restaurant/src/pages/caviste.astro";
const $$url = "/caviste";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Caviste,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
