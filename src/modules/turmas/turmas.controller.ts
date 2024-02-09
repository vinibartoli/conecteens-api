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
    findAll() {
        return this.turmasService.findAll();
    }

    @Get(':id')
    findByID(@Param('id', ParseIntPipe) id: number) {
        return this.turmasService.findByID(id);
    }

    @Post()
    create(@Body() obj: TurmasDTO) {
        return this.turmasService.create(obj);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() obj: TurmasUpdateDTO) {
        return this.turmasService.update(id, obj);
    }
}
