const express = require('express');             // Importing Express framework
const bodyParser = require('body-parser');       // Middleware to parse JSON bodies
const cors = require('cors');                     // Middleware for Cross-Origin Resource Sharing
require('dotenv').config();                       // Load environment variables from .env file

const authRoutes = require('./route/authRoutes'); // Importing authentication routes
const projectRoutes = require('./route/projectRoutes'); // Importing project-related routes
const teamRoutes = require('./route/teamRoutes');     // Importing team-related routes
const dashboardRoutes = require('./route/dashboardRoutes'); // Importing dashboard routes

const app = express();                            // Creating an instance of Express
const port = process.env.PORT || 8000;           // Setting the port from environment variable or defaulting to 8000

app.use(cors());                                  // Use CORS middleware
app.use(bodyParser.json());                       // Parse incoming requests with JSON payloads

// Setting up the routes
app.use('/api/auth', authRoutes);                 // Authentication routes
app.use('/api/projects', projectRoutes);          // Project-related routes
app.use('/api/teams', teamRoutes);                // Team-related routes
app.use('/api/dashboard', dashboardRoutes);       // Dashboard routes

// Starting the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
