import { Schema } from 'mongoose';

export const ProfesorSchema = new Schema ({
    nombre: String,
    sexo: {
        type: String,
        enum: {
            values: ['M', 'F'],
            message: '{VALUE} no es correcto. Solo M o F'
        }
    },
    edad: {
        type: Number,
        min: [25, 'Debe ser Mayor de 25 años']
    },
    activo: {
        type: Boolean,
        default: true
    },
    turnos: {
        aula: {
            codigo: String,
            materia: String
        }
    },
    createdAt: {
        type: Date,
        validate: {
            validator: function() {
              if (this.activo == true) {
                return Date.now
              }
            }
          },
        default: Date.now
    },
    eliminatedAt: {
        type: Date,
        validate: {
            validator: function() {
                if (this.activo == false){
                    return Date.now;
                }
                else {
                    return "Aun activo";
                }
            }
        },
    }
})