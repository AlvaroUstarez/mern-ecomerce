import { Router } from "express";
import { 
    registerUser,
    authUser,
    getUsers, 
    getUserProfile, 
    updateUserProfile, 
    deleteUser, 
    getUserById, 
    updateUser, 
    } from '../controllers/userController.js';
import {admin, protect} from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', registerUser);
router.get('/', protect, admin, getUsers);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.delete('/:id', protect, admin, deleteUser);
router.get('/:id', protect, admin, getUserById);
router.put('/:id', protect, admin, updateUser);


export default router;