import { Router } from "express";
import { 
    addOrderItems,
    getOrderById,  
    uppdateOrderToPaid, 
    updateOrderToDelivered, 
    getMyOrders, 
    getOrders,
    
    } from '../controllers/orderController.js';
import {admin, protect} from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', protect, addOrderItems);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, uppdateOrderToPaid);
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);
router.get('/myorders', protect, getMyOrders);
router.get('/', protect, admin, getOrders);

export default router;