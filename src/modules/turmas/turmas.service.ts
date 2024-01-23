/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TurmasDTO } from './dto/turmas.dto';
import { TurmasUpdateDTO } from './dto/turmasUpdate.dto';

@Injectable()
export class TurmasService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return await this.prisma.turma.findMany();
    }

    async findByID(id: number) {
        return await this.prisma.turma.findUnique({where: {id}})
    }

    async create(data: TurmasDTO) {
        const descriptionExist = await this.prisma.turma.findFirst({where: {descricao: data.descricao}})

        if(descriptionExist) {
            throw new ConflictException("Turma já existente!")
        }

        return await this.prisma.turma.create({data})
    }

    async update(id: number, data: TurmasUpdateDTO) {
        const descriptionExist = await this.prisma.turma.findFirst({where: {descricao: data.descricao}})
        
        if(descriptionExist) {
            throw new ConflictException("Turma já existente!")
        }

        return await this.prisma.turma.update({
            data,
            where: {id}
        })
    }
}
