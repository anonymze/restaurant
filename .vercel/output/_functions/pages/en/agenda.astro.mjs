import { s as sanityClient, $ as $$Layout } from '../../chunks/layout_DDTLHbi7.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DqiDRrON.mjs';
export { renderers } from '../../renderers.mjs';

const $$Agenda = createComponent(async ($$result, $$props, $$slots) => {
  const EVENT_QUERY = `*[_type == "agenda"][0]{
	"file": file.asset->url
}`;
  const event = await sanityClient.fetch(EVENT_QUERY);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "overflow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-stone-50 py-16 px-4 md:py-24"> <section class="container mx-auto max-w-6xl space-y-12" aria-labelledby="events-title"> <div class="text-center mb-12"> <h1 id="events-title" class="text-4xl font-serif text-stone-800 mb-4">Nos évènements</h1> <div class="flex justify-center items-center gap-3 mb-6" role="presentation"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary">
Qu'est-ce qui se passe ?
</span> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> </div> <p class="text-lg text-left text-stone-600 max-w-2xl mx-auto leading-relaxed">
Mardi culture, Mercredi musical, Jeux-di… Le bar est ouvert le soir en semaine et nous espérons
					remplir ces soirées d'activités amusantes et sociales pour tous les âges et <span class="font-bold">nous avons besoin de vos suggestions et de vos compétences pour y parvenir !</span> <br> <br>
Écrivez-nous un courriel, appelez-nous ou venez nous parler sur place de ce que vous aimeriez vivre,
					organiser ou réaliser chez Mauvaise Herbe. <a class="text-primary underline underline-offset-4" href="/en/contact">Contactez-nous</a>.
</p> </div> </section> <article class="container mx-auto max-w-6xl"> <iframe${addAttribute(event.file, "src")} class="w-full h-[1200px] border-0" title="Calendrier des événements" loading="lazy"></iframe> <noscript> <p class="text-center">
Le PDF ne peut pas être affiché. ${" "} <a${addAttribute(event.file, "href")} class="text-primary underline underline-offset-4"> Télécharger le PDF </a> </p> </noscript> </article> </main> ` })}`;
}, "/Users/ano/dev/pro/restaurant/src/pages/en/agenda.astro", void 0);

const $$file = "/Users/ano/dev/pro/restaurant/src/pages/en/agenda.astro";
const $$url = "/en/agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Agenda,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
