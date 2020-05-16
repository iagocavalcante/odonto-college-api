import { Injectable } from '@nestjs/common'
import { StudentsEntity } from './students.entity'
import RepositoryFactory from 'src/repository-factory'
import { InputStudents } from './inputs/students.input'
import { RepositoryHelper } from 'src/common/helpers/repository.helper'

@Injectable()
export class StudentsService {
	constructor (
		private readonly repository: RepositoryFactory,
		private readonly repositoryHelper: RepositoryHelper
	) {}

	async upsertAluno(id: string | undefined, aluno: InputStudents): Promise<StudentsEntity> {
		const { email }: { email: string } = aluno;
		const hasAluno: StudentsEntity = await this.repository.aluno.findOne({
		  where: {
			email
		  },
		});
	
		if (hasAluno) {
		  throw new Error(`E-mail ${email} já está em uso.`);
		}
	
		const novoAluno: StudentsEntity = await this.repositoryHelper.getUpsertData(id, aluno, this.repository.aluno);
	
		return this.repository.aluno.save({ ...novoAluno, active: true });
	  }

	async createStudents (id: string | undefined, data: InputStudents): Promise<StudentsEntity> {
		const aluno = new StudentsEntity()
		aluno.nome =  data.nome
		aluno.email =  data.email
		aluno.matricula =  data.matricula
		aluno.cpf =  data?.cpf
		aluno.rg =  data?.rg
		aluno.cro =  data.cro
		aluno.dataNascimento =  data?.dataNascimento

		await this.repository.aluno.save(aluno)

		return aluno
	}

	async getStudents (): Promise<StudentsEntity[]>  {
		return await this.repository.aluno.find()
	}
	
	async getAluno (id: string): Promise<StudentsEntity>  {
		return await this.repository.aluno.findOne(id)
	}

	async update(id: number, aluno: StudentsEntity): Promise<StudentsEntity> {
		const toUpdate = await this.repository.aluno.findOne(id);
	
		const updated = Object.assign(toUpdate, aluno);
		return await this.repository.aluno.save(updated);
	  }
	
	  async delete(email: string): Promise<boolean> {
		return Boolean(this.repository.aluno.softDelete({ email }))
	  }
}