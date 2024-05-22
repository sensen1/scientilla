'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("verified_research_item", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      researchItemId: {
        type: Sequelize.INTEGER,
        field: "research_item_id",
        allowNull: false,
        references: {
          model: "research_item",
          key: "id",
        },
        onDelete: "restrict",
      },
      researchEntityId: {
        type: Sequelize.INTEGER,
        field: "research_entity_id",
        allowNull: false,
        references: {
          model: "research_entity",
          key: "id",
        },
        onDelete: "restrict",
      },
      authorPosition: {
        type: Sequelize.INTEGER,
        field: "author_position",
        allowNull: false
      },
      isFavorite: {
        type: Sequelize.BOOLEAN,
        field: "is_favorite",
        allowNull: false,
        defaultValue: false,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
        field: "is_public",
        allowNull: false,
        defaultValue: false,
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

    await queryInterface.addIndex("verified_research_item", ['research_item_id', 'research_entity_id'],{
      name: 'unique_verified_research_item',
      unique: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex("verified_research_item", "unique_verified_research_item");
    await queryInterface.dropTable("verified_research_item");
  }
};
