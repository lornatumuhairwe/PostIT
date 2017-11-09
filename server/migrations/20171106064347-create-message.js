module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Messages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    body: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    GroupId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Groups',
        key: 'id',
      },
      allowNull: false,
    },
    UserId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Messages'),
};
