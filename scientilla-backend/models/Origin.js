import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Origin extends Model {
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
    tableName: 'origin',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "origin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_origin",
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
