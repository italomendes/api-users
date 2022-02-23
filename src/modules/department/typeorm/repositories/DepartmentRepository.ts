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
}
