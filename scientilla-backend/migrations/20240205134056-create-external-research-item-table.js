import { Sequelize } from "sequelize";

export async function up({ context: queryInterface }) {
  await queryInterface.createTable("external_research_item", {
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
      onDelete: "cascade",
    },
    researchEntityId: {
      type: Sequelize.INTEGER,
      field: "research_entity_id",
      allowNull: false,
      references: {
        model: "research_entity",
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

  await queryInterface.addIndex(
    "external_research_item",
    ["research_item_id", "research_entity_id"],
    {
      name: "unique_external_research_item",
      unique: true,
    },
  );
}

export async function down({ context: queryInterface }) {
  await queryInterface.removeIndex(
    "external_research_item",
    "unique_external_research_item",
  );
  await queryInterface.dropTable("external_research_item");
}
