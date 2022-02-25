import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService();

    const result = await createUser.execute(request.body);

    if (result instanceof AppError) {
      return response.status(result.statusCode).json(result.message);
    }

    return response.json(result);
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listUserService = new ListUserService();

    const users = await listUserService.listAll();

    return response.json(users);
  }

  public async listByDepartment(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listUserService = new ListUserService();

    console.log(request.params.id);

    const users = await listUserService.usersByDepartment(request.params.id);

    return response.json(users);
  }
}
