import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class NotDuplicateResearchItem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    researchEntityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'research_entity_id'
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
    duplicateResearchItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_item',
        key: 'id'
      },
      field: 'duplicate_research_item_id'
    }
  }, {
    sequelize,
    tableName: 'not_duplicate_research_item',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "not_duplicate_research_item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
