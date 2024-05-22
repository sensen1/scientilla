import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ResearchEntity extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM("group","user"),
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    importedData: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'imported_data'
    }
  }, {
    sequelize,
    tableName: 'research_entity',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "research_entity_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
