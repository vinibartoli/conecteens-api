/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AlunosDTO } from './dto/alunos.dto';
import { AlunosUpdateDTO } from './dto/alunosUpdate.dto';

@Injectable()
export class AlunosService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.aluno.findMany();
    }

    async findByID(id: number) {
        return this.prisma.aluno.findUnique({where: {id}})
    }

    async create(data: AlunosDTO) {
        const dataExists = await this.prisma.aluno.findFirst({where: {cpf: data.cpf}})

        if(dataExists) {
            throw new ConflictException("Aluno já cadastrado!");
        }

        const obj = this.prisma.aluno.create({data});

        return obj;
    }

    async update(id: number, data: AlunosUpdateDTO) {
        const cpfExist = await this.prisma.aluno.findFirst({ where: { cpf: data.cpf }});
        if(cpfExist != null) {
            throw new ConflictException("Já existe um aluno com esse CPF!")
        }

        return this.prisma.aluno.update({
            data,
            where: {id}
        })
    }
}
