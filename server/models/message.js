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
    Message.belongsTo(model.Group, { foreignKey: 'group_id', targetKey: 'id',onDelete: 'CASCADE' });
    Message.belongsTo(model.User, { foreignKey: 'user_id',targetKey: 'id',onDelete: 'CASCADE' });
  };
  return Message;
};
