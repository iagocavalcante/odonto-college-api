import { PokemonEntity } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { InputPokemon } from './inputs/pokemon.input';
export declare class PokemonResolver {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    pokemon(): Promise<PokemonEntity[]>;
    createPokemon(data: InputPokemon): Promise<PokemonEntity>;
}
