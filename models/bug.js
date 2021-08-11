'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bug extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Bug.belongsTo(models.Task, { as: 'task', foreignKey: 'taskId' });
            Bug.belongsTo(models.Testcase, { as: 'testcase', foreignKey: 'caseId' });
            Bug.belongsTo(models.User, { as: 'user', foreignKey: 'assignedToDevId' });
        }
    };
    Bug.init({
        bug: {
            type: DataTypes.STRING
        },
        caseId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        taskId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        assignedToDevId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        description: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM("New", "In Progress", "Solved", "Reassigned", "Wrong Bug"),
            defaultValue: "New"
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
        modelName: 'Bug',
    });
    return Bug;
};