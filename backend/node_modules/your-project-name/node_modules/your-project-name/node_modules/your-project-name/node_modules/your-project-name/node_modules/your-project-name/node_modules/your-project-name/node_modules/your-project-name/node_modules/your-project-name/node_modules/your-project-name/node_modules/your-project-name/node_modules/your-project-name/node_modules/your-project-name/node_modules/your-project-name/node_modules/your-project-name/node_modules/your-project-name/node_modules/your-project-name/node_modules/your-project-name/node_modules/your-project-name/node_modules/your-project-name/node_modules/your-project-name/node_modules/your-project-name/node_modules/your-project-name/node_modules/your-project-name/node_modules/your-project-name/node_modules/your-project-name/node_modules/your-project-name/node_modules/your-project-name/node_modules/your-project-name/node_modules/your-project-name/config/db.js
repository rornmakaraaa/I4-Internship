const mysql = require('mysql2');
require('dotenv').config(); // Ensure you have dotenv installed and configured

// Create a connection to the database
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'service-db' // Updated to your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Database connected successfully');
});

module.exports = db;
