'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("research_item_origin_identifier", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      originIdentifierId: {
        type: Sequelize.INTEGER,
        field: "origin_identifier_id",
        allowNull: false,
        references: {
          model: "origin_identifier",
          key: "id",
        },
      },
      researchItemId: {
        type: Sequelize.INTEGER,
        field: "research_item_id",
        allowNull: false,
        references: {
          model: "research_item",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
        allowNull: false,
        defaultValue: new Date()
      }
    });

    await queryInterface.addIndex("research_item_origin_identifier", ['origin_identifier_id', 'research_item_id'],{
      name: 'unique_research_item_origin_identifier',
      unique: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex("research_item_origin_identifier", "unique_research_item_origin_identifier");
    await queryInterface.dropTable("research_item_origin_identifier")
  }
};
