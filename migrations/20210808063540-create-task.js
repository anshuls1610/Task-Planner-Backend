'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            task: {
                type: Sequelize.STRING
            },
            priority: {
                type: Sequelize.ENUM("Very Low", "Low", "Medium", "High", "Very High"),
                defaultValue: "Low"
            },
            description: {
                type: Sequelize.TEXT
            },
            type: {
                type: Sequelize.ENUM("Feature", "Update", "Bug", "Task"),
                defaultValue: "Feature"
            },
            for: {
                type: Sequelize.ENUM("Ui", "Backend", "Frontend"),
                defaultValue: "Ui"
            },
            assignedToDevId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            assignedToTestId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            expectedFinishDate: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            actualFinishDate: {
                type: Sequelize.DATE,
            },
            status: {
                type: Sequelize.ENUM("Generated", "Received", "Accepted", "In Progress", "In Testing",
                    "Solving Bugs", "Completed", "No Longer Required", "Released", "On Hold"),
                defaultValue: "Generated"
            },
            flag: {
                type: Sequelize.ENUM("RED", "GREEN", "YELLOW", "BLUE"),
                defaultValue: "BLUE"
            },
            releaseId: {
                type: Sequelize.INTEGER,
            },
            comments: {
                type: Sequelize.TEXT,
            },
            createdById: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            deletedById: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            updatedById: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Users',
                    key: 'id'
                }
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
        await queryInterface.dropTable('Tasks');
    }
};