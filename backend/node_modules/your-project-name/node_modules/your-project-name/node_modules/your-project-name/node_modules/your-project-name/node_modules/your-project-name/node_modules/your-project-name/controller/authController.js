const bcrypt = require('bcrypt');
const db = require('../config/db');

const saltRounds = 10; // Adjust salt rounds as needed

// Registration handler
exports.register = async (req, res) => {
  const { username, password, roleId = null, isActive = 1 } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  try {
    // Check if the username already exists
    const [existingUser] = await db.promise().query('SELECT * FROM users WHERE Username = ?', [username]);

    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, saltRounds);

    // Insert new user with hashed password
    const [result] = await db.promise().query('INSERT INTO users (Username, Password, RoleId, IsActive) VALUES (?, ?, ?, ?)', [username, hash, roleId, isActive]);

    if (result.affectedRows === 1) {
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } else {
      res.status(500).json({ success: false, message: 'Registration failed' });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Login handler
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  try {
    // Find the user by username
    const [rows] = await db.promise().query('SELECT * FROM users WHERE Username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const user = rows[0];

    // Compare the hashed password
    const match = await bcrypt.compare(password, user.Password);

    if (match) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
