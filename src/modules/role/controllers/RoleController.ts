import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateRoleService from '../services/CreateRoleService';
import { RoleRepository } from '../typeorm/repositories/RoleRepository';

export default class RoleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const name = request.body;

    const createRole = new CreateRoleService();

    const role = await createRole.execute(name);

    return response.json(role);
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const roles = await getCustomRepository(RoleRepository).find();

    return response.json(roles);
  }
}
