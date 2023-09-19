import User from "../models/userModel.js";
 import Product from "../models/productModel.js";
 import Order from "../models/orderModel.js";   


 //get all users by month
export const getallusersBymonth = async (req, res, next) => {
    
    try {
        const users = await User.aggregate([
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
        ]); 
        res.status(200).json(users);
        
    } catch (error) {
        next(error)
    }
}  

//get all users 
export const getallusers = async (req, res, next) => {
        
        try {
           const users = await User.find({}); 
            res.status(200).json(users);    
        } catch (error) {
            next(error)
        }
}

//get all products
export const getallproducts = async (req, res, next) => {
            
        try {
        
            const products = await Product.find({}); 
            res.status(200).json(products); 
        } catch (error) {
            next(error)
        }
}

//get all orders
export const getallorders = async (req, res, next) => {
                
            try {
                const orders = await Order.find({}); 
                res.status(200).json(orders);
            } catch (error) {
                next(error)
            }
}

//update product
export const updateProduct = async (req, res, next) => {
    try {
        const updateProduct= await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateProduct)
    } catch (error) {
        next(error)
    }
}

// delete product
export const deleteProduct = async (req, res, next) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteProduct)
    } catch (error) {
        next(error)
    }
}

//get all orders by month

export const getallordersBymonth = async (req, res, next) => {
    try {
        const orders = await Order.aggregate([
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
        ]); 
        res.status(200).json(orders);
        
    } catch (error) {
        next(error)
    }
}

// get profit by month
export const getProfitByMonth = async (req, res, next) => {
    try {
        const profit = await Order.aggregate([
            { $project: { month: { $month: "$createdAt" },totalPrice:1} },
            { $group: { _id: "$month", profit: { $sum: "$totalPrice" } } },
            { $sort: { _id: 1 } },
        ]); 
        res.status(200).json(profit);
        
    } catch (error) {
        next(error)
    }
}