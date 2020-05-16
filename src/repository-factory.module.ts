import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepositoryFactory from './repository-factory';
import { StudentsRepository } from './students/students.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([StudentsRepository])],
  providers: [RepositoryFactory],
  exports: [RepositoryFactory],
})
class RepositoryFactoryModule {}
export default RepositoryFactoryModule;