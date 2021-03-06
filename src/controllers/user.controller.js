const JWT = require('jsonwebtoken');
const User = require('../models/user');
const School = require('../models/school');
const {
    JWT_SECRET
} = require('../configuration');
const userCtrl = {};

signToken = user => {
    return JWT.sign({
        iss: 'JorgeLuis',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}


userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.profile = async (req, res) => {
    res.json(req.user);
}

userCtrl.signIn = async (req, res) => {

    //generate token
    const token = signToken(req.user);

    

    const school = await School.findOne({
        idUser: req.user.id
    });

    console.log(school);

    res.status(200).json({
        data: {token, name:school.nombre}
    });
}

userCtrl.signUp = async (req, res) => {
    console.log(req.body);
    const {
        name,
        username,
        password
    } = req.body;
    const foundUser = await User.findOne({
        username
    });

    //Check if there is a user with the same email 
    if (foundUser) {
        return res.status(403).json({
            message: 'El usuario ya se encuentra en uso'
        });
    }

    //save user
    const newUser = new User({
        username
    });
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();

    //save school
    const newSchool = new School({
        idUser: newUser._id,
        nombre: name
    });
    await newSchool.save();



    //generate token
    //const token = signToken(newUser);

    //respond with token
    res.status(200).json({
        message: 'Usuario Creado',
    });

}

userCtrl.editUser = async (req, res) => {
    const {
        name,
        username,
        password
    } = req.body;
    const newUser = {
        name,
        username,
        password
    };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({
        status: 'User actualizado'
    });
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User eliminado'
    });
}

module.exports = userCtrl;