const { Op, fn, col, where, literal } = require('sequelize')
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
        const { search } = req.query
        const whereClause = {}
        let order = []

        if (search && search.trim()) {
            const normalizedSearch = search.trim().replace(/\s+/g, ' ').toLowerCase()
            whereClause[Op.or] = [
                where(fn('LOWER', col('title')), {
                    [Op.like]: `%${normalizedSearch}%`
                }),
                where(fn('LOWER', col('category')), {
                    [Op.like]: `%${normalizedSearch}%`
                })
            ]

            const escapedSearch = normalizedSearch.replace(/'/g, "''")
            order = [
                [literal(
                    `CASE
                        WHEN LOWER(title) LIKE '${escapedSearch}%' THEN 0
                        WHEN LOWER(category) LIKE '${escapedSearch}%' THEN 1
                        WHEN LOWER(title) LIKE '%${escapedSearch}%' THEN 2
                        WHEN LOWER(category) LIKE '%${escapedSearch}%' THEN 3
                        ELSE 4
                    END`
                ), 'ASC'],
                ['title', 'ASC']
            ]
        }

        const newthumnails = await Thumnailcard.findAll({
            where: whereClause,
            ...(order.length ? { order } : {})
        })
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
