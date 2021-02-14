import { ModeOfEntry } from "../../../student-registeration/studentRegisteration.types"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/student-registeration/users/entities/user.entity"


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column()
    matriculationNumber: string;
    
    //create a column, specify the type the variable, and set the default value
    @Column({type: 'enum', enum: ModeOfEntry, default: ModeOfEntry.UTME})
    modeOfEntry: ModeOfEntry;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;

    @JoinColumn()
    @OneToOne(type => User, user => user.student, {cascade:true})
    user: User

}
