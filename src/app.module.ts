import { TurmasModule } from './modules/turmas/turmas.module';
import { ProfessoresModule } from './modules/professores/professores.module';
import { AlunosModule } from './modules/alunos/alunos.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TurmasModule, ProfessoresModule, AlunosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
