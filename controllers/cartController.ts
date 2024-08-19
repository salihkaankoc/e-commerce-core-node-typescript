import { Request, Response } from 'express';
import CartItem from '../models/cartModel';
import Product from '../models/productModel';


export const addToCart = async (req: Request, res: Response) => {
    const { productId, quantity } = req.body;
    try{
        const product = await Product.findById(productId);
        if(!product) return res.status(404).json({message: 'Product not found'});

        const cartItem = new CartItem({ productId, quantity });
        const savedItem = await cartItem.save();
        res.status(201).json(savedItem);
    } catch(err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}

export const getCartItems = async (req: Request, res: Response) => {
    try{
        const cartItems = await CartItem.find().populate('productId');
        res.json(cartItems);
    } catch(err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}

