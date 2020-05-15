import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { configService } from './config/config.service'
import { AlunosModule } from './alunos/alunos.module'
import AlunosDataloader from './alunos/alunos.dataloader'
import RepositoryFactoryModule from './repository-factory.module'

const context = {
	AlunosDataloader: AlunosDataloader()
}
const modules = [AlunosModule, RepositoryFactoryModule];
@Module({
	imports: [
		...modules,
		TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			debug: process.env.NODE_ENV === 'development',
			installSubscriptionHandlers: true,
			context
		  }),
		AlunosModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}