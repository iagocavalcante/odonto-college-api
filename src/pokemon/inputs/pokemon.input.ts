import { Field, InputType } from 'type-graphql'

@InputType()
export class InputPokemon {
	@Field() readonly name: string
	@Field() readonly type: string
	@Field() readonly pokedex: number
}
