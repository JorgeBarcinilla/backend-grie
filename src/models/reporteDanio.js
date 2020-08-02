const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const ReporteDanio = new Schema({
  idCampus: String,
  reportes: [{
    fechaEvento: Date,
    diligenciadoPor: String,
    telefono: String,
    fenomeno: String,
    descripcionProyecto: String,
    estudiantesAfectados: String,
    docentesAfectados: String,
    personalAdministrativoAfectados: String,
    personalServiciosGeneralesAfectados: String,
    directivosAfectados: String,
    visitantesAfectados: String,
    otroAfectados: String,
    tipoServicioSolicitado: [{
      nombre: String,
      value: Boolean
    }],
    descripcionNecesidades: String,
    edificacionesAfectadas: [{
      tipo: String,
      cantidad: String,
      descripcion: String
    }]
  }]
})

module.exports = mongoose.model('ReporteDanio', ReporteDanio);