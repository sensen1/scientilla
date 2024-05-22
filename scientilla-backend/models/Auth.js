import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Auth extends Model {
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
    provider: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auth',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "auth_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_auth",
        unique: true,
        fields: [
          { name: "user_account_id" },
          { name: "provider" },
        ]
      },
    ]
  });
  }
}
