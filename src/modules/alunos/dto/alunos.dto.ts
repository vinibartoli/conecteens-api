import { IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class AlunosDTO {
  @IsOptional()
  id?: number;

  cpf: string;

  nome: string;

  nomeResponsavel: string;

  @IsDateString()
  dataNasc: Date;

  celular: string;

  celularResponsavel: string;

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