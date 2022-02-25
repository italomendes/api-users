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

  @Column({ name: 'department_id' })
  departmentId: string;

  @Column({ name: 'role_id' })
  roleId: string;

  @ManyToOne(() => Department, department => department.id)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => Role, role => role.id)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}

export default User;
