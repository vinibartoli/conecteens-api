import { Body, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Param } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasDTO } from './dto/aulas.dto';
import { AulasUpdateDTO } from './dto/aulasUpdate.dto';

@Controller('aulas')
export class AulasController {
    constructor(private aulasService: AulasService) {}

    @Get()
    findAll() {
        return this.aulasService.findAll();
    }

    @Get(':id')
    findByID(@Param('id', ParseIntPipe) id: number) {
        return this.aulasService.findByID(id);
    }

    @Post()
    create(@Body() obj: AulasDTO) {
        return this.aulasService.create(obj);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() obj: AulasUpdateDTO) {
       return this.aulasService.update(id, obj) 
    }
}
