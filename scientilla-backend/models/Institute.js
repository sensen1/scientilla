import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Institute extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    scopusId: {
      type: DataTypes.STRING(75),
      allowNull: true,
      field: 'scopus_id'
    }
  }, {
    sequelize,
    tableName: 'institute',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "institute_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
