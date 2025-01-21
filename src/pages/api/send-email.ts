import type { APIContext } from "astro";


// the function can't be asynchrone
export function GET({ request }: APIContext) {
	// const { email } = request.json();

	// sendEmailTo({
	// 	apiKey: process.env.SENDGRID_API_KEY!,
	// 	templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION!,
	// 	data: {
	// 		email,
	// 	},
	// });

	return Response.json({
		message: "OK",
		url: request.url,
	});
}

export const sendEmailTo = async ({ apiKey, templateId, data }: { apiKey: string, templateId: string, data: any }) => {
	const msg = {
		// TODO "email restaurateur"
		to: "metier.yann@gmail.com",
		// TODO "email domain name"
		from: "metier.game@gmail.com",
		templateId,
		dynamic_template_data: data,
	};

	sgMail.setApiKey(apiKey);

	return sgMail.send(msg).then((response) => {
		console.log(response);
		return {
			statusCode: response[0].statusCode,
			headers: response[0].headers,
		};
	});
};
