import {Router} from 'express';
import {addToCart, getCartItems} from '../controllers/cartController';

const router = Router();


router.post('/', addToCart);
router.get('/', getCartItems);

export default router;