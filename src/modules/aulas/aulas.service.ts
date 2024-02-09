/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MomentService } from '../shared/moment.service';
import { AulasDTO } from './dto/aulas.dto';
import { AulasUpdateDTO } from './dto/aulasUpdate.dto';

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
        aluno: { select: { aluno: {select: {id: true, nome: true}}}}
      }
    })
  }

  async findByID(id: number) {
    return this.prisma.aula.findUnique({
      where: {id},
      include: {
        professor: { select: { id: true, nome: true }},
        turma: { select: { id: true, descricao: true }},
        aluno: { select: { aluno: {select: {id: true, nome: true}}}}
      }
    })
  }

  async create(obj: AulasDTO) {
    const { professorId, turmaId, tema, status, alunosIds } = obj;

    const professorExists = await this.prisma.professor.findUnique({
      where: { id: professorId },
    });
    if (!professorExists) {
      throw new NotFoundException('Professor não encontrado');
    }

    const turmaExists = await this.prisma.turma.findUnique({
      where: { id: turmaId },
    });
    if (!turmaExists) {
      throw new NotFoundException('Turma não encontrada');
    }

    const alunos = await this.prisma.aluno.findMany({
      where: { id: { in: alunosIds } },
    });

    if (alunos.length !== alunosIds.length) {
      throw new NotFoundException('Um ou mais alunos não encontrados');
    }

    const createdAula = await this.prisma.aula.create({
      data: {
        professorId,
        turmaId,
        tema,
        status,
        datacriacao: await this.momentService.timeExact(),
        usuariocriacao: 'teste',
        aluno: {
          create: alunos.map((aluno) => ({ alunoId: aluno.id })),
        },
      },
      include: {
        aluno: { select: { aluno: {select: {id: true, nome: true}}}},
        professor: { select: { id: true, nome: true }},
        turma: { select: { id: true, descricao: true}}
      },
    });

    return createdAula;
  }

  async update(id: number, obj: AulasUpdateDTO) {
    const { tema ,...rest } = obj

    const objUpdateInput = {
      ...rest,
      tema: obj.tema,
      usuarioalteracao: 'teste-update',
      dataalteracao: await this.momentService.timeExact()
    }

    const updatedObj = await this.prisma.aula.update({
      data:objUpdateInput,
      where: {id},
      include: {aluno: { select: { aluno: {select: {id: true, nome: true}}}}} ,
    })

    return updatedObj;
  }
}