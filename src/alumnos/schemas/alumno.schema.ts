import { Schema } from 'mongoose';

export const AlumnoSchema = new Schema ({
    nombre: { 
        type: String,
        maxLength: 50
    },
    sexo: {
        type: String,
        enum: {
            values: ['M', 'F'],
            message: '{VALUE} no es correcto. Solo M o F'
        }
    },
    edad: {
        type: Number,
        min: [18, 'Debe ser Mayor de 18 años']
    },
    matricula: {
        type: String,
        unique: true,
        default: function() { 
            return generateUUID();
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}