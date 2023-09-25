import { CreateDateColumn, PrimaryColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryColumn({ unique: true })
  vessel_code: string;

  @CreateDateColumn({ nullable: true })
  created_at?: Date;

  @CreateDateColumn({ nullable: true })
  deleted_at?: Date;

  @CreateDateColumn({ nullable: true })
  updated_at?: Date;
}
