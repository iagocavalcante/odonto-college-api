import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { StudentsEntity } from '../entities/students.entity'
import { StudentsService } from './students.service'
import { InputStudents } from './inputs/students.input'
import { UpsertStudentDto } from './dto/students-upsert.dto'
import { UpdateResult } from 'typeorm'

@Resolver(() => StudentsEntity)
export class StudentsResolver {
	constructor (private readonly studentsService: StudentsService) {}

	@Query(() => [ StudentsEntity ])
	public async students (): Promise<StudentsEntity[]> {
		return await this.studentsService.getStudents()
	}

	@Query(() => StudentsEntity, { nullable: true })
	public async student(@Args('id') id: string): Promise<StudentsEntity> {
		return this.studentsService.getStudent(id)
	}

	@Mutation(() => StudentsEntity)
	async saveStudent(@Args() mutationArgs: UpsertStudentDto): Promise<StudentsEntity> {
		const { id, studentInput }: { id?: string; studentInput: InputStudents } = mutationArgs;
		return this.studentsService.upsertStudent(id, studentInput);
	}

	@Mutation(() => Boolean)
	deleteStudent(@Args('email') email: string): Promise<UpdateResult> {
		return this.studentsService.delete(email);
	}
}