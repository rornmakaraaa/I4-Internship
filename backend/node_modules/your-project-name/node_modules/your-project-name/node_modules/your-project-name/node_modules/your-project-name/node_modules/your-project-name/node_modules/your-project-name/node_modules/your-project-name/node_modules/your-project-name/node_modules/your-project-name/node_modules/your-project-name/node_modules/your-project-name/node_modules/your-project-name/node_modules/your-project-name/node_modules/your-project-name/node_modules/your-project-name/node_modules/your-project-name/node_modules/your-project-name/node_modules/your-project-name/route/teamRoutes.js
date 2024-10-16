// route/teamRoutes.js

const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController'); // Ensure this path is correct

// Define routes
router.get('/', teamController.getAllTeams); // Route to get all teams with their members
router.get('/:id/members', teamController.getTeamMembers); // Route to get members by team ID
router.post('/:id/members', teamController.addTeamMember); // Route to add a new team member
router.put('/:id/members/:memberId', teamController.updateTeamMember); // Route to update a team member
router.delete('/:id/members/:memberId', teamController.deleteTeamMember); // Route to delete a team member

module.exports = router;