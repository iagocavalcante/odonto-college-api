import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TbAlunos1589437438946 implements MigrationInterface {
    private tbAlunos = new Table({
        name: 'tb_alunos',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'uuid',
            },
            {
                name: 'nome',
                type: 'character',
                length: '255',
                isNullable: false,
            },
            {
                name: 'email',
                type: 'character',
                length: '255',
                isNullable: false,
            },
            {
                name: 'cpf',
                type: 'character',
                length: '11',
                isNullable: true,
            },
            {
                name: 'cro',
                type: 'character',
                length: '8',
                isNullable: false,
            },
            {
                name: 'rg',
                type: 'character',
                length: '10',
                isNullable: true,
            },
            {
                name: 'matricula',
                type: 'INTEGER',
                isNullable: false,
            },
            {
                name: 'data_nascimento',
                type: 'DATE',
                isNullable: true,
            },
            {
                name: 'created_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'deleted_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: true
            }],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.tbAlunos);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tbAlunos);
    }

}
