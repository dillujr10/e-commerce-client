
import express, { application } from 'express';
const app = express();
const port = 3000;
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoute from './routes/userRoute.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import cookieParser from 'cookie-parser';

app.use(express.json());
app.use(cookieParser());
app.use('/api/users',userRoute);
app.use('/api/products',productRoutes);
app.use('/api/carts',cartRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/admin',adminRoutes);

// error middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });



/// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{},(err)=>{
    if(err) throw err;
    console.log('Connected to MongoDB');
})

app.listen(3000,()=>{ 
    console.log(`Server is running on port ${port}`);
})

