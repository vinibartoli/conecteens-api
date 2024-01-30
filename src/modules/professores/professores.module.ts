import { PrismaService } from 'src/database/prisma.service';
import { ProfessoresController } from './professores.controller';
import { ProfessoresService } from './professores.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MomentService } from '../shared/moment.service';

@Module({
  imports: [],
  controllers: [ProfessoresController],
  providers: [ProfessoresService, PrismaService, MomentService],
})
export class ProfessoresModule {}
