'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Testcase extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Testcase.belongsTo(models.Task, { as: 'task', foreignKey: 'taskId' });
            Testcase.hasMany(models.Bug, { foreignKey: 'bugId' });
        }
    };
    Testcase.init({
        name: {
            type: DataTypes.STRING
        },
        case: {
            type: DataTypes.TEXT
        },
        taskId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM('Valid', 'Invalid')
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
        modelName: 'Testcase',
    });
    return Testcase;
};