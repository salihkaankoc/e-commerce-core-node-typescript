"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const router = (0, express_1.Router)();
router.post('/', cartController_1.addToCart);
router.get('/', cartController_1.getCartItems);
exports.default = router;
