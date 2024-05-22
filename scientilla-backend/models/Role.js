import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Role extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "role_key_key"
    },
    label: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    needsResearchEntity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'needs_research_entity'
    }
  }, {
    sequelize,
    tableName: 'role',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "role_key_key",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
