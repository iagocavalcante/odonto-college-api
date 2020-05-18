import { Field, InputType } from '@nestjs/graphql'
import { IdentificationDocumentTypeEnum } from 'src/entities/identification-document-enum.entity'

@InputType()
export class InputStudents {
	@Field()
	readonly fullName: string

	@Field() 
	readonly email: string
	
	@Field()
	readonly enrollmentNumber: number
	
	@Field({ nullable: true })
	readonly identificationDocumentType?: IdentificationDocumentTypeEnum
	
	@Field({ nullable: true })
	readonly identificationDocument?: string

	@Field({ nullable: true })
	readonly isSpecialization?: boolean
	
	@Field({ nullable: true })
	readonly cro?: string

	@Field(type => Date, { nullable: true })
	readonly birthDate?: Date
}
