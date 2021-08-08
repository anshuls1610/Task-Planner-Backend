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
        }
    };
    Bug.init({
        bug: {
            type: DataTypes.STRING
        },
        caseId: {
            type: DataTypes.INTEGER
        },
        taskId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM("New", "In Progress", "Solved", "Reassigned", "Wrong Bug")
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