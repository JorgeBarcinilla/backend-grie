const ValoracionSituacion = require("../models/valoracionSituacion");
const ValoracionSituacionCtrl = {};

ValoracionSituacionCtrl.crearValoracionSituacion = async (req, res) => {
  const {
    idCampus,
    valoraciones
  } = req.body;

  const valoracionSituacion = new ValoracionSituacion({
    idCampus,
    valoraciones
  });
  await valoracionSituacion.save();

  res.json({
    message: "Creada"
  });
};

ValoracionSituacionCtrl.getValoracionSituacion = async (req, res) => {
  const valoracionSituacion = await ValoracionSituacion.findOne({
    idCampus: req.params.idCampus
  });
  res.json(valoracionSituacion);
};

ValoracionSituacionCtrl.guardarValoraciones = async (req, res) => {
  const valoracionSituacion = await ValoracionSituacion.findOne({
    idCampus: req.params.idCampus
  });
  valoracionSituacion['valoraciones'] = req.body.data
  await valoracionSituacion.save();
  res.json({
    message: "Valoracion actualizada"
  });
};

module.exports = ValoracionSituacionCtrl;