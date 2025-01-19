import { NextApiRequest, NextApiResponse } from "next";

import { ValidationError } from "yup";

import { mailValidationSchema } from "@/components/contact-form/contact-form";
import { rateLimiterApi, getUserId } from "@/utility/rate-limiter";
import { mailOptions, transporter } from "@/config/nodemailer";

const REQUEST_PER_HOUR = 5 as const;
const RATELIMIT_DURATION = 3600000 as const;
const MAX_USER_PER_SECOND = 100 as const;

/*
  Rate Limiting Strategy:

  WARNING: This rate limiting strategy uses a combination of client IP address and user agent for identification.
  - Pros: Provides a more robust identification mechanism.
  - Cons:
    - This approach fails if we have multiple servers running as the LRU cache is bound to server's local memory which is fine for small apps which do not require to scale
    - Users behind certain proxies or networks might share the same IP address.
    - Determined attackers can still potentially circumvent these measures.
    - Privacy concerns: Collecting IP addresses and user agents may raise privacy considerations.
  
  If either the client's IP address or user agent is missing, a fallback mechanism defaults to using a UUID stored in cookies.
  - Pros: Ensures a default identification mechanism is in place.
  - Cons: UUIDs may not be entirely foolproof and can be manipulated by users.

  Always consider the privacy implications of collecting and using such information. Be transparent with users about the data you collect for rate limiting purposes.
*/
const limiter = rateLimiterApi({
  interval: RATELIMIT_DURATION,
  uniqueTokenPerInterval: MAX_USER_PER_SECOND,
  getUserId,
});

export type MailRequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const CONTACT_MESSAGE_FIELDS: Record<keyof MailRequestBody, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data: MailRequestBody) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${
        CONTACT_MESSAGE_FIELDS[key as keyof MailRequestBody]
      }: \n${val} \n \n`),
    "",
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${
      CONTACT_MESSAGE_FIELDS[key as keyof MailRequestBody]
    }</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string | string[] }>,
) => {
  try {
    const { method } = req;
    if (method !== "POST") {
      res.status(400).json({
        status: 405,
        message: `[${method}] is not allowed`,
      });
      return;
    }
    const body: MailRequestBody = req.body;

    const isRateLimited = await limiter.check(res, req, REQUEST_PER_HOUR);
    if (isRateLimited.status !== 200) return;

    try {
      await mailValidationSchema.validate(body, { abortEarly: false });
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        res.status(422).json({
          status: 422,
          message: validationError.errors,
        });
      } else {
        res.status(500).json({
          status: 500,
          message: "Internal server error",
        });
      }
      return;
    }

    const response = await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(body),
      to: "contact@muhiddindev.uz",
      subject: body.subject,
    });

    response.response;

    res.status(200).send({ status: 200, message: "Success" });
  } catch (error: any) {
    if (error?.status === 429) {
      res.status(429).json({ status: 429, message: "Rate limit exceeded" });
    } else {
      res.status(error.status || 500).json({
        status: 500,
        message: error.message || "Internal server error",
      });
    }
  }
};

export default handler;
