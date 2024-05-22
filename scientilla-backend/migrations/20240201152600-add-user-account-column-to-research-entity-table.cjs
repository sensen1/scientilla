"use strict";

const { query } = require("express");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try{
      await queryInterface.addColumn(
        "research_entity",
        "user_account_id",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: true,
          references: {
            model: "user_account",
            key: "id",
          },
          after: "type"
        }
      );
    } catch(e) {

    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("research_entity", 'user_account_id');
  },
};
