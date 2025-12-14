
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const KnowledgeBaseArticle = sequelize.define('KnowledgeBaseArticle', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = KnowledgeBaseArticle;
