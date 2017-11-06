'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    body: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      },
    }
  });
  Message.associate = (model) => {
    Message.belongsTo(model.Group, { onDelete: 'CASCADE' });
    Message.belongsTo(model.User, { onDelete: 'CASCADE' });
  };
  return Message;
};
