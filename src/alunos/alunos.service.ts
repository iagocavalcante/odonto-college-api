import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AlunosEntity } from './alunos.entity'
import { Repository } from 'typeorm'
import { CreateAlunosDto } from './dto/create-alunos.dto'

@Injectable()
export class AlunosService {
	constructor (@InjectRepository(AlunosEntity) private readonly AlunosRepository: Repository<AlunosEntity>) {}

	async createAlunos (data: CreateAlunosDto): Promise<AlunosEntity> {
		const aluno = new AlunosEntity()
		aluno.nome =  data.nome
		aluno.email =  data.email
		aluno.matricula =  data.matricula
		aluno.cpf =  data.cpf
		aluno.rg =  data.rg
		aluno.cro =  data.cro
		aluno.dataNascimento =  data.dataNascimento

		await this.AlunosRepository.save(aluno)

		return aluno
	}

	async getAlunos (): Promise<AlunosEntity[]> {
		return await this.AlunosRepository.find()
	}
}