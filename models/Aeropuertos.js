const mongoose = require('mongoose');
const { Schema } = mongoose;

const AeropuertosSchema = new Schema({
    pais: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  aeropuerto: {
    type: String,
    required: true
  },
  iata: {
    type: String,
    required: true
  },
  oaci: {
    type: String,
    required: true
  },
  nombre_aeropuerto_idioma_origen: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Aeropuertos', AeropuertosSchema);