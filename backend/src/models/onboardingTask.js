
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OnboardingTask = sequelize.define('OnboardingTask', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
    defaultValue: 'pending'
  }
});

module.exports = OnboardingTask;
