import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReturnProcessProcedure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date_created: Date;

    @Column()
    date_deleted: Date;
}