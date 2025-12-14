
const express = require('express');
const router = express.Router();
const onboardingTaskController = require('../controllers/onboardingTaskController');

router.get('/', onboardingTaskController.getAllOnboardingTasks);
router.get('/:id', onboardingTaskController.getOnboardingTaskById);
router.post('/', onboardingTaskController.createOnboardingTask);
router.put('/:id', onboardingTaskController.updateOnboardingTask);
router.delete('/:id', onboardingTaskController.deleteOnboardingTask);

module.exports = router;
