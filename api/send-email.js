import sgMail from "@sendgrid/mail";


export const POST = async () => {

	try {
		await sendEmailTo({
			apiKey: process.env.SENDGRID_API_KEY,
			sendEmailTo: "metier.game@gmail.com",
			templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
			data: {
				name: "John Doe",
				email: "john.doe@example.com",
			},
		});
	} catch (error) {
		return new Response("KO", { status: 500 });
	}

	return new Response("OK", { status: 200 });
};

export const sendEmailTo = async ({ apiKey, sendEmailTo, templateId, data }) => {
	const msg = {
		to: "metier.game@gmail.com",
		// to: sendEmailTo,
		// from: EMAIL_CONTACT,
		// TODO
		from: "metier.yann@gmail.com",
		templateId: templateId,
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
