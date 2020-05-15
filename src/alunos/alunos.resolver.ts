import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AlunosEntity } from './alunos.entity'
import { CreateAlunosDto } from './dto/create-alunos.dto'
import { AlunosService } from './alunos.service'
import { InputAlunos } from './inputs/alunos.input'

@Resolver(() => AlunosEntity)
export class AlunosResolver {
	constructor (private readonly alunosService: AlunosService) {}

	@Query(() => [ CreateAlunosDto ])
	public async alunos (): Promise<InputAlunos[]> {
		return await this.alunosService.getAlunos()
	}

	@Mutation(() => CreateAlunosDto)
	public async createAluno (@Args('data') data: InputAlunos) {
		return this.alunosService.createAlunos(data)
	}
}