import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class UserAccountPermission extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userAccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      },
      field: 'user_account_id'
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'permission',
        key: 'id'
      },
      field: 'permission_id'
    },
    researchEntityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'research_entity_id'
    },
    type: {
      type: DataTypes.ENUM("granted","denied"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_account_permission',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "unique_user_account_permission",
        unique: true,
        fields: [
          { name: "user_account_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "user_account_permission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
