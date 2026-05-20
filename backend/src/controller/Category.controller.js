const {categories} = require("../models")

// create categories
const createCategory = async (req, res)=>{
    try{
        const {categoryName} = req.body

       const category = await categories.create({
        categoryName:categoryName
    })
        res.json({
            message: "Create category successfully!",
            category: category
        })

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// view Categories
const viewCategories = async (req,res) => {
    try { 
        const Categories = await categories.findAll()
        res.json({
            message: "Get categories successfully!",
            Categories: Categories

        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateCategory = async (req,res) => {
    try{
        const {id} = req.params;
        const category = await categories.findByPk(id);

        if(!category){
            return res.status(404).json({
                message: "User not found!"
            })
        }

        const {categoryName} = req.body

        const updateCategory = await category.update({
            categoryName
        })

        res.json({
            message:"update category successfull!",
            category : updateCategory
        })

    }catch(error){
        res.status(500).json({message: error.message})
    }
}
// Viewbyid

const viewCategory = async (req,res)=>{
    try{
        const {id} = req.params

        const category = await categories.findByPk(id)
        if(!category){
            return res.status(404).json({message:"Category not found!!"})
        }
        res.json({
           category : category
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}




// delete Category

const deleteCategory = async (req,res)=>{
    try{
        const {id} = req.params
    const category = await categories.findByPk(id)

    if(!category){
        return res.status(404).json({message:"Category not found!"})
    }
    await category.destroy()
    res.json({
        message:"Category delete successfully!"
    })

    } catch (error){
        res.status(500).json({
            message:error.message
        })
    }
    
}


module.exports = {
    createCategory,
    viewCategories,
    updateCategory,
    deleteCategory,
    viewCategory
}

