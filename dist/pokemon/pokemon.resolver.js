"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const pokemon_entity_1 = require("./pokemon.entity");
const create_pokemon_dto_1 = require("./dto/create-pokemon.dto");
const pokemon_service_1 = require("./pokemon.service");
const pokemon_input_1 = require("./inputs/pokemon.input");
let PokemonResolver = class PokemonResolver {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    async pokemon() {
        return this.pokemonService.getPokemons();
    }
    async createPokemon(data) {
        return this.pokemonService.createPokemon(data);
    }
};
__decorate([
    graphql_1.Query(() => [create_pokemon_dto_1.CreatePokemonDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PokemonResolver.prototype, "pokemon", null);
__decorate([
    graphql_1.Mutation(() => create_pokemon_dto_1.CreatePokemonDto),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pokemon_input_1.InputPokemon]),
    __metadata("design:returntype", Promise)
], PokemonResolver.prototype, "createPokemon", null);
PokemonResolver = __decorate([
    graphql_1.Resolver((of) => pokemon_entity_1.PokemonEntity),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonResolver);
exports.PokemonResolver = PokemonResolver;
//# sourceMappingURL=pokemon.resolver.js.map