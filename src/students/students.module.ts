import { StudentsResolver } from './students.resolver'
import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentsRepository } from './students.repository'
import { RepositoryHelper } from 'src/common/helpers/repository.helper'
import { DateScalar } from 'src/common/scalars/date.scalar'

@Module({
	imports: [ TypeOrmModule.forFeature([ StudentsRepository ]) ],
	providers: [ StudentsResolver, StudentsService, RepositoryHelper, DateScalar ]
})
export class StudentsModule {}