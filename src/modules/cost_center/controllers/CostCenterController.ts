import { Request, Response } from 'express';
import CreateCostCenterService from '../services/CreateCostCenterService';
import UpdateCostCenterService from '../services/UpdateCostCenterService';

export default class CostCenterController {
  public async create(request: Request, response: Response): Promise<Response> {
    const name = request.body;

    const createCostCenter = new CreateCostCenterService();

    const costCenter = await createCostCenter.execute(name);

    return response.json(costCenter);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { name } = request.body;

    const updateCostCenter = new UpdateCostCenterService();

    const costCenter = await updateCostCenter.execute(id, name);

    return response.json(costCenter);
  }
}
