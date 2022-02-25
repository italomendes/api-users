import { getCustomRepository } from 'typeorm';
import Department from '../typeorm/entities/Department';
import { DepartmentRepository } from '../typeorm/repositories/DepartmentRepository';

class ListByCostCenterService {
  public async execute(costCenterId: string): Promise<Department[]> {
    return getCustomRepository(DepartmentRepository).listByCostCenter(
      costCenterId,
    );
  }
}

export default ListByCostCenterService;
