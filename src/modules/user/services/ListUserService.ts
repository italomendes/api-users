import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UserRepository';

class ListUserService {
  userRepository = getCustomRepository(UserRepository);
  public async usersByDepartment(departmentId: string): Promise<User[]> {
    //const userRepository = getCustomRepository(UserRepository);

    const users = await this.userRepository.listByDepartment(departmentId);

    return users;
  }

  public async listAll(): Promise<User[]> {
    return this.userRepository.listAll();
  }
}

export default ListUserService;
