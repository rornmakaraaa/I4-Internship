const db = require('../config/db'); // Assuming you have a db connection setup in db.js

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM usermanage');
        // Construct image URLs
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
    const { name, email, role, birthdate } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const [result] = await db.query(
            'INSERT INTO usermanage (name, email, role, birthdate, image) VALUES (?, ?, ?, ?, ?)',
            [name, email, role, birthdate, image]
        );
        res.json({ message: 'User created successfully', userId: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    const { name, email, role, birthdate } = req.body;
    const image = req.file ? req.file.filename : null;

    let query = 'UPDATE usermanage SET name = ?, email = ?, role = ?, birthdate = ?';
    const values = [name, email, role, birthdate];

    if (image) {
        query += ', image = ?';
        values.push(image);
    }

    query += ' WHERE id = ?';
    values.push(req.params.id);

    try {
        await db.query(query, values);
        res.json({ message: 'User updated successfully' });
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