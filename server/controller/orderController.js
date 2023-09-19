
import mongoose from "mongoose";
import order from "../models/orderModel.js";
import product from "../models/productModel.js";


//create order
export const createOrder = async (req, res,next) => {
    const {  shippingInfo } = req.body;
    const itemid = req.params.id;

    try {
        const Product=await product.findById(itemid);
        const itemPrice=parseInt(Product?.price,10);
        

        const Order = new order({
            user:  mongoose.Types.ObjectId(req.user),
            orderItems: [{ itemId: mongoose.Types.ObjectId(itemid) }],
            itemsPrice: itemPrice,
            taxPrice:itemPrice*2/100,
             totalPrice:itemPrice+itemPrice*2/100+itemPrice*1.75/100,
             shippingPrice:itemPrice*1.75/100 ,
            shippingInfo,
           
        })

        const item = await order.findOne({ 'orderItems.itemId': itemid });
        const user = await order.findOne({ user: req.user })
        if (user) {
            if(item){
                const updatedItem = await order.findOneAndUpdate({ 'orderItems.itemId': itemid }, {
                    $inc: { 'orderItems.$.quantity': 1 }
                }, { new: true });
                return res.status(200).json('item updated');
            }else{
                const updatedItem = await order.findOneAndUpdate({ user: req.user }, {
                    $push: { orderItems: { itemId: mongoose.Types.ObjectId(itemid) } }

                }, { new: true })
                return res.status(200).json('new item added to your  cart');
            }
        }

        const orderItem = await Order.save();
        res.status(200).json(orderItem);

    } catch (error) {
        next(error);
        
    }
}

// get order

export const getOrders = async (req, res,next) => {
    try {
        const orders = await order.find({ user: req.user }).populate('user').populate('orderItems.itemId');
        res.status(200).json(orders);
    } catch (error) {
        next(error);
        
    }
}






//delete order i
export const    deleteOrder = async (req, res, next) => {
    try {
       const itemid= req.params.id;
       const user = await order.findOne({ user: req.user })
         if(user){
            const item = await order.findOne({ 'orderItems.itemId': itemid });
            if(item){
                console.log(item);
                const updatedItem = await order.findOneAndUpdate({ 'orderItems.itemId': itemid }, {
                    $pull: { orderItems: { itemId: mongoose.Types.ObjectId(itemid) } }
                }, { new: true })
                res .status(200).json("item deleted");
            }
            else{
                return res.status(200).json('item not found');
            }
         }
    } catch (error) {
        
    }
}







// {
//     "shippingInfo":{
//       "address":"anikkadan",
//       "city":"mannarkkad",
//       "phoneNo":"67312978"
      
//     },
//     "paymentInfo":{
//       "id":"786he913280",
//       "status":"completed"
//     }
//   }
  