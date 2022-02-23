import CostCenter from '@modules/cost_center/typeorm/entities/CostCenter';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('department')
class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => CostCenter, costCenter => costCenter.id)
  @JoinColumn({ name: 'cost_center_id' })
  costCenterId: string;
}

export default Department;
