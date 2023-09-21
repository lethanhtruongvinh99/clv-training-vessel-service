import { BaseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Vessel extends BaseEntity {
  @Column()
  name: string;
}
