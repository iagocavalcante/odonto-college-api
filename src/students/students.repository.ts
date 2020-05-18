
import { EntityRepository, Repository } from 'typeorm'
import { StudentsEntity } from 'src/entities/students.entity'


@EntityRepository(StudentsEntity)
export class StudentsRepository extends Repository<StudentsEntity> {

}
