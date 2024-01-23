import { IsBoolean, IsDate, IsOptional, IsString } from "class-validator";

export class AlunosDTO {
    id: number;
    @IsString()
    cpf: string;
    @IsString()
    nome: string;
    @IsString()
    nomeResponsavel: string
    @IsDate()
    dataNasc: Date;
    @IsString()
    celular: string;
    @IsString()
    celularResponsavel: string;
    @IsBoolean()
    status: boolean;
    @IsOptional()
    usuariocriacao: string;
    @IsOptional()
    datacriacao: Date;
    @IsOptional()
    usuarioalteracao: string;
    @IsOptional()
    dataalteracao: Date;
}