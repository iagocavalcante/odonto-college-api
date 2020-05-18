import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { configService } from './config/config.service'
import { StudentsModule } from './students/students.module'
import StudentsDataloader from './students/students.dataloader'
import RepositoryFactoryModule from './common/repository/repository-factory.module'
import { ImageUploadModule } from './image-upload/image-upload.module'

const context = {
	StudentsDataloader: StudentsDataloader()
}
const modules = [StudentsModule, RepositoryFactoryModule, ImageUploadModule];
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
		StudentsModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}