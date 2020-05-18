import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { IdentificationDocumentTypeEnum } from './identification-document-enum.entity'

@ObjectType()
@Entity('tb_students')
export class StudentsEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Field()
	@Column('varchar', { name: 'full_name', length: 255 })
	fullName: string

    @Field()
    @IsEmail()
	@Column('varchar', { length: 255, unique: true })
	email: string
    
    @Field({ nullable: true })
    @Column('enum', { name: 'identification_document_type', enum: IdentificationDocumentTypeEnum})
	identificationDocumentType?: IdentificationDocumentTypeEnum
    
    @Field({ nullable: true })
    @Column('varchar', { name: 'identification_document', length: 20 })
	identificationDocument?: string
    
    @Field({ nullable: true })
    @Column('varchar', { length: 8, unique: true })
	cro?: string

    @Field()
    @Column('numeric', { name: 'enrollment_number'})
    enrollmentNumber: number
    
    @Field({ nullable: true })
    @Column('boolean', { name: 'is_specialization' })
    isSpecialization?: boolean
    
    @Field(type => Date, { nullable: true })
    @Column('date', { name: 'birth_date' })
    birthDate?: Date
            
    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
    
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;
}
