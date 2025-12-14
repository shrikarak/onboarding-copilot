
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const auth = require('./middleware/auth');
const onboardingTaskRoutes = require('./routes/onboardingTaskRoutes');
const knowledgeBaseArticleRoutes = require('./routes/knowledgeBaseArticleRoutes');

app.use('/api/onboarding-tasks', onboardingTaskRoutes);
app.use('/api/kb-articles', knowledgeBaseArticleRoutes);

// Admin only routes for Knowledge Base Articles
app.post('/api/kb-articles', auth(['admin']));
app.put('/api/kb-articles/:id', auth(['admin']));
app.delete('/api/kb-articles/:id', auth(['admin']));

// Admin only for creating and deleting Onboarding Tasks
app.post('/api/onboarding-tasks', auth(['admin']));
app.delete('/api/onboarding-tasks/:id', auth(['admin']));

app.get('/', (req, res) => {
  res.send('Hello from the Onboarding Copilot API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
