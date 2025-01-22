import sgMail from "@sendgrid/mail";


export async function POST(req) {
  const data = await req.json();
  
	console.log(process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION);
	console.log(process.env.SENDGRID_API_KEY);
	console.log(data);

	// const parsedData = reservationSchema.safeParse(data);

	// if (!parsedData.success) {
	// 	return new Response("KO", { status: 400 });
	// }

	// console.log(parsedData.data);

	// try {
	// 	await sendEmailTo({
	// 		apiKey: process.env.SENDGRID_API_KEY,
	// 		sendEmailTo: "metier.yann@gmail.com",
	// 		templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
	// 		data: {
	// 			name: "John Doe",
	// 			email: "john.doe@example.com",
	// 		},
	// 	});
	// } catch (error) {
	// 	return new Response("KO", { status: 500 });
	// }

	return new Response("OK", { status: 200 });
};

const sendEmailTo = async ({ apiKey, sendEmailTo, templateId, data }) => {
	const msg = {
		// TODO "email restaurateur"
		to: "metier.yann@gmail.com",
		// TODO "email domain name"
		from: "ici",
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