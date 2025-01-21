import { $ as $$Layout } from '../chunks/layout_DDTLHbi7.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DqiDRrON.mjs';
import { $ as $$PresentationPassion, a as $$PresentationPersonnel } from '../chunks/presentation-personnel_BFaSJhiA.mjs';
export { renderers } from '../renderers.mjs';

const $$Cuisine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "overflow": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PresentationPassion", $$PresentationPassion, {})} ${renderComponent($$result2, "PresentationPersonnel", $$PresentationPersonnel, {})} </main> ` })}`;
}, "/Users/ano/dev/pro/restaurant/src/pages/cuisine.astro", void 0);

const $$file = "/Users/ano/dev/pro/restaurant/src/pages/cuisine.astro";
const $$url = "/cuisine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Cuisine,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
