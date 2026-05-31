const {User} = require("../models")

// add data
const createUser = async  (req , res) => {
    try {

        const {firstName , lastName , email, password} = req.body

        const user = await User.create({
            firstName : firstName ,
            lastName : lastName ,
            email : email ,
            password: password
        })

        res.json({
            message : "Create user successfully!" ,
            user : user
        })

          
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


// read data
const viewUser = async(req , res) => {
    try {

        const users = await User.findAll() ;

        res.json({
            message : "Get user successfully!" , 
            users : users
        })
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

// update data 
const updateUser = async (req , res) => {
    try {
        
        const {id} = req.params ;

        const user = await User.findByPk(id) ;

        if (!user) {
            return res.status(404).json({
                message : "User not found!"
            })
        }

        const {firstName , lastName , email, password} = req.body ;

        const updateUser = await user.update({
            firstName , lastName , email, password
        })

        res.json({
            message : "update user successfully!" ,
            user : updateUser

        })

    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

// delete user
const deleteUser = async (req , res) => {
    try {
        const {id} = req.params ;

        const user = await User.findByPk(id) ;

        if (!user) {
            return res.status(404).json({
                message : "user not found!"
            })
        }

        await user.destroy()

        res.json({
            message : "Delete user successfully!"
        })
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required!" });
        }

        const user = await User.findOne({ where: { email, password } });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        res.json({
            message: "Login successful!",
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createUser ,
    viewUser ,
    updateUser , 
    deleteUser,
    loginUser
}