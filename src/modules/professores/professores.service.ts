/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProfessoresDTO } from './dto/professores.dto';
import { ProfessoresUpdateDTO } from './dto/professoresUpdate.dto';
import { MomentService } from '../shared/moment.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfessoresService {
    constructor(
        private prisma: PrismaService,
        private momentService: MomentService
        ) {}

    async findAll() {
        return await this.prisma.professor.findMany();
    }

    async findByID(id: number) {
        return await this.prisma.professor.findUnique({ where: {id}})
    }

    async create(obj: ProfessoresDTO) {
        const { cpf, ...rest } = obj;

        const objExists = await this.prisma.professor.findFirst({ where: { cpf } });

        if (objExists) {
            throw new ConflictException('Professor já cadastrado!');
        }

        const objCreateInput = {
            ...rest,
            cpf: obj.cpf,
            usuariocriacao: 'teste',
            datacriacao: await this.momentService.timeExact()
        };

        const createdObj= await this.prisma.professor.create({
            data: objCreateInput as Prisma.ProfessorCreateInput,
        });

        return createdObj;
    }

    async update(id: number, obj: ProfessoresUpdateDTO) {
        const { cpf, ...rest } = obj

        const objExist = await this.prisma.professor.findFirst({ where: { cpf: obj.cpf }});
        
        if(objExist) {
            throw new ConflictException("Já existe um professor com esse CPF!")
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
