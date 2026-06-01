const bcrypt = require("bcrypt")
const { Op } = require("sequelize")
const { OtpCode, User } = require("../models")
const { sendOtpEmail } = require("../utils/mailer")

const OTP_TTL_MINUTES = 10

const createOtp = () => String(Math.floor(1000 + Math.random() * 9000))

const sendOtp = async (req, res) => {
    try {
        const email = req.body.email?.trim()

        if (!email) {
            return res.status(400).json({ message: "Email is required." })
        }

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(404).json({ message: "Email not found" })
        }

        const code = createOtp()
        const hashedCode = await bcrypt.hash(code, 10)
        const expiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000)

        await OtpCode.create({
            userId: user.id,
            email: user.email,
            code: hashedCode,
            expiresAt,
            usedAt: null
        })

        await sendOtpEmail({ email, code })

        res.json({ message: `OTP sent to ${email}.` })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message || "Server error." })
    }
}

const verifyOtp = async (req, res) => {
    try {
        const email = req.body.email?.trim()
        const { code } = req.body

        if (!email || !code) {
            return res.status(400).json({ message: "Email and OTP code are required." })
        }

        if (!/^\d{4}$/.test(String(code))) {
            return res.status(400).json({ message: "OTP code must be 4 digits." })
        }

        const otpRecord = await OtpCode.findOne({
            where: {
                email,
                usedAt: null,
                expiresAt: {
                    [Op.gt]: new Date()
                }
            },
            order: [["createdAt", "DESC"]]
        })

        if (!otpRecord) {
            return res.status(400).json({ message: "OTP code is invalid or expired." })
        }

        const isValidCode = await bcrypt.compare(String(code), otpRecord.code)

        if (!isValidCode) {
            return res.status(400).json({ message: "OTP code is invalid or expired." })
        }

        await otpRecord.update({ usedAt: new Date() })

        res.json({ message: "OTP verified successfully." })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error." })
    }
}

module.exports = { sendOtp, verifyOtp }
