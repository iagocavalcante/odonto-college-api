import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity('tb_alunos')
export class AlunosEntity {
    @PrimaryGeneratedColumn('uuid') id: string

	@Column('varchar', { length: 255 })
	nome: string

	@Column('varchar', { length: 255, unique: true })
	email: string
    
    @Column('varchar', { length: 11, unique: true })
	cpf: string
    
    @Column('varchar', { length: 10, unique: true })
	rg: string
    
    @Column('varchar', { length: 8, unique: true })
	cro: string

    @Column('numeric')
    matricula: number

    @Column('date', { name: 'data_nascimento' })
    dataNascimento: Date
            
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
