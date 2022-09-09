import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderTypeStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    order_type_id: number;

    @Column()
    order_step: number;
}