const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
  crearEjecucionRecuperacion,
  getEjecucionRecuperacion,
  guardarEjecucion,
  editarEjecucion
} = require('../controllers/ejecucionRecuperacion.controller');

const passportJWT = passport.authenticate('jwt', {
  session: false
});
const passportSignIn = passport.authenticate('local', {
  session: false
});

router.route('/get/:idCampus')
  .get(passportJWT, getEjecucionRecuperacion);

router.route('/create')
  .post(passportJWT, crearEjecucionRecuperacion);

router.route('/guardar/:idCampus')
  .post(passportJWT, guardarEjecucion);

router.route('/editar/:idCampus')
  .put(passportJWT, editarEjecucion);

module.exports = router;