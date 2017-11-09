const Group = require('../models').Group;
const GroupMembers = require('../models').GroupMembers;
const Message = require('../models').Message;
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = {
  create(req, res) {
    return Group
      .create({
        name: req.body.name,
        no_of_members: req.body.no_of_members
      })
      .then((group) => {
        const group_id = group.dataValues.id;
        const user_id = req.user.dataValues.id;
        // save the group membership too.
        GroupMembers.create({ group_id, user_id });
        res.status(201).send(group);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  addUserToGroup(req, res) {
    return GroupMembers.create({
      group_id: req.params.group_id,
      user_id: req.body.user_id
    }).then((member) => {
      res.status(201).send({
        message: 'New user added to group',
        member
      });
    }).catch((error) => {
      res.status(400).send(error);
    });
  },

  postMessageToGroup(req, res) {
    return Message.create({
      group_id: req.params.group_id,
      user_id: req.body.user_id,
      body: req.body.message_body
    }).then((message_details) => {
      res.status(201).send({
        message: 'New message sent to group',
        message_details
      });
    }).catch((error) => {
      res.status(400).send(error);
    });
  },
};
