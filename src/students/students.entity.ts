import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { EmailScalar } from 'src/common/scalars/email.scalar';
import { IsEmail } from 'class-validator';

@ObjectType()
@Entity('tb_students')
export class StudentsEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Field()
	@Column('varchar', { length: 255 })
	nome: string

    @Field()
    @IsEmail()
	@Column('varchar', { length: 255, unique: true })
	email: string
    
    @Field()
    @Column('varchar', { length: 11, unique: true })
	cpf?: string
    
    @Field()
    @Column('varchar', { length: 10, unique: true })
	rg?: string
    
    @Field()
    @Column('varchar', { length: 8, unique: true })
	cro: string

    @Field()
    @Column('numeric')
    matricula: number
    
    @Field()
    @Column('date', { name: 'data_nascimento' })
    dataNascimento?: Date
            
    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
    
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;
}
