const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuariosSchema = new Schema({
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
  celular: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nacionalidad: {
    type: String,
    required: true
  },
  contrasena: {
    type: String,
    required: true
  },
  num_viajero_frecuente: {
    type: String,
    required: false
  },
  millas_acumuladas: {
    type: Number,
    required: false
  },
  millas_disfrutadas: {
    type: Number,
    required: false
  }  
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);