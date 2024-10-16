import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
        user: "kontakt@lenis-pro.de",
        pass: "aTmAx@172001",
    },
});

export const mailOptions = {
    from:"kontakt@lenis-pro.de",
    to:"kontakt@lenis-pro.de",
}