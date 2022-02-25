import AppError from '@shared/errors/AppError';
import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async exists(id: string): Promise<boolean> {
    return await !!this.findOne(id);
  }

  public async findByUserName(username: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { username } });

    return user;
  }

  public async listAll(): Promise<User[]> {
    const users = await this.find({ relations: ['department', 'role'] });

    return users;
  }

  public async listByDepartment(departmentId: string): Promise<User[]> {
    const users = await this.find({
      relations: ['department', 'role'],
      where: { departmentId },
    });

    return users;
  }

  public async isValidPassword(
    passwordDb: string,
    passwordInput: string,
  ): Promise<boolean> {
    const isValidPassword = await bcrypt.compare(passwordInput, passwordDb);

    return isValidPassword;
  }
}
