import { Router } from 'express';
import RoleController from '../controllers/RoleController';

const roleRouter = Router();
const roleController = new RoleController();

roleRouter.post('/', roleController.create);
roleRouter.get('/', roleController.listAll);

export default roleRouter;
