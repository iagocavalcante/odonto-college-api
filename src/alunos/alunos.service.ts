import { Injectable } from '@nestjs/common'
import { AlunosEntity } from './alunos.entity'
import { CreateAlunosDto } from './dto/create-alunos.dto'
import RepositoryFactory from 'src/repository-factory'

@Injectable()
export class AlunosService {
	constructor (private readonly repository: RepositoryFactory) {}

	async createAlunos (data: CreateAlunosDto): Promise<AlunosEntity> {
		const aluno = new AlunosEntity()
		aluno.nome =  data.nome
		aluno.email =  data.email
		aluno.matricula =  data.matricula
		aluno.cpf =  data.cpf
		aluno.rg =  data.rg
		aluno.cro =  data.cro
		aluno.dataNascimento =  data.dataNascimento

		await this.repository.aluno.save(aluno)

		return aluno
	}

	async getAlunos (): Promise<AlunosEntity[]>  {
		return await this.repository.aluno.find()
	}
}