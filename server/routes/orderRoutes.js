import express from 'express';
import { verifyUser } from '../utils/verifyToken.js';
import { createOrder,getOrders ,deleteOrder} from '../controller/orderController.js';
const router = express.Router(); 
router.get('/',(req,res)=>{
    res.send('Order route')
})
router.post('/createOrder/:id',verifyUser,createOrder) 
router.get('/getOrders',verifyUser,getOrders) 
router.get('/deleteOrder/:id',verifyUser,deleteOrder) 


export default router;