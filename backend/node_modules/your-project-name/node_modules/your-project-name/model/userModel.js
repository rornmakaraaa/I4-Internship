const db = require('../config/db');

const findUserByUsername = async (username) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0]; // Return the first user found
};

const createUser = async (username, hashedPassword) => {
    await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
};

module.exports = {
    findUserByUsername,
    createUser
};
