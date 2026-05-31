const express = require("express") ;

const route = express.Router()

const {createUser , viewUser , updateUser , deleteUser, loginUser} = require("../controller/User.controller");

route.post("/user" , createUser)
route.get("/user" , viewUser)
route.put("/user/:id" , updateUser)
route.delete("/user/:id" , deleteUser)
route.post("/login" , loginUser)

module.exports = route