'use strict';
const {
  Model,
  TEXT,
  STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_listings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job_listings.init({
    company_name: DataTypes.STRING,
    hr_name: DataTypes.STRING,
    title: DataTypes.STRING,
    emp_type: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    salary_min: DataTypes.DOUBLE
  }, {
    sequelize,  
    modelName: 'Job_listings',
  });
  return Job_listings;
};