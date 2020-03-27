const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const IdentificacionRiesgoSchema = new Schema({
    idCampus: {
        type: Schema.ObjectId,
        ref: "Campus"
    },
    proceso: {
        type: String
    },
    riesgo: {
        type: String
    },
    tipo: {
        type: String
    },
    escenarioRiesgo: {
        type: String
    },
    activo: {
        type: String
    },
    amenaza: {
        type: String
    },
    descripcion: {
        type: String
    },
    causas: [{
        type: String
    }],
    concecuencias: [{
        type: String
    }],
    nivelImpacto: {
        type: String
    },
    probabilidad: {
        type: String
    }

});

module.exports = mongoose.model('IdentificacionRiesgo', IdentificacionRiesgoSchema);