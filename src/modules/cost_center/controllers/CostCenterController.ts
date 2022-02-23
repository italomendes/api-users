import { Request, Response } from 'express';
import CreateCostCenterService from '../services/CreateCostCenterService';

export default class CostCenterController {
  public async create(request: Request, response: Response): Promise<Response> {
    const name = request.body;

    const createCostCenter = new CreateCostCenterService();

    const costCenter = await createCostCenter.execute(name);

    return response.json(costCenter);
  }
}
