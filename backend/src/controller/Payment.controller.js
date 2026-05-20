const {Payment} = require("../models")

// Create Payment
const createPayment = async (req, res)=>{
    try{
        const {amount, commission, teacherPayout, status} = req.body
        const payment = await Payment.create({
            amount:amount,
             commission:commission,
              teacherPayout:teacherPayout,
               status:status
        })
        return res.status(201).json({
            payment:payment
        })
    }
    catch(error){
        res.status(500).json(
            {message: error.message}
        )
    }
}

// View Payments

const viewPayments = async(req,res)=>{
    try{
        const payment = await Payment.findAll()
       
        res.json({payment:payment})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// View Payment
const viewPayment = async (req,res)=>{
    try{
        const {id} = req.params
        const payment =await Payment.findByPk(id)
        if(!payment){
            return res.json({message: "Payment not Found!!!"})
        }
        res.json({payment:payment})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// updatePayment
const updatePayment = async (req,res) =>{
    try{
        const {id} = req.params
        const payment = await Payment.findByPk(id)
        
        if(!payment){
            return res.status(404).json({message: "Payment Not Found!!"})
        }
        const {amount, commission, teacherPayout, status} = req.body
        const updatePayment = await payment.update({
            amount, commission, teacherPayout, status
        })
        res.json({
            message:"Update payment successfully!!",
            payment:updatePayment
        })

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
// Delete Payment

const deletePayment = async (req,res)=>{
    const {id} = req.params
    const payment =await Payment.findByPk(id)
    if(!payment){
       return res.status(404).json({message: "Payment not found!!"})
    }
    await payment.destroy()
    res.json({message:"Delete payment successfully!!!!!"})
}

module.exports = {
    createPayment,
    viewPayments,
    viewPayment,
    updatePayment,
    deletePayment
}

