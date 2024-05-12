import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { mirna_information } from './mirna_information';
import { tcga_information } from './tcga_information';

@Entity()
export class mirna_expression_tcga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  read_count: number;

  @Column()
  mirna_expression_rpm: number;

  @Column()
  cross_mapped: string;

  @Column()
  mean_reads_per_million: number;

  @Column()
  median_reads_per_million: number;

  @Column()
  min_reads_per_million: number;

  @Column()
  max_reads_per_million: number;

  @Column()
  std_reads_per_million: number;

  @OneToMany(
    () => tcga_information,
    (tcga_information) => tcga_information.tcga_symbol,
  ) // note: we will create author property in the Photo class below
  tcga_symbol: tcga_information[];

  @ManyToOne(
    () => mirna_information,
    (mirna_information) => mirna_information.mirna_symbol,
  )
  mirna_symbol: mirna_information[];
}
