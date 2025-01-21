import type { APIRoute } from 'astro';


export const prerender = false;

export const GET: APIRoute = ({ params, request }) => {

	return Response.json({
		message: "OK",
		params,
		url: request.url,
	});
}

