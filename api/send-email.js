import { sendEmailTo } from "@/utils/mail";


export const POST = async (request) => {
	sendEmailTo({
		apiKey: process.env.SENDGRID_API_KEY,
		sendEmailTo: 'metier.game@gmail.com',
		templateId: process.env.SENDGRID_EMAIL_RESERVATION_NOTIFICATION,
		data: {
			name: 'John Doe',
			email: 'john.doe@example.com',
		},
	})
	return new Response('OK', { status: 200 })
}
