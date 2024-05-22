import { Sequelize } from "sequelize";

export async function up({ context: queryInterface }) {
  await queryInterface.createTable("affiliation", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    authorId: {
      type: Sequelize.INTEGER,
      field: "author_id",
      allowNull: false,
      references: {
        model: "author",
        key: "id",
      },
      onDelete: "cascade",
    },
    instituteId: {
      type: Sequelize.INTEGER,
      field: "institute_id",
      allowNull: false,
      references: {
        model: "institute",
        key: "id",
      },
      onDelete: "restrict",
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
  await queryInterface.dropTable("affiliation");
}
