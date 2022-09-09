import { Customer } from "src/customer/customer.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address_1: string;

    @Column()
    address_2: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zip: string;

    @Column()
    country: string;

    @Column()
    customer: number;

}