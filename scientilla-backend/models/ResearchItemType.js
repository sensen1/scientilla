import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ResearchItemType extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    shortLabel: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'short_label'
    },
    type: {
      type: DataTypes.ENUM("publication","invited_talk","accomplishment","project","training_module","patent"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'research_item_type',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "research_item_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_research_item_type",
        unique: true,
        fields: [
          { name: "key" },
          { name: "type" },
        ]
      },
    ]
  });
  }
}
