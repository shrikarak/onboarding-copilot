
const sequelize = require('../config/database');
const User = require('./user');
const OnboardingTask = require('./onboardingTask');
const KnowledgeBaseArticle = require('./knowledgeBaseArticle');

User.hasMany(OnboardingTask);
OnboardingTask.belongsTo(User);

const db = {
  sequelize,
  User,
  OnboardingTask,
  KnowledgeBaseArticle
};

module.exports = db;
