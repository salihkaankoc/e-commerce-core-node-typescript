import mongoose, { Document, Schema } from 'mongoose';

interface Product extends Document {
    name: string;
    price: number;
    description: string;
    stock: number;
    image: string;
}

const ProductSchema: Schema = new Schema ({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    stock: {type: Number, required: true},
    imageUrl: {type: String, required: true},
});

const Product = mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema);
export default Product;