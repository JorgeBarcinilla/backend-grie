const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
  crearValoracionSituacion,
  getValoracionSituacion,
  guardarValoraciones
} = require('../controllers/valoracionSituacion.controller');

const passportJWT = passport.authenticate('jwt', {
  session: false
});
const passportSignIn = passport.authenticate('local', {
  session: false
});

router.route('/get/:idCampus')
  .get(passportJWT, getValoracionSituacion);

router.route('/create')
  .post(passportJWT, crearValoracionSituacion);

router.route('/guardar/:idCampus')
  .post(passportJWT, guardarValoraciones);

module.exports = router;