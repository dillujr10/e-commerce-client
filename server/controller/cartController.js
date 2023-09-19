
import cart from '../models/cartModel.js';
import mongoose from 'mongoose';
import User from '../models/userModel.js';



// add item to cart

export const createcart = async (req, res, next) => {
    const itemId = req.params.id;

    try {
        const newcart = new cart({
            cartItems: [{ itemId: mongoose.Types.ObjectId(itemId) }],
            user: mongoose.Types.ObjectId(req.user),
        })

        const item = await cart.findOne({ 'cartItems.itemId': itemId });

        const user = await cart.findOne({ user: req.user })
        if (user) {
            if (item) {
                const updatedItem = await cart.findOneAndUpdate({ 'cartItems.itemId': itemId }, {
                    $inc: { 'cartItems.$.quantity': 1 }
                }, { new: true });
                return res.status(200).json('item updated');
            } else {

                const updatedItem = await cart.findOneAndUpdate({ user: req.user }, {
                    $push: { cartItems: { itemId: mongoose.Types.ObjectId(itemId) } }

                }, { new: true })
                return res.status(200).json('new item added to your  cart');
            }
        }

        const cartItem = await newcart.save();
        res.status(200).json(cartItem);
    } catch (error) {
        next(error);
    }
}

//get cart items
export const getcartItem = async (req, res, next) => {
    try {
        const item = await cart.find({ user: req.user }).populate('user').populate('cartItems.itemId');
        res.status(200).json(item);

    } catch (error) {
        next(error);
    }
}

//delete cart item
export const    deletecartItem = async (req, res, next) => {
    try {
       const itemid= req.params.id;
       const user = await cart.findOne({ user: req.user })
         if(user){
            const item = await cart.findOne({ 'cartItems.itemId': itemid });
            if(item){
                console.log(item);
                const updatedItem = await cart.findOneAndUpdate({ 'cartItems.itemId': itemid }, {
                    $pull: { cartItems: { itemId: mongoose.Types.ObjectId(itemid) } }
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
