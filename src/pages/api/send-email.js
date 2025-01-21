import sgMail from "@sendgrid/mail";


/**
 * @param {Request} req
 * @returns {Response}
 */
export async function POST(req) {
	const { email } = await req.json();
	console.log(email);

	if (!email) {
		return new Response("KO", { status: 400 });
	}

	// try {
	// 	await sendEmailTo({
	// 		apiKey: process.env.SENDGRID_API_KEY,
	// 		templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
	// 		data: {
	// 			email,
	// 		},
	// 	});
	// } catch (error) { 
	// 	console.log(error);
	// 	return new Response("KO", { status: 500 });
	// }

	return new Response("OK", { status: 200 });
};

// export const sendEmailTo = async ({ apiKey, templateId, data }) => {
// 	const msg = {
// 		// TODO "email restaurateur"
// 		to: "metier.yann@gmail.com",
// 		// TODO "email domain name"
// 		from: "metier.game@gmail.com",
// 		templateId,
// 		dynamic_template_data: data,
// 	};

// 	sgMail.setApiKey(apiKey);

// 	return sgMail.send(msg).then((response) => {
// 		console.log(response);
// 		return {
// 			statusCode: response[0].statusCode,
// 			headers: response[0].headers,
// 		};
// 	});
// };
