import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { StudentsRepository } from './students/students.repository'

@Injectable()
class RepositoryFactory {
  public constructor(
    @InjectRepository(StudentsRepository) public readonly aluno: StudentsRepository,
  ) {}
}

export default RepositoryFactory