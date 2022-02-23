import { getCustomRepository } from 'typeorm';
import CostCenter from '../typeorm/entities/CostCenter';
import { CostCenterRepository } from '../typeorm/repositories/CostCenterRepository';

interface IRequest {
  name: string;
}

class CreateCostCenterService {
  public async execute({ name }: IRequest): Promise<CostCenter> {
    const costCenterRepository = getCustomRepository(CostCenterRepository);

    const costCenter = costCenterRepository.create({
      name,
    });

    await costCenterRepository.save(costCenter);

    return costCenter;
  }
}

export default CreateCostCenterService;
