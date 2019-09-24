  
const { Schema, model } = require('mongoose');

const ClientesBancochema = new Schema({
  documento_id: { type: String, required: true , trim: true, unique:true },
  tipo_documento_id: { type: String, required: true },
  numero_cuenta: { type: String, required: true ,trim: true, unique:true},
  nombre_completo: { type: String, required: true,trim: true },
  saldo: { type: String, required: true, trim:true},
  contrasena: { type: String, required: false},
  celular: { type: String, required: true },
  email: { type: String, required: true }

},{
  timestamps: true
});

module.exports = model('ClientesBanco', ClientesBancochema);