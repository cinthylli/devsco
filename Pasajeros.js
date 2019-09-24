const mongoose = require('mongoose');
const { Schema } = mongoose;

const PasajerosSchema = new Schema({
  numero_reservacion: {
    type: String,
    required: true
  },
  tipo_documento_id: {
    type: String,
    required: true
  },
  documento_id: {
    type: String,
    required: true
  },
  nombre_completo: {
    type: String,
    required: true
  },
  num_viajero_frecuente: {
    type: String,
    required: false
  },
  id_vuelo_origen: {
    type: Number,
    required: true
  },
  silla_origen: {
    type: String,
    required: false
  },
  gate_origen: {
    type: Number,
    required: false
  },
  fecha_origen: {
    type: Date,
    required: true
  },
  hora_abordaje_origen: {
    type: String,
    required: true
  },
  id_vuelo_destino: {
    type: Number,
    required: true
  },
  silla_destino: {
    type: String,
    required: true
  },
  gate_destino: {
    type: Number,
    required: true
  },
  fecha_destino: {
    type: Date,
    required: true
  },
  hora_abordaje_destino: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pasajeros', PasajerosSchema);