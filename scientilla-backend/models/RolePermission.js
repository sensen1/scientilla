import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class RolePermission extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id'
      },
      field: 'role_id'
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'permission',
        key: 'id'
      },
      field: 'permission_id'
    }
  }, {
    sequelize,
    tableName: 'role_permission',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "role_permission_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_role_permission",
        unique: true,
        fields: [
          { name: "role_id" },
          { name: "permission_id" },
        ]
      },
    ]
  });
  }
}
