const Lineamiento = require("../models/lineamientosPoliticaRiesgo");
const lineamientoCtrl = {};

lineamientoCtrl.getLineamiento = async (req, res) => {
    const lineamiento = await Lineamiento.findOne({
        idCampus: req.params.idCampus
    });
    console.log(lineamiento);
    res.json(lineamiento);
};

//Funciona bien
lineamientoCtrl.createLineamiento = async (req, res) => {
    console.log(req);
    const {
        idCampus,
        terminosDefiniciones,
        objetivo,
        alcance,
        nivelesAceptacionRiesgo,
        nivelesCalificarProbabilidad,
        nivelesCalificarImpactoFisico,
        nivelesCalificarImpactoGestion
    } = req.body;

    const lineamiento = new Lineamiento({
        idCampus,
        terminosDefiniciones,
        objetivo,
        alcance,
        nivelesAceptacionRiesgo,
        nivelesCalificarProbabilidad,
        nivelesCalificarImpactoFisico,
        nivelesCalificarImpactoGestion
    });
    await lineamiento.save();

    res.json({
        message: "Lineamiento de politica de riesgos guardado"
    });
};

lineamientoCtrl.updateLineamiento = async (req, res) => {
    const lineamiento = await Lineamiento.findById(req.params.idLineamiento);
    for (let key in req.body) {
        lineamiento[key] = req.body[key];
    }
    await lineamiento.save();
    res.json({
        message: "Lineamiento de politica de riesgos actualizado"
    });
};

module.exports = lineamientoCtrl;