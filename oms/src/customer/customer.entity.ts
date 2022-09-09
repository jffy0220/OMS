import { Address } from "src/address/address.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
    
    @Column()
    phone_1: string;

    @Column()
    email_1: string;
    
}