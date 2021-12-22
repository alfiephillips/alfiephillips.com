import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
export default (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject } = req.body;

    const user_email = process.env.USER_EMAIL as string;
    const user_password = process.env.USER_PASSWORD as string;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: user_email,
            pass: user_password
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.USER_EMAIL,
        subject: `Contact form submission from ${email}`,
        html: `<p>You have a new contact form submission</p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Message: </strong> ${subject} </p><br>`
    };

    let errorMessage;

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            errorMessage = error.message;
            console.log(error);
            return res.json(error);
        } else {
            errorMessage = null;
            console.log(`Message sent: ${info.messageId}`);
        }
    });

    return res.json({
        error: errorMessage,
        message: "Message sent!"
    });
};
