import { Document } from 'mongoose';

export interface Alumnos extends Document {
    nombre: string;
    apellido: string;
    fechaNac: string;
    sexo: string;
    telefono: number;
}