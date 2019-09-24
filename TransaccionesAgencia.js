  
const { Schema, model } = require('mongoose');

const TransaccionesAgenciaSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo: { type: String, required: true },
    monto: { type: Number, required: true },
    moneda: { type: String, required: true },
    iva: { type: String, required: true },
    porcentaje_iva: { type: String, required: true },
    descripcion: { type: String, required: true },
    id_comprador: { type: String, required: true }
});

module.exports = model('TransaccionesAgencia', TransaccionesAgenciaSchema);