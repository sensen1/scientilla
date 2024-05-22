import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ResearchItem extends Model {
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
    creatorResearchEntityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'creator_research_entity_id'
    },
    kind: {
      type: DataTypes.ENUM("draft","verified","external"),
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'research_item',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "research_item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
