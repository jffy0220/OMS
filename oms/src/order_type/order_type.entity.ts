import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order_Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date_created: Date;
}