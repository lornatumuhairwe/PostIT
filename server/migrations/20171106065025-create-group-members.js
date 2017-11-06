'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GroupMembers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Groups',
              key: 'id'
          },
          allowNull: false
      },
      user_id: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Users',
              key: 'id'
          },
          allowNull: false
      },
      active: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GroupMembers');
  }
};
