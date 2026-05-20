'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thumnailcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Thumnailcard.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    duration: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    oldPrice: DataTypes.DECIMAL(10, 2),
    rating: DataTypes.DECIMAL(10, 2),
    student: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Thumnailcard',
  });
  return Thumnailcard;
};