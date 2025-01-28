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
		console.log(error);
		return new Response("KO", { status: 500 });
	}

	return new Response("OK", { status: 200 });
};

const sendEmailTo = async ({ apiKey, templateId, data }) => {
	const msg = {
		to: "mmauvaise.herbe81@gmail.com",
		from: "contact@mauvaise-herbe-restaurant.fr",
		subject: "Newsletter Mauvaise Herbe",
		templateId,
		dynamic_template_data: data,
	};

	sgMail.setApiKey(apiKey);

	return sgMail.send(msg);
};
