import { Request, Response } from 'express';
import CreateDepartmentService from '../services/CreateDepartmentService';

export default class DepartmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    //const name = request.body;

    const createDepartment = new CreateDepartmentService();

    const department = await createDepartment.execute(request.body);

    return response.json(department);
  }
}
