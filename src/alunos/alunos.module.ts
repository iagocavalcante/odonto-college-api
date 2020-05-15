import { AlunosResolver } from './alunos.resolver'
import { Module } from '@nestjs/common'
import { AlunosService } from './alunos.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AlunosRepository } from './alunos.repository'

@Module({
	imports: [ TypeOrmModule.forFeature([ AlunosRepository ]) ],
	providers: [ AlunosResolver, AlunosService ]
})
export class AlunosModule {}