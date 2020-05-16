import { Test, TestingModule } from '@nestjs/testing'
import { StudentsService } from './students.service'
import { StudentsEntity } from './students.entity'

describe('StudentsService', () => {
  let service: StudentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService, StudentsEntity],
    }).compile()

    service = module.get<StudentsService>(StudentsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return one new User', async () => {
    const mockAlunoEntity: StudentsEntity = {
      nome: 'John Doe',
      email: 'johndoe@johndoe.com',
      matricula: 1030038,
      cpf: '00000000000',
      rg: '2030300',
      cro: '12312332',
      dataNascimento: new Date('1992-20-12'),
    }

    const novoAluno: StudentsEntity = {
      id: 'e70dee79-0ecd-4991-9afe-bc5c298a2c1e',
      createdAt: new Date(),
      ...mockAlunoEntity,
    }

    jest.spyOn(service, 'upsertAluno').mockImplementation(() => Promise.resolve(novoAluno))

    expect(await service.upsertAluno(undefined, mockAlunoEntity)).toBe(novoAluno)
  })
})
