const userController = require('../controllers').user;
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the Todos API!',
  });
});

router.post('/user/signup', userController.create);
router.post('/user/signin', userController.login);
// router.post(
//   '/user/signin',
//   passport.authenticate('local',
//       { successRedirect: '/', failureRedirect: '/users/login',
// failureFlash: true, authController.login})
//
// );

module.exports = router;
