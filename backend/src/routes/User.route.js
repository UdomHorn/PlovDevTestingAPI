const express = require("express") ;

const route = express.Router()

const {createUser , viewUser , updateUser , deleteUser, loginUser, getCurrentUser} = require("../controller/User.controller");
const { protect } = require("../middleware/auth.middleware");

route.post("/user" , createUser)
route.get("/user" , viewUser)
route.put("/user/:id" , updateUser)
route.delete("/user/:id" , deleteUser)
route.post("/login" , loginUser)
route.get("/me", protect, getCurrentUser)

module.exports = route
