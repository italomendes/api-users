/* eslint-disable prettier/prettier */
import CostCenter from '@modules/cost_center/typeorm/entities/CostCenter';
import { CostCenterRepository } from '@modules/cost_center/typeorm/repositories/CostCenterRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Department from '../typeorm/entities/Department';
import { DepartmentRepository } from '../typeorm/repositories/DepartmentRepository';

class CreateDepartmentService {
  public async execute({ name, costCenterId }: any): Promise<Department> {
    const costCenterRepository = getCustomRepository(CostCenterRepository);
    const deparmentRepository = getCustomRepository(DepartmentRepository);

    // const costCenterExists = costCenterRepository.exists(costCenter.id);

    // if (!costCenterExists) {
    //   throw new AppError('Cost Center dont exists');
    // }

    const department = deparmentRepository.create({
      name,
      costCenterId,
    });

    await deparmentRepository.save(department);

    return department;
  }
}

export default CreateDepartmentService;
