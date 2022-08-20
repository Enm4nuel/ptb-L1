import { Schema } from 'mongoose';

export const TurnoSchema = new Schema ({
    docente: {
        type: String,
        required: [true, 'Debes agregar un docente para este turno']
    },
    codigoAula: {
        type: String,
        required: [true, 'Debes asignarle un aula al turno']
    },
    horario: {
        hora: {
            type: String,
            required: [true, 'La hora es obligatoria'],
        },
        dia: {
            type: String,
            required: [true, 'El dia es obligatorio'],
        }
    },
    codigoTurno: {
        type: Schema.Types.ObjectId,
        default: ""
    }
});
