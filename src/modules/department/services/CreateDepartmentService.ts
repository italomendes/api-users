import { CostCenterRepository } from '@modules/cost_center/typeorm/repositories/CostCenterRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Department from '../typeorm/entities/Department';
import { DepartmentRepository } from '../typeorm/repositories/DepartmentRepository';

interface IRequest {
  name: string;
  costCenterId: string;
}

class CreateDepartmentService {
  public async execute({ name, costCenterId }: IRequest): Promise<Department> {
    const costCenterRepository = getCustomRepository(CostCenterRepository);
    const deparmentRepository = getCustomRepository(DepartmentRepository);

    const costCenterExist = costCenterRepository.findOne(costCenterId);

    if (!costCenterExist) {
      throw new AppError('Cost Center dont exists');
    }

    const department = deparmentRepository.create({
      name,
      costCenterId,
    });

    await deparmentRepository.save(department);

    return department;
  }
}

export default CreateDepartmentService;
