import { Body, Get, ParseIntPipe, Post } from '@nestjs/common';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Param } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasDTO } from './dto/aulas.dto';

@Controller('aulas')
export class AulasController {
    constructor(private aulasService: AulasService) {}

    @Get()
    async findAll() {
        return this.aulasService.findAll();
    }

    @Get(':id')
    async findByID(@Param('id', ParseIntPipe) id: number) {
        return this.aulasService.findByID(id);
    }

    @Post()
    async create(@Body() obj: AulasDTO) {
        return this.aulasService.create(obj);
    }
}
