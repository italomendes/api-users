import { Router } from 'express';
import DepartmentController from '../controller/DepartmentController';

const departmentRouter = Router();
const costCenterController = new DepartmentController();

departmentRouter.post('/', costCenterController.create);

export default departmentRouter;
