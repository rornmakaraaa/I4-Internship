const bcrypt = require('bcrypt');
const db = require('../config/db');

exports.createUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query('INSERT INTO user (Username, Password) VALUES (?, ?)', [username, hashedPassword]);
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, message: error.message || 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
    try {
        const [rows] = await db.query('SELECT * FROM user WHERE Username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const user = rows[0];
        const match = await bcrypt.compare(password, user.Password); // Use user.Password with uppercase 'P'

        // Check if the passwords match
        if (match) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: error.message || 'Internal server error' });
    }
};