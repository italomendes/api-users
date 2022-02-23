import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default Role;
