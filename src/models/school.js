const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchoolSchema = new Schema({
    idUser: {type: Schema.ObjectId, ref: "School", required: true},
    nombre: {type: String, required: true},
    codDane: {type: String, required: true},
    rector: {type: String, required: true},
    coordinador: {type: String, required: true},
    liderPRAE : {type: String},
    liderLogistica : {type: String},
    liderConsejoAcademico : {type: String},
    liderBrigada : {type: String},
    liderPadres : {type: String},
    liderEstudiantes : {type: String},
    representanteOrganismosSocorro : {type: String},
    mision : {type: String},
    vision : {type: String},
    objetivos : {type: String},
    valores : {type: String},
    //sedes: [{type: Schema.ObjectId, ref: "Campus", required: true }],
});

module.exports = mongoose.model('School', SchoolSchema);