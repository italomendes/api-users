import costCenterRouter from '@modules/cost_center/routes/CostCenter.routes';
import departmentRouter from '@modules/department/routes/Department.routes';
import productsRouter from '@modules/products/routes/products.routes';
import roleRouter from '@modules/role/routes/Role.routes';
import userRouter from '@modules/user/routes/User.routes';
import { Router } from 'express';

const routes = Router();

//routes.use('/products', productsRouter);
routes.use('/cost-center', costCenterRouter);
routes.use('/department', departmentRouter);
routes.use('/role', roleRouter);
routes.use('/user', userRouter);

export default routes;
