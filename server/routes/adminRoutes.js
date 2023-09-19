import express from 'express';
import { getallusersBymonth,getallusers ,getallproducts,getallorders,deleteProduct,getallordersBymonth,getProfitByMonth} from '../controller/adminController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router(); 
router.get('/',(req,res)=>{
    res.send('Admin route')
})
router.get('/getallusersBymonth',verifyUser,getallusersBymonth)
router.get('/getallusers',verifyUser,getallusers)
router.get('/getallproducts',verifyUser,getallproducts)
router.get('/getallorders',verifyUser,getallorders)
router.get('/deleteProduct',verifyUser,deleteProduct)
router.get('/getallordersBymonth',verifyUser,getallordersBymonth)
router.get('/getProfitByMonth',verifyUser,getProfitByMonth)



export default router;