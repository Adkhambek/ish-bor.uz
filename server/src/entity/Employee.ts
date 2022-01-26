import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string;

    @Column()
    qualification: string;

    @Column()
    experience: string;

    @Column()
    salary: string;

    @Column()
    type: string;

    @Column()
    region: string;

    @Column()
    detail: string;

    @Column()
    gender: string;

    @Column()
    tel: string;
}
