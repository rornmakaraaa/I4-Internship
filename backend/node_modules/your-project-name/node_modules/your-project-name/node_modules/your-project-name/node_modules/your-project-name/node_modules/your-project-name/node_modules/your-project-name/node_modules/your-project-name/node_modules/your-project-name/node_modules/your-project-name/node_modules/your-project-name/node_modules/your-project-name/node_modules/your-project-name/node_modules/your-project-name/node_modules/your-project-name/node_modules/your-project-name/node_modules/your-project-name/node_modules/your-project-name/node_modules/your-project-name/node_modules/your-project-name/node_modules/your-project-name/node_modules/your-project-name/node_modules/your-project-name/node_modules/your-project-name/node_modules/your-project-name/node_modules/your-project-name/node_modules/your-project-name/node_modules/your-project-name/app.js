const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./route/authRoutes');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
