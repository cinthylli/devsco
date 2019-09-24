const mongoose = require('mongoose');
const { Schema } = mongoose;

const RutasSchema = new Schema({
  id_ruta: {
    type: String,
    required: true
  },
  ciudad_aeropuerto_origen: {
    type: String,
    required: true
  },
  aeropuerto_origen: {
    type: String,
    required: true
  },
  ciudad_aeropuerto_destino: {
    type: String,
    required: true
  },
  aeropuerto_destino: {
    type: String,
    required: true
  },
  kilometros: {
    type: Number,
    required: true
  },
  millas: {
    type: Number,
    required: true
  },
  duracion_horas: {
    type: Number,
    required: true
  },
  duracion_min: {
    type: Number,
    required: true
  },
  diferencia_horaria: {
    type: Number,
    required: true
  },  
  valor_primera_clase  : {
    type: Number,
    required: true
  },  
  valor_clase_ejecutiva : {
    type: Number,
    required: true
  },  
  valor_clase_economica : {
    type: Number,
    required: true
  },  
  valor_clase_ejecutiva : {
    type: Number,
    required: true
  },  
  diferencia_horaria: {
    type: Number,
    required: true
  },  
  diferencia_horaria: {
    type: String,
    required: true
  },  
  diferencia_horaria: {
    type: Number,
    required: true
  },  
  diferencia_horaria: {
    type: String,
    required: true
  }, 
  diferencia_horaria: {
    type: Number,
    required: true
  },  
  diferencia_horaria: {
    type: String,
    required: true
  }, 
  diferencia_horaria: {
    type: Number,
    required: true
  },  
  diferencia_horaria: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Rutas', RutasSchema);