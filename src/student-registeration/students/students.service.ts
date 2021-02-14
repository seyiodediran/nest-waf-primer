import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from "typeorm";

import { User } from '../users/entities/user.entity';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

import { Student } from './entities/student.entity';


@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    // return 'This action adds a new student';
    const newStudent = this.studentRepository.create(createStudentDto);

    if (createStudentDto.user) {
      const newUser = this.userRepository.create(createStudentDto.user);

      const user: User = await this.userRepository.save(newUser);
      newStudent.user = user;
    }
    return this.studentRepository.save(newStudent)
  }

  findAll() {
    // return `This action returns all students`;
  }

  findOne(id: number) {
    // return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    // return `This action updates a #${id} student`;
  }

  remove(id: number) {
    // return `This action removes a #${id} student`;
  }

  async setUserById(studentId: number, userId: number) {
    try {
      return await this.studentRepository.createQueryBuilder()
      .relation(Student, "user")
      .of(studentId)
      .set(userId)
    }
    catch (err){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR, 
        error: `There was a problem setting user for student: ${err.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(studentId: number) {
    try {
      return await this.studentRepository.createQueryBuilder()
      .relation(Student, "user")
      .of(studentId)
      .set(null)
    }
    catch (err){
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR, 
        error: `There was a problem unsetting user for student: ${err.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}




