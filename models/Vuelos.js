const mongoose = require('mongoose');
const { Schema } = mongoose;

const VuelosSchema = new Schema({
  nombre_vuelo: {
    type: String,
    required: true
  },
  id_ruta: {
    type: String,
    required: true
  },
  ciudad_aeropuerto_origen: {
    type: String,
    required: true
  },
  iata_aeropuerto_origen: {
    type: String,
    required: true
  },
  ciudad_aeropuerto_destino: {
    type: String,
    required: true
  },
  iata_aeropuerto_destino: {
    type: String,
    required: true
  },
  gate_origen: {
    type: Number,
    required: true
  },
  gate_destino: {
    type: Number,
    required: true
  },
  fecha_abordaje_origen: {
    type: Date,
    required: true
  },
  fecha_llegada_destino: {
    type: Date,
    required: true
  },
  hora_abordaje_origen: {
    type: String,
    required: true
  },
  hora_llegada_destino: {
    type: String,
    required: true
  },
  aeronave: {
    type: String,
    required: true
  },
  total_sillas_disponibles: {
    type: Number,
    required: true
  },
  sillas_disponibles_primera_clase: {
    type: Number,
    required: true
  },
  sillas_disponibles_clase_ejecutiva: {
    type: Number,
    required: true
  },
  sillas_disponibles_clase_economica: {
    type: Number,
    required: true
  },
  sillas_disponibles_clase_turista: {
    type: Number,
    required: true
  },
  arr_sillas_primera_clase: {
    type: Array,
    required: false
  },
  arr_sillas_clase_ejecutiva: {
    type: Array,
    required: false
  },
  arr_sillas_clase_economica: {
    type: Array,
    required: false
  },
  arr_sillas_clase_turista: {
    type: Array,
    required: false
  }
});

module.exports = mongoose.model('Vuelos', VuelosSchema);