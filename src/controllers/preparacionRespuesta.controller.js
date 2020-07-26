const PreparacionRespuesta = require("../models/preparacionRespuesta");
const PreparacionRespuestaCtrl = {};

PreparacionRespuestaCtrl.getPreparacionRespuesta = async (req, res) => {
  const preparacionRespuesta = await PreparacionRespuesta.findOne({
    idCampus: req.params.idCampus
  });

  res.json(preparacionRespuesta);
};

PreparacionRespuestaCtrl.crearPreparacionRespuesta = async (req, res) => {
  const {
    idCampus,
    servicioRespuestaEmergencia,
    capacitacion,
    equipamientoRespuesta,
    entrenamiento,
  } = req.body;

  const preparacionRespuesta = new PreparacionRespuesta({
    idCampus,
    servicioRespuestaEmergencia,
    capacitacion,
    equipamientoRespuesta,
    entrenamiento,
  });
  await preparacionRespuesta.save();

  res.json({
    message: "Creada"
  });
};

PreparacionRespuestaCtrl.guardarServiciosInternos = async (req, res) => {
  const preparacionRespuesta = await PreparacionRespuesta.findOne({
    idCampus: req.params.idCampus
  });
  preparacionRespuesta['servicioRespuestaEmergencia']['serviciosInternosRespuestaEmergencias'] = req.body.data
  await preparacionRespuesta.save();
  res.json({
    message: "Servicios internos actualizado"
  });
};

PreparacionRespuestaCtrl.guardarServicioExterno = async (req, res) => {
  const preparacionRespuesta = await PreparacionRespuesta.findOne({
    idCampus: req.params.idCampus
  });
  preparacionRespuesta['servicioRespuestaEmergencia']['serviciosExternosRespuestaEmergencias'].push(req.body)
  await preparacionRespuesta.save();
  res.json({
    message: "Servicio externo agregado"
  });
};

PreparacionRespuestaCtrl.guardarCapacitacion = async (req, res) => {
  const preparacionRespuesta = await PreparacionRespuesta.findOne({
    idCampus: req.params.idCampus
  });
  preparacionRespuesta['capacitacion'] = req.body
  await preparacionRespuesta.save();
  res.json({
    message: "Capacitacion actualizada"
  });
};

PreparacionRespuestaCtrl.guardarEntrenamiento = async (req, res) => {
  const preparacionRespuesta = await PreparacionRespuesta.findOne({
    idCampus: req.params.idCampus
  });
  preparacionRespuesta['entrenamiento'] = req.body
  await preparacionRespuesta.save();
  res.json({
    message: "Entrenamiento actualizado"
  });
};

PreparacionRespuestaCtrl.guardarEquipamiento = async (req, res) => {
  const preparacionRespuesta = await PreparacionRespuesta.findOne({
    idCampus: req.params.idCampus
  });
  preparacionRespuesta['equipamientoRespuesta'] = req.body
  await preparacionRespuesta.save();
  res.json({
    message: "Equipamiento actualizado"
  });
};

module.exports = PreparacionRespuestaCtrl;