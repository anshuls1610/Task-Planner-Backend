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
            Task.hasMany(models.Testcase, { foreignKey: 'caseId' });
            Task.hasMany(models.Bug, { foreignKey: 'taskId' });
            Task.belongsTo(models.Release, { as: 'release', foreignKey: 'releaseId' });
        }
    };
    Task.init({
        task: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.ENUM("Very Low", "Low", "Medium", "High", "Very High")
        },
        description: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.ENUM("Feature", "Update", "Bug", "Task")
        },
        for: {
            type: DataTypes.ENUM("Ui", "Backend", "Frontend")
        },
        assignedToDevId: {
            type: DataTypes.INTEGER
        },
        assignedToDev: {
            type: DataTypes.STRING
        },
        assignedToTestId: {
            type: DataTypes.INTEGER
        },
        assignedToTest: {
            type: DataTypes.STRING
        },
        expectedFinishDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        actualFinishDate: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.ENUM("Received", "Accepted", "In Progress", "In Testing", "Solving Bugs", "Completed", "No Longer Required", "Released"),
        },
        flag: {
            type: DataTypes.ENUM("RED", "GREEN", "YELLOW", "BLUE"),
        },
        releaseId: {
            type: DataTypes.INTEGER,
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