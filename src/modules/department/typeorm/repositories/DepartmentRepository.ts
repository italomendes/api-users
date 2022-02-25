import { EntityRepository, Repository } from 'typeorm';
import Department from '../entities/Department';

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {
  public async findByName(name: string): Promise<Department | undefined> {
    const department = this.findOne({
      where: {
        name,
      },
    });

    return department;
  }

  public async getAll(): Promise<Department[]> {
    return await this.find();
  }

  public async exists(id: string): Promise<boolean> {
    return await !!this.findOne(id);
  }

  public async listByCostCenter(costCenterId: string): Promise<Department[]> {
    const departments = await this.find({
      where: { costCenterId },
    });

    return departments;
  }
}
