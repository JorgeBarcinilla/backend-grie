const mongoose = require('mongoose')
const {
  Schema
} = mongoose

const CampusSchema = new Schema({
  idSchool: {
    type: Schema.ObjectId,
    ref: 'School'
  },
  nombre: {
    type: String,
    required: true
  },
  codDane: {
    type: String
  },
  coordinador: {
    type: String
  },
  cantEstudiantes: {
    type: String
  },
  cantDocentes: {
    type: String
  },
  datosNivelDirectivo: [{
    nombre: String,
    cargo: String,
    telefono: String,
    correo: String
  }, ],
  municipio: {
    type: String
  },
  barrio: {
    type: String
  },
  direccion: {
    type: String
  },
  telefono: {
    type: String
  },
  correo: {
    type: String
  },
  limiteNorte: {
    type: String
  },
  limiteEste: {
    type: String
  },
  limiteOeste: {
    type: String
  },
  limiteSur: {
    type: String
  },
  anioConstruccion: {
    type: String
  },
  areaConstruida: {
    type: String
  },
  areaLibre: {
    type: String
  },
  archivosSoporte: {
    type: String
  },
  edificios: [{
    numero: String,
    pisos: String,
    salones: [{
      cantidad: String,
      tipoSalon: String
    }],
  }, ],
  jornadas: {
    maniana: Boolean,
    unica: Boolean,
    tarde: Boolean,
    noche: Boolean,
  },
})

module.exports = mongoose.model('Campus', CampusSchema)