const express = require('express');
const multer = require('multer');
const userController = require('../controller/userController');

const router = express.Router();

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Define routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', upload.single('image'), userController.createUser); // Handle file upload
router.put('/:id', upload.single('image'), userController.updateUser); // Handle file upload
router.delete('/:id', userController.deleteUser);

module.exports = router;