const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Define the route for registration
router.post('/register', authController.register);

// Define the route for login
router.post('/login', authController.login);

module.exports = router;
