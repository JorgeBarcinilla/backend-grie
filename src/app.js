const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

// Setting
app.set('port', process.env.PORT || 4000);


// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'mySecretPass',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api/post', require('./routes/post.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/comment', require('./routes/comment.routes'));
app.use('/api/school', require('./routes/school.routes'));
app.use('/api/campus', require('./routes/campus.routes'));
app.use('/api/lineamientoPoliticaRiesgo', require('./routes/lineamientospoliticaRiesgo.routes'));
app.use('/api/caracterizacionContexto', require('./routes/caracterizacionContexto.routes'));

module.exports = app;