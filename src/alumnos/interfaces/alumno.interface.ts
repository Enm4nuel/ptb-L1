import { Document } from 'mongoose';

export interface Alumnos extends Document {
    nombre: string;
    sexo: string;
    edad: number,
    matricula: number;
    createdAt: Date;
}