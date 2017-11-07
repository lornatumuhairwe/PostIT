const User = require('../models').User;
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
      .then((user) => {
        res.status(201).send(user);
        console.log("this is it ", user);
      })
      .catch(error => res.status(400).send(error));
  },
};

// module.exports = {
//   login(req, res) {
//     res.status(200).send({
//       message: 'Welcome to the Login page!',
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
