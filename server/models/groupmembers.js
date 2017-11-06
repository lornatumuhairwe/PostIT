'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMembers = sequelize.define('GroupMembers', {
    active: DataTypes.STRING
  });
  return GroupMembers;
};
