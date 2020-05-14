import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputAlunos {
	@Field() readonly nome: string
	@Field() readonly email: string
	@Field() readonly matricula: number
	@Field() readonly cpf: string
	@Field() readonly rg: string
	@Field() readonly cro: string
	@Field() readonly dataNascimento: Date
}
