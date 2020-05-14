import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { configService } from './config/config.service';
import { AlunosModule } from './alunos/alunos.module'
@Module({
	imports: [
		TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			debug: process.env.NODE_ENV === 'development',
		  }),
		AlunosModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}