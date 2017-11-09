const User = require('../models').User;
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(((username, password, done) => {
  User.findOne({
    where: {
      username
    }
  }).then((user) => {
    if (!user) {
      return done(null, false, {
        message: 'Incorrect username'
      });
    }
    if (!user.verifyPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
})));
exports.isAuthenticated = passport.authenticate('basic', { session: false });
