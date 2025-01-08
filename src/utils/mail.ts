import sgMail from "@sendgrid/mail";


type SendEmailTo =
	| {
			statusCode: number;
			headers: any;
			error?: never;
	  }
	| {
			error: any;
			statusCode?: never;
			headers?: never;
	  };

export const sendEmailTo = async ({
	apiKey,
	sendEmailTo,
	templateId,
	data,
}: {
	apiKey: string;
	sendEmailTo: string;
	templateId: string;
	data?: Record<string, string>;
}): Promise<SendEmailTo> => {
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
