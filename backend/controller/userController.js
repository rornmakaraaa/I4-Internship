const db = require('../config/db');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM usermanage');
        const usersWithImageUrls = results.map(user => ({
            ...user,
            image: `${req.protocol}://${req.get('host')}/uploads/${user.image}`
        }));
        res.json(usersWithImageUrls);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { name, email, role, addeddate } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const [result] = await db.query(
            'INSERT INTO usermanage (name, email, role, addeddate, image) VALUES (?, ?, ?, ?, ?)',
            [name, email, role, addeddate, image]
        );
        const newUser = {
            id: result.insertId,
            name,
            email,
            role,
            addeddate,
            image
        };
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    const { name, email, role, addeddate } = req.body;
    const image = req.file ? req.file.filename : null;

    let query = 'UPDATE usermanage SET name = ?, email = ?, role = ?, addeddate = ?';
    const values = [name, email, role, addeddate];

    if (image) {
        query += ', image = ?';
        values.push(image);
    }

    query += ' WHERE id = ?';
    values.push(req.params.id);

    try {
        await db.query(query, values);
        const updatedUser = { id: req.params.id, name, email, role, addeddate, image };
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        await db.query('DELETE FROM usermanage WHERE id = ?', [req.params.id]);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};