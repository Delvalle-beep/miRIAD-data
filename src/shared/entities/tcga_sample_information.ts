import { Entity,
    Column, 
    PrimaryGeneratedColumn, 
    OneToMany, 
    JoinColumn,
    } from "typeorm"

import { tcga_information } from "./tcga_information"

@Entity()
export class tcga_sample_information {
    @Column()
    id: number

    @Column()
    sample_type: string

    @Column()
    case_id: string

    @Column()
    sample_id: string

    @OneToMany(() => tcga_information, (tcga_information => tcga_information.tcga_symbol)) // note: we will create author property in the Photo class below
    tcga_symbol: tcga_information[]

}