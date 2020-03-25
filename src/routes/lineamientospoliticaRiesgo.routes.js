const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
    createLineamiento,
    getLineamiento,
    updateLineamiento
} = require('../controllers/lineamientosPoliticaRiesgo.controller');
const passportJWT = passport.authenticate('jwt', {
    session: false
});
const passportSignIn = passport.authenticate('local', {
    session: false
});

//Todos los posts
router.route('/get/:idCampus')
    .get(passportJWT, getLineamiento);

router.route('/create')
    .post(passportJWT, createLineamiento);


router.route('/update/:idLineamiento')
    .put(passportJWT, updateLineamiento);

module.exports = router;