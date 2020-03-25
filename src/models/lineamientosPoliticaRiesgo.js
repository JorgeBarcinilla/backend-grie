const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const LineamientosSchema = new Schema({
    idCampus: {
        type: Schema.ObjectId,
        ref: "Campus"
    },
    terminosDefiniciones: {
        type: String
    },
    objetivo: {
        type: String
    },
    alcance: {
        type: String
    },
    nivelesAceptacionRiesgo: {
        riesgoBajo: String,
        riesgoModerado: String,
        riesgoAlto: String,
        riesgoExtremo: String
    },
    nivelesCalificarProbabilidad: {
        nivel5: {
            cantidad: String,
            numeroVeces: String,
            ocurrencia: String
        },
        nivel4: {
            cantidad: String,
            numeroVeces: String,
            ocurrencia: String
        },
        nivel3: {
            cantidad: String,
            numeroVeces: String,
            ocurrencia: String
        },
        nivel2: {
            cantidad: String,
            numeroVeces: String,
            ocurrencia: String
        },
        nivel1: {
            cantidad: String,
            numeroVeces: String,
            ocurrencia: String
        }
    },
    nivelesCalificarImpactoFisico: {
        impactoCatastrofico: {
            porcentajeAfectacion: [String]
        },
        impactoMayor: {
            porcentajeAfectacion: [String]
        },
        impactoModerado: {
            porcentajeAfectacion: [String]
        },
        impactoMenor: {
            porcentajeAfectacion: [String]
        },
        impactoInsignificante: {
            porcentajeAfectacion: [String]
        }
    },
    nivelesCalificarImpactoGestion: {
        impactoCatastrofico: {
            numeroVeces: String
        },
        impactoMayor: {
            numeroVeces: String
        },
        impactoModerado: {
            numeroVeces: String
        },
        impactoMenor: {
            numeroVeces: String
        },
        impactoInsignificante: {
            numeroVeces: String
        }
    },
});

module.exports = mongoose.model('LineamientosPoliticaRiesgo', LineamientosSchema);