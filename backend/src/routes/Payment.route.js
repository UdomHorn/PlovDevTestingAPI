const express = require("express")

const route = express.Router()

const {createPayment, viewPayments,viewPayment,updatePayment, deletePayment} = require("../controller/Payment.controller")


route.post("/payment",createPayment)
route.get("/payment",viewPayments)
route.get("/payment/:id",viewPayment)
route.put("/payment/:id",updatePayment)
route.delete("/payment/:id",deletePayment)

module.exports =  route