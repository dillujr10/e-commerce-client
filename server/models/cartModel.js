import mongoose from "mongoose";
import { ObjectId } from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  cartItems: [{
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity can not be less then 1.'],
        default: 1
    }
  }]

   
  
}, { timestamps: true });


const cart = mongoose.model('cart', cartSchema);
export default cart;