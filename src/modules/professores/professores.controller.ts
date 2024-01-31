import { ProfessoresDTO } from './dto/professores.dto';
import { ProfessoresUpdateDTO } from './dto/professoresUpdate.dto';
import { ProfessoresService } from './professores.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('professores')
export class ProfessoresController {
    constructor(private readonly professoresService: ProfessoresService) {}

    @Get()
    async findAll() {
        return this.professoresService.findAll();
    }

    @Get(':id')
    async findByID(@Param('id', ParseIntPipe) id: number) {
        return this.professoresService.findByID(id);
    }

    @Post()
    async create(@Body() obj: ProfessoresDTO) {
        return this.professoresService.create(obj);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() obj: ProfessoresUpdateDTO) {
        return this.professoresService.update(id, obj);
    }

}
