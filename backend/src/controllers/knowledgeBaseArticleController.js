
const { KnowledgeBaseArticle } = require('../models');
const { Op } = require('sequelize');

exports.getAllKnowledgeBaseArticles = async (req, res) => {
  try {
    const { search } = req.query;
    const where = {};
    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { content: { [Op.iLike]: `%${search}%` } }
      ];
    }
    const knowledgeBaseArticles = await KnowledgeBaseArticle.findAll({ where });
    res.json(knowledgeBaseArticles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getKnowledgeBaseArticleById = async (req, res) => {
  try {
    const knowledgeBaseArticle = await KnowledgeBaseArticle.findByPk(req.params.id);
    if (knowledgeBaseArticle) {
      res.json(knowledgeBaseArticle);
    } else {
      res.status(404).json({ error: 'Knowledge base article not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createKnowledgeBaseArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const knowledgeBaseArticle = await KnowledgeBaseArticle.create({ title, content });
    res.status(201).json(knowledgeBaseArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateKnowledgeBaseArticle = async (req, res) => {
  try {
    const knowledgeBaseArticle = await KnowledgeBaseArticle.findByPk(req.params.id);
    if (knowledgeBaseArticle) {
      const { title, content } = req.body;
      await knowledgeBaseArticle.update({ title, content });
      res.json(knowledgeBaseArticle);
    } else {
      res.status(404).json({ error: 'Knowledge base article not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteKnowledgeBaseArticle = async (req, res) => {
  try {
    const knowledgeBaseArticle = await KnowledgeBaseArticle.findByPk(req.params.id);
    if (knowledgeBaseArticle) {
      await knowledgeBaseArticle.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Knowledge base article not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
