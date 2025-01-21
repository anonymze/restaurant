import sgMail from "@sendgrid/mail";


/**
 * @param {Request} req
 * @returns {Response}
 */
export const POST = async (req) => {
	console.dir(req, { depth: null });
	console.log(req.method);
	console.log(sgMail)

	// console.log(data);

	// if (!data.email) {
	// 	return new Response("KO", { status: 400 });
	// }
	// console.log(data.email);

	// try {
	// 	await sendEmailTo({
	// 		apiKey: process.env.SENDGRID_API_KEY,
	// 		sendEmailTo: data.email,
	// 		templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
	// 		data: {},
	// 	});
	// } catch (error) { 
	// 	return new Response("KO", { status: 500 });
	// }

	return new Response("OK", { status: 200 });
};

// export const sendEmailTo = async ({ apiKey, sendEmailTo, templateId, data }) => {
// 	const msg = {
// 		// TODO "email restaurateur"
// 		to: "metier.yann@gmail.com",
// 		// TODO "email domain name"
// 		from: sendEmailTo,
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
