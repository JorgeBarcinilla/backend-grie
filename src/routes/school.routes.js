const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {createSchool,deleteSchool,getSchool,getSchools,updateSchool} = require('../controllers/school.controller');
const passportJWT = passport.authenticate('jwt',{session: false});
const passportSignIn = passport.authenticate('local',{session: false});

// //Todos los posts
// router.route('/')
//     .get(passportJWT, getSchools);

//El post de un id determinado
router.route('/')
    .get(passportJWT,getSchool);

//Crea un post
router.route('/create')
    .post(passportJWT,createSchool);

//Actualiza un post
router.route('/update/:idSchool')
    .put(passportJWT, updateSchool);

//Elimina un post
router.route('/delete/:idSchool')
    .delete(passportJWT, deleteSchool);

module.exports = router;