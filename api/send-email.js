import sgMail from "@sendgrid/mail";


export const GET = async (request) => {
	console.log(process.env.SENDGRID_API_KEY);
	console.log(process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION);
	
	try {
		const ok = await sendEmailTo({
			apiKey: process.env.SENDGRID_API_KEY,
			sendEmailTo: "metier.game@gmail.com",
			templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
			data: {
				name: "John Doe",
				email: "john.doe@example.com",
			},
		});
		console.dir(ok, { depth: null });
	} catch (error) {
		console.log(error);
	}

	return new Response("OK", { status: 200 });
};

export const POST = async (request) => {
	console.log(process.env.SENDGRID_API_KEY);
	console.log(process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION);

	try {
		const ok = await sendEmailTo({
			apiKey: process.env.SENDGRID_API_KEY,
			sendEmailTo: "metier.game@gmail.com",
			templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
			data: {
				name: "John Doe",
				email: "john.doe@example.com",
			},
		});
		console.dir(ok, { depth: null });
	} catch (error) {
		console.log(error);
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
