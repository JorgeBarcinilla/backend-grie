const express = require('express');
const router = express.Router();
const passport = require('passport');
const {getComments, getComment, createComment, editComment, deleteComment} = require('../controllers/comment.controller');

//Obtener todos los comentarios
router.get('/', getComments);

//Obtener un comentario
router.get('/:id', getComment);

//Crear un comentario
router.post('/create', createComment);

//Editar un  comentario
router.put('/add/:id', editComment);

//Eliminar un usuario
router.delete('/delete/:id', deleteComment);

module.exports = router;