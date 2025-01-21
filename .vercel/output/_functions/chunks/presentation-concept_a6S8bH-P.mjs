import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DqiDRrON.mjs';
import { $ as $$Image } from './_astro_assets_PivPFLDd.mjs';
import { motion } from 'framer-motion';

const TablesImg = new Proxy({"src":"/_astro/tables.CfxXkEPj.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/tables.webp";
							}
							
							return target[name];
						}
					});

const EclairageImg = new Proxy({"src":"/_astro/eclairage.CcyjgJVz.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/eclairage.webp";
							}
							
							return target[name];
						}
					});

const $$PresentationHistory = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-50 py-10 px-4 md:pt-4 md:pb-28"> <div class="container mx-auto max-w-6xl"> <div class="grid gap-12 md:grid-cols-2 items-center"> <!-- Image Grid --> <div class="grid grid-cols-2 gap-8"> ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: 50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5 }, "className": "aspect-square md:aspect-[8/10] overflow-hidden md:translate-y-20", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": TablesImg, "loading": "eager", "fetchpriority": "high", "alt": "Tables du restaurant", "class": "w-full h-full object-cover" })} ` })} ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: -50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5, delay: 0.2 }, "className": "aspect-square md:aspect-[8/10] overflow-hidden", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": EclairageImg, "loading": "eager", "fetchpriority": "high", "alt": "Comptoir du restaurant", "class": "w-full h-full object-cover" })} ` })} </div> <!-- Text Content --> <div class="space-y-6"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary"> Notre Restaurant </span> </div> <h2 class="text-3xl font-serif text-stone-800 leading-tight">
Une recherche de proximité et de convivialité
</h2> </div> <p class="text-lg text-stone-600 leading-relaxed">
Mauvaise Herbe a ouvert ses portes au printemps 2024 dans le village du Verdier, en pleine campagne
					tarnaise. Notre cuisine est caractérisée par la créativité, les produits du terroir et les plantes
					sauvages. Nous servons le déjeuner tous les jours du mardi au samedi, et le dîner le vendredi et le
					samedi soir. Nous proposons un menu du jour unique tous les midis et le samedi soir. Le vendredi
					soir, nos cuisiniers préparent de délicieux street food pour toute la famille. En semaine, le bar
					est ouvert le soir avec diverses activités culturelles pour tous les âges.
<br> <br>
Nous souhaitons être un lieu de rencontre pour les occasions quotidiennes et festives.
<br> <br>
Soyez les bienvenus au restaurant Mauvaise Herbe !
</p> <div class="flex flex-col gap-4 text-stone-700"> <div class="flex items-center gap-3"> <div class="h-1 w-12 bg-primary" aria-hidden="true"></div> <span>Activités culturelles régulières</span> </div> <div class="flex items-center gap-3"> <div class="h-1 w-12 bg-primary" aria-hidden="true"></div> <span>Un lieu de rencontre et de partage</span> </div> </div> </div> </div> </div> </section>`;
}, "/Users/ano/dev/pro/restaurant/src/components/presentation-history.astro", void 0);

const CaveImg = new Proxy({"src":"/_astro/cave.BgNSHM8e.webp","width":4000,"height":6000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/cave.webp";
							}
							
							return target[name];
						}
					});

const Eclairage2 = new Proxy({"src":"/_astro/eclairage_2.EFLXNPEy.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/eclairage_2.webp";
							}
							
							return target[name];
						}
					});

const $$PresentationConcept = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-50 py-10 px-4 md:py-16"> <div class="container mx-auto max-w-6xl"> <div class="grid gap-10 md:grid-cols-2 items-center"> <!-- Text Content --> <div class="space-y-6"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary"> Notre concept </span> </div> <h2 class="text-3xl font-serif text-stone-800 leading-tight">
Un menu authentique et renouvelée quotidiennement
</h2> </div> <p class="text-lg text-stone-600 leading-relaxed">
Notre restaurant s'appelle Mauvaise Herbe parce que nous voulons souligner l'importance de profiter
					de la richesse des saveurs et des ressources que nous offre la nature, et de voir parfois le monde
					sous une perspective différente.
<br> <br>
Une mauvaise herbe peut être tellement de choses différentes, dépendant de la perspective à laquelle
					nous la regardons. La ronce des uns peut être la confiture de mûres des autres. Les pissenlits peuvent
					être considérés comme un symbole romantique et ludique de la fugacité du temps, comme un envahisseur
					de gazon ou comme une plante de salade facilement accessible. Le cynorrhodon, le fruit des roses connu
					sous le nom de gratte-cul, est considéré par beaucoup comme un produit résiduel qu'il faut couper pour
					faire de nouvelles roses. Mais le cynorrhodon est aussi l'une des plantes les plus riches en vitamine
					C qui poussent sous nos latitudes et constitue une base délicieuse pour de nombreux desserts.
</p> <div class="flex flex-col gap-4 text-stone-700"> <div class="flex items-center gap-3"> <div class="h-1 w-12 bg-primary" aria-hidden="true"></div> <span>Menu renouvelé chaque jour</span> </div> <div class="flex items-center gap-3"> <div class="h-1 w-12 bg-primary" aria-hidden="true"></div> <span>Garanti 100% Mauvaise Herbe 😊</span> </div> </div> </div> <!-- Image Grid --> <div class="grid grid-cols-2 gap-8 md:pb-14"> ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: 50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5 }, "className": "aspect-square md:aspect-[8/10] overflow-hidden ", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": CaveImg, "alt": "Cave du restaurant", "class": "w-full h-full object-cover" })} ` })} ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: -50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5, delay: 0.2 }, "client:load": true, "className": "aspect-square md:aspect-[8/10] overflow-hidden md:translate-y-20", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": Eclairage2, "alt": "Comptoir du restaurant", "class": "w-full h-full object-cover" })} ` })} </div> </div> </div> </section>`;
}, "/Users/ano/dev/pro/restaurant/src/components/presentation-concept.astro", void 0);

export { $$PresentationConcept as $, $$PresentationHistory as a };
