
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MomentService } from '../shared/moment.service';
import { AulasDTO } from './dto/aulas.dto';

@Injectable()
export class AulasService {
  constructor(
    private prisma: PrismaService,
    private momentService: MomentService,
  ) {}

  async findAll() {
    return this.prisma.aula.findMany({
      include: {
        professor: { select: { id: true, nome: true }},
        turma: { select: { id: true, descricao: true }},
        aluno: { select: { id: true, nome: true }}
      }
    })
  }

  async findByID(id: number) {
    return this.prisma.aula.findUnique({where: {id}})
  }

  async create(obj: AulasDTO) {
    const { professorId, turmaId, alunosId, status, tema, usuariocriacao, datacriacao, usuarioalteracao, dataalteracao, ...rest } = obj;
  
    const createdAula = await this.prisma.aula.create({
      data: {
        professor: {
          connect: { id: professorId }
        },
        turma: {
          connect: { id: turmaId }
        },
        aluno: {
          connect: alunosId.map((alunoId) => ({ id: alunoId }))
        },
        status,
        tema,
        datacriacao: await this.momentService.timeExact(),
        usuariocriacao: 'teste',
        usuarioalteracao,
        dataalteracao,
        ...rest,
      },
    });
  
    return createdAula;
  }
}