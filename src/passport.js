const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const localStrategy = require('passport-local').Strategy;
const {JWT_SECRET} = require('./configuration');
const User = require('./models/user');

//JSON WEB TOKENS STRATEGY
passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        //find the user specified in token
        const user = await User.findById(payload.sub);

        //if user doesn't exists, handle it
        if(!user){
            return done(null,false);
        }

        //Otherwise, return  the user
        done(null, user);

    } catch (err) {
        done(err, false);
    }
}));

//LOCAL STRATEGY
passport.use(new localStrategy({
    usernameField: 'username',
}, async (username,password, done) => {
    try {
        //find the user given the email
        const user = await User.findOne({username});

        //if user doesn't exists, handle it
        if(!user){
            return done(null,false);
        }

        //check if the password is correct
        if(!user.validatePassword(password)){
            return done(null, false);
        }

        //Otherwise, return  the user
        done(null, user);

    } catch (err) {
        done(err, false);
    }
}));