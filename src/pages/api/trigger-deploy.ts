import type { APIContext } from "astro";


// the function can't be asynchrone
export function GET() {
	fetch("https://api.vercel.com/v1/integrations/deploy/prj_5IzJAWAbUpd7AJpRAWqRLDPkP91T/gUWxx2NKgE");

	return new Response("OK", { status: 200 });
}
