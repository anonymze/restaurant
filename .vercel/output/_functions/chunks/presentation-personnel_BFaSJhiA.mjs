import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DqiDRrON.mjs';
import { $ as $$Image } from './_astro_assets_PivPFLDd.mjs';
import { motion } from 'framer-motion';

const DessertImg = new Proxy({"src":"/_astro/dessert.DurkERgM.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/dessert.webp";
							}
							
							return target[name];
						}
					});

const TableImg = new Proxy({"src":"/_astro/table.DtAZSkiW.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/table.webp";
							}
							
							return target[name];
						}
					});

const $$PresentationPassion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-50 py-10 px-4 md:py-16"> <div class="container mx-auto max-w-6xl"> <div class="grid gap-10 md:grid-cols-2 items-center"> <!-- Image Grid --> <div class="grid grid-cols-2 gap-8 md:pb-14"> ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: 50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5 }, "className": "aspect-square md:aspect-[8/10] overflow-hidden ", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": DessertImg, "alt": "Dessert avec sauce", "class": "w-full h-full object-cover" })} ` })} ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: -50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5, delay: 0.2 }, "client:load": true, "className": "aspect-square md:aspect-[8/10] overflow-hidden md:translate-y-20", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": TableImg, "alt": "Table du restaurant", "class": "w-full h-full object-cover" })} ` })} </div> <!-- Text Content --> <div class="space-y-6"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary"> Notre cuisine </span> </div> <h2 class="text-3xl font-serif text-stone-800 leading-tight">
Une cuisine créative et authentique
</h2> </div> <p class="text-lg text-stone-600 leading-relaxed">
La créativité est au cœur de notre cuisine. Il doit être amusant de manger et de cuisiner chez nous.
					C'est pourquoi nous avons choisi de servir <span class="font-bold">un menu du jour unique chaque midi et le samedi soir</span>. Les cuisiniers explorent ainsi en permanence de nouvelles saveurs et de nouvelles recettes. En
					outre, cela nous permet de nous adapter à la fois aux offres saisonnières et à la récolte de plantes
					sauvages du jour, ce qui fait que nous n'avons pratiquement pas de gaspillage.
</p> <div class="flex flex-col gap-4 text-stone-700"> <div class="flex items-center gap-3"> <div class="h-1 w-12 bg-primary" aria-hidden="true"></div> <span>Produits 100% locaux et de saison</span> </div> </div> </div> </div> </div> </section>`;
}, "/Users/ano/dev/pro/restaurant/src/components/presentation-passion.astro", void 0);

const CuissonImg = new Proxy({"src":"/_astro/cuisson.B4nnNx5U.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/cuisson.webp";
							}
							
							return target[name];
						}
					});

const Dessert2Img = new Proxy({"src":"/_astro/dessert_2.CWikfuvx.webp","width":6000,"height":4000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/pro/restaurant/src/assets/images/dessert_2.webp";
							}
							
							return target[name];
						}
					});

const $$PresentationPersonnel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-50 py-10 px-4 md:pt-14 md:pb-28"> <div class="container mx-auto max-w-6xl"> <div class="grid gap-12 md:grid-cols-2 items-center"> <!-- Text Content --> <div class="space-y-6"> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="h-0.5 w-8 bg-primary" aria-hidden="true"></div> <span class="text-sm font-medium uppercase tracking-wider text-primary"> Notre Service </span> </div> <h2 class="text-3xl font-serif text-stone-800 leading-tight">
Des menus variés et mémorables <br>
dans votre assiette
</h2> </div> <p class="text-lg text-stone-600 leading-relaxed">
Les vendredis soirs, nous servons du street food fait maison selon un planning tournant :
</p> <ul class="list-disc list-inside"> <li class="text-md text-stone-600 leading-relaxed">1er vendredi du mois : Fish n' Chips</li> <li class="text-md text-stone-600 leading-relaxed">2ème vendredi du mois : Burger</li> <li class="text-md text-stone-600 leading-relaxed">3ème vendredi du mois : Moules/frites (août-janvier)</li> <li class="text-md text-stone-600 leading-relaxed">4ème vendredi du mois : Paella (février-juillet)</li> <li class="text-md text-stone-600 leading-relaxed">5ème vendredi du mois : Curry (nous varions entre les différentes cuisines asiatiques)</li> </ul> <p class="text-lg text-stone-600 leading-relaxed">
Environ une fois par mois, nous organisons les <span class="font-bold">« Samedis sauvages »</span>,
					au cours desquels nous servons un menu dégustation mettant l'accent sur les produits sauvages. Les
					Samedi sauvages sont annoncés ici (lien « AGENDA »).
<br> <br> <span class="font-bold">Afin de répondre au mieux aux demandes particulières et aux allergies, nous vous serions très
						reconnaissants de nous appeler à l'avance pour nous en informer.</span> </p> <div class="flex flex-col gap-4 text-stone-700"> <div class="flex items-center gap-3"> <div class="h-1 w-12 bg-primary" aria-hidden="true"></div> <span>Menu végétarien possible sur demande</span> </div> </div> </div> <!-- Image Grid --> <div class="grid grid-cols-2 gap-8"> ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: 50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5 }, "className": "aspect-square md:aspect-[8/10] overflow-hidden md:translate-y-20", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": CuissonImg, "loading": "eager", "fetchpriority": "high", "alt": "Cuisson d'un aliment", "class": "w-full h-full object-cover" })} ` })} ${renderComponent($$result, "motion.div", motion.div, { "client:load": true, "initial": { opacity: 0, y: -50 }, "animate": { opacity: 1, y: 0 }, "transition": { duration: 0.5, delay: 0.2 }, "className": "aspect-square md:aspect-[8/10] overflow-hidden", "client:component-hydration": "load", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": Dessert2Img, "loading": "eager", "fetchpriority": "high", "alt": "Dessert avec chantilly", "class": "w-full h-full object-cover" })} ` })} </div> </div> </div> </section>`;
}, "/Users/ano/dev/pro/restaurant/src/components/presentation-personnel.astro", void 0);

export { $$PresentationPassion as $, $$PresentationPersonnel as a };
