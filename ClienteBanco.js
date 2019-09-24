  
const { Schema, model } = require('mongoose');

const ClientesBancochema = new Schema({
  documento_id: { type: String, required: true },
  tipo_documento_id: { type: String, required: true },
  numero_cuenta: { type: String, required: true },
  nombre_completo: { type: String, required: true },
  saldo: { type: String, required: true },
  contrasena: { type: String, required: true },
  celular: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = model('ClientesBanco', ClientesBancochema);