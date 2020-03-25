const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
    getCampuses,
    createCampus,
    deleteCampus,
    getCampus,
    updateCampus,
    assingnSchool
} = require('../controllers/campus.controller');
const passportJWT = passport.authenticate('jwt', {
    session: false
});
const passportSignIn = passport.authenticate('local', {
    session: false
});

//Todos los posts
router.route('/get/:idSchool')
    .get(passportJWT, getCampuses);

/*//El post de un id determinado
router.route('/get')
    .get(passportJWT,getCampus);
*/
//Crea un post
router.route('/create')
    .post(passportJWT, createCampus);

//Asigna un la sede a un colegio
/*router.route('/assignSchool/:idCampus')
.put(passportJWT,assingnSchool);*/

//Actualiza un post
router.route('/update/:idCampus')
    .put(passportJWT, updateCampus);

//Elimina un post
router.route('/delete/:idCampus')
    .delete(passportJWT, deleteCampus);

module.exports = router;