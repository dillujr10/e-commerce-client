import express from 'express';
import {createProduct,getProductByQuery} from '../controller/productController.js';
const router = express.Router(); 

router.post('/createProduct',createProduct);
router.get('/getProductByQuery',getProductByQuery);
export default router;