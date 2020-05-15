
import { EntityRepository, Repository } from 'typeorm'
import { AlunosEntity } from './alunos.entity'


@EntityRepository(AlunosEntity)
export class AlunosRepository extends Repository<AlunosEntity> {

}
