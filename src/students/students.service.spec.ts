import { Test, TestingModule } from '@nestjs/testing'
import { StudentsService } from './students.service'
import { StudentsEntity } from '../entities/students.entity'
import { IdentificationDocumentTypeEnum } from '../entities/identification-document-enum.entity'
import { RepositoryHelper } from '../common/helpers/repository.helper'
import RepositoryFactory from '../common/repository/repository-factory'
import { StudentsModule } from './students.module'
import { StudentsRepository } from './students.repository'

describe('StudentsService', () => {
  let service: StudentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService, StudentsEntity, StudentsModule, RepositoryHelper, RepositoryFactory, StudentsRepository]
    }).compile()

    service = module.get<StudentsService>(StudentsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return one new Student', async () => {
    const mockStudentEntity: StudentsEntity = {
      fullName: 'John Doe',
      email: 'johndoe@johndoe.com',
      enrollmentNumber: 1030038,
      identificationDocument: '00000000000',
      identificationDocumentType: IdentificationDocumentTypeEnum.cpf,
      birthDate: new Date('1992-20-12'),
    }

    const newStudent: StudentsEntity = {
      id: 'e70dee79-0ecd-4991-9afe-bc5c298a2c1e',
      createdAt: new Date(),
      ...mockStudentEntity,
    }

    jest.spyOn(service, 'upsertStudent').mockImplementation(() => Promise.resolve(newStudent))

    expect(await service.upsertStudent(undefined, mockStudentEntity)).toBe(newStudent)
  })
  
  it('should return one Student', async () => {
    const mockStudentEntity: StudentsEntity = {
      fullName: 'John Doe',
      email: 'johndoe@johndoe.com',
      enrollmentNumber: 1030038,
      identificationDocument: '00000000000',
      identificationDocumentType: IdentificationDocumentTypeEnum.cpf,
      birthDate: new Date('1992-20-12'),
    }

    const student: StudentsEntity = {
      id: 'e70dee79-0ecd-4991-9afe-bc5c298a2c1e',
      createdAt: new Date(),
      ...mockStudentEntity,
    }

    jest.spyOn(service, 'getStudent').mockImplementation(() => Promise.resolve(student))

    expect(await service.getStudent('e70dee79-0ecd-4991-9afe-bc5c298a2c1e')).toBe(student)
  })
  
  it('should return array of Students', async () => {
    const mockStudentEntity: StudentsEntity = {
      fullName: 'John Doe',
      email: 'johndoe@johndoe.com',
      enrollmentNumber: 1030038,
      identificationDocument: '00000000000',
      identificationDocumentType: IdentificationDocumentTypeEnum.cpf,
      birthDate: new Date('1992-20-12'),
    }

    const students: StudentsEntity[] = [
      {
        id: 'e70dee79-0ecd-4991-9afe-bc5c298a2c1e',
        createdAt: new Date(),
        ...mockStudentEntity,
      },
      {
        id: 'e70dee79-0ecd-4991-9afe-bc5c298a2cae',
        createdAt: new Date(),
        ...mockStudentEntity,
      },
    ]

    jest.spyOn(service, 'getStudents').mockImplementation(() => Promise.resolve(students))

    expect(await service.getStudents()).toBe(students)
  })
  
  it('should return true when delete a Student', async () => {
    const email = 'johndoe@johndoe.com'

    jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(true))

    expect(await service.delete(email)).toBe(true)
  })
})
