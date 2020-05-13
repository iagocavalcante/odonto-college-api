"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const pokemon_service_1 = require("./pokemon.service");
describe('PokemonService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [pokemon_service_1.PokemonService],
        }).compile();
        service = module.get(pokemon_service_1.PokemonService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=pokemon.service.spec.js.map