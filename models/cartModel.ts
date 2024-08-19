import mongoose, { Document, Schema } from 'mongoose';


interface CartItem extends Document {
    productId: mongoose.Schema.Types.ObjectId;
    quantity: Number;
}

const CartItemSchema: Schema = new Schema ({
    productId: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: {type: Number, required: true},
})

const CartItem = mongoose.models.Product || mongoose.model<CartItem>('CartItem', CartItemSchema);

export default CartItem;