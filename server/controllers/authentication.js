const passport = require('passport');
const { User } = require('../models');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
const strategy = new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => (user ? done(null, user) : done(null, false)))
    .catch(err => done(err, false));
});

passport.use(strategy);

exports.isAuthenticated = passport.authenticate('jwt', { session: false });
