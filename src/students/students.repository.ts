
import { EntityRepository, Repository } from 'typeorm'
import { StudentsEntity } from '../entities/students.entity'


@EntityRepository(StudentsEntity)
export class StudentsRepository extends Repository<StudentsEntity> {

}
