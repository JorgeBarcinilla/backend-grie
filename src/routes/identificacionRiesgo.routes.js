const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
    createIdentificacionRiesgo,
    getIdentificacionRiesgo,
    updateIdentificacionRiesgo,
    guardarProbabilidad,
    updateCausa,
    valorarControles,
    tratarRiesgo,
    deleteIdentificacionRiesgo
} = require('../controllers/identificacionRiesgo.controller');
const passportJWT = passport.authenticate('jwt', {
    session: false
});
const passportSignIn = passport.authenticate('local', {
    session: false
});

//Todos los posts
router.route('/get/:idCampus/:keys')
    .get(passportJWT, getIdentificacionRiesgo);

router.route('/create')
    .post(passportJWT, createIdentificacionRiesgo);


router.route('/update/:idRiesgo')
    .put(passportJWT, updateIdentificacionRiesgo);

router.route('/delete/:idRiesgo')
    .delete(passportJWT, deleteIdentificacionRiesgo);

router.route('/updateCausa/:idRiesgo')
    .put(passportJWT, updateCausa);

router.route('/guardarProbabilidad')
    .put(passportJWT, guardarProbabilidad);

router.route('/valorarControles/:idRiesgo')
    .put(passportJWT, valorarControles);

router.route('/tratarRiesgo/:idRiesgo')
    .put(passportJWT, tratarRiesgo);

module.exports = router;