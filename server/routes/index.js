const userController = require('../controllers').user;
const groupController = require('../controllers').group;
var authController = require('../controllers/authentication');
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
router.route('/group').post(authController.isAuthenticated, groupController.create);
router.route('/group/:group_id/user').post(authController.isAuthenticated, groupController.addUserToGroup);
router.route('/group/:group_id/message').post(authController.isAuthenticated, groupController.postMessageToGroup);

module.exports = router;
