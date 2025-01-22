export async function POST(request) {
	const { email } = await request.json();



	return new Response(email, { status: 200 });
}
