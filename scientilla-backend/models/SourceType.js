import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SourceType extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "source_type_key_key"
    },
    label: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'source_type',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "source_type_key_key",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "source_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
