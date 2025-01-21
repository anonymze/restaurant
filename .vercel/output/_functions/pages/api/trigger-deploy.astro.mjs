export { renderers } from '../../renderers.mjs';

const GET = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!"
    })
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
