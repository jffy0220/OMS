import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receiver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    employee_id: number;

    @Column({ default: true })
    isActive: Boolean
}