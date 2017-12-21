const passport = require('passport');
const { User } = require('../models');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
const strategy = new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => (user ? done(null, user) : done(null, false)))
    .catch(err => done(err, false));
});

passport.use(strategy);

module.exports.tokenGenerator = (userId) => {
  const payload = { id: userId };
  return jwt.sign(payload, opts.secretOrKey, {
    expiresIn: 10080 // in seconds
  });
};

module.exports.isAuthenticated = passport.authenticate('jwt', { session: false });
