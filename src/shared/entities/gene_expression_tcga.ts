import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { gene_information } from './gene_information';
import { tcga_information } from './tcga_information';

@Entity()
export class gene_expression_tcga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tpm_unstranded: number;

  @Column()
  mean_tpm_unstranded: number;

  @Column()
  median_tpm_unstranded: number;

  @Column()
  min_tpm_unstranded: number;

  @Column()
  max_tpm_unstranded: number;

  @Column()
  std_tpm_unstranded: number;

  @OneToMany(
    () => tcga_information,
    (tcga_information) => tcga_information.tcga_symbol,
  ) // note: we will create author property in the Photo class below
  tcga_symbol: tcga_information[];

  @ManyToOne(
    () => gene_information,
    (gene_information) => gene_information.symbol,
  )
  symbol: gene_information[];
}
