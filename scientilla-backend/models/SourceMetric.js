import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SourceMetric extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sourceOriginId: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'source_origin_id'
    },
    issn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eissn: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    sourceTitle: {
      type: DataTypes.STRING(400),
      allowNull: false,
      field: 'source_title'
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'source_metric',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "source_metric_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
