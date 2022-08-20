import { Document } from 'mongoose';

export interface Turnos extends Document {
  hora: string;
  dia: string;
  docente: [nombre: string, codigoAula: string];
}
