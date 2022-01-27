import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;

    @Column()
    password: string;
}
