import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SequelizeMeta extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'sequelize_meta',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sequelize_meta_pkey",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  }
}
