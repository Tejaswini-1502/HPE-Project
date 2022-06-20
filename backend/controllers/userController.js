import asyncHandler from 'express-async-handler'
import User from "../models/userModel.js";


// @desc: Auth the user 
// @route: POST /api/users/login
// @access: Public

const authUser = asyncHandler(async (req,res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    
    if(user && (await user.matchPassword(password))){
        res.json(
            {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            }
        )
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


// @desc: Register a new user
// @route: POST /api/users
// @access: Public

const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })
    
    if(userExists){
        res.status(400)
        throw new Error("User already Exists")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(400)
        throw new Error("Invalid User data")
    }
})

// @desc: Get user profile
// @route: GET /api/users/profile
// @access: Private

const getUserProfile = asyncHandler(async (req,res) => {
    
    res.send('Success')
})

export {
    authUser, 
    registerUser,
    getUserProfile 
}