const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {getUsers, profile, signUp, signIn, editUser, deleteUser} = require('../controllers/user.controller');
const passportJWT = passport.authenticate('jwt',{session: false});
const passportSignIn = passport.authenticate('local',{session: false});

//Obtener todos los usuarios
router.route('/')
    .get(getUsers);

//perfil del usuario
router.route('/profile')
    .get(passportJWT, profile);

//Logear un usuario
router.route('/signIn')
    .post(passportSignIn, signIn);
 
//Crear un usuario
router.route('/signUp')
    .post(signUp);

//Editar un  usuario
router.route('/:id')
    .put(editUser);

//Eliminar un usuario
router.route('/:id')
    .delete(deleteUser);


//Funcion de autenticar
/*function isAuthenticated (req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.send('Debe iniciar secion primero');
}*/

module.exports = router;