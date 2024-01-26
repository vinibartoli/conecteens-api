/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AlunosDTO } from './dto/alunos.dto';
import { AlunosUpdateDTO } from './dto/alunosUpdate.dto';
import * as moment from 'moment-timezone';
import { Prisma } from '@prisma/client';
import { MomentService } from '../shared/moment.service';

@Injectable()
export class AlunosService {
    constructor(
        private prisma: PrismaService,
        private momentService: MomentService) {}

    async findAll() {
        return this.prisma.aluno.findMany();
    }

    async findByID(id: number) {
        return this.prisma.aluno.findUnique({where: {id}})
    }

    async create(data: AlunosDTO) {
        const { cpf, ...rest } = data;

        const alunoExists = await this.prisma.aluno.findFirst({ where: { cpf } });

        if (alunoExists) {
            throw new ConflictException('Aluno já cadastrado!');
        }

        const currentDate = moment.utc();
        const utcMinus3 = currentDate.clone().subtract(3, 'hours');

        const alunoCreateInput = {
            ...rest,
            cpf: data.cpf,
            usuariocriacao: 'teste',
            datacriacao: this.momentService.timeExact()
        };

        const createdAluno = await this.prisma.aluno.create({
            data: alunoCreateInput as Prisma.AlunoCreateInput,
        });

        return createdAluno;
    }

    async update(id: number, data: AlunosUpdateDTO) {
        const { cpf, ...rest } = data

        const cpfExist = await this.prisma.aluno.findFirst({ where: { cpf: data.cpf }});
        if(cpfExist) {
            throw new ConflictException("Já existe um aluno com esse CPF!")
        }

        

        return this.prisma.aluno.update({
            data,
            where: {id}
        })
    }
}
