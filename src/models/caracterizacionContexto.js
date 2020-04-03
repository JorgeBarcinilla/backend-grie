const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const CaracterizacionContextoSchema = new Schema({
    idCampus: {
        type: Schema.ObjectId,
        ref: "Campus"
    },
    contextoExterno: {
        contextoPolitico: String,
        contextoEconomicoFinanciero: String,
        contextoTecnologico: String,
        contextoLegalReglamentario: String,
        contextoOtro: String,
        contextoSocialCultural: [String],
        contextoAmbiental: [String]
    },
    contextoInterno: {
        estructuraOrganizacional: String,
        estructuraFisica: [{
            nombre: String,
            calificacion: String,
            icon: String
        }],
        financieros: {
            financiero1: {
                rubro: String
            },
            financiero2: {
                rubro: String
            },
            financiero3: {
                rubro: String
            },
            financiero4: {
                rubro: String
            },
        },
        comunidadEducativa: [{
            tipoPoblacion: String,
            cantidad: String,
            cantidadDiscapacitados: String,
            tiposDiscapacidad: [String]
        }],
        factoresEducativos: {
            pregunta1: {
                respuesta: String
            },
            pregunta2: {
                respuesta: String
            },
            pregunta3: {
                respuesta: String
            },
            pregunta4: {
                respuesta: String
            },
        },
        CRAE: {
            pregunta1: {
                respuesta: String
            },
            pregunta2: {
                respuesta: String
            },
            pregunta3: {
                respuesta: String
            },
            pregunta4: {
                respuesta: String
            },
            pregunta5: {
                respuesta: String
            }
        },
        comunicacionInterna: [{
            row: {
                pregunta: String,
                formGroup: {
                    name: String,
                    formControls: [String]
                }
            },
            respuesta: String
        }]
    },
    contextoProceso: {
        procesos: [{
            proceso: String,
            responsable: String,
            objetivo: String,
            alcance: String,
            entradaProceso: String,
            actividadesClaves: String,
            salidaProceso: String,
            clientesProceso: String,
            recursos: String,
            requisitos: String,
            documentosInstitucionales: String,
            indicadores: String
        }]
    },
    identificacionActivos: {
        activos: [{
            proceso: String,
            activo: String,
            tipoActivo: String,
            responsable: String,
            descripcion: String,
            tipoInformacion: String,
            tipoDato: String,
            criticidadRespectoConfidencialidad: String,
            criticidadRespectoIntegridad: String,
            criticidadRespectoDisponibilidad: String,
            nivelCriticidad: String
        }]
    },
});

module.exports = mongoose.model('CaracterizacionContexto', CaracterizacionContextoSchema);