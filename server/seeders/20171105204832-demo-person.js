'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('People', [{
            firstName: 'John',
            lastName: 'Doe',
            email: 'demo@demo.com'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('People', null, {});
    };
