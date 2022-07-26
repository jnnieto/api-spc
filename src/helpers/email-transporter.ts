import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'niconieto1506@gmail.com',
        pass: 'hfcaszxdobwrzutp'
    }
});

transporter.verify().then(() => {
    console.log("Ready to send emails");
})


