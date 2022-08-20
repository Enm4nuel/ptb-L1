import { ApiProperty } from '@nestjs/swagger';

export class AulaDto {
  @ApiProperty({
    type: String,
    description: 'Nombre del salon de clases o del aula',
  })
  nombre: string;
  @ApiProperty({
    type: String,
    description: 'Codigo de direccion o referencia al salon de clases',
  })
  codigo: string;
  @ApiProperty({
    type: Object,
    properties: {
      idEstudiante: {
        type: 'string',
        description: 'Id o matricula del estudiante',
      },
      nombreEstudiante: {
        type: 'string',
        description: 'Nombre del estudiante',
      },
    },
    description: 'Lista de estudiantes que pertenecen al salon de clases',
    additionalProperties: true,
  })
  estudiantes: [idEstudiante: string, nombreEstudiante: string];
  @ApiProperty({
    type: Number,
    description: 'Cantidad de estudiantes del salon de clases',
  })
  cantidadEstudiantes: number;
}
