import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Pokemon1589346043015 implements MigrationInterface {
    private pokemonTable;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
