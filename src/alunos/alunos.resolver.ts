import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AlunosEntity } from './alunos.entity'
import { CreateAlunosDto } from './dto/create-alunos.dto'
import { AlunosService } from './alunos.service'
import { InputAlunos } from './inputs/alunos.input'

@Resolver(AlunosEntity)
export class AlunosResolver {
	constructor (private readonly alunosService: AlunosService) {}

	@Query(() => [ CreateAlunosDto ])
	async alunos () {
		return this.alunosService.getAlunos()
	}

	@Mutation(() => CreateAlunosDto)
	async createAluno (@Args('data') data: InputAlunos) {
		return this.alunosService.createAlunos(data)
	}
}