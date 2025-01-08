export const POST = async (request) => {
	console.log(process.env.SENDGRID_API_KEY)
	return new Response('OK', { status: 200 })
}
