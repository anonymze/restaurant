export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = ({ params, request }) => {
  return Response.json({
    message: "OK",
    params,
    url: request.url
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
