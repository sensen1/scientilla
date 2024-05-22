import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Source extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sourceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'source_type',
        key: 'id'
      },
      field: 'source_type_id'
    },
    title: {
      type: DataTypes.STRING(600),
      allowNull: false
    },
    acronym: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    eissn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    issn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    isbn: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    publisher: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    scopusId: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'scopus_id'
    },
    website: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'source',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "source_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
