/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProfessoresDTO } from './dto/professores.dto';
import { ProfessoresUpdateDTO } from './dto/professoresUpdate.dto';

@Injectable()
export class ProfessoresService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return await this.prisma.professor.findMany();
    }

    async findByID(id: number) {
        return await this.prisma.professor.findUnique({ where: {id}})
    }

    async create(data: ProfessoresDTO) {
        const dataExist = await this.prisma.professor.findFirst({ where: {cpf: data.cpf}});

        if(dataExist) {
            throw new ConflictException("Professor já cadastrado!")
        }

        return await this.prisma.professor.create({data});
    }

    async update(id: number, data: ProfessoresUpdateDTO) {
        const dataExist = await this.prisma.professor.findFirst({where: {cpf: data.cpf}})

        if(dataExist) {
            throw new ConflictException("Professor já cadastrado!")
        }

        return await this.prisma.professor.update({
            data,
            where: {id}
        })
    }
}
