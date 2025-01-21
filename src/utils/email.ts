import sgMail from "@sendgrid/mail";


export const sendEmailTo = async ({ apiKey, templateId, data }: {
  apiKey: string;
  templateId: string;
  data: Record<string, any>;
}) => {
  const msg = {
    to: process.env.RECIPIENT_EMAIL || "metier.yann@gmail.com",
    from: process.env.SENDER_EMAIL || "metier.game@gmail.com",
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