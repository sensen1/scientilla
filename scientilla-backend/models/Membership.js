import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Membership extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parentResearchEntityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'parent_research_entity_id'
    },
    childResearchEntityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'child_research_entity_id'
    },
    type: {
      type: DataTypes.ENUM("member","group","administrator","principal_investigator","director"),
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'membership',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "membership_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_membership",
        unique: true,
        fields: [
          { name: "parent_research_entity_id" },
          { name: "child_research_entity_id" },
          { name: "type" },
        ]
      },
    ]
  });
  }
}
