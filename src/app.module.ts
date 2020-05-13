import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { PokemonModule } from './pokemon/pokemon.module'
import { configService } from './config/config.service';
@Module({
	imports: [
		TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			debug: process.env.NODE_ENV === 'development',
		  }),
		PokemonModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}