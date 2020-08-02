const {
  string
} = require('joi');
const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const ValoracionSituacion = new Schema({
  idCampus: String,
  valoraciones: [{
    informacion: String,
    estado: String,
    detalle: String
  }]
})

module.exports = mongoose.model('ValoracionSituacion', ValoracionSituacion);