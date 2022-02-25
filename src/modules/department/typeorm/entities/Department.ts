import CostCenter from '../../../cost_center/typeorm/entities/CostCenter';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../../../user/typeorm/entities/User';

@Entity('department')
class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  costCenterId: string;

  @ManyToOne(type => CostCenter, costCenters => CostCenter, { eager: true })
  costCenter: CostCenter;

  @OneToMany(type => User, users => User)
  users: User[];
}

export default Department;
