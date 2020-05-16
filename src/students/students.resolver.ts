import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { StudentsEntity } from './students.entity'
import { StudentsService } from './students.service'
import { InputStudents } from './inputs/students.input'
import { UpsertStudentDto } from './dto/students-upsert.dto'

@Resolver(() => StudentsEntity)
export class StudentsResolver {
	constructor (private readonly studentsService: StudentsService) {}

	@Query(() => [ StudentsEntity ])
	public async students (): Promise<StudentsEntity[]> {
		return await this.studentsService.getStudents()
	}

	@Query(() => StudentsEntity, { nullable: true })
	public async student(@Args('id') id: string): Promise<StudentsEntity> {
		return this.studentsService.getAluno(id)
	}

	@Mutation(() => StudentsEntity)
	async saveStudent(@Args() mutationArgs: UpsertStudentDto): Promise<StudentsEntity> {
		const { id, alunoInput }: { id?: string; alunoInput: InputStudents } = mutationArgs;
		return this.studentsService.upsertAluno(id, alunoInput);
	}

	@Mutation(() => Boolean)
	deleteStudent(@Args('id') id: string): Promise<boolean> {
		return this.studentsService.delete(id);
	}
}