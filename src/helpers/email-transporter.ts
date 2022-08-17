import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'proyectospcudec@gmail.com',
        pass: 'dnmpqtbywywydkoo'
    }
});

transporter.verify().then(() => {
    console.log("Ready to send emails");
})


