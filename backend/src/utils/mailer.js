const nodemailer = require("nodemailer")

const hasSmtpConfig = () => {
    return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS)
}

const sendOtpEmail = async ({ email, code }) => {
    if (!hasSmtpConfig()) {
        throw new Error("Email service is not configured.")
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Your PlovDev OTP code",
        text: `Your OTP code is ${code}. It expires in 10 minutes.`
    })

    return { delivered: true }
}

module.exports = { sendOtpEmail }
