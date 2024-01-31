import {  ArrayMinSize, IsBoolean, IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class AulasDTO {
  @IsInt()
  @IsOptional()
  professorId?: number;

  @IsInt()
  @IsOptional()
  turmaId?: number;

  @IsString()
  tema: string;

  @IsBoolean()
  status: boolean;

  @IsOptional()
  @ArrayMinSize(1)
  alunosIds?: number[];

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