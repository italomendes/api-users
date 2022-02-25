import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CostCenter from '../typeorm/entities/CostCenter';
import { CostCenterRepository } from '../typeorm/repositories/CostCenterRepository';

class UpdateCostCenterService {
  public async execute(
    id: string,
    name: string,
  ): Promise<CostCenter | AppError> {
    const costCenterRepository = getCustomRepository(CostCenterRepository);

    const costCenter = await costCenterRepository.findOne(id);

    if (!costCenterRepository.exists(id)) {
      return new AppError('Cost Center not found');
    }

    costCenter!.name = name;

    await costCenterRepository.update(id, costCenter!);

    return costCenter!;
  }
}

export default UpdateCostCenterService;
