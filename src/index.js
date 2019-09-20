/*
TODO ESTÈ ARCHIVO ARRANCA EL SERVIDOR
*Segundo archivo en ser manipulado, 
*inicializa el servidor
*/

const app = require('./app')
require('./database');

async function main(){
//*función encargada en iniciar el programa
  await app.listen(app.get('port'));//* método asíncrono
  console.log(`Server on port, ${app.get('port')}`);
}

main();
