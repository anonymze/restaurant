export async function GET(req) {
	console.log(req.headers.get('Authorization'))
	console.log(process.env.CRON_SECRET)
	if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response("KO", { status: 401 });
	}

	await fetch("https://api.vercel.com/v1/integrations/deploy/prj_5IzJAWAbUpd7AJpRAWqRLDPkP91T/WeiZqkkowy");
	return new Response("OK", { status: 200 });
	
}
