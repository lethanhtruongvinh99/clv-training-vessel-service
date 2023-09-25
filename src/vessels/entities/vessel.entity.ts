import { BaseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Vessel extends BaseEntity {
  // vessel_code?:string,
  // vessel_name?: string,
  // carrier_code?: string,
  // call_sign?: string,
  // imo_num?: string,
  // type?: string,
  @Column({ nullable: true })
  vessel_name?: string;

  @Column({ nullable: true })
  carrier_code?: string;

  @Column({ nullable: true })
  call_sign?: string;

  @Column({ nullable: true })
  imo_num?: string;

  @Column({ nullable: true, type: 'enum', enum: ['TRUNK', 'FEEDER'] })
  type?: string;
}
