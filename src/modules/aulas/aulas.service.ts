/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MomentService } from '../shared/moment.service';

@Injectable()
export class AulasService {
  constructor(
    private prisma: PrismaService,
    private momentService: MomentService,
  ) {}

  async findAll() {
    return this.prisma.aula.findMany();
  }
}
