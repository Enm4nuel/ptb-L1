export class ProfesorDto {
    nombre: string;
    sexo: string;
    edad: number;
    activo: boolean;
    turnos: [
        aula: [
            codigo: string,
            materia: string
        ]
    ];
    createdAt: Date;
    eliminatedAt: Date;
}