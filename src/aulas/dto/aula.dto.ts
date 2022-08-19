export class AulaDto {
    nombre: string;
    codigo: string;
    estudiantes: [
        idEstudiante: string,
        nombreEstudiante: string
    ];
    cantidadEstudiantes: number;
}