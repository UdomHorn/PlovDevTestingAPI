const express = require('express')

const route = express.Router()

const {createCategory, viewCategories,viewCategory, updateCategory, deleteCategory} = require("../controller/Category.controller")


route.post("/category",createCategory)
route.get("/category",viewCategories)
route.get("/category/:id",viewCategory)
route.put("/category/:id",updateCategory)
route.delete("/category/:id",deleteCategory)

module.exports = route 
