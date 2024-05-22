import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ResearchItemOriginIdentifier extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    originIdentifierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'origin_identifier',
        key: 'id'
      },
      field: 'origin_identifier_id'
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
    tableName: 'research_item_origin_identifier',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "research_item_origin_identifier_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_research_item_origin_identifier",
        unique: true,
        fields: [
          { name: "origin_identifier_id" },
          { name: "research_item_id" },
        ]
      },
    ]
  });
  }
}
