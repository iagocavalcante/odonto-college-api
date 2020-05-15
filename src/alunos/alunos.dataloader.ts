import DataLoader from 'dataloader';
import { getRepository } from 'typeorm';

import { AlunosEntity } from './alunos.entity';

const batchAlunos = async (alunosIds: number[]) => {
  const alunos = await getRepository(AlunosEntity).findByIds(alunosIds);

  const alunosIdMap: { [alunoId: number]: AlunosEntity } = {};

  alunos.forEach(user => {
    alunosIdMap[user.id] = user;
  });

  return alunosIds.map(alunoId => alunosIdMap[alunoId]);
};

export default () => new DataLoader(batchAlunos);