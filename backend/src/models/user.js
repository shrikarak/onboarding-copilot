
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user'
  }
});

module.exports = User;
