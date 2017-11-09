
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    }
  });
  Message.associate = (model) => {
    Message.belongsTo(model.Group, { targetKey: 'id', onDelete: 'CASCADE' });
    Message.belongsTo(model.User, { targetKey: 'id', onDelete: 'CASCADE' });
  };
  return Message;
};
