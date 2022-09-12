import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PurchaseOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    po_number: string;

    @Column()
    date_created: Date;

    @Column()
    employee_id: number;

    @Column()
    supplier_id: number;

    @Column()
    shipping_address: string;
    
    @Column()
    receiving_address: string;

    @Column()
    date_expected: Date;

    @Column()
    date_delivered: Date;

    @Column()
    date_received: Date;

    @Column()
    receiver_id: number;

    @Column()
    number_items: number;

    @Column()
    item_value: number;

    @Column()
    shipping_cost: number;

    @Column()
    taxes: number;

    @Column()
    total_value: number;
}