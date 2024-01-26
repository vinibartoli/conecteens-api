/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MomentService } from './moment.service';
import { ProfessoresModule } from '../professores/professores.module';
import { AlunosModule } from '../alunos/alunos.module';
import { TurmasModule } from '../turmas/turmas.module';

@Module({
    imports: [ProfessoresModule, AlunosModule, TurmasModule],
    controllers: [],
    providers: [MomentService],
})
export class CoreModule {}
