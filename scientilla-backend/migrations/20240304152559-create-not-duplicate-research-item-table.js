import { Sequelize } from "sequelize";

export async function up({ context: queryInterface }) {
  await queryInterface.createTable("not_duplicate_research_item", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    researchEntityId: {
      type: Sequelize.INTEGER,
      field: "research_entity_id",
      allowNull: true,
      references: {
        model: "research_entity",
        key: "id",
      },
      onDelete: "cascade",
    },
    researchItemId: {
      type: Sequelize.INTEGER,
      field: "research_item_id",
      allowNull: false,
      references: {
        model: "research_item",
        key: "id",
      },
      onDelete: "cascade",
    },
    duplicateResearchItemId: {
      type: Sequelize.INTEGER,
      field: "duplicate_research_item_id",
      allowNull: false,
      references: {
        model: "research_item",
        key: "id",
      },
      onDelete: "cascade",
    },
    createdAt: {
      type: Sequelize.DATE,
      field: "created_at",
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: "updated_at",
      allowNull: false,
      defaultValue: new Date(),
    },
  });
}

export async function down({ context: queryInterface }) {
  await queryInterface.dropTable("not_duplicate_research_item");
}
