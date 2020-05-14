import { AlunosResolver } from './alunos.resolver'
import { Module } from '@nestjs/common'
import { AlunosService } from './alunos.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AlunosEntity } from './alunos.entity'

@Module({
	imports: [ TypeOrmModule.forFeature([ AlunosEntity ]) ],
	providers: [ AlunosResolver, AlunosService ]
})
export class AlunosModule {}