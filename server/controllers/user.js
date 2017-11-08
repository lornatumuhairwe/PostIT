const User = require('../models').User;
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = {
  create(req, res) {
    console.log('qwertyuiopoiuytfrds')
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  login(req, res) {
    const username = req.body.username,
      password = req.body.password;

    User.findOne({ where: { username } }).then((user) => {

      if (!user) {
        res.status(404).send({
          message: 'User not found',
        });
      } else if (!user.verifyPassword(password)) {
        res.status(404).send({
          message: 'User with invalid password',
        });
      } else {
        req.session.user = user;
        res.status(200).send({
          message: 'Login success',
        });
      }
    });
  }
};

// module.exports = {
//   login(req, res) {
//     res.status(200).send({
//       message: 'login success!',
//     });
//   }
// };

// passport.use(new LocalStrategy(((username, password, done) => {
//   User.findOne({ username }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
//     if (!user.validPassword(password)) {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//     return done(null, user);
//   });
// })));
//
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
