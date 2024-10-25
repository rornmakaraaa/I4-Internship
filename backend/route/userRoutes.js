const express = require('express');
const multer = require('multer');
const userController = require('../controller/userController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Define routes for user management
router.get('/usermanage', userController.getUsers); // Get all users
router.post('/usermanage', upload.single('image'), userController.createUser); // Create a new user
router.put('/usermanage/:id', upload.single('image'), userController.updateUser); // Update a user
router.delete('/usermanage/:id', userController.deleteUser); // Delete a user

module.exports = router;