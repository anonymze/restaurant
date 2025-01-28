import sgMail from "@sendgrid/mail";


export const POST = async (req) => {
	const { email } = await req.json();

	if (!email) {
		return new Response("KO", { status: 400 });
	}

	try {
		await sendEmailTo({
			apiKey: process.env.SENDGRID_API_KEY,
			templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
			data: {
				email,
			},
		});
	} catch (error) {
		return new Response("KO", { status: 500 });
	}

	return new Response("OK", { status: 200 });
};

export const sendEmailTo = async ({ apiKey, templateId, data }) => {
	const msg = {
		// TODO
		to: "metier.yann@gmail.com",
		from: "contact@mauvaise-herbe-restaurant.fr",
		templateId,
		dynamic_template_data: data,
	};

	sgMail.setApiKey(apiKey);

	return sgMail.send(msg).then((response) => {
		return {
			statusCode: response[0].statusCode,
			headers: response[0].headers,
		};
	});
};
