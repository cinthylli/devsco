const{Schema, model} = require('mongoose');

const userSchema =  new Schema({
    
    username : {
        type:String,
        required:true,
        trim:true,//* ajusta los espacios
        unique:true//* no debe repetirse dentro de la base de datos
    }
},{
        timestamps:true//*guardar fecha de creación y actualización
})


//users
module.exports = model('User', userSchema);