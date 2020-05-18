import { CustomScalar, Scalar } from '@nestjs/graphql'
import { Kind, ValueNode } from 'graphql'

@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<string | Date, Date> {
  description = 'Date custom scalar type';

  parseValue(value: Date): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): Date {
    return value // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}