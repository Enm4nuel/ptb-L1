import { Document } from 'mongoose';

export interface Profesores extends Document {
    nombre: string;
    apellido: string;
    sexo: string;
    activo: boolean;
    createdAt: Date;
}