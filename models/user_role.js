'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user_role.belongsTo(models.User, { foreignKey: 'userId' });
            user_role.belongsTo(models.Role, { foreignKey: 'roleId' });
        }
    };
    user_role.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Roles',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'user_role',
    });
    return user_role;
};