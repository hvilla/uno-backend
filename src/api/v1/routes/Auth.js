import { Router } from 'express';
import UserController from '../controllers/Auth/User';

const router = Router();

router.post('/user',UserController.createUser);
router.get('/user/:id',UserController.getUserById);

export default router;