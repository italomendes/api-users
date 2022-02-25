import Department from '../../../department/typeorm/entities/Department';
import Role from '../../../role/typeorm/entities/Role';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  passhash: string;

  @Column()
  departmentId: string;

  @Column()
  roleId: string;

  @ManyToOne(type => Department, department => Department, { eager: true })
  department: Department;

  @ManyToOne(type => Role, role => Role, { eager: true })
  role: Role;
}

export default User;
