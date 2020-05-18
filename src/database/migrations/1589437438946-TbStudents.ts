import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TbStudents1589437438946 implements MigrationInterface {
    private tbStudents = new Table({
        name: 'tb_students',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'uuid',
            },
            {
                name: 'full_name',
                type: 'character',
                length: '255',
                isNullable: false,
            },
            {
                name: 'email',
                type: 'character',
                length: '255',
                isNullable: false,
                isUnique: true
            },
            {
                name: 'identification_document',
                type: 'character',
                length: '20',
                isNullable: true,
                isUnique: true
            },
            {
                name: 'identification_document_type',
                type: 'enum',
                enumName: 'identification_document_type',
                enum: ['cpf', 'rg', 'cnh']
            },
            {
                name: 'cro',
                type: 'character',
                length: '8',
                isNullable: true,
            },
            {
                name: 'is_specialization',
                type: 'boolean',
                isNullable: true,
            },
            {
                name: 'enrollment_number',
                type: 'character',
                length: '15',
                isNullable: false,
                isUnique: true
            },
            {
                name: 'birth_date',
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
        await queryRunner.createTable(this.tbStudents);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tbStudents);
    }

}
