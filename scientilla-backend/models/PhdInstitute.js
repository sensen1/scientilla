import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PhdInstitute extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "phd_institute_name_key"
    }
  }, {
    sequelize,
    tableName: 'phd_institute',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "phd_institute_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "phd_institute_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
