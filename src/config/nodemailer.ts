import nodemailer from "nodemailer";

const email = "kabraliev2005@gmail.com";
const pass = "srrzpdxmndockush";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
};
