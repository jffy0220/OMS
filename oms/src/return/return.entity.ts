import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Return {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date_created: Date;

    @Column()
    employee_id: number;

    @Column()
    customer_id: number;

    @Column()
    item_id: number;

    @Column()
    returned_serial_number: string;

    @Column()
    date_returned: Date;

    @Column()
    return_type_id: number;

    @Column()
    process_procedure_id: number;

    @Column()
    customer_notes: string;

    @Column()
    employee_notes: string;

    @Column()
    order_id: number;
}