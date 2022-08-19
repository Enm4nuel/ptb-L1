import { Schema } from 'mongoose';

export const TurnoSchema = new Schema ({
    docente: {
        type: String,
        unique: true,
        message: 'Ya hay un docente en este horario'
    },
    codigoAula: String,
    horario: {
        hora: {
            type: String,
            required: [true, 'La hora es obligatoria'],
        },
        dia: {
            type: String,
            required: [true, 'La hora es obligatoria'],
        }
    }
});
