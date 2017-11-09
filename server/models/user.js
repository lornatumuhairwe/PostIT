const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      through: models.GroupMembers,
      as: 'Group',
      foreignKey: 'group_id',
      targetKey: 'id'
    });
    User.hasMany(models.Message);
  };

  User.prototype.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
