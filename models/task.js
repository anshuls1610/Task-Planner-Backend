'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Task.hasMany(models.Testcase, { foreignKey: 'taskId' });
            Task.hasMany(models.Bug, { foreignKey: 'taskId' });
            Task.belongsTo(models.Release, { as: 'release', foreignKey: 'releaseId' });
        }
    };
    Task.init({
        task: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.ENUM("Very Low", "Low", "Medium", "High", "Very High"),
            defaultValue: "Low"
        },
        description: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.ENUM("Feature", "Update", "Bug", "Task"),
            defaultValue: "Feature"
        },
        for: {
            type: DataTypes.ENUM("Ui", "Backend", "Frontend"),
            defaultValue: "Ui"
        },
        assignedToDevId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        assignedToTestId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        expectedFinishDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        actualFinishDate: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.ENUM("Generated", "Received", "Accepted", "In Progress", "In Testing",
                "Solving Bugs", "Completed", "No Longer Required", "Released", "On Hold"),
            defaultValue: "Generated"
        },
        flag: {
            type: DataTypes.ENUM("RED", "GREEN", "YELLOW", "BLUE"),
            defaultValue: "BLUE"
        },
        releaseId: {
            type: DataTypes.INTEGER,
        },
        comments: {
            type: DataTypes.TEXT,
        },
        createdById: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        deletedById: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        updatedById: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'Task',
    });
    return Task;
};