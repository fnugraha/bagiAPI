'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('T_Komentars', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      videoId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('T_Komentars');
  }
};