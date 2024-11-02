const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./route/authRoutes');
const projectRoutes = require('./route/projectRoutes');
const teamRoutes = require('./route/teamRoutes');
const dashboardRoutes = require('./route/dashboardRoutes');
const userRoutes = require('./route/userRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});