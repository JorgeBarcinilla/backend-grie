const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
  crearPreparacionRespuesta,
  getPreparacionRespuesta,
  guardarServicioExterno,
  guardarServiciosInternos,
  guardarCapacitacion,
  guardarEntrenamiento,
  guardarEquipamiento
} = require('../controllers/preparacionRespuesta.controller');

const passportJWT = passport.authenticate('jwt', {
  session: false
});
const passportSignIn = passport.authenticate('local', {
  session: false
});

router.route('/get/:idCampus')
  .get(passportJWT, getPreparacionRespuesta);

router.route('/create')
  .post(passportJWT, crearPreparacionRespuesta);

router.route('/servicioRespuesta/serviciosInternos/guardar/:idCampus')
  .put(passportJWT, guardarServiciosInternos);

router.route('/servicioRespuesta/serviciosExternos/guardar/:idCampus')
  .post(passportJWT, guardarServicioExterno);

router.route('/capacitacion/guardar/:idCampus')
  .put(passportJWT, guardarCapacitacion);

router.route('/entrenamiento/guardar/:idCampus')
  .put(passportJWT, guardarEntrenamiento);

router.route('/equipamiento/guardar/:idCampus')
  .put(passportJWT, guardarEquipamiento);

module.exports = router;