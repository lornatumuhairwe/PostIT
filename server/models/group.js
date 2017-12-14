
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    no_of_members: {
      type: DataTypes.INTEGER
    }
  });

  Group.associate = (model) => {
    Group.belongsToMany(
      model.User,
      {
        through: model.GroupMembers,
        as: 'User',
        foreignKey: 'user_id',
        targetKey: 'id'
      }
    );
    Group.hasMany(model.Message);
  };
  return Group;
};
