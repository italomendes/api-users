import { getCustomRepository } from 'typeorm';
import Role from '../typeorm/entities/Role';
import { RoleRepository } from '../typeorm/repositories/RoleRepository';

interface IRequest {
  name: string;
}

class CreateRoleService {
  public async execute({ name }: IRequest): Promise<Role> {
    const roleRepository = getCustomRepository(RoleRepository);

    const role = roleRepository.create({
      name,
    });

    await roleRepository.save(role);

    return role;
  }
}

export default CreateRoleService;
