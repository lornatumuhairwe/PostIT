const User = require('../models').User;
const passport = require('passport');
const btoa = require('btoa');
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

exports.encode = function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str).replace(
    /%([0-9A-F]{2})/g,
    (match, p1) => String.fromCharCode(`0x${p1}`)
  ));
};

exports.isAuthenticated = passport.authenticate('basic', { session: false });

