import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ResearchItemTypeSourceType extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    researchItemTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_item_type',
        key: 'id'
      },
      field: 'research_item_type_id'
    },
    sourceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'source_type',
        key: 'id'
      },
      field: 'source_type_id'
    }
  }, {
    sequelize,
    tableName: 'research_item_type_source_type',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "research_item_type_source_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
