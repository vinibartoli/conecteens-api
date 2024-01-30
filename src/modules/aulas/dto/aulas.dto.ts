import { Aluno, Professor, Turma } from '@prisma/client';
import { IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class AulasDTO {
  id: number;
  aluno: Aluno[];
  turma: Turma;
  professor: Professor;
  tema: string;
  
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsOptional()
  usuariocriacao?: string;

  @IsOptional()
  @IsDateString()
  datacriacao?: Date;

  @IsOptional()
  usuarioalteracao?: string;

  @IsOptional()
  @IsDateString()
  dataalteracao?: Date;
}
