import mongoose, { Schema } from 'mongoose';

export const AulaSchema = new Schema({
  nombre: String,
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  estudiantes: {
    idEstudiante: String,
    nombreEstudiante: String,
  },
  cantidadEstudiantes: {
    type: Number,
    max: 30,
  },
});
