import { ApiProperty } from '@nestjs/swagger';

export class ProfesorDto {
  @ApiProperty({ type: String, description: 'Nombre del docente' })
  nombre: string;
  @ApiProperty({ type: String, description: 'Genero del docente' })
  sexo: string;
  @ApiProperty({ type: Number, description: 'Edad del docente' })
  edad: number;
  @ApiProperty({
    type: Boolean,
    description: 'Si el profesor esta vigente o no',
  })
  activo: boolean;
  @ApiProperty({
    type: Object,
    description: 'turnos asignados del docente',
    properties: {
      aula: {
        type: 'object',
        description: 'aula asignada a este turno',
        properties: {
          codigo: {
            type: 'string',
            description: 'codigo del aula',
          },
          materia: {
            type: 'string',
            description: 'materia asignada a este turno en esta aula',
          },
        },
      },
    },
  })
  turnos: [aula: [codigo: string, materia: string]];
  @ApiProperty({
    type: Date,
    description: 'fecha de la creacion de este documento',
  })
  createdAt: Date;
  @ApiProperty({
    type: Date,
    description: 'fecha de eliminacion de este documento',
  })
  eliminatedAt: Date;
}
