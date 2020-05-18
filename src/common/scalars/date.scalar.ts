import { CustomScalar, Scalar } from '@nestjs/graphql'
import { Kind, ValueNode } from 'graphql'

@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type';

  parseValue(value: Date): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): string {
    const formatedDate = new Date(value)
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    }
    return formatedDate.toLocaleDateString('pt-Br', options); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}