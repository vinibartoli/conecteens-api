import { PartialType } from "@nestjs/swagger";
import { TurmasDTO } from "./turmas.dto";


export class TurmasUpdateDTO extends PartialType(TurmasDTO) {}