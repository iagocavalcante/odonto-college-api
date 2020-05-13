import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Pokemon1589346043015 implements MigrationInterface {

    private pokemonTable = new Table({
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
            }],
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.pokemonTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.pokemonTable);
    }

}
