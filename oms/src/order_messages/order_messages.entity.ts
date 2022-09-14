import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderMessages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_id: number;

    @Column()
    employee_name: string;

    @Column()
    message: string;
    
    @Column()
    date_created: Date;
}