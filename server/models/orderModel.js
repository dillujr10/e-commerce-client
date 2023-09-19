import mongoose from "mongoose";
import { ObjectId } from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [{
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
    }],
    shippingInfo: {
        address: {
        type: String,
        required: true
        },
        city: {
        type: String,
        required: true,
        },
        phoneNo: {
        type: String,
      
        },
        postalCode: {
        type: String,
      
        },
        country: {
        type: String,
      
        }
    },
    paymentInfo: {
        id: {
        type: String,
        },
        status: {
        type: String,
        }
    },
    paidAt: {
        type: Date,
        default: Date.now
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
      
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        
        default: 0.0
    },
    totalPrice: {
        type: Number,
     
        default: 0.0
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt: {
        type: Date,
    }

   
  
}, { timestamps: true });


const order = mongoose.model('order', orderSchema);
export default order;