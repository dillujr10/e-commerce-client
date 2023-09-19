import express from 'express';
import { register,login,updateUser,resetPassword } from '../controller/userController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router(); 

router.post('/register',register)
router.post('/login',login)
router.post('/updateUser',verifyUser,updateUser)
router.post('/resetPassword',verifyUser,resetPassword)

export default router;