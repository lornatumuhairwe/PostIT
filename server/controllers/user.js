const User = require('../models').User;
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const encoder = require('./authentication');

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
      .then((user) => {
        res.status(201).send({
          user,
          message: 'Signup success'
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
        req.session.user = user.dataValues;
        // console.log(req.session.user.id);
        // console.log(encoder.encode(`${username}:${password}`));
        res.status(200).send({
          message: 'Login success!',
          cookie: encoder.encode(`${username}:${password}`)
        });
      }
    });
  }
};
