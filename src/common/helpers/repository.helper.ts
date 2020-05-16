import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositoryHelper {
  async getUpsertData(id: string | undefined, fields: any, repository: Repository<any>): Promise<any> {
    if (id) {
      return {
        ...(await repository.findOne(id)),
        ...fields,
      };
    }

    return repository.create(fields);
  }
}
