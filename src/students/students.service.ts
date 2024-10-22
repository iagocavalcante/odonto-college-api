import { Injectable } from '@nestjs/common'
import { StudentsEntity } from '../entities/students.entity'
import RepositoryFactory from '../common/repository/repository-factory'
import { InputStudents } from './inputs/students.input'
import { RepositoryHelper } from '../common/helpers/repository.helper'
import { UpdateResult } from 'typeorm'

@Injectable()
export class StudentsService {
	constructor (
		private readonly repository: RepositoryFactory,
		private readonly repositoryHelper: RepositoryHelper
	) {}

	async upsertStudent(id: string | undefined, student: InputStudents): Promise<StudentsEntity> {
		const newStudent: StudentsEntity = await this.repositoryHelper.getUpsertData(id, student, this.repository.student);
	
		return this.repository.student.save({ ...newStudent, active: true });
	}

	async getStudents (): Promise<StudentsEntity[]>  {
		return await this.repository.student.find()
	}
	
	async getStudent (id: string): Promise<StudentsEntity>  {
		return await this.repository.student.findOne(id)
	}
	
	async delete(email: string): Promise<UpdateResult> {
		return await this.repository.student.softDelete({ email })
	}
}