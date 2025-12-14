
const express = require('express');
const router = express.Router();
const knowledgeBaseArticleController = require('../controllers/knowledgeBaseArticleController');

router.get('/', knowledgeBaseArticleController.getAllKnowledgeBaseArticles);
router.get('/:id', knowledgeBaseArticleController.getKnowledgeBaseArticleById);
router.post('/', knowledgeBaseArticleController.createKnowledgeBaseArticle);
router.put('/:id', knowledgeBaseArticleController.updateKnowledgeBaseArticle);
router.delete('/:id', knowledgeBaseArticleController.deleteKnowledgeBaseArticle);

module.exports = router;
