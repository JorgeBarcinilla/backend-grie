const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const PreparacionRespuestaSchema = new Schema({
  idCampus: String,
  servicioRespuestaEmergencia: {
    serviciosExternosRespuestaEmergencias: [{
      institucion: String,
      nombreContacto: String,
      telefono: String,
    }],
    serviciosInternosRespuestaEmergencias: [{
      organizacion: String,
      funciones: String,
      responsables: String,
      suplentes: String,
    }],
  },
  capacitacion: {
    servicios: [{
      servicio: String,
      numeroPersonasCapacitadas: String,
      numeroPersonasCapacitar: String,
      oferenteCapacitacion: String,
      responsable: String,
      fechaCapacitacion: Date,
      recursos: String,
    }]
  },
  equipamientoRespuesta: {
    equipamientoIncendios: [{
      descripcion: String,
      verificacionExistenciaCondicion: String,
      cantidadEquiposRequeridos: String,
      responsable: String,
      fechaAdquisicion: Date,
      recursos: String,
    }],
    equipamientoPrimerosAuxilios: [{
      descripcion: String,
      verificacionExistenciaCondicion: String,
      cantidadEquiposRequeridos: String,
      responsable: String,
      fechaAdquisicion: Date,
      recursos: String,
    }],
    necesidadesPenalizacion: [{
      descripcion: String,
      senialesExistentes: String,
      senialesRequeridas: String,
      responsable: String,
      fechaAdquisicion: Date,
      recursos: String,
    }],
    necesidadesAlarmas: [{
      descripcion: String,
      verificacionCaracteristica: String,
      modificaciones: String,
      responsable: String,
      fechaAccion: Date,
      recursos: String,
    }],
    necesidadesComunicacion: [{
      descripcion: String,
      verificacionExistenciaCondicion: String,
      cantidadEquiposRequeridos: String,
      responsable: String,
      fechaAdquisicion: Date,
      recursos: String,
    }]
  },
  entrenamiento: {
    actividades: [{
      actividad: String,
      tiempo: String,
      dificultades: String,
      accionesMejoramiento: String,
      responsable: String,
      fechaAcciones: Date,
      recursos: String,
    }]
  },
})

module.exports = mongoose.model('PreparacionRespuesta', PreparacionRespuestaSchema);