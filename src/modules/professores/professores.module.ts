import { PrismaService } from 'src/database/prisma.service';
import { ProfessoresController } from './professores.controller';
import { ProfessoresService } from './professores.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProfessoresController],
  providers: [ProfessoresService, PrismaService],
})
export class ProfessoresModule {}
