const db = require('../config/db'); // Update this path if necessary

const dashboardController = {
    // Get the total number of projects
    getTotalProjects: async (req, res) => {
        try {
            const [rows] = await db.query('SELECT COUNT(*) AS total_projects FROM projects');
            res.json(rows[0]);
        } catch (err) {
            console.error('Error fetching total projects:', err);
            return res.status(500).json({ error: 'Database error occurred' });
        }
    },

    // Get the total number of teams
    getTotalTeams: async (req, res) => {
        try {
            const [rows] = await db.query('SELECT COUNT(*) AS total_teams FROM teams');
            res.json(rows[0]);
        } catch (err) {
            console.error('Error fetching total teams:', err);
            return res.status(500).json({ error: 'Database error occurred' });
        }
    },

    // Additional dashboard-related stats can be added here
};

module.exports = dashboardController;
