import { PrismaService } from 'src/database/prisma.service';
import { AulasController } from './aulas.controller';
import { AulasService } from './aulas.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MomentService } from '../shared/moment.service';

@Module({
  imports: [],
  controllers: [AulasController],
  providers: [AulasService, PrismaService, MomentService],
})
export class AulasModule {}
