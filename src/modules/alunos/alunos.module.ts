import { PrismaService } from 'src/database/prisma.service';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AlunosController],
  providers: [AlunosService, PrismaService],
})
export class AlunosModule {}
