import { AlunosModule } from './modules/alunos/alunos.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AlunosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
