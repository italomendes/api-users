import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Department from '../typeorm/entities/Department';
import { DepartmentRepository } from '../typeorm/repositories/DepartmentRepository';

class UpdateDepartmentService {
  public async execute(id: string, data: Department) {
    const departmentRepository = getCustomRepository(DepartmentRepository);

    const department = await departmentRepository.findOne(id);

    if (!department) {
      return new AppError('Department not found');
    }

    department.name = data.name;
    department.costCenterId = data.costCenterId;

    await departmentRepository.update(id, data);

    return department;
  }
}

export default UpdateDepartmentService;
