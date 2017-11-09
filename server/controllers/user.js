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
        req.session.user = user.dataValues;
        console.log(req.session.user.id);
        res.status(200).send({
          message: 'Login success!',
        });
      }
    });
  }
};
