import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderLineItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item_id: number;

    @Column()
    quantity: number;

    @Column()
    order_id: number;
}