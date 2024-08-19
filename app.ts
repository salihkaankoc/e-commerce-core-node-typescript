import express from 'express';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));