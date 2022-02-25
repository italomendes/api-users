import Department from '../../../department/typeorm/entities/Department';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cost_center')
class CostCenter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(type => Department, departments => Department)
  departments: Department[];
}

export default CostCenter;
