import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Alias extends Model {
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
      allowNull: false,
      references: {
        model: 'research_entity',
        key: 'id'
      },
      field: 'research_entity_id'
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    main: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'alias',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "alias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_alias",
        unique: true,
        fields: [
          { name: "research_entity_id" },
          { name: "value" },
        ]
      },
    ]
  });
  }
}
