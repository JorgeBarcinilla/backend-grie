const {
  string
} = require('joi');
const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const EjecucionRecuperacion = new Schema({
  idCampus: String,
  ejecuciones: [{
    necesidad: String,
    ejecutor: String,
    diasEjecucion: String,
    acciones: String,
    seguimiento: {
      respuesta: String,
      accion: String
    }
  }]
})

module.exports = mongoose.model('EjecucionRecuperacion', EjecucionRecuperacion);