//TODO CREANDO ENRUTADOR NOTE

const {Router} = require('express');

const router = Router();


const {getNotes, createNote, getNote, updateNote, deleteNote} = require('../controllers/notes.controller');

//*Rutas manejadas con distintos métodos

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .delete(deleteNote)
    .put(updateNote)
    .get(getNote)

module.exports = router;