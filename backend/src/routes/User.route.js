const express = require("express") ;

const route = express.Router()

const {createUser , viewUser , updateUser , deleteUser} = require("../controller/User.controller");

route.post("/user" , createUser)
route.get("/user" , viewUser)
route.put("/user/:id" , updateUser)
route.delete("/user/:id" , deleteUser)

module.exports = route