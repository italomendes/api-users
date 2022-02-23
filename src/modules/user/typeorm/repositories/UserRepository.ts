import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async exists(id: string): Promise<boolean> {
    return await !!this.findOne(id);
  }
}
