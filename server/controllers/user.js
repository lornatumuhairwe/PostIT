const { User } = require('../models');
const { ExtractJwt } = require('passport-jwt');
const authController = require('../controllers/authentication');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';

module.exports = {
  create(req, res) {
    if (req.body.password === req.body.confirmPassword) {
      return User
        .create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        })
        .then((user) => {
          const token = authController.tokenGenerator(user.id);
          res.status(201).send({
            token,
            message: 'Signup success',
          });
        })
        .catch((error) => {
          if (error.errors[0].message === 'username must be unique') {
            res.status(400).send({
              message: 'Username is already taken. Please choose another one.'
            });
          } else if (error.errors[0].message === 'Validation isEmail on email failed') {
            res.status(400).send({
              message: 'Please enter a valid email.'
            });
          } else {
            res.status(400).send({
              error: error.errors[0].message,
              message: 'This error occurred during signup.'
            });
          }
        });
    }
    res.status(400).send({
      message: "Confirmation password doesn't match"
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
          message: 'Invalid password',
        });
      } else {
        const token = authController.tokenGenerator(user.id);
        req.session.user = user.dataValues;
        res.status(200).send({
          token,
          message: 'Login success!',
        });
      }
    });
  },
};
