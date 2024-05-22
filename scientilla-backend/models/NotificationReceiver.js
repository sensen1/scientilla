import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class NotificationReceiver extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    notificationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'notification',
        key: 'id'
      },
      field: 'notification_id'
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      },
      field: 'receiver_id'
    },
    readAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'read_at'
    }
  }, {
    sequelize,
    tableName: 'notification_receiver',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "notification_receiver_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
