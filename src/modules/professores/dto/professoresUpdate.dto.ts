import { PartialType } from "@nestjs/swagger";
import { ProfessoresDTO } from "./professores.dto";


export class ProfessoresUpdateDTO extends PartialType(ProfessoresDTO) {}