const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
  getReporteDanio,
  crearReporteDanio,
  guardarReporte
} = require('../controllers/reporteDanio.controller');

const passportJWT = passport.authenticate('jwt', {
  session: false
});
const passportSignIn = passport.authenticate('local', {
  session: false
});

router.route('/get/:idCampus')
  .get(passportJWT, getReporteDanio);

router.route('/create')
  .post(passportJWT, crearReporteDanio);

router.route('/guardarReporte/:idCampus')
  .post(passportJWT, guardarReporte);

module.exports = router;