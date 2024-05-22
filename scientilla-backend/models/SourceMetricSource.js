import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SourceMetricSource extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sourceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'source',
        key: 'id'
      },
      field: 'source_id'
    },
    sourceMetricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'source_metric',
        key: 'id'
      },
      field: 'source_metric_id'
    }
  }, {
    sequelize,
    tableName: 'source_metric_source',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "source_metric_source_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
