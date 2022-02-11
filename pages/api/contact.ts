import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject } = req.body;

    try {
        await sendgrid.send({
            to: "thealfiephillips@gmail.com", // Your email where you'll receive emails
            from: "thealfiephillips@gmail.com", // your website email address here
            subject: `New mail from ${email}`,
            html: subject
        });
    } catch (error: any) {
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
};
