
import { EntityRepository, Repository } from 'typeorm'
import { StudentsEntity } from './students.entity'


@EntityRepository(StudentsEntity)
export class StudentsRepository extends Repository<StudentsEntity> {

}
