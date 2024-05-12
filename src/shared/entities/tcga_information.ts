import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tcga_information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tcga_symbol: string;

  @Column()
  tcga_name: string;
}
