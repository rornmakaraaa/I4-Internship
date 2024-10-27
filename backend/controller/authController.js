const bcrypt = require('bcrypt');
const db = require('../config/db');

// Create user in the database
exports.createUser = async (req, res) => {
    const { username, password } = req.body;

    // Check for missing username or password
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);
        // Insert user into the 'user' table
        await db.query('INSERT INTO user (Username, Password) VALUES (?, ?)', [username, hashedPassword]);
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error); // Log the error for debugging
        res.status(500).json({ success: false, message: error.message || 'Internal server error' });
    }
};

// User login handler
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Check for missing username or password
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    try {
        // Query the database to find the user by username
        const [rows] = await db.query('SELECT * FROM user WHERE Username = ?', [username]);

        // Check if the user exists
        if (rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const user = rows[0]; // Get the first user returned from the query

        // Compare the input password with the stored hashed password
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