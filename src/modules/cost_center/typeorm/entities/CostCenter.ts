import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cost_center')
class CostCenter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default CostCenter;
