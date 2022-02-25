import { DepartmentRepository } from '@modules/department/typeorm/repositories/DepartmentRepository';
import { RoleRepository } from '@modules/role/typeorm/repositories/RoleRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../typeorm/repositories/UserRepository';
import Department from '@modules/department/typeorm/entities/Department';
import Role from '@modules/role/typeorm/entities/Role';

interface IRequest {
  name: string;
  username: string;
  password: string;
  departmentId: string;
  roleId: string;
}

class CreateUserService {
  public async execute({
    name,
    username,
    password,
    departmentId,
    roleId,
  }: IRequest): Promise<User | AppError> {
    const userRepository = getCustomRepository(UserRepository);
    // const deparmentRepository = getCustomRepository(DepartmentRepository);
    // const roleRepository = getCustomRepository(RoleRepository);

    // const departmentExists = deparmentRepository.exists(department.id);
    // const roleExists = roleRepository.exists(role.id);

    if (await userRepository.findOne({ username })) {
      return new AppError('Username already exists');
    }

    // if (!departmentExists) {
    //   throw new AppError('Department dont exists');
    // }

    // if (!roleExists) {
    //   throw new AppError('Role dont exists');
    // }

    const passhash = await bcrypt.hash(password, 10);

    const user = userRepository.create({
      name,
      username,
      passhash,
      departmentId,
      roleId,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
