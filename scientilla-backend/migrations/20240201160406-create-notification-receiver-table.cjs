'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
<<<<<<< Updated upstream:migrations/20240201160406-create-notification-receiver-table.cjs
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notification_receiver', {
=======
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notification_recipient", {
>>>>>>> Stashed changes:migrations/20240201160406-create-notification-recipient-table.cjs
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      notificationId: {
        type: Sequelize.INTEGER,
        field: "notification_id",
        references: {
          model: 'notification',
          key: 'id'
        },
        allowNull: false
      },
      recipientId: {
        type: Sequelize.INTEGER,
        field: "recipient_id",
        references: {
          model: 'user_account',
          key: 'id'
        },
        allowNull: false
      },
      readAt: {
        type: Sequelize.DATE,
        field: "read_at",
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
        allowNull: false,
        defaultValue: new Date()
      }
    })
  },

<<<<<<< Updated upstream:migrations/20240201160406-create-notification-receiver-table.cjs
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("notification_receiver")
  }
=======
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("notification_recipient");
  },
>>>>>>> Stashed changes:migrations/20240201160406-create-notification-recipient-table.cjs
};
