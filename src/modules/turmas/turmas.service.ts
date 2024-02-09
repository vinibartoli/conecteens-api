/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TurmasDTO } from './dto/turmas.dto';
import { TurmasUpdateDTO } from './dto/turmasUpdate.dto';
import { Prisma } from '@prisma/client';
import { MomentService } from '../shared/moment.service';

@Injectable()
export class TurmasService {
    constructor(
        private prisma: PrismaService,
        private momentService: MomentService
        ) {}

    async findAll() {
        return await this.prisma.turma.findMany();
    }

    async findByID(id: number) {
        return await this.prisma.turma.findUnique({where: {id}})
    }

    async create(obj: TurmasDTO) {
        const { ...rest } = obj;

        const objExists = await this.prisma.turma.findFirst({ where: { descricao: obj.descricao } });

        if (objExists) {
            throw new ConflictException('Turma já cadastrada!');
        }

        const objCreateInput = {
            ...rest,
            usuariocriacao: 'teste',
            datacriacao: await this.momentService.timeExact()
        };

        const createdObj= await this.prisma.turma.create({
            data: objCreateInput as Prisma.TurmaCreateInput,
        });

        return createdObj;
    }

    async update(id: number, obj: TurmasUpdateDTO) {
        const { descricao, ...rest } = obj

        const objExists = await this.prisma.turma.findFirst({ where: { descricao: obj.descricao } });
        
        if(objExists && obj.descricao != null) {
            throw new ConflictException("Já existe uma turma com essa descrição!")
        }

        const objUpdateInput = {
            ...rest,
            usuarioalteracao: 'teste-update',
            dataalteracao: await this.momentService.timeExact()
        };

        const updatedObj = await this.prisma.turma.update({
            data: objUpdateInput,
            where: {id}
        })

        return updatedObj;
    }
}
