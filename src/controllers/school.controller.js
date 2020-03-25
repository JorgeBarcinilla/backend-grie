const School = require('../models/school');
const schoolCtrl = {};

schoolCtrl.getSchools = async (req, res) => {
    const schools = await School.find();
    console.log(schools);
    res.json(schools);
}

schoolCtrl.getSchool = async (req, res) => {
    const school = await School.findOne({idUser: req.user.id});
    console.log(school);
    res.json(school);
}

//funciona bien
schoolCtrl.createSchool = async (req, res) => {
    console.log(req.body);
    console.log(req.user);
    const {nombre,codDane,rector,coordinador,liderPRAE,liderLogistica,liderConsejoAcademico,liderBrigada
        ,liderPadres,liderEstudiantes,representanteOrganismosSocorro,
        mision,vision,objetivos,valores} = req.body;

    const school = new School({idUser : req.user,nombre,codDane,rector,coordinador,liderPRAE,liderLogistica,liderConsejoAcademico,liderBrigada
        ,liderPadres,liderEstudiantes,representanteOrganismosSocorro,
        mision,vision,objetivos,valores});
    
    school.idUser = req.user.id
    
    await school.save();
    res.json({
        message: 'Colegio guardado',
        data: school.id
    });
}



schoolCtrl.updateSchool =  async (req, res) => {

    const school = await Campus.findById(req.params.idSchool);
    for(let key in req.body){
        school[key] = req.body[key]
    }
    await school.save();
    res.json({status: 'Colegio actualizada'});
}

schoolCtrl.deleteSchool = async (req, res) => {
    await School.findByIdAndDelete(req.params.idSchool);
    res.json({status: 'Colegio eliminado'});
}

/*
schoolCtrl.likePost = async (req, res) => {
    const post = await School.findById(req.params.idPost);
    console.log(post.likes);
    var index = post.likes.indexOf(req.params.idUser);
    if (index != -1) {
        post.likes.splice(index,1);
    }else{
        post.likes.push(req.params.idUser);
    }
    await post.save();
    res.json({status: 'Like guardado'});
} 

schoolCtrl.commentPost = async (req, res) => {
    const post = await School.findById(req.params.idPost);
    console.log(post.comments);
    var flag = true;
    for (let index = 0; index < post.comments.length; index++) {
        const comment = post.comments[index];
        if (comment.userId == req.params.idUser) {
            comment.texts.push(req.body.comment);
            flag = false;
            break;
        }
    }
    if (flag){
        var comment = { userId : req.params.idUser, texts: [req.body.comment]}
        post.comments.push(comment);
    }
    await post.save();
    res.json({status: 'Comentario guardado'});
}*/

module.exports = schoolCtrl;