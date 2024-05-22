import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class NotificationRecipient extends Model {
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
    recipientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      },
      field: 'recipient_id'
    },
    readAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'read_at'
    }
  }, {
    sequelize,
    tableName: 'notification_recipient',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "notification_recipient_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
