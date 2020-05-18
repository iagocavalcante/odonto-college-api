import { Injectable } from '@nestjs/common'
import { StudentsEntity } from 'src/entities/students.entity'
import RepositoryFactory from 'src/common/repository/repository-factory'
import { InputStudents } from './inputs/students.input'
import { RepositoryHelper } from 'src/common/helpers/repository.helper'

@Injectable()
export class StudentsService {
	constructor (
		private readonly repository: RepositoryFactory,
		private readonly repositoryHelper: RepositoryHelper
	) {}

	async upsertStudent(id: string | undefined, student: InputStudents): Promise<StudentsEntity> {
		const { email }: { email: string } = student;
		const hasStudent: StudentsEntity = await this.repository.student.findOne({
		  where: {
			email
		  },
		});
	
		if (hasStudent) {
		  throw new Error(`E-mail ${email} já está em uso.`);
		}
	
		const newStudent: StudentsEntity = await this.repositoryHelper.getUpsertData(id, student, this.repository.student);
	
		return this.repository.student.save({ ...newStudent, active: true });
	}

	async getStudents (): Promise<StudentsEntity[]>  {
		return await this.repository.student.find()
	}
	
	async getStudent (id: string): Promise<StudentsEntity>  {
		return await this.repository.student.findOne(id)
	}

	async update(id: number, student: StudentsEntity): Promise<StudentsEntity> {
		const toUpdate = await this.repository.student.findOne(id);
	
		const updated = Object.assign(toUpdate, student);
		return await this.repository.student.save(updated);
	  }
	
	  async delete(email: string): Promise<boolean> {
		return Boolean(this.repository.student.softDelete({ email }))
	  }
}