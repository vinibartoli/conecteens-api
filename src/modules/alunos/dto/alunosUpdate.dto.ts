import { AlunosDTO } from "./alunos.dto";
import { PartialType } from "@nestjs/mapped-types"

export class AlunosUpdateDTO extends PartialType(AlunosDTO) {}  