import { Schema } from 'mongoose';

export const ProfesorSchema = new Schema({
  nombre: String,
  sexo: {
    type: String,
    enum: {
      values: ['M', 'F'],
      message: '{VALUE} no es correcto. Solo M o F',
    },
  },
  edad: {
    type: Number,
    min: [25, 'Debe ser Mayor de 25 años'],
  },
  activo: {
    type: Boolean,
    default: true,
  },
  turnos: {
    aula: {
      codigo: String,
      materia: String,
    },
  },
  createdAt: {
    type: String,
    validate: {
      validator: function () {
        if (this.activo == true) {
          return obtenerFecha();
        }
      },
    },
    default: obtenerFecha(),
  },
  eliminatedAt: {
    type: String,
    validate: {
      validator: function () {
        if (this.activo == false) {
          return obtenerFecha();
        } else {
          return 'Aun activo';
        }
      },
    },
  },
});

function obtenerFecha() {
  const today = new Date();
  const yy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) {
    dd = 0 + dd;
  }

  if (mm < 10) {
    mm = 0 + mm;
  }

  return dd + '/' + mm + '/' + yy;
}
