"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Pokemon1589346043015 {
    constructor() {
        this.pokemonTable = new typeorm_1.Table({
            name: 'pokemon',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'name',
                    type: 'character',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'type',
                    type: 'character',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'pokedex',
                    type: 'INTEGER',
                    isNullable: false,
                }
            ],
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.pokemonTable);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.pokemonTable);
    }
}
exports.Pokemon1589346043015 = Pokemon1589346043015;
//# sourceMappingURL=1589346043015-Pokemon.js.map