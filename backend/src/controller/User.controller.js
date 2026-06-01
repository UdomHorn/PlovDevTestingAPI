const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {User} = require("../models")

const JWT_SECRET = process.env.JWT_SECRET || "plovdev-dev-secret"
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d"

const buildUserPayload = (user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role || "student"
})

const createToken = (user) => {
    return jwt.sign(buildUserPayload(user), JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

// add data
const createUser = async  (req , res) => {
    try {

        const {firstName , lastName , email, password} = req.body

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({message : "All fields are required!"})
        }

        const existingUser = await User.findOne({ where: { email } })

        if (existingUser) {
            return res.status(409).json({message : "Email already exists!"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            firstName : firstName ,
            lastName : lastName ,
            email : email ,
            password: hashedPassword,
            role: "student"
        })

        res.json({
            message : "Create user successfully!" ,
            user : buildUserPayload(user)
        })

          
    } catch (error) {
        console.error(error)
        res.status(500).json({message : "Server error."})
    }
}


// read data
const viewUser = async(req , res) => {
    try {

        const users = await User.findAll() ;

        res.json({
            message : "Get user successfully!" , 
            users : users.map(buildUserPayload)
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message : "Server error."})
        
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

        const {firstName , lastName , email, password, role} = req.body ;

        const updateData = { firstName , lastName , email }

        if (password) {
            updateData.password = await bcrypt.hash(password, 10)
        }

        if (role) {
            updateData.role = role
        }

        const updateUser = await user.update(updateData)

        res.json({
            message : "update user successfully!" ,
            user : buildUserPayload(updateUser)

        })

    } catch (error) {
        console.error(error)
        res.status(500).json({message : "Server error."})
        
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
        console.error(error)
        res.status(500).json({message : "Server error."})
        
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required!" });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password || "");

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Wrong password" });
        }

        const safeUser = buildUserPayload(user)
        const token = createToken(user)

        res.json({
            message: "Login successful!",
            token,
            user: safeUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
}

const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id)

        if (!user) {
            return res.status(404).json({ message: "Email not found" })
        }

        res.json({
            message: "Get current user successfully!",
            user: buildUserPayload(user)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error." })
    }
}


module.exports = {
    createUser ,
    viewUser ,
    updateUser , 
    deleteUser,
    loginUser,
    getCurrentUser
}
