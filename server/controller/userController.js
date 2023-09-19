import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {createError} from '../utils/error.js'


//register
export const register = async (req, res,next) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cart: [],
        })
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: 360000 },)
        const user = await newUser.save()
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json({
            user,
            token

        })
    } catch (error) {
        next(error)
    } 
}

//login
export const login = async (req, res,next) => {
    try {
      
        const userExist= await User.findOne({email:req.body.email})
        if(!userExist) return next(createError(400,'User not found'))
        const validPassword = await bcrypt.compare(req.body.password, userExist.password)
        if(!validPassword) return next(createError(400,'Invalid password'))
        const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, { expiresIn: 360000 },)
        res.cookie('token', token, { httpOnly: true })
        res.status(200).json({
            userExist,
            token
        })
        
    } catch (error) {
       next(error)
        
    }

}


//logout
export const logout = async (req, res,next) => {
    try {
        res.clearCookie('token')
        res.status(200).json({msg:'Logged out'})
    } catch (error) {
        next(error)
    }
}

//update user
export const updateUser = async (req, res,next) => {
    const{password,...others}=req.body;
     try {
    
         const updateUser = await User.findByIdAndUpdate(req.user,{
            $set:{...others}
         },{new:true})
            res.status(200).json(updateUser)
        
     } catch (error) {
            next(error)
        
     }
}

//reset password
export const resetPassword = async (req, res,next) => {
    
  try {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
     const resetPassword = await User.findByIdAndUpdate(req.user,{
            $set:{
                password:hashedPassword
            }
            },{new:true})
            res.status(200).json(resetPassword)
  } catch (error) {
     next(error)
    
  }
}

