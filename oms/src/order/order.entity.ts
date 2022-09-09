import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_number: string;

    @Column()
    customer_id: number;

    @Column()
    order_type_id: number;

    @Column()
    order_status_id: number;
}