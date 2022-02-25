import { Router } from 'express';
import DepartmentController from '../controller/DepartmentController';

const departmentRouter = Router();
const departmentController = new DepartmentController();

departmentRouter.post('/', departmentController.create);
departmentRouter.get('/', departmentController.getAll);
departmentRouter.put('/:id', departmentController.update);
departmentRouter.get('/:id', departmentController.listByCostCenter);

export default departmentRouter;
