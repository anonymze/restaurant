export async function GET(req) {

	if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return res.status(401).end('Unauthorized');
	}

	await fetch("https://api.vercel.com/v1/integrations/deploy/prj_5IzJAWAbUpd7AJpRAWqRLDPkP91T/gUWxx2NKgE");
	return new Response("OK", { status: 200 });
}
