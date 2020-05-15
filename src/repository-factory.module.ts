import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepositoryFactory from './repository-factory';
import { AlunosRepository } from './alunos/alunos.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AlunosRepository])],
  providers: [RepositoryFactory],
  exports: [RepositoryFactory],
})
class RepositoryFactoryModule {}
export default RepositoryFactoryModule;