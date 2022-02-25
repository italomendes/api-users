import { Router } from 'express';
import AuthUserController from '../controllers/AuthUserController';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();
const authUserController = new AuthUserController();

userRouter.post('/', userController.create);
userRouter.get('/', userController.listAll);
userRouter.get('department/:id', userController.listByDepartment);
userRouter.post('/login', authUserController.authenticate);
userRouter.get('/:id', userController.get);
userRouter.delete('/:id', userController.delete);

export default userRouter;
