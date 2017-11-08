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
  });

  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      through: models.GroupMembers, as: 'Group'
    });
    User.hasMany(models.Message);
  };

  // Execute before each user.save() call
  // User.beforeCreate(user, (callback) => {
  //   const user = this;
  //
  //   // Break out if the password hasn't changed
  //   if (!user.isModified('password')) return callback();
  //
  //   // Password changed so we need to hash it
  //   bcrypt.genSalt(5, (err, salt) => {
  //     if (err) return callback(err);
  //
  //     bcrypt.hash(user.password, salt, null, (err, hash) => {
  //       if (err) return callback(err);
  //       user.password = hash;
  //       callback();
  //     });
  //   });
  // });

  return User;
};
