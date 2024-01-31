import {  IsDateString, IsOptional } from 'class-validator';

export class AulasDTO {
  professorId: number;

  turmaId: number;

  alunosId: number[]

  status: boolean;

  tema: string;

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