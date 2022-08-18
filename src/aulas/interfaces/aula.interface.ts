import { Document } from 'mongoose';

export interface Aulas extends Document {
    nombre: string;
    codigo: string;
}