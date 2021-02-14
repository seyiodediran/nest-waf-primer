import { CreateUserDto } from "src/student-registeration/users/dto/create-user.dto"
import { ModeOfEntry } from "../../../student-registeration/studentRegisteration.types"


export class CreateStudentDto {
    readonly department: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: ModeOfEntry;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;

    readonly user: CreateUserDto; //in this case you want to create a user along with student

}
