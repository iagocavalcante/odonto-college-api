import { IsUUID } from 'class-validator'
import { ID, Field, ArgsType } from '@nestjs/graphql'
import { InputStudents } from '../inputs/students.input'

@ArgsType()
export class UpsertStudentDto {
  @Field(type => ID, { nullable: true })
  @IsUUID()
  id?: string;

  @Field()
  studentInput: InputStudents;
}