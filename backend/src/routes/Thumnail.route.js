const express = require('express')
const route = express.Router()

const {CreateThumnailcards,ViewThumnailcards,getCourseCount} = require("../controller/Thumnailcard.controller")

route.post("/thumnail", CreateThumnailcards)
route.get("/thumnail",ViewThumnailcards)
route.get("/thumnail/count",getCourseCount)
module.exports = route