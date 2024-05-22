import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PhdCourse extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phdInstituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'phd_institute',
        key: 'id'
      },
      field: 'phd_institute_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'phd_course',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "phd_course_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_phd_course",
        unique: true,
        fields: [
          { name: "phd_institute_id" },
          { name: "name" },
        ]
      },
    ]
  });
  }
}
