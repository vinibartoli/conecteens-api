import { IsBoolean, IsOptional, IsString } from "class-validator";

export class TurmasDTO {
    id: number;
    @IsString()
    descricao: string;
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