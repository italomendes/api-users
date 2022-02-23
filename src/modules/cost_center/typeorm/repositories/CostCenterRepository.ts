import { EntityRepository, Repository } from 'typeorm';
import CostCenter from '../entities/CostCenter';

@EntityRepository(CostCenter)
export class CostCenterRepository extends Repository<CostCenter> {
  public async findByName(name: string): Promise<CostCenter | undefined> {
    const costCenter = this.findOne({
      where: {
        name,
      },
    });

    return costCenter;
  }
}
