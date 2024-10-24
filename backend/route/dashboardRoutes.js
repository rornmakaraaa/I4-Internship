const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboardController');

router.get('/projects/count', dashboardController.getTotalProjects);

router.get('/teams/count', dashboardController.getTotalTeams);

module.exports = router;
