
const db = require('./models');

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');

    // Create sample users
    const user1 = await db.User.create({
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      role: 'user'
    });

    const user2 = await db.User.create({
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'admin'
    });

    // Create sample onboarding tasks
    await db.OnboardingTask.create({
      title: 'Complete HR paperwork',
      description: 'Fill out all necessary HR forms and submit them to the HR department.',
      status: 'pending',
      UserId: user1.id
    });

    await db.OnboardingTask.create({
      title: 'Set up development environment',
      description: 'Install all required software and tools for development.',
      status: 'in_progress',
      UserId: user1.id
    });

    await db.OnboardingTask.create({
      title: 'Attend welcome meeting',
      description: 'Join the team welcome meeting on Monday at 10 AM.',
      status: 'completed',
      UserId: user1.id
    });

    // Create sample knowledge base articles
    await db.KnowledgeBaseArticle.create({
      title: 'How to request time off',
      content: 'Time off requests can be submitted through the internal portal by filling out the leave request form.'
    });

    await db.KnowledgeBaseArticle.create({
      title: 'Company benefits overview',
      content: 'Our company offers comprehensive health, dental, and vision insurance plans, along with a 401k matching program.'
    });

    console.log('Sample data created successfully.');
  } catch (error) {
    console.error('Error creating sample data:', error);
  } finally {
    await db.sequelize.close();
  }
};

seed();
