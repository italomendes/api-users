import { Router } from 'express';
import CostCenterController from '../controllers/CostCenterController';

const costCenterRouter = Router();
const costCenterController = new CostCenterController();

costCenterRouter.post('/', costCenterController.create);
costCenterRouter.get('/', costCenterController.getAll);
costCenterRouter.put('/:id', costCenterController.update);

export default costCenterRouter;
