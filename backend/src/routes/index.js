import { Router } from 'express';
import userRouter from './userRoutes.js';
import productRouter from './productRoutes.js';
import uploadRouter from './uploadRoutes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/uploads',uploadRouter);

export default router;