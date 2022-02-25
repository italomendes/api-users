import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateDepartmentService from '../services/CreateDepartmentService';
import ListByCostCenterService from '../services/ListByCostCenterService';
import { DepartmentRepository } from '../typeorm/repositories/DepartmentRepository';

export default class DepartmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    //const name = request.body;

    const createDepartment = new CreateDepartmentService();

    const department = await createDepartment.execute(request.body);

    return response.json(department);
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const department = await getCustomRepository(DepartmentRepository).getAll();

    return response.json(department);
  }

  public async listByCostCenter(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const service = new ListByCostCenterService();

    const result = await service.execute(request.params.id);

    if (result instanceof AppError) {
      return response.status(result.statusCode).json(result.message);
    }

    return response.json(result);
  }
}
