import { Sequelize } from "sequelize";

export async function up({ context: queryInterface }) {
  await queryInterface.createTable("research_item", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    researchItemTypeId: {
      type: Sequelize.INTEGER,
      field: "research_item_type_id",
      allowNull: false,
      references: {
        model: "research_item_type",
        key: "id",
      },
      onDelete: "restrict",
    },
    creatorResearchEntityId: {
      type: Sequelize.INTEGER,
      field: "creator_research_entity_id",
      allowNull: true,
      references: {
        model: "research_entity",
        key: "id",
      },
      onDelete: "cascade",
    },
    kind: {
      type: Sequelize.ENUM("draft", "verified", "external"),
      allowNull: false,
    },
    data: {
      type: Sequelize.JSONB,
      allowNull: true,
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
  await queryInterface.dropTable("research_item");
  await queryInterface.sequelize.query(
    'DROP TYPE IF EXISTS "enum_research_item_kind";',
  );
}
