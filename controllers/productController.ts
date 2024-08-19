import { Request, Response } from 'express';
import Product from '../models/productModel';


export const getProducts = async (req: Request, res: Response) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try{
        const product = await Product.findById(req.params.id);
        console.log(req.params.id);
        if(!product) return res.status(404).json({message: 'Product not found'});
        res.json(product);
    } catch(err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const {name, price, description, stock} = req.body;
    const product = new Product({name, price, description, stock});

    try{
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch(err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}