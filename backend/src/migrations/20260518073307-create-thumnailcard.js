'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Thumnailcards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       title: {
        type: Sequelize.STRING
      },
       category: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      oldPrice: {
        type: Sequelize.DECIMAL(10, 2)
      },
      rating: {
        type: Sequelize.DECIMAL(10, 2)
      },
      student: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Thumnailcards');
  }
};