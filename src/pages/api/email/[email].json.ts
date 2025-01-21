export const prerender = false;

export async function GET({ params, request }: any) {
  return Response.json({
		message: "OK",
		params,
		url: request.url,
	});
}