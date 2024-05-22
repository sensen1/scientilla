import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ResearchItemOrigin extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    originId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'origin',
        key: 'id'
      },
      field: 'origin_id'
    },
    researchItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_item',
        key: 'id'
      },
      field: 'research_item_id'
    }
  }, {
    sequelize,
    tableName: 'research_item_origin',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "research_item_origin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_research_item_origin",
        unique: true,
        fields: [
          { name: "origin_id" },
          { name: "research_item_id" },
        ]
      },
    ]
  });
  }
}
