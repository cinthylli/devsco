const { Schema, model } = require('mongoose');

const HotelSchema = new Schema({
  nombre: { type: String, required: true },
  caracteristicas: { type: Array, required: true },
  habitaciones: { nombre: String, precio: Number, moneda:String },
  idiomas: { type: String, required: true },
  tipo: { type: String, required: true },
  shows_por_temporada: [{
          pais:String,
          ciudad:String,
          festividad: [{
            nombre:String,
            fechas:String,
            texto:String
          }]
  }],
  alquiler_auto: [{
    costo_por_dia: Number,
    moneda: String,
    descripcion: String
  }],
  servicios_adicionales_con_costo: [{
    ciudad:String,
    comida_tipica:Array
  }]
});

module.exports = model('Hotel', HotelSchema);