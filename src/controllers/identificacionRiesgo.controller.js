const IdentificacionRiesgo = require('../models/identificacionRiesgo');
const removeNullValues = require('../helpers/removeNullValues');
const identificacionRiesgoCtrl = {};

identificacionRiesgoCtrl.getIdentificacionRiesgo = async (req, res) => {
  const identificacionRiesgo = await IdentificacionRiesgo.find(
    {
      idCampus: req.params.idCampus,
    },
    req.params.keys == 'undefined' ? null : req.params.keys.split('-')
  ).lean();
  identificacionRiesgo.map((element) => {
    element = removeNullValues(element);
  });
  res.json(identificacionRiesgo);
};

//Funciona bien
identificacionRiesgoCtrl.createIdentificacionRiesgo = async (req, res) => {
  console.log(req.body);
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
    consecuencias,
    nivelImpacto,
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
    consecuencias,
    nivelImpacto,
  });
  await identificacionRiesgo.save();

  res.json({
    message: 'Riesgo guardado',
  });
};

identificacionRiesgoCtrl.updateIdentificacionRiesgo = async (req, res) => {
  const identificacionRiesgo = await IdentificacionRiesgo.findById(
    req.params.idRiesgo
  );
  identificacionRiesgo.nivelRiesgo = req.body.nivelRiesgo;
  await identificacionRiesgo.save();
  res.json({
    message: 'Riesgo actualizado',
  });
};

identificacionRiesgoCtrl.deleteIdentificacionRiesgo = async (req, res) => {
  await IdentificacionRiesgo.remove({
    _id: req.params.idRiesgo,
  });
  res.json({
    message: 'Riesgo eliminado',
  });
};

identificacionRiesgoCtrl.updateCausa = async (req, res) => {
  const identificacionRiesgo = await IdentificacionRiesgo.findById(
    req.params.idRiesgo
  );
  identificacionRiesgo.causas = req.body.causas;
  identificacionRiesgo.solidez = req.body.solidez;
  await identificacionRiesgo.save();
  res.json({
    message: 'Guardado',
  });
};

identificacionRiesgoCtrl.valorarControles = async (req, res) => {
  const identificacionRiesgo = await IdentificacionRiesgo.findById(
    req.params.idRiesgo
  );
  identificacionRiesgo.disminuirImpacto = req.body.disminuirImpacto;
  identificacionRiesgo.disminuirProbabilidad = req.body.disminuirProbabilidad;
  await identificacionRiesgo.save();
  res.json({
    message: 'Controles valorados',
  });
};

identificacionRiesgoCtrl.tratarRiesgo = async (req, res) => {
  const identificacionRiesgo = await IdentificacionRiesgo.findById(
    req.params.idRiesgo
  );
  const {
    estado,
    tipoCompartir,
    actividadesCumplidas,
    incidentes,
    planContingencia,
    acciones,
  } = req.body;
  const tratamiento = {
    estado,
    actividadesCumplidas,
    incidentes,
    planContingencia,
    tipoCompartir,
  };
  identificacionRiesgo.tratamiento = tratamiento;
  if (acciones) {
    identificacionRiesgo.causas.map((element) => {
      element.accion = acciones.find((acc) => {
        return acc.idCausa == element._id;
      });
    });
  } else {
    identificacionRiesgo.causas.map((element) => {
      element.accion = null;
    });
  }
  await identificacionRiesgo.save();
  res.json({
    message: 'Riesgo tratado',
  });
};

identificacionRiesgoCtrl.guardarProbabilidad = async (req, res) => {
  const arrRiesgos = req.body.riesgos;

  arrRiesgos.forEach(async (element) => {
    const riesgo = await IdentificacionRiesgo.findById(element.idRiesgo);
    for (let key in element) {
      riesgo[key] = element[key];
    }
    await riesgo.save();
  });
  res.json({
    message: 'Probabilidades actualizadas',
  });
};

module.exports = identificacionRiesgoCtrl;
