import { SENDGRID_API_KEY, EMAIL_CONTACT } from "astro:env/client";
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
	sendEmailTo,
	templateId,
	data,
}: {
	sendEmailTo: string;
	templateId: string;
	data?: Record<string, string>;
}): Promise<SendEmailTo> => {
	const msg = {
		to: sendEmailTo,
		// from: EMAIL_CONTACT,
		// TODO
		from: "metier.yann@gmail.com",
		templateId: templateId,
		dynamic_template_data: data,
	};

	sgMail.setApiKey(SENDGRID_API_KEY);

	return sgMail
		.send(msg)
		.then((response) => {
			return {
				statusCode: response[0].statusCode,
				headers: response[0].headers,
			};
		})
		.catch((error) => {
			return { error };
		});
};
