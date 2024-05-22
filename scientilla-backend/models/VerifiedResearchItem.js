import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class VerifiedResearchItem extends Model {
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
    },
    isFavorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_favorite'
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_public'
    }
  }, {
    sequelize,
    tableName: 'verified_research_item',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "unique_verified_research_item",
        unique: true,
        fields: [
          { name: "research_item_id" },
          { name: "research_entity_id" },
        ]
      },
      {
        name: "verified_research_item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
