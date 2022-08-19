import { ApiProperty } from "@nestjs/swagger";

export class TurnoDto {
    @ApiProperty({type: String, description: "Hora asignada para el transcurso del turno"})
    hora: string;
    @ApiProperty({type: String, description: "Dia asignado para el transcurso del turno"})
    dia: string;
    @ApiProperty({
        type: Object, 
        description: "informacion del docente encargado del turno",
        properties: {
            "nombre": 
            { 
                type: "string",
                description: "nombre del docente encargado"
            },
            "codigoAula":
            {
                type: "string",
                description: "codigo del aula asignada para el turno"
            }
        }
    })
    docente: [
        nombre: string,
        codigoAula: string
    ];
}