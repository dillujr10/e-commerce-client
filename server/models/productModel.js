import mongoose from "mongoose";
import { ObjectId } from "mongoose";
const ProductSchema = new mongoose.Schema({
   title:{
         type:String,
         required:true,
         unique:true
    },
    price:{
            type:String,
            required:true,
            unique:true
    },
    category:{
           type:String,
           required:true
     
    },
    image:{
            type:String,
           
      },
    
    description:{
         type:String,
         required:true
    },
    countInStock:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    inStock:{
        type:Boolean,
        default:true
    },
    rating: {
     type: Number,
     min: 0,
     max: 5,
   },
   featured: {
     type: Boolean,
     default: false,
   },
},{timestamps:true}); 


const Product = mongoose.model('Product',ProductSchema);
export default Product;