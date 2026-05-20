const {User} = require("../models")

const register = async ({firstName,lastName,email,password}) =>{
    const existingUser = await User.fineOne({where:{email}})

    if(existingUser){
        throw new Error("Email already existes")
    }


    
}