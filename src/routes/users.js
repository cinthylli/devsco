//TODO CREANDO ENRUTADOR NOTE

/*

*PETICIONES:


get()-> obtener datos.
post()-> cuando se quiere guardar algo
put()-> cuando se quiere actualizar un dato
delete()-> para eliminar un dato.


*/ 

const {Router} = require('express');

const router = Router();

const{getUsers,createUser,deleteUser} =  require('../controllers/user.controllers')

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUser)

    //http://localhost:4000/api/users/
router.route('/:id')
    .delete(deleteUser);

module.exports = router;