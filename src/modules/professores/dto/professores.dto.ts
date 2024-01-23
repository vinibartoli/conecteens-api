import { IsBoolean, IsDate, IsOptional, IsString } from "class-validator";

export class ProfessoresDTO {
    id: number;
    @IsString()
    nome: string;
    @IsString()
    cpf: string;
    @IsDate()
    dataNasc: Date;
    @IsString()
    celular: string;
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