const express = require("express")

const route = express.Router()
const { sendOtp, verifyOtp } = require("../controller/Otp.controller")

route.post("/otp/send", sendOtp)
route.post("/otp/verify", verifyOtp)

module.exports = route
