const authController = require('../controllers').authentication;
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the Todos API!',
  });
});

router.post('/user/signup', authController.create);
// router.post(
//   '/user/signin',
//   passport.authenticate('local',
//       { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true, authController.login})
//
// );

module.exports = router;
