import { Student } from "src/student-registeration/students/entities/student.entity";
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column({nullable : true})
    middleName : string;

    @Column()
    lastName : string;

    @Column()
    email : string;

    @Column({nullable : true})
    dateOfBirth : Date;

    @Column({nullable : true})
    nationality : string;

    @Column({nullable : true})
    address : string;

    @Column({default : true})
    isActive : boolean;
    
    @OneToOne(type => Student, student => student.user)
    student: Student
}
