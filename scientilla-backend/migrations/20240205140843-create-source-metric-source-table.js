import { Sequelize } from "sequelize";

export async function up({ context: queryInterface }) {
  await queryInterface.createTable("source_metric_source", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    sourceId: {
      type: Sequelize.INTEGER,
      field: "source_id",
      allowNull: false,
      references: {
        model: "source",
        key: "id",
      },
      onDelete: "cascade",
    },
    sourceMetricId: {
      type: Sequelize.INTEGER,
      field: "source_metric_id",
      allowNull: false,
      references: {
        model: "source_metric",
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
  await queryInterface.dropTable("source_metric_source");
}
