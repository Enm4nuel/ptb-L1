import { Schema } from 'mongoose';

export const AlumnoSchema = new Schema ({
    nombre: String,
    apellido: String,
    fechaNac: String,
    sexo: String,
    telefono: Number
})