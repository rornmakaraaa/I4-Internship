const express = require('express');
const { 
  getProjects, 
  getProject, 
  createProject, 
  updateProject, 
  deleteProject, 
  countCompletedProjectsByType 
} = require('../controller/projectController');

const router = express.Router();

// CRUD routes for projects
router.get('/', getProjects); // Fetch all projects
router.get('/:id', getProject); // Fetch a single project
router.post('/', createProject); // Create a new project
router.put('/:id', updateProject); // Update a project
router.delete('/:id', deleteProject); // Delete a project

// New route to count completed projects by type
router.get('/completed/count', countCompletedProjectsByType); // Count completed projects by type

module.exports = router;
