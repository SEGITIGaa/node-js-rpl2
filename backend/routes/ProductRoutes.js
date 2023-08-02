import express  from "express";
import { getProducts, getProductById,saveProducts,updateProducts,deleteProducts } from "../controller/ProductController.js";

const router = express.Router();

router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.post('/products', saveProducts)
router.patch('/product/:id', updateProducts)
router.delete('/products', deleteProducts)

export default router;
