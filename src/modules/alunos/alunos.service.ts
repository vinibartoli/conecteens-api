/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AlunosDTO } from './dto/alunos.dto';
import { AlunosUpdateDTO } from './dto/alunosUpdate.dto';
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

        const objExists = await this.prisma.aluno.findFirst({ where: { cpf } });

        if (objExists) {
            throw new ConflictException('Aluno já cadastrado!');
        }

        const objCreateInput = {
            ...rest,
            cpf: data.cpf,
            usuariocriacao: 'teste',
            datacriacao: await this.momentService.timeExact()
        };

        const createdObj= await this.prisma.aluno.create({
            data: objCreateInput as Prisma.AlunoCreateInput,
        });

        return createdObj;
    }

    async update(id: number, data: AlunosUpdateDTO) {
        const { cpf, ...rest } = data

        const objExist = await this.prisma.aluno.findFirst({ where: { cpf: data.cpf }});
        
        if(objExist) {
            throw new ConflictException("Já existe um aluno com esse CPF!")
        }

        const objUpdateInput = {
            ...rest,
            usuarioalteracao: 'teste-update',
            dataalteracao: await this.momentService.timeExact()
        };

        const updatedObj = await this.prisma.aluno.update({
            data: objUpdateInput,
            where: {id}
        })

        return updatedObj;
    }
}
