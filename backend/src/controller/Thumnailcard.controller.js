const {Thumnailcard} = require('../models')

// create tumnailcards

const CreateThumnailcards = async (req,res)=>{
    try{
        const {title,category,duration,price,oldPrice,rating,student} = req.body
        const newthumnails = await Thumnailcard.create({
            title:title,
            category:category,
            duration:duration,
            price:price,
            oldPrice:oldPrice,
            rating:rating,
            student:student
        })
        res.json({newthumnails:newthumnails})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// view thumnails

const ViewThumnailcards = async(req,res)=>{
    try{
        const newthumnails = await Thumnailcard.findAll()
        res.json({newthumnails:newthumnails})
    }
    catch(error){
        res.json({message: error.message})
    }
}

// count course

const getCourseCount = async (req,res) => {
    try{
        const count = await Thumnailcard.count()
        res.json({count})
        
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    CreateThumnailcards,
    ViewThumnailcards,
    getCourseCount
}