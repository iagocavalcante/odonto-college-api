import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AlunosRepository } from './alunos/alunos.repository'

@Injectable()
class RepositoryFactory {
  public constructor(
    @InjectRepository(AlunosRepository) public readonly aluno: AlunosRepository,
  ) {}
}

export default RepositoryFactory