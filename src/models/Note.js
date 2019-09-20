const {Schema, model} = require('mongoose');

const noteSchema =  new Schema({
    title: String,
    content: {
        type: String,
        required:true
    },

    author: String,//* relaciòn de datos
    date: {
        type: Date,
        default: Date.now//*coloca por defecto la fecha actual. 
    }
    
},{
    timestamps: true// al crear dos datos, la fecha de creación y la fecha de actualización
});

// notes

module.exports = model('Note', noteSchema)