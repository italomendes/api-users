import { Router } from 'express';
import DepartmentController from '../controller/DepartmentController';

const departmentRouter = Router();
const departmentController = new DepartmentController();

departmentRouter.post('/', departmentController.create);
departmentRouter.get('/', departmentController.getAll);
departmentRouter.put('/:id', departmentController.update);
departmentRouter.get('/cost-center/:id', departmentController.listByCostCenter);
departmentRouter.get('/:id', departmentController.get);
departmentRouter.delete('/:id', departmentController.delete);

export default departmentRouter;
