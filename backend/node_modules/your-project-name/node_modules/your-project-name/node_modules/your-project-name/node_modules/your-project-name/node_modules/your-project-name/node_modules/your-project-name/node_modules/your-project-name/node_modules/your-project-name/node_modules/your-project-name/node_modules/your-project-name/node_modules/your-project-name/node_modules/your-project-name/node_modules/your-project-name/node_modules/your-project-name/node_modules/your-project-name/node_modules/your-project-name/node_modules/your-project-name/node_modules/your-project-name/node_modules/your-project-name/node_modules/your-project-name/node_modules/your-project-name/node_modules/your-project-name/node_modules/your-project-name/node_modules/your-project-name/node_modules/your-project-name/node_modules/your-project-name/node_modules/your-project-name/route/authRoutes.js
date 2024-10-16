const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/signup', authController.createUser);

router.post('/login', authController.login);

module.exports = router;