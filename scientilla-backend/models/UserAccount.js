import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class UserAccount extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_login'
    }
  }, {
    sequelize,
    tableName: 'user_account',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "user_account_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
