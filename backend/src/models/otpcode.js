'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OtpCode extends Model {
    static associate(models) {
      OtpCode.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }

  OtpCode.init({
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    code: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
    usedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OtpCode',
  });

  return OtpCode;
};
