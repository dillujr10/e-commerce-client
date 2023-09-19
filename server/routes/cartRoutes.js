import express from 'express';
import {createcart ,getcartItem,deletecartItem} from '../controller/cartController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router(); 
router.post('/createcart',verifyUser,createcart) 
router.get('/getcartItem',verifyUser,getcartItem) 
router.delete('/deletecartItem/:id',verifyUser,deletecartItem) 


export default router;