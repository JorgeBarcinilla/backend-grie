const EjecucionRecuperacion = require("../models/ejecucionRecuperacion");
const EjecucionRecuperacionCtrl = {};

EjecucionRecuperacionCtrl.crearEjecucionRecuperacion = async (req, res) => {
  const {
    idCampus,
    ejecuciones
  } = req.body;

  const ejecucionRecuperacion = new EjecucionRecuperacion({
    idCampus,
    ejecuciones
  });
  await ejecucionRecuperacion.save();

  res.json({
    message: "Creada"
  });
};

EjecucionRecuperacionCtrl.getEjecucionRecuperacion = async (req, res) => {
  const ejecucionRecuperacion = await EjecucionRecuperacion.findOne({
    idCampus: req.params.idCampus
  });
  res.json(ejecucionRecuperacion);
};

EjecucionRecuperacionCtrl.guardarEjecucion = async (req, res) => {
  const ejecucionRecuperacion = await EjecucionRecuperacion.findOne({
    idCampus: req.params.idCampus
  });
  ejecucionRecuperacion['ejecuciones'].push(req.body)
  await ejecucionRecuperacion.save();
  res.json({
    message: "Ejecucion guardada"
  });
};

EjecucionRecuperacionCtrl.editarEjecucion = async (req, res) => {
  const ejecucionRecuperacion = await EjecucionRecuperacion.findOne({
    idCampus: req.params.idCampus
  });
  ejecucionRecuperacion['ejecuciones'].find(ej => {
    return ej._id == req.body._id
  })['seguimiento'] = req.body.seguimiento
  await ejecucionRecuperacion.save();
  res.json({
    message: "Ejecucion guardada"
  });
};

module.exports = EjecucionRecuperacionCtrl;