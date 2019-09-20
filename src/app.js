/*
TODO CONTIENE EL CÓDIGO DEL SERVIDOR O DEL FRAMEWORK
*Primer archivo en ser manipulado
*/

const express = require('express');
const cors = require('cors');
const app = express();

//todo aquí no se inicia el servidor, tan solo se va a definir, para inicializar ver index.js

//todo settings -> configurando servidor

app.set('port', process.env.PORT || 4000)//*configuración del puerto

//todo middleware

app.use(cors());//*enviar  y recibir datos entres más de un servidor
app.use(express.json())//*entiende formato json


//todo routes

//*creación de dos rutas en el servidor

app.use('/api/users',require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))


module.exports = app;