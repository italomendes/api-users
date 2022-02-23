import { Request, Response } from 'express';
import CreateRoleService from '../services/CreateRoleService';

export default class RoleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const name = request.body;

    const createRole = new CreateRoleService();

    const role = await createRole.execute(name);

    return response.json(role);
  }
}
