import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class gene_information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  entrez_id: string;

  @Column()
  hgnc_id: string;

  @Column()
  ensembl_id: string;

  @Column()
  mim_id: string;

  @Column()
  hprd_id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column('text')
  summary: string;
}
