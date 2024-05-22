import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Metadata extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    originIdentifierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'origin_identifier',
        key: 'id'
      },
      field: 'origin_identifier_id'
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'metadata',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "metadata_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
