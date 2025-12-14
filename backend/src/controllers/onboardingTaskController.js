
const { OnboardingTask, User } = require('../models');

exports.getAllOnboardingTasks = async (req, res) => {
  try {
    const onboardingTasks = await OnboardingTask.findAll({ include: User });
    res.json(onboardingTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOnboardingTaskById = async (req, res) => {
  try {
    const onboardingTask = await OnboardingTask.findByPk(req.params.id, { include: User });
    if (onboardingTask) {
      res.json(onboardingTask);
    } else {
      res.status(404).json({ error: 'Onboarding task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOnboardingTask = async (req, res) => {
  try {
    const { title, description, UserId } = req.body;
    const onboardingTask = await OnboardingTask.create({ title, description, UserId });
    res.status(201).json(onboardingTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOnboardingTask = async (req, res) => {
  try {
    const onboardingTask = await OnboardingTask.findByPk(req.params.id);
    if (onboardingTask) {
      const { title, description, status } = req.body;
      await onboardingTask.update({ title, description, status });
      res.json(onboardingTask);
    } else {
      res.status(404).json({ error: 'Onboarding task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOnboardingTask = async (req, res) => {
  try {
    const onboardingTask = await OnboardingTask.findByPk(req.params.id);
    if (onboardingTask) {
      await onboardingTask.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Onboarding task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
