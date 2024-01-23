import { PrismaService } from 'src/database/prisma.service';
import { TurmasController } from './turmas.controller';
import { TurmasService } from './turmas.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TurmasController],
  providers: [TurmasService, PrismaService],
})
export class TurmasModule {}
