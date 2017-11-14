const Group = require('../models').Group;
const GroupMembers = require('../models').GroupMembers;
const Message = require('../models').Message;
const User = require('../models').User;
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const asyncLoop = require('node-async-loop');

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
    // first check if group with that id exists and user with the is exists, then add user to group
    GroupMembers.findOne({
      where: {
        user_id: req.user.dataValues.id,
        group_id: req.params.group_id
      }
    }).then((member) => {
      // console.log('check if user is member of group', member);
      if (member) {
        GroupMembers.findOne({
          where: {
            user_id: req.body.user_id,
            group_id: req.params.group_id
          }
        }).then((not_member) => {
          if (!not_member) {
            GroupMembers.create({
              group_id: req.params.group_id,
              user_id: req.body.user_id // id of user to be added to group
            }).then((member) => {
              res.status(201).send({
                message: 'New user added to group',
                member
              });
            }).catch((error) => {
              res.status(400).send(error);
            });
          } else {
            res.status(400).send({
              message: 'User already part of the group.'
            });
          }
          // console.log('check if user to be added is member of group vvv', member);
        });
      } else {
        res.status(400).send({
          message: 'You are not authorized to add user to group'
        });
      }
    });
  },

  postMessageToGroup(req, res) {
    // first check if group with that id exists and user is a member and then post message to group
    GroupMembers.findOne({
      where: {
        user_id: req.user.dataValues.id,
        group_id: req.params.group_id
      }
    }).then((member) => {
      // console.log('check if user is member of group', member);
      if (member) {
        return Message.create({
          GroupId: req.params.group_id,
          // UserId: req.body.user_id,
          UserId: req.user.dataValues.id,
          body: req.body.message_body
        }).then((message_details) => {
          res.status(201).send({
            message: 'New message sent to group',
            message_details
          });
        }).catch((error) => {
          res.status(400).send(error);
        });
      }
      res.status(401).send({
        message: 'You cannot post a message to agroup you dont belong to'
      });
    }).catch((error) => {
      res.status(400).send(error);
    });
  },

  getAllGroupMessages(req, res) {
    // first check if group with that id exists and user is a member and then get messages in group
    console.log(req.user);
    GroupMembers.findOne({
      where: {
        user_id: req.user.dataValues.id,
        group_id: req.params.group_id
      }
    }).then((member) => {
      // console.log('check if user is member of group', member);
      if (member) {
        return Message.findAll({ where: { GroupId: req.params.group_id } }).then((messages) => {
          res.status(201).send({
            message: 'These are the messages in this group',
            messages
          });
        }).catch((error) => {
          res.status(400).send(error);
        });
      }
      res.status(401).send({
        message: 'You cannot get messages of group you dont belong to'
      });
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getUserGroups(req, res) {
    // first check if group with that id exists and user is a member and then get messages in group
    const user_groups = [];
    GroupMembers.findAll({
      where: {
        user_id: req.user.dataValues.id,
      }
    }).then((groups) => {
      (function getGroup(index) {
        if (index >= groups.length) {
          res.status(200).send({
            message: 'Here are the groups you belong to.',
            user_groups
          });
          return;
        }
        // fetchEntry(group.entries[index])
        Group.findOne({
          where: {
            id: groups[index].group_id
          }
        })
          .then((group) => {
            user_groups.push({ name: group.name, id: group.id });
            getGroup(index + 1);
          });
      }(0));
    }).catch((error) => {
      res.status(400).send(error);
    });
  },
};
