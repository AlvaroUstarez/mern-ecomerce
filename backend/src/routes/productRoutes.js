import { Router } from "express";
import { 
    getProducts,
    getProductById,  
    deleteProduct, 
    createProduct, 
    updateProduct, 
    createProductReview,
    getTopProducts,
    } from '../controllers/productController.js';
import {admin, protect} from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/',getProducts);
router.get('/:id',getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.post('/',protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.post('/:id/reviews',protect, createProductReview);
router.get('/top', getTopProducts);


export default router;