// Copyright 2025 Shrikara Kaudambady
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
    const onboardingTask = await OnboardingTask.findByPk(.params.id, { include: User });
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
