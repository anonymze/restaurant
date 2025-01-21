import { $ as $$Layout } from '../../chunks/layout_DDTLHbi7.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DqiDRrON.mjs';
import { $ as $$PresentationConcept, a as $$PresentationHistory } from '../../chunks/presentation-concept_a6S8bH-P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Concept = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "overflow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PresentationConcept", $$PresentationConcept, {})} ${renderComponent($$result2, "PresentationHistory", $$PresentationHistory, {})} </main> ` })}`;
}, "/Users/ano/dev/pro/restaurant/src/pages/en/concept.astro", void 0);

const $$file = "/Users/ano/dev/pro/restaurant/src/pages/en/concept.astro";
const $$url = "/en/concept";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Concept,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
