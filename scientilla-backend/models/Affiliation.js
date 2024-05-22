import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Affiliation extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'author',
        key: 'id'
      },
      field: 'author_id'
    },
    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'institute',
        key: 'id'
      },
      field: 'institute_id'
    }
  }, {
    sequelize,
    tableName: 'affiliation',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "affiliation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
