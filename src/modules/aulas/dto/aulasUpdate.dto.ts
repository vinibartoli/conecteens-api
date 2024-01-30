import { PartialType } from "@nestjs/swagger";
import { AulasDTO } from "./aulas.dto";


export class AulasUpdateDTO extends PartialType(AulasDTO) {}