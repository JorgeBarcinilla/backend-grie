const ReporteDanio = require("../models/reporteDanio");
const ReporteDanioCtrl = {};

ReporteDanioCtrl.crearReporteDanio = async (req, res) => {
  const {
    idCampus,
    reportes
  } = req.body;

  const reporteDanio = new ReporteDanio({
    idCampus,
    reportes
  });
  await reporteDanio.save();

  res.json({
    message: "Creada"
  });
};

ReporteDanioCtrl.getReporteDanio = async (req, res) => {
  const reporteDanio = await ReporteDanio.findOne({
    idCampus: req.params.idCampus
  });
  res.json(reporteDanio);
};

ReporteDanioCtrl.guardarReporte = async (req, res) => {
  const reporteDanio = await ReporteDanio.findOne({
    idCampus: req.params.idCampus
  });
  reporteDanio['reportes'].push(req.body)
  await reporteDanio.save();
  res.json({
    message: "Reporte guardado"
  });
};

module.exports = ReporteDanioCtrl;