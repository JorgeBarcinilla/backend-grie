const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
    createCaracterizacionContexto,
    getCaracterizacionContexto,
    updateCaracterizacionContexto
} = require('../controllers/caracterizacionContexto.controller');
const passportJWT = passport.authenticate('jwt', {
    session: false
});
const passportSignIn = passport.authenticate('local', {
    session: false
});

//Todos los posts
router.route('/get/:idCampus')
    .get(passportJWT, getCaracterizacionContexto);

router.route('/create')
    .post(passportJWT, createCaracterizacionContexto);


router.route('/update/:idCaracterizacionContexto')
    .put(passportJWT, updateCaracterizacionContexto);

module.exports = router;