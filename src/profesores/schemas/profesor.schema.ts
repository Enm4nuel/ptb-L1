import { Schema } from 'mongoose';

export const ProfesorSchema = new Schema ({
    nombre: String,
    apellido: String,
    sexo: String,
    activo: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})