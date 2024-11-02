const db = require('../config/db');

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const [projects] = await db.query('SELECT * FROM projects');
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// Get a single project by ID
exports.getProject = async (req, res) => {
  try {
    const [project] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
    if (project.length === 0) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json(project[0]);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, type, status, team, description } = req.body;
    const [result] = await db.query(
      'INSERT INTO projects (title, type, status, team, description) VALUES (?, ?, ?, ?, ?)', 
      [title, type, status, JSON.stringify(team), description]
    );
    const newProject = { id: result.insertId, title, type, status, team, description };
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({ error: 'Failed to create project' });
  }
};

// Update an existing project
exports.updateProject = async (req, res) => {
  try {
    const { title, type, status, team, description } = req.body;
    const [result] = await db.query(
      'UPDATE projects SET title = ?, type = ?, status = ?, team = ?, description = ? WHERE id = ?', 
      [title, type, status, JSON.stringify(team), description, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json({ id: req.params.id, title, type, status, team, description });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).json({ error: 'Failed to update project' });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM projects WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
};

// Count completed projects by type
exports.countCompletedProjectsByType = async (req, res) => {
  try {
    const [results] = await db.query(`
      SELECT type, COUNT(*) AS count
      FROM projects
      WHERE status = 'Completed'
      GROUP BY type
    `);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error counting completed projects:', error);
    res.status(500).json({ error: 'Failed to count completed projects' });
  }
};
