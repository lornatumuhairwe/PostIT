const Group = require('../models').Group;
const GroupMembers = require('../models').GroupMembers;
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
        let group_id = group.dataValues.id;
        let user_id = req.user.dataValues.id;
        // save the group membership too.
        GroupMembers.create({ group_id, user_id });
        res.status(201).send(group);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },
};
