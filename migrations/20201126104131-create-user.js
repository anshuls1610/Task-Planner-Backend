'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            createdById: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //   model: 'user',
                //   key: 'id'
                // }
            },
            deletedById: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //   model: 'user',
                //   key: 'id'
                // }
            },
            updatedById: {
                type: Sequelize.INTEGER,
                allowNull: true,
                // references: {
                //   model: 'user',
                //   key: 'id'
                // }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            },
            deletedAt: {
                type: Sequelize.DATE,
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};