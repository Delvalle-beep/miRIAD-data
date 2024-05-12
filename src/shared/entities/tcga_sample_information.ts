import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { tcga_information } from './tcga_information';

@Entity()
export class tcga_sample_information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sample_type: string;

  @Column()
  case_id: string;

  @Column()
  sample_id: string;

  @OneToMany(
    () => tcga_information,
    (tcga_information) => tcga_information.tcga_symbol,
  )
  tcga_symbol: tcga_information[];
}
