import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService();

    const user = await createUser.execute(request.body);

    return response.json(user);
  }
}
