import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class Employer {
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
    age: string;

    @Column()
    gender: string;

    @Column()
    tel: string;

    @Column({
        default: 0,
    })
    status: number;

    @CreateDateColumn()
    created_at: Date;
}
