  
const { Schema, model } = require('mongoose');

const ExperienciasSchema = new Schema({
    pais: { type: String, required: true },
    ciudad: { type: String, required: true },
    url: { type: String, required: true },
    tipo_principal: { type: String, required: true },
    tipos: { type: String, required: true },
    planTuristico: { type: String, required: true },
    calificacion : { type: Number, required: true },
    valor : { type: Number, required: true },
    cantidad_personas: { type: Number, required: true },
    cantidad_ninos: { type: Number, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Experiencias', ExperienciasSchema);