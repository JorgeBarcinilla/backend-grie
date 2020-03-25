const Campus = require('../models/campus');
const campusCtrl = {};

campusCtrl.getCampuses = async (req, res) => {
    const campuses = await Campus.find({
        idSchool: req.params.idSchool
    });
    console.log(campuses);
    res.json(campuses);
}

/*campusCtrl.getCampus = async (req, res) => {
    const campus = await Campus.find({id: req.id});
    console.log(campus);
    res.json(campus);
}*/

//Funciona bien
campusCtrl.createCampus = async (req, res) => {
    console.log(req);
    const {
        nombre,
        idSchool
    } = req.body;

    const campus = new Campus({
        nombre,
        idSchool
    });
    await campus.save();

    res.json({
        message: 'Sede guardada',
        data: campus.id
    });
}

//funciona bien
/*campusCtrl.assingnSchool = async (req, res) => {
    const campus = await Campus.findById(req.params.idCampus);
    campus.idSchool = req.body.idSchool
    await campus.save();
    res.json({
        message: 'Sede asignada correctamente',
        data: ''
    });
}*/

campusCtrl.updateCampus = async (req, res) => {
    const campus = await Campus.findById(req.params.idCampus);
    for (let key in req.body) {
        campus[key] = req.body[key]
    }
    await campus.save();
    res.json({
        status: 'Sede actualizada'
    });
}

//Funciona bien
campusCtrl.deleteCampus = async (req, res) => {
    console.log(req.params.idCampus)
    await Campus.findByIdAndDelete(req.params.idCampus);
    res.json({
        status: 'Sede eliminada'
    });
}

module.exports = campusCtrl;