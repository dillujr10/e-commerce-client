import e from "express"
import Product from "../models/productModel.js"

export const createProduct = async (req,res,next)=>{
    try {
        const newProduct = new Product({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            countInStock: req.body.countInStock,
            InStock: req.body.InStock,
            
        })
        const product = await newProduct.save()
        res.status(200).json({
            product
        })
    } catch (error) { 
        next(error)
    }
}

//get single product
export const getSingleProduct = async (req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({
            product
        })
    } catch (error) {
        next(error)
    }
} 


//get product by query
export const getProductByQuery = async (req,res,next)=>{

    const {min,max ,...others} =req.query;
    const  newmax = parseInt(max)
    const  newmin = parseInt(min)

            
    try {
        const products = await Product.find({
            ...others,
            price: { $gt: newmin | 2, $lt: newmax || 9999  },
        })
        console.log(typeof  products[0]?.price);
        console.log(typeof newmax);    
        res.status(200).json({
            products
        })
           
    } catch (error) {
        next(error)
    }
}

