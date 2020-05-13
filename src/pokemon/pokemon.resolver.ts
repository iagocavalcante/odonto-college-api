import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PokemonEntity } from './pokemon.entity'
import { CreatePokemonDto } from './dto/create-pokemon.dto'
import { PokemonService } from './pokemon.service'
import { InputPokemon } from './inputs/pokemon.input'

@Resolver((of) => PokemonEntity)
export class PokemonResolver {
	constructor (private readonly pokemonService: PokemonService) {}

	@Query(returns => [ CreatePokemonDto ])
	async pokemon () {
		return this.pokemonService.getPokemons()
	}

	@Mutation(returns => CreatePokemonDto)
	async createPokemon (@Args('data') data: InputPokemon) {
		return this.pokemonService.createPokemon(data)
	}
}