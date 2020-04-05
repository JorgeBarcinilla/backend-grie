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
        nombre: String,
        control: {
            nombre: String,
            criterio1: {
                a: String,
                b: String
            },
            criterio2: String,
            criterio3: String,
            criterio4: String,
            criterio5: String,
            criterio6: String,
            calificacionDisenio: String,
            calificacionEjecucion: String,
            solidez: String,
            fortalecer: String
        }
    }],
    consecuencias: [{
        type: String
    }],
    nivelImpacto: {
        type: String
    },
    probabilidad: {
        type: String
    },
    solidez: {
        type: String
    },

});

module.exports = mongoose.model('IdentificacionRiesgo', IdentificacionRiesgoSchema);