
import {createError} from '../utils/error.js'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
export const verifyToken = (req, res, next) => {

    const token = req.cookies.token
    if (!token) return next(createError(401, 'Access denied.'))
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.id
     
        next()
    } catch (e) {
        console.error(e)
        next(createError(401, 'Invalid token.'))
    }
}

export const verifyUser = (req, res, next) => {
verifyAdmin(req,res,next,()=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        next()
    }else{
        next(createError(401,'Not an Admin or User'))
    }
})
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
           next(createError(401,'Not an Admin'))
        }
    })
}

