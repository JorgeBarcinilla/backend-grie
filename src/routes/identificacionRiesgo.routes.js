const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
    createIdentificacionRiesgo,
    getIdentificacionRiesgo,
    updateIdentificacionRiesgo
} = require('../controllers/identificacionRiesgo.controller');
const passportJWT = passport.authenticate('jwt', {
    session: false
});
const passportSignIn = passport.authenticate('local', {
    session: false
});

//Todos los posts
router.route('/get/:idCampus')
    .get(passportJWT, getIdentificacionRiesgo);

router.route('/create')
    .post(passportJWT, createIdentificacionRiesgo);


router.route('/update/:idRiesgo')
    .put(passportJWT, updateIdentificacionRiesgo);

module.exports = router;