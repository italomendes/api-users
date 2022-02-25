import { EntityRepository, Repository } from 'typeorm';
import Role from '../entities/Role';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  public async exists(id: string): Promise<boolean> {
    return await !!this.findOne(id);
  }
}
