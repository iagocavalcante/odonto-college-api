import DataLoader from 'dataloader';
import { getRepository } from 'typeorm';

import { StudentsEntity } from '../entities/students.entity';

const batchStudents = async (StudentsIds: number[]) => {
  const Students = await getRepository(StudentsEntity).findByIds(StudentsIds);

  const StudentsIdMap: { [alunoId: number]: StudentsEntity } = {};

  Students.forEach(student => {
    StudentsIdMap[student.id] = student;
  });

  return StudentsIds.map(alunoId => StudentsIdMap[alunoId]);
};

export default () => new DataLoader(batchStudents);