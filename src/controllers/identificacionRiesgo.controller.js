const IdentificacionRiesgo = require("../models/identificacionRiesgo");
const identificacionRiesgoCtrl = {};

identificacionRiesgoCtrl.getIdentificacionRiesgo = async (req, res) => {
    const identificacionRiesgo = await IdentificacionRiesgo.find({
        idCampus: req.params.idCampus
    }, req.params.keys == 'undefined' ? null : req.params.keys.split('-'));
    console.log(identificacionRiesgo);
    res.json(identificacionRiesgo);
};

//Funciona bien
identificacionRiesgoCtrl.createIdentificacionRiesgo = async (req, res) => {
    console.log(req);
    const {
        idCampus,
        proceso,
        riesgo,
        tipo,
        escenarioRiesgo,
        activo,
        amenaza,
        descripcion,
        causas,
        concecuencias,
        nivelImpacto
    } = req.body;

    const identificacionRiesgo = new IdentificacionRiesgo({
        idCampus,
        proceso,
        riesgo,
        tipo,
        escenarioRiesgo,
        activo,
        amenaza,
        descripcion,
        causas,
        concecuencias,
        nivelImpacto
    });
    await identificacionRiesgo.save();

    res.json({
        message: "Riesgo guardado"
    });
};

identificacionRiesgoCtrl.updateIdentificacionRiesgo = async (req, res) => {
    const IdentificacionRiesgo = await IdentificacionRiesgo.findById(req.params.idRiesgo);
    for (let key in req.body) {
        IdentificacionRiesgo[key] = req.body[key];
    }
    await IdentificacionRiesgo.save();
    res.json({
        message: "Riesgo actualizado"
    });
}


identificacionRiesgoCtrl.guardarProbabilidad = async (req, res) => {
    const arrRiesgos = req.body.riesgos;

    arrRiesgos.forEach(async element => {

        const riesgo = await IdentificacionRiesgo.findById(element.id);
        for (let key in element) {
            riesgo[key] = element[key];
        }
        await riesgo.save();
    });
    res.json({
        message: "Probabilidades actualizadas"
    });
};

module.exports = identificacionRiesgoCtrl;