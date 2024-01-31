/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosDTO } from './dto/alunos.dto';
import { AlunosUpdateDTO } from './dto/alunosUpdate.dto';

@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunoService: AlunosService) {}

    @Get()
    async findAll() {
        return this.alunoService.findAll();
    }

    @Get(':id')
    async findByID(@Param('id', ParseIntPipe) id: number) {
        return this.alunoService.findByID(id);
    }

    @Post()
    async create(@Body() obj: AlunosDTO) {
        return this.alunoService.create(obj)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() obj: AlunosUpdateDTO) {
        return this.alunoService.update(id, obj);
    }

    // @Delete()
    // async delete(@Param('id', ParseIntPipe) id: number) {
    //     return this.alunoService.delete(id);
    // }
}
