const db = require('../config/db');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users_gp');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [user] = await db.query('SELECT * FROM users_gp WHERE id = ?', [id]);
        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email, role } = req.body;
    const profile_image = req.file ? req.file.path : null; // Handle the image file
    const dateAdded = new Date().toISOString(); // Automatically set dateAdded to current date

    try {
        const [result] = await db.query(
            'INSERT INTO users_gp (profile_image, name, email, role, dateAdded) VALUES (?, ?, ?, ?, ?)',
            [profile_image, name, email, role, dateAdded]
        );
        res.status(201).json({ id: result.insertId, profile_image, name, email, role, dateAdded });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const profile_image = req.file ? req.file.path : null; // Handle the image file
    const dateAdded = new Date().toISOString(); // Automatically set dateAdded to current date

    try {
        const [result] = await db.query(
            'UPDATE users_gp SET profile_image = ?, name = ?, email = ?, role = ?, dateAdded = ? WHERE id = ?',
            [profile_image, name, email, role, dateAdded, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ id, profile_image, name, email, role, dateAdded });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM users_gp WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};