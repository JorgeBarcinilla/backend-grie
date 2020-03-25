const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {getPosts, getMyPosts, createPost, updatePost, deletePost, likePost, commentPost} = require('../controllers/post.controller');
const passportJWT = passport.authenticate('jwt',{session: false});
const passportSignIn = passport.authenticate('local',{session: false});

//Todos los posts
router.get('/', getPosts);

//El post de un id determinado
router.route('/myPosts')
    .get(passportJWT,getMyPosts);

//Crea un post
router.route('/create')
    .post(passportJWT,createPost);

//Actualiza un post
router.put('/update/:idPost', updatePost);

//Elimina un post
router.delete('/delete/:idPost', deletePost);

//Reaccion a un post un post
router.put('/like/:idPost/:idUser', likePost);

//Comentario a un post un post
router.put('/comment/:idPost/:idUser', commentPost);

module.exports = router;