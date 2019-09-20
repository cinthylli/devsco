/*
TODO CONTIENE EL CÓDIGO DE LA CONEXIÓN DE LA BASE DE DATOS.
*Definiendo conexión a la base de datos
*/
require('dotenv').config();//*llama las variables de mí sistema operativo.
const mongoose = require('mongoose');


const URI = process.env.MONGODB_URI
    ?process.env.MONGODB_URI
    :'mongodb://localhost/databasetest';
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false
});


const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB is connected');
})