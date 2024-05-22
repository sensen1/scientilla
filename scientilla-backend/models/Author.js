import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Author extends Model {
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
    verifiedResearchItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'verified_research_item',
        key: 'id'
      },
      field: 'verified_research_item_id'
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    authorString: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'author_string'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    isCorrespondingAuthor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_corresponding_author'
    },
    isFirstCoauthor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_first_coauthor'
    },
    isLastCoauthor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_last_coauthor'
    },
    isOralPresentation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_oral_presentation'
    }
  }, {
    sequelize,
    tableName: 'author',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "author_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
