import { Sequelize } from "sequelize";

export async function up({ context: queryInterface }) {
  await queryInterface.createTable("auth", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userAccountId: {
      type: Sequelize.INTEGER,
      field: "user_account_id",
      references: {
        model: "user_account",
        key: "id",
      },
      onDelete: "cascade",
      allowNull: false,
    },
    provider: {
      type: Sequelize.STRING(50),
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

  await queryInterface.addIndex("auth", ["user_account_id", "provider"], {
    name: "unique_auth",
    unique: true,
  });
}

export async function down({ context: queryInterface }) {
  await queryInterface.removeIndex("auth", "unique_auth");
  await queryInterface.dropTable("auth");
}
