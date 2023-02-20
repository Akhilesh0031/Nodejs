'use strict';
const {
  Model
} = require('sequelize');
const workingday = require('./workingday');
module.exports = (sequelize, DataTypes) => {
  class usersworkingday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usersworkingday.belongsTo(models.user,{foreignKey: 'userId', as: 'user'})
      usersworkingday.belongsTo(models.workingday,{foreignKey: 'workingDayId', as: 'workingday'})
    }
  }
  usersworkingday.init({
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersworkingday',
  });
  return usersworkingday;
};