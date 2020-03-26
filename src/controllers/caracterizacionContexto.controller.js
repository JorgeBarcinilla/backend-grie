const CaracterizacionContexto = require("../models/caracterizacionContexto");
const caracterizacionContextoCtrl = {};

caracterizacionContextoCtrl.getCaracterizacionContexto = async (req, res) => {
    const caracterizacionContexto = await CaracterizacionContexto.findOne({
        idCampus: req.params.idCampus
    });
    console.log(caracterizacionContexto);
    res.json(caracterizacionContexto);
};

//Funciona bien
caracterizacionContextoCtrl.createCaracterizacionContexto = async (req, res) => {
    console.log(req);
    const {
        idCampus,
        contextoExterno,
        contextoInterno,
        contextoProceso,
        identificacionActivos
    } = req.body;

    const caracterizacionContexto = new CaracterizacionContexto({
        idCampus,
        contextoExterno,
        contextoInterno,
        contextoProceso,
        identificacionActivos
    });
    await caracterizacionContexto.save();

    res.json({
        message: "Caracterizacion de contexto guardado"
    });
};

caracterizacionContextoCtrl.updateCaracterizacionContexto = async (req, res) => {
    const caracterizacionContexto = await CaracterizacionContexto.findById(req.params.idCaracterizacionContexto);
    for (let key in req.body) {
        caracterizacionContexto[key] = req.body[key];
    }
    await caracterizacionContexto.save();
    res.json({
        message: "Caracterizacion de contexto actualizado"
    });
};

module.exports = caracterizacionContextoCtrl;