const db = require('../config/db');

// Fetch all teams with their members
const getAllTeams = async (req, res) => {
    try {
        const [teams] = await db.query('SELECT * FROM teams');

        const teamsWithMembers = await Promise.all(teams.map(async (team) => {
            const [members] = await db.query('SELECT * FROM team_members WHERE team_id = ?', [team.id]);
            return {
                ...team,
                members: members || []
            };
        }));

        res.status(200).json(teamsWithMembers);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ message: 'Error fetching teams' });
    }
};

// Fetch members by team ID
const getTeamMembers = async (req, res) => {
    const teamId = req.params.id;
    try {
        const [members] = await db.query('SELECT * FROM team_members WHERE team_id = ?', [teamId]);

        if (members.length === 0) {
            return res.status(404).json({ error: 'No members found for this team' });
        }

        res.status(200).json(members);
    } catch (error) {
        console.error('Error fetching team members:', error);
        res.status(500).json({ error: 'Failed to fetch team members' });
    }
};

// Add a new team member
const addTeamMember = async (req, res) => {
    const teamId = req.params.id;
    const { name, role, status, gender } = req.body;

    if (!name || !role || !status || !gender) {
        return res.status(400).json({ error: 'Name, role, status, and gender are required' });
    }
    try {
        const [result] = await db.query(
            'INSERT INTO team_members (team_id, name, role, status, gender) VALUES (?, ?, ?, ?, ?)', 
            [teamId, name, role, status, gender]
        );
        const newMember = { id: result.insertId, name, role, status, gender, team_id: teamId };
        res.status(201).json(newMember);
    } catch (error) {
        console.error('Error adding member:', error);
        res.status(500).json({ error: 'Failed to add member' });
    }
};

// Update a team member
const updateTeamMember = async (req, res) => {
    const { id: teamId, memberId } = req.params;
    const { name, role, status, gender } = req.body;

    if (!name || !role || !status || !gender) {
        return res.status(400).json({ error: 'Name, role, status, and gender are required' });
    }
    try {
        const [result] = await db.query(
            'UPDATE team_members SET name = ?, role = ?, status = ?, gender = ? WHERE id = ? AND team_id = ?', 
            [name, role, status, gender, memberId, teamId]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Member not found or does not belong to this team' });
        }
        res.status(200).json({ id: memberId, name, role, status, gender });
    } catch (error) {
        console.error('Error updating member:', error);
        res.status(500).json({ error: 'Failed to update member' });
    }
};

// Delete a team member
const deleteTeamMember = async (req, res) => {
    const { id: teamId, memberId } = req.params;
    try {
        const [result] = await db.query('DELETE FROM team_members WHERE id = ? AND team_id = ?', [memberId, teamId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Member not found or does not belong to this team' });
        }
        res.status(204).send(); // No content on successful deletion
    } catch (error) {
        console.error('Error deleting member:', error);
        res.status(500).json({ error: 'Failed to delete member' });
    }
};

module.exports = {
    getAllTeams,
    getTeamMembers,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
};