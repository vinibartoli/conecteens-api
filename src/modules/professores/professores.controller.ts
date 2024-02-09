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
    findAll() {
        return this.professoresService.findAll();
    }

    @Get(':id')
    findByID(@Param('id', ParseIntPipe) id: number) {
        return this.professoresService.findByID(id);
    }

    @Post()
    create(@Body() obj: ProfessoresDTO) {
        return this.professoresService.create(obj);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() obj: ProfessoresUpdateDTO) {
        return this.professoresService.update(id, obj);
    }

}
