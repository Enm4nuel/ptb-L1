import { ApiProperty } from "@nestjs/swagger";

export class AlumnosDto {
    @ApiProperty({type: String, description: "Nombre del estudiante"})
    nombre: string;
    @ApiProperty({type: String, description: "Genero del estudiante"})
    sexo: string;
    @ApiProperty({type: Number, description: "Edad del estudiante"})
    edad: number;
    @ApiProperty({type: Number, description: "Numero de matricula o id del estudiante"})
    matricula: number;
    @ApiProperty({type: Date, description: "Fecha de creacion de este documento"})
    createdAt: Date;
}