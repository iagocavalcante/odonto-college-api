import { StudentsResolver } from './students.resolver'
import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentsRepository } from './students.repository'
import { RepositoryHelper } from 'src/common/helpers/repository.helper'

@Module({
	imports: [ TypeOrmModule.forFeature([ StudentsRepository ]) ],
	providers: [ StudentsResolver, StudentsService, RepositoryHelper ]
})
export class StudentsModule {}