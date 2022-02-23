import CostCenter from '../../../cost_center/typeorm/entities/CostCenter';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('department')
class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => CostCenter, costCenter => costCenter.id)
  @JoinColumn({ name: 'cost_center_id' })
  costCenterId: string;
}

export default Department;
