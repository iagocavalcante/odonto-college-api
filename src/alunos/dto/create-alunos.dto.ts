import { Field, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class CreateAlunosDto {
	@Field() readonly id?: string
	@Field() readonly nome: string
	@Field() readonly email: string
	@Field() readonly matricula: number
	@Field() readonly cpf: string
	@Field() readonly rg: string
	@Field() readonly cro: string
	@Field() readonly dataNascimento: Date
}
