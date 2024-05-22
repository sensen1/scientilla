import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DiscardedResearchItem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    researchItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_item',
        key: 'id'
      },
      field: 'research_item_id'
    },
    researchEntityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'research_entity_id'
    }
  }, {
    sequelize,
    tableName: 'discarded_research_item',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "discarded_research_item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_discarded_research_item",
        unique: true,
        fields: [
          { name: "research_item_id" },
          { name: "research_entity_id" },
        ]
      },
    ]
  });
  }
}
