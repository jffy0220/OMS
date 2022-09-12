import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PurchaseOrderLineItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item_id: number;

    @Column()
    serial_number: string;

    @Column()
    date_shipped: Date;

    @Column()
    date_expected: Date;

    @Column()
    date_received: Date;

    @Column()
    item_condition: string;
}