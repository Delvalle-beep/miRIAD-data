import { Entity, Column } from "typeorm"

@Entity()
export class tcga_information {
    @Column()
    id: number

    @Column()
    tcga_symbol: string

    @Column()
    tcga_name: string
}