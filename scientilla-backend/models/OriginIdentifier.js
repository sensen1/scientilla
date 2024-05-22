import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class OriginIdentifier extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'origin_identifier',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "origin_identifier_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_origin_identifier",
        unique: true,
        fields: [
          { name: "name" },
          { name: "identifier" },
        ]
      },
    ]
  });
  }
}
