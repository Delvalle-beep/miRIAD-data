import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class mirna_information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mirna_symbol: string;

  @Column()
  mirbase_id: string;

  @Column()
  accession_id: string;

  @Column()
  chromosome: string;

  @Column()
  strand: string;

  @Column()
  start: number;

  @Column()
  end: number;

  @Column()
  sequence: string;

  @Column()
  intragenic: number;

  @Column()
  exonic: number;

  @Column()
  host_gene_information: number;

  @Column()
  host_gene_regions: number;

  @Column()
  direction: string;

  @Column()
  intron_exon_number: number;

  @Column()
  intron_length: number;

  @Column()
  distance_exon_upstream: number;

  @Column()
  number_tfbs: number;

  @Column()
  number_cpg: number;

  @Column()
  entrezid: number;
}
