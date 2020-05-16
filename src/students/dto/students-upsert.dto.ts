import { IsOptional, IsUUID } from 'class-validator'
import { ID, Field, ArgsType } from '@nestjs/graphql'
import { InputStudents } from 'src/students/inputs/students.input'

@ArgsType()
export class UpsertStudentDto {
  @Field(type => ID, { nullable: true })
  @IsOptional()
  @IsUUID()
  id?: string;

  @Field()
  alunoInput: InputStudents;
}