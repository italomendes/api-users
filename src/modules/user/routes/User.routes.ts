import { Router } from 'express';
import AuthUserController from '../controllers/AuthUserController';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();
const authUserController = new AuthUserController();

userRouter.post('/', userController.create);
userRouter.post('/login', authUserController.authenticate);

export default userRouter;
