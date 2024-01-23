/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { TurmasDTO } from './dto/turmas.dto';
import { TurmasUpdateDTO } from './dto/turmasUpdate.dto';

@Controller('turmas')
export class TurmasController {
    constructor(private readonly turmasService: TurmasService) {}

    @Get()
    async findAll() {
        return this.turmasService.findAll();
    }

    @Get(':id')
    async findByID(@Param('id', ParseIntPipe) id: number) {
        return this.turmasService.findByID(id);
    }

    @Post()
    async create(@Body() data: TurmasDTO) {
        return this.turmasService.create(data);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: TurmasUpdateDTO) {
        return this.turmasService.update(id, data);
    }
}
