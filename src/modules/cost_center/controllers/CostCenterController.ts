import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateCostCenterService from '../services/CreateCostCenterService';
import UpdateCostCenterService from '../services/UpdateCostCenterService';
import { CostCenterRepository } from '../typeorm/repositories/CostCenterRepository';

export default class CostCenterController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCostCenter = new CreateCostCenterService();

    const costCenter = await createCostCenter.execute(request.body);

    return response.json(costCenter);
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const costCenter = await getCustomRepository(CostCenterRepository).getAll();

    return response.json(costCenter);
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const costCenter = await getCustomRepository(CostCenterRepository).findOne(
      id,
    );

    return response.json(costCenter);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { name } = request.body;

    const updateCostCenter = new UpdateCostCenterService();

    const costCenter = await updateCostCenter.execute(id, name);

    return response.json(costCenter);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    const costCenterDelete = await getCustomRepository(
      CostCenterRepository,
    ).delete(id);

    return response.json(costCenterDelete);
  }
}
